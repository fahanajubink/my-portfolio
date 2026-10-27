/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 2600);

});


/* ================= CHARACTER SCROLL MOTION ================= */

const character =
    document.getElementById("character");

let ticking = false;

function characterScroll() {

    const scrollY = window.scrollY;

    /*
        Character actually moves with the page scroll.
        It doesn't stay completely fixed.
    */

    const moveX =
        Math.sin(scrollY * 0.008) * 35;

    const moveY =
        Math.sin(scrollY * 0.012) * 20;

    const rotate =
        Math.sin(scrollY * 0.006) * 5;

    const scale =
        1 + Math.min(scrollY / 5000, .08);

    character.style.transform =
        `translate3d(${moveX}px, ${moveY}px, 0)
         rotate(${rotate}deg)
         scale(${scale})`;

    ticking = false;
}

window.addEventListener("scroll", () => {

    if (!ticking) {

        window.requestAnimationFrame(
            characterScroll
        );

        ticking = true;
    }

});


/* ================= MOUSE PARALLAX ================= */

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - .5);

    const y =
        (event.clientY / window.innerHeight - .5);

    const moveX = x * 25;
    const moveY = y * 20;

    character.style.marginLeft =
        `${moveX}px`;

    character.style.marginTop =
        `${moveY}px`;

});


/* ================= REVEAL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },
        {
            threshold: .15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= SKILL SYSTEM ================= */

const skills = {

    java: {

        number: "01 / SKILL",

        icon: "☕",

        name: "JAVA",

        title: "JAVA DEVELOPMENT",

        text:
            "Object-oriented programming, application development, problem solving and Java based academic projects.",

        tags:
            ["JAVA", "OOP", "LOGIC"]

    },

    python: {

        number: "02 / SKILL",

        icon: "🐍",

        name: "PYTHON",

        title: "PYTHON PROGRAMMING",

        text:
            "Programming fundamentals, logical thinking, problem solving and developing small applications using Python.",

        tags:
            ["PYTHON", "PROGRAMMING", "LOGIC"]

    },

    cpp: {

        number: "03 / SKILL",

        icon: "⚙️",

        name: "C++",

        title: "C++ & DSA",

        text:
            "C++ programming fundamentals with focus on data structures, algorithms and problem solving.",

        tags:
            ["C++", "DSA", "ALGORITHMS"]

    },

    web: {

        number: "04 / SKILL",

        icon: "🌐",

        name: "WEB",

        title: "WEB DEVELOPMENT",

        text:
            "Creating responsive interfaces using HTML, CSS and JavaScript with a focus on modern visual experiences.",

        tags:
            ["HTML", "CSS", "JAVASCRIPT"]

    },

    uiux: {

        number: "05 / SKILL",

        icon: "🎨",

        name: "UI/UX",

        title: "UI / UX DESIGN",

        text:
            "Designing modern interfaces, layouts and visual concepts using creative design tools.",

        tags:
            ["FIGMA", "CANVA", "DESIGN"]

    },

    database: {

        number: "06 / SKILL",

        icon: "🗄️",

        name: "DATABASE",

        title: "DATABASE MANAGEMENT",

        text:
            "Working with structured data and database concepts, including MySQL for academic projects.",

        tags:
            ["MYSQL", "DATABASE", "CRUD"]

    },

    soft: {

        number: "07 / SKILL",

        icon: "⚡",

        name: "SOFT",

        title: "SOFT SKILLS",

        text:
            "Communication, teamwork, creativity, adaptability, learning mindset and collaborative problem solving.",

        tags:
            ["TEAMWORK", "CREATIVITY", "COMMUNICATION"]

    }

};


const skillButtons =
    document.querySelectorAll(".skill-btn");

const skillIcon =
    document.getElementById("skillIcon");

const skillName =
    document.getElementById("skillName");

const skillNumber =
    document.getElementById("skillNumber");

const skillTitle =
    document.getElementById("skillTitle");

const skillText =
    document.getElementById("skillText");

const skillTags =
    document.getElementById("skillTags");


skillButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selected =
            button.dataset.skill;

        const data =
            skills[selected];


        /* ACTIVE BUTTON */

        skillButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        /* CHANGE WEB */

        skillIcon.textContent =
            data.icon;

        skillName.textContent =
            data.name;

        skillNumber.textContent =
            data.number;

        skillTitle.textContent =
            data.title;

        skillText.textContent =
            data.text;


        /* TAGS */

        skillTags.innerHTML = "";

        data.tags.forEach(tag => {

            const element =
                document.createElement("b");

            element.textContent =
                tag;

            skillTags.appendChild(element);

        });


        /* REVEAL ANIMATION */

        skillTitle.animate(
            [
                {
                    opacity: 0,
                    transform:
                        "translateY(20px)"
                },

                {
                    opacity: 1,
                    transform:
                        "translateY(0)"
                }
            ],
            {
                duration: 500,
                easing: "ease"
            }
        );


        skillText.animate(
            [
                {
                    opacity: 0
                },

                {
                    opacity: 1
                }
            ],
            {
                duration: 700
            }
        );

    });

});


/* ================= NAV ACTIVE SYSTEM ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav a");

const navObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },
        {
            threshold: .45
        }
    );


sections.forEach(section => {

    navObserver.observe(section);

});


/* ================= MUSIC ================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play()
            .then(() => {

                playing = true;

                musicBtn.textContent =
                    "🔊";

            })
            .catch(() => {

                alert(
                    "Add a music.mp3 file to your portfolio folder first."
                );

            });

    } else {

        music.pause();

        playing = false;

        musicBtn.textContent =
            "♫";

    }

});


/* ================= SECTION PARALLAX ================= */

window.addEventListener("scroll", () => {

    const scrollY =
        window.scrollY;

    const moon =
        document.querySelector(".moon");

    const cityOne =
        document.querySelector(".city-one");

    const cityTwo =
        document.querySelector(".city-two");


    if (moon) {

        moon.style.transform =
            `translateY(${scrollY * .08}px)`;

    }

    if (cityOne) {

        cityOne.style.transform =
            `translateX(${-scrollY * .04}px)`;

    }

    if (cityTwo) {

        cityTwo.style.transform =
            `translateX(${-scrollY * .1}px)`;

    }

});


/* ================= BUTTON RIPPLE ================= */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform =
            "scale(.95)";

        setTimeout(() => {

            btn.style.transform =
                "";

        }, 150);

    });

});