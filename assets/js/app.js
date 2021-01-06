const txt_input_nom = document.querySelector('.js-txt-input')
const btn_input = document.querySelector('.js-btn-input')
const btnTrash = document.querySelectorAll('.clear-task')

const listTodo = document.querySelector('.js-ul-currentTask')
const listDone = document.querySelector('.js-ul-taskDone')

const txt_counter = document.querySelector('.js-count-tasks')


class Task {
    constructor(nom, date) {
        this.date = new Date().toLocaleDateString()
        this.nom = nom
    }
}

function createNewTask() {
    if (txt_input_nom.value != "") {
        let add_task = new Task()
        add_task.nom = txt_input_nom.value

        console.log(add_task);
        addTask(add_task);
    }
}

function addTask(addtask) {
    let newLi = document.createElement("li");
    let newDiv = document.createElement("div");
    let newSpan = document.createElement("span");
    let newButton = document.createElement("button");
    $(newButton).click(function(e) {
        removeTask(e)
    });
    let newI = document.createElement("i");

    $(newLi).addClass("list-group-item d-flex justify-content-between align-items-center mix_all_tasks");
    newLi.textContent = addtask.nom
    listTodo.append(newLi)

    // $(newDiv).addClass(className);
    newLi.append(newDiv);

    $(newSpan).addClass("badge badge-primary");
    newSpan.textContent = addtask.date
    newDiv.append(newSpan);

    $(newButton).addClass("btn btn-outline-primary clear-task");
    newDiv.append(newButton);

    $(newI).addClass("fas fa-trash");
    newButton.append(newI)
}

function countList() {
    txt_counter.textContent = listTodo.children.length
}

function removeTask(e) {
    let currentTarget = e.currentTarget
    console.log(currentTarget.parentNode.parentNode);
    let liParent = currentTarget.parentNode.parentNode
    if (liParent.nodeName == "LI") {
        liParent.remove()
    } else alert('Une erreur est survenue')
    countList()
}

$(btn_input).click(function(e) {
    createNewTask();
    countList();
});