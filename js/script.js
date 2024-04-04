// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Skip link
const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('main');

skipLink.addEventListener('click', () => {
  mainContent.scrollIntoView({ behavior: 'smooth' });
});

// Image hover effect
const images = document.querySelectorAll('.grid-container img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.3s ease';
  });
});

// Video playback
const videos = document.querySelectorAll('video');

videos.forEach(video => {
  video.addEventListener('mouseover', () => {
    video.play();
  });

  video.addEventListener('mouseout', () => {
    video.pause();
  });
});