const products = [
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    category: "GLP research",
    categoryKey: "glp",
    tagline: "Premium vial range with multiple strength options.",
    description:
      "A premium catalogue entry prepared for qualified research enquiries. Select a strength to review the matching product image and enquiry price.",
    options: [
      { label: "10MG", price: 80, image: "tirzepatide-10mg.webp" },
      { label: "20MG", price: 110, image: "tirzepatide-20mg.webp" },
      { label: "40MG", price: 140, image: "tirzepatide-40mg.webp" },
      { label: "60MG", price: 180, image: "tirzepatide-60mg.webp" },
    ],
  },
  {
    id: "retatrutide",
    name: "Retatrutide",
    category: "GLP research",
    categoryKey: "glp",
    tagline: "Premium vial range with four selectable strengths.",
    description:
      "A premium research catalogue item with multiple vial strengths. Choose an option to switch the product visual before adding it to the enquiry basket.",
    options: [
      { label: "10MG", price: 100, image: "retatrutide-10mg.webp" },
      { label: "20MG", price: 140, image: "retatrutide-20mg.webp" },
      { label: "40MG", price: 180, image: "retatrutide-40mg.webp" },
      { label: "60MG", price: 220, image: "retatrutide-60mg.webp" },
    ],
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2",
    category: "Peptide",
    categoryKey: "peptide",
    tagline: "Vial and nasal spray formats.",
    description:
      "A King Queen Lab catalogue range available as a vial or spray format. Select the format to update the packshot and enquiry details.",
    options: [
      { label: "10MG", price: 30, image: "melanotan-2-10mg.webp" },
      { label: "10MG Spray", price: 35, image: "melanotan-2-spray.webp" },
    ],
  },
  {
    id: "semax",
    name: "Semax",
    category: "Nootropic",
    categoryKey: "nootropic",
    tagline: "Single-strength research vial.",
    description:
      "A clean single-option catalogue item for research enquiries. The detail view keeps the product image, option and enquiry action in one place.",
    options: [{ label: "10MG", price: 30, image: "semax-10mg.webp" }],
  },
  {
    id: "bpc-157",
    name: "BPC-157",
    category: "Peptide",
    categoryKey: "peptide",
    tagline: "Premium single-strength vial.",
    description:
      "A premium product entry for qualified research enquiries, presented with a dedicated studio packshot and selected strength.",
    options: [{ label: "10MG", price: 30, image: "bpc-157-10mg.webp" }],
  },
  {
    id: "nad",
    name: "NAD+",
    category: "Peptide",
    categoryKey: "peptide",
    tagline: "Two larger-format vial options.",
    description:
      "A premium vial range with 500MG and 1000MG options. Switching the strength updates the product image and basket line.",
    options: [
      { label: "500MG", price: 70, image: "nad-500mg.webp" },
      { label: "1000MG", price: 120, image: "nad-1000mg.webp" },
    ],
  },
  {
    id: "ghk-cu",
    name: "GHK-CU",
    category: "Peptide",
    categoryKey: "peptide",
    tagline: "Copper peptide vial range.",
    description:
      "A blue-vial King Queen Lab catalogue range. Choose 50MG or 100MG to view the correct visual and enquiry price.",
    options: [
      { label: "50MG", price: 30, image: "ghk-cu-50mg.webp" },
      { label: "100MG", price: 60, image: "ghk-cu-100mg.webp" },
    ],
  },
  {
    id: "klow",
    name: "KLOW",
    category: "Blend",
    categoryKey: "blend",
    tagline: "Premium blend vial.",
    description:
      "A premium blend catalogue item with a dedicated 80MG studio packshot. Add it to the enquiry basket with clear pricing.",
    options: [{ label: "80MG", price: 120, image: "klow-80mg.webp" }],
  },
  {
    id: "somatropin",
    name: "Somatropin",
    category: "Peptide",
    categoryKey: "peptide",
    tagline: "100IU research kit.",
    description:
      "A single-option research catalogue item presented as a 100IU kit containing 10 vials x 10IU.",
    options: [{ label: "100IU (10 vials x 10IU)", price: 140, image: "somatropin-10iu.webp" }],
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    category: "Peptide",
    categoryKey: "peptide",
    tagline: "10MG research vial.",
    description:
      "A new catalogue item from the updated product photo set. This entry is configured for enquiry and quote confirmation.",
    options: [{ label: "10MG", price: 55, image: "tesamorelin-10mg.webp" }],
  },
  {
    id: "mots-c",
    name: "MOTS-C",
    category: "Peptide",
    categoryKey: "peptide",
    tagline: "20MG research vial.",
    description:
      "A new premium product entry with a dedicated studio packshot. Add it to the basket for a structured enquiry.",
    options: [{ label: "20MG", price: 60, image: "mots-c-20mg.webp" }],
  },
  {
    id: "tirzepatide-injection-pen",
    name: "Tirzepatide Injection Pen",
    category: "Injection Pen",
    categoryKey: "pen",
    tagline: "Ready-to-use pre-filled pen range.",
    description:
      "A premium King Queen Lab injection pen product entry for research enquiries, available in multiple strengths.",
    options: [
      { label: "20MG Pen", price: 150, image: "injection-pen-tirzepatide-20mg.webp" },
      { label: "40MG Pen", price: 180, image: "injection-pen-tirzepatide-40mg.webp" },
      { label: "60MG Pen", price: 220, image: "injection-pen-tirzepatide-60mg.webp" },
    ],
  },
  {
    id: "retatrutide-injection-pen",
    name: "Retatrutide Injection Pen",
    category: "Injection Pen",
    categoryKey: "pen",
    tagline: "Ready-to-use pre-filled pen range.",
    description:
      "A premium King Queen Lab injection pen product entry for research enquiries, with strength-specific packshots.",
    options: [
      { label: "20MG Pen", price: 180, image: "injection-pen-retatrutide-20mg.webp" },
      { label: "40MG Pen", price: 220, image: "injection-pen-retatrutide-40mg.webp" },
      { label: "60MG Pen", price: 260, image: "injection-pen-retatrutide-60mg.webp" },
    ],
  },
  {
    id: "melanotan-2-injection-pen",
    name: "Melanotan 2 Injection Pen",
    category: "Injection Pen",
    categoryKey: "pen",
    tagline: "20MG injection pen format.",
    description:
      "A premium King Queen Lab injection pen product entry with a dedicated 20MG packshot and enquiry pricing.",
    options: [{ label: "20MG Pen", price: 90, image: "injection-pen-melanotan-2-20mg.webp" }],
  },
  {
    id: "nad-injection-pen",
    name: "NAD+ Injection Pen",
    category: "Injection Pen",
    categoryKey: "pen",
    tagline: "500MG and 1000MG pen formats.",
    description:
      "A premium King Queen Lab injection pen range with selectable NAD+ strengths and matching product images.",
    options: [
      { label: "500MG Pen", price: 110, image: "injection-pen-nad-500mg.webp" },
      { label: "1000MG Pen", price: 170, image: "injection-pen-nad-1000mg.webp" },
    ],
  },
  {
    id: "klow-injection-pen",
    name: "KLOW Injection Pen",
    category: "Injection Pen",
    categoryKey: "pen",
    tagline: "80MG injection pen format.",
    description:
      "A premium King Queen Lab injection pen product entry with a dedicated KLOW 80MG packshot and clear enquiry pricing.",
    options: [{ label: "80MG Pen", price: 160, image: "injection-pen-klow-80mg.webp" }],
  },
  {
    id: "vitamina-b12",
    name: "Vitamina B12",
    category: "Vitamin",
    categoryKey: "vitamin",
    tagline: "10MG research solution.",
    description:
      "A premium King Queen Lab research-use product entry with a dedicated red vial packshot and clear enquiry pricing.",
    options: [{ label: "10MG", price: 15, image: "vitamina-b12-10mg.webp" }],
  },
];

