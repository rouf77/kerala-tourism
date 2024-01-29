function openModal() {
    document.getElementById('authModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}

function showSignUpForm() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('signupFormContainer').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('signupFormContainer').style.display = 'none';
}

function submitLoginForm() {
    // Add your login logic here
    // For simplicity, let's just close the modal for now
    closeModal();
}

function submitSignUpForm() {
    // Add your sign-up logic here
    // For simplicity, let's just close the modal for now
    closeModal();
}
