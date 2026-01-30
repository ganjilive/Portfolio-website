/**
 * Portfolio Website - Content Configuration
 * ==========================================
 *
 * This file contains all editable content for the portfolio website.
 * Edit values here instead of modifying HTML directly.
 *
 * After making changes, simply refresh the browser to see updates.
 */

// SVG placeholder generator for professional gradient backgrounds with initials
function createPlaceholderSVG(initials, gradientId, color1, color2) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
                <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#${gradientId})"/>
        <text x="200" y="160" font-family="Inter, Arial, sans-serif" font-size="48" font-weight="600" fill="white" text-anchor="middle" opacity="0.9">${initials}</text>
    </svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function createProfilePlaceholderSVG(initials) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
        <defs>
            <linearGradient id="profileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#4fd1c5;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#9f7aea;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#profileGrad)"/>
        <circle cx="200" cy="180" r="80" fill="white" opacity="0.2"/>
        <text x="200" y="200" font-family="Inter, Arial, sans-serif" font-size="64" font-weight="700" fill="white" text-anchor="middle">${initials}</text>
        <rect x="120" y="300" width="160" height="12" rx="6" fill="white" opacity="0.3"/>
        <rect x="140" y="330" width="120" height="8" rx="4" fill="white" opacity="0.2"/>
    </svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// Placeholder images using inline SVG data URIs
const placeholderImages = {
    profile: createProfilePlaceholderSVG('G'),
    project1: createPlaceholderSVG('PP', 'grad1', '#667eea', '#764ba2'),
    project2: createPlaceholderSVG('TP', 'grad2', '#f093fb', '#f5576c'),
    project3: createPlaceholderSVG('CW', 'grad3', '#4facfe', '#00f2fe'),
    project4: createPlaceholderSVG('HD', 'grad4', '#43e97b', '#38f9d7'),
    ogImage: createPlaceholderSVG('G', 'ogGrad', '#4fd1c5', '#9f7aea')
};

