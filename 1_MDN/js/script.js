const header = document.querySelector('#header');
const btns = header.querySelectorAll(".menu__btn");
const subMenus = header.querySelectorAll(".menu__sub-menu");

const btnSmall = header.querySelector(".btn-menu");
const dim = header.querySelector('.dim');

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

function btnSmallClicked() {
    btnSmall.classList.toggle("on");
    if (btnSmall.innerText == "menu") {
        btnSmall.textContent = "menu_open";
    } else {
        btnSmall.textContent = "menu";
    }
}

// media query

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", 
        function() {
            btnClicked(i)
        }
    );
}

btnSmall.addEventListener("click", btnSmallClicked);

// dim

dim.addEventListener('click', function(event) {
    if (event.target.classList.contains('dim')) {
        btnSmallClicked();
    }
});