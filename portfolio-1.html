<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tahsinullah Riyad — Creative Developer</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Exo+2:ital,wght@0,200;0,300;0,400;0,600;0,800;1,300&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
<style>
:root {
  --bg: #03020f;
  --bg2: #07051a;
  --cyan: #00f0ff;
  --purple: #7b2ff7;
  --pink: #ff0080;
  --gold: #ffd700;
  --text: #c8d0f0;
  --text-dim: #5a628a;
  --glass: rgba(255,255,255,0.04);
  --glass-border: rgba(0,240,255,0.15);
  --glow-cyan: 0 0 20px rgba(0,240,255,0.5), 0 0 60px rgba(0,240,255,0.2);
  --glow-purple: 0 0 20px rgba(123,47,247,0.5), 0 0 60px rgba(123,47,247,0.2);
  --glow-pink: 0 0 20px rgba(255,0,128,0.5);
}
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Exo 2', sans-serif;
  font-weight: 300;
  overflow-x: hidden;
  cursor: none;
}

/* ─── CUSTOM CURSOR ─── */
#cursor-ring {
  position: fixed; top:0; left:0; width:40px; height:40px;
  border: 1.5px solid var(--cyan);
  border-radius: 50%; pointer-events: none; z-index: 9999;
  transform: translate(-50%,-50%);
  transition: width .3s, height .3s, border-color .3s, opacity .3s;
  mix-blend-mode: screen;
}
#cursor-dot {
  position: fixed; top:0; left:0; width:6px; height:6px;
  background: var(--cyan); border-radius: 50%; pointer-events: none;
  z-index: 9999; transform: translate(-50%,-50%);
  box-shadow: var(--glow-cyan);
}
.cursor-hover #cursor-ring { width:70px; height:70px; border-color:var(--pink); opacity:.8; }
#cursor-trail-canvas {
  position:fixed; inset:0; pointer-events:none; z-index:9998;
}

/* ─── SCROLLBAR ─── */
::-webkit-scrollbar { width:4px; }
::-webkit-scrollbar-track { background: var(--bg2); }
::-webkit-scrollbar-thumb { background: linear-gradient(180deg,var(--cyan),var(--purple)); border-radius:2px; }

/* ─── LOADING SCREEN ─── */
#loader {
  position: fixed; inset:0; background: var(--bg); z-index:9000;
  display: flex; align-items:center; justify-content:center;
  flex-direction: column; gap: 20px;
}
.loader-logo {
  font-family:'Orbitron'; font-size:60px; font-weight:900;
  background: linear-gradient(135deg, var(--cyan), var(--purple), var(--pink));
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  animation: loaderPulse 1.2s ease-in-out infinite;
}
@keyframes loaderPulse { 0%,100%{filter:brightness(0.6)} 50%{filter:brightness(1.4) drop-shadow(0 0 20px var(--cyan))} }
.loader-text {
  font-family: 'Orbitron', monospace;
  font-size: 12px; letter-spacing: 8px;
  color: var(--cyan); opacity: 0.7;
  animation: pulse 1.2s ease-in-out infinite;
}
.loader-bar-wrap {
  width: 260px; height: 2px; background: rgba(255,255,255,0.05);
  border-radius: 2px; overflow:hidden;
}
.loader-bar {
  height:100%; width:0; background: linear-gradient(90deg, var(--purple), var(--cyan), var(--pink));
  animation: loadBar 2.5s ease forwards;
}
.loader-pct {
  font-family:'Orbitron'; font-size:11px; color:var(--text-dim); letter-spacing:3px;
}
@keyframes loadBar { to { width:100%; } }
@keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:1} }

/* ─── NOISE OVERLAY ─── */
body::before {
  content:''; position:fixed; inset:0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events:none; z-index:1; opacity:.4;
}

/* ─── NAV ─── */
nav {
  position: fixed; top:0; left:0; right:0; z-index:100;
  padding: 20px 60px;
  display: flex; align-items:center; justify-content:space-between;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,240,255,0.05);
  transition: background .4s;
}
nav.scrolled { background: rgba(3,2,15,0.9); border-bottom-color: rgba(0,240,255,0.1); }
.nav-logo {
  font-family: 'Orbitron', monospace; font-size:22px; font-weight:900;
  color: var(--cyan); text-shadow: var(--glow-cyan); letter-spacing:3px;
  text-decoration:none;
}
.nav-logo span { color: var(--purple); }
.nav-links { list-style:none; display:flex; gap:40px; }
.nav-links a {
  font-family:'Exo 2'; font-size:12px; letter-spacing:3px; text-transform:uppercase;
  color: var(--text-dim); text-decoration:none; position:relative;
  transition: color .3s;
}
.nav-links a::after {
  content:''; position:absolute; bottom:-4px; left:0; width:0; height:1px;
  background: linear-gradient(90deg,var(--purple),var(--cyan)); transition: width .3s;
}
.nav-links a:hover { color:var(--cyan); }
.nav-links a:hover::after { width:100%; }
.nav-cta {
  padding: 8px 24px; border: 1px solid var(--cyan);
  color: var(--cyan); font-family:'Exo 2'; font-size:12px;
  letter-spacing:2px; text-transform:uppercase; text-decoration:none;
  transition: all .3s; clip-path: polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);
  position:relative; overflow:hidden;
}
.nav-cta::before {
  content:''; position:absolute; inset:0;
  background: var(--cyan); transform:scaleX(0); transform-origin:left;
  transition: transform .3s; z-index:-1;
}
.nav-cta:hover::before { transform:scaleX(1); }
.nav-cta:hover { color: var(--bg); box-shadow: var(--glow-cyan); }

/* ─── HERO ─── */
#hero {
  position: relative; height:100vh; display:flex;
  align-items:center; justify-content:center;
  overflow: hidden;
}
#three-canvas {
  position:absolute; inset:0; width:100%; height:100%; z-index:0;
}
/* Scan lines */
#hero::after {
  content:''; position:absolute; inset:0; z-index:1; pointer-events:none;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
  animation: scanMove 8s linear infinite;
}
@keyframes scanMove { from{background-position:0 0} to{background-position:0 100px} }

