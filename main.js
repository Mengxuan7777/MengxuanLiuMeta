// Flip Cards
const btnToBacks = document.querySelectorAll(".right");
const btnToFronts = document.querySelectorAll(".left");

function flipToBack(event) {
    const cardId = event.currentTarget.getAttribute('data-arrowid');
    const cardFront = document.getElementById(`cardFront${cardId}`);
    const cardBack = document.getElementById(`cardBack${cardId}`);
    cardFront.classList.toggle('flipped');
    cardBack.classList.toggle('flipped');
}

function flipToFront(event) {
    const cardId = event.currentTarget.getAttribute('data-arrowid');
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
const blogs = document.querySelectorAll('.blog');
const blogModals = document.querySelectorAll('.blogModal');
const closeBtns =  document.querySelectorAll('.close');

function blogModalOpen(event) {
    const modalId = event.currentTarget.getAttribute('data-blogid');
    console.log(modalId);
    const blogModal = document.getElementById(`blogModal${modalId}`);
    console.log('modal here');
    blogModal.style.display = 'block';
}

blogs.forEach((blog) => {
    blog.addEventListener('click', blogModalOpen);
});

function blogModalClose(event) {
    const modalId = event.target.getAttribute('data-closeBtnid');
    console.log(modalId);
    const blogModal = document.getElementById(`blogModal${modalId}`);
    blogModal.style.display = 'none';
}

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', blogModalClose);
});

// Open backModals
const projects = document.querySelectorAll('.project');
const projectModals = document.querySelectorAll('.projectModal');
// const closeBtns =  document.querySelectorAll('.close');

function projectModalOpen(event) {
    const modalId = event.currentTarget.getAttribute('data-projectid');
    console.log(modalId);
    const projectModal = document.getElementById(`projectModal${modalId}`);
    console.log('modal here');
    projectModal.style.display = 'block';
}

projects.forEach((project) => {
    project.addEventListener('click', projectModalOpen);
});

function projectModalClose(event) {
    const modalId = event.target.getAttribute('data-closeBtnid');
    console.log(modalId);
    const projectModal = document.getElementById(`projectModal${modalId}`);
    projectModal.style.display = 'none';
}

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', projectModalClose);
});