

function contactRender () {
    const content = document.getElementById('content');

    const main = document.querySelector('main');
    main.innerHTML = '';
    content.appendChild(main);

    const adress = document.createElement('div');
    adress.className = 'adress';
    main.appendChild(adress);

    const restName = document.createElement('p');
    restName.className = 'restName';
    restName.textContent = 'Fabulous restaurant';
    adress.appendChild(restName);

    const street = document.createElement('p');
    street.className = 'street';
    street.textContent = 'Awesome str. 2';
    adress.appendChild(street);

    const city = document.createElement('p');
    city.className = 'street';
    city.textContent = 'Krakow';
    adress.appendChild(city);

    const country = document.createElement('p');
    country.className = 'country';
    country.textContent = 'Poland';
    adress.appendChild(country);

    const phone = document.createElement('p');
    phone.className = 'phone';
    phone.textContent = '+48 123 456 789';
    adress.appendChild(phone);
}

export {
    contactRender
}