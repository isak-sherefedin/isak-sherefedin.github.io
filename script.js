const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');
menuBtn.addEventListener('click',()=>navMenu.classList.toggle('open'));
document.querySelectorAll('#navMenu a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('open')));

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('nav a')];
window.addEventListener('scroll',()=>{
  const y=window.scrollY+120;
  let current='home';
  sections.forEach(s=>{if(y>=s.offsetTop) current=s.id});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});
