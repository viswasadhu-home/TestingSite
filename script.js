const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const currentTimeEl = document.getElementById('current-time');

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = seconds * 6 + (now.getMilliseconds() / 1000) * 6; // 360/60
  const minutesDegrees = minutes * 6 + seconds * 0.1; // 360/60 + smooth motion
  const hoursDegrees = ((hours % 12) * 30) + (minutes * 0.5) + (seconds * (0.5 / 60)); // 360/12

  secondHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hoursDegrees}deg)`;

  currentTimeEl.textContent = now.toLocaleTimeString();
}

setClock();
setInterval(setClock, 1000);
