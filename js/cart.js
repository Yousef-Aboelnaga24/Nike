const rowProducts = document.getElementById('cart-row')
const allProductsCart = localStorage.getItem('cart')

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

if (allProductsCart) {
    let items = JSON.parse(allProductsCart)
    drawItems(items)
}

function drawItems(products) {
    let items = products.map((product) => {
        return `<div class="col-md-3 my-3">
                    <div class="card h-100 shadow-lg text-center position-relative overflow-hidden product p-3">

                        <div class="abs-icon d-flex flex-column gap-2">
                            <button
                                class="btn btn-outline-danger shadow-sm d-flex justify-content-center align-items-center">
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
                            <h5 class="fw-bold mb-2 text-truncate" title="${product.name}">${product.name.toUpperCase()}
                            </h5>

                            <p class="text-muted small mb-2" style="min-height: 40px;">${product.desc}</p>

                            <div class="text-warning mb-2">
                                ${getStars(product.rating)}
                            </div>

                            <h6 class="text-primary fw-bold mb-3">$${product.price}</h6>

                            <button class="btn btn-danger mt-auto w-100 add-cart"
                                onClick="removeItem(${product.id})" data-price="${product.price}">
                                <i class="fas fa-trash me-1"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>`}).join('')
    rowProducts.innerHTML = items
}

function removeItem(id) {
    const products = JSON.parse(localStorage.getItem('cart')) || []
    let product = products.filter(item => item.id !== id)

    localStorage.setItem('cart', JSON.stringify(product))

    drawItems(product)
}