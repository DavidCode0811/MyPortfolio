// Smooth scrolling for navigation
document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', (e) => {
        const target = e.target.textContent.toLowerCase();
        const section = document.querySelector(`#${target}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation and submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-x-full';
        successMessage.textContent = 'Message sent successfully!';
        document.body.appendChild(successMessage);

        // Animate in
        setTimeout(() => {
            successMessage.classList.remove('translate-x-full');
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            successMessage.classList.add('translate-x-full');
            setTimeout(() => {
                successMessage.remove();
            }, 500);
        }, 3000);

        // Reset form
        contactForm.reset();
    });
}

// Animate skills on scroll
const skillsSection = document.querySelector('.bg-gray-50');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-progress');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.bg-blue-500').forEach(progressBar => {
    observer.observe(progressBar);
});

// Add hover effect to project cards
document.querySelectorAll('.bg-gray-50.rounded-lg').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('transform', 'scale-105', 'transition-all', 'duration-300');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('transform', 'scale-105');
    });
});

// Add dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'fixed bottom-4 right-4 bg-slate-800 text-white p-2 rounded-full shadow-lg';
darkModeToggle.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
    </svg>
`;
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

// Add scroll to top button
const scrollToTop = document.createElement('button');
scrollToTop.className = 'fixed bottom-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hidden';
scrollToTop.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
`;
document.body.appendChild(scrollToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.classList.remove('hidden');
    } else {
        scrollToTop.classList.add('hidden');
    }
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.classList.toggle('dark', savedTheme === 'dark');
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

console.log('Theme toggle initialized');

document.addEventListener('DOMContentLoaded', () => {
    // Navigation active state
    const navButtons = document.querySelectorAll('nav button:not(#theme-toggle)');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            navButtons.forEach(btn => {
                btn.classList.remove('bg-slate-100', 'dark:bg-blue-900/30', 'text-slate-900', 'dark:text-blue-400');
            });
            
            // Add active class to clicked button
            button.classList.add('bg-slate-100', 'dark:bg-blue-900/30', 'text-slate-900', 'dark:text-blue-400');
        });
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
    }

    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    // Skill cards hover effect
    const cards = document.querySelectorAll('.skill-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            card.style.transform = `perspective(1000px) rotateX(${deltaY * -10}deg) rotateY(${deltaX * 10}deg) scale(1.05)`;
            card.style.boxShadow = `0 0 35px rgba(59, 130, 246, 0.6), ${deltaX * 20}px ${deltaY * 20}px 20px rgba(0, 0, 0, 0.1)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    // Profile picture hover effect
    const profilePic = document.querySelector('img[alt="Profile Picture"]');
    if (profilePic) {
        profilePic.addEventListener('mouseenter', () => {
            profilePic.style.transform = 'scale(1.05)';
            profilePic.style.boxShadow = '0 0 35px rgba(59, 130, 246, 0.6)';
        });
        
        profilePic.addEventListener('mouseleave', () => {
            profilePic.style.transform = 'scale(1)';
            profilePic.style.boxShadow = 'none';
        });
    }
}); 