.hero-content {
  position:relative; z-index:2; text-align:center;
  max-width: 1000px; padding: 0 40px;
}
.hero-eyebrow {
  font-family:'Exo 2'; font-size:11px; letter-spacing:10px;
  text-transform:uppercase; color:var(--cyan); margin-bottom:24px;
  opacity:0; transform: translateY(20px);
}
.hero-name {
  font-family:'Orbitron', monospace; font-size: clamp(40px,8vw,90px);
  font-weight:900; line-height:1; margin-bottom:8px;
  background: linear-gradient(135deg, #fff 0%, var(--cyan) 50%, var(--purple) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; opacity:0;
}
.hero-name.line2 {
  background: linear-gradient(135deg, var(--purple) 0%, var(--pink) 60%, var(--cyan) 100%);
  -webkit-background-clip: text; background-clip: text;
}
.hero-tagline {
  font-size: clamp(14px,2vw,18px); font-weight:300; letter-spacing:4px;
  color: var(--text-dim); margin: 24px 0 48px;
  opacity:0; transform: translateY(20px);
}
.hero-tagline span { color:var(--cyan); }
.hero-btns { display:flex; gap:20px; justify-content:center; opacity:0; }
.btn-neon {
  padding:14px 36px; font-family:'Exo 2'; font-size:12px;
  letter-spacing:3px; text-transform:uppercase; text-decoration:none;
  position:relative; overflow:hidden; transition: all .4s;
  clip-path: polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);
}
.btn-neon.primary {
  background: linear-gradient(135deg, var(--purple), var(--cyan));
  color:#fff; box-shadow: 0 0 30px rgba(0,240,255,0.3);
}
.btn-neon.primary:hover { box-shadow: var(--glow-cyan); transform:translateY(-3px) scale(1.04); }
.btn-neon.secondary {
  border: 1px solid var(--purple); color:var(--purple);
}
.btn-neon.secondary:hover { background:var(--purple); color:#fff; box-shadow: var(--glow-purple); transform:translateY(-3px); }
.hero-scroll {
  position:absolute; bottom:40px; left:50%; transform:translateX(-50%);
  display:flex; flex-direction:column; align-items:center; gap:8px;
  font-size:10px; letter-spacing:4px; color:var(--text-dim);
  animation: bounceDown 2s ease-in-out infinite; opacity:0;
}
.hero-scroll-line { width:1px; height:60px; background: linear-gradient(180deg, var(--cyan), transparent); }
@keyframes bounceDown {
  0%,100%{ transform: translateX(-50%) translateY(0); }
  50%{ transform: translateX(-50%) translateY(8px); }
}

/* ─── GLITCH ─── */
.glitch { position:relative; }
.glitch::before, .glitch::after {
  content: attr(data-text); position:absolute; top:0; left:0; width:100%;
  font-family:'Orbitron'; font-weight:900; font-size: inherit; line-height:1;
}
.glitch::before {
  animation: glitch1 3s infinite;
  clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
  transform: translate(-2px);
  background: linear-gradient(135deg, #fff 0%, var(--cyan) 50%, var(--purple) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.glitch::after {
  animation: glitch2 3s infinite;
  clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
  transform: translate(2px);
  background: linear-gradient(135deg, var(--purple) 0%, var(--pink) 60%, var(--cyan) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
@keyframes glitch1 {
  0%,90%,100%{opacity:0;transform:translate(-2px)} 91%{opacity:1;transform:translate(-6px) skewX(-3deg)} 93%{transform:translate(4px)} 95%{transform:translate(-2px)}
}
@keyframes glitch2 {
  0%,92%,100%{opacity:0;transform:translate(2px)} 93%{opacity:1;transform:translate(6px) skewX(3deg)} 95%{transform:translate(-4px)} 97%{transform:translate(2px)}
}

/* ─── SECTION COMMON ─── */
section { position:relative; z-index:2; padding: 120px 60px; overflow:hidden; }
.section-label {
  font-family:'Exo 2'; font-size:10px; letter-spacing:8px; text-transform:uppercase;
  color:var(--purple); margin-bottom:16px; display:flex; align-items:center; gap:16px;
}
.section-label::before { content:''; width:40px; height:1px; background:linear-gradient(90deg,var(--purple),var(--cyan)); }
.section-title {
  font-family:'Orbitron'; font-size: clamp(32px,5vw,56px); font-weight:700; line-height:1.1; margin-bottom:16px;
  background: linear-gradient(135deg, #fff, var(--text));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.section-sub { font-size:16px; color:var(--text-dim); max-width:500px; line-height:1.7; }
section::before {
  content:''; position:absolute; inset:0;
  background-image: linear-gradient(rgba(0,240,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px; pointer-events:none;
}

/* ─── ABOUT ─── */
#about { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
.about-visual {
  position:relative; display:flex; align-items:center; justify-content:center; height:520px;
}
#about-canvas { position:absolute; inset:0; width:100%; height:100%; }

/* ── PROFILE PHOTO ── */
.profile-photo-wrap {
  position:absolute; z-index:10; width:180px; height:180px;
  border-radius:50%; overflow:hidden;
  border: 2px solid transparent;
  background: linear-gradient(var(--bg2), var(--bg2)) padding-box,
              linear-gradient(135deg,var(--cyan),var(--purple),var(--pink)) border-box;
  box-shadow: 0 0 40px rgba(0,240,255,0.3), 0 0 80px rgba(123,47,247,0.2), inset 0 0 30px rgba(0,240,255,0.05);
  animation: photoFloat 4s ease-in-out infinite;
}
@keyframes photoFloat {
  0%,100%{ transform:translateY(0) rotate(0deg); box-shadow: 0 0 40px rgba(0,240,255,0.3), 0 0 80px rgba(123,47,247,0.2); }
  50%{ transform:translateY(-12px) rotate(1deg); box-shadow: 0 20px 60px rgba(0,240,255,0.4), 0 0 100px rgba(123,47,247,0.3); }
}
.profile-photo-wrap img { width:100%; height:100%; object-fit:cover; }
.profile-photo-ring {
  position:absolute; z-index:9; width:200px; height:200px;
  border-radius:50%; border:1px dashed rgba(0,240,255,0.3);
  animation: spinRing 8s linear infinite;
}
.profile-photo-ring2 {
  position:absolute; z-index:9; width:230px; height:230px;
  border-radius:50%; border:1px dashed rgba(123,47,247,0.2);
  animation: spinRing 12s linear infinite reverse;
}
@keyframes spinRing { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
.profile-photo-ring::before, .profile-photo-ring2::before {
  content:''; position:absolute; top:-4px; left:50%; width:8px; height:8px;
  background:var(--cyan); border-radius:50%; transform:translateX(-50%);
  box-shadow: 0 0 10px var(--cyan);
}
.profile-photo-ring2::before { background:var(--purple); box-shadow: 0 0 10px var(--purple); }

.about-badge {
  position:absolute; z-index:11;
  background: var(--glass); border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px); padding:14px 20px; border-radius:2px;
  animation: badgeFloat 5s ease-in-out infinite;
}
.about-badge.tl { top:10%; left:0%; animation-delay:0s; }
.about-badge.br { bottom:15%; right:0%; animation-delay:2s; }
.about-badge.bm { bottom:5%; left:50%; transform:translateX(-50%); animation-delay:1s; }
@keyframes badgeFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
.about-badge.bm { animation: badgeFloatC 5s ease-in-out 1s infinite; }
@keyframes badgeFloatC { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
.about-badge .val { font-family:'Orbitron'; font-size:24px; color:var(--cyan); text-shadow: var(--glow-cyan); }
.about-badge .label { font-size:10px; letter-spacing:3px; color:var(--text-dim); text-transform:uppercase; }

.about-text {}
.about-desc { font-size:16px; line-height:1.8; color:var(--text-dim); margin: 24px 0 40px; }
.about-desc strong { color:var(--cyan); font-weight:600; }
.about-tags { display:flex; flex-wrap:wrap; gap:10px; }
.about-tag {
  padding:6px 16px; border: 1px solid rgba(123,47,247,0.4);
  font-size:12px; letter-spacing:2px; color:var(--purple);
  clip-path: polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px);
  transition: all .3s; cursor:default;
}
.about-tag:hover { background:var(--purple); color:#fff; box-shadow:var(--glow-purple); transform:translateY(-2px); }

/* ─── SKILLS ─── */
#skills { text-align:center; }
.skills-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px; margin-top: 60px; max-width: 1100px; margin-left: auto; margin-right: auto;
}
.skill-card {
  background: var(--glass); border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px); padding:32px; position:relative; overflow:hidden;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
  transition: transform .4s, box-shadow .4s; transform: translateY(40px); opacity:0;
}
.skill-card::after {
  content:''; position:absolute; inset:0;
  background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(0,240,255,0.06) 0%, transparent 60%);
  pointer-events:none; opacity:0; transition:opacity .3s;
}
.skill-card:hover::after { opacity:1; }
.skill-card:hover {
  transform: translateY(-10px) !important;
  box-shadow: 0 20px 60px rgba(0,240,255,0.1), 0 0 0 1px rgba(0,240,255,0.2);
}
.skill-card::before {
  content:''; position:absolute; top:0; left:0; right:0; height:1px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  opacity:0; transition: opacity .4s;
}
.skill-card:hover::before { opacity:1; }
.skill-icon { font-size:40px; margin-bottom:16px; filter: drop-shadow(0 0 8px var(--cyan)); display:block; }
.skill-name { font-family:'Orbitron'; font-size:16px; color:#fff; margin-bottom:8px; }
.skill-desc { font-size:13px; color:var(--text-dim); line-height:1.6; margin-bottom:20px; }
.skill-bar-wrap { height:2px; background:rgba(255,255,255,0.05); border-radius:2px; overflow:hidden; }
.skill-bar {
  height:100%; width:0; border-radius:2px;
  background: linear-gradient(90deg, var(--purple), var(--cyan));
  box-shadow: 0 0 10px var(--cyan); transition: width 1.4s cubic-bezier(.23,1,.32,1);
}
.skill-pct { font-family:'Orbitron'; font-size:11px; color:var(--cyan); text-align:right; margin-top:6px; }

/* Floating number particles in skill cards */
.skill-particle {
  position:absolute; font-family:'Orbitron'; font-size:10px; color:var(--cyan);
  opacity:0; pointer-events:none;
  animation: floatUp 2s ease-out forwards;
}
@keyframes floatUp { 0%{opacity:.7;transform:translateY(0)} 100%{opacity:0;transform:translateY(-60px)} }

/* ─── PROJECTS ─── */
#projects {}
.projects-header { margin-bottom: 60px; }
.projects-grid {
  display:grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap:24px; max-width:1100px; margin:0 auto;
}
.project-card {
  background: var(--glass); border: 1px solid var(--glass-border);
  overflow:hidden; position:relative; transform-style: preserve-3d;
  transition: box-shadow .4s; opacity:0; transform: translateY(60px);
  clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px));
}
.project-card:hover { box-shadow: 0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,240,255,0.25); }
.project-visual {
  height:200px; position:relative; overflow:hidden;
  background: linear-gradient(135deg, var(--bg2), rgba(123,47,247,0.15));
}
.project-3d-canvas { width:100%; height:100%; }
.project-visual-overlay { position:absolute; inset:0; background: linear-gradient(180deg, transparent 50%, var(--bg2) 100%); }
.project-content { padding:28px; }
.project-tags { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px; }
.project-tag {
  font-size:10px; letter-spacing:2px; padding:3px 10px;
  border: 1px solid rgba(0,240,255,0.2); color:var(--cyan); text-transform:uppercase;
}
.project-title { font-family:'Orbitron'; font-size:18px; color:#fff; margin-bottom:10px; }
.project-desc { font-size:13px; color:var(--text-dim); line-height:1.6; margin-bottom:24px; }
.project-links { display:flex; gap:16px; }
.project-link {
  font-size:11px; letter-spacing:3px; text-transform:uppercase; text-decoration:none;
  padding:8px 20px; transition:all .3s;
  clip-path: polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px);
}
.project-link.live { background: linear-gradient(135deg, var(--purple), var(--cyan)); color:#fff; }
.project-link.code { border: 1px solid rgba(255,255,255,0.1); color:var(--text-dim); }
.project-link:hover { box-shadow: var(--glow-cyan); transform:translateY(-2px); }

/* ─── STATS ─── */
#stats {
  padding: 80px 60px; display:grid; grid-template-columns: repeat(4,1fr); gap:1px;
  background: var(--glass-border); border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border);
}
.stat-item { background: var(--bg); padding:40px 20px; text-align:center; position:relative; overflow:hidden; }
.stat-item::before {
  content:''; position:absolute; bottom:0; left:50%; transform:translateX(-50%);
  width:0; height:2px; background:linear-gradient(90deg,var(--purple),var(--cyan));
  transition:width .6s; z-index:1;
}
.stat-item:hover::before { width:80%; }
.stat-val {
  font-family:'Orbitron'; font-size:48px; font-weight:900;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; line-height:1;
}
.stat-unit { font-family:'Orbitron'; font-size:24px; }
.stat-label { font-size:11px; letter-spacing:4px; color:var(--text-dim); text-transform:uppercase; margin-top:8px; }
.stat-bg-num {
  position:absolute; font-family:'Orbitron'; font-size:120px; font-weight:900;
  color:rgba(0,240,255,0.03); top:50%; left:50%; transform:translate(-50%,-50%);
  pointer-events:none; white-space:nowrap;
}

/* ─── CONTACT ─── */
#contact { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
.contact-links { margin-top:48px; display:flex; flex-direction:column; gap:16px; }
.contact-link {
  display:flex; align-items:center; gap:16px; padding:16px 24px;
  background:var(--glass); border: 1px solid var(--glass-border);
  text-decoration:none; color:var(--text); transition:all .4s;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}
.contact-link:hover { border-color:var(--cyan); color:var(--cyan); box-shadow: var(--glow-cyan); transform:translateX(10px); }
.contact-link-icon { font-size:20px; }
.contact-link-label { font-size:12px; letter-spacing:3px; text-transform:uppercase; }
.contact-link-val { margin-left:auto; font-size:13px; color:var(--text-dim); }
.contact-form { display:flex; flex-direction:column; gap:20px; }
.form-field { display:flex; flex-direction:column; gap:8px; }
.form-label { font-size:10px; letter-spacing:4px; text-transform:uppercase; color:var(--text-dim); }
.form-input, .form-textarea {
  background: var(--glass); border: 1px solid rgba(255,255,255,0.06);
  color:var(--text); font-family:'Exo 2'; font-size:15px; font-weight:300;
  padding:14px 18px; outline:none; transition: border-color .3s, box-shadow .3s;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
}
.form-input:focus, .form-textarea:focus { border-color: var(--cyan); box-shadow: inset 0 0 20px rgba(0,240,255,0.05); }
.form-textarea { resize:vertical; min-height:140px; }
.form-submit {
  padding:16px 40px; background: linear-gradient(135deg, var(--purple), var(--cyan));
  border:none; color:#fff; font-family:'Exo 2'; font-size:12px; font-weight:600;
  letter-spacing:4px; text-transform:uppercase; cursor:pointer; transition:all .4s;
  clip-path: polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);
}
.form-submit:hover { box-shadow: 0 10px 40px rgba(0,240,255,0.3); transform:translateY(-2px); }

/* ─── FOOTER ─── */
footer {
  padding:40px 60px; border-top:1px solid var(--glass-border);
  display:flex; align-items:center; justify-content:space-between;
  font-size:12px; color:var(--text-dim); letter-spacing:2px;
}
.footer-logo { font-family:'Orbitron'; font-size:18px; color:var(--cyan); text-decoration:none; }
footer a { color:var(--text-dim); text-decoration:none; transition:color .3s; }
footer a:hover { color:var(--cyan); }

/* ─── FLOATING ORBS ─── */
.float-orb { position:fixed; border-radius:50%; filter:blur(80px); pointer-events:none; z-index:0; opacity:0.12; }
.float-orb.orb1 { width:600px; height:600px; background: radial-gradient(circle, var(--purple), transparent); top:-250px; right:-200px; animation: orbFloat1 8s ease-in-out infinite; }
.float-orb.orb2 { width:500px; height:500px; background: radial-gradient(circle, var(--cyan), transparent); bottom:-150px; left:-200px; animation: orbFloat2 10s ease-in-out infinite; }
.float-orb.orb3 { width:300px; height:300px; background: radial-gradient(circle, var(--pink), transparent); top:50%; left:50%; animation: orbFloat3 14s ease-in-out infinite; opacity:0.06; }
@keyframes orbFloat1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-40px,40px)} }
@keyframes orbFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(50px,-30px)} }
@keyframes orbFloat3 { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-50%) scale(1.4)} }

