gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
    const loaderTimeline = gsap.timeline();
    loaderTimeline
        .to(".loader-line div", {
            width: "100%",
            duration: 1.4,
            ease: "power2.inOut"
        })
        .to(".loader-heart", {
            scale: 1.2,
            duration: .3,
            yoyo: true,
            repeat: 1
        })
        .to(".loader", {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut"
        })
        .from(".hero-title .title-line", {
            y: 80,
            opacity: 0,
            stagger: .12,
            duration: 1,
            ease: "power4.out"
        }, "-=.4")
        .from(".hero-item", {
            y: 30,
            opacity: 0,
            stagger: .12,
            duration: .8,
            ease: "power3.out"
        }, "-=.5")
        .from(".hero-photo", {
            scale: .8,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "-=1");
});

const cursorDot =
    document.querySelector(".cursor-dot");
const cursorRing =
    document.querySelector(".cursor-ring");
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: .08
    });
});

function cursorAnimation() {
    ringX += (mouseX - ringX) * .12;
    ringY += (mouseY - ringY) * .12;
    gsap.set(cursorRing, {
        x: ringX,
        y: ringY
    });
    requestAnimationFrame(cursorAnimation);
}
cursorAnimation();
document.querySelectorAll(
    "a, button, .teacher-card, .hero-photo"
).forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursorRing.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
        cursorRing.classList.remove("hover");
    });

});
document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("mousemove", function (e) {
        const rect =
            this.getBoundingClientRect();
        const x =
            e.clientX -
            rect.left -
            rect.width / 2;
        const y =
            e.clientY -
            rect.top -
            rect.height / 2;
        gsap.to(this, {
            x: x * .18,
            y: y * .18,
            duration: .4,
            ease: "power3.out"
        });
    });

    element.addEventListener("mouseleave", function () {
        gsap.to(this, {
            x: 0,
            y: 0,
            duration: .6,
            ease: "elastic.out(1,.3)"
        });
    });
});

window.addEventListener("scroll", () => {
    const navbar =
        document.querySelector(".navbar");
    if (window.scrollY > 70) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");

    }
});

gsap.to(".star-one", {
    y: -20,
    rotation: 20,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".star-two", {
    y: 20,
    rotation: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,

});

gsap.to(".heart-one", {
    y: -25,
    rotation: 15,
    duration: 3,
    repeat: -1,
    yoyo: true,
});

gsap.to(".heart-two", {
    y: 30,
    rotation: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,

});

gsap.to(".flower-one", {
    rotation: 20,
    y: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".hero-photo", {
    y: 80,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to(".visual-ring", {
    rotation: 45,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }

});

const heroVisual =
    document.querySelector(".hero-visual");

heroVisual.addEventListener("mousemove", (e) => {
    const rect =
        heroVisual.getBoundingClientRect();
    const x =
        (e.clientX - rect.left) /
        rect.width -
        .5;
    const y =
        (e.clientY - rect.top) /
        rect.height -
        .5;
    gsap.to(".hero-photo", {
        x: x * 15,
        y: y * 15,
        duration: .5,
        ease: "power2.out"
    });
    gsap.to(".floating-card", {
        x: x * -20,
        y: y * -20,
        duration: .7,
        ease: "power2.out"
    });
});
heroVisual.addEventListener("mouseleave", () => {
    gsap.to(
        ".hero-photo, .floating-card",
        {
            x: 0,
            y: 0,
            duration: .7,
            ease: "power3.out"
        }
    );
});

gsap.utils.toArray(".reveal-left")
    .forEach((element) => {
        gsap.from(element, {
            x: -100,
            opacity: 0,
            duration: 1.2,
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
    });

gsap.utils.toArray(".reveal-right")
    .forEach((element) => {
        gsap.from(element, {
            x: 100,
            opacity: 0,
            duration: 1.2,
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });

    });

gsap.utils.toArray(".section-heading")
    .forEach((heading) => {
        gsap.from(heading.children, {
            y: 40,
            opacity: 0,
            stagger: .12,
            duration: .8,
            scrollTrigger: {
                trigger: heading,
                start: "top 85%"
            }
        });
    });

gsap.from(".teacher-card", {
    y: 80,
    opacity: 0,
    scale: .95,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".teachers-grid",
        start: "top 80%"
    }
});

document.querySelectorAll(".teacher-card")
    .forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect =
                card.getBoundingClientRect();
            const x =
                e.clientX - rect.left;
            const y =
                e.clientY - rect.top;
            const centerX =
                rect.width / 2;
            const centerY =
                rect.height / 2;
            const rotateX =
                (y - centerY) / 18;
            const rotateY =
                (centerX - x) / 18;
            gsap.to(card, {
                rotateX,
                rotateY,
                transformPerspective: 900,
                duration: .3
            });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: .7,
                ease: "elastic.out(1,.3)"
            });
        });
    });
const counters =
    document.querySelectorAll(".counter");

counters.forEach((counter) => {
    const target =
        Number(counter.dataset.target);
    const obj = {
        value: 0
    };
    gsap.to(obj, {
        value: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            once: true
        },

        onUpdate: () => {
            counter.textContent =
                Math.floor(obj.value);
            if (target === 1000 &
                obj.value >= 1000) {
                counter.textContent = "1K+";
            }
        }
    });
});
const teacherCards =
    document.querySelectorAll(".teacher-card");
