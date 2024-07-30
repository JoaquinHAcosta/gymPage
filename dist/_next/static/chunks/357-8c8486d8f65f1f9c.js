"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{8030:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(2265);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&t.indexOf(e)===r).join(" ")};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.forwardRef)((e,r)=>{let{color:t="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:u,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:r,...i,width:o,height:o,stroke:t,strokeWidth:s?24*Number(a)/Number(o):a,className:l("lucide",c),...f},[...d.map(e=>{let[r,t]=e;return(0,n.createElement)(r,t)}),...Array.isArray(u)?u:[u]])}),s=(e,r)=>{let t=(0,n.forwardRef)((t,i)=>{let{className:s,...c}=t;return(0,n.createElement)(a,{ref:i,iconNode:r,className:l("lucide-".concat(o(e)),s),...c})});return t.displayName="".concat(e),t}},2421:function(e,r,t){t.d(r,{Z:function(){return n}});/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,t(8030).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},291:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=t(9920)._(t(2265)).default.createContext(null)},8149:function(e,r,t){t.d(r,{M:function(){return n}});function n(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),!1===t||!n.defaultPrevented)return r?.(n)}}},976:function(e,r,t){t.d(r,{B:function(){return s}});var n=t(2265),o=t(8324),l=t(1584),i=t(1538),a=t(7437);function s(e){let r=e+"CollectionProvider",[t,s]=(0,o.b)(r),[c,u]=t(r,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:r,children:t}=e,o=n.useRef(null),l=n.useRef(new Map).current;return(0,a.jsx)(c,{scope:r,itemMap:l,collectionRef:o,children:t})};d.displayName=r;let f=e+"CollectionSlot",p=n.forwardRef((e,r)=>{let{scope:t,children:n}=e,o=u(f,t),s=(0,l.e)(r,o.collectionRef);return(0,a.jsx)(i.g7,{ref:s,children:n})});p.displayName=f;let b=e+"CollectionItemSlot",m="data-radix-collection-item",g=n.forwardRef((e,r)=>{let{scope:t,children:o,...s}=e,c=n.useRef(null),d=(0,l.e)(r,c),f=u(b,t);return n.useEffect(()=>(f.itemMap.set(c,{ref:c,...s}),()=>void f.itemMap.delete(c))),(0,a.jsx)(i.g7,{[m]:"",ref:d,children:o})});return g.displayName=b,[{Provider:d,Slot:p,ItemSlot:g},function(r){let t=u(e+"CollectionConsumer",r);return n.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},s]}},1584:function(e,r,t){t.d(r,{F:function(){return o},e:function(){return l}});var n=t(2265);function o(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return n.useCallback(o(...e),e)}},8324:function(e,r,t){t.d(r,{b:function(){return l}});var n=t(2265),o=t(7437);function l(e,r=[]){let t=[],l=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return l.scopeName=e,[function(r,l){let i=n.createContext(l),a=t.length;function s(r){let{scope:t,children:l,...s}=r,c=t?.[e][a]||i,u=n.useMemo(()=>s,Object.values(s));return(0,o.jsx)(c.Provider,{value:u,children:l})}return t=[...t,l],s.displayName=r+"Provider",[s,function(t,o){let s=o?.[e][a]||i,c=n.useContext(s);if(c)return c;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e)[`__scope${n}`];return{...r,...o}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(l,...r)]}},7513:function(e,r,t){t.d(r,{gm:function(){return l}});var n=t(2265);t(7437);var o=n.createContext(void 0);function l(e){let r=n.useContext(o);return e||r||"ltr"}},3201:function(e,r,t){t.d(r,{M:function(){return s}});var n,o=t(2265),l=t(1336),i=(n||(n=t.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function s(e){let[r,t]=o.useState(i());return(0,l.b)(()=>{e||t(e=>e??String(a++))},[e]),e||(r?`radix-${r}`:"")}},1383:function(e,r,t){t.d(r,{z:function(){return a}});var n=t(2265),o=t(4887),l=t(1584),i=t(1336),a=e=>{var r,t;let a,c;let{present:u,children:d}=e,f=function(e){var r,t;let[l,a]=n.useState(),c=n.useRef({}),u=n.useRef(e),d=n.useRef("none"),[f,p]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,r)=>{let n=t[e][r];return null!=n?n:e},r));return n.useEffect(()=>{let e=s(c.current);d.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let r=c.current,t=u.current;if(t!==e){let n=d.current,o=s(r);e?p("MOUNT"):"none"===o||(null==r?void 0:r.display)==="none"?p("UNMOUNT"):t&&n!==o?p("ANIMATION_OUT"):p("UNMOUNT"),u.current=e}},[e,p]),(0,i.b)(()=>{if(l){let e=e=>{let r=s(c.current).includes(e.animationName);e.target===l&&r&&o.flushSync(()=>p("ANIMATION_END"))},r=e=>{e.target===l&&(d.current=s(c.current))};return l.addEventListener("animationstart",r),l.addEventListener("animationcancel",e),l.addEventListener("animationend",e),()=>{l.removeEventListener("animationstart",r),l.removeEventListener("animationcancel",e),l.removeEventListener("animationend",e)}}p("ANIMATION_END")},[l,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:n.useCallback(e=>{e&&(c.current=getComputedStyle(e)),a(e)},[])}}(u),p="function"==typeof d?d({present:f.isPresent}):n.Children.only(d),b=(0,l.e)(f.ref,(a=null===(r=Object.getOwnPropertyDescriptor(p.props,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in a&&a.isReactWarning?p.ref:(a=null===(t=Object.getOwnPropertyDescriptor(p,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in a&&a.isReactWarning?p.props.ref:p.props.ref||p.ref);return"function"==typeof d||f.isPresent?n.cloneElement(p,{ref:b}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},5171:function(e,r,t){t.d(r,{WV:function(){return a},jH:function(){return s}});var n=t(2265),o=t(4887),l=t(1538),i=t(7437),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=n.forwardRef((e,t)=>{let{asChild:n,...o}=e,a=n?l.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(a,{...o,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function s(e,r){e&&o.flushSync(()=>e.dispatchEvent(r))}},1538:function(e,r,t){t.d(r,{g7:function(){return i}});var n=t(2265),o=t(1584),l=t(7437),i=n.forwardRef((e,r)=>{let{children:t,...o}=e,i=n.Children.toArray(t),s=i.find(c);if(s){let e=s.props.children,t=i.map(r=>r!==s?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(a,{...o,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,l.jsx)(a,{...o,ref:r,children:t})});i.displayName="Slot";var a=n.forwardRef((e,r)=>{let{children:t,...l}=e;if(n.isValidElement(t)){let e,i;let a=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n];/^on[A-Z]/.test(n)?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,o.F)(r,a):a})}return n.Children.count(t)>1?n.Children.only(null):null});a.displayName="SlotClone";var s=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===s}},5137:function(e,r,t){t.d(r,{W:function(){return o}});var n=t(2265);function o(e){let r=n.useRef(e);return n.useEffect(()=>{r.current=e}),n.useMemo(()=>(...e)=>r.current?.(...e),[])}},1715:function(e,r,t){t.d(r,{T:function(){return l}});var n=t(2265),o=t(5137);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,i]=function({defaultProp:e,onChange:r}){let t=n.useState(e),[l]=t,i=n.useRef(l),a=(0,o.W)(r);return n.useEffect(()=>{i.current!==l&&(a(l),i.current=l)},[l,i,a]),t}({defaultProp:r,onChange:t}),a=void 0!==e,s=a?e:l,c=(0,o.W)(t);return[s,n.useCallback(r=>{if(a){let t="function"==typeof r?r(e):r;t!==e&&c(t)}else i(r)},[a,e,i,c])]}},1336:function(e,r,t){t.d(r,{b:function(){return o}});var n=t(2265),o=globalThis?.document?n.useLayoutEffect:()=>{}},2218:function(e,r,t){t.d(r,{j:function(){return l}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n);else for(t in r)r[t]&&(o&&(o+=" "),o+=t)}return o}(e))&&(n&&(n+=" "),n+=r);return n},l=(e,r)=>t=>{var l;if((null==r?void 0:r.variants)==null)return o(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:a}=r,s=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],o=null==a?void 0:a[e];if(null===r)return null;let l=n(r)||n(o);return i[e][l]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return o(e,s,null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:t,className:n,...o}=r;return Object.entries(o).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...c}[r]):({...a,...c})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},4839:function(e,r,t){t.d(r,{W:function(){return n}});function n(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n)}else for(n in r)r[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=r);return n}},6164:function(e,r,t){t.d(r,{m6:function(){return _}});let n=/^\[(.+)\]$/;function o(e,r){let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}let l=/\s+/;function i(){let e,r,t=0,n="";for(;t<arguments.length;)(e=arguments[t++])&&(r=function e(r){let t;if("string"==typeof r)return r;let n="";for(let o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t);return n}(e))&&(n&&(n+=" "),n+=r);return n}function a(e){let r=r=>r[e]||[];return r.isThemeGetter=!0,r}let s=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,b=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,m=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function g(e){return v(e)||u.has(e)||c.test(e)}function h(e){return S(e,"length",P)}function v(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return S(e,"number",v)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&v(e.slice(0,-1))}function k(e){return s.test(e)}function N(e){return d.test(e)}let j=new Set(["length","size","percentage"]);function C(e){return S(e,j,A)}function z(e){return S(e,"position",A)}let E=new Set(["image","url"]);function O(e){return S(e,E,T)}function R(e){return S(e,"",I)}function M(){return!0}function S(e,r,t){let n=s.exec(e);return!!n&&(n[1]?"string"==typeof r?n[1]===r:r.has(n[1]):t(n[2]))}function P(e){return f.test(e)&&!p.test(e)}function A(){return!1}function I(e){return b.test(e)}function T(e){return m.test(e)}let _=function(e,...r){let t,a,s;let c=function(l){var i;return a=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,n=new Map;function o(o,l){t.set(o,l),++r>e&&(r=0,n=t,t=new Map)}return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=n.get(e))?(o(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):o(e,r)}}}((i=r.reduce((e,r)=>r(e),e())).cacheSize),splitModifiers:function(e){let r=e.separator,t=1===r.length,n=r[0],o=r.length;return function(e){let l;let i=[],a=0,s=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===a){if(u===n&&(t||e.slice(c,c+o)===r)){i.push(e.slice(s,c)),s=c+o;continue}if("/"===u){l=c;continue}}"["===u?a++:"]"===u&&a--}let c=0===i.length?e:e.substring(s),u=c.startsWith("!"),d=u?c.substring(1):c;return{modifiers:i,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:l&&l>s?l-s:void 0}}}(i),...function(e){let r=function(e){var r;let{theme:t,prefix:n}=e,l={nextPart:new Map,validators:[]};return(r=Object.entries(e.classGroups),n?r.map(([e,r])=>[e,r.map(e=>"string"==typeof e?n+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[n+e,r])):e)]):r).forEach(([e,r])=>{(function e(r,t,n,l){r.forEach(r=>{if("string"==typeof r){(""===r?t:o(t,r)).classGroupId=n;return}if("function"==typeof r){if(r.isThemeGetter){e(r(l),t,n,l);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([r,i])=>{e(i,o(t,r),n,l)})})})(r,l,e,t)}),l}(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:function(e){let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(r,t){if(0===r.length)return t.classGroupId;let n=r[0],o=t.nextPart.get(n),l=o?e(r.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let i=r.join("-");return t.validators.find(({validator:e})=>e(i))?.classGroupId}(t,r)||function(e){if(n.test(e)){let r=n.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){let n=t[e]||[];return r&&l[e]?[...n,...l[e]]:n}}}(i)}).cache.get,s=t.cache.set,c=u,u(l)};function u(e){let r=a(e);if(r)return r;let n=function(e,r){let{splitModifiers:t,getClassGroupId:n,getConflictingClassGroupIds:o}=r,i=new Set;return e.trim().split(l).map(e=>{let{modifiers:r,hasImportantModifier:o,baseClassName:l,maybePostfixModifierPosition:i}=t(e),a=n(i?l.substring(0,i):l),s=!!i;if(!a){if(!i||!(a=n(l)))return{isTailwindClass:!1,originalClassName:e};s=!1}let c=(function(e){if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r})(r).join(":");return{isTailwindClass:!0,modifierId:o?c+"!":c,classGroupId:a,originalClassName:e,hasPostfixModifier:s}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:r,classGroupId:t,hasPostfixModifier:n}=e,l=r+t;return!i.has(l)&&(i.add(l),o(t,n).forEach(e=>i.add(r+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return s(e,n),n}return function(){return c(i.apply(null,arguments))}}(function(){let e=a("colors"),r=a("spacing"),t=a("blur"),n=a("brightness"),o=a("borderColor"),l=a("borderRadius"),i=a("borderSpacing"),s=a("borderWidth"),c=a("contrast"),u=a("grayscale"),d=a("hueRotate"),f=a("invert"),p=a("gap"),b=a("gradientColorStops"),m=a("gradientColorStopPositions"),j=a("inset"),E=a("margin"),S=a("opacity"),P=a("padding"),A=a("saturate"),I=a("scale"),T=a("sepia"),_=a("skew"),W=a("space"),$=a("translate"),G=()=>["auto","contain","none"],U=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",k,r],D=()=>[k,r],V=()=>["",g,h],Z=()=>["auto",v,k],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],F=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",k],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[v,y],X=()=>[v,k];return{cacheSize:500,separator:":",theme:{colors:[M],spacing:[g,h],blur:["none","",N,k],brightness:Q(),borderColor:[e],borderRadius:["none","","full",N,k],borderSpacing:D(),borderWidth:V(),contrast:Q(),grayscale:J(),hueRotate:X(),invert:J(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[x,h],inset:L(),margin:L(),opacity:Q(),padding:D(),saturate:Q(),scale:Q(),sepia:J(),skew:X(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),k]}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:G()}],"overscroll-x":[{"overscroll-x":G()}],"overscroll-y":[{"overscroll-y":G()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[j]}],"inset-x":[{"inset-x":[j]}],"inset-y":[{"inset-y":[j]}],start:[{start:[j]}],end:[{end:[j]}],top:[{top:[j]}],right:[{right:[j]}],bottom:[{bottom:[j]}],left:[{left:[j]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,k]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",w,k]}],"grid-cols":[{"grid-cols":[M]}],"col-start-end":[{col:["auto",{span:["full",w,k]},k]}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":[M]}],"row-start-end":[{row:["auto",{span:[w,k]},k]}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[P]}],px:[{px:[P]}],py:[{py:[P]}],ps:[{ps:[P]}],pe:[{pe:[P]}],pt:[{pt:[P]}],pr:[{pr:[P]}],pb:[{pb:[P]}],pl:[{pl:[P]}],m:[{m:[E]}],mx:[{mx:[E]}],my:[{my:[E]}],ms:[{ms:[E]}],me:[{me:[E]}],mt:[{mt:[E]}],mr:[{mr:[E]}],mb:[{mb:[E]}],ml:[{ml:[E]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",k,r]}],"min-w":[{"min-w":[k,r,"min","max","fit"]}],"max-w":[{"max-w":[k,r,"none","full","min","max","fit","prose",{screen:[N]},N]}],h:[{h:[k,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[k,r,"auto","min","max","fit"]}],"font-size":[{text:["base",N,h]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[M]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",v,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,k]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",g,h]}],"underline-offset":[{"underline-offset":["auto",g,k]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),z]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",C]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},O]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:B()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[g,k]}],"outline-w":[{outline:[g,h]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[g,h]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,R]}],"shadow-color":[{shadow:[M]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...F(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":F()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",N,k]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[A]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[A]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[I]}],"scale-x":[{"scale-x":[I]}],"scale-y":[{"scale-y":[I]}],rotate:[{rotate:[w,k]}],"translate-x":[{"translate-x":[$]}],"translate-y":[{"translate-y":[$]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,h,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);