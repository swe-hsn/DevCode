// DOM Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navigationMenu = document.querySelector('.navigation-menu');
const developerNav = document.querySelector('.developer-nav');
const header = document.querySelector('header');
const langToggle = document.getElementById('langToggle');
const htmlElement = document.documentElement;

// Language system
let currentLang = localStorage.getItem('language') || 'ar';
let translations = {};

// Load translations
async function loadTranslations(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        translations = await response.json();
        return translations;
    } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback translations
        return getDefaultTranslations(lang);
    }
}
 
// Default translations fallback
function getDefaultTranslations(lang) {
    const defaultTranslations = {
        ar: {
            "page.title": "مطوّر برمجيات واجهات أمامية",
            "nav.brand": "Code",
            "nav.home": "الرئيسية",
            "nav.about": "نبذة",
            "nav.projects": "الأعمال",
            "nav.contact": "تواصل",
            "hero.title": "مطوّر برمجيات واجهات أمامية",
            "hero.subtitle": "أبني واجهات سريعة وسهلة الاستخدام",
            "hero.description": "باستخدام HTML وCSS وJavaScript، مع خبرة في تحسين الأداء ",
            "cta.primary": "تواصل معي",
            "about.title": "نبذة عني",
            "about.subtitle": "مطور برمجيات",
            "about.body": " شغوف بتطوير مواقع وتطبيقات الويب باستخدام تقنيات حديثة، وأسعى دائمًا لتعلم أحدث الأدوات وبناء حلول مبتكرة.",
            "skills.title": "المهارات التقنية",
            "skills.performance": "الأداء",
            "projects.title": "المشاريع",
            "projects.subtitle": "مجموعة من الأعمال التي تعكس الخبرة والإبداع",
            "projects.view_project": "عرض المشروع",
            "projects.items.0.title": "ملف تعريفي للشركات",
            "projects.items.0.desc": "واجهة مخصصة لعرض المميزات والخدمات للعملاء",
            "projects.items.1.title": "موقع متعدد اللغات",
            "projects.items.1.desc": "منصة ثنائية اللغة مع دعم RTL/LTR وتبديل سلس بين الواجهات",
            "projects.items.2.title": "تطبيق ويب تفاعلي",
            "projects.items.2.desc": "واجهة متجاوبة مع تفاعلات متقدمة وتحسينات للأداء",
            "experience.title": "الخبرة المهنية",
            "experience.role": "مطوّر واجهات مستقل",
            "experience.description": "تطوير مواقع ثابتة متعددة اللغات وتحسين الأداء ومقاييس Lighthouse",
            "experience.period": "2023 – الآن",
            "vmv.title": "الركيزة",
            "vmv.vision.title": "الهدف",
            "vmv.vision.content": "بناء واجهات ويب عصرية وسهلة الاستخدام تجمع بين الجمال والوظائف، مع التركيز على تجربة المستخدم المتميزة والأداء العالي.",
            "vmv.mission.title": "الرسالة",
            "vmv.mission.content": "تحويل الأفكار إلى تطبيقات ويب حية ومبتكرة باستخدام أحدث التقنيات، مع ضمان الوصولية والشمولية لجميع المستخدمين.",
            "vmv.values.title": "القيم",
            "vmv.values.quality": "الجودة في التنفيذ",
            "vmv.values.innovation": "الإبداع والابتكار",
            "vmv.values.collaboration": "روح الفريق والتعاون",
            "vmv.values.learning": "التعلم المستمر",
            "contact.title": "تواصل",
            "contact.tagline": "جاهز للتعاون في مشاريع الويب",
            "contact.email_label": "البريد الإلكتروني",
            "contact.phone_label": "الهاتف",
            "contact.address_label": "الموقع",
            "contact.address": "الرياض, المملكة العربية السعودية",
            "contact.form_name": "الاسم",
            "contact.form_email": "البريد الإلكتروني",
            "contact.form_message": "رسالتك",
            "contact.form_submit": "إرسال",
            "footer.rights": "جميع الحقوق محفوظة © 2025",
            "footer.made_with": "صُمّم بحُب واهتمام بالتفاصيل"
        },
        en: {
            "page.title": "Frontend Software Developer",
            "nav.brand": "Code",
            "nav.home": "Home",
            "nav.about": "About",
            "nav.projects": "Projects",
            "nav.contact": "Contact",
            "hero.title": "Frontend Software Developer",
            "hero.subtitle": "I build fast, accessible UI",
            "hero.description": "Using HTML, CSS, and JavaScript, focused on performance and usability",
            "cta.primary": "Contact Me",
            "about.title": "About Me",
            "about.subtitle": "Softwear Developer",
            "about.body": "Developer passionate about UI quality and UX, transitioning from music to software development while maintaining visual identity and attention to detail.",
            "skills.title": "Technical Skills",
            "skills.performance": "Performance",
            "projects.title": "Projects",
            "projects.subtitle": "A collection of work showcasing expertise and creativity",
            "projects.view_project": "View Project",
            "projects.items.0.title": "Interactive Projects Dashboard",
            "projects.items.0.desc": "A management UI with live filtering/sorting and subtle terminal-inspired animations",
            "projects.items.1.title": "Multilingual Website",
            "projects.items.1.desc": "Bilingual platform with RTL/LTR support and smooth interface switching",
            "projects.items.2.title": "Interactive Web App",
            "projects.items.2.desc": "Responsive interface with advanced interactions and performance optimizations",
            "experience.title": "Professional Experience",
            "experience.role": "Freelance Frontend Developer",
            "experience.description": "Building multilingual static sites and improving Lighthouse performance metrics",
            "experience.period": "2023 – Present",
            "vmv.title": "Pillar",
            "vmv.vision.title": "Vision",
            "vmv.vision.content": "Building modern, user-friendly web interfaces that combine beauty with functionality, focusing on outstanding user experience and high performance.",
            "vmv.mission.title": "Mission",
            "vmv.mission.content": "Transforming ideas into innovative, living web applications using cutting-edge technologies, while ensuring accessibility and inclusivity for all users.",
            "vmv.values.title": "Values",
            "vmv.values.quality": "Quality in execution",
            "vmv.values.innovation": "Creativity and innovation",
            "vmv.values.collaboration": "Teamwork and collaboration",
            "vmv.values.learning": "Continuous learning",
            "contact.title": "Contact",
            "contact.tagline": "Open to web collaborations",
            "contact.email_label": "Email",
            "contact.phone_label": "Phone",
            "contact.address_label": "Location",
            "contact.address": "Saudi Arabia",
            "contact.form_name": "Name",
            "contact.form_email": "Email",
            "contact.form_message": "Your message",
            "contact.form_submit": "Send",
            "footer.rights": "All rights reserved © 2025",
            "footer.made_with": "Crafted with care and attention to detail"
        }
    };
    return defaultTranslations[lang] || defaultTranslations.ar;
}

