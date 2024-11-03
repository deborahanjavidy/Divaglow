const searchInput = document.querySelector('.search-bar');
searchInput.addEventListener('focus', () => {
   searchInput.classList.add('expanded');
});
searchInput.addEventListener('blur', () => {
   searchInput.classList.remove('expanded');
});
// Animation on scroll
window.addEventListener('scroll', () => {
   const aboutSection = document.getElementById('about');
   const sectionPosition = aboutSection.getBoundingClientRect().top;
   const screenPosition = window.innerHeight / 1.3;

   if (sectionPosition < screenPosition) {
       aboutSection.classList.add('visible');
   }
});

document.querySelectorAll('.founder').forEach((founder) => {
   founder.addEventListener('mouseenter', () => {
       founder.classList.add('highlight');
   });
   founder.addEventListener('mouseleave', () => {
       founder.classList.remove('highlight');
   });
});
// Animation on scroll for the award section
window.addEventListener('scroll', () => {
   const awardSection = document.querySelector('.award-content');
   const sectionPosition = awardSection.getBoundingClientRect().top;
   const screenPosition = window.innerHeight / 1.3;

   if (sectionPosition < screenPosition) {
       awardSection.classList.add('visible');
   }
});