const siteContent = {

    // ========================================
    // PERSONAL INFORMATION
    // ========================================
    personal: {
        name: "Gayanjith",
        title: "Product Owner & Business Analyst",
        email: "gayanjith@gmail.com",
        linkedIn: "https://linkedin.com/in/gayanjith",
        cvPath: "assets/documents/cv.pdf"
    },

    // ========================================
    // META / SEO
    // ========================================
    meta: {
        pageTitle: "Gayanjith | Product Owner & Business Analyst",
        description: "Product Owner & Business Analyst with 10+ years of experience in health tech. Specializing in product discovery, requirement management, and solution design.",
        keywords: "Product Owner, Business Analyst, Health Tech, Agile, Scrum, Product Discovery",
        ogTitle: "Gayanjith - Product Owner & Business Analyst",
        ogDescription: "10+ years of experience transforming healthcare through innovative digital solutions.",
        ogImage: placeholderImages.ogImage
    },

    // ========================================
    // NAVIGATION
    // ========================================
    navigation: [
        { label: "Home", href: "#hero", isButton: false },
        { label: "About", href: "#about", isButton: false },
        { label: "Projects", href: "#projects", isButton: false },
        { label: "Contact", href: "#contact", isButton: true }
    ],

    // ========================================
    // HERO SECTION
    // ========================================
    hero: {
        greeting: "Hello.",
        headline: "I'm Gayanjith.",
        subtitle: "Product Owner & Business Analyst specializing in health tech.",
        buttons: {
            primary: { text: "View My Work", href: "#projects" },
            secondary: { text: "Get in Touch", href: "#contact" },
            cv: { text: "Download CV" }
        }
    },

    // ========================================
    // ABOUT SECTION
    // ========================================
    about: {
        sectionTitle: "About Me",
        yearsExperience: "10+",
        profileImage: {
            src: placeholderImages.profile,
            alt: "Gayanjith - Product Owner & Business Analyst"
        },
        paragraphs: [
            "With over a decade of experience in the health tech industry, I specialize in bridging the gap between business needs and technical solutions. My passion lies in creating digital products that make healthcare more accessible, efficient, and patient-centered.",
            "Throughout my career, I've had the privilege of working with healthcare providers, and health tech startups to deliver products that genuinely improve patient outcomes and streamline clinical workflows.",
            "I believe in a collaborative approach to product development, combining deep domain expertise with agile methodologies to deliver value incrementally while maintaining a clear strategic vision."
        ],
        competenciesTitle: "Key Competencies",
        competencies: [
            { name: "Product Discovery", isAccent: false },
            { name: "Requirement Management", isAccent: false },
            { name: "Solution Design", isAccent: false },
            { name: "Stakeholder Management", isAccent: false },
            { name: "Agile Methodologies", isAccent: false },
            { name: "Workshop Facilitation", isAccent: true }
        ]
    },

    // ========================================
    // PROJECTS SECTION
    // ========================================
    projectsSection: {
        title: "Featured Projects",
        subtitle: "A selection of projects where I've driven product strategy and delivery in the health tech space."
    },

    // ========================================
    // PROJECTS DATA
    // Add/remove/edit projects here
    // ========================================
    projects: [
        {
            id: 1,
            title: "Patient Portal Redesign",
            image: placeholderImages.project1,
            industry: "Health Tech",
            role: "Product Owner",
            shortDescription: "Led the complete redesign of a patient portal serving 500K+ users, improving engagement by 45% and reducing support tickets by 30%.",
            outcomes: [
                { value: "45%", label: "Engagement Increase" },
                { value: "30%", label: "Fewer Support Tickets" }
            ],
            // Modal details
            fullDescription: "A comprehensive redesign of a patient portal serving over 500,000 users across multiple healthcare facilities.",
            duration: "18 months",
            challenge: "The existing portal had low engagement rates and high support ticket volume due to confusing navigation and outdated UX patterns.",
            solution: "Led a user-centered redesign process, conducting extensive user research, defining personas, and facilitating design sprints with cross-functional teams.",
            keyOutcomes: [
                "45% increase in patient engagement",
                "30% reduction in support tickets",
                "NPS score improved from 32 to 67",
                "Mobile usage increased by 120%"
            ]
        },
        {
            id: 2,
            title: "Telehealth Platform Launch",
            image: placeholderImages.project2,
            industry: "Health Tech",
            role: "Business Analyst",
            shortDescription: "Defined requirements and coordinated delivery of a telehealth solution that enabled remote consultations for 200+ physicians.",
            outcomes: [
                { value: "200+", label: "Physicians Onboarded" },
                { value: "50K", label: "Consultations/Month" }
            ],
            // Modal details
            fullDescription: "End-to-end delivery of a telehealth solution enabling remote consultations for a network of physicians.",
            duration: "12 months",
            challenge: "Rapid pivot required during the pandemic to enable remote patient consultations while maintaining HIPAA compliance.",
            solution: "Defined comprehensive requirements, mapped integration points with existing EHR systems, and coordinated delivery across multiple vendor teams.",
            keyOutcomes: [
                "200+ physicians successfully onboarded",
                "50,000+ monthly consultations",
                "98.5% video call success rate",
                "Average wait time reduced by 65%"
            ]
        },
        {
            id: 3,
            title: "Clinical Workflow Optimization",
            image: placeholderImages.project3,
            industry: "Health Tech",
            role: "Product Owner",
            shortDescription: "Streamlined clinical documentation workflows, reducing average documentation time by 40% while maintaining compliance.",
            outcomes: [
                { value: "40%", label: "Time Saved" },
                { value: "100%", label: "Compliance Maintained" }
            ],
            // Modal details
            fullDescription: "Streamlined clinical documentation workflows for a major hospital network.",
            duration: "10 months",
            challenge: "Physicians were spending excessive time on documentation, leading to burnout and reduced patient face time.",
            solution: "Conducted workflow analysis, identified automation opportunities, and implemented smart templates with voice-to-text capabilities.",
            keyOutcomes: [
                "40% reduction in documentation time",
                "100% compliance maintained",
                "Physician satisfaction increased by 55%",
                "More time for patient care"
            ]
        },
        {
            id: 4,
            title: "Health Data Analytics Dashboard",
            image: placeholderImages.project4,
            industry: "Health Tech",
            role: "Business Analyst",
            shortDescription: "Designed and delivered an analytics platform providing actionable insights to healthcare administrators across 15 facilities.",
            outcomes: [
                { value: "15", label: "Facilities Served" },
                { value: "Real-time", label: "Data Insights" }
            ],
            // Modal details
            fullDescription: "An analytics platform providing actionable insights to healthcare administrators.",
            duration: "8 months",
            challenge: "Healthcare administrators lacked visibility into operational metrics, making data-driven decisions difficult.",
            solution: "Gathered requirements from stakeholders across 15 facilities, designed intuitive dashboards, and established automated reporting pipelines.",
            keyOutcomes: [
                "15 facilities served",
                "Real-time data insights",
                "25% improvement in resource allocation",
                "Executive reporting time cut by 70%"
            ]
        }
    ],

    // ========================================
    // CONTACT SECTION
    // ========================================
    contact: {
        heading: "Get In Touch",
        subtitle: "Interested in collaborating or have a project in mind? Let's connect!",
        connectTitle: "Connect With Me",
        connectDescription: "Feel free to reach out through the form or connect with me on professional networks.",
        form: {
            namePlaceholder: "Your name",
            emailPlaceholder: "your.email@example.com",
            messagePlaceholder: "Tell me about your project or inquiry...",
            submitText: "Send Message",
            successMessage: "Thank you! Your message has been sent successfully."
        }
    },

    // ========================================
    // FOOTER
    // ========================================
    footer: {
        tagline: "Product Owner & Business Analyst",
        copyright: "All rights reserved."
    }
};

// Make siteContent available globally
if (typeof window !== 'undefined') {
    window.siteContent = siteContent;
}
