"use strict";(globalThis.blocksyJsonP=globalThis.blocksyJsonP||[]).push([[142],{142:function(t,e,n){n.r(e),n.d(e,{handleUpdate:function(){return d},mountMenuLevel:function(){return l}});var i=n(846);const s=function(t){return t.classList.contains("animated-submenu")&&(!t.parentNode.classList.contains("menu")||-1===t.className.indexOf("ct-mega-menu")&&t.parentNode.classList.contains("menu"))},a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),r=function(t,e){let{startPosition:n="end"}=e;const i=t.querySelector(".sub-menu"),s=function(t){const e=function(t,e){for(var n=[];t.parentNode;)t.parentNode&&t.parentNode.matches&&t.parentNode.matches("li.menu-item")&&n.push(t.parentNode),t=t.parentNode;return n[n.length-1]}(t);return e&&e.querySelector(".sub-menu .sub-menu .sub-menu")?e.getBoundingClientRect().left>innerWidth/2?"left":"right":"rtl"===document.querySelector("html").dir?"left":"right"}(i),{left:a,width:r,right:o}=i.getBoundingClientRect();let c=s,l=t.getBoundingClientRect();"left"===s&&("end"===n?l.left:l.right)-r<0&&(c="right"),"right"===s&&("end"===n?l.right:l.left)+r>innerWidth&&(c="left"),t.dataset.submenu=c,t.addEventListener("click",(function(){}))},o=function(t){const e=t.target.closest("li");e.classList.add("ct-active");let n=[...e.children].find((function(t){return t.matches(".ct-toggle-dropdown-desktop-ghost")}));n||(n=e.firstElementChild),n&&(n.setAttribute("aria-expanded","true"),"button"===n.tagName.toLowerCase()&&n.setAttribute("aria-label",ct_localizations.collapse_submenu)),u({target:e})},c=function(t){if(!t.target)return;const e=t.target.closest("li");e.classList.remove("ct-active");let n=[...e.children].find((function(t){return t.matches(".ct-toggle-dropdown-desktop-ghost")}));n||(n=e.firstElementChild),n&&(n.setAttribute("aria-expanded","false"),"button"===n.tagName.toLowerCase()&&n.setAttribute("aria-label",ct_localizations.expand_submenu)),setTimeout((function(){[...e.querySelectorAll("[data-submenu]")].map((function(t){t.removeAttribute("data-submenu")})),[...e.querySelectorAll(".ct-active")].map((function(t){t.classList.remove("ct-active")}))}),30)},l=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};[...t.children].filter((function(t){return t.matches(".menu-item-has-children, .page_item_has_children")})).map((function(t){if(t.classList.contains("ct-mega-menu-custom-width")){const e=t.querySelector(".sub-menu"),n=t.getBoundingClientRect(),i=e.getBoundingClientRect();n.left+n.width/2+i.width/2>innerWidth&&(t.dataset.submenu="left"),n.left+n.width/2-i.width/2<0&&(t.dataset.submenu="right")}s(t)&&r(t,e);let n=[...t.children].find((function(t){return t.matches(".ct-toggle-dropdown-desktop-ghost")})),l=t.matches('[data-interaction*="click"] *');if(t.hasFocusEventListener||(t.hasFocusEventListener=!0,t.addEventListener("keydown",(function(e){27==e.keyCode&&c({target:t.firstElementChild})})),t.addEventListener("focusout",(function(e){t.contains(e.relatedTarget)||c({target:t.firstElementChild})}))),l||(t.addEventListener("mouseenter",(function(e){a?o({target:t.firstElementChild}):requestAnimationFrame((function(){o({target:t.firstElementChild})})),t.parentNode.classList.contains(".sub-menu")||[...t.parentNode.children].filter((function(e){return e!==t})).map((function(t){c({target:t.firstElementChild})})),e.target.closest("li").addEventListener("mouseleave",(function(){c({target:t.firstElementChild})}),{once:!0})})),(0,i.b)()&&t.addEventListener("click",(function(e){t.classList.contains("ct-active")||e.preventDefault()}))),l){let e=t.matches('[data-interaction*="item"] *')?t.firstElementChild:t.firstElementChild.querySelector(".ct-toggle-dropdown-desktop");e.hasEventListener||(e.hasEventListener=!0,e.addEventListener("click",(function(e){e.preventDefault(),e.target.closest("li").classList.contains("ct-active")?c(e):(o(e),a&&e.target.closest("li").addEventListener("mouseleave",(function(){c({target:t.firstElementChild})}),{once:!0}),e.target.hasDocumentListener||(e.target.hasDocumentListener=!0,setTimeout((function(){document.addEventListener("click",(function(t){e.target.closest("li").contains(t.target)||c(e)}))}))))})))}n&&!n.hasEventListener&&(n.hasEventListener=!0,n.addEventListener("click",(function(t){t.target.closest("li").classList.contains("ct-active")?c(t):o(t)})))}))},u=function(t){let{target:e}=t;if(e.matches(".menu-item-has-children, .page_item_has_children")||(e=e.closest(".menu-item-has-children, .page_item_has_children")),e.parentNode.classList.contains("menu")&&e.className.indexOf("ct-mega-menu")>-1&&-1===e.className.indexOf("ct-mega-menu-custom-width")&&window.wp&&wp&&wp.customize&&wp.customize("active_theme")&&(e.querySelector(".sub-menu").style.left=Math.round(e.closest('[class*="ct-container"]').firstElementChild.getBoundingClientRect().x)-Math.round(e.closest("nav").getBoundingClientRect().x)+"px"),!s(e))return;const n=e.querySelector(".sub-menu");l(n),n.closest('[data-interaction="hover"]')&&n.parentNode.addEventListener("mouseleave",(function(){[...n.children].filter((function(t){return s(t)})).map((function(t){return t.removeAttribute("data-submenu")}))}),{once:!0})},d=function(t){t.parentNode||(t=document.querySelector(`[class="${t.className}"]`)),t&&(t.querySelector(".menu-item-has-children")||t.querySelector(".page_item_has_children"))&&t.closest('[data-interaction="hover"]')&&(t.removeEventListener("mouseenter",u),t.addEventListener("mouseenter",u))}}}]);
//# sourceMappingURL=142.52ae544efaeaa302199b.js.map