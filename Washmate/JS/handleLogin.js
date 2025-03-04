document.addEventListener("DOMContentLoaded", function () {
    const authButton = document.getElementById("authButton");
    const profileImg = document.getElementById("userImage")
    const authText = document.getElementById("authText")


function updateAuthButton() {
    const isLoggedIn = localStorage.getItem("loggedIn");
    
    if (isLoggedIn) {
        profileImg.style.display = "inline"
        authText.textContent = "Noname"
        authButton.style.backgroundColor = "transparent"
        authButton.style.border = "none"
        authButton.style.color = "white"

        authButton.onclick = function () {
            window.location.href = "../User/profile.html";
        };
        authButton.onmouseover = function() {
            authButton.style.backgroundColor = "#0056b3";
            authButton.style.borderRadius = "5px";
            authButton.style.cursor = "pointer"
        };

        authButton.onmouseout = function() {
            authButton.style.backgroundColor = "transparent";
        };

    } else {
        authButton.textContent = "Login";
        authButton.onclick = function () {
            window.location.href = "../SignInSignOut/Login.html";
        };
    }
}


updateAuthButton();
});