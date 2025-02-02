document.addEventListener('DOMContentLoaded', () => {
  const timerText = document.getElementById('timer-text');
  const progressCircle = document.getElementById('progress-circle');
  let currentTime = 0;
  const totalDuration = 180; // 3 минуты = 180 секунд

  function formatTime(minutes, seconds) {
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
  }

  function updateTimer() {
      let minutes = Math.floor(currentTime / 60);
      let seconds = currentTime % 60;

      timerText.textContent = formatTime(minutes, seconds);
  }

  function updateProgress() {
      const percent = currentTime / totalDuration;
      const offset = 565 - (percent * 565);
      progressCircle.style.strokeDashoffset = offset;
  }

  function tick() {
      if (currentTime < totalDuration) {
          currentTime += 1;
          updateTimer();
          updateProgress();
          setTimeout(tick, 1000);
      }
  }

  tick(); // Начинаем отсчёт
});