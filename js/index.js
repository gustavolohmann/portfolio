

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
            top: 3000,
            behavior: 'smooth',
        });

    });
}

selectMenu();

/*
    Carrossel de arquivos de imagem
*/
const img_projetos_modal = document.querySelector(".img_projetos_modal");
const button_right_ = document.getElementById("button_right_");

let count = 0;
const obj_img_projetos = {
    img: ["portifolio_2.png", "portifolio_3.png", "portifolio_.png", "home.png", "portfolio.png"],
    change: function (count) {
        img_projetos_modal.src = "../img/" + this.img[count];
    }
}
obj_img_projetos.change(count);

function troca_img() {
    let size = obj_img_projetos.img.length;
    count = count + 1;
    if (count >= size) {
        count = 0;
    }
    obj_img_projetos.change(count);
}
button_right_.addEventListener("click", troca_img);




