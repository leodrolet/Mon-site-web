/* Shared bits used by every wireframe */

const Squig = ({ w = 80, color = "#ff5b2e", strokeWidth = 1.6 }) => (
  <svg className="arrow-svg" width={w} height="6" viewBox="0 0 80 6" preserveAspectRatio="none">
    <path d="M0 3 Q 10 0 20 3 T 40 3 T 60 3 T 80 3" fill="none" stroke={color} strokeWidth={strokeWidth} />
  </svg>
);

const Arrow = ({ dir = "right", w = 28, color = "currentColor" }) => {
  const paths = {
    right: "M2 12 L26 12 M19 5 L26 12 L19 19",
    down:  "M12 2 L12 26 M5 19 L12 26 L19 19",
    diag:  "M3 21 L21 3 M21 3 L21 14 M21 3 L10 3",
  };
  return (
    <svg className="arrow-svg" width={w} height={w} viewBox="0 0 28 28">
      <path d={paths[dir]} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// Hand-drawn frame around children
const HandFrame = ({ children, style, color = "currentColor", className = "" }) => (
  <div className={className} style={{ position: "relative", ...style }}>
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="none" viewBox="0 0 100 100">
      <path d="M1 2 Q 50 0 99 2 Q 100 50 99 99 Q 50 100 1 99 Q 0 50 1 2 Z"
        fill="none" stroke={color} strokeWidth="0.35" />
    </svg>
    {children}
  </div>
);

// A nav bar mock — pass variant for dark/brut/warm look
const NavMock = ({ logo = "NOVIO·STUDIO", items = ["Travaux", "Services", "Studio", "Tarifs", "Contact"], cta = "Devis →", variant = "" }) => (
  <div className="row" style={{ alignItems: "center", justifyContent: "space-between", padding: "16px 28px", borderBottom: "1.5px solid currentColor" }}>
    <div className="handb" style={{ fontSize: 22, letterSpacing: -0.5 }}>{logo}</div>
    <div className="row mono" style={{ gap: 18, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>
      {items.map(i => <span key={i}>{i}</span>)}
    </div>
    <div className="mono" style={{ fontSize: 11, padding: "6px 12px", border: "1.5px solid currentColor", borderRadius: 999 }}>{cta}</div>
  </div>
);

// Marquee strip (static mock)
const Marquee = ({ items, sep = "✦", style }) => (
  <div className="mono uppercase tracked row" style={{ gap: 14, whiteSpace: "nowrap", fontSize: 12, padding: "10px 0", overflow: "hidden", ...style }}>
    {items.concat(items).map((t, i) => (
      <React.Fragment key={i}>
        <span>{t}</span><span style={{ opacity: 0.5 }}>{sep}</span>
      </React.Fragment>
    ))}
  </div>
);

// Footer mini
const FooterMock = ({ variant = "" }) => (
  <div style={{ borderTop: "1.5px solid currentColor", padding: "22px 28px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 18, fontSize: 11 }} className="mono uppercase tracked">
    <div className="handb" style={{ fontSize: 28, textTransform: "none", letterSpacing: -0.5 }}>NOVIO STUDIO ©26</div>
    <div className="col" style={{ gap: 6 }}>
      <div style={{ opacity: 0.5 }}>Studio</div>
      <div>Travaux</div><div>Services</div><div>Tarifs</div>
    </div>
    <div className="col" style={{ gap: 6 }}>
      <div style={{ opacity: 0.5 }}>Contact</div>
      <div>hello@novio.studio</div><div>Gatineau · QC</div>
    </div>
    <div className="col" style={{ gap: 6 }}>
      <div style={{ opacity: 0.5 }}>Social</div>
      <div>Instagram</div><div>Linkedin</div><div>Are.na</div>
    </div>
  </div>
);

// Small icon-y components
const Dot = ({ c = "#ff5b2e", s = 8 }) => <span style={{ display: "inline-block", width: s, height: s, borderRadius: "50%", background: c, verticalAlign: "middle" }}></span>;

const Stamp = ({ children = "DISPONIBLE · 2026" }) => <div className="stamp">{children}</div>;

// Used for service grid
const Service = ({ n, title, price, days, desc, accent }) => (
  <div className="box" style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8, position: "relative" }}>
    <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
      <div className="mono" style={{ fontSize: 11, opacity: 0.6 }}>{n}</div>
      <div className="mono" style={{ fontSize: 10, color: accent || "var(--accent)" }}>{days}</div>
    </div>
    <div className="handb" style={{ fontSize: 26, lineHeight: 0.95, letterSpacing: -0.5 }}>{title}</div>
    <div style={{ fontSize: 13, lineHeight: 1.3, color: "var(--ink-soft)" }}>{desc}</div>
    <div className="row" style={{ justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
      <div className="mono" style={{ fontSize: 12 }}>dès <b>{price}</b></div>
      <div className="mono" style={{ fontSize: 10, opacity: 0.6 }}>→ détails</div>
    </div>
  </div>
);

Object.assign(window, { Squig, Arrow, HandFrame, NavMock, Marquee, FooterMock, Dot, Stamp, Service });
