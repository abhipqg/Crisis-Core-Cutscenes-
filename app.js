// List of chapters (from your YouTube playlist, oldest → newest).
// You need to fill this in manually by picking video IDs from your playlist.
const chapters = [
  { name: "Cutscene 1 – Prologue", youtubeId: "VIDEO_ID_1" },
  { name: "Cutscene 2 – Chapter 1", youtubeId: "VIDEO_ID_2" },
  { name: "Cutscene 3 – Chapter 2", youtubeId: "VIDEO_ID_3" },
  // … add all playlist videos here in correct order
];

const chapterListDiv = document.getElementById("chapter-list");
const playerContainer = document.getElementById("player-container");
const youtubePlayer = document.getElementById("youtube-player");

function loadChapter(chapter) {
  const videoUrl = `https://www.youtube.com/embed/${chapter.youtubeId}?rel=0&autoplay=1`;
  youtubePlayer.src = videoUrl;

  // show player
  document.body.classList.add("show-player");
}

function renderChapters() {
  chapters.forEach((chapter, idx) => {
    const div = document.createElement("div");
    div.className = "chapter-item";
    div.textContent = chapter.name;
    div.addEventListener("click", () => {
      loadChapter(chapter);
    });
    chapterListDiv.appendChild(div);
  });
}

// On load
window.addEventListener("DOMContentLoaded", () => {
  renderChapters();
});
