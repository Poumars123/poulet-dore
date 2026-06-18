// ========== THÈME SOMBRE ==========
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');

function getThemeIcon(theme) {
    return theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function getThemeText(theme) {
    return theme === 'dark' ? 'Mode clair' : 'Mode sombre';
}

function updateThemeUI(theme) {
    // Mettre à jour l'icône du bouton desktop
    if (themeToggle) {
        const desktopIcon = themeToggle.querySelector('i');
        if (desktopIcon) {
            desktopIcon.className = getThemeIcon(theme);
        }
    }
    
    // Mettre à jour l'icône et le texte du bouton mobile
    if (themeToggleMobile) {
        const mobileIcon = themeToggleMobile.querySelector('i');
        const mobileText = themeToggleMobile.querySelector('span');
        if (mobileIcon) {
            mobileIcon.className = getThemeIcon(theme);
        }
        if (mobileText) {
            mobileText.textContent = getThemeText(theme);
        }
    }
}

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('poulet-dore-theme', theme);
    updateThemeUI(theme);
}

function toggleTheme() {
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialisation
const savedTheme = localStorage.getItem('poulet-dore-theme') || 'light';
setTheme(savedTheme);

// Écouteurs d'événements
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
}

// ========== MENU MOBILE ==========
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    const isActive = mobileMenu.classList.toggle('active');
    menuIcon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
});

// Fermer le menu au clic sur un lien (sauf le bouton thème)
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
    });
});

// ========== HEADER SCROLL ==========
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== ANIMATIONS AU SCROLL ==========
const animatedElements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

animatedElements.forEach(el => observer.observe(el));

// ========== SMOOTH SCROLL POUR LIENS ANCRES ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});