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
                    progress_1.innerHTML = count + "%"
                } else if (count == 30) {
                    clearInterval(time)
                }
            }, .5000);

            let loatTimeMiddle = setInterval(() => {
                if (count <= 50) {
                    progress_2.style.width = count + "%";
                    progress_2.innerHTML = count + "%"
                } else if (count == 500) {
                    clearInterval(loatTimeMiddle)
                }
            }, .5000);

            let loatTimeLast = setInterval(() => {
                if (count <= 25) {
                    progress_3.style.width = count + "%";
                    progress_3.innerHTML = count + "%";
                } else if (count == 25) {
                    clearInterval(loatTimeMiddle)
                }
            }, .5000);

        }, 1000);

    }, .1000);

}
progressBars();

/*CLICANOD EM UMA DOS BUTTONS VOCÊ E DRIRECIONADO PARA A SECAÇÃO*/
const sobre = document.querySelector(".sobre");
const contato = document.querySelector(".contacts");
const projetos = document.querySelector(".projetos");

function selectMenu() {


    sobre.addEventListener("click", () => {
        window.scrollTo(0, 500);
    });
    projetos.addEventListener("click", () => {
        window.scrollTo(0, 1500);
    });
    contato.addEventListener("click", () => {
        window.scrollTo(0, 2000);
    });


}

selectMenu();






