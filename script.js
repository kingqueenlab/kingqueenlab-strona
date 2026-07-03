const references = [
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    category: "Metabolic research compound",
    image: "tirzepatide-20mg.webp",
    tagline: "Peptide-based incretin pathway research reference.",
    formats: ["Vials: 10mg, 20mg, 40mg, 60mg", "Pens: 20mg, 40mg, 60mg"],
    molecular:
      "Synthetic peptide-based incretin research compound associated in published literature with dual GIP and GLP-1 receptor pathway investigation.",
    description:
      "Tirzepatide is included here as a non-clinical educational reference for readers reviewing incretin pathway terminology, receptor-class literature and metabolic research discussions.",
    references: [
      "Review PubChem or equivalent molecular database records for structural orientation.",
      "Search peer-reviewed literature using the terms tirzepatide, GIP receptor and GLP-1 receptor.",
      "Compare review articles discussing incretin pathway research models."
    ]
  },
  {
    id: "retatrutide",
    name: "Retatrutide",
    category: "Metabolic research compound",
    image: "retatrutide-20mg.webp",
    tagline: "Multi-receptor incretin pathway research reference.",
    formats: ["Vials: 10mg, 20mg, 40mg, 60mg", "Pens: 20mg, 40mg, 60mg"],
    molecular:
      "Peptide-based research compound described in literature around GLP-1, GIP and glucagon receptor pathway investigation.",
    description:
      "Retatrutide is presented as an educational reference for non-clinical literature review involving metabolic signalling, receptor classification and experimental compound terminology.",
    references: [
      "Search literature databases for retatrutide and multi-receptor incretin research.",
      "Review receptor pathway summaries for GLP-1, GIP and glucagon signalling.",
      "Compare database entries and review papers before drawing research conclusions."
    ]
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2",
    category: "Peptide research compound",
    image: "melanotan-2-10mg.webp",
    tagline: "Melanocortin pathway research reference.",
    formats: ["Vial: 10mg", "Spray: 10mg", "Pens: 20mg, 40mg"],
    molecular:
      "Synthetic melanocortin peptide analogue discussed in receptor-binding and pigmentation pathway literature.",
    description:
      "Melanotan 2 is listed as an educational compound reference for readers examining melanocortin receptor terminology and associated laboratory research literature.",
    references: [
      "Search peer-reviewed literature for melanotan 2 and melanocortin receptor research.",
      "Review receptor-family background for MC1R and related melanocortin pathways.",
      "Compare molecular database summaries with review literature."
    ]
  },
  {
    id: "semax",
    name: "Semax",
    category: "Nootropic peptide research compound",
    image: "semax-10mg.webp",
    tagline: "Neurobiology-focused peptide research reference.",
    formats: ["Vial: 10mg"],
    molecular:
      "Synthetic heptapeptide analogue of an ACTH fragment discussed in neurobiology and peptide-signalling literature.",
    description:
      "Semax is included for educational review of peptide terminology, central nervous system research discussions and non-clinical literature context.",
    references: [
      "Search literature databases for Semax and ACTH fragment peptide research.",
      "Review neurobiology-focused peptide signalling articles.",
      "Compare summaries across molecular databases and peer-reviewed reviews."
    ]
  },
  {
    id: "bpc-157",
    name: "BPC-157",
    category: "Peptide research compound",
    image: "bpc-157-10mg.webp",
    tagline: "Experimental peptide literature reference.",
    formats: ["Vial: 10mg"],
    molecular:
      "Synthetic pentadecapeptide sequence frequently referenced in experimental tissue and peptide research literature.",
    description:
      "BPC-157 is provided as an educational reference for non-clinical readers comparing peptide sequence terminology and experimental research discussions.",
    references: [
      "Search peer-reviewed literature for BPC-157 and experimental peptide models.",
      "Review peptide sequence records where available.",
      "Compare review papers with primary research before interpreting claims."
    ]
  },
  {
    id: "nad",
    name: "NAD+",
    category: "Cellular metabolism research material",
    image: "nad-500mg.webp",
    tagline: "Cellular redox and metabolism research reference.",
    formats: ["Vials: 500mg, 1000mg", "Pens: 500mg, 1000mg"],
    molecular:
      "Nicotinamide adenine dinucleotide in oxidized form, a central redox cofactor discussed across cellular metabolism literature.",
    description:
      "NAD+ is listed as an educational research material reference for readers reviewing cellular metabolism, redox biology and biochemical pathway terminology.",
    references: [
      "Review biochemical database entries for nicotinamide adenine dinucleotide.",
      "Search literature for NAD+ metabolism, redox biology and cellular signalling.",
      "Compare pathway resources with peer-reviewed review articles."
    ]
  },
  {
    id: "ghk-cu",
    name: "GHK-CU",
    category: "Copper peptide research compound",
    image: "ghk-cu-50mg.webp",
    tagline: "Copper peptide literature reference.",
    formats: ["Vials: 50mg, 100mg"],
    molecular:
      "Glycyl-L-histidyl-L-lysine copper complex discussed in extracellular matrix, copper-peptide and dermatological research literature.",
    description:
      "GHK-CU is presented as a non-clinical educational reference for readers reviewing copper peptide terminology and laboratory research discussions.",
    references: [
      "Search literature databases for GHK-CU and copper peptide research.",
      "Review peptide-complex terminology in biochemical resources.",
      "Compare review articles discussing extracellular matrix research context."
    ]
  },
  {
    id: "klow",
    name: "KLOW",
    category: "Research blend reference",
    image: "klow-80mg.webp",
    tagline: "Multi-component research blend reference.",
    formats: ["Vial: 80mg", "Pen: 80mg"],
    molecular:
      "Blend reference associated with BPC-157, TB500, GHK-CU and KPV terminology in non-clinical peptide research context.",
    description:
      "KLOW is included as an educational material reference for reviewing multi-component peptide blend terminology and source-comparison practices.",
    references: [
      "Review each named component separately in molecular and literature databases.",
      "Compare peptide blend discussions with single-compound research literature.",
      "Use primary literature and review articles for context verification."
    ]
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    category: "Peptide research compound",
    image: "tesamorelin-10mg.webp",
    tagline: "Endocrine pathway peptide research reference.",
    formats: ["Vial: 10mg"],
    molecular:
      "Synthetic analogue of growth hormone-releasing hormone discussed in endocrine and peptide research literature.",
    description:
      "Tesamorelin is provided for educational review of endocrine pathway terminology and non-clinical peptide research references.",
    references: [
      "Search literature for tesamorelin and growth hormone-releasing hormone analogues.",
      "Review endocrine pathway summaries from reputable scientific databases.",
      "Compare primary research with review literature for terminology context."
    ]
  },
  {
    id: "mots-c",
    name: "MOTS-C",
    category: "Mitochondrial peptide research compound",
    image: "mots-c-20mg.webp",
    tagline: "Mitochondrial-derived peptide research reference.",
    formats: ["Vials: 20mg, 40mg"],
    molecular:
      "Mitochondrial-derived peptide encoded within the 12S rRNA region and discussed in metabolism and cellular-stress literature.",
    description:
      "MOTS-C is listed as an educational reference for readers reviewing mitochondrial peptide terminology, metabolism literature and cellular research models.",
    references: [
      "Search peer-reviewed literature for MOTS-C and mitochondrial-derived peptides.",
      "Review cellular metabolism and stress-response pathway summaries.",
      "Compare primary research findings with review articles."
    ]
  },
  {
    id: "vitamin-b12",
    name: "Vitamin B12",
    category: "Vitamin research material",
    image: "vitamina-b12-10mg.webp",
    tagline: "Cobalamin-related biochemical research reference.",
    formats: ["Vial: 10mg"],
    molecular:
      "Cobalt-containing corrinoid class commonly discussed in biochemistry, nutrition science and cellular metabolism literature.",
    description:
      "Vitamin B12 is included as an educational research material reference for reviewing cobalamin terminology and biochemical pathway context.",
    references: [
      "Review biochemical database entries for cobalamin-related compounds.",
      "Search literature for vitamin B12, cobalamin and cellular metabolism.",
      "Compare pathway resources with peer-reviewed review articles."
    ]
  },
  {
    id: "melanotan-1",
    name: "Melanotan 1",
    category: "Peptide research compound",
    image: "melanotan-1-10mg.png",
    tagline: "Melanocortin pathway research reference.",
    formats: ["Vial: 10mg", "Spray: 10mg"],
    molecular:
      "Synthetic alpha-melanocyte-stimulating hormone analogue discussed in melanocortin receptor and pigmentation pathway literature.",
    description:
      "Melanotan 1 is included as an educational reference for reviewing melanocortin terminology and non-clinical receptor pathway research.",
    references: [
      "Search literature databases for melanotan 1 and afamelanotide-related research terminology.",
      "Review melanocortin receptor pathway summaries.",
      "Compare molecular database records with peer-reviewed literature."
    ]
  },
  {
    id: "selank",
    name: "Selank",
    category: "Nootropic peptide research compound",
    image: "selank-10mg.png",
    tagline: "Neurobiology-focused peptide research reference.",
    formats: ["Vial: 10mg"],
    molecular:
      "Synthetic heptapeptide analogue discussed in neurobiology, peptide signalling and experimental behavioural research literature.",
    description:
      "Selank is listed for educational review of nootropic peptide terminology and non-clinical neurobiology research context.",
    references: [
      "Search literature databases for Selank peptide research.",
      "Review neurobiology and peptide-signalling articles.",
      "Compare primary studies with broader review literature."
    ]
  },
  {
    id: "semax-selank-blend",
    name: "Semax & Selank Blend",
    category: "Nootropic peptide blend reference",
    image: "semax-selank-20mg.png",
    tagline: "Multi-component neurobiology research reference.",
    formats: ["Vial: 20mg"],
    molecular:
      "Blend reference associated with Semax and Selank peptide terminology in non-clinical neurobiology research context.",
    description:
      "This blend is included as an educational reference for reviewing the two named peptide components and source-comparison practices.",
    references: [
      "Review Semax and Selank literature separately before considering blend terminology.",
      "Compare component-level molecular records.",
      "Use primary literature and review articles for context verification."
    ]
  },
  {
    id: "dsip",
    name: "DSIP",
    category: "Neuropeptide research compound",
    image: "dsip-15mg.png",
    tagline: "Sleep-related neuropeptide literature reference.",
    formats: ["Vial: 15mg"],
    molecular:
      "Delta sleep-inducing peptide, a short neuropeptide sequence discussed in experimental sleep and neuroendocrine literature.",
    description:
      "DSIP is presented as an educational reference for readers reviewing neuropeptide terminology and historical experimental research.",
    references: [
      "Search literature databases for delta sleep-inducing peptide.",
      "Review historical neuropeptide and sleep-research literature.",
      "Compare primary research with modern review articles."
    ]
  },
  {
    id: "thymalin",
    name: "Thymalin",
    category: "Peptide research compound",
    image: "thymalin-10mg.png",
    tagline: "Thymic peptide research reference.",
    formats: ["Vial: 10mg"],
    molecular:
      "Thymic peptide preparation terminology discussed in immunology and peptide research literature.",
    description:
      "Thymalin is included as an educational reference for reviewing thymic peptide terminology and non-clinical immunology research context.",
    references: [
      "Search peer-reviewed literature for Thymalin and thymic peptide research.",
      "Review immunology-focused peptide references.",
      "Compare primary studies with review literature."
    ]
  },
  {
    id: "pt-141",
    name: "PT-141",
    category: "Melanocortin peptide research compound",
    image: "pt-141-10mg.png",
    tagline: "Melanocortin receptor research reference.",
    formats: ["Vial: 10mg"],
    molecular:
      "Synthetic cyclic heptapeptide, also known in literature as bremelanotide, discussed in melanocortin receptor research.",
    description:
      "PT-141 is provided as an educational reference for melanocortin receptor terminology and related non-clinical literature review.",
    references: [
      "Search molecular databases for PT-141 and bremelanotide.",
      "Review melanocortin receptor pathway literature.",
      "Compare primary studies with receptor-focused reviews."
    ]
  },
  {
    id: "ghrp-2",
    name: "GHRP-2",
    category: "Growth hormone secretagogue research compound",
    image: "ghrp-2-10mg.png",
    tagline: "Secretagogue pathway peptide research reference.",
    formats: ["Vial: 10mg"],
    molecular:
      "Synthetic hexapeptide discussed in growth hormone secretagogue receptor and endocrine research literature.",
    description:
      "GHRP-2 is listed as an educational reference for reviewing secretagogue pathway terminology and experimental endocrine research.",
    references: [
      "Search literature databases for GHRP-2 and growth hormone secretagogue receptor research.",
      "Review endocrine signalling pathway summaries.",
      "Compare primary studies with peptide review literature."
    ]
  },
  {
    id: "glutathione",
    name: "Glutathione",
    category: "Cellular redox research material",
    image: "glutathione-600mg.png",
    tagline: "Antioxidant and redox biology research reference.",
    formats: ["Vial: 600mg"],
    molecular:
      "Tripeptide composed of glutamate, cysteine and glycine, widely discussed in cellular redox and antioxidant research.",
    description:
      "Glutathione is listed as an educational research material reference for reviewing redox biology, antioxidant pathways and biochemical terminology.",
    references: [
      "Review biochemical database entries for glutathione.",
      "Search literature for glutathione and cellular redox biology.",
      "Compare pathway resources with peer-reviewed review articles."
    ]
  }
];

