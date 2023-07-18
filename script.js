var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var successMessage = document.getElementById('success-message'); 
var studentIdError = document.getElementById('student_id'); 
var lnameError = document.getElementById('lname-error'); 


function validateFirstName() { 
    var name = document.getElementById('first-name').value; 
    nameError.innerHTML = '';

    if (name.length == 0) { 
        nameError.innerHTML = "First name is required!";
        return false;
    }

    if (!name.match(/^[A-Za-z]+$/)) {
        nameError.innerHTML = "Invalid first name!";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check" style="color: #3ac559;"></i>';
    return true;
}



function validateStudentId() {
    var studentId = document.getElementById('student_id').value;
    var regex = /^\d{6}$/;
    var studentIdError = document.getElementById('id-error'); // Get the correct span element
    if (studentId.length == 0) {
      studentIdError.innerHTML = "Student ID is Required.";
      return false;
    }
    if (!regex.test(studentId)) {
      studentIdError.innerHTML = "Student ID must be exactly 6 digits.";
      return false; // Return false to prevent form submission
    }
    studentIdError.innerHTML = '<i class="fa-solid fa-check" style="color: #3ac559;"></i>';
    return true;
}

  

function validateLastName() { 
    var lastname = document.getElementById('last-name').value; 
    lnameError.innerHTML = '';
    if (lastname.length == 0) { 
        lnameError.innerHTML = "Last name is required!";
        return false;
    }
    if (!lastname.match(/^[A-Za-z]+$/)) {
        lnameError.innerHTML = "Invalid first name!";
        return false;
    }
    lnameError.innerHTML = '<i class="fa-solid fa-check" style="color: #3ac559;"></i>';
    return true;
}



function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Phone no. is required";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check" style="color: #3ac559;"></i>';
    return true;
}




function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check" style="color: #3ac559;"></i>';
    return true;
}



function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    // How Many Characters are remaining
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters remaining';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check" style="color: #3ac559;"></i>';
    return true;
}




function validateForm() {
    if (!validateFirstName() || !validateStudentId() || !validatePhone() || !validateEmail() || !validateMessage() || !validateLastName()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit the form';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    } 

    showSuccessMessage();
    return true;
}



function showSuccessMessage() {
    alert("Form Submitted."); 
}

