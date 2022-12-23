(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const p="/landingpage-new-year/assets/review-1.fb409a4f.jpg",d="/landingpage-new-year/assets/review-2.59fa329f.jpg",u="/landingpage-new-year/assets/review-3.0479a255.jpg",w="/landingpage-new-year/assets/review-4.75e180b8.jpg",g="/landingpage-new-year/assets/review-5.47a86831.jpg",f="/landingpage-new-year/assets/review-6.89321a4d.jpg",m="/landingpage-new-year/assets/review-7.ac6542d9.jpg",y=[p,d,u,w,g,f,m],v=y.map(t=>`
            <div class="swiper-slide">
              <img src="${t}" alt="">
            </div>
            `),b=document.querySelector("[reviewWrapper]");b.innerHTML=v.join("");new Swiper(".swiper",{loop:!0,spaceBetween:10,autoplay:{delay:5e3,pauseOnMouseEnter:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",rewind:!0},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:2,spaceBetween:40}}});(()=>{const t=new Date,o=new Date(t.getTime()+5*24*60*60*1e3),s=setInterval(()=>{const r=new Date,e=o-r,n=Math.floor(e/(1e3*60*60*24)),a=Math.floor(e%(1e3*60*60*24)/(1e3*60*60));var i=Math.floor(e%(1e3*60*60)/(1e3*60)),c=Math.floor(e%(1e3*60)/1e3);document.querySelectorAll(".countdown-clockWrapper").forEach(l=>l.innerHTML=`
        <div class="countdown-numberWrapper">
            <span class="countdown-number">${n}</span>
            <span class="countdown-prefix">Ng\xE0y</span>
        </div>
        <div class="countdown-numberWrapper">
            <span class="countdown-number">${a}</span>
            <span class="countdown-prefix">Gi\u1EDD</span>
        </div>
        <div class="countdown-numberWrapper">
            <span class="countdown-number">${i}</span>
            <span class="countdown-prefix">Ph\xFAt</span>
        </div>
        <div class="countdown-numberWrapper">
            <span class="countdown-number">${c}</span>
            <span class="countdown-prefix">Gi\xE2y</span>
        </div>
        `),e<0&&clearInterval(s)},1e3)})();const h=document.querySelectorAll("[video-controler]");h.forEach((t,o)=>{const s=t.closest(".video-wrapper"),r=s.querySelector(".play-icon"),e=s.querySelector(".arrow");s.onclick=function(){t.play(),t.setAttribute("controls","controls"),r.style.display="none",e.style.display="none"}});
