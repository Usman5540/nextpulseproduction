const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{
  const open=links.style.display==='flex';
  links.style.display=open?'none':'flex';
  links.style.position='absolute'; links.style.top='76px'; links.style.left='0'; links.style.right='0';
  links.style.padding='22px'; links.style.background='#0a0a0b'; links.style.flexDirection='column';
  links.style.borderBottom='1px solid #27272a';
});
