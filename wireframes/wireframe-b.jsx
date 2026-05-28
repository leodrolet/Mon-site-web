/* Wireframe B — CINÉMA / SHOWREEL
   Dark mode, full-bleed video hero, scroll-pinned narrative.
   Vibe: immersif, premium, atmosphère Awwwards.
*/
const WireframeB = () => (
  <div className="wf dark" style={{ width: "100%", height: "100%" }}>

    {/* Minimal top nav */}
    <div className="row" style={{ alignItems: "center", justifyContent: "space-between", padding: "18px 28px" }}>
      <div className="handb" style={{ fontSize: 22, letterSpacing: -0.5 }}>● novio.studio</div>
      <div className="mono uppercase tracked row" style={{ gap: 20, fontSize: 10 }}>
        <span>Index</span><span>Studio</span><span>Tarifs</span><span>Contact</span>
      </div>
      <div className="mono uppercase tracked" style={{ fontSize: 10 }}>Gatineau · 14:22 EST</div>
    </div>

    {/* HERO video full bleed */}
    <div style={{ position: "relative", height: 620, margin: "0 28px" }}>
      <div className="ph dark" style={{ position: "absolute", inset: 0 }}>
        <div className="col" style={{ alignItems: "center", gap: 10 }}>
          <div className="play">▶</div>
          <div>vidéo plein écran · WebGL · particules</div>
        </div>
      </div>

      {/* Hero text overlay */}
      <div style={{ position: "absolute", left: 24, bottom: 28, right: 24, color: "#fff" }}>
        <div className="mono uppercase tracked" style={{ fontSize: 10, opacity: 0.75 }}>Studio web · 2024 — ∞</div>
        <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 96, lineHeight: 0.88, letterSpacing: -2, marginTop: 8 }}>
          On crée des expériences<br/>
          <i style={{ fontWeight: 400, opacity: 0.7 }}>qui captivent</i>.
        </div>
        <div className="row" style={{ justifyContent: "space-between", marginTop: 22, alignItems: "flex-end" }}>
          <div className="mono uppercase tracked" style={{ fontSize: 11, opacity: 0.7 }}>↓ Scroll pour entrer</div>
          <div className="mono uppercase tracked row" style={{ gap: 16, fontSize: 11 }}>
            <span>01 / Maison Lemay</span>
            <span>02 / Brasserie Nord</span>
            <span>03 / Atelier Sève</span>
            <span>04 / Clinique Plateau</span>
          </div>
        </div>
      </div>

      <div className="postit" style={{ top: 14, right: -10, transform: "rotate(3deg)", color: "#000" }}>
        ▶ vidéo auto-play, son off, loop. Texte overlay anime au scroll.
      </div>
    </div>

    {/* Marquee */}
    <div style={{ borderTop: "1.5px solid #ededed", borderBottom: "1.5px solid #ededed", margin: "28px 0", padding: "0 28px" }}>
      <Marquee items={["EXPÉRIENCES IMMERSIVES", "GATINEAU—OTTAWA", "DÈS 999$", "LIVRÉ EN 14 JOURS", "WebGL · GSAP · Next.js"]} />
    </div>

    {/* Sticky scroll services — 3 mock frames */}
    <div style={{ padding: "20px 28px" }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <div className="meta">§ 02 — Services</div>
        <div className="mono" style={{ fontSize: 11, opacity: 0.6 }}>(scroll-pin · révèle 1 par 1)</div>
      </div>

      {[
        { n: "01", title: "Landing Page", price: "dès 999$", desc: "Une page qui convertit. 7 jours. Design sur mesure, performance maximale.", days: "7j" },
        { n: "02", title: "Site Vitrine", price: "dès 1 899$", desc: "5 pages. SEO par page. Pour artisans, restos, cliniques, services pros.", days: "2–3 sem." },
        { n: "03", title: "Site Complet", price: "dès 3 999$", desc: "CMS, blog, intégrations avancées. Architecture qui scale avec ta croissance.", days: "2–3 sem." },
        { n: "04", title: "Refonte", price: "dès 3 699$", desc: "Garde ton SEO, gagne 10× en vitesse. Audit + 301 + nouveau design.", days: "2–4 sem." },
      ].map(s => (
        <div key={s.n} style={{ display: "grid", gridTemplateColumns: "100px 1fr 220px", gap: 20, padding: "26px 0", borderBottom: "1px solid rgba(255,255,255,0.2)", alignItems: "center" }}>
          <div className="bignum" style={{ fontSize: 64, opacity: 0.4 }}>{s.n}</div>
          <div>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: 42, lineHeight: 1, letterSpacing: -1 }}>{s.title}</div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 13, marginTop: 8, color: "#b8b8b8", maxWidth: 340 }}>{s.desc}</div>
          </div>
          <div className="col" style={{ alignItems: "flex-end", gap: 6 }}>
            <div className="mono" style={{ fontSize: 14 }}>{s.price}</div>
            <div className="mono uppercase tracked" style={{ fontSize: 10, opacity: 0.6 }}>{s.days}</div>
            <div className="mono uppercase tracked" style={{ fontSize: 10, marginTop: 8, padding: "6px 12px", border: "1px solid #ededed", borderRadius: 999 }}>Voir →</div>
          </div>
        </div>
      ))}
    </div>

    {/* PROCESSUS — horizontal step strip */}
    <div style={{ padding: "44px 28px 0" }}>
      <div className="meta">§ 03 — Processus</div>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: 42, marginTop: 8 }}>Quatre étapes. Zéro friction.</div>
      <div className="row" style={{ gap: 0, marginTop: 22, alignItems: "stretch" }}>
        {[
          ["01", "Brief", "Appel 30 min. On comprend ta business."],
          ["02", "Design", "Maquette Figma. 1–2 révisions."],
          ["03", "Build", "Code · perf · SEO. Tu suis l'avancée."],
          ["04", "Live", "Mise en ligne. Support 30j inclus."],
        ].map(([n, t, d], i) => (
          <div key={n} className="col" style={{ flex: 1, padding: "16px 14px", borderLeft: i === 0 ? "1px solid #ededed" : "none", borderRight: "1px solid #ededed", borderTop: "1px solid #ededed", borderBottom: "1px solid #ededed", gap: 6 }}>
            <div className="mono uppercase tracked" style={{ fontSize: 10, opacity: 0.6 }}>{n}</div>
            <div className="handb" style={{ fontSize: 28, lineHeight: 0.95 }}>{t}</div>
            <div style={{ fontSize: 12, color: "#b8b8b8", fontFamily: "var(--sans)" }}>{d}</div>
          </div>
        ))}
      </div>
    </div>

    {/* PORTFOLIO — dark grid */}
    <div style={{ padding: "44px 28px 0" }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <div className="meta">§ 04 — Index des travaux</div>
        <div className="mono" style={{ fontSize: 11, opacity: 0.6 }}>(hover → preview vidéo)</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 18 }}>
        {[
          ["Maison Lemay", "Refonte · 2026"],
          ["Brasserie Nord", "Site vitrine · 2025"],
          ["Atelier Sève", "Landing · 2025"],
          ["Clinique Plateau", "Site complet · 2025"],
        ].map(([t, d]) => (
          <div key={t}>
            <div className="ph dark" style={{ height: 200 }}>preview · {t}</div>
            <div className="row" style={{ justifyContent: "space-between", marginTop: 8 }}>
              <div className="handb" style={{ fontSize: 20 }}>{t}</div>
              <div className="mono uppercase tracked" style={{ fontSize: 10, opacity: 0.6 }}>{d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* À PROPOS — short dark bio */}
    <div style={{ padding: "56px 28px 0", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 30 }}>
      <div>
        <div className="meta">§ 05 — Le studio</div>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 38, lineHeight: 1.05, marginTop: 10 }}>
          Un dev. Un studio. <i style={{ opacity: 0.7 }}>Pas d'intermédiaire.</i>
        </div>
        <div style={{ fontFamily: "var(--sans)", fontSize: 14, color: "#b8b8b8", lineHeight: 1.5, marginTop: 14, maxWidth: 420 }}>
          Basé à Gatineau depuis 2024. Je code chaque pixel à la main. Spécialisé en sites haute-performance pour les PME de l'Outaouais et d'Ottawa.
        </div>
        <div className="row" style={{ gap: 8, marginTop: 16, flexWrap: "wrap" }}>
          {["Next.js", "GSAP", "Three.js", "Webflow", "Figma", "Sanity"].map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      <div className="ph dark" style={{ height: 260 }}>portrait studio</div>
    </div>

    {/* FINAL CTA */}
    <div style={{ padding: "60px 28px 36px", textAlign: "center" }}>
      <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 88, lineHeight: 0.9, letterSpacing: -2 }}>
        Prochain projet : <i style={{ fontWeight: 400, opacity: 0.6 }}>le tien.</i>
      </div>
      <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 22 }}>
        <div className="mono uppercase tracked" style={{ fontSize: 12, padding: "14px 22px", background: "#fff", color: "#000", borderRadius: 999 }}>Démarrer un projet →</div>
        <div className="mono uppercase tracked" style={{ fontSize: 12, padding: "14px 22px", border: "1.5px solid #fff", borderRadius: 999 }}>Voir tous les travaux</div>
      </div>
    </div>

    <FooterMock />
  </div>
);

window.WireframeB = WireframeB;