/* ─── REVEAL ─── */
.reveal { opacity:0; transform:translateY(40px); }

/* ─── DIVIDER ─── */
.divider { width:100%; height:1px; background: linear-gradient(90deg, transparent, var(--purple), var(--cyan), var(--purple), transparent); opacity:0.3; }

/* ─── PARTICLE CANVAS ─── */
#bg-particles { position:fixed; inset:0; z-index:0; pointer-events:none; }

/* ─── HOLOGRAPHIC LINE EFFECT ─── */
.holo-line {
  position:absolute; height:1px; background:linear-gradient(90deg,transparent,var(--cyan),transparent);
  animation:holoScan 4s ease-in-out infinite; opacity:0; pointer-events:none;
}

/* ─── MOBILE ─── */
@media (max-width:900px) {
  nav { padding:16px 24px; }
  .nav-links { display:none; }
  section { padding:80px 24px; }
  #about, #contact { grid-template-columns:1fr; }
  #stats { grid-template-columns:repeat(2,1fr); }
  .about-visual { height:380px; }
  footer { flex-direction:column; gap:16px; text-align:center; }
}
</style>
</head>
<body>

<!-- BG particles canvas -->
<canvas id="bg-particles"></canvas>
<!-- Cursor trail -->
<canvas id="cursor-trail-canvas"></canvas>

