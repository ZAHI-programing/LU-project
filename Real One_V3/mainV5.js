  
        const toggle = document.querySelector('.Dark_Light');
        toggle.onclick = () => {
            document.body.classList.toggle('dark');
        };
 

function showAlert(id, timeout = 2500) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add("alert-show");
    setTimeout(() => {
        el.classList.remove("alert-show");
    }, timeout);
}

// Load existing cart or create empty one
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Listen for clicks on all buy icons
document.querySelectorAll(".product .add-to-buy").forEach(icon => {
    icon.addEventListener("click", function (e) {
        e.stopPropagation();

        const productDiv = this.closest(".product");
        const name = productDiv.getAttribute("data-name");
        const img = productDiv.querySelector("img:not(.add-to-buy)").src;

        const product = {
            name: name,
            price: 12,
            img: img
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        // Show custom success box
        showAlert("success-alert");
        document.getElementById("success-alert").textContent = name + " added to your cart!";
    });
});


