const ul = document.querySelector('#TodoList')
const toDoInputForm = document.querySelector('#TodoInput')
const toDoInput = toDoInputForm.querySelector('input')

let todos = []
if (localStorage.getItem('todos')){
    todos = JSON.parse(localStorage.getItem('todos'))
    todos.forEach((element)=>{
        implement(element.value,element.id)
    });
}

function implement(item,id){
    const li = document.createElement('li')
    li.id = id
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
    implement(toDoInput.value,Date.now())
    //toDoList리스트에 값 추가
    todos.push({
        id: Date.now(),
        value:toDoInput.value})
    toDoInput.value = ''
    const todosString = JSON.stringify(todos)
    localStorage.setItem('todos',todosString)

    

}

function toDoRemove(event){
    
    event.preventDefault()
    const li = event.target.parentElement
    li.remove()
    //todos 리스트내에서도 삭제해줘야함.
    todos = todos.filter((item)=>item.id !== parseInt(li.id))
    //todo리스트 필터 후 새로 setItem해줌
    //그래야 localstorage내부에서도 삭제될수있음
    const todosString = JSON.stringify(todos)
    localStorage.setItem('todos',todosString)
}


toDoInputForm.addEventListener('submit',toDoSubmitHandler)
