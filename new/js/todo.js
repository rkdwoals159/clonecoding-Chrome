const ul = document.querySelector('#TodoList')
const toDoInputForm = document.querySelector('#TodoInput')
const toDoInput = toDoInputForm.querySelector('input')

let todos = []
if (localStorage.getItem('todos')){
    todos = JSON.parse(localStorage.getItem('todos'))
    todos.forEach((element)=>{
        implement(element)
    });
}

function implement(item){
    const li = document.createElement('li')
    ul.appendChild(li)
    //버튼구현
    const button = document.createElement('button')
    button.innerText = '❌'
    //리스트 내용 구현
    const span = document.createElement('span')
    span.innerText = item
    //버튼과 내용 li에 추가
    li.appendChild(button)
    li.appendChild(span)
    button.addEventListener('click',toDoRemove)
}



function toDoSubmitHandler(event){
    event.preventDefault();
    implement(toDoInput.value)
    //toDoList리스트에 값 추가
    todos.push(toDoInput.value)
    toDoInput.value = ''
    const todosString = JSON.stringify(todos)
    if (localStorage.getItem('todos')){
        localStorage.removeItem('todos')
    }
    localStorage.setItem('todos',todosString)

    

}

function toDoRemove(event){
    event.preventDefault()
    const li = event.target.parentElement
    li.remove()

    if (localStorage.getItem('todos')){
        localStorage.removeItem('todos')
    }
    localStorage.setItem('todos',todosString)
}


toDoInputForm.addEventListener('submit',toDoSubmitHandler)
