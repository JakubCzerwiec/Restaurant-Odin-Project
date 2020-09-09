


import {navRender} from './nav';
import {homeRender1, homeRender} from './home'
import {menuRender} from './menu';
import {contactRender} from './contact'
import {aboutRender} from './about'

const test = document.createElement('div');
test.innerHTML = `<h1>Welcome in restaurant!!</h1>`;






export {
    navRender,
    homeRender,
    menuRender,
    contactRender,
    aboutRender,
    homeRender1
}