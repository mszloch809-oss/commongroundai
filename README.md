<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>CommonGround — Property Management, Simplified</title>
<meta name="description" content="The property management platform independent landlords actually love. Rent collection, maintenance, messaging, and AI — all in one place."/>
<meta property="og:title" content="CommonGround — Property Management, Simplified"/>
<meta property="og:description" content="Collect rent, manage maintenance, message tenants, and run your portfolio with AI. Built for landlords with 2–100 units."/>
<meta property="og:url" content="https://getcommongroundai.com"/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,700;1,9..144,900&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --green:#2ECC71;
  --gold:#F5C542;
  --red:#E74C3C;
  --blue:#4A9EE0;
  --text:#ffffff;
  --soft:#aaaaaa;
  --muted:#666;
  --border:#2a2a2a;
  --serif:'Fraunces',Georgia,serif;
  --sans:'DM Sans',system-ui,sans-serif;
}
html{scroll-behavior:smooth}
@keyframes pulse{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1.1)}}
@keyframes popIn{from{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes micRipple{0%{box-shadow:0 0 0 0 rgba(247,111,111,.65)}70%{box-shadow:0 0 0 14px rgba(247,111,111,0)}100%{box-shadow:0 0 0 0 rgba(247,111,111,0)}}
@keyframes waveBar{from{transform:scaleY(.35)}to{transform:scaleY(1.3)}}
#cg-root{min-height:100vh}

body{
  background:#040a06;
  color:var(--text);
  font-family:var(--sans);
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}

/* Textured dark background using layered gradients */
.tex{
  background:
    radial-gradient(ellipse 80% 50% at 50% -10%, rgba(46,204,113,.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 60%, rgba(46,204,113,.05) 0%, transparent 50%),
    radial-gradient(ellipse 40% 40% at 20% 80%, rgba(245,197,66,.04) 0%, transparent 50%),
    linear-gradient(180deg,#040e07 0%,#020804 50%,#050c06 100%);
}

/* Noise texture overlay */
body::before{
  content:'';
  position:fixed;
  inset:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events:none;
  z-index:0;
  opacity:.6;
}

a{text-decoration:none;color:inherit}

/* ── NAV ─────────────────────────────────────────────────────────────── */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  padding:16px 40px;
  display:flex;align-items:center;justify-content:space-between;
  background:rgba(4,10,6,.9);
  backdrop-filter:blur(24px);
  border-bottom:1px solid rgba(46,204,113,.15);
}
.wordmark{font-family:var(--serif);font-size:22px;font-weight:900;letter-spacing:-.5px;color:#fff}
.wordmark span{color:var(--green)}
.nav-right{display:flex;align-items:center;gap:16px}
.nav-link{font-size:13px;color:var(--soft);font-weight:600;cursor:pointer;transition:color .2s}
.nav-link:hover{color:#fff}
.nav-cta{
  padding:9px 22px;border-radius:50px;
  background:var(--green);color:#000;
  font-size:13px;font-weight:800;border:none;cursor:pointer;
  transition:all .2s;
}
.nav-cta:hover{background:#27ae60;transform:translateY(-1px);box-shadow:0 6px 24px rgba(46,204,113,.35)}

/* ── HERO ────────────────────────────────────────────────────────────── */
.hero{
  min-height:100vh;
  display:flex;flex-direction:column;
  align-items:center;justify-content:center;
  text-align:center;
  padding:120px 24px 80px;
  position:relative;overflow:hidden;
}
.hero-glow-top{
  position:absolute;width:900px;height:500px;
  border-radius:50%;
  background:radial-gradient(ellipse,rgba(46,204,113,.18) 0%,transparent 70%);
  top:-100px;left:50%;transform:translateX(-50%);
  pointer-events:none;
}
.hero-glow-mid{
  position:absolute;width:500px;height:500px;
  border-radius:50%;
  background:radial-gradient(ellipse,rgba(46,204,113,.08) 0%,transparent 70%);
  top:40%;left:50%;transform:translate(-50%,-50%);
  pointer-events:none;
}

.hero-eyebrow{
  display:inline-block;
  font-size:11px;font-weight:800;letter-spacing:.2em;
  color:var(--green);text-transform:uppercase;
  margin-bottom:24px;
  opacity:0;animation:fadeUp .5s .1s ease forwards;
}

.hero h1{
  font-family:var(--serif);
  font-size:clamp(42px,9vw,96px);
  font-weight:900;
  line-height:1.03;
  letter-spacing:-3px;
  margin-bottom:10px;
  opacity:0;animation:fadeUp .6s .2s ease forwards;
}
.hero h1 .line2{
  font-style:italic;
  color:var(--gold);
  display:block;
}
.hero h1 .line3{
  display:block;
  font-size:.85em;
}

.hero-sub{
  font-size:clamp(16px,2vw,19px);
  color:var(--soft);
  line-height:1.75;
  max-width:520px;
  margin:24px auto 48px;
  font-weight:400;
  opacity:0;animation:fadeUp .6s .35s ease forwards;
}

.hero-btns{
  display:flex;flex-direction:column;align-items:center;gap:12px;
  opacity:0;animation:fadeUp .6s .45s ease forwards;
}
.btn-hero{
  padding:17px 44px;border-radius:50px;
  background:var(--green);color:#000;
  font-size:17px;font-weight:800;border:none;cursor:pointer;
  transition:all .25s;letter-spacing:.01em;
  box-shadow:0 0 40px rgba(46,204,113,.3);
}
.btn-hero:hover{background:#27ae60;transform:translateY(-2px);box-shadow:0 8px 40px rgba(46,204,113,.45)}
.btn-ghost{
  padding:13px 28px;border-radius:50px;
  background:transparent;color:var(--soft);
  font-size:14px;font-weight:600;
  border:1px solid #333;cursor:pointer;transition:all .2s;
}
.btn-ghost:hover{border-color:#666;color:#fff}
.hero-note{font-size:12px;color:var(--muted);margin-top:8px;letter-spacing:.04em}

/* ── PAIN SECTION ────────────────────────────────────────────────────── */
.pain{
  padding:120px 24px 100px;
  position:relative;
  overflow:hidden;
}
.pain-glow{
  position:absolute;width:600px;height:300px;
  background:radial-gradient(ellipse,rgba(245,197,66,.07) 0%,transparent 70%);
  top:0;left:50%;transform:translateX(-50%);
  pointer-events:none;
}
.pain-inner{max-width:900px;margin:0 auto;text-align:center}
.pain h2{
  font-family:var(--serif);
  font-size:clamp(36px,6vw,68px);
  font-weight:900;
  line-height:1.1;
  letter-spacing:-2px;
  margin-bottom:16px;
}
.pain h2 .hard{color:var(--gold);font-style:italic}
.pain-sub{font-size:17px;color:var(--soft);margin-bottom:64px;line-height:1.7}

.pain-points{
  display:flex;flex-direction:column;gap:16px;
  max-width:600px;margin:0 auto;
}
.pain-point{
  display:flex;align-items:center;gap:18px;
  padding:20px 28px;
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.07);
  border-radius:16px;
  text-align:left;
  transition:all .3s;
  position:relative;overflow:hidden;
}
.pain-point::before{
  content:'';position:absolute;left:0;top:0;bottom:0;
  width:3px;background:var(--accent);
  border-radius:3px 0 0 3px;
  opacity:.7;
}
.pain-point:hover{
  background:rgba(255,255,255,.05);
  border-color:rgba(255,255,255,.12);
  transform:translateX(4px);
}
.pain-arrow{
  font-size:20px;flex-shrink:0;color:var(--accent);
}
.pain-point p{font-size:18px;font-weight:600;color:#fff;line-height:1.4}
.pain-point p span{color:var(--accent)}

/* ── SOLUTION BRIDGE ─────────────────────────────────────────────────── */
.bridge{
  padding:80px 24px;
  text-align:center;
  position:relative;
}
.bridge-inner{max-width:700px;margin:0 auto}
.bridge h2{
  font-family:var(--serif);
  font-size:clamp(40px,7vw,80px);
  font-weight:900;letter-spacing:-2px;line-height:1.05;
  margin-bottom:16px;
}
.bridge h2 em{color:var(--green);font-style:italic}
.bridge-sub{font-size:18px;color:var(--soft);line-height:1.7;margin-bottom:48px}

/* ── PHONE MOCKUP ────────────────────────────────────────────────────── */
.phone-section{
  padding:80px 24px 120px;
  position:relative;overflow:hidden;
}
.phone-glow{
  position:absolute;width:700px;height:700px;
  background:radial-gradient(ellipse,rgba(46,204,113,.12) 0%,transparent 65%);
  top:50%;left:50%;transform:translate(-50%,-50%);
  pointer-events:none;
}
.phone-section-inner{
  max-width:1000px;margin:0 auto;
  display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;
}
.phone-copy{position:relative;z-index:2}
.phone-copy .label{font-size:11px;font-weight:800;letter-spacing:.18em;color:var(--green);text-transform:uppercase;margin-bottom:16px}
.phone-copy h3{font-family:var(--serif);font-size:clamp(32px,4vw,48px);font-weight:900;letter-spacing:-1.5px;line-height:1.1;margin-bottom:20px}
.phone-copy h3 em{color:var(--green);font-style:italic}
.phone-copy p{font-size:16px;color:var(--soft);line-height:1.8;margin-bottom:32px}
.phone-features{display:flex;flex-direction:column;gap:12px}
.phone-feature{display:flex;align-items:center;gap:12px;font-size:15px;color:var(--soft)}
.phone-feature::before{content:'✓';color:var(--green);font-weight:800;font-size:13px;flex-shrink:0}

/* Phone frame */
.phone-frame-wrap{position:relative;z-index:2;display:flex;justify-content:center}
.phone-frame{
  width:260px;
  background:#0d0d0d;
  border-radius:38px;
  border:8px solid #222;
  box-shadow:
    0 40px 80px rgba(0,0,0,.8),
    0 0 0 1px #333,
    inset 0 0 0 1px #111,
    0 0 60px rgba(46,204,113,.15);
  overflow:hidden;
  position:relative;
}
.phone-frame::before{
  content:'';position:absolute;top:10px;left:50%;transform:translateX(-50%);
  width:80px;height:6px;background:#1a1a1a;border-radius:3px;z-index:10;
}
.phone-screen{padding:24px 14px 14px;display:flex;flex-direction:column;gap:10px}
.phone-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.phone-header-title{font-family:var(--serif);font-size:16px;font-weight:900;color:#fff}
.phone-header-title span{color:var(--green)}
.phone-badge{font-size:9px;font-weight:700;color:var(--green);background:rgba(46,204,113,.15);padding:3px 8px;border-radius:20px;border:1px solid rgba(46,204,113,.3)}

.pcard{
  background:#161616;border:1px solid #2a2a2a;
  border-radius:14px;padding:12px 14px;
}
.pcard-row{display:flex;align-items:center;justify-content:space-between;gap:8px}
.pcard-name{font-size:12px;font-weight:700;color:#fff}
.pcard-sub{font-size:10px;color:#555;margin-top:2px}
.pcard-amount{font-size:13px;font-weight:900;color:var(--green);font-family:var(--serif)}
.pcard-badge{font-size:9px;font-weight:700;padding:2px 8px;border-radius:10px}
.paid{background:rgba(46,204,113,.15);color:var(--green);border:1px solid rgba(46,204,113,.2)}
.overdue{background:rgba(231,76,60,.15);color:#E74C3C;border:1px solid rgba(231,76,60,.2)}
.due{background:rgba(245,197,66,.15);color:var(--gold);border:1px solid rgba(245,197,66,.2)}

.pcard-order{display:flex;align-items:flex-start;gap:10px}
.pcard-icon{width:32px;height:32px;border-radius:8px;background:rgba(245,151,66,.15);display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
.pcard-order-text{font-size:11px;font-weight:700;color:#fff}
.pcard-order-sub{font-size:10px;color:#555;margin-top:2px}

.pcard-ai{background:linear-gradient(135deg,rgba(46,204,113,.12),rgba(46,204,113,.05));border-color:rgba(46,204,113,.25)}
.pcard-ai-label{font-size:9px;font-weight:800;letter-spacing:.12em;color:var(--green);margin-bottom:6px}
.pcard-ai-text{font-size:11px;color:#aaa;line-height:1.6}

/* ── FEATURES GRID ───────────────────────────────────────────────────── */
.features{
  padding:100px 24px;
  background:linear-gradient(180deg,transparent,rgba(46,204,113,.03) 50%,transparent);
}
.features-inner{max-width:1080px;margin:0 auto}
.section-eyebrow{font-size:11px;font-weight:800;letter-spacing:.18em;color:var(--green);text-transform:uppercase;margin-bottom:16px}
.section-title{font-family:var(--serif);font-size:clamp(32px,5vw,52px);font-weight:900;letter-spacing:-1.5px;line-height:1.1;margin-bottom:16px}
.section-title em{color:var(--green);font-style:italic}
.section-sub{font-size:16px;color:var(--soft);line-height:1.75;max-width:500px}

.feat-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:2px;
  margin-top:60px;
  border-radius:24px;overflow:hidden;
  border:1px solid #1e1e1e;
}
.feat{
  background:#0a0e0b;
  padding:32px 28px;
  transition:background .2s;
  position:relative;
}
.feat:hover{background:#0e1410}
.feat-num{font-family:var(--serif);font-size:11px;color:#333;font-weight:700;letter-spacing:.1em;margin-bottom:20px}
.feat-icon{font-size:28px;margin-bottom:16px}
.feat h4{font-family:var(--serif);font-size:20px;font-weight:700;margin-bottom:10px;letter-spacing:-.5px}
.feat p{font-size:13px;color:var(--soft);line-height:1.75}
.feat-accent{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--c),transparent);opacity:0;transition:opacity .2s}
.feat:hover .feat-accent{opacity:1}

/* ── STATS ───────────────────────────────────────────────────────────── */
.stats{
  padding:80px 24px;
  border-top:1px solid #111;
  border-bottom:1px solid #111;
  background:#050b07;
}
.stats-inner{
  max-width:900px;margin:0 auto;
  display:flex;justify-content:center;
  flex-wrap:wrap;gap:0;
}
.stat{
  flex:1;min-width:160px;
  text-align:center;padding:32px 20px;
  border-right:1px solid #111;
}
.stat:last-child{border-right:none}
.stat-num{font-family:var(--serif);font-size:54px;font-weight:900;color:var(--green);line-height:1;letter-spacing:-3px}
.stat-label{font-size:12px;color:var(--muted);margin-top:8px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}

/* ── COMPARE ─────────────────────────────────────────────────────────── */
.compare{padding:100px 24px}
.compare-inner{max-width:800px;margin:0 auto}
.ctable{
  width:100%;border-collapse:collapse;
  margin-top:52px;
  background:#0a0e0b;
  border-radius:20px;overflow:hidden;
  border:1px solid #1e1e1e;
}
.ctable th{
  padding:16px 20px;
  font-size:12px;font-weight:800;letter-spacing:.1em;color:var(--muted);
  text-align:center;text-transform:uppercase;
  background:#080c09;
  border-bottom:1px solid #1e1e1e;
}
.ctable th:first-child{text-align:left}
.ctable th.cg-col{color:var(--green)}
.ctable td{
  padding:14px 20px;
  font-size:14px;color:var(--soft);
  text-align:center;
  border-bottom:1px solid #111;
}
.ctable td:first-child{text-align:left;font-size:13px;color:#777}
.ctable tr:last-child td{border-bottom:none}
.ctable tr:hover td{background:rgba(255,255,255,.01)}
.cg-val{color:var(--green);font-weight:800}
.c-check{color:var(--green);font-size:16px;font-weight:700}
.c-cross{color:#2a2a2a;font-size:18px}
.cg-cell{background:rgba(46,204,113,.04)}

/* ── PRICING ─────────────────────────────────────────────────────────── */
.pricing{padding:100px 24px;background:#050b07}
.pricing-inner{max-width:960px;margin:0 auto}
.pricing-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:16px;margin-top:56px;
}
.pcard-plan{
  background:#0a0e0b;
  border:1px solid #1e1e1e;
  border-radius:24px;padding:32px;
  position:relative;transition:border-color .2s;
}
.pcard-plan:hover{border-color:#333}
.pcard-plan.featured{
  border-color:rgba(46,204,113,.4);
  background:linear-gradient(160deg,rgba(46,204,113,.06),#0a0e0b 60%);
}
.plan-pop{
  position:absolute;top:-12px;left:50%;transform:translateX(-50%);
  padding:4px 18px;border-radius:50px;
  background:var(--green);color:#000;
  font-size:10px;font-weight:800;letter-spacing:.1em;white-space:nowrap;
}
.plan-name{font-family:var(--serif);font-size:26px;font-weight:900;margin-bottom:10px}
.plan-price{display:flex;align-items:baseline;gap:4px;margin-bottom:6px}
.plan-amount{font-family:var(--serif);font-size:52px;font-weight:900;line-height:1;letter-spacing:-2px}
.plan-period{font-size:15px;color:var(--muted)}
.plan-units{font-size:11px;font-weight:700;color:var(--green);letter-spacing:.1em;text-transform:uppercase;margin-bottom:28px}
.plan-feats{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
.plan-feat{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--soft)}
.plan-feat::before{content:'✓';color:var(--green);font-weight:800;font-size:12px;flex-shrink:0}
.plan-btn{
  width:100%;padding:13px;border-radius:50px;
  font-size:14px;font-weight:800;cursor:pointer;transition:all .2s;border:none;
}
.plan-btn.green{background:var(--green);color:#000}
.plan-btn.green:hover{background:#27ae60}
.plan-btn.outline{background:transparent;color:var(--soft);border:1px solid #2a2a2a}
.plan-btn.outline:hover{border-color:#555;color:#fff}

/* ── TESTIMONIALS ────────────────────────────────────────────────────── */
.testi{padding:100px 24px}
.testi-inner{max-width:960px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-top:52px}
.tcard{
  background:#0a0e0b;border:1px solid #1e1e1e;
  border-radius:20px;padding:28px;
}
.tcard-quote{
  font-size:15px;color:var(--soft);line-height:1.85;
  margin-bottom:24px;font-style:italic;
  position:relative;padding-top:16px;
}
.tcard-quote::before{
  content:'"';
  position:absolute;top:-8px;left:0;
  font-family:var(--serif);font-size:52px;color:rgba(46,204,113,.2);
  line-height:1;font-style:normal;
}
.tcard-author{display:flex;align-items:center;gap:12px}
.tcard-av{
  width:40px;height:40px;border-radius:50%;
  background:linear-gradient(135deg,var(--green),#27ae60);
  display:flex;align-items:center;justify-content:center;
  font-size:14px;font-weight:900;color:#000;
  font-family:var(--serif);flex-shrink:0;
}
.tcard-name{font-size:14px;font-weight:700}
.tcard-role{font-size:12px;color:var(--muted);margin-top:2px}

/* ── WAITLIST ────────────────────────────────────────────────────────── */
.waitlist{
  padding:120px 24px;
  text-align:center;
  position:relative;overflow:hidden;
}
.waitlist-glow{
  position:absolute;width:700px;height:400px;
  background:radial-gradient(ellipse,rgba(46,204,113,.14) 0%,transparent 65%);
  top:0;left:50%;transform:translateX(-50%);
  pointer-events:none;
}
.waitlist-inner{max-width:520px;margin:0 auto;position:relative;z-index:1}
.waitlist h2{
  font-family:var(--serif);
  font-size:clamp(36px,6vw,58px);
  font-weight:900;letter-spacing:-2px;line-height:1.1;
  margin-bottom:16px;
}
.waitlist h2 em{color:var(--green);font-style:italic}
.waitlist-sub{font-size:16px;color:var(--soft);line-height:1.75;margin-bottom:48px}
.wform{display:flex;flex-direction:column;gap:12px}
.winput{
  padding:16px 20px;
  border-radius:14px;
  background:rgba(255,255,255,.04);
  border:1px solid #2a2a2a;
  color:#fff;font-size:15px;
  font-family:var(--sans);outline:none;
  transition:border-color .2s;
  width:100%;
}
.winput:focus{border-color:rgba(46,204,113,.5)}
.winput::placeholder{color:#444}
.wsubmit{
  padding:17px;border-radius:50px;
  background:var(--green);color:#000;
  font-size:16px;font-weight:800;border:none;cursor:pointer;
  transition:all .25s;
  box-shadow:0 0 40px rgba(46,204,113,.25);
}
.wsubmit:hover{background:#27ae60;transform:translateY(-1px);box-shadow:0 8px 40px rgba(46,204,113,.4)}
.wnote{font-size:12px;color:var(--muted);margin-top:12px}
.wsuccess{display:none;padding:32px;text-align:center}
.wsuccess .big{font-size:48px;margin-bottom:12px}
.wsuccess p{font-size:16px;color:var(--green);font-weight:700}
.wsuccess small{font-size:13px;color:var(--muted);margin-top:6px;display:block}

/* ── FOOTER ──────────────────────────────────────────────────────────── */
footer{
  padding:40px;
  border-top:1px solid #111;
  display:flex;align-items:center;justify-content:space-between;
  flex-wrap:wrap;gap:16px;
  background:#040a06;
}
.footer-right{display:flex;gap:24px;font-size:13px;color:var(--muted)}
.footer-right a:hover{color:#fff}
.footer-tagline{font-size:12px;color:#333;margin-top:4px}

/* ── ANIMATIONS ──────────────────────────────────────────────────────── */
@keyframes fadeUp{
  from{opacity:0;transform:translateY(24px)}
  to{opacity:1;transform:translateY(0)}
}
@keyframes float{
  0%,100%{transform:translateY(0) rotate(-2deg)}
  50%{transform:translateY(-12px) rotate(-2deg)}
}
@keyframes glow-pulse{
  0%,100%{opacity:.6}50%{opacity:1}
}

.reveal{opacity:0;transform:translateY(30px);transition:opacity .75s ease,transform .75s ease}
.reveal.visible{opacity:1;transform:none}
.reveal-delay-1{transition-delay:.1s}
.reveal-delay-2{transition-delay:.2s}
.reveal-delay-3{transition-delay:.3s}

/* ── RESPONSIVE ──────────────────────────────────────────────────────── */
@media(max-width:768px){
  nav{padding:14px 20px}
  .nav-link{display:none}
  .phone-section-inner{grid-template-columns:1fr;gap:40px}
  .phone-frame-wrap{order:-1}
  .stat{min-width:130px}
  footer{flex-direction:column;text-align:center;padding:32px 20px}
  .ctable{font-size:12px}
  .ctable th,.ctable td{padding:10px 12px}
}
</style>
</head>
<body class="tex">
</div>

<!-- ── NAV ── -->
<nav>
  <div class="wordmark">
    <svg width="28" height="28" viewBox="0 0 80 80" fill="none" style="display:inline-block;vertical-align:middle;margin-right:8px">
      <rect x="10" y="56" width="60" height="4" rx="2" fill="#2ECC71" opacity=".35"/>
      <rect x="12" y="28" width="18" height="28" rx="3" stroke="#2ECC71" stroke-width="1.8" fill="none" opacity=".55"/>
      <rect x="31" y="14" width="18" height="42" rx="3" fill="#2ECC71" opacity=".15"/>
      <rect x="31" y="14" width="18" height="42" rx="3" stroke="#2ECC71" stroke-width="2.2" fill="none"/>
      <rect x="50" y="34" width="18" height="22" rx="3" stroke="#2ECC71" stroke-width="1.8" fill="none" opacity=".55"/>
      <rect x="37" y="44" width="6" height="12" rx="1.5" fill="#2ECC71" opacity=".9"/>
      <circle cx="21" cy="27" r="2.5" fill="#2ECC71" opacity=".8"/>
      <circle cx="40" cy="13" r="2.8" fill="#2ECC71"/>
      <circle cx="59" cy="33" r="2.5" fill="#2ECC71" opacity=".8"/>
      <path d="M21 27 Q40 10 59 33" stroke="#2ECC71" stroke-width="1.5" fill="none" stroke-dasharray="3 3" opacity=".5"/>
    </svg>
    Common<span>Ground</span>
  </div>
  <div class="nav-right">
    <span class="nav-link" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">Features</span>
    <span class="nav-link" onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'})">Pricing</span>
    <span onclick="window.open('/demo.html','_blank')" style="font-size:13px;color:var(--soft);font-weight:600;cursor:pointer;transition:color .2s" onmouseover="this.style.color='#fff'" onmouseout="this.style.color=''">Live Demo</span>
    <button class="nav-cta" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSe3qYDTJpvrANQp95z4MIN0G9eX8JLPEhQ_hSJNZNx6eVixVQ/viewform','_blank')">Join Waitlist</button>
  </div>
</nav>

<!-- ── HERO ── -->
<section class="hero">
  <div class="hero-glow-top"></div>
  <div class="hero-glow-mid"></div>

  <div class="hero-eyebrow">Property Management Software</div>

  <h1>
    Everything.
    <span class="line2">One place.</span>
    <span class="line3">Property management<br/>simplified.</span>
  </h1>

  <p class="hero-sub">Collect rent, manage maintenance, message tenants, and run your entire portfolio — with an AI that actually knows your buildings.</p>

  <div class="hero-btns">
    <button class="btn-hero" onclick="window.open('/demo.html','_blank')">🏠&nbsp; Explore the Live Demo</button>
    <button class="btn-ghost" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSe3qYDTJpvrANQp95z4MIN0G9eX8JLPEhQ_hSJNZNx6eVixVQ/viewform','_blank')">Join the waitlist — it's free</button>
    <p class="hero-note">No account needed &nbsp;·&nbsp; Built by an active landlord</p>
  </div>
</section>

<!-- ── PAIN ── -->
<section class="pain">
  <div class="pain-glow"></div>
  <div class="pain-inner">
    <div class="reveal">
      <h2>Managing rentals<br/>shouldn't be <span class="hard">THIS hard.</span></h2>
      <p class="pain-sub">Sound familiar? You're not alone. Independent landlords have been cobbling together spreadsheets, group chats, and overpriced software for too long.</p>
    </div>

    <div class="pain-points reveal reveal-delay-1">
      <div class="pain-point" style="--accent:var(--red)">
        <div class="pain-arrow">▶</div>
        <p>Chasing <span style="color:var(--red)">rent</span> every month and keeping track of who's late?</p>
      </div>
      <div class="pain-point" style="--accent:var(--gold)">
        <div class="pain-arrow">▶</div>
        <p>Missed <span style="color:var(--gold)">maintenance</span> requests piling up in your texts?</p>
      </div>
      <div class="pain-point" style="--accent:var(--blue)">
        <div class="pain-arrow">▶</div>
        <p>Always playing <span style="color:var(--blue)">catch-up</span> instead of growing your portfolio?</p>
      </div>
      <div class="pain-point" style="--accent:#9B59B6">
        <div class="pain-arrow">▶</div>
        <p>Paying <span style="color:#9B59B6">$50–$200/mo</span> for software built for property management corporations — not you?</p>
      </div>
    </div>
  </div>
</section>

<!-- ── BRIDGE ── -->
<section class="bridge">
  <div class="bridge-inner reveal">
    <h2><em>Everything.</em><br/>One place.</h2>
    <p class="bridge-sub">CommonGround puts rent collection, maintenance, tenant messaging, your ledger, and an AI property agent all in one clean dashboard — built by a landlord who was tired of duct-taping tools together.</p>
    <button class="btn-hero" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSe3qYDTJpvrANQp95z4MIN0G9eX8JLPEhQ_hSJNZNx6eVixVQ/viewform','_blank')">Join the Waitlist</button>
  </div>
</section>

<!-- ── PHONE SECTIONS ── -->
<section class="phone-section" id="features">
  <div class="phone-glow"></div>
  <div class="phone-section-inner">
    <div class="phone-copy reveal">
      <div class="label">Rent Collection</div>
      <h3>Get paid.<br/><em>Automatically.</em></h3>
      <p>Stripe-powered payments with ACH as low as $0.80 per transaction — capped at $5. Card, Apple Pay, Google Pay. Already running live at our beta building.</p>
      <div class="phone-features">
        <div class="phone-feature">ACH from $0.80 · capped at $5 per transaction</div>
        <div class="phone-feature">Instant payment receipts to tenants</div>
        <div class="phone-feature">Automatic late payment alerts</div>
        <div class="phone-feature">Full payment history per unit</div>
      </div>
    </div>
    <div class="phone-frame-wrap reveal reveal-delay-2" style="animation:float 5s ease-in-out infinite">
      <div class="phone-frame">
        <div class="phone-screen">
          <div class="phone-header">
            <div class="phone-header-title">Common<span>Ground</span></div>
            <div class="phone-badge">LIVE</div>
          </div>

          <div class="pcard">
            <div class="pcard-row">
              <div>
                <div class="pcard-name">Alex Morgan</div>
                <div class="pcard-sub">Unit 101 · $1,590/mo</div>
              </div>
              <span class="pcard-badge paid">✓ Paid</span>
            </div>
          </div>

          <div class="pcard">
            <div class="pcard-row">
              <div>
                <div class="pcard-name">Sam Rivera</div>
                <div class="pcard-sub">Unit 201 · $1,590/mo</div>
              </div>
              <span class="pcard-badge overdue">⚠ Overdue</span>
            </div>
          </div>

          <div class="pcard">
            <div class="pcard-row">
              <div>
                <div class="pcard-name">Riley Patel</div>
                <div class="pcard-sub">Unit 301 · $1,100/mo</div>
              </div>
              <span class="pcard-badge due">Due Soon</span>
            </div>
          </div>

          <div class="pcard" style="background:rgba(46,204,113,.08);border-color:rgba(46,204,113,.2)">
            <div class="pcard-sub" style="color:#555;margin-bottom:4px">COLLECTED THIS MONTH</div>
            <div class="pcard-amount" style="font-size:22px">$6,370</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="phone-section" style="padding-top:40px">
  <div class="phone-section-inner" style="direction:rtl">
    <div class="phone-copy reveal" style="direction:ltr">
      <div class="label">Work Orders</div>
      <h3>Maintenance<br/><em>under control.</em></h3>
      <p>Tenants submit requests directly from their portal. You track status, assign vendors, add notes, and close tickets — everything logged and timestamped.</p>
      <div class="phone-features">
        <div class="phone-feature">Tenants submit from their phone</div>
        <div class="phone-feature">Priority levels — high, medium, low</div>
        <div class="phone-feature">Assign vendors, track status</div>
        <div class="phone-feature">Full history per unit</div>
      </div>
    </div>
    <div class="phone-frame-wrap reveal reveal-delay-2" style="direction:ltr;animation:float 6s 1s ease-in-out infinite">
      <div class="phone-frame">
        <div class="phone-screen">
          <div class="phone-header">
            <div class="phone-header-title">Work <span>Orders</span></div>
            <div class="phone-badge" style="background:rgba(231,76,60,.15);color:#E74C3C;border-color:rgba(231,76,60,.3)">2 Open</div>
          </div>

          <div class="pcard" style="border-color:rgba(231,76,60,.3)">
            <div class="pcard-order">
              <div class="pcard-icon">🚰</div>
              <div>
                <div class="pcard-order-text">Kitchen faucet dripping</div>
                <div class="pcard-order-sub">Unit 101 · PlumbRight LLC</div>
                <div style="margin-top:5px"><span class="pcard-badge" style="background:rgba(74,158,224,.15);color:#4A9EE0;border:1px solid rgba(74,158,224,.2);font-size:9px;padding:2px 7px;border-radius:10px;font-weight:700">In Progress</span></div>
              </div>
            </div>
          </div>

          <div class="pcard" style="border-color:rgba(231,76,60,.5)">
            <div class="pcard-order">
              <div class="pcard-icon" style="background:rgba(231,76,60,.15)">🏗</div>
              <div>
                <div class="pcard-order-text">Ceiling water stain</div>
                <div class="pcard-order-sub">Unit 301 · HIGH PRIORITY</div>
                <div style="margin-top:5px"><span class="pcard-badge overdue" style="font-size:9px;padding:2px 7px;border-radius:10px">Open</span></div>
              </div>
            </div>
          </div>

          <div class="pcard">
            <div class="pcard-order">
              <div class="pcard-icon" style="background:rgba(46,204,113,.12)">✅</div>
              <div>
                <div class="pcard-order-text">Window latch replaced</div>
                <div class="pcard-order-sub">Unit 202 · Resolved Apr 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="phone-section" style="padding-top:40px">
  <div class="phone-section-inner">
    <div class="phone-copy reveal">
      <div class="label">AI Property Agent</div>
      <h3>Your portfolio,<br/><em>on autopilot.</em></h3>
      <p>Ask it anything. It knows your buildings, your tenants, your open work orders. It doesn't just answer — it acts. Send notices, create work orders, flag overdue rent. All by voice or text.</p>
      <div class="phone-features">
        <div class="phone-feature">Knows every tenant and every unit</div>
        <div class="phone-feature">Voice-activated — speak your commands</div>
        <div class="phone-feature">Creates work orders, sends notices, sets reminders</div>
        <div class="phone-feature">Powered by Claude AI</div>
      </div>
    </div>
    <div class="phone-frame-wrap reveal reveal-delay-2" style="animation:float 5.5s .5s ease-in-out infinite">
      <div class="phone-frame">
        <div class="phone-screen">
          <div class="phone-header">
            <div class="phone-header-title" style="color:var(--green)">⚡ AI Agent</div>
            <div class="phone-badge">Claude</div>
          </div>

          <div class="pcard pcard-ai">
            <div class="pcard-ai-label">AGENT</div>
            <div class="pcard-ai-text">33 Cottage St has 1 overdue unit and 2 open work orders. What do you need?</div>
          </div>

          <div class="pcard" style="background:rgba(46,204,113,.12);border-color:rgba(46,204,113,.25);border-radius:14px 14px 4px 14px;margin-left:30px">
            <div class="pcard-ai-text" style="color:#fff;font-weight:600">Send a late notice to Unit 201</div>
          </div>

          <div class="pcard pcard-ai">
            <div class="pcard-ai-label">AGENT</div>
            <div class="pcard-ai-text">Done. Late rent notice sent to Sam Rivera in Unit 201. Want me to add a follow-up reminder?</div>
          </div>

          <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(255,255,255,.03);border:1px solid rgba(46,204,113,.25);border-radius:12px;margin-top:4px">
            <div style="font-size:18px">🎤</div>
            <div style="font-size:11px;color:#555">Tap mic to speak…</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── FEATURES GRID ── -->
<section class="features">
  <div class="features-inner">
    <div class="reveal">
      <div class="section-eyebrow">Everything included</div>
      <h2 class="section-title">Built for landlords<br/>who do it <em>themselves</em></h2>
      <p class="section-sub">Every feature came from real frustration. Because the person who built CommonGround manages his own buildings too.</p>
    </div>

    <div class="feat-grid reveal reveal-delay-1">
      <div class="feat" style="--c:var(--green)">
        <div class="feat-num">01</div>
        <div class="feat-accent"></div>
        <div class="feat-icon">💳</div>
        <h4>Rent Collection</h4>
        <p>Stripe-powered. Card, ACH, Apple Pay. ACH from $0.80 capped at $5. Live at our beta building today.</p>
      </div>
      <div class="feat" style="--c:var(--blue)">
        <div class="feat-num">02</div>
        <div class="feat-accent"></div>
        <div class="feat-icon">💬</div>
        <h4>Tenant Messaging</h4>
        <p>Direct chat with every tenant. Send notices, updates, and reminders. Full message history per unit.</p>
      </div>
      <div class="feat" style="--c:var(--gold)">
        <div class="feat-num">03</div>
        <div class="feat-accent"></div>
        <div class="feat-icon">🔧</div>
        <h4>Work Orders</h4>
        <p>Tenants submit from their portal. You assign, track, and close. Everything logged and timestamped.</p>
      </div>
      <div class="feat" style="--c:var(--red)">
        <div class="feat-num">04</div>
        <div class="feat-accent"></div>
        <div class="feat-icon">📊</div>
        <h4>Ledger & P&L</h4>
        <p>Income and expenses per property. Net profit at a glance. Export-ready for your accountant.</p>
      </div>
      <div class="feat" style="--c:#1ABC9C">
        <div class="feat-num">05</div>
        <div class="feat-accent"></div>
        <div class="feat-icon">🏘</div>
        <h4>Community Forum</h4>
        <p>A private building forum where tenants coordinate. Fewer calls to you. Happier tenants.</p>
      </div>
      <div class="feat" style="--c:#9B59B6">
        <div class="feat-num">06</div>
        <div class="feat-accent"></div>
        <div class="feat-icon">📄</div>
        <h4>Lease Management</h4>
        <p>Upload, sign digitally, track expiry. Get notified 60 days before any lease ends.</p>
      </div>
      <div class="feat" style="--c:var(--green)">
        <div class="feat-num">07</div>
        <div class="feat-accent"></div>
        <div class="feat-icon">🏢</div>
        <h4>Multi-Property</h4>
        <p>All your buildings in one dashboard. Switch properties in a tap. Each fully isolated.</p>
      </div>
      <div class="feat" style="--c:var(--gold)">
        <div class="feat-num">08</div>
        <div class="feat-accent"></div>
        <div class="feat-icon">⚡</div>
        <h4>AI Property Agent</h4>
        <p>Knows your portfolio. Acts on your commands. Voice or text. Powered by Claude.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── STATS ── -->
<div class="stats">
  <div class="stats-inner reveal">
    <div class="stat">
      <div class="stat-num">$0.80</div>
      <div class="stat-label">Min ACH Fee</div>
    </div>
    <div class="stat">
      <div class="stat-num">7</div>
      <div class="stat-label">Units in Beta</div>
    </div>
    <div class="stat">
      <div class="stat-num">3</div>
      <div class="stat-label">Properties</div>
    </div>
    <div class="stat">
      <div class="stat-num">$29</div>
      <div class="stat-label">Starting Price</div>
    </div>
  </div>
</div>

<!-- ── COMPARE ── -->
<section class="compare">
  <div class="compare-inner">
    <div class="reveal">
      <div class="section-eyebrow">The honest comparison</div>
      <h2 class="section-title">You shouldn't pay<br/><em>enterprise prices</em></h2>
      <p class="section-sub" style="color:var(--soft)">CommonGround is built for independent landlords — not corporations. The pricing reflects that.</p>
    </div>

    <table class="ctable reveal reveal-delay-1">
      <thead>
        <tr>
          <th>Feature</th>
          <th class="cg-col">CommonGround</th>
          <th>Buildium</th>
          <th>AppFolio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Starting price</td>
          <td class="cg-cell cg-val">$29/mo</td>
          <td>$58/mo</td>
          <td>$1.49/unit</td>
        </tr>
        <tr>
          <td>Mobile-first design</td>
          <td class="cg-cell"><span class="c-check">✓</span></td>
          <td><span class="c-cross">✗</span></td>
          <td><span class="c-cross">✗</span></td>
        </tr>
        <tr>
          <td>Building community forum</td>
          <td class="cg-cell"><span class="c-check">✓</span></td>
          <td><span class="c-cross">✗</span></td>
          <td><span class="c-cross">✗</span></td>
        </tr>
        <tr>
          <td>AI property agent</td>
          <td class="cg-cell"><span class="c-check">✓</span></td>
          <td><span class="c-cross">✗</span></td>
          <td><span class="c-cross">✗</span></td>
        </tr>
        <tr>
          <td>ACH payment fees</td>
          <td class="cg-cell cg-val">~$0.80 cap $5</td>
          <td>~1% no cap</td>
          <td>~1% no cap</td>
        </tr>
        <tr>
          <td>Rent collection</td>
          <td class="cg-cell"><span class="c-check">✓</span></td>
          <td><span class="c-check" style="color:#555">✓</span></td>
          <td><span class="c-check" style="color:#555">✓</span></td>
        </tr>
        <tr>
          <td>Built by an active landlord</td>
          <td class="cg-cell"><span class="c-check">✓</span></td>
          <td><span class="c-cross">✗</span></td>
          <td><span class="c-cross">✗</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ── PRICING ── -->
<section class="pricing" id="pricing">
  <div class="pricing-inner">
    <div class="reveal" style="text-align:center">
      <div class="section-eyebrow" style="text-align:center">Simple pricing</div>
      <h2 class="section-title" style="text-align:center">No surprises.<br/><em>No per-unit fees.</em></h2>
      <p class="section-sub" style="margin:0 auto;color:var(--soft);text-align:center">One flat price. All features. Cancel anytime.</p>
    </div>

    <div class="pricing-grid reveal reveal-delay-1">
      <div class="pcard-plan">
        <div class="plan-name">Starter</div>
        <div class="plan-price">
          <span class="plan-amount">$29</span>
          <span class="plan-period">/mo</span>
        </div>
        <div class="plan-units">Up to 10 units</div>
        <div class="plan-feats">
          <div class="plan-feat">Rent collection</div>
          <div class="plan-feat">Tenant messaging</div>
          <div class="plan-feat">Work order tracking</div>
          <div class="plan-feat">Lease management</div>
          <div class="plan-feat">Building forum</div>
          <div class="plan-feat">Ledger & P&L</div>
        </div>
        <button class="plan-btn outline" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSe3qYDTJpvrANQp95z4MIN0G9eX8JLPEhQ_hSJNZNx6eVixVQ/viewform','_blank')">Join Waitlist</button>
      </div>

      <div class="pcard-plan featured">
        <div class="plan-pop">MOST POPULAR</div>
        <div class="plan-name">Growth</div>
        <div class="plan-price">
          <span class="plan-amount">$59</span>
          <span class="plan-period">/mo</span>
        </div>
        <div class="plan-units">Up to 30 units</div>
        <div class="plan-feats">
          <div class="plan-feat">Everything in Starter</div>
          <div class="plan-feat">Multiple properties</div>
          <div class="plan-feat">AI property agent</div>
          <div class="plan-feat">Priority support</div>
          <div class="plan-feat">Custom domain</div>
          <div class="plan-feat">Analytics dashboard</div>
        </div>
        <button class="plan-btn green" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSe3qYDTJpvrANQp95z4MIN0G9eX8JLPEhQ_hSJNZNx6eVixVQ/viewform','_blank')">Join Waitlist</button>
      </div>

      <div class="pcard-plan">
        <div class="plan-name">Pro</div>
        <div class="plan-price">
          <span class="plan-amount">$99</span>
          <span class="plan-period">/mo</span>
        </div>
        <div class="plan-units">Unlimited units</div>
        <div class="plan-feats">
          <div class="plan-feat">Everything in Growth</div>
          <div class="plan-feat">Investor K-1 reports</div>
          <div class="plan-feat">Bank sync via Plaid</div>
          <div class="plan-feat">White label option</div>
          <div class="plan-feat">API access</div>
          <div class="plan-feat">Dedicated onboarding</div>
        </div>
        <button class="plan-btn outline" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSe3qYDTJpvrANQp95z4MIN0G9eX8JLPEhQ_hSJNZNx6eVixVQ/viewform','_blank')">Join Waitlist</button>
      </div>
    </div>
  </div>
</section>

<!-- ── TESTIMONIALS ── -->
<section class="testi">
  <div class="testi-inner">
    <div class="reveal">
      <div class="section-eyebrow">What landlords are saying</div>
      <h2 class="section-title">Early feedback<br/>from the <em>field</em></h2>
    </div>
    <div class="testi-grid reveal reveal-delay-1">
      <div class="tcard">
        <p class="tcard-quote">DoorLoop's payment fees are brutal. CommonGround runs ACH at roughly $0.80 capped at $5. That alone makes it worth switching.</p>
        <div class="tcard-author">
          <div class="tcard-av">C</div>
          <div>
            <div class="tcard-name">Clair</div>
            <div class="tcard-role">Property owner · Early beta reviewer</div>
          </div>
        </div>
      </div>
      <div class="tcard">
        <p class="tcard-quote">Really impressive — I've been blown away by what's possible with AI lately. The K-1 investor feature idea is a real gap in this market nobody is solving.</p>
        <div class="tcard-author">
          <div class="tcard-av">V</div>
          <div>
            <div class="tcard-name">Vin</div>
            <div class="tcard-role">Tech professional · Property investor</div>
          </div>
        </div>
      </div>
      <div class="tcard">
        <p class="tcard-quote">I can definitely see the value here. Overall, really impressive work for where it is. This could be an amazing product that active landlords will love.</p>
        <div class="tcard-author">
          <div class="tcard-av">J</div>
          <div>
            <div class="tcard-name">Industry Reviewer</div>
            <div class="tcard-role">Real estate professional</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── WAITLIST ── -->
<section class="waitlist" id="waitlist">
  <div class="waitlist-glow"></div>
  <div class="waitlist-inner reveal">
    <div class="section-eyebrow" style="text-align:center">Early access</div>
    <h2>Get in<br/><em>before launch.</em></h2>
    <p class="waitlist-sub">We're onboarding early users now. Join the waitlist and we'll reach out personally when your spot is ready.</p>

    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3qYDTJpvrANQp95z4MIN0G9eX8JLPEhQ_hSJNZNx6eVixVQ/viewform" target="_blank" style="display:block">
      <button class="wsubmit" style="width:100%">→&nbsp; Join the Waitlist</button>

    <p class="wnote">No spam. No pitch deck. Just a personal email when your spot is ready.</p>
  </div>
</section>

<!-- ── FOOTER ── -->
<footer>
  <div>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
      <svg width="36" height="36" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="56" width="60" height="4" rx="2" fill="#2ECC71" opacity=".35"/>
        <rect x="12" y="28" width="18" height="28" rx="3" stroke="#2ECC71" stroke-width="1.8" fill="none" opacity=".55"/>
        <rect x="31" y="14" width="18" height="42" rx="3" fill="#2ECC71" opacity=".15"/>
        <rect x="31" y="14" width="18" height="42" rx="3" stroke="#2ECC71" stroke-width="2.2" fill="none"/>
        <rect x="50" y="34" width="18" height="22" rx="3" stroke="#2ECC71" stroke-width="1.8" fill="none" opacity=".55"/>
        <rect x="37" y="44" width="6" height="12" rx="1.5" fill="#2ECC71" opacity=".9"/>
        <circle cx="21" cy="27" r="2.5" fill="#2ECC71" opacity=".8"/>
        <circle cx="40" cy="13" r="2.8" fill="#2ECC71"/>
        <circle cx="59" cy="33" r="2.5" fill="#2ECC71" opacity=".8"/>
        <path d="M21 27 Q40 10 59 33" stroke="#2ECC71" stroke-width="1.5" fill="none" stroke-dasharray="3 3" opacity=".5"/>
      </svg>
      <div>
        <div class="wordmark" style="font-size:20px">Common<span style="color:var(--green)">Ground</span></div>
        <div style="font-size:10px;color:#333;letter-spacing:.18em;text-transform:uppercase;margin-top:2px">Connected Living</div>
      </div>
    </div>
    <div class="footer-tagline">Property management, simplified · Upside Real Estate Development</div>
  </div>
  <div class="footer-right">
    <a href="mailto:info@getcommongroundai.com">info@getcommongroundai.com</a>
    <a href="#" onclick="window.open('/demo.html','_blank');return false;">Live Demo</a>
  </div>
</footer>

<!-- Netlify form handler -->
<form name="waitlist" netlify netlify-honeypot="bot-field" hidden>
  <input name="name"/><input name="email"/><input name="units"/>
</form>






<div id="demo-back-btn" style="position:fixed;top:12px;right:12px;z-index:99999;display:none">
  <a href="#" onclick="window.location.hash='';return false;" 
     style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:50px;background:rgba(0,0,0,.8);border:1px solid #333;color:#aaa;font-size:12px;font-weight:700;text-decoration:none;backdrop-filter:blur(10px)">
    ← Back to site
  </a>
</div>
</body>
</html>
