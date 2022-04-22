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

function verificationScroll(){
    if(window.pageYOffset > 100){

        btnUp.style.display = "block";

    }else{

        btnUp.style.display = "none";
    }
}
window.addEventListener("scroll",verificationScroll);

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









