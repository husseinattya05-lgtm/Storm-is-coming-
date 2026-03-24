const text = document.getElementById("text");

function typeText(content, speed = 40) {
  let i = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    text.innerText = "";
    text.style.opacity = 1;

    const interval = setInterval(() => {
      text.innerText += content[i];
      i++;
      if (i >= content.length) clearInterval(interval);
    }, speed);
  }, 300);
}

function start() {

  const song = document.getElementById("song");
  const lightning = document.getElementById("lightning");

  // تشغيل الأغنية تدريجي
  song.volume = 0;
  song.play();

  let vol = 0;
  let fade = setInterval(() => {
    if (vol < 0.25) {
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

  // الرسائل
  setTimeout(() => {
    typeText("It's raining… and thundering ⛈️");
  }, 2000);

  setTimeout(() => {
    typeText("Honestly…\nI don't think you should go out tomorrow 😌");
  }, 7000);

  setTimeout(() => {
    typeText("Stay home…\nget some rest…\nbe safe 💛");
  }, 12000);

  setTimeout(() => {
    typeText("I’d honestly feel so much better\nknowing you're asleep and safe 🤍");
  }, 17000);
}