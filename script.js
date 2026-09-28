function scrollCarousel(dir) {
  const el = document.getElementById('carousel');
  const card = el.querySelector('.tool-card');
  const gap = 18;
  el.scrollBy({
    left: dir * (card.offsetWidth + gap),
    behavior: 'smooth'
  });
}
