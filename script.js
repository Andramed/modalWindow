'use strict'

const modalWindow = document.querySelector('.modal-window');
const divOverlay = document.querySelector('.overlay');
const divHiden = document.querySelector('.hidden').te;
const body = document.querySelector('body');


const btnShowModalWindow = document.querySelectorAll('.show-modal-window');
const btnCloseModalWindow = document.querySelector('.close-modal-window');

const addClass = (element, addedClass) => {
    element.classList.add(addedClass);
}

const whereIsClick = (element) => {
    console.log(element);
    let clickedElement = element.addEventListener('click', function(event) {
        let elementClick = event.target.className;
    });
}                                                


const addEventListenerBtn = (btn1, btn2) => {
    console.log(btn1);
    for(let i = 0; i < btn1.length; i++) {
        btn1[i].addEventListener('click', function() {
            modalWindow.classList.remove('hidden');
            divOverlay.classList.remove('hidden');
        })

        btn2.addEventListener('click', function() {
            addClass(modalWindow, 'hidden');
            addClass(divOverlay, 'hidden')
        })
        divOverlay.addEventListener('click', function(){
            addClass(modalWindow, 'hidden');
            addClass(divOverlay, 'hidden')
        })
    }
}

addEventListenerBtn(btnShowModalWindow, btnCloseModalWindow);







