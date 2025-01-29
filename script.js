// Sample product data
const products = [
    // Tools
    {
        category: "Tools",
        type: "Tractors",
        name: "John Deere 5050E",
        description: "Efficient and reliable tractor for all farming needs.",
        price: "$20,000",
        image: "images/johndeer.jpg",
        rentPrice: "$500/day",
        featured: true
    },
    {
        category: "Tools",
        type: "Tractors",
        name: "Mahindra 575 DI",
        description: "Powerful tractor with fuel-efficient technology.",
        price: "$18,500",
        image: "images/mahindra.jpg",
        rentPrice: "$450/day",
        featured: false
    },
      {
        category: "Tools",
        type: "Tractors",
        name: "Swaraj 575 DI",
        description: "Powerful tractor with fuel-efficient technology.",
        price: "$18,500",
        image: "images/swaraj.jpg",
        rentPrice: "$450/day",
        featured: false
    },
    {
        category: "Tools",
        type: "Harvesters",
        name: "Kubota DC-68G",
        description: "High-performance harvester for multiple crops.",
        price: "$30,000",
        image: "images/harvester.jpg",
        rentPrice: "$700/day",
        featured: true
    },
    {
        category: "Tools",
        type: "Ploughers",
        name: "Lemken Opal 090",
        description: "Durable and efficient plough for soil preparation.",
        price: "$5,500",
        image: "images/disc plougher.jpg",
        rentPrice: "$150/day",
         featured: false
    },
    {
        category: "Tools",
        type: "Sprayers",
        name: "Honda Backpack Sprayer",
        description: "Portable sprayer for effective pesticide application.",
        price: "$350",
        image: "images/bsprayer.jpg",
        rentPrice: "$20/day",
        featured: false
    },
    {
        category: "Tools",
        type: "Rotavators",
        name: "Shaktiman Regular Rotavator",
        description: "Best for soil tilling and weed removal.",
        price: "$4,000",
        image: "images/rotary plough.jpg",
        rentPrice: "$100/day",
         featured: false
    },

    // Seeds
    {
        category: "Seeds",
        type: "Rice Seeds",
        name: "Basmati 1121",
        description: "Premium quality basmati rice seeds for high yield.",
        price: "$100 per kg",
        image: "images/rice.jpg",
        featured: true
    },
    {
        category: "Seeds",
        type: "Wheat Seeds",
        name: "HD 2967",
        description: "Popular wheat variety with high resistance.",
        price: "$80 per kg",
        image: "images/wheat.jpg",
         featured: false
    },
    {
        category: "Seeds",
        type: "Soybean Seeds",
        name: "JS 335",
        description: "Early maturing soybean variety with good yield.",
        price: "$75 per kg",
        image: "images/soyabeens.jpg",
        featured: false
    },

    // Pesticides
    
     {
        category: "Pesticides",
        type: "Insecticide",
        name: "Neemoil",
        description: "Systemic insecticide for pest control.",
        price: "$35 per liter",
        image: "images/neem oil.jpg",
         featured: false
    },
    {
        category: "Pesticides",
        type: "Fungicide",
        name: "Carbendazim",
        description: "Broad-spectrum fungicide for plant diseases.",
        price: "$45 per liter",
        image: "images/pest.jpg",
         featured: false
    },
    {
        category: "Pesticides",
        type: "Insecticide",
        name: "Chlorpyrifos",
        description: "Widely used insecticide for pest management.",
        price: "$38 per liter",
        image: "images/insectiside.jpg",
        featured: false
    }
];

// Function to filter featured products for the home page
function filterFeaturedProducts(){
  return products.filter(product => product.featured === true);
}

// Function to display products
function displayProducts(filteredProducts = products, targetElementId = "productList") {
    const productList = document.getElementById(targetElementId);
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            ${product.rentPrice ? `<p>Rent: ${product.rentPrice}</p>` : ''}
            <button onclick="rentProduct('${product.name}')">Rent</button>
            <button onclick="buyProduct('${product.name}')">Buy</button>
        `;
        productList.appendChild(productCard);
    });
}

// Function to rent a product
function rentProduct(productName) {
    alert(`You have rented ${productName}. Thank you!`);
}

// Function to buy a product
function buyProduct(productName) {
    alert(`You have purchased ${productName}. Thank you!`);
}

// Function to search products
function searchProducts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.type.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Function to sort products by price
function sortProducts(sortOrder) {
    const sortedProducts = [...products].sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
        return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
    displayProducts(sortedProducts);
}

// Function to filter products by category
function filterProductsByCategory(category) {
    let filteredProducts;
    if (category === "all") {
        filteredProducts = products;
    } else {
       filteredProducts = products.filter(product => product.category === category);
    }
    displayProducts(filteredProducts);
}

// Form validation for Contact Us page
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }
    return true;
}