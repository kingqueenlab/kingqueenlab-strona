const references = [
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    category: "Metabolic research compound",
    image: "tirzepatide-20mg.webp",
    tagline: "Peptide-based incretin pathway research reference.",
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
    id: "tirzepatide-pen-reference",
    name: "Tirzepatide Pen Format Reference",
    category: "Research material reference",
    image: "injection-pen-tirzepatide-20mg.webp",
    tagline: "Format-focused reference for research material documentation.",
    molecular:
      "Material-format reference linked to tirzepatide terminology and incretin pathway literature review.",
    description:
      "This page documents the visual and terminology context of a pen-format research material reference. It is not presented as a commercial item.",
    references: [
      "Review tirzepatide molecular information separately from material-format notes.",
      "Compare laboratory documentation language for format and labelling context.",
      "Use scientific literature for compound-level interpretation."
    ]
  },
  {
    id: "retatrutide-pen-reference",
    name: "Retatrutide Pen Format Reference",
    category: "Research material reference",
    image: "injection-pen-retatrutide-20mg.webp",
    tagline: "Format-focused reference for research material documentation.",
    molecular:
      "Material-format reference linked to retatrutide terminology and multi-receptor incretin literature review.",
    description:
      "This page provides educational context for material-format labelling and research terminology without commercial functionality.",
    references: [
      "Review retatrutide literature separately from material-format documentation.",
      "Compare non-clinical labelling terminology across reference materials.",
      "Use database and literature sources for compound-level review."
    ]
  },
  {
    id: "melanotan-2-pen-reference",
    name: "Melanotan 2 Pen Format Reference",
    category: "Research material reference",
    image: "injection-pen-melanotan-2-20mg.webp",
    tagline: "Format-focused reference for research material documentation.",
    molecular:
      "Material-format reference linked to melanotan 2 terminology and melanocortin pathway literature review.",
    description:
      "This reference page is provided for educational review of format presentation, labelling context and compound terminology.",
    references: [
      "Review melanotan 2 literature separately from material-format notes.",
      "Compare laboratory reference documentation language.",
      "Use peer-reviewed sources for receptor pathway context."
    ]
  },
  {
    id: "nad-pen-reference",
    name: "NAD+ Pen Format Reference",
    category: "Research material reference",
    image: "injection-pen-nad-500mg.webp",
    tagline: "Format-focused reference for research material documentation.",
    molecular:
      "Material-format reference linked to NAD+ terminology and cellular metabolism literature review.",
    description:
      "This page provides educational context for NAD+ reference material presentation and documentation language.",
    references: [
      "Review NAD+ biochemical records separately from material-format notes.",
      "Compare laboratory documentation for material presentation language.",
      "Use peer-reviewed metabolism literature for scientific context."
    ]
  },
  {
    id: "klow-pen-reference",
    name: "KLOW Pen Format Reference",
    category: "Research material reference",
    image: "injection-pen-klow-80mg.webp",
    tagline: "Format-focused reference for research material documentation.",
    molecular:
      "Material-format reference linked to KLOW blend terminology and component-level peptide literature review.",
    description:
      "This page is an educational reference for format presentation and multi-component research material terminology.",
    references: [
      "Review individual component literature separately.",
      "Compare material-format documentation language across reference sources.",
      "Use primary literature and review articles for compound-level context."
    ]
  }
];

const state = {
  search: "",
  activeReferenceId: null
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
const enquiryForm = document.querySelector("[data-enquiry-form]");
const formStatus = document.querySelector("[data-form-status]");

function getReference(id) {
  return references.find((reference) => reference.id === id);
}

function getFilteredReferences() {
  const term = state.search.trim().toLowerCase();
  if (!term) return references;

  return references.filter((reference) =>
    [reference.name, reference.category, reference.tagline, reference.molecular, reference.description]
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
    card.querySelector("[data-card-category]").textContent = reference.category;
    card.querySelector("[data-card-heading]").textContent = reference.name;
    card.querySelector("[data-card-tagline]").textContent = reference.tagline;
    card.querySelector("[data-open-reference]").addEventListener("click", () => openReference(reference.id));

    referenceGrid.append(card);
  });
}

function renderReferenceModal(reference) {
  const referenceItems = reference.references.map((item) => `<li>${item}</li>`).join("");

  referenceModalPanel.innerHTML = `
    <button class="modal-close" type="button" data-close-reference aria-label="Close reference page">&times;</button>
    <div class="reference-detail-media">
      <img src="${reference.image}" alt="${reference.name} research reference visual">
    </div>
    <div class="reference-detail-copy">
      <p class="eyebrow">Research Information</p>
      <h2>${reference.name}</h2>
      <p class="detail-category">${reference.category}</p>

      <div class="detail-block">
        <h3>Molecular information</h3>
        <p>${reference.molecular}</p>
      </div>

      <div class="detail-block">
        <h3>Research category</h3>
        <p>${reference.category}</p>
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
}

function openReference(id) {
  const reference = getReference(id);
  if (!reference) return;

  state.activeReferenceId = id;
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

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}

function buildResearchMessage(formData) {
  return [
    "King Queen Lab research information enquiry",
    "",
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    "",
    "Research topic or notes:",
    formData.get("message")
  ].join("\n");
}

async function submitEnquiry(event) {
  event.preventDefault();

  const formData = new FormData(enquiryForm);
  formData.append("_subject", "King Queen Lab research information enquiry");
  formData.set("message", buildResearchMessage(formData));

  formStatus.textContent = "Sending research enquiry...";

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
    formStatus.textContent = "Research enquiry sent. Thank you.";
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.activeReferenceId) closeReference();
});

enquiryForm.addEventListener("submit", submitEnquiry);

syncHeader();
renderReferences();
