document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#observeThis');

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add('showMe');
    } else {
      entries[0].target.classList.remove('showMe');
    }
  }, {
    threshold: 1.0,
  });

  observer.observe(section);
});