<!-- Loader -->
<div id="loader">
  <div class="loader-logo">TR</div>
  <div class="loader-text">INITIALIZING SYSTEMS</div>
  <div class="loader-bar-wrap"><div class="loader-bar"></div></div>
  <div class="loader-pct" id="loader-pct">0%</div>
</div>

<!-- Cursor -->
<div id="cursor-ring"></div>
<div id="cursor-dot"></div>

<!-- Floating Orbs -->
<div class="float-orb orb1"></div>
<div class="float-orb orb2"></div>
<div class="float-orb orb3"></div>

<!-- Navigation -->
<nav id="main-nav">
  <a href="#hero" class="nav-logo">T<span>R</span></a>
  <ul class="nav-links">
    <li><a href="#hero">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="mailto:info@tahsinullahriyad.world" class="nav-cta">Hire Me</a>
</nav>

<!-- ══════ HERO ══════ -->
<section id="hero">
  <canvas id="three-canvas"></canvas>
  <div class="hero-content">
    <div class="hero-eyebrow">Creative Developer &amp; Designer — Dhaka, Bangladesh</div>
    <h1 class="hero-name glitch" data-text="TAHSINULLAH">TAHSINULLAH</h1>
    <h1 class="hero-name line2 glitch" data-text="RIYAD">RIYAD</h1>
    <p class="hero-tagline">Building <span>immersive digital experiences</span> that push the boundary</p>
    <div class="hero-btns">
      <a href="#projects" class="btn-neon primary">Explore Work</a>
      <a href="#contact" class="btn-neon secondary">Let's Connect</a>
    </div>
  </div>
  <div class="hero-scroll">
    <span>SCROLL</span>
    <div class="hero-scroll-line"></div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════ STATS ══════ -->
<div id="stats">
  <div class="stat-item">
    <div class="stat-bg-num">50</div>
    <div class="stat-val"><span class="counter" data-target="50">0</span><span class="stat-unit">+</span></div>
    <div class="stat-label">Projects Delivered</div>
  </div>
  <div class="stat-item">
    <div class="stat-bg-num">3</div>
    <div class="stat-val"><span class="counter" data-target="3">0</span><span class="stat-unit">+</span></div>
    <div class="stat-label">Years Experience</div>
  </div>
  <div class="stat-item">
    <div class="stat-bg-num">30</div>
    <div class="stat-val"><span class="counter" data-target="30">0</span><span class="stat-unit">+</span></div>
    <div class="stat-label">Happy Clients</div>
  </div>
  <div class="stat-item">
    <div class="stat-bg-num">1K</div>
    <div class="stat-val"><span class="counter" data-target="1000">0</span><span class="stat-unit">+</span></div>
    <div class="stat-label">Commits on GitHub</div>
  </div>
</div>

<div class="divider"></div>

<!-- ══════ ABOUT ══════ -->
<section id="about">
  <div class="about-visual">
    <canvas id="about-canvas"></canvas>
    <!-- Profile rings -->
    <div class="profile-photo-ring2"></div>
    <div class="profile-photo-ring"></div>
    <!-- Profile Photo -->
    <div class="profile-photo-wrap">
      <img src="https://i.postimg.cc/90qD8913/IMG-20260217-124734020.jpg" alt="Tahsinullah Riyad" loading="lazy" />
    </div>
    <div class="about-badge tl">
      <div class="val">🇧🇩</div>
      <div class="label">Based in Dhaka</div>
    </div>
    <div class="about-badge br">
      <div class="val" style="color:var(--purple); text-shadow: var(--glow-purple)">∞</div>
      <div class="label">Full Stack</div>
    </div>
    <div class="about-badge bm">
      <div class="val" style="font-size:16px;color:var(--pink)">✦ Creative</div>
      <div class="label">Developer</div>
    </div>
  </div>
  <div class="about-text">
    <div class="section-label reveal">About Me</div>
    <h2 class="section-title reveal">Crafting Pixels<br>Into <span style="color:var(--cyan)">Reality</span></h2>
    <p class="about-desc reveal">
      Hi, I'm <strong>Tahsinullah Riyad</strong> — a developer &amp; designer from Dhaka, Bangladesh.
      I specialise in creating <strong>visually stunning</strong> digital products that combine
      beautiful design with powerful engineering. Whether it's a sleek portfolio,
      a complex web app, or a large-scale reference platform — I make it happen.
    </p>
    <div class="about-tags reveal">
      <span class="about-tag">React</span>
      <span class="about-tag">Three.js</span>
      <span class="about-tag">Next.js</span>
      <span class="about-tag">Node.js</span>
      <span class="about-tag">Figma</span>
      <span class="about-tag">GSAP</span>
      <span class="about-tag">TypeScript</span>
      <span class="about-tag">UI/UX</span>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════ SKILLS ══════ -->
