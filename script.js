function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.85;

  if(sections.length) {
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if(isSectionVisible) {
        section.classList.add('ativo');
      }
    })
  }
  animaScroll()

  window.addEventListener('scroll', animaScroll);
  } 
}
initAnimacaoScroll()

const linksMenu = document.querySelectorAll('.menu-ul a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
console.log(href);
}

linksMenu.forEach(ativarLink);