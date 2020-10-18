// JavaScript Document

// je maakt een variabele aan voor de button, je koppelt het element aan de variabele dmv queryselector. Als je op de button klikt roep je de functie veranderNu aan.
var button;
// alle buttons selecteren op de pagina
button = document.querySelectorAll('button');
// Alle buttons worden geselecteerd. In de variabele komt er een array van al die geselecteerde buttons.
// Een for loop om ervoor te zorgen dat de functie meerdere keren kan worden aangeroepen als erop geklikt wordt.
// button.length de lengte van de Array is het aantal buttons op de pagina.
//
for (var i = 0; button.length > i; i++) {
    button[i].addEventListener('click', veranderNu);
}
// this verwijst naar aangeklikte button[i]
function veranderNu() {

    verwijderClass();
// de functie onderaan het script wordt uitgevoerd.
    this.classList.add('anders');
// de class anders wordt toegevoegd aan de betreffende knop. Deze knop wordt grijs.
    var containsSort = this.classList.contains('sort');
// Een variabele wordt aangemaakt voor de buttons waar de class 'sort' op staat.
    var containsDate = this.classList.contains('date');
// Een variabele wordt aangemaakt voor de buttons waar de class 'date' op staat.


// Als er op een button geklikt wordt waar de class sort/date op staat dan worden deze elementen geselecteerd en opgeslagen in een variabele.
    if (containsSort) {
        var list_1 = document.querySelector('.list_1');
        var a_z = document.querySelector('.a_z');
        list_1.classList.remove('visible');
        list_1.classList.add('not-visible');


        a_z.classList.remove('not-visible');
        a_z.classList.add('visible');
    }

    if(containsDate){
        var list_1 = document.querySelector('.list_1');
        var a_z = document.querySelector('.a_z');
        list_1.classList.remove('not-visible');
        list_1.classList.add('visible');


        a_z.classList.remove('visible');
        a_z.classList.add('not-visible');
    }

};

// de class 'anders' wordt verwijderd. De knop wordt dus weer zwart als er op een andere knop geklikt wordt.
function verwijderClass() {
    button = document.querySelectorAll('button');
    for (var i = 0; button.length > i; i++) {
        button[i].classList.remove('anders');
    };
};
