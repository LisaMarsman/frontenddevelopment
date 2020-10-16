// JavaScript Document

// je maakt een variabele aan voor de button, je koppelt het element aan de variabele dmv queryselector. Als je op de button klikt roep je de functie veranderNu aan.
var button;
// alle buttons selecteren op de pagina
button = document.querySelectorAll('button');
// Alle buttons worden geselecteerd. In de variabele komt er een array van al die geselecteerde buttons.
for(var i=0; button.length > i; i++){
    button[i].addEventListener('click', veranderNu);
}
// this verwijst naar aangeklikte button[i]
function veranderNu(){
    verwijderClass();
     this.classList.add('anders');
     var containsSort = this.classList.contains('sort');
    if(containsSort){
        var list_1 = document.querySelector('.list_1');
        var a_z = document.querySelector('.a_z');
        list_1.classList.remove('visible');
        list_1.classList.add('not-visible');


        a_z.classList.remove('not-visible');
        a_z.classList.add('visible');

    }

};

function verwijderClass(){
    button = document.querySelectorAll('button');
    for(var i=0;  button.length > i; i++){
        button[i].classList.remove('anders');
    }
}
