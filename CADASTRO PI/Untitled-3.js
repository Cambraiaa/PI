const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const registerButton = document.getElementById('register-button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Preencha todos os campos!';
        return;
    }

    if (username === 'medico' && password === 'medico123' && role === 'medico') {
        window.location.href = 'medico.html';
    } else if (username === 'paciente' && password === 'paciente123' && role === 'paciente') {
        window.location.href = 'paciente.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos!';
    }
});

registerButton.addEventListener('click', () => {
    window.location.href = 'cadastrar.html';
});