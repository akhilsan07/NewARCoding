const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/trace-mapping.umd-CPzQizkX.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/browser-s9dlvK3E.js"])))=>i.map(i=>d[i]);
import{S as K,M as p,s as y,E as R,p as g,a as it,i as st,b as I,n as F}from"./install-service-worker-eOooWzXe.js";const q="root",lt=()=>document.getElementById(q),X=()=>{const t=lt();t==null||t.remove()},dt=()=>{X();const t=document.createElement("iframe");return t.id=q,t.src=`/blank.html?sessionId=${K}`,document.body.appendChild(t),t},mt=/^rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\s*\)$/,ct=t=>{const e=t.match(mt);return e?parseFloat(e[4])===0:!1},ut=t=>{const e=(t==null?void 0:t.getElementById("root"))??(t==null?void 0:t.documentElement);if(!e)return null;const o=(d=>{const u=[d];for(;u.length>0;){const s=u.shift();if(!s)return null;const{backgroundColor:l}=getComputedStyle(s);if(!ct(l))return l;for(let a of s.children)u.push(a)}return null})(e);return o||null},$=t=>{const e=t.trim().match(/(\d+):(\d+)\)?$/),r=parseInt((e==null?void 0:e.at(1))??""),o=parseInt((e==null?void 0:e.at(2))??"");return{lineno:r,colno:o}},wt=({doc:t,onMessage:e,transformPosition:r})=>{const o=t.contentWindow;if(!o||!("console"in o))return;const d=l=>{if(!l)return null;const{lineno:a,colno:m}=$(l);return(r==null?void 0:r({line:a,column:m}))??null};o.addEventListener("error",({lineno:l,colno:a,error:m,message:i})=>{var _,E,h;const c=((_=r==null?void 0:r({line:l,column:a}))==null?void 0:_.line)??null;let w="",f=[];if("name"in m&&"stack"in m){w=m.name;const S=((E=m.stack)==null?void 0:E.split(`
`).slice(1))??[];for(let N=0;N<S.length;N++){const H=S[N],k=d(H);if(!k)break;const{source:D,line:V,column:z}=k;if(D!=null&&D.startsWith("internal")){const B=(h=d(S[N+1]))==null?void 0:h.name;B?f.push(`	at ${B} (module:${V}:${z})`):f.push(H.replace(/(\(blob:.*\))$/,`(module:${V}:${z})`))}else break}}e({type:p.ERROR,error:{line:c,message:i,name:w,stack:f},line:c})},{passive:!0,capture:!0});const u=o.console,s=l=>(a,...m)=>{var w,f;let i;if(a&&typeof a=="object"&&"stack"in a&&typeof a.stack=="string"){const _=(w=a.stack)==null?void 0:w.split(`
`);i=(_==null?void 0:_[1])??(_==null?void 0:_[0])}else{const h=(new Error().stack??"").split(`
`);i=h[2]||h[1]}let c=null;if(i){const{lineno:_,colno:E}=$(i);c=((f=r==null?void 0:r({line:_,column:E}))==null?void 0:f.line)??null}l({line:c,error:a instanceof Error?a:null,args:a instanceof Error?m:[a,...m]})};u.error=s(({line:l,args:a,error:m})=>{e({type:p.ERROR,line:l,error:m?{line:l,message:m.message,name:m.name,stack:[]}:{line:l,message:String(a[0]??""),name:"Error",stack:[]}}),a.length&&e({type:p.LOG,level:"info",line:l,log:a})}),u.log=s(({line:l,args:a})=>{e({type:p.LOG,level:"info",line:l,log:a})})},Y=({html:t,transformPosition:e,onMessage:r,expectReadySignal:o})=>{y.time("html.evaluation");const d=dt();d.onload=()=>{if(!d.contentDocument||!d.contentWindow)return;if(d.contentDocument.open(),wt({doc:d,transformPosition:e,onMessage:r}),d.contentDocument.write(t),d.contentDocument.close(),!o){requestAnimationFrame(()=>{requestAnimationFrame(()=>{y.timeEnd("html.evaluation"),r({type:p.ENVIRONMENT_STATUS,status:R.RUNNING_CODE})})});return}let u=null,s=null;const l=()=>{y.timeEnd("html.evaluation"),r({type:p.ENVIRONMENT_STATUS,status:R.RUNNING_CODE})},a=()=>{s==null||s.disconnect(),r({type:p.RUN_COMPLETE,duration:null,wasCancelled:!1,wasFatalError:!0})},m=()=>{requestAnimationFrame(()=>{const c=ut(d.contentDocument);c!=null&&c!==u&&r({type:p.SET_BACKGROUND_COLOR,backgroundColor:c}),u=c})},i=d.contentDocument.documentElement;s=new MutationObserver(c=>{for(const w of c)if(w.target===i){if(w.attributeName==="data-ready"&&i.hasAttribute("data-ready")){l();break}else if(w.attributeName==="data-fatal"&&i.hasAttribute("data-fatal")){a();break}}m()}),s.observe(i,{attributes:!0,subtree:!0}),i.hasAttribute("data-ready")&&l()}},pt="/assets/python-worker-CcTeaR42.js",Z=new URL(pt,import.meta.url);Z.searchParams.set("sessionId",K);let x=null;const _t=()=>{const t=new Worker(Z.href,{type:"module"});return new Promise(e=>{t.onmessage=r=>{r.data.type===p.READY&&e(t)}})},J=async(t,e)=>{try{x||(x=await _t())}catch(r){y.error("failed to create python worker",r)}return new Promise((r,o)=>{if(!x)return o();y.time("python.evaluation"),x.postMessage({code:t}),x.onmessage=d=>{e(d.data),d.data.type===p.RUN_COMPLETE&&(y.timeEnd("python.evaluation"),r(d.data))},x.addEventListener("terminate",()=>r(void 0))})},ft=async()=>J("",()=>{}),yt=()=>{try{x==null||x.dispatchEvent(new Event("terminate")),x==null||x.terminate()}finally{x=null}},xt="modulepreload",ht=function(t){return"/"+t},G={},n=function(e,r,o){let d=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));d=Promise.allSettled(r.map(a=>{if(a=ht(a),a in G)return;G[a]=!0;const m=a.endsWith(".css"),i=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":xt,m||(c.as="script"),c.crossOrigin="",c.href=a,l&&c.setAttribute("nonce",l),document.head.appendChild(c),m)return new Promise((w,f)=>{c.addEventListener("load",w),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}function u(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return d.then(s=>{for(const l of s||[])l.status==="rejected"&&u(l.reason);return e().catch(u)})},Et=async t=>{const{TraceMap:e,originalPositionFor:r}=await n(async()=>{const{TraceMap:d,originalPositionFor:u}=await import("./trace-mapping.umd-CPzQizkX.js").then(s=>s.t);return{TraceMap:d,originalPositionFor:u}},__vite__mapDeps([0,1]));y.time("source_maps.create");const o=t&&new e(t);return y.timeEnd("source_maps.create"),d=>{let u=d.line,s=d.column,l=null,a=null;if(!o)return{line:u,name:l,column:s,source:a};try{({line:u,column:s,name:l,source:a}=r(o,{line:u,column:s}))}catch{g({type:p.INSTRUMENT,instrument:{type:"error",error:"InvalidSourceMapPosition",message:"failed to transform position"}})}return{line:u,column:s,name:l,source:a}}},C="user-component.js";let O=null;const W="0.24.2",Q=async()=>{if(O)return O;O=await n(()=>import("./browser-s9dlvK3E.js").then(t=>t.b),__vite__mapDeps([2,1]));try{await O.initialize({wasmURL:`https://cdn.jsdelivr.net/npm/esbuild-wasm@${W}/esbuild.wasm`,worker:!1})}catch{await O.initialize({wasmURL:`https://unpkg.com/esbuild-wasm@${W}/esbuild.wasm`,worker:!1})}return O},gt=`
/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 47.4% 11.2%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 47.4% 11.2%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 100% 50%;
  --destructive-foreground: 210 40% 98%;
  --ring: 215 20.2% 65.1%;
  --radius: 0.5rem;
  /* For https://ui.shadcn.com/docs/components/chart */
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
  /* For https://ui.shadcn.com/docs/components/sidebar */
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: hsl(var(--foreground));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-none {
  animation: none;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.delay-0 {
  transition-delay: 0s;
}

.delay-100 {
  transition-delay: 100ms;
}

.delay-1000 {
  transition-delay: 1000ms;
}

.delay-150 {
  transition-delay: 150ms;
}

.delay-200 {
  transition-delay: 200ms;
}

.delay-300 {
  transition-delay: 300ms;
}

.delay-500 {
  transition-delay: 500ms;
}

.delay-700 {
  transition-delay: 700ms;
}

.delay-75 {
  transition-delay: 75ms;
}

.duration-0 {
  transition-duration: 0s;
}

.duration-100 {
  transition-duration: 100ms;
}

.duration-1000 {
  transition-duration: 1000ms;
}

.duration-150 {
  transition-duration: 150ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.duration-700 {
  transition-duration: 700ms;
}

.duration-75 {
  transition-duration: 75ms;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-linear {
  transition-timing-function: linear;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

@keyframes enter {
  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}

@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}

.animate-in {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.animate-out {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.fade-in-0 {
  --tw-enter-opacity: 0;
}

.fade-in-10 {
  --tw-enter-opacity: 0.1;
}

.fade-in-100 {
  --tw-enter-opacity: 1;
}

.fade-in-15 {
  --tw-enter-opacity: 0.15;
}

.fade-in-20 {
  --tw-enter-opacity: 0.2;
}

.fade-in-25 {
  --tw-enter-opacity: 0.25;
}

.fade-in-30 {
  --tw-enter-opacity: 0.3;
}

.fade-in-35 {
  --tw-enter-opacity: 0.35;
}

.fade-in-40 {
  --tw-enter-opacity: 0.4;
}

.fade-in-45 {
  --tw-enter-opacity: 0.45;
}

.fade-in-5 {
  --tw-enter-opacity: 0.05;
}

.fade-in-50 {
  --tw-enter-opacity: 0.5;
}

.fade-in-55 {
  --tw-enter-opacity: 0.55;
}

.fade-in-60 {
  --tw-enter-opacity: 0.6;
}

.fade-in-65 {
  --tw-enter-opacity: 0.65;
}

.fade-in-70 {
  --tw-enter-opacity: 0.7;
}

.fade-in-75 {
  --tw-enter-opacity: 0.75;
}

.fade-in-80 {
  --tw-enter-opacity: 0.8;
}

.fade-in-85 {
  --tw-enter-opacity: 0.85;
}

.fade-in-90 {
  --tw-enter-opacity: 0.9;
}

.fade-in-95 {
  --tw-enter-opacity: 0.95;
}

.fade-out-0 {
  --tw-exit-opacity: 0;
}

.fade-out-10 {
  --tw-exit-opacity: 0.1;
}

.fade-out-100 {
  --tw-exit-opacity: 1;
}

.fade-out-15 {
  --tw-exit-opacity: 0.15;
}

.fade-out-20 {
  --tw-exit-opacity: 0.2;
}

.fade-out-25 {
  --tw-exit-opacity: 0.25;
}

.fade-out-30 {
  --tw-exit-opacity: 0.3;
}

.fade-out-35 {
  --tw-exit-opacity: 0.35;
}

.fade-out-40 {
  --tw-exit-opacity: 0.4;
}

.fade-out-45 {
  --tw-exit-opacity: 0.45;
}

.fade-out-5 {
  --tw-exit-opacity: 0.05;
}

.fade-out-50 {
  --tw-exit-opacity: 0.5;
}

.fade-out-55 {
  --tw-exit-opacity: 0.55;
}

.fade-out-60 {
  --tw-exit-opacity: 0.6;
}

.fade-out-65 {
  --tw-exit-opacity: 0.65;
}

.fade-out-70 {
  --tw-exit-opacity: 0.7;
}

.fade-out-75 {
  --tw-exit-opacity: 0.75;
}

.fade-out-80 {
  --tw-exit-opacity: 0.8;
}

.fade-out-85 {
  --tw-exit-opacity: 0.85;
}

.fade-out-90 {
  --tw-exit-opacity: 0.9;
}

.fade-out-95 {
  --tw-exit-opacity: 0.95;
}

.zoom-in-0 {
  --tw-enter-scale: 0;
}

.zoom-in-100 {
  --tw-enter-scale: 1;
}

.zoom-in-105 {
  --tw-enter-scale: 1.05;
}

.zoom-in-110 {
  --tw-enter-scale: 1.1;
}

.zoom-in-125 {
  --tw-enter-scale: 1.25;
}

.zoom-in-150 {
  --tw-enter-scale: 1.5;
}

.zoom-in-50 {
  --tw-enter-scale: .5;
}

.zoom-in-75 {
  --tw-enter-scale: .75;
}

.zoom-in-90 {
  --tw-enter-scale: .9;
}

.zoom-in-95 {
  --tw-enter-scale: .95;
}

.zoom-out-0 {
  --tw-exit-scale: 0;
}

.zoom-out-100 {
  --tw-exit-scale: 1;
}

.zoom-out-105 {
  --tw-exit-scale: 1.05;
}

.zoom-out-110 {
  --tw-exit-scale: 1.1;
}

.zoom-out-125 {
  --tw-exit-scale: 1.25;
}

.zoom-out-150 {
  --tw-exit-scale: 1.5;
}

.zoom-out-50 {
  --tw-exit-scale: .5;
}

.zoom-out-75 {
  --tw-exit-scale: .75;
}

.zoom-out-90 {
  --tw-exit-scale: .9;
}

.zoom-out-95 {
  --tw-exit-scale: .95;
}

.spin-in-0 {
  --tw-enter-rotate: 0deg;
}

.spin-in-1 {
  --tw-enter-rotate: 1deg;
}

.spin-in-12 {
  --tw-enter-rotate: 12deg;
}

.spin-in-180 {
  --tw-enter-rotate: 180deg;
}

.spin-in-2 {
  --tw-enter-rotate: 2deg;
}

.spin-in-3 {
  --tw-enter-rotate: 3deg;
}

.spin-in-45 {
  --tw-enter-rotate: 45deg;
}

.spin-in-6 {
  --tw-enter-rotate: 6deg;
}

.spin-in-90 {
  --tw-enter-rotate: 90deg;
}

.spin-out-0 {
  --tw-exit-rotate: 0deg;
}

.spin-out-1 {
  --tw-exit-rotate: 1deg;
}

.spin-out-12 {
  --tw-exit-rotate: 12deg;
}

.spin-out-180 {
  --tw-exit-rotate: 180deg;
}

.spin-out-2 {
  --tw-exit-rotate: 2deg;
}

.spin-out-3 {
  --tw-exit-rotate: 3deg;
}

.spin-out-45 {
  --tw-exit-rotate: 45deg;
}

.spin-out-6 {
  --tw-exit-rotate: 6deg;
}

.spin-out-90 {
  --tw-exit-rotate: 90deg;
}

.slide-in-from-bottom {
  --tw-enter-translate-y: 100%;
}

.slide-in-from-bottom-0 {
  --tw-enter-translate-y: 0px;
}

.slide-in-from-bottom-0.5 {
  --tw-enter-translate-y: 0.125rem;
}

.slide-in-from-bottom-1 {
  --tw-enter-translate-y: 0.25rem;
}

.slide-in-from-bottom-1.5 {
  --tw-enter-translate-y: 0.375rem;
}

.slide-in-from-bottom-1/2 {
  --tw-enter-translate-y: 50%;
}

.slide-in-from-bottom-1/3 {
  --tw-enter-translate-y: 33.333333%;
}

.slide-in-from-bottom-1/4 {
  --tw-enter-translate-y: 25%;
}

.slide-in-from-bottom-10 {
  --tw-enter-translate-y: 2.5rem;
}

.slide-in-from-bottom-11 {
  --tw-enter-translate-y: 2.75rem;
}

.slide-in-from-bottom-12 {
  --tw-enter-translate-y: 3rem;
}

.slide-in-from-bottom-14 {
  --tw-enter-translate-y: 3.5rem;
}

.slide-in-from-bottom-16 {
  --tw-enter-translate-y: 4rem;
}

.slide-in-from-bottom-2 {
  --tw-enter-translate-y: 0.5rem;
}

.slide-in-from-bottom-2.5 {
  --tw-enter-translate-y: 0.625rem;
}

.slide-in-from-bottom-2/3 {
  --tw-enter-translate-y: 66.666667%;
}

.slide-in-from-bottom-2/4 {
  --tw-enter-translate-y: 50%;
}

.slide-in-from-bottom-20 {
  --tw-enter-translate-y: 5rem;
}

.slide-in-from-bottom-24 {
  --tw-enter-translate-y: 6rem;
}

.slide-in-from-bottom-28 {
  --tw-enter-translate-y: 7rem;
}

.slide-in-from-bottom-3 {
  --tw-enter-translate-y: 0.75rem;
}

.slide-in-from-bottom-3.5 {
  --tw-enter-translate-y: 0.875rem;
}

.slide-in-from-bottom-3/4 {
  --tw-enter-translate-y: 75%;
}

.slide-in-from-bottom-32 {
  --tw-enter-translate-y: 8rem;
}

.slide-in-from-bottom-36 {
  --tw-enter-translate-y: 9rem;
}

.slide-in-from-bottom-4 {
  --tw-enter-translate-y: 1rem;
}

.slide-in-from-bottom-40 {
  --tw-enter-translate-y: 10rem;
}

.slide-in-from-bottom-44 {
  --tw-enter-translate-y: 11rem;
}

.slide-in-from-bottom-48 {
  --tw-enter-translate-y: 12rem;
}

.slide-in-from-bottom-5 {
  --tw-enter-translate-y: 1.25rem;
}

.slide-in-from-bottom-52 {
  --tw-enter-translate-y: 13rem;
}

.slide-in-from-bottom-56 {
  --tw-enter-translate-y: 14rem;
}

.slide-in-from-bottom-6 {
  --tw-enter-translate-y: 1.5rem;
}

.slide-in-from-bottom-60 {
  --tw-enter-translate-y: 15rem;
}

.slide-in-from-bottom-64 {
  --tw-enter-translate-y: 16rem;
}

.slide-in-from-bottom-7 {
  --tw-enter-translate-y: 1.75rem;
}

.slide-in-from-bottom-72 {
  --tw-enter-translate-y: 18rem;
}

.slide-in-from-bottom-8 {
  --tw-enter-translate-y: 2rem;
}

.slide-in-from-bottom-80 {
  --tw-enter-translate-y: 20rem;
}

.slide-in-from-bottom-9 {
  --tw-enter-translate-y: 2.25rem;
}

.slide-in-from-bottom-96 {
  --tw-enter-translate-y: 24rem;
}

.slide-in-from-bottom-full {
  --tw-enter-translate-y: 100%;
}

.slide-in-from-bottom-px {
  --tw-enter-translate-y: 1px;
}

.slide-in-from-left {
  --tw-enter-translate-x: -100%;
}

.slide-in-from-left-0 {
  --tw-enter-translate-x: -0px;
}

.slide-in-from-left-0.5 {
  --tw-enter-translate-x: -0.125rem;
}

.slide-in-from-left-1 {
  --tw-enter-translate-x: -0.25rem;
}

.slide-in-from-left-1.5 {
  --tw-enter-translate-x: -0.375rem;
}

.slide-in-from-left-1/2 {
  --tw-enter-translate-x: -50%;
}

.slide-in-from-left-1/3 {
  --tw-enter-translate-x: -33.333333%;
}

.slide-in-from-left-1/4 {
  --tw-enter-translate-x: -25%;
}

.slide-in-from-left-10 {
  --tw-enter-translate-x: -2.5rem;
}

.slide-in-from-left-11 {
  --tw-enter-translate-x: -2.75rem;
}

.slide-in-from-left-12 {
  --tw-enter-translate-x: -3rem;
}

.slide-in-from-left-14 {
  --tw-enter-translate-x: -3.5rem;
}

.slide-in-from-left-16 {
  --tw-enter-translate-x: -4rem;
}

.slide-in-from-left-2 {
  --tw-enter-translate-x: -0.5rem;
}

.slide-in-from-left-2.5 {
  --tw-enter-translate-x: -0.625rem;
}

.slide-in-from-left-2/3 {
  --tw-enter-translate-x: -66.666667%;
}

.slide-in-from-left-2/4 {
  --tw-enter-translate-x: -50%;
}

.slide-in-from-left-20 {
  --tw-enter-translate-x: -5rem;
}

.slide-in-from-left-24 {
  --tw-enter-translate-x: -6rem;
}

.slide-in-from-left-28 {
  --tw-enter-translate-x: -7rem;
}

.slide-in-from-left-3 {
  --tw-enter-translate-x: -0.75rem;
}

.slide-in-from-left-3.5 {
  --tw-enter-translate-x: -0.875rem;
}

.slide-in-from-left-3/4 {
  --tw-enter-translate-x: -75%;
}

.slide-in-from-left-32 {
  --tw-enter-translate-x: -8rem;
}

.slide-in-from-left-36 {
  --tw-enter-translate-x: -9rem;
}

.slide-in-from-left-4 {
  --tw-enter-translate-x: -1rem;
}

.slide-in-from-left-40 {
  --tw-enter-translate-x: -10rem;
}

.slide-in-from-left-44 {
  --tw-enter-translate-x: -11rem;
}

.slide-in-from-left-48 {
  --tw-enter-translate-x: -12rem;
}

.slide-in-from-left-5 {
  --tw-enter-translate-x: -1.25rem;
}

.slide-in-from-left-52 {
  --tw-enter-translate-x: -13rem;
}

.slide-in-from-left-56 {
  --tw-enter-translate-x: -14rem;
}

.slide-in-from-left-6 {
  --tw-enter-translate-x: -1.5rem;
}

.slide-in-from-left-60 {
  --tw-enter-translate-x: -15rem;
}

.slide-in-from-left-64 {
  --tw-enter-translate-x: -16rem;
}

.slide-in-from-left-7 {
  --tw-enter-translate-x: -1.75rem;
}

.slide-in-from-left-72 {
  --tw-enter-translate-x: -18rem;
}

.slide-in-from-left-8 {
  --tw-enter-translate-x: -2rem;
}

.slide-in-from-left-80 {
  --tw-enter-translate-x: -20rem;
}

.slide-in-from-left-9 {
  --tw-enter-translate-x: -2.25rem;
}

.slide-in-from-left-96 {
  --tw-enter-translate-x: -24rem;
}

.slide-in-from-left-full {
  --tw-enter-translate-x: -100%;
}

.slide-in-from-left-px {
  --tw-enter-translate-x: -1px;
}

.slide-in-from-right {
  --tw-enter-translate-x: 100%;
}

.slide-in-from-right-0 {
  --tw-enter-translate-x: 0px;
}

.slide-in-from-right-0.5 {
  --tw-enter-translate-x: 0.125rem;
}

.slide-in-from-right-1 {
  --tw-enter-translate-x: 0.25rem;
}

.slide-in-from-right-1.5 {
  --tw-enter-translate-x: 0.375rem;
}

.slide-in-from-right-1/2 {
  --tw-enter-translate-x: 50%;
}

.slide-in-from-right-1/3 {
  --tw-enter-translate-x: 33.333333%;
}

.slide-in-from-right-1/4 {
  --tw-enter-translate-x: 25%;
}

.slide-in-from-right-10 {
  --tw-enter-translate-x: 2.5rem;
}

.slide-in-from-right-11 {
  --tw-enter-translate-x: 2.75rem;
}

.slide-in-from-right-12 {
  --tw-enter-translate-x: 3rem;
}

.slide-in-from-right-14 {
  --tw-enter-translate-x: 3.5rem;
}

.slide-in-from-right-16 {
  --tw-enter-translate-x: 4rem;
}

.slide-in-from-right-2 {
  --tw-enter-translate-x: 0.5rem;
}

.slide-in-from-right-2.5 {
  --tw-enter-translate-x: 0.625rem;
}

.slide-in-from-right-2/3 {
  --tw-enter-translate-x: 66.666667%;
}

.slide-in-from-right-2/4 {
  --tw-enter-translate-x: 50%;
}

.slide-in-from-right-20 {
  --tw-enter-translate-x: 5rem;
}

.slide-in-from-right-24 {
  --tw-enter-translate-x: 6rem;
}

.slide-in-from-right-28 {
  --tw-enter-translate-x: 7rem;
}

.slide-in-from-right-3 {
  --tw-enter-translate-x: 0.75rem;
}

.slide-in-from-right-3.5 {
  --tw-enter-translate-x: 0.875rem;
}

.slide-in-from-right-3/4 {
  --tw-enter-translate-x: 75%;
}

.slide-in-from-right-32 {
  --tw-enter-translate-x: 8rem;
}

.slide-in-from-right-36 {
  --tw-enter-translate-x: 9rem;
}

.slide-in-from-right-4 {
  --tw-enter-translate-x: 1rem;
}

.slide-in-from-right-40 {
  --tw-enter-translate-x: 10rem;
}

.slide-in-from-right-44 {
  --tw-enter-translate-x: 11rem;
}

.slide-in-from-right-48 {
  --tw-enter-translate-x: 12rem;
}

.slide-in-from-right-5 {
  --tw-enter-translate-x: 1.25rem;
}

.slide-in-from-right-52 {
  --tw-enter-translate-x: 13rem;
}

.slide-in-from-right-56 {
  --tw-enter-translate-x: 14rem;
}

.slide-in-from-right-6 {
  --tw-enter-translate-x: 1.5rem;
}

.slide-in-from-right-60 {
  --tw-enter-translate-x: 15rem;
}

.slide-in-from-right-64 {
  --tw-enter-translate-x: 16rem;
}

.slide-in-from-right-7 {
  --tw-enter-translate-x: 1.75rem;
}

.slide-in-from-right-72 {
  --tw-enter-translate-x: 18rem;
}

.slide-in-from-right-8 {
  --tw-enter-translate-x: 2rem;
}

.slide-in-from-right-80 {
  --tw-enter-translate-x: 20rem;
}

.slide-in-from-right-9 {
  --tw-enter-translate-x: 2.25rem;
}

.slide-in-from-right-96 {
  --tw-enter-translate-x: 24rem;
}

.slide-in-from-right-full {
  --tw-enter-translate-x: 100%;
}

.slide-in-from-right-px {
  --tw-enter-translate-x: 1px;
}

.slide-in-from-top {
  --tw-enter-translate-y: -100%;
}

.slide-in-from-top-0 {
  --tw-enter-translate-y: -0px;
}

.slide-in-from-top-0.5 {
  --tw-enter-translate-y: -0.125rem;
}

.slide-in-from-top-1 {
  --tw-enter-translate-y: -0.25rem;
}

.slide-in-from-top-1.5 {
  --tw-enter-translate-y: -0.375rem;
}

.slide-in-from-top-1/2 {
  --tw-enter-translate-y: -50%;
}

.slide-in-from-top-1/3 {
  --tw-enter-translate-y: -33.333333%;
}

.slide-in-from-top-1/4 {
  --tw-enter-translate-y: -25%;
}

.slide-in-from-top-10 {
  --tw-enter-translate-y: -2.5rem;
}

.slide-in-from-top-11 {
  --tw-enter-translate-y: -2.75rem;
}

.slide-in-from-top-12 {
  --tw-enter-translate-y: -3rem;
}

.slide-in-from-top-14 {
  --tw-enter-translate-y: -3.5rem;
}

.slide-in-from-top-16 {
  --tw-enter-translate-y: -4rem;
}

.slide-in-from-top-2 {
  --tw-enter-translate-y: -0.5rem;
}

.slide-in-from-top-2.5 {
  --tw-enter-translate-y: -0.625rem;
}

.slide-in-from-top-2/3 {
  --tw-enter-translate-y: -66.666667%;
}

.slide-in-from-top-2/4 {
  --tw-enter-translate-y: -50%;
}

.slide-in-from-top-20 {
  --tw-enter-translate-y: -5rem;
}

.slide-in-from-top-24 {
  --tw-enter-translate-y: -6rem;
}

.slide-in-from-top-28 {
  --tw-enter-translate-y: -7rem;
}

.slide-in-from-top-3 {
  --tw-enter-translate-y: -0.75rem;
}

.slide-in-from-top-3.5 {
  --tw-enter-translate-y: -0.875rem;
}

.slide-in-from-top-3/4 {
  --tw-enter-translate-y: -75%;
}

.slide-in-from-top-32 {
  --tw-enter-translate-y: -8rem;
}

.slide-in-from-top-36 {
  --tw-enter-translate-y: -9rem;
}

.slide-in-from-top-4 {
  --tw-enter-translate-y: -1rem;
}

.slide-in-from-top-40 {
  --tw-enter-translate-y: -10rem;
}

.slide-in-from-top-44 {
  --tw-enter-translate-y: -11rem;
}

.slide-in-from-top-48 {
  --tw-enter-translate-y: -12rem;
}

.slide-in-from-top-5 {
  --tw-enter-translate-y: -1.25rem;
}

.slide-in-from-top-52 {
  --tw-enter-translate-y: -13rem;
}

.slide-in-from-top-56 {
  --tw-enter-translate-y: -14rem;
}

.slide-in-from-top-6 {
  --tw-enter-translate-y: -1.5rem;
}

.slide-in-from-top-60 {
  --tw-enter-translate-y: -15rem;
}

.slide-in-from-top-64 {
  --tw-enter-translate-y: -16rem;
}

.slide-in-from-top-7 {
  --tw-enter-translate-y: -1.75rem;
}

.slide-in-from-top-72 {
  --tw-enter-translate-y: -18rem;
}

.slide-in-from-top-8 {
  --tw-enter-translate-y: -2rem;
}

.slide-in-from-top-80 {
  --tw-enter-translate-y: -20rem;
}

.slide-in-from-top-9 {
  --tw-enter-translate-y: -2.25rem;
}

.slide-in-from-top-96 {
  --tw-enter-translate-y: -24rem;
}

.slide-in-from-top-full {
  --tw-enter-translate-y: -100%;
}

.slide-in-from-top-px {
  --tw-enter-translate-y: -1px;
}

.slide-out-to-bottom {
  --tw-exit-translate-y: 100%;
}

.slide-out-to-bottom-0 {
  --tw-exit-translate-y: 0px;
}

.slide-out-to-bottom-0.5 {
  --tw-exit-translate-y: 0.125rem;
}

.slide-out-to-bottom-1 {
  --tw-exit-translate-y: 0.25rem;
}

.slide-out-to-bottom-1.5 {
  --tw-exit-translate-y: 0.375rem;
}

.slide-out-to-bottom-1/2 {
  --tw-exit-translate-y: 50%;
}

.slide-out-to-bottom-1/3 {
  --tw-exit-translate-y: 33.333333%;
}

.slide-out-to-bottom-1/4 {
  --tw-exit-translate-y: 25%;
}

.slide-out-to-bottom-10 {
  --tw-exit-translate-y: 2.5rem;
}

.slide-out-to-bottom-11 {
  --tw-exit-translate-y: 2.75rem;
}

.slide-out-to-bottom-12 {
  --tw-exit-translate-y: 3rem;
}

.slide-out-to-bottom-14 {
  --tw-exit-translate-y: 3.5rem;
}

.slide-out-to-bottom-16 {
  --tw-exit-translate-y: 4rem;
}

.slide-out-to-bottom-2 {
  --tw-exit-translate-y: 0.5rem;
}

.slide-out-to-bottom-2.5 {
  --tw-exit-translate-y: 0.625rem;
}

.slide-out-to-bottom-2/3 {
  --tw-exit-translate-y: 66.666667%;
}

.slide-out-to-bottom-2/4 {
  --tw-exit-translate-y: 50%;
}

.slide-out-to-bottom-20 {
  --tw-exit-translate-y: 5rem;
}

.slide-out-to-bottom-24 {
  --tw-exit-translate-y: 6rem;
}

.slide-out-to-bottom-28 {
  --tw-exit-translate-y: 7rem;
}

.slide-out-to-bottom-3 {
  --tw-exit-translate-y: 0.75rem;
}

.slide-out-to-bottom-3.5 {
  --tw-exit-translate-y: 0.875rem;
}

.slide-out-to-bottom-3/4 {
  --tw-exit-translate-y: 75%;
}

.slide-out-to-bottom-32 {
  --tw-exit-translate-y: 8rem;
}

.slide-out-to-bottom-36 {
  --tw-exit-translate-y: 9rem;
}

.slide-out-to-bottom-4 {
  --tw-exit-translate-y: 1rem;
}

.slide-out-to-bottom-40 {
  --tw-exit-translate-y: 10rem;
}

.slide-out-to-bottom-44 {
  --tw-exit-translate-y: 11rem;
}

.slide-out-to-bottom-48 {
  --tw-exit-translate-y: 12rem;
}

.slide-out-to-bottom-5 {
  --tw-exit-translate-y: 1.25rem;
}

.slide-out-to-bottom-52 {
  --tw-exit-translate-y: 13rem;
}

.slide-out-to-bottom-56 {
  --tw-exit-translate-y: 14rem;
}

.slide-out-to-bottom-6 {
  --tw-exit-translate-y: 1.5rem;
}

.slide-out-to-bottom-60 {
  --tw-exit-translate-y: 15rem;
}

.slide-out-to-bottom-64 {
  --tw-exit-translate-y: 16rem;
}

.slide-out-to-bottom-7 {
  --tw-exit-translate-y: 1.75rem;
}

.slide-out-to-bottom-72 {
  --tw-exit-translate-y: 18rem;
}

.slide-out-to-bottom-8 {
  --tw-exit-translate-y: 2rem;
}

.slide-out-to-bottom-80 {
  --tw-exit-translate-y: 20rem;
}

.slide-out-to-bottom-9 {
  --tw-exit-translate-y: 2.25rem;
}

.slide-out-to-bottom-96 {
  --tw-exit-translate-y: 24rem;
}

.slide-out-to-bottom-full {
  --tw-exit-translate-y: 100%;
}

.slide-out-to-bottom-px {
  --tw-exit-translate-y: 1px;
}

.slide-out-to-left {
  --tw-exit-translate-x: -100%;
}

.slide-out-to-left-0 {
  --tw-exit-translate-x: -0px;
}

.slide-out-to-left-0.5 {
  --tw-exit-translate-x: -0.125rem;
}

.slide-out-to-left-1 {
  --tw-exit-translate-x: -0.25rem;
}

.slide-out-to-left-1.5 {
  --tw-exit-translate-x: -0.375rem;
}

.slide-out-to-left-1/2 {
  --tw-exit-translate-x: -50%;
}

.slide-out-to-left-1/3 {
  --tw-exit-translate-x: -33.333333%;
}

.slide-out-to-left-1/4 {
  --tw-exit-translate-x: -25%;
}

.slide-out-to-left-10 {
  --tw-exit-translate-x: -2.5rem;
}

.slide-out-to-left-11 {
  --tw-exit-translate-x: -2.75rem;
}

.slide-out-to-left-12 {
  --tw-exit-translate-x: -3rem;
}

.slide-out-to-left-14 {
  --tw-exit-translate-x: -3.5rem;
}

.slide-out-to-left-16 {
  --tw-exit-translate-x: -4rem;
}

.slide-out-to-left-2 {
  --tw-exit-translate-x: -0.5rem;
}

.slide-out-to-left-2.5 {
  --tw-exit-translate-x: -0.625rem;
}

.slide-out-to-left-2/3 {
  --tw-exit-translate-x: -66.666667%;
}

.slide-out-to-left-2/4 {
  --tw-exit-translate-x: -50%;
}

.slide-out-to-left-20 {
  --tw-exit-translate-x: -5rem;
}

.slide-out-to-left-24 {
  --tw-exit-translate-x: -6rem;
}

.slide-out-to-left-28 {
  --tw-exit-translate-x: -7rem;
}

.slide-out-to-left-3 {
  --tw-exit-translate-x: -0.75rem;
}

.slide-out-to-left-3.5 {
  --tw-exit-translate-x: -0.875rem;
}

.slide-out-to-left-3/4 {
  --tw-exit-translate-x: -75%;
}

.slide-out-to-left-32 {
  --tw-exit-translate-x: -8rem;
}

.slide-out-to-left-36 {
  --tw-exit-translate-x: -9rem;
}

.slide-out-to-left-4 {
  --tw-exit-translate-x: -1rem;
}

.slide-out-to-left-40 {
  --tw-exit-translate-x: -10rem;
}

.slide-out-to-left-44 {
  --tw-exit-translate-x: -11rem;
}

.slide-out-to-left-48 {
  --tw-exit-translate-x: -12rem;
}

.slide-out-to-left-5 {
  --tw-exit-translate-x: -1.25rem;
}

.slide-out-to-left-52 {
  --tw-exit-translate-x: -13rem;
}

.slide-out-to-left-56 {
  --tw-exit-translate-x: -14rem;
}

.slide-out-to-left-6 {
  --tw-exit-translate-x: -1.5rem;
}

.slide-out-to-left-60 {
  --tw-exit-translate-x: -15rem;
}

.slide-out-to-left-64 {
  --tw-exit-translate-x: -16rem;
}

.slide-out-to-left-7 {
  --tw-exit-translate-x: -1.75rem;
}

.slide-out-to-left-72 {
  --tw-exit-translate-x: -18rem;
}

.slide-out-to-left-8 {
  --tw-exit-translate-x: -2rem;
}

.slide-out-to-left-80 {
  --tw-exit-translate-x: -20rem;
}

.slide-out-to-left-9 {
  --tw-exit-translate-x: -2.25rem;
}

.slide-out-to-left-96 {
  --tw-exit-translate-x: -24rem;
}

.slide-out-to-left-full {
  --tw-exit-translate-x: -100%;
}

.slide-out-to-left-px {
  --tw-exit-translate-x: -1px;
}

.slide-out-to-right {
  --tw-exit-translate-x: 100%;
}

.slide-out-to-right-0 {
  --tw-exit-translate-x: 0px;
}

.slide-out-to-right-0.5 {
  --tw-exit-translate-x: 0.125rem;
}

.slide-out-to-right-1 {
  --tw-exit-translate-x: 0.25rem;
}

.slide-out-to-right-1.5 {
  --tw-exit-translate-x: 0.375rem;
}

.slide-out-to-right-1/2 {
  --tw-exit-translate-x: 50%;
}

.slide-out-to-right-1/3 {
  --tw-exit-translate-x: 33.333333%;
}

.slide-out-to-right-1/4 {
  --tw-exit-translate-x: 25%;
}

.slide-out-to-right-10 {
  --tw-exit-translate-x: 2.5rem;
}

.slide-out-to-right-11 {
  --tw-exit-translate-x: 2.75rem;
}

.slide-out-to-right-12 {
  --tw-exit-translate-x: 3rem;
}

.slide-out-to-right-14 {
  --tw-exit-translate-x: 3.5rem;
}

.slide-out-to-right-16 {
  --tw-exit-translate-x: 4rem;
}

.slide-out-to-right-2 {
  --tw-exit-translate-x: 0.5rem;
}

.slide-out-to-right-2.5 {
  --tw-exit-translate-x: 0.625rem;
}

.slide-out-to-right-2/3 {
  --tw-exit-translate-x: 66.666667%;
}

.slide-out-to-right-2/4 {
  --tw-exit-translate-x: 50%;
}

.slide-out-to-right-20 {
  --tw-exit-translate-x: 5rem;
}

.slide-out-to-right-24 {
  --tw-exit-translate-x: 6rem;
}

.slide-out-to-right-28 {
  --tw-exit-translate-x: 7rem;
}

.slide-out-to-right-3 {
  --tw-exit-translate-x: 0.75rem;
}

.slide-out-to-right-3.5 {
  --tw-exit-translate-x: 0.875rem;
}

.slide-out-to-right-3/4 {
  --tw-exit-translate-x: 75%;
}

.slide-out-to-right-32 {
  --tw-exit-translate-x: 8rem;
}

.slide-out-to-right-36 {
  --tw-exit-translate-x: 9rem;
}

.slide-out-to-right-4 {
  --tw-exit-translate-x: 1rem;
}

.slide-out-to-right-40 {
  --tw-exit-translate-x: 10rem;
}

.slide-out-to-right-44 {
  --tw-exit-translate-x: 11rem;
}

.slide-out-to-right-48 {
  --tw-exit-translate-x: 12rem;
}

.slide-out-to-right-5 {
  --tw-exit-translate-x: 1.25rem;
}

.slide-out-to-right-52 {
  --tw-exit-translate-x: 13rem;
}

.slide-out-to-right-56 {
  --tw-exit-translate-x: 14rem;
}

.slide-out-to-right-6 {
  --tw-exit-translate-x: 1.5rem;
}

.slide-out-to-right-60 {
  --tw-exit-translate-x: 15rem;
}

.slide-out-to-right-64 {
  --tw-exit-translate-x: 16rem;
}

.slide-out-to-right-7 {
  --tw-exit-translate-x: 1.75rem;
}

.slide-out-to-right-72 {
  --tw-exit-translate-x: 18rem;
}

.slide-out-to-right-8 {
  --tw-exit-translate-x: 2rem;
}

.slide-out-to-right-80 {
  --tw-exit-translate-x: 20rem;
}

.slide-out-to-right-9 {
  --tw-exit-translate-x: 2.25rem;
}

.slide-out-to-right-96 {
  --tw-exit-translate-x: 24rem;
}

.slide-out-to-right-full {
  --tw-exit-translate-x: 100%;
}

.slide-out-to-right-px {
  --tw-exit-translate-x: 1px;
}

.slide-out-to-top {
  --tw-exit-translate-y: -100%;
}

.slide-out-to-top-0 {
  --tw-exit-translate-y: -0px;
}

.slide-out-to-top-0.5 {
  --tw-exit-translate-y: -0.125rem;
}

.slide-out-to-top-1 {
  --tw-exit-translate-y: -0.25rem;
}

.slide-out-to-top-1.5 {
  --tw-exit-translate-y: -0.375rem;
}

.slide-out-to-top-1/2 {
  --tw-exit-translate-y: -50%;
}

.slide-out-to-top-1/3 {
  --tw-exit-translate-y: -33.333333%;
}

.slide-out-to-top-1/4 {
  --tw-exit-translate-y: -25%;
}

.slide-out-to-top-10 {
  --tw-exit-translate-y: -2.5rem;
}

.slide-out-to-top-11 {
  --tw-exit-translate-y: -2.75rem;
}

.slide-out-to-top-12 {
  --tw-exit-translate-y: -3rem;
}

.slide-out-to-top-14 {
  --tw-exit-translate-y: -3.5rem;
}

.slide-out-to-top-16 {
  --tw-exit-translate-y: -4rem;
}

.slide-out-to-top-2 {
  --tw-exit-translate-y: -0.5rem;
}

.slide-out-to-top-2.5 {
  --tw-exit-translate-y: -0.625rem;
}

.slide-out-to-top-2/3 {
  --tw-exit-translate-y: -66.666667%;
}

.slide-out-to-top-2/4 {
  --tw-exit-translate-y: -50%;
}

.slide-out-to-top-20 {
  --tw-exit-translate-y: -5rem;
}

.slide-out-to-top-24 {
  --tw-exit-translate-y: -6rem;
}

.slide-out-to-top-28 {
  --tw-exit-translate-y: -7rem;
}

.slide-out-to-top-3 {
  --tw-exit-translate-y: -0.75rem;
}

.slide-out-to-top-3.5 {
  --tw-exit-translate-y: -0.875rem;
}

.slide-out-to-top-3/4 {
  --tw-exit-translate-y: -75%;
}

.slide-out-to-top-32 {
  --tw-exit-translate-y: -8rem;
}

.slide-out-to-top-36 {
  --tw-exit-translate-y: -9rem;
}

.slide-out-to-top-4 {
  --tw-exit-translate-y: -1rem;
}

.slide-out-to-top-40 {
  --tw-exit-translate-y: -10rem;
}

.slide-out-to-top-44 {
  --tw-exit-translate-y: -11rem;
}

.slide-out-to-top-48 {
  --tw-exit-translate-y: -12rem;
}

.slide-out-to-top-5 {
  --tw-exit-translate-y: -1.25rem;
}

.slide-out-to-top-52 {
  --tw-exit-translate-y: -13rem;
}

.slide-out-to-top-56 {
  --tw-exit-translate-y: -14rem;
}

.slide-out-to-top-6 {
  --tw-exit-translate-y: -1.5rem;
}

.slide-out-to-top-60 {
  --tw-exit-translate-y: -15rem;
}

.slide-out-to-top-64 {
  --tw-exit-translate-y: -16rem;
}

.slide-out-to-top-7 {
  --tw-exit-translate-y: -1.75rem;
}

.slide-out-to-top-72 {
  --tw-exit-translate-y: -18rem;
}

.slide-out-to-top-8 {
  --tw-exit-translate-y: -2rem;
}

.slide-out-to-top-80 {
  --tw-exit-translate-y: -20rem;
}

.slide-out-to-top-9 {
  --tw-exit-translate-y: -2.25rem;
}

.slide-out-to-top-96 {
  --tw-exit-translate-y: -24rem;
}

.slide-out-to-top-full {
  --tw-exit-translate-y: -100%;
}

.slide-out-to-top-px {
  --tw-exit-translate-y: -1px;
}

.duration-0 {
  animation-duration: 0s;
}

.duration-100 {
  animation-duration: 100ms;
}

.duration-1000 {
  animation-duration: 1000ms;
}

.duration-150 {
  animation-duration: 150ms;
}

.duration-200 {
  animation-duration: 200ms;
}

.duration-300 {
  animation-duration: 300ms;
}

.duration-500 {
  animation-duration: 500ms;
}

.duration-700 {
  animation-duration: 700ms;
}

.duration-75 {
  animation-duration: 75ms;
}

.delay-0 {
  animation-delay: 0s;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-700 {
  animation-delay: 700ms;
}

.delay-75 {
  animation-delay: 75ms;
}

.ease-in {
  animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-in-out {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-linear {
  animation-timing-function: linear;
}

.ease-out {
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.running {
  animation-play-state: running;
}

.paused {
  animation-play-state: paused;
}

.fill-mode-backwards {
  animation-fill-mode: backwards;
}

.fill-mode-both {
  animation-fill-mode: both;
}

.fill-mode-forwards {
  animation-fill-mode: forwards;
}

.fill-mode-none {
  animation-fill-mode: none;
}

.direction-alternate {
  animation-direction: alternate;
}

.direction-alternate-reverse {
  animation-direction: alternate-reverse;
}

.direction-normal {
  animation-direction: normal;
}

.direction-reverse {
  animation-direction: reverse;
}

.repeat-0 {
  animation-iteration-count: 0;
}

.repeat-1 {
  animation-iteration-count: 1;
}

.repeat-infinite {
  animation-iteration-count: infinite;
}
`.trim(),tt="<!-- USER_CODE -->",et="<!-- EXTRA_STYLES -->",Nt={theme:{extend:{keyframes:{"accordion-down":{from:{height:"0"},to:{height:"var(--radix-accordion-content-height)"}},"accordion-up":{from:{height:"var(--radix-accordion-content-height)"},to:{height:"0"}}},animation:{"accordion-down":"accordion-down 0.2s ease-out","accordion-up":"accordion-up 0.2s ease-out"},colors:{border:"hsl(var(--border))",input:"hsl(var(--input))",ring:"hsl(var(--ring))",background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",primary:{DEFAULT:"hsl(var(--primary))",foreground:"hsl(var(--primary-foreground))"},secondary:{DEFAULT:"hsl(var(--secondary))",foreground:"hsl(var(--secondary-foreground))"},destructive:{DEFAULT:"hsl(var(--destructive))",foreground:"hsl(var(--destructive-foreground))"},muted:{DEFAULT:"hsl(var(--muted))",foreground:"hsl(var(--muted-foreground))"},accent:{DEFAULT:"hsl(var(--accent))",foreground:"hsl(var(--accent-foreground))"},popover:{DEFAULT:"hsl(var(--popover))",foreground:"hsl(var(--popover-foreground))"},card:{DEFAULT:"hsl(var(--card))",foreground:"hsl(var(--card-foreground))"}},borderRadius:{lg:"var(--radius)",md:"calc(var(--radius) - 2px)",sm:"calc(var(--radius) - 4px)"},sidebar:{DEFAULT:"hsl(var(--sidebar-background))",foreground:"hsl(var(--sidebar-foreground))",primary:"hsl(var(--sidebar-primary))","primary-foreground":"hsl(var(--sidebar-primary-foreground))",accent:"hsl(var(--sidebar-accent))","accent-foreground":"hsl(var(--sidebar-accent-foreground))",border:"hsl(var(--sidebar-border))",ring:"hsl(var(--sidebar-ring))"}}}},M=`
<head>
  <meta charset="UTF-8" />
  <script src="https://cdn.tailwindcss.com/3.4.16"><\/script>
  <script>
    tailwind.config = ${JSON.stringify(Nt)};
  <\/script>
  <style>${gt}</style>
  ${et}
</head>
`.trim(),Ot=`
<script type="module">
  (async () => {
    try {
      const { default: UserComponent } = await import("${tt}");
      const root = createRoot(document.getElementById("root"));
      root.render(createElement(UserComponent));
    } catch (error) {
      console.error(error)
      document.documentElement.setAttribute('data-fatal', '');
      return
    }

    requestAnimationFrame(() => {
      document.documentElement.setAttribute('data-ready', '');
    })
  })();
<\/script>
`.trim(),bt=`
<!DOCTYPE html>
<html lang="en">
  ${M}
  <body>
    <div id="root"></div>
    ${Ot}
  </body>
</html>
`.trim(),St=(t,e=[])=>{const r=`<style>
${e.join(`
`)}
</style>`,o=M.replace(et,r),d=bt.replace(M,o),u=new Blob([t],{type:"application/javascript"}),s=URL.createObjectURL(u);return[d.replace(tt,s),u.size]},rt=async()=>Promise.all([n(()=>import("./browser-s9dlvK3E.js").then(t=>t.b),__vite__mapDeps([2,1])),n(()=>import("./trace-mapping.umd-CPzQizkX.js").then(t=>t.t),__vite__mapDeps([0,1]))]),Ct="//# sourceMappingURL=data:application/json;base64,",At=t=>{let e=null,r=t;try{[r,e]=t.split(Ct)}catch(o){y.error("Error extracting source map",o)}if(e)try{return[r,JSON.parse(atob(e))]}catch(o){y.error("Error parsing source map",o)}return[r,null]},P={"@/components/ui/accordion":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_ACCORDION:t}=await import("./accordion-CWuR90sb.js");return{SHADCN_COMPONENTS_UI_ACCORDION:t}},[])).SHADCN_COMPONENTS_UI_ACCORDION,"@/components/ui/alert":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_ALERT:t}=await import("./alert-BhjtPMRG.js");return{SHADCN_COMPONENTS_UI_ALERT:t}},[])).SHADCN_COMPONENTS_UI_ALERT,"@/components/ui/alert-dialog":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_ALERT_DIALOG:t}=await import("./alert-dialog-OVN5Wfd1.js");return{SHADCN_COMPONENTS_UI_ALERT_DIALOG:t}},[])).SHADCN_COMPONENTS_UI_ALERT_DIALOG,"@/components/ui/aspect-ratio":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_ASPECT_RATIO:t}=await import("./aspect-ratio-CPhfgjgQ.js");return{SHADCN_COMPONENTS_UI_ASPECT_RATIO:t}},[])).SHADCN_COMPONENTS_UI_ASPECT_RATIO,"@/components/ui/avatar":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_AVATAR:t}=await import("./avatar-zO-VYFcx.js");return{SHADCN_COMPONENTS_UI_AVATAR:t}},[])).SHADCN_COMPONENTS_UI_AVATAR,"@/components/ui/badge":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_BADGE:t}=await import("./badge-BHmFNq1-.js");return{SHADCN_COMPONENTS_UI_BADGE:t}},[])).SHADCN_COMPONENTS_UI_BADGE,"@/components/ui/breadcrumb":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_BREADCRUMB:t}=await import("./breadcrumb-ZeL-HJZY.js");return{SHADCN_COMPONENTS_UI_BREADCRUMB:t}},[])).SHADCN_COMPONENTS_UI_BREADCRUMB,"@/components/ui/button":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_BUTTON:t}=await import("./button-ByS60n3r.js");return{SHADCN_COMPONENTS_UI_BUTTON:t}},[])).SHADCN_COMPONENTS_UI_BUTTON,"@/components/ui/calendar":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CALENDAR:t}=await import("./calendar-Hv5paKxM.js");return{SHADCN_COMPONENTS_UI_CALENDAR:t}},[])).SHADCN_COMPONENTS_UI_CALENDAR,"@/components/ui/card":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CARD:t}=await import("./card-Vk2EcttK.js");return{SHADCN_COMPONENTS_UI_CARD:t}},[])).SHADCN_COMPONENTS_UI_CARD,"@/components/ui/carousel":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CAROUSEL:t}=await import("./carousel-B2cQOTrt.js");return{SHADCN_COMPONENTS_UI_CAROUSEL:t}},[])).SHADCN_COMPONENTS_UI_CAROUSEL,"@/components/ui/chart":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CHART:t}=await import("./chart-BkHzxZ7Z.js");return{SHADCN_COMPONENTS_UI_CHART:t}},[])).SHADCN_COMPONENTS_UI_CHART,"@/components/ui/checkbox":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CHECKBOX:t}=await import("./checkbox-Iuc-TiAO.js");return{SHADCN_COMPONENTS_UI_CHECKBOX:t}},[])).SHADCN_COMPONENTS_UI_CHECKBOX,"@/components/ui/collapsible":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_COLLAPSIBLE:t}=await import("./collapsible-B09jc_sf.js");return{SHADCN_COMPONENTS_UI_COLLAPSIBLE:t}},[])).SHADCN_COMPONENTS_UI_COLLAPSIBLE,"@/components/ui/command":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_COMMAND:t}=await import("./command-TdFnMtqY.js");return{SHADCN_COMPONENTS_UI_COMMAND:t}},[])).SHADCN_COMPONENTS_UI_COMMAND,"@/components/ui/context-menu":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CONTEXT_MENU:t}=await import("./context-menu-C_y7J4-L.js");return{SHADCN_COMPONENTS_UI_CONTEXT_MENU:t}},[])).SHADCN_COMPONENTS_UI_CONTEXT_MENU,"@/components/ui/dialog":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_DIALOG:t}=await import("./dialog-B9kpBpIV.js");return{SHADCN_COMPONENTS_UI_DIALOG:t}},[])).SHADCN_COMPONENTS_UI_DIALOG,"@/components/ui/drawer":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_DRAWER:t}=await import("./drawer-CNA5nJGF.js");return{SHADCN_COMPONENTS_UI_DRAWER:t}},[])).SHADCN_COMPONENTS_UI_DRAWER,"@/components/ui/dropdown-menu":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_DROPDOWN_MENU:t}=await import("./dropdown-menu-BvX0-C-p.js");return{SHADCN_COMPONENTS_UI_DROPDOWN_MENU:t}},[])).SHADCN_COMPONENTS_UI_DROPDOWN_MENU,"@/components/ui/form":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_FORM:t}=await import("./form-BXROMa7f.js");return{SHADCN_COMPONENTS_UI_FORM:t}},[])).SHADCN_COMPONENTS_UI_FORM,"@/components/ui/hover-card":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_HOVER_CARD:t}=await import("./hover-card-mePBisBS.js");return{SHADCN_COMPONENTS_UI_HOVER_CARD:t}},[])).SHADCN_COMPONENTS_UI_HOVER_CARD,"@/components/ui/input":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_INPUT:t}=await import("./input-BSJ0vnFa.js");return{SHADCN_COMPONENTS_UI_INPUT:t}},[])).SHADCN_COMPONENTS_UI_INPUT,"@/components/ui/input-otp":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_INPUT_OTP:t}=await import("./input-otp-D6cZBonY.js");return{SHADCN_COMPONENTS_UI_INPUT_OTP:t}},[])).SHADCN_COMPONENTS_UI_INPUT_OTP,"@/components/ui/label":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_LABEL:t}=await import("./label-BLZyNSx2.js");return{SHADCN_COMPONENTS_UI_LABEL:t}},[])).SHADCN_COMPONENTS_UI_LABEL,"@/components/ui/menubar":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_MENUBAR:t}=await import("./menubar-BOVBkIJB.js");return{SHADCN_COMPONENTS_UI_MENUBAR:t}},[])).SHADCN_COMPONENTS_UI_MENUBAR,"@/components/ui/navigation-menu":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_NAVIGATION_MENU:t}=await import("./navigation-menu-BLGJ0m0s.js");return{SHADCN_COMPONENTS_UI_NAVIGATION_MENU:t}},[])).SHADCN_COMPONENTS_UI_NAVIGATION_MENU,"@/components/ui/pagination":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_PAGINATION:t}=await import("./pagination-DGyXo3rm.js");return{SHADCN_COMPONENTS_UI_PAGINATION:t}},[])).SHADCN_COMPONENTS_UI_PAGINATION,"@/components/ui/popover":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_POPOVER:t}=await import("./popover-C351Cl6_.js");return{SHADCN_COMPONENTS_UI_POPOVER:t}},[])).SHADCN_COMPONENTS_UI_POPOVER,"@/components/ui/progress":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_PROGRESS:t}=await import("./progress-D2jqZrfx.js");return{SHADCN_COMPONENTS_UI_PROGRESS:t}},[])).SHADCN_COMPONENTS_UI_PROGRESS,"@/components/ui/radio-group":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_RADIO_GROUP:t}=await import("./radio-group-FqB3xBBZ.js");return{SHADCN_COMPONENTS_UI_RADIO_GROUP:t}},[])).SHADCN_COMPONENTS_UI_RADIO_GROUP,"@/components/ui/resizable":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_RESIZABLE:t}=await import("./resizable-YzvZKc_l.js");return{SHADCN_COMPONENTS_UI_RESIZABLE:t}},[])).SHADCN_COMPONENTS_UI_RESIZABLE,"@/components/ui/scroll-area":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SCROLL_AREA:t}=await import("./scroll-area-BYMAg6Oa.js");return{SHADCN_COMPONENTS_UI_SCROLL_AREA:t}},[])).SHADCN_COMPONENTS_UI_SCROLL_AREA,"@/components/ui/separator":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SEPARATOR:t}=await import("./separator-DEw6wN7X.js");return{SHADCN_COMPONENTS_UI_SEPARATOR:t}},[])).SHADCN_COMPONENTS_UI_SEPARATOR,"@/components/ui/select":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SELECT:t}=await import("./select-CVHtEdbM.js");return{SHADCN_COMPONENTS_UI_SELECT:t}},[])).SHADCN_COMPONENTS_UI_SELECT,"@/components/ui/sheet":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SHEET:t}=await import("./sheet-DLdFqe0W.js");return{SHADCN_COMPONENTS_UI_SHEET:t}},[])).SHADCN_COMPONENTS_UI_SHEET,"@/components/ui/sidebar":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SIDEBAR:t}=await import("./sidebar-yJWgrJe_.js");return{SHADCN_COMPONENTS_UI_SIDEBAR:t}},[])).SHADCN_COMPONENTS_UI_SIDEBAR,"@/components/ui/skeleton":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SKELETON:t}=await import("./skeleton-dofzgYEL.js");return{SHADCN_COMPONENTS_UI_SKELETON:t}},[])).SHADCN_COMPONENTS_UI_SKELETON,"@/components/ui/slider":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SLIDER:t}=await import("./slider-DxDpj_aO.js");return{SHADCN_COMPONENTS_UI_SLIDER:t}},[])).SHADCN_COMPONENTS_UI_SLIDER,"@/components/ui/sonner":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SONNER:t}=await import("./sonner-DFZ7NV4a.js");return{SHADCN_COMPONENTS_UI_SONNER:t}},[])).SHADCN_COMPONENTS_UI_SONNER,"@/components/ui/switch":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SWITCH:t}=await import("./switch-BDJN6BDg.js");return{SHADCN_COMPONENTS_UI_SWITCH:t}},[])).SHADCN_COMPONENTS_UI_SWITCH,"@/components/ui/table":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TABLE:t}=await import("./table-B07MgB5-.js");return{SHADCN_COMPONENTS_UI_TABLE:t}},[])).SHADCN_COMPONENTS_UI_TABLE,"@/components/ui/tabs":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TABS:t}=await import("./tabs-B6xIqqWL.js");return{SHADCN_COMPONENTS_UI_TABS:t}},[])).SHADCN_COMPONENTS_UI_TABS,"@/components/ui/textarea":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TEXTAREA:t}=await import("./textarea-Cgw2UBQv.js");return{SHADCN_COMPONENTS_UI_TEXTAREA:t}},[])).SHADCN_COMPONENTS_UI_TEXTAREA,"@/components/ui/toast":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOAST:t}=await import("./toast-B1xsqC_7.js");return{SHADCN_COMPONENTS_UI_TOAST:t}},[])).SHADCN_COMPONENTS_UI_TOAST,"@/components/ui/toaster":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOASTER:t}=await import("./toaster-Ck15TlVm.js");return{SHADCN_COMPONENTS_UI_TOASTER:t}},[])).SHADCN_COMPONENTS_UI_TOASTER,"@/components/ui/toggle":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOGGLE:t}=await import("./toggle-BNfwz9HK.js");return{SHADCN_COMPONENTS_UI_TOGGLE:t}},[])).SHADCN_COMPONENTS_UI_TOGGLE,"@/components/ui/toggle-group":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOGGLE_GROUP:t}=await import("./toggle-group-DG8eVV66.js");return{SHADCN_COMPONENTS_UI_TOGGLE_GROUP:t}},[])).SHADCN_COMPONENTS_UI_TOGGLE_GROUP,"@/components/ui/tooltip":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOOLTIP:t}=await import("./tooltip-CHyFX41o.js");return{SHADCN_COMPONENTS_UI_TOOLTIP:t}},[])).SHADCN_COMPONENTS_UI_TOOLTIP,"@/hooks/use-toast":async()=>(await n(async()=>{const{SHADCN_HOOKS_USE_TOAST:t}=await import("./use-toast-CNAW1Aaw.js");return{SHADCN_HOOKS_USE_TOAST:t}},[])).SHADCN_HOOKS_USE_TOAST,"@/hooks/use-mobile":async()=>(await n(async()=>{const{SHADCN_HOOKS_USE_IS_MOBILE:t}=await import("./use-is-mobile-C5uV-qbD.js");return{SHADCN_HOOKS_USE_IS_MOBILE:t}},[])).SHADCN_HOOKS_USE_IS_MOBILE,"@/components/hooks/use-mobile":async()=>(await n(async()=>{const{SHADCN_HOOKS_USE_IS_MOBILE:t}=await import("./use-is-mobile-C5uV-qbD.js");return{SHADCN_HOOKS_USE_IS_MOBILE:t}},[])).SHADCN_HOOKS_USE_IS_MOBILE,"@/lib/utils":async()=>(await n(async()=>{const{SHADCN_LIB_UTILS:t}=await import("./utils-qa11U4rX.js");return{SHADCN_LIB_UTILS:t}},[])).SHADCN_LIB_UTILS,"@/components/lib/utils":async()=>(await n(async()=>{const{SHADCN_LIB_UTILS:t}=await import("./utils-qa11U4rX.js");return{SHADCN_LIB_UTILS:t}},[])).SHADCN_LIB_UTILS},A="18.3.1";function v(t){let e=t;const r=/\/(npm)\/react(-dom)?(@\d+\.\d+\.\d+)?\/\+esm/g;e=e.replace(r,a=>a.includes("react-dom")?a.replace(/react-dom(@\d+\.\d+\.\d+)?/,`react-dom@${A}`):a.replace(/react(@\d+\.\d+\.\d+)?/,`react@${A}`));const o=/react(@\d+\.\d+\.\d+)?\/jsx-runtime/g;e=e.replace(o,`react@${A}/jsx-runtime`);const d=/react-dom(@\d+\.\d+\.\d+)?\/client/g;e=e.replace(d,`react-dom@${A}/client`);const u=/npm\/three(@\d+\.\d+\.\d+)?\/\+esm/g;e=e.replace(u,"npm/three@0.172.0/+esm");const s=/npm\/@react-three\/fiber(@\d+\.\d+\.\d+)?\/\+esm/g;e=e.replace(s,"npm/@react-three/fiber@8.17.7/+esm");const l=/npm\/@react-three\/drei(@\d+\.\d+\.\d+)?\/\+esm/g;return e=e.replace(l,"npm/@react-three/drei@9.121.3/+esm"),e}const j="https://cdn.jsdelivr.net",T={},Tt=`
import { createElement, Component } from 'react';
import { createRoot } from 'react-dom/client';
import UserComponent from './${C}';

window.createRoot = createRoot;
window.createElement = createElement;

class UserComponentWithErrorBoundary extends Component {
  public componentDidCatch(error) {
    document.documentElement.setAttribute('data-fatal', '')
  }

  render() {
    return <UserComponent />;
  }
}

export default UserComponentWithErrorBoundary;
`,It=/https?:\/\/[^\s]+/,nt="onResolve-plugin",ot="onLoad-plugin",Rt=async(t,e)=>{const r=[],o={name:nt,setup(m){m.onResolve({filter:/^index\.js$/},({path:i})=>({path:i,namespace:"internal"})),m.onResolve({filter:/^\.\/user-component\.js$/},()=>({path:C,namespace:"internal"})),m.onResolve({filter:/^\.+\//},({path:i,importer:c})=>{let w="";try{w=new URL(i,c).toString()}catch{if(!It.test(c))throw new Error(`File not found: ${i}`)}return{path:w,namespace:"external"}}),m.onResolve({filter:/^@\/.*/},({path:i})=>i in P?{path:i,namespace:"internal"}:null),m.onResolve({filter:/^[^./]/},({path:i})=>({path:v(`${j}/npm/${i}/+esm`),namespace:"external"})),m.onResolve({filter:/^\//},({path:i})=>({path:v(`${j}${i}`),namespace:"external"}))}},d={name:ot,setup(m){m.onLoad({filter:/^index\.js$/,namespace:"internal"},()=>({contents:Tt,loader:"tsx"})),m.onLoad({filter:new RegExp(`^${C}$`),namespace:"internal"},()=>({contents:e??"",loader:"tsx"})),m.onLoad({filter:/^@\/.*/,namespace:"internal"},async({path:i})=>{if(i in P){const c=await P[i]();if(c)return{contents:c,loader:"tsx"}}return null}),m.onLoad({filter:/.*/,namespace:"external"},async({path:i})=>{if(T[i])return T[i];const c=await fetch(i);if(!c.ok)throw new Error(`Failed to fetch ${i}`);const w=c.headers.get("Content-Type");let f="jsx";if(w!=null&&w.includes("application/typescript")||i.endsWith(".ts"))f="ts";else if(i.endsWith(".tsx"))f="tsx";else if(i.endsWith(".js"))f="jsx";else if(i.endsWith(".css")||w!=null&&w.includes("text/css")){const S=await c.text();r.push(S);const N={contents:"",loader:"js"};return T[i]=N,N}const _=await c.text(),h={contents:v(_),loader:f};return T[i]=h,h})}},{outputFiles:u}=await t.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[o,d],format:"esm",minify:!0,splitting:!1,jsx:"automatic",jsxImportSource:"react",sourcemap:"inline"}),[{text:s}]=u,[l,a]=At(s);return{transpiledCode:l,sourceMap:a,cssImports:r}},Dt=t=>{const e=new RegExp(`internal:${C}:(\\d+)`),r=t.match(e),o=r==null?void 0:r.at(1);return o?parseInt(o):null},Pt=t=>{const e=t.join(`
`),r=e.includes("ERROR: Unexpected")||e.includes("ERROR: Unterminated")||e.includes("ERROR: Expected"),o=e.includes(`ERROR: [plugin: ${ot}]`),d=e.includes(`ERROR: [plugin: ${nt}]`);return r?"syntax":o?"package_load":d?"package_resolve":"unknown"},vt=async(t,e)=>{e({type:p.ENVIRONMENT_STATUS,status:R.INITIALIZING}),y.time("react.transpile"),await rt();const r=await Q();e({type:p.ENVIRONMENT_STATUS,status:R.INSTALLING_PACKAGES});let o=null,d=null,u=[];try{({transpiledCode:o,sourceMap:d,cssImports:u}=await Rt(r,t))}catch(m){if(!(m instanceof Error))return y.count("react_transpile_error",1,[{key:"type",value:"unknown"}]);const{name:i,message:c}=m,[w,...f]=c.split(`
`),_=f.filter(h=>h.trim().startsWith(`internal:${C}`));y.count("react_transpile_error",1,[{key:"type",value:Pt(_)}]);const E=Dt(c);e({type:p.ERROR,line:E,error:{name:i,line:E,message:w,stack:_}})}if(y.timeEnd("react.transpile"),!o)return e({type:p.RUN_COMPLETE,duration:null,wasCancelled:!1});const s=await Et(d),[l,a]=St(o,u);return g({type:p.INSTRUMENT,instrument:{type:"hist",label:"transpiled_react_size",value:a}}),Y({expectReadySignal:!0,html:l,onMessage:e,transformPosition:s})},Ut=async()=>{await rt(),await Q()},b=t=>({runId:t,id:crypto.randomUUID(),timestamp:Date.now()}),Lt=(t,e,r)=>{switch(g({type:p.RUN_START,...b(t)}),r){case"python":return J(e,o=>{g({...o,...b(t)})});case"javascript":case"typescript":break;case"html":return Y({html:e,transformPosition:null,onMessage:o=>{g({...o,...b(t)})}});case"react":return vt(e,o=>{g({...o,...b(t)})})}},Mt=t=>{switch(t){case"python":return ft();case"react":return Ut();default:return null}},at=async t=>{try{switch(t.type){case I.STOP_CODE:{const{runId:e}=t;return yt(),X(),g({type:p.RUN_COMPLETE,duration:null,wasCancelled:!0,...b(e)})}case I.PREPARE_ENVIRONMENT:{const{language:e}=t;return await Mt(e)}case I.RUN_CODE:{const{runId:e,code:r,language:o}=t;return await Lt(e,r,o)}}}catch(e){const r="runId"in t?t.runId:null;e instanceof Error&&g({type:p.ENVIRONMENT_ERROR,runId:r,error:{name:e.name,message:e.message}}),r&&g({type:p.RUN_COMPLETE,duration:null,...b(r)}),y.error("unexpected handleMessage error",e)}},U=[];let L=!1;const Ht=async t=>{if(U.push(t),!L){for(L=!0;U.length>0;){const e=U.shift();e&&await at(e)}L=!1}};it(t=>{t.type===I.STOP_CODE?at(t):Ht(t)});st({routeName:"main",onComplete:()=>F(),onError:t=>F()});y.log("main.ts complete");
