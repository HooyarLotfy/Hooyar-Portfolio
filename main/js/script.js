document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll("[id^='pb']");

  progressBars.forEach((progressBar) => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetWidth = progressBar.getAttribute("data-width");
            progressBar.querySelector("div").style.width = targetWidth;
            progressBar.querySelector("div").style.transition = "width 1.5s ease-in-out";
            observer.unobserve(progressBar);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(progressBar);
  });
});
