/**
 * Portfolio Website - Main JavaScript
 * Handles navigation, animations, form validation, and interactivity
 */

(function() {
    'use strict';

    // ===================================
    // DOM Elements
    // ===================================
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const backToTopBtn = document.getElementById('back-to-top');
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('project-modal');
    const currentYearSpan = document.getElementById('current-year');

    // ===================================
    // Utility: Get nested value from object
    // ===================================
    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            if (current === null || current === undefined) return undefined;
            // Handle array notation like "paragraphs[0]"
            const match = key.match(/^(\w+)\[(\d+)\]$/);
            if (match) {
                return current[match[1]] ? current[match[1]][parseInt(match[2])] : undefined;
            }
            return current[key];
        }, obj);
    }

    // ===================================
    // Render Content from siteContent
    // ===================================
    function renderContent() {
        if (typeof siteContent === 'undefined') {
            console.warn('siteContent not found. Make sure content.js is loaded before main.js');
            return;
        }

        // Render simple text content via data-content attributes
        document.querySelectorAll('[data-content]').forEach(el => {
            const path = el.dataset.content;
            const value = getNestedValue(siteContent, path);
            if (value !== undefined) {
                el.textContent = value;
            }
        });

        // Render href attributes via data-content-href
        document.querySelectorAll('[data-content-href]').forEach(el => {
            const path = el.dataset.contentHref;
            const value = getNestedValue(siteContent, path);
            if (value !== undefined) {
                el.href = value;
            }
        });

        // Render src attributes via data-content-src
        document.querySelectorAll('[data-content-src]').forEach(el => {
            const path = el.dataset.contentSrc;
            const value = getNestedValue(siteContent, path);
            if (value !== undefined) {
                el.src = value;
            }
        });

        // Render alt attributes via data-content-alt
        document.querySelectorAll('[data-content-alt]').forEach(el => {
            const path = el.dataset.contentAlt;
            const value = getNestedValue(siteContent, path);
            if (value !== undefined) {
                el.alt = value;
            }
        });

        // Update meta tags
        updateMetaTags();

        // Render navigation
        renderNavigation();

        // Render about paragraphs
        renderAboutParagraphs();

        // Render competencies
        renderCompetencies();

        // Render projects
        renderProjects();

        // Render articles
        renderArticles();

        // Render recommendations
        renderRecommendations();

        // Render footer navigation
        renderFooterNav();
    }

    // ===================================
    // Format Date Helper
    // ===================================
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // ===================================
    // Render Articles
    // ===================================
    function renderArticles() {
        const container = document.getElementById('articles-grid');
        if (!container || !siteContent.articles) return;

        container.innerHTML = siteContent.articles.map(article => `
            <article class="article-card fade-in">
                <a href="${article.mediumUrl}" class="article-card__link" target="_blank" rel="noopener noreferrer">
                    <div class="article-card__image">
                        <img src="${article.thumbnail}" alt="${article.title}" loading="lazy">
                    </div>
                    <div class="article-card__content">
                        <div class="article-card__meta">
                            <span class="article-card__date">${formatDate(article.publishedDate)}</span>
                            <span class="article-card__read-time">${article.readTime}</span>
                        </div>
                        <h3 class="article-card__title">${article.title}</h3>
                        <p class="article-card__description">${article.description}</p>
                        <div class="article-card__tags">
                            ${article.tags.map(tag => `<span class="article-card__tag">${tag}</span>`).join('')}
                        </div>
                        <span class="article-card__cta">
                            Read on Medium
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </div>
                </a>
            </article>
        `).join('');

        // Re-observe new fade elements
        observeNewFadeElements();
    }

    // ===================================
    // Render Recommendations
    // ===================================
    function renderRecommendations() {
        const container = document.getElementById('recommendations-grid');
        if (!container || !siteContent.recommendations) return;

        container.innerHTML = siteContent.recommendations.map(rec => `
            <article class="recommendation-card fade-in">
                <div class="recommendation-card__quote">
                    <svg class="recommendation-card__quote-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                </div>
                <p class="recommendation-card__text">${rec.text}</p>
                <button class="recommendation-card__read-more" onclick="this.previousElementSibling.classList.toggle('expanded'); this.textContent = this.textContent === 'Read more' ? 'Read less' : 'Read more';">Read more</button>
                <div class="recommendation-card__author">
                    <div class="recommendation-card__avatar">${rec.name.split(' ').map(n => n[0]).join('')}</div>
                    <div class="recommendation-card__info">
                        <h4 class="recommendation-card__name">${rec.name}</h4>
                        <p class="recommendation-card__title">${rec.title} at ${rec.company}</p>
                        <p class="recommendation-card__relationship">${rec.relationship}</p>
                    </div>
                </div>
                <span class="recommendation-card__date">${rec.date}</span>
            </article>
        `).join('');

        // Re-observe new fade elements
        observeNewFadeElements();
    }

    // ===================================
    // Update Meta Tags
    // ===================================
    function updateMetaTags() {
        const meta = siteContent.meta;
        const personal = siteContent.personal;

        // Page title
        document.title = meta.pageTitle;

        // Meta description
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) descMeta.content = meta.description;

        // Meta keywords
        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta) keywordsMeta.content = meta.keywords;

        // Meta author
        const authorMeta = document.querySelector('meta[name="author"]');
        if (authorMeta) authorMeta.content = personal.name;

        // Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = meta.ogTitle;

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.content = meta.ogDescription;

        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.content = meta.ogImage;
    }

    // ===================================
    // Render Navigation
    // ===================================
    function renderNavigation() {
        const navMenuEl = document.getElementById('nav-menu');
        if (!navMenuEl || !siteContent.navigation) return;

        navMenuEl.innerHTML = siteContent.navigation.map((item, index) => {
            const isActive = index === 0 ? ' active' : '';
            if (item.isButton) {
                return `<li class="nav__item">
                    <a href="${item.href}" class="btn btn--nav-cta">${item.label}</a>
                </li>`;
            }
            return `<li class="nav__item">
                <a href="${item.href}" class="nav__link${isActive}">${item.label}</a>
            </li>`;
        }).join('');

        // Re-bind nav links for active state tracking
        updateNavLinksReference();
    }

    // ===================================
    // Render Footer Navigation
    // ===================================
    function renderFooterNav() {
        const footerNav = document.querySelector('.footer__nav');
        if (!footerNav || !siteContent.navigation) return;

        footerNav.innerHTML = siteContent.navigation.map(item =>
            `<a href="${item.href}" class="footer__link">${item.label}</a>`
        ).join('');
    }

    // ===================================
    // Render About Paragraphs
    // ===================================
    function renderAboutParagraphs() {
        const container = document.getElementById('about-paragraphs');
        if (!container || !siteContent.about.paragraphs) return;

        container.innerHTML = siteContent.about.paragraphs
            .map(p => `<p>${p}</p>`)
            .join('');
    }

    // ===================================
    // Render Competencies
    // ===================================
    function renderCompetencies() {
        const container = document.getElementById('competencies-container');
        if (!container || !siteContent.about.competencies) return;

        container.innerHTML = siteContent.about.competencies
            .map(comp => {
                const accentClass = comp.isAccent ? ' tag--accent' : '';
                return `<span class="tag${accentClass}">${comp.name}</span>`;
            })
            .join('');
    }

    // ===================================
    // Render Projects
    // ===================================
    function renderProjects() {
        const container = document.getElementById('projects-grid');
        if (!container || !siteContent.projects) return;

        container.innerHTML = siteContent.projects.map(project => `
            <article class="project-card fade-in">
                <div class="project-card__image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-card__overlay">
                        <button class="project-card__view-btn" data-project="${project.id}">View Details</button>
                    </div>
                </div>
                <div class="project-card__content">
                    <div class="project-card__tags">
                        <span class="project-card__tag project-card__tag--industry">${project.industry}</span>
                        <span class="project-card__tag project-card__tag--role">${project.role}</span>
                    </div>
                    <h3 class="project-card__title">${project.title}</h3>
                    <p class="project-card__description">${project.shortDescription}</p>
                    <div class="project-card__outcomes">
                        ${project.outcomes.map(outcome => `
                            <div class="project-card__outcome">
                                <span class="project-card__outcome-value">${outcome.value}</span>
                                <span class="project-card__outcome-label">${outcome.label}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </article>
        `).join('');

        // Re-setup project modal handlers after rendering
        setupProjectModalHandlers();

        // Re-observe new fade elements
        observeNewFadeElements();
    }

    // ===================================
    // Observe newly added fade elements
    // ===================================
    let fadeObserver = null;

    function observeNewFadeElements() {
        if (!('IntersectionObserver' in window)) {
            document.querySelectorAll('.fade-in:not(.visible)').forEach(el => el.classList.add('visible'));
            return;
        }

        if (!fadeObserver) {
            fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            });
        }

        document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
            fadeObserver.observe(el);
        });
    }

    // ===================================
    // Initialization
    // ===================================
    function init() {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/552ef8a5-6204-4c12-8a22-556ebdd79bf0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:init',message:'init started',data:{siteContentDefined:typeof siteContent!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
        // Render content from siteContent first
        renderContent();

        setCurrentYear();
        setupScrollHandler();
        setupMobileNavigation();
        setupSmoothScrolling();
        setupScrollAnimations();
        setupContactForm();
        setupProjectModal();
        setupBackToTop();
        setupEmailLink();
        setupCvLinkLogging();

        // Trigger initial animations for visible elements
        setTimeout(() => {
            checkFadeElements();
        }, 100);
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/552ef8a5-6204-4c12-8a22-556ebdd79bf0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:init',message:'init completed',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
    }

    // ===================================
    // CV link click logging (debug)
    // ===================================
    function setupCvLinkLogging() {
        document.addEventListener('click', (e) => {
            const a = e.target.closest('a[href*="cv"], a[href*="documents/"]');
            if (!a) return;
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/552ef8a5-6204-4c12-8a22-556ebdd79bf0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:setupCvLinkLogging',message:'CV/doc link clicked',data:{href:a.getAttribute('href')},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
            // #endregion
        }, true);
    }

    // ===================================
    // Email Obfuscation - Construct email dynamically
    // ===================================
    function setupEmailLink() {
        const emailLink = document.getElementById('email-link');
        const emailText = document.getElementById('email-text');

        if (!emailLink || !emailText) return;

        // Construct email from parts to avoid scraping
        const emailParts = ['gayanjith', 'gmail', 'com'];
        const email = emailParts[0] + '@' + emailParts[1] + '.' + emailParts[2];

        emailLink.href = 'mailto:' + email;
        emailText.textContent = email;
    }

    // ===================================
    // Set Current Year in Footer
    // ===================================
    function setCurrentYear() {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }

    // ===================================
    // Nav Links Reference (updated after render)
    // ===================================
    let navLinks = document.querySelectorAll('.nav__link');

    function updateNavLinksReference() {
        navLinks = document.querySelectorAll('.nav__link');
    }

    // ===================================
    // Header Scroll Behavior
    // ===================================
    function setupScrollHandler() {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add shadow when scrolled
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Update active nav link based on scroll position
            updateActiveNavLink();

            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ===================================
    // Update Active Navigation Link
    // ===================================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ===================================
    // Mobile Navigation
    // ===================================
    function setupMobileNavigation() {
        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Use event delegation for dynamically rendered nav links
        navMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav__link') || e.target.classList.contains('btn--nav-cta')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ===================================
    // Smooth Scrolling
    // ===================================
    function setupSmoothScrolling() {
        document.addEventListener('click', (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;

            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // ===================================
    // Scroll Animations (Intersection Observer)
    // ===================================
    function setupScrollAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');

        if (!('IntersectionObserver' in window)) {
            // Fallback for older browsers
            fadeElements.forEach(el => el.classList.add('visible'));
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => fadeObserver.observe(el));
    }

    function checkFadeElements() {
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    }

    // ===================================
    // Contact Form Handling
    // ===================================
    function setupContactForm() {
        if (!contactForm) return;

        contactForm.addEventListener('submit', handleFormSubmit);

        // Real-time validation
        const inputs = contactForm.querySelectorAll('.form__input');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const successMessage = document.getElementById('form-success');
        const errorMessage = document.getElementById('form-error');

        // Validate all fields
        const isNameValid = validateField(nameInput);
        const isEmailValid = validateField(emailInput);
        const isMessageValid = validateField(messageInput);

        if (isNameValid && isEmailValid && isMessageValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Hide any previous messages
            successMessage.hidden = true;
            if (errorMessage) errorMessage.hidden = true;

            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/552ef8a5-6204-4c12-8a22-556ebdd79bf0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:handleFormSubmit',message:'submitting form',data:{action:contactForm.action},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
            // #endregion
            // Submit to Formspree via AJAX
            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    contactForm.reset();
                    successMessage.hidden = false;
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.hidden = true;
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                if (errorMessage) {
                    errorMessage.hidden = false;
                } else {
                    alert('Sorry, there was an error sending your message. Please try again or email directly.');
                }
            })
            .finally(() => {
                // #region agent log
                const hasSiteContent = typeof siteContent !== 'undefined';
                const submitText = hasSiteContent && siteContent.contact && siteContent.contact.form ? siteContent.contact.form.submitText : 'Send Message';
                fetch('http://127.0.0.1:7242/ingest/552ef8a5-6204-4c12-8a22-556ebdd79bf0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:handleFormSubmit:finally',message:'form submit finished',data:{hasSiteContent,submitText},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
                // #endregion
                submitBtn.disabled = false;
                submitBtn.textContent = submitText;
            });
        }
    }

    function validateField(input) {
        const errorElement = document.getElementById(`${input.id}-error`);
        let isValid = true;
        let errorMessage = '';

        // Remove previous error state
        input.classList.remove('error');

        // Check if empty
        if (!input.value.trim()) {
            isValid = false;
            // #region agent log
            const hasLabels = input.labels && input.labels.length > 0;
            fetch('http://127.0.0.1:7242/ingest/552ef8a5-6204-4c12-8a22-556ebdd79bf0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:validateField',message:'empty field',data:{inputId:input.id,hasLabels,labelsLength:input.labels?input.labels.length:0},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
            // #endregion
            errorMessage = hasLabels ? `${input.labels[0].textContent} is required` : 'This field is required';
        }
        // Email validation
        else if (input.type === 'email' && !isValidEmail(input.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
        // Minimum length for message
        else if (input.id === 'message' && input.value.trim().length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters';
        }

        if (!isValid) {
            input.classList.add('error');
        }

        if (errorElement) {
            errorElement.textContent = errorMessage;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ===================================
    // Project Modal
    // ===================================
    function setupProjectModal() {
        if (!modal) return;

        // Setup modal handlers
        setupProjectModalHandlers();

        // Close modal
        modal.querySelectorAll('[data-close-modal]').forEach(el => {
            el.addEventListener('click', closeProjectModal);
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeProjectModal();
            }
        });
    }

    function setupProjectModalHandlers() {
        // Use event delegation for dynamically rendered project buttons
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        // Remove old listener if exists (prevent duplicates)
        projectsGrid.removeEventListener('click', handleProjectClick);
        projectsGrid.addEventListener('click', handleProjectClick);
    }

    function handleProjectClick(e) {
        const btn = e.target.closest('.project-card__view-btn');
        if (btn) {
            const projectId = parseInt(btn.dataset.project);
            openProjectModal(projectId);
        }
    }

    function openProjectModal(projectId) {
        // Find project in siteContent
        const project = siteContent.projects.find(p => p.id === projectId);
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/552ef8a5-6204-4c12-8a22-556ebdd79bf0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:openProjectModal',message:'modal open',data:{projectId,projectFound:!!project,projectTitle:project?project.title:null},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
        // #endregion
        if (!project) return;

        const modalTitle = modal.querySelector('.modal__title');
        const modalDetails = modal.querySelector('.modal__details');

        modalTitle.textContent = project.title;
        modalDetails.innerHTML = `
            <p>${project.fullDescription}</p>

            <h4>Role</h4>
            <p>${project.role} | ${project.duration}</p>

            <h4>Challenge</h4>
            <p>${project.challenge}</p>

            <h4>Solution</h4>
            <p>${project.solution}</p>

            <h4>Key Outcomes</h4>
            <ul>
                ${project.keyOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
            </ul>
        `;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Focus trap
        const closeBtn = modal.querySelector('.modal__close');
        closeBtn.focus();
    }

    function closeProjectModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // ===================================
    // Back to Top Button
    // ===================================
    function setupBackToTop() {
        if (!backToTopBtn) return;

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================
    // Initialize on DOM Ready
    // ===================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