const currencyLabels = {
  GBP: "GBP",
  PLN: "PLN",
  EUR: "EUR",
};

const optionPrices = {
  "tirzepatide|10MG": { PLN: 400, EUR: 100 },
  "tirzepatide|20MG": { PLN: 550, EUR: 130 },
  "tirzepatide|40MG": { PLN: 710, EUR: 160 },
  "tirzepatide|60MG": { PLN: 900, EUR: 210 },
  "retatrutide|10MG": { PLN: 500, EUR: 120 },
  "retatrutide|20MG": { PLN: 750, EUR: 160 },
  "retatrutide|40MG": { PLN: 900, EUR: 210 },
  "retatrutide|60MG": { PLN: 1200, EUR: 260 },
  "melanotan-2|10MG": { PLN: 150, EUR: 35 },
  "melanotan-2|10MG Spray": { PLN: 180, EUR: 40 },
  "semax|10MG": { PLN: 150, EUR: 35 },
  "bpc-157|10MG": { PLN: 150, EUR: 35 },
  "nad|500MG": { PLN: 450, EUR: 80 },
  "nad|1000MG": { PLN: 800, EUR: 140 },
  "ghk-cu|50MG": { PLN: 150, EUR: 35 },
  "ghk-cu|100MG": { PLN: 300, EUR: 70 },
  "klow|80MG": { PLN: 650, EUR: 140 },
  "somatropin|100IU (10 vials x 10IU)": { PLN: 750, EUR: 165 },
  "tesamorelin|10MG": { PLN: 270, EUR: 65 },
  "mots-c|20MG": { PLN: 300, EUR: 70 },
  "tirzepatide-injection-pen|20MG Pen": { PLN: 730, EUR: 170 },
  "tirzepatide-injection-pen|40MG Pen": { PLN: 880, EUR: 210 },
  "tirzepatide-injection-pen|60MG Pen": { PLN: 1080, EUR: 255 },
  "retatrutide-injection-pen|20MG Pen": { PLN: 880, EUR: 210 },
  "retatrutide-injection-pen|40MG Pen": { PLN: 1100, EUR: 255 },
  "retatrutide-injection-pen|60MG Pen": { PLN: 1270, EUR: 300 },
  "melanotan-2-injection-pen|20MG Pen": { PLN: 440, EUR: 105 },
  "nad-injection-pen|500MG Pen": { PLN: 540, EUR: 130 },
  "nad-injection-pen|1000MG Pen": { PLN: 830, EUR: 200 },
  "klow-injection-pen|80MG Pen": { PLN: 830, EUR: 185 },
  "vitamina-b12|10MG": { PLN: 75, EUR: 17 },
};

