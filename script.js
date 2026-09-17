const products = [
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    category: "Incretin research",
    description: "A dual GIP and GLP-1 receptor agonist discussed in metabolic research literature.",
    molecular: "Peptide-based research compound; commonly referenced in incretin pathway studies.",
    image: "tirzepatide-20mg.webp",
    references: ["Incretin pathway literature", "Metabolic research models", "Educational molecular review"],
    options: [
      { label: "10mg Vial", price: 70, image: "tirzepatide-10mg.webp" },
      { label: "20mg Vial", price: 90, image: "tirzepatide-20mg.webp" },
      { label: "40mg Vial", price: 140, image: "tirzepatide-40mg.webp" },
      { label: "60mg Vial", price: 180, image: "tirzepatide-60mg.webp" },
      { label: "20mg Pen", price: 130, image: "injection-pen-tirzepatide-20mg.webp", fit: "contain" },
      { label: "40mg Pen", price: 180, image: "injection-pen-tirzepatide-40mg.webp", fit: "contain" },
      { label: "60mg Pen", price: 220, image: "injection-pen-tirzepatide-60mg.webp", fit: "contain" }
    ]
  },
  {
    id: "retatrutide",
    name: "Retatrutide",
    category: "Triple agonist research",
    description: "A research compound associated with GIP, GLP-1 and glucagon receptor pathway literature.",
    molecular: "Peptide research material reviewed in multi-receptor metabolic studies.",
    image: "retatrutide-10mg.webp",
    references: ["Triple agonist research", "Metabolic pathway literature", "Non-clinical reference review"],
    options: [
      { label: "10mg Vial", price: 80, image: "retatrutide-10mg.webp" },
      { label: "20mg Vial", price: 110, image: "retatrutide-20mg.webp" },
      { label: "40mg Vial", price: 160, image: "retatrutide-40mg.webp" },
      { label: "60mg Vial", price: 190, image: "retatrutide-60mg.webp" },
      { label: "20mg Pen", price: 150, image: "injection-pen-retatrutide-20mg.webp", fit: "contain" },
      { label: "40mg Pen", price: 200, image: "injection-pen-retatrutide-40mg.webp", fit: "contain" },
      { label: "60mg Pen", price: 230, image: "injection-pen-retatrutide-60mg.webp", fit: "contain" }
    ]
  },
  {
    id: "melanotan-1",
    name: "Melanotan 1",
    category: "Melanocortin research",
    description: "A melanocortin pathway research material for educational compound reference.",
    molecular: "Peptide compound referenced in melanocortin receptor literature.",
    image: "MELANOTAN 1 10MG.png",
    references: ["Melanocortin receptor literature", "Peptide reference library", "Research material overview"],
    options: [
      { label: "10mg Vial", price: 35, image: "MELANOTAN 1 10MG.png" },
      { label: "10mg Spray", price: 40, image: "MELANOTAN 1 10MG AREOSOL.png" }
    ]
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2",
    category: "Melanocortin research",
    description: "A peptide research material commonly reviewed in melanocortin pathway references.",
    molecular: "Cyclic peptide discussed in melanocortin receptor research.",
    image: "melanotan-2-10mg.webp",
    references: ["Melanocortin reference literature", "Peptide research category", "Material format notes"],
    options: [
      { label: "10mg Vial", price: 30, image: "melanotan-2-10mg.webp" },
      { label: "10mg Spray", price: 35, image: "melanotan-2-spray.webp" },
      { label: "20mg Spray", price: 55, image: "melanotan-2-spray.webp" },
      { label: "20mg Pen", price: 80, image: "injection-pen-melanotan-2-20mg.webp", fit: "contain" },
      { label: "30mg Pen", price: 100, image: "injection-pen-melanotan-2-20mg.webp", fit: "contain" }
    ]
  },
  {
    id: "nad",
    name: "NAD+",
    category: "Cellular research",
    description: "A central redox cofactor discussed throughout cellular metabolism research literature.",
    molecular: "Nicotinamide adenine dinucleotide in oxidized form.",
    image: "nad-500mg.webp",
    references: ["Cellular metabolism literature", "Redox cofactor review", "Laboratory material notes"],
    options: [
      { label: "500mg Vial", price: 70, image: "nad-500mg.webp" },
      { label: "500mg Pen", price: 110, image: "injection-pen-nad-500mg.webp", fit: "contain" },
      { label: "1000mg Vial", price: 110, image: "nad-1000mg.webp" }
    ]
  },
  {
    id: "klow",
    name: "KLOW",
    category: "Blend research",
    description: "A multi-compound research blend: BPC-157, TB500, GHK-CU and KPV.",
    molecular: "Blend research material for non-clinical reference review.",
    image: "klow-80mg.webp",
    references: ["Blend material overview", "Peptide reference categories", "Format documentation"],
    options: [
      { label: "80mg Vial", price: 80, image: "klow-80mg.webp" },
      { label: "80mg Pen", price: 120, image: "injection-pen-klow-80mg.webp", fit: "contain" }
    ]
  },
  { id: "bpc-157", name: "BPC-157", category: "Peptide research", description: "A peptide research material often referenced in tissue and cellular study contexts.", molecular: "Synthetic peptide fragment used in research literature.", image: "bpc-157-10mg.webp", references: ["Peptide research notes", "Cellular study contexts", "Educational compound review"], options: [{ label: "10mg Vial", price: 35, image: "bpc-157-10mg.webp" }] },
  { id: "cagrilintide", name: "Cagrilintide", category: "Amylin analogue research", description: "A long-acting amylin analogue reference material discussed in metabolic research literature.", molecular: "Synthetic peptide analogue used in amylin pathway research.", image: "cagrilintide-5mg.png", references: ["Amylin pathway literature", "Metabolic research review", "Laboratory reference notes"], options: [{ label: "5mg Vial", price: 50, image: "cagrilintide-5mg.png" }, { label: "10mg Vial", price: 90, image: "cagrilintide-10mg.png" }] },
  { id: "dermorphin", name: "Dermorphin", category: "Peptide research", description: "A peptide reference material used for laboratory and educational literature review.", molecular: "Heptapeptide reference compound.", image: "dermorphin-5mg.png", references: ["Peptide reference literature", "Molecular review", "Laboratory material notes"], options: [{ label: "5mg Vial", price: 40, image: "dermorphin-5mg.png" }] },
  { id: "dsip", name: "DSIP", category: "Peptide research", description: "A peptide reference material used for educational review of sleep-related research terminology.", molecular: "Delta sleep-inducing peptide reference compound.", image: "DSIP 15MG.png", references: ["Peptide reference library", "Sleep research terminology", "Non-clinical material notes"], options: [{ label: "15mg Vial", price: 45, image: "DSIP 15MG.png" }] },
  { id: "eloralintide", name: "Eloralintide", category: "Metabolic research", description: "A research compound referenced in emerging metabolic and endocrine pathway literature.", molecular: "Peptide-based laboratory reference material.", image: "eloralintide-10mg.png", references: ["Metabolic pathway literature", "Emerging compound review", "Laboratory reference notes"], options: [{ label: "10mg Vial", price: 100, image: "eloralintide-10mg.png" }] },
  { id: "ghk-cu", name: "GHK-CU", category: "Copper peptide research", description: "A copper peptide research material used in educational peptide reference contexts.", molecular: "Copper complex of glycyl-L-histidyl-L-lysine.", image: "ghk-cu-50mg.webp", references: ["Copper peptide literature", "Material format review", "Research category overview"], options: [{ label: "50mg Vial", price: 30, image: "ghk-cu-50mg.webp" }, { label: "100mg Vial", price: 50, image: "ghk-cu-100mg.webp" }] },
  { id: "ghrp-2", name: "GHRP-2", category: "Peptide research", description: "A peptide research material discussed in growth hormone secretagogue receptor literature.", molecular: "Synthetic growth hormone-releasing peptide reference material.", image: "GHRP 2 10MG.png", references: ["Secretagogue receptor literature", "Peptide research overview", "Educational material notes"], options: [{ label: "10mg Vial", price: 35, image: "GHRP 2 10MG.png" }] },
  { id: "glutathione", name: "Glutathione", category: "Cellular research", description: "A tripeptide reference material associated with antioxidant and cellular redox literature.", molecular: "Tripeptide composed of glutamate, cysteine and glycine.", image: "GLUTATHIONE 600MG.png", references: ["Redox biology literature", "Cellular research notes", "Material reference overview"], options: [{ label: "600mg Vial", price: 30, image: "GLUTATHIONE 600MG.png" }] },
  { id: "ipamorelin", name: "Ipamorelin", category: "Peptide research", description: "A peptide reference material discussed in growth hormone secretagogue receptor research.", molecular: "Synthetic pentapeptide research reference material.", image: "ipamorelin-10mg.png", references: ["Secretagogue receptor literature", "Peptide research review", "Laboratory material notes"], options: [{ label: "10mg Vial", price: 40, image: "ipamorelin-10mg.png" }] },
  { id: "mots-c", name: "MOTS-C", category: "Mitochondrial peptide research", description: "A mitochondrial-derived peptide discussed in metabolic and cellular research literature.", molecular: "Mitochondrial open reading frame peptide reference material.", image: "mots-c-40mg.png", references: ["Mitochondrial peptide literature", "Metabolic research review", "Material category notes"], options: [{ label: "40mg Vial", price: 70, image: "mots-c-40mg.png" }] },
  { id: "pt-141", name: "PT-141", category: "Peptide research", description: "A melanocortin receptor pathway research material for educational review only.", molecular: "Peptide compound referenced in melanocortin literature.", image: "PT-141 10MG.png", references: ["Melanocortin pathway literature", "Peptide reference notes", "Research material overview"], options: [{ label: "10mg Vial", price: 35, image: "PT-141 10MG.png" }] },
  { id: "selank", name: "Selank", category: "Nootropic peptide research", description: "A synthetic peptide research material reviewed in nootropic peptide references.", molecular: "Heptapeptide reference material.", image: "SELANK 10MG.png", references: ["Nootropic peptide literature", "Material reference overview", "Educational review notes"], options: [{ label: "10mg Vial", price: 35, image: "SELANK 10MG.png" }] },
  { id: "semax", name: "Semax", category: "Nootropic peptide research", description: "A synthetic peptide research material used in educational nootropic peptide references.", molecular: "Heptapeptide analogue reference material.", image: "semax-10mg.webp", references: ["Nootropic peptide literature", "Peptide category notes", "Educational review"], options: [{ label: "10mg Vial", price: 35, image: "semax-10mg.webp" }] },
  { id: "russian-stack", name: "Russian Stack", category: "Nootropic peptide research", description: "A combined Semax and Selank research blend for laboratory reference review.", molecular: "Combined peptide blend containing Semax and Selank reference materials.", image: "russian-stack-20mg.png", references: ["Blend reference notes", "Nootropic peptide overview", "Material category review"], options: [{ label: "20mg Vial", price: 60, image: "russian-stack-20mg.png" }] },
  { id: "semaglutide", name: "Semaglutide", category: "Incretin research", description: "A GLP-1 receptor agonist reference material discussed in metabolic research literature.", molecular: "Peptide-based research compound referenced in GLP-1 pathway studies.", image: "semaglutide-10mg.png", references: ["GLP-1 pathway literature", "Metabolic research review", "Laboratory reference notes"], options: [{ label: "10mg Vial", price: 50, image: "semaglutide-10mg.png" }, { label: "20mg Vial", price: 80, image: "semaglutide-20mg.png" }] },
  { id: "tb-500", name: "TB-500", category: "Peptide research", description: "A peptide research material used in laboratory reference and cellular study contexts.", molecular: "Synthetic thymosin beta-4 fragment reference material.", image: "tb-500-10mg.png", references: ["Peptide reference literature", "Cellular study contexts", "Laboratory material notes"], options: [{ label: "10mg Vial", price: 45, image: "tb-500-10mg.png" }] },
  { id: "tesamorelin", name: "Tesamorelin", category: "Peptide research", description: "A peptide research material associated with endocrine pathway terminology and literature review.", molecular: "GHRH analogue reference material.", image: "tesamorelin-10mg.webp", references: ["Endocrine pathway literature", "Peptide material notes", "Educational reference review"], options: [{ label: "10mg Vial", price: 55, image: "tesamorelin-10mg.webp" }] },
  { id: "thymalin", name: "Thymalin", category: "Peptide research", description: "A peptide research material used in educational immunology-focused reference contexts.", molecular: "Thymic peptide fraction reference material.", image: "THYMALIN 10MG.png", references: ["Immunology peptide references", "Material category overview", "Educational review notes"], options: [{ label: "10mg Vial", price: 30, image: "THYMALIN 10MG.png" }] },
  { id: "vitamin-b12", name: "Vitamin B12", category: "Vitamin research", description: "A laboratory reference material for educational review of B12 compound formats.", molecular: "Cobalamin-family reference material.", image: "vitamina-b12-10mg.webp", references: ["Vitamin reference literature", "Material format notes", "Educational compound overview"], options: [{ label: "10mg / 10ml Vial", price: 15, image: "vitamina-b12-10mg.webp" }] },
  { id: "wolverine-stack", name: "Wolverine Stack", category: "Peptide blend research", description: "A combined BPC-157 and TB-500 research blend for laboratory reference review.", molecular: "Combined peptide blend containing BPC-157 and TB-500 reference materials.", image: "wolverine-stack.png", references: ["Blend reference notes", "Peptide research overview", "Laboratory material documentation"], options: [{ label: "BPC-157 & TB-500 Vial", price: 60, image: "wolverine-stack.png" }] }
].sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));