// Apply translations to page
function applyTranslations() {
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            element.placeholder = translations[key];
        }
    });

    // Update document title
    if (translations['page.title']) {
        document.title = translations['page.title'];
    }
}

// Set language and direction
async function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML attributes
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update toggle button
    langToggle.textContent = lang === 'ar' ? 'EN' : 'ع';

    // Load and apply translations
    translations = await loadTranslations(lang);
    applyTranslations();

    // Update typing animation text
    updateTypingAnimation();
}

// Initialize language system
async function initLanguage() {
    await setLanguage(currentLang);
}

// Language toggle handler
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(newLang);
    });
}

// Mobile Navigation Toggle
if (mobileMenuToggle && navigationMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navigationMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.navigation-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navigationMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const backgroundShapes = document.querySelector('.background-shapes');
    if (backgroundShapes) {
        backgroundShapes.style.transform = `translateY(${rate}px)`;
    }
});

// Intersection Observer for animations
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

// Elements to animate on scroll
const animateElements = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-developer, .vmv-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Programming-themed typing animation
const codeCommands = {
  ar: [
    'npm i react',
    'git clone repo-url',
    'yarn dev',
    'npm test',
    'docker-compose up',
    'git push',
    'console.log("أهلاً!");',
    'cd folder',
    'code .'
  ],
  en: [
    'npm i react',
    'git clone repo-url',
    'yarn dev',
    'npm test',
    'docker-compose up',
    'git push',
    'console.log("Hi!");',
    'cd folder',
    'code .'
  ]
};


let currentCommandIndex = 0;
let typingTimeoutId;

function typeWriter(element, text, speed = 100, callback) {
    let i = 0;
    element.innerHTML = '';

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typingTimeoutId = setTimeout(typing, speed);
        } else if (callback) {
            setTimeout(callback, 2000);
        }
    }
    typing();
}

