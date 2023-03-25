const menuBtn = document.querySelector('.menu_btn');
const headerNavMobile = document.querySelector('.header_nav_mobile');
const btnCloseNav = document.querySelector('.btn_close_nav');
const navHome = document.querySelector('.nav_home');
const navProgram = document.querySelector('.nav_program');
const navJoin = document.querySelector('.nav_join');
const navSponsor = document.querySelector('.nav_sponsor');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

navHome.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

navProgram.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

navJoin.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

navSponsor.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});