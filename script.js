const text = document.getElementById("text");

function typeText(content, speed = 50) {
  let i = 0;
  text.innerText = "";

  const interval = setInterval(() => {
    text.innerText += content[i];
    i++;
    if (i >= content.length) clearInterval(interval);
  }, speed);
}

function showSentence(sentence, delay) {
  setTimeout(() => {
    text.style.opacity = 0;

    setTimeout(() => {
      typeText(sentence);
      text.style.opacity = 1;
    }, 400);

  }, delay);
}

function start() {

  const song = document.getElementById("song");
  const lightning = document.getElementById("lightning");

  // تشغيل الأغنية تدريجي
  song.volume = 0;
  song.play();

  let vol = 0;
  let fade = setInterval(() => {
    if (vol < 0.3) {
      vol += 0.01;
      song.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);

  // وقف قبل النهاية بثانية
  song.addEventListener("timeupdate", () => {
    if (song.duration && song.currentTime >= song.duration - 1) {
      song.pause();
    }
  });

  // برق
  setInterval(() => {
    lightning.classList.add("flash");
    setTimeout(() => lightning.classList.remove("flash"), 300);
  }, 2000);

  // الجمل (كل واحدة لوحدها)
  showSentence("It's raining and thundering ⛈️", 2000);

  showSentence("I don't think you should go out tomorrow 😌", 7000);

  showSentence("Stay home, rest, and be safe 💛", 12000);

  showSentence("I will feel much better knowing you are safe and sleeping 🤍", 17000);
}