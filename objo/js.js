
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
                if (quantity <= 0) {
                    console.error("Quantity must be greater than zero.");
                    return;
                }

                const existingItem = this.items.find(item => item.product.id === product.id);
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    this.items.push(new ShoppingCartItem(product, quantity));
                }

                this.displayItems();
            }

            removeItem(productId) {
                this.items = this.items.filter(item => item.product.id !== productId);
                this.displayItems();
            }

            clearCart() {
                this.items = [];
                this.displayItems();
            }

            getTotal() {
                return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
            }

            displayItems() {
                const cartDiv = document.getElementById('cartItems');
                cartDiv.innerHTML = ''; // Clear previous contents

                if (this.items.length === 0) {
                    cartDiv.innerHTML = '<p>Cart is empty.</p>';
                } else {
                    this.items.forEach(item => {
                        const itemDiv = document.createElement('div');
                        itemDiv.textContent = `${item.product.name}: ${item.quantity} @ $${item.product.price} each. Total: $${item.getTotalPrice()}`;
                        cartDiv.appendChild(itemDiv);
                    });
                }

                document.getElementById('totalPrice').textContent = `Total: $${this.getTotal()}`;
            }
        }

        // Create products
        const basket = new Product(1, 'Baskets', 100);
        const socks = new Product(2, 'Socks', 20);
        const bag = new Product(3, 'Bag', 50);

        // Create a shopping cart
        const cart = new ShoppingCart();

        // Add event listeners for product buttons
        document.getElementById('addBasket').addEventListener('click', () => {
            cart.addItem(basket, 1);
        });

        document.getElementById('addSocks').addEventListener('click', () => {
            cart.addItem(socks, 1);
        });

        document.getElementById('addBag').addEventListener('click', () => {
            cart.addItem(bag, 1);
        });

       
        

        

   