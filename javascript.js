$(document).ready(function () {
    $("#btn").click(
        function () {
            validate('result_form');
            return 0;
        }
    );
});

function validateName() {
    var name = document.forms["form"]["name"].value;
    if ((name == /^[А-Яа-яЁё\s]+$\-/) && (name.length > 1))
        return 1;
    else {
        alert('Имя может содержать только русские буквы, пробелы, тире. Цифры, англ. буквы - нельзя.');
        return 0;
    }

}

function validatePhone() {
    var phone = document.forms["form"]["phone"].value;
    if ((phone == /[0-9]\s\-\+/) && (phone.length > 1))
        return 1;
    else {
        alert('Телефон может содержать только цифры, “-”, пробелы, “+”.');
        return 0;
    }
}

function validateEmail() {
    var email = document.forms["form"]["email"].value;
    var at = email.indexOf("@");
    var dot = email.indexOf(".");

    if ((email == /\w\@/) && (at > 0) && (dot > 0) || (email.length == 0))
        return 1;
    else {
        alert('Формат email не соответствует стандартам.');
        return 0;
    }

}

function validate(result_form) {
    if (validateName() && validatePhone() && validateEmail())
        return 1;
    else {
        alert('Проверьте правильность введенных данных');
        return 0;
    }
}