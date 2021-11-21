const btns = document.querySelectorAll(".menu__btn");
const subMenus = document.querySelectorAll(".menu__sub-menu");

const btnSmall = document.querySelector(".btn-menu");

function btnClicked(index) {
    btns[index].classList.toggle("on");
    subMenus[index].classList.toggle("on");
    
    for(let i = 0; i < btns.length; i++) {
        if (i != index) {
            if (btns[i].classList.contains("on")) {
                btns[i].classList.toggle("on");
                subMenus[i].classList.toggle("on");
            }
        } 
    }
}

function btnSmallCilcked() {
    btnSmall.classList.toggle("on");
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", 
        function() {
            btnClicked(i)
        }
    );
}

btnSmall.addEventListener("click", btnSmallCilcked);

