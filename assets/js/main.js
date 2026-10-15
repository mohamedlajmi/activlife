(() => {
  "use strict";

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Visuels décoratifs (hero, pro) ---------- */
  $$("[data-pack]").forEach((el, i) => {
    const p = byId[el.dataset.pack];
    if (p) el.innerHTML = packVisual(p, "deco" + i);
  });

  /* ---------- Grille produits ---------- */
  const grid = $("#productGrid");
  const note = $("#filterNote");
  let current = { type: "cat", value: "all" };

  const card = (p) => `
    <article class="product-card" data-id="${p.id}" style="--tint:${p.tint}">
      <button class="product-card__hit" data-open="${p.id}" aria-label="Voir la fiche ${p.name}"></button>
      <div class="product-card__media">
        ${p.isNew ? `<span class="tag tag--new">Nouveau</span>` : ""}
        <span class="tag">${p.badge}</span>
        ${packVisual(p, "card")}
      </div>
      <div class="product-card__body">
        <span class="product-card__cat">${CATEGORIES[p.cat]}</span>
        <h3>${p.name}</h3>
        <p>${p.tagline}</p>
        <div class="product-card__foot">
          <span class="product-card__formats">${p.formats.join(" · ")}</span>
          <span class="product-card__more" aria-hidden="true">Fiche
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </div>
    </article>`;

  function render() {
    const list = PRODUCTS.filter(p =>
      current.type === "need" ? p.needs.includes(current.value)
        : current.value === "all" || p.cat === current.value
    );
    grid.innerHTML = list.map(card).join("");

    if (current.type === "need") {
      const need = NEEDS.find(n => n.id === current.value);
      note.hidden = false;
      note.innerHTML = `Produits pour : <strong>${need.label}</strong> <button type="button" class="filter-note__reset">Voir tous les produits ✕</button>`;
    } else {
      note.hidden = true;
    }

    $$(".filter").forEach(b => {
      const active = current.type === "cat" && b.dataset.filter === current.value;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active);
    });

    if (!reduceMotion) {
      $$(".product-card", grid).forEach((c, i) => {
        c.style.animationDelay = `${i * 50}ms`;
        c.classList.add("pop");
      });
    }
  }

  $$(".filter").forEach(b => {
    const v = b.dataset.filter;
    $(".filter__count", b).textContent = v === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === v).length;
    b.addEventListener("click", () => { current = { type: "cat", value: v }; render(); });
  });

  note.addEventListener("click", e => {
    if (e.target.closest(".filter-note__reset")) { current = { type: "cat", value: "all" }; render(); }
  });

  grid.addEventListener("click", e => {
    const btn = e.target.closest("[data-open]");
    if (btn) openModal(btn.dataset.open, btn);
  });

  render();

  /* ---------- Besoins ---------- */
  $("#needsGrid").innerHTML = NEEDS.map(n => {
    const prods = PRODUCTS.filter(p => p.needs.includes(n.id));
    return `
      <button class="need-card reveal" data-need="${n.id}">
        <span class="need-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${n.icon}"/></svg></span>
        <span class="need-card__label">${n.label}</span>
        <span class="need-card__desc">${n.desc}</span>
        <span class="need-card__prods">${prods.map(p => p.name).join(" · ")}</span>
        <span class="need-card__arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </button>`;
  }).join("");

  $("#needsGrid").addEventListener("click", e => {
    const b = e.target.closest("[data-need]");
    if (!b) return;
    current = { type: "need", value: b.dataset.need };
    render();
    $("#produits").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------- Modal fiche produit ---------- */
  const modal = $("#modal");
  const modalBody = $("#modalBody");
  let lastFocus = null;

  const list = (items, cls = "check-list") => `<ul class="${cls}">${items.map(i => `<li>${i}</li>`).join("")}</ul>`;

  function openModal(id, trigger) {
    const p = byId[id];
    if (!p) return;
    lastFocus = trigger || document.activeElement;
    modalBody.innerHTML = `
      <div class="pdp" style="--tint:${p.tint}">
        <div class="pdp__media">${packVisual(p, "modal")}</div>
        <div class="pdp__info">
          <span class="product-card__cat">${CATEGORIES[p.cat]}</span>
          <h2 id="modalTitle">${p.name}</h2>
          <p class="pdp__tagline">${p.tagline}</p>
          <p>${p.description}</p>
          <div class="pdp__chips">${p.formats.map(f => `<span class="chip">${f}</span>`).join("")}</div>

          <h3>Bénéfices</h3>
          ${list(p.benefits)}

          ${p.actifs ? `<h3>Actifs clés</h3><div class="pdp__chips">${p.actifs.map(a => `<span class="chip chip--soft">${a}</span>`).join("")}</div>` : ""}

          <h3>Mode d’utilisation</h3>
          ${list(p.usage, "usage-list")}

          <div class="pdp__warn">
            <h3>Précautions</h3>
            ${list(p.precautions, "warn-list")}
          </div>

          <a href="#contact" class="btn btn--primary btn--block" data-ask="${p.id}">Demander des informations</a>
        </div>
      </div>`;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(() => modal.classList.add("is-open"));
    $(".modal__close", modal).focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { modal.hidden = true; }, reduceMotion ? 0 : 250);
    if (lastFocus) lastFocus.focus();
  }

  modal.addEventListener("click", e => {
    if (e.target.closest("[data-close]")) closeModal();
    const ask = e.target.closest("[data-ask]");
    if (ask) {
      $("#f-product").value = ask.dataset.ask;
      lastFocus = $("#f-name");
      closeModal();
    }
  });

  document.addEventListener("keydown", e => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") {
      const f = $$("button, a[href], input, select, textarea", modal);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Header, menu mobile, lien actif ---------- */
  const header = $("#header");
  const burger = $("#burger");
  const nav = $("#nav");
  const toTop = $("#toTop");

  const setMenu = (open) => {
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("no-scroll", open);
    document.body.classList.toggle("menu-open", open);
  };
  burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  window.addEventListener("resize", () => { if (window.innerWidth >= 960) setMenu(false); });

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 20);
    toTop.classList.toggle("is-visible", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const links = $$(".nav__link");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  /* ---------- Animations d'apparition ---------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(el => io.observe(el));
  } else {
    $$(".reveal").forEach(el => el.classList.add("is-in"));
  }

  /* ---------- Formulaire de contact (mailto) ---------- */
  const sel = $("#f-product");
  PRODUCTS.forEach(p => sel.insertAdjacentHTML("beforeend", `<option value="${p.id}">${p.name}</option>`));

  $$("[data-profile]").forEach(a => a.addEventListener("click", () => { $("#f-profile").value = a.dataset.profile; }));

  $("#footerProducts").innerHTML = PRODUCTS.map(p =>
    `<li><a href="#produits" data-foot="${p.id}">${p.name}</a></li>`).join("");
  $("#footerProducts").addEventListener("click", e => {
    const a = e.target.closest("[data-foot]");
    if (a) { e.preventDefault(); openModal(a.dataset.foot, a); }
  });

  const form = $("#contactForm");
  const status = $("#formStatus");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    $$("[required]", form).forEach(f => {
      const valid = f.value.trim() && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
      f.closest(".field").classList.toggle("has-error", !valid);
      if (!valid) ok = false;
    });
    if (!ok) {
      status.textContent = "Merci de compléter les champs obligatoires.";
      status.className = "form-status is-error";
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const prod = d.product ? byId[d.product].name : "Question générale";
    const subject = `[Site web] ${d.profile} — ${prod}`;
    const body = `Nom : ${d.name}\nE-mail : ${d.email}\nTéléphone : ${d.phone || "-"}\nProfil : ${d.profile}\nProduit : ${prod}\n\n${d.message}`;
    window.location.href = `mailto:contact@activlife-labs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Votre messagerie va s’ouvrir pour finaliser l’envoi. Merci !";
    status.className = "form-status is-ok";
  });
  $$("input, textarea", form).forEach(f =>
    f.addEventListener("input", () => f.closest(".field").classList.remove("has-error")));

  $("#year").textContent = new Date().getFullYear();
})();
