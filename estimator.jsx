/* ============================================================
   estimator.jsx — Live price calculator + contact form
   ============================================================ */

const ESTIMATOR_OPTIONS = {
  type: [
    { id: "landing", label: "Landing Page", base: 999,  days: "7 jours" },
    { id: "vitrine", label: "Site Vitrine", base: 1899, days: "2–3 sem." },
    { id: "complet", label: "Site Complet", base: 3999, days: "2–3 sem." },
    { id: "refonte", label: "Refonte",      base: 3699, days: "2–4 sem." },
  ],
  pages: [
    { id: "1", label: "1 page", mult: 0 },
    { id: "3", label: "2–3 pages", mult: 400 },
    { id: "5", label: "4–5 pages", mult: 800 },
    { id: "10", label: "6–10 pages", mult: 1500 },
    { id: "15+", label: "10+ pages", mult: 2500 },
  ],
  features: [
    { id: "cms", label: "CMS éditable", cost: 800 },
    { id: "blog", label: "Blog / journal", cost: 600 },
    { id: "seo", label: "SEO avancé", cost: 700 },
    { id: "ecom", label: "Mini e-commerce", cost: 1800 },
    { id: "calendar", label: "Réservation / calendrier", cost: 700 },
    { id: "maps", label: "Carte interactive", cost: 400 },
    { id: "anim", label: "Animations premium", cost: 1200 },
    { id: "i18n", label: "Bilingue FR/EN", cost: 1000 },
  ],
  urgency: [
    { id: "normal", label: "Délai normal", mult: 1 },
    { id: "fast", label: "Rapide (+30%)", mult: 1.3 },
    { id: "urgent", label: "Urgent (+60%)", mult: 1.6 },
  ],
};

const COMPAT_PAGES = {
  landing: ["1", "3"],
  vitrine: ["1", "3", "5"],
  complet: ["1", "3", "5", "10", "15+"],
  refonte: ["1", "3", "5", "10", "15+"],
};

const COMPAT_FEATURES = {
  landing: ["seo", "maps", "anim", "calendar", "i18n"],
  vitrine: ["seo", "maps", "anim", "calendar", "blog", "i18n", "cms"],
  complet: ["cms", "blog", "seo", "ecom", "calendar", "maps", "anim", "i18n"],
  refonte: ["seo", "cms", "blog", "maps", "anim", "i18n", "calendar", "ecom"],
};

const formatPrice = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u202F");
};

