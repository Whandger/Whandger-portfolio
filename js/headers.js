const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    header.classList.add('shadow-md'); // adiciona a sombra
  } else {
    header.classList.remove('shadow-md'); // remove a sombra
  }
});