<section id="skills">
  <div style="max-width:1100px;margin:0 auto;">
    <div class="section-label reveal" style="justify-content:center">My Expertise</div>
    <h2 class="section-title reveal" style="text-align:center">Technical <span style="color:var(--purple)">Arsenal</span></h2>
    <p class="section-sub reveal" style="margin:0 auto;text-align:center">Technologies I wield to build exceptional digital experiences</p>
    <div class="skills-grid">
      <div class="skill-card" data-skill="92"><div class="skill-icon">⚛️</div><div class="skill-name">Frontend Dev</div><div class="skill-desc">React, Next.js, Vue — building fast, beautiful, interactive UIs with pixel-perfect precision.</div><div class="skill-bar-wrap"><div class="skill-bar"></div></div><div class="skill-pct">92%</div></div>
      <div class="skill-card" data-skill="85"><div class="skill-icon">🔷</div><div class="skill-name">3D & WebGL</div><div class="skill-desc">Three.js, GSAP, WebGL shaders — creating immersive 3D web experiences from scratch.</div><div class="skill-bar-wrap"><div class="skill-bar"></div></div><div class="skill-pct">85%</div></div>
      <div class="skill-card" data-skill="80"><div class="skill-icon">⚡</div><div class="skill-name">Backend Dev</div><div class="skill-desc">Node.js, Express, MongoDB, Firebase — robust APIs and scalable server architectures.</div><div class="skill-bar-wrap"><div class="skill-bar"></div></div><div class="skill-pct">80%</div></div>
      <div class="skill-card" data-skill="90"><div class="skill-icon">🎨</div><div class="skill-name">UI/UX Design</div><div class="skill-desc">Figma, design systems, motion design — crafting interfaces that users love intuitively.</div><div class="skill-bar-wrap"><div class="skill-bar"></div></div><div class="skill-pct">90%</div></div>
      <div class="skill-card" data-skill="75"><div class="skill-icon">📱</div><div class="skill-name">Mobile Dev</div><div class="skill-desc">React Native, responsive design — deploying seamless cross-platform mobile applications.</div><div class="skill-bar-wrap"><div class="skill-bar"></div></div><div class="skill-pct">75%</div></div>
      <div class="skill-card" data-skill="88"><div class="skill-icon">🚀</div><div class="skill-name">DevOps & Deploy</div><div class="skill-desc">Vercel, AWS, Docker, CI/CD — shipping production-ready code with confidence and speed.</div><div class="skill-bar-wrap"><div class="skill-bar"></div></div><div class="skill-pct">88%</div></div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════ PROJECTS ══════ -->
<section id="projects">
  <div class="projects-header">
    <div class="section-label reveal">Selected Work</div>
    <h2 class="section-title reveal">Featured <span style="color:var(--cyan)">Projects</span></h2>
  </div>
  <div class="projects-grid" style="max-width:1100px;margin:0 auto;">
    <div class="project-card tilt-card">
      <div class="project-visual"><canvas class="project-3d-canvas" id="pCanvas1"></canvas><div class="project-visual-overlay"></div></div>
      <div class="project-content">
        <div class="project-tags"><span class="project-tag">React</span><span class="project-tag">Three.js</span><span class="project-tag">GSAP</span></div>
        <h3 class="project-title">Mega Resource Hub</h3>
        <p class="project-desc">A large-scale curated reference platform featuring 1,000+ global tools, Bangladesh government services, and helplines — all in one place.</p>
        <div class="project-links"><a href="#" class="project-link live">Live Demo</a><a href="https://github.com/TahsinullahRiyad" class="project-link code">GitHub →</a></div>
      </div>
    </div>
    <div class="project-card tilt-card">
      <div class="project-visual"><canvas class="project-3d-canvas" id="pCanvas2"></canvas><div class="project-visual-overlay"></div></div>
      <div class="project-content">
        <div class="project-tags"><span class="project-tag">Next.js</span><span class="project-tag">Tailwind</span><span class="project-tag">Framer</span></div>
        <h3 class="project-title">Personal Portfolio</h3>
        <p class="project-desc">A warm, elegant personal portfolio with smooth animations, glassmorphism UI, and a distinctive beige-cream aesthetic that tells a story.</p>
        <div class="project-links"><a href="https://tr-com.lovable.app" class="project-link live">Visit Site</a><a href="#" class="project-link code">GitHub →</a></div>
      </div>
    </div>
    <div class="project-card tilt-card">
      <div class="project-visual"><canvas class="project-3d-canvas" id="pCanvas3"></canvas><div class="project-visual-overlay"></div></div>
      <div class="project-content">
        <div class="project-tags"><span class="project-tag">Node.js</span><span class="project-tag">MongoDB</span><span class="project-tag">API</span></div>
        <h3 class="project-title">BD Services App</h3>
        <p class="project-desc">Comprehensive Bangladesh digital services directory with emergency numbers, government portals, and official mobile apps in one accessible platform.</p>
        <div class="project-links"><a href="#" class="project-link live">Live Demo</a><a href="#" class="project-link code">GitHub →</a></div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════ CONTACT ══════ -->
<section id="contact">
  <div class="contact-info">
    <div class="section-label reveal">Get In Touch</div>
    <h2 class="section-title reveal">Let's Build<br>Something <span style="color:var(--pink)">Amazing</span></h2>
    <p class="section-sub reveal" style="margin-top:16px">Have a project in mind? I'd love to help bring your vision to life. Drop me a message — I respond within 24 hours.</p>
    <div class="contact-links">
      <a href="mailto:info@tahsinullahriyad.world" class="contact-link reveal"><span class="contact-link-icon">📧</span><span class="contact-link-label">Email</span><span class="contact-link-val">info@tahsinullahriyad.world</span></a>
      <a href="https://github.com/TahsinullahRiyad" class="contact-link reveal"><span class="contact-link-icon">🐙</span><span class="contact-link-label">GitHub</span><span class="contact-link-val">TahsinullahRiyad</span></a>
      <a href="https://linkedin.com" class="contact-link reveal"><span class="contact-link-icon">💼</span><span class="contact-link-label">LinkedIn</span><span class="contact-link-val">Tahsinullah Riyad</span></a>
      <a href="https://tr-com.lovable.app" class="contact-link reveal"><span class="contact-link-icon">🌐</span><span class="contact-link-label">Portfolio</span><span class="contact-link-val">tr-com.lovable.app</span></a>
    </div>
  </div>
  <div class="contact-form reveal">
    <div class="form-field"><label class="form-label">Your Name</label><input class="form-input" type="text" placeholder="John Doe" /></div>
    <div class="form-field"><label class="form-label">Email Address</label><input class="form-input" type="email" placeholder="john@example.com" /></div>
    <div class="form-field"><label class="form-label">Project Type</label><input class="form-input" type="text" placeholder="Web App / Portfolio / API..." /></div>
    <div class="form-field"><label class="form-label">Message</label><textarea class="form-textarea" placeholder="Tell me about your project..."></textarea></div>
    <button class="form-submit" onclick="sendMsg(this)">Send Message →</button>
  </div>
</section>

<!-- ══════ FOOTER ══════ -->
<footer>
  <a href="#hero" class="footer-logo">TR</a>
  <span>© 2025 Tahsinullah Riyad. Crafted with ❤️ in Dhaka</span>
  <div style="display:flex;gap:20px;">
    <a href="https://github.com/TahsinullahRiyad">GitHub</a>
    <a href="#">LinkedIn</a>
    <a href="#">Twitter</a>
  </div>
</footer>

<!-- ══════ SCRIPTS ══════ -->
<script>
gsap.registerPlugin(ScrollTrigger);

