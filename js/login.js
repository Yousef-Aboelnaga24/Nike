let getUsername = localStorage.getItem('username')
let getPassword = localStorage.getItem('password')

let form = document.getElementById('loginForm')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    let username = document.getElementById('username').value.trim()
    let password = document.getElementById('password').value.trim()
    if (username === "" || password === "") {
        alert('fill your username and password')
    } else {
        if (getUsername === username && getPassword === password) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1000);

        } else {
            alert('username or password is wrong')
        }
    }

})