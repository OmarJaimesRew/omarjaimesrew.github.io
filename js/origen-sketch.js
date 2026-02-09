let video;
let cancion;
let cancion1;

const VIDEO_FPS = 29.97;
const ASPECT_RATIO = 9 / 16;
const MOVE_TIMEOUT_MS = 120;

let audioUnlocked = false;
let videoReady = false;
let canvas;
let hovering = false;
let lastMoveMs = 0;

function preload() {
  soundFormats('mp3');
  cancion = loadSound('data/Porno_flor_mezcla.mp3');
  cancion1 = loadSound('data/1r.mp3');
}

function setup() {
  const container = document.getElementById('origen-sketch');
  const size = getCanvasSize(container);
  canvas = createCanvas(size.w, size.h);
  canvas.parent(container);
  frameRate(30);
  canvas.mouseOver(() => {
    hovering = true;
  });
  canvas.mouseOut(() => {
    hovering = false;
  });

  video = createVideo('data/El_origen480_1.mp4');
  video.hide();
  video.volume(0);
  video.elt.muted = true;
  video.elt.playsInline = true;
  video.elt.preload = 'auto';
  video.elt.loop = true;
  video.elt.addEventListener('loadedmetadata', () => {
    videoReady = true;
    safePlayVideo();
  });
}

function draw() {
  background(0);

  if (!video || !videoReady) {
    return;
  }

  const active = isActive();

  if (active) {
    if (video.elt.paused) {
      safePlayVideo();
    }
  } else {
    if (!video.elt.paused) {
      video.elt.pause();
    }
    const dt = 1 / VIDEO_FPS;
    let target = video.elt.currentTime - dt;
    if (target <= 0) {
      target = 0;
    }
    video.elt.currentTime = target;
  }

  updateAudio(active);

  image(video, 0, 0, width, height);
}

function mouseMoved() {
  if (!hovering) return;
  lastMoveMs = millis();
  unlockAudio();
  triggerOneShot();
}

function touchStarted() {
  hovering = true;
  lastMoveMs = millis();
  unlockAudio();
  return false;
}

function touchMoved() {
  hovering = true;
  lastMoveMs = millis();
  unlockAudio();
  triggerOneShot();
  return false;
}

function touchEnded() {
  hovering = false;
  return false;
}

function windowResized() {
  const container = document.getElementById('origen-sketch');
  const size = getCanvasSize(container);
  resizeCanvas(size.w, size.h);
}

function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  userStartAudio();
}

function triggerOneShot() {
  if (cancion && cancion.isLoaded() && !cancion.isPlaying()) {
    cancion.play();
  }
}

function safePlayVideo() {
  if (!video || !video.elt) return;
  const promise = video.elt.play();
  if (promise && promise.catch) {
    promise.catch(() => {});
  }
}

function getVideoDuration() {
  if (!video || !video.elt) return 0;
  return video.elt.duration || 0;
}

function isActive() {
  if (!hovering) return false;
  return millis() - lastMoveMs <= MOVE_TIMEOUT_MS;
}

function updateAudio(active) {
  if (!audioUnlocked) return;

  if (active) {
    if (cancion1 && cancion1.isLoaded() && !cancion1.isPlaying()) {
      cancion1.loop();
    }
  } else {
    stopAudio();
  }
}

function stopAudio() {
  if (cancion && cancion.isPlaying()) {
    cancion.stop();
  }
  if (cancion1 && cancion1.isPlaying()) {
    cancion1.stop();
  }
}

function getCanvasSize(container) {
  const width = container && container.clientWidth ? container.clientWidth : 854;
  const height = Math.round(width * ASPECT_RATIO);
  return { w: width, h: height };
}
