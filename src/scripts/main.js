import ScrollReveal from 'scrollreveal';

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true, // Animations repeat
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: 'right' });
sr.reveal(
  `.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data`,
  {
    origin: 'left',
  },
);
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
