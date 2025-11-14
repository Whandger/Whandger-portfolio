const step = 543; // cada “bloco” de scroll
    let scrollY = 0;  // posição atual controlada
    let ticking = false;

    window.addEventListener('wheel', (e) => {
      e.preventDefault(); // impede scroll natural
      if (!ticking) {
        if (e.deltaY > 0) {
          scrollY += step; // scroll pra baixo
        } else {
          scrollY -= step; // scroll pra cima
          if (scrollY < 0) scrollY = 0;
        }
        window.scrollTo({
          top: scrollY,
          behavior: 'smooth'
        });
        ticking = true;
        setTimeout(() => ticking = false, 300); // espera animação terminar
      }
    }, { passive: false });