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
    
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv';
    main.appendChild(menuDiv);
    


    const pizza = new Dish('Pizza', 'Tomato sauce, mozzarella Fior di Latte, porchetta, red onion, lamb’s lettuce, marinated peperoncino pepper, mayonnaise sauce.', 7);
    const pizzaDiv = document.createElement('div');
    pizzaDiv.className = 'menu_item';
    pizzaDiv.innerHTML = `<h5>${pizza.name}</h5> <br>
                            ${pizza.description} <br>
                            Prize: ${pizza.prize}`;
    menuDiv.appendChild(pizzaDiv);
    
    const pasta = new Dish('Pasta', 'Tagliatelle in cream sauce with pieces of salmon, peas and sun-dried cherry tomatoes.', 8);
    const pastaDiv = document.createElement('div');
    pastaDiv.className = 'menu_item';
    pastaDiv.innerHTML = `<h5>${pasta.name}</h5> <br>
                            ${pasta.description} <br>
                            Prize: ${pasta.prize}`;
    menuDiv.appendChild(pastaDiv);

    const tortellini = new Dish('Risotto', 'Risotto with asparagus and sweet peas in cream sauce with mascarpone, white wine and Pecorino Romano.', 6);
    const tortelliniDiv = document.createElement('div');
    tortelliniDiv.className = 'menu_item';
    tortelliniDiv.innerHTML = `<h5>${tortellini.name}</h5> <br>
                                ${tortellini.description} <br>
                                Prize: ${tortellini.prize}`;
    menuDiv.appendChild(tortelliniDiv);

    const ravioli = new Dish('Spaghetti', 'Spaghetti in cream sauce and egg yolk with bacon and Grana Padano.', 7);
    const ravioliDiv = document.createElement('div');
    ravioliDiv.className = 'menu_item';
    ravioliDiv.innerHTML = `<h5>${ravioli.name}</h5> <br>
                            ${ravioli.description} <br>
                            Prize: ${ravioli.prize}`;
    menuDiv.appendChild(ravioliDiv);

}

export {
    menuRender
}

