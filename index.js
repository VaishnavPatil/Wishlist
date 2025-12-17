let todoInput = document.querySelector(".input");
let addToDoButton = document.querySelector(".button");
let showTodo = document.querySelector(".to-do-continer");
let todo
let localData = JSON.parse(localStorage.getItem("todo"));
let todolist = localData || [];

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
    localStorage.setItem("todo", JSON.stringify(todolist));
    todoInput.value = "";
})

showTodo.addEventListener("click", (e)=>
{
    let key = e.target.dataset.key;
    let deleteTodoKey = e.target.dataset.todokey;
    todolist = todolist.map(todo=> todo.id === key ? {...todo, isCompleted : !todo.isCompleted } : todo);
    todolist = todolist.filter(todo => todo.id !== deleteTodoKey);
    localStorage.setItem("todo", JSON.stringify(todolist));
    renderTodoList(todolist);
    console.log(todolist);
})

function renderTodoList(todolist)
{
    console.log(todolist);
    showTodo.innerHTML = todolist.map(({id, todo, isCompleted})=> 
        `<div class="relative">
        <input class="t-checkbox t-pointer" id="item-${id}" type="checkbox" data-key${id} ${isCompleted ? "checked" : ""}>
        <label for="item-${id}" class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}" data-key=${id}>${todo}</label>
        <button class="button cursor" > <span data-todokey=${id} class="absolute right-0 del-btn material-symbols-outlined">
            delete
        </span> </button></div>`);
}
renderTodoList(todolist);