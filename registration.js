// Registration form validation. This demo validates only; it does not send or store data.
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("registration-form");
  if (!form) return;

  var names = ["fullname", "email", "phone", "matric", "programme", "level", "confirm"];
  var fields = {};
  names.forEach(function (name) {
    fields[name] = document.getElementById(name);
  });
  var feedback = document.getElementById("form-feedback");

  // Show (or clear) the error message under a field
  function showError(name, message) {
    var field = fields[name];
    document.getElementById(name + "-error").textContent = message;
    if (message) {
      field.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
    }
  }

  // Clear a field's error as soon as the user changes it
  names.forEach(function (name) {
    var clear = function () { showError(name, ""); };
    fields[name].addEventListener("input", clear);
    fields[name].addEventListener("change", clear);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var errors = {};

    // Full name: not empty, and at least two words
    var fullname = fields.fullname.value.trim();
    if (!fullname) {
      errors.fullname = "Please enter your full name.";
    } else if (fullname.split(/\s+/).length < 2) {
      errors.fullname = "Enter your first name and surname.";
    }

    // Email: not empty, and a valid pattern
    var email = fields.email.value.trim();
    if (!email) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    // Phone: digits only, 10 to 15 digits
    var phone = fields.phone.value.trim();
    if (!phone) {
      errors.phone = "Please enter your phone number.";
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = "Phone number must contain digits only.";
    } else if (phone.length < 10 || phone.length > 15) {
      errors.phone = "Phone number must be between 10 and 15 digits.";
    }

    // Matriculation number: not empty, at least 5 characters
    var matric = fields.matric.value.trim();
    if (!matric) {
      errors.matric = "Please enter your matriculation number.";
    } else if (matric.length < 5) {
      errors.matric = "Matriculation number is too short.";
    }

    // Dropdowns: a real choice must be selected
    if (fields.programme.value === "") {
      errors.programme = "Please select your programme.";
    }
    if (fields.level.value === "") {
      errors.level = "Please select your level.";
    }

    // Checkbox: must be ticked
    if (!fields.confirm.checked) {
      errors.confirm = "Please confirm that your details are correct.";
    }

    // Show every error, and move focus to the first invalid field
    var firstInvalid = null;
    names.forEach(function (name) {
      showError(name, errors[name] || "");
      if (errors[name] && !firstInvalid) firstInvalid = name;
    });
    if (firstInvalid) fields[firstInvalid].focus();

    var valid = !firstInvalid;
    feedback.textContent = valid
      ? "Registration