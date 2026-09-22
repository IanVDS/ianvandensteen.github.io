(() => {
  const header = document.querySelector(".site-header");
  const year = document.getElementById("year");

  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (year) year.textContent = String(new Date().getFullYear());
})();
