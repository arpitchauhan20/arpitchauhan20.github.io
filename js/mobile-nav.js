(function () {
  const nav = document.querySelector(".navigation");
  const burger = document.querySelector(".navigation > .nav-burger");
  const panel = document.getElementById("nav-mobile-panel");
  const closeBtn = panel?.querySelector(".nav-mobile-close");

  if (!burger || !panel || !nav) return;

  if (panel.parentElement !== document.body) {
    document.body.appendChild(panel);
  }

  const mobileMq = window.matchMedia("(max-width: 991px)");

  function menuIsOpen() {
    return panel.classList.contains("is-open");
  }

  function scrollToSection(hash) {
    if (!hash || hash === "#") return;
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

    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    const openInNewTab =
      link.target === "_blank" || link.hasAttribute("target");

    setMenuOpen(false);

    window.setTimeout(() => {
      if (isExternal) {
        if (openInNewTab) {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = href;
        }
        return;
      }
      if (href.startsWith("#")) {
        scrollToSection(href);
      }
    }, 280);
  }

  panel.querySelectorAll(".nav-mobile__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (!mobileMq.matches) return;
      e.preventDefault();
      followLink(link);
    });
  });

  burger.addEventListener("click", (e) => {
    if (!mobileMq.matches) return;
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen(!menuIsOpen());
  });

  closeBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen(false);
  });

  panel.addEventListener("click", (e) => {
    if (e.target === panel) setMenuOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuIsOpen()) setMenuOpen(false);
  });
})();
