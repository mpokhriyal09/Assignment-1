const textContainer = document.querySelector(".text-container1");
const texts = ["Summer Sale! Up to 40% off!", "Grab the best deals!", "Sign up for free!"];
let currentTextIndex = 0;

function showNextText() {
  if (currentTextIndex < texts.length) {
    textContainer.textContent = texts[currentTextIndex];
    currentTextIndex++;
  } else {
    // Reset index and optionally clear text
    currentTextIndex = 0
    textContainer.textContent = "";
  }
}

showNextText(); // Call initially to display the first text

setInterval(showNextText, 5000); // Change text every 5 seconds
function showProducts() {
  // Simulate fetching product data
  const products = [
    { name: "T-Shirt", price: 20, image: "images/tshirt.jpg" },
    { name: "Jeans", price: 50, image: "images/jeans.jpg" },
    // Add more products here
  ];

  // Clear the existing product container
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";

  // Create and display product elements
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price}`;

    const productImage = document.createElement("img");
    productImage.src = product.image;

    productElement.appendChild(productName);
    productElement.appendChild(productPrice);
    productElement.appendChild(productImage);

    productContainer.appendChild(productElement);
  });

  // Show the products section
  const productsSection = document.getElementById("products");
  productsSection.style.display = "block";
}

