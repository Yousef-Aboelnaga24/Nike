// form
let form = document.getElementById('registerForm')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let username = document.getElementById('username').value.trim()
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('password').value.trim()

if (username ===""||email===""||password==="") {
    alert('please fill all input')
}else{
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

    setTimeout(() => {
        window.location = "login.html"
    }, 1500);
}

})