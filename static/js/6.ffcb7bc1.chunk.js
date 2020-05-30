(window.webpackJsonpteddy=window.webpackJsonpteddy||[]).push([[6],{118:function(n,e,t){"use strict";t.r(e);var a=t(8),r=t(13),i=t(5),c=t(0),o=t.n(c),d=t(3),l=t(7),s=t(1),u=t(2),p=t(32),m=t.n(p),g=t(35),f=t.n(g);function b(){var n=Object(s.a)(["\n  position: relative;\n  width: 65%;\n  height: 55%;\n  margin-left: 1%;\n  display: grid;\n  grid-template-columns: repeat(4, minmax(24%, 1fr));\n  grid-template-rows: repeat(3, minmax(24%, 1fr));\n  grid-gap: 1%;\n\n  @media screen and (max-height: 960px) and (orientation: portrait) {\n    height: 42%;\n  }\n\n  @media screen and (max-width: 846px) and (orientation: landscape) {\n    width: 59%;\n  }\n\n  > div {\n    background-image: linear-gradient(\n      to right bottom,\n      rgba(0,0,0, 0.1),\n      rgba(0,0,0, 0.2)\n    );\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n\n    img {\n      width: 100%;\n      height: 100%;\n      min-width: 20px;\n      min-height: 20px;\n    }\n    &.gray {\n      filter: url(","#grayscale);\n      filter: gray;\n      -webkit-filter: grayscale(1);\n    }\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(s.a)(["\n  grid-area: cart;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 15%;\n  position: relative;\n  width: 70%;\n"]);return h=function(){return n},n}function x(){var n=Object(s.a)(["\n  position: absolute;\n  top: 55%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  font-size: 2rem;\n  background-color: #fff;\n  color: #333;\n  padding: 3rem;\n  width: 40%;\n  border-radius: 10px;\n  text-align: center;\n\n  @media screen and (max-width: 991px) {\n    font-size: 1.6rem;\n    padding: 1rem;\n    width: 70%;\n  }\n\n  @media screen and (max-height: 320px) {\n    font-size: 1rem;\n    width: 45%;\n  }\n\n  @media screen and (max-height: 213px) {\n    height: 70%;\n    width: auto;\n  }\n\n\n"]);return x=function(){return n},n}var w=u.a.div(x()),y=u.a.div(h(),m.a),v=u.a.div(b(),f.a),j=t(22),O=function(n){var e=n.productsToBuy,t=n.status,a=n.selectedIndex,r=n.reset,i=Object(l.b)().images,c=Object(d.e)({from:{transform:"scale(1)"},to:[{transform:"scale(1.1)"},{transform:"scale(1)"}]});return o.a.createElement(y,null,"playing"!==t&&o.a.createElement(w,null,"win"===t&&o.a.createElement(o.a.Fragment,null,"Well done!"),"fail"===t&&"Try one more time!",!t&&"Click at products and pack a bag in 25 seconds!",o.a.createElement(j.a,{onClick:r},"New game!")),o.a.createElement(v,null,e.map(function(n,e){return o.a.createElement(d.a.div,{key:"p".concat(e),className:"item ".concat(n.selected?null:"gray"),style:n.selected&&a===e?c:null},o.a.createElement("img",{src:i[n.name+".svg"],alt:n.name}))})))},k=["tomato","onion","potato","broccoli","cabbage","carrot"],E=["watermelon","grapes","orange","apple","bananas","strawberry","pineapple"],z=["milk","pasta","croissant","mustard","eggs","jam"];function P(){var n=Object(s.a)(["\n  grid-area: items-bottom;\n  justify-content: space-around;\n  align-items: center;\n  width: 95%;\n  height: 5%;\n  @media screen and (min-width: 768px) and (orientation: portrait) {\n    //width: 100%;\n  }\n\n\n"]);return P=function(){return n},n}function D(){var n=Object(s.a)(["\n  width: 100%;\n  padding-top: 50px;\n  grid-area: items-right;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n  @media screen and (max-width: 768px) and (orientation: portrait) {\n    ","\n  }\n"]);return D=function(){return n},n}function S(){var n=Object(s.a)(["\n  width: 100%;\n  padding-top: 50px;\n  grid-area: items-left;\n  flex-direction: column;\n  justify-content: space-around;\n\n  @media screen and (max-width: 768px) and (orientation: portrait) {\n    ","\n  }\n\n"]);return S=function(){return n},n}function C(){var n=Object(s.a)(["\n  display: flex;\n  padding: 10px;\n  height: 100%;\n  @media screen and (max-width: 768px) and (orientation: portrait) {\n    height: 15%;\n    min-height: 30px;\n    width: 100%;\n  }\n  img {\n    width: 60px;\n    height: 60px;\n    cursor: pointer;\n    //width: 100%;\n    //height: 100%;\n\n\n    @media screen and (max-width: 768px) {\n      max-width: 40px;\n      max-height: 40px;\n    }\n\n    @media screen and (max-width: 320px) {\n      max-width: 25px;\n      max-height: 25px;\n    }\n\n    @media screen and (max-height: 412px) {\n      max-width: 30px;\n      max-height: 30px;\n    }\n\n    @media screen and (max-height: 320px) {\n      max-width: 25px;\n      max-height: 25px;\n    }\n\n    @media screen and (max-height: 213px) {\n      max-width: 20px;\n      max-height: 20px;\n    }\n\n  }\n"]);return C=function(){return n},n}var F=u.a.div(C()),I="\nflex-direction: row;\npadding-top: 0;\nalign-items: center;",H=Object(u.a)(F)(S(),I),R=Object(u.a)(F)(D(),I),T=Object(u.a)(F)(P()),B=function(n){var e=n.select,t=Object(l.b)().images;return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null,k.map(function(n,a){return o.a.createElement("div",{key:a},o.a.createElement("img",{src:t[n+".svg"],alt:n,onClick:e}))})),o.a.createElement(R,null,z.map(function(n,a){return o.a.createElement("div",{key:a},o.a.createElement("img",{src:t[n+".svg"],alt:n,onClick:e}))})),o.a.createElement(T,null,E.map(function(n,a){return o.a.createElement("div",{key:a},o.a.createElement("img",{src:t[n+".svg"],alt:n,onClick:e}))})))};function J(){var n=Object(s.a)(['\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  bottom: 20%;\n  left: 10%;\n  display: block;\n  border-radius: 50%;\n  padding: 0rem;\n  &:before,\n  &:after {\n    position: absolute;\n    content: "";\n    display: block;\n    width: 100px;\n    height: 100%;\n    left: 0;\n    z-index: 1000;\n    transition: all ease-in-out 0.5s;\n    background-repeat: no-repeat;\n  }\n  &:before {\n    top: -35%;\n    display: block;\n    animation: '," ease-in-out 0.75s forwards;\n    background-image: radial-gradient(\n        circle,\n        "," 50%,\n        transparent 20%\n      ),\n      radial-gradient(\n        circle,\n        transparent 20%,\n        "," 50%,\n        transparent 30%\n      ),\n      radial-gradient(circle, "," 50%, transparent 20%),\n      radial-gradient(circle, "," 50%, transparent 20%),\n      radial-gradient(\n        circle,\n        transparent 10%,\n        "," 35%,\n        transparent 20%\n      ),\n      radial-gradient(circle, "," 50%, transparent 20%),\n      radial-gradient(circle, "," 50%, transparent 20%),\n      radial-gradient(circle, "," 50%, transparent 20%),\n      radial-gradient(circle, "," 50%, transparent 20%);\n    background-size: 2% 2%, 4% 4%, 7% 7%, 4% 4%, 9% 9%, 5% 5%, 3% 3%, 5% 5%,\n      2% 2%;\n  }\n  &:after {\n    display: block;\n    animation: "," ease-in-out 0.75s forwards;\n    bottom: -35%;\n    background-image: radial-gradient(\n        circle,\n        "," 50%,\n        transparent 20%\n      ),\n      radial-gradient(circle, "," 50%, transparent 20%),\n      radial-gradient(\n        circle,\n        transparent 10%,\n        "," 35%,\n        transparent 20%\n      ),\n      radial-gradient(circle, "," 50%, transparent 20%),\n      radial-gradient(circle, "," 50%, transparent 20%),\n      radial-gradient(circle, "," 50%, transparent 20%),\n      radial-gradient(circle, "," 50%, transparent 20%);\n    background-size: 5% 5%, 6% 6%, 7% 7%, 8% 8%, 9% 9%, 10% 10%, 5% 5%;\n  }\n"]);return J=function(){return n},n}function N(){var n=Object(s.a)(["\n  0% {\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,\n      70% -10%, 70% 0%;\n  }\n  50% {\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,\n      105% 0%;\n  }\n  100% {\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,\n      110% 10%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n"]);return N=function(){return n},n}function A(){var n=Object(s.a)(["\n  0% {\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,\n      40% 90%, 55% 90%, 70% 90%;\n  }\n  50% {\n    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,\n      50% 50%, 65% 20%, 90% 30%;\n  }\n  100% {\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,\n      50% 40%, 65% 10%, 90% 20%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}"]);return A=function(){return n},n}var M="\ndisplay: block;\nwidth: 100%;\nheight: 100%;\nmin-height: 150px;\nmax-height: 180px;\nbackground-color: ".concat("#e74c3c",';\nborder-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;\ncolor: #fff;\nfont-size: 3rem;\n@media screen and (max-height: 568px) {\n  font-size: 2rem;\n  height: 100px;\n  min-height: 100px;\n}\n\n@media screen and (max-height: 213px) {\n  height: 50px;\n  min-height: 50px;\n}\n\n@media screen and (max-height: 667px) {\n  height: 100px;\n  min-height: 100px;\n}\n\n@media screen and (min-width: 568px) {\n  font-size: 5rem;\n}\n\npadding: 0px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nposition: relative;\nz-index: 20;\n\n&::after {\n  content: "";\n  width: 10%;\n  height: 10%;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-bottom: 20px solid ').concat("#e74c3c",";\n  position: absolute;\n  left: 30%;\n  bottom: -6%;\n  z-index: 20;\n  @media screen and (max-height: 568px) {\n    border-left-width:10px;\n      border-right-width: 10px;\n  }\n\n  @media screen and (max-width: 768px) {\n    border-left-width:10px;\n      border-right-width: 10px;\n  }\n\n}\n\n"),W="\n  width: 2px;\n  height: 57%;\n  background: #000;\n  position: absolute;\n  z-index: 1;\n  top: 30%;\n  margin-left: 47%;\n\n  @media screen and (max-height: 667px) {\n    width: 1px;\n}\n\n",q=Object(u.b)(A()),G=Object(u.b)(N()),K=u.a.div(J(),q,"#c0392b","#c0392b","#c0392b","#c0392b","#c0392b","#c0392b","#c0392b","#c0392b","#c0392b",G,"#c0392b","#c0392b","#c0392b","#c0392b","#c0392b","#c0392b","#c0392b");function L(){var n=Object(s.a)(["\n  ","\n"]);return L=function(){return n},n}function Q(){var n=Object(s.a)(["\n  ","\n"]);return Q=function(){return n},n}var U=Object(u.a)(d.a.div)(Q(),M),V=Object(u.a)(d.a.div)(L(),W),X=function(n){var e=n.status,t=Object(d.e)({from:{transform:"scale(0)"},to:{transform:"scale(1)"},delay:e?1e3:0}),a=Object(d.e)({from:{transform:"scale(0)"},to:{transform:"scale(1)"},delay:e?1e3:0});return o.a.createElement(o.a.Fragment,null,"fail"===e?o.a.createElement(K,null):null,o.a.createElement(U,{style:t},"25"),o.a.createElement(V,{style:a}))};function Y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)}return t}function Z(){var n=Object(s.a)(["",""]);return Z=function(){return n},n}function $(){var n=Object(s.a)(["",""]);return $=function(){return n},n}var _=Object(u.a)(d.a.div)($(),M),nn=u.a.div(Z(),W),en=function(n){var e=Object(d.e)({from:{number:25,transform:"scale(1)"},to:[{number:0,transform:"scale(1.4)",config:{duration:25e3}}],number:0,onRest:n.onRestHandler,reset:n.reset}),t=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Y(t,!0).forEach(function(e){Object(a.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Y(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},e,{text:e.number.interpolate(function(n){return n.toFixed()})});return o.a.createElement(o.a.Fragment,null,o.a.createElement(_,{style:t},t.text),o.a.createElement(nn,null))},tn=t(33),an=t.n(tn);function rn(){var n=Object(s.a)(["\n  width: 100%;\n  height: 30%;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50% 0%;\n  position: absolute;\n  top: 70%;\n  right: -35%;\n"]);return rn=function(){return n},n}function cn(){var n=Object(s.a)(["\n  padding-top: 10%;\n  height: 100%;\n  width: 15%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n"]);return cn=function(){return n},n}var on=u.a.div(cn()),dn=u.a.div(rn(),an.a),ln=function(n){var e=n.status,t=n.fail;return o.a.createElement(on,null,o.a.createElement("div",{style:{minHeight:"40%",width:"100%"}},"playing"!==e?o.a.createElement(X,{status:e}):o.a.createElement(en,{onRestHandler:t})),o.a.createElement(dn,null))};function sn(){var n=Object(s.a)(["\nwidth: 100%;\npadding: 70px 0 10px 0;\n\n@media screen and (max-height: 667px) {\n  padding-top: 20px;\n}\n\ndisplay: flex;\nheight: 100%;\n//min-height: 400px;\nmin-width: 230px;\njustify-content: center;\nposition: relative;"]);return sn=function(){return n},n}function un(){var n=Object(s.a)(['\n  max-width: 990px;\n  height: 95vh;\n  max-height: 900px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.7);\n  position: relative;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: minmax(40px, 9%) 1fr minmax(40px, 9%);\n  grid-template-rows: 1fr minmax(40px, 13%);\n  grid-template-areas:\n    "items-left cart items-right"\n    "items-left items-bottom items-right";\n\n    @media screen and (max-width: 768px) and (orientation: portrait) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  @media screen and (max-height: 480px) and (orientation: portrait) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n']);return un=function(){return n},n}var pn=u.a.div(un()),mn=u.a.div(sn()),gn=t(34),fn=t.n(gn);function bn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)}return t}e.default=function(n){var e=Object(c.useState)([]),t=Object(i.a)(e,2),d=t[0],l=t[1],s=Object(c.useState)(null),u=Object(i.a)(s,2),p=u[0],m=u[1],g=Object(c.useState)(-1),f=Object(i.a)(g,2),b=f[0],h=f[1],x=Object(c.useCallback)(function(){var n=k.concat(E).concat(z).map(function(n){return Array.from({length:4}).fill(n)}).reduce(function(n,e){return n.concat(e)},[]).sort(function(){return.5-Math.random()}).slice(0,12).sort().reduce(function(n,e){var t={selected:!1,name:e};return[].concat(Object(r.a)(n),[t])},[]);l(n)},[]);Object(c.useEffect)(function(){x()},[x]);return o.a.createElement(j.b,{bg:fn.a,size:"cover"},o.a.createElement(j.d,{type:"back",to:"/"}),o.a.createElement(pn,null,o.a.createElement(j.e,null),o.a.createElement(mn,null,o.a.createElement(O,{productsToBuy:d,reset:function(){m("playing"),x()},status:p,selectedIndex:b}),o.a.createElement(ln,{fail:function(){m("fail")},status:p})),o.a.createElement(B,{select:function(n){if("playing"===p){var e=d.findIndex(function(e){return n.target.alt===e.name&&!e.selected});if(-1!==e){var t=Object(r.a)(d);t[e]=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?bn(t,!0).forEach(function(e){Object(a.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):bn(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},d[e],{selected:!0}),l(t),h(e),-1===t.findIndex(function(n){return!1===n.selected})&&m("win")}}}})),o.a.createElement(j.d,{type:"next",to:"/puzzle"}))}}}]);