const featuredIds = ["tirzepatide", "retatrutide", "bpc-157", "nad"];
const state = { cart: [], activeProduct: null, activeOption: 0, search: "" };

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const formatPrice = (value) => `£${Number(value).toFixed(2).replace(".00", "")}`;
const getProduct = (id) => products.find((product) => product.id === id);

function iconMarkup(name) {
  const icons = {
    plus: '<path d="M12 5v14M5 12h14"></path>',
    minus: '<path d="M5 12h14"></path>',
    close: '<path d="M6 6l12 12M18 6 6 18"></path>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
}

function getImageClass(option) {
  if (option.fit === "contain") return "is-contain";
  if (option.fit === "placeholder") return "is-placeholder";
  return "";
}

function usePenImageFallback(event) {
  const image = event.currentTarget;
  const source = image.getAttribute("src") || "";
  if (!source.startsWith("injection-pen-") || image.dataset.fallbackUsed) return;
  image.dataset.fallbackUsed = "true";
  image.src = source.replace(/^injection-/, "").replace(/\.webp$/i, ".png");
}

function createCard(product, compact = false) {
  const template = $("#product-card-template").content.cloneNode(true);
  const card = $(".product-card", template);
  const first = product.options[0];
  const cardImage = $("img", card);
  cardImage.src = first.image || product.image;
  cardImage.alt = `${product.name} ${first.label}`;
  cardImage.addEventListener("error", usePenImageFallback);
  if (first.fit) cardImage.className = getImageClass(first);
  $("[data-card-category]", card).textContent = product.category;
  $("[data-card-name]", card).textContent = product.name;
  $("[data-card-strength]", card).textContent = first.label;
  $("[data-card-price]", card).textContent = formatPrice(first.price);
  $("[data-card-open]", card).addEventListener("click", () => openProduct(product.id));
  card.addEventListener("click", (event) => {
    if (!event.target.closest("button")) openProduct(product.id);
  });
  if (compact) card.classList.add("is-featured");
  return template;
}

function renderFeatured() {
  const grid = $("[data-featured-grid]");
  grid.innerHTML = "";
  featuredIds.map(getProduct).filter(Boolean).forEach((product) => grid.append(createCard(product, true)));
}

function renderCatalogue() {
  const grid = $("[data-catalogue-grid]");
  const needle = state.search.trim().toLowerCase();
  const filtered = needle
    ? products.filter((product) =>
        [product.name, product.category, product.description, ...product.options.map((option) => option.label)]
          .join(" ")
          .toLowerCase()
          .includes(needle)
      )
    : products;
  grid.innerHTML = "";
  filtered.forEach((product) => grid.append(createCard(product)));
}

function openProduct(id) {
  const product = getProduct(id);
  if (!product) return;
  state.activeProduct = product;
  state.activeOption = 0;
  const option = product.options[0];
  const modal = $("[data-product-modal]");
  const panel = $("[data-product-modal-panel]");
  panel.innerHTML = `
    <button class="modal-close" type="button" data-close-product aria-label="Close product">${iconMarkup("close")}</button>
    <div class="modal-media">
      <img src="${option.image}" alt="${product.name} ${option.label}" class="${getImageClass(option)}" data-modal-image>
    </div>
    <div class="modal-copy">
      <p class="eyebrow">${product.category}</p>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <label class="option-picker">
        <span>Select format and strength</span>
        <select data-option-select>
          ${product.options.map((item, index) => `<option value="${index}">${item.label} - ${formatPrice(item.price)}</option>`).join("")}
        </select>
      </label>
      <div class="price-row">
        <span>Selected reference material</span>
        <strong data-modal-price>${formatPrice(option.price)}</strong>
      </div>
      <button class="button button-primary" type="button" data-add-product>Add to enquiry bag</button>
      <div class="modal-info-grid">
        <div><strong>Molecular information</strong><p>${product.molecular}</p></div>
        <div><strong>Research references</strong><ul>${product.references.map((item) => `<li>${item}</li>`).join("")}</ul></div>
      </div>
      <p class="modal-disclaimer">For research purposes only. Not for human consumption. This page is not medical advice, dosage guidance or a recommendation.</p>
    </div>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("[data-modal-image]", panel).addEventListener("error", usePenImageFallback);
  $("[data-close-product]", panel).addEventListener("click", closeProduct);
  $("[data-option-select]", panel).addEventListener("change", updateModalOption);
  $("[data-add-product]", panel).addEventListener("click", addActiveToCart);
}

function updateModalOption(event) {
  state.activeOption = Number(event.target.value);
  const option = state.activeProduct.options[state.activeOption];
  const image = $("[data-modal-image]");
  delete image.dataset.fallbackUsed;
  image.src = option.image;
  image.alt = `${state.activeProduct.name} ${option.label}`;
  image.className = getImageClass(option);
  $("[data-modal-price]").textContent = formatPrice(option.price);
}

function closeProduct() {
  const modal = $("[data-product-modal]");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function addActiveToCart() {
  const product = state.activeProduct;
  const option = product.options[state.activeOption];
  const key = `${product.id}-${option.label}`;
  const existing = state.cart.find((item) => item.key === key);
  if (existing) existing.qty += 1;
  else state.cart.push({ key, name: product.name, option: option.label, price: option.price, qty: 1 });
  renderCart();
  openCart();
}

function updateCartItem(key, delta) {
  state.cart = state.cart
    .map((item) => (item.key === key ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
    .filter((item) => item.qty > 0);
  renderCart();
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  $("[data-cart-count]").textContent = count;
  $("[data-cart-subtotal]").textContent = formatPrice(subtotal);
  const items = $("[data-cart-items]");
  items.innerHTML = "";
  if (!state.cart.length) {
    items.innerHTML = '<p class="cart-empty">Your enquiry bag is empty. Open a product to select a format and strength.</p>';
    return;
  }
  state.cart.forEach((item) => {
    const row = document.createElement("article");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <h3>${item.name}</h3>
        <p>${item.option} - ${formatPrice(item.price)} each</p>
      </div>
      <div class="cart-actions">
        <button type="button" data-minus aria-label="Decrease">${iconMarkup("minus")}</button>
        <strong>${item.qty}</strong>
        <button type="button" data-plus aria-label="Increase">${iconMarkup("plus")}</button>
      </div>
      <span>${formatPrice(item.price * item.qty)}</span>
    `;
    $("[data-minus]", row).addEventListener("click", () => updateCartItem(item.key, -1));
    $("[data-plus]", row).addEventListener("click", () => updateCartItem(item.key, 1));
    items.append(row);
  });
}

