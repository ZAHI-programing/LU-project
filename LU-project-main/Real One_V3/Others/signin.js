// 1) Apply saved theme when page loads
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// 2) Toggle button + save theme
const toggle = document.querySelector('.Dark_Light');

toggle.onclick = () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

const submitBtn = document.getElementById("submitBtn");
const alertBox = document.getElementById("alert");

// Alert function
function showAlert(message, success = true){
    alertBox.innerText = message;

    alertBox.classList.remove("alert-error");
    alertBox.classList.remove("alert-show");

    if(!success){
        alertBox.classList.add("alert-error");
    }

    setTimeout(() => {
        alertBox.classList.add("alert-show");
    }, 10);

    setTimeout(() => {
        alertBox.classList.remove("alert-show");
    }, 2500);
}

// Form submit
submitBtn.onclick = () => {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if(name === "" || age === "" || email === "" || !gender){
        showAlert("❌ Please fill all fields!", false);
    } else {
        showAlert("✅ Submitted successfully!", true);
    }
};
