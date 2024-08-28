document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");
    const productList = document.getElementById("product-list");

    // Sample product data
    const products = [
        { id: 1, name: "T-Shirt", image: "images/tshirt.jpg", price: "$20" },
        { id: 2, name: "Jeans", image: "images/jeans.jpg", price: "$40" },
        { id: 3, name: "Jacket", image: "images/jacket.jpg", price: "$60" },
        { id: 4, name: "Sneakers", image: "images/sneakers.jpg", price: "$50" },
        { id: 5, name: "Cap", image: "images/cap.jpg", price: "$15" },
        { id: 6, name: "Jacke", image: "images/jacke.jpg", price: "$700" },
        
    ];

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query.length > 2) {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query)
            );

            if (filteredProducts.length === 0) {
                searchResults.innerHTML = "<div class='p-2 text-gray-500'>No results found</div>";
            } else {
                filteredProducts.forEach(product => {
                    const resultItem = document.createElement("div");
                    resultItem.className = "p-2 hover:bg-gray-200 cursor-pointer";
                    resultItem.textContent = product.name;
                    resultItem.addEventListener("click", () => displayProduct(product));
                    searchResults.appendChild(resultItem);
                });
            }
        }
    });

    function displayProduct(product) {
        searchResults.innerHTML = "";
        productList.innerHTML = `
            <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-lg mb-4">
                <h2 class="text-2xl font-bold mb-2">${product.name}</h2>
                <p class="text-lg font-semibold">${product.price}</p>
            </div>
        `;
    }
});
