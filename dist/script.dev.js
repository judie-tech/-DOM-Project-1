"use strict";

// Ensure elements are selected correctly
var products = document.querySelectorAll(".card");
var totalPriceElement = document.querySelector(".total");
var totalPrice = 0;

function updateTotalPrice() {
  totalPrice = 0;
  products.forEach(function (product) {
    var quantityElement = product.querySelector(".quantity");
    var unitPriceElement = product.querySelector(".unit-price");
    var quantity = parseInt(quantityElement.textContent);
    var unitPrice = parseFloat(unitPriceElement.textContent.replace("$", ""));
    totalPrice += quantity * unitPrice;
  });
  totalPriceElement.textContent = "".concat(totalPrice.toFixed(2), " $");
}

function deleteProduct(product) {
  product.remove();
  updateTotalPrice();
}

products.forEach(function (product) {
  var plusButton = product.querySelector(".fa-plus-circle");
  var minusButton = product.querySelector(".fa-minus-circle");
  var trashButton = product.querySelector(".fa-trash-alt");
  var heartButton = product.querySelector(".fa-heart");
  plusButton.addEventListener("click", function () {
    var quantityElement = product.querySelector(".quantity");
    var quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  });
  minusButton.addEventListener("click", function () {
    var quantityElement = product.querySelector(".quantity");
    var quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    }
  });
  trashButton.addEventListener("click", function () {
    return deleteProduct(product);
  });
  heartButton.addEventListener("click", function () {
    heartButton.classList.toggle("liked");
    heartButton.style.color = heartButton.classList.contains("liked") ? "red" : "black";
  });
});
updateTotalPrice(); // Initial call to set total price