function updateTypingAnimation() {
    const typingElement = document.querySelector('.dynamic-typing-text');
    if (!typingElement) return;

    const commands = codeCommands[currentLang] || codeCommands.ar;
    currentCommandIndex = 0;

    function typeNextCommand() {
        const command = commands[currentCommandIndex];
        typeWriter(typingElement, command, 80, () => {
            currentCommandIndex = (currentCommandIndex + 1) % commands.length;
            setTimeout(() => {
                typeWriter(typingElement, '', 30, typeNextCommand);
            }, 1500);
        });
    }

    typeNextCommand();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    // Initialize language system first
    initLanguage().then(() => {
        // Start typing animation after translations are loaded
        setTimeout(updateTypingAnimation, 1000);
    });
});

// Contact form handling
const contactFormWrapper = document.querySelector('.contact-form-wrapper');
if (contactFormWrapper) {
    contactFormWrapper.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !message) {
            const errorMsg = currentLang === 'ar' ? 
                'يرجى ملء جميع الحقول' : 
                'Please fill in all fields';
            showNotification(errorMsg, 'error');
            return;
        }

        // Simulate form submission
        const successMsg = currentLang === 'ar' ? 
            'تم إرسال الرسالة بنجاح!' : 
            'Message sent successfully!';
        showNotification(successMsg, 'success');
        this.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        ${currentLang === 'ar' ? 'left' : 'right'}: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
        font-family: Arial, sans-serif;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Skill cards hover effect with programming themes
document.querySelectorAll('.skill-card').forEach((card, index) => {
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];

    card.addEventListener('mouseenter', () => {
        card.style.background = gradients[index % gradients.length];
        card.style.transform = 'translateY(-15px) scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'var(--secondary-color)';
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards hover effect with enhanced animations
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// VMV Cards animations
document.querySelectorAll('.vmv-card').forEach((card, index) => {
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    ];

    card.addEventListener('mouseenter', () => {
        card.style.background = `${gradients[index % gradients.length]}`;
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'var(--primary-color)';
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Dark mode toggle (enhanced for programming theme)
function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '🌙';
    toggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        ${currentLang === 'ar' ? 'left' : 'right'}: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        background: var(--gradient-1);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 5px 20px rgba(139, 92, 246, 0.3);
    `;

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        toggle.innerHTML = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });

    toggle.addEventListener('mouseenter', () => {
        toggle.style.transform = 'scale(1.1)';
    });

    toggle.addEventListener('mouseleave', () => {
        toggle.style.transform = 'scale(1)';
    });

    document.body.appendChild(toggle);
}

// Initialize dark mode toggle
createDarkModeToggle();

// Add light mode styles
const lightModeStyles = document.createElement('style');
lightModeStyles.innerHTML = `
    .light-mode {
        --primary-color: #ffffff;
        --secondary-color: #f8f9fa;
        --text-color: #333333;
        --text-secondary: #666666;
        --code-bg: #f8f9fa;
        --code-border: #dee2e6;
    }

    .light-mode header {
        background: rgba(255, 255, 255, 0.95) !important;
    }

    .light-mode .terminal-window,
    .light-mode .code-editor-demo,
    .light-mode .performance-chart {
        background: #f8f9fa;
        border-color: #dee2e6;
    }

    .light-mode .terminal-body,
    .light-mode .editor-body {
        color: #333;
    }

    .light-mode .terminal-prompt {
        color: #28a745;
    }

    .light-mode .dynamic-typing-text {
        color: #007bff;
    }
`;
document.head.appendChild(lightModeStyles);

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language system
    initLanguage();

    // Add CSS custom properties for dynamic animations
    const style = document.createElement('style');
    style.textContent = `
        .chart-bar:nth-child(1) { --height: 80%; animation-delay: 0s; }
        .chart-bar:nth-child(2) { --height: 60%; animation-delay: 0.2s; }
        .chart-bar:nth-child(3) { --height: 90%; animation-delay: 0.4s; }
        .chart-bar:nth-child(4) { --height: 70%; animation-delay: 0.6s; }
        .chart-bar:nth-child(5) { --height: 85%; animation-delay: 0.8s; }
    `;
    document.head.appendChild(style);
});

// Enhanced cursor following effect for code theme
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    cursorX += distX * 0.1;
    cursorY += distY * 0.1;

    // Update any cursor-following elements here if needed
    requestAnimationFrame(animateCursor);
}

animateCursor();

console.log('🚀 Developer Portfolio loaded successfully! Welcome to the coding experience.');