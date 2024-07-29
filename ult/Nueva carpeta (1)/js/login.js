document.addEventListener('DOMContentLoaded', () => {
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.querySelector('.form.login');
    const registrationForm = document.querySelector('.form.registration');

    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registrationForm.style.display = 'block';
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registrationForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});
