// Copy IP button
document.getElementById("copy-btn").addEventListener("click", () => {
  const ip = document.getElementById("server-ip").innerText;
  navigator.clipboard.writeText(ip);
  alert("Server IP copied: " + ip);
});

// Global sound system
const audio = new Audio("song.mp3"); // NOTE: place your song file in the same folder
audio.loop = true;
let playing = false;

document.getElementById("sound-btn").addEventListener("click", () => {
  if (!playing) {
    audio.play();
    document.getElementById("sound-btn").innerText = "Stop Music";
  } else {
    audio.pause();
    document.getElementById("sound-btn").innerText = "Play Music";
  }
  playing = !playing;
});
function showTier(tier) {
  alert("Tier: " + tier);
}

