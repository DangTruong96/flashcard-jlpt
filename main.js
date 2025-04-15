// main.js
const DATA = {
  N3: {
    "Bài 1": [
      { ja: "時間（じかん）", vi: "Thời gian", ex: "時間がありません。", ex_vi: "Tôi không có thời gian.", furigana: "<ruby>時間<rt>じかん</rt></ruby>" },
      { ja: "秒（びょう）", vi: "Giây", ex: "あと五秒で始まります。", ex_vi: "Sẽ bắt đầu sau 5 giây nữa.", furigana: "<ruby>秒<rt>びょう</rt></ruby>" }
    ]
  },
  N4: {
    "Bài 1": [
      { ja: "学生（がくせい）", vi: "Học sinh", ex: "私は学生です。", ex_vi: "Tôi là học sinh.", furigana: "<ruby>学生<rt>がくせい</rt></ruby>" }
    ]
  },
  N5: {
    "Bài 1": [
      { ja: "猫（ねこ）", vi: "Con mèo", ex: "猫が好きです。", ex_vi: "Tôi thích mèo.", furigana: "<ruby>猫<rt>ねこ</rt></ruby>" }
    ]
  }
};

const levelSelect = document.getElementById("level");
const lessonSelect = document.getElementById("lesson");
const filterSelect = document.getElementById("filter");
const card = document.getElementById("flashcard");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");
const audioBtn = document.getElementById("audio-button");
const themeSelect = document.getElementById("theme");

let currentIndex = 0;
let currentList = [];
let knownWords = [];
let unknownWords = [];
let isDragging = false;
let startX = 0;

function populateLevels() {
  Object.keys(DATA).forEach(level => {
    const option = document.createElement("option");
    option.value = level;
    option.textContent = level;
    levelSelect.appendChild(option);
  });
  levelSelect.value = localStorage.getItem("lastLevel") || "N3";
  populateLessons();
}

function populateLessons() {
  lessonSelect.innerHTML = "";
  const lessons = DATA[levelSelect.value];
  Object.keys(lessons).forEach(lesson => {
    const option = document.createElement("option");
    option.value = lesson;
    option.textContent = lesson;
    lessonSelect.appendChild(option);
  });
  lessonSelect.value = localStorage.getItem("lastLesson") || lessonSelect.options[0].value;
  loadCards();
}

function loadCards() {
  const level = levelSelect.value;
  const lesson = lessonSelect.value;
  currentList = DATA[level][lesson];
  applyFilter();
  currentIndex = 0;
  updateCard();
  updateNotesPanel();
  updateProgressBar();
  localStorage.setItem("lastLevel", level);
  localStorage.setItem("lastLesson", lesson);
}

function updateCard() {
  if (currentList.length === 0) {
    front.textContent = "Không có từ nào";
    back.textContent = "";
    return;
  }
  const entry = currentList[currentIndex];
  front.innerHTML = entry.furigana || entry.ja;
  back.innerHTML = `<strong>${entry.vi}</strong><br><em>${entry.ex || ""}</em><br><span style='color:gray'>${entry.ex_vi || ""}</span>`;
  card.classList.remove("flipped");
  updateProgressBar();
}

function applyFilter() {
  const level = levelSelect.value;
  const lesson = lessonSelect.value;
  const all = DATA[level][lesson];
  const filter = filterSelect.value;
  currentList = all.filter((item, i) => {
    const key = `${level}-${lesson}-${i}`;
    const status = localStorage.getItem(key);
    if (filter === "known") return status === "known";
    if (filter === "unknown") return status === "unknown";
    return true;
  });
}

function markStatus(status) {
  const level = levelSelect.value;
  const lesson = lessonSelect.value;
  const item = currentList[currentIndex];
  const originalIndex = DATA[level][lesson].indexOf(item);
  const key = `${level}-${lesson}-${originalIndex}`;
  localStorage.setItem(key, status);

  knownWords = knownWords.filter(w => w.ja !== item.ja);
  unknownWords = unknownWords.filter(w => w.ja !== item.ja);

  if (status === "known") knownWords.push(item);
  else unknownWords.push(item);

  updateNotesPanel();
  updateProgressBar();
}

function updateNotesPanel() {
  const knownBox = document.getElementById("known-box");
  const unknownBox = document.getElementById("unknown-box");
  knownBox.innerHTML = knownWords.map(item => `<li>${item.ja} - ${item.vi}</li>`).join("");
  unknownBox.innerHTML = unknownWords.map(item => `<li>${item.ja} - ${item.vi}</li>`).join("");
}

function updateProgressBar() {
  const total = currentList.length;
  let known = 0;
  const level = levelSelect.value;
  const lesson = lessonSelect.value;
  currentList.forEach((item, i) => {
    const key = `${level}-${lesson}-${DATA[level][lesson].indexOf(item)}`;
    if (localStorage.getItem(key) === "known") known++;
  });
  const percent = total ? Math.round((known / total) * 100) : 0;
  const progress = document.getElementById("progress-inner");
  progress.style.width = `${percent}%`;
  progress.textContent = `${percent}%`;
}

function updateTheme() {
  const theme = localStorage.getItem("theme") || "light";
  themeSelect.value = theme;
  document.body.classList.toggle("dark", theme === "dark");
}

// Sự kiện
levelSelect.onchange = populateLessons;
lessonSelect.onchange = loadCards;
filterSelect.onchange = () => { loadCards(); };
themeSelect.onchange = () => {
  const theme = themeSelect.value;
  localStorage.setItem("theme", theme);
  document.body.classList.toggle("dark", theme === "dark");
};

document.getElementById("next").onclick = () => {
  card.classList.add("swipe-left");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % currentList.length;
    updateCard();
    card.classList.remove("swipe-left");
  }, 200);
};

document.getElementById("prev").onclick = () => {
  card.classList.add("swipe-right");
  setTimeout(() => {
    currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
    updateCard();
    card.classList.remove("swipe-right");
  }, 200);
};

document.getElementById("flip").onclick = () => {
  card.classList.toggle("flipped");
};

audioBtn.onclick = () => {
  const utter = new SpeechSynthesisUtterance(front.textContent);
  utter.lang = "ja-JP";
  speechSynthesis.speak(utter);
};

document.getElementById("mark-known").onclick = () => markStatus("known");
document.getElementById("mark-unknown").onclick = () => markStatus("unknown");

card.addEventListener("touchstart", e => startX = e.touches[0].clientX);
card.addEventListener("touchend", e => {
  const deltaX = e.changedTouches[0].clientX - startX;
  if (deltaX > 50) document.getElementById("prev").click();
  else if (deltaX < -50) document.getElementById("next").click();
});

card.addEventListener("mousedown", e => {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener("mouseup", e => {
  if (!isDragging) return;
  const deltaX = e.clientX - startX;
  if (deltaX > 50) document.getElementById("prev").click();
  else if (deltaX < -50) document.getElementById("next").click();
  isDragging = false;
});

updateTheme();
populateLevels();
