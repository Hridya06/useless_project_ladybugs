* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #080808;
  --card: rgba(20, 18, 12, 0.88);

  --yellow: #ffd21f;
  --yellow-bright: #fff06a;
  --red: #ff3030;
  --red-dark: #8f1111;

  --text: #fffdf2;
  --muted: #aaa697;

  --border: rgba(255, 210, 31, 0.16);
  --danger-border: rgba(255, 48, 48, 0.28);
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: "DM Sans", sans-serif;
  overflow-x: hidden;
}

button,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}


/* =========================
   BACKGROUND
========================= */

.background {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 20% 15%,
      rgba(255, 210, 31, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 80% 75%,
      rgba(255, 48, 48, 0.07),
      transparent 30%
    ),
    #080808;
}

.grid {
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(
      rgba(255, 210, 31, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 210, 31, 0.035) 1px,
      transparent 1px
    );

  background-size: 50px 50px;

  mask-image: linear-gradient(
    to bottom,
    black,
    transparent 85%
  );
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.16;
}

.blob-1 {
  width: 420px;
  height: 420px;
  background: var(--yellow);
  top: -200px;
  left: -150px;
}

.blob-2 {
  width: 380px;
  height: 380px;
  background: var(--red);
  right: -160px;
  top: 35%;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: var(--yellow);
  bottom: -180px;
  left: 35%;
  opacity: 0.08;
}

.scanlines {
  position: absolute;
  inset: 0;

  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 4px,
    rgba(255, 255, 255, 0.012) 5px
  );

  pointer-events: none;
}

.stars {
  position: absolute;
  inset: 0;
  color: rgba(255, 210, 31, 0.45);
  font-size: 18px;
}

.stars span {
  position: absolute;
}

.stars span:nth-child(1) {
  top: 15%;
  left: 12%;
}

.stars span:nth-child(2) {
  top: 28%;
  left: 82%;
}

.stars span:nth-child(3) {
  top: 72%;
  left: 15%;
}

.stars span:nth-child(4) {
  top: 60%;
  left: 72%;
}

.stars span:nth-child(5) {
  top: 85%;
  left: 48%;
}

.stars span:nth-child(6) {
  top: 12%;
  left: 58%;
}

.stars span:nth-child(7) {
  top: 45%;
  left: 92%;
}

.stars span:nth-child(8) {
  top: 90%;
  left: 88%;
}


/* =========================
   NAVIGATION
========================= */

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 76px;

  padding: 0 6%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 100;

  border-bottom: 1px solid rgba(255, 210, 31, 0.1);

  background: rgba(8, 8, 8, 0.72);

  backdrop-filter: blur(18px);
}

.logo {
  font-family: "Space Grotesk", sans-serif;

  font-size: 21px;
  font-weight: 700;

  letter-spacing: -0.5px;
}

.logo span {
  color: var(--yellow);
}

.step-indicator {
  color: var(--muted);

  font-size: 11px;

  text-transform: uppercase;

  letter-spacing: 2px;
}


/* =========================
   PAGE SYSTEM
========================= */

.page {
  display: none;

  min-height: 100vh;

  padding: 120px 6% 100px;

  align-items: center;
  justify-content: center;
}

.page.active {
  display: flex;

  animation:
    pageIn 0.45s ease both;
}

@keyframes pageIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* =========================
   HOME
========================= */

#homePage {
  text-align: center;
}

.hero {
  position: relative;

  max-width: 900px;

  width: 100%;

  margin: 0 auto;
}

.eyebrow {
  display: inline-block;

  margin-bottom: 24px;

  padding: 9px 16px;

  border: 1px solid var(--border);

  border-radius: 999px;

  background: rgba(255, 210, 31, 0.045);

  color: var(--yellow);

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 2px;

  text-transform: uppercase;

  box-shadow:
    0 0 25px rgba(255, 210, 31, 0.06);
}

