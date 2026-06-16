const fpsEl = document.getElementById("fps");
let lastFrame = performance.now();
let frames = 0;
let fps = 0;

function loop() {
  frames++;
  const now = performance.now();

  if (now - lastFrame >= 1000) {
    fps = frames;
    frames = 0;
    lastFrame = now;
    fpsEl.textContent = fps;
  }

  requestAnimationFrame(loop);
}

loop();

// HUD toggle
function toggleHUD() {
  const hud = document.getElementById("hud");
  hud.style.display = hud.style.display === "none" ? "block" : "none";
}

// fullscreen
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// fake motion blur toggle (visual effect placeholder)
let blur = false;
function toggleMotionBlur() {
  blur = !blur;
  document.body.style.filter = blur ? "blur(1px)" : "none";
}