const modal =
    document.querySelector("#teacherModal");
const modalImage =
    document.querySelector("#modalImage");
const modalName =
    document.querySelector("#modalName");
const modalSubject =
    document.querySelector("#modalSubject");
const modalMessage =
    document.querySelector("#modalMessage");
const modalClose =
    document.querySelector("#modalClose");
teacherCards.forEach((card) => {
    card.addEventListener("click", () => {
        const name =
            card.dataset.name;
        const subject =
            card.dataset.subject;
        const image =
            card.dataset.image;
        const message =
            card.dataset.message;
        modalImage.src = image;
        modalName.textContent = name;
        modalSubject.textContent = subject;
        modalMessage.textContent = message;
        modal.classList.add("active");
        document.body.classList.add("modal-open");
        gsap.from(".modal-box", {
            scale: .8,
            opacity: 0,
            y: 40,
            duration: .5,
            ease: "back.out(1.5)"
        });
    });
});

function closeModal() {
    gsap.to(".modal-box", {
        scale: .9,
        opacity: 0,
        duration: .25,
        onComplete: () => {
            modal.classList.remove("active");
            document.body.classList.remove("modal-open");
            gsap.set(".modal-box", {
                clearProps: "all"
            });
        }
    });
}
modalClose.addEventListener(
    "click",
    closeModal
);
document.querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeModal
    );

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" &&
        modal.classList.contains("active")) {
        closeModal();
    }
});
const messages = [
    "Thank you for believing in us before we learned to believe in ourselves.",
    "A good teacher teaches. A great teacher inspires. Thank you for being both.",
    "Your lessons may end in the classroom, but their impact lasts a lifetime.",
    "Thank you for turning every mistake into an opportunity to learn.",
    "You didn't just teach subjects — you taught us how to face life.",
    "Behind every confident student is a teacher who once believed in them.",
    "Your patience became our confidence. Your guidance became our strength.",
    "Some teachers leave footprints on paper. Great teachers leave footprints on hearts.",
    "Thank you for making learning feel like discovering something beautiful.",
    "We may forget the lessons, but we will never forget how you made us feel."
];

const generatedMessage =
    document.querySelector("#generatedMessage");

const generateButton =
    document.querySelector("#generateMessage");

function generateRandomMessage() {
    const randomIndex =
        Math.floor(
            Math.random() * messages.length
        );
    const newMessage =
        messages[randomIndex];
    gsap.to(generatedMessage, {
        opacity: 0,
        y: 15,
        duration: .2,
        onComplete: () => {
            generatedMessage.textContent =
                newMessage;
            gsap.to(generatedMessage, {
                opacity: 1,
                y: 0,
                duration: .5,
                ease: "power3.out"
            });
        }
    });
}
generateButton.addEventListener(
    "click",
    generateRandomMessage
);
const surpriseBtn =
    document.querySelector("#surpriseBtn");
surpriseBtn.addEventListener("click", () => {
    generateRandomMessage();
    document
        .querySelector("#memories")
        .scrollIntoView({
            behavior: "smooth"
        });
});

const typingElement = document.querySelector("#typingText");

const typingMessages = [
    "Thank you for believing in us.",
    "Thank you for your patience.",
    "Thank you for inspiring us.",
    "Thank you for never giving up on us.",
    "Thank you for making a difference."
];

let typingIndex = 0;
let charIndex = 0;
let deleting = false;
function typeWriter() {
    const current =
        typingMessages[typingIndex];
    if (!deleting) {
        typingElement.textContent =
            current.substring(
                0,
                charIndex + 1
            );
        charIndex++;
        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeWriter, 1800);
            return;
        }

    } else {
        typingElement.textContent =
            current.substring(
                0,
                charIndex - 1
            );
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            typingIndex++;
            if (
                typingIndex >=
                typingMessages.length
            ) {
                typingIndex = 0;
            }
        }
    }
    setTimeout(
        typeWriter,
        deleting ? 40 : 65
    );
}

setTimeout(typeWriter, 1500);

gsap.to(".final-heart", {
    scale: 1.12,
    duration: 1.1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".result-heart", {
    y: -5,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

let lastParticleTime = 0;
window.addEventListener("mousemove", (e) => {

    const now = Date.now();

    if (now - lastParticleTime < 80) {
        return;
    }

    lastParticleTime = now;


    const particle =
        document.createElement("span");

    particle.textContent =
        Math.random() > .5 ? "✦" : "♥";


    particle.style.position =
        "fixed";

    particle.style.left =
        e.clientX + "px";

    particle.style.top =
        e.clientY + "px";

    particle.style.pointerEvents =
        "none";

    particle.style.zIndex =
        "9999";

    particle.style.fontSize =
        Math.random() * 8 + 7 + "px";

    particle.style.color =
        Math.random() > .5
            ? "#e99bb8"
            : "#d5ae63";


    document.body.appendChild(particle);


    gsap.to(particle, {

        y: -40 - Math.random() * 30,

        x:
            (Math.random() - .5) * 40,

        opacity: 0,

        scale: 0,

        duration: .8,

        ease: "power2.out",

        onComplete: () => {

            particle.remove();

        }

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

    });
    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

        });

    });
    document.addEventListener("click", (e) => {
        if (
            !navLinks.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        }
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 999) {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        }

    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);
});