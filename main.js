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

// Open frontModals
const cardFronts = document.querySelectorAll('.cardFront');
const frontModals = document.querySelectorAll('.frontModal');
const closeBtns =  document.querySelectorAll('.close');

function modalOpen(event) {
    const modalId = event.target.getAttribute('data-cardfrontid');
    console.log(modalId);
    const frontModal = document.getElementById(`frontModal${modalId}`);
    console.log('modal here')
    frontModal.style.display = 'block';
}

cardFronts.forEach((cardFront) => {
    cardFront.addEventListener('click', modalOpen);
});

function modalClose(event) {
    const modalId = event.target.getAttribute('data-closeBtnid');
    console.log(modalId);
    const frontModal = document.getElementById(`frontModal${modalId}`);
    frontModal.style.display = 'none';
}

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', modalClose);
});

