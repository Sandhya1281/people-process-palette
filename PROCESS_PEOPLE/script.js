const nav=document.getElementById('nav');
function onScroll(){
  const scrolled=window.scrollY>40;
  nav.classList.toggle('scrolled',scrolled);
}
window.addEventListener('scroll',onScroll);onScroll();

document.getElementById('hamburger').addEventListener('click',()=>{
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));

// Module accordion
document.querySelectorAll('#modules .module').forEach(m=>{
  m.querySelector('.module-head').addEventListener('click',()=>{
    const wasOpen=m.classList.contains('open');
    document.querySelectorAll('#modules .module').forEach(x=>x.classList.remove('open'));
    if(!wasOpen) m.classList.add('open');
  });
});

// FAQ accordion
document.querySelectorAll('#faqList .faq').forEach(f=>{
  f.querySelector('.faq-head').addEventListener('click',()=>f.classList.toggle('open'));
});

// IntersectionObserver fade-in
const io=new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('visible'), i*60);
      io.unobserve(e.target);
    }
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Top carousel
(function(){
  const track=document.getElementById('topbarTrack');
  const dotsWrap=document.getElementById('topbarDots');
  if(!track) return;
  const slides=track.children.length;
  let i=0;
  for(let k=0;k<slides;k++){
    const b=document.createElement('button');
    b.setAttribute('aria-label','Slide '+(k+1));
    b.addEventListener('click',()=>{i=k;render();reset();});
    dotsWrap.appendChild(b);
  }
  function render(){
    track.style.transform='translateX(-'+(i*100)+'%)';
    [...dotsWrap.children].forEach((d,k)=>d.classList.toggle('active',k===i));
  }
  let t=setInterval(next,4500);
  function next(){i=(i+1)%slides;render();}
  function reset(){clearInterval(t);t=setInterval(next,4500);}
  render();
})();
