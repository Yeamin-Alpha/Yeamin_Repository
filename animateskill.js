
document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll('.box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Stop observing after the element has appeared
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold as needed

  boxes.forEach(box => {
    observer.observe(box);
  });
});

