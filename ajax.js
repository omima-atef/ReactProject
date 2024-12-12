let spans = document.querySelector(".spans");
let links = document.querySelector(".links");
let bars = document.querySelector(".bars");
let xmark = document.querySelector(".xmark");
let input = document.querySelector("header .box-tape .links .input");
let arrow = document.querySelector("header .box-tape .links .input svg");
let options = document.querySelector(".options");
let z = true;
let a = true;
spans.onclick = function(){
    if(a){
        bars.style.display = "none";
        xmark.style.display = "inline-block";
        spans.style.transform = "rotateZ(180deg)";
        links.style.display = "flex";
        a = false;
    }
    else{
        xmark.style.display = "none";
        bars.style.display = "inline-block";
        spans.style.transform = "rotateZ(0deg)";
        links.style.display = "none";
        arrow.style.transform = "rotateZ(0deg)";
        options.style.display = "none";
        a = true;
        z = true;
    }
    
};


input.onclick = function(){
    if(z){
        arrow.style.transform = "rotateZ(180deg)";
        options.style.display = "flex";
        z = false;
    }
    else{
        arrow.style.transform = "rotateZ(0deg)";
        options.style.display = "none";
        z = true;
    }
    
};