const state = {
  selectedOptions: Object.fromEntries(products.map((product) => [product.id, 0])),
  cart: [],
  search: "",
  currency: "GBP",
  activeProductId: null,
  isSubmitting: false,
};

const enquiryEmail = "kingqueenlab@gmail.com";
const enquiryEndpoint = `https://formsubmit.co/ajax/${enquiryEmail}`;

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const productGrid = document.querySelector("[data-product-grid]");
const productTemplate = document.querySelector("#product-template");
const searchInput = document.querySelector("[data-search]");
const currencySelect = document.querySelector("[data-currency-select]");
const emptyState = document.querySelector("[data-empty-state]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const subtotalNode = document.querySelector("[data-subtotal]");
const shippingNode = document.querySelector("[data-shipping]");
const totalNode = document.querySelector("[data-total]");
const productModal = document.querySelector("[data-product-modal]");
const productModalPanel = document.querySelector("[data-product-modal-panel]");
const enquiryForm = document.querySelector("[data-enquiry-form]");
const formStatus = document.querySelector("[data-form-status]");

function isPriced(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function getOptionPrice(product, option, currency = state.currency) {
  if (currency === "GBP") return option.price;

  const prices = optionPrices[`${product.id}|${option.label}`];
  return prices?.[currency] ?? option.price;
}

function getCartItemOption(item) {
  const product = getProduct(item.productId);
  const option = product?.options.find((candidate) => candidate.label === item.strength);
  return { product, option };
}

function getCartItemPrice(item) {
  const { product, option } = getCartItemOption(item);
  return product && option ? getOptionPrice(product, option) : item.price;
}

function formatPrice(value, currency = state.currency) {
  if (!isPriced(value)) return "Request quote";

  const amount = value.toFixed(2).replace(".00", "");
  if (currency === "EUR") return `€${amount}`;
  if (currency === "PLN") return `${amount} PLN`;
  return `\u00a3${amount}`;
}

function getCartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const price = getCartItemPrice(item);
    return sum + (isPriced(price) ? price * item.qty : 0);
  }, 0);
}

function hasQuoteItems() {
  return state.cart.some((item) => !isPriced(getCartItemPrice(item)));
}

