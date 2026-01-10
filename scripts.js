/* scripts.js */

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
    }

    lastScroll = currentScroll;
});

// 1. Populate Header/Hero Info
document.getElementById('name').textContent = portfolioData.name;
document.getElementById('title').textContent = portfolioData.title;
document.getElementById('bio').textContent = portfolioData.bio;
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('footer-name').textContent = portfolioData.name;

// Profile Photos
const profilePhoto = document.getElementById('profile-photo');
const aboutPhotoElement = document.getElementById('about-photo');

// Hero Section Photo
if (profilePhoto) {
    const heroPhotoSrc = portfolioData.heroPhoto || portfolioData.photo;
    if (heroPhotoSrc) {
        profilePhoto.src = heroPhotoSrc;
        profilePhoto.onerror = function () {
            // Fallback if image doesn't load
            this.style.display = 'none';
            const container = this.parentElement;
            container.innerHTML = '<div class="floating-card"><i class="fas fa-user"></i></div>';
        };
    }
}

// About Section Photo
if (aboutPhotoElement) {
    const aboutPhotoSrc = portfolioData.aboutPhoto || portfolioData.photo;
    if (aboutPhotoSrc) {
        aboutPhotoElement.src = aboutPhotoSrc;
        aboutPhotoElement.onerror = function () {
            this.style.display = 'none';
        };
    }
}

// Social Links in Hero
const socialsContainer = document.getElementById('socials');
if (portfolioData.socials.github) {
    socialsContainer.innerHTML += `<a href="${portfolioData.socials.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>`;
}
if (portfolioData.socials.linkedin) {
    socialsContainer.innerHTML += `<a href="${portfolioData.socials.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`;
}
if (portfolioData.socials.twitter) {
    socialsContainer.innerHTML += `<a href="${portfolioData.socials.twitter}" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>`;
}

// 2. Populate About Section
if (portfolioData.about) {
    document.getElementById('about-text').textContent = portfolioData.about.text;
    document.getElementById('education').textContent = portfolioData.about.education;
    document.getElementById('experience').textContent = portfolioData.about.experience;
}

// 3. Populate Skills Section
const skillsContainer = document.getElementById('skills-container');
if (skillsContainer && portfolioData.skills && Array.isArray(portfolioData.skills)) {
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.setAttribute('data-skill', skill.name);
        skillItem.style.cursor = 'pointer';
        skillItem.title = `Click to filter projects by ${skill.name}`;
        // Parse description into clickable subskills
        const subskills = skill.description.split(',').map(s => s.trim());
        const subskillsHtml = subskills.map((subskill, index) => {
            const isLast = index === subskills.length - 1;
            return `<span class="subskill-tag" data-subskill="${subskill}">${subskill}</span>${!isLast ? ', ' : ''}`;
        }).join('');

        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <p>${subskillsHtml}</p>
        `;

        // Add click handler to filter projects by main skill
        skillItem.addEventListener('click', function (e) {
            // Only trigger if a subskill wasn't clicked
            if (!e.target.classList.contains('subskill-tag')) {
                const skillName = this.getAttribute('data-skill');
                window.location.href = `projects.html?filter=${encodeURIComponent(skillName)}`;
            }
        });

        // Add click handlers for subskills
        skillItem.querySelectorAll('.subskill-tag').forEach(tag => {
            tag.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation(); // Prevent triggering the parent card click
                const subskillName = this.getAttribute('data-subskill');
                window.location.href = `projects.html?filter=${encodeURIComponent(subskillName)}`;
            });
        });

        skillsContainer.appendChild(skillItem);
    });
}

// 4. Populate Projects (only featured on homepage, grouped by sections)
const projectContainer = document.getElementById('project-grid');
if (projectContainer) {
    // Check if we're on the homepage (has featured projects section) or projects page
    const isHomepage = document.querySelector('.view-all-projects') !== null;

    // Filter projects - show only featured on homepage, all on projects page
    // Also filter out empty/invalid projects
    const projectsToShow = (isHomepage
        ? portfolioData.projects.filter(project => project.featured === true)
        : portfolioData.projects
    ).filter(project => {
        // Filter out projects with empty titles or invalid data
        return project.title && project.title.trim() !== '' && project.title.trim() !== ' ';
    });

    // Group projects by sectionTitle
    const projectsBySection = {};
    projectsToShow.forEach(project => {
        const section = (project.sectionTitle && project.sectionTitle.trim() !== '')
            ? project.sectionTitle
            : 'Other Projects';
        if (!projectsBySection[section]) {
            projectsBySection[section] = [];
        }
        projectsBySection[section].push(project);
    });

    // Create sections and projects
    Object.keys(projectsBySection).forEach(sectionTitle => {
        // Create section wrapper
        const sectionWrapper = document.createElement('div');
        sectionWrapper.className = 'project-section';

        // Create section title
        const sectionHeader = document.createElement('h3');
        sectionHeader.className = 'project-section-title';
        sectionHeader.textContent = sectionTitle;
        sectionWrapper.appendChild(sectionHeader);

        // Create grid for this section
        const sectionGrid = document.createElement('div');
        sectionGrid.className = 'grid';

        // Add projects to this section
        projectsBySection[sectionTitle].forEach(project => {
            const card = document.createElement('div');
            card.className = 'card';

            // Tags Generation
            const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            // Links Generation
            const linksHtml = project.links.map((link, index) => {
                const btnClass = index === 0 ? 'btn-primary' : 'btn-secondary';
                return `<a href="${link.url}" class="btn ${btnClass}" target="_blank" rel="noopener noreferrer">${link.text} <i class="fas fa-external-link-alt"></i></a>`;
            }).join('');

            // Video, Image, or Placeholder
            let mediaHtml = '';
            if (project.videoUrl && project.videoUrl.trim() !== '') {
                // Priority 1: Video
                mediaHtml = `
                    <video autoplay loop muted playsinline>
                        <source src="${project.videoUrl}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
            } else if (project.imageUrl && project.imageUrl.trim() !== '') {
                // Priority 2: Image (when no video)
                mediaHtml = `<img src="${project.imageUrl}" alt="${project.title}" class="project-image">`;
            } else {
                // Priority 3: Placeholder
                mediaHtml = `<div class="placeholder"><i class="fas fa-code"></i></div>`;
            }

            card.innerHTML = `
                <div class="media-container">
                    ${mediaHtml}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${project.title}</h3>
                    <div class="tags">${tagsHtml}</div>
                    <p class="card-desc">${project.description}</p>
                    <div class="card-links">
                        ${linksHtml}
                    </div>
                </div>
            `;

            sectionGrid.appendChild(card);
        });

        sectionWrapper.appendChild(sectionGrid);
        projectContainer.appendChild(sectionWrapper);
    });
}