function openCart() {
  const drawer = $("[data-cart-drawer]");
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCart() {
  const drawer = $("[data-cart-drawer]");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setupEntryGate() {
  const gate = $("[data-entry-gate]");
  const confirm = $("[data-entry-confirm]");
  const enter = $("[data-entry-enter]");
  if (sessionStorage.getItem("kqlEntryConfirmed") === "true") {
    gate.classList.add("is-hidden");
    return;
  }
  confirm.addEventListener("change", () => {
    enter.disabled = !confirm.checked;
  });
  enter.addEventListener("click", () => {
    sessionStorage.setItem("kqlEntryConfirmed", "true");
    gate.classList.add("is-hidden");
  });
}

function setupInteractions() {
  const header = $("[data-header]");
  const nav = $("[data-nav]");
  const navToggle = $("[data-nav-toggle]");
  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 20), { passive: true });
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  $$("[data-nav] a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("is-open")));
  $("[data-search-toggle]").addEventListener("click", () => {
    const drawer = $("[data-search-drawer]");
    drawer.classList.toggle("is-open");
    $("[data-search]").focus();
  });
  $("[data-search]").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderCatalogue();
  });
  $$("[data-open-cart]").forEach((button) => button.addEventListener("click", openCart));
  $("[data-close-cart]").addEventListener("click", closeCart);
  $("[data-cart-enquiry]").addEventListener("click", closeCart);
  $("[data-cart-drawer]").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeCart();
  });
  $("[data-product-modal]").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeProduct();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProduct();
      closeCart();
    }
  });
}

