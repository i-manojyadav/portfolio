// TAB

let tabBtns = document.querySelectorAll(".tabBtn");
let tabContents = document.querySelectorAll(".tabContent");

tabBtns.forEach(button => {
    button.addEventListener("click", () => {
        tabBtns.forEach(btn => btn.classList.remove("active"));

        tabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        button.nextElementSibling.classList.add("active");
    });
});

// THEME MODE

const lightMode = document.querySelector(".light-mode");

lightMode.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});