// 5. Populate Publications Section
const publicationsContainer = document.getElementById('publications-container');
if (publicationsContainer && portfolioData.publications && Array.isArray(portfolioData.publications)) {
    portfolioData.publications.forEach(publication => {
        const pubItem = document.createElement('div');
        pubItem.className = 'publication-item';

        const tagsHtml = publication.tags ? publication.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';

        pubItem.innerHTML = `
            <div class="publication-header">
                <h3 class="publication-title">${publication.title}</h3>
                <div class="publication-meta">
                    <span class="publication-authors">${publication.authors}</span>
                    <span class="publication-venue">${publication.venue}</span>
                    <span class="publication-year">${publication.year}</span>
                </div>
            </div>
            ${publication.description ? `<p class="publication-desc">${publication.description}</p>` : ''}
            ${tagsHtml ? `<div class="tags">${tagsHtml}</div>` : ''}
            <div class="publication-links">
                <a href="${publication.arxivUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-file-pdf"></i> arXiv: ${publication.arxivId}
                </a>
            </div>
        `;

        publicationsContainer.appendChild(pubItem);
    });
}

// 6. Populate Contact Section
if (portfolioData.contact) {
    document.getElementById('contact-text').textContent = portfolioData.contact.text;
    document.getElementById('email-link').textContent = portfolioData.contact.email;
    document.getElementById('email-link').href = `mailto:${portfolioData.contact.email}`;
    document.getElementById('location').textContent = portfolioData.contact.location;
}

// Social Links in Contact
const contactSocials = document.getElementById('contact-socials');
if (portfolioData.socials.github) {
    contactSocials.innerHTML += `<a href="${portfolioData.socials.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>`;
}
if (portfolioData.socials.linkedin) {
    contactSocials.innerHTML += `<a href="${portfolioData.socials.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`;
}
if (portfolioData.socials.twitter) {
    contactSocials.innerHTML += `<a href="${portfolioData.socials.twitter}" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>`;
}

// 7. Contact Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const message = document.getElementById('form-message').value;

        // Create mailto link (you can replace this with actual form submission to a backend)
        const mailtoLink = `mailto:${portfolioData.contact.email}?subject=Contact from ${name}&body=From: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;

        // Optional: Show success message
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = '#10b981';

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .skill-item, .highlight-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
// Custom Cursor Tooltip
function initTooltips() {
    // Create tooltip element if it doesn't exist
    let tooltip = document.getElementById('cursor-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'cursor-tooltip';
        document.body.appendChild(tooltip);
    }

    // Helper to show tooltip
    const showTooltip = (text) => {
        tooltip.textContent = text;
        tooltip.style.opacity = '1';
    };

    // Helper to hide tooltip
    const hideTooltip = () => {
        tooltip.style.opacity = '0';
    };

    // Update position
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // Prevent tooltip from going off screen
        // (Simple check, can be expanded if needed)

        tooltip.style.left = `${x + 15}px`;
        tooltip.style.top = `${y + 15}px`;
    });

    // Delegated event listeners for performance and dynamic content
    document.body.addEventListener('mouseover', (e) => {
        const target = e.target;

        // 1. Links
        const link = target.closest('a');
        if (link) {
            const href = link.getAttribute('href');
            if (href) {
                if (href.startsWith('mailto:')) {
                    showTooltip(`Send email to ${href.replace('mailto:', '')}`);
                } else if (href.startsWith('#')) {
                    showTooltip(`Jump to ${href}`);
                } else {
                    showTooltip(`Go to ${href}`);
                }
                return;
            }
        }

        // 2. Skills
        // Check if hovering over a skill item or its children (but not subskills)
        const skillItem = target.closest('.skill-item');
        if (skillItem && !target.classList.contains('subskill-tag')) {
            const skillName = skillItem.getAttribute('data-skill');
            showTooltip(`Click to view projects using ${skillName}`);
            return;
        }

        // 3. Subskills
        if (target.classList.contains('subskill-tag')) {
            const subskillName = target.getAttribute('data-subskill');
            showTooltip(`Click to view projects using ${subskillName}`);
            return;
        }

        // Hide if not hovering over relevant element
        hideTooltip();
    });

    document.body.addEventListener('mouseout', (e) => {
        // Hide on mouseout if leaving the window or generic cleanup
        // We rely mainly on mouseover logic to "switch" tooltips or hide, 
        // but this ensures it hides when leaving an element if not entering another relevant one immediately.
        // However, the mouseover on 'body' captures everything, so we need to be careful not to flicker.

        // A simpler approach for 'mouseleave' specific elements:
        const related = e.relatedTarget;
        if (!related || (related.nodeName === 'HTML')) {
            hideTooltip();
        }
    });
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', initTooltips);
