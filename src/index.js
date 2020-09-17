import {
    navRender,
    homeRender,
    menuRender,
    contactRender,
    aboutRender,
    homeRender1
} from './render';



import './style.css';


navRender();

homeRender1()

const homeBtn = document.querySelector('.nav_home');
const aboutBtn = document.querySelector('.nav_about');
const menuBtn = document.querySelector('.nav_menu');
const contactBtn = document.querySelector('.nav_contact');
const main = document.querySelector('main');
const burgerBtn = document.querySelector('.burger');
const burgerBott = document.querySelector('.b-bot');
const nav = document.querySelector('nav');



homeBtn.addEventListener('click', () => {
    main.innerHTML = '';
    content.appendChild(main);
    nav.classList.toggle('hidden');
    burgerBott.classList.toggle('b-bot-click');
    homeRender()}
    );


aboutBtn.addEventListener('click', () => {
    main.innerHTML = '';
    content.appendChild(main);
    nav.classList.toggle('hidden');
    burgerBott.classList.toggle('b-bot-click');
    aboutRender()}
    );

menuBtn.addEventListener('click', () => {
    main.innerHTML = '';
    content.appendChild(main);
    nav.classList.toggle('hidden');
    burgerBott.classList.toggle('b-bot-click');
    menuRender()}
    );

contactBtn.addEventListener('click', () => {
    main.innerHTML = '';
    content.appendChild(main);
    nav.classList.toggle('hidden');
    burgerBott.classList.toggle('b-bot-click');
    contactRender()}
    );

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    burgerBott.classList.toggle('b-bot-click');
})