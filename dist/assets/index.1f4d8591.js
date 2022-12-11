(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const p=[{src:"./assets/img/comment/review-20.jpg"},{src:"./assets/img/comment/review-21.jpg"},{src:"./assets/img/comment/review-22.jpg"},{src:"./assets/img/comment/review-24.jpg"},{src:"./assets/img/comment/review-26.jpg"},{src:"./assets/img/comment/review-27.jpg"},{src:"./assets/img/comment/review-28.jpg"},{src:"./assets/img/comment/review-29.jpg"},{src:"./assets/img/comment/review-32.jpg"},{src:"./assets/img/comment/review-33.jpg"},{src:"./assets/img/comment/review-37.jpg"},{src:"./assets/img/comment/review-40.jpg"},{src:"./assets/img/comment/review-45.jpg"},{src:"./assets/img/comment/review-51.jpg"},{src:"./assets/img/comment/review-54.jpg"},{src:"./assets/img/comment/review-57.jpg"},{src:"./assets/img/comment/review-58.jpg"},{src:"./assets/img/comment/review-61.jpg"},{src:"./assets/img/comment/review-69.jpg"},{src:"./assets/img/comment/review-73.jpg"},{src:"./assets/img/comment/review-75.jpg"},{src:"./assets/img/comment/review-77.jpg"}],l=p.map(r=>`
            <div class="swiper-slide">
              <img src="${r.src}" alt="">
            </div>
            `),u=document.querySelector("[reviewWrapper]");u.innerHTML=l.join("");new Swiper(".swiper",{loop:!0,spaceBetween:10,autoplay:{delay:5e3,pauseOnMouseEnter:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",rewind:!0},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:2,spaceBetween:40}}});const w=()=>{const r=new Date,n=new Date(r.getTime()+5*24*60*60*1e3),c=setInterval(()=>{const o=new Date,e=n-o,s=Math.floor(e/(1e3*60*60*24)),t=Math.floor(e%(1e3*60*60*24)/(1e3*60*60));var i=Math.floor(e%(1e3*60*60)/(1e3*60)),a=Math.floor(e%(1e3*60)/1e3);document.querySelectorAll(".countdown-clockWrapper").forEach(m=>m.innerHTML=`
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${s}</span>
                <span class="countdown-prefix">Ng\xE0y</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${t}</span>
                <span class="countdown-prefix">Gi\u1EDD</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${i}</span>
                <span class="countdown-prefix">Ph\xFAt</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${a}</span>
                <span class="countdown-prefix">Gi\xE2y</span>
            </div>
            `),e<0&&clearInterval(c)},1e3);console.log(n)};w();