.hero h1 {
  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(70px, 12vw, 150px);

  line-height: 0.9;

  letter-spacing: -7px;

  font-weight: 700;

  margin-bottom: 32px;

  text-shadow:
    0 0 40px rgba(255, 210, 31, 0.08);
}

.hero h1 span {
  color: var(--red);
}

.hero h2 {
  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(32px, 5vw, 58px);

  line-height: 1.05;

  letter-spacing: -2px;

  margin-bottom: 24px;
}

.hero h2 span {
  color: var(--yellow);
}

.hero-text {
  color: var(--muted);

  line-height: 1.8;

  font-size: 16px;

  margin-bottom: 38px;
}


/* =========================
   BUTTONS
========================= */

.main-button {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 30px;

  min-width: 230px;

  padding: 17px 23px;

  border: 1px solid rgba(255, 210, 31, 0.35);

  border-radius: 12px;

  background:
    linear-gradient(
      135deg,
      var(--yellow),
      #ff9d00
    );

  color: #080808;

  font-size: 15px;

  font-weight: 800;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;

  box-shadow:
    0 12px 40px rgba(255, 210, 31, 0.12);
}

.main-button:hover {
  transform: translateY(-3px);

  filter: brightness(1.08);

  box-shadow:
    0 18px 55px rgba(255, 210, 31, 0.25);
}

.main-button:active {
  transform: translateY(0);
}

.main-button:focus-visible,
.secondary-button:focus-visible,
#duck:focus-visible {
  outline: 2px solid var(--yellow);

  outline-offset: 4px;
}

.arrow {
  font-size: 20px;
}


/* =========================
   FLOATING NOTES
========================= */

.floating-note {
  position: absolute;

  padding: 10px 14px;

  border: 1px solid rgba(255, 210, 31, 0.13);

  border-radius: 8px;

  background: rgba(20, 18, 12, 0.82);

  color: var(--muted);

  font-size: 11px;

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.35);

  backdrop-filter: blur(10px);

  animation:
    noteFloat 4s ease-in-out infinite;
}

.note-one {
  top: 23%;
  left: 0;

  transform: rotate(-5deg);
}

.note-two {
  top: 42%;
  right: 0;

  transform: rotate(5deg);

  animation-delay: 1s;
}

.note-three {
  bottom: 5%;
  left: 5%;

  transform: rotate(-3deg);

  animation-delay: 2s;
}

@keyframes noteFloat {
  0%,
  100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -8px;
  }
}


/* =========================
   CONTENT CARD
========================= */

.content-card {
  width: min(700px, 100%);

  padding: 48px;

  border: 1px solid var(--border);

  border-radius: 24px;

  background: var(--card);

  box-shadow:
    0 30px 100px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(20px);
}

.page-number {
  margin-bottom: 20px;

  color: var(--yellow);

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 3px;
}

.warning-line {
  display: inline-block;

  margin-bottom: 18px;

  color: var(--red);

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 2px;
}

.content-card h2 {
  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(36px, 5vw, 55px);

  line-height: 1.05;

  letter-spacing: -2px;

  margin-bottom: 15px;
}

.content-card h2 span {
  color: var(--yellow);
}

.subtext {
  margin-bottom: 30px;

  color: var(--muted);
}


/* =========================
   TEXTAREA
========================= */

