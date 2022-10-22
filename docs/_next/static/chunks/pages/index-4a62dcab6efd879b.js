(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6106:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return $}});var o=n(7812),t=n(6835),l=n(7294),a=n(1101),c=n(5768),s=n(9499),i=n(4730),u=n(5893),d=["children"];function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach(function(r){(0,s.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g(e){var r=e.children,n=(0,i.Z)(e,d),o=(0,l.useState)(!1),t=o[0],a=o[1];return((0,l.useEffect)(function(){a(!0)},[]),t)?(0,u.jsx)("div",h(h({},n),{},{children:r})):null}var p=n(2645);function m(e){var r=e.megaColor,n=e.isSelectedColor,o=e.selectColor,a=r.colorDetailsObject,c=(0,p.Dp)(a.hsl().string()),s=(0,t.Z)(c.oklchVal,3),i=s[0],d=s[1],f=s[2],h=(0,l.useState)(!1),g=h[0],m=h[1];return(0,u.jsxs)("div",{style:{background:a.hsl()},"data-json":JSON.stringify(r),className:g?"fullscreen colorCell":"colorCell",onClick:function(){o(r.code)},children:[n&&(0,u.jsx)("div",{className:"toggleIsFullscreen",onClick:function(){m(!g)},style:{cursor:"pointer",float:"right"},children:"⤢"}),(0,u.jsx)("div",{className:"colorName",children:r.name}),(0,u.jsx)("div",{className:"book",style:{fontSize:"0.8rem"},children:r.book}),(0,u.jsx)("div",{className:"oklch",style:{fontSize:"0.7rem"},children:[i,d,f].map(function(e){return e.toFixed(1)}).join(", ")})]})}var v=n(29),j=n(7794),x=n.n(j),y=n(6767),b=n.n(y);function C(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function _(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?C(Object(n),!0).forEach(function(r){(0,s.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function N(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return O(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,r)}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,t=function(){};return{s:t,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:t}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,l=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw l}}}}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,o=Array(r);n<r;n++)o[n]=e[n];return o}var k="https://raw.githubusercontent.com/ryancwalsh/paint_color_gallery/main/data/colornerd.json";function w(e){return b()(e)}function S(e){return e<360?e>=0?e:e+360:e-360}function T(e,r,n){return r<=n?e>=r&&e<=n:e>=0&&e<=n||e>=r&&e<360}function L(e,r,n){return e>=r-n&&e<=r+n}function D(e,r,n){return e>=r-n&&e<=r+n}function P(){return(P=(0,v.Z)(x().mark(function e(){var r,n;return x().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k);case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function H(e,r){var n=r.find(function(r){return r.code===e}),o=n?_(_({},n),{},{colorDetailsObject:w(e)}):void 0;return console.log("getMegaColorFromName",{colorCode:e,result:o}),o}var E=function(e){var r=e.loadedMegaColors,n=e.setLoadedMegaColors,o=(0,l.useState)(!1),t=o[0],a=o[1];function c(){a(!t)}return((0,l.useEffect)(function(){return 0===r.length&&(function(){return P.apply(this,arguments)})().then(function(e){n(e)}),function(){}},[r,n]),t)?(0,u.jsxs)("div",{className:"colorLibraryFileChooser",children:["Load from"," ",(0,u.jsx)("a",{className:"jsonLink",href:k,target:"_blank",rel:"noreferrer",style:{display:"inline-block",maxWidth:"200px",overflow:"auto"},children:k}),(0,u.jsx)("input",{type:"file",name:"colorLibraryFileChooserInput",multiple:!1,onChange:function(e){var r=Array.from(e.currentTarget.files);console.log(r);var o=new FileReader;o.onload=function(e){var r,o=null==e?void 0:null===(r=e.target)||void 0===r?void 0:r.result;console.log(o),n(JSON.parse(o))},o.readAsText(r[0])}}),(0,u.jsx)("button",{onClick:function(){return c()},children:"Hide"})]}):(0,u.jsx)("button",{onClick:function(){return c()},children:"Load new color library..."})};function Z(e){var r=e.colorCode,n=e.megaColorsFilteredByBookNames,o=e.selectColor,t=H(r,n);return(0,u.jsx)("div",{className:"historyColorCell","data-color-code":r,onClick:function(){o(r)},style:{backgroundColor:r,padding:"3px"},children:null==t?void 0:t.name})}function B(e){var r=e.colorHistory,n=e.megaColorsFilteredByBookNames,o=e.selectColor;return(0,u.jsx)("div",{className:"colorHistory",children:r.map(function(e,r){return(0,u.jsx)(Z,{colorCode:e,megaColorsFilteredByBookNames:n,selectColor:o},"".concat(r,"_").concat(e))})})}var M=n(9008),A=n.n(M),F=n(66),V=n.n(F);function I(e){var r=e.children;return(0,u.jsxs)("div",{className:V().container,children:[(0,u.jsx)(A(),{children:(0,u.jsx)("title",{children:"paint_color_gallery using colornerd"})}),(0,u.jsx)("main",{className:V().main,children:r}),(0,u.jsx)("footer",{className:V().footer})]})}var W=n(8446);function R(e){return console.log({bookNames:e}),e.map(function(e){return{label:e,value:e}})}function J(e){var r=e.selectedBookNames,n=e.setSelectedBookNames,o=e.loadedMegaColors,t=R(r);console.log({defaultValue:t});var l=R(Array.from(function(e){var r,n=new Set,o=N(e);try{for(o.s();!(r=o.n()).done;){var t=r.value;n.add(t.book)}}catch(l){o.e(l)}finally{o.f()}return n}(o)));return(0,u.jsx)(W.ZP,{options:l,onChange:function(e,r){var o;console.log({actionMeta:r,chosenOptions:e}),n((console.log({options:e}),e.map(function(e){return e.value})))},isMulti:!0,defaultValue:t})}function U(e){var r=e.toleranceH,n=e.setToleranceH,o=e.toleranceS,t=e.setToleranceS,l=e.toleranceL,a=e.setToleranceL;return(0,u.jsxs)("div",{className:"sliders",children:[(0,u.jsxs)("label",{children:[(0,u.jsx)("div",{className:"label",children:"Hue:"}),(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsxs)("span",{className:"currentValue",children:[r,"%"]}),(0,u.jsx)("input",{type:"range",defaultValue:r,onChange:function(e){return n(Number(e.target.value))},min:"0",max:"50",step:"1"})]})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("div",{className:"label",children:"Saturation:"}),(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsxs)("span",{className:"currentValue",children:[o,"%"]}),(0,u.jsx)("input",{type:"range",defaultValue:o,onChange:function(e){return t(Number(e.target.value))},min:"0",max:"50",step:"1"})]})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("div",{className:"label",children:"Lightness:"}),(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsxs)("span",{className:"currentValue",children:[l,"%"]}),(0,u.jsx)("input",{type:"range",defaultValue:l,onChange:function(e){return a(Number(e.target.value))},min:"0",max:"50",step:"1"})]})]})]})}function q(){return(0,u.jsx)("pre",{style:{maxWidth:"900px",overflow:"auto"},children:"TODO: \n      - figure out why history gets messed up\n      - OKLCH sliders\n      - re-enable hot-reloading\n    - add search\n    - add favorites\n    - allow clustering by book \n    - add 2 other styles of color picker, synched with the first \n    - add Google Analytics \n    - get a URL\n    "})}function z(e){try{return(0,p.Dp)(e),!0}catch(r){return!1}}function K(e){var r=e.targetColor,n=e.setTargetColor,o=(0,p.Dp)(r);return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:(0,u.jsx)("input",{value:o.hex,onChange:function(e){var r=e.currentTarget.value;z(r)&&n(r)}})}),(0,u.jsx)("div",{children:(0,u.jsx)("input",{value:o.oklch,onChange:function(e){var r=e.currentTarget.value;z(r)&&n((0,p.Dp)(r).hex)}})}),(0,u.jsx)("div",{children:(0,u.jsx)("input",{value:o.rgb,onChange:function(e){var r=e.currentTarget.value;z(r)&&n((0,p.Dp)(r).hex)}})})]})}var G=function(e){var r=e.maxWidth,n=(0,l.useState)([]),o=n[0],t=n[1],a=o.map(function(e,n){return(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{alt:"uploaded image",src:URL.createObjectURL(e),style:{maxWidth:r}}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{onClick:function(){var e,r;return r=o.splice(n,1),void(console.log({index:n,removed:r,selectedFiles:o}),t(o))},children:"Remove"})]},e.name)});return(0,u.jsxs)("div",{className:"fileChooser",children:[(0,u.jsx)("input",{type:"file",name:"fileChooserInput",multiple:!0,onChange:function(e){var r=Array.from(e.currentTarget.files);console.log(r),t(r)}}),a]})},X=n(1673),Q=n.n(X),$=function(){var e=(0,c._)("selectedBookNames",[]),r=(0,t.Z)(e,2),n=r[0],s=r[1],i=(0,c._)("loadedMegaColors",[]),d=(0,t.Z)(i,2),f=d[0],h=d[1],p=(0,l.useState)([]),v=p[0],j=p[1],x=(0,c._)("targetColor","hsl(80deg 50% 70%)"),y=(0,t.Z)(x,2),b=y[0],C=y[1],O=(0,c._)("eyedropOnce",!1),k=(0,t.Z)(O,2),P=k[0],Z=k[1],M=(0,c._)("toleranceH",3),A=(0,t.Z)(M,2),F=A[0],V=A[1],W=(0,c._)("toleranceS",3),R=(0,t.Z)(W,2),z=R[0],X=R[1],$=(0,c._)("toleranceL",3),Y=(0,t.Z)($,2),ee=Y[0],er=Y[1],en=(0,l.useState)([]),eo=en[0],et=en[1],el=(0,l.useState)(null),ea=el[0],ec=el[1],es=(0,c._)("colorHistory",[]),ei=(0,t.Z)(es,2),eu=ei[0],ed=ei[1],ef=(0,c.Nr)(F,200),eh=(0,c.Nr)(z,200),eg=(0,c.Nr)(ee,200),ep=(0,a.useEyeDrop)({once:P}),em=(0,t.Z)(ep,3);function ev(e){var r=eu.length>0?eu[0]:null,n=H(b,v);C(e),n&&e!==r&&ed(function(r){var n=[e].concat((0,o.Z)(r));return console.log("setColorHistory",JSON.stringify(n)),n})}em[0],em[1],em[2];var ej=function(e){ev(e.hex)},ex=function(){Z(!P)};return(0,l.useEffect)(function(){var e,r;return j(f.filter(function(e){return 0===n.length||n.includes(e.book)})),function(){}},[f,n]),(0,l.useEffect)(function(){console.log({debouncedToleranceH:ef,debouncedToleranceL:eg,debouncedToleranceS:eh});var e=w(b);console.log({targetColorDetailsObject:e});var r,n,o,l,a,c=(r=e.hue(),o=S(r-(n=3.6*ef)),l=S(r+n),console.log({degreeTolerance:n,hueMax:l,hueMin:o}),[o,l]),s=(0,t.Z)(c,2),i=function(e,r,n,o,t,l){var a,c=[],s=new Set,i=N(r);try{for(i.s();!(a=i.n()).done;){var u=a.value,d=w(u.code);if(T(d.hue(),n,o)&&L(d.saturationl(),e.saturationl(),t)&&D(d.lightness(),e.lightness(),l)){var f=_(_({},u),{},{colorDetailsObject:d}),h="".concat(f.name,"-").concat(f.code);s.has(h)||(c.push(f),s.add(h))}}}catch(g){i.e(g)}finally{i.f()}return c}(e,v,s[0],s[1],eh,eg);return et(i),function(){}},[b,v,ef,eh,eg]),(0,l.useEffect)(function(){var e=H(b,v);return console.log({foundTargetMegaColor:e}),ec(null!=e?e:null),function(){}},[b,v]),(0,u.jsx)(g,{children:(0,u.jsxs)(I,{children:[(0,u.jsx)("h1",{className:Q().title,children:"paint_color_gallery using colornerd"}),(0,u.jsx)(E,{loadedMegaColors:f,setLoadedMegaColors:h}),(0,u.jsx)(J,{loadedMegaColors:f,selectedBookNames:n,setSelectedBookNames:s}),(0,u.jsx)(K,{setTargetColor:C,targetColor:b}),(0,u.jsx)(U,{setToleranceH:V,setToleranceL:er,setToleranceS:X,toleranceH:F,toleranceL:ee,toleranceS:z}),(0,u.jsx)(G,{maxWidth:"600px"}),(0,u.jsxs)("div",{className:"eyedrop-wrapper",children:[(0,u.jsx)(a.EyeDropper,{once:P,onChange:ej,children:"Pick Color"}),(0,u.jsxs)("p",{children:["Once: ",P.toString()]}),(0,u.jsx)("button",{onClick:ex,children:"Toggle `once` prop"})]}),(0,u.jsx)(B,{colorHistory:eu,megaColorsFilteredByBookNames:v,selectColor:ev}),(0,u.jsxs)("div",{style:{backgroundColor:b,marginTop:"1rem",padding:"1rem"},children:[ea&&(0,u.jsx)(m,{megaColor:ea,isSelectedColor:!0,selectColor:ev},"".concat(ea.book,"_").concat(ea.code)),(0,u.jsx)("div",{className:"colors",children:eo.map(function(e){return(0,u.jsx)(m,{megaColor:e,selectColor:ev},"".concat(e.book,"_").concat(e.code))})}),(0,u.jsx)(q,{})]})]})})}},8312:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6106)}])},1673:function(e){e.exports={title:"Home_title__q0Qg4",description:"Home_description__JhekB",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN"}},66:function(e){e.exports={container:"Layout_container__z4qWC",main:"Layout_main__fbfOy",footer:"Layout_footer__bKkxe",logo:"Layout_logo__PCGqy"}}},function(e){e.O(0,[443,157,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);