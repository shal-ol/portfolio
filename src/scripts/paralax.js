const paralax = document.querySelector(".paralax")
const layers = paralax.children
if (window.screen.width > 768)
{function moveLayers(wScroll){

  Array.from(layers).forEach( layer =>{

    const divider = layer.dataset.speed;
    const strafe = - wScroll * divider * 0.1 + '%';
    const transformStr = 'translate3d(0,'+ strafe + ', 0)';
  
    layer.style.transform = transformStr;
  
  
  });
  
}


window.addEventListener("scroll", e=>{
  const wScroll = window.pageYOffset;
  moveLayers(wScroll);

})
}