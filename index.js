const products = [
    { name: "Apple", price: 12 },
    { name: "Orange", price: 13 },
    { name: "Banana", price: 8 },
    { name: "Mango", price: 20 },
    { name: "Grapes", price: 15 },
    { name: "Pineapple", price: 25 },
];

const countElement = document.getElementById("count");
const itemCards = document.querySelectorAll(".item-preview");
const rightSide = document.querySelector(".right-side");

const cart = [];

countElement.textContent = "Total items: " + products.length;

rightSide.innerHTML = `
    <p id="added-count">Added items: 0</p>
    <div id="item-list">Item list: Empty</div>
    <p id="total-price">Total price: 0</p>
`;

const addedCountElement = document.getElementById("added-count");
const itemListElement = document.getElementById("item-list");
const totalPriceElement = document.getElementById("total-price");

function renderCart() {
    addedCountElement.textContent = "Added items: " + cart.length;

    if (cart.length === 0) {
        itemListElement.textContent = "Item list: Empty";
    } else {
        itemListElement.textContent =
            "Item list: " + cart.map((item) => item.name).join(", ");
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = "Total price: " + totalPrice;
}

products.forEach((product, index) => {
    const card = itemCards[index];

    if (!card) {
        return;
    }

    const nameElement = card.querySelector(".name-info p:first-child");
    const priceElement = card.querySelector(".name-info p:last-child");
    const button = card.querySelector("button");

    nameElement.textContent = product.name;
    priceElement.textContent = "$" + product.price;

    button.textContent = "Add to cart";
    button.addEventListener("click", function () {
        cart.push(product);
        renderCart();
    });
});

renderCart();