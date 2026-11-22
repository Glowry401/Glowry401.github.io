// Contact form validation. This demo validates only; it does not send messages.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    message: document.getElementById("message")
  };
  const feedback = document.getElementById("form-feedback");

  function showError(fieldName, message) {
    const field = fields[fieldName];
    document.getElementById(`${fieldName}-error`).textContent = message;
    if (message) {
      field.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
    }
  }

  // Clear a field's error as soon as the user starts correcting it
  Object.keys(fields).forEach(name => {
    fields[name].addEventListener("input", () => showError(name, ""));
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const errors = {};

    if (!fields.name.value.trim()) {
      errors.name = "Please enter your name.";
    }

    const emailValue = fields.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      errors.email = "Please enter your email address.";
    } else if (!emailPattern.test(emailValue)) {
      errors.email = "Enter a valid email address.";
    }

    const phoneValue = fields.phone.value.trim();
    if (!phoneValue) {
      errors.phone = "Please enter your phone number.";
    } else if (!/^\d+$/.test(phoneValue)) {
      errors.phone = "Phone number must contain digits only.";
    } else if (phoneValue.length < 10 || phoneValue.length > 15) {
      errors.phone = "Phone number must be between 10 and 15 digits.";
    }

    if (!fields.message.value.trim()) {
      errors.message = "Please enter a message.";
    }

    Object.keys(fields).forEach(name => showError(name, errors[name] || ""));

    const firstInvalid = Object.keys(errors)[0];
    const valid = !firstInvalid;
    if (firstInvalid) fields[firstInvalid].focus();

    feedback.textContent = valid
      ? "All fields are valid. This demonstration does not send the message."
      : "Please correct the highlighted fields and try again.";
    feedback.className = `form-feedback ${valid ? "success" : "failure"}`;
  });
});
