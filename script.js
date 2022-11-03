const form = document.getElementById('form');
const button = document.getElementById('button');
const taskList = document.getElementById('list-of-tasks');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formEntry = Object.fromEntries(new FormData(e.target).entries());
    formEntry['done'] = false;
    postData(formEntry);
});

function makeDeleteButton(x) {
    x.setAttribute('id', 'delete-button');
    const trashImg = document.createElement('i');
    trashImg.setAttribute('class', 'fa fa-trash-o')
    x.appendChild(trashImg);
}

function makeCheckbox(x) {
    x.setAttribute('type', 'checkbox');
    // x.setAttribute('onclick', 'check(this)');
    x.setAttribute('id', 'checkbox');
}


function addToList(y, z) {
    const newLi = document.createElement('li');
    const text = document.createTextNode(y);
    const deleteButton = document.createElement('button');
    const checkbox = document.createElement('input');
    makeCheckbox(checkbox);
    makeDeleteButton(deleteButton);
    newLi.appendChild(checkbox);
    newLi.appendChild(text);
    newLi.appendChild(deleteButton);
    taskList.appendChild(newLi);
    checkbox.addEventListener('change', (e) => {
        if (checkbox.checked){
            putData(z, {'done': true});
            newLi.style = "text-decoration: line-through;";
        } else{
           newLi.style = "text-decoration: none;" 
           putData(z, {'done': false});
        };
    })
    deleteButton.addEventListener('click', (e) => {
    deleteData(z);
    })
};