// ── LOADER with counter ──
let pct = 0;
const pctEl = document.getElementById('loader-pct');
const pctInt = setInterval(()=>{
  pct = Math.min(pct + Math.random()*4, 100);
  pctEl.textContent = Math.floor(pct) + '%';
  if(pct >= 100) clearInterval(pctInt);
}, 60);
window.addEventListener('load', () => {
  setTimeout(() => {
    gsap.to('#loader', { opacity:0, duration:.8, delay:.5, onComplete:()=>{
      document.getElementById('loader').style.display='none';
      initHeroAnimations();
    }});
  }, 2400);
});

// ── CURSOR TRAIL (canvas) ──
(function(){
  const c = document.getElementById('cursor-trail-canvas');
  const ctx = c.getContext('2d');
  c.width = window.innerWidth; c.height = window.innerHeight;
  window.addEventListener('resize',()=>{ c.width=window.innerWidth; c.height=window.innerHeight; });
  const trail = [];
  let mx=0, my=0;
  document.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; trail.push({x:mx,y:my,a:1}); if(trail.length>30) trail.shift(); });
  function drawTrail(){
    ctx.clearRect(0,0,c.width,c.height);
    for(let i=1;i<trail.length;i++){
      const p=trail[i], pp=trail[i-1];
      const t=i/trail.length;
      ctx.beginPath();
      ctx.moveTo(pp.x,pp.y); ctx.lineTo(p.x,p.y);
      ctx.strokeStyle=`rgba(0,240,255,${t*0.4})`;
      ctx.lineWidth=t*2.5;
      ctx.lineCap='round'; ctx.stroke();
    }
    trail.forEach(p=>{ p.a*=0.92; });
    requestAnimationFrame(drawTrail);
  }
  drawTrail();
})();

// ── Custom Cursor ──
const ring = document.getElementById('cursor-ring');
const dot  = document.getElementById('cursor-dot');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function trackCursor(){
  rx += (mx-rx)*0.10; ry += (my-ry)*0.10;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  dot.style.left=mx+'px'; dot.style.top=my+'px';
  requestAnimationFrame(trackCursor);
})();
document.querySelectorAll('a,button,.skill-card,.project-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-hover'));
});

// ── Nav scroll ──
window.addEventListener('scroll',()=>{
  document.getElementById('main-nav').classList.toggle('scrolled', scrollY>50);
});

// ────────────────────────────────────────────
//  BG PARTICLE SYSTEM
// ────────────────────────────────────────────
(function(){
  const c = document.getElementById('bg-particles');
  const ctx = c.getContext('2d');
  c.width=window.innerWidth; c.height=window.innerHeight;
  window.addEventListener('resize',()=>{ c.width=window.innerWidth; c.height=window.innerHeight; });
  const pts=[];
  for(let i=0;i<120;i++){
    pts.push({ x:Math.random()*c.width, y:Math.random()*c.height,
      vx:(Math.random()-.5)*.3, vy:(Math.random()-.5)*.3,
      r:Math.random()*1.2+.3,
      color:['rgba(0,240,255,','rgba(123,47,247,','rgba(255,0,128,'][Math.floor(Math.random()*3)] });
  }
  let fmx=c.width/2, fmy=c.height/2;
  document.addEventListener('mousemove',e=>{ fmx=e.clientX; fmy=e.clientY; });
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>c.width) p.vx*=-1;
      if(p.y<0||p.y>c.height) p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.color+'0.7)'; ctx.fill();
    });
    // Connections
    for(let i=0;i<pts.length;i++){
      for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<110){
          ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
          ctx.strokeStyle=`rgba(0,240,255,${(1-d/110)*0.08})`; ctx.lineWidth=.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ────────────────────────────────────────────
//  THREE.JS — HERO SCENE (ENHANCED)
// ────────────────────────────────────────────
(function initHero3D(){
  const canvas = document.getElementById('three-canvas');
  const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Dense Particle Galaxy
  const pCount = 10000;
  const pGeo = new THREE.BufferGeometry();
  const pos = new Float32Array(pCount*3);
  const col = new Float32Array(pCount*3);
  const sizes = new Float32Array(pCount);
  for(let i=0;i<pCount;i++){
    const theta=Math.random()*Math.PI*2, phi=Math.acos(2*Math.random()-1);
    const r=2+Math.random()*10;
    pos[i*3]=r*Math.sin(phi)*Math.cos(theta);
    pos[i*3+1]=r*Math.sin(phi)*Math.sin(theta)*0.35;
    pos[i*3+2]=r*Math.cos(phi);
    sizes[i]=Math.random();
    const t=Math.random();
    if(t<0.4){ col[i*3]=0;col[i*3+1]=0.94;col[i*3+2]=1; }
    else if(t<0.7){ col[i*3]=0.48;col[i*3+1]=0.18;col[i*3+2]=0.97; }
    else{ col[i*3]=1;col[i*3+1]=0;col[i*3+2]=0.5; }
  }
  pGeo.setAttribute('position',new THREE.BufferAttribute(pos,3));
  pGeo.setAttribute('color',new THREE.BufferAttribute(col,3));
  const pMat=new THREE.PointsMaterial({size:.02,vertexColors:true,transparent:true,opacity:.8});
  scene.add(new THREE.Points(pGeo,pMat));

  // Main TorusKnot
  const tkGeo=new THREE.TorusKnotGeometry(1.1,0.35,200,24,2,3);
  const tkMat=new THREE.MeshStandardMaterial({color:0x0a0a1a,metalness:1,roughness:0.1,emissive:0x00f0ff,emissiveIntensity:.06});
  const tkWire=new THREE.MeshBasicMaterial({color:0x00f0ff,wireframe:true,transparent:true,opacity:.12});
  const torusKnot=new THREE.Mesh(tkGeo,tkMat);
  const torusWire=new THREE.Mesh(tkGeo,tkWire);
  scene.add(torusKnot); scene.add(torusWire);

  // Second smaller torus knot
  const tk2Geo=new THREE.TorusKnotGeometry(.5,.12,120,12,3,5);
  const tk2Mat=new THREE.MeshBasicMaterial({color:0xff0080,wireframe:true,transparent:true,opacity:.3});
  const tk2=new THREE.Mesh(tk2Geo,tk2Mat);
  tk2.position.set(2.5,.5,0); scene.add(tk2);

  // Icosahedron
  const icoGeo=new THREE.IcosahedronGeometry(2.2,1);
  const icoMat=new THREE.MeshBasicMaterial({color:0x7b2ff7,wireframe:true,transparent:true,opacity:.05});
  const ico=new THREE.Mesh(icoGeo,icoMat); scene.add(ico);

  // Extra: Octahedron
  const octGeo=new THREE.OctahedronGeometry(1.5,0);
  const octMat=new THREE.MeshBasicMaterial({color:0x00f0ff,wireframe:true,transparent:true,opacity:.04});
  const oct=new THREE.Mesh(octGeo,octMat); oct.position.set(-2.5,-0.5,0); scene.add(oct);

  // Floating Orbs
  const orbGeo=new THREE.SphereGeometry(0.10,16,16);
  const orbs=[];
  const orbCols=[0x00f0ff,0x7b2ff7,0xff0080];
  for(let i=0;i<12;i++){
    const mat=new THREE.MeshBasicMaterial({color:orbCols[i%3],transparent:true,opacity:.9});
    const m=new THREE.Mesh(orbGeo,mat);
    const angle=(i/12)*Math.PI*2;
    m.position.set(Math.cos(angle)*3,Math.sin(angle*.7)*.9,Math.sin(angle)*2);
    scene.add(m); orbs.push({mesh:m,angle,speed:.3+Math.random()*.5,amp:2.5+Math.random()});
  }

  // Energy rings around main object
  const eRings=[];
  for(let i=0;i<3;i++){
    const rg=new THREE.TorusGeometry(1.5+i*0.4,0.008,8,100);
    const rm=new THREE.MeshBasicMaterial({color:[0x00f0ff,0x7b2ff7,0xff0080][i],transparent:true,opacity:.4-i*.1});
    const r=new THREE.Mesh(rg,rm);
    r.rotation.x=Math.PI/2.5*i; r.rotation.z=Math.PI/4*i;
    scene.add(r); eRings.push(r);
  }

  // Lights
  scene.add(new THREE.AmbientLight(0x111122,2));
  const cL=new THREE.PointLight(0x00f0ff,4,10); cL.position.set(3,2,3); scene.add(cL);
  const pL=new THREE.PointLight(0x7b2ff7,3,10); pL.position.set(-3,-1,2); scene.add(pL);
  const pkL=new THREE.PointLight(0xff0080,2,8); pkL.position.set(0,3,-2); scene.add(pkL);

  let mouseX=0,mouseY=0;
  document.addEventListener('mousemove',e=>{ mouseX=(e.clientX/window.innerWidth-.5)*2; mouseY=(e.clientY/window.innerHeight-.5)*2; });
  window.addEventListener('resize',()=>{ camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth,window.innerHeight); });

  const clock=new THREE.Clock();
  function animate(){
    requestAnimationFrame(animate);
    const t=clock.getElapsedTime();
    torusKnot.rotation.x=t*.25; torusKnot.rotation.y=t*.18;
    torusWire.rotation.copy(torusKnot.rotation);
    ico.rotation.x=t*.07; ico.rotation.y=t*.05;
    oct.rotation.x=t*.15; oct.rotation.y=t*.10; oct.rotation.z=t*.08;
    tk2.rotation.x=t*.4; tk2.rotation.y=t*.6;
    pMat.opacity=.7+Math.sin(t*.5)*.1;
    // Parallax
    torusKnot.position.x+=(mouseX*.6-torusKnot.position.x)*.04;
    torusKnot.position.y+=(-mouseY*.6-torusKnot.position.y)*.04;
    torusWire.position.copy(torusKnot.position);
    ico.position.x+=(mouseX*.2-ico.position.x)*.02;
    ico.position.y+=(-mouseY*.2-ico.position.y)*.02;
    tkMat.emissiveIntensity=.04+Math.sin(t*2)*.03;
    eRings.forEach((r,i)=>{ r.rotation.z+=.005+i*.003; r.rotation.x+=.003; });
    orbs.forEach(o=>{
      o.angle+=o.speed*.005;
      o.mesh.position.x=Math.cos(o.angle)*o.amp;
      o.mesh.position.y=Math.sin(o.angle*1.3)*.9;
      o.mesh.position.z=Math.sin(o.angle)*o.amp*.5;
    });
    cL.intensity=3+Math.sin(t*1.5)*1.5;
    pL.intensity=2.5+Math.cos(t*2)*1;
    pkL.intensity=1.5+Math.sin(t*2.5)*.8;
    renderer.render(scene,camera);
  }
  animate();
})();

