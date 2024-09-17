// Product class
class Product {
    constructor(id, name, description, price, imgUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}

// ShoppingCartItem class
class ShoppingCartItem {
    constructor(product, quantity,nbc) {
        this.product = product;
        this.quantity = 0;
        this.nbc=0;
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

        this.displayItems();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.displayItems();
    }

    updateQuantity(productId, change) {
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity += change;
           
            this.displayItems();
            
        }
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
                itemDiv.innerHTML = `
                    <div class="card-body cb">
                        <div class="card" style="width: 18rem">
                            <img src="${item.product.imgUrl}" class="card-img-top" alt="${item.product.name}" />
                            <div class="card-body">
                                <h5 class="card-title">${item.product.name}</h5>
                                <p class="card-text">${item.product.description}</p>
                                <h4 class="unit-price">${item.product.price} $</h4>
                                
                                <div>
                                    <i class="fas fa-plus-circle" id="plus-${item.product.id}"></i>
                                    <span class="quantity">${item.quantity}</span>
                                    <i class="fas fa-minus-circle" id="minus-${item.product.id}"></i>
                                </div>
                                <div>
                                    <i class="fas fa-trash-alt" id="delete-${item.product.id}"></i>
                                    <i class="fas fa-heart" id="favorite-${item.product.id}"></i>
                                </div>
                            </div>
                        </div>
                    </div>    
                `;
                cartDiv.appendChild(itemDiv);

                // Add event listeners for each product's buttons
                document.getElementById(`plus-${item.product.id}`).addEventListener('click', () => {
                    this.updateQuantity(item.product.id, 1);
                });

                document.getElementById(`minus-${item.product.id}`).addEventListener('click', () => {
                    if (item.quantity > 0) {
                        this.updateQuantity(item.product.id, -1);
                    } 
                });

                document.getElementById(`delete-${item.product.id}`).addEventListener('click', () => {
                    this.removeItem(item.product.id);
                });

                document.getElementById(`favorite-${item.product.id}`).addEventListener('click', (event) => {
                    item.nbc++;
                    if(item.nbc % 2 === 1) {
                        event.target.style.color = "red"; // Change color to red on odd clicks
                    } else {
                        event.target.style.color = "black"; // Change color back to black on even clicks
                    }
                });
                
            });
        }

        document.getElementById('totalPrice').textContent = `Total: $${this.getTotal()}`;
    }
}

// Create a shopping cart
const cart = new ShoppingCart();

// Handle form submission
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const imgUrl = document.getElementById('imgUrl').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = parseFloat(document.getElementById('price').value);

    if (!imgUrl || !title || !description || isNaN(price)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    const newProduct = new Product(Date.now(), title, description, price, imgUrl);
    cart.addItem(newProduct, 1);

    // Clear form after submission
    document.getElementById('productForm').reset();
});

// Clear cart button event listener
document.getElementById('clearCart').addEventListener('click', () => {
    cart.clearCart();
});
