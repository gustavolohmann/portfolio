const progress_1 = document.querySelector(".alert_1");
const progress_2 = document.querySelector(".alert_2");
const progress_3 = document.querySelector(".alert_3");

const contador = document.querySelector(".count")


function progressBars() {

    document.addEventListener("load", () => {

        let loadTime = setTimeout(() => {
            let count = 0;
            let time = setInterval(() => {
                count++;
                if (count <= 30) {
                    progress_1.style.width = count + "%";
                    progress_1.innerHTML = count + "%";
                } else if (count == 30) {
                    clearInterval(time)
                }
            }, .100);

            let loatTimeMiddle = setInterval(() => {
                if (count <= 50) {
                    progress_2.style.width = count + "%";
                    progress_2.innerHTML = count + "%"
                } else if (count == 500) {
                    clearInterval(loatTimeMiddle)
                }
            }, .100);

            let loatTimeLast = setInterval(() => {
                if (count <= 25) {
                    progress_3.style.width = count + "%";
                    progress_3.innerHTML = count + "%";
                } else if (count == 25) {
                    clearInterval(loatTimeLast)
                }
            }, .100);

        }, 1000);

    }, 1000);

}
progressBars();

/*CLICANOD EM UMA DOS BUTTONS VOCÊ E DRIRECIONADO PARA A SECAÇÃO*/
const btnUp = document.querySelector(".up_to");
const sobre = document.querySelector(".sobre");
const contato = document.querySelector(".contacts");
const projetos = document.querySelector(".projetos");

function verificationScroll() {
    if (window.pageYOffset > 100) {

        btnUp.style.display = "block";

    } else {

        btnUp.style.display = "none";
    }
}
window.addEventListener("scroll", verificationScroll);

function selectMenu() {
    btnUp.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    sobre.addEventListener("click", () => {
        window.scrollTo({
            top: 250,
            behavior: 'smooth',
        });
    });

    projetos.addEventListener("click", () => {
        window.scrollTo({
            top: 900,
            behavior: 'smooth',
        });
    });
    contato.addEventListener("click", () => {
        window.scrollTo({
            top: 1700,
            behavior: 'smooth',
        });

    });
}

selectMenu();

/* Abre modal de projeto*/

const fecha_modal = document.getElementById("fecha_modal");
const abre_modal_projetos = document.getElementById("abre_modal_projetos");
const mais_projetos = document.querySelector(".mais_projetos");

function openModal() {
    mais_projetos.classList.add("animation_open_modal");
}
abre_modal_projetos.addEventListener("click", openModal);


function hiddenModalProjetos() {
    mais_projetos.classList.remove("animation_open_modal");

}
fecha_modal.addEventListener("click", hiddenModalProjetos);


/*
    troca de arquivos de imagem
*/


const img_projetos_modal = document.querySelector(".img_projetos_modal");


const button_right_ = document.getElementById("button_right_");

let count = 0;
const obj_img_projetos = {
    img: ["portifolio_2.png", "portifolio_3.png","portifolio_.png"],
    change: function (count) {

        img_projetos_modal.src = "../img/" + this.img[count];
    }
}
obj_img_projetos.change(count);

function troca_img() {

    let size = obj_img_projetos.img.length;
    count = count + 1;
    if(count >= size){
        count = 0;
    }
    obj_img_projetos.change(count);
    

}
button_right_.addEventListener("click", troca_img);