textarea {
  width: 100%;

  min-height: 180px;

  resize: vertical;

  padding: 20px;

  border: 1px solid var(--border);

  border-radius: 14px;

  outline: none;

  background: rgba(0, 0, 0, 0.3);

  color: var(--text);

  font-size: 15px;

  line-height: 1.6;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

textarea::placeholder {
  color: #65615a;
}

textarea:focus {
  border-color: rgba(255, 210, 31, 0.6);

  box-shadow:
    0 0 0 4px rgba(255, 210, 31, 0.07),
    0 0 30px rgba(255, 210, 31, 0.04);
}

.character-count {
  margin: 10px 0 25px;

  color: #66625a;

  font-size: 11px;
}


/* =========================
   ANALYSIS
========================= */

.analysis-container {
  width: min(650px, 100%);

  text-align: center;
}

.analysis-logo {
  margin-bottom: 40px;

  font-family: "Space Grotesk", sans-serif;

  font-size: 25px;

  font-weight: 700;
}

.analysis-logo span {
  color: var(--yellow);
}

.analysis-icon {
  width: 90px;
  height: 90px;

  margin: 0 auto 25px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 210, 31, 0.25);

  border-radius: 50%;

  background: rgba(255, 210, 31, 0.05);

  color: var(--yellow);

  font-size: 42px;

  animation:
    spin 1.4s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.analysis-label {
  margin-bottom: 12px;

  color: var(--muted);

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 3px;
}

.analysis-container h2 {
  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(28px, 4vw, 42px);

  margin-bottom: 28px;
}

.analysis-bar {
  width: 100%;

  height: 8px;

  overflow: hidden;

  border-radius: 99px;

  background: rgba(255, 255, 255, 0.07);
}

.analysis-progress {
  width: 0%;

  height: 100%;

  border-radius: inherit;

  background:
    linear-gradient(
      90deg,
      var(--yellow),
      var(--red)
    );

  transition:
    width 0.1s linear;

  box-shadow:
    0 0 18px rgba(255, 210, 31, 0.35);
}

.analysis-percent {
  margin: 10px 0 30px;

  color: var(--muted);

  font-size: 12px;
}

.analysis-status {
  display: flex;

  flex-direction: column;

  gap: 12px;

  text-align: left;
}

.status-row {
  display: flex;

  gap: 12px;

  align-items: center;

  color: #6e6a62;

  font-size: 13px;

  transition:
    color 0.3s ease;
}

.status-row.done {
  color: var(--text);
}

.status-row.done span:first-child {
  color: var(--yellow);
}

.analysis-result {
  margin-top: 30px;

  padding: 14px;

  border: 1px solid var(--border);

  border-radius: 10px;

  background: rgba(255, 210, 31, 0.025);

  color: var(--muted);

  font-size: 11px;

  letter-spacing: 1px;
}

.analysis-result span {
  color: var(--yellow);

  font-weight: 800;
}


/* =========================
   DUCK TASK
========================= */

.task-card {
  max-width: 750px;
}

.task-badge {
  display: inline-block;

  margin-bottom: 20px;

  padding: 7px 12px;

  border: 1px solid rgba(255, 48, 48, 0.3);

  border-radius: 6px;

  background: rgba(255, 48, 48, 0.07);

  color: var(--red);

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 1px;
}

.task-title {
  margin-top: 5px;

  color: var(--muted);
}

.task-title span {
  color: var(--yellow);

  font-weight: 800;
}

.useless-box {
  margin-top: 30px;

  padding: 20px;

  border: 1px solid var(--border);

  border-radius: 16px;

  background: rgba(0, 0, 0, 0.25);
}

.task-instruction {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-bottom: 15px;
}

.task-instruction > span {
  font-size: 32px;
}

.task-instruction p {
  color: var(--text);

  line-height: 1.4;
}

.task-instruction small {
  color: var(--muted);
}


/* =========================
   GAME AREA
========================= */

#gameArea {
  position: relative;

  width: 100%;

  height: 260px;

  overflow: hidden;

  border: 1px dashed rgba(255, 210, 31, 0.18);

  border-radius: 12px;

  background:
    radial-gradient(
      circle at center,
      rgba(255, 210, 31, 0.05),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.012);
}

.game-warning {
  position: absolute;

  top: 10px;

  left: 14px;

  color: rgba(255, 210, 31, 0.35);

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 2px;
}

#duck {
  position: absolute;

  top: 50%;
  left: 50%;

  width: 58px;
  height: 58px;

  border: 0;

  border-radius: 50%;

  background: rgba(255, 210, 31, 0.06);

  font-size: 31px;

  transform:
    translate(-50%, -50%);

  transition:
    left 0.2s ease,
    top 0.2s ease,
    transform 0.15s ease;

  filter:
    drop-shadow(
      0 0 8px rgba(255, 210, 31, 0.15)
    );
}

