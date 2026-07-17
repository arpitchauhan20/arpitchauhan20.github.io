(function () {
  const toggle = document.getElementById("mob-menu-toggle");
  const drawer = document.getElementById("mob-drawer");
  const closeBtn = document.getElementById("mob-menu-close");
  const backdrop = drawer?.querySelector(".mob-drawer__backdrop");

  if (!toggle || !drawer) return;

  const mobileMq = window.matchMedia("(max-width: 991px)");
  let lastTouchAt = 0;

  function isOpen() {
    return drawer.classList.contains("is-open");
  }

  function ignoreDuplicateClick(e) {
    return e.type === "click" && Date.now() - lastTouchAt < 600;
  }

  function setOpen(open) {
    drawer.classList.toggle("is-open", open);
    toggle.classList.toggle("is-active", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("mob-menu-open", open);
    document.body.classList.toggle("no-scroll", open);
    document.documentElement.classList.toggle("no-scroll", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
  }

  function scrollToSection(hash) {
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;

    document.body.classList.remove("mob-menu-open", "no-scroll");
    document.documentElement.classList.remove("no-scroll");

    const bar = document.getElementById("mob-bar");
    const offset = (bar?.offsetHeight || 56) + 8;

    requestAnimationFrame(() => {
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      history.replaceState(null, "", "#" + id);
    });
  }

  function handleLink(link) {
    const href = (link.getAttribute("href") || "").trim();
    if (!href) return;

    setOpen(false);

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
    }, 320);
  }

  function onToggle(e) {
    if (!mobileMq.matches) return;
    if (ignoreDuplicateClick(e)) return;
    if (e.type === "touchend") lastTouchAt = Date.now();

    e.preventDefault();
    setOpen(!isOpen());
  }

  function onClose(e) {
    if (!mobileMq.matches) return;
    if (ignoreDuplicateClick(e)) return;
    if (e.type === "touchend") lastTouchAt = Date.now();

    e.preventDefault();
    setOpen(false);
  }

  function onDrawerTap(e) {
    if (!mobileMq.matches || !isOpen()) return;
    if (ignoreDuplicateClick(e)) return;
    if (e.type === "touchend") lastTouchAt = Date.now();

    const link = e.target.closest(".mob-drawer a");
    if (link) {
      e.preventDefault();
      handleLink(link);
      return;
    }

    if (e.target === backdrop) {
      e.preventDefault();
      setOpen(false);
    }
  }

  toggle.addEventListener("click", onToggle);
  toggle.addEventListener("touchend", onToggle, { passive: false });
  closeBtn?.addEventListener("click", onClose);
  closeBtn?.addEventListener("touchend", onClose, { passive: false });
  drawer.addEventListener("click", onDrawerTap);
  drawer.addEventListener("touchend", onDrawerTap, { passive: false });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) setOpen(false);
  });

  mobileMq.addEventListener("change", (e) => {
    if (!e.matches) setOpen(false);
  });
})();
