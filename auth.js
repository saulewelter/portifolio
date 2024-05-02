function isAuthenticated() {
    return localStorage.getItem('password') !== null;
}

function redirectToLogin() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
    }
}

if (window.location.pathname === '/protected.html') {
    redirectToLogin();
}

function login() {
    const enteredPassword = document.getElementById("password").value;
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: enteredPassword })
    })
    .then(response => {
        if (response.ok) {
            localStorage.setItem('password', enteredPassword);
            window.location.href = "privateblog.html"; 
        } else {
            alert("Incorrect password. Please try again.");
        }
    })
    .catch(error => console.error('Error:', error));
}