const optionCatalog = {
  tirzepatide: [
    { label: "10mg Vial", price: 80, image: "tirzepatide-10mg.webp" },
    { label: "20mg Vial", price: 110, image: "tirzepatide-20mg.webp" },
    { label: "40mg Vial", price: 140, image: "tirzepatide-40mg.webp" },
    { label: "60mg Vial", price: 180, image: "tirzepatide-60mg.webp" },
    { label: "20mg Pen", price: 150, image: "pen-tirzepatide-20mg.png", fit: "contain" },
    { label: "40mg Pen", price: 180, image: "pen-tirzepatide-40mg.png", fit: "contain" },
    { label: "60mg Pen", price: 220, image: "pen-tirzepatide-60mg.png", fit: "contain" }
  ],
  retatrutide: [
    { label: "10mg Vial", price: 100, image: "retatrutide-10mg.webp" },
    { label: "20mg Vial", price: 140, image: "retatrutide-20mg.webp" },
    { label: "40mg Vial", price: 180, image: "retatrutide-40mg.webp" },
    { label: "60mg Vial", price: 220, image: "retatrutide-60mg.webp" },
    { label: "20mg Pen", price: 180, image: "pen-retatrutide-20mg.png", fit: "contain" },
    { label: "40mg Pen", price: 220, image: "pen-retatrutide-40mg.png", fit: "contain" },
    { label: "60mg Pen", price: 260, image: "pen-retatrutide-60mg.png", fit: "contain" }
  ],
  "melanotan-1": [
    { label: "10mg Vial", price: 40, image: "melanotan-1-10mg.png" },
    { label: "10mg Spray", price: 45, image: "melanotan-1-spray-10mg.png" }
  ],
  "melanotan-2": [
    { label: "10mg Vial", price: 30, image: "melanotan-2-10mg.webp" },
    { label: "10mg Spray", price: 35, image: "melanotan-2-spray.webp" },
    { label: "20mg Pen", price: 80, image: "pen-melanotan-2-20mg.png", fit: "contain" },
    { label: "40mg Pen", price: 110, image: "kql-logo-transparent.webp", fit: "placeholder" }
  ],
  nad: [
    { label: "500mg Vial", price: 70, image: "nad-500mg.webp" },
    { label: "1000mg Vial", price: 120, image: "nad-1000mg.webp" },
    { label: "500mg Pen", price: 110, image: "pen-nad-500mg.png", fit: "contain" },
    { label: "1000mg Pen", price: 170, image: "pen-nad-1000mg.png", fit: "contain" }
  ],
  klow: [
    { label: "80mg Vial", price: 120, image: "klow-80mg.webp" },
    { label: "80mg Pen", price: 160, image: "pen-klow-80mg.png", fit: "contain" }
  ],
  "ghk-cu": [
    { label: "50mg Vial", price: 30, image: "ghk-cu-50mg.webp" },
    { label: "100mg Vial", price: 60, image: "ghk-cu-100mg.webp" }
  ],
  semax: [{ label: "10mg Vial", price: 30, image: "semax-10mg.webp" }],
  selank: [{ label: "10mg Vial", price: 30, image: "selank-10mg.png" }],
  "semax-selank-blend": [
    { label: "20mg Vial", price: 45, image: "semax-selank-20mg.png" }
  ],
  "bpc-157": [{ label: "10mg Vial", price: 30, image: "bpc-157-10mg.webp" }],
  "mots-c": [
    { label: "20mg Vial", price: 45, image: "mots-c-20mg.webp" },
    { label: "40mg Vial", price: 70, image: "kql-logo-transparent.webp", fit: "placeholder" }
  ],
  dsip: [{ label: "15mg Vial", price: 50, image: "dsip-15mg.png" }],
  thymalin: [{ label: "10mg Vial", price: 35, image: "thymalin-10mg.png" }],
  "pt-141": [{ label: "10mg Vial", price: 35, image: "pt-141-10mg.png" }],
  "ghrp-2": [{ label: "10mg Vial", price: 35, image: "ghrp-2-10mg.png" }],
  glutathione: [{ label: "600mg Vial", price: 30, image: "glutathione-600mg.png" }],
  tesamorelin: [{ label: "10mg Vial", price: 55, image: "tesamorelin-10mg.webp" }],
  "vitamin-b12": [{ label: "10mg Vial", price: 15, image: "vitamina-b12-10mg.webp" }]
};

