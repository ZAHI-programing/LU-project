const successSound = new Audio("sound/buy_1.mp3");
successSound.volume = 0.3;

// Load cart from localStorage or create empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name} — $${item.price}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        container.appendChild(div);
    });

    document.getElementById("total").textContent = "Total: $" + total;

    // Add event listeners for remove buttons
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = this.getAttribute("data-index");
            cart.splice(idx, 1); // remove the selected item
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart(); // refresh cart UI
        });
    });
}

// Reset Cart Button
document.getElementById("reset-cart").addEventListener("click", () => {
    localStorage.removeItem("cart"); // clear localStorage
    cart = [];                        // clear cart array in memory
    loadCart();                       // refresh cart UI
});

loadCart();

// assumes you have: let cart = JSON.parse(localStorage.getItem("cart")) || [];
// and a function loadCart() that redraws the cart

function showAlert(id, timeout = 3000) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('alert-show');
  // remove after timeout
  setTimeout(() => el.classList.remove('alert-show'), timeout);
}

// BUY BUTTON
const buyBtn = document.getElementById("buy-now");
if (buyBtn) {
  buyBtn.addEventListener("click", () => {
    // refresh cart from localStorage (in case it's modified elsewhere)
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart || cart.length === 0) {
      showAlert('error-alert', 3000);
      return;
    }

    // success flow: show green sliding alert, clear cart
    showAlert('success-alert', 3000);
    successSound.currentTime = 0;
successSound.play();


    localStorage.removeItem("cart");
    cart = [];
    loadCart();
  });
}



