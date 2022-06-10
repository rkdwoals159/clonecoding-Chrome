const loginForm = document.querySelector('#login-form')
const helloName = loginForm.querySelector('div')
const loginInput = loginForm.querySelector('input')

function login(event){
    event.preventDefault();
    localStorage.setItem("name",loginInput.value)
    helloName.innerText = `hello ${loginInput.value}`
    toggler()
}
function toggler(){
    helloName.classList.toggle('hidden')
    loginInput.classList.toggle('hidden')
}


if (localStorage.getItem('name')){
    const MY_NAME = localStorage.getItem('name')
    helloName.innerText = `hello ${MY_NAME}`
    toggler()
}
else {loginForm.addEventListener('submit',login)}

