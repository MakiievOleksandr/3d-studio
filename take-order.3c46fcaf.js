window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,o){o=o||window;for(var e=0;e<this.length;e++)t.call(o,this[e],e,this)}),document.querySelectorAll(".dropdown").forEach((function(t){var o=t.querySelector(".dropdown__button"),e=t.querySelector(".dropdown__list"),i=e.querySelectorAll(".dropdown__list-item"),n=t.querySelector(".dropdown__input-hidden");o.addEventListener("click",(function(t){e.classList.toggle("dropdown__list--visible"),this.classList.toggle("dropdown__button--active")})),i.forEach((function(t){t.addEventListener("click",(function(t){t.stopPropagation(),o.innerText=this.innerText,o.focus(),n.value=this.dataset.value,e.classList.remove("dropdown__list--visible"),o.classList.remove("dropdown__button--active")}))})),document.addEventListener("click",(function(t){t.target!==o&&(o.classList.remove("dropdown__button--active"),e.classList.remove("dropdown__list--visible"))})),document.addEventListener("keydown",(function(t){"Tab"!==t.key&&"Escape"!==t.key||(o.classList.remove("dropdown__button--active"),e.classList.remove("dropdown__list--visible"))}))}));
//# sourceMappingURL=take-order.3c46fcaf.js.map