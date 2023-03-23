  burger=document.querySelector('.burger')
  navbr=document.querySelector('.navbr')
  navlst=document.querySelector('.navlst')

  burger.addEventListener("click",()=>{
    navbr.classList.toggle('h-nav-resp');
    navlst.classList.toggle('v-ul-resp');
    document.getElementById("home").style.backgroundSize="400px";
    
  })
