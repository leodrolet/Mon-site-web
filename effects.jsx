/* ============================================================
   effects.jsx — Hero WebGL-ish scene + reveal hooks + nav scroll
   ============================================================ */

/**
 * Scroll-triggered reveal hook
 * Adds `.in` class to the element when it enters viewport.
 */
const useReveal = (deps = []) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, deps);
  return ref;
};

/**
 * Wraps each word of `text` in a span with class `word`.
 * Applies stagger via inline transition-delay.
 */
const WordReveal = ({ text, className = "", initialDelay = 0, perWordDelay = 60, wordClass = "" }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const words = el.querySelectorAll(".word");
          words.forEach((w, i) => {
            setTimeout(() => w.classList.add("in"), initialDelay + i * perWordDelay);
          });
          io.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [text, initialDelay, perWordDelay]);

  // Parse text: tokens wrapped in *italic* / **accent**
  const parts = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\S+)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const t = m[1];
    if (t.startsWith("**")) parts.push({ kind: "accent", text: t.slice(2, -2) });
    else if (t.startsWith("*")) parts.push({ kind: "italic", text: t.slice(1, -1) });
    else parts.push({ kind: "plain", text: t });
  }
  return (
    <span ref={ref} className={className}>
      {parts.map((p, i) => (
        <React.Fragment key={i}>
          <span className={`word ${wordClass} ${p.kind === "italic" ? "italic" : ""} ${p.kind === "accent" ? "accent" : ""}`}>{p.text}</span>
          {i < parts.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
};

/**
 * HeroCanvas — abstract WebGL-feel scene done in 2D canvas:
 *   - Wireframe icosahedron, perspective projected
 *   - Particle field with depth
 *   - Mouse parallax + slow auto-rotation
 *   - Color follows --accent
 */
/**
 * HeroVideo — in-canvas "Topographic Drift" cinematic.
 *
 * Replaces the original ambient mp4. A field of horizontal contour
 * lines (each driven by stacked sines) flows from right to left and
 * slowly compresses toward the horizon as the user scrolls the pinned
 * hero. A second pass of accent-tinted highlights tracks lines that
 * cross the optical centre, giving the scene a soft glow without ever
 * leaving the dark editorial palette of the site.
 *
 * The `src` prop is preserved for API compatibility but ignored.
 * Same scroll-scrub contract as the previous version: progress is
 * derived from `.hero-scroll` so the surrounding layout doesn't change.
 */
const HeroVideo = ({ src }) => {
  const canvasRef = React.useRef(null);
  const scrubRef = React.useRef(0);
  const [scrubProgress, setScrubProgress] = React.useState(0);

  // Scroll-scrub — mirrors the previous HeroVideo contract so the
  // sticky .hero-scroll behavior keeps working identically.
  React.useEffect(() => {
    const compute = () => {
      const el = canvasRef.current;
      if (!el) return;
      const scroller = el.closest(".hero-scroll");
      if (!scroller) return;
      const rect = scroller.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrubDist = Math.max(1, scroller.offsetHeight - vh);
      const raw = (-rect.top) / scrubDist;
      const p = Math.max(0, Math.min(1, raw));
      scrubRef.current = p;
      setScrubProgress(p);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Canvas render loop.
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let w = 0, h = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Resolve the live --accent at draw time (it changes via tweaks).
    const getAccent = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent").trim();
      return v || "#c8a878";
    };
    const getBg = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      return isLight ? "#efece4" : "#0a0908";
    };
    const getInk = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      return isLight ? "#1a1817" : "#efece4";
    };

    let t = 0;
    let raf = 0;
    let scrubEased = 0;

    // Stacked-sine "noise" — cheap, deterministic, smooth.
    const wob = (x, k) =>
      Math.sin(x * 0.9 + k * 1.7) * 0.55 +
      Math.sin(x * 1.7 - k * 0.4 + 2.3) * 0.30 +
      Math.sin(x * 3.4 + k * 0.8 + 5.1) * 0.15;

    const render = () => {
      t += 1 / 60;
      scrubEased += (scrubRef.current - scrubEased) * 0.12;

      const ink = getInk();
      const bg = getBg();
      const accent = getAccent();

      // Background wash — a soft vertical gradient anchors the scene.
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Horizon settles slightly above mid-screen and rises with scroll.
      const horizon = h * (0.62 - scrubEased * 0.06);

      // Line field. Fewer lines high up, denser near the horizon —
      // gives a soft perspective without any 3D math.
      const N = 64;
      const camDrift = Math.sin(t * 0.07) * 14;
      const zoom = 1 + scrubEased * 0.18;

      for (let i = 0; i < N; i++) {
        const tt = i / (N - 1);                  // 0 (top) → 1 (bottom)
        const compressed = Math.pow(tt, 1.35);   // bunch lines toward the bottom
        const baseY = horizon + (h - horizon) * compressed;

        // Amplitude shrinks toward the horizon (depth cue).
        const ampScale = Math.pow(1 - tt, 1.1);
        const amp = (24 + 60 * ampScale) * zoom;

        // Sample rate scales with width.
        const step = Math.max(6, Math.round(w / 220));
        const phase = t * (0.18 + tt * 0.6) + i * 0.13;

        // Per-line opacity: thin at the horizon, present at the bottom.
        const a = 0.04 + 0.32 * Math.pow(tt, 0.65);

        ctx.beginPath();
        for (let x = -40; x <= w + 40; x += step) {
          const u = (x / w) * 3.4 - 1.7;
          const wob1 = wob(u + phase * 0.4, i * 0.19 + phase * 0.2);
          const wob2 = wob(u * 0.5 - phase * 0.13, i * 0.07 - 2.1);
          const y = baseY + amp * 0.6 * wob1 + amp * 0.4 * wob2 + camDrift * (0.4 + tt * 0.8);
          if (x === -40) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = ink;
        ctx.globalAlpha = a;
        ctx.lineWidth = 0.6 + tt * 0.8;
        ctx.stroke();

        // Accent highlight on a handful of lines near the optical centre.
        const accentZone = 1 - Math.min(1, Math.abs(tt - 0.55) * 4.0);
        if (accentZone > 0.4) {
          ctx.strokeStyle = accent;
          ctx.globalAlpha = 0.10 * (accentZone - 0.4) * (1 + scrubEased * 0.6);
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      // A faint "horizon" hairline for structure.
      ctx.strokeStyle = ink;
      ctx.globalAlpha = 0.12;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, horizon);
      ctx.lineTo(w, horizon);
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Drifting particles — quiet dust above the horizon.
      const P = 28;
      ctx.fillStyle = ink;
      for (let i = 0; i < P; i++) {
        const seed = i * 113.97;
        const x = ((Math.sin(seed) * 0.5 + 0.5) * w + t * (10 + (i % 5) * 3)) % (w + 60) - 30;
        const y = horizon - ((Math.sin(seed * 1.7) * 0.5 + 0.5) * horizon) * 0.9 - 12;
        const s = 0.6 + (i % 3) * 0.4;
        ctx.globalAlpha = 0.10 + 0.10 * ((i % 4) / 4);
        ctx.fillRect(x, y, s, s);
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Mild scale that follows scrub progress (no translate — hero is pinned).
  const scale = 1.02 + scrubProgress * 0.04;

  return (
    <div className="hero-bg">
      <canvas
        ref={canvasRef}
        className="webgl"
        style={{
          transform: `scale(${scale.toFixed(3)})`,
          transformOrigin: "50% 55%",
        }} />
      <div className="hero-bg-scrim"></div>
    </div>
  );
};

const HeroCanvas = ({ accent, shape = "sphere" }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let mouseX = 0, mouseY = 0, tMouseX = 0, tMouseY = 0;
    let scrollProg = 0; // 0..1 across first viewport
    let rafId = 0;
    let t = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      tMouseX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      tMouseY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    const onScroll = () => {
      // map scrollY against viewport for a rotation factor.
      // Hero is ~1 viewport tall; we want rotation to keep accumulating beyond it.
      scrollProg = window.scrollY / Math.max(1, window.innerHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // ---- Shape builder ----
    const buildShape = (kind) => {
      const E = []; // segments as [P, Q]
      let scl = 1; // shape-local scale multiplier (relative to base scale)

      const subEdge = (A, B, n, project = (p) => p) => {
        for (let i = 0; i < n; i++) {
          const t0 = i / n, t1 = (i + 1) / n;
          const p0 = [A[0]+(B[0]-A[0])*t0, A[1]+(B[1]-A[1])*t0, A[2]+(B[2]-A[2])*t0];
          const p1 = [A[0]+(B[0]-A[0])*t1, A[1]+(B[1]-A[1])*t1, A[2]+(B[2]-A[2])*t1];
          E.push([project(p0), project(p1)]);
        }
      };
      const norm = (p) => { const n = Math.hypot(...p) || 1; return [p[0]/n, p[1]/n, p[2]/n]; };

      if (kind === "sphere") {
        const phi = (1 + Math.sqrt(5)) / 2;
        const v = [
          [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
          [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
          [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
        ];
        const ed = [
          [0,1],[0,5],[0,7],[0,10],[0,11],[1,5],[1,7],[1,8],[1,9],
          [2,3],[2,4],[2,6],[2,10],[2,11],[3,4],[3,6],[3,8],[3,9],
          [4,5],[4,9],[4,11],[5,9],[5,11],[6,7],[6,8],[6,10],
          [7,8],[7,10],[8,9],[10,11],
        ];
        for (const [a, b] of ed) subEdge(v[a], v[b], 5, norm);
        scl = 1;
      }
      else if (kind === "torus") {
        const R = 0.78, r = 0.28;
        const U = 32, V = 12;
        const pt = (u, v) => {
          const cu = Math.cos(u), su = Math.sin(u), cv = Math.cos(v), sv = Math.sin(v);
          return [(R + r*cv)*cu, r*sv, (R + r*cv)*su];
        };
        for (let i = 0; i < U; i++) {
          for (let j = 0; j < V; j++) {
            const u1 = (i/U)*Math.PI*2, u2 = ((i+1)/U)*Math.PI*2;
            const v1 = (j/V)*Math.PI*2, v2 = ((j+1)/V)*Math.PI*2;
            E.push([pt(u1, v1), pt(u2, v1)]);
            E.push([pt(u1, v1), pt(u1, v2)]);
          }
        }
        scl = 0.95;
      }
      else if (kind === "octahedron") {
        const v = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
        const ed = [
          [0,2],[0,3],[0,4],[0,5],
          [1,2],[1,3],[1,4],[1,5],
          [2,4],[2,5],[3,4],[3,5],
        ];
        for (const [a, b] of ed) subEdge(v[a], v[b], 8);
        scl = 1.1;
      }
      else if (kind === "cube") {
        const v = [
          [-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],
          [-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1],
        ];
        const ed = [
          [0,1],[1,2],[2,3],[3,0],
          [4,5],[5,6],[6,7],[7,4],
          [0,4],[1,5],[2,6],[3,7],
        ];
        for (const [a, b] of ed) subEdge(v[a], v[b], 6);
        scl = 0.78;
      }
      else if (kind === "globe") {
        const LATS = 9, LONGS = 16, SEG = 24;
        // latitudes
        for (let i = 1; i < LATS; i++) {
          const phi = (i/LATS)*Math.PI - Math.PI/2;
          const cphi = Math.cos(phi), sphi = Math.sin(phi);
          let prev = [cphi, sphi, 0];
          for (let j = 1; j <= SEG; j++) {
            const lon = (j/SEG)*Math.PI*2;
            const p = [cphi*Math.cos(lon), sphi, cphi*Math.sin(lon)];
            E.push([prev, p]); prev = p;
          }
        }
        // meridians
        for (let j = 0; j < LONGS; j++) {
          const lon = (j/LONGS)*Math.PI*2;
          let prev = [Math.cos(-Math.PI/2)*Math.cos(lon), Math.sin(-Math.PI/2), Math.cos(-Math.PI/2)*Math.sin(lon)];
          for (let s = 1; s <= SEG; s++) {
            const phi = (s/SEG)*Math.PI - Math.PI/2;
            const cphi = Math.cos(phi), sphi = Math.sin(phi);
            const p = [cphi*Math.cos(lon), sphi, cphi*Math.sin(lon)];
            E.push([prev, p]); prev = p;
          }
        }
        scl = 1;
      }
      else if (kind === "knot") {
        // trefoil torus knot
        const N = 260;
        const pt = (t) => {
          const x = Math.sin(t) + 2 * Math.sin(2*t);
          const y = Math.cos(t) - 2 * Math.cos(2*t);
          const z = -Math.sin(3*t);
          return [x*0.28, y*0.28, z*0.34];
        };
        let prev = pt(0);
        for (let i = 1; i <= N; i++) {
          const p = pt((i/N) * Math.PI * 2);
          E.push([prev, p]); prev = p;
        }
        scl = 1.05;
      }
      return { E, scl };
    };

    const built = buildShape(shape);
    const subEdges = built.E;
    const shapeScale = built.scl;

    // Particles
    const PARTICLES = 90;
    const particles = Array.from({ length: PARTICLES }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: (Math.random() - 0.5) * 2,
      s: Math.random() * 0.6 + 0.2,
      r: Math.random() * 0.8 + 0.2,
    }));

    // Get accent color from CSS
    const getAccent = () => {
      return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#ff5b2e";
    };

    const draw = () => {
      const A = getAccent();
      const speed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--anim-speed")) || 1;
      ctx.clearRect(0, 0, w, h);

      // ease mouse
      mouseX += (tMouseX - mouseX) * 0.05;
      mouseY += (tMouseY - mouseY) * 0.05;

      const cx = w / 2, cy = h / 2;
      const scale = Math.min(w, h) * 0.32 * shapeScale;
      t += 0.004 * speed;

      // ----- Particles -----
      ctx.globalCompositeOperation = "source-over";
      for (const p of particles) {
        const rx = p.x;
        const ry = p.y;
        const rz = p.z;
        // gentle rotation
        const ang = t * 0.4 + p.s * 4;
        const px = rx * Math.cos(ang) - rz * Math.sin(ang);
        const pz = rx * Math.sin(ang) + rz * Math.cos(ang);
        const py = ry;
        // mouse parallax depth
        const depth = pz + 2.4 + mouseY * 0.2;
        const persp = 3 / depth;
        const sx = cx + (px + mouseX * 0.4) * scale * persp * 1.6;
        const sy = cy + (py + mouseY * 0.25) * scale * persp * 1.6;
        const alpha = Math.min(0.6, persp * 0.35);
        const size = p.r * persp * 1.4;
        ctx.fillStyle = `rgba(239,236,228,${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // ----- Wireframe shape -----
      // Rotation matrices (Y + X). Scroll is the primary driver.
      // Time keeps a slow ambient drift even when not scrolling.
      const scrollSpin = scrollProg * Math.PI * 1.4;
      const ry = t * 0.35 + scrollSpin + mouseX * 0.5;
      const rx = t * 0.18 + scrollSpin * 0.35 + mouseY * 0.35;
      const cosY = Math.cos(ry), sinY = Math.sin(ry);
      const cosX = Math.cos(rx), sinX = Math.sin(rx);
      const project = ([x, y, z]) => {
        // rotate Y
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        // rotate X
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const depth = z2 + 3;
        const persp = 3 / depth;
        return {
          sx: cx + x1 * scale * persp,
          sy: cy + y2 * scale * persp,
          d: depth,
        };
      };

      // glow halo
      const grad = ctx.createRadialGradient(cx, cy, scale * 0.2, cx, cy, scale * 1.8);
      grad.addColorStop(0, hexA(A, 0.15));
      grad.addColorStop(1, hexA(A, 0));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // edges
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 0; i < subEdges.length; i++) {
        const [P, Q] = subEdges[i];
        const a = project(P), b = project(Q);
        const avgD = (a.d + b.d) / 2;
        const fade = Math.max(0, 1 - (avgD - 1.8) / 2.4);
        ctx.strokeStyle = hexA(A, fade * 0.85);
        ctx.lineWidth = 1.1 + fade * 0.6;
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.stroke();

        // small node at endpoints for that wireframe feel (every Nth)
        if (i % 6 === 0) {
          ctx.fillStyle = hexA(A, fade);
          ctx.beginPath();
          ctx.arc(a.sx, a.sy, 1.5 + fade * 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // crosshair brackets
      const bracketColor = "rgba(239,236,228,0.45)";
      ctx.strokeStyle = bracketColor;
      ctx.lineWidth = 1;
      const bs = 14, off = scale * 1.05;
      [[cx-off, cy-off], [cx+off, cy-off], [cx-off, cy+off], [cx+off, cy+off]].forEach(([x, y], i) => {
        ctx.beginPath();
        const dx = i % 2 === 0 ? 1 : -1;
        const dy = i < 2 ? 1 : -1;
        ctx.moveTo(x + dx * bs, y); ctx.lineTo(x, y); ctx.lineTo(x, y + dy * bs);
        ctx.stroke();
      });

      rafId = requestAnimationFrame(draw);
    };

    // helper: hex/rgb to rgba string
    function hexA(col, a) {
      col = col.trim();
      if (col.startsWith("#")) {
        const c = col.length === 4
          ? col.slice(1).split("").map(x => parseInt(x + x, 16))
          : [parseInt(col.slice(1,3), 16), parseInt(col.slice(3,5), 16), parseInt(col.slice(5,7), 16)];
        return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
      }
      if (col.startsWith("rgb")) {
        // already rgb / rgba — splice in alpha
        const nums = col.match(/[\d.]+/g).slice(0,3);
        return `rgba(${nums.join(",")},${a})`;
      }
      return `rgba(255,91,46,${a})`;
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [accent, shape]);

  return <canvas ref={ref} className="webgl" />;
};

/** Returns scrolled state for nav */
const useScrolled = (threshold = 40) => {
  const [s, setS] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setS(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return s;
};

/** Live clock for nav */
const useClock = () => {
  const [t, setT] = React.useState("");
  React.useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const f = (n) => String(n).padStart(2, "0");
      return `${f(d.getHours())}:${f(d.getMinutes())} EST`;
    };
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return t;
};

Object.assign(window, { useReveal, WordReveal, HeroCanvas, HeroVideo, useScrolled, useClock });
