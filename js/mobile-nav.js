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
  let lastTouchAt = 0;

  function menuIsOpen() {
    return panel.classList.contains("is-open");
  }

  function ignoreDuplicateClick(e) {
    return e.type === "click" && Date.now() - lastTouchAt < 600;
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

  function handlePanelTap(e) {
    if (!mobileMq.matches) return;
    if (ignoreDuplicateClick(e)) return;
    if (e.type === "touchend") lastTouchAt = Date.now();

    const link = e.target.closest(".nav-mobile__link");
    if (link && panel.contains(link)) {
      e.preventDefault();
      followLink(link);
      return;
    }

    if (e.target.closest(".nav-mobile-close")) {
      e.preventDefault();
      setMenuOpen(false);
    }
  }

  function handleBurgerTap(e) {
    if (!mobileMq.matches) return;
    if (ignoreDuplicateClick(e)) return;
    if (e.type === "touchend") lastTouchAt = Date.now();

    e.preventDefault();
    e.stopPropagation();
    setMenuOpen(!menuIsOpen());
  }

  panel.addEventListener("touchend", handlePanelTap, { passive: false });
  panel.addEventListener("click", handlePanelTap);
  burger.addEventListener("touchend", handleBurgerTap, { passive: false });
  burger.addEventListener("click", handleBurgerTap);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuIsOpen()) setMenuOpen(false);
  });

  mobileMq.addEventListener("change", (e) => {
    if (!e.matches) setMenuOpen(false);
  });
})();
