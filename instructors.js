const fs = require('fs')
const data = require('./data.json')

exports.show = function(req, res) {
    // req.params.id
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        
        return instructor.id == id

    })
    
    if(!foundInstructor) {

        return res.send('Instructor notfound')
    }

    const instructor = {
        ...foundInstructor,
        age: "",
        gender: "",
        services: foundInstructor.services.split(','),
        birth: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.birth),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at),
    }

       return res.render('instructors/show', { instructor: instructor })
}
// create
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields !')
        }
    }

    let { avatar_url, birth, name, type_class, scholling, services, gender } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)


    data.instructors.push( {
        id,
        avatar_url,
        name,
        gender,
        birth,
        type_class,
        scholling,
        services,
        created_at,
    })


    fs.writeFile('data.json', JSON.stringify(data, null, 2 ), function(err) {
        if(err) return res.send('Write fille error')

        return res.redirect('/instructors')
    } )

    // return res.send(req.body)
}

