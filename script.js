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


        addEventListeners();
        
}

    function dragStart() {
        //console.log('Event: ', 'dragstart');
        dragStartIndex = +this.closest('li').getAttribute('data-index');
        
    }

    function dragEnter() {
        //console.log('Event: ', 'dragstart');
        this.classList.add('over');
    }

    function dragLeave() {
        //console.log('Event: ', 'dragenter');
        this.classList.remove('over');
    }

    function dragOver(e) {
        e.preventDefault();
        

        //console.log('Event: ', 'dragover');
    }

    function dragDrop() {
        const dragEndIndex = +this.getAttribute('data-index');
        swapItems(dragStartIndex, dragEndIndex);

        this.classList.remove('over');

        //console.log('Event: ', 'dragdrop');
    }
        //Swap list items
    function swapItems(fromIndex, toIndex){
        const itemOne = listItems[fromIndex].querySelector('.draggable');
        const itemTwo  = listItems[toIndex].querySelector('.draggable');

        listItems[fromIndex].appendChild(itemTwo);
        listItems[toIndex].appendChild(itemOne);
        }
        //check the order of list items
    function checkOrder() {


    }
   
    function addEventListeners() {
        const draggables = document.querySelectorAll('.draggable');
        const dragListItems = document.querySelectorAll('.draggable-list li');

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', dragStart);
        });

        dragListItems.forEach(item => {
            item.addEventListener('dragover', dragOver);
            item.addEventListener('drop', dragDrop);
            item.addEventListener('dragenter', dragEnter);
            item.addEventListener('dragleave', dragLeave);

        });
    }

    check.addEventListener('click', checkOrder);
