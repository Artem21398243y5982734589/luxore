const products = [
    {
        name: "T-Shirt",
        price: "$20",
        imageUrl: "path/to/tshirt.jpg"
    },
    {
        name: "Jeans",
        price: "$40",
        imageUrl: "path/to/jeans.jpg"
    },
    {
        name: "Jacket",
        price: "$60",
        imageUrl: "path/to/jacket.jpg"
    },
    {
        name: "Sneakers",
        price: "$50",
        imageUrl: "path/to/sneakers.jpg"
    },
    {
        name: "Hat",
        price: "$15",
        imageUrl: "path/to/hat.jpg"
    }
];

const productsContainer = document.getElementById('products');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-item';

    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productImage.alt = product.name;

    const productInfo = document.createElement('div');
    productInfo.className = 'product-info';

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);

    productDiv.appendChild(productImage);
    productDiv.appendChild(productInfo);

    productsContainer.appendChild(productDiv);
});
