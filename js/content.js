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
        description: "Product Owner & Business Analyst with 10+ years of experience in software product development. Specializing in product discovery, requirement management, and solution design.",
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
        subtitle: "Product Owner & Business Analyst specializing in Product Discovery.",
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
            src: "assets/images/profile picture.png",
            alt: "Gayanjith - Product Owner & Business Analyst"
        },
        paragraphs: [
            "With over a decade of experience in the health tech industry, I specialize in bridging the gap between business needs and technical solutions.",
            "Throughout my career, I've had the privilege of working with customers, product management and development teams to deliver products that genuinely improve patient outcomes and streamline clinical workflows.",
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
            title: "Medication Management System",
            image: "assets/images/medication project.png",
            industry: "Health Tech",
            role: "Product Owner",
            shortDescription: "Led the redesign of the medication management module of the EHR system used by 100,000+ users, improving customer satisfaction by 30% and reducing technical debt and support ticket volume significantly.",
            outcomes: [
                { value: "30%", label: "Customer Satisfaction Increase" },
                { value: "40%", label: "Fewer Support Tickets" }
            ],
            // Modal details
            fullDescription: "A comprehensive redesign of the medication management system serving over 100,000 users across multiple healthcare facilities.",
            duration: "18 months",
            challenge: "The existing system had low customer satisfaction rates and high support ticket volume due to confusing navigation and outdated UX patterns.",
            solution: "Led a user-centered redesign process, conducting extensive user research, defining personas, and facilitating design sprints with cross-functional teams. This resulted in a 30% increase in customer satisfaction and a 40% reduction in support ticket volume.",
        },
        {
            id: 2,
            title: "API based Open Services Platform",
            image: "assets/images/open services project.png",
            industry: "Health Tech",
            role: "Business Analyst",
            shortDescription: "Drove the requirement analysis and service design for a new API based Open Services Platform for a major healthcare system.",
            outcomes: [
                { value: "Service Design", label: "Completed in 2 months" },
                { value: "Service Build Coordination", label: "Ongoing" }
            ],
            // Modal details
            fullDescription: "End-to-end delivery of an API based Open Services Platform for a major healthcare system that enables other health tech software vendors to integrate with the system.",
            duration: "12 months",
            challenge: "Even though we had 10 certified integrated partner solutions, only 2 of them were actually being used by the customers. This creates a bottleneck in the revenue growth.",
            solution: "Defined comprehensive requirements, mapped the current customer journey and identified the pain points. This resulted in us identifying major gaps in the current platform and the ability to add new services to the platform.",
            keyOutcomes: [
                "A new service design for the platform designed within 2 months",
                "Buy in from all the key stakeholders in the company",
                "A clear implementation plan for the new services"
            ]
        },
        {
            id: 3,
            title: "Fikazo - a social network for newbies in Sweden",
            image: "assets/images/fikazo project.png",
            industry: "Social enterprise",
            role: "Startup Founder",
            shortDescription: "Created a social network for immigrants in Sweden to help them integrate into the country and find their way around.",
            outcomes: [
                { value: "70", label: "Registered Users" },
                { value: "10", label: "Friendships" }
            ],
            // Modal details
            fullDescription: "Created a social network for immigrants in Sweden to help them integrate into the country and find their way around.",
            duration: "4 months",
            challenge: "Immigrants find it difficult to integrate into the country and find their way around.",
            solution: "Conducted interviews with immigrants and locals to understand the pain points and the needs of the community. This resulted in us creating a social network that helps immigrants integrate into the country and find their way around by making meaningful connections with the locals.",
            keyOutcomes: [
                "70 registered users within a month of launching the MVP",
                "10 friendships made between immigrants and locals"
            ]
        },
        {
            id: 4,
            title: "OpenIDEO New Life Challenge",
            image: "assets/images/new life challenge project.png",
            industry: "Health and social care",
            role: "Product Designer",
            shortDescription: "Designed and delivered a prototype of a mobile app for OpenIDEO New Life Challenge",
            outcomes: [
                { value: "Top 5", label: "Ideas in the competition" },
                { value: "200+", label: "submissions from 100+ countries" }
            ],
            // Modal details
            fullDescription: "An application that gamifies the process of new parents getting ready for their new baby.",
            duration: "3 months",
            challenge: "The current process of new parents getting ready for their new baby is not engaging and not fun and seen more like a challenge than a journey.",
            solution: "Interviewed expecting parents, social and healthcare professionals to understand the pain points and the needs of the community. This resulted in us creating a mobile app that gamifies the process of new parents getting ready for their new baby.",
            keyOutcomes: [
                "A prototype of the mobile app was designed and submitted to the competition",
                "Our solution was selected as one of the top 5 ideas in the competition",
                "We got invited to the OpenIDEO office in San Francisco"
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
