(function () {
  function initMobileNav() {
    const nav = document.querySelector(".navigation");
    const burger = document.querySelector(".navigation > .nav-burger");
    const panel = document.getElementById("nav-mobile-panel");

    if (!burger || !panel || !nav) return;

    if (panel.parentElement !== document.body) {
      document.body.appendChild(panel);
    }

    const mobileMq = window.matchMedia("(max-width: 991px)");

    function menuIsOpen() {
      return panel.classList.contains("is-open");
    }

    function scrollToSection(hash) {
      const id = hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (!el) return;

      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");

      requestAnimationFrame(() => {
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - 16;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        history.replaceState(null, "", "#" + id);
      });
    }

    function setMenuOpen(open) {
      panel.classList.toggle("is-open", open);
      burger.classList.toggle("is-open", open);
      nav.classList.toggle("menu-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("no-scroll", open);
      document.documentElement.classList.toggle("no-scroll", open);

      if (open) {
        nav.style.transform = "translateY(0)";
      } else {
        nav.style.removeProperty("transform");
        window.dispatchEvent(new Event("scroll"));
      }
    }

    function followLink(link) {
      const href = (link.getAttribute("href") || "").trim();
      if (!href) return;

      setMenuOpen(false);

      window.setTimeout(() => {
        if (href.startsWith("#")) {
          scrollToSection(href);
          return;
        }

        const openNew =
          link.target === "_blank" || link.hasAttribute("target");
        if (openNew) {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = href;
        }
      }, 300);
    }

    burger.addEventListener(
      "pointerup",
      (e) => {
        if (!mobileMq.matches) return;
        e.preventDefault();
        e.stopPropagation();
        setMenuOpen(!menuIsOpen());
      },
      { passive: false }
    );

    panel.addEventListener(
      "pointerup",
      (e) => {
        if (!mobileMq.matches) return;

        const link = e.target.closest(".nav-mobile__link");
        if (link) {
          e.preventDefault();
          followLink(link);
          return;
        }

        if (e.target.closest(".nav-mobile-close")) {
          e.preventDefault();
          setMenuOpen(false);
        }
      },
      { passive: false }
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuIsOpen()) setMenuOpen(false);
    });

    mobileMq.addEventListener("change", (e) => {
      if (!e.matches) setMenuOpen(false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNav);
  } else {
    initMobileNav();
  }
})();
