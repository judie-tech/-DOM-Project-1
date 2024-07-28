// Ensure elements are selected correctly
const products = document.querySelectorAll(".card");
let totalPriceElement = document.querySelector(".total");
let totalPrice = 0;

function updateTotalPrice() {
  totalPrice = 0;
  products.forEach((product) => {
    const quantityElement = product.querySelector(".quantity");
    const unitPriceElement = product.querySelector(".unit-price");
    const quantity = parseInt(quantityElement.textContent);
    const unitPrice = parseFloat(unitPriceElement.textContent.replace("$", ""));
    totalPrice += quantity * unitPrice;
  });
  totalPriceElement.textContent = `${totalPrice.toFixed(2)} $`;
}

function deleteProduct(product) {
  product.remove();
  updateTotalPrice();
}

products.forEach((product) => {
  const plusButton = product.querySelector(".fa-plus-circle");
  const minusButton = product.querySelector(".fa-minus-circle");
  const trashButton = product.querySelector(".fa-trash-alt");
  const heartButton = product.querySelector(".fa-heart");

  plusButton.addEventListener("click", () => {
    const quantityElement = product.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  });

  minusButton.addEventListener("click", () => {
    const quantityElement = product.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    }
  });

  trashButton.addEventListener("click", () => deleteProduct(product));

  heartButton.addEventListener("click", () => {
    heartButton.classList.toggle("liked");
    heartButton.style.color = heartButton.classList.contains("liked")
      ? "red"
      : "black";
  });
});

updateTotalPrice(); // Initial call to set total price
