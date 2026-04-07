document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    initLinks();
    initScrollReveal();
});

function renderContent() {
    renderHero();
    renderExperience();
    renderProjects();
    renderEducation();
    renderSkills();
}

function renderHero() {
    setText('hero-name', portfolioData.hero.name);
    setText('hero-description', portfolioData.hero.description);
}

function renderExperience() {
    const experienceList = document.getElementById('experience-list');
    if (!experienceList) return;

    portfolioData.experience.forEach((job) => {
        const article = document.createElement('article');
        article.className = 'list-item';

        const highlights = job.highlights
            .map((item) => `<p>${item}</p>`)
            .join('');

        article.innerHTML = `
            <div class="item-copy">
                <div class="role-line">
                    <h3>${job.role}</h3>
                    <span class="company">${job.company}</span>
                    <span>${job.type}</span>
                </div>
                <p>${job.description}</p>
                <div class="item-highlights">${highlights}</div>
            </div>
            <div class="item-meta">${job.date}</div>
        `;

        experienceList.appendChild(article);
    });
}

function renderProjects() {
    const projectList = document.getElementById('projects-list');
    if (!projectList) return;

    portfolioData.projects.forEach((project) => {
        const article = document.createElement('article');
        article.className = 'project-card';

        const stack = project.techStack
            .map((tech) => `<span class="pill">${tech}</span>`)
            .join('');

        article.innerHTML = `
            <div class="project-copy">
                <div class="role-line">
                    <h3>${project.title}</h3>
                    <span>${project.meta}</span>
                </div>
                <p>${project.description}</p>
                <div class="skills-list">${stack}</div>
                <div class="project-links">
                    <a href="${project.links.github}" target="_blank" rel="noreferrer">github</a>
                    <a href="${project.links.demo}" target="_blank" rel="noreferrer">live</a>
                </div>
            </div>
        `;

        projectList.appendChild(article);
    });
}

function renderEducation() {
    const educationList = document.getElementById('education-list');
    if (!educationList) return;

    portfolioData.education.forEach((item) => {
        const article = document.createElement('article');
        article.className = 'list-item';
        article.innerHTML = `
            <div class="item-copy">
                <h3>${item.school}</h3>
                <p>${item.detail}</p>
            </div>
            <div class="item-meta">${item.date}</div>
        `;
        educationList.appendChild(article);
    });
}

function renderSkills() {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;

    portfolioData.skills.forEach((skill) => {
        const span = document.createElement('span');
        span.className = 'pill';
        span.textContent = skill;
        skillsList.appendChild(span);
    });
}

function initLinks() {
    setHref('dock-resume', portfolioData.contact.resume);
    setHref('dock-github', portfolioData.contact.github);
    setHref('dock-linkedin', portfolioData.contact.linkedin);
    setHref('dock-x', portfolioData.contact.x);
    setHref('dock-email', `mailto:${portfolioData.contact.email}`);
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

function setHref(id, value) {
    const element = document.getElementById(id);
    if (element) element.href = value;
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach((element) => observer.observe(element));
}
