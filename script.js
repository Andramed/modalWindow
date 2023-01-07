'use strict'

const modalWindow = document.querySelector('.modal-window');
const divOverlay = document.querySelector('.overlay');
const divHiden = document.querySelector('.hidden');
const body = document.querySelector('body');


const btnShowModalWindow = document.querySelectorAll('.show-modal-window');
const btnCloseModalWindow = document.querySelector('.close-modal-window');

const addClass = (element, addedClass) => {
    element.classList.add(addedClass);
}
const removeClass = (element, removedClass) => {
	element.classList.remove(removedClass);
}
const closeModalWindow = () => {
		addClass(modalWindow, 'hidden');
		addClass(divOverlay, 'hidden')
}
const openModalWindow = () => {
	removeClass(modalWindow, 'hidden');
	removeClass(divOverlay, 'hidden');
}
const addEventListenerBtn = (btn1, btn2) => {
    for(let i = 0; i < btn1.length; i++) {
        btn1[i].addEventListener('click', openModalWindow);
        btn2.addEventListener('click', closeModalWindow);
        divOverlay.addEventListener('click', closeModalWindow);
		
    }
	document.addEventListener('keydown', function(event) {
		if(event.key == "Escape") {
				closeModalWindow();
		}
	})
	
}

addEventListenerBtn(btnShowModalWindow, btnCloseModalWindow);







