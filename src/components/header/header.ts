/*=============== SCROLL REVEAL ANIMATION ===============*/
export function scrollActive() {
  const sections: NodeListOf<HTMLElement> =
    document.querySelectorAll('section[id]');

  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(
      '.nav__menu a[href*=' + sectionId + ']',
    );

    if (scrollDown >= sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass?.classList.add('active-link');
    } else {
      sectionsClass?.classList.remove('active-link');
    }
  });
}
