/* ==========================================================
   Activ Life Labs — catalogue produits
   Pour utiliser une vraie photo produit, renseigner `image`
   (ex. image: "assets/img/actifine.png") : elle remplacera
   l'illustration SVG générée automatiquement.
   ========================================================== */

const CATEGORIES = {
  complement: "Complément alimentaire",
  dermo: "Dermo-cosmétique",
  aroma: "Aromathérapie"
};

const NEEDS = [
  { id: "articulations", label: "Articulations & muscles", desc: "Arthrose, douleurs musculaires et articulaires", icon: "M7 4a3 3 0 0 1 4 4l6 6a3 3 0 1 1-4 4L7 12a3 3 0 0 1-3-4" },
  { id: "stress", label: "Stress & migraines", desc: "Migraine, stress émotionnel, fatigue nerveuse", icon: "M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3zM9 22h6" },
  { id: "memoire", label: "Mémoire & concentration", desc: "Examens, clarté mentale, calme", icon: "M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a3 3 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1" },
  { id: "metabolisme", label: "Glycémie & métabolisme", desc: "Absorption des sucres, sensibilité à l’insuline", icon: "M4 19V5M4 19h16M7 15l4-4 3 3 5-6" },
  { id: "digestion", label: "Digestion & transit", desc: "Constipation, confort intestinal", icon: "M8 3v5a4 4 0 0 0 8 0V3M12 12v3a3 3 0 0 0 3 3h1a2 2 0 0 1 0 4" },
  { id: "respiration", label: "Respiration", desc: "Nez bouché, voies respiratoires dégagées", icon: "M12 4v8M12 12c-3 0-6 2-7 8 3 0 6-1 7-4M12 12c3 0 6 2 7 8-3 0-6-1-7-4" },
  { id: "peau", label: "Soin de la peau", desc: "Peau sensible, sèche, aisselles", icon: "M12 3c5 6 7 9.5 7 12.5a7 7 0 0 1-14 0C5 12.5 7 9 12 3z" }
];

