const form = document.querySelector("#form")
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const user = document.querySelector('#userName');
    const pass = document.querySelector('#password');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function () {

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: user.value,
                password: pass.value
            })
        })
            .then(res => {
                res.json()
                if (res.ok) {
                    localStorage.setItem('authenticated', 'false')
                 window.location.href = "deshboard.html";
                } else {
                    const forget = document.querySelector('.forgot');
                    forget.innerHTML = "Wrong user and pass";
                    forget.style.background = "red";
                    forget.style.width = "100%";
                    forget.style.height="20px";
                    
                }
            })

            .catch(error => {
                console.error('Error:', error);
            });
    })
});
