 
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loaderbg');
    console.log('website fully loaded!')
    
        setTimeout(() => {
    loader.style.display = 'none';
}, 2000); 


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').then(() => {
            console.log('Service Worker registered successfully.');
        }).catch(err => {
            console.error('Service Worker registration failed:', err);
        });
    }
});
const hamburgerMenu = document.getElementById('hamburger-menu');
const menuWindow = document.getElementById('menu-window');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    hamburgerMenu.classList.remove('hidden');
    hamburgerMenu.classList.add('glowing'); // Add glowing effect
    setTimeout(() => {
      hamburgerMenu.classList.remove('glowing'); // Remove glowing effect after 1 second
    }, 1000);
  } else {
    hamburgerMenu.classList.add('hidden');
  }
});

hamburgerMenu.addEventListener('click', () => {
  menuWindow.classList.toggle('visible'); // Toggle visibility of the menu
});
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Adjust speed for animation (higher = slower)

    const animateCounter = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); // Stop observing once the animation starts
                }
            });
        },
        { threshold: 0.5 } // Start animation when 50% of the section is visible
    );

    counters.forEach((counter) => observer.observe(counter));
});
