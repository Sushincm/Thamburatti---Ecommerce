document.addEventListener('DOMContentLoaded', function () {
  const rotator = document.getElementById('topBarRotator');
  const messages = rotator.querySelectorAll('.top-bar-message');
  const total = messages.length;
  let index = 0;

  function switchMessage() {
    index = (index + 1) % total;
    const offset = -index * 1.4; // matches line-height in rem
    rotator.style.transform = `translateY(${offset}rem)`;
  }

  setInterval(switchMessage, 4000); // change every 4s
});
