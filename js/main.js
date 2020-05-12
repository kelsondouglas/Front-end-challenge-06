const form = document.getElementById('formulario')
const email = document.getElementById('email')
const valida = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]{2,8})$/

form.addEventListener('submit', (e) => {
    e.preventDefault();

    verificarEmail()
})

function setError( message) {
    //Pega o elemento pai do input (no caso a div com a classe div-input)
    const formControl = form.parentElement
    formControl.className = 'email error'

    //seta a mensagem recebida na função a tag small
    const small = formControl.querySelector('small')
    small.innerHTML = message
}

function removeError() {
    const formControl = form.parentElement
    formControl.className = "email"

    const small = formControl.querySelector('small')
    small.innerHTML = ''
}

function verificarEmail() {
    if(email.value.trim() === '') {
        setError('Whoops! It looks like you forgot to add your email')
    }else if (valida.test(email.value.trim()) === false) {
        setError('Please provide a valid email address')
    }else {
        removeError()
    }
}