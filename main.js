import './scss/styles.scss'

import img1 from './assets/img/comment/review-1.jpg'
import img2 from './assets/img/comment/review-2.jpg'
import img3 from './assets/img/comment/review-3.jpg'
import img4 from './assets/img/comment/review-4.jpg'
import img5 from './assets/img/comment/review-5.jpg'
import img6 from './assets/img/comment/review-6.jpg'
import img7 from './assets/img/comment/review-7.jpg'



const reviewList = [
    { src: "./assets/img/comment/review-20.jpg" },
    { src: "./assets/img/comment/review-21.jpg" },
    { src: "./assets/img/comment/review-22.jpg" },
    { src: "./assets/img/comment/review-24.jpg" },
    { src: "./assets/img/comment/review-26.jpg" },
    { src: "./assets/img/comment/review-27.jpg" },
    { src: "./assets/img/comment/review-28.jpg" },
    { src: "./assets/img/comment/review-29.jpg" },
    { src: "./assets/img/comment/review-32.jpg" },
    { src: "./assets/img/comment/review-33.jpg" },
    { src: "./assets/img/comment/review-37.jpg" },
    { src: "./assets/img/comment/review-40.jpg" },
    { src: "./assets/img/comment/review-45.jpg" },
    { src: "./assets/img/comment/review-51.jpg" },
    { src: "./assets/img/comment/review-54.jpg" },
    { src: "./assets/img/comment/review-57.jpg" },
    { src: "./assets/img/comment/review-58.jpg" },
    { src: "./assets/img/comment/review-61.jpg" },
    { src: "./assets/img/comment/review-69.jpg" },
    { src: "./assets/img/comment/review-73.jpg" },
    { src: "./assets/img/comment/review-75.jpg" },
    { src: "./assets/img/comment/review-77.jpg" },
]

const img = {
    img1, img2, img3, img4, img5, img6, img7
}

console.log(img);


// const htmlReview = reviewList.map((review) => {
//     return `
//             <div class="swiper-slide">
//               <img src="${review.src}" alt="">
//             </div>
//             `
// })
const htmlReview = Object.values(img).map((review) => {
    return `
            <div class="swiper-slide">
              <img src="${review}" alt="">
            </div>
            `
})

const reviewWrapper = document.querySelector("[reviewWrapper]")
reviewWrapper.innerHTML = htmlReview.join("")

const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 10,

    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        rewind: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
})

const countDown = () => {

    const now = new Date()
    const endDay = new Date(now.getTime() + (5 * 24 * 60 * 60 * 1000))

    const x = setInterval(() => {
        const now = new Date()

        const distance = endDay - now

        const day = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownElement = document.querySelectorAll('.countdown-clockWrapper')

        countdownElement.forEach((countdown) =>
            countdown.innerHTML = `
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${day}</span>
                <span class="countdown-prefix">Ngày</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-prefix">Giờ</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-prefix">Phút</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-prefix">Giây</span>
            </div>
            `
        )

        if (distance < 0) {
            clearInterval(x)
        }

    }, 1000)
}

countDown()