import './scss/styles.scss'



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
const htmlReview = reviewList.map((review) => {
    return `
            <div class="swiper-slide">
              <img src="${review.src}" alt="">
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