#duck:hover {
  transform:
    translate(-50%, -50%)
    scale(1.15);
}

#duck:disabled {
  cursor: default;

  opacity: 0.7;
}

.game-progress {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-top: 15px;

  color: var(--muted);

  font-size: 12px;
}

.game-progress-bar {
  flex: 1;

  height: 7px;

  overflow: hidden;

  border-radius: 99px;

  background: rgba(255, 255, 255, 0.07);
}

#gameProgress {
  width: 0%;

  height: 100%;

  border-radius: inherit;

  background:
    linear-gradient(
      90deg,
      var(--yellow),
      var(--red)
    );

  transition:
    width 0.2s ease;
}

.task-message {
  margin-top: 18px;

  text-align: center;

  color: #777269;

  font-size: 12px;

  font-style: italic;

  min-height: 18px;
}


/* =========================
   REWARD OVERLAY
========================= */

.reward-overlay {
  position: fixed;

  inset: 0;

  z-index: 1000;

  display: none;

  align-items: center;
  justify-content: center;

  padding: 30px;

  background: #030303;

  opacity: 0;

  pointer-events: none;
}

.reward-overlay.active {
  display: flex;

  animation:
    overlayIn 0.45s ease forwards;

  pointer-events: all;
}

@keyframes overlayIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.reward-loading {
  width: min(600px, 100%);

  text-align: center;
}

.reward-loading-small {
  margin-bottom: 18px;

  color: var(--red);

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 3px;
}

.reward-loading-title {
  margin-bottom: 30px;

  color: var(--yellow);

  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(28px, 6vw, 50px);

  font-weight: 700;

  letter-spacing: -2px;

  animation:
    loadingFlicker 1s infinite;
}

@keyframes loadingFlicker {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.72;
  }
}

.reward-loading-bar {
  width: 100%;

  height: 10px;

  overflow: hidden;

  border: 1px solid rgba(255, 210, 31, 0.25);

  background: rgba(255, 255, 255, 0.04);
}

.reward-loading-progress {
  width: 0%;

  height: 100%;

  background:
    linear-gradient(
      90deg,
      var(--yellow),
      var(--red)
    );

  box-shadow:
    0 0 25px rgba(255, 210, 31, 0.5);

  transition:
    width 0.08s linear;
}

.reward-loading-percent {
  margin-top: 12px;

  color: var(--muted);

  font-size: 12px;
}

.reward-loading-status {
  margin-top: 28px;

  color: #777269;

  font-size: 12px;

  font-family: monospace;
}

.database-unlocked {
  margin-top: 35px;

  color: var(--red);

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 3px;

  line-height: 1.8;

  opacity: 0;
}

.database-unlocked strong {
  color: var(--yellow);

  font-size: 24px;

  letter-spacing: 2px;
}

.database-unlocked.show {
  animation:
    unlockFlash 0.7s ease forwards;
}

@keyframes unlockFlash {
  0% {
    opacity: 0;

    transform:
      scale(0.8);
  }

  50% {
    opacity: 1;

    transform:
      scale(1.08);
  }

  100% {
    opacity: 1;

    transform:
      scale(1);
  }
}


/* =========================
   REWARD PAGE
========================= */

.reward-page {
  position: relative;
}

.reward-container {
  width: min(800px, 100%);

  text-align: center;
}

.reward-label {
  margin-bottom: 20px;

  color: var(--yellow);

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 3px;
}

.reward-container h2 {
  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(40px, 6vw, 70px);

  line-height: 1;

  letter-spacing: -3px;

  margin-bottom: 15px;
}

.reward-subtext {
  margin-bottom: 35px;

  color: var(--muted);
}


/* =========================
   EXCUSE CARD
========================= */

