// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// SPA Navigation - Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Smooth scroll to section
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Update URL hash without jumping
            history.pushState(null, null, targetId);
            
            // Update active link
            updateActiveLink(link);
        }
    });
});

// Function to update active navigation link
function updateActiveLink(activeLink) {
    navLinks.forEach(l => l.classList.remove('active'));
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Detect active section on scroll
function detectActiveSection() {
    const sections = document.querySelectorAll('.section-page, .hero');
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || 'home';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const activeNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeNavLink && !activeNavLink.classList.contains('active')) {
                updateActiveLink(activeNavLink);
                history.replaceState(null, null, `#${sectionId}`);
            }
        }
    });
}

// Throttle function for scroll performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Navbar scroll effect and section detection
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', throttle(() => {
    const currentScroll = window.pageYOffset;
    
    // Navbar background change
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Detect active section
    detectActiveSection();
    
    lastScroll = currentScroll;
}, 100));

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

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add hover effect to statistics
const highlights = document.querySelectorAll('.highlight');
highlights.forEach(highlight => {
    highlight.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
        this.style.transform = 'scale(1.2)';
    });
    
    highlight.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBox = document.querySelector('.hero-box');
    const dotsPattern = document.querySelector('.dots-pattern');
    
    if (heroBox) {
        heroBox.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (dotsPattern) {
        dotsPattern.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.1}px)`;
    }
});

// Add ripple effect to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .nav-link {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add interactive statistics counter animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = progress * (end - start) + start;
        element.textContent = Math.floor(value);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Trigger counter animation when statistics come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const highlights = entry.target.querySelectorAll('.highlight');
            highlights.forEach(highlight => {
                const text = highlight.textContent;
                const number = parseFloat(text);
                if (!isNaN(number)) {
                    animateValue(highlight, 0, number, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach(item => {
    if (item.querySelector('.highlight')) {
        statsObserver.observe(item);
    }
});

// Generate floating particles (reduced count for professional look)
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 15; // Reduced for subtlety
    const colors = ['#EC407A', '#BA68C8', '#F8BBD0', '#E1BEE7'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2; // Smaller particles
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 15; // Slower movement
        const delay = Math.random() * 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            background: ${color};
            opacity: 0.4;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Animate stat numbers
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        
        // Start animation when hero is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

// Mouse parallax effect for hero (subtle movement)
function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const heroLeft = document.querySelector('.hero-left');
    const heroBox = document.querySelector('.hero-box');
    
    if (!hero || !heroLeft || !heroBox) return;
    
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 8;
        const yPercent = (clientY / innerHeight - 0.5) * 8;
        
        // Apply subtle parallax to left content
        heroLeft.style.transform = `translate(${xPercent * 0.3}px, ${yPercent * 0.3}px)`;
        
        // Apply stronger parallax to card
        heroBox.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
    });
    
    hero.addEventListener('mouseleave', () => {
        heroLeft.style.transform = 'translate(0, 0)';
        heroBox.style.transform = 'translate(0, 0)';
    });
}

// Initialize hero effects
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateStats();
    initHeroParallax();
});

// Preload hero background image for smooth appearance
const heroBackground = document.querySelector('.hero-background');
if (heroBackground) {
    const bgImage = new Image();
    const bgUrl = window.getComputedStyle(heroBackground).backgroundImage;
    const urlMatch = bgUrl.match(/url\(['"]?(.*?)['"]?\)/);
    
    if (urlMatch && urlMatch[1]) {
        bgImage.src = urlMatch[1];
        bgImage.onload = () => {
            heroBackground.style.opacity = '1';
        };
    }
}

// Add loading class management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Handle initial hash on page load
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                const activeLink = document.querySelector(`.nav-link[href="${hash}"]`);
                if (activeLink) updateActiveLink(activeLink);
            }
        }, 100);
    }
});

// Form submission handling
const signupForm = document.getElementById('patientSignupForm');
const signupSuccess = document.getElementById('signupSuccess');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(signupForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        console.log('Form submitted with data:', data);
        
        // Show success message
        signupForm.style.display = 'none';
        signupSuccess.style.display = 'block';
        
        // Smooth scroll to success message
        signupSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // In a real application, you would send this data to a server
        // fetch('/api/signup', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // }).then(response => response.json())
        //   .then(data => console.log('Success:', data));
    });
}

// Add smooth scroll for browser back/forward buttons
window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

console.log('Mother\'s Aid SPA loaded successfully! 🏥');

