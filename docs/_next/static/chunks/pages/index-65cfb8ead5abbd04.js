(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6106:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return $}});var o=n(7812),t=n(6835),l=n(7294),a=n(1101),c=n(5768),s=n(9499),i=n(4730),u=n(5893),d=["children"];function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach(function(r){(0,s.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g(e){var r=e.children,n=(0,i.Z)(e,d),o=(0,l.useState)(!1),t=o[0],a=o[1];return((0,l.useEffect)(function(){a(!0)},[]),t)?(0,u.jsx)("div",h(h({},n),{},{children:r})):null}var p=n(29),m=n(7794),v=n.n(m),j=n(2645),y=n(6767),x=n.n(y);function b(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function C(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?b(Object(n),!0).forEach(function(r){(0,s.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function N(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return O(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,r)}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,t=function(){};return{s:t,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:t}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,l=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw l}}}}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,o=Array(r);n<r;n++)o[n]=e[n];return o}var k="https://raw.githubusercontent.com/ryancwalsh/paint_color_gallery/main/data/colornerd.json";function _(e){return x()(e)}function S(e){return e<360?e>=0?e:e+360:e-360}function w(e,r,n){return r<=n?e>=r&&e<=n:e>=0&&e<=n||e>=r&&e<360}function T(e,r,n){return e>=r-n&&e<=r+n}function L(e,r,n){return e>=r-n&&e<=r+n}function P(){return(P=(0,p.Z)(v().mark(function e(){var r,n;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k);case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(e,r){var n=r.find(function(r){return r.code===e}),o=n?C(C({},n),{},{colorDetailsObject:_(e)}):void 0;return console.log("getMegaColorFromName",{colorCode:e,result:o}),o}function E(e){var r,n=(0,j.Dp)(e),o=(0,t.Z)(n.oklchVal,3),l=o[0],a=o[1];return[l*=100,a*=100,o[2]].map(function(e){return e.toFixed(1)}).join(", ")}function Z(e){var r=e.megaColor,n=e.isSelectedColor,o=e.selectColor,t=r.colorDetailsObject,a=(0,l.useState)(!1),c=a[0],s=a[1];return(0,u.jsxs)("div",{style:{background:t.hsl()},"data-json":JSON.stringify(r),className:c?"fullscreen colorCell":"colorCell",onClick:function(){o(r.code)},children:[n&&(0,u.jsx)("div",{className:"toggleIsFullscreen",onClick:function(){s(!c)},style:{cursor:"pointer",float:"right"},children:"⤢"}),(0,u.jsx)("div",{className:"colorName",children:r.name}),(0,u.jsx)("div",{className:"book",style:{fontSize:"0.8rem"},children:r.book}),(0,u.jsx)("div",{className:"oklch",style:{fontSize:"0.7rem"},children:E(t.hsl().string())})]})}var H=function(e){var r=e.loadedMegaColors,n=e.setLoadedMegaColors,o=(0,l.useState)(!1),t=o[0],a=o[1];function c(){a(!t)}return((0,l.useEffect)(function(){return 0===r.length&&(function(){return P.apply(this,arguments)})().then(function(e){n(e)}),function(){}},[r,n]),t)?(0,u.jsxs)("div",{className:"colorLibraryFileChooser",children:["Load from"," ",(0,u.jsx)("a",{className:"jsonLink",href:k,target:"_blank",rel:"noreferrer",style:{display:"inline-block",maxWidth:"200px",overflow:"auto"},children:k}),(0,u.jsx)("input",{type:"file",name:"colorLibraryFileChooserInput",multiple:!1,onChange:function(e){var r=Array.from(e.currentTarget.files);console.log(r);var o=new FileReader;o.onload=function(e){var r,o=null==e?void 0:null===(r=e.target)||void 0===r?void 0:r.result;console.log(o),n(JSON.parse(o))},o.readAsText(r[0])}}),(0,u.jsx)("button",{onClick:function(){return c()},children:"Hide"})]}):(0,u.jsx)("button",{onClick:function(){return c()},children:"Load new color library..."})};function M(e){var r=e.colorCode,n=e.megaColorsFilteredByBookNames,o=e.selectColor,t=D(r,n);return(0,u.jsxs)("div",{className:"historyColorCell","data-color-code":r,onClick:function(){o(r)},style:{backgroundColor:r,padding:"3px"},children:[(0,u.jsx)("span",{className:"colorName",children:null==t?void 0:t.name}),(0,u.jsx)("span",{className:"oklch",style:{float:"right",fontSize:"0.7rem"},children:E(r)})]})}function B(e){var r=e.colorHistory,n=e.megaColorsFilteredByBookNames,o=e.selectColor;return(0,u.jsx)("div",{className:"colorHistory",children:r.map(function(e,r){return(0,u.jsx)(M,{colorCode:e,megaColorsFilteredByBookNames:n,selectColor:o},"".concat(r,"_").concat(e))})})}var A=n(9008),F=n.n(A),V=n(66),I=n.n(V);function R(e){var r=e.children,n=e.backgroundColor;return(0,u.jsxs)("div",{className:I().container,style:{backgroundColor:n},children:[(0,u.jsx)(F(),{children:(0,u.jsx)("title",{children:"paint_color_gallery using colornerd"})}),(0,u.jsx)("main",{className:I().main,children:r}),(0,u.jsx)("footer",{className:I().footer})]})}var W=n(8446);function U(e){return console.log({bookNames:e}),e.map(function(e){return{label:e,value:e}})}function z(e){var r=e.selectedBookNames,n=e.setSelectedBookNames,o=e.loadedMegaColors,t=U(r);console.log({defaultValue:t});var l=U(Array.from(function(e){var r,n=new Set,o=N(e);try{for(o.s();!(r=o.n()).done;){var t=r.value;n.add(t.book)}}catch(l){o.e(l)}finally{o.f()}return n}(o)));return(0,u.jsx)(W.ZP,{options:l,onChange:function(e,r){var o;console.log({actionMeta:r,chosenOptions:e}),n((console.log({options:e}),e.map(function(e){return e.value})))},isMulti:!0,defaultValue:t,placeholder:"Choose 1 or more brands (or leave blank for all)"})}function J(e){var r=e.toleranceH,n=e.setToleranceH,o=e.toleranceS,t=e.setToleranceS,l=e.toleranceL,a=e.setToleranceL;return(0,u.jsxs)("div",{className:"sliders",children:[(0,u.jsxs)("label",{children:[(0,u.jsx)("div",{className:"label",children:"Hue:"}),(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsxs)("span",{className:"currentValue",children:[r,"%"]}),(0,u.jsx)("input",{type:"range",defaultValue:r,onChange:function(e){return n(Number(e.target.value))},min:"0",max:"50",step:"1"})]})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("div",{className:"label",children:"Saturation:"}),(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsxs)("span",{className:"currentValue",children:[o,"%"]}),(0,u.jsx)("input",{type:"range",defaultValue:o,onChange:function(e){return t(Number(e.target.value))},min:"0",max:"50",step:"1"})]})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("div",{className:"label",children:"Lightness:"}),(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsxs)("span",{className:"currentValue",children:[l,"%"]}),(0,u.jsx)("input",{type:"range",defaultValue:l,onChange:function(e){return a(Number(e.target.value))},min:"0",max:"50",step:"1"})]})]})]})}function q(){return(0,u.jsx)("pre",{style:{maxWidth:"900px",overflow:"auto"},children:"TODO:\n    - OKLCH sliders\n    - re-enable hot-reloading\n    - read from URL\n    - add favorites\n    - figure out why history gets messed up\n    - add search\n    - allow clustering by book \n    - add 2 other styles of color picker, synched with the first \n    - add Google Analytics \n    - get a URL\n    "})}function G(e){try{return(0,j.Dp)(e),!0}catch(r){return!1}}function K(e){var r=e.targetColor,n=e.setTargetColor,o=(0,j.Dp)(r);return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:(0,u.jsx)("input",{value:o.hex,onChange:function(e){var r=e.currentTarget.value;G(r)&&n(r)}})}),(0,u.jsx)("div",{children:(0,u.jsx)("input",{value:o.oklch,onChange:function(e){var r=e.currentTarget.value;G(r)&&n((0,j.Dp)(r).hex)}})}),(0,u.jsx)("div",{children:(0,u.jsx)("input",{value:o.rgb,onChange:function(e){var r=e.currentTarget.value;G(r)&&n((0,j.Dp)(r).hex)}})})]})}var X=function(e){var r=e.maxWidth,n=(0,l.useState)([]),o=n[0],t=n[1],a=o.map(function(e,n){return(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{alt:"uploaded image",src:URL.createObjectURL(e),style:{maxWidth:r}}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{onClick:function(){var e,r;return r=o.splice(n,1),void(console.log({index:n,removed:r,selectedFiles:o}),t(o))},children:"Remove"})]},e.name)});return(0,u.jsxs)("div",{className:"fileChooser",children:[(0,u.jsx)("input",{type:"file",name:"fileChooserInput",multiple:!0,onChange:function(e){var r=Array.from(e.currentTarget.files);console.log(r),t(r)}}),a]})},$=function(){var e=(0,c._)("selectedBookNames",[]),r=(0,t.Z)(e,2),n=r[0],s=r[1],i=(0,c._)("loadedMegaColors",[]),d=(0,t.Z)(i,2),f=d[0],h=d[1],p=(0,l.useState)([]),m=p[0],v=p[1],j=(0,c._)("targetColor","hsl(80deg 50% 70%)"),y=(0,t.Z)(j,2),x=y[0],b=y[1],O=(0,c._)("eyedropOnce",!1),k=(0,t.Z)(O,2),P=k[0],E=k[1],M=(0,c._)("toleranceH",3),A=(0,t.Z)(M,2),F=A[0],V=A[1],I=(0,c._)("toleranceS",3),W=(0,t.Z)(I,2),U=W[0],G=W[1],$=(0,c._)("toleranceL",3),Q=(0,t.Z)($,2),Y=Q[0],ee=Q[1],er=(0,l.useState)([]),en=er[0],eo=er[1],et=(0,l.useState)(null),el=et[0],ea=et[1],ec=(0,c._)("colorHistory",[]),es=(0,t.Z)(ec,2),ei=es[0],eu=es[1],ed=(0,c.Nr)(F,200),ef=(0,c.Nr)(U,200),eh=(0,c.Nr)(Y,200),eg=(0,a.useEyeDrop)({once:P}),ep=(0,t.Z)(eg,3);function em(e){var r=ei.length>0?ei[0]:null,n=D(x,m);b(e),n&&e!==r&&eu(function(r){var n=[e].concat((0,o.Z)(r));return console.log("setColorHistory",JSON.stringify(n)),n})}ep[0],ep[1],ep[2];var ev=function(e){em(e.hex)},ej=function(){E(!P)};return(0,l.useEffect)(function(){var e,r;return v(f.filter(function(e){return 0===n.length||n.includes(e.book)})),function(){}},[f,n]),(0,l.useEffect)(function(){console.log({debouncedToleranceH:ed,debouncedToleranceL:eh,debouncedToleranceS:ef});var e=_(x);console.log({targetColorDetailsObject:e});var r,n,o,l,a,c=(r=e.hue(),o=S(r-(n=3.6*ed)),l=S(r+n),console.log({degreeTolerance:n,hueMax:l,hueMin:o}),[o,l]),s=(0,t.Z)(c,2),i=function(e,r,n,o,t,l){var a,c=[],s=new Set,i=N(r);try{for(i.s();!(a=i.n()).done;){var u=a.value,d=_(u.code);if(w(d.hue(),n,o)&&T(d.saturationl(),e.saturationl(),t)&&L(d.lightness(),e.lightness(),l)){var f=C(C({},u),{},{colorDetailsObject:d}),h="".concat(f.name,"-").concat(f.code);s.has(h)||(c.push(f),s.add(h))}}}catch(g){i.e(g)}finally{i.f()}return c}(e,m,s[0],s[1],ef,eh);return eo(i),function(){}},[x,m,ed,ef,eh]),(0,l.useEffect)(function(){var e=D(x,m);return console.log({foundTargetMegaColor:e}),ea(null!=e?e:null),function(){}},[x,m]),(0,u.jsx)(g,{children:(0,u.jsxs)(R,{backgroundColor:x,children:[(0,u.jsx)(K,{setTargetColor:b,targetColor:x}),(0,u.jsx)(J,{setToleranceH:V,setToleranceL:ee,setToleranceS:G,toleranceH:F,toleranceL:Y,toleranceS:U}),(0,u.jsx)(B,{colorHistory:ei,megaColorsFilteredByBookNames:m,selectColor:em}),(0,u.jsxs)("div",{style:{marginTop:"1rem",padding:"1rem"},children:[el&&(0,u.jsx)(Z,{megaColor:el,isSelectedColor:!0,selectColor:em},"".concat(el.book,"_").concat(el.code)),(0,u.jsx)("div",{className:"colors",children:en.map(function(e){return(0,u.jsx)(Z,{megaColor:e,selectColor:em},"".concat(e.book,"_").concat(e.code))})})]}),(0,u.jsx)(q,{}),(0,u.jsx)(X,{maxWidth:"600px"}),(0,u.jsxs)("div",{className:"eyedrop-wrapper",children:[(0,u.jsx)(a.EyeDropper,{once:P,onChange:ev,children:"Pick Color"}),(0,u.jsxs)("p",{children:["Once: ",P.toString()]}),(0,u.jsx)("button",{onClick:ej,children:"Toggle `once` prop"})]}),(0,u.jsx)(H,{loadedMegaColors:f,setLoadedMegaColors:h}),(0,u.jsx)(z,{loadedMegaColors:f,selectedBookNames:n,setSelectedBookNames:s})]})})}},8312:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6106)}])},66:function(e){e.exports={container:"Layout_container__z4qWC",main:"Layout_main__fbfOy",footer:"Layout_footer__bKkxe",logo:"Layout_logo__PCGqy"}}},function(e){e.O(0,[443,157,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);