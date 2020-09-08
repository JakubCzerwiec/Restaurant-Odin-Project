const content = document.getElementById('content');

const test = document.createElement('div');
test.innerHTML = `<h1>Welcome in restaurant!!</h1>`;

function addDiv () {
    content.appendChild(test)
}

export {addDiv}