document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    initTypingAnimation();
    initScrollReveal();
});

function renderContent() {
    // --- HERO SECTION ---
    document.getElementById('hero-name').textContent = portfolioData.hero.name;
    document.getElementById('hero-desc').textContent = portfolioData.hero.description;

    // --- ABOUT SECTION ---
    const aboutContent = document.getElementById('about-content');
    portfolioData.about.paragraphs.forEach(para => {
        const p = document.createElement('p');
        p.innerHTML = para; // innerHTML allows for <span class="highlight">
        aboutContent.appendChild(p);
    });

    const techGrid = document.getElementById('tech-grid');
    portfolioData.about.techStack.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        techGrid.appendChild(span);
    });

    // --- EXPERIENCE SECTION ---
    const expTimeline = document.getElementById('experience-timeline');
    portfolioData.experience.forEach(job => {
        const card = document.createElement('div');
        card.className = 'exp-card reveal';
        
        // Create list items for achievements
        const achievementsHtml = job.achievements.map(item => `<li>${item}</li>`).join('');

        card.innerHTML = `
            <div class="exp-header">
                <div>
                    <div class="role">${job.role}</div>
                    <div class="company">${job.company}</div>
                </div>
                <div class="date">${job.date}</div>
            </div>
            ${job.description ? `<p>${job.description}</p>` : ''}
            <ul class="achievements">
                ${achievementsHtml}
            </ul>
        `;
        expTimeline.appendChild(card);
    });

    // --- PROJECTS SECTION ---
    const projectsGrid = document.getElementById('projects-grid');
    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        
        const techStackHtml = project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

        card.innerHTML = `
            <div class="metrics-badge">${project.category}</div>
            <h3>${project.title}</h3>
            <p><strong>The Challenge:</strong> ${project.challenge}</p>
            <p><strong>The Solution:</strong> ${project.solution}</p>
            <div class="tech-grid" style="margin-bottom: 20px;">
                ${techStackHtml}
            </div>
            <div class="project-links">
                <a href="${project.links.github}" target="_blank" title="Code"><i class="fab fa-github"></i></a>
                <a href="${project.links.demo}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // --- CONTACT SECTION ---
    const emailElements = document.querySelectorAll('.contact-email');
    emailElements.forEach(el => {
        if(el.tagName === 'A') el.href = `mailto:${portfolioData.contact.email}`;
        else el.textContent = portfolioData.contact.email;
    });
    
    document.getElementById('contact-github').href = portfolioData.contact.github;
    document.getElementById('contact-linkedin').href = portfolioData.contact.linkedin;
}

// --- ANIMATIONS ---
function initTypingAnimation() {
    const textElement = document.getElementById('typing-text');
    const texts = portfolioData.hero.typingText;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }
    type();
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    // Trigger once to check initial view
    setTimeout(revealOnScroll, 100); 
}
