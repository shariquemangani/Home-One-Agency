function stopMarquee() {
  const marqueeElement = document.querySelector("marquee");
  marqueeElement.stop();
}

function startMarquee() {
  const marqueeElement = document.querySelector("marquee");
  marqueeElement.start();
}

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 8, 3000);
  counter("count2", 0, 16, 2500);
  counter("count3", 0, 5, 3000);
  counter("count4", 0, 20, 3000);
});
