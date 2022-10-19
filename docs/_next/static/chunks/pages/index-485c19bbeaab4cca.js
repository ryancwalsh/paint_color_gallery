(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3880:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return es}});var n=t(7812),o=t(6835),c=t(6238),a=t(7294),l=t(1101),i=t(5768),s=t(9499),u=t(4730),d=t(5893),f=["children"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach(function(r){(0,s.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function g(e){var r=e.children,t=(0,u.Z)(e,f),n=(0,a.useState)(!1),o=n[0],c=n[1];return((0,a.useEffect)(function(){c(!0)},[]),o)?(0,d.jsx)("div",h(h({},t),{},{children:r})):null}function y(e){var r=e.megaColor,t=e.isSelectedColor,n=e.selectColor,o=r.colorDetailsObject,c=(0,a.useState)(!1),l=c[0],i=c[1];return(0,d.jsxs)("div",{style:{background:o.hsl()},"data-json":JSON.stringify(r),className:l?"fullscreen colorCell":"colorCell",onClick:function(){n(r.code)},children:[t&&(0,d.jsx)("div",{className:"toggleIsFullscreen",onClick:function(){i(!l)},style:{cursor:"pointer",float:"right"},children:"⤢"}),(0,d.jsx)("div",{className:"colorName",children:r.name}),(0,d.jsx)("div",{className:"book",style:{fontSize:"0.8rem"},children:r.book}),(0,d.jsx)("div",{className:"hsl",style:{fontSize:"0.7rem"},children:r.colorDetailsObject.hsl().color.map(function(e){return e.toFixed(1)}).join(", ")})]})}var m=t(29),b=t(7794),v=t.n(b),j=t(6767),x=t.n(j);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach(function(r){(0,s.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function C(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return N(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,r)}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,c=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw c}}}}function N(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}var k="https://raw.githubusercontent.com/ryancwalsh/paint_color_gallery/main/data/colornerd.json";function _(e){return x()(e)}function S(e){return e<360?e>=0?e:e+360:e-360}function P(e,r,t){return r<=t?e>=r&&e<=t:e>=0&&e<=t||e>=r&&e<360}function D(e,r,t){return e>=r-t&&e<=r+t}function M(e,r,t){return e>=r-t&&e<=r+t}function E(){return(E=(0,m.Z)(v().mark(function e(){var r,t;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k);case 2:return r=e.sent,e.next=5,r.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e,r){var t=r.find(function(r){return r.code===e}),n=t?w(w({},t),{},{colorDetailsObject:_(e)}):void 0;return console.log("getMegaColorFromName",{colorCode:e,result:n}),n}var T=function(e){var r=e.loadedMegaColors,t=e.setLoadedMegaColors,n=(0,a.useState)(!1),o=n[0],c=n[1];function l(){c(!o)}return((0,a.useEffect)(function(){return 0===r.length&&(function(){return E.apply(this,arguments)})().then(function(e){t(e)}),function(){}},[r,t]),o)?(0,d.jsxs)("div",{className:"colorLibraryFileChooser",children:["Load from"," ",(0,d.jsx)("a",{className:"jsonLink",href:k,target:"_blank",rel:"noreferrer",style:{display:"inline-block",maxWidth:"200px",overflow:"auto"},children:k}),(0,d.jsx)("input",{type:"file",name:"colorLibraryFileChooserInput",multiple:!1,onChange:function(e){var r=Array.from(e.currentTarget.files);console.log(r);var n=new FileReader;n.onload=function(e){var r,n=null==e?void 0:null===(r=e.target)||void 0===r?void 0:r.result;console.log(n),t(JSON.parse(n))},n.readAsText(r[0])}}),(0,d.jsx)("button",{onClick:function(){return l()},children:"Hide"})]}):(0,d.jsx)("button",{onClick:function(){return l()},children:"Load new color library..."})},Z=t(101),H=t(5903),B=2*Math.PI;function A(e){var r=e.width,t=void 0===r?0:r,n=t/2;return{cx:n,cy:n,radius:n,width:t}}function F(e){var r=e.width;return(void 0===r?0:r)/2}function R(e,r,t){var n,o,c,a=null!==(n=e.angle)&&void 0!==n?n:0,l=e.direction;return t&&"clockwise"===l?r=a+r:"clockwise"===l?r=360-a+r:t&&"anticlockwise"===l?r=a+180-r:"anticlockwise"===l&&(r=a-r),((o=r)%360+360)%360}function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach(function(r){(0,s.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var V=function(e){var r=e.className,t=e.color,n=e.left,o=e.top,c=e.style,l=e.prefixCls,i=I(I({},c),{},{left:n,position:"absolute",top:o});return(0,a.useMemo)(function(){return(0,d.jsx)("div",{className:"".concat(l,"-pointer ").concat(r||""),style:i,children:(0,d.jsx)("div",{className:"".concat(l,"-fill"),style:{backgroundColor:"#fff",borderRadius:"50%",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",height:10,transform:"translate(-5px, -5px)",width:10},children:(0,d.jsx)("div",{style:{backgroundColor:t,borderRadius:"50%",inset:0,position:"absolute"}})})})},[o,n,t,r,l])},q=["prefixCls","radius","pointer","className","style","width","height","direction","angle","color","onChange"];function z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function J(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?z(Object(t),!0).forEach(function(r){(0,s.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var U=a.forwardRef(function(e,r){var t,n,o,l,i,s,f,p,h,g=e.prefixCls,y=void 0===g?"w-color-wheel":g,m=(e.radius,e.pointer),b=e.className,v=e.style,j=e.width,x=void 0===j?200:j,O=e.height,w=void 0===O?200:O,C=e.direction,N=e.angle,k=e.color,_=e.onChange,S=(0,u.Z)(e,q),P="string"==typeof k&&(0,Z.Ff)(k)?(0,c.HW)(k):k||{},D=k?(0,c.A)(P):"",M=(t={width:x},l=(o=A(t)).cx,i=o.cy,s=F(t),f=(180+R(t,P.h,!0))*(B/360),p=P.s/100*s,{x:l+p*Math.cos(f)*(h="clockwise"===t.direction?-1:1),y:i+p*Math.sin(f)*h}),E=function(e,r){var t,n,o,a,l,i,s,u,d,f,p,h=(t={width:x},n=x-e.x,o=w-e.y,l=(a=A(t)).cx,i=a.cy,s=F(t),n=l-n,u=R(t,Math.atan2(-(o=i-o),-n)*(360/B)),p=Math.min((d=n,f=o,Math.sqrt(d*d+f*f)),s),{h:Math.round(u),s:Math.round(100/s*p)}),g={a:P.a,h:h.h,s:h.s,v:P.v};_&&_((0,c.$_)(g))};return(0,d.jsxs)(H.ZP,J(J({className:[y,b||""].filter(Boolean).join(" ")},S),{},{style:J(J({},v),{},{height:w,position:"relative",width:x}),ref:r,onMove:E,onDown:E,children:[a.createElement(m||V,J({prefixCls:y,style:{transform:"translate(".concat(M.x,"px, ").concat(M.y,"px)"),zIndex:1}},{color:D,left:"0",top:"0"})),(0,d.jsx)("div",{style:{background:"anticlockwise"===(void 0===C?"anticlockwise":C)?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",borderRadius:"50%",inset:0,position:"absolute",transform:"rotateZ(".concat((void 0===N?180:N)+90,"deg)")}}),(0,d.jsx)("div",{style:{background:"radial-gradient(circle closest-side, white, transparent)",borderRadius:"50%",inset:0,position:"absolute"}}),(0,d.jsx)("div",{style:{backgroundColor:"black",borderRadius:"50%",inset:0,opacity:"number"==typeof P.v?1-P.v/100:0,position:"absolute"}})]}))});function G(e){var r=e.colorCode,t=e.megaColorsFilteredByBookNames,n=e.selectColor,o=L(r,t);return(0,d.jsx)("div",{className:"historyColorCell","data-color-code":r,onClick:function(){n(r)},style:{backgroundColor:r,padding:"3px"},children:null==o?void 0:o.name})}function K(e){var r=e.colorHistory,t=e.megaColorsFilteredByBookNames,n=e.selectColor;return(0,d.jsx)("div",{className:"colorHistory",children:r.map(function(e,r){return(0,d.jsx)(G,{colorCode:e,megaColorsFilteredByBookNames:t,selectColor:n},"".concat(r,"_").concat(e))})})}U.displayName="Wheel";var X=t(9008),$=t.n(X),Q=t(66),Y=t.n(Q);function ee(e){var r=e.children;return(0,d.jsxs)("div",{className:Y().container,children:[(0,d.jsx)($(),{children:(0,d.jsx)("title",{children:"paint_color_gallery using colornerd"})}),(0,d.jsx)("main",{className:Y().main,children:r}),(0,d.jsx)("footer",{className:Y().footer})]})}var er=t(9681);function et(e){return console.log({bookNames:e}),e.map(function(e){return{label:e,value:e}})}function en(e){var r=e.selectedBookNames,t=e.setSelectedBookNames,n=e.loadedMegaColors,o=et(r);console.log({defaultValue:o});var c=et(Array.from(function(e){var r,t=new Set,n=C(e);try{for(n.s();!(r=n.n()).done;){var o=r.value;t.add(o.book)}}catch(c){n.e(c)}finally{n.f()}return t}(n)));return(0,d.jsx)(er.ZP,{options:c,onChange:function(e,r){var n;console.log({actionMeta:r,chosenOptions:e}),t((console.log({options:e}),e.map(function(e){return e.value})))},isMulti:!0,defaultValue:o})}function eo(e){var r=e.toleranceH,t=e.setToleranceH,n=e.toleranceS,o=e.setToleranceS,c=e.toleranceL,a=e.setToleranceL;return(0,d.jsxs)("div",{className:"sliders",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("div",{className:"label",children:"Hue:"}),(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("span",{className:"currentValue",children:[r,"%"]}),(0,d.jsx)("input",{type:"range",defaultValue:r,onChange:function(e){return t(Number(e.target.value))},min:"0",max:"50",step:"1"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("div",{className:"label",children:"Saturation:"}),(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("span",{className:"currentValue",children:[n,"%"]}),(0,d.jsx)("input",{type:"range",defaultValue:n,onChange:function(e){return o(Number(e.target.value))},min:"0",max:"50",step:"1"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("div",{className:"label",children:"Lightness:"}),(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("span",{className:"currentValue",children:[c,"%"]}),(0,d.jsx)("input",{type:"range",defaultValue:c,onChange:function(e){return a(Number(e.target.value))},min:"0",max:"50",step:"1"})]})]})]})}function ec(){return(0,d.jsx)("pre",{style:{maxWidth:"900px",overflow:"auto"},children:"TODO: \n      - figure out why history gets messed up\n      - figure out why color wheel doesn't always have white at the center\n      - make color wheel fade to black at edges\n      - re-enable hot-reloading\n    - add search\n    - add favorites\n    - allow clustering by book \n    - add 2 other styles of color picker, synched with the first \n    - add Google Analytics \n    - get a URL\n    "})}var ea=function(e){var r=e.maxWidth,t=(0,a.useState)([]),n=t[0],o=t[1],c=n.map(function(e,t){return(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{alt:"uploaded image",src:URL.createObjectURL(e),style:{maxWidth:r}}),(0,d.jsx)("br",{}),(0,d.jsx)("button",{onClick:function(){var e,r;return r=n.splice(t,1),void(console.log({index:t,removed:r,selectedFiles:n}),o(n))},children:"Remove"})]},e.name)});return(0,d.jsxs)("div",{className:"fileChooser",children:[(0,d.jsx)("input",{type:"file",name:"fileChooserInput",multiple:!0,onChange:function(e){var r=Array.from(e.currentTarget.files);console.log(r),o(r)}}),c]})},el=t(1673),ei=t.n(el),es=function(){var e=(0,i._)("selectedBookNames",[]),r=(0,o.Z)(e,2),t=r[0],s=r[1],u=(0,i._)("loadedMegaColors",[]),f=(0,o.Z)(u,2),p=f[0],h=f[1],m=(0,a.useState)([]),b=m[0],v=m[1],j=(0,i._)("targetColor","hsl(80deg 50% 70%)"),x=(0,o.Z)(j,2),O=x[0],N=x[1],k=(0,i._)("eyedropOnce",!1),E=(0,o.Z)(k,2),Z=E[0],H=E[1],B=(0,i._)("toleranceH",3),A=(0,o.Z)(B,2),F=A[0],R=A[1],W=(0,i._)("toleranceS",3),I=(0,o.Z)(W,2),V=I[0],q=I[1],z=(0,i._)("toleranceL",3),J=(0,o.Z)(z,2),G=J[0],X=J[1],$=(0,a.useState)([]),Q=$[0],Y=$[1],er=(0,a.useState)(null),et=er[0],el=er[1],es=(0,i._)("colorHistory",[]),eu=(0,o.Z)(es,2),ed=eu[0],ef=eu[1],ep=(0,i.Nr)(F,200),eh=(0,i.Nr)(V,200),eg=(0,i.Nr)(G,200),ey=(0,l.useEyeDrop)({once:Z}),em=(0,o.Z)(ey,3);function eb(e){var r=ed.length>0?ed[0]:null,t=L(O,b);N(e),t&&e!==r&&ef(function(r){var t=[e].concat((0,n.Z)(r));return console.log("setColorHistory",JSON.stringify(t)),t})}em[0],em[1],em[2];var ev=function(e){eb(e.hex)},ej=function(){H(!Z)};return(0,a.useEffect)(function(){var e,r;return v(p.filter(function(e){return 0===t.length||t.includes(e.book)})),function(){}},[p,t]),(0,a.useEffect)(function(){console.log({debouncedToleranceH:ep,debouncedToleranceL:eg,debouncedToleranceS:eh});var e=_(O);console.log({targetColorDetailsObject:e});var r,t,n,c,a,l=(r=e.hue(),n=S(r-(t=3.6*ep)),c=S(r+t),console.log({degreeTolerance:t,hueMax:c,hueMin:n}),[n,c]),i=(0,o.Z)(l,2),s=function(e,r,t,n,o,c){var a,l=[],i=new Set,s=C(r);try{for(s.s();!(a=s.n()).done;){var u=a.value,d=_(u.code);if(P(d.hue(),t,n)&&D(d.saturationl(),e.saturationl(),o)&&M(d.lightness(),e.lightness(),c)){var f=w(w({},u),{},{colorDetailsObject:d}),p="".concat(f.name,"-").concat(f.code);i.has(p)||(l.push(f),i.add(p))}}}catch(h){s.e(h)}finally{s.f()}return l}(e,b,i[0],i[1],eh,eg);return Y(s),function(){}},[O,b,ep,eh,eg]),(0,a.useEffect)(function(){var e=L(O,b);return console.log({foundTargetMegaColor:e}),el(null!=e?e:null),function(){}},[O,b]),(0,d.jsx)(g,{children:(0,d.jsxs)(ee,{children:[(0,d.jsx)("h1",{className:ei().title,children:"paint_color_gallery using colornerd"}),(0,d.jsx)(U,{color:(0,c.HW)(O),onChange:function(e){console.log(e.hsl),eb(e.hex)}}),(0,d.jsx)(T,{loadedMegaColors:p,setLoadedMegaColors:h}),(0,d.jsx)(en,{loadedMegaColors:p,selectedBookNames:t,setSelectedBookNames:s}),(0,d.jsx)(eo,{setToleranceH:R,setToleranceL:X,setToleranceS:q,toleranceH:F,toleranceL:G,toleranceS:V}),(0,d.jsx)(ea,{maxWidth:"600px"}),(0,d.jsxs)("div",{className:"eyedrop-wrapper",children:[(0,d.jsx)(l.EyeDropper,{once:Z,onChange:ev,children:"Pick Color"}),(0,d.jsxs)("p",{children:["Once: ",Z.toString()]}),(0,d.jsx)("button",{onClick:ej,children:"Toggle `once` prop"})]}),(0,d.jsx)(K,{colorHistory:ed,megaColorsFilteredByBookNames:b,selectColor:eb}),(0,d.jsxs)("div",{style:{backgroundColor:O,marginTop:"1rem",padding:"1rem"},children:[et&&(0,d.jsx)(y,{megaColor:et,isSelectedColor:!0,selectColor:eb},"".concat(et.book,"_").concat(et.code)),(0,d.jsx)("div",{className:"colors",children:Q.map(function(e){return(0,d.jsx)(y,{megaColor:e,selectColor:eb},"".concat(e.book,"_").concat(e.code))})}),(0,d.jsx)(ec,{})]})]})})}},8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3880)}])},1673:function(e){e.exports={title:"Home_title__q0Qg4",description:"Home_description__JhekB",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN"}},66:function(e){e.exports={container:"Layout_container__z4qWC",main:"Layout_main__fbfOy",footer:"Layout_footer__bKkxe",logo:"Layout_logo__PCGqy"}}},function(e){e.O(0,[443,755,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);