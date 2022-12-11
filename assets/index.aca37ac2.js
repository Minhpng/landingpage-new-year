(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const o="/landingpage-new-year/assets/review-20.60e66f96.jpg",d="/landingpage-new-year/assets/review-21.213f1b91.jpg",w="/landingpage-new-year/assets/review-22.c089984d.jpg",u="/landingpage-new-year/assets/review-24.f145cf39.jpg",m="/landingpage-new-year/assets/review-26.9a2f2aa9.jpg",f="/landingpage-new-year/assets/review-27.cfcb4bd1.jpg",v="/landingpage-new-year/assets/review-28.d973bfa9.jpg",y="/landingpage-new-year/assets/review-29.236d2cdb.jpg",b="/landingpage-new-year/assets/review-32.4580f584.jpg",j="/landingpage-new-year/assets/review-33.fe5ffda6.jpg",h="/landingpage-new-year/assets/review-37.186a8b32.jpg",M="/landingpage-new-year/assets/review-40.92992ccf.jpg",x="/landingpage-new-year/assets/review-45.65d227d9.jpg",E="/landingpage-new-year/assets/review-51.52dddd11.jpg",L="/landingpage-new-year/assets/review-54.045124d5.jpg",W="/landingpage-new-year/assets/review-57.7be7e9ef.jpg",O="/landingpage-new-year/assets/review-58.5c1ac114.jpg",D="/landingpage-new-year/assets/review-61.1a33db05.jpg",P="/landingpage-new-year/assets/review-69.cc5f2489.jpg",$="/landingpage-new-year/assets/review-73.0ce69172.jpg",N="/landingpage-new-year/assets/review-75.e68c1b91.jpg",S="/landingpage-new-year/assets/review-77.61eb3bdc.jpg",c={img1:o,img2:d,img3:w,img4:u,img5:o,img6:m,img7:f,img8:v,img9:y,img0:b,img11:j,img12:h,img13:M,img14:x,img15:E,img16:L,img17:W,img18:O,img19:D,img20:P,img21:$,img22:N,img123:S};console.log(c);const k=Object.values(c).map(t=>`
            <div class="swiper-slide">
              <img src="${t}" alt="">
            </div>
            `),q=document.querySelector("[reviewWrapper]");q.innerHTML=k.join("");new Swiper(".swiper",{loop:!0,spaceBetween:10,autoplay:{delay:5e3,pauseOnMouseEnter:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",rewind:!0},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:2,spaceBetween:40}}});const B=()=>{const t=new Date,s=new Date(t.getTime()+5*24*60*60*1e3),i=setInterval(()=>{const r=new Date,e=s-r,n=Math.floor(e/(1e3*60*60*24)),a=Math.floor(e%(1e3*60*60*24)/(1e3*60*60));var p=Math.floor(e%(1e3*60*60)/(1e3*60)),g=Math.floor(e%(1e3*60)/1e3);document.querySelectorAll(".countdown-clockWrapper").forEach(l=>l.innerHTML=`
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${n}</span>
                <span class="countdown-prefix">Ng\xE0y</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${a}</span>
                <span class="countdown-prefix">Gi\u1EDD</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${p}</span>
                <span class="countdown-prefix">Ph\xFAt</span>
            </div>
            <div class="countdown-numberWrapper">
                <span class="countdown-number">${g}</span>
                <span class="countdown-prefix">Gi\xE2y</span>
            </div>
            `),e<0&&clearInterval(i)},1e3)};B();
