"use client";
// components/ShlokPortfolio.jsx
// Place your video at: public/hero.mp4
import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════ */
const TYPEWRITER_TEXTS = [
  "Pursuing Diploma in Mechanical Engineering",
  "Mastering AutoCAD & SolidWorks",
  "Learning Python & Industrial Design",
  "Future Focus: Web Dev & AI-driven Engineering",
];

const NAV_LINKS = [
  { href: "#hero",     label: "HOME" },
  { href: "#about",    label: "ABOUT" },
  { href: "#timeline", label: "JOURNEY" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact",  label: "CONTACT" },
];

const TIMELINE_DATA = [
  {
    year: "2022",
    title: "12th Grade — Science Stream",
    school: "Delhi Board of Secondary Education",
    desc: "Completed senior secondary education with focus on Physics, Chemistry & Mathematics. Developed strong analytical foundations.",
    accent: "#64b5f6",
    icon: "◆",
  },
  {
    year: "2023",
    title: "Class Representative",
    school: "DSEU Okhla-I",
    desc: "Elected as Class Representative in the first semester — managing communication between students and faculty, organizing events.",
    accent: "#ffd700",
    icon: "★",
  },
  {
    year: "2024",
    title: "AutoCAD Certification",
    school: "Autodesk — In Progress",
    desc: "Actively learning 2D drafting and 3D modelling for mechanical components with AutoCAD and SolidWorks.",
    accent: "#ff8c42",
    icon: "⚙",
  },
  {
    year: "2024",
    title: "Started Learning Python",
    school: "Self-directed",
    desc: "Diving into Python programming for automation of engineering calculations and industrial process scripting.",
    accent: "#a8ffb0",
    icon: "⟩_",
  },
  {
    year: "2025",
    title: "Web & AI Exploration",
    school: "Ongoing",
    desc: "Exploring HTML/CSS/React and the intersection of AI-driven tools with mechanical engineering workflows.",
    accent: "#ff8c42",
    icon: "◈",
  },
];

const PROJECTS_DATA = [
  {
    code: "PRJ-001",
    title: "Gear Assembly Study",
    sub: "AutoCAD · Technical Drawing",
    desc: "Detailed 2D drafting of spur gear assemblies with precise tolerancing, section views, and dimensioning to industry standards.",
    tag: "CAD",
    accent: "#ff8c42",
    year: "2024",
  },
  {
    code: "PRJ-002",
    title: "3D Component Model",
    sub: "SolidWorks · Rendering",
    desc: "Parametric 3D modelling of a bracket assembly with material assignment, motion study, and photorealistic rendering output.",
    tag: "3D Modelling",
    accent: "#64b5f6",
    year: "2024",
  },
  {
    code: "PRJ-003",
    title: "Calc Automator",
    sub: "Python · CLI",
    desc: "Command-line script automating repetitive beam stress and thermal expansion calculations — reducing manual computation time by ~70%.",
    tag: "Python",
    accent: "#a8ffb0",
    year: "2024",
  },
  {
    code: "PRJ-004",
    title: "Industrial Design Concept",
    sub: "SolidWorks · Form Study",
    desc: "Ergonomic hand-tool concept exploring form language, grip geometry, and material selection for manufacturing feasibility.",
    tag: "Design",
    accent: "#ffd700",
    year: "2025",
  },
  {
    code: "PRJ-005",
    title: "Engineering Portfolio",
    sub: "Next.js · React · Three.js",
    desc: "This very portfolio — a cinematic web experience bridging engineering identity with modern front-end development.",
    tag: "Web Dev",
    accent: "#d4aaff",
    year: "2025",
  },
  {
    code: "PRJ-006",
    title: "Thermal Study Report",
    sub: "Research · Documentation",
    desc: "Academic research report on heat transfer in automotive braking systems — data collection, analysis, and visualisation.",
    tag: "Research",
    accent: "#ff6b6b",
    year: "2025",
  },
];

const SKILLS_DATA = [
  { cat: "Engineering", icon: "⚙", color: "#ff8c42", items: [
    { name: "AutoCAD", level: 75, note: "2D Drafting" },
    { name: "SolidWorks", level: 65, note: "3D Modelling" },
  ]},
  { cat: "Computing", icon: "⟩_", color: "#a8ffb0", items: [
    { name: "Python", level: 50, note: "In Progress" },
    { name: "HTML / CSS", level: 42, note: "Learning" },
  ]},
  { cat: "Soft Skills", icon: "◈", color: "#64b5f6", items: [
    { name: "Communication", level: 90, note: "Active" },
    { name: "Leadership", level: 85, note: "Class Rep" },
  ]},
];

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════════ */
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    loop();

    const onDown = () => {
      if (dotRef.current) dotRef.current.style.transform += " scale(0.7)";
      if (ringRef.current) { ringRef.current.style.width = "52px"; ringRef.current.style.height = "52px"; }
    };
    const onUp = () => {
      if (ringRef.current) { ringRef.current.style.width = "36px"; ringRef.current.style.height = "36px"; }
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   LOADING SCREEN
═══════════════════════════════════════════════════════════ */
function LoadingScreen({ onDone }) {
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 8 + 2;
      if (v >= 100) {
        v = 100;
        clearInterval(id);
        setTimeout(() => {
          setHidden(true);
          setTimeout(onDone, 600);
        }, 400);
      }
      setPct(Math.min(Math.floor(v), 100));
    }, 60);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div className={`loading-overlay${hidden ? " hidden" : ""}`}>
      {/* Rotating ring */}
      <div style={{ position: "relative", width: "120px", height: "120px", marginBottom: "48px" }}>
        <div style={{
          position: "absolute", inset: 0,
          border: "1px solid rgba(255,140,66,0.15)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", inset: "8px",
          border: "1px solid rgba(100,181,246,0.15)",
          borderRadius: "50%",
          animation: "rotateSlowReverse 4s linear infinite",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          border: "2px solid transparent",
          borderTopColor: "#ff8c42",
          borderRadius: "50%",
          animation: "rotateSlow 1.2s linear infinite",
        }} />
        <div style={{
          position: "absolute", inset: "8px",
          border: "1px solid transparent",
          borderBottomColor: "#64b5f6",
          borderRadius: "50%",
          animation: "rotateSlow 2s linear infinite reverse",
        }} />
        {/* Center pct */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Space Mono', monospace",
          fontSize: "18px", fontWeight: "700", color: "#fff",
        }}>{pct}</div>
      </div>

      {/* Name */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(28px, 5vw, 44px)",
        fontWeight: "900", color: "#fff",
        letterSpacing: "-1px",
        marginBottom: "8px",
      }}>
        SHLOK <span style={{ color: "#ff8c42" }}>SINGH</span>
      </div>
      <div style={{
        fontSize: "10px", letterSpacing: "5px",
        color: "rgba(255,255,255,0.3)",
        fontFamily: "'Space Mono', monospace",
        marginBottom: "40px",
      }}>
        MECHANICAL ENGINEERING · DSEU
      </div>

      {/* Progress bar */}
      <div style={{
        width: "240px", height: "1px",
        background: "rgba(255,255,255,0.07)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0,
          height: "100%", width: `${pct}%`,
          background: "linear-gradient(90deg, #ff8c42, #ffd700)",
          boxShadow: "0 0 12px rgba(255,140,66,0.6)",
          transition: "width 0.1s ease",
        }} />
      </div>
      <div style={{
        fontSize: "9px", letterSpacing: "3px",
        color: "rgba(255,255,255,0.2)",
        fontFamily: "'Space Mono', monospace",
        marginTop: "12px",
      }}>
        INITIALIZING PORTFOLIO...
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      let cur = "hero";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: scrolled ? "14px 5vw" : "24px 5vw",
      background: scrolled
        ? "rgba(2,5,10,0.92)"
        : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      transition: "all 0.4s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: "none" }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "20px", fontWeight: "900", color: "#fff",
          letterSpacing: "-0.5px",
        }}>
          SS<span style={{ color: "#ff8c42" }}>.</span>
        </div>
      </a>

      {/* Desktop nav */}
      <div style={{
        display: "flex", gap: "36px", alignItems: "center",
      }} className="desktop-nav">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`nav-link${active === href.slice(1) ? " active" : ""}`}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            padding: "9px 22px",
            border: "1px solid #ff8c42",
            color: "#ff8c42",
            fontSize: "9px", letterSpacing: "3px",
            fontFamily: "'Space Mono', monospace",
            textDecoration: "none",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#ff8c42"; e.currentTarget.style.color = "#02050a"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ff8c42"; }}
        >
          HIRE ME
        </a>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        style={{
          display: "none", background: "none", border: "none",
          cursor: "pointer", padding: "4px",
          flexDirection: "column", gap: "5px",
        }}
        className="burger-btn"
      >
        {[0,1,2].map(i => (
          <div key={i} style={{
            width: "24px", height: "1px",
            background: "#fff",
            transition: "all 0.3s ease",
            transform: menuOpen
              ? i === 0 ? "rotate(45deg) translateY(6px)"
              : i === 2 ? "rotate(-45deg) translateY(-6px)"
              : "scaleX(0)"
              : "none",
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, top: "60px",
          background: "rgba(2,5,10,0.97)",
          backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "40px", zIndex: 999,
        }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(28px, 8vw, 48px)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700",
                color: active === href.slice(1) ? "#ff8c42" : "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn  { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   PARTICLE CANVAS
═══════════════════════════════════════════════════════════ */
function ParticleCanvas({ mousePos }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const COLORS = ["#ff8c42", "#ffd700", "#64b5f6", "#a8d8ff"];
    const pts = Array.from({ length: 110 }, () => ({
      bx: Math.random() * W, by: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r:  Math.random() * 2 + 0.4,
      a:  Math.random() * 0.55 + 0.15,
      ph: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.007 + 0.003,
      col: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const hexToRgb = (hex) => {
      const b = parseInt(hex.slice(1), 16);
      return [(b >> 16) & 255, (b >> 8) & 255, b & 255];
    };

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.016;
      const mx = (mousePos.current?.x ?? W / 2) / W;
      const my = (mousePos.current?.y ?? H / 2) / H;

      pts.forEach((p, i) => {
        const x = p.bx + Math.sin(t * p.sp * 60 + p.ph) * 28 + (mx - 0.5) * 38;
        const y = p.by + Math.cos(t * p.sp * 50 + p.ph) * 18 + (my - 0.5) * 22;
        p.bx += p.vx; p.by += p.vy;
        if (p.bx < 0 || p.bx > W) p.vx *= -1;
        if (p.by < 0 || p.by > H) p.vy *= -1;

        const [r, g, b] = hexToRgb(p.col);
        const alpha = p.a + Math.sin(t * 1.5 + p.ph) * 0.12;

        // Connections
        pts.slice(i + 1, i + 7).forEach((q) => {
          const qx = q.bx + Math.sin(t * q.sp * 60 + q.ph) * 28 + (mx - 0.5) * 38;
          const qy = q.by + Math.cos(t * q.sp * 50 + q.ph) * 18 + (my - 0.5) * 22;
          const d = Math.hypot(x - qx, y - qy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(80,160,255,${0.1 * (1 - d / 120)})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(x, y); ctx.lineTo(qx, qy);
            ctx.stroke();
          }
        });

        // Glow
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, p.r * 5);
        g2.addColorStop(0, `rgba(${r},${g},${b},0.1)`);
        g2.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath(); ctx.arc(x, y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = g2; ctx.fill();

        // Dot
        ctx.beginPath(); ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`; ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", inset: 0, width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 3,
    }} />
  );
}

/* ═══════════════════════════════════════════════════════════
   TYPEWRITER
═══════════════════════════════════════════════════════════ */
function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDel(true); }, 2400);
      return () => clearTimeout(t);
    }
    const target = TYPEWRITER_TEXTS[idx];
    const speed = del ? 25 : 50;
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < target.length) setText(target.slice(0, text.length + 1));
        else setPaused(true);
      } else {
        if (text.length > 0) setText(text.slice(0, -1));
        else { setDel(false); setIdx(i => (i + 1) % TYPEWRITER_TEXTS.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, paused, idx]);

  return (
    <span>
      <span style={{ color: "#64b5f6" }}>{text}</span>
      <span style={{
        display: "inline-block", width: "2px", height: "0.9em",
        background: "#ff8c42", marginLeft: "3px", verticalAlign: "middle",
        animation: "blink 1s step-end infinite",
      }} />
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   BLUEPRINT GRID
═══════════════════════════════════════════════════════════ */
function BlueprintGrid() {
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
      backgroundImage: `
        linear-gradient(rgba(40,100,180,0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(40,100,180,0.045) 1px, transparent 1px),
        linear-gradient(rgba(40,100,180,0.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(40,100,180,0.018) 1px, transparent 1px)
      `,
      backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
    }} />
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════════ */
function HeroSection({ entered, mousePos }) {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted]   = useState(true);
  const [loaded, setLoaded]  = useState(false);
  const vidRef  = useRef(null);
  const bgRef   = useRef(null);

  const togglePlay = () => {
    if (!vidRef.current) return;
    playing ? vidRef.current.pause() : vidRef.current.play();
    bgRef.current && (playing ? bgRef.current.pause() : bgRef.current.play());
    setPlaying(p => !p);
  };
  const toggleMute = () => {
    if (!vidRef.current) return;
    vidRef.current.muted = !muted;
    setMuted(m => !m);
  };

  return (
    <section id="hero" style={{
      position: "relative", height: "100vh",
      overflow: "hidden", display: "flex",
      alignItems: "center",
    }}>
      {/* Blurred ambient video */}
      <video ref={bgRef} autoPlay muted loop playsInline style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover",
        filter: "blur(70px) brightness(0.25) saturate(1.8)",
        transform: "scale(1.15)",
        zIndex: 0,
      }}>
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Main video — right side */}
      <video ref={vidRef} autoPlay muted={muted} loop playsInline
        onLoadedData={() => setLoaded(true)}
        style={{
          position: "absolute", right: 0, top: 0,
          height: "100%", width: "55%",
          objectFit: "cover", objectPosition: "center top",
          zIndex: 1,
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradients */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background: `
          linear-gradient(to right, #02050a 32%, rgba(2,5,10,0.75) 52%, rgba(2,5,10,0.1) 75%, transparent 100%),
          linear-gradient(to top, #02050a 0%, rgba(2,5,10,0.6) 15%, transparent 35%),
          linear-gradient(to bottom, rgba(2,5,10,0.85) 0%, transparent 18%)
        `,
      }} />

      <BlueprintGrid />
      <ParticleCanvas mousePos={mousePos} />

      {/* Scanline */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none",
        overflow: "hidden", opacity: 0.025,
      }}>
        <div style={{
          position: "absolute", left: 0, right: 0, height: "3px",
          background: "rgba(255,255,255,1)",
          animation: "scanline 9s linear infinite",
        }} />
      </div>

      {/* Corner brackets */}
      {[
        { top: 28, left: 28, borderTop: true, borderLeft: true },
        { top: 28, right: 28, borderTop: true, borderRight: true },
        { bottom: 28, left: 28, borderBottom: true, borderLeft: true },
        { bottom: 28, right: 28, borderBottom: true, borderRight: true },
      ].map((c, i) => (
        <div key={i} style={{
          position: "absolute",
          top: c.top, right: c.right, bottom: c.bottom, left: c.left,
          width: "44px", height: "44px",
          borderTop: c.borderTop ? "1px solid rgba(255,140,66,0.35)" : "none",
          borderBottom: c.borderBottom ? "1px solid rgba(255,140,66,0.35)" : "none",
          borderLeft: c.borderLeft ? "1px solid rgba(255,140,66,0.35)" : "none",
          borderRight: c.borderRight ? "1px solid rgba(255,140,66,0.35)" : "none",
          zIndex: 10,
        }} />
      ))}

      {/* ── Content ── */}
      <div style={{
        position: "relative", zIndex: 10,
        padding: "0 6vw", maxWidth: "750px",
      }}>
        {/* Tagline */}
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          marginBottom: "28px",
          opacity: entered ? 1 : 0,
          transform: entered ? "none" : "translateY(18px)",
          transition: "all 0.8s ease 0.1s",
        }}>
          <div style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: "#ff8c42",
            animation: "glow 2.5s ease-in-out infinite",
          }} />
          <span style={{
            fontSize: "10px", letterSpacing: "5px",
            color: "rgba(255,255,255,0.45)",
            fontFamily: "'Space Mono', monospace",
          }}>
            MECHANICAL ENGINEERING STUDENT · DSEU OKHLA-I
          </span>
        </div>

        {/* Name stacked */}
        <div style={{ lineHeight: 0.88, marginBottom: "36px" }}>
          {["SHLOK", "SINGH"].map((word, i) => (
            <div key={word} style={{
              overflow: "hidden",
              opacity: entered ? 1 : 0,
              transform: entered ? "none" : "translateY(70px)",
              transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${0.25 + i * 0.15}s`,
            }}>
              <h1 style={{
                fontSize: "clamp(76px, 13vw, 158px)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "900",
                margin: 0,
                letterSpacing: "-3px",
                color: i === 0 ? "#ffffff" : "transparent",
                WebkitTextStroke: i === 1 ? "1.5px rgba(255,255,255,0.32)" : "none",
                lineHeight: 1,
              }}>
                {word}
              </h1>
            </div>
          ))}
        </div>

        {/* Typewriter */}
        <div style={{
          fontSize: "clamp(12px, 1.4vw, 15px)",
          fontFamily: "'Space Mono', monospace",
          marginBottom: "52px", minHeight: "22px",
          opacity: entered ? 1 : 0,
          transform: entered ? "none" : "translateY(18px)",
          transition: "all 0.8s ease 0.6s",
        }}>
          <span style={{ color: "rgba(255,255,255,0.28)" }}>→ </span>
          <Typewriter />
        </div>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: "14px", flexWrap: "wrap",
          opacity: entered ? 1 : 0,
          transform: entered ? "none" : "translateY(18px)",
          transition: "all 0.8s ease 0.8s",
        }}>
          <a href="#projects" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "15px 38px",
              background: "transparent",
              border: "1px solid #ff8c42",
              color: "#ff8c42",
              fontSize: "10px", letterSpacing: "4px",
              fontFamily: "'Space Mono', monospace",
              cursor: "pointer",
              transition: "all 0.28s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ff8c42"; e.currentTarget.style.color = "#02050a"; e.currentTarget.style.boxShadow = "0 0 28px rgba(255,140,66,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ff8c42"; e.currentTarget.style.boxShadow = "none"; }}
            >
              VIEW ACADEMIC PROJECTS
            </button>
          </a>
          <a href="#about" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "15px 30px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
              fontSize: "10px", letterSpacing: "4px",
              fontFamily: "'Space Mono', monospace",
              cursor: "pointer",
              transition: "all 0.28s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
            >
              WHO I AM
            </button>
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "44px", marginTop: "68px",
          flexWrap: "wrap",
          opacity: entered ? 1 : 0,
          transition: "opacity 1s ease 1.1s",
        }}>
          {[
            ["DSEU", "University"],
            ["2024", "Enrolled"],
            ["2 Yr", "Program"],
            ["CR", "Class Rep"],
          ].map(([val, lbl]) => (
            <div key={val} style={{ animation: "counterUp 0.6s ease both" }}>
              <div style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700", color: "#fff",
              }}>{val}</div>
              <div style={{
                fontSize: "9px", color: "rgba(255,255,255,0.28)",
                letterSpacing: "2px", fontFamily: "'Space Mono', monospace",
                marginTop: "3px",
              }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Video controls */}
      <div style={{
        position: "absolute", bottom: "32px", right: "32px",
        zIndex: 20, display: "flex", gap: "10px",
        opacity: entered ? 1 : 0, transition: "opacity 1s ease 1.3s",
      }}>
        {[
          { icon: playing ? "⏸" : "▶", fn: togglePlay },
          { icon: muted   ? "🔇" : "🔊", fn: toggleMute },
        ].map(({ icon, fn }, i) => (
          <button key={i} onClick={fn} className="glass-btn" style={{
            width: "44px", height: "44px",
            fontSize: "15px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>{icon}</button>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10, display: "flex", flexDirection: "column",
        alignItems: "center", gap: "8px",
        opacity: entered ? 0.4 : 0, transition: "opacity 1s ease 1.6s",
        animation: entered ? "floatY 3s ease-in-out infinite 2s" : "none",
      }}>
        <span style={{
          fontSize: "8px", letterSpacing: "4px",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'Space Mono', monospace",
        }}>SCROLL</span>
        <div style={{
          width: "1px", height: "44px",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
        }} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT & SKILLS SECTION
═══════════════════════════════════════════════════════════ */
function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{
      minHeight: "100vh", background: "#030711",
      padding: "120px 6vw", position: "relative", overflow: "hidden",
    }}>
      {/* Ambient blobs */}
      <div style={{ position: "absolute", top: "15%", left: "5%", width: "45vw", height: "45vw", background: "radial-gradient(circle, rgba(255,140,66,0.035) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "0%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(40,100,220,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
      <BlueprintGrid />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          marginBottom: "90px",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.9s ease",
        }}>
          <div className="section-label" style={{ color: "#ff8c42" }}>IDENTITY PROFILE</div>
          <h2 style={{
            fontSize: "clamp(52px, 9vw, 108px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "900", lineHeight: 0.88,
            letterSpacing: "-3px",
          }}>
            WHO<br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>I AM</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "70px", alignItems: "start" }}>
          {/* Bio */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-30px)",
            transition: "all 0.9s ease 0.15s",
          }}>
            <p style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 2, fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              borderLeft: "2px solid #ff8c42", paddingLeft: "24px",
              marginBottom: "44px",
            }}>
              12th Grade graduate from Delhi, currently pursuing a Diploma in Mechanical Engineering
              at{" "}
              <span style={{ color: "#64b5f6", fontStyle: "normal" }}>
                Delhi Skill and Entrepreneurship University (DSEU)
              </span>
              . Passionate about combining core engineering principles with digital design and automation — building the bridge between steel and silicon.
            </p>

            {[
              ["📍", "DSEU Okhla-I Campus, New Delhi"],
              ["🎓", "Diploma in Mechanical Engineering"],
              ["🏅", "Class Representative — Student Leader"],
              ["⚙",  "AutoCAD · SolidWorks · Python"],
              ["🎯", "Engineering × Digital Design × AI"],
            ].map(([icon, text]) => (
              <div key={text} style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "13px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                fontSize: "12px", color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.5px", fontFamily: "'Space Mono', monospace",
              }}>
                <span style={{ fontSize: "15px", minWidth: "20px" }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>

          {/* Skills */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(30px)",
            transition: "all 0.9s ease 0.3s",
          }}>
            {SKILLS_DATA.map(({ cat, icon, color, items }) => (
              <div key={cat} style={{ marginBottom: "40px" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  marginBottom: "20px",
                }}>
                  <span style={{ fontSize: "18px", color }}>{icon}</span>
                  <span style={{
                    fontSize: "9px", letterSpacing: "5px", color,
                    fontFamily: "'Space Mono', monospace", fontWeight: "700",
                  }}>{cat.toUpperCase()}</span>
                </div>
                {items.map(({ name, level, note }) => (
                  <div key={name} style={{ marginBottom: "18px" }}>
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      marginBottom: "8px",
                    }}>
                      <div>
                        <span style={{
                          fontSize: "12px", color: "rgba(255,255,255,0.75)",
                          fontFamily: "'Space Mono', monospace", letterSpacing: "1px",
                        }}>{name}</span>
                        <span style={{
                          fontSize: "9px", color: "rgba(255,255,255,0.28)",
                          fontFamily: "'Space Mono', monospace", marginLeft: "10px",
                        }}>{note}</span>
                      </div>
                      <span style={{ fontSize: "11px", color, fontFamily: "'Space Mono', monospace" }}>
                        {level}%
                      </span>
                    </div>
                    <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px" }}>
                      <div style={{
                        height: "100%", borderRadius: "1px",
                        background: `linear-gradient(90deg, ${color}, ${color}99)`,
                        boxShadow: `0 0 8px ${color}66`,
                        width: visible ? `${level}%` : "0%",
                        transition: `width 1.4s cubic-bezier(0.4,0,0.2,1) ${0.5 + items.indexOf(items.find(x=>x.name===name)) * 0.15}s`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   TIMELINE SECTION
═══════════════════════════════════════════════════════════ */
function TimelineSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="timeline" ref={ref} style={{
      minHeight: "100vh", background: "#02050a",
      padding: "120px 6vw", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "30%", right: "10%", width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(100,181,246,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <BlueprintGrid />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          marginBottom: "90px",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.9s ease",
        }}>
          <div className="section-label" style={{ color: "#64b5f6" }}>CHRONOLOGICAL ORDER</div>
          <h2 style={{
            fontSize: "clamp(52px, 9vw, 108px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "900", lineHeight: 0.88, letterSpacing: "-3px",
          }}>
            MY<br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>JOURNEY</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "20px", top: "10px", bottom: "10px", width: "1px",
            background: "linear-gradient(to bottom, #ff8c42, #64b5f6, rgba(100,181,246,0.1))",
            opacity: visible ? 0.4 : 0, transition: "opacity 1s ease 0.5s",
          }} />

          {TIMELINE_DATA.map((item, i) => (
            <div key={i} style={{
              display: "flex", gap: "44px",
              marginBottom: "56px", alignItems: "flex-start",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(-24px)",
              transition: `all 0.8s ease ${0.15 + i * 0.12}s`,
            }}>
              {/* Dot */}
              <div style={{ position: "relative", flexShrink: 0, width: "40px", display: "flex", justifyContent: "center", paddingTop: "4px" }}>
                <div style={{
                  width: "14px", height: "14px", borderRadius: "50%",
                  background: item.accent,
                  boxShadow: `0 0 16px ${item.accent}66`,
                  zIndex: 1,
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", inset: "-5px",
                    border: `1px solid ${item.accent}44`,
                    borderRadius: "50%",
                  }} />
                </div>
              </div>

              {/* Content */}
              <div style={{
                flex: 1,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "28px 32px",
                position: "relative",
                borderLeft: `2px solid ${item.accent}44`,
                transition: "border-color 0.3s ease",
              }}
                onMouseEnter={e => e.currentTarget.style.borderLeftColor = item.accent}
                onMouseLeave={e => e.currentTarget.style.borderLeftColor = `${item.accent}44`}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{
                    fontSize: "9px", letterSpacing: "4px",
                    color: item.accent, fontFamily: "'Space Mono', monospace",
                  }}>{item.year}</span>
                  <span style={{
                    fontSize: "16px", color: item.accent, opacity: 0.6,
                  }}>{item.icon}</span>
                </div>
                <h3 style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "700", color: "#fff",
                  marginBottom: "6px",
                }}>{item.title}</h3>
                <div style={{
                  fontSize: "10px", color: "rgba(255,255,255,0.3)",
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "1.5px", marginBottom: "14px",
                }}>{item.school}</div>
                <p style={{
                  fontSize: "13px", color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8, margin: 0,
                }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECTS SECTION
═══════════════════════════════════════════════════════════ */
function ProjectsSection() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{
      minHeight: "100vh", background: "#030711",
      padding: "120px 6vw", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", bottom: "20%", left: "5%", width: "35vw", height: "35vw", background: "radial-gradient(circle, rgba(255,140,66,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <BlueprintGrid />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          marginBottom: "90px",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.9s ease",
        }}>
          <div className="section-label" style={{ color: "#ff8c42" }}>ACADEMIC OUTPUT</div>
          <h2 style={{
            fontSize: "clamp(52px, 9vw, 108px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "900", lineHeight: 0.88, letterSpacing: "-3px",
          }}>
            ACADEMIC<br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>PROJECTS</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.04)",
        }}>
          {PROJECTS_DATA.map((p, i) => (
            <div key={p.code}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? `rgba(${hexToRgbStr(p.accent)},0.05)` : "#030711",
                padding: "40px 32px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.35s ease, transform 0.35s ease",
                transform: hovered === i ? "translateY(-3px)" : "none",
                opacity: visible ? 1 : 0,
                animation: visible ? `fadeUp 0.6s ease ${0.1 + i * 0.08}s both` : "none",
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: p.accent, opacity: hovered === i ? 0.9 : 0.4,
                transition: "opacity 0.3s ease",
              }} />

              {/* Code */}
              <div style={{
                fontSize: "9px", color: "rgba(255,255,255,0.2)",
                fontFamily: "'Space Mono', monospace", letterSpacing: "3px", marginBottom: "20px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span>{p.code}</span>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>{p.year}</span>
              </div>

              {/* Tag */}
              <div style={{
                display: "inline-block", padding: "3px 12px",
                border: `1px solid ${p.accent}44`,
                color: p.accent, fontSize: "9px",
                fontFamily: "'Space Mono', monospace", letterSpacing: "2.5px",
                marginBottom: "18px",
              }}>{p.tag}</div>

              <h3 style={{
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700", color: "#fff",
                marginBottom: "10px", lineHeight: 1.2,
              }}>{p.title}</h3>

              <p style={{
                fontSize: "10px", color: p.accent,
                fontFamily: "'Space Mono', monospace",
                letterSpacing: "1.5px", marginBottom: "16px",
              }}>{p.sub}</p>

              <p style={{
                fontSize: "13px", color: "rgba(255,255,255,0.48)",
                lineHeight: 1.8, margin: "0 0 32px",
              }}>{p.desc}</p>

              <div style={{
                fontSize: "9px", color: hovered === i ? p.accent : "rgba(255,255,255,0.2)",
                fontFamily: "'Space Mono', monospace", letterSpacing: "3px",
                display: "flex", alignItems: "center", gap: "8px",
                transition: "color 0.3s ease",
              }}>
                VIEW DETAILS <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT SECTION
═══════════════════════════════════════════════════════════ */
function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handle = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "2px",
    padding: "16px 18px",
    color: "#fff",
    fontSize: "13px",
    fontFamily: "'Space Mono', monospace",
    outline: "none",
    transition: "border-color 0.25s ease, background 0.25s ease",
    resize: "none",
  };

  return (
    <section id="contact" ref={ref} style={{
      minHeight: "100vh", background: "#02050a",
      padding: "120px 6vw", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "20%", right: "15%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(100,181,246,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "5%", width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(255,140,66,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <BlueprintGrid />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          marginBottom: "80px",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.9s ease",
        }}>
          <div className="section-label" style={{ color: "#64b5f6" }}>GET IN TOUCH</div>
          <h2 style={{
            fontSize: "clamp(52px, 9vw, 108px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "900", lineHeight: 0.88, letterSpacing: "-3px",
          }}>
            LET'S<br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>CONNECT</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "80px", alignItems: "start" }}>
          {/* Left — Info */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-30px)",
            transition: "all 0.9s ease 0.15s",
          }}>
            <p style={{
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "rgba(255,255,255,0.5)", lineHeight: 1.9,
              fontFamily: "'Playfair Display', serif", fontStyle: "italic",
              marginBottom: "48px",
            }}>
              I'm always open to connecting with fellow engineers, mentors, and tech enthusiasts.
              Whether it's a collaboration, guidance, or just a conversation about engineering and design — reach out.
            </p>

            {[
              { icon: "✉", label: "EMAIL", value: "shlok@example.com", accent: "#ff8c42" },
              { icon: "🏫", label: "INSTITUTION", value: "DSEU Okhla-I, New Delhi", accent: "#64b5f6" },
              { icon: "🎓", label: "PROGRAM", value: "Diploma · Mechanical Eng.", accent: "#ffd700" },
            ].map(({ icon, label, value, accent }) => (
              <div key={label} style={{
                display: "flex", gap: "20px", alignItems: "flex-start",
                padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                <div style={{
                  width: "40px", height: "40px",
                  border: `1px solid ${accent}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "16px", flexShrink: 0,
                }}>{icon}</div>
                <div>
                  <div style={{ fontSize: "9px", color: accent, letterSpacing: "4px", fontFamily: "'Space Mono', monospace", marginBottom: "5px" }}>{label}</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", fontFamily: "'Space Mono', monospace" }}>{value}</div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div style={{ display: "flex", gap: "14px", marginTop: "36px", flexWrap: "wrap" }}>
              {[
                { label: "LINKEDIN", accent: "#64b5f6" },
                { label: "GITHUB",   accent: "#a8ffb0" },
                { label: "EMAIL",    accent: "#ff8c42" },
              ].map(({ label, accent }) => (
                <button key={label} style={{
                  padding: "10px 20px",
                  background: "transparent",
                  border: `1px solid ${accent}44`,
                  color: accent,
                  fontSize: "9px", letterSpacing: "3px",
                  fontFamily: "'Space Mono', monospace",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${accent}18`; e.currentTarget.style.borderColor = accent; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${accent}44`; }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(30px)",
            transition: "all 0.9s ease 0.3s",
          }}>
            {sent ? (
              <div style={{
                padding: "60px 40px", textAlign: "center",
                border: "1px solid rgba(255,140,66,0.2)",
                background: "rgba(255,140,66,0.04)",
              }}>
                <div style={{ fontSize: "40px", marginBottom: "20px" }}>✓</div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px", fontWeight: "700", color: "#fff", marginBottom: "12px",
                }}>Message Sent!</div>
                <div style={{
                  fontSize: "12px", color: "rgba(255,255,255,0.4)",
                  fontFamily: "'Space Mono', monospace",
                }}>I'll get back to you soon.</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { field: "name",    placeholder: "Your Name",    type: "text" },
                  { field: "email",   placeholder: "Your Email",   type: "email" },
                ].map(({ field, placeholder, type }) => (
                  <input
                    key={field}
                    type={type}
                    placeholder={placeholder}
                    value={form[field]}
                    onChange={handle(field)}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = "rgba(255,140,66,0.4)"; e.target.style.background = "rgba(255,255,255,0.045)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
                  />
                ))}
                <textarea
                  placeholder="Your Message..."
                  rows={6}
                  value={form.message}
                  onChange={handle("message")}
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "rgba(255,140,66,0.4)"; e.target.style.background = "rgba(255,255,255,0.045)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
                />
                <button
                  onClick={submit}
                  disabled={sending}
                  style={{
                    padding: "17px",
                    background: sending ? "rgba(255,140,66,0.3)" : "transparent",
                    border: "1px solid #ff8c42",
                    color: "#ff8c42",
                    fontSize: "10px", letterSpacing: "4px",
                    fontFamily: "'Space Mono', monospace",
                    cursor: sending ? "wait" : "pointer",
                    transition: "all 0.28s ease",
                  }}
                  onMouseEnter={e => { if (!sending) { e.currentTarget.style.background = "#ff8c42"; e.currentTarget.style.color = "#02050a"; } }}
                  onMouseLeave={e => { if (!sending) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ff8c42"; } }}
                >
                  {sending ? "SENDING..." : "SEND MESSAGE →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{
      background: "#02050a",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      padding: "48px 6vw",
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "24px",
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "22px", fontWeight: "900", color: "#fff",
        }}>
          SHLOK <span style={{ color: "#ff8c42" }}>SINGH</span>
          <span style={{ color: "#ff8c42", fontSize: "22px" }}>.</span>
        </div>
        <div style={{
          fontSize: "9px", color: "rgba(255,255,255,0.2)",
          fontFamily: "'Space Mono', monospace", letterSpacing: "3px",
          textAlign: "center",
        }}>
          MECHANICAL ENGINEERING · DSEU · NEW DELHI
        </div>
        <div style={{
          fontSize: "9px", color: "rgba(255,255,255,0.15)",
          fontFamily: "'Space Mono', monospace", letterSpacing: "1.5px",
        }}>
          © 2025 — BUILT WITH PRECISION
        </div>
      </div>

      {/* Bottom line */}
      <div style={{
        maxWidth: "1280px", margin: "32px auto 0",
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(255,140,66,0.3), rgba(100,181,246,0.3), transparent)",
      }} />
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   UTIL
═══════════════════════════════════════════════════════════ */
function hexToRgbStr(hex) {
  const b = parseInt(hex.replace("#",""), 16);
  return `${(b>>16)&255},${(b>>8)&255},${b&255}`;
}

/* ═══════════════════════════════════════════════════════════
   ROOT COMPONENT
═══════════════════════════════════════════════════════════ */
export default function ShlokPortfolio() {
  const [loaded, setLoaded]   = useState(false);
  const [entered, setEntered] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onLoadDone = useCallback(() => {
    setLoaded(true);
    setTimeout(() => setEntered(true), 200);
  }, []);

  return (
    <div onMouseMove={handleMouseMove} style={{ background: "#02050a", minHeight: "100vh" }}>

      {/* Loading */}
      <LoadingScreen onDone={onLoadDone} />

      {/* Cursor */}
      <CustomCursor />

      {/* Nav */}
      {loaded && <Navbar />}

      {/* Sections */}
      <HeroSection entered={entered} mousePos={mousePos} />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
