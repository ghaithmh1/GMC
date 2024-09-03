// Retrieve DOM elements
let btnPlus = document.getElementsByClassName('fa-plus-circle');
let btnMinus = document.getElementsByClassName('fa-minus-circle');
let btnDelete = document.getElementsByClassName('fa-trash-alt');
let btnFavorite = document.getElementsByClassName('fa-heart');
let totalElement = document.getElementsByClassName('total')[0];
let priceElements = document.getElementsByClassName('unit-price');
let quantityElements = document.getElementsByClassName('quantity');

// Class to store properties for a product
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Class to store properties for a cart item
class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calc() {
    return this.quantity * this.product.price;
  }
}

// Class to manage a collection of CartItem instances
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    // Check if item already exists
    let existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      let item = new CartItem(product, quantity);
      this.items.push(item);
    }
    this.updateCartUI();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.updateCartUI();
  }

  getTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.calc();
    }
    return total;
  }

  updateCartUI() {
    totalElement.textContent = this.getTotalPrice().toFixed(2);

    // Update quantities in the DOM
    for (let i = 0; i < quantityElements.length; i++) {
      let quantity = 0;
      let price = parseFloat(priceElements[i].textContent);
      let productId = i + 1; // Assuming product IDs are 1-based and match the index

      let product = new Product(productId, `Product ${productId}`, price);
      let cartItem = this.items.find(item => item.product.id === productId);
      if (cartItem) {
        quantity = cartItem.quantity;
      }

      quantityElements[i].textContent = quantity;
    }
  }
}

// Create an instance of the Cart
let cart = new Cart();

// Add event listeners to buttons
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener('click', function() {
    let quantityElement = quantityElements[i];
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    let price = parseFloat(priceElements[i].textContent);
    let product = new Product(i + 1, `Product ${i + 1}`, price);
    cart.addItem(product, 1); // Increment quantity by 1
  });

  btnMinus[i].addEventListener('click', function() {
    let quantityElement = quantityElements[i];
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      let price = parseFloat(priceElements[i].textContent);
      let product = new Product(i + 1, `Product ${i + 1}`, price);
      cart.addItem(product, -1); // Decrement quantity by 1
    }
  });

  btnDelete[i].addEventListener('click', function() {
    let productId = i + 1; // Assuming product IDs are 1-based and match the index
    cart.removeItem(productId);
  });

  btnFavorite[i].addEventListener('click', function() {
    this.style.color = this.style.color === 'red' ? 'black' : 'red';
  });
}