const state = {
  search: "",
  activeReferenceId: null,
  activeOptionIndex: 0,
  cart: []
};

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const referenceGrid = document.querySelector("[data-reference-grid]");
const referenceTemplate = document.querySelector("#reference-template");
const searchInput = document.querySelector("[data-search]");
const emptyState = document.querySelector("[data-empty-state]");
const referenceModal = document.querySelector("[data-reference-modal]");
const referenceModalPanel = document.querySelector("[data-reference-modal-panel]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const cartSubtotal = document.querySelector("[data-cart-subtotal]");
const enquiryForm = document.querySelector("[data-enquiry-form]");
const formStatus = document.querySelector("[data-form-status]");

function getReference(id) {
  return references.find((reference) => reference.id === id);
}

function getOptions(referenceId) {
  return optionCatalog[referenceId] || [];
}

function formatPrice(value) {
  return `£${Number(value).toFixed(2).replace(".00", "")}`;
}

function getImageClass(fit) {
  if (fit === "contain") return "is-contain";
  if (fit === "placeholder") return "is-placeholder";
  return "";
}

function getFilteredReferences() {
  const term = state.search.trim().toLowerCase();
  if (!term) return references;

  return references.filter((reference) =>
    [
      reference.name,
      reference.category,
      reference.tagline,
      reference.molecular,
      reference.description,
      ...reference.formats
    ]
      .join(" ")
      .toLowerCase()
      .includes(term)
  );
}

function renderReferences() {
  referenceGrid.innerHTML = "";
  const filteredReferences = getFilteredReferences();
  emptyState.hidden = filteredReferences.length > 0;

  filteredReferences.forEach((reference) => {
    const card = referenceTemplate.content.firstElementChild.cloneNode(true);
    const image = card.querySelector("[data-card-image]");

    image.src = reference.image;
    image.alt = `${reference.name} research reference visual`;
    if (reference.imageFit === "contain") image.classList.add("is-placeholder");
    card.querySelector("[data-card-category]").textContent = reference.category;
    card.querySelector("[data-card-heading]").textContent = reference.name;
    card.querySelector("[data-card-tagline]").textContent = reference.tagline;
    card.querySelector("[data-card-formats]").innerHTML = reference.formats
      .map((format) => `<span>${format}</span>`)
      .join("");
    card.querySelector("[data-open-reference]").addEventListener("click", () => openReference(reference.id));

    referenceGrid.append(card);
  });
}

function renderReferenceModal(reference) {
  const referenceItems = reference.references.map((item) => `<li>${item}</li>`).join("");
  const formatItems = reference.formats.map((format) => `<li>${format}</li>`).join("");
  const options = getOptions(reference.id);
  const selectedOption = options[state.activeOptionIndex] || options[0];
  const optionItems = options
    .map(
      (option, index) =>
        `<option value="${index}">${option.label} - ${formatPrice(option.price)}</option>`
    )
    .join("");

  referenceModalPanel.innerHTML = `
    <button class="modal-close" type="button" data-close-reference aria-label="Close reference page">&times;</button>
    <div class="reference-detail-media">
      <img class="${getImageClass(selectedOption.fit)}" src="${selectedOption.image}" alt="${reference.name} ${selectedOption.label}">
    </div>
    <div class="reference-detail-copy">
      <p class="eyebrow">Research Information</p>
      <h2>${reference.name}</h2>
      <p class="detail-category">${reference.category}</p>

      <div class="product-options">
        <label>
          Select format and strength
          <select data-option-select>${optionItems}</select>
        </label>
        <div class="selected-price">
          <span>Selected option</span>
          <strong data-selected-price>${formatPrice(selectedOption.price)}</strong>
        </div>
        <button class="button button-primary" type="button" data-add-selected>Add to Basket</button>
      </div>

      <div class="detail-block">
        <h3>Molecular information</h3>
        <p>${reference.molecular}</p>
      </div>

      <div class="detail-block">
        <h3>Research category</h3>
        <p>${reference.category}</p>
      </div>

      <div class="detail-block">
        <h3>Reference presentations</h3>
        <ul class="format-list">${formatItems}</ul>
      </div>

      <div class="detail-block">
        <h3>General research description</h3>
        <p>${reference.description}</p>
      </div>

      <div class="detail-block">
        <h3>Research references section</h3>
        <ul class="reference-list">${referenceItems}</ul>
      </div>

      <div class="detail-block disclaimer-block">
        <h3>Disclaimer section</h3>
        <p>This page is provided for informational and educational purposes only. It is not medical advice, dosage guidance, usage instruction or a compound or material recommendation.</p>
      </div>
    </div>
  `;

  referenceModalPanel.querySelector("[data-close-reference]").addEventListener("click", closeReference);
  referenceModalPanel.querySelector("[data-option-select]").addEventListener("change", (event) => {
    state.activeOptionIndex = Number(event.target.value);
    updateModalOption(reference);
  });
  referenceModalPanel.querySelector("[data-add-selected]").addEventListener("click", () => {
    addToCart(reference, getOptions(reference.id)[state.activeOptionIndex]);
  });
}

function updateModalOption(reference) {
  const option = getOptions(reference.id)[state.activeOptionIndex];
  if (!option) return;

  const image = referenceModalPanel.querySelector(".reference-detail-media img");
  image.src = option.image;
  image.alt = `${reference.name} ${option.label}`;
  image.className = getImageClass(option.fit);
  referenceModalPanel.querySelector("[data-selected-price]").textContent = formatPrice(option.price);
}

function openReference(id) {
  const reference = getReference(id);
  if (!reference) return;

  state.activeReferenceId = id;
  state.activeOptionIndex = 0;
  renderReferenceModal(reference);
  referenceModal.classList.add("is-open");
  referenceModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeReference() {
  state.activeReferenceId = null;
  referenceModal.classList.remove("is-open");
  referenceModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function addToCart(reference, option) {
  if (!option) return;

  const key = `${reference.id}-${option.label}`;
  const existing = state.cart.find((item) => item.key === key);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key,
      referenceId: reference.id,
      name: reference.name,
      option: option.label,
      price: option.price,
      qty: 1
    });
  }

  renderCart();
  closeReference();
  openCart();
}

