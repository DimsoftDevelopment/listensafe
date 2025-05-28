const burgerButton = document.querySelector(".burger");
const headerList = document.querySelector(".header-list");
const contactUsButton = document.getElementById("contact-us-button");

contactUsButton.addEventListener("click", () => {
    const blockSix = document.getElementById("contact-us");
    blockSix.scrollIntoView({ behavior: "smooth" });
});

burgerButton.addEventListener("click", () => {
    headerList.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".menu a, .header-items a");
    navLinks.forEach(link => {
        const targetId = link.getAttribute("href").substring(1);
        if (targetId === "services" || targetId === "contact-us") {
            link.addEventListener("click", e => {
                e.preventDefault();
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            });
        }
    });
});
