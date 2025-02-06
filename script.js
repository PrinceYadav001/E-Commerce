let cart = [];

// Function to add products to cart
function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

// Function to update cart
function updateCart() {
  let cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ''; // Clear the cart first

  let totalPrice = 0;

  cart.forEach(item => {
    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <p>${item.productName} - ₹${item.price}</p>
        <button onclick="removeFromCart('${item.productName}')">Remove</button>
      </div>
    `;
    totalPrice += item.price;
  });

  document.getElementById("total-price").innerText = totalPrice;
}

// Function to remove products from cart
function removeFromCart(productName) {
  cart = cart.filter(item => item.productName !== productName);
  updateCart();
}

// Call this function when the page loads
updateCart();