function getShipping(subtotal) {
  if (subtotal === 0) return 0;

  const hasPen = state.cart.some((item) => getProduct(item.productId)?.categoryKey === "pen");
  if (state.currency === "PLN") return hasPen ? 100 : 80;
  if (state.currency === "EUR") return hasPen ? 25 : subtotal >= 100 ? 0 : 20;
  if (hasPen) return 10;
  return subtotal >= 100 ? 0 : 7;
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function getSelectedOption(product) {
  return product.options[state.selectedOptions[product.id] || 0];
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  return products.filter((product) => {
    const matchesSearch = [product.name, product.category, product.tagline, product.description]
      .join(" ")
      .toLowerCase()
      .includes(query);

    return matchesSearch;
  });
}

function renderProducts() {
  productGrid.innerHTML = "";
  const filteredProducts = getFilteredProducts();
  emptyState.hidden = filteredProducts.length > 0;

  filteredProducts.forEach((product) => {
    const card = productTemplate.content.firstElementChild.cloneNode(true);
    const selected = getSelectedOption(product);
    const select = card.querySelector("[data-option-select]");
    const image = card.querySelector("[data-card-image]");

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View ${product.name}`);
    image.src = selected.image;
    image.alt = `${product.name} ${selected.label} King Queen Lab product`;
    card.querySelector("[data-card-strength]").textContent = selected.label;
    card.querySelector("[data-card-heading]").textContent = product.name;
    card.querySelector("[data-card-price]").textContent = formatPrice(getOptionPrice(product, selected));
    card.querySelector("[data-card-tagline]").textContent = product.tagline;

    product.options.forEach((option, index) => {
      const optionNode = document.createElement("option");
      optionNode.value = String(index);
      optionNode.textContent = `${option.label} - ${formatPrice(getOptionPrice(product, option))}`;
      select.append(optionNode);
    });

    select.value = String(state.selectedOptions[product.id] || 0);
    select.addEventListener("click", (event) => event.stopPropagation());
    select.addEventListener("change", () => {
      state.selectedOptions[product.id] = Number(select.value);
      renderProducts();
    });

    card.querySelector("[data-add-button]").addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(product);
    });

    card.querySelector("[data-detail-button]").addEventListener("click", (event) => {
      event.stopPropagation();
      openProductModal(product.id);
    });

    card.addEventListener("click", () => openProductModal(product.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProductModal(product.id);
      }
    });

    productGrid.append(card);
  });
}

function renderProductModal() {
  const product = getProduct(state.activeProductId);
  if (!product) return;

  const selectedIndex = state.selectedOptions[product.id] || 0;
  const selected = product.options[selectedIndex];
  const selectedPrice = getOptionPrice(product, selected);
  productModalPanel.innerHTML = `
    <button class="icon-button product-close" type="button" data-close-product aria-label="Close product">x</button>
    <div class="product-detail-media">
      <img src="${selected.image}" alt="${product.name} ${selected.label} King Queen Lab product">
    </div>
    <div class="product-detail-copy">
      <p class="eyebrow">Product details</p>
      <h2>${product.name}</h2>
      <p class="detail-tagline">${product.tagline}</p>
      <p>${product.description}</p>
      <div class="detail-compliance">
        Research-focused information only. This shop does not provide medical advice, dosage guidance or usage instructions.
      </div>
      <label class="option-select detail-select">
        Select strength / format
        <select data-detail-option></select>
      </label>
      <div class="detail-price-row">
        <span>Selected option</span>
        <strong>${selected.label} - ${formatPrice(selectedPrice)}</strong>
      </div>
      <button class="button button-primary detail-add" type="button" data-detail-add>Add selected option</button>
    </div>
  `;

  const select = productModalPanel.querySelector("[data-detail-option]");
  product.options.forEach((option, index) => {
    const optionNode = document.createElement("option");
    optionNode.value = String(index);
    optionNode.textContent = `${option.label} - ${formatPrice(getOptionPrice(product, option))}`;
    select.append(optionNode);
  });
  select.value = String(selectedIndex);
  select.addEventListener("change", () => {
    state.selectedOptions[product.id] = Number(select.value);
    renderProducts();
    renderProductModal();
  });

  productModalPanel.querySelector("[data-detail-add]").addEventListener("click", () => addToCart(product));
  productModalPanel.querySelector("[data-close-product]").addEventListener("click", closeProductModal);
}

function openProductModal(productId) {
  state.activeProductId = productId;
  renderProductModal();
  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  state.activeProductId = null;
}

function addToCart(product) {
  const option = getSelectedOption(product);
  const key = `${product.id}-${option.label}`;
  const existing = state.cart.find((item) => item.key === key);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key,
      productId: product.id,
      name: product.name,
      strength: option.label,
      price: option.price,
      qty: 1,
    });
  }

  renderCart();
  closeProductModal();
  openCart();
}

function updateQty(key, change) {
  state.cart = state.cart
    .map((item) => (item.key === key ? { ...item, qty: Math.max(0, item.qty + change) } : item))
    .filter((item) => item.qty > 0);

  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  const subtotal = getCartSubtotal();
  const shipping = getShipping(subtotal);
  const total = subtotal + shipping;
  const itemCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  cartCount.textContent = String(itemCount);
  subtotalNode.textContent = formatPrice(subtotal);
  shippingNode.textContent = shipping === 0 ? "Free" : formatPrice(shipping);
  totalNode.textContent = hasQuoteItems() ? `${formatPrice(total)} + quote items` : formatPrice(total);

  if (state.cart.length === 0) {
    const empty = document.createElement("div");
    empty.className = "cart-empty";
    empty.textContent = "Your basket is empty. Choose a product option from the shop.";
    cartItems.append(empty);
    return;
  }

  state.cart.forEach((item) => {
    const line = document.createElement("article");
    line.className = "cart-line";
    const itemPrice = getCartItemPrice(item);
    const lineTotal = isPriced(itemPrice) ? formatPrice(itemPrice * item.qty) : "Request quote";
    line.innerHTML = `
      <h3>${item.name}</h3>
      <div class="cart-line-meta">${item.strength} - ${formatPrice(itemPrice)} each</div>
      <div class="cart-line-actions">
        <div class="qty-controls">
          <button type="button" data-decrease aria-label="Decrease ${item.name} quantity">-</button>
          <strong>${item.qty}</strong>
          <button type="button" data-increase aria-label="Increase ${item.name} quantity">+</button>
        </div>
        <strong>${lineTotal}</strong>
        <button class="remove-button" type="button" data-remove aria-label="Remove ${item.name}">x</button>
      </div>
    `;

    line.querySelector("[data-decrease]").addEventListener("click", () => updateQty(item.key, -1));
    line.querySelector("[data-increase]").addEventListener("click", () => updateQty(item.key, 1));
    line.querySelector("[data-remove]").addEventListener("click", () => updateQty(item.key, -item.qty));
    cartItems.append(line);
  });
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

function buildEnquiryMessage(formData) {
  const subtotal = getCartSubtotal();
  const shipping = getShipping(subtotal);
  const total = subtotal + shipping;
  const lines = state.cart.length
    ? state.cart.map((item) => {
        const itemPrice = getCartItemPrice(item);
        const lineTotal = isPriced(itemPrice) ? formatPrice(itemPrice * item.qty) : "Request quote";
        return `- ${item.name} ${item.strength} x ${item.qty} (${lineTotal})`;
      })
    : ["- No basket items selected"];

  return [
    "King Queen Lab enquiry",
    "",
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Currency: ${currencyLabels[state.currency]}`,
    "",
    "Requested items:",
    ...lines,
    "",
    `Priced subtotal: ${formatPrice(subtotal)}`,
    `Shipping estimate: ${shipping === 0 ? "Free" : formatPrice(shipping)}`,
    `Estimated priced total: ${formatPrice(total)}${hasQuoteItems() ? " + quote items" : ""}`,
    "",
    "Notes:",
    formData.get("notes") || "No additional notes.",
  ].join("\n");
}

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

searchInput.addEventListener("input", () => {
  state.search = searchInput.value;
  renderProducts();
});

currencySelect.addEventListener("change", () => {
  state.currency = currencySelect.value;
  renderProducts();
  renderCart();
  if (state.activeProductId) renderProductModal();
});

document.querySelectorAll("[data-open-cart]").forEach((button) => {
  button.addEventListener("click", openCart);
});

document.querySelector("[data-close-cart]").addEventListener("click", closeCart);
document.querySelector("[data-close-cart-link]").addEventListener("click", closeCart);
cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();
});
productModal.addEventListener("click", (event) => {
  if (event.target === productModal) closeProductModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closeProductModal();
  }
});

enquiryForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (state.isSubmitting) return;

  const formData = new FormData(enquiryForm);
  const message = buildEnquiryMessage(formData);
  const submitButton = enquiryForm.querySelector('button[type="submit"]');

  state.isSubmitting = true;
  submitButton.disabled = true;
  formStatus.textContent = "Sending enquiry...";

  try {
    const response = await fetch(enquiryEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: "King Queen Lab enquiry",
        _template: "table",
        name: formData.get("name"),
        email: formData.get("email"),
        notes: formData.get("notes") || "No additional notes.",
        basket: state.cart.length ? state.cart.map((item) => `${item.name} ${item.strength} x ${item.qty}`).join(", ") : "No basket items selected",
        message,
      }),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    formStatus.textContent = "Enquiry sent. Check kingqueenlab@gmail.com for the request. If this is the first message, confirm the FormSubmit activation email.";
    enquiryForm.reset();
  } catch (error) {
    formStatus.textContent = "Automatic sending needs the site to be live on HTTPS and the first FormSubmit activation confirmed.";
  } finally {
    state.isSubmitting = false;
    submitButton.disabled = false;
  }
});

syncHeader();
renderProducts();
renderCart();
