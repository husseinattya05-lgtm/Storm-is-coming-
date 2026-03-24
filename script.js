const text = document.getElementById("text");

function typeText(content, speed = 40) {
  let i = 0;
  text.innerText = "";

  const interval = setInterval(() => {
    text.innerText += content[i];
    i++;
    if (i >= content.length) clearInterval(interval);
  }, speed);
}

function start() {

  const song = document.getElementById("song");
  const lightning = document.getElementById("lightning");

  // تشغيل الأغنية بصوت هادي
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
    typeText("Honestly… I don't think you should go out tomorrow 😌");
  }, 6000);

  setTimeout(() => {
    typeText("Stay home… get some rest… be safe 💛");
  }, 10000);

  setTimeout(() => {
    typeText("I’d honestly feel so much better knowing you're asleep and safe 🤍");
  }, 14000);
}