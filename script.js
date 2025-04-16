const list = document.getElementById('textList');

list.addEventListener('mouseenter', () => {
  list.classList.add('reveal');
});

list.addEventListener('mouseleave', () => {
  list.classList.remove('reveal');
});
