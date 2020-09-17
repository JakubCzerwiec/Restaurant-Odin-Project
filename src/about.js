

function aboutRender () {
    const main = document.querySelector('main');
    main.innerHTML = '';
    content.appendChild(main);

    const about = document.createElement('div');
    about.className = 'about';
    about.innerHTML = 'Welcome to our <p>Fabulous Restaurant</p> We are very happy to serve you with our best food. Cooking is our passion. Always the best quality ingredients. Italian cooking is all about family. We would like you to feel in our restaurant like you visit your favourous aunt in Tuscany. She is the best because she cooks the best food: always delicious pastas, crunchy pizza, and fantastic coffee at the end of the meal.'

    main.appendChild(about)
}

export {
    aboutRender
}