.excuse-reveal {
  position: relative;

  overflow: hidden;

  padding: 30px;

  border: 1px solid rgba(255, 210, 31, 0.25);

  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      rgba(255, 210, 31, 0.07),
      rgba(255, 48, 48, 0.04)
    ),
    rgba(15, 13, 8, 0.92);

  text-align: left;

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.4);

  opacity: 0;

  transform:
    translateY(30px)
    scale(0.96);
}

.excuse-reveal.reveal {
  animation:
    excuseReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1)
    forwards;
}

@keyframes excuseReveal {
  from {
    opacity: 0;

    transform:
      translateY(30px)
      scale(0.96);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}

.excuse-reveal::before {
  content: "";

  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 3px;

  background:
    linear-gradient(
      90deg,
      var(--yellow),
      var(--red),
      var(--yellow)
    );

  animation:
    cardScan 2.5s linear infinite;
}

@keyframes cardScan {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

.excuse-top {
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;

  color: var(--muted);

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 2px;
}

#finalExcuse {
  min-height: 90px;

  color: var(--text);

  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(20px, 3vw, 30px);

  line-height: 1.35;
}

.excuse-divider {
  height: 1px;

  margin: 25px 0;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 210, 31, 0.25),
      transparent
    );
}

.excuse-bottom {
  display: flex;

  align-items: center;
  justify-content: space-between;

  color: #625e56;

  font-size: 9px;

  letter-spacing: 1px;
}

.excuse-stamp {
  display: inline-block;

  margin-top: 25px;

  padding: 7px 10px;

  border: 1px solid rgba(255, 48, 48, 0.4);

  border-radius: 4px;

  color: var(--red);

  font-size: 9px;

  font-weight: 900;

  letter-spacing: 2px;

  transform:
    rotate(-3deg);
}


/* =========================
   REWARD BUTTONS
========================= */

.reward-actions {
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 12px;

  margin-top: 25px;

  flex-wrap: wrap;
}

.secondary-button {
  min-width: 200px;

  padding: 16px 20px;

  border: 1px solid rgba(255, 210, 31, 0.15);

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.035);

  color: var(--text);

  font-size: 14px;

  font-weight: 600;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    border-color 0.2s ease;
}

.secondary-button:hover {
  background: rgba(255, 210, 31, 0.06);

  border-color:
    rgba(255, 210, 31, 0.3);

  transform:
    translateY(-2px);
}

.copy-message {
  min-height: 20px;

  margin-top: 14px;

  color: var(--yellow);

  font-size: 12px;
}


/* =========================
   FOOTER
========================= */

footer {
  position: fixed;

  right: 0;
  bottom: 20px;
  left: 0;

  z-index: 10;

  text-align: center;

  color: #4e4a45;

  font-size: 10px;

  letter-spacing: 0.5px;

  pointer-events: none;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

  nav {
    height: 65px;

    padding: 0 5%;
  }

  .logo {
    font-size: 18px;
  }

  .page {
    padding: 100px 5% 80px;
  }

  .hero h1 {
    font-size: clamp(65px, 20vw, 100px);

    letter-spacing: -5px;
  }

  .hero h2 {
    font-size: 34px;
  }

  .hero-text {
    font-size: 14px;
  }

  .floating-note {
    display: none;
  }

  .content-card {
    padding: 28px 20px;

    border-radius: 18px;
  }

  .content-card h2 {
    font-size: 38px;
  }

  textarea {
    min-height: 150px;
  }

  #gameArea {
    height: 220px;
  }

  .reward-container h2 {
    font-size: 44px;
  }

  .excuse-reveal {
    padding: 22px;
  }

  #finalExcuse {
    font-size: 21px;
  }

  .reward-actions {
    flex-direction: column;
  }

  .reward-actions button {
    width: 100%;
  }

  .reward-loading-title {
    font-size: 30px;
  }

  footer {
    bottom: 10px;

    padding: 0 15px;
  }
}