// ────────────────────────────────────────────
//  THREE.JS — ABOUT CANVAS (ENHANCED)
// ────────────────────────────────────────────
(function(){
  const canvas=document.getElementById('about-canvas');
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  const w=canvas.parentElement.offsetWidth, h=canvas.parentElement.offsetHeight||520;
  renderer.setSize(w,h);
  const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(60,w/h,.1,100);
  camera.position.z=5;

  // Orbit rings
  const rings=[], rCols=[0x00f0ff,0x7b2ff7,0xff0080,0xffd700];
  for(let i=0;i<4;i++){
    const geo=new THREE.TorusGeometry(1.5+i*.5,.015,16,120);
    const mat=new THREE.MeshBasicMaterial({color:rCols[i],transparent:true,opacity:.4-i*.06});
    const r=new THREE.Mesh(geo,mat);
    r.rotation.x=Math.PI/(3+i); r.rotation.y=Math.PI/(5+i);
    scene.add(r); rings.push(r);
  }

  // Small floating particles
  const fGeo=new THREE.BufferGeometry();
  const fPos=new Float32Array(400*3);
  for(let i=0;i<400;i++){ fPos[i*3]=(Math.random()-.5)*8; fPos[i*3+1]=(Math.random()-.5)*6; fPos[i*3+2]=(Math.random()-.5)*4; }
  fGeo.setAttribute('position',new THREE.BufferAttribute(fPos,3));
  scene.add(new THREE.Points(fGeo,new THREE.PointsMaterial({color:0x00f0ff,size:.04,transparent:true,opacity:.5})));

  // Orbiting dots
  const dotGeo=new THREE.SphereGeometry(0.05,8,8);
  const dots=[];
  for(let i=0;i<18;i++){
    const mat=new THREE.MeshBasicMaterial({color:rCols[i%4]});
    const d=new THREE.Mesh(dotGeo,mat); scene.add(d);
    dots.push({mesh:d,r:1.8+Math.random()*.8,angle:Math.random()*Math.PI*2,tilt:Math.random()*Math.PI,speed:.4+Math.random()*.8});
  }

  scene.add(new THREE.AmbientLight(0x222244,2));
  const pL1=new THREE.PointLight(0x00f0ff,5,10); pL1.position.set(2,2,2); scene.add(pL1);
  const pL2=new THREE.PointLight(0x7b2ff7,4,10); pL2.position.set(-2,-1,2); scene.add(pL2);

  let mx2=.5,my2=.5;
  document.addEventListener('mousemove',e=>{ mx2=e.clientX/window.innerWidth; my2=e.clientY/window.innerHeight; });

  const clock2=new THREE.Clock();
  function anim(){
    requestAnimationFrame(anim);
    const t=clock2.getElapsedTime();
    rings.forEach((r,i)=>{ r.rotation.x=t*(.15+i*.08); r.rotation.z=t*(.12+i*.06); });
    dots.forEach(d=>{
      d.angle+=d.speed*.01;
      d.mesh.position.x=d.r*Math.cos(d.angle)*Math.sin(d.tilt);
      d.mesh.position.y=d.r*Math.sin(d.angle*.7);
      d.mesh.position.z=d.r*Math.sin(d.angle)*Math.cos(d.tilt);
    });
    scene.rotation.x+=(-my2*.3+.1-scene.rotation.x)*.05;
    scene.rotation.y+=(mx2*.6-.3-scene.rotation.y)*.05;
    pL1.intensity=4+Math.sin(t*1.8)*2; pL2.intensity=3+Math.cos(t*2)*1.5;
    renderer.render(scene,camera);
  }
  anim();
})();

