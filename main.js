// Flip Cards
const btnToBacks = document.querySelectorAll(".right");
const btnToFronts = document.querySelectorAll(".left");

function flipToBack(event) {
    const cardId = event.target.getAttribute('data-cardid');
    const cardFront = document.getElementById(`cardFront${cardId}`);
    const cardBack = document.getElementById(`cardBack${cardId}`);
    cardFront.classList.toggle('flipped');
    cardBack.classList.toggle('flipped');
}

function flipToFront(event) {
    const cardId = event.target.getAttribute('data-cardid');
    const cardFront = document.getElementById(`cardFront${cardId}`);
    const cardBack = document.getElementById(`cardBack${cardId}`);
    cardFront.classList.toggle('flipped');
    cardBack.classList.toggle('flipped');
}

    btnToBacks.forEach(btn => {
        console.log(btn)
        btn.addEventListener('click', flipToBack);
    })
    
    btnToFronts.forEach(btn => {
        btn.addEventListener('click', flipToFront);
    })

// Open Modals
const cardF = document.querySelector('.cardFront')
const frontModal = document.querySelector('.frontModal')
const closeBtn =  document.querySelector('.close')

function modalOpen(event){
    console.log('modal here')
    frontModal.style.display = 'block'

}
function modalClose(event){
    frontModal.style.display = 'none'
}
    
    cardF.addEventListener('click', modalOpen)
    closeBtn.addEventListener('click',modalClose)

