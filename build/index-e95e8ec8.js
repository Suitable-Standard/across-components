const e="cosmos-reverse";let t,n,l=!1;const s="undefined"!=typeof window?window:{},o=s.CSS,r=s.document||{head:{}},c={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},i=e=>Promise.resolve(e),a=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),u=new WeakMap,f=e=>"sc-"+e.o,$={},d=e=>"object"==(e=typeof e)||"function"===e,m=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!d(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?y(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=y(e,null);return i.u=t,r.length>0&&(i.$=r),i},y=(e,t)=>({t:0,m:e,i:t,p:null,$:null,u:null}),p={},h=(e,t,n,l)=>{if(n!==l&&(t.toLowerCase(),"class"===t)){const t=e.classList,s=b(n),o=b(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}},w=/\s/,b=e=>e?e.split(w):[],S=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||$,r=t.u||$;for(l in o)l in r||h(s,l,o[l],void 0);for(l in r)h(s,l,o[l],r[l])},v=(e,n,l)=>{let s,o,c=n.$[l],i=0;if(null!==c.i)s=c.p=r.createTextNode(c.i);else if(s=c.p=r.createElement(c.m),S(null,c),null!=t&&s["s-si"]!==t&&s.classList.add(s["s-si"]=t),c.$)for(i=0;i<c.$.length;++i)o=v(e,c,i),o&&s.appendChild(o);return s},g=(e,t,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=v(null,l,o),c&&(s[o].p=c,i.insertBefore(c,t)))},j=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},M=(e,t)=>e.m===t.m,C=(e,t)=>{const n=t.p=e.p,l=e.$,s=t.$,o=t.i;null===o?(S(e,t),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],$=l[u];for(;o<=c&&r<=u;)null==i?i=t[++o]:null==a?a=t[--c]:null==f?f=l[++r]:null==$?$=l[--u]:M(i,f)?(C(i,f),i=t[++o],f=l[++r]):M(a,$)?(C(a,$),a=t[--c],$=l[--u]):M(i,$)?(C(i,$),e.insertBefore(i.p,a.p.nextSibling),i=t[++o],$=l[--u]):M(a,f)?(C(a,f),e.insertBefore(a.p,i.p),a=t[--c],f=l[++r]):(s=v(t&&t[r],n,r),f=l[++r],s&&i.p.parentNode.insertBefore(s,i.p));o>c?g(e,null==l[u+1]?null:l[u+1].p,n,l,r,u):r>u&&j(t,o,c)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),g(n,null,t,s,0,s.length-1)):null!==l&&j(l,0,l.length-1)):e.i!==o&&(n.data=o)},k=(e,t)=>{t&&!e.h&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.h=t)))},O=(e,t)=>{if(e.t|=16,!(4&e.t))return k(e,e.S),X((()=>_(e,t)));e.t|=512},_=(e,t)=>{const n=e.v;return A(void 0,(()=>P(e,n,t)))},P=async(e,t,n)=>{const l=e.g,s=l["s-rc"];n&&(e=>{const t=e.j,n=e.g,l=t.t,s=((e,t)=>{let n=f(t),l=B.get(n);if(e=11===e.nodeType?e:r,l)if("string"==typeof l){let t,s=u.get(e=e.head||e);s||u.set(e,s=new Set),s.has(n)||(t=r.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);x(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>E(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},x=(e,l)=>{try{l=l.render(),e.t&=-17,e.t|=2,((e,l)=>{const s=e.g,o=e.M||y(null,null),r=(e=>e&&e.m===p)(l)?l:m(null,null,l);n=s.tagName,r.m=null,r.t|=4,e.M=r,r.p=o.p=s.shadowRoot||s,t=s["s-sc"],C(o,r)})(e,l)}catch(t){H(t,e.g)}return null},E=e=>{const t=e.g,n=e.S;64&e.t||(e.t|=64,L(t),e.C(t),n||T()),e.h&&(e.h(),e.h=void 0),512&e.t&&Q((()=>O(e,!1))),e.t&=-517},T=()=>{L(r.documentElement),Q((()=>(e=>{const t=c.ce("appload",{detail:{namespace:"cosmos-reverse"}});return e.dispatchEvent(t),t})(s)))},A=(e,t)=>e&&e.then?e.then(t):t(),L=e=>e.classList.add("hydrated"),N=(e,t,n)=>{if(t.k){const l=Object.entries(t.k),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>W(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=W(e),o=s.O.get(t),r=s.t,c=s.v;n=((e,t)=>null==e||d(e)?e:1&t?e+"":e)(n,l.k[t][0]),8&r&&void 0!==o||n===o||(s.O.set(t,n),c&&2==(18&r)&&O(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){c.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},R=(e,t={})=>{const n=[],l=t.exclude||[],o=s.customElements,i=r.head,u=i.querySelector("meta[charset]"),$=r.createElement("style"),d=[];let m,y=!0;Object.assign(c,t),c.l=new URL(t.resourcesUrl||"./",r.baseURI).href,e.map((e=>e[1].map((t=>{const s={t:t[0],o:t[1],k:t[2],_:t[3]};s.k=t[2];const r=s.o,i=class extends HTMLElement{constructor(e){super(e),F(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),y?d.push(this):c.jmp((()=>(e=>{if(0==(1&c.t)){const t=W(e),n=t.j,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){k(t,t.S=n);break}}n.k&&Object.entries(n.k).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),Q((()=>(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=z(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(N(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){H(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=f(n);if(!B.has(t)){const l=()=>{};((e,t,n)=>{let l=B.get(e);a&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,B.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.S,r=()=>O(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)))}l()}})(this)))}disconnectedCallback(){c.jmp((()=>{}))}componentOnReady(){return W(this).P}};s.T=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,N(i,s,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),i.insertBefore($,u?u.nextSibling:i.firstChild),y=!1,d.length?d.map((e=>e.connectedCallback())):c.jmp((()=>m=setTimeout(T,30)))},U=new WeakMap,W=e=>U.get(e),q=(e,t)=>U.set(t.v=e,t),F=(e,t)=>{const n={t:0,g:e,j:t,O:new Map};return n.P=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],U.set(e,n)},H=(e,t)=>(0,console.error)(e,t),V=new Map,z=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=V.get(n);return l?l[t]:__sc_import_cosmos_reverse(`./${n}.entry.js`).then((e=>(V.set(n,e),e[t])),H)},B=new Map,D=[],G=[],I=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&c.t?Q(K):c.raf(K))},J=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){H(e)}e.length=0},K=()=>{J(D),J(G),(l=D.length>0)&&c.raf(K)},Q=e=>i().then(e),X=I(G,!0);export{o as C,e as N,i as a,R as b,r as d,m as h,c as p,q as r,s as w}