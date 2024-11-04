document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelectorAll(".error-message").forEach(function (el) {
      el.remove();
    });
    const nameField = document.querySelector("input[placeholder='Name']");
    const emailField = document.querySelector("input[placeholder='Email']");
    const numberField = document.querySelector("input[placeholder='Number']");
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const number = numberField.value.trim();
    let isValid = true;
    if (name.length >= 3) {
      toggleIcon(nameField, true);
    } else {
      toggleIcon(nameField, false);
      showError(nameField, "Name should be at least 3 characters long.");
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      toggleIcon(emailField, true);
    } else {
      toggleIcon(emailField, false);
      showError(emailField, "Please enter a valid email address.");
      isValid = false;
    }

    // Validate number
    const numberPattern = /^[0-9]+$/;
    if (numberPattern.test(number) && number.length >= 10) {
      toggleIcon(numberField, true);
    } else {
      toggleIcon(numberField, false);
      showError(numberField, "Please enter a valid phone number with at least 10 digits.");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      
    }
  });

  function showError(inputField, message) {
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.innerText = message;
    inputField.parentElement.appendChild(errorElement);
  }

  function toggleIcon(inputField, isValid) {
    const icon = inputField.parentElement.querySelector(".icon i");
    if (isValid) {
      icon.classList.add("fa-check");
      icon.classList.remove("fa-times");
      icon.parentElement.classList.add("valid");
      icon.parentElement.classList.remove("invalid");
    } else {
      icon.classList.add("fa-times");
      icon.classList.remove("fa-check");
      icon.parentElement.classList.add("invalid");
      icon.parentElement.classList.remove("valid");
    }
  }