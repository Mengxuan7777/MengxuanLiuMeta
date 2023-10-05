const btnToBacks = document.querySelector(".right");
const btnToFronts = document.querySelector(".left");

const card = document.querySelector('.cardFront')
const frontModal = document.querySelector('.frontModal')
const closeBtn =  document.querySelector('.close')

function flipToBack(event) {
    console.log('i am clicked')
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

    btnToBacks.addEventListener('click', flipToBack);

    btnToFronts.addEventListener('click', flipToFront);

    function modalFn(event){
        console.log('modal here')
        frontModal.style.display = 'block'

    }
    function closeFn(event){
        frontModal.style.display = 'none'

    }

    card.addEventListener('click', modalFn)
    closeBtn.addEventListener('click',closeFn)


// function flipToFront() {
//   cardFront.classList.toggle('flipped')
//   cardFont.classList.toggle('flipped')
// }

// const front = document.getElementById("front")
// const back = document.getElementById("back")
// // const btn = document.getElementById("flipBtn")
// const btnToBack = document.getElementById("btnToBack")
// const btnToFront = document.getElementById("btnToFront")

// function flipToBack() {
//     cardFont.classList.toggle('flipped')
//     cardBack.classList.toggle('flipped')
// }

// function flipToFront() {
//   cardFont.classList.toggle('flipped')
//   cardFont.classList.toggle('flipped')
// }

// btnToBack.addEventListener('click', flipToBack)
// btnToFront.addEventListener('click', flipToFront)

// // Get all the frontmodals
// const frontModals = document.querySelectorAll(".frontModal");

// // Get all the cardFront
// const figures = document.querySelectorAll(".cardFront figure");

// // Add a click event listener to every frontmodals
// figures.forEach(figure => {
//     figure.addEventListener('click', function() {
//         const frontModalId = this.getAttribute('id');
//         const frontModal = document.getElementById(frontModalId);
//         frontModal.style.display = "block";
//     });
// });

// // Close modal when clicking on the overlay (outside the modal content)
// modals.forEach(modal => {
//     modal.onclick = function() {
//         modal.style.display = "none";
//     }

//     const content = modal.querySelector(".modal-content");
//     content.onclick = function(event) {
//         event.stopPropagation(); // Prevents the event from reaching the modal overlay
//     }
// });


// const modal = document.getElementById("frontModal");
// const closeBtn = document.querySelector(".close");

// // Open the modal when the card is clicked
// document.querySelector('.cardFront').addEventListener('click', function() {
//   modal.style.display = "block";
// });

// // Close the modal when the "X" is clicked
// closeBtn.addEventListener('click', function() {
//   modal.style.display = "none";
// });
