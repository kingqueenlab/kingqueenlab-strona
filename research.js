const tabs = document.querySelectorAll("[data-research-tab]");
const panels = document.querySelectorAll("[data-research-panel]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const header = document.querySelector("[data-header]");

function activateCompound(compound, updateHash = true) {
  tabs.forEach((tab) => {
    const active = tab.dataset.researchTab === compound;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  panels.forEach((panel) => {
    const active = panel.dataset.researchPanel === compound;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });

  if (updateHash) {
    history.replaceState(null, "", `#${compound}`);
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateCompound(tab.dataset.researchTab));
});

navToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
  navToggle.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(nav.classList.contains("is-open")));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener(
  "scroll",
  () => header.classList.toggle("is-scrolled", window.scrollY > 16),
  { passive: true }
);

const initialCompound = location.hash.slice(1);
if (initialCompound === "retatrutide" || initialCompound === "tirzepatide") {
  activateCompound(initialCompound, false);
}
