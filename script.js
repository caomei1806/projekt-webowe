const loginBtn = document.getElementById('login-btn');
const loginCloseBtn = document.getElementById('close-btn');
const loginValidationBtn = document.getElementById('validate-btn');
const loginAlertBox = document.getElementById('alert-box');
const loginBox = document.getElementById('login-box');

loginBtn.addEventListener('click', loginBoxToggle);
loginCloseBtn.addEventListener('click', loginBoxToggle);
loginValidationBtn.addEventListener('click', checkLoginForm);

function loginBoxToggle() {
	loginBox.classList.toggle('show');
}

function checkLoginForm() {
	loginAlertBox.innerText = '';
	loginAlertBox.classList.remove('text-success');
	loginAlertBox.classList.remove('text-danger');
	const [loginInput, passwordInput] = document.querySelectorAll('.login-form-control');
	if (loginInput.value == "admin" && passwordInput.value == "admin") {
		loginAlertBox.classList.add('text-success');
		loginAlertBox.innerText = "Access granted!";
	} else {
		loginAlertBox.classList.add('text-danger');
		if (loginInput.value != "admin") {
			loginAlertBox.innerHTML += "Login is incorrect<br>";
		}
		if (passwordInput.value != "admin") {
			loginAlertBox.innerHTML += "Password is incorrect";
		}
	}
}