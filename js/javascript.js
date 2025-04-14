// Back To Top

$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $('#scrollTop').fadeIn();
    } else {
        $('#scrollTop').fadeOut();
    }
});

function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

// Booking Section

function validForm() {
    isValid = true;

    const error = document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const username = document.getElementById('username').value.trim();

    if (username === '') {
        document.getElementById('username-error').textContent = '*Username is required'
        isValid = false;

    } else if (username.length < 3) {
        document.getElementById('username-error').textContent = '*Username must be at least 3 character';
        isValid = false;

    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@gmail+\.com$/;
    if (email === '') {
        document.getElementById('email-error').textContent = '*Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = '*Enter a valid email address example@gmail.com';
        isValid = false;
    }

    const number = document.getElementById('number').value.trim();
    const phonePattern = /^03[0-9]{9}$/;
    if (number === '') {
        document.getElementById('number-error').textContent = '*Number is required';
        isValid = false;
    } else if (!phonePattern.test(number)) {
        document.getElementById('number-error').textContent = '*Number must start with 03 and exactly 11 digits';
        isValid = false;
    }

    const packageSelection = document.getElementById('package').value;
    if (packageSelection === '') {
        document.getElementById('package-error').textContent = '*Please select a package';
        isValid = false;
    }

    if (isValid)
        alert('Your Booking Confirm... Thanks for Choosing Us!')

    return isValid;

}

$(document).ready(function () {

    // Booking Section

    $(".bkg-input").focus(function () {
        $(this).css("background-color", "rgb(155, 228, 252)")
    });

    $(".bkg-input").blur(function () {
        $(this).css("background-color", "white")
    });

    // Contact Section

    $(".form-input").focus(function () {
        $(this).css("background-color", "rgb(255, 255, 97)")
    });

    $(".form-input").blur(function () {
        $(this).css("background-color", "white")
    });
});

// Contact Section

function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('username-error').textContent = '*Username is required';
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById('username-error').textContent = '*Username must be at least 3 characters';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@gmail+\.com$/;
    
    if (email === '') {
        document.getElementById('email-error').textContent = '*Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = '*Enter a valid email address';
        isValid = false;
    }

    const number = document.getElementById('number').value.trim();
    const phonePattern = /^03[0-9]{9}$/;
    if (number === '') {
        document.getElementById('number-error').textContent = '*Number is required';
        isValid = false;
    } else if (!phonePattern.test(number)) {
        document.getElementById('number-error').textContent = '*Number must start with 03 and exactly 11 digits';
        isValid = false;
    }

    const message = document.getElementById('text').value.trim();
    if (message === '') {
        document.getElementById('message-error').textContent = '*Message is required';
        isValid = false;
    }

    if (isValid) {
        let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
        document.getElementById("dataform").reset();
    }

    return false;
}


