// ===== Sticky Header =====

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.padding = "15px 8%";
        header.style.background = "#ffffff";
    } else {
        header.style.padding = "20px 8%";
    }
});


// ===== Active Navigation =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===== Scroll Animation =====

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});


// ===== Image Popup =====

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.left = "0";
        popup.style.top = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,.85)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.cursor = "pointer";
        popup.style.zIndex = "9999";

        popup.innerHTML = `
            <img src="${img.src}"
            style="
            max-width:90%;
            max-height:90%;
            border-radius:15px;
            box-shadow:0 10px 40px rgba(0,0,0,.5);
            ">
        `;

        document.body.appendChild(popup);

        popup.onclick = () => popup.remove();

    });

});