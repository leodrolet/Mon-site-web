/* Wireframe C — INDEX BRUTALISTE
   Pure white + black + single accent (red).
   Mono everywhere. List-driven. Numbered index. Dense.
   Vibe: doc technique premium, ultra-confiant.
*/
const WireframeC = () => (
  <div className="wf brut" style={{ width: "100%", height: "100%" }}>

    {/* Top nav — mono, dense */}
    <div className="row" style={{ alignItems: "center", justifyContent: "space-between", padding: "14px 24px", borderBottom: "1.5px solid #000" }}>
      <div className="mono" style={{ fontSize: 13, fontWeight: 600 }}>NOVIO/STUDIO ◼</div>
      <div className="row mono uppercase tracked" style={{ gap: 22, fontSize: 10 }}>
        <span>[01] INDEX</span><span>[02] SERVICES</span><span>[03] TARIFS</span><span>[04] STUDIO</span><span>[05] CONTACT</span>
      </div>
      <div className="mono uppercase tracked" style={{ fontSize: 10 }}>
        STATUS: <span style={{ color: "var(--accent)" }}>● OUVERT · MAI 2026</span>
      </div>
    </div>

    {/* Hero — text only, big and brutal */}
    <div style={{ padding: "32px 24px", borderBottom: "1.5px solid #000", position: "relative" }}>
      <div className="row mono uppercase tracked" style={{ justifyContent: "space-between", fontSize: 10, marginBottom: 26 }}>
        <span>FILE: index.html</span>
        <span>VERSION: 2026.05</span>
        <span>EDITED: il y a 3 jours</span>
        <span>LOCATION: 45.47°N · 75.70°W</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 18, alignItems: "start" }}>
        <div className="mono" style={{ fontSize: 11, opacity: 0.5, paddingTop: 12 }}>
          001<br/>002<br/>003<br/>004<br/>005<br/>006
        </div>
        <div className="hand" style={{ fontFamily: "Fraunces, serif", fontSize: 86, lineHeight: 0.95, fontWeight: 700, letterSpacing: -2 }}>
          NOVIO STUDIO ——<br/>
          DÉVELOPPEUR WEB.<br/>
          GATINEAU/QC.<br/>
          ON CRÉE DES <span style={{ color: "var(--accent)" }}>EXPÉRIENCES</span><br/>
          IMMERSIVES POUR LES<br/>
          PME D'OUTAOUAIS/OTTAWA.
        </div>
      </div>

      <div className="row" style={{ justifyContent: "space-between", marginTop: 30, fontSize: 11, alignItems: "flex-end" }}>
        <div className="mono">
          <div>→ DEVIS GRATUIT EN 24H</div>
          <div>→ LIVRAISON 7–28 JOURS</div>
          <div>→ DÈS 999 CAD$</div>
        </div>
        <div className="mono uppercase tracked row" style={{ gap: 0 }}>
          <div style={{ padding: "12px 18px", background: "#000", color: "#fff" }}>[ DEMANDER UN DEVIS ]</div>
          <div style={{ padding: "12px 18px", border: "1.5px solid #000", borderLeft: "none" }}>[ INDEX TRAVAUX ↓ ]</div>
        </div>
      </div>

      <div className="postit" style={{ top: 14, right: 18 }}>
        zéro fioriture. tout est lisible. la grille (70px gutter) est visible volontairement.
      </div>
    </div>

    {/* Hero visual — small, in a strict frame */}
    <div className="row" style={{ borderBottom: "1.5px solid #000" }}>
      <div style={{ flex: "0 0 200px", borderRight: "1.5px solid #000", padding: "14px 18px" }} className="mono">
        <div style={{ fontSize: 10, opacity: 0.6 }}>FIG. 01</div>
        <div style={{ marginTop: 6, fontSize: 12 }}>showreel.mp4</div>
        <div style={{ marginTop: 6, fontSize: 10, opacity: 0.6 }}>00:42 · 4K · 23 MB</div>
        <div style={{ marginTop: 14, fontSize: 10 }}>—</div>
        <div style={{ marginTop: 6, fontSize: 10 }}>Vidéo plein écran<br/>4 projets clés<br/>auto-play muet</div>
      </div>
      <div style={{ flex: 1 }}>
        <div className="ph" style={{ height: 240, border: "none" }}>SHOWREEL · 16:9 · WEBGL</div>
      </div>
    </div>

    {/* SERVICES — pure table */}
    <div style={{ padding: "32px 24px 0" }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <div className="mono" style={{ fontSize: 12 }}>[02] · SERVICES</div>
        <div className="mono" style={{ fontSize: 10, opacity: 0.6 }}>tableau · 4 lignes · cliquer pour développer</div>
      </div>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: 56, lineHeight: 0.95, marginTop: 6, fontWeight: 700 }}>QUATRE OFFRES.</div>
    </div>

    <table style={{ width: "calc(100% - 48px)", margin: "20px 24px 0", borderCollapse: "collapse", fontFamily: "var(--mono)", fontSize: 12 }}>
      <thead>
        <tr style={{ borderTop: "1.5px solid #000", borderBottom: "1.5px solid #000" }}>
          <th style={{ textAlign: "left", padding: "8px 6px", width: 36, fontWeight: 500 }}>#</th>
          <th style={{ textAlign: "left", padding: "8px 6px", fontWeight: 500 }}>OFFRE</th>
          <th style={{ textAlign: "left", padding: "8px 6px", fontWeight: 500 }}>DESCRIPTION</th>
          <th style={{ textAlign: "right", padding: "8px 6px", fontWeight: 500 }}>DÉLAI</th>
          <th style={{ textAlign: "right", padding: "8px 6px", fontWeight: 500 }}>TARIF</th>
          <th style={{ textAlign: "right", padding: "8px 6px", width: 40, fontWeight: 500 }}>—</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["01", "Landing Page", "1 page · formulaire · perf max · 2 révisions", "7 jours", "999 $"],
          ["02", "Site Vitrine", "5 pages · SEO par page · 3 révisions · support 30j", "2–3 sem.", "1 899 $"],
          ["03", "Refonte Complète", "audit · 301 · perf · migration · formation", "2–4 sem.", "3 699 $"],
          ["04", "Site Complet", "CMS · blog · intégrations · support 60j", "2–3 sem.", "3 999 $"],
        ].map(([n, o, d, t, p], i) => (
          <tr key={n} style={{ borderBottom: "1.5px solid #000", height: 56 }}>
            <td style={{ padding: "8px 6px", verticalAlign: "top" }}>{n}</td>
            <td style={{ padding: "8px 6px", fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700 }}>{o}</td>
            <td style={{ padding: "8px 6px", maxWidth: 260, opacity: 0.75 }}>{d}</td>
            <td style={{ padding: "8px 6px", textAlign: "right" }}>{t}</td>
            <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 600 }}>{p}</td>
            <td style={{ padding: "8px 6px", textAlign: "right" }}>+</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="note mono" style={{ position: "static", display: "block", margin: "10px 24px 0", color: "var(--accent)" }}>
      → cliquer sur "+" ouvre la fiche détaillée inline (sans changer de page)
    </div>

    {/* PORTFOLIO — file-list style */}
    <div style={{ padding: "44px 24px 0" }}>
      <div className="mono" style={{ fontSize: 12 }}>[03] · TRAVAUX ··· {`{12}`}</div>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: 56, marginTop: 6, fontWeight: 700 }}>INDEX/2024–2026</div>
    </div>

    <div style={{ margin: "16px 24px 0", borderTop: "1.5px solid #000" }}>
      {[
        ["2026.04", "Maison Lemay", "Refonte", "Immobilier · Aylmer", "↗"],
        ["2026.02", "Brasserie Nord", "Site vitrine", "F&B · Gatineau", "↗"],
        ["2025.11", "Atelier Sève", "Landing", "Artisan · Hull", "↗"],
        ["2025.09", "Clinique Plateau", "Site complet", "Santé · Ottawa", "↗"],
        ["2025.06", "Café Outaouais", "Refonte", "F&B · Gatineau", "↗"],
        ["2025.03", "Notaire Beaudet", "Vitrine", "Pro services · Hull", "↗"],
      ].map(([d, n, t, c, a]) => (
        <div key={n} className="row mono" style={{ borderBottom: "1px solid #000", padding: "12px 4px", fontSize: 12, alignItems: "center" }}>
          <div style={{ width: 90, opacity: 0.6 }}>{d}</div>
          <div style={{ flex: 1, fontFamily: "Fraunces, serif", fontSize: 18, fontWeight: 700 }}>{n}</div>
          <div style={{ width: 130, opacity: 0.75 }}>{t}</div>
          <div style={{ width: 200, opacity: 0.6 }}>{c}</div>
          <div style={{ width: 24, textAlign: "right" }}>{a}</div>
        </div>
      ))}
      <div className="mono" style={{ padding: "10px 4px", fontSize: 11, opacity: 0.6 }}>… +6 autres</div>
    </div>

    {/* STUDIO bio */}
    <div className="row" style={{ marginTop: 44, borderTop: "1.5px solid #000", borderBottom: "1.5px solid #000" }}>
      <div style={{ flex: "0 0 40%", padding: "24px", borderRight: "1.5px solid #000" }}>
        <div className="mono" style={{ fontSize: 12 }}>[04] · STUDIO</div>
        <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 44, lineHeight: 0.95, marginTop: 8 }}>UN HUMAIN.<br/>UNE LIGNE DIRECTE.</div>
        <div className="ph" style={{ height: 200, marginTop: 16, border: "1.5px solid #000" }}>portrait · n/b</div>
      </div>
      <div style={{ flex: 1, padding: 24 }} className="mono">
        <div style={{ fontSize: 12, opacity: 0.6 }}>// bio.txt</div>
        <pre style={{ fontFamily: "var(--mono)", fontSize: 12, lineHeight: 1.55, whiteSpace: "pre-wrap", margin: "10px 0 0" }}>
{`> NAME       Novio
> ROLE       Développeur web freelance
> BASED      Gatineau, QC
> SINCE      2024
> CLIENTS    PME · Outaouais & Ottawa
> STACK      Next.js · GSAP · Three.js · Webflow
> PHILO      Pas d'agence. Pas de sous-traitance.
            Tu parles à celui qui code.
> PROMESSE   Livraison ferme. SEO inclus. Support 30j.`}
        </pre>
        <div className="row" style={{ gap: 8, marginTop: 16, flexWrap: "wrap" }}>
          {["NEXT.JS", "GSAP", "THREE.JS", "WEBFLOW", "FIGMA", "SANITY", "SEO LOCAL"].map(t => <span key={t} className="tag mono" style={{ fontSize: 9 }}>{t}</span>)}
        </div>
      </div>
    </div>

    {/* FAQ + CTA */}
    <div style={{ padding: "32px 24px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <div>
        <div className="mono" style={{ fontSize: 12 }}>[05] · FAQ</div>
        <div style={{ marginTop: 12, borderTop: "1.5px solid #000" }}>
          {[
            "C'est quoi la différence avec WordPress / Wix ?",
            "Tu héberges aussi le site ?",
            "Et si j'ai déjà un logo / une identité ?",
            "Tu travailles à distance ou en personne ?",
          ].map(q => (
            <div key={q} className="row mono" style={{ borderBottom: "1px solid #000", padding: "10px 0", justifyContent: "space-between", fontSize: 12 }}>
              <span>— {q}</span><span>+</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mono" style={{ fontSize: 12 }}>[06] · CONTACT</div>
        <div style={{ marginTop: 12, border: "1.5px solid #000", padding: 16 }} className="mono">
          <div style={{ fontSize: 11, opacity: 0.6 }}>// form fields</div>
          {["Nom", "Email", "Type de projet [v]", "Budget approx. [v]", "Délai souhaité [v]"].map(f => (
            <div key={f} style={{ borderBottom: "1px dashed #000", padding: "10px 0", fontSize: 12, opacity: 0.7 }}>{f} :</div>
          ))}
          <div style={{ marginTop: 14, padding: "12px 16px", background: "#000", color: "#fff", textAlign: "center", fontSize: 11 }} className="uppercase tracked">
            [ ENVOYER · ESTIMATION EN TEMPS RÉEL ]
          </div>
          <div className="note mono" style={{ position: "static", display: "block", marginTop: 12, color: "var(--accent)" }}>
            → calcule un prix estimé en temps réel selon les réponses
          </div>
        </div>
      </div>
    </div>

    {/* Final CTA strip */}
    <div style={{ padding: "44px 24px", borderTop: "1.5px solid #000", marginTop: 36 }}>
      <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 92, lineHeight: 0.9, letterSpacing: -2 }}>
        ON SE LANCE? <span style={{ color: "var(--accent)" }}>—→</span>
      </div>
    </div>

    <FooterMock />
  </div>
);

window.WireframeC = WireframeC;
