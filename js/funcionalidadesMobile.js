const btn_list = document.querySelector(".hidden_tec_btn");
const btn_hidden = document.querySelector(".list_hidden");
const lista = document.querySelector(".lista_tecnologia");


function moveAnimation(event){
    if(event.target.classList == "hidden_tec_btn"){ 
        lista.classList.add("animation_lista");
        btn_list.style.visibility = "hidden"
    }
}
btn_list.addEventListener("click", moveAnimation);

function hiddenMenu(event){
    if(event.target.classList == "list_hidden"){
        lista.classList.remove("animation_lista");
        btn_list.style.visibility = "visible";
    }
}
btn_hidden.addEventListener("click", hiddenMenu)