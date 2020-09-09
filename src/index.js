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

homeBtn.addEventListener('click', () => {
    main.innerHTML = '';
    content.appendChild(main);
    homeRender()}
    );


aboutBtn.addEventListener('click', () => {
    main.innerHTML = '';
    content.appendChild(main);
    aboutRender()}
    );

menuBtn.addEventListener('click', () => {
    main.innerHTML = '';
    content.appendChild(main);
    menuRender()}
    );

contactBtn.addEventListener('click', () => {
    main.innerHTML = '';
    content.appendChild(main);
    contactRender()}
    );