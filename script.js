//MOBILE MENU
function toggleMenu() {
    const menu = document.querySelector(".nav-link");
    menu.classList.toggle("active");
}

//CONTACT FORM
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subjec").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage").value;

    if (
        name === "" ||
        email === "" ||
        subject ==="" ||
        message === "" 
    ) {
        formMessage.textContent =
        "please fill in all fields.";

        formMessage.style.color = "red";
        
        return;
    }
    formMessage.textContent =
    "Message sent successfully!";

    formMessage.style.color = "#00d084";

    contactForm.reset();
}); 
