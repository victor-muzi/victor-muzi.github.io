// Disable Chirpy's image features for project pages
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('/projects/')) {
    // Remove shimmer effect and click-to-redirect
    const images = document.querySelectorAll('.project-content img, article img');
    images.forEach(img => {
      // Remove Chirpy's wrapper if it exists
      if (img.parentElement.tagName === 'A' && img.parentElement.href === img.src) {
        img.parentElement.replaceWith(img);
      }
      // Remove shimmer classes
      img.classList.remove('shimmer');
      img.removeAttribute('data-lqip');
      
      // Add lightbox functionality
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function(e) {
        e.preventDefault();
        const overlay = document.createElement('div');
        overlay.className = 'image-lightbox';
        overlay.innerHTML = `
          <img src="${this.src}" alt="${this.alt || ''}">
          <span class="close-lightbox">&times;</span>
        `;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', function() {
          this.remove();
        });
      });
    });
  }
});