const PRODUCTS = [
  {
    id: "artigo",
    name: "Artigo",
    short: "ARTIGO",
    sub: "PEA + CURCUMA",
    cat: "complement",
    needs: ["articulations"],
    badge: "Soulagement durable",
    tagline: "PEA + Curcuma + Harpagophytum + Boswellia",
    description: "Une synergie de quatre actifs reconnus pour accompagner le confort articulaire : soulagement durable et mobilité retrouvée.",
    benefits: ["Soulagement durable", "Mobilité retrouvée", "Synergie de 4 actifs complémentaires"],
    actifs: ["PEA (palmitoyléthanolamide)", "Curcuma", "Harpagophytum", "Boswellia"],
    formats: ["30 gélules", "60 gélules"],
    usage: ["2 à 4 gélules par jour."],
    precautions: ["Ne pas utiliser chez la femme enceinte et allaitante."],
    pack: { type: "jar", body: "#2C5DA8", cap: "#1F4682", label: "#F07C1B", text: "#fff", count: "60" },
    tint: "#FDEBDC"
  },
  {
    id: "gofort",
    name: "Activ Go-Fort",
    short: "GO-FORT",
    sub: "GEL ANTI-DOULEURS",
    cat: "aroma",
    needs: ["articulations"],
    badge: "Huiles essentielles",
    tagline: "Gel anti-douleurs — Arthrose & douleurs musculaires et articulaires",
    description: "Un gel à base d’huiles essentielles à appliquer localement pour soulager l’arthrose et les douleurs musculaires et articulaires.",
    benefits: ["Arthrose", "Douleurs musculaires", "Douleurs articulaires", "Application locale ciblée"],
    actifs: ["Huiles essentielles"],
    formats: ["Gel — tube"],
    usage: [
      "Conseillé pour l’adulte et l’enfant de plus de 7 ans.",
      "Appliquer au moins deux fois par jour.",
      "Voie cutanée."
    ],
    precautions: [
      "Le traitement ne doit pas être prolongé sans l’avis de votre médecin ou pharmacien.",
      "Éviter le contact avec les yeux."
    ],
    pack: { type: "tube", body: "#F7931E", cap: "#D9531E", label: "#FFFFFF", text: "#D9531E" },
    tint: "#FEEAD2"
  },
  {
    id: "dolactiv",
    name: "Dol Activ",
    short: "DOL ACTIV",
    sub: "MIGRAINE",
    cat: "complement",
    needs: ["stress"],
    badge: "Migraine · Stress",
    tagline: "Migraine — Stress émotionnel — Gueule de bois",
    description: "Un complément alimentaire polyvalent pour les crises de migraine, leur prévention, le stress émotionnel et les lendemains difficiles.",
    benefits: ["Crise de migraine", "Prévention des migraines", "Stress émotionnel", "Gueule de bois"],
    formats: ["Gélules"],
    usage: [
      "Migraine : 2 gélules à la crise de migraine.",
      "Prévention migraine : 1 gélule matin et soir.",
      "Stress émotionnel : 1 gélule par jour.",
      "Gueule de bois : 2 gélules avant consommation d’alcool."
    ],
    precautions: ["Réservé à l’adulte.", "Déconseillé aux femmes enceintes ou allaitantes."],
    pack: { type: "jar", body: "#FFFFFF", cap: "#2F5FA7", label: "#2F5FA7", text: "#fff", accent: "#D62F3C" },
    tint: "#E3ECF8"
  },
  {
    id: "mag8b",
    name: "Mag 8B",
    short: "MAG 8B",
    sub: "MAGNÉSIUM 870 mg",
    cat: "complement",
    needs: ["stress"],
    badge: "870 mg",
    tagline: "Magnésium bisglycinate / oxyde + complexe de vitamines B",
    description: "870 mg de magnésium (bisglycinate et oxyde), soit 250 mg de magnésium élément pour 2 gélules, associés à un complexe de 8 vitamines B.",
    benefits: ["Magnésium élément : 250 mg / 2 gélules", "Double forme : bisglycinate + oxyde", "Complexe de 8 vitamines B"],
    actifs: ["Magnésium bisglycinate", "Magnésium oxyde", "Vitamines B1, B2, B3, B5, B6, B8, B9, B12"],
    formats: ["15 gélules", "60 gélules"],
    usage: ["1 à 2 gélules le soir au moment du repas."],
    precautions: ["À partir de 12 ans."],
    pack: { type: "jar", body: "#2C6CC0", cap: "#1D4F96", label: "#FFFFFF", text: "#1D4F96", accent: "#F39A1E", count: "60" },
    tint: "#E1EBF8"
  },
  {
    id: "mind7",
    name: "Mind7 Examen",
    short: "MIND7",
    sub: "EXAMEN",
    cat: "complement",
    needs: ["memoire"],
    badge: "Spécial examens",
    tagline: "Concentration, Mémoire, Calme et Clarté",
    description: "Un allié pour les périodes d’examens et de forte sollicitation intellectuelle : concentration, mémoire, calme et clarté d’esprit.",
    benefits: ["Concentration", "Mémoire", "Calme", "Clarté mentale"],
    formats: ["60 gélules"],
    usage: ["2 à 4 gélules par jour, le matin."],
    precautions: ["Ne pas utiliser chez la femme enceinte et allaitante.", "Enfant à partir de 10 ans."],
    pack: { type: "jar", body: "#FFFFFF", cap: "#1F4F8A", label: "#1F4F8A", text: "#fff", accent: "#D9302F", count: "60" },
    tint: "#E2EAF4"
  },
  {
    id: "isoline",
    name: "Isoline",
    short: "ISOLINE",
    sub: "GYMNEMA + CHROME",
    cat: "complement",
    needs: ["metabolisme"],
    badge: "Gymnema + Chrome",
    tagline: "Gymnema sylvestre + Chrome picolinate",
    description: "Une association ciblée pour accompagner l’équilibre glycémique et le métabolisme des glucides.",
    benefits: [
      "Le Gymnema sylvestre contribue à réduire l’absorption intestinale du sucre",
      "Le Chrome picolinate améliore la sensibilité à l’insuline et le métabolisme des glucides"
    ],
    actifs: ["Gymnema sylvestre", "Chrome picolinate"],
    formats: ["60 gélules", "90 gélules"],
    usage: ["Gélules à prendre par jour au moment de l’un des principaux repas, selon la posologie indiquée sur l’emballage."],
    precautions: [
      "Réservé aux adultes (à partir de 50 kg).",
      "Déconseillé aux femmes enceintes / allaitantes.",
      "Interactions possibles : demandez l’avis de votre médecin ou pharmacien."
    ],
    pack: { type: "jar", body: "#FFFFFF", cap: "#FFFFFF", label: "#25A29A", text: "#fff", count: "90" },
    tint: "#DDF2EF"
  },
  {
    id: "laxactiv",
    name: "Lax-Activ",
    short: "LAX-ACTIV",
    sub: "HUILE DE PARAFFINE",
    cat: "complement",
    needs: ["digestion"],
    badge: "Nouveau · Menthe",
    isNew: true,
    tagline: "Huile de paraffine — saveur menthe",
    description: "Laxatif mécanique qui lubrifie le contenu colique pour faciliter le transit, désormais en saveur menthe.",
    benefits: ["Laxatif mécanique", "Lubrifie le contenu colique", "Nouvelle saveur menthe"],
    actifs: ["Huile de paraffine"],
    formats: ["Flacon — voie orale"],
    usage: [
      "Adulte : 15 à 45 ml par jour.",
      "Enfant de plus de 6 ans : 5 à 15 ml par jour.",
      "La prise peut avoir lieu le matin à jeun ou à distance des repas."
    ],
    precautions: ["Voie orale uniquement."],
    pack: { type: "bottle", body: "#5A2A10", cap: "#2E7D32", label: "#3E9B3F", text: "#fff" },
    tint: "#E3F1DF"
  },
  {
    id: "oilactiv",
    name: "Oil Activ",
    short: "OIL ACTIV",
    sub: "INHALANT",
    cat: "aroma",
    needs: ["respiration"],
    badge: "100 % huiles essentielles",
    tagline: "Inhalant décongestionnant — concentré d’huiles essentielles naturelles",
    description: "Un concentré d’huiles essentielles naturelles à respirer pour dégager le nez et les voies respiratoires.",
    benefits: ["Décongestionne", "Dégage les voies respiratoires", "Utilisation simple sur un mouchoir"],
    actifs: ["HE cajeput", "HE eucalyptus", "Menthol", "HE clou de girofle", "HE genièvre", "HE gaulthérie couchée", "HE menthe poivrée"],
    formats: ["Flacon compte-gouttes"],
    usage: [
      "Adultes : 4 gouttes sur un mouchoir, laissez à proximité.",
      "Enfant à partir de 1 an : 2 gouttes sur un mouchoir, laissez à proximité."
    ],
    precautions: ["Ne pas utiliser chez la femme enceinte.", "Ne pas utiliser chez les bébés."],
    pack: { type: "dropper", body: "#6B3A12", cap: "#1B1B1B", label: "#0E6E68", text: "#fff" },
    tint: "#DCEFEC"
  },
  {
    id: "actifine",
    name: "Actifine",
    short: "ACTIFINE",
    sub: "ÉMULSION 4-EN-1",
    cat: "dermo",
    needs: ["peau"],
    badge: "Action 4-en-1",
    tagline: "Émulsion apaisante, réparatrice et hydratante",
    description: "Une émulsion 4-en-1 pour le visage et le corps, qui convient à toute la famille, y compris les nourrissons et les femmes enceintes.",
    benefits: [
      "Apaise instantanément les sensations d’inconfort",
      "Répare et nourrit la barrière cutanée",
      "Réhydrate et adoucit la peau",
      "Convient à toute la famille, y compris les nourrissons et femmes enceintes"
    ],
    formats: ["Tube"],
    usage: [
      "Appliquer une couche fine sur peau propre et sèche.",
      "Usage quotidien visage et corps."
    ],
    precautions: ["Éviter le contact avec les yeux."],
    pack: { type: "tube", body: "#FFFFFF", cap: "#1F8A5B", label: "#1F8A5B", text: "#fff" },
    tint: "#E1F2E7"
  },
  {
    id: "mkm",
    name: "MKM Brightening X4",
    short: "MKM",
    sub: "BRIGHTENING X4",
    cat: "dermo",
    needs: ["peau"],
    badge: "Roll-on · 72H",
    tagline: "Soin expert 4-en-1 pour les aisselles — Medizinische Kosmetik Manufaktur",
    description: "Un roll-on soin expert 4-en-1 pour les aisselles, enrichi en vitamine C stabilisée, aloe vera, acide hyaluronique, niacinamide, diacétyl boldine, panthénol et urée 5 %. 0 % alcool, parabènes et silicones. Tous types de peau.",
    benefits: ["Hydrate", "Éclat", "Unifie", "Répare", "Efficacité 72H", "0 % alcool, parabènes, silicones"],
    actifs: ["Vitamine C stabilisée", "Aloe vera", "Acide hyaluronique", "Niacinamide", "Diacétyl boldine", "Panthénol", "Urée 5 %"],
    formats: ["Roll-on"],
    usage: [
      "Appliquer une à deux fois par jour sur des aisselles propres et sèches.",
      "Laisser sécher quelques secondes avant de s’habiller.",
      "Usage quotidien recommandé pour un résultat optimal."
    ],
    precautions: ["Usage externe."],
    pack: { type: "rollon", body: "#FFFFFF", cap: "#EEF1F4", label: "#2A2F3A", text: "#fff", accent: "#2DB0C4" },
    tint: "#E6EEF2"
  }
];