function setupQualityTabs() {
  const content = {
    research: "Educational reference pages for key research compounds, including general molecular context and literature direction.",
    standards: "A refined quality-focused workflow: consistent product visuals, clear material formats and careful enquiry handling.",
    documentation: "Structured reference notes, product format summaries and responsible research-use disclaimers throughout the experience."
  };
  $$("[data-quality-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$("[data-quality-tab]").forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      $("[data-quality-content]").textContent = content[tab.dataset.qualityTab];
    });
  });
}

function setupForms() {
  $("[data-newsletter-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  });
  const form = $("[data-enquiry-form]");
  const status = $("[data-form-status]");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const selected = state.cart.length
      ? state.cart.map((item) => `- ${item.name}, ${item.option}, quantity ${item.qty}`).join("\n")
      : "- No products selected";
    formData.append("_subject", "King Queen Lab research enquiry");
    formData.set("message", `${formData.get("message")}\n\nSelected materials:\n${selected}`);
    status.textContent = "Sending enquiry...";
    try {
      const response = await fetch("https://formsubmit.co/ajax/kingqueenlab@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });
      if (!response.ok) throw new Error("Failed");
      form.reset();
      state.cart = [];
      renderCart();
      status.textContent = "Enquiry sent. Thank you.";
    } catch {
      status.textContent = "Message could not be sent from this preview. Please use the contact channels below.";
    }
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.16 }
  );
  $$(".reveal").forEach((item) => observer.observe(item));
}

setupEntryGate();
setupInteractions();
setupQualityTabs();
setupForms();
renderFeatured();
renderCatalogue();
renderCart();
setupReveal();