const Estimator = () => {
  const [type, setType] = React.useState("vitrine");
  const [pages, setPages] = React.useState("1");
  const [features, setFeatures] = React.useState(new Set());
  const [urgency, setUrgency] = React.useState("normal");

  const handleTypeChange = (newType) => {
    setType(newType);
    const compatPages = COMPAT_PAGES[newType];
    if (!compatPages.includes(pages)) {
      setPages(compatPages[compatPages.length - 1]);
    }
    const compatFeats = COMPAT_FEATURES[newType];
    setFeatures((prev) => new Set([...prev].filter((f) => compatFeats.includes(f))));
  };
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [project, setProject] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const toggle = (id) => {
    setFeatures((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  };

  const calc = React.useMemo(() => {
    const t = ESTIMATOR_OPTIONS.type.find((x) => x.id === type);
    const p = ESTIMATOR_OPTIONS.pages.find((x) => x.id === pages);
    const u = ESTIMATOR_OPTIONS.urgency.find((x) => x.id === urgency);
    const featSum = [...features].reduce((sum, fid) => {
      const f = ESTIMATOR_OPTIONS.features.find((x) => x.id === fid);
      return sum + (f ? f.cost : 0);
    }, 0);
    const subtotal = (t.base + p.mult + featSum);
    const total = Math.round(subtotal * u.mult);
    return { base: t.base, pages: p.mult, features: featSum, urgencyMult: u.mult, subtotal, total, label: t.label, days: t.days, urgencyLabel: u.label };
  }, [type, pages, features, urgency]);

  // Animate the total number
  const [displayTotal, setDisplayTotal] = React.useState(calc.total);
  React.useEffect(() => {
    let raf;
    const start = displayTotal;
    const end = calc.total;
    const t0 = performance.now();
    const dur = 450;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      setDisplayTotal(Math.round(start + (end - start) * e));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [calc.total]);

  const send = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <section className="section" id="devis">
      <SectionHead
        num="06"
        kicker="Devis"
        title={<>Estime ton projet — <em style={{ fontStyle: "italic", color: "var(--ink-2)" }}>en direct.</em></>}
        right="Tarif ferme · pas d'arnaque"
      />
      <form className="estimator" onSubmit={send}>
        {/* LEFT — form */}
        <div className="estimator-form">
          <div className="field">
            <div className="field-label">
              <span>01 · Type de projet</span>
              <span className="req">requis</span>
            </div>
            <div className="field-options">
              {ESTIMATOR_OPTIONS.type.map((o) => (
                <button type="button" key={o.id} className={type === o.id ? "active" : ""} onClick={() => handleTypeChange(o.id)}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <div className="field-label">
              <span>02 · Volume</span>
              <span className="field-help">combien de pages ?</span>
            </div>
            <div className="field-options">
              {ESTIMATOR_OPTIONS.pages.filter((o) => COMPAT_PAGES[type].includes(o.id)).map((o) => (
                <button type="button" key={o.id} className={pages === o.id ? "active" : ""} onClick={() => setPages(o.id)}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <div className="field-label">
              <span>03 · Fonctionnalités</span>
              <span className="field-help">coche celles qui s'appliquent</span>
            </div>
            <div className="field-options">
              {ESTIMATOR_OPTIONS.features.filter((o) => COMPAT_FEATURES[type].includes(o.id)).map((o) => (
                <button type="button" key={o.id} className={features.has(o.id) ? "active" : ""} onClick={() => toggle(o.id)}>
                  + {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <div className="field-label">
              <span>04 · Délai</span>
              <span className="field-help">l'urgence ajuste le tarif</span>
            </div>
            <div className="field-options">
              {ESTIMATOR_OPTIONS.urgency.map((o) => (
                <button type="button" key={o.id} className={urgency === o.id ? "active" : ""} onClick={() => setUrgency(o.id)}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className="divider" style={{ margin: "16px 0" }}></div>

          <div className="field">
            <div className="field-label"><span>05 · Toi</span></div>
            <input type="text" placeholder="Nom · entreprise" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="field">
            <input type="email" placeholder="Email professionnel" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="field">
            <textarea placeholder="Décris ton projet en quelques lignes (optionnel)" value={project} onChange={(e) => setProject(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-accent" style={{ alignSelf: "flex-start", marginTop: 8 }} disabled={sent}>
            {sent ? "✓ Reçu — réponse en 24h" : <>Envoyer ma demande <span className="arrow">→</span></>}
          </button>
        </div>

        {/* RIGHT — live quote */}
        <aside className="estimator-quote">
          <div className="quote-head">
            <span>Estimation #{Math.floor(2026000 + Math.random() * 999)}</span>
            <span>{calc.label}</span>
          </div>

          <div className="quote-rows">
            <div className="quote-row">
              <span>Base · {calc.label}</span>
              <span className="v">{formatPrice(calc.base)} $</span>
            </div>
            {calc.pages > 0 && (
              <div className="quote-row">
                <span>+ pages additionnelles</span>
                <span className="v">{formatPrice(calc.pages)} $</span>
              </div>
            )}
            {calc.features > 0 && (
              <div className="quote-row">
                <span>+ {features.size} fonctionnalité{features.size > 1 ? "s" : ""}</span>
                <span className="v">{formatPrice(calc.features)} $</span>
              </div>
            )}
            {calc.urgencyMult > 1 && (
              <div className="quote-row">
                <span>× urgence ({calc.urgencyLabel})</span>
                <span className="v">×{calc.urgencyMult}</span>
              </div>
            )}
            <div className="quote-row muted">
              <span>Hébergement (1 an)</span>
              <span>inclus</span>
            </div>
            <div className="quote-row muted">
              <span>Support post-launch</span>
              <span>inclus 30–60j</span>
            </div>
            <div className="quote-row muted">
              <span>Révisions</span>
              <span>2–3 incluses</span>
            </div>
          </div>

          <div className="quote-total">
            <div className="label">Total estimé · CAD</div>
            <div className="amount">
              {formatPrice(displayTotal)}<sup>$</sup>
            </div>
            <div className="note">Livraison estimée : {calc.days} · devis ferme sous 24h après envoi</div>
          </div>

          <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 24, lineHeight: 1.6 }}>
            ✓ Pas de frais cachés<br/>
            ✓ Tarif signé au contrat<br/>
            ✓ Acompte 30% au démarrage<br/>
            ✓ Solde à la mise en ligne
          </div>
        </aside>
      </form>
    </section>
  );
};

window.Estimator = Estimator;
