function animateStats() {
  const stats = document.querySelectorAll(".stat_value");

  stats.forEach((stat) => {
    const target = 100;
    let count = 0;
    const increment = target / 250;

    const updateCount = () => {
      count += increment;

      if (count < target) {
        stat.textContent = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else stat.textContent = target;
    };
    updateCount();
  });
}
window.addEventListener("DOMContentLoaded", animateStats);
