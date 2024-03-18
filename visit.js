document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
  
    // Sample data (you can replace this with your actual data)
    const items = [
      { image: "https://via.placeholder.com/150", description: "Description 1", rating: 4, price: "$20" },
      { image: "https://via.placeholder.com/150", description: "Description 2", rating: 3, price: "$25" },
      { image: "https://via.placeholder.com/150", description: "Description 3", rating: 5, price: "$30" },
      { image: "https://via.placeholder.com/150", description: "Description 4", rating: 2, price: "$35" },
      { image: "https://via.placeholder.com/150", description: "Description 5", rating: 4, price: "$40" },
      { image: "https://via.placeholder.com/150", description: "Description 6", rating: 3, price: "$45" },
      { image: "https://via.placeholder.com/150", description: "Description 7", rating: 5, price: "$50" },
      { image: "https://via.placeholder.com/150", description: "Description 8", rating: 2, price: "$55" },
      { image: "https://via.placeholder.com/150", description: "Description 9", rating: 4, price: "$60" },
      { image: "https://via.placeholder.com/150", description: "Description 10", rating: 3, price: "$65" },
      { image: "https://via.placeholder.com/150", description: "Description 11", rating: 5, price: "$70" },
      { image: "https://via.placeholder.com/150", description: "Description 12", rating: 2, price: "$75" },
      { image: "https://via.placeholder.com/150", description: "Description 13", rating: 4, price: "$80" },
      { image: "https://via.placeholder.com/150", description: "Description 14", rating: 3, price: "$85" },
      { image: "https://via.placeholder.com/150", description: "Description 15", rating: 5, price: "$90" },
      { image: "https://via.placeholder.com/150", description: "Description 16", rating: 2, price: "$95" },
    ];
  
    // Function to create HTML for each item
    function createItem(item) {
      const div = document.createElement("div");
      div.classList.add("item");
  
      const img = document.createElement("img");
      img.src = item.image;
      div.appendChild(img);
  
      const description = document.createElement("div");
      description.classList.add("description");
      description.textContent = item.description;
      div.appendChild(description);
  
      const rating = document.createElement("div");
      rating.classList.add("rating");
      rating.textContent = "Rating: " + "★".repeat(item.rating);
      div.appendChild(rating);
  
      const price = document.createElement("div");
      price.classList.add("price");
      price.textContent = "Price: " + item.price;
      div.appendChild(price);
  
      return div;
    }
  
    // Function to render items
    function renderItems(startIndex, endIndex) {
      gallery.innerHTML = "";
      for (let i = startIndex; i < endIndex; i++) {
        const itemElement = createItem(items[i]);
        gallery.appendChild(itemElement);
      }
    }
  
    // Initial render (showing only 4 items)
    renderItems(0, 4);
  
    // Event listener for view all button
    const viewAllBtn = document.getElementById("viewAllBtn");
    viewAllBtn.addEventListener("click", function() {
      // Render all items
      renderItems(0, items.length);
    });
  });
  