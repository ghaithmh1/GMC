// Product class
class Product {
  constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
  }
}

// ShoppingCartItem class
class ShoppingCartItem {
  constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
  }

  getTotalPrice() {
      return this.product.price * this.quantity;
  }
}

// ShoppingCart class
class ShoppingCart {
  constructor() {
      this.items = [];
  }

  addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
          existingItem.quantity += quantity;
      } else {
          this.items.push(new ShoppingCartItem(product, quantity));
      }
  }

  removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
  }

  getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayItems() {
      this.items.forEach(item => {
          console.log(`${item.product.name}: ${item.quantity} @ $${item.product.price} each. Total: $${item.getTotalPrice()}`);
      });
  }
}

// Test the implementation

// Create products
const basket = new Product(1, 'Baskets', 100);
const socks = new Product(2, 'Socks', 20);
const bag = new Product(3, 'Bag', 50);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(basket, 2);
cart.addItem(socks, 5);
cart.addItem(bag, 1);

// Display the cart
console.log('Shopping Cart Items:');
cart.displayItems();

// Display total price
console.log(`Total Price: $${cart.getTotal()}`);

// Remove an item from the cart
cart.removeItem(socks.id);

// Display the cart again
console.log('Shopping Cart Items after removing socks:');
cart.displayItems();

// Display total price again
console.log(`Total Price after removal: $${cart.getTotal()}`);