function updateCartItem(key, change) {
  state.cart = state.cart
    .map((item) => (item.key === key ? { ...item, qty: Math.max(0, item.qty + change) } : item))
    .filter((item) => item.qty > 0);
  renderCart();
}

function renderCart() {
  const itemCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCount.textContent = String(itemCount);
  cartSubtotal.textContent = formatPrice(subtotal);
  cartItems.innerHTML = "";

  if (!state.cart.length) {
    cartItems.innerHTML = '<p class="cart-empty">Your basket is empty. Open a product to select a format and strength.</p>';
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
      <div class="cart-item-actions">
        <button type="button" data-cart-minus aria-label="Decrease quantity">-</button>
        <strong>${item.qty}</strong>
        <button type="button" data-cart-plus aria-label="Increase quantity">+</button>
        <span>${formatPrice(item.price * item.qty)}</span>
        <button class="remove-item" type="button" data-cart-remove aria-label="Remove item">&times;</button>
      </div>
    `;
    row.querySelector("[data-cart-minus]").addEventListener("click", () => updateCartItem(item.key, -1));
    row.querySelector("[data-cart-plus]").addEventListener("click", () => updateCartItem(item.key, 1));
    row.querySelector("[data-cart-remove]").addEventListener("click", () => updateCartItem(item.key, -item.qty));
    cartItems.append(row);
  });
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}

function buildResearchMessage(formData) {
  const basketLines = state.cart.length
    ? state.cart.map(
        (item) =>
          `- ${item.name}, ${item.option}, quantity ${item.qty}, ${formatPrice(item.price * item.qty)}`
      )
    : ["- No products selected"];
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return [
    "King Queen Lab product and research enquiry",
    "",
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    "",
    "Selected products:",
    ...basketLines,
    `Subtotal: ${formatPrice(subtotal)}`,
    "",
    "Enquiry notes:",
    formData.get("message")
  ].join("\n");
}

async function submitEnquiry(event) {
  event.preventDefault();

  const formData = new FormData(enquiryForm);
  formData.append("_subject", "King Queen Lab product and research enquiry");
  formData.set("message", buildResearchMessage(formData));

  formStatus.textContent = "Sending enquiry...";

  try {
    const response = await fetch("https://formsubmit.co/ajax/kingqueenlab@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    if (!response.ok) throw new Error("Form submission failed");

    enquiryForm.reset();
    state.cart = [];
    renderCart();
    formStatus.textContent = "Enquiry sent. Thank you.";
  } catch (error) {
    formStatus.textContent = "Message could not be sent from this preview. Please use the contact channels below.";
  }
}

window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
  navToggle.classList.toggle("is-open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
  });
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderReferences();
});

referenceModal.addEventListener("click", (event) => {
  if (event.target === referenceModal) closeReference();
});

document.querySelectorAll("[data-open-cart]").forEach((button) => {
  button.addEventListener("click", openCart);
});

document.querySelector("[data-close-cart]").addEventListener("click", closeCart);
document.querySelector("[data-cart-enquiry]").addEventListener("click", closeCart);
cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.activeReferenceId) closeReference();
  if (event.key === "Escape" && cartDrawer.classList.contains("is-open")) closeCart();
});

enquiryForm.addEventListener("submit", submitEnquiry);

syncHeader();
renderReferences();
renderCart();