// ────────────────────────────────────────────
//  THREE.JS — PROJECT CARDS
// ────────────────────────────────────────────
function createProjectScene(id, c1, c2, type){
  const canvas=document.getElementById(id); if(!canvas) return;
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(canvas.offsetWidth||340,200);
  const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(60,(canvas.offsetWidth||340)/200,.1,100);
  camera.position.z=3.5;
  let geo;
  if(type===0) geo=new THREE.OctahedronGeometry(1,0);
  else if(type===1) geo=new THREE.TorusGeometry(.8,.3,20,80);
  else geo=new THREE.IcosahedronGeometry(.9,1);
  const mat=new THREE.MeshStandardMaterial({color:c1,metalness:.8,roughness:.2,emissive:c1,emissiveIntensity:.1});
  const wire=new THREE.MeshBasicMaterial({color:c2,wireframe:true,transparent:true,opacity:.25});
  const mesh=new THREE.Mesh(geo,mat), wireM=new THREE.Mesh(geo,wire);
  scene.add(mesh); scene.add(wireM);

  // Extra floating orb
  const oGeo=new THREE.SphereGeometry(.08,12,12);
  const oMat=new THREE.MeshBasicMaterial({color:c2,transparent:true,opacity:.9});
  const orb=new THREE.Mesh(oGeo,oMat); scene.add(orb);

  const ppGeo=new THREE.BufferGeometry();
  const ppp=new Float32Array(1200*3);
  for(let i=0;i<1200;i++){ ppp[i*3]=(Math.random()-.5)*6; ppp[i*3+1]=(Math.random()-.5)*3; ppp[i*3+2]=(Math.random()-.5)*4; }
  ppGeo.setAttribute('position',new THREE.BufferAttribute(ppp,3));
  scene.add(new THREE.Points(ppGeo,new THREE.PointsMaterial({color:c2,size:.018,transparent:true,opacity:.5})));

  scene.add(new THREE.AmbientLight(0x111122,3));
  const pL=new THREE.PointLight(c1,6,10); pL.position.set(2,2,2); scene.add(pL);
  const pL2=new THREE.PointLight(c2,4,10); pL2.position.set(-2,-1,2); scene.add(pL2);

  const clock=new THREE.Clock();
  function anim(){
    requestAnimationFrame(anim);
    const t=clock.getElapsedTime();
    mesh.rotation.x=t*.4; mesh.rotation.y=t*.6;
    wireM.rotation.copy(mesh.rotation);
    mat.emissiveIntensity=.08+Math.sin(t*2)*.06;
    orb.position.x=Math.cos(t)*1.8; orb.position.y=Math.sin(t*1.2)*.8; orb.position.z=Math.sin(t)*.6;
    pL.intensity=5+Math.sin(t*1.5)*2;
    renderer.render(scene,camera);
  }
  anim();
}
createProjectScene('pCanvas1',0x00f0ff,0x7b2ff7,0);
createProjectScene('pCanvas2',0x7b2ff7,0xff0080,1);
createProjectScene('pCanvas3',0xff0080,0x00f0ff,2);

// ── 3D Tilt Cards ──
document.querySelectorAll('.tilt-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    gsap.to(card,{rotationY:x*18,rotationX:-y*14,transformPerspective:900,duration:.4,ease:'power2.out'});
  });
  card.addEventListener('mouseleave',()=>{ gsap.to(card,{rotationY:0,rotationX:0,duration:.7,ease:'elastic.out(1,0.5)'}); });
});

// ── Skill cards mouse glow ──
document.querySelectorAll('.skill-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
    card.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
  });
});

// ────────────────────────────────────────────
//  GSAP — HERO ENTRANCE
// ────────────────────────────────────────────
function initHeroAnimations(){
  const tl=gsap.timeline({delay:.2});
  tl.to('.hero-eyebrow',{opacity:1,y:0,duration:.8,ease:'power3.out'})
    .to('.hero-name',{opacity:1,duration:1.2,ease:'power3.out',stagger:.2},'-=.4')
    .to('.hero-tagline',{opacity:1,y:0,duration:.8,ease:'power3.out'},'-=.6')
    .to('.hero-btns',{opacity:1,duration:.8,ease:'power3.out'},'-=.5')
    .to('.hero-scroll',{opacity:1,duration:.8},'-=.3');
}

// ── SCROLL REVEALS ──
gsap.utils.toArray('.reveal').forEach(el=>{
  gsap.fromTo(el,{opacity:0,y:40},{opacity:1,y:0,duration:.9,ease:'power3.out',
    scrollTrigger:{trigger:el,start:'top 85%',toggleActions:'play none none none'}});
});

// ── Skill cards ──
gsap.utils.toArray('.skill-card').forEach((card,i)=>{
  gsap.to(card,{opacity:1,y:0,duration:.7,ease:'power3.out',delay:i*.12,
    scrollTrigger:{trigger:'#skills',start:'top 70%',toggleActions:'play none none none'}});
  ScrollTrigger.create({
    trigger:card,start:'top 80%',
    onEnter:()=>{
      const bar=card.querySelector('.skill-bar');
      gsap.to(bar,{width:(card.dataset.skill||'80')+'%',duration:1.6,ease:'power3.out',delay:i*.1+.3});
      // Spawn floating numbers
      for(let k=0;k<4;k++){
        setTimeout(()=>{
          const sp=document.createElement('span');
          sp.className='skill-particle';
          sp.textContent=Math.floor(Math.random()*100)+'%';
          sp.style.left=Math.random()*80+10+'%';
          sp.style.bottom='10px';
          card.appendChild(sp);
          setTimeout(()=>sp.remove(),2000);
        },k*300);
      }
    }
  });
});

// ── Project cards ──
gsap.utils.toArray('.project-card').forEach((card,i)=>{
  gsap.to(card,{opacity:1,y:0,duration:.8,ease:'power3.out',delay:i*.18,
    scrollTrigger:{trigger:'#projects',start:'top 75%',toggleActions:'play none none none'}});
});

// ── Stats counter ──
ScrollTrigger.create({
  trigger:'#stats',start:'top 80%',
  onEnter:()=>{
    document.querySelectorAll('.counter').forEach(el=>{
      const target=parseInt(el.dataset.target);
      gsap.to(el,{innerHTML:target,duration:2.2,ease:'power2.out',snap:{innerHTML:1},
        onUpdate:()=>{ el.innerHTML=Math.round(parseFloat(el.innerHTML)).toLocaleString(); }});
    });
  }
});

// ── Section title parallax ──
gsap.utils.toArray('.section-title').forEach(el=>{
  gsap.fromTo(el,{opacity:0,x:-30},{opacity:1,x:0,duration:1,ease:'power3.out',
    scrollTrigger:{trigger:el,start:'top 85%'}});
});

// ── Stat items stagger ──
gsap.utils.toArray('.stat-item').forEach((el,i)=>{
  gsap.fromTo(el,{opacity:0,y:30},{opacity:1,y:0,duration:.7,delay:i*.12,ease:'power3.out',
    scrollTrigger:{trigger:'#stats',start:'top 85%',toggleActions:'play none none none'}});
});

// ── Contact links stagger ──
gsap.utils.toArray('.contact-link').forEach((el,i)=>{
  el.style.opacity='0'; el.style.transform='translateX(-30px)';
  ScrollTrigger.create({
    trigger:el,start:'top 88%',
    onEnter:()=>{ gsap.to(el,{opacity:1,x:0,duration:.6,delay:i*.1,ease:'power3.out'}); }
  });
});

// ── Send message ──
function sendMsg(btn){
  btn.textContent='Sending...'; btn.disabled=true;
  setTimeout(()=>{ btn.textContent='✓ Message Sent!'; btn.style.background='linear-gradient(135deg,#00c853,#00f0ff)'; },1200);
}
</script>
</body>
</html>
