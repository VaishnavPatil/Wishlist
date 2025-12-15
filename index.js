let todoInput = document.querySelector(".input");
let addToDoButton = document.querySelector(".button");
let showTodo = document.querySelector(".to-do-continer");
let todo
let todolist = [];

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

addToDoButton.addEventListener("click", (e)=>
{
    e.preventDefault();
    todo = todoInput.value;
    if(todo.length > 0)
    {
        todolist.push({id : uuid(), todo, isCompleted : false});
    }
    renderTodoList(todolist);
})

showTodo.addEventListener("click", (e)=>
{
    console.log("clicked");
})

function renderTodoList(todolist)
{
    showTodo.innerHTML = todolist.map(({id, todo, isCompleted})=> `<div><input id="item-${id}" type="checkbox"><label for="item-${id}" class="todo" data-key=${id}>${todo}</label><button>Delete</button></div>`);
}
renderTodoList(todolist);