/* ---------- Illustrations SVG des conditionnements ---------- */
function packSVG(p, uid) {
  const k = p.pack;
  const id = `${p.id}-${uid || "x"}`;
  const fit = (str, w, max) => Math.min(max, w / (str.length * 0.64));
  const dark = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 < 150;
  };
  const stroke = dark(k.body) ? "none" : "#DCE2D2";

  const defs = `
    <defs>
      <linearGradient id="sh-${id}" x1="0" x2="1">
        <stop offset="0" stop-color="#000" stop-opacity=".10"/>
        <stop offset=".18" stop-color="#fff" stop-opacity=".55"/>
        <stop offset=".34" stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8" stop-color="#000" stop-opacity="0"/>
        <stop offset="1" stop-color="#000" stop-opacity=".18"/>
      </linearGradient>
    </defs>`;
  const shadow = `<ellipse cx="100" cy="228" rx="64" ry="7" fill="#1d2a12" opacity=".14"/>`;
  const title = (x, y, w, max, color) =>
    `<text x="${x}" y="${y}" text-anchor="middle" font-family="Outfit, sans-serif" font-weight="700" font-size="${fit(p.short, w, max).toFixed(1)}" fill="${color}" letter-spacing=".5">${p.short}</text>`;
  const subtitle = (x, y, color, size = 7.5) =>
    `<text x="${x}" y="${y}" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="${size}" fill="${color}" opacity=".9" letter-spacing=".6">${p.sub}</text>`;

  let g = "";
  switch (k.type) {
    case "jar":
      g = `
        <rect x="58" y="22" width="84" height="36" rx="7" fill="${k.cap}" stroke="${stroke}"/>
        ${[68, 80, 92, 104, 116, 128].map(x => `<rect x="${x}" y="26" width="3" height="28" rx="1.5" fill="#000" opacity=".07"/>`).join("")}
        <rect x="58" y="22" width="84" height="36" rx="7" fill="url(#sh-${id})"/>
        <rect x="64" y="56" width="72" height="10" fill="${k.body}" stroke="${stroke}"/>
        <rect x="46" y="62" width="108" height="162" rx="20" fill="${k.body}" stroke="${stroke}"/>
        <rect x="46" y="96" width="108" height="98" fill="${k.label}"/>
        ${k.accent ? `<rect x="46" y="184" width="108" height="10" fill="${k.accent}"/>` : ""}
        ${title(100, 138, 92, 24, k.text)}
        ${subtitle(100, 158, k.text)}
        <rect x="70" y="166" width="60" height="1.4" fill="${k.text}" opacity=".5"/>
        <rect x="46" y="62" width="108" height="162" rx="20" fill="url(#sh-${id})"/>
        ${k.count ? `<circle cx="134" cy="209" r="13" fill="#1d2a12"/><text x="134" y="208" text-anchor="middle" font-family="Outfit" font-weight="700" font-size="9" fill="#fff">${k.count}</text><text x="134" y="216" text-anchor="middle" font-family="Inter" font-size="4.6" fill="#fff">GÉLULES</text>` : ""}`;
      break;

    case "tube":
      g = `
        <rect x="52" y="18" width="96" height="14" rx="2" fill="${k.body}" stroke="${stroke}"/>
        ${[60, 70, 80, 90, 100, 110, 120, 130, 140].map(x => `<rect x="${x}" y="20" width="1.5" height="10" fill="#000" opacity=".08"/>`).join("")}
        <path d="M54 32 H146 L130 194 H70 Z" fill="${k.body}" stroke="${stroke}"/>
        <path d="M58.5 72 H141.5 L134.6 146 H65.4 Z" fill="${k.label}"/>
        ${title(100, 106, 68, 21, k.text)}
        ${subtitle(100, 124, k.text, 6.6)}
        <path d="M54 32 H146 L130 194 H70 Z" fill="url(#sh-${id})"/>
        <rect x="72" y="192" width="56" height="34" rx="6" fill="${k.cap}"/>
        <rect x="72" y="192" width="56" height="34" rx="6" fill="url(#sh-${id})"/>`;
      break;

    case "dropper":
      g = `
        <rect x="84" y="12" width="32" height="44" rx="16" fill="${k.cap}"/>
        <rect x="76" y="50" width="48" height="32" rx="4" fill="${k.cap}"/>
        ${[82, 90, 98, 106, 114].map(x => `<rect x="${x}" y="54" width="2" height="24" fill="#fff" opacity=".08"/>`).join("")}
        <rect x="84" y="80" width="32" height="10" fill="${k.body}"/>
        <rect x="56" y="88" width="88" height="136" rx="16" fill="${k.body}"/>
        <rect x="56" y="116" width="88" height="84" fill="${k.label}"/>
        ${title(100, 156, 76, 18, k.text)}
        ${subtitle(100, 174, k.text, 7)}
        <rect x="56" y="88" width="88" height="136" rx="16" fill="url(#sh-${id})"/>
        <rect x="76" y="50" width="48" height="32" rx="4" fill="url(#sh-${id})"/>`;
      break;

    case "bottle":
      g = `
        <rect x="78" y="14" width="44" height="28" rx="4" fill="${k.cap}"/>
        <rect x="78" y="14" width="44" height="28" rx="4" fill="url(#sh-${id})"/>
        <path d="M86 42 H114 V58 Q148 66 148 94 V214 Q148 224 138 224 H62 Q52 224 52 214 V94 Q52 66 86 58 Z" fill="${k.body}"/>
        <rect x="52" y="108" width="96" height="90" fill="${k.label}"/>
        <rect x="52" y="108" width="96" height="14" fill="#7B4FA0"/>
        <text x="100" y="118" text-anchor="middle" font-family="Inter" font-weight="700" font-size="7" fill="#fff" letter-spacing="1">FLAVOR MENTH</text>
        ${title(100, 156, 84, 18, k.text)}
        ${subtitle(100, 174, k.text, 6.4)}
        <path d="M86 42 H114 V58 Q148 66 148 94 V214 Q148 224 138 224 H62 Q52 224 52 214 V94 Q52 66 86 58 Z" fill="url(#sh-${id})"/>`;
      break;

    case "rollon":
      g = `
        <rect x="62" y="16" width="76" height="88" rx="32" fill="${k.cap}" stroke="#D6DCE2"/>
        <rect x="62" y="16" width="76" height="88" rx="32" fill="url(#sh-${id})"/>
        <rect x="60" y="98" width="80" height="126" rx="18" fill="${k.body}" stroke="#D6DCE2"/>
        <text x="100" y="128" text-anchor="middle" font-family="Outfit" font-weight="300" font-size="20" fill="${k.label}" letter-spacing="3">MKM</text>
        <rect x="60" y="140" width="80" height="44" fill="${k.label}"/>
        <text x="100" y="158" text-anchor="middle" font-family="Inter" font-weight="700" font-size="6.5" fill="${k.accent}" letter-spacing="1.5">ROLL-ON</text>
        <text x="100" y="173" text-anchor="middle" font-family="Outfit" font-weight="700" font-size="10" fill="#fff">BRIGHTENING X4</text>
        <text x="100" y="204" text-anchor="middle" font-family="Inter" font-size="6" fill="${k.label}" opacity=".7">5% UREA · 72H</text>
        <rect x="60" y="98" width="80" height="126" rx="18" fill="url(#sh-${id})"/>`;
      break;
  }

  return `<svg viewBox="0 0 200 240" role="img" aria-label="${p.name}">${defs}${shadow}${g}</svg>`;
}

function packVisual(p, uid) {
  return p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : packSVG(p, uid);
}
