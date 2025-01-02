const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle hamburger animation
    sideMenu.classList.toggle('open');   // Toggle side menu visibility
});

document.querySelectorAll('.side-menu > ul > li').forEach((menuItem) => {
    const dropdown = menuItem.querySelector('.dropdown');
    if (dropdown) {
        menuItem.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    }
});

function generateStars(container, rating, totalStars = 5) {
    const starPath =
      'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z';
  
    for (let i = 0; i < totalStars; i++) {
      const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      star.setAttribute('viewBox', '0 0 20 20');
      star.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      star.setAttribute('fill', i < rating ? 'gold' : 'lightgray');
      star.innerHTML = `<path d="${starPath}"></path>`;
      container.appendChild(star);
    }
  }
  
  // Automatically generate stars for elements with the `stars` class
  document.querySelectorAll('.stars').forEach((container) => {
    const rating = parseInt(container.getAttribute('data-rating'), 10) || 0;
    generateStars(container, rating);
  });
  