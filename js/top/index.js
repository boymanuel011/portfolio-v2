!function e(o,t,n){function r(u,d){if(!t[u]){if(!o[u]){var s="function"==typeof require&&require;if(!d&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=t[u]={exports:{}};o[u][0].call(c.exports,(function(e){return r(o[u][1][e]||e)}),c,c.exports,e,o,t,n)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)r(n[u]);return r}({1:[function(e,o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=document.querySelectorAll(".portfolio__mv-title-animate");if(e)for(var o=function(o){e[o].addEventListener("animationend",(function(){e[o].classList.remove("on-hover")})),e[o].addEventListener("mouseover",(function(){e[o].classList.add("on-hover")}))},t=0;t<=e.length;t++)o(t)}},{}],2:[function(e,o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=document.querySelector(".js-works-slider1"),o=document.querySelector(".js-works-slider2");e&&(Splide.defaults={type:"loop",focus:"center",autoWidth:!0,pagination:!1,arrows:!1,perPage:5,gap:10,autoScroll:{speed:.3,pauseOnHover:!0}},new Splide(e,{}).mount(window.splide.Extensions));o&&(Splide.defaults={type:"loop",focus:"center",autoWidth:!0,pagination:!1,arrows:!1,perPage:5,gap:10,direction:"rtl",autoScroll:{speed:.3,pauseOnHover:!0}},new Splide(o,{}).mount(window.splide.Extensions))}},{}],3:[function(e,o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){console.log("top")}},{}],4:[function(e,o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){var o=document.querySelector(".js-video");o instanceof HTMLVideoElement?(o.play().catch((function(e){console.error("Error playing video:",e)})),o.addEventListener("ended",(function(){o.play().catch((function(e){console.error("Error playing video:",e)}))}))):console.warn('No video element found with the class "js-video".'),document.addEventListener("DOMContentLoaded",e)}},{}],5:[function(e,o,t){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(e("./components/test")),i=n(e("../top/components/splide")),u=n(e("../top/components/video")),d=n(e("../top/components/animateHover"));document.addEventListener("DOMContentLoaded",(function(){(0,r.default)(),(0,i.default)(),(0,u.default)(),(0,d.default)()}),!1)},{"../top/components/animateHover":1,"../top/components/splide":2,"../top/components/video":4,"./components/test":3}]},{},[5]);
//# sourceMappingURL=index.js.map
