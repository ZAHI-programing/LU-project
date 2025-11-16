const toggleBtn = document.getElementById("toggle-mode");
        const submitBtn = document.getElementById("submitBtn");
        const alertBox = document.getElementById("alert");

        toggleBtn.onclick = () => {
            document.body.classList.toggle("light-mode");
        };

        function showAlert(message, success = true){
            alertBox.innerText = message;

            // Reset classes
            alertBox.classList.remove("alert-error");
            alertBox.classList.remove("alert-show");

            if(!success){
                alertBox.classList.add("alert-error");
            }

            // Show
            setTimeout(() => {
                alertBox.classList.add("alert-show");
            }, 10);

            // Hide
            setTimeout(() => {
                alertBox.classList.remove("alert-show");
            }, 2500);
        }

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