/**
 * Projeto WebWolrd versão 1.1
 * @author Artur da Silva Rezende
 */

//A estrutura abaixo faz a transição da frase da logo aparecer e desaparecer 

var home = document.querySelector(".home"); //Essa variável esta recebendo a classe "home" do container <a>
var home_message = document.querySelector(".home-message"); //Essa variável esta recebendo a classe "home-message" da tag <p>
var logo_x = window.matchMedia("(max-width: 700px)"); //Essa variável controla a média query

home.addEventListener("mouseenter", message_logo_enter);
home.addEventListener("mouseleave", message_logo_leave);

function message_logo_enter() {
    home_message.style.opacity = "1";
    home_message.style.transition = "opacity 1s";

    if (logo_x.matches) {
        home_message.style.fontSize = "0px";
    } else {
        home_message.style.fontSize = "14px";
    }
}

function message_logo_leave() {
    home_message.style.opacity = "0";
    home_message.style.transition = "opacity 1s";
}

//A estrutura abaixo faz o controle de data no footer

var data_footer = document.querySelector(".data-footer");
window.addEventListener("load", data_atual);

function data_atual(){
    var data = new Date();
    var dayName = new Array ("domingo ", "segunda-feira ", "terça-feira ", "quarta-feira ", "quinta-feira ", "sexta-feira ", "sábado ");
    var monName = new Array ("janeiro ", "fevereiro ", "março ", "abril ", "maio ", "junho ", "agosto ", "outubro ", "novembro ", "dezembro ")
    data_footer.innerHTML = dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
}



