const cart = [
    { id: 1, name: "Item 1", price: "10" },
    { id: 2, name: "Item 2", price: "15" },
    { id: 3, name: "Item 3", price: "12" }
]

const displayCart = () => {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";

    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;
        cartContainer.appendChild(itemElement);
    });
}

displayCart();
