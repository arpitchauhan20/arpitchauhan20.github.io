(function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  const initialized = new WeakSet();

  function initScrollAnim(wrapper) {
    if (initialized.has(wrapper)) return;
    initialized.add(wrapper);

    const masks = wrapper.querySelectorAll(".use-case__img-mask");
    if (!masks.length) return;

    gsap.set(masks, { clipPath: "inset(30%)" });

    gsap.timeline({
      scrollTrigger: {
        trigger: masks[0],
        start: "top bottom",
        end: "30% bottom",
        scrub: 1,
      },
    }).to(masks, {
      clipPath: "inset(0%)",
      ease: "none",
      stagger: 0.1,
    });
  }

  function boot() {
    const wrappers = document.querySelectorAll(".use-case__wrapper");
    if (!wrappers.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          initScrollAnim(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.01 }
    );

    wrappers.forEach((wrapper) => observer.observe(wrapper));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
