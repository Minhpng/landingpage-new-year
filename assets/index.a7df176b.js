(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const d="/landingpage-new-year/assets/review-1.fb409a4f.jpg",u="/landingpage-new-year/assets/review-2.59fa329f.jpg",w="/landingpage-new-year/assets/review-3.0479a255.jpg",g="/landingpage-new-year/assets/review-4.75e180b8.jpg",f="/landingpage-new-year/assets/review-5.47a86831.jpg",m="/landingpage-new-year/assets/review-6.89321a4d.jpg",v="/landingpage-new-year/assets/review-7.ac6542d9.jpg",i={img1:d,img2:u,img3:w,img4:g,img5:f,img6:m,img7:v};console.log(i);const y=Object.values(i).map(o=>`
            <div class="swiper-slide">
              <img src="${o}" alt="">
            </div>
            `),b=document.querySelector("[reviewWrapper]");b.innerHTML=y.join("");new Swiper(".swiper",{loop:!0,spaceBetween:10,autoplay:{delay:5e3,pauseOnMouseEnter:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",rewind:!0},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:2,spaceBetween:40}}});const h=()=>{const o=new Date,s=new Date(o.getTime()+5*24*60*60*1e3),a=setInterval(()=>{const r=new Date,e=s-r,n=Math.floor(e/(1e3*60*60*24)),t=Math.floor(e%(1e3*60*60*24)/(1e3*60*60));var c=Math.floor(e%(1e3*60*60)/(1e3*60)),l=Math.floor(e%(1e3*60)/1e3);document.querySelectorAll(".countdown-clockWrapper").forEach(p=>p.innerHTML=`
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${n}</span>
                <span class="countdown-prefix">Ng\xE0y</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${t}</span>
                <span class="countdown-prefix">Gi\u1EDD</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${c}</span>
                <span class="countdown-prefix">Ph\xFAt</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${l}</span>
                <span class="countdown-prefix">Gi\xE2y</span>
            </div>
            `),e<0&&clearInterval(a)},1e3)};h();
