// Variables
const rowProducts = document.getElementById('row-1')
const rowCustomers = document.getElementById('row-2')
const thumbs = document.querySelectorAll('.thumb-img');
const displayImg = document.getElementById('display-img');
const totalProduct = document.getElementById("cart-count");
const totalPrice = document.getElementById('cart-total')

// Change Image
thumbs.forEach(thumb => {
    thumb.addEventListener('click', function () {
        displayImg.src = this.src;
        thumbs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        displayImg.style.opacity = '0';
        setTimeout(() => {
            displayImg.style.opacity = '1';
        }, 100);
    });
});

// Get Rating
function getStars(rating) {
    let stars = ''
    let full = Math.floor(rating)
    let half = rating % 1 !== 0

    for (let i = 0; i < full; i++) {
        stars += `<i class="fa-solid fa-star"></i>`
    }

    if (half) {
        stars += `<i class="fa-solid fa-star-half-stroke"></i>`
    }

    let empty = 5 - Math.ceil(rating)
    for (let i = 0; i < empty; i++) {
        stars += `<i class="fa-regular fa-star"></i>`
    }

    return stars
}

// Products Data
const products = [
    {
        id: 1,
        name: 'Nike Air Max',
        desc: 'Comfortable running shoes with modern design.',
        price: 130,
        image: 'shoes1.png',
        category: 'running',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Nike Revolution',
        desc: 'Lightweight shoes perfect for daily workouts.',
        price: 110,
        image: 'shoes2.png',
        category: 'training',
        rating: 4
    },
    {
        id: 3,
        name: 'Nike Zoom',
        desc: 'High performance shoes for athletes.',
        price: 150,
        image: 'shoes3.png',
        category: 'sport',
        rating: 5
    },
    {
        id: 4,
        name: 'Nike Pegasus',
        desc: 'Smooth ride and responsive cushioning.',
        price: 140,
        image: 'shoes4.png',
        category: 'running',
        rating: 4.5
    },
    {
        id: 5,
        name: 'Nike Downshifter',
        desc: 'Affordable and durable everyday shoes.',
        price: 90,
        image: 'shoes5.png',
        category: 'casual',
        rating: 3.5
    },
    {
        id: 6,
        name: 'Nike Free Run',
        desc: 'Flexible design for natural movement.',
        price: 120,
        image: 'shoes6.png',
        category: 'running',
        rating: 4
    },
    {
        id: 7,
        name: 'Nike Court Vision',
        desc: 'Classic style inspired by basketball.',
        price: 100,
        image: 'shoes7.png',
        category: 'basketball',
        rating: 4
    },
    {
        id: 8,
        name: 'Nike Blazer',
        desc: 'Retro look with modern comfort.',
        price: 135,
        image: 'shoes8.png',
        category: 'casual',
        rating: 4.5
    }
];

function drawItem() {

    let items = products.map(product => `<div class="col-md-3 my-3">
            <div class="card h-100 shadow-sm text-center position-relative overflow-hidden product p-3">

                <div class="abs-icon d-flex flex-column gap-2">
                    <button class="btn btn-outline-danger shadow-sm d-flex justify-content-center align-items-center">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button
                        class="btn btn-outline-secondary shadow-sm d-flex justify-content-center align-items-center">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
                <img class="card-img-top w-75 mx-auto my-3" src="./image/${product.image}" alt="${product.name}"
                    loading="lazy" />

                <div class="card-body d-flex flex-column">
                    <h5 class="fw-bold mb-2 text-truncate" title="${product.name}">${product.name.toUpperCase()}</h5>

                    <p class="text-muted small mb-2" style="min-height: 40px;">${product.desc}</p>

                    <div class="text-warning mb-2">
                        ${getStars(product.rating)}
                    </div>

                    <h6 class="text-primary fw-bold mb-3">$${product.price}</h6>

                    <button class="btn btn-primary mt-auto w-100 add-cart" onClick="addToCart(${product.id},this)"
                        data-price="${product.price}">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>`).join('')

    rowProducts.innerHTML = items
}
drawItem()

let productItem = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

// Cart Function
function drawCart() {
    const productsText = document.getElementById('cart-items')

    productsText.innerHTML = ""
    let total = 0

    productItem.forEach(item => {
        productsText.innerHTML += `
            <div class="cart-item p-1 my-1 border border-1">
                <img src="./image/${item.image}" width="30">
                <span>${item.name}</span>
            </div>`

        total += item.price
    })
    totalPrice.textContent = total
}
drawCart()

// Add To Cart
totalProduct.textContent = productItem.length
totalProduct.classList.toggle('bg-success', productItem.length > 0)
totalProduct.classList.toggle('bg-danger', productItem.length === 0)

function addToCart(id, btn) {

    let product = products.find((item) => item.id === id)

    productItem.push(product);
    localStorage.setItem('cart', JSON.stringify(productItem));

    if (productItem.length === 0) {
        totalProduct.textContent = '<p class="dropdown-item text-center">Cart is empty</p>'
    } else {
        totalProduct.textContent = productItem.length;
    }
    totalProduct.classList.replace('bg-danger', 'bg-success');

    btn.innerHTML = '<i class="fas fa-check"></i> Added';
    btn.classList.replace('btn-primary', 'btn-success');

    setTimeout(() => {
        btn.innerHTML = 'Buy Now';
        btn.classList.replace('btn-success', 'btn-primary');
    }, 1500);

    drawCart()

}

// *=====================*

// Customer Data
const customers = [
    {
        id: 1,
        name: "Sara Ahmed",
        desc: "Great service and fast delivery!",
        img: "gir_dp1.jpg",
        rating: 5
    },
    {
        id: 2,
        name: "Mohamed Ali",
        desc: "Good quality products, satisfied.",
        img: "man_dp1.jpg",
        rating: 2.5
    },
    {
        id: 3,
        name: "Laila Hassan",
        desc: "Amazing designs and comfortable shoes.",
        img: "gir_dp3.jpg",
        rating: 4.5
    },
    {
        id: 4,
        name: "Mona Khaled",
        desc: "Could be better, shipping was slow.",
        img: "gir_dp2.jpg",
        rating: 2
    },
    {
        id: 5,
        name: "Omar Salah",
        desc: "Affordable and reliable, will buy again.",
        img: "man_dp3.jpg",
        rating: 3
    },
    {
        id: 6,
        name: "Khaled Youssef",
        desc: "Excellent quality and friendly support.",
        img: "man_dp2.jpg",
        rating: 4
    }
]
rowCustomers.innerHTML = customers.map(customer => `
    <div class="col-md-4 mb-4">
        <div class="review-card p-4 h-100 shadow-sm border-0">
            <div class="d-flex align-items-center gap-3 mb-3">
                <div class="avatar-wrapper">
                    <img src="./image/${customer.img}" 
                         class="rounded-circle shadow-sm" 
                         width="70" height="70"
                         style="object-fit: cover;"
                         alt="${customer.name || "Anonymous"}">
                </div>
                <div>
                    <h6 class="mb-0 fw-bold">${customer.name || "Anonymous"}</h6>
                    <div class="text-warning small">
                        ${getStars(customer.rating)}
                    </div>
                </div>
            </div>
            <div class="quote-icon mb-2">
                <i class="fa fa-quote-left text-light-gray" style="opacity: 0.3;"></i>
            </div>
            <p class="mb-0 text-muted fst-italic">
                "${customer.desc || "No review provided."}"
            </p>
        </div>
    </div>
`).join('')