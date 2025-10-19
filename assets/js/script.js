document.addEventListener('DOMContentLoaded', () => {
  const loadComponent = (url, placeholderId, callback) => {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
          placeholder.innerHTML = data;
        }
        if (callback) {
          callback();
        }
      })
      .catch(error => console.error(`Error loading ${url}: ${error}`));
  };

  const initializeHamburger = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
  };

  loadComponent('components/_navbar.html', 'navbar-container', initializeHamburger);
  loadComponent('components/_footer.html', 'footer-container');
});
