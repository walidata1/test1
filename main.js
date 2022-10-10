document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const logoutForm = document.querySelector("#logout");

document.querySelector("#linkLogout").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    logoutForm.classList.remove("form--hidden");
});

document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();

    loginForm.classList.remove("form--hidden");
    logoutForm.classList.add("form--hidden");
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    setFormMessage(loginForm, "error", "Invalid username/password combination");
});

document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError(inputElement, "Username must be at least 10 characters in length");
        }
    });

    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
});
});



function test() {

    //Retriving data
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    //Storing data
    var user = localStorage.setItem("uid", uid);
    var pass = localStorage.setItem("pw", pw);


    //Retriving stored data and using it 
    var user = localStorage.getItem("uid", uid);
    var pass = localStorage.getItem("pw", pw);


    var a, b;
    a = "fredrik";
    b= 12345;

    if (a == user && b == pass) {

        alert(uid + pw)
    

    }}
