(function () {
  "use strict";

  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  const yearEl = document.getElementById("year");
  const videoModal = document.getElementById("videoModal");
  const demoVideo = document.getElementById("demoVideo");
  const videoModalTitle = document.getElementById("videoModalTitle");
  let lastVideoTrigger = null;

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header shadow on scroll
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  if (navToggle && mobileNav) {
    const closeMenu = () => {
      navToggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    };

    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      if (open) {
        closeMenu();
      } else {
        navToggle.setAttribute("aria-expanded", "true");
        mobileNav.hidden = false;
      }
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  // Reveal on scroll — progressive enhancement only.
  // Content is visible by default; this adds a subtle entrance and
  // never leaves anything permanently hidden.
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealAll = () => revealEls.forEach((el) => el.classList.add("is-visible"));

  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
    // Failsafe: if the observer never fires, reveal everything anyway.
    window.setTimeout(revealAll, 2400);
  } else {
    revealAll();
  }

  // Project video modal
  if (videoModal && demoVideo && videoModalTitle) {
    const openVideo = (trigger) => {
      const src = trigger.getAttribute("data-video-src");
      if (!src) return;

      lastVideoTrigger = trigger;
      videoModalTitle.textContent = trigger.getAttribute("data-video-title") || "Demo";
      demoVideo.poster = trigger.getAttribute("data-video-poster") || "";
      demoVideo.src = src;
      demoVideo.load();

      videoModal.classList.add("is-open");
      videoModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");

      const closeButton = videoModal.querySelector(".video-modal-close");
      if (closeButton) closeButton.focus({ preventScroll: true });
    };

    const closeVideo = () => {
      if (!videoModal.classList.contains("is-open")) return;

      demoVideo.pause();
      demoVideo.removeAttribute("src");
      demoVideo.removeAttribute("poster");
      demoVideo.load();

      videoModal.classList.remove("is-open");
      videoModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");

      if (lastVideoTrigger) lastVideoTrigger.focus({ preventScroll: true });
      lastVideoTrigger = null;
    };

    document.querySelectorAll("[data-video-src]").forEach((trigger) => {
      trigger.addEventListener("click", () => openVideo(trigger));
    });

    videoModal.querySelectorAll("[data-modal-close]").forEach((trigger) => {
      trigger.addEventListener("click", closeVideo);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeVideo();
    });
  }
})();
