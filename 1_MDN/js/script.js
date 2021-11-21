const btns = document.querySelectorAll(".menu__btn");
const subMenus = document.querySelectorAll(".menu__sub-menu");

function btnClicked(index) {
    btns[index].classList.toggle("on");
    subMenus[index].classList.toggle("on");
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", 
        function() {
            btnClicked(i)
        }
    );
}

