// ................... Selected Events .....................

const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username')
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

// when submited form
form.addEventListener('submit', (event) => {

    // calling rule validation form errors
    validateForm();
    console.log(isFormValid());
    // If the rules for filling the form were correct
    if (isFormValid() == true) {
        // Show user information by submitting the form
        form.submit();
    } else {
        // Otherwise, do not refresh the page
        event.preventDefault();
    }

    showWelcomeMessage()

    
});


function showWelcomeMessage() {
    let personName = usernameInput.value
    if (personName != null) {
      document.getElementById("welcome-name-profile").innerHTML = `Hello, ${personName}!`;
    }else{
        document.getElementById("welcome-name-profile").innerHTML = `Hello, my !`;
    }
}


function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    // Boolean variable initialization
    let result = true;
    // Navigate the input group
    inputContainers.forEach((container) => {
        // add classList for Error in input groups
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    // get result
    return result;
}

function validateForm() {
    //USERNAME

    // It removes the empty space between the name entered by the user
    // And if the user does not enter a value, show the error
    if (usernameInput.value.trim() == '') {
        setError(usernameInput, 'Name can not be empty');
    }

    // The input value should not be less than 5 characters
    // The input value should not be more than 15 characters
    else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
        setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    } else {
        setSuccess(usernameInput);
    }
    //EMAIL
    // It removes the empty space between the name entered by the user
    if (emailInput.value.trim() == '') {
        setError(emailInput, 'Provide email address');
    }
    // If the user's input email has security stored in the reg variable
    // in the isEmailValid function, then show a successful error.
    else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput);
    } else {
        // not successfuly
        setError(emailInput, 'Provide valid email address');
    }

    //PASSWORD
    // It removes the empty space between the name entered by the user
    if (passwordInput.value.trim() == '') {
        setError(passwordInput, 'Password can not be empty');

        // Password characters must not be less than 6
        // Password characters should not be more than 20
    } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
        setError(passwordInput, 'Password min 6 max 20 charecters');
    } else {
        setSuccess(passwordInput);
    }
    //CONFIRM PASSWORD
    // It removes the empty space between the name entered by the user
    if (confirmPasswordInput.value.trim() == '') {
        // If no value is entered, showing:
        setError(confirmPasswordInput, 'Password can not be empty');
    }
    // If the first password is not the same as the second
    else if (confirmPasswordInput.value !== passwordInput.value) {
        // confirmation password, showing:
        setError(confirmPasswordInput, 'Password does not match');
    } else {
        // show successfully error when correct input value       
        setSuccess(confirmPasswordInput);
    }
}
// Show when user input operation was wrong:
function setError(element, errorMessage) {
    // make a variable for parent elements
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        // removed classlist
        parent.classList.remove('success');
    }
    // add new classlist error
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

// making successfully error whenthe user input operation was correct
function setSuccess(element) {
    const parent = element.parentElement;
    // set new classlist for successfully error
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    // add new classlist error successfully
    parent.classList.add('success');
}

function isEmailValid(email) {
    // make variable For more email security
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}



