class Dish {
    constructor(name, description, prize) {
        this.name = name;
        this.description = description;
        this.prize = prize;

    }
}


function menuRender () {
    
    const content = document.getElementById('content');

    const main = document.querySelector('main');
    main.innerHTML = '';
    content.appendChild(main);
    
    


    const pizza = new Dish('Pizza', 'Delicious', 7);
    const pizzaDiv = document.createElement('div');
    pizzaDiv.className = 'menu_item';
    pizzaDiv.innerHTML = `${pizza.name}
                            ${pizza.description}
                            ${pizza.prize}`;
    main.appendChild(pizzaDiv);
    
    const pasta = new Dish('Pasta', 'Fabulous', 8);
    const pastaDiv = document.createElement('div');
    pastaDiv.className = 'menu_item';
    pastaDiv.innerHTML = `${pasta.name}
                            ${pasta.description}
                            ${pasta.prize}`;
    main.appendChild(pastaDiv);

    const tortellini = new Dish('Tortellini', 'Glorious', 6);
    const tortelliniDiv = document.createElement('div');
    tortelliniDiv.className = 'menu_item';
    tortelliniDiv.innerHTML = `${tortellini.name}
                                ${tortellini.description}
                                ${tortellini.prize}`;
    main.appendChild(tortelliniDiv);

    const ravioli = new Dish('Ravioli', 'Gorgous', 7);
    const ravioliDiv = document.createElement('div');
    ravioliDiv.className = 'menu_item';
    ravioliDiv.innerHTML = `${ravioli.name}
                            ${ravioli.description}
                            ${ravioli.prize}`;
    main.appendChild(ravioliDiv);

}

export {
    menuRender
}

