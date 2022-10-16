(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{8168:function(e,t,r){let n=r(8874),o={};for(let a of Object.keys(n))o[n[a]]=a;let l={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(let i of(e.exports=l,Object.keys(l))){if(!("channels"in l[i]))throw Error("missing channels property: "+i);if(!("labels"in l[i]))throw Error("missing channel labels property: "+i);if(l[i].labels.length!==l[i].channels)throw Error("channel and label counts mismatch: "+i);let{channels:u,labels:s}=l[i];delete l[i].channels,delete l[i].labels,Object.defineProperty(l[i],"channels",{value:u}),Object.defineProperty(l[i],"labels",{value:s})}function c(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}l.rgb.hsl=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,o=Math.min(t,r,n),a=Math.max(t,r,n),l=a-o,i;a===o?i=0:t===a?i=(r-n)/l:r===a?i=2+(n-t)/l:n===a&&(i=4+(t-r)/l),(i=Math.min(60*i,360))<0&&(i+=360);let u=(o+a)/2;return[i,100*(a===o?0:u<=.5?l/(a+o):l/(2-a-o)),100*u]},l.rgb.hsv=function(e){let t,r,n,o,a,l=e[0]/255,i=e[1]/255,u=e[2]/255,s=Math.max(l,i,u),c=s-Math.min(l,i,u),h=function(e){return(s-e)/6/c+.5};return 0===c?(o=0,a=0):(a=c/s,t=h(l),r=h(i),n=h(u),l===s?o=n-r:i===s?o=1/3+t-n:u===s&&(o=2/3+r-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*s]},l.rgb.hwb=function(e){let t=e[0],r=e[1],n=e[2],o=l.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(r,n));return n=1-1/255*Math.max(t,Math.max(r,n)),[o,100*a,100*n]},l.rgb.cmyk=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,o=Math.min(1-t,1-r,1-n);return[100*((1-t-o)/(1-o)||0),100*((1-r-o)/(1-o)||0),100*((1-n-o)/(1-o)||0),100*o]},l.rgb.keyword=function(e){let t=o[e];if(t)return t;let r=1/0,a;for(let l of Object.keys(n)){let i=n[l],u=c(e,i);u<r&&(r=u,a=l)}return a},l.keyword.rgb=function(e){return n[e]},l.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;let o=.4124*t+.3576*r+.1805*n,a=.2126*t+.7152*r+.0722*n,l=.0193*t+.1192*r+.9505*n;return[100*o,100*a,100*l]},l.rgb.lab=function(e){let t=l.rgb.xyz(e),r=t[0],n=t[1],o=t[2];r/=95.047,n/=100,o/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;let a=116*n-16,i=500*(r-n),u=200*(n-o);return[a,i,u]},l.hsl.rgb=function(e){let t=e[0]/360,r=e[1]/100,n=e[2]/100,o,a,l;if(0===r)return[l=255*n,l,l];o=n<.5?n*(1+r):n+r-n*r;let i=2*n-o,u=[0,0,0];for(let s=0;s<3;s++)(a=t+-(1/3*(s-1)))<0&&a++,a>1&&a--,l=6*a<1?i+(o-i)*6*a:2*a<1?o:3*a<2?i+(o-i)*(2/3-a)*6:i,u[s]=255*l;return u},l.hsl.hsv=function(e){let t=e[0],r=e[1]/100,n=e[2]/100,o=r,a=Math.max(n,.01);return n*=2,r*=n<=1?n:2-n,o*=a<=1?a:2-a,[t,100*(0===n?2*o/(a+o):2*r/(n+r)),100*((n+r)/2)]},l.hsv.rgb=function(e){let t=e[0]/60,r=e[1]/100,n=e[2]/100,o=t-Math.floor(t),a=255*n*(1-r),l=255*n*(1-r*o),i=255*n*(1-r*(1-o));switch(n*=255,Math.floor(t)%6){case 0:return[n,i,a];case 1:return[l,n,a];case 2:return[a,n,i];case 3:return[a,l,n];case 4:return[i,a,n];case 5:return[n,a,l]}},l.hsv.hsl=function(e){let t=e[0],r=e[1]/100,n=e[2]/100,o=Math.max(n,.01),a,l;l=(2-r)*n;let i=(2-r)*o;return a=r*o,a/=i<=1?i:2-i,[t,100*(a=a||0),100*(l/=2)]},l.hwb.rgb=function(e){let t=e[0]/360,r=e[1]/100,n=e[2]/100,o=r+n,a;o>1&&(r/=o,n/=o);let l=Math.floor(6*t),i=1-n;a=6*t-l,(1&l)!=0&&(a=1-a);let u=r+a*(i-r),s,c,h;switch(l){default:case 6:case 0:s=i,c=u,h=r;break;case 1:s=u,c=i,h=r;break;case 2:s=r,c=i,h=u;break;case 3:s=r,c=u,h=i;break;case 4:s=u,c=r,h=i;break;case 5:s=i,c=r,h=u}return[255*s,255*c,255*h]},l.cmyk.rgb=function(e){let t=e[0]/100,r=e[1]/100,n=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]},l.xyz.rgb=function(e){let t=e[0]/100,r=e[1]/100,n=e[2]/100,o,a,l;return o=3.2406*t+-1.5372*r+-.4986*n,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,a=(a=-.9689*t+1.8758*r+.0415*n)>.0031308?1.055*a**(1/2.4)-.055:12.92*a,l=(l=.0557*t+-.204*r+1.057*n)>.0031308?1.055*l**(1/2.4)-.055:12.92*l,o=Math.min(Math.max(0,o),1),[255*o,255*(a=Math.min(Math.max(0,a),1)),255*(l=Math.min(Math.max(0,l),1))]},l.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;let o=116*r-16,a=500*(t-r),l=200*(r-n);return[o,a,l]},l.lab.xyz=function(e){let t=e[0],r=e[1],n=e[2],o,a,l;o=r/500+(a=(t+16)/116),l=a-n/200;let i=a**3,u=o**3,s=l**3;return a=i>.008856?i:(a-16/116)/7.787,o=u>.008856?u:(o-16/116)/7.787,l=s>.008856?s:(l-16/116)/7.787,[o*=95.047,a*=100,l*=108.883]},l.lab.lch=function(e){let t=e[0],r=e[1],n=e[2],o;return(o=360*Math.atan2(n,r)/2/Math.PI)<0&&(o+=360),[t,Math.sqrt(r*r+n*n),o]},l.lch.lab=function(e){let t=e[0],r=e[1],n=e[2],o=n/360*2*Math.PI;return[t,r*Math.cos(o),r*Math.sin(o)]},l.rgb.ansi16=function(e,t=null){let[r,n,o]=e,a=null===t?l.rgb.hsv(e)[2]:t;if(0===(a=Math.round(a/50)))return 30;let i=30+(Math.round(o/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===a&&(i+=60),i},l.hsv.ansi16=function(e){return l.rgb.ansi16(l.hsv.rgb(e),e[2])},l.rgb.ansi256=function(e){let t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},l.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];let r=(~~(e>50)+1)*.5,n=(1&t)*r*255,o=(t>>1&1)*r*255,a=(t>>2&1)*r*255;return[n,o,a]},l.ansi256.rgb=function(e){if(e>=232){let t=(e-232)*10+8;return[t,t,t]}e-=16;let r,n=Math.floor((r=e%36)/6)/5*255;return[Math.floor(e/36)/5*255,n,r%6/5*255]},l.rgb.hex=function(e){let t=((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2])),r=t.toString(16).toUpperCase();return"000000".substring(r.length)+r},l.hex.rgb=function(e){let t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map(e=>e+e).join(""));let n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},l.rgb.hcg=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,o=Math.max(Math.max(t,r),n),a=Math.min(Math.min(t,r),n),l=o-a,i,u;return i=l<1?a/(1-l):0,u=l<=0?0:o===t?(r-n)/l%6:o===r?2+(n-t)/l:4+(t-r)/l,u/=6,[360*(u%=1),100*l,100*i]},l.hsl.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r),o=0;return n<1&&(o=(r-.5*n)/(1-n)),[e[0],100*n,100*o]},l.hsv.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=t*r,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},l.hcg.rgb=function(e){let t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];let o=[0,0,0],a=t%1*6,l=a%1,i=1-l,u=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=l,o[2]=0;break;case 1:o[0]=i,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=l;break;case 3:o[0]=0,o[1]=i,o[2]=1;break;case 4:o[0]=l,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=i}return u=(1-r)*n,[(r*o[0]+u)*255,(r*o[1]+u)*255,(r*o[2]+u)*255]},l.hcg.hsv=function(e){let t=e[1]/100,r=e[2]/100,n=t+r*(1-t),o=0;return n>0&&(o=t/n),[e[0],100*o,100*n]},l.hcg.hsl=function(e){let t=e[1]/100,r=e[2]/100,n=r*(1-t)+.5*t,o=0;return n>0&&n<.5?o=t/(2*n):n>=.5&&n<1&&(o=t/(2*(1-n))),[e[0],100*o,100*n]},l.hcg.hwb=function(e){let t=e[1]/100,r=e[2]/100,n=t+r*(1-t);return[e[0],(n-t)*100,(1-n)*100]},l.hwb.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=1-r,o=n-t,a=0;return o<1&&(a=(n-o)/(1-o)),[e[0],100*o,100*a]},l.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},l.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},l.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},l.gray.hsl=function(e){return[0,0,e[0]]},l.gray.hsv=l.gray.hsl,l.gray.hwb=function(e){return[0,100,e[0]]},l.gray.cmyk=function(e){return[0,0,0,e[0]]},l.gray.lab=function(e){return[e[0],0,0]},l.gray.hex=function(e){let t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},l.rgb.gray=function(e){let t=(e[0]+e[1]+e[2])/3;return[t/255*100]}},2085:function(e,t,r){let n=r(8168),o=r(4111),a={},l=Object.keys(n);l.forEach(e=>{a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});let t=o(e),r=Object.keys(t);r.forEach(r=>{let n=t[r];a[e][r]=function(e){let t=function(...t){let r=t[0];if(null==r)return r;r.length>1&&(t=r);let n=e(t);if("object"==typeof n)for(let o=n.length,a=0;a<o;a++)n[a]=Math.round(n[a]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(n),a[e][r].raw=function(e){let t=function(...t){let r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)})}),e.exports=a},4111:function(e,t,r){let n=r(8168);function o(e,t){return function(r){return t(e(r))}}function a(e,t){let r=[t[e].parent,e],a=n[t[e].parent][e],l=t[e].parent;for(;t[l].parent;)r.unshift(t[l].parent),a=o(n[t[l].parent][l],a),l=t[l].parent;return a.conversion=r,a}e.exports=function(e){let t=function(e){let t=function(){let e={},t=Object.keys(n);for(let r=t.length,o=0;o<r;o++)e[t[o]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;){let o=r.pop(),a=Object.keys(n[o]);for(let l=a.length,i=0;i<l;i++){let u=a[i],s=t[u];-1===s.distance&&(s.distance=t[o].distance+1,s.parent=o,r.unshift(u))}}return t}(e),r={},o=Object.keys(t);for(let l=o.length,i=0;i<l;i++){let u=o[i],s=t[u];null!==s.parent&&(r[u]=a(u,t))}return r}},8874:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},9818:function(e,t,r){var n=r(8874),o=r(6851),a=Object.hasOwnProperty,l=Object.create(null);for(var i in n)a.call(n,i)&&(l[n[i]]=i);var u=e.exports={to:{},get:{}};function s(e,t,r){return Math.min(Math.max(t,e),r)}function c(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}u.get=function(e){var t,r,n=e.substring(0,3).toLowerCase();switch(n){case"hsl":t=u.get.hsl(e),r="hsl";break;case"hwb":t=u.get.hwb(e),r="hwb";break;default:t=u.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},u.get.rgb=function(e){if(!e)return null;var t,r,o,l=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(r=0,o=t[2],t=t[1];r<3;r++){var i=2*r;l[r]=parseInt(t.slice(i,i+2),16)}o&&(l[3]=parseInt(o,16)/255)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(r=0,o=(t=t[1])[3];r<3;r++)l[r]=parseInt(t[r]+t[r],16);o&&(l[3]=parseInt(o+o,16)/255)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(r=0;r<3;r++)l[r]=parseInt(t[r+1],0);t[4]&&(t[5]?l[3]=.01*parseFloat(t[4]):l[3]=parseFloat(t[4]))}else if(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(r=0;r<3;r++)l[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(t[5]?l[3]=.01*parseFloat(t[4]):l[3]=parseFloat(t[4]))}else if(!(t=e.match(/^(\w+)$/)))return null;else return"transparent"===t[1]?[0,0,0,0]:a.call(n,t[1])?((l=n[t[1]])[3]=1,l):null;for(r=0;r<3;r++)l[r]=s(l[r],0,255);return l[3]=s(l[3],0,1),l},u.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]),n=(parseFloat(t[1])%360+360)%360,o=s(parseFloat(t[2]),0,100),a=s(parseFloat(t[3]),0,100),l=s(isNaN(r)?1:r,0,1);return[n,o,a,l]}return null},u.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]),n=(parseFloat(t[1])%360+360)%360,o=s(parseFloat(t[2]),0,100),a=s(parseFloat(t[3]),0,100),l=s(isNaN(r)?1:r,0,1);return[n,o,a,l]}return null},u.to.hex=function(){var e=o(arguments);return"#"+c(e[0])+c(e[1])+c(e[2])+(e[3]<1?c(Math.round(255*e[3])):"")},u.to.rgb=function(){var e=o(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},u.to.rgb.percent=function(){var e=o(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},u.to.hsl=function(){var e=o(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},u.to.hwb=function(){var e=o(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},u.to.keyword=function(e){return l[e.slice(0,3)]}},6767:function(e,t,r){let n=r(9818),o=r(2085),a=["keyword","gray","hex",],l={};for(let i of Object.keys(o))l[[...o[i].labels].sort().join("")]=i;let u={};function s(e,t){if(!(this instanceof s))return new s(e,t);if(t&&t in a&&(t=null),t&&!(t in o))throw Error("Unknown model: "+t);let r,i;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof s)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if("string"==typeof e){let c=n.get(e);if(null===c)throw Error("Unable to parse color from string: "+e);this.model=c.model,i=o[this.model].channels,this.color=c.value.slice(0,i),this.valpha="number"==typeof c.value[i]?c.value[i]:1}else if(e.length>0){this.model=t||"rgb",i=o[this.model].channels;let h=Array.prototype.slice.call(e,0,i);this.color=p(h,i),this.valpha="number"==typeof e[i]?e[i]:1}else if("number"==typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e,],this.valpha=1;else{this.valpha=1;let d=Object.keys(e);"alpha"in e&&(d.splice(d.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);let f=d.sort().join("");if(!(f in l))throw Error("Unable to parse color from object: "+JSON.stringify(e));this.model=l[f];let{labels:g}=o[this.model],b=[];for(r=0;r<g.length;r++)b.push(e[g[r]]);this.color=p(b)}if(u[this.model])for(r=0,i=o[this.model].channels;r<i;r++){let v=u[this.model][r];v&&(this.color[r]=v(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}for(let c of(s.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in n.to?this:this.rgb();t=t.round("number"==typeof e?e:1);let r=1===t.valpha?t.color:[...t.color,this.valpha];return n.to[t.model](r)},percentString(e){let t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:[...t.color,this.valpha];return n.to.rgb.percent(r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){let e={},{channels:t}=o[this.model],{labels:r}=o[this.model];for(let n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){let e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){let e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){var t;return e=Math.max(e||0,0),new s([...this.color.map((t=e,function(e){var r,n;return Number(e.toFixed(t))})),this.valpha],this.model)},alpha(e){return void 0!==e?new s([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:d("rgb",0,f(255)),green:d("rgb",1,f(255)),blue:d("rgb",2,f(255)),hue:d(["hsl","hsv","hsl","hwb","hcg"],0,e=>(e%360+360)%360),saturationl:d("hsl",1,f(100)),lightness:d("hsl",2,f(100)),saturationv:d("hsv",1,f(100)),value:d("hsv",2,f(100)),chroma:d("hcg",1,f(100)),gray:d("hcg",2,f(100)),white:d("hwb",1,f(100)),wblack:d("hwb",2,f(100)),cyan:d("cmyk",0,f(100)),magenta:d("cmyk",1,f(100)),yellow:d("cmyk",2,f(100)),black:d("cmyk",3,f(100)),x:d("xyz",0,f(95.047)),y:d("xyz",1,f(100)),z:d("xyz",2,f(108.833)),l:d("lab",0,f(100)),a:d("lab",1),b:d("lab",2),keyword(e){return void 0!==e?new s(e):o[this.model].keyword(this.color)},hex(e){return void 0!==e?new s(e):n.to.hex(this.rgb().round().color)},hexa(e){if(void 0!==e)return new s(e);let t=this.rgb().round().color,r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),n.to.hex(t)+r},rgbNumber(){let e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){let e=this.rgb().color,t=[];for(let[r,n]of e.entries()){let o=n/255;t[r]=o<=.04045?o/12.92:((o+.055)/1.055)**2.4}return .2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){let t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level(e){let t=this.contrast(e);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){let e=this.rgb().color,t=(2126*e[0]+7152*e[1]+722*e[2])/1e4;return t<128},isLight(){return!this.isDark()},negate(){let e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){let t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){let t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){let t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){let t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){let t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){let t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){let e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return s.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){let t=this.hsl(),r=t.color[0];return r=(r=(r+e)%360)<0?360+r:r,t.color[0]=r,t},mix(e,t){if(!e||!e.rgb)throw Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);let r=e.rgb(),n=this.rgb(),o=void 0===t?.5:t,a=2*o-1,l=r.alpha()-n.alpha(),i=((a*l==-1?a:(a+l)/(1+a*l))+1)/2,u=1-i;return s.rgb(i*r.red()+u*n.red(),i*r.green()+u*n.green(),i*r.blue()+u*n.blue(),r.alpha()*o+n.alpha()*(1-o))}},Object.keys(o))){if(a.includes(c))continue;let{channels:h}=o[c];s.prototype[c]=function(...e){return this.model===c?new s(this):e.length>0?new s(e,c):new s([...g(o[this.model][c].raw(this.color)),this.valpha],c)},s[c]=function(...e){let t=e[0];return"number"==typeof t&&(t=p(e,h)),new s(t,c)}}function d(e,t,r){for(let n of e=Array.isArray(e)?e:[e])(u[n]||(u[n]=[]))[t]=r;return e=e[0],function(n){let o;return void 0!==n?(r&&(n=r(n)),(o=this[e]()).color[t]=n,o):(o=this[e]().color[t],r&&(o=r(o)),o)}}function f(e){return function(t){return Math.max(0,Math.min(e,t))}}function g(e){return Array.isArray(e)?e:[e]}function p(e,t){for(let r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}e.exports=s},1124:function(e){"use strict";/*! npm.im/get-canvas-pixel-color 2.0.1 */ var t=function(e,t,r){e.getImageData||(e=e.getContext("2d"));var n=e.getImageData(t,r,1,1).data;return n.r=n[0],n.g=n[1],n.b=n[2],n.a=n[3],n.rgb="rgb("+n.r+","+n.g+","+n.b+")",n.rgba="rgba("+n.r+","+n.g+","+n.b+","+n.a+")",n};e.exports=t},5171:function(e){e.exports=function(e){return!!e&&"string"!=typeof e&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},8e3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var n=(0,r(2648).Z)(r(7294)).default.createContext({});t.AmpStateContext=n},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=e.hybrid,n=e.hasQuery;return void 0!==t&&t||void 0!==r&&r&&void 0!==n&&n}},2717:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var n=r(6495).Z,o=r(2648).Z,a=(0,r(1598).Z)(r(7294)),l=o(r(1585)),i=r(8e3),u=r(5850),s=r(9470);function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(9475);var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){var r,o,l,i,u=t.inAmpMode;return e.reduce(h,[]).reverse().concat(c(u).reverse()).filter((r=new Set,o=new Set,l=new Set,i={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var a=e.key.slice(e.key.indexOf("$")+1);r.has(a)?t=!1:r.add(a)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var c=d[u];if(e.props.hasOwnProperty(c)){if("charSet"===c)l.has(c)?t=!1:l.add(c);else{var h=e.props[c],f=i[c]||new Set;("name"!==c||!n)&&f.has(h)?t=!1:(f.add(h),i[c]=f)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!u&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=n({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:r})})}var g=function(e){var t=e.children,r=a.useContext(i.AmpStateContext),n=a.useContext(u.HeadManagerContext);return a.default.createElement(l.default,{reduceComponentsToState:f,headManager:n,inAmpMode:s.isInAmpMode(r)},t)};t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=e.headManager,i=e.reduceComponentsToState;function u(){if(r&&r.mountedInstances){var t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return o&&(null==r||null==(t=r.mountedInstances)||t.add(e.children),u()),a(function(){var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),function(){var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(function(){return r&&(r._pendingUpdate=u),function(){r&&(r._pendingUpdate=u)}}),l(function(){return r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),function(){r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)}}),null};var n=(0,r(1598).Z)(r(7294)),o=!1,a=o?function(){}:n.useLayoutEffect,l=o?function(){}:n.useEffect},9008:function(e,t,r){e.exports=r(2717)},2243:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseRGB=void 0;let r=({r:e,g:t,b:r})=>`rgb(${e}, ${t}, ${r})`;t.parseRGB=r},5018:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rgbToHex=void 0;let r=e=>{let t=e.toString(16);return t.length<2&&(t=`0${t}`),t},n=e=>{let{r:t,g:n,b:o}=e,a=r(t),l=r(n),i=r(o);return`#${a}${l}${i}`};t.rgbToHex=n},6344:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ELEMENT_NOT_CANVAS_ERROR=t.ZERO_PIXELS_FOUND_ERROR=t.VAL_NOT_RGB_OBJ_ARRAY_ERROR=t.TARGET_NOT_HTML_ELEMENT_ERROR=t.TARGET_NODE_TYPE_NOT_IMG_ERROR=t.PICK_RADIUS_OUT_OF_BOUNDS_ERROR=t.ERROR_MSGS=void 0,t.ERROR_MSGS={calcAverageColor:{notArrayOfRgbObj:"calcAverageColor: only accepts array of colors",noPixelsFound:"calcAverageColor: 0 pixels found"},getCanvasBlockColors:{elementNotCanvas:"getCanvasBlockColors: element is not of type canvas"},targetToCanvas:{targetNotElement:"targetToCanvas: event target not HTML element"},imageToCanvas:{targetNotImg:"imageToCanvas: event target not of node type img"},validatePickRadius:{pickRadiusOutOfBounds:"Property `pickRadius` out of bounds: please choose a value between 0 - 450."}},t.PICK_RADIUS_OUT_OF_BOUNDS_ERROR=Error(t.ERROR_MSGS.validatePickRadius.pickRadiusOutOfBounds),t.TARGET_NODE_TYPE_NOT_IMG_ERROR=Error(t.ERROR_MSGS.imageToCanvas.targetNotImg),t.TARGET_NOT_HTML_ELEMENT_ERROR=Error(t.ERROR_MSGS.targetToCanvas.targetNotElement),t.VAL_NOT_RGB_OBJ_ARRAY_ERROR=Error(t.ERROR_MSGS.calcAverageColor.notArrayOfRgbObj),t.ZERO_PIXELS_FOUND_ERROR=Error(t.ERROR_MSGS.calcAverageColor.noPixelsFound),t.ELEMENT_NOT_CANVAS_ERROR=Error(t.ERROR_MSGS.getCanvasBlockColors.elementNotCanvas)},6781:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function l(e){try{u(n.next(e))}catch(t){a(t)}}function i(e){try{u(n.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(l,i)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.EyeDropper=void 0;let o=r(7294),a=r(2243),l=r(5018),i=r(7307),u=r(3556),s=r(1626),{useCallback:c,useEffect:h,useState:d}=o,f={eyedropperWrapper:{position:"relative"},eyedropperWrapperButton:{backgroundColor:"#000000",color:"#ffffff",border:"1px solid #ffffff",borderRadius:"20%",padding:"10px 25px"}},g={rgb:"",hex:""},p=e=>{let[t,r]=d(g),[p,b]=d(!1),[v,m]=d(!1),{once:y=!0,pickRadius:w=0,onInit:_,cursorActive:M="copy",cursorInactive:O="auto",onChange:k,wrapperClasses:E,buttonClasses:R,customComponent:x,colorsPassThrough:C,children:A,customProps:S,disabled:I,onPickStart:T,onPickEnd:j}=e,P=c(({isPicking:e,disableButton:t,showActiveCursor:r})=>{document.body&&(document.body.style.cursor=r?M:O),b(e),m(t)},[M,O]),N=c(()=>{P({isPicking:!1,disableButton:!1,showActiveCursor:!1}),j&&j()},[P,j]),U=c(e=>{"Escape"===e.code&&p&&N()},[p,N]),L=()=>{T&&T(),P({isPicking:!0,disableButton:I||!0,showActiveCursor:!0})},D=c(e=>{let t=(0,a.parseRGB)(e),n=(0,l.rgbToHex)(e);k({rgb:t,hex:n,customProps:S}),r({rgb:t,hex:n})},[S,k]),F=c(e=>n(void 0,void 0,void 0,function*(){let{target:t}=e;if(!t)return;let r=yield(0,u.targetToCanvas)(t),n=(0,s.getColor)(r,e,w);D(n),y&&N()}),[N,y,w,D]);return h(()=>{_&&_()},[_]),h(()=>{w&&(0,i.validatePickRadius)(w)},[w]),h(()=>(p&&document.addEventListener("click",F),()=>{document.removeEventListener("click",F)}),[p,y,F]),h(()=>(p&&document.addEventListener("keydown",U),()=>{document.removeEventListener("keydown",U)}),[p,U]),h(()=>()=>{document.body&&(document.body.style.cursor=O)},[]),o.createElement("div",{style:f.eyedropperWrapper,className:E},x?o.createElement(x,Object.assign({onClick:L},C?{[C]:t}:{},{customProps:S,disabled:v})):o.createElement(o.Fragment,null,o.createElement("style",{dangerouslySetInnerHTML:{__html:`
            .react-eyedrop-button {
              background-color: #000000;
              color: #ffffff;
              border: 1px solid #ffffff;
              border-radius: 20%;
              padding: 10px 25px;
            }
          `}}),o.createElement("button",{id:"react-eyedrop-button",className:`react-eyedrop-button ${R||""}`,onClick:L,disabled:v},A)))};t.EyeDropper=p},9983:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calcAverageColor=void 0;let n=r(6344),o=e=>{let t=e.length;if("object"!=typeof e||void 0===e.reduce)throw n.VAL_NOT_RGB_OBJ_ARRAY_ERROR;if(0===t)throw n.ZERO_PIXELS_FOUND_ERROR;if(1===t)return e[0];let r=e.reduce((e,r)=>(e[0]+=Math.round(r.r/t),e[1]+=Math.round(r.g/t),e[2]+=Math.round(r.b/t),e),[0,0,0]);return{r:r[0],g:r[1],b:r[2]}};t.calcAverageColor=o},3350:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractColors=void 0;let n=r(9027),o=(e,t,r,o)=>(0,n.getCanvasBlockColors)(e,r-t,o-t,2*t,2*t);t.extractColors=o},9027:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCanvasBlockColors=void 0;let n=r(6344),o=r(8040),a=(e,t,r,a,l)=>{if(!e.getContext)throw n.ELEMENT_NOT_CANVAS_ERROR;let i=e.getContext("2d"),u=(0,o.validateCanvasExtractionValues)({x:t,y:r,targetHeight:l,targetWidth:a,canvasHeight:e.height,canvasWidth:e.width}),s=i.getImageData(u.x,u.y,u.targetWidth,u.targetHeight).data,c=[];for(let h=0;h<s.length;h+=4){let d=s.slice(h,h+4);c.push({r:d[0],g:d[1],b:d[2]})}return c};t.getCanvasBlockColors=a},1626:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColor=void 0;let n=r(1124),o=r(3350),a=r(9983),l=(e,t,r)=>{let{offsetX:l,offsetY:i}=t;if(void 0===r||0===r)return n(e,l,i);{let u=(0,o.extractColors)(e,r,l,i);return(0,a.calcAverageColor)(u)}};t.getColor=l},1101:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(6781),t),o(r(8862),t),o(r(5482),t)},7290:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.elementToCanvas=void 0;let r=e=>new Promise(t=>{let r=document.createElement("canvas"),n=parseInt(window.getComputedStyle(e).height,10),o=parseInt(window.getComputedStyle(e).width,10);r.width=o,r.height=n;let a=r.getContext("2d"),l=()=>{a.drawImage(c,0,0,c.naturalWidth,c.naturalHeight),t(r)},i=window.getComputedStyle(e).backgroundImage,u=i.indexOf("url(")+5,s=i.slice(u,i.indexOf(")",u)-1),c=new Image;c.width=o,c.height=n,c.crossOrigin="Anonymous",c.addEventListener("load",l),c.src=s});t.elementToCanvas=r},7402:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageToCanvas=void 0;let n=r(6344),o=e=>{if("IMG"!==e.nodeName)throw n.TARGET_NODE_TYPE_NOT_IMG_ERROR;return new Promise(t=>{let r=document.createElement("canvas");r.width=e.width,r.height=e.height;let n=r.getContext("2d"),o=()=>{n.drawImage(l,0,0,e.width,e.height),t(r)},a=e.src,l=new Image;l.width=e.width,l.height=e.height,l.crossOrigin="Anonymous",l.addEventListener("load",o),l.src=a})};t.imageToCanvas=o},3556:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.targetToCanvas=void 0;let n=r(7402),o=r(1120),a=r(6344),l=r(7290),i=e=>{if(!(e instanceof HTMLElement))throw a.TARGET_NOT_HTML_ELEMENT_ERROR;if(e instanceof HTMLImageElement)return(0,n.imageToCanvas)(e);let t=window.getComputedStyle(e).backgroundImage;return t&&"none"!==t?(0,l.elementToCanvas)(e):o(e,{logging:!1})};t.targetToCanvas=i},8862:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},5482:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function l(e){try{u(n.next(e))}catch(t){a(t)}}function i(e){try{u(n.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(l,i)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.useEyeDrop=void 0;let o=r(7294),a=r(2243),l=r(5018),i=r(3556),u=r(1626),s=r(7294),{useEffect:c,useState:h}=o,d={rgb:"",hex:""},f=({once:e,pickRadius:t,cursorActive:r="copy",cursorInactive:o="auto"}={})=>{let[f,g]=h(d),[p,b]=h(!1),v=()=>{b(!0)},m=()=>{b(!1)},y=(0,s.useCallback)(e=>{"Escape"===e.code&&p&&m()},[p,m]),w=e=>{let t=(0,a.parseRGB)(e),r=(0,l.rgbToHex)(e);g({rgb:t,hex:r})},_=(0,s.useCallback)(r=>n(void 0,void 0,void 0,function*(){let{target:n}=r;if(!n)return;let o=yield(0,i.targetToCanvas)(n),a=(0,u.getColor)(o,r,t);w(a),e&&b(!1)}),[e,b]);return c(()=>(p&&document.addEventListener("click",_),()=>{document.removeEventListener("click",_)}),[p,e,_]),c(()=>(p&&document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}),[p,y]),c(()=>{document.body&&r&&o&&(document.body.style.cursor=p?r:o)},[p,r,o]),[f,v,m]};t.useEyeDrop=f},8040:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateCanvasExtractionValues=void 0;let r=e=>{let{x:t,y:r,targetHeight:n,targetWidth:o,canvasHeight:a,canvasWidth:l}=e,i=Object.assign({},e);return t<0&&(i.x=0),r<0&&(i.y=0),t+o>l&&(i.targetWidth=l-t),r+n>a&&(i.targetHeight=a-r),i};t.validateCanvasExtractionValues=r},7307:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validatePickRadius=t.MAXIMUM_PICK_RADIUS=t.MINIMUM_PICK_RADIUS=void 0;let n=r(6344);t.MINIMUM_PICK_RADIUS=0,t.MAXIMUM_PICK_RADIUS=450;let o=e=>{if(e<t.MINIMUM_PICK_RADIUS||e>t.MAXIMUM_PICK_RADIUS)throw n.PICK_RADIUS_OUT_OF_BOUNDS_ERROR};t.validatePickRadius=o},6851:function(e,t,r){"use strict";var n=r(5171),o=Array.prototype.concat,a=Array.prototype.slice,l=e.exports=function(e){for(var t=[],r=0,l=e.length;r<l;r++){var i=e[r];n(i)?t=o.call(t,a.call(i)):t.push(i)}return t};l.wrap=function(e){return function(){return e(l(arguments))}}},5768:function(e,t,r){"use strict";r.d(t,{Nr:function(){return o},$0:function(){return a},OR:function(){return l},LI:function(){return u},_:function(){return s}});var n=r(7294),o=function(e,t){let[r,o]=(0,n.useState)(e);return(0,n.useEffect)(()=>{let r=setTimeout(()=>o(e),t||500);return()=>{clearTimeout(r)}},[e,t]),r};function a(e){let t=(0,n.useRef)(()=>{throw Error("Cannot call an event handler while rendering.")});return u(()=>{t.current=e},[e]),(0,n.useCallback)((...e)=>t.current(...e),[t])}var l=function(e,t,r,o){let a=(0,n.useRef)(t);u(()=>{a.current=t},[t]),(0,n.useEffect)(()=>{var t;let n=null!==(t=null==r?void 0:r.current)&&void 0!==t?t:window;if(!(n&&n.addEventListener))return;let l=e=>a.current(e);return n.addEventListener(e,l,o),()=>{n.removeEventListener(e,l,o)}},[e,r,o])};let i="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;var u=i,s=function(e,t){let r=(0,n.useCallback)(()=>{if("undefined"==typeof window)return t;try{let r=window.localStorage.getItem(e);return r?function(e){try{return"undefined"===e?void 0:JSON.parse(null!=e?e:"")}catch(t){console.log("parsing error on",{value:e});return}}(r):t}catch(n){return console.warn(`Error reading localStorage key “${e}”:`,n),t}},[t,e]),[o,i]=(0,n.useState)(r),u=a(t=>{"undefined"==typeof window&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{let r=t instanceof Function?t(o):t;window.localStorage.setItem(e,JSON.stringify(r)),i(r),window.dispatchEvent(new Event("local-storage"))}catch(n){console.warn(`Error setting localStorage key “${e}”:`,n)}});(0,n.useEffect)(()=>{i(r())},[]);let s=(0,n.useCallback)(t=>{(null==t||!t.key||t.key===e)&&i(r())},[e,r]);return l("storage",s),l("local-storage",s),[o,u]}},29:function(e,t,r){"use strict";function n(e,t,r,n,o,a,l){try{var i=e[a](l),u=i.value}catch(s){r(s);return}i.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(o,a){var l=e.apply(t,r);function i(e){n(l,o,a,i,u,"next",e)}function u(e){n(l,o,a,i,u,"throw",e)}i(void 0)})}}r.d(t,{Z:function(){return o}})},4730:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},2640:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],l=!0,i=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(u){i=!0,n=u}finally{try{l||null==o.return||o.return()}finally{if(i)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})}}]);