const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});
// ... (your existing JavaScript code) ...

// Show or hide the file upload section
document.getElementById("upload-link").addEventListener("click", () => {
    const uploadSection = document.querySelector(".upload-section");
    uploadSection.classList.toggle("show-upload-section");
});

// Handle file upload when the "Upload My Files" button is clicked
document.getElementById("upload-files-btn").addEventListener("click", () => {
    const fileUploadInput = document.getElementById("file-upload-input");
    fileUploadInput.click(); // Trigger the file input
});

// ... (your existing JavaScript code) ...
