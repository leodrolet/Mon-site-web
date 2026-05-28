/* Wireframe D — MANIFESTE
   Cream + terracotta. Manifesto opener, sticky cards, receipt tarifs.
   Vibe: confiant, chaleureux, signé.
*/
const WireframeD = () => (
  <div className="wf warm" style={{ width: "100%", height: "100%" }}>

    {/* Nav */}
    <div className="row" style={{ alignItems: "center", justifyContent: "space-between", padding: "18px 28px", borderBottom: "1.5px solid #1a1a1a" }}>
      <div className="row" style={{ gap: 8, alignItems: "center" }}>
        <span style={{ display: "inline-block", width: 16, height: 16, borderRadius: "50%", background: "#c0432a" }}></span>
        <div className="handb" style={{ fontSize: 26 }}>Novio Studio</div>
      </div>
      <div className="row mono uppercase tracked" style={{ gap: 22, fontSize: 11 }}>
        <span>Travaux</span><span>Offres</span><span>Manifeste</span><span>Contact</span>
      </div>
      <div className="mono" style={{ fontSize: 11 }}>✶ Disponible mai/juin</div>
    </div>

    {/* MANIFESTE intro */}
    <div style={{ padding: "44px 28px 18px", maxWidth: "100%", position: "relative" }}>
      <div className="mono uppercase tracked" style={{ fontSize: 10 }}>I — Le manifeste</div>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: 44, lineHeight: 1.08, marginTop: 14, maxWidth: 620, fontWeight: 400 }}>
        <i>On ne fait pas des sites web.</i> On crée des <span style={{ background: "#c0432a", color: "#efe6d6", padding: "0 8px" }}>expériences immersives</span> qui captivent dès la première seconde — pour les PME d'ici qui méritent mieux que <span className="crossed" style={{ textDecorationColor: "#c0432a" }}>un template à 50$</span>.
      </div>

      <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginTop: 36 }}>
        <div className="handb" style={{ fontSize: 18, transform: "rotate(-2deg)" }}>— signé, Novio ✎</div>
        <div className="row" style={{ gap: 10 }}>
          <div className="mono uppercase tracked" style={{ fontSize: 11, padding: "12px 18px", background: "#1a1a1a", color: "#efe6d6", borderRadius: 2 }}>Démarrer →</div>
          <div className="mono uppercase tracked" style={{ fontSize: 11, padding: "12px 18px", border: "1.5px solid #1a1a1a", borderRadius: 2 }}>Lire le manifeste complet</div>
        </div>
      </div>

      <div className="postit" style={{ top: 60, right: 24, transform: "rotate(4deg)" }}>
        ✎ texte = la "promesse" du studio. Animation : se révèle mot à mot au scroll.
      </div>
    </div>

    {/* Showreel embedded */}
    <div style={{ padding: "26px 28px 0" }}>
      <div className="ph" style={{ height: 300, borderColor: "#1a1a1a" }}>
        <div className="col" style={{ alignItems: "center", gap: 8 }}>
          <div className="play">▶</div>
          <div>showreel · expériences signées</div>
        </div>
      </div>
      <div className="row mono" style={{ justifyContent: "space-between", marginTop: 8 }}>
        <span className="mono" style={{ fontSize: 11 }}>4 projets · 00:42</span>
        <span className="mono" style={{ fontSize: 11 }}>↗ voir en plein écran</span>
      </div>
    </div>

    {/* Sticky cards services */}
    <div style={{ padding: "44px 28px 0" }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div className="mono uppercase tracked" style={{ fontSize: 10 }}>II — Ce qu'on fait</div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: 50, marginTop: 6 }}>Quatre offres.<br/><i>Toutes signées.</i></div>
        </div>
        <div className="mono" style={{ fontSize: 11, maxWidth: 200, textAlign: "right" }}>(les cartes s'empilent au scroll · chaque carte révèle le détail)</div>
      </div>

      <div style={{ marginTop: 22, position: "relative" }}>
        {[
          { n: "01", t: "Landing Page", p: "999$", d: "7 jours", color: "#c0432a", desc: "Une page. Un message. Une conversion. Pour ceux qui veulent frapper fort, vite." },
          { n: "02", t: "Site Vitrine", p: "1 899$", d: "2–3 sem.", color: "#1a1a1a", desc: "5 pages au design sur mesure. SEO local optimisé. Pour artisans, restos, cliniques." },
          { n: "03", t: "Refonte", p: "3 699$", d: "2–4 sem.", color: "#8a3f1a", desc: "Tu gardes ton SEO, on change tout le reste. Audit + redirections + perf. Sans douleur." },
          { n: "04", t: "Site Complet", p: "3 999$", d: "2–3 sem.", color: "#3a1f10", desc: "CMS, blog, intégrations. L'arsenal complet pour une PME qui scale." },
        ].map((s, i) => (
          <div key={s.n} style={{
            border: "1.5px solid #1a1a1a",
            background: i % 2 === 0 ? "#f4ecd9" : "#e7ddc6",
            padding: "20px 22px",
            marginTop: i === 0 ? 0 : -8,
            transform: `rotate(${i % 2 === 0 ? -0.4 : 0.4}deg)`,
            position: "relative",
          }}>
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <div className="row" style={{ gap: 14, alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: 11, opacity: 0.6 }}>{s.n}</span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: 42, fontWeight: 700 }}>{s.t}</span>
              </div>
              <div className="row mono" style={{ gap: 18, alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: 11 }}>{s.d}</span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: 32, color: s.color }}>dès {s.p}</span>
                <span className="mono uppercase tracked" style={{ fontSize: 10, padding: "6px 10px", border: "1.5px solid #1a1a1a" }}>+ détails</span>
              </div>
            </div>
            <div style={{ marginTop: 10, fontFamily: "var(--sans)", fontSize: 13, color: "#3a3a3a", maxWidth: 540 }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </div>

    {/* À PROPOS — letter format */}
    <div style={{ padding: "56px 28px 0", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 30, alignItems: "start" }}>
      <div>
        <div className="ph" style={{ height: 260, borderColor: "#1a1a1a" }}>portrait · atelier maison</div>
        <div className="mono uppercase tracked" style={{ fontSize: 10, marginTop: 8, opacity: 0.7 }}>NOVIO · GATINEAU · ÉTÉ 2025</div>
      </div>
      <div>
        <div className="mono uppercase tracked" style={{ fontSize: 10 }}>III — Le studio</div>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 38, lineHeight: 1.05, marginTop: 6 }}>
          Bonjour, je suis <i>Novio.</i>
        </div>
        <div style={{ fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.55, marginTop: 14, maxWidth: 440 }}>
          J'ai monté ce studio à Gatineau pour une raison simple : les PME d'ici méritent des sites à la hauteur de leur travail. Pas un template recyclé. Pas une agence à 50K. Du sur-mesure, livré en quelques semaines, par la personne qui te répond au téléphone.
        </div>
        <div style={{ fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.55, marginTop: 10, maxWidth: 440 }}>
          Je code. Je design. Je livre. Et je reste 30 jours après le launch pour que tu sois autonome.
        </div>
        <div className="handb" style={{ fontSize: 24, marginTop: 14, transform: "rotate(-2deg)", display: "inline-block" }}>— Novio ✎</div>
      </div>
    </div>

    {/* PROCESSUS */}
    <div style={{ padding: "56px 28px 0" }}>
      <div className="mono uppercase tracked" style={{ fontSize: 10 }}>IV — Méthode</div>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: 44, marginTop: 6 }}>Comment ça se passe.</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginTop: 22 }}>
        {[
          ["J1", "Appel", "30 min pour comprendre."],
          ["J3", "Maquette", "Figma · 1–2 révisions."],
          ["J5–10", "Build", "Tu suis l'avancée en live."],
          ["J14", "Live", "Mise en ligne + formation."],
        ].map(([d, t, desc]) => (
          <div key={d} style={{ borderTop: "2px solid #c0432a", paddingTop: 10 }}>
            <div className="mono uppercase tracked" style={{ fontSize: 11, color: "#c0432a" }}>{d}</div>
            <div className="handb" style={{ fontSize: 28, lineHeight: 1, marginTop: 4 }}>{t}</div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 12, marginTop: 6, color: "#3a3a3a" }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>

    {/* PORTFOLIO — postcards */}
    <div style={{ padding: "56px 28px 0" }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div className="mono uppercase tracked" style={{ fontSize: 10 }}>V — Travaux signés</div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: 44, marginTop: 6 }}>Des PME qui rayonnent.</div>
        </div>
        <div className="mono" style={{ fontSize: 11 }}>↗ 12 projets</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, marginTop: 22 }}>
        {[
          ["Maison Lemay", "Aylmer", -1.5],
          ["Brasserie Nord", "Gatineau", 1],
          ["Atelier Sève", "Hull", -0.5],
          ["Clinique Plateau", "Ottawa", 1.5],
          ["Café Outaouais", "Gatineau", -1],
          ["+7 autres →", "voir tout", 0],
        ].map(([t, c, r], i) => (
          <div key={t} style={{ transform: `rotate(${r}deg)`, background: "#f4ecd9", border: "1.5px solid #1a1a1a", padding: 10, boxShadow: "3px 4px 0 rgba(0,0,0,0.12)" }}>
            <div className="ph" style={{ height: 110, borderColor: "#1a1a1a" }}>{t}</div>
            <div className="row" style={{ justifyContent: "space-between", marginTop: 8 }}>
              <div className="handb" style={{ fontSize: 16 }}>{t}</div>
              <div className="mono" style={{ fontSize: 10, opacity: 0.6 }}>{c}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RECEIPT-STYLE TARIFS REVIEW */}
    <div style={{ padding: "56px 28px 0", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 30 }}>
      <div>
        <div className="mono uppercase tracked" style={{ fontSize: 10 }}>VI — Témoignages</div>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 38, marginTop: 6, lineHeight: 1.05 }}>
          <i>« Le meilleur investissement de mon année. »</i>
        </div>
        <div className="mono uppercase tracked" style={{ fontSize: 10, marginTop: 12 }}>— Marie L., propriétaire · Maison Lemay</div>
        <div className="row" style={{ gap: 8, marginTop: 22 }}>
          {["★★★★★", "★★★★★", "★★★★★"].map((s, i) => <div key={i} className="handb" style={{ fontSize: 18, color: "#c0432a" }}>{s}</div>)}
        </div>
        <div className="mono" style={{ fontSize: 11, marginTop: 8, opacity: 0.7 }}>15 avis · 5.0 / 5 · Google</div>
      </div>

      {/* Receipt */}
      <div style={{
        background: "#fffbf2",
        border: "1.5px solid #1a1a1a",
        padding: "18px 20px",
        fontFamily: "var(--mono)",
        fontSize: 12,
        boxShadow: "4px 5px 0 rgba(0,0,0,0.12)",
      }}>
        <div className="row" style={{ justifyContent: "space-between", borderBottom: "1px dashed #000", paddingBottom: 10 }}>
          <span style={{ fontWeight: 600 }}>NOVIO STUDIO · REÇU</span>
          <span>#2026-0042</span>
        </div>
        <div style={{ marginTop: 12 }}>
          {[
            ["Landing Page (1×)", "999.00"],
            ["Site Vitrine (1×)", "1 899.00"],
            ["Refonte (1×)", "3 699.00"],
            ["Site Complet (1×)", "3 999.00"],
          ].map(([l, p]) => (
            <div key={l} className="row" style={{ justifyContent: "space-between", padding: "6px 0", borderBottom: "1px dotted #aaa" }}>
              <span>{l}</span><span>{p} $</span>
            </div>
          ))}
        </div>
        <div className="row" style={{ justifyContent: "space-between", marginTop: 12, paddingTop: 10, borderTop: "2px solid #000" }}>
          <span style={{ fontWeight: 600 }}>INCLUS</span><span>support 30–60 j</span>
        </div>
        <div className="row" style={{ justifyContent: "space-between", padding: "4px 0" }}>
          <span>hébergement (1 an)</span><span>0.00</span>
        </div>
        <div className="row" style={{ justifyContent: "space-between", padding: "4px 0" }}>
          <span>SEO de base</span><span>0.00</span>
        </div>
        <div className="row" style={{ justifyContent: "center", marginTop: 16 }}>
          <Stamp>Garantie satisfaction</Stamp>
        </div>
        <div style={{ textAlign: "center", marginTop: 12, fontSize: 10, opacity: 0.5 }}>
          ════ MERCI ════
        </div>
      </div>
    </div>

    {/* FINAL CTA */}
    <div style={{ padding: "60px 28px 36px", textAlign: "center", position: "relative" }}>
      <div className="mono uppercase tracked" style={{ fontSize: 10 }}>VII — La suite</div>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: 80, lineHeight: 0.95, marginTop: 8, fontWeight: 400 }}>
        On <i>commence quand?</i>
      </div>
      <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 22 }}>
        <div className="mono uppercase tracked" style={{ fontSize: 12, padding: "14px 22px", background: "#c0432a", color: "#efe6d6" }}>Réserver mon créneau →</div>
        <div className="mono uppercase tracked" style={{ fontSize: 12, padding: "14px 22px", border: "1.5px solid #1a1a1a" }}>hello@novio.studio</div>
      </div>
      <div className="handb" style={{ fontSize: 18, marginTop: 22, transform: "rotate(-2deg)", display: "inline-block" }}>
        ✎ première rencontre · café offert
      </div>
    </div>

    <FooterMock />
  </div>
);

window.WireframeD = WireframeD;
