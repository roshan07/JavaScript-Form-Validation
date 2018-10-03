function validateForm() {
    var fullName = document.getElementById("fullname").value;
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    if (fullName === "" || userName === "" || email === "" || password === "") {
        alert("Please fill the respective Fields!");
        return false;
    } else if (password.length < 6) {
        alert("Your password must contain atleast 6 characters!");
        return false;
    } else {
        return true;
    }
}