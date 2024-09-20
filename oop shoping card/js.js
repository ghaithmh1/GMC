// Product class
class Product {
    constructor(id, name, price, imgUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
        this.like = false; 
    }
}

// Shopping class
class Shopping {
    constructor() {
        this.availableProducts = [];
    }

    addProduct(product) {
        this.availableProducts.push(product);
        this.displayAvailableProducts();
    }

    removeProduct(productId) {
        // Remove from available products
        this.availableProducts = this.availableProducts.filter(product => product.id !== productId);
        this.displayAvailableProducts();

        // Also remove the product from the shopping cart if it's there
        cart.removeItem(productId);
    }

    displayAvailableProducts() {
        const shopDiv = document.getElementById('shop').getElementsByTagName('tbody')[0];
        shopDiv.innerHTML = ''; // Clear previous product list

        this.availableProducts.forEach(product => {
            const itemDiv = document.createElement('tr');
            itemDiv.innerHTML = `
                <td style="display:none;">${product.id}</td>
                <td style="width:10%;"><div class="img-box"><img class="img" src="${product.imgUrl}" alt="${product.name}"></div></td>
                <td style="width:30%;"><p style='font-size:15px;'>${product.name}</p></td>
                <td style="width:20%;"><img style="width:25px;" id="plus-${product.id}" src="icons/plus1.png" onclick="addToCart(${product.id})"/></td>
                <td style="width:20%;"><h2 style='font-size:15px;color:red;'>${product.price} DT</h2></td>
                <td style="width:10%;"><img style="width:25px;" id="delete-${product.id}" src="icons/remove.png" onclick="shop.removeProduct(${product.id})"/></td>
            `;
            shopDiv.appendChild(itemDiv);
        });
    }
}

// ShoppingBasketItem class
class ShoppingBasketItem {
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

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingBasketItem(product, quantity));
        }
        this.displayCartItems();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.displayCartItems();
    }

    updateQuantity(productId, change) {
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity += change;

            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.displayCartItems();
            }
        }
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    displayCartItems() {
        const basketDiv = document.getElementById('basket');
        basketDiv.innerHTML = ''; // Clear previous contents

        if (this.items.length === 0) {
            basketDiv.innerHTML = '<tr><td colspan="9">Your basket is empty</td></tr>';
        } else {
            this.items.forEach(item => {
                const itemDiv = document.createElement('tr');
                itemDiv.innerHTML = `
                    <td style="display:none;">${item.product.id}</td>
                    <td style="width:10%;"><div class="img-box"><img class="img" src="${item.product.imgUrl}" alt="${item.product.name}"></div></td>
                    <td style="width:30%;"><p style='font-size:15px;'>${item.product.name}</p></td>
                    <td style="width:10%;"><img id="black-heart-${item.product.id}" class="heart" src="${item.product.like ? 'icons/heart2.png' : 'icons/heart.png'}" onclick="change(${item.product.id})"></td>
                    <td style="width:5%;"><img style="width:25px;" id="plus-${item.product.id}" src="icons/plus1.png" onclick="updateCartQuantity(${item.product.id}, 1)"/></td>
                    <td style="width:20%;"><output style="font-size:15px;font-weight:bold;">${item.quantity}</output></td>
                    <td style="width:5%;"><img style="width:25px;" id="minus-${item.product.id}" src="icons/minus1.png" onclick="updateCartQuantity(${item.product.id}, -1)"/></td>
                    <td style="width:20%;"><h2 style='font-size:15px;color:red;'>${item.getTotalPrice()} DT</h2></td>
                    <td style="width:10%;"><img style="width:25px;" id="delete-${item.product.id}" src="icons/remove.png" onclick="removeFromCart(${item.product.id})"/></td>
                `;
                basketDiv.appendChild(itemDiv);
            });
        }

        // Update the total price and item count
        document.getElementById('totalB').textContent = `${this.getTotalPrice()} DT`;
        document.getElementById('itemB').textContent = `${this.getTotalItems()} Items`;
    }
}

// Initialize shopping and shopping cart
const shop = new Shopping();
const cart = new ShoppingCart();

// Handle product form submission
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const imgUrl = document.getElementById('imgUrl').value;
    const title = document.getElementById('title').value;
    const price = parseFloat(document.getElementById('price').value);

    if (!imgUrl || !title || isNaN(price)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    const newProduct = new Product(Date.now(), title, price, imgUrl);
    shop.addProduct(newProduct);

    document.getElementById('productForm').reset();
});

// Add to cart functionality
function addToCart(productId) {
    const product = shop.availableProducts.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
    }
}

// Remove from cart functionality
function removeFromCart(productId) {
    cart.removeItem(productId);
}

// Update cart quantity functionality
function updateCartQuantity(productId, change) {
    cart.updateQuantity(productId, change);
}

// Checkout functionality
function checkoutFunction() {
    if (cart.getTotalItems() === 0) {
        alert("Your cart is empty.");
    } else {
        alert(`You have successfully checked out ${cart.getTotalItems()} items for a total of ${cart.getTotalPrice()} DT.`);
        cart.items = [];
        cart.displayCartItems();
    }
}

// Function to handle heart icon change
function change(id) {
    const product = shop.availableProducts.find(p => p.id === id);

    if (product) {
        // Toggle the 'like' status of the product
        product.like = !product.like;

        // Update the heart icon based on the 'like' status
        const heartIcon = document.getElementById(`black-heart-${id}`);
        heartIcon.src = product.like ? "icons/heart2.png" : "icons/heart.png"; // Black heart (heart.png), Red heart (heart2.png)

        console.log(`Product ID: ${id}, Liked: ${product.like}`);
    } else {
        console.log("Product not found.");
    }
}
