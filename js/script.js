///////////////////////////////////////////////////////////
// Setting current year on Copyright content
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Mobile nav button functionality
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const navLinkList = document.querySelectorAll('.main-nav-link');

btnNavEl.addEventListener('click', (event) =>
  headerEl.classList.toggle('nav-open'),
);

navLinkList.forEach((navLink) =>
  navLink.addEventListener('click', (event) =>
    headerEl.classList.toggle('nav-open'),
  ),
);

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    console.log(entry);
    if (!entry.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  },
);

obs.observe(sectionHeroEl);
