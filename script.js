// Get all the quantity elements
var quantityInputs = document.getElementsByClassName('Quant');

// Get all the delete buttons
var deleteButtons = document.getElementsByClassName('delete');

// Get all the like buttons
var likeButtons = document.getElementsByClassName('like');

// Add event listeners to the plus and minus buttons, delete buttons, and like buttons
for (var i = 0; i < quantityInputs.length; i++) {
  var plusButton = quantityInputs[i].parentNode.querySelector('.plus-btn');
  var minusButton = quantityInputs[i].parentNode.querySelector('.minus-btn');
  
  plusButton.addEventListener('click', increaseQuantity);
  minusButton.addEventListener('click', decreaseQuantity);
  
  deleteButtons[i].addEventListener('click', deleteItem);
  
  likeButtons[i].addEventListener('click', likeItem);
}

// Function to increase the quantity
function increaseQuantity(event) {
  var plusButton = event.target;
  var quantityInput = plusButton.parentNode.querySelector('.Quant');
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
  updateTotalPrice();
}

// Function to decrease the quantity
function decreaseQuantity(event) {
  var minusButton = event.target;
  var quantityInput = minusButton.parentNode.querySelector('.Quant');
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
    updateTotalPrice();
  }
}

// Function to delete an item
function deleteItem(event) {
  var deleteButton = event.target;
  var item = deleteButton.parentNode;
  item.parentNode.removeChild(item);
  updateTotalPrice();
}

// Function to like an item
function likeItem(event) {
  var likeButton = event.target;
  likeButton.classList.toggle('liked');
}

// Function to update the total price
function updateTotalPrice() {
  var total = 0;
  var items = document.getElementsByClassName('Item');
  
  for (var i = 0; i < items.length; i++) {
    var quantityInput = items[i].querySelector('.Quant');
    var price = parseFloat(items[i].querySelector('.price').textContent);
    var quantity = parseInt(quantityInput.value);
    
    total += price * quantity;
  }
  
  document.getElementById('finalPrice').value = total.toFixed(2);
}
