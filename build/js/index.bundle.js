!function(){"use strict";(function(){const e=document.querySelector(".tegline__close"),n=document.querySelector(".tagline");e.onclick=function(){n.remove()}})(),new Swiper(".swiper",{slidesPerView:"auto",spaceBetween:12,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{820:{slidesPerView:"auto",spaceBetween:24}}}),function(){const e=new Date("March 29, 2024, 23:59:59"),n=document.querySelector("#days"),o=document.querySelector("#hours"),t=document.querySelector("#minutes"),c=document.querySelector("#seconds");function i(){const i=new Date,l=e-i;if(l<=0)return n.innerText="0",o.innerText="0",t.innerText="0",c.innerText="0",void clearInterval(void 0);const r=Math.floor(l/864e5),s=Math.floor(l%864e5/36e5),a=Math.floor(l%36e5/6e4),u=Math.floor(l%6e4/1e3);n.innerText=r<10?"0"+r:r,o.innerText=s<10?"0"+s:s,t.innerText=a<10?"0"+a:a,c.innerText=u<10?"0"+u:u}i(),setInterval(i,1e3)}(),function(){const e=document.querySelector("#mobile-nav-btn"),n=document.querySelector("#close-mobile-nav"),o=document.querySelector(".mobile-nav-fade"),t=document.querySelector(".mobile-nav");e.onclick=function(){t.classList.add("mobile-nav--open"),o.classList.add("mobile-nav-fade--open"),document.body.classList.toggle("no-scroll")},n.onclick=function(){t.classList.remove("mobile-nav--open"),o.classList.remove("mobile-nav-fade--open"),document.body.classList.toggle("no-scroll")},o.onclick=function(){t.classList.remove("mobile-nav--open"),o.classList.remove("mobile-nav-fade--open"),document.body.classList.toggle("no-scroll")}}()}();