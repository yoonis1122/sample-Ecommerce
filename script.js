const products = [{
        image: "1.png",
        name: "nike",
        price: 100
    },
    {
        image: "2.png",
        name: "sandal",
        price: 500
    },
    {
        image: "10.png",
        name: "shoes",
        price: 200
    }
]

let htmlproducts = ``;
products.forEach((items) => {
    htmlproducts += `
    <div class="car-item">
        <div class="imges"><img src="${items.image}" alt=""></div>
        <h4 class="img-name">${items.name}</h4>
        <p class="pricecart">$${items.price}</p>
        <button class="btn-add js-add-tocart" data-product-name="${items.name}">
            AdToCart
        </button>
    </div>
    `;
});

document.querySelector(".js-cards-wep").innerHTML = htmlproducts;

const btn_add = document.querySelectorAll(".js-add-tocart");

btn_add.forEach((btn) => {
    btn.addEventListener("click", () => {
        const productName = btn.dataset.productName; // Waxaad halkan ka arkaysaa magaca item-ka

        let machinItem;
        car.forEach((item) => {
            if (productName == item.productName) {
                machinItem = item
            }
        })

        if (machinItem) {
            machinItem.quantity += 1
        } else {
            car.push({
                productName: productName,
                quantity: 1
            })
        }

        let cartquantity = 0;

        car.forEach((totalquantity) => {
            cartquantity += totalquantity.quantity

        })

        document.querySelector(".total-counter").innerHTML = cartquantity
        
        console.log(cartquantity)
        console.log(car)
    });

});