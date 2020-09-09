

function navRender () {
    const content = document.getElementById('content');

    const nav = document.createElement('nav');

    const list = document.createElement('ul');
    list.className = 'menu';

    const li1 = document.createElement('li');
    li1.className= 'nav_home';
    li1.textContent = 'HOME';
    list.appendChild(li1);

    const li2 = document.createElement('li');
    li2.className = 'nav_about';
    li2.textContent = 'ABOUT';
    list.appendChild(li2);

    const li3 = document.createElement('li');
    li3.className = 'nav_menu';
    li3.textContent = 'MENU';
    list.appendChild(li3);

    const li4 = document.createElement('li');
    li4.className = 'nav_contact';
    li4.textContent = 'CONTACT';
    list.appendChild(li4);

    content.appendChild(nav)
    nav.appendChild(list)
}

export {
    navRender
}