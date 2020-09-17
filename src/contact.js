

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
    restName.innerText = 'Fabulous Restaurant';
    adress.appendChild(restName);

    const street = document.createElement('p');
    street.className = 'street';
    street.innerText = 'Awesome st. 2';
    adress.appendChild(street);

    const city = document.createElement('p');
    city.className = 'street';
    city.innerText = '30-069 Krakow';
    adress.appendChild(city);

    const country = document.createElement('p');
    country.className = 'country';
    country.innerText = 'Poland';
    adress.appendChild(country);

    const phone = document.createElement('p');
    phone.className = 'phone';
    phone.innerText = '+48 123 456 789';
    adress.appendChild(phone);
}

export {
    contactRender
}