function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("task-box").style.display = "block";
    } else {
        document.getElementById("login-message").innerText = "Hatalı giriş!";
    }
}

function addTask() {
    const taskText = document.getElementById("task-input").value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerText = taskText;

    document.getElementById("task-list").appendChild(li);
    document.getElementById("task-input").value = "";
}

function logout() {
    document.getElementById("task-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}
