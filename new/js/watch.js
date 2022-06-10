const watch = document.querySelector('#watch')
setInterval(showWatch, 1000);

function showWatch(){
    const time = new Date()
    const hour = String(time.getHours()).padStart(2,'0')
    const minute = String(time.getMinutes()).padStart(2,'0')
    watch.innerText = `${hour}:${minute}`
}
showWatch()

