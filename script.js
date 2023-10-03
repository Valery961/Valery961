let shirt=document.getElementById("shirt")
let line=document.getElementById("line")
let dress=document.getElementById("dress")
document.body.onscroll=function() {

    console.log("dist: "+dress.getBoundingClientRect().top+"window:"+window.innerHeight);
    let dist=(dress.getBoundingClientRect().top-window.innerHeight)/4+190
    dress.style.transform="translateX("+dist+"%)"
        let dist1=(shirt.getBoundingClientRect().top-window.innerHeight)/4+160
    shirt.style.transform="translateX("+dist1+"%)"
}

function moveline(timestamp){
  console.log(6);
  line.style.transform="translateX(100px)"
    requestAnimationFrame(moveline);
  }
  
  requestAnimationFrame(moveline);


