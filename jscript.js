// video section 

const btn = document.querySelector(".playv");
const close = document.querySelector(".closex");
const vcon = document.querySelector(".video");


btn.addEventListener('click' ,() => { 
     vcon.classList.add('show');
})
close.addEventListener('click' ,() =>{ 
     vcon.classList.remove('show');
})


//  another way to do the upper function

// var vdotoclose = document.querySelector(".video");

// function closetoggle(){
//     vdotoclose.classList.toggle("hide"); 
// }

// var vdotoshow = document.querySelector(".video");

// function vdotoggle(){
//     vdotoshow.classList.toggle("show"); 
// }

// news event effect

let sr = ScrollReveal({
    duration:2000,
    distance:"100px",
  });
  
//   sr.reveal(".nws-bdy-1");
  sr.reveal(".ev-bdy-1",{ origin:"bottom"});



// number counting

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue +=1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
})




//  slider fetured




