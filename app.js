const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
]

const wrapper = document.querySelector('.slider__wrapper')
const menuItems = document.querySelectorAll('.menu-item')
const currentProductImg = document.querySelector('.product__img')
let currentProductTitle = document.querySelector('.product__title')
let currentProductPrice = document.querySelector('.product__price')
const currentProductCollors = document.querySelectorAll('.color')
const currentProductSizes = document.querySelectorAll('.size')


let currentProduct = products[0]

menuItems.forEach((el, index) => {
    el.addEventListener('click', () => {
        // change the current slide
        wrapper.style.transform = `translateX(-${index * 100}vw)`

        // change the current product values
        currentProduct = products[index]
        currentProductTitle.textContent = currentProduct.title
        currentProductPrice.textContent = '$' + currentProduct.price
        currentProductImg.src = currentProduct.colors[0].img
        currentProductCollors.forEach((color, index) => {
            color.style.backgroundColor = currentProduct.colors[index].code
        })
        currentProductCollors[0].style.backgroundColor = currentProduct.colors[0].code
        currentProductCollors[1].style.backgroundColor = currentProduct.colors[1].code
    })
})

currentProductCollors.forEach((el, index) => {
    el.addEventListener('click', () => {
        currentProductImg.src = currentProduct.colors[index].img
    })
})

currentProductSizes.forEach((el, index) => {

    el.addEventListener('click', () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = 'white'
            size.style.color = '#222'
        })
        currentProductSizes[index].style.backgroundColor = '#222'
        currentProductSizes[index].style.color = 'white'
    })
})

const closePaymentButton = document.querySelector('.close')
const productButton = document.querySelector('.product__button')
const payment = document.querySelector('.payment')

productButton.addEventListener('click', () => {
    payment.style.display = 'flex'
})

closePaymentButton.addEventListener('click', () => {
    payment.style.display = 'none'
})
