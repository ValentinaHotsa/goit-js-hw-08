!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var r,i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,b=Math.max,p=Math.min,y=function(){return v.Date.now()};function g(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function g(e){return c=e,f=setTimeout(w,t),s?m(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=y();if(S(e))return h(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?m(e):(r=i=void 0,u)}function T(){var e=y(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return g(l);if(d)return f=setTimeout(w,t),m(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=O(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?b(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:h(y())},T}function j(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=f.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}r=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),w=S.querySelector("input"),h=S.querySelector("textarea");S.addEventListener("input",e(r)((function(){var t,r=S.elements.email.value,i=S.elements.message.value,o=(t={},e(n)(t,S.elements.email.name,r),e(n)(t,S.elements.message.name,i),t);console.log(o),localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500));var T=localStorage.getItem("feedback-form-state");if(null!==T){var x=JSON.parse(T);console.log(x),w.value=x.email,h.value=x.message}S.addEventListener("submit",(function(e){localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.36a73fbc.js.map
