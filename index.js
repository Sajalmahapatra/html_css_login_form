window.onload = function () {
  function prepareParms(email, password, text) {
    const prevData = JSON.parse(localStorage.getItem("form")) ?? [];
    const id = Date.now();
    prevData.push({ id, email, password, text });
    return JSON.stringify(prevData);
  }
  function submitSignUpForm(e) {
    e.preventDefault();

    // Here we take the reference of sign up form with respective child element destructre to get the value.
    const { email, password, text } = e.target;
    const params = prepareParms(email.value, password.value, text.value);
    localStorage.setItem("form", params);
    email.value = "";
    password.value = "";
    text.value = "";
    const alert =  document.getElementById("alert_text");
    alert.children[0].innerHTML = "Successfully Created.";
    alert.style.display ="block";
    setTimeout(()=>{
        alert.children[0].innerHTML = "";
        alert.style.display ="none";
    },1500)
  }

  const signup_form = document.getElementById("signup_form");
  signup_form.addEventListener("submit", submitSignUpForm);
};
