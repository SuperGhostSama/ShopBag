(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[33],{205:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return m}));var r=n(0),c=n(1),s=n(4),a=n.n(s),o=n(22),i=n(99),l=n(88),u=n(112),b=n(45),p=n(145);n(256);const d=t=>{const{rating:e,reviews:n,parentClassName:s}=t,o={width:e/5*100+"%"},i=Object(c.sprintf)(
/* translators: %f is referring to the average rating value */
Object(c.__)("Rated %f out of 5","woocommerce"),e),l={__html:Object(c.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(c._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",n,"woocommerce"),Object(c.sprintf)('<strong class="rating">%f</strong>',e),Object(c.sprintf)('<span class="rating">%d</span>',n))};return Object(r.createElement)("div",{className:a()("wc-block-components-product-rating__stars",s+"__product-rating__stars"),role:"img","aria-label":i},Object(r.createElement)("span",{style:o,dangerouslySetInnerHTML:l}))},g=t=>{const{href:e}=t,n=Object(c.__)("Add review","woocommerce");return e?Object(r.createElement)("a",{className:"wc-block-components-product-rating__link",href:e},n):null},m=t=>{const{textAlign:e}=t,{parentClassName:n}=Object(o.useInnerBlockLayoutContext)(),{product:c}=Object(o.useProductDataContext)(),s=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(c),b=Object(i.a)(t),m=Object(l.a)(t),w=Object(u.a)(t),_=(t=>{const e=Object(p.a)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(c),j=(t=>{const{permalink:e}=t;return e+"#reviews"})(c),O=a()(b.className,"wc-block-components-product-rating",{[n+"__product-rating"]:n,["has-text-align-"+e]:e}),f=_?Object(r.createElement)(d,{rating:s,reviews:_,parentClassName:n}):Object(r.createElement)(g,{href:j});return Object(r.createElement)("div",{className:O,style:{...b.style,...m.style,...w.style}},f)};e.default=Object(b.withProductDataContext)(m)},256:function(t,e){}}]);