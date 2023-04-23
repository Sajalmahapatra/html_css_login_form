window.onload = function () {

  // This function is used for prepre the obect of signup form.
  function prepareParms(email, password, text) {
    const prevData = JSON.parse(localStorage.getItem("form")) ?? [];
    const id = Date.now();
    prevData.push({ id, email, password, text });
    return JSON.stringify(prevData);
  }

  // This function is used for disappearing the alert message.
  function disappearAlert(text, error = false) {
    const alert = document.getElementById("alert_text");
    alert.children[0].innerHTML = text;
    alert.style.display = "block";
    alert.classList.add(error ? "error" : "success");
    setTimeout(() => {
      alert.children[0].innerHTML = "";
      alert.style.display = "none";
      alert.classList.remove(error ? "error" : "success");
    }, 1500);
  }

  // This function is used for sign up the form.
  function submitSignUpForm(e) {
    e.preventDefault();

    // Here we take the reference of sign up form with respective child element and destructre them in order to reduce the using of dom object.
    const { email, password, text } = e.target;
    const params = prepareParms(email.value, password.value, text.value);
    localStorage.setItem("form", params);
    email.value = "";
    password.value = "";
    text.value = "";
    disappearAlert("Successfully Created.");
  }

  // This function is used for login.
  function submitLoginForm(e) {
    e.preventDefault();
    // Here we take the reference of login form with respective child element and destructre them in order to reduce the using of dom object.
    const { email, password } = e.target;
    const prevData = JSON.parse(localStorage.getItem("form")) ?? [];
    const validCredential =
      prevData.some(
        (item) => item.email === email.value && item.password === password.value
      ) || false;
    disappearAlert(
      validCredential ? "Successfully logged in." : "Credential is Incorrect",
      !validCredential
    );
  }

  const signup_form = document.getElementById("signup_form");
  signup_form.addEventListener("submit", submitSignUpForm);

  const login_form = document.getElementById("login_form");
  login_form.addEventListener("submit", submitLoginForm);
};
