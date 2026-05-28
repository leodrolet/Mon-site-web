/* Wireframe A — ÉDITORIAL BOLD
   Massive serif type, magazine grid, off-white, single accent.
   Vibe: confident, big statements, asymmetric.
*/
const WireframeA = () => (
  <div className="wf" style={{ width: "100%", height: "100%", fontFamily: "var(--hand)" }}>

    <NavMock logo="NOVIO·STUDIO" />

    {/* HERO */}
    <div style={{ padding: "36px 28px 12px", position: "relative" }}>
      <div className="row mono uppercase tracked" style={{ justifyContent: "space-between", fontSize: 11, opacity: 0.7 }}>
        <span>Studio web · Gatineau / Ottawa · est. 2024</span>
        <span>↗ disponible · 2 places mai/juin</span>
      </div>

      <div style={{ marginTop: 28, position: "relative" }}>
        <div style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 110, lineHeight: 0.86, letterSpacing: -3 }}>
          On ne fait pas<br/>
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>des sites.</span><br/>
          On crée des <span className="squiggle">expériences</span>.
        </div>
        <div className="note" style={{ top: 130, right: 18, transform: "rotate(4deg)", maxWidth: 160 }}>
          headline géant — typo serif italique pour "expériences"
        </div>
      </div>

      <div className="row" style={{ marginTop: 32, gap: 28, alignItems: "flex-end", justifyContent: "space-between" }}>
        <div style={{ maxWidth: 320, fontSize: 16, lineHeight: 1.35, fontFamily: "var(--sans)" }}>
          Développeur web freelance à Gatineau. Sites haute-performance pour PME de l'Outaouais et d'Ottawa — livrés en 7 à 14 jours.
        </div>
        <div className="row" style={{ gap: 10 }}>
          <div className="mono uppercase tracked" style={{ fontSize: 11, padding: "12px 18px", background: "var(--ink)", color: "var(--paper)", borderRadius: 999 }}>Démarrer un projet →</div>
          <div className="mono uppercase tracked" style={{ fontSize: 11, padding: "12px 18px", border: "1.5px solid var(--ink)", borderRadius: 999 }}>Voir les travaux</div>
        </div>
      </div>

      <Stamp>Livré · 14 jours max</Stamp>
    </div>

    {/* HERO VISUAL — full bleed showreel */}
    <div style={{ padding: "24px 28px 0" }}>
      <div className="ph" style={{ height: 320, position: "relative" }}>
        <div className="col" style={{ alignItems: "center", gap: 8 }}>
          <div className="play">▶</div>
          <div>showreel · 00:42 · WebGL feel</div>
        </div>
        <div className="postit" style={{ top: -14, right: 20, transform: "rotate(3deg)" }}>
          ▶ vidéo plein cadre, autoplay muet — démontre la maîtrise technique
        </div>
        <div style={{ position: "absolute", bottom: 12, left: 14 }} className="mono uppercase tracked">
          <span>01 / Maison Lemay</span>
          <span style={{ marginLeft: 14, opacity: 0.7 }}>02 / Brasserie Nord</span>
          <span style={{ marginLeft: 14, opacity: 0.7 }}>03 / Atelier Sève</span>
        </div>
      </div>
    </div>

    {/* STAT STRIP */}
    <div style={{ borderTop: "1.5px solid var(--ink)", borderBottom: "1.5px solid var(--ink)", marginTop: 28, padding: "18px 28px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
      {[
        ["14j", "livraison max"],
        ["999$", "tarif d'entrée"],
        ["100/100", "Lighthouse moyen"],
        ["30j", "support inclus"],
      ].map(([n, l]) => (
        <div key={l}>
          <div className="bignum" style={{ fontSize: 56 }}>{n}</div>
          <div className="mono uppercase tracked" style={{ fontSize: 10, opacity: 0.7 }}>{l}</div>
        </div>
      ))}
    </div>

    {/* SERVICES */}
    <div style={{ padding: "36px 28px 0", position: "relative" }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div className="meta">02 — Ce qu'on fait</div>
          <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 56, lineHeight: 0.95, marginTop: 6 }}>
            Quatre offres,<br/><i style={{ fontWeight: 400 }}>zéro flou.</i>
          </div>
        </div>
        <div className="mono" style={{ fontSize: 11, maxWidth: 220, textAlign: "right", lineHeight: 1.4 }}>
          Devis ferme, tarifs publics, dates de livraison signées au contrat.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.8fr 1.2fr", gap: 14, marginTop: 24 }}>
        <Service n="01" title="Landing Page" price="999$" days="7 jours" desc="Une page · design sur mesure · formulaire · hébergement inclus" />
        <Service n="02" title="Site vitrine" price="1 899$" days="2–3 sem." desc="Jusqu'à 5 pages · SEO par page · 3 révisions" />
        <Service n="03" title="Refonte" price="3 699$" days="2–4 sem." desc="Audit · 301 · perf · migration de contenu" />
        <Service n="04" title="Site complet" price="3 999$" days="2–3 sem." desc="CMS · blog · intégrations · support 60j" />
      </div>
      <div className="note" style={{ position: "static", display: "block", marginTop: 14, transform: "none" }}>
        chaque carte = clic vers une fiche détaillée + estimateur en bas de page
      </div>
    </div>

    {/* AVANT / APRÈS */}
    <div style={{ padding: "44px 28px 0" }}>
      <div className="meta">03 — Avant / après</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 12 }}>
        <div>
          <div className="ph" style={{ height: 220, position: "relative" }}>
            avant · site WordPress 2014
            <div style={{ position: "absolute", top: 8, left: 8 }}><span className="tag" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>AVANT</span></div>
          </div>
          <div className="mono uppercase tracked crossed" style={{ fontSize: 11, marginTop: 8 }}>lent · daté · invisible sur Google</div>
        </div>
        <div>
          <div className="ph" style={{ height: 220, position: "relative", background: "rgba(255,91,46,0.08)" }}>
            après · Novio
            <div style={{ position: "absolute", top: 8, left: 8 }}><span className="tag" style={{ background: "var(--accent)", color: "var(--paper)", borderColor: "var(--accent)" }}>APRÈS</span></div>
          </div>
          <div className="mono uppercase tracked" style={{ fontSize: 11, marginTop: 8 }}>+312% trafic · 0.9s LCP · #1 Google local</div>
        </div>
      </div>
    </div>

    {/* PORTFOLIO — magazine spread */}
    <div style={{ padding: "44px 28px 0" }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div className="meta">04 — Travaux</div>
          <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 48, lineHeight: 1 }}>Quelques signatures.</div>
        </div>
        <div className="mono" style={{ fontSize: 11 }}>→ tout voir (12)</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 18, marginTop: 18 }}>
        <div>
          <div className="ph" style={{ height: 280 }}>Featured · Maison Lemay</div>
          <div className="row" style={{ justifyContent: "space-between", marginTop: 8 }}>
            <div className="handb" style={{ fontSize: 22 }}>Maison Lemay <i style={{ fontWeight: 400, fontFamily: "Fraunces, serif" }}>· refonte</i></div>
            <div className="mono" style={{ fontSize: 10, opacity: 0.6 }}>2026 · 18 jours</div>
          </div>
        </div>
        <div className="col" style={{ gap: 18 }}>
          <div>
            <div className="ph" style={{ height: 130 }}>Brasserie Nord</div>
            <div className="mono" style={{ fontSize: 10, marginTop: 6 }}>SITE VITRINE · 5p</div>
          </div>
          <div>
            <div className="ph" style={{ height: 130 }}>Atelier Sève</div>
            <div className="mono" style={{ fontSize: 10, marginTop: 6 }}>LANDING · 7j</div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginTop: 18 }}>
        <div className="ph" style={{ height: 110 }}>Clinique Plateau</div>
        <div className="ph" style={{ height: 110 }}>Café Outaouais</div>
        <div className="ph" style={{ height: 110 }}>+9 autres →</div>
      </div>
    </div>

    {/* À PROPOS */}
    <div style={{ padding: "56px 28px 0", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 28 }}>
      <div>
        <div className="ph" style={{ height: 300 }}>Portrait · Novio</div>
        <div className="mono uppercase tracked" style={{ fontSize: 10, marginTop: 8 }}>NOVIO · DEV · GATINEAU QC</div>
      </div>
      <div>
        <div className="meta">05 — Studio</div>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 38, lineHeight: 1.05, marginTop: 6 }}>
          Un développeur. <i>Une obsession :</i> que ton site soit <span className="mark">le plus rapide</span> du quartier.
        </div>
        <div style={{ marginTop: 16, fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.5, color: "var(--ink-soft)", maxWidth: 380 }}>
          Freelance basé à Gatineau, je conçois et code chaque site moi-même. Pas d'agence, pas de sous-traitance, pas de surprise. Tu parles directement avec celui qui livre.
        </div>
        <div className="row" style={{ gap: 8, marginTop: 14, flexWrap: "wrap" }}>
          {["Webflow", "Next.js", "GSAP", "Three.js", "Figma", "SEO local"].map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div style={{ padding: "60px 28px 36px", textAlign: "center", position: "relative" }}>
      <div className="meta">06 — Travaillons ensemble</div>
      <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 96, lineHeight: 0.9, margin: "12px 0 14px" }}>
        Prêt à <i style={{ fontWeight: 400 }}>marquer</i><br/>les esprits ?
      </div>
      <div className="row" style={{ justifyContent: "center", gap: 12 }}>
        <div className="mono uppercase tracked" style={{ fontSize: 12, padding: "14px 22px", background: "var(--ink)", color: "var(--paper)", borderRadius: 999 }}>Demander un devis →</div>
        <div className="mono uppercase tracked" style={{ fontSize: 12, padding: "14px 22px", border: "1.5px solid var(--ink)", borderRadius: 999 }}>Réserver un appel · 15 min</div>
      </div>
      <div className="note" style={{ position: "static", display: "block", marginTop: 24 }}>
        bouton primaire ouvre le formulaire avec estimateur en temps réel
      </div>
    </div>

    <FooterMock />
  </div>
);

window.WireframeA = WireframeA;
