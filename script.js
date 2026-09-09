/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {
    const nav = document.getElementById("navLinks");

    if (nav) {
        nav.classList.toggle("active");
    }
}


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {

        const nav = document.getElementById("navLinks");

        if (nav) {
            nav.classList.remove("active");
        }

    });
});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".reveal, .section-heading, .skill-card, .project, .certificate"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});


/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", event => {

    if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    }

    if (cursorDot) {
        cursorDot.style.left = `${event.clientX}px`;
        cursorDot.style.top = `${event.clientY}px`;
    }

});


/* =========================
   CURSOR HOVER
========================= */

document.querySelectorAll(
    "a, button, .skill-card, .project-visual"
).forEach(element => {

    element.addEventListener("mouseenter", () => {

        if (cursor) {
            cursor.style.width = "60px";
            cursor.style.height = "60px";
        }

    });

    element.addEventListener("mouseleave", () => {

        if (cursor) {
            cursor.style.width = "35px";
            cursor.style.height = "35px";
        }

    });

});


/* =========================
   HERO PARALLAX
========================= */

const heroVisual = document.querySelector(".hero-visual");

document.addEventListener("mousemove", event => {

    if (!heroVisual || window.innerWidth < 950) {
        return;
    }

    const x =
        (window.innerWidth / 2 - event.clientX) / 50;

    const y =
        (window.innerHeight / 2 - event.clientY) / 50;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================
   PROJECT 3D EFFECT
========================= */

document.querySelectorAll(".project-visual").forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 950) {
            return;
        }

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -8;

        const rotateY =
            ((x / rect.width) - 0.5) * 8;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

});


/* =========================
   NAVBAR BACKGROUND
========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 7, 11, 0.92)";

    } else {

        navbar.style.background =
            "rgba(5, 7, 11, 0.65)";

    }

});


/* =========================
   HERO TITLE EFFECT
========================= */

const heroTitle =
    document.querySelector(".hero-title");

if (heroTitle) {

    heroTitle.addEventListener("mouseenter", () => {

        heroTitle.style.transform =
            "translateX(5px)";

    });


    heroTitle.addEventListener("mouseleave", () => {

        heroTitle.style.transform =
            "translateX(0)";

    });

}