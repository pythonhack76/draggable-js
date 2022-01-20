const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');


const richestPeople = [
    'pippo',
    'pluto',
    'paperino',
    'ziopaperone',
    'clarabella',
    'gambadilegno',
    'paperina',
    'topolino',
    'topolina',
    'minnie'

];

//memorizza listitems
const listItems = [];

let dragStartIndex;

createList();



//inserisci lista items

function createList() {

        [...richestPeople]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a,b) => a.sort - b.sort)
        .map( a => a.value)
        .forEach((person, index) => {
            const listItem = document.createElement('li');

            //listItem.classList.add('over');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
            </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });
}
