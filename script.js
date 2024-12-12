let boxCard = [...document.querySelectorAll(".card .box-text > div:not(.click)")];
let click = document.querySelectorAll(".card .box-text .click i");
let span = document.querySelector(".card .box-text .click span");
let img = document.querySelectorAll(".card .box-img > img");

click.forEach((e) => {
    e.addEventListener("click", () => {
        let num = parseInt(document.querySelector("div.this").getAttribute("data-num")) -1;
        boxCard[num].classList.remove("this");
        img[num].classList.remove("this");
        if(e.classList.contains('right')){
            if((num + 1) === boxCard.length ){
                num = 0;
                thisClass(num);
            }else{
                num += 1;
                thisClass(num);
            }
        }else{
            if((num) === 0 ){
                num = boxCard.length -1;
                thisClass(num);
            }else{
                num = num -1;
                thisClass(num);
            }
        }
    })
})

function thisClass(num) {
    boxCard[num].classList.add("this")
    img[num].classList.add("this")
    span.style.left = `${(num) * 25}%`;
}