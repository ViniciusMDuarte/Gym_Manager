// SELECIONAR A CLASSE MODAL OVERLAY

const modalOverlay = document.querySelector(".modal-overlay");


// SELECIONAR A CLASSE MODAL OVERLAY

const cards = document.querySelectorAll(".cards .card")

 for(let card of cards) {
     card.addEventListener("click", function() {
     const videoId = card.getAttribute("id");
     window.location.href= `/video?id=${videoId}`
     })
 }


 // SELECIONAR A CLASSE MODAL OVERLAY


const cards_conteudo = document.querySelectorAll(".cards-conteudo .card-conteudo")

 for(let cardConteudo of cards_conteudo) {
    cardConteudo.addEventListener("click", function() {
     const videoId = cardConteudo.getAttribute("id");
     modalOverlay.classList.add("active")
     modalOverlay.querySelector("iframe").src = `https:/rocketseat.com.br/${videoId}`;

     })
 }


 document.querySelector(".close-modal").addEventListener("click", function(){
     modalOverlay.classList.remove("active")
     modalOverlay.querySelector("iframe").src = ""
 })


