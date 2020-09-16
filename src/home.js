import {cookFoto} from './img_import';

function homeRender1 () {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    main.innerHTML = '';

    const home = document.createElement('div');
    home.className = 'home';
    main.appendChild(home);

    const header = document.createElement('h1');
    header.className = 'home_header';
    header.textContent = 'Welcome to our fabulous restaurant';

    
    const cooks  = cookFoto;
    
    const cooksFoto = document.createElement('div')
    cooksFoto.className = 'cooks_foto';

    content.appendChild(main)
    home.appendChild(header)
    home.appendChild(cooksFoto)
    cooksFoto.appendChild(cooks)
}

function homeRender () {
    const content = document.getElementById('content');

    const main = document.querySelector('main');
    main.innerHTML = '';
    content.appendChild(main);

    const home = document.createElement('div');
    home.className = 'home';
    main.appendChild(home);

    const header = document.createElement('h1');
    header.className = 'home_header';
    header.textContent = 'Welcome to our fabulous restaurant';

    
    const cooks  = cookFoto;
    
    const cooksFoto = document.createElement('div')
    cooksFoto.className = 'cooks_foto';

    content.appendChild(main)
    home.appendChild(header)
    home.appendChild(cooksFoto)
    cooksFoto.appendChild(cooks)
}

export {
    homeRender1,
    homeRender
}