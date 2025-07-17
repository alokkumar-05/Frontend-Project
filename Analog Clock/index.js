setInterval(() => {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const hourDeg = 30 * hour + minute / 2;
  const minuteDeg = 6 * minute;
  const secondDeg = 6 * second;

  document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}, 1000);
