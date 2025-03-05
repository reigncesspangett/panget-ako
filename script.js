document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("registeredUser")) {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    }
});

function register() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    if (username && password) {
        localStorage.setItem("registeredUser", JSON.stringify({ username, password, bottles: 0, points: 0, usedPoints: 0 }));
        alert("Registration successful! Please log in.");
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("userDashboard").style.display = "block";
        document.getElementById("userWelcome").textContent = storedUser.username;
        document.getElementById("bottlesCount").textContent = storedUser.bottles;
        document.getElementById("pointsEarned").textContent = storedUser.points;
        document.getElementById("pointsUsed").textContent = storedUser.usedPoints;
    } else {
        alert("Invalid login details.");
    }
}

function adminLogin() {
    const adminUsername = document.getElementById("adminUsername").value;
    const adminPassword = document.getElementById("adminPassword").value;

    if (adminUsername === "admin" && adminPassword === "admin123") {
        document.getElementById("adminLoginForm").style.display = "none";
        document.getElementById("adminDashboard").style.display = "block";
    } else {
        alert("Invalid admin credentials.");
    }
}

function logout() {
    document.getElementById("userDashboard").style.display = "none";
    document.getElementById("adminDashboard").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}
