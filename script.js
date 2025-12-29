/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
// Note: Skills section was replaced by Experience tabs in HTML, but keeping logic if needed later
// or we can adapt for other accordion needs.

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('experience__active')
        })
        target.classList.add('experience__active')

        tabs.forEach(tab => {
            tab.classList.remove('experience__active')
        })
        tab.classList.add('experience__active')
    })
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
// (Optional: Add scroll up button in HTML if desired)
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Custom cursor logic removed */

/*==================== JOB DESCRIPTION MODAL ====================*/
const modal = document.getElementById('experience-modal'),
    modalClose = document.getElementById('modal-close'),
    modalTitle = document.querySelector('.experience__modal-title'),
    modalList = document.getElementById('modal-list');

const jobData = {
    "maxxitani": {
        title: "Mobile Developer at MaxxiTani",
        desc: [
            "Build and maintain mobile apps using Kotlin, Jetpack Compose, Hilt, and MVI/MVVM architecture.",
            "Work closely with engineering teams to improve app performance and reliability.",
            "Utilize AI tools to boost productivity and accelerate development.",
            "Manage efficient workflows using GitLab for CI/CD, version control, and collaboration."
        ]
    },
    "bigio": {
        title: "Mobile Developer at BIGIO.ID",
        desc: [
            "Delivered 10+ mobile applications across multiple industries using Flutter and Kotlin.",
            "Mentored interns and led knowledge-sharing sessions to improve team capabilities.",
            "Managed requirements, bug fixing, documentation, feature flags, Crashlytics, and coordinated app releases.",
            "Supported codebase reviews to maintain code quality and consistency."
        ]
    },
    "bangkit": {
        title: "Mobile Mentor at Google Bangkit",
        desc: [
            "Mentored 24 students through their project milestones and implementations.",
            "Guided best-practice adoption for capstone project development.",
            "Reviewed documents and project deliverables to ensure timely and quality submissions."
        ]
    },
    "tedi": {
        title: "Android Engineer at TeDi",
        desc: [
            "Developed an Android accessibility application using modern recommended practices.",
            "Integrated the app with Google Cloud services and managed Play Store releases.",
            "Improved team workflows using GitHub and structured codebase organization."
        ]
    },
    "nusantara": {
        title: "Android Intern at Nusantara Beta",
        desc: [
            "Develop android application using best practices and recommended architecture.",
            "Build an app using code base.",
            "Ability to work using Git Flow to increase development productivity inside the team."
        ]
    },
    "visitind": {
        title: "Flutter Intern at VisitInd",
        desc: [
            "Ability to work using GitHub to increase development productivity inside the team.",
            "Developed application using Flutter.",
            "Use best-practices method for make readable code."
        ]
    },
    "syameer": {
        title: "Android Developer at CV Syameer",
        desc: [
            "Built Android apps using Kotlin, Jetpack, and reactive programming.",
            "Implemented UI from design mockups and applied clean architecture."
        ]
    }
};

document.querySelectorAll('.experience__data[data-id]').forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        if (jobData[id]) {
            // Set Title
            modalTitle.innerText = jobData[id].title;

            // Set List
            modalList.innerHTML = jobData[id].desc.map(text => `
                <li class="experience__modal-service">
                    <i class="fa-regular fa-check-circle experience__modal-icon"></i>
                    <p>${text}</p>
                </li>
            `).join('');

            // Show Modal
            modal.classList.add('active-modal');
        }
    });
});

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active-modal');
    });
}

// Close when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active-modal');
    }
});

