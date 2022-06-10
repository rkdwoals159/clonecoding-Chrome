const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"
let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDoInput.value = ""
    toDos.push(newTodoObj)
    paintTodo(newTodoObj);
    saveToDos()
}

function deleteTodo(event) {
    const li = event.target.parentElement
    li.remove()
    console.log(li.id)
    console.log(toDos)
    toDos = toDos.filter((toDo)=>toDo.id !== parseInt(li.id))
    //toDos 빈 리스트만 남아버림
    console.log(toDos)
    saveToDos()
}

function paintTodo(newTodoObj){
    const li = document.createElement("li")
    li.id = newTodoObj.id
    const span = document.createElement("span")
    const button = document.createElement("button")

    button.innerText = 'X'
    button.addEventListener("click",deleteTodo)


    span.innerText = newTodoObj.text
    toDoList.appendChild(li)

    li.appendChild(span)
    li.appendChild(button)

}



toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintTodo);
}