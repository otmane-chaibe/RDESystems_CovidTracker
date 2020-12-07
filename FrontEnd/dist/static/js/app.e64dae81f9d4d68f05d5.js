webpackJsonp([4],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroForm", function() { return ht; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormAppearance", function() { return ut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormButton", function() { return et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormCheckBox", function() { return at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormChoiceField", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormComboBox", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormEditBox", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormListBox", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormPasswordField", function() { return st; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormPushButton", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormRadioButton", function() { return rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormTextField", function() { return ot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GState", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadingPattern", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilingPattern", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsPDF", function() { return g; });
/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 2.1.1 Built on 2020-09-07T12:58:19.950Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2020 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2020 yWorks GmbH, http://www.yworks.com
 *               2015-2020 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, willow-systems.com
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */

var t=function(){return"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this}();function e(){t.console&&"function"==typeof t.console.log&&t.console.log.apply(t.console,arguments)}var n={log:e,warn:function(n){t.console&&("function"==typeof t.console.warn?t.console.warn.apply(t.console,arguments):e.call(null,arguments))},error:function(n){t.console&&("function"==typeof t.console.error?t.console.error.apply(t.console,arguments):e(n))}};
/**
 * @license
 * FileSaver.js
 * A saveAs() FileSaver implementation.
 *
 * By Eli Grey, http://eligrey.com
 *
 * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
 * source  : http://purl.eligrey.com/github/FileSaver.js
 */function r(t,e,r){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){u(i.response,e,r)},i.onerror=function(){n.error("could not download file")},i.send()}function i(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return e.status>=200&&e.status<=299}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o,s,u=t.saveAs||("object"!=typeof window||window!==t?function(){}:"download"in HTMLAnchorElement.prototype?function(e,n,o){var s=t.URL||t.webkitURL,u=document.createElement("a");n=n||e.name||"download",u.download=n,u.rel="noopener","string"==typeof e?(u.href=e,u.origin!==location.origin?i(u.href)?r(e,n,o):a(u,u.target="_blank"):a(u)):(u.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(u.href)}),4e4),setTimeout((function(){a(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,e,o){if(e=e||t.name||"download","string"==typeof t)if(i(t))r(t,e,o);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){a(s)}))}else navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(n.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,o),e)}:function(e,n,i,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return r(e,n,i);var o="application/octet-stream"===e.type,s=/constructor/i.test(t.HTMLElement)||t.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||o&&s)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},c.readAsDataURL(e)}else{var h=t.URL||t.webkitURL,l=h.createObjectURL(e);a?a.location=l:location.href=l,a=null,setTimeout((function(){h.revokeObjectURL(l)}),4e4)}});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function c(t){var e;t=t||"",this.ok=!1,"#"==t.charAt(0)&&(t=t.substr(1,6));t={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[t=(t=t.replace(/ /g,"")).toLowerCase()]||t;for(var n=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],r=0;r<n.length;r++){var i=n[r].re,a=n[r].process,o=i.exec(t);o&&(e=a(o),this.r=e[0],this.g=e[1],this.b=e[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),n=this.b.toString(16);return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==n.length&&(n="0"+n),"#"+t+e+n}}function h(e){if("object"!=typeof e)throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var r={};this.subscribe=function(t,e,n){if(n=n||!1,"string"!=typeof t||"function"!=typeof e||"boolean"!=typeof n)throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");r.hasOwnProperty(t)||(r[t]={});var i=Math.random().toString(35);return r[t][i]=[e,!!n],i},this.unsubscribe=function(t){for(var e in r)if(r[e][t])return delete r[e][t],0===Object.keys(r[e]).length&&delete r[e],!0;return!1},this.publish=function(i){if(r.hasOwnProperty(i)){var a=Array.prototype.slice.call(arguments,1),o=[];for(var s in r[i]){var u=r[i][s];try{u[0].apply(e,a)}catch(e){t.console&&n.error("jsPDF PubSub Error",e.message,e)}u[1]&&o.push(s)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return r}}function l(t){if(!(this instanceof l))return new l(t);var e="opacity,stroke-opacity".split(",");for(var n in t)t.hasOwnProperty(n)&&e.indexOf(n)>=0&&(this[n]=t[n]);this.id="",this.objectNumber=-1}function f(t,e){this.gState=t,this.matrix=e,this.id="",this.objectNumber=-1}function d(t,e,n,r,i){if(!(this instanceof d))return new d(t,e,n,r,i);this.type="axial"===t?2:3,this.coords=e,this.colors=n,f.call(this,r,i)}function p(t,e,n,r,i){if(!(this instanceof p))return new p(t,e,n,r,i);this.boundingBox=t,this.xStep=e,this.yStep=n,this.stream="",this.cloneIndex=0,f.call(this,r,i)}function g(e){var r,i="string"==typeof arguments[0]?arguments[0]:"p",a=arguments[1],o=arguments[2],f=arguments[3],m=[],v=1,b=16,y="S";"object"==typeof(e=e||{})&&(i=e.orientation,a=e.unit||a,o=e.format||o,f=e.compress||e.compressPdf||f,v="number"==typeof e.userUnit?Math.abs(e.userUnit):1,void 0!==e.precision&&(r=e.precision),void 0!==e.floatPrecision&&(b=e.floatPrecision),y=e.defaultPathOperation||"S"),m=e.filters||(!0===f?["FlateEncode"]:m),a=a||"mm",i=(""+(i||"P")).toLowerCase();var w=e.putOnlyUsedFonts||!1,N={},L={internal:{},__private__:{}};L.__private__.PubSub=h;var x="1.3",A=L.__private__.getPdfVersion=function(){return x};L.__private__.setPdfVersion=function(t){x=t};var _={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};L.__private__.getPageFormats=function(){return _};var S=L.__private__.getPageFormat=function(t){return _[t]};o=o||"a4";var P={COMPAT:"compat",ADVANCED:"advanced"},k=P.COMPAT;function F(){this.saveGraphicsState(),ot(new Dt(Nt,0,0,-Nt,0,Cn()*Nt).toString()+" cm"),this.setFontSize(this.getFontSize()/Nt),y="n",k=P.ADVANCED}function I(){this.restoreGraphicsState(),y="S",k=P.COMPAT}L.advancedAPI=function(t){var e=k===P.COMPAT;return e&&F.call(this),"function"!=typeof t||(t(this),e&&I.call(this)),this},L.compatAPI=function(t){var e=k===P.ADVANCED;return e&&I.call(this),"function"!=typeof t||(t(this),e&&F.call(this)),this},L.isAdvancedAPI=function(){return k===P.ADVANCED};var C,j=function(t){if(k!==P.ADVANCED)throw new Error(t+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},B=L.roundToPrecision=L.__private__.roundToPrecision=function(t,e){var n=r||e;if(isNaN(t)||isNaN(n))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return t.toFixed(n).replace(/0+$/,"")};C=L.hpf=L.__private__.hpf="number"==typeof b?function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return B(t,b)}:"smart"===b?function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return B(t,t>-1&&t<1?16:5)}:function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return B(t,16)};var O=L.f2=L.__private__.f2=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return B(t,2)},M=L.__private__.f3=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f3");return B(t,3)},E=L.scale=L.__private__.scale=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.scale");return k===P.COMPAT?t*Nt:k===P.ADVANCED?t:void 0},q=function(t){return k===P.COMPAT?Cn()-t:k===P.ADVANCED?t:void 0},R=function(t){return E(q(t))};L.__private__.setPrecision=L.setPrecision=function(t){"number"==typeof parseInt(t,10)&&(r=parseInt(t,10))};var T,D="00000000000000000000000000000000",U=L.__private__.getFileId=function(){return D},z=L.__private__.setFileId=function(t){return D=void 0!==t&&/^[a-fA-F0-9]{32}$/.test(t)?t.toUpperCase():D.split("").map((function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))})).join("")};L.setFileId=function(t){return z(t),this},L.getFileId=function(){return U()};var H=L.__private__.convertDateToPDFDate=function(t){var e=t.getTimezoneOffset(),n=e<0?"+":"-",r=Math.floor(Math.abs(e/60)),i=Math.abs(e%60),a=[n,J(r),"'",J(i),"'"].join("");return["D:",t.getFullYear(),J(t.getMonth()+1),J(t.getDate()),J(t.getHours()),J(t.getMinutes()),J(t.getSeconds()),a].join("")},W=L.__private__.convertPDFDateToDate=function(t){var e=parseInt(t.substr(2,4),10),n=parseInt(t.substr(6,2),10)-1,r=parseInt(t.substr(8,2),10),i=parseInt(t.substr(10,2),10),a=parseInt(t.substr(12,2),10),o=parseInt(t.substr(14,2),10);return new Date(e,n,r,i,a,o,0)},V=L.__private__.setCreationDate=function(t){var e;if(void 0===t&&(t=new Date),t instanceof Date)e=H(t);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t))throw new Error("Invalid argument passed to jsPDF.setCreationDate");e=t}return T=e},G=L.__private__.getCreationDate=function(t){var e=T;return"jsDate"===t&&(e=W(T)),e};L.setCreationDate=function(t){return V(t),this},L.getCreationDate=function(t){return G(t)};var Y,J=L.__private__.padd2=function(t){return("0"+parseInt(t)).slice(-2)},X=L.__private__.padd2Hex=function(t){return("00"+(t=t.toString())).substr(t.length)},K=0,Z=[],$=[],Q=0,tt=[],et=[],nt=!1,rt=$,it=function(){K=0,Q=0,$=[],Z=[],tt=[],Jt=Vt(),Xt=Vt()};L.__private__.setCustomOutputDestination=function(t){nt=!0,rt=t};var at=function(t){nt||(rt=t)};L.__private__.resetCustomOutputDestination=function(){nt=!1,rt=$};var ot=L.__private__.out=function(t){return t=t.toString(),Q+=t.length+1,rt.push(t),rt},st=L.__private__.write=function(t){return ot(1===arguments.length?t.toString():Array.prototype.join.call(arguments," "))},ut=L.__private__.getArrayBuffer=function(t){for(var e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n);e--;)r[e]=t.charCodeAt(e);return n},ct=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];L.__private__.getStandardFonts=function(){return ct};var ht=e.fontSize||16;L.__private__.setFontSize=L.setFontSize=function(t){return ht=k===P.ADVANCED?t/Nt:t,this};var lt,ft=L.__private__.getFontSize=L.getFontSize=function(){return k===P.COMPAT?ht:ht*Nt},dt=e.R2L||!1;L.__private__.setR2L=L.setR2L=function(t){return dt=t,this},L.__private__.getR2L=L.getR2L=function(){return dt};var pt,gt=L.__private__.setZoomMode=function(t){var e=[void 0,null,"fullwidth","fullheight","fullpage","original"];if(/^\d*\.?\d*%$/.test(t))lt=t;else if(isNaN(t)){if(-1===e.indexOf(t))throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+t+'" is not recognized.');lt=t}else lt=parseInt(t,10)};L.__private__.getZoomMode=function(){return lt};var mt,vt=L.__private__.setPageMode=function(t){if(-1==[void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(t))throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+t+'" is not recognized.');pt=t};L.__private__.getPageMode=function(){return pt};var bt=L.__private__.setLayoutMode=function(t){if(-1==[void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(t))throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+t+'" is not recognized.');mt=t};L.__private__.getLayoutMode=function(){return mt},L.__private__.setDisplayMode=L.setDisplayMode=function(t,e,n){return gt(t),bt(e),vt(n),this};var yt={title:"",subject:"",author:"",keywords:"",creator:""};L.__private__.getDocumentProperty=function(t){if(-1===Object.keys(yt).indexOf(t))throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return yt[t]},L.__private__.getDocumentProperties=function(){return yt},L.__private__.setDocumentProperties=L.setProperties=L.setDocumentProperties=function(t){for(var e in yt)yt.hasOwnProperty(e)&&t[e]&&(yt[e]=t[e]);return this},L.__private__.setDocumentProperty=function(t,e){if(-1===Object.keys(yt).indexOf(t))throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return yt[t]=e};var wt,Nt,Lt,xt,At,_t={},St={},Pt=[],kt={},Ft={},It={},Ct={},jt=null,Bt=0,Ot=[],Mt=new h(L),Et=e.hotfixes||[],qt={},Rt={},Tt=[],Dt=function(t,e,n,r,i,a){if(!(this instanceof Dt))return new Dt(t,e,n,r,i,a);isNaN(t)&&(t=1),isNaN(e)&&(e=0),isNaN(n)&&(n=0),isNaN(r)&&(r=1),isNaN(i)&&(i=0),isNaN(a)&&(a=0),this._matrix=[t,e,n,r,i,a]};Object.defineProperty(Dt.prototype,"sx",{get:function(){return this._matrix[0]},set:function(t){this._matrix[0]=t}}),Object.defineProperty(Dt.prototype,"shy",{get:function(){return this._matrix[1]},set:function(t){this._matrix[1]=t}}),Object.defineProperty(Dt.prototype,"shx",{get:function(){return this._matrix[2]},set:function(t){this._matrix[2]=t}}),Object.defineProperty(Dt.prototype,"sy",{get:function(){return this._matrix[3]},set:function(t){this._matrix[3]=t}}),Object.defineProperty(Dt.prototype,"tx",{get:function(){return this._matrix[4]},set:function(t){this._matrix[4]=t}}),Object.defineProperty(Dt.prototype,"ty",{get:function(){return this._matrix[5]},set:function(t){this._matrix[5]=t}}),Object.defineProperty(Dt.prototype,"a",{get:function(){return this._matrix[0]},set:function(t){this._matrix[0]=t}}),Object.defineProperty(Dt.prototype,"b",{get:function(){return this._matrix[1]},set:function(t){this._matrix[1]=t}}),Object.defineProperty(Dt.prototype,"c",{get:function(){return this._matrix[2]},set:function(t){this._matrix[2]=t}}),Object.defineProperty(Dt.prototype,"d",{get:function(){return this._matrix[3]},set:function(t){this._matrix[3]=t}}),Object.defineProperty(Dt.prototype,"e",{get:function(){return this._matrix[4]},set:function(t){this._matrix[4]=t}}),Object.defineProperty(Dt.prototype,"f",{get:function(){return this._matrix[5]},set:function(t){this._matrix[5]=t}}),Object.defineProperty(Dt.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Dt.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Dt.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Dt.prototype,"isIdentity",{get:function(){return 1===this.sx&&(0===this.shy&&(0===this.shx&&(1===this.sy&&(0===this.tx&&0===this.ty))))}}),Dt.prototype.join=function(t){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(C).join(t)},Dt.prototype.multiply=function(t){var e=t.sx*this.sx+t.shy*this.shx,n=t.sx*this.shy+t.shy*this.sy,r=t.shx*this.sx+t.sy*this.shx,i=t.shx*this.shy+t.sy*this.sy,a=t.tx*this.sx+t.ty*this.shx+this.tx,o=t.tx*this.shy+t.ty*this.sy+this.ty;return new Dt(e,n,r,i,a,o)},Dt.prototype.decompose=function(){var t=this.sx,e=this.shy,n=this.shx,r=this.sy,i=this.tx,a=this.ty,o=Math.sqrt(t*t+e*e),s=(t/=o)*n+(e/=o)*r;n-=t*s,r-=e*s;var u=Math.sqrt(n*n+r*r);return s/=u,t*(r/=u)<e*(n/=u)&&(t=-t,e=-e,s=-s,o=-o),{scale:new Dt(o,0,0,u,0,0),translate:new Dt(1,0,0,1,i,a),rotate:new Dt(t,e,-e,t,0,0),skew:new Dt(1,0,s,1,0,0)}},Dt.prototype.toString=function(t){return this.join(" ")},Dt.prototype.inversed=function(){var t=this.sx,e=this.shy,n=this.shx,r=this.sy,i=this.tx,a=this.ty,o=1/(t*r-e*n),s=r*o,u=-e*o,c=-n*o,h=t*o;return new Dt(s,u,c,h,-s*i-c*a,-u*i-h*a)},Dt.prototype.applyToPoint=function(t){var e=t.x*this.sx+t.y*this.shx+this.tx,n=t.x*this.shy+t.y*this.sy+this.ty;return new xn(e,n)},Dt.prototype.applyToRectangle=function(t){var e=this.applyToPoint(t),n=this.applyToPoint(new xn(t.x+t.w,t.y+t.h));return new An(e.x,e.y,n.x-e.x,n.y-e.y)},Dt.prototype.clone=function(){var t=this.sx,e=this.shy,n=this.shx,r=this.sy,i=this.tx,a=this.ty;return new Dt(t,e,n,r,i,a)},L.Matrix=Dt;var Ut=L.matrixMult=function(t,e){return e.multiply(t)},zt=new Dt(1,0,0,1,0,0);L.unitMatrix=L.identityMatrix=zt;var Ht=function(t,e){if(!Ft[t]){var n=(e instanceof d?"Sh":"P")+(Object.keys(kt).length+1).toString(10);e.id=n,Ft[t]=n,kt[n]=e,Mt.publish("addPattern",e)}};L.ShadingPattern=d,L.TilingPattern=p,L.addShadingPattern=function(t,e){return j("addShadingPattern()"),Ht(t,e),this},L.beginTilingPattern=function(t){j("beginTilingPattern()"),Sn(t.boundingBox[0],t.boundingBox[1],t.boundingBox[2]-t.boundingBox[0],t.boundingBox[3]-t.boundingBox[1],t.matrix)},L.endTilingPattern=function(t,e){j("endTilingPattern()"),e.stream=et[Y].join("\n"),Ht(t,e),Mt.publish("endTilingPattern",e),Tt.pop().restore()};var Wt=L.__private__.newObject=function(){var t=Vt();return Gt(t,!0),t},Vt=L.__private__.newObjectDeferred=function(){return K++,Z[K]=function(){return Q},K},Gt=function(t,e){return e="boolean"==typeof e&&e,Z[t]=Q,e&&ot(t+" 0 obj"),t},Yt=L.__private__.newAdditionalObject=function(){var t={objId:Vt(),content:""};return tt.push(t),t},Jt=Vt(),Xt=Vt(),Kt=L.__private__.decodeColorString=function(t){var e=t.split(" ");if(2!==e.length||"g"!==e[1]&&"G"!==e[1]){if(5===e.length&&("k"===e[4]||"K"===e[4])){e=[(1-e[0])*(1-e[3]),(1-e[1])*(1-e[3]),(1-e[2])*(1-e[3]),"r"]}}else{var n=parseFloat(e[0]);e=[n,n,n,"r"]}for(var r="#",i=0;i<3;i++)r+=("0"+Math.floor(255*parseFloat(e[i])).toString(16)).slice(-2);return r},Zt=L.__private__.encodeColorString=function(t){var e;"string"==typeof t&&(t={ch1:t});var n=t.ch1,r=t.ch2,i=t.ch3,a=t.ch4,o="draw"===t.pdfColorType?["G","RG","K"]:["g","rg","k"];if("string"==typeof n&&"#"!==n.charAt(0)){var s=new c(n);if(s.ok)n=s.toHex();else if(!/^\d*\.?\d*$/.test(n))throw new Error('Invalid color "'+n+'" passed to jsPDF.encodeColorString.')}if("string"==typeof n&&/^#[0-9A-Fa-f]{3}$/.test(n)&&(n="#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]),"string"==typeof n&&/^#[0-9A-Fa-f]{6}$/.test(n)){var u=parseInt(n.substr(1),16);n=u>>16&255,r=u>>8&255,i=255&u}if(void 0===r||void 0===a&&n===r&&r===i)if("string"==typeof n)e=n+" "+o[0];else switch(t.precision){case 2:e=O(n/255)+" "+o[0];break;case 3:default:e=M(n/255)+" "+o[0]}else if(void 0===a||"object"==typeof a){if(a&&!isNaN(a.a)&&0===a.a)return e=["1.","1.","1.",o[1]].join(" ");if("string"==typeof n)e=[n,r,i,o[1]].join(" ");else switch(t.precision){case 2:e=[O(n/255),O(r/255),O(i/255),o[1]].join(" ");break;default:case 3:e=[M(n/255),M(r/255),M(i/255),o[1]].join(" ")}}else if("string"==typeof n)e=[n,r,i,a,o[2]].join(" ");else switch(t.precision){case 2:e=[O(n),O(r),O(i),O(a),o[2]].join(" ");break;case 3:default:e=[M(n),M(r),M(i),M(a),o[2]].join(" ")}return e},$t=L.__private__.getFilters=function(){return m},Qt=L.__private__.putStream=function(t){var e=(t=t||{}).data||"",n=t.filters||$t(),r=t.alreadyAppliedFilters||[],i=t.addLength1||!1,a=e.length,o={};!0===n&&(n=["FlateEncode"]);var s=t.additionalKeyValues||[],u=(o=void 0!==g.API.processDataByFilters?g.API.processDataByFilters(e,n):{data:e,reverseChain:[]}).reverseChain+(Array.isArray(r)?r.join(" "):r.toString());if(0!==o.data.length&&(s.push({key:"Length",value:o.data.length}),!0===i&&s.push({key:"Length1",value:a})),0!=u.length)if(u.split("/").length-1==1)s.push({key:"Filter",value:u});else{s.push({key:"Filter",value:"["+u+"]"});for(var c=0;c<s.length;c+=1)if("DecodeParms"===s[c].key){for(var h=[],l=0;l<o.reverseChain.split("/").length-1;l+=1)h.push("null");h.push(s[c].value),s[c].value="["+h.join(" ")+"]"}}ot("<<");for(var f=0;f<s.length;f++)ot("/"+s[f].key+" "+s[f].value);ot(">>"),0!==o.data.length&&(ot("stream"),ot(o.data),ot("endstream"))},te=L.__private__.putPage=function(t){var e=t.number,n=t.data,r=t.objId,i=t.contentsObjId;Gt(r,!0),ot("<</Type /Page"),ot("/Parent "+t.rootDictionaryObjId+" 0 R"),ot("/Resources "+t.resourceDictionaryObjId+" 0 R"),ot("/MediaBox ["+parseFloat(C(t.mediaBox.bottomLeftX))+" "+parseFloat(C(t.mediaBox.bottomLeftY))+" "+C(t.mediaBox.topRightX)+" "+C(t.mediaBox.topRightY)+"]"),null!==t.cropBox&&ot("/CropBox ["+C(t.cropBox.bottomLeftX)+" "+C(t.cropBox.bottomLeftY)+" "+C(t.cropBox.topRightX)+" "+C(t.cropBox.topRightY)+"]"),null!==t.bleedBox&&ot("/BleedBox ["+C(t.bleedBox.bottomLeftX)+" "+C(t.bleedBox.bottomLeftY)+" "+C(t.bleedBox.topRightX)+" "+C(t.bleedBox.topRightY)+"]"),null!==t.trimBox&&ot("/TrimBox ["+C(t.trimBox.bottomLeftX)+" "+C(t.trimBox.bottomLeftY)+" "+C(t.trimBox.topRightX)+" "+C(t.trimBox.topRightY)+"]"),null!==t.artBox&&ot("/ArtBox ["+C(t.artBox.bottomLeftX)+" "+C(t.artBox.bottomLeftY)+" "+C(t.artBox.topRightX)+" "+C(t.artBox.topRightY)+"]"),"number"==typeof t.userUnit&&1!==t.userUnit&&ot("/UserUnit "+t.userUnit),Mt.publish("putPage",{objId:r,pageContext:Ot[e],pageNumber:e,page:n}),ot("/Contents "+i+" 0 R"),ot(">>"),ot("endobj");var a=n.join("\n");return k===P.ADVANCED&&(a+="\nQ"),Gt(i,!0),Qt({data:a,filters:$t()}),ot("endobj"),r},ee=L.__private__.putPages=function(){var t,e,n=[];for(t=1;t<=Bt;t++)Ot[t].objId=Vt(),Ot[t].contentsObjId=Vt();for(t=1;t<=Bt;t++)n.push(te({number:t,data:et[t],objId:Ot[t].objId,contentsObjId:Ot[t].contentsObjId,mediaBox:Ot[t].mediaBox,cropBox:Ot[t].cropBox,bleedBox:Ot[t].bleedBox,trimBox:Ot[t].trimBox,artBox:Ot[t].artBox,userUnit:Ot[t].userUnit,rootDictionaryObjId:Jt,resourceDictionaryObjId:Xt}));Gt(Jt,!0),ot("<</Type /Pages");var r="/Kids [";for(e=0;e<Bt;e++)r+=n[e]+" 0 R ";ot(r+"]"),ot("/Count "+Bt),ot(">>"),ot("endobj"),Mt.publish("postPutPages")},ne=function(t){var e=function(t,e){return-1!==t.indexOf(" ")?"("+_e(t,e)+")":_e(t,e)};Mt.publish("putFont",{font:t,out:ot,newObject:Wt,putStream:Qt,pdfEscapeWithNeededParanthesis:e}),!0!==t.isAlreadyPutted&&(t.objectNumber=Wt(),ot("<<"),ot("/Type /Font"),ot("/BaseFont /"+e(t.postScriptName)),ot("/Subtype /Type1"),"string"==typeof t.encoding&&ot("/Encoding /"+t.encoding),ot("/FirstChar 32"),ot("/LastChar 255"),ot(">>"),ot("endobj"))},re=function(){for(var t in _t)_t.hasOwnProperty(t)&&(!1===w||!0===w&&N.hasOwnProperty(t))&&ne(_t[t])},ie=function(t){t.objectNumber=Wt();var e=[];e.push({key:"Type",value:"/XObject"}),e.push({key:"Subtype",value:"/Form"}),e.push({key:"BBox",value:"["+[C(t.x),C(t.y),C(t.x+t.width),C(t.y+t.height)].join(" ")+"]"}),e.push({key:"Matrix",value:"["+t.matrix.toString()+"]"});var n=t.pages[1].join("\n");Qt({data:n,additionalKeyValues:e}),ot("endobj")},ae=function(){for(var t in qt)qt.hasOwnProperty(t)&&ie(qt[t])},oe=function(t,e){var n,r=[],i=1/(e-1);for(n=0;n<1;n+=i)r.push(n);if(r.push(1),0!=t[0].offset){var a={offset:0,color:t[0].color};t.unshift(a)}if(1!=t[t.length-1].offset){var o={offset:1,color:t[t.length-1].color};t.push(o)}for(var s="",u=0,c=0;c<r.length;c++){for(n=r[c];n>t[u+1].offset;)u++;var h=t[u].offset,l=(n-h)/(t[u+1].offset-h),f=t[u].color,d=t[u+1].color;s+=X(Math.round((1-l)*f[0]+l*d[0]).toString(16))+X(Math.round((1-l)*f[1]+l*d[1]).toString(16))+X(Math.round((1-l)*f[2]+l*d[2]).toString(16))}return s.trim()},se=function(t,e){e||(e=21);var n=Wt(),r=oe(t.colors,e),i=[];i.push({key:"FunctionType",value:"0"}),i.push({key:"Domain",value:"[0.0 1.0]"}),i.push({key:"Size",value:"["+e+"]"}),i.push({key:"BitsPerSample",value:"8"}),i.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),i.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),Qt({data:r,additionalKeyValues:i,alreadyAppliedFilters:["/ASCIIHexDecode"]}),ot("endobj"),t.objectNumber=Wt(),ot("<< /ShadingType "+t.type),ot("/ColorSpace /DeviceRGB");var a="/Coords ["+C(parseFloat(t.coords[0]))+" "+C(parseFloat(t.coords[1]))+" ";2===t.type?a+=C(parseFloat(t.coords[2]))+" "+C(parseFloat(t.coords[3])):a+=C(parseFloat(t.coords[2]))+" "+C(parseFloat(t.coords[3]))+" "+C(parseFloat(t.coords[4]))+" "+C(parseFloat(t.coords[5])),ot(a+="]"),t.matrix&&ot("/Matrix ["+t.matrix.toString()+"]"),ot("/Function "+n+" 0 R"),ot("/Extend [true true]"),ot(">>"),ot("endobj")},ue=function(t,e){var n=Vt(),r=Wt();e.push({resourcesOid:n,objectOid:r}),t.objectNumber=r;var i=[];i.push({key:"Type",value:"/Pattern"}),i.push({key:"PatternType",value:"1"}),i.push({key:"PaintType",value:"1"}),i.push({key:"TilingType",value:"1"}),i.push({key:"BBox",value:"["+t.boundingBox.map(C).join(" ")+"]"}),i.push({key:"XStep",value:C(t.xStep)}),i.push({key:"YStep",value:C(t.yStep)}),i.push({key:"Resources",value:n+" 0 R"}),t.matrix&&i.push({key:"Matrix",value:"["+t.matrix.toString()+"]"}),Qt({data:t.stream,additionalKeyValues:i}),ot("endobj")},ce=function(t){var e;for(e in kt)kt.hasOwnProperty(e)&&(kt[e]instanceof d?se(kt[e]):kt[e]instanceof p&&ue(kt[e],t))},he=function(t){for(var e in t.objectNumber=Wt(),ot("<<"),t)switch(e){case"opacity":ot("/ca "+O(t[e]));break;case"stroke-opacity":ot("/CA "+O(t[e]))}ot(">>"),ot("endobj")},le=function(){var t;for(t in It)It.hasOwnProperty(t)&&he(It[t])},fe=function(){for(var t in ot("/XObject <<"),qt)qt.hasOwnProperty(t)&&qt[t].objectNumber>=0&&ot("/"+t+" "+qt[t].objectNumber+" 0 R");Mt.publish("putXobjectDict"),ot(">>")},de=function(){for(var t in ot("/Font <<"),_t)_t.hasOwnProperty(t)&&(!1===w||!0===w&&N.hasOwnProperty(t))&&ot("/"+t+" "+_t[t].objectNumber+" 0 R");ot(">>")},pe=function(){if(Object.keys(kt).length>0){for(var t in ot("/Shading <<"),kt)kt.hasOwnProperty(t)&&kt[t]instanceof d&&kt[t].objectNumber>=0&&ot("/"+t+" "+kt[t].objectNumber+" 0 R");Mt.publish("putShadingPatternDict"),ot(">>")}},ge=function(t){if(Object.keys(kt).length>0){for(var e in ot("/Pattern <<"),kt)kt.hasOwnProperty(e)&&kt[e]instanceof L.TilingPattern&&kt[e].objectNumber>=0&&kt[e].objectNumber<t&&ot("/"+e+" "+kt[e].objectNumber+" 0 R");Mt.publish("putTilingPatternDict"),ot(">>")}},me=function(){if(Object.keys(It).length>0){var t;for(t in ot("/ExtGState <<"),It)It.hasOwnProperty(t)&&It[t].objectNumber>=0&&ot("/"+t+" "+It[t].objectNumber+" 0 R");Mt.publish("putGStateDict"),ot(">>")}},ve=function(t){Gt(t.resourcesOid,!0),ot("<<"),ot("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),de(),pe(),ge(t.objectOid),me(),fe(),ot(">>"),ot("endobj")},be=function(){var t=[];re(),le(),ae(),ce(t),Mt.publish("putResources"),t.forEach(ve),ve({resourcesOid:Xt,objectOid:Number.MAX_SAFE_INTEGER}),Mt.publish("postPutResources")},ye=function(){Mt.publish("putAdditionalObjects");for(var t=0;t<tt.length;t++){var e=tt[t];Gt(e.objId,!0),ot(e.content),ot("endobj")}Mt.publish("postPutAdditionalObjects")},we=function(t){St[t.fontName]=St[t.fontName]||{},St[t.fontName][t.fontStyle]=t.id},Ne=function(t,e,n,r,i){var a={id:"F"+(Object.keys(_t).length+1).toString(10),postScriptName:t,fontName:e,fontStyle:n,encoding:r,isStandardFont:i||!1,metadata:{}};return Mt.publish("addFont",{font:a,instance:this}),_t[a.id]=a,we(a),a.id},Le=function(t){for(var e=0,n=ct.length;e<n;e++){var r=Ne.call(this,t[e][0],t[e][1],t[e][2],ct[e][3],!0);!1===w&&(N[r]=!0);var i=t[e][0].split("-");we({id:r,fontName:i[0],fontStyle:i[1]||""})}Mt.publish("addFonts",{fonts:_t,dictionary:St})},xe=function(e){return e.foo=function(){try{return e.apply(this,arguments)}catch(e){var n=e.stack||"";~n.indexOf(" at ")&&(n=n.split(" at ")[1]);var r="Error in function "+n.split("\n")[0].split("<")[0]+": "+e.message;if(!t.console)throw new Error(r);t.console.error(r,e),t.alert&&alert(r)}},e.foo.bar=e,e.foo},Ae=function(t,e){var n,r,i,a,o,s,u,c,h;if(i=(e=e||{}).sourceEncoding||"Unicode",o=e.outputEncoding,(e.autoencode||o)&&_t[wt].metadata&&_t[wt].metadata[i]&&_t[wt].metadata[i].encoding&&(a=_t[wt].metadata[i].encoding,!o&&_t[wt].encoding&&(o=_t[wt].encoding),!o&&a.codePages&&(o=a.codePages[0]),"string"==typeof o&&(o=a[o]),o)){for(u=!1,s=[],n=0,r=t.length;n<r;n++)(c=o[t.charCodeAt(n)])?s.push(String.fromCharCode(c)):s.push(t[n]),s[n].charCodeAt(0)>>8&&(u=!0);t=s.join("")}for(n=t.length;void 0===u&&0!==n;)t.charCodeAt(n-1)>>8&&(u=!0),n--;if(!u)return t;for(s=e.noBOM?[]:[254,255],n=0,r=t.length;n<r;n++){if((h=(c=t.charCodeAt(n))>>8)>>8)throw new Error("Character at position "+n+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");s.push(h),s.push(c-(h<<8))}return String.fromCharCode.apply(void 0,s)},_e=L.__private__.pdfEscape=L.pdfEscape=function(t,e){return Ae(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Se=L.__private__.beginPage=function(t){et[++Bt]=[],Ot[Bt]={objId:0,contentsObjId:0,userUnit:Number(v),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(t[0]),topRightY:Number(t[1])}},Fe(Bt),at(et[Y])},Pe=function(t,e){var r,a,s;switch(i=e||i,"string"==typeof t&&(r=S(t.toLowerCase()),Array.isArray(r)&&(a=r[0],s=r[1])),Array.isArray(t)&&(a=t[0]*Nt,s=t[1]*Nt),isNaN(a)&&(a=o[0],s=o[1]),(a>14400||s>14400)&&(n.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),a=Math.min(14400,a),s=Math.min(14400,s)),o=[a,s],i.substr(0,1)){case"l":s>a&&(o=[s,a]);break;case"p":a>s&&(o=[s,a])}Se(o),on(an),ot(pn),0!==wn&&ot(wn+" J"),0!==Nn&&ot(Nn+" j"),Mt.publish("addPage",{pageNumber:Bt})},ke=function(t){t>0&&t<=Bt&&(et.splice(t,1),Ot.splice(t,1),Bt--,Y>Bt&&(Y=Bt),this.setPage(Y))},Fe=function(t){t>0&&t<=Bt&&(Y=t)},Ie=L.__private__.getNumberOfPages=L.getNumberOfPages=function(){return et.length-1},Ce=function(t,e,r){var i,a=void 0;return r=r||{},t=void 0!==t?t:_t[wt].fontName,e=void 0!==e?e:_t[wt].fontStyle,i=t.toLowerCase(),void 0!==St[i]&&void 0!==St[i][e]?a=St[i][e]:void 0!==St[t]&&void 0!==St[t][e]?a=St[t][e]:!1===r.disableWarning&&n.warn("Unable to look up font label for font '"+t+"', '"+e+"'. Refer to getFontList() for available fonts."),a||r.noFallback||null==(a=St.times[e])&&(a=St.times.normal),a},je=L.__private__.putInfo=function(){for(var t in Wt(),ot("<<"),ot("/Producer (jsPDF "+g.version+")"),yt)yt.hasOwnProperty(t)&&yt[t]&&ot("/"+t.substr(0,1).toUpperCase()+t.substr(1)+" ("+_e(yt[t])+")");ot("/CreationDate ("+T+")"),ot(">>"),ot("endobj")},Be=L.__private__.putCatalog=function(t){var e=(t=t||{}).rootDictionaryObjId||Jt;switch(Wt(),ot("<<"),ot("/Type /Catalog"),ot("/Pages "+e+" 0 R"),lt||(lt="fullwidth"),lt){case"fullwidth":ot("/OpenAction [3 0 R /FitH null]");break;case"fullheight":ot("/OpenAction [3 0 R /FitV null]");break;case"fullpage":ot("/OpenAction [3 0 R /Fit]");break;case"original":ot("/OpenAction [3 0 R /XYZ null null 1]");break;default:var n=""+lt;"%"===n.substr(n.length-1)&&(lt=parseInt(lt)/100),"number"==typeof lt&&ot("/OpenAction [3 0 R /XYZ null null "+O(lt)+"]")}switch(mt||(mt="continuous"),mt){case"continuous":ot("/PageLayout /OneColumn");break;case"single":ot("/PageLayout /SinglePage");break;case"two":case"twoleft":ot("/PageLayout /TwoColumnLeft");break;case"tworight":ot("/PageLayout /TwoColumnRight")}pt&&ot("/PageMode /"+pt),Mt.publish("putCatalog"),ot(">>"),ot("endobj")},Oe=L.__private__.putTrailer=function(){ot("trailer"),ot("<<"),ot("/Size "+(K+1)),ot("/Root "+K+" 0 R"),ot("/Info "+(K-1)+" 0 R"),ot("/ID [ <"+D+"> <"+D+"> ]"),ot(">>")},Me=L.__private__.putHeader=function(){ot("%PDF-"+x),ot("%ºß¬à")},Ee=L.__private__.putXRef=function(){var t="0000000000";ot("xref"),ot("0 "+(K+1)),ot("0000000000 65535 f ");for(var e=1;e<=K;e++){"function"==typeof Z[e]?ot((t+Z[e]()).slice(-10)+" 00000 n "):void 0!==Z[e]?ot((t+Z[e]).slice(-10)+" 00000 n "):ot("0000000000 00000 n ")}},qe=L.__private__.buildDocument=function(){it(),at($),Mt.publish("buildDocument"),Me(),ee(),ye(),be(),je(),Be();var t=Q;return Ee(),Oe(),ot("startxref"),ot(""+t),ot("%%EOF"),at(et[Y]),$.join("\n")},Re=L.__private__.getBlob=function(t){return new Blob([ut(t)],{type:"application/pdf"})},Te=L.output=L.__private__.output=xe((function(e,r){switch("string"==typeof(r=r||{})?r={filename:r}:r.filename=r.filename||"generated.pdf",e){case void 0:return qe();case"save":L.save(r.filename);break;case"arraybuffer":return ut(qe());case"blob":return Re(qe());case"bloburi":case"bloburl":if(void 0!==t.URL&&"function"==typeof t.URL.createObjectURL)return t.URL&&t.URL.createObjectURL(Re(qe()))||void 0;n.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var i="",a=qe();try{i=s(a)}catch(t){i=s(unescape(encodeURIComponent(a)))}return"data:application/pdf;filename="+r.filename+";base64,"+i;case"pdfobjectnewwindow":if("[object Window]"===Object.prototype.toString.call(t)){var o='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+(r.pdfObjectUrl||"https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js")+'"><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(r)+");<\/script></body></html>",u=t.open();return null!==u&&u.document.write(o),u}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if("[object Window]"===Object.prototype.toString.call(t)){var c='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(r.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+r.filename+'" width="500px" height="400px" /></body></html>',h=t.open();if(null!==h){h.document.write(c);var l=this;h.document.documentElement.querySelector("#pdfViewer").onload=function(){h.document.title=r.filename,h.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(l.output("bloburl"))}}return h}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if("[object Window]"!==Object.prototype.toString.call(t))throw new Error("The option dataurlnewwindow just works in a browser-environment.");var f='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",r)+'"></iframe></body></html>',d=t.open();if(null!==d&&(d.document.write(f),d.document.title=r.filename),d||"undefined"==typeof safari)return d;break;case"datauri":case"dataurl":return t.document.location.href=this.output("datauristring",r);default:return null}})),De=function(t){return!0===Array.isArray(Et)&&Et.indexOf(t)>-1};switch(a){case"pt":Nt=1;break;case"mm":Nt=72/25.4;break;case"cm":Nt=72/2.54;break;case"in":Nt=72;break;case"px":Nt=1==De("px_scaling")?.75:96/72;break;case"pc":case"em":Nt=12;break;case"ex":Nt=6;break;default:throw new Error("Invalid unit: "+a)}V(),z();var Ue=L.__private__.getPageInfo=L.getPageInfo=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:Ot[t].objId,pageNumber:t,pageContext:Ot[t]}},ze=L.__private__.getPageInfoByObjId=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var e in Ot)if(Ot[e].objId===t)break;return Ue(e)},He=L.__private__.getCurrentPageInfo=L.getCurrentPageInfo=function(){return{objId:Ot[Y].objId,pageNumber:Y,pageContext:Ot[Y]}};L.addPage=function(){return Pe.apply(this,arguments),this},L.setPage=function(){return Fe.apply(this,arguments),at.call(this,et[Y]),this},L.insertPage=function(t){return this.addPage(),this.movePage(Y,t),this},L.movePage=function(t,e){var n,r;if(t>e){n=et[t],r=Ot[t];for(var i=t;i>e;i--)et[i]=et[i-1],Ot[i]=Ot[i-1];et[e]=n,Ot[e]=r,this.setPage(e)}else if(t<e){n=et[t],r=Ot[t];for(var a=t;a<e;a++)et[a]=et[a+1],Ot[a]=Ot[a+1];et[e]=n,Ot[e]=r,this.setPage(e)}return this},L.deletePage=function(){return ke.apply(this,arguments),this},L.__private__.text=L.text=function(t,e,n,r,i){var a,o,s,u,c,h,l,f,d=(r=r||{}).scope||this;if("number"==typeof t&&"number"==typeof e&&("string"==typeof n||Array.isArray(n))){var p=n;n=e,e=t,t=p}if(arguments[3]instanceof Dt==!1?(s=arguments[4],u=arguments[5],"object"==typeof(l=arguments[3])&&null!==l||("string"==typeof s&&(u=s,s=null),"string"==typeof l&&(u=l,l=null),"number"==typeof l&&(s=l,l=null),r={flags:l,angle:s,align:u})):(j("The transform parameter of text() with a Matrix value"),f=i),isNaN(e)||isNaN(n)||null==t)throw new Error("Invalid arguments passed to jsPDF.text");if(0===t.length)return d;var g="",m=!1,v="number"==typeof r.lineHeightFactor?r.lineHeightFactor:rn,b=d.internal.scaleFactor;function y(t){return t=t.split("\t").join(Array(r.TabLen||9).join(" ")),_e(t,l)}function w(t){for(var e,n=t.concat(),r=[],i=n.length;i--;)"string"==typeof(e=n.shift())?r.push(e):Array.isArray(t)&&(1===e.length||void 0===e[1]&&void 0===e[2])?r.push(e[0]):r.push([e[0],e[1],e[2]]);return r}function L(t,e){var n;if("string"==typeof t)n=e(t)[0];else if(Array.isArray(t)){for(var r,i,a=t.concat(),o=[],s=a.length;s--;)"string"==typeof(r=a.shift())?o.push(e(r)[0]):Array.isArray(r)&&"string"==typeof r[0]&&(i=e(r[0],r[1],r[2]),o.push([i[0],i[1],i[2]]));n=o}return n}var x=!1,A=!0;if("string"==typeof t)x=!0;else if(Array.isArray(t)){var _=t.concat();o=[];for(var S,F=_.length;F--;)("string"!=typeof(S=_.shift())||Array.isArray(S)&&"string"!=typeof S[0])&&(A=!1);x=A}if(!1===x)throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');"string"==typeof t&&(t=t.match(/[\r?\n]/)?t.split(/\r\n|\r|\n/g):[t]);var I=ht/d.internal.scaleFactor,B=I*(rn-1);switch(r.baseline){case"bottom":n-=B;break;case"top":n+=I-B;break;case"hanging":n+=I-2*B;break;case"middle":n+=I/2-B}if((h=r.maxWidth||0)>0&&("string"==typeof t?t=d.splitTextToSize(t,h):"[object Array]"===Object.prototype.toString.call(t)&&(t=d.splitTextToSize(t.join(" "),h))),a={text:t,x:e,y:n,options:r,mutex:{pdfEscape:_e,activeFontKey:wt,fonts:_t,activeFontSize:ht}},Mt.publish("preProcessText",a),t=a.text,s=(r=a.options).angle,f instanceof Dt==!1&&s&&"number"==typeof s){s*=Math.PI/180,0===r.rotationDirection&&(s=-s),k===P.ADVANCED&&(s=-s);var O=Math.cos(s),M=Math.sin(s);f=new Dt(O,M,-M,O,0,0)}else s&&s instanceof Dt&&(f=s);k!==P.ADVANCED||f||(f=zt),void 0!==(c=r.charSpace||bn)&&(g+=C(E(c))+" Tc\n",this.setCharSpace(this.getCharSpace()||0));r.lang;var q=-1,R=void 0!==r.renderingMode?r.renderingMode:r.stroke,T=d.internal.getCurrentPageInfo().pageContext;switch(R){case 0:case!1:case"fill":q=0;break;case 1:case!0:case"stroke":q=1;break;case 2:case"fillThenStroke":q=2;break;case 3:case"invisible":q=3;break;case 4:case"fillAndAddForClipping":q=4;break;case 5:case"strokeAndAddPathForClipping":q=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":q=6;break;case 7:case"addToPathForClipping":q=7}var D=void 0!==T.usedRenderingMode?T.usedRenderingMode:-1;-1!==q?g+=q+" Tr\n":-1!==D&&(g+="0 Tr\n"),-1!==q&&(T.usedRenderingMode=q),u=r.align||"left";var U,z=ht*v,H=d.internal.pageSize.getWidth(),W=_t[wt];c=r.charSpace||bn,h=r.maxWidth||0,l={};var V=[];if("[object Array]"===Object.prototype.toString.call(t)){var G;o=w(t),"left"!==u&&(U=o.map((function(t){return d.getStringUnitWidth(t,{font:W,charSpace:c,fontSize:ht,doKerning:!1})*ht/b})));var Y,J=0;if("right"===u){e-=U[0],t=[],F=o.length;for(var X=0;X<F;X++)0===X?(Y=hn(e),G=ln(n)):(Y=E(J-U[X]),G=-z),t.push([o[X],Y,G]),J=U[X]}else if("center"===u){e-=U[0]/2,t=[],F=o.length;for(var K=0;K<F;K++)0===K?(Y=hn(e),G=ln(n)):(Y=E((J-U[K])/2),G=-z),t.push([o[K],Y,G]),J=U[K]}else if("left"===u){t=[],F=o.length;for(var Z=0;Z<F;Z++)t.push(o[Z])}else{if("justify"!==u)throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');t=[],F=o.length,h=0!==h?h:H;for(var $=0;$<F;$++)G=0===$?ln(n):-z,Y=0===$?hn(e):0,$<F-1&&V.push(C(E((h-U[$])/(o[$].split(" ").length-1)))),t.push([o[$],Y,G])}}var Q="boolean"==typeof r.R2L?r.R2L:dt;!0===Q&&(t=L(t,(function(t,e,n){return[t.split("").reverse().join(""),e,n]}))),a={text:t,x:e,y:n,options:r,mutex:{pdfEscape:_e,activeFontKey:wt,fonts:_t,activeFontSize:ht}},Mt.publish("postProcessText",a),t=a.text,m=a.mutex.isHex||!1;var tt=_t[wt].encoding;"WinAnsiEncoding"!==tt&&"StandardEncoding"!==tt||(t=L(t,(function(t,e,n){return[y(t),e,n]}))),o=w(t),t=[];for(var et,nt,rt,it=0,at=1,st=Array.isArray(o[0])?at:it,ut="",ct=function(t,e,n){var i="";return n instanceof Dt?(n="number"==typeof r.angle?Ut(n,new Dt(1,0,0,1,t,e)):Ut(new Dt(1,0,0,1,t,e),n),k===P.ADVANCED&&(n=Ut(new Dt(1,0,0,-1,0,0),n)),i=n.join(" ")+" Tm\n"):i=C(t)+" "+C(e)+" Td\n",i},lt=0;lt<o.length;lt++){switch(ut="",st){case at:rt=(m?"<":"(")+o[lt][0]+(m?">":")"),et=parseFloat(o[lt][1]),nt=parseFloat(o[lt][2]);break;case it:rt=(m?"<":"(")+o[lt]+(m?">":")"),et=hn(e),nt=ln(n)}void 0!==V&&void 0!==V[lt]&&(ut=V[lt]+" Tw\n"),0===lt?t.push(ut+ct(et,nt,f)+rt):st===it?t.push(ut+rt):st===at&&t.push(ut+ct(et,nt,f)+rt)}t=st===it?t.join(" Tj\nT* "):t.join(" Tj\n"),t+=" Tj\n";var ft="BT\n/";return ft+=wt+" "+ht+" Tf\n",ft+=C(ht*v)+" TL\n",ft+=mn+"\n",ft+=g,ft+=t,ot(ft+="ET"),N[wt]=!0,d};var We=L.__private__.clip=L.clip=function(t){return ot("evenodd"===t?"W*":"W"),this};L.clipEvenOdd=function(){return We("evenodd")},L.__private__.discardPath=L.discardPath=function(){return ot("n"),this};var Ve=L.__private__.isValidStyle=function(t){var e=!1;return-1!==[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(t)&&(e=!0),e};L.__private__.setDefaultPathOperation=L.setDefaultPathOperation=function(t){return Ve(t)&&(y=t),this};var Ge=L.__private__.getStyle=L.getStyle=function(t){var e=y;switch(t){case"D":case"S":e="S";break;case"F":e="f";break;case"FD":case"DF":e="B";break;case"f":case"f*":case"B":case"B*":e=t}return e},Ye=L.close=function(){return ot("h"),this};L.stroke=function(){return ot("S"),this},L.fill=function(t){return Je("f",t),this},L.fillEvenOdd=function(t){return Je("f*",t),this},L.fillStroke=function(t){return Je("B",t),this},L.fillStrokeEvenOdd=function(t){return Je("B*",t),this};var Je=function(t,e){"object"==typeof e?Ze(e,t):ot(t)},Xe=function(t){null===t||k===P.ADVANCED&&void 0===t||(t=Ge(t),ot(t))};function Ke(t,e,n,r,i){var a=new p(e||this.boundingBox,n||this.xStep,r||this.yStep,this.gState,i||this.matrix);a.stream=this.stream;var o=t+"$$"+this.cloneIndex+++"$$";return Ht(o,a),a}var Ze=function(t,e){var n=Ft[t.key],r=kt[n];if(r instanceof d)ot("q"),ot($e(e)),r.gState&&L.setGState(r.gState),ot(t.matrix.toString()+" cm"),ot("/"+n+" sh"),ot("Q");else if(r instanceof p){var i=new Dt(1,0,0,-1,0,Cn());t.matrix&&(i=i.multiply(t.matrix||zt),n=Ke.call(r,t.key,t.boundingBox,t.xStep,t.yStep,i).id),ot("q"),ot("/Pattern cs"),ot("/"+n+" scn"),r.gState&&L.setGState(r.gState),ot(e),ot("Q")}},$e=function(t){switch(t){case"f":case"F":return"W n";case"f*":return"W* n";case"B":return"W S";case"B*":return"W* S";case"S":return"W S";case"n":return"W n"}},Qe=L.moveTo=function(t,e){return ot(C(E(t))+" "+C(R(e))+" m"),this},tn=L.lineTo=function(t,e){return ot(C(E(t))+" "+C(R(e))+" l"),this},en=L.curveTo=function(t,e,n,r,i,a){return ot([C(E(t)),C(R(e)),C(E(n)),C(R(r)),C(E(i)),C(R(a)),"c"].join(" ")),this};L.__private__.line=L.line=function(t,e,n,r,i){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||!Ve(i))throw new Error("Invalid arguments passed to jsPDF.line");return k===P.COMPAT?this.lines([[n-t,r-e]],t,e,[1,1],i||"S"):this.lines([[n-t,r-e]],t,e,[1,1]).stroke()},L.__private__.lines=L.lines=function(t,e,n,r,i,a){var o,s,u,c,h,l,f,d,p,g,m,v;if("number"==typeof t&&(v=n,n=e,e=t,t=v),r=r||[1,1],a=a||!1,isNaN(e)||isNaN(n)||!Array.isArray(t)||!Array.isArray(r)||!Ve(i)||"boolean"!=typeof a)throw new Error("Invalid arguments passed to jsPDF.lines");for(Qe(e,n),o=r[0],s=r[1],c=t.length,g=e,m=n,u=0;u<c;u++)2===(h=t[u]).length?(g=h[0]*o+g,m=h[1]*s+m,tn(g,m)):(l=h[0]*o+g,f=h[1]*s+m,d=h[2]*o+g,p=h[3]*s+m,g=h[4]*o+g,m=h[5]*s+m,en(l,f,d,p,g,m));return a&&Ye(),Xe(i),this},L.path=function(t){for(var e=0;e<t.length;e++){var n=t[e],r=n.c;switch(n.op){case"m":Qe(r[0],r[1]);break;case"l":tn(r[0],r[1]);break;case"c":en.apply(this,r);break;case"h":Ye()}}return this},L.__private__.rect=L.rect=function(t,e,n,r,i){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||!Ve(i))throw new Error("Invalid arguments passed to jsPDF.rect");return k===P.COMPAT&&(r=-r),ot([C(E(t)),C(R(e)),C(E(n)),C(E(r)),"re"].join(" ")),Xe(i),this},L.__private__.triangle=L.triangle=function(t,e,n,r,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a)||!Ve(o))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[n-t,r-e],[i-n,a-r],[t-i,e-a]],t,e,[1,1],o,!0),this},L.__private__.roundedRect=L.roundedRect=function(t,e,n,r,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a)||!Ve(o))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var s=4/3*(Math.SQRT2-1);return i=Math.min(i,.5*n),a=Math.min(a,.5*r),this.lines([[n-2*i,0],[i*s,0,i,a-a*s,i,a],[0,r-2*a],[0,a*s,-i*s,a,-i,a],[2*i-n,0],[-i*s,0,-i,-a*s,-i,-a],[0,2*a-r],[0,-a*s,i*s,-a,i,-a]],t+i,e,[1,1],o,!0),this},L.__private__.ellipse=L.ellipse=function(t,e,n,r,i){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||!Ve(i))throw new Error("Invalid arguments passed to jsPDF.ellipse");var a=4/3*(Math.SQRT2-1)*n,o=4/3*(Math.SQRT2-1)*r;return Qe(t+n,e),en(t+n,e-o,t+a,e-r,t,e-r),en(t-a,e-r,t-n,e-o,t-n,e),en(t-n,e+o,t-a,e+r,t,e+r),en(t+a,e+r,t+n,e+o,t+n,e),Xe(i),this},L.__private__.circle=L.circle=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||!Ve(r))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(t,e,n,n,r)},L.setFont=function(t,e){return wt=Ce(t,e,{disableWarning:!1}),this};var nn=L.__private__.getFont=L.getFont=function(){return _t[Ce.apply(L,arguments)]};L.__private__.getFontList=L.getFontList=function(){var t,e,n={};for(t in St)if(St.hasOwnProperty(t))for(e in n[t]=[],St[t])St[t].hasOwnProperty(e)&&n[t].push(e);return n},L.addFont=function(t,e,n,r){return r=r||"Identity-H",Ne.call(this,t,e,n,r)};var rn,an=e.lineWidth||.200025,on=L.__private__.setLineWidth=L.setLineWidth=function(t){return ot(C(E(t))+" w"),this};L.__private__.setLineDash=g.API.setLineDash=g.API.setLineDashPattern=function(t,e){if(t=t||[],e=e||0,isNaN(e)||!Array.isArray(t))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return t=t.map((function(t){return C(E(t))})).join(" "),e=C(E(e)),ot("["+t+"] "+e+" d"),this};var sn=L.__private__.getLineHeight=L.getLineHeight=function(){return ht*rn};L.__private__.getLineHeight=L.getLineHeight=function(){return ht*rn};var un=L.__private__.setLineHeightFactor=L.setLineHeightFactor=function(t){return"number"==typeof(t=t||1.15)&&(rn=t),this},cn=L.__private__.getLineHeightFactor=L.getLineHeightFactor=function(){return rn};un(e.lineHeight);var hn=L.__private__.getHorizontalCoordinate=function(t){return E(t)},ln=L.__private__.getVerticalCoordinate=function(t){return k===P.ADVANCED?t:Ot[Y].mediaBox.topRightY-Ot[Y].mediaBox.bottomLeftY-E(t)},fn=L.__private__.getHorizontalCoordinateString=L.getHorizontalCoordinateString=function(t){return C(hn(t))},dn=L.__private__.getVerticalCoordinateString=L.getVerticalCoordinateString=function(t){return C(ln(t))},pn=e.strokeColor||"0 G";L.__private__.getStrokeColor=L.getDrawColor=function(){return Kt(pn)},L.__private__.setStrokeColor=L.setDrawColor=function(t,e,n,r){return pn=Zt({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"draw",precision:2}),ot(pn),this};var gn=e.fillColor||"0 g";L.__private__.getFillColor=L.getFillColor=function(){return Kt(gn)},L.__private__.setFillColor=L.setFillColor=function(t,e,n,r){return gn=Zt({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"fill",precision:2}),ot(gn),this};var mn=e.textColor||"0 g",vn=L.__private__.getTextColor=L.getTextColor=function(){return Kt(mn)};L.__private__.setTextColor=L.setTextColor=function(t,e,n,r){return mn=Zt({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"text",precision:3}),this};var bn=e.charSpace,yn=L.__private__.getCharSpace=L.getCharSpace=function(){return parseFloat(bn||0)};L.__private__.setCharSpace=L.setCharSpace=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return bn=t,this};var wn=0;L.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},L.__private__.setLineCap=L.setLineCap=function(t){var e=L.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return wn=e,ot(e+" J"),this};var Nn=0;L.__private__.setLineJoin=L.setLineJoin=function(t){var e=L.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Nn=e,ot(e+" j"),this},L.__private__.setLineMiterLimit=L.__private__.setMiterLimit=L.setLineMiterLimit=L.setMiterLimit=function(t){if(t=t||0,isNaN(t))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return ot(C(E(t))+" M"),this},L.GState=l,L.setGState=function(t){(t="string"==typeof t?It[Ct[t]]:Ln(null,t)).equals(jt)||(ot("/"+t.id+" gs"),jt=t)};var Ln=function(t,e){if(!t||!Ct[t]){var n=!1;for(var r in It)if(It.hasOwnProperty(r)&&It[r].equals(e)){n=!0;break}if(n)e=It[r];else{var i="GS"+(Object.keys(It).length+1).toString(10);It[i]=e,e.id=i}return t&&(Ct[t]=e.id),Mt.publish("addGState",e),e}};L.addGState=function(t,e){return Ln(t,e),this},L.saveGraphicsState=function(){return ot("q"),Pt.push({key:wt,size:ht,color:mn}),this},L.restoreGraphicsState=function(){ot("Q");var t=Pt.pop();return wt=t.key,ht=t.size,mn=t.color,jt=null,this},L.setCurrentTransformationMatrix=function(t){return ot(t.toString()+" cm"),this},L.comment=function(t){return ot("#"+t),this};var xn=function(t,e){var n=t||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return n},set:function(t){isNaN(t)||(n=parseFloat(t))}});var r=e||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return r},set:function(t){isNaN(t)||(r=parseFloat(t))}});var i="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return i},set:function(t){i=t.toString()}}),this},An=function(t,e,n,r){xn.call(this,t,e),this.type="rect";var i=n||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return i},set:function(t){isNaN(t)||(i=parseFloat(t))}});var a=r||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return a},set:function(t){isNaN(t)||(a=parseFloat(t))}}),this},_n=function(){this.page=Bt,this.currentPage=Y,this.pages=et.slice(0),this.pagesContext=Ot.slice(0),this.x=Lt,this.y=xt,this.matrix=At,this.width=Fn(Y),this.height=Cn(Y),this.outputDestination=rt,this.id="",this.objectNumber=-1};_n.prototype.restore=function(){Bt=this.page,Y=this.currentPage,Ot=this.pagesContext,et=this.pages,Lt=this.x,xt=this.y,At=this.matrix,In(Y,this.width),jn(Y,this.height),rt=this.outputDestination};var Sn=function(t,e,n,r,i){Tt.push(new _n),Bt=Y=0,et=[],Lt=t,xt=e,At=i,Se([n,r])},Pn=function(t){if(!Rt[t]){var e=new _n,n="Xo"+(Object.keys(qt).length+1).toString(10);e.id=n,Rt[t]=n,qt[n]=e,Mt.publish("addFormObject",e),Tt.pop().restore()}};for(var kn in L.beginFormObject=function(t,e,n,r,i){return Sn(t,e,n,r,i),this},L.endFormObject=function(t){return Pn(t),this},L.doFormObject=function(t,e){var n=qt[Rt[t]];return ot("q"),ot(e.toString()+" cm"),ot("/"+n.id+" Do"),ot("Q"),this},L.getFormObject=function(t){var e=qt[Rt[t]];return{x:e.x,y:e.y,width:e.width,height:e.height,matrix:e.matrix}},L.save=function(e,n){return e=e||"generated.pdf",(n=n||{}).returnPromise=n.returnPromise||!1,!1===n.returnPromise?(u(Re(qe()),e),"function"==typeof u.unload&&t.setTimeout&&setTimeout(u.unload,911),this):new Promise((function(n,r){try{var i=u(Re(qe()),e);"function"==typeof u.unload&&t.setTimeout&&setTimeout(u.unload,911),n(i)}catch(t){r(t.message)}}))},g.API)g.API.hasOwnProperty(kn)&&("events"===kn&&g.API.events.length?function(t,e){var n,r,i;for(i=e.length-1;-1!==i;i--)n=e[i][0],r=e[i][1],t.subscribe.apply(t,[n].concat("function"==typeof r?[r]:r))}(Mt,g.API.events):L[kn]=g.API[kn]);var Fn=L.getPageWidth=function(t){return(Ot[t=t||Y].mediaBox.topRightX-Ot[t].mediaBox.bottomLeftX)/Nt},In=L.setPageWidth=function(t,e){Ot[t].mediaBox.topRightX=e*Nt+Ot[t].mediaBox.bottomLeftX},Cn=L.getPageHeight=function(t){return(Ot[t=t||Y].mediaBox.topRightY-Ot[t].mediaBox.bottomLeftY)/Nt},jn=L.setPageHeight=function(t,e){Ot[t].mediaBox.topRightY=e*Nt+Ot[t].mediaBox.bottomLeftY};return L.internal={pdfEscape:_e,getStyle:Ge,getFont:nn,getFontSize:ft,getCharSpace:yn,getTextColor:vn,getLineHeight:sn,getLineHeightFactor:cn,write:st,getHorizontalCoordinate:hn,getVerticalCoordinate:ln,getCoordinateString:fn,getVerticalCoordinateString:dn,collections:{},newObject:Wt,newAdditionalObject:Yt,newObjectDeferred:Vt,newObjectDeferredBegin:Gt,getFilters:$t,putStream:Qt,events:Mt,scaleFactor:Nt,pageSize:{getWidth:function(){return Fn(Y)},setWidth:function(t){In(Y,t)},getHeight:function(){return Cn(Y)},setHeight:function(t){jn(Y,t)}},output:Te,getNumberOfPages:Ie,pages:et,out:ot,f2:O,f3:M,getPageInfo:Ue,getPageInfoByObjId:ze,getCurrentPageInfo:He,getPDFVersion:A,Point:xn,Rectangle:An,Matrix:Dt,hasHotfix:De},Object.defineProperty(L.internal.pageSize,"width",{get:function(){return Fn(Y)},set:function(t){In(Y,t)},enumerable:!0,configurable:!0}),Object.defineProperty(L.internal.pageSize,"height",{get:function(){return Cn(Y)},set:function(t){jn(Y,t)},enumerable:!0,configurable:!0}),Le.call(L,ct),wt="F1",Pe(o,i),Mt.publish("initialized"),L}o=t.atob,s=t.btoa,l.prototype.equals=function(t){var e,n="id,objectNumber,equals";if(!t||typeof t!=typeof this)return!1;var r=0;for(e in this)if(!(n.indexOf(e)>=0)){if(this.hasOwnProperty(e)&&!t.hasOwnProperty(e))return!1;if(this[e]!==t[e])return!1;r++}for(e in t)t.hasOwnProperty(e)&&n.indexOf(e)<0&&r--;return 0===r},g.API={events:[]},g.version="2.1.1";var m,v=g.API,b=1,y=function(t){return t.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},w=function(t){return t.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},N=function(t){return t.toFixed(2)},L=function(t){return t.toFixed(5)};v.__acroform__={};var x=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},A=function(t){return t*b},_=function(t){var e=new J,n=ut.internal.getHeight(t)||0,r=ut.internal.getWidth(t)||0;return e.BBox=[0,0,Number(N(r)),Number(N(n))],e},S=v.__acroform__.setBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return t|=1<<e},P=v.__acroform__.clearBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return t&=~(1<<e)},k=v.__acroform__.getBit=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return 0==(t&1<<e)?0:1},F=v.__acroform__.getBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return k(t,e-1)},I=v.__acroform__.setBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return S(t,e-1)},C=v.__acroform__.clearBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return P(t,e-1)},j=v.__acroform__.calculateCoordinates=function(t){var e=this.internal.getHorizontalCoordinate,n=this.internal.getVerticalCoordinate,r=t[0],i=t[1],a=t[2],o=t[3],s={};return s.lowerLeft_X=e(r)||0,s.lowerLeft_Y=n(i+o)||0,s.upperRight_X=e(r+a)||0,s.upperRight_Y=n(i)||0,[Number(N(s.lowerLeft_X)),Number(N(s.lowerLeft_Y)),Number(N(s.upperRight_X)),Number(N(s.upperRight_Y))]},B=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e=[],n=t.V||t.DV,r=O(t,n),i=m.internal.getFont(t.fontName,t.fontStyle).id;e.push("/Tx BMC"),e.push("q"),e.push("BT"),e.push(m.__private__.encodeColorString(t.color)),e.push("/"+i+" "+N(r.fontSize)+" Tf"),e.push("1 0 0 1 0 0 Tm"),e.push(r.text),e.push("ET"),e.push("Q"),e.push("EMC");var a=new _(t);return a.stream=e.join("\n"),a}},O=function(t,e){var n=0===t.fontSize?t.maxFontSize:t.fontSize,r={text:"",fontSize:""},i=(e=")"==(e="("==e.substr(0,1)?e.substr(1):e).substr(e.length-1)?e.substr(0,e.length-1):e).split(" "),a=n,o=ut.internal.getHeight(t)||0;o=o<0?-o:o;var s=ut.internal.getWidth(t)||0;s=s<0?-s:s;var u=function(e,n,r){if(e+1<i.length){var a=n+" "+i[e+1];return M(a,t,r).width<=s-4}return!1};a++;t:for(;a>0;){e="",a--;var c,h,l=M("3",t,a).height,f=t.multiline?o-a:(o-l)/2,d=f+=2,p=0,g=0;if(a<=0){e="(...) Tj\n",e+="% Width of Text: "+M(e,t,a=12).width+", FieldWidth:"+s+"\n";break}var m="",v=0;for(var b in i)if(i.hasOwnProperty(b)){m=" "==(m+=i[b]+" ").substr(m.length-1)?m.substr(0,m.length-1):m;var w=parseInt(b),L=u(w,m,a),x=b>=i.length-1;if(L&&!x){m+=" ";continue}if(L||x){if(x)g=w;else if(t.multiline&&(l+2)*(v+2)+2>o)continue t}else{if(!t.multiline)continue t;if((l+2)*(v+2)+2>o)continue t;g=w}for(var A="",_=p;_<=g;_++)A+=i[_]+" ";switch(A=" "==A.substr(A.length-1)?A.substr(0,A.length-1):A,h=M(A,t,a).width,t.textAlign){case"right":c=s-h-2;break;case"center":c=(s-h)/2;break;case"left":default:c=2}e+=N(c)+" "+N(d)+" Td\n",e+="("+y(A)+") Tj\n",e+=-N(c)+" 0 Td\n",d=-(a+2),h=0,p=g+1,v++,m=""}else;break}return r.text=e,r.fontSize=a,r},M=function(t,e,n){var r=m.internal.getFont(e.fontName,e.fontStyle),i=m.getStringUnitWidth(t,{font:r,fontSize:parseFloat(n),charSpace:0})*parseFloat(n);return{height:m.getStringUnitWidth("3",{font:r,fontSize:parseFloat(n),charSpace:0})*parseFloat(n)*1.5,width:i}},E={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},q=function(){m.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var t=m.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var e in t)if(t.hasOwnProperty(e)){var n=t[e];n.objId=void 0,n.hasAnnotation&&T.call(m,n)}},R=function(t){m.internal.acroformPlugin.printedOut&&(m.internal.acroformPlugin.printedOut=!1,m.internal.acroformPlugin.acroFormDictionaryRoot=null),m.internal.acroformPlugin.acroFormDictionaryRoot||W.call(m),m.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t)},T=function(t){var e={type:"reference",object:t};void 0===m.internal.getPageInfo(t.page).pageContext.annotations.find((function(t){return t.type===e.type&&t.object===e.object}))&&m.internal.getPageInfo(t.page).pageContext.annotations.push(e)},D=function(){if(void 0===m.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("putCatalogCallback: Root missing.");m.internal.write("/AcroForm "+m.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")},U=function(){m.internal.events.unsubscribe(m.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete m.internal.acroformPlugin.acroFormDictionaryRoot._eventID,m.internal.acroformPlugin.printedOut=!0},z=function(t){var e=!t;for(var n in t||(m.internal.newObjectDeferredBegin(m.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),m.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),t=t||m.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(t.hasOwnProperty(n)){var r=t[n],i=[],a=r.Rect;if(r.Rect&&(r.Rect=j.call(this,r.Rect)),m.internal.newObjectDeferredBegin(r.objId,!0),r.DA=ut.createDefaultAppearanceStream(r),"object"==typeof r&&"function"==typeof r.getKeyValueListForStream&&(i=r.getKeyValueListForStream()),r.Rect=a,r.hasAppearanceStream&&!r.appearanceStreamContent){var o=B.call(this,r);i.push({key:"AP",value:"<</N "+o+">>"}),m.internal.acroformPlugin.xForms.push(o)}if(r.appearanceStreamContent){var s="";for(var u in r.appearanceStreamContent)if(r.appearanceStreamContent.hasOwnProperty(u)){var c=r.appearanceStreamContent[u];if(s+="/"+u+" ",s+="<<",Object.keys(c).length>=1||Array.isArray(c)){for(var n in c)if(c.hasOwnProperty(n)){var h=c[n];"function"==typeof h&&(h=h.call(this,r)),s+="/"+n+" "+h+" ",m.internal.acroformPlugin.xForms.indexOf(h)>=0||m.internal.acroformPlugin.xForms.push(h)}}else"function"==typeof(h=c)&&(h=h.call(this,r)),s+="/"+n+" "+h,m.internal.acroformPlugin.xForms.indexOf(h)>=0||m.internal.acroformPlugin.xForms.push(h);s+=">>"}i.push({key:"AP",value:"<<\n"+s+">>"})}m.internal.putStream({additionalKeyValues:i}),m.internal.out("endobj")}e&&H.call(this,m.internal.acroformPlugin.xForms)},H=function(t){for(var e in t)if(t.hasOwnProperty(e)){var n=e,r=t[e];m.internal.newObjectDeferredBegin(r&&r.objId,!0),"object"==typeof r&&"function"==typeof r.putStream&&r.putStream(),delete t[n]}},W=function(){if(void 0!==this.internal&&(void 0===this.internal.acroformPlugin||!1===this.internal.acroformPlugin.isInitialized)){if(m=this,K.FieldNum=0,this.internal.acroformPlugin=JSON.parse(JSON.stringify(E)),this.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");b=m.internal.scaleFactor,m.internal.acroformPlugin.acroFormDictionaryRoot=new X,m.internal.acroformPlugin.acroFormDictionaryRoot._eventID=m.internal.events.subscribe("postPutResources",U),m.internal.events.subscribe("buildDocument",q),m.internal.events.subscribe("putCatalog",D),m.internal.events.subscribe("postPutPages",z),m.internal.acroformPlugin.isInitialized=!0}},V=v.__acroform__.arrayToPdfArray=function(t){if(Array.isArray(t)){for(var e="[",n=0;n<t.length;n++)switch(0!==n&&(e+=" "),typeof t[n]){case"boolean":case"number":case"object":e+=t[n].toString();break;case"string":"/"!==t[n].substr(0,1)?e+="("+y(t[n].toString())+")":e+=t[n].toString()}return e+="]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")};var G=function(t){return(t=t||"").toString(),t="("+y(t)+")"},Y=function(){var t;Object.defineProperty(this,"objId",{configurable:!0,get:function(){return t||(t=m.internal.newObjectDeferred()),t},set:function(e){t=e}})};Y.prototype.toString=function(){return this.objId+" 0 R"},Y.prototype.putStream=function(){var t=this.getKeyValueListForStream();m.internal.putStream({data:this.stream,additionalKeyValues:t}),m.internal.out("endobj")},Y.prototype.getKeyValueListForStream=function(){return function(t){var e=[],n=Object.getOwnPropertyNames(t).filter((function(t){return"content"!=t&&"appearanceStreamContent"!=t&&"_"!=t.substring(0,1)}));for(var r in n)if(!1===Object.getOwnPropertyDescriptor(t,n[r]).configurable){var i=n[r],a=t[i];a&&(Array.isArray(a)?e.push({key:i,value:V(a)}):a instanceof Y?e.push({key:i,value:a.objId+" 0 R"}):"function"!=typeof a&&e.push({key:i,value:a}))}return e}(this)};var J=function(){Y.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writeable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writeable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writeable:!0});var t,e=[];Object.defineProperty(this,"BBox",{configurable:!1,writeable:!0,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writeable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(e){t=e.trim()},get:function(){return t||null}})};x(J,Y);var X=function(){Y.call(this);var t,e=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return e.length>0?e:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return e}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(t)return"("+t+")"},set:function(e){t=e}})};x(X,Y);var K=function(){Y.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(e){if(isNaN(e))throw new Error('Invalid value "'+e+'" for attribute F supplied.');t=e}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(t,3))},set:function(e){!0===Boolean(e)?this.F=I(t,3):this.F=C(t,3)}});var e=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute Ff supplied.');e=t}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(0!==n.length)return n},set:function(t){n=void 0!==t?t:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(t){n[0]=t}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(t){n[1]=t}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(t){n[2]=t}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(t){n[3]=t}});var r="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return r},set:function(t){switch(t){case"/Btn":case"/Tx":case"/Ch":case"/Sig":r=t;break;default:throw new Error('Invalid value "'+t+'" for attribute FT supplied.')}}});var i=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!i||i.length<1){if(this instanceof it)return;i="FieldObject"+K.FieldNum++}return"("+y(i)+")"},set:function(t){i=t.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return i},set:function(t){i=t}});var a="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return a},set:function(t){a=t}});var o="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return o},set:function(t){o=t}});var s=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return s},set:function(t){s=t}});var u=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return void 0===u?50/b:u},set:function(t){u=t}});var c="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return c},set:function(t){c=t}});var h="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!h||this instanceof it||this instanceof ot))return G(h)},set:function(t){t=t.toString(),h=t}});var l=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(l)return this instanceof et==!1?G(l):l},set:function(t){t=t.toString(),l=this instanceof et==!1?"("===t.substr(0,1)?w(t.substr(1,t.length-2)):w(t):t}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof et==!0?w(l.substr(1,l.length-1)):l},set:function(t){t=t.toString(),l=this instanceof et==!0?"/"+t:t}});var f=null;Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(f)return this instanceof et==!1?G(f):f},set:function(t){t=t.toString(),f=this instanceof et==!1?"("===t.substr(0,1)?w(t.substr(1,t.length-2)):w(t):t}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof et==!0?w(f.substr(1,f.length-1)):f},set:function(t){t=t.toString(),f=this instanceof et==!0?"/"+t:t}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var d,p=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,writeable:!0,get:function(){return p},set:function(t){t=Boolean(t),p=t}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writeable:!0,get:function(){if(d)return d},set:function(t){d=t}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,1))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,1):this.Ff=C(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,2))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,2):this.Ff=C(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,3))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,3):this.Ff=C(this.Ff,3)}});var g=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(null!==g)return g},set:function(t){if(-1===[0,1,2].indexOf(t))throw new Error('Invalid value "'+t+'" for attribute Q supplied.');g=t}}),Object.defineProperty(this,"textAlign",{get:function(){var t;switch(g){case 0:default:t="left";break;case 1:t="center";break;case 2:t="right"}return t},configurable:!0,enumerable:!0,set:function(t){switch(t){case"right":case 2:g=2;break;case"center":case 1:g=1;break;case"left":case 0:default:g=0}}})};x(K,Y);var Z=function(){K.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var t=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return t},set:function(e){t=e}});var e=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return V(e)},set:function(t){var n,r;r=[],"string"==typeof(n=t)&&(r=function(t,e,n){n||(n=1);for(var r,i=[];r=e.exec(t);)i.push(r[n]);return i}(n,/\((.*?)\)/g)),e=r}}),this.getOptions=function(){return e},this.setOptions=function(t){e=t,this.sort&&e.sort()},this.addOption=function(t){t=(t=t||"").toString(),e.push(t),this.sort&&e.sort()},this.removeOption=function(t,n){for(n=n||!1,t=(t=t||"").toString();-1!==e.indexOf(t)&&(e.splice(e.indexOf(t),1),!1!==n););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,18))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,18):this.Ff=C(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,19))},set:function(t){!0===this.combo&&(!0===Boolean(t)?this.Ff=I(this.Ff,19):this.Ff=C(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,20))},set:function(t){!0===Boolean(t)?(this.Ff=I(this.Ff,20),e.sort()):this.Ff=C(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,22))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,22):this.Ff=C(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,23):this.Ff=C(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,27))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,27):this.Ff=C(this.Ff,27)}}),this.hasAppearanceStream=!1};x(Z,K);var $=function(){Z.call(this),this.fontName="helvetica",this.combo=!1};x($,Z);var Q=function(){$.call(this),this.combo=!0};x(Q,$);var tt=function(){Q.call(this),this.edit=!0};x(tt,Q);var et=function(){K.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,15))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,15):this.Ff=C(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,16))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,16):this.Ff=C(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,17))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,17):this.Ff=C(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,26):this.Ff=C(this.Ff,26)}});var t,e={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){if(0!==Object.keys(e).length){var t,n=[];for(t in n.push("<<"),e)n.push("/"+t+" ("+e[t]+")");return n.push(">>"),n.join("\n")}},set:function(t){"object"==typeof t&&(e=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return e.CA||""},set:function(t){"string"==typeof t&&(e.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return t.substr(1,t.length-1)},set:function(e){t="/"+e}})};x(et,K);var nt=function(){et.call(this),this.pushButton=!0};x(nt,et);var rt=function(){et.call(this),this.radio=!0,this.pushButton=!1;var t=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=void 0!==e?e:[]}})};x(rt,et);var it=function(){var t,e;K.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return e},set:function(t){e=t}});var n,r={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var t,e=[];for(t in e.push("<<"),r)e.push("/"+t+" ("+r[t]+")");return e.push(">>"),e.join("\n")},set:function(t){"object"==typeof t&&(r=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return r.CA||""},set:function(t){"string"==typeof t&&(r.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return n},set:function(t){n=t}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return n.substr(1,n.length-1)},set:function(t){n="/"+t}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=ut.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};x(it,K),rt.prototype.setAppearance=function(t){if(!("createAppearanceStream"in t)||!("getCA"in t))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var e in this.Kids)if(this.Kids.hasOwnProperty(e)){var n=this.Kids[e];n.appearanceStreamContent=t.createAppearanceStream(n.optionName),n.caption=t.getCA()}},rt.prototype.createOption=function(t){var e=new it;return e.Parent=this,e.optionName=t,this.Kids.push(e),ct.call(this,e),e};var at=function(){et.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=ut.CheckBox.createAppearanceStream()};x(at,et);var ot=function(){K.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,13))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,13):this.Ff=C(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,21))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,21):this.Ff=C(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,23):this.Ff=C(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,24))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,24):this.Ff=C(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,25))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,25):this.Ff=C(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,26):this.Ff=C(this.Ff,26)}});var t=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return t},set:function(e){Number.isInteger(e)&&(t=e)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};x(ot,K);var st=function(){ot.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return Boolean(F(this.Ff,14))},set:function(t){!0===Boolean(t)?this.Ff=I(this.Ff,14):this.Ff=C(this.Ff,14)}}),this.password=!0};x(st,ot);var ut={CheckBox:{createAppearanceStream:function(){return{N:{On:ut.CheckBox.YesNormal},D:{On:ut.CheckBox.YesPushDown,Off:ut.CheckBox.OffPushDown}}},YesPushDown:function(t){var e=new _(t),n=[],r=m.internal.getFont(t.fontName,t.fontStyle).id,i=m.__private__.encodeColorString(t.color),a=O(t,t.caption);return n.push("0.749023 g"),n.push("0 0 "+N(ut.internal.getWidth(t))+" "+N(ut.internal.getHeight(t))+" re"),n.push("f"),n.push("BMC"),n.push("q"),n.push("0 0 1 rg"),n.push("/"+r+" "+N(a.fontSize)+" Tf "+i),n.push("BT"),n.push(a.text),n.push("ET"),n.push("Q"),n.push("EMC"),e.stream=n.join("\n"),e},YesNormal:function(t){var e=new _(t),n=m.internal.getFont(t.fontName,t.fontStyle).id,r=m.__private__.encodeColorString(t.color),i=[],a=ut.internal.getHeight(t),o=ut.internal.getWidth(t),s=O(t,t.caption);return i.push("1 g"),i.push("0 0 "+N(o)+" "+N(a)+" re"),i.push("f"),i.push("q"),i.push("0 0 1 rg"),i.push("0 0 "+N(o-1)+" "+N(a-1)+" re"),i.push("W"),i.push("n"),i.push("0 g"),i.push("BT"),i.push("/"+n+" "+N(s.fontSize)+" Tf "+r),i.push(s.text),i.push("ET"),i.push("Q"),e.stream=i.join("\n"),e},OffPushDown:function(t){var e=new _(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+N(ut.internal.getWidth(t))+" "+N(ut.internal.getHeight(t))+" re"),n.push("f"),e.stream=n.join("\n"),e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:ut.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=ut.RadioButton.Circle.YesNormal,e.D[t]=ut.RadioButton.Circle.YesPushDown,e},getCA:function(){return"l"},YesNormal:function(t){var e=new _(t),n=[],r=ut.internal.getWidth(t)<=ut.internal.getHeight(t)?ut.internal.getWidth(t)/4:ut.internal.getHeight(t)/4;r=Number((.9*r).toFixed(5));var i=ut.internal.Bezier_C,a=Number((r*i).toFixed(5));return n.push("q"),n.push("1 0 0 1 "+L(ut.internal.getWidth(t)/2)+" "+L(ut.internal.getHeight(t)/2)+" cm"),n.push(r+" 0 m"),n.push(r+" "+a+" "+a+" "+r+" 0 "+r+" c"),n.push("-"+a+" "+r+" -"+r+" "+a+" -"+r+" 0 c"),n.push("-"+r+" -"+a+" -"+a+" -"+r+" 0 -"+r+" c"),n.push(a+" -"+r+" "+r+" -"+a+" "+r+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e},YesPushDown:function(t){var e=new _(t),n=[],r=ut.internal.getWidth(t)<=ut.internal.getHeight(t)?ut.internal.getWidth(t)/4:ut.internal.getHeight(t)/4,i=(r=Number((.9*r).toFixed(5)),Number((2*r).toFixed(5))),a=Number((i*ut.internal.Bezier_C).toFixed(5)),o=Number((r*ut.internal.Bezier_C).toFixed(5));return n.push("0.749023 g"),n.push("q"),n.push("1 0 0 1 "+L(ut.internal.getWidth(t)/2)+" "+L(ut.internal.getHeight(t)/2)+" cm"),n.push(i+" 0 m"),n.push(i+" "+a+" "+a+" "+i+" 0 "+i+" c"),n.push("-"+a+" "+i+" -"+i+" "+a+" -"+i+" 0 c"),n.push("-"+i+" -"+a+" -"+a+" -"+i+" 0 -"+i+" c"),n.push(a+" -"+i+" "+i+" -"+a+" "+i+" 0 c"),n.push("f"),n.push("Q"),n.push("0 g"),n.push("q"),n.push("1 0 0 1 "+L(ut.internal.getWidth(t)/2)+" "+L(ut.internal.getHeight(t)/2)+" cm"),n.push(r+" 0 m"),n.push(r+" "+o+" "+o+" "+r+" 0 "+r+" c"),n.push("-"+o+" "+r+" -"+r+" "+o+" -"+r+" 0 c"),n.push("-"+r+" -"+o+" -"+o+" -"+r+" 0 -"+r+" c"),n.push(o+" -"+r+" "+r+" -"+o+" "+r+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e},OffPushDown:function(t){var e=new _(t),n=[],r=ut.internal.getWidth(t)<=ut.internal.getHeight(t)?ut.internal.getWidth(t)/4:ut.internal.getHeight(t)/4;r=Number((.9*r).toFixed(5));var i=Number((2*r).toFixed(5)),a=Number((i*ut.internal.Bezier_C).toFixed(5));return n.push("0.749023 g"),n.push("q"),n.push("1 0 0 1 "+L(ut.internal.getWidth(t)/2)+" "+L(ut.internal.getHeight(t)/2)+" cm"),n.push(i+" 0 m"),n.push(i+" "+a+" "+a+" "+i+" 0 "+i+" c"),n.push("-"+a+" "+i+" -"+i+" "+a+" -"+i+" 0 c"),n.push("-"+i+" -"+a+" -"+a+" -"+i+" 0 -"+i+" c"),n.push(a+" -"+i+" "+i+" -"+a+" "+i+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:ut.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=ut.RadioButton.Cross.YesNormal,e.D[t]=ut.RadioButton.Cross.YesPushDown,e},getCA:function(){return"8"},YesNormal:function(t){var e=new _(t),n=[],r=ut.internal.calculateCross(t);return n.push("q"),n.push("1 1 "+N(ut.internal.getWidth(t)-2)+" "+N(ut.internal.getHeight(t)-2)+" re"),n.push("W"),n.push("n"),n.push(N(r.x1.x)+" "+N(r.x1.y)+" m"),n.push(N(r.x2.x)+" "+N(r.x2.y)+" l"),n.push(N(r.x4.x)+" "+N(r.x4.y)+" m"),n.push(N(r.x3.x)+" "+N(r.x3.y)+" l"),n.push("s"),n.push("Q"),e.stream=n.join("\n"),e},YesPushDown:function(t){var e=new _(t),n=ut.internal.calculateCross(t),r=[];return r.push("0.749023 g"),r.push("0 0 "+N(ut.internal.getWidth(t))+" "+N(ut.internal.getHeight(t))+" re"),r.push("f"),r.push("q"),r.push("1 1 "+N(ut.internal.getWidth(t)-2)+" "+N(ut.internal.getHeight(t)-2)+" re"),r.push("W"),r.push("n"),r.push(N(n.x1.x)+" "+N(n.x1.y)+" m"),r.push(N(n.x2.x)+" "+N(n.x2.y)+" l"),r.push(N(n.x4.x)+" "+N(n.x4.y)+" m"),r.push(N(n.x3.x)+" "+N(n.x3.y)+" l"),r.push("s"),r.push("Q"),e.stream=r.join("\n"),e},OffPushDown:function(t){var e=new _(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+N(ut.internal.getWidth(t))+" "+N(ut.internal.getHeight(t))+" re"),n.push("f"),e.stream=n.join("\n"),e}}},createDefaultAppearanceStream:function(t){var e=m.internal.getFont(t.fontName,t.fontStyle).id,n=m.__private__.encodeColorString(t.color);return"/"+e+" "+t.fontSize+" Tf "+n}};ut.internal={Bezier_C:.551915024494,calculateCross:function(t){var e=ut.internal.getWidth(t),n=ut.internal.getHeight(t),r=Math.min(e,n);return{x1:{x:(e-r)/2,y:(n-r)/2+r},x2:{x:(e-r)/2+r,y:(n-r)/2},x3:{x:(e-r)/2,y:(n-r)/2},x4:{x:(e-r)/2+r,y:(n-r)/2+r}}}},ut.internal.getWidth=function(t){var e=0;return"object"==typeof t&&(e=A(t.Rect[2])),e},ut.internal.getHeight=function(t){var e=0;return"object"==typeof t&&(e=A(t.Rect[3])),e};var ct=v.addField=function(t){if(W.call(this),!(t instanceof K))throw new Error("Invalid argument passed to jsPDF.addField.");return R.call(this,t),t.page=m.internal.getCurrentPageInfo().pageNumber,this};v.AcroFormChoiceField=Z,v.AcroFormListBox=$,v.AcroFormComboBox=Q,v.AcroFormEditBox=tt,v.AcroFormButton=et,v.AcroFormPushButton=nt,v.AcroFormRadioButton=rt,v.AcroFormCheckBox=at,v.AcroFormTextField=ot,v.AcroFormPasswordField=st,v.AcroFormAppearance=ut,v.AcroForm={ChoiceField:Z,ListBox:$,ComboBox:Q,EditBox:tt,Button:et,PushButton:nt,RadioButton:rt,CheckBox:at,TextField:ot,PasswordField:st,Appearance:ut},g.AcroForm={ChoiceField:Z,ListBox:$,ComboBox:Q,EditBox:tt,Button:et,PushButton:nt,RadioButton:rt,CheckBox:at,TextField:ot,PasswordField:st,Appearance:ut};var ht=g.AcroForm;
/** @license
 * jsPDF addImage plugin
 * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
 *               2013 Chris Dowling, https://github.com/gingerchris
 *               2013 Trinh Ho, https://github.com/ineedfat
 *               2013 Edwin Alejandro Perez, https://github.com/eaparango
 *               2013 Norah Smith, https://github.com/burnburnrocket
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */!function(t){t.__addimage__={};var e="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},r=t.__addimage__.getImageFileTypeByImageData=function(t,r){var i,a;r=r||e;var o,s,u,c=e;if(A(t))for(u in n)for(o=n[u],i=0;i<o.length;i+=1){for(s=!0,a=0;a<o[i].length;a+=1)if(void 0!==o[i][a]&&o[i][a]!==t[a]){s=!1;break}if(!0===s){c=u;break}}else for(u in n)for(o=n[u],i=0;i<o.length;i+=1){for(s=!0,a=0;a<o[i].length;a+=1)if(void 0!==o[i][a]&&o[i][a]!==t.charCodeAt(a)){s=!1;break}if(!0===s){c=u;break}}return c===e&&r!==e&&(c=r),c},i=function(t){for(var e=this.internal.write,n=this.internal.putStream,r=(0,this.internal.getFilters)();-1!==r.indexOf("FlateEncode");)r.splice(r.indexOf("FlateEncode"),1);t.objectId=this.internal.newObject();var a=[];if(a.push({key:"Type",value:"/XObject"}),a.push({key:"Subtype",value:"/Image"}),a.push({key:"Width",value:t.width}),a.push({key:"Height",value:t.height}),t.colorSpace===b.INDEXED?a.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(t.palette.length/3-1)+" "+("sMask"in t&&void 0!==t.sMask?t.objectId+2:t.objectId+1)+" 0 R]"}):(a.push({key:"ColorSpace",value:"/"+t.colorSpace}),t.colorSpace===b.DEVICE_CMYK&&a.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),a.push({key:"BitsPerComponent",value:t.bitsPerComponent}),"decodeParameters"in t&&void 0!==t.decodeParameters&&a.push({key:"DecodeParms",value:"<<"+t.decodeParameters+">>"}),"transparency"in t&&Array.isArray(t.transparency)){for(var o="",s=0,u=t.transparency.length;s<u;s++)o+=t.transparency[s]+" "+t.transparency[s]+" ";a.push({key:"Mask",value:"["+o+"]"})}void 0!==t.sMask&&a.push({key:"SMask",value:t.objectId+1+" 0 R"});var c=void 0!==t.filter?["/"+t.filter]:void 0;if(n({data:t.data,additionalKeyValues:a,alreadyAppliedFilters:c}),e("endobj"),"sMask"in t&&void 0!==t.sMask){var h="/Predictor "+t.predictor+" /Colors 1 /BitsPerComponent "+t.bitsPerComponent+" /Columns "+t.width,l={width:t.width,height:t.height,colorSpace:"DeviceGray",bitsPerComponent:t.bitsPerComponent,decodeParameters:h,data:t.sMask};"filter"in t&&(l.filter=t.filter),i.call(this,l)}t.colorSpace===b.INDEXED&&(this.internal.newObject(),n({data:S(new Uint8Array(t.palette))}),e("endobj"))},a=function(){var t=this.internal.collections.addImage_images;for(var e in t)i.call(this,t[e])},u=function(){var t,e=this.internal.collections.addImage_images,n=this.internal.write;for(var r in e)n("/I"+(t=e[r]).index,t.objectId,"0","R")},c=function(){this.internal.collections.addImage_images||(this.internal.collections.addImage_images={},this.internal.events.subscribe("putResources",a),this.internal.events.subscribe("putXobjectDict",u))},h=function(){var t=this.internal.collections.addImage_images;return c.call(this),t},l=function(){return Object.keys(this.internal.collections.addImage_images).length},f=function(e){return"function"==typeof t["process"+e.toUpperCase()]},d=function(t){return"object"==typeof t&&1===t.nodeType},p=function(e,n){if("IMG"===e.nodeName&&e.hasAttribute("src")){var r=""+e.getAttribute("src");if(0===r.indexOf("data:image/"))return o(unescape(r).split("base64,").pop());var i=t.loadFile(r,!0);if(void 0!==i)return i}if("CANVAS"===e.nodeName){var a;switch(n){case"PNG":a="image/png";break;case"WEBP":a="image/webp";break;case"JPEG":case"JPG":default:a="image/jpeg"}return o(e.toDataURL(a,1).split("base64,").pop())}},g=function(t){var e=this.internal.collections.addImage_images;if(e)for(var n in e)if(t===e[n].alias)return e[n]},m=function(t,e,n){return t||e||(t=-96,e=-96),t<0&&(t=-1*n.width*72/t/this.internal.scaleFactor),e<0&&(e=-1*n.height*72/e/this.internal.scaleFactor),0===t&&(t=e*n.width/n.height),0===e&&(e=t*n.height/n.width),[t,e]},v=function(t,e,n,r,i,a){var o=m.call(this,n,r,i),s=this.internal.getCoordinateString,u=this.internal.getVerticalCoordinateString,c=h.call(this);if(n=o[0],r=o[1],c[i.index]=i,a){a*=Math.PI/180;var l=Math.cos(a),f=Math.sin(a),d=function(t){return t.toFixed(4)},p=[d(l),d(f),d(-1*f),d(l),0,0,"cm"]}this.internal.write("q"),a?(this.internal.write([1,"0","0",1,s(t),u(e+r),"cm"].join(" ")),this.internal.write(p.join(" ")),this.internal.write([s(n),"0","0",s(r),"0","0","cm"].join(" "))):this.internal.write([s(n),"0","0",s(r),s(t),u(e+r),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+i.index+" Do"),this.internal.write("Q")},b=t.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};t.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var y=t.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},w=t.__addimage__.sHashCode=function(t){var e,n,r=0;if("string"==typeof t)for(n=t.length,e=0;e<n;e++)r=(r<<5)-r+t.charCodeAt(e),r|=0;else if(A(t))for(n=t.byteLength/2,e=0;e<n;e++)r=(r<<5)-r+t[e],r|=0;return r},N=t.__addimage__.validateStringAsBase64=function(t){(t=t||"").toString().trim();var e=!0;return 0===t.length&&(e=!1),t.length%4!=0&&(e=!1),!1===/^[A-Za-z0-9+/]+$/.test(t.substr(0,t.length-2))&&(e=!1),!1===/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2))&&(e=!1),e},L=t.__addimage__.extractImageFromDataUrl=function(t){var e=(t=t||"").split("base64,"),n=null;if(2===e.length){var r=/^data:(\w*\/\w*);*(charset=[\w=-]*)*;*$/.exec(e[0]);Array.isArray(r)&&(n={mimeType:r[1],charset:r[2],data:e[1]})}return n},x=t.__addimage__.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array};t.__addimage__.isArrayBuffer=function(t){return x()&&t instanceof ArrayBuffer};var A=t.__addimage__.isArrayBufferView=function(t){return x()&&"undefined"!=typeof Uint32Array&&(t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)},_=t.__addimage__.binaryStringToUint8Array=function(t){for(var e=t.length,n=new Uint8Array(e),r=0;r<e;r++)n[r]=t.charCodeAt(r);return n},S=t.__addimage__.arrayBufferToBinaryString=function(t){try{return o(s(String.fromCharCode.apply(null,t)))}catch(e){if("undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.reduce)return new Uint8Array(t).reduce((function(t,e){return t.push(String.fromCharCode(e)),t}),[]).join("")}};t.addImage=function(){var t,n,r,i,a,o,s,u,h;if("number"==typeof arguments[1]?(n=e,r=arguments[1],i=arguments[2],a=arguments[3],o=arguments[4],s=arguments[5],u=arguments[6],h=arguments[7]):(n=arguments[1],r=arguments[2],i=arguments[3],a=arguments[4],o=arguments[5],s=arguments[6],u=arguments[7],h=arguments[8]),"object"==typeof(t=arguments[0])&&!d(t)&&"imageData"in t){var l=t;t=l.imageData,n=l.format||n||e,r=l.x||r||0,i=l.y||i||0,a=l.w||l.width||a,o=l.h||l.height||o,s=l.alias||s,u=l.compression||u,h=l.rotation||l.angle||h}var f=this.internal.getFilters();if(void 0===u&&-1!==f.indexOf("FlateEncode")&&(u="SLOW"),isNaN(r)||isNaN(i))throw new Error("Invalid coordinates passed to jsPDF.addImage");c.call(this);var p=P.call(this,t,n,s,u);return v.call(this,r,i,a,o,p,h),this};var P=function(n,i,a,o){var s,u,c;if("string"==typeof n&&r(n)===e){n=unescape(n);var h=k(n,!1);(""!==h||void 0!==(h=t.loadFile(n,!0)))&&(n=h)}if(d(n)&&(n=p(n,i)),i=r(n,i),!f(i))throw new Error("addImage does not support files of type '"+i+"', please ensure that a plugin for '"+i+"' support is added.");if((null==(c=a)||0===c.length)&&(a=function(t){return"string"==typeof t||A(t)?w(t):null}(n)),(s=g.call(this,a))||(x()&&(n instanceof Uint8Array||(u=n,n=_(n))),s=this["process"+i.toUpperCase()](n,l.call(this),a,function(e){return e&&"string"==typeof e&&(e=e.toUpperCase()),e in t.image_compression?e:y.NONE}(o),u)),!s)throw new Error("An unknown error occurred whilst processing the image.");return s},k=t.__addimage__.convertBase64ToBinaryString=function(t,e){var n;e="boolean"!=typeof e||e;var r,i="";if("string"==typeof t){r=null!==(n=L(t))?n.data:t;try{i=o(r)}catch(t){if(e)throw N(r)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+t.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return i};t.getImageProperties=function(n){var i,a,o="";if(d(n)&&(n=p(n)),"string"==typeof n&&r(n)===e&&(""===(o=k(n,!1))&&(o=t.loadFile(n)||""),n=o),a=r(n),!f(a))throw new Error("addImage does not support files of type '"+a+"', please ensure that a plugin for '"+a+"' support is added.");if(!x()||n instanceof Uint8Array||(n=_(n)),!(i=this["process"+a.toUpperCase()](n)))throw new Error("An unknown error occurred whilst processing the image");return i.fileType=a,i}}(g.API),
/**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(t){if(void 0!==t&&""!=t)return!0};g.API.events.push(["addPage",function(t){this.internal.getPageInfo(t.pageNumber).pageContext.annotations=[]}]),t.events.push(["putPage",function(t){for(var n,r,i,a=this.internal.getCoordinateString,o=this.internal.getVerticalCoordinateString,s=this.internal.getPageInfoByObjId(t.objId),u=t.pageContext.annotations,c=!1,h=0;h<u.length&&!c;h++)switch((n=u[h]).type){case"link":(e(n.options.url)||e(n.options.pageNumber))&&(c=!0);break;case"reference":case"text":case"freetext":c=!0}if(0!=c){this.internal.write("/Annots [");for(var l=0;l<u.length;l++)switch((n=u[l]).type){case"reference":this.internal.write(" "+n.object.objId+" 0 R ");break;case"text":var f=this.internal.newAdditionalObject(),d=this.internal.newAdditionalObject(),p=n.title||"Note";i="<</Type /Annot /Subtype /Text "+(r="/Rect ["+a(n.bounds.x)+" "+o(n.bounds.y+n.bounds.h)+" "+a(n.bounds.x+n.bounds.w)+" "+o(n.bounds.y)+"] ")+"/Contents ("+n.contents+")",i+=" /Popup "+d.objId+" 0 R",i+=" /P "+s.objId+" 0 R",i+=" /T ("+p+") >>",f.content=i;var g=f.objId+" 0 R";i="<</Type /Annot /Subtype /Popup "+(r="/Rect ["+a(n.bounds.x+30)+" "+o(n.bounds.y+n.bounds.h)+" "+a(n.bounds.x+n.bounds.w+30)+" "+o(n.bounds.y)+"] ")+" /Parent "+g,n.open&&(i+=" /Open true"),i+=" >>",d.content=i,this.internal.write(f.objId,"0 R",d.objId,"0 R");break;case"freetext":r="/Rect ["+a(n.bounds.x)+" "+o(n.bounds.y)+" "+a(n.bounds.x+n.bounds.w)+" "+o(n.bounds.y+n.bounds.h)+"] ";var m=n.color||"#000000";i="<</Type /Annot /Subtype /FreeText "+r+"/Contents ("+n.contents+")",i+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+m+")",i+=" /Border [0 0 0]",i+=" >>",this.internal.write(i);break;case"link":if(n.options.name){var v=this.annotations._nameMap[n.options.name];n.options.pageNumber=v.page,n.options.top=v.y}else n.options.top||(n.options.top=0);if(r="/Rect ["+a(n.x)+" "+o(n.y)+" "+a(n.x+n.w)+" "+o(n.y+n.h)+"] ",i="",n.options.url)i="<</Type /Annot /Subtype /Link "+r+"/Border [0 0 0] /A <</S /URI /URI ("+n.options.url+") >>";else if(n.options.pageNumber){switch(i="<</Type /Annot /Subtype /Link "+r+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(n.options.pageNumber).objId+" 0 R",n.options.magFactor=n.options.magFactor||"XYZ",n.options.magFactor){case"Fit":i+=" /Fit]";break;case"FitH":i+=" /FitH "+n.options.top+"]";break;case"FitV":n.options.left=n.options.left||0,i+=" /FitV "+n.options.left+"]";break;case"XYZ":default:var b=o(n.options.top);n.options.left=n.options.left||0,void 0===n.options.zoom&&(n.options.zoom=0),i+=" /XYZ "+n.options.left+" "+b+" "+n.options.zoom+"]"}}""!=i&&(i+=" >>",this.internal.write(i))}this.internal.write("]")}}]),t.createAnnotation=function(t){var e=this.internal.getCurrentPageInfo();switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":e.pageContext.annotations.push(t)}},t.link=function(t,e,n,r,i){this.internal.getCurrentPageInfo().pageContext.annotations.push({x:t,y:e,w:n,h:r,options:i,type:"link"})},t.textWithLink=function(t,e,n,r){var i=this.getTextWidth(t),a=this.internal.getLineHeight()/this.internal.scaleFactor;return this.text(t,e,n,r),n+=.2*a,this.link(e,n-a,i,a,r),i},t.getTextWidth=function(t){var e=this.internal.getFontSize();return this.getStringUnitWidth(t)*e/this.internal.scaleFactor}}(g.API),
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},n={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},r={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},i=[1570,1571,1573,1575];t.__arabicParser__={};var a=t.__arabicParser__.isInArabicSubstitutionA=function(t){return void 0!==e[t.charCodeAt(0)]},o=t.__arabicParser__.isArabicLetter=function(t){return"string"==typeof t&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)},s=t.__arabicParser__.isArabicEndLetter=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length<=2},u=t.__arabicParser__.isArabicAlfLetter=function(t){return o(t)&&i.indexOf(t.charCodeAt(0))>=0};t.__arabicParser__.arabicLetterHasIsolatedForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=1};var c=t.__arabicParser__.arabicLetterHasFinalForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=2};t.__arabicParser__.arabicLetterHasInitialForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=3};var h=t.__arabicParser__.arabicLetterHasMedialForm=function(t){return o(t)&&a(t)&&4==e[t.charCodeAt(0)].length},l=t.__arabicParser__.resolveLigatures=function(t){var e=0,r=n,i="",a=0;for(e=0;e<t.length;e+=1)void 0!==r[t.charCodeAt(e)]?(a++,"number"==typeof(r=r[t.charCodeAt(e)])&&(i+=String.fromCharCode(r),r=n,a=0),e===t.length-1&&(r=n,i+=t.charAt(e-(a-1)),e-=a-1,a=0)):(r=n,i+=t.charAt(e-a),e-=a,a=0);return i};t.__arabicParser__.isArabicDiacritic=function(t){return void 0!==t&&void 0!==r[t.charCodeAt(0)]};var f=t.__arabicParser__.getCorrectForm=function(t,e,n){return o(t)?!1===a(t)?-1:!c(t)||!o(e)&&!o(n)||!o(n)&&s(e)||s(t)&&!o(e)||s(t)&&u(e)||s(t)&&s(e)?0:h(t)&&o(e)&&!s(e)&&o(n)&&c(n)?3:s(t)||!o(n)?1:2:-1},d=function(t){var n=0,r=0,i=0,a="",s="",u="",c=(t=t||"").split("\\s+"),h=[];for(n=0;n<c.length;n+=1){for(h.push(""),r=0;r<c[n].length;r+=1)a=c[n][r],s=c[n][r-1],u=c[n][r+1],o(a)?(i=f(a,s,u),h[n]+=-1!==i?String.fromCharCode(e[a.charCodeAt(0)][i]):a):h[n]+=a;h[n]=l(h[n])}return h.join(" ")},p=t.__arabicParser__.processArabic=t.processArabic=function(){var t,e="string"==typeof arguments[0]?arguments[0]:arguments[0].text,n=[];if(Array.isArray(e)){var r=0;for(n=[],r=0;r<e.length;r+=1)Array.isArray(e[r])?n.push([d(e[r][0]),e[r][1],e[r][2]]):n.push([d(e[r])]);t=n}else t=d(e);return"string"==typeof arguments[0]?t:(arguments[0].text=t,arguments[0])};t.events.push(["preProcessText",p])}(g.API),g.API.autoPrint=function(t){var e;switch((t=t||{}).variant=t.variant||"non-conform",t.variant){case"javascript":this.addJS("print({});");break;case"non-conform":default:this.internal.events.subscribe("postPutResources",(function(){e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){this.internal.out("/OpenAction "+e+" 0 R")}))}return this},
/**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(){var t=void 0;Object.defineProperty(this,"pdf",{get:function(){return t},set:function(e){t=e}});var e=150;Object.defineProperty(this,"width",{get:function(){return e},set:function(t){e=isNaN(t)||!1===Number.isInteger(t)||t<0?150:t,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=e+1)}});var n=300;Object.defineProperty(this,"height",{get:function(){return n},set:function(t){n=isNaN(t)||!1===Number.isInteger(t)||t<0?300:t,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=n+1)}});var r=[];Object.defineProperty(this,"childNodes",{get:function(){return r},set:function(t){r=t}});var i={};Object.defineProperty(this,"style",{get:function(){return i},set:function(t){i=t}}),Object.defineProperty(this,"parentNode",{})};e.prototype.getContext=function(t,e){var n;if("2d"!==(t=t||"2d"))return null;for(n in e)this.pdf.context2d.hasOwnProperty(n)&&(this.pdf.context2d[n]=e[n]);return this.pdf.context2d._canvas=this,this.pdf.context2d},e.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},t.events.push(["initialized",function(){this.canvas=new e,this.canvas.pdf=this}])}(g.API),
/**
 * @license
 * ====================================================================
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Hall, james@parall.ax
 *               2014 Diego Casorran, https://github.com/diegocr
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(t){var e={left:0,top:0,bottom:0,right:0},n=!1,r=function(){void 0===this.internal.__cell__&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},e),this.internal.__cell__.margins.width=this.getPageWidth(),i.call(this))},i=function(){this.internal.__cell__.lastCell=new a,this.internal.__cell__.pages=1},a=function(){var t=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return t},set:function(e){t=e}});var e=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return e},set:function(t){e=t}});var n=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return n},set:function(t){n=t}});var r=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return r},set:function(t){r=t}});var i=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return i},set:function(t){i=t}});var a=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return a},set:function(t){a=t}});var o=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return o},set:function(t){o=t}}),this};a.prototype.clone=function(){return new a(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},a.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},t.setHeaderFunction=function(t){return r.call(this),this.internal.__cell__.headerFunction="function"==typeof t?t:void 0,this},t.getTextDimensions=function(t,e){r.call(this);var n=(e=e||{}).fontSize||this.getFontSize(),i=e.font||this.getFont(),a=e.scaleFactor||this.internal.scaleFactor,o=0,s=0,u=0;if(!Array.isArray(t)&&"string"!=typeof t){if("number"!=typeof t)throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");t=String(t)}const c=e.maxWidth;c>0?"string"==typeof t?t=this.splitTextToSize(t,c):"[object Array]"===Object.prototype.toString.call(t)&&(t=this.splitTextToSize(t.join(" "),c)):t=Array.isArray(t)?t:[t];for(var h=0;h<t.length;h++)o<(u=this.getStringUnitWidth(t[h],{font:i})*n)&&(o=u);return 0!==o&&(s=t.length),{w:o/=a,h:Math.max((s*n*this.getLineHeightFactor()-n*(this.getLineHeightFactor()-1))/a,0)}},t.cellAddPage=function(){r.call(this),this.addPage();var t=this.internal.__cell__.margins||e;return this.internal.__cell__.lastCell=new a(t.left,t.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var o=t.cell=function(){var t;t=arguments[0]instanceof a?arguments[0]:new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),r.call(this);var i=this.internal.__cell__.lastCell,o=this.internal.__cell__.padding,s=this.internal.__cell__.margins||e,u=this.internal.__cell__.tableHeaderRow,c=this.internal.__cell__.printHeaders;return void 0!==i.lineNumber&&(i.lineNumber===t.lineNumber?(t.x=(i.x||0)+(i.width||0),t.y=i.y||0):i.y+i.height+t.height+s.bottom>this.getPageHeight()?(this.cellAddPage(),t.y=s.top,c&&u&&(this.printHeaderRow(t.lineNumber,!0),t.y+=u[0].height)):t.y=i.y+i.height||t.y),void 0!==t.text[0]&&(this.rect(t.x,t.y,t.width,t.height,!0===n?"FD":void 0),"right"===t.align?this.text(t.text,t.x+t.width-o,t.y+o,{align:"right",baseline:"top"}):"center"===t.align?this.text(t.text,t.x+t.width/2,t.y+o,{align:"center",baseline:"top",maxWidth:t.width-o-o}):this.text(t.text,t.x+o,t.y+o,{align:"left",baseline:"top",maxWidth:t.width-o-o})),this.internal.__cell__.lastCell=t,this};t.table=function(t,n,u,c,h){if(r.call(this),!u)throw new Error("No data for PDF table.");var l,f,d,p,g=[],m=[],v=[],b={},y={},w=[],N=[],L=(h=h||{}).autoSize||!1,x=!1!==h.printHeaders,A=h.css&&void 0!==h.css["font-size"]?16*h.css["font-size"]:h.fontSize||12,_=h.margins||Object.assign({width:this.getPageWidth()},e),S="number"==typeof h.padding?h.padding:3,P=h.headerBackgroundColor||"#c8c8c8";if(i.call(this),this.internal.__cell__.printHeaders=x,this.internal.__cell__.margins=_,this.internal.__cell__.table_font_size=A,this.internal.__cell__.padding=S,this.internal.__cell__.headerBackgroundColor=P,this.setFontSize(A),null==c)m=g=Object.keys(u[0]),v=g.map((function(){return"left"}));else if(Array.isArray(c)&&"object"==typeof c[0])for(g=c.map((function(t){return t.name})),m=c.map((function(t){return t.prompt||t.name||""})),v=g.map((function(t){return t.align||"left"})),l=0;l<c.length;l+=1)y[c[l].name]=c[l].width*(19.049976/25.4);else Array.isArray(c)&&"string"==typeof c[0]&&(m=g=c,v=g.map((function(){return"left"})));if(L)for(l=0;l<g.length;l+=1){for(b[p=g[l]]=u.map((function(t){return t[p]})),this.setFont(void 0,"bold"),w.push(this.getTextDimensions(m[l],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),f=b[p],this.setFont(void 0,"normal"),d=0;d<f.length;d+=1)w.push(this.getTextDimensions(f[d],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);y[p]=Math.max.apply(null,w)+S+S,w=[]}if(x){var k={};for(l=0;l<g.length;l+=1)k[g[l]]={},k[g[l]].text=m[l],k[g[l]].align=v[l];var F=s.call(this,k,y);N=g.map((function(e){return new a(t,n,y[e],F,k[e].text,void 0,k[e].align)})),this.setTableHeaderRow(N),this.printHeaderRow(1,!1)}var I=c.reduce((function(t,e){return t[e.name]=e.align,t}),{});for(l=0;l<u.length;l+=1){var C=s.call(this,u[l],y);for(d=0;d<g.length;d+=1)o.call(this,new a(t,n,y[g[d]],C,u[l][g[d]],l+2,I[g[d]]))}return this.internal.__cell__.table_x=t,this.internal.__cell__.table_y=n,this};var s=function(t,e){var n=this.internal.__cell__.padding,r=this.internal.__cell__.table_font_size,i=this.internal.scaleFactor;return Object.keys(t).map((function(e){return[e,t[e]]})).map((function(t){var e=t[0],n=t[1];return"object"==typeof n?[e,n.text]:[e,n]})).map((function(t){var r=t[0],i=t[1];return this.splitTextToSize(i,e[r]-n-n)}),this).map((function(t){return this.getLineHeightFactor()*t.length*r/i+n+n}),this).reduce((function(t,e){return Math.max(t,e)}),0)};t.setTableHeaderRow=function(t){r.call(this),this.internal.__cell__.tableHeaderRow=t},t.printHeaderRow=function(t,e){if(r.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var i;if(n=!0,"function"==typeof this.internal.__cell__.headerFunction){var s=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new a(s[0],s[1],s[2],s[3],void 0,-1)}this.setFont(void 0,"bold");for(var u=[],c=0;c<this.internal.__cell__.tableHeaderRow.length;c+=1)i=this.internal.__cell__.tableHeaderRow[c].clone(),e&&(i.y=this.internal.__cell__.margins.top||0,u.push(i)),i.lineNumber=t,this.setFillColor(this.internal.__cell__.headerBackgroundColor),o.call(this,i);u.length>0&&this.setTableHeaderRow(u),this.setFont(void 0,"normal"),n=!1}}(g.API),function(t){var e,r,i,a,o,s,u,h,l,f=function(t){return t=t||{},this.isStrokeTransparent=t.isStrokeTransparent||!1,this.strokeOpacity=t.strokeOpacity||1,this.strokeStyle=t.strokeStyle||"#000000",this.fillStyle=t.fillStyle||"#000000",this.isFillTransparent=t.isFillTransparent||!1,this.fillOpacity=t.fillOpacity||1,this.font=t.font||"10px sans-serif",this.textBaseline=t.textBaseline||"alphabetic",this.textAlign=t.textAlign||"left",this.lineWidth=t.lineWidth||1,this.lineJoin=t.lineJoin||"miter",this.lineCap=t.lineCap||"butt",this.path=t.path||[],this.transform=void 0!==t.transform?t.transform.clone():new h,this.globalCompositeOperation=t.globalCompositeOperation||"normal",this.globalAlpha=t.globalAlpha||1,this.clip_path=t.clip_path||[],this.currentPoint=t.currentPoint||new s,this.miterLimit=t.miterLimit||10,this.lastPoint=t.lastPoint||new s,this.ignoreClearRect="boolean"!=typeof t.ignoreClearRect||t.ignoreClearRect,this};t.events.push(["initialized",function(){this.context2d=new d(this),e=this.internal.f2,r=this.internal.getCoordinateString,i=this.internal.getVerticalCoordinateString,a=this.internal.getHorizontalCoordinate,o=this.internal.getVerticalCoordinate,s=this.internal.Point,u=this.internal.Rectangle,h=this.internal.Matrix,l=new f}]);var d=function(t){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var e=t;Object.defineProperty(this,"pdf",{get:function(){return e}});var n=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return n},set:function(t){n=Boolean(t)}});var r=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return r},set:function(t){r=Boolean(t)}});var i=0;Object.defineProperty(this,"posX",{get:function(){return i},set:function(t){isNaN(t)||(i=t)}});var a=0;Object.defineProperty(this,"posY",{get:function(){return a},set:function(t){isNaN(t)||(a=t)}});var o=!1;Object.defineProperty(this,"autoPaging",{get:function(){return o},set:function(t){o=Boolean(t)}});var s=0;Object.defineProperty(this,"lastBreak",{get:function(){return s},set:function(t){s=t}});var u=[];Object.defineProperty(this,"pageBreaks",{get:function(){return u},set:function(t){u=t}}),Object.defineProperty(this,"ctx",{get:function(){return l},set:function(t){t instanceof f&&(l=t)}}),Object.defineProperty(this,"path",{get:function(){return l.path},set:function(t){l.path=t}});var c=[];Object.defineProperty(this,"ctxStack",{get:function(){return c},set:function(t){c=t}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(t){var e;e=p(t),this.ctx.fillStyle=e.style,this.ctx.isFillTransparent=0===e.a,this.ctx.fillOpacity=e.a,this.pdf.setFillColor(e.r,e.g,e.b,{a:e.a}),this.pdf.setTextColor(e.r,e.g,e.b,{a:e.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(t){var e=p(t);this.ctx.strokeStyle=e.style,this.ctx.isStrokeTransparent=0===e.a,this.ctx.strokeOpacity=e.a,0===e.a?this.pdf.setDrawColor(255,255,255):(e.a,this.pdf.setDrawColor(e.r,e.g,e.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(t){-1!==["butt","round","square"].indexOf(t)&&(this.ctx.lineCap=t,this.pdf.setLineCap(t))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(t){isNaN(t)||(this.ctx.lineWidth=t,this.pdf.setLineWidth(t))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(t){-1!==["bevel","round","miter"].indexOf(t)&&(this.ctx.lineJoin=t,this.pdf.setLineJoin(t))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(t){isNaN(t)||(this.ctx.miterLimit=t,this.pdf.setMiterLimit(t))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(t){this.ctx.textBaseline=t}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(t){-1!==["right","end","center","left","start"].indexOf(t)&&(this.ctx.textAlign=t)}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(t){var e;if(this.ctx.font=t,null!==(e=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))){var n=e[1],r=(e[2],e[3]),i=e[4],a=(e[5],e[6]),o=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];i="px"===o?Math.floor(parseFloat(i)*this.pdf.internal.scaleFactor):"em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(i)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(i);var s="";("bold"===r||parseInt(r,10)>=700||"bold"===n)&&(s="bold"),"italic"===n&&(s+="italic"),0===s.length&&(s="normal");for(var u="",c=a.replace(/"|'/g,"").split(/\s*,\s*/),h={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},l=0;l<c.length;l++){if(void 0!==this.pdf.internal.getFont(c[l],s,{noFallback:!0,disableWarning:!0})){u=c[l];break}if("bolditalic"===s&&void 0!==this.pdf.internal.getFont(c[l],"bold",{noFallback:!0,disableWarning:!0}))u=c[l],s="bold";else if(void 0!==this.pdf.internal.getFont(c[l],"normal",{noFallback:!0,disableWarning:!0})){u=c[l],s="normal";break}}if(""===u)for(var f=0;f<c.length;f++)if(h[c[f]]){u=h[c[f]];break}u=""===u?"Times":u,this.pdf.setFont(u,s)}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(t){this.ctx.globalCompositeOperation=t}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(t){this.ctx.globalAlpha=t}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(t){this.ctx.ignoreClearRect=Boolean(t)}})};d.prototype.fill=function(){N.call(this,"fill",!1)},d.prototype.stroke=function(){N.call(this,"stroke",!1)},d.prototype.beginPath=function(){this.path=[{type:"begin"}]},d.prototype.moveTo=function(t,e){if(isNaN(t)||isNaN(e))throw n.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var r=this.ctx.transform.applyToPoint(new s(t,e));this.path.push({type:"mt",x:r.x,y:r.y}),this.ctx.lastPoint=new s(t,e)},d.prototype.closePath=function(){var t=new s(0,0),e=0;for(e=this.path.length-1;-1!==e;e--)if("begin"===this.path[e].type&&"object"==typeof this.path[e+1]&&"number"==typeof this.path[e+1].x){t=new s(this.path[e+1].x,this.path[e+1].y),this.path.push({type:"lt",x:t.x,y:t.y});break}"object"==typeof this.path[e+2]&&"number"==typeof this.path[e+2].x&&this.path.push(JSON.parse(JSON.stringify(this.path[e+2]))),this.path.push({type:"close"}),this.ctx.lastPoint=new s(t.x,t.y)},d.prototype.lineTo=function(t,e){if(isNaN(t)||isNaN(e))throw n.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var r=this.ctx.transform.applyToPoint(new s(t,e));this.path.push({type:"lt",x:r.x,y:r.y}),this.ctx.lastPoint=new s(r.x,r.y)},d.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),N.call(this,null,!0)},d.prototype.quadraticCurveTo=function(t,e,r,i){if(isNaN(r)||isNaN(i)||isNaN(t)||isNaN(e))throw n.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var a=this.ctx.transform.applyToPoint(new s(r,i)),o=this.ctx.transform.applyToPoint(new s(t,e));this.path.push({type:"qct",x1:o.x,y1:o.y,x:a.x,y:a.y}),this.ctx.lastPoint=new s(a.x,a.y)},d.prototype.bezierCurveTo=function(t,e,r,i,a,o){if(isNaN(a)||isNaN(o)||isNaN(t)||isNaN(e)||isNaN(r)||isNaN(i))throw n.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var u=this.ctx.transform.applyToPoint(new s(a,o)),c=this.ctx.transform.applyToPoint(new s(t,e)),h=this.ctx.transform.applyToPoint(new s(r,i));this.path.push({type:"bct",x1:c.x,y1:c.y,x2:h.x,y2:h.y,x:u.x,y:u.y}),this.ctx.lastPoint=new s(u.x,u.y)},d.prototype.arc=function(t,e,r,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(i)||isNaN(a))throw n.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(o=Boolean(o),!this.ctx.transform.isIdentity){var u=this.ctx.transform.applyToPoint(new s(t,e));t=u.x,e=u.y;var c=this.ctx.transform.applyToPoint(new s(0,r)),h=this.ctx.transform.applyToPoint(new s(0,0));r=Math.sqrt(Math.pow(c.x-h.x,2)+Math.pow(c.y-h.y,2))}Math.abs(a-i)>=2*Math.PI&&(i=0,a=2*Math.PI),this.path.push({type:"arc",x:t,y:e,radius:r,startAngle:i,endAngle:a,counterclockwise:o})},d.prototype.arcTo=function(t,e,n,r,i){throw new Error("arcTo not implemented.")},d.prototype.rect=function(t,e,r,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(i))throw n.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(t,e),this.lineTo(t+r,e),this.lineTo(t+r,e+i),this.lineTo(t,e+i),this.lineTo(t,e),this.lineTo(t+r,e),this.lineTo(t,e)},d.prototype.fillRect=function(t,e,r,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(i))throw n.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!g.call(this)){var a={};"butt"!==this.lineCap&&(a.lineCap=this.lineCap,this.lineCap="butt"),"miter"!==this.lineJoin&&(a.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(t,e,r,i),this.fill(),a.hasOwnProperty("lineCap")&&(this.lineCap=a.lineCap),a.hasOwnProperty("lineJoin")&&(this.lineJoin=a.lineJoin)}},d.prototype.strokeRect=function(t,e,r,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(i))throw n.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");m.call(this)||(this.beginPath(),this.rect(t,e,r,i),this.stroke())},d.prototype.clearRect=function(t,e,r,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(i))throw n.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(t,e,r,i))},d.prototype.save=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,n=0;n<this.pdf.internal.getNumberOfPages();n++)this.pdf.setPage(n+1),this.pdf.internal.out("q");if(this.pdf.setPage(e),t){this.ctx.fontSize=this.pdf.internal.getFontSize();var r=new f(this.ctx);this.ctxStack.push(this.ctx),this.ctx=r}},d.prototype.restore=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,n=0;n<this.pdf.internal.getNumberOfPages();n++)this.pdf.setPage(n+1),this.pdf.internal.out("Q");this.pdf.setPage(e),t&&0!==this.ctxStack.length&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin)},d.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var p=function(t){var e,n,r,i;if(!0===t.isCanvasGradient&&(t=t.getColor()),!t)return{r:0,g:0,b:0,a:0,style:t};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t))e=0,n=0,r=0,i=0;else{var a=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);if(null!==a)e=parseInt(a[1]),n=parseInt(a[2]),r=parseInt(a[3]),i=1;else if(null!==(a=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t)))e=parseInt(a[1]),n=parseInt(a[2]),r=parseInt(a[3]),i=parseFloat(a[4]);else{if(i=1,"string"==typeof t&&"#"!==t.charAt(0)){var o=new c(t);t=o.ok?o.toHex():"#000000"}4===t.length?(e=t.substring(1,2),e+=e,n=t.substring(2,3),n+=n,r=t.substring(3,4),r+=r):(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7)),e=parseInt(e,16),n=parseInt(n,16),r=parseInt(r,16)}}return{r:e,g:n,b:r,a:i,style:t}},g=function(){return this.ctx.isFillTransparent||0==this.globalAlpha},m=function(){return Boolean(this.ctx.isStrokeTransparent||0==this.globalAlpha)};d.prototype.fillText=function(t,e,r,i){if(isNaN(e)||isNaN(r)||"string"!=typeof t)throw n.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(i=isNaN(i)?void 0:i,!g.call(this)){r=x.call(this,r);var a=O(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;k.call(this,{text:t,x:e,y:r,scale:o,angle:a,align:this.textAlign,maxWidth:i})}},d.prototype.strokeText=function(t,e,r,i){if(isNaN(e)||isNaN(r)||"string"!=typeof t)throw n.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!m.call(this)){i=isNaN(i)?void 0:i,r=x.call(this,r);var a=O(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;k.call(this,{text:t,x:e,y:r,scale:o,renderingMode:"stroke",angle:a,align:this.textAlign,maxWidth:i})}},d.prototype.measureText=function(t){if("string"!=typeof t)throw n.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var e=this.pdf,r=this.pdf.internal.scaleFactor,i=e.internal.getFontSize(),a=e.getStringUnitWidth(t)*i/e.internal.scaleFactor,o=function(t){var e=(t=t||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return e}}),this};return new o({width:a*=Math.round(96*r/72*1e4)/1e4})},d.prototype.scale=function(t,e){if(isNaN(t)||isNaN(e))throw n.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var r=new h(t,0,0,e,0,0);this.ctx.transform=this.ctx.transform.multiply(r)},d.prototype.rotate=function(t){if(isNaN(t))throw n.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var e=new h(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0);this.ctx.transform=this.ctx.transform.multiply(e)},d.prototype.translate=function(t,e){if(isNaN(t)||isNaN(e))throw n.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var r=new h(1,0,0,1,t,e);this.ctx.transform=this.ctx.transform.multiply(r)},d.prototype.transform=function(t,e,r,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(i)||isNaN(a)||isNaN(o))throw n.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var s=new h(t,e,r,i,a,o);this.ctx.transform=this.ctx.transform.multiply(s)},d.prototype.setTransform=function(t,e,n,r,i,a){t=isNaN(t)?1:t,e=isNaN(e)?0:e,n=isNaN(n)?0:n,r=isNaN(r)?1:r,i=isNaN(i)?0:i,a=isNaN(a)?0:a,this.ctx.transform=new h(t,e,n,r,i,a)},d.prototype.drawImage=function(t,e,n,r,i,a,o,s,c){var l=this.pdf.getImageProperties(t),f=1,d=1,p=1,g=1;void 0!==r&&void 0!==s&&(p=s/r,g=c/i,f=l.width/r*s/r,d=l.height/i*c/i),void 0===a&&(a=e,o=n,e=0,n=0),void 0!==r&&void 0===s&&(s=r,c=i),void 0===r&&void 0===s&&(s=l.width,c=l.height);for(var m,b=this.ctx.transform.decompose(),N=O(b.rotate.shx),x=new h,A=(x=(x=(x=x.multiply(b.translate)).multiply(b.skew)).multiply(b.scale)).applyToRectangle(new u(a-e*p,o-n*g,r*f,i*d)),_=v.call(this,A),S=[],P=0;P<_.length;P+=1)-1===S.indexOf(_[P])&&S.push(_[P]);if(w(S),this.autoPaging)for(var k=S[0],F=S[S.length-1],I=k;I<F+1;I++){if(this.pdf.setPage(I),0!==this.ctx.clip_path.length){var C=this.path;m=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=y(m,this.posX,-1*this.pdf.internal.pageSize.height*(I-1)+this.posY),L.call(this,"fill",!0),this.path=C}var j=JSON.parse(JSON.stringify(A));j=y([j],this.posX,-1*this.pdf.internal.pageSize.height*(I-1)+this.posY)[0],this.pdf.addImage(t,"JPEG",j.x,j.y,j.w,j.h,null,null,N)}else this.pdf.addImage(t,"JPEG",A.x,A.y,A.w,A.h,null,null,N)};var v=function(t,e,n){var r=[];switch(e=e||this.pdf.internal.pageSize.width,n=n||this.pdf.internal.pageSize.height,t.type){default:case"mt":case"lt":r.push(Math.floor((t.y+this.posY)/n)+1);break;case"arc":r.push(Math.floor((t.y+this.posY-t.radius)/n)+1),r.push(Math.floor((t.y+this.posY+t.radius)/n)+1);break;case"qct":var i=M(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x,t.y);r.push(Math.floor(i.y/n)+1),r.push(Math.floor((i.y+i.h)/n)+1);break;case"bct":var a=E(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x2,t.y2,t.x,t.y);r.push(Math.floor(a.y/n)+1),r.push(Math.floor((a.y+a.h)/n)+1);break;case"rect":r.push(Math.floor((t.y+this.posY)/n)+1),r.push(Math.floor((t.y+t.h+this.posY)/n)+1)}for(var o=0;o<r.length;o+=1)for(;this.pdf.internal.getNumberOfPages()<r[o];)b.call(this);return r},b=function(){var t=this.fillStyle,e=this.strokeStyle,n=this.font,r=this.lineCap,i=this.lineWidth,a=this.lineJoin;this.pdf.addPage(),this.fillStyle=t,this.strokeStyle=e,this.font=n,this.lineCap=r,this.lineWidth=i,this.lineJoin=a},y=function(t,e,n){for(var r=0;r<t.length;r++)switch(t[r].type){case"bct":t[r].x2+=e,t[r].y2+=n;case"qct":t[r].x1+=e,t[r].y1+=n;case"mt":case"lt":case"arc":default:t[r].x+=e,t[r].y+=n}return t},w=function(t){return t.sort((function(t,e){return t-e}))},N=function(t,e){for(var n,r,i=this.fillStyle,a=this.strokeStyle,o=this.lineCap,s=this.lineWidth,u=s*this.ctx.transform.scaleX,c=this.lineJoin,h=JSON.parse(JSON.stringify(this.path)),l=JSON.parse(JSON.stringify(this.path)),f=[],d=0;d<l.length;d++)if(void 0!==l[d].x)for(var p=v.call(this,l[d]),g=0;g<p.length;g+=1)-1===f.indexOf(p[g])&&f.push(p[g]);for(var m=0;m<f.length;m++)for(;this.pdf.internal.getNumberOfPages()<f[m];)b.call(this);if(w(f),this.autoPaging)for(var N=f[0],x=f[f.length-1],A=N;A<x+1;A++){if(this.pdf.setPage(A),this.fillStyle=i,this.strokeStyle=a,this.lineCap=o,this.lineWidth=u,this.lineJoin=c,0!==this.ctx.clip_path.length){var _=this.path;n=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=y(n,this.posX,-1*this.pdf.internal.pageSize.height*(A-1)+this.posY),L.call(this,t,!0),this.path=_}r=JSON.parse(JSON.stringify(h)),this.path=y(r,this.posX,-1*this.pdf.internal.pageSize.height*(A-1)+this.posY),!1!==e&&0!==A||L.call(this,t,e),this.lineWidth=s}else this.lineWidth=u,L.call(this,t,e),this.lineWidth=s;this.path=h},L=function(t,e){if(("stroke"!==t||e||!m.call(this))&&("stroke"===t||e||!g.call(this))){for(var n,r,i=[],a=this.path,o=0;o<a.length;o++){var s=a[o];switch(s.type){case"begin":i.push({begin:!0});break;case"close":i.push({close:!0});break;case"mt":i.push({start:s,deltas:[],abs:[]});break;case"lt":var u=i.length;if(!isNaN(a[o-1].x)&&(n=[s.x-a[o-1].x,s.y-a[o-1].y],u>0))for(;u>=0;u--)if(!0!==i[u-1].close&&!0!==i[u-1].begin){i[u-1].deltas.push(n),i[u-1].abs.push(s);break}break;case"bct":n=[s.x1-a[o-1].x,s.y1-a[o-1].y,s.x2-a[o-1].x,s.y2-a[o-1].y,s.x-a[o-1].x,s.y-a[o-1].y],i[i.length-1].deltas.push(n);break;case"qct":var c=a[o-1].x+2/3*(s.x1-a[o-1].x),h=a[o-1].y+2/3*(s.y1-a[o-1].y),l=s.x+2/3*(s.x1-s.x),f=s.y+2/3*(s.y1-s.y),d=s.x,p=s.y;n=[c-a[o-1].x,h-a[o-1].y,l-a[o-1].x,f-a[o-1].y,d-a[o-1].x,p-a[o-1].y],i[i.length-1].deltas.push(n);break;case"arc":i.push({deltas:[],abs:[],arc:!0}),Array.isArray(i[i.length-1].abs)&&i[i.length-1].abs.push(s)}}r=e?null:"stroke"===t?"stroke":"fill";for(var v=0;v<i.length;v++){if(i[v].arc){for(var b=i[v].abs,y=0;y<b.length;y++){var w=b[y];"arc"===w.type?A.call(this,w.x,w.y,w.radius,w.startAngle,w.endAngle,w.counterclockwise,void 0,e):F.call(this,w.x,w.y)}_.call(this,r),this.pdf.internal.out("h")}if(!i[v].arc&&!0!==i[v].close&&!0!==i[v].begin){var N=i[v].start.x,L=i[v].start.y;I.call(this,i[v].deltas,N,L)}}r&&_.call(this,r),e&&S.call(this)}},x=function(t){var e=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,n=e*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return t-n;case"top":return t+e-n;case"hanging":return t+e-2*n;case"middle":return t+e/2-n;case"ideographic":return t;case"alphabetic":default:return t}};d.prototype.createLinearGradient=function(){var t=function(){};return t.colorStops=[],t.addColorStop=function(t,e){this.colorStops.push([t,e])},t.getColor=function(){return 0===this.colorStops.length?"#000000":this.colorStops[0][1]},t.isCanvasGradient=!0,t},d.prototype.createPattern=function(){return this.createLinearGradient()},d.prototype.createRadialGradient=function(){return this.createLinearGradient()};var A=function(t,e,n,r,i,a,o,s){for(var u=j.call(this,n,r,i,a),c=0;c<u.length;c++){var h=u[c];0===c&&P.call(this,h.x1+t,h.y1+e),C.call(this,t,e,h.x2,h.y2,h.x3,h.y3,h.x4,h.y4)}s?S.call(this):_.call(this,o)},_=function(t){switch(t){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},S=function(){this.pdf.clip(),this.pdf.discardPath()},P=function(t,e){this.pdf.internal.out(r(t)+" "+i(e)+" m")},k=function(t){var e;switch(t.align){case"right":case"end":e="right";break;case"center":e="center";break;case"left":case"start":default:e="left"}var n=this.ctx.transform.applyToPoint(new s(t.x,t.y)),r=this.ctx.transform.decompose(),i=new h;i=(i=(i=i.multiply(r.translate)).multiply(r.skew)).multiply(r.scale);for(var a,o,c,l=this.pdf.getTextDimensions(t.text),f=this.ctx.transform.applyToRectangle(new u(t.x,t.y,l.w,l.h)),d=i.applyToRectangle(new u(t.x,t.y-l.h,l.w,l.h)),p=v.call(this,d),g=[],m=0;m<p.length;m+=1)-1===g.indexOf(p[m])&&g.push(p[m]);if(w(g),!0===this.autoPaging)for(var b=g[0],N=g[g.length-1],x=b;x<N+1;x++){if(this.pdf.setPage(x),0!==this.ctx.clip_path.length){var A=this.path;a=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=y(a,this.posX,-1*this.pdf.internal.pageSize.height*(x-1)+this.posY),L.call(this,"fill",!0),this.path=A}var _=JSON.parse(JSON.stringify(f));_=y([_],this.posX,-1*this.pdf.internal.pageSize.height*(x-1)+this.posY)[0],t.scale>=.01&&(o=this.pdf.internal.getFontSize(),this.pdf.setFontSize(o*t.scale),c=this.lineWidth,this.lineWidth=c*t.scale),this.pdf.text(t.text,_.x,_.y,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),t.scale>=.01&&(this.pdf.setFontSize(o),this.lineWidth=c)}else t.scale>=.01&&(o=this.pdf.internal.getFontSize(),this.pdf.setFontSize(o*t.scale),c=this.lineWidth,this.lineWidth=c*t.scale),this.pdf.text(t.text,n.x+this.posX,n.y+this.posY,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),t.scale>=.01&&(this.pdf.setFontSize(o),this.lineWidth=c)},F=function(t,e,n,a){n=n||0,a=a||0,this.pdf.internal.out(r(t+n)+" "+i(e+a)+" l")},I=function(t,e,n){return this.pdf.lines(t,e,n,null,null)},C=function(t,n,r,i,s,u,c,h){this.pdf.internal.out([e(a(r+t)),e(o(i+n)),e(a(s+t)),e(o(u+n)),e(a(c+t)),e(o(h+n)),"c"].join(" "))},j=function(t,e,n,r){for(var i=2*Math.PI,a=Math.PI/2;e>n;)e-=i;var o=Math.abs(n-e);o<i&&r&&(o=i-o);for(var s=[],u=r?-1:1,c=e;o>1e-5;){var h=c+u*Math.min(o,a);s.push(B.call(this,t,c,h)),o-=Math.abs(h-c),c=h}return s},B=function(t,e,n){var r=(n-e)/2,i=t*Math.cos(r),a=t*Math.sin(r),o=i,s=-a,u=o*o+s*s,c=u+o*i+s*a,h=4/3*(Math.sqrt(2*u*c)-c)/(o*a-s*i),l=o-h*s,f=s+h*o,d=l,p=-f,g=r+e,m=Math.cos(g),v=Math.sin(g);return{x1:t*Math.cos(e),y1:t*Math.sin(e),x2:l*m-f*v,y2:l*v+f*m,x3:d*m-p*v,y3:d*v+p*m,x4:t*Math.cos(n),y4:t*Math.sin(n)}},O=function(t){return 180*t/Math.PI},M=function(t,e,n,r,i,a){var o=t+.5*(n-t),s=e+.5*(r-e),c=i+.5*(n-i),h=a+.5*(r-a),l=Math.min(t,i,o,c),f=Math.max(t,i,o,c),d=Math.min(e,a,s,h),p=Math.max(e,a,s,h);return new u(l,d,f-l,p-d)},E=function(t,e,n,r,i,a,o,s){var c,h,l,f,d,p,g,m,v,b,y,w,N,L,x=n-t,A=r-e,_=i-n,S=a-r,P=o-i,k=s-a;for(h=0;h<41;h++)v=(g=(l=t+(c=h/40)*x)+c*((d=n+c*_)-l))+c*(d+c*(i+c*P-d)-g),b=(m=(f=e+c*A)+c*((p=r+c*S)-f))+c*(p+c*(a+c*k-p)-m),0==h?(y=v,w=b,N=v,L=b):(y=Math.min(y,v),w=Math.min(w,b),N=Math.max(N,v),L=Math.max(L,b));return new u(Math.round(y),Math.round(w),Math.round(N-y),Math.round(L-w))}}(g.API);
/**
 * @license
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var lt=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];function ft(){var t=this;function e(t,e){var n=0;do{n|=1&t,t>>>=1,n<<=1}while(--e>0);return n>>>1}t.build_tree=function(n){var r,i,a,o=t.dyn_tree,s=t.stat_desc.static_tree,u=t.stat_desc.elems,c=-1;for(n.heap_len=0,n.heap_max=573,r=0;r<u;r++)0!==o[2*r]?(n.heap[++n.heap_len]=c=r,n.depth[r]=0):o[2*r+1]=0;for(;n.heap_len<2;)o[2*(a=n.heap[++n.heap_len]=c<2?++c:0)]=1,n.depth[a]=0,n.opt_len--,s&&(n.static_len-=s[2*a+1]);for(t.max_code=c,r=Math.floor(n.heap_len/2);r>=1;r--)n.pqdownheap(o,r);a=u;do{r=n.heap[1],n.heap[1]=n.heap[n.heap_len--],n.pqdownheap(o,1),i=n.heap[1],n.heap[--n.heap_max]=r,n.heap[--n.heap_max]=i,o[2*a]=o[2*r]+o[2*i],n.depth[a]=Math.max(n.depth[r],n.depth[i])+1,o[2*r+1]=o[2*i+1]=a,n.heap[1]=a++,n.pqdownheap(o,1)}while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],function(e){var n,r,i,a,o,s,u=t.dyn_tree,c=t.stat_desc.static_tree,h=t.stat_desc.extra_bits,l=t.stat_desc.extra_base,f=t.stat_desc.max_length,d=0;for(a=0;a<=15;a++)e.bl_count[a]=0;for(u[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<573;n++)(a=u[2*u[2*(r=e.heap[n])+1]+1]+1)>f&&(a=f,d++),u[2*r+1]=a,r>t.max_code||(e.bl_count[a]++,o=0,r>=l&&(o=h[r-l]),s=u[2*r],e.opt_len+=s*(a+o),c&&(e.static_len+=s*(c[2*r+1]+o)));if(0!==d){do{for(a=f-1;0===e.bl_count[a];)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[f]--,d-=2}while(d>0);for(a=f;0!==a;a--)for(r=e.bl_count[a];0!==r;)(i=e.heap[--n])>t.max_code||(u[2*i+1]!==a&&(e.opt_len+=(a-u[2*i+1])*u[2*i],u[2*i+1]=a),r--)}}(n),function(t,n,r){var i,a,o,s=[],u=0;for(i=1;i<=15;i++)s[i]=u=u+r[i-1]<<1;for(a=0;a<=n;a++)0!==(o=t[2*a+1])&&(t[2*a]=e(s[o]++,o))}(o,t.max_code,n.bl_count)}}function dt(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i}ft._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],ft.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],ft.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],ft.d_code=function(t){return t<256?lt[t]:lt[256+(t>>>7)]},ft.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ft.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ft.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ft.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],dt.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],dt.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],dt.static_l_desc=new dt(dt.static_ltree,ft.extra_lbits,257,286,15),dt.static_d_desc=new dt(dt.static_dtree,ft.extra_dbits,0,30,15),dt.static_bl_desc=new dt(null,ft.extra_blbits,0,19,7);function pt(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i}var gt,mt,vt,bt=[new pt(0,0,0,0,0),new pt(4,4,8,4,1),new pt(4,5,16,8,1),new pt(4,6,32,32,1),new pt(4,4,16,16,2),new pt(8,16,32,32,2),new pt(8,16,128,128,2),new pt(8,32,128,256,2),new pt(32,128,258,1024,2),new pt(32,258,258,4096,2)],yt=["need dictionary","stream end","","","stream error","data error","","buffer error","",""];function wt(t,e,n,r){var i=t[2*e],a=t[2*n];return i<a||i===a&&r[e]<=r[n]}function Nt(){var t,e,n,r,i,a,o,s,u,c,h,l,f,d,p,g,m,v,b,y,w,N,L,x,A,_,S,P,k,F,I,C,j,B,O,M,E,q,R,T,D,U=this,z=new ft,H=new ft,W=new ft;function V(){var t;for(t=0;t<286;t++)I[2*t]=0;for(t=0;t<30;t++)C[2*t]=0;for(t=0;t<19;t++)j[2*t]=0;I[512]=1,U.opt_len=U.static_len=0,M=q=0}function G(t,e){var n,r,i=-1,a=t[1],o=0,s=7,u=4;for(0===a&&(s=138,u=3),t[2*(e+1)+1]=65535,n=0;n<=e;n++)r=a,a=t[2*(n+1)+1],++o<s&&r===a||(o<u?j[2*r]+=o:0!==r?(r!==i&&j[2*r]++,j[32]++):o<=10?j[34]++:j[36]++,o=0,i=r,0===a?(s=138,u=3):r===a?(s=6,u=3):(s=7,u=4))}function Y(t){U.pending_buf[U.pending++]=t}function J(t){Y(255&t),Y(t>>>8&255)}function X(t,e){var n,r=e;D>16-r?(J(T|=(n=t)<<D&65535),T=n>>>16-D,D+=r-16):(T|=t<<D&65535,D+=r)}function K(t,e){var n=2*t;X(65535&e[n],65535&e[n+1])}function Z(t,e){var n,r,i=-1,a=t[1],o=0,s=7,u=4;for(0===a&&(s=138,u=3),n=0;n<=e;n++)if(r=a,a=t[2*(n+1)+1],!(++o<s&&r===a)){if(o<u)do{K(r,j)}while(0!=--o);else 0!==r?(r!==i&&(K(r,j),o--),K(16,j),X(o-3,2)):o<=10?(K(17,j),X(o-3,3)):(K(18,j),X(o-11,7));o=0,i=r,0===a?(s=138,u=3):r===a?(s=6,u=3):(s=7,u=4)}}function $(){16===D?(J(T),T=0,D=0):D>=8&&(Y(255&T),T>>>=8,D-=8)}function Q(t,e){var n,r,i;if(U.pending_buf[E+2*M]=t>>>8&255,U.pending_buf[E+2*M+1]=255&t,U.pending_buf[B+M]=255&e,M++,0===t?I[2*e]++:(q++,t--,I[2*(ft._length_code[e]+256+1)]++,C[2*ft.d_code(t)]++),0==(8191&M)&&S>2){for(n=8*M,r=w-m,i=0;i<30;i++)n+=C[2*i]*(5+ft.extra_dbits[i]);if(n>>>=3,q<Math.floor(M/2)&&n<Math.floor(r/2))return!0}return M===O-1}function tt(t,e){var n,r,i,a,o=0;if(0!==M)do{n=U.pending_buf[E+2*o]<<8&65280|255&U.pending_buf[E+2*o+1],r=255&U.pending_buf[B+o],o++,0===n?K(r,t):(K((i=ft._length_code[r])+256+1,t),0!==(a=ft.extra_lbits[i])&&X(r-=ft.base_length[i],a),n--,K(i=ft.d_code(n),e),0!==(a=ft.extra_dbits[i])&&X(n-=ft.base_dist[i],a))}while(o<M);K(256,t),R=t[513]}function et(){D>8?J(T):D>0&&Y(255&T),T=0,D=0}function nt(t,e,n){X(0+(n?1:0),3),function(t,e,n){et(),R=8,n&&(J(e),J(~e)),U.pending_buf.set(s.subarray(t,t+e),U.pending),U.pending+=e}(t,e,!0)}function rt(t,e,n){var r,i,a=0;S>0?(z.build_tree(U),H.build_tree(U),a=function(){var t;for(G(I,z.max_code),G(C,H.max_code),W.build_tree(U),t=18;t>=3&&0===j[2*ft.bl_order[t]+1];t--);return U.opt_len+=3*(t+1)+5+5+4,t}(),r=U.opt_len+3+7>>>3,(i=U.static_len+3+7>>>3)<=r&&(r=i)):r=i=e+5,e+4<=r&&-1!==t?nt(t,e,n):i===r?(X(2+(n?1:0),3),tt(dt.static_ltree,dt.static_dtree)):(X(4+(n?1:0),3),function(t,e,n){var r;for(X(t-257,5),X(e-1,5),X(n-4,4),r=0;r<n;r++)X(j[2*ft.bl_order[r]+1],3);Z(I,t-1),Z(C,e-1)}(z.max_code+1,H.max_code+1,a+1),tt(I,C)),V(),n&&et()}function it(e){rt(m>=0?m:-1,w-m,e),m=w,t.flush_pending()}function at(){var e,n,r,a;do{if(0===(a=u-L-w)&&0===w&&0===L)a=i;else if(-1===a)a--;else if(w>=i+i-262){s.set(s.subarray(i,i+i),0),N-=i,w-=i,m-=i,r=e=f;do{n=65535&h[--r],h[r]=n>=i?n-i:0}while(0!=--e);r=e=i;do{n=65535&c[--r],c[r]=n>=i?n-i:0}while(0!=--e);a+=i}if(0===t.avail_in)return;e=t.read_buf(s,w+L,a),(L+=e)>=3&&(l=((l=255&s[w])<<g^255&s[w+1])&p)}while(L<262&&0!==t.avail_in)}function ot(t){var e,n,r=A,a=w,u=x,h=w>i-262?w-(i-262):0,l=F,f=o,d=w+258,p=s[a+u-1],g=s[a+u];x>=k&&(r>>=2),l>L&&(l=L);do{if(s[(e=t)+u]===g&&s[e+u-1]===p&&s[e]===s[a]&&s[++e]===s[a+1]){a+=2,e++;do{}while(s[++a]===s[++e]&&s[++a]===s[++e]&&s[++a]===s[++e]&&s[++a]===s[++e]&&s[++a]===s[++e]&&s[++a]===s[++e]&&s[++a]===s[++e]&&s[++a]===s[++e]&&a<d);if(n=258-(d-a),a=d-258,n>u){if(N=t,u=n,n>=l)break;p=s[a+u-1],g=s[a+u]}}}while((t=65535&c[t&f])>h&&0!=--r);return u<=L?u:L}function st(t){return t.total_in=t.total_out=0,t.msg=null,U.pending=0,U.pending_out=0,e=113,r=0,z.dyn_tree=I,z.stat_desc=dt.static_l_desc,H.dyn_tree=C,H.stat_desc=dt.static_d_desc,W.dyn_tree=j,W.stat_desc=dt.static_bl_desc,T=0,D=0,R=8,V(),function(){var t;for(u=2*i,h[f-1]=0,t=0;t<f-1;t++)h[t]=0;_=bt[S].max_lazy,k=bt[S].good_length,F=bt[S].nice_length,A=bt[S].max_chain,w=0,m=0,L=0,v=x=2,y=0,l=0}(),0}U.depth=[],U.bl_count=[],U.heap=[],I=[],C=[],j=[],U.pqdownheap=function(t,e){for(var n=U.heap,r=n[e],i=e<<1;i<=U.heap_len&&(i<U.heap_len&&wt(t,n[i+1],n[i],U.depth)&&i++,!wt(t,r,n[i],U.depth));)n[e]=n[i],e=i,i<<=1;n[e]=r},U.deflateInit=function(t,e,r,u,l,m){return u||(u=8),l||(l=8),m||(m=0),t.msg=null,-1===e&&(e=6),l<1||l>9||8!==u||r<9||r>15||e<0||e>9||m<0||m>2?-2:(t.dstate=U,o=(i=1<<(a=r))-1,p=(f=1<<(d=l+7))-1,g=Math.floor((d+3-1)/3),s=new Uint8Array(2*i),c=[],h=[],O=1<<l+6,U.pending_buf=new Uint8Array(4*O),n=4*O,E=Math.floor(O/2),B=3*O,S=e,P=m,st(t))},U.deflateEnd=function(){return 42!==e&&113!==e&&666!==e?-2:(U.pending_buf=null,h=null,c=null,s=null,U.dstate=null,113===e?-3:0)},U.deflateParams=function(t,e,n){var r=0;return-1===e&&(e=6),e<0||e>9||n<0||n>2?-2:(bt[S].func!==bt[e].func&&0!==t.total_in&&(r=t.deflate(1)),S!==e&&(_=bt[S=e].max_lazy,k=bt[S].good_length,F=bt[S].nice_length,A=bt[S].max_chain),P=n,r)},U.deflateSetDictionary=function(t,n,r){var a,u=r,f=0;if(!n||42!==e)return-2;if(u<3)return 0;for(u>i-262&&(f=r-(u=i-262)),s.set(n.subarray(f,f+u),0),w=u,m=u,l=((l=255&s[0])<<g^255&s[1])&p,a=0;a<=u-3;a++)l=(l<<g^255&s[a+2])&p,c[a&o]=h[l],h[l]=a;return 0},U.deflate=function(u,d){var A,k,F,I,C,j;if(d>4||d<0)return-2;if(!u.next_out||!u.next_in&&0!==u.avail_in||666===e&&4!==d)return u.msg=yt[4],-2;if(0===u.avail_out)return u.msg=yt[7],-5;if(t=u,I=r,r=d,42===e&&(k=8+(a-8<<4)<<8,(F=(S-1&255)>>1)>3&&(F=3),k|=F<<6,0!==w&&(k|=32),e=113,Y((j=k+=31-k%31)>>8&255),Y(255&j)),0!==U.pending){if(t.flush_pending(),0===t.avail_out)return r=-1,0}else if(0===t.avail_in&&d<=I&&4!==d)return t.msg=yt[7],-5;if(666===e&&0!==t.avail_in)return u.msg=yt[7],-5;if(0!==t.avail_in||0!==L||0!==d&&666!==e){switch(C=-1,bt[S].func){case 0:C=function(e){var r,a=65535;for(a>n-5&&(a=n-5);;){if(L<=1){if(at(),0===L&&0===e)return 0;if(0===L)break}if(w+=L,L=0,r=m+a,(0===w||w>=r)&&(L=w-r,w=r,it(!1),0===t.avail_out))return 0;if(w-m>=i-262&&(it(!1),0===t.avail_out))return 0}return it(4===e),0===t.avail_out?4===e?2:0:4===e?3:1}(d);break;case 1:C=function(e){for(var n,r=0;;){if(L<262){if(at(),L<262&&0===e)return 0;if(0===L)break}if(L>=3&&(l=(l<<g^255&s[w+2])&p,r=65535&h[l],c[w&o]=h[l],h[l]=w),0!==r&&(w-r&65535)<=i-262&&2!==P&&(v=ot(r)),v>=3)if(n=Q(w-N,v-3),L-=v,v<=_&&L>=3){v--;do{w++,l=(l<<g^255&s[w+2])&p,r=65535&h[l],c[w&o]=h[l],h[l]=w}while(0!=--v);w++}else w+=v,v=0,l=((l=255&s[w])<<g^255&s[w+1])&p;else n=Q(0,255&s[w]),L--,w++;if(n&&(it(!1),0===t.avail_out))return 0}return it(4===e),0===t.avail_out?4===e?2:0:4===e?3:1}(d);break;case 2:C=function(e){for(var n,r,a=0;;){if(L<262){if(at(),L<262&&0===e)return 0;if(0===L)break}if(L>=3&&(l=(l<<g^255&s[w+2])&p,a=65535&h[l],c[w&o]=h[l],h[l]=w),x=v,b=N,v=2,0!==a&&x<_&&(w-a&65535)<=i-262&&(2!==P&&(v=ot(a)),v<=5&&(1===P||3===v&&w-N>4096)&&(v=2)),x>=3&&v<=x){r=w+L-3,n=Q(w-1-b,x-3),L-=x-1,x-=2;do{++w<=r&&(l=(l<<g^255&s[w+2])&p,a=65535&h[l],c[w&o]=h[l],h[l]=w)}while(0!=--x);if(y=0,v=2,w++,n&&(it(!1),0===t.avail_out))return 0}else if(0!==y){if((n=Q(0,255&s[w-1]))&&it(!1),w++,L--,0===t.avail_out)return 0}else y=1,w++,L--}return 0!==y&&(n=Q(0,255&s[w-1]),y=0),it(4===e),0===t.avail_out?4===e?2:0:4===e?3:1}(d)}if(2!==C&&3!==C||(e=666),0===C||2===C)return 0===t.avail_out&&(r=-1),0;if(1===C){if(1===d)X(2,3),K(256,dt.static_ltree),$(),1+R+10-D<9&&(X(2,3),K(256,dt.static_ltree),$()),R=7;else if(nt(0,0,!1),3===d)for(A=0;A<f;A++)h[A]=0;if(t.flush_pending(),0===t.avail_out)return r=-1,0}}return 4!==d?0:1}}function Lt(){this.next_in_index=0,this.next_out_index=0,this.avail_in=0,this.total_in=0,this.avail_out=0,this.total_out=0}function xt(t){var e=new Lt,n=new Uint8Array(512),r=t?t.level:-1;void 0===r&&(r=-1),e.deflateInit(r),e.next_out=n,this.append=function(t,r){var i,a=[],o=0,s=0,u=0;if(t.length){e.next_in_index=0,e.next_in=t,e.avail_in=t.length;do{if(e.next_out_index=0,e.avail_out=512,0!==e.deflate(0))throw new Error("deflating: "+e.msg);e.next_out_index&&(512===e.next_out_index?a.push(new Uint8Array(n)):a.push(new Uint8Array(n.subarray(0,e.next_out_index)))),u+=e.next_out_index,r&&e.next_in_index>0&&e.next_in_index!==o&&(r(e.next_in_index),o=e.next_in_index)}while(e.avail_in>0||0===e.avail_out);return i=new Uint8Array(u),a.forEach((function(t){i.set(t,s),s+=t.length})),i}},this.flush=function(){var t,r,i=[],a=0,o=0;do{if(e.next_out_index=0,e.avail_out=512,1!==(t=e.deflate(4))&&0!==t)throw new Error("deflating: "+e.msg);512-e.avail_out>0&&i.push(new Uint8Array(n.subarray(0,e.next_out_index))),o+=e.next_out_index}while(e.avail_in>0||0===e.avail_out);return e.deflateEnd(),r=new Uint8Array(o),i.forEach((function(t){r.set(t,a),a+=t.length})),r}}
/**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */Lt.prototype={deflateInit:function(t,e){return this.dstate=new Nt,e||(e=15),this.dstate.deflateInit(this,t,e)},deflate:function(t){return this.dstate?this.dstate.deflate(this,t):-2},deflateEnd:function(){if(!this.dstate)return-2;var t=this.dstate.deflateEnd();return this.dstate=null,t},deflateParams:function(t,e){return this.dstate?this.dstate.deflateParams(this,t,e):-2},deflateSetDictionary:function(t,e){return this.dstate?this.dstate.deflateSetDictionary(this,t,e):-2},read_buf:function(t,e,n){var r=this.avail_in;return r>n&&(r=n),0===r?0:(this.avail_in-=r,t.set(this.next_in.subarray(this.next_in_index,this.next_in_index+r),e),this.next_in_index+=r,this.total_in+=r,r)},flush_pending:function(){var t=this.dstate.pending;t>this.avail_out&&(t=this.avail_out),0!==t&&(this.next_out.set(this.dstate.pending_buf.subarray(this.dstate.pending_out,this.dstate.pending_out+t),this.next_out_index),this.next_out_index+=t,this.dstate.pending_out+=t,this.total_out+=t,this.avail_out-=t,this.dstate.pending-=t,0===this.dstate.pending&&(this.dstate.pending_out=0))}},function(t){var e=function(t){var e,n,r,i,a,o,s,u,c,h;for(/[^\x00-\xFF]/.test(t),n=[],r=0,i=(t+=e="\0\0\0\0".slice(t.length%4||4)).length;i>r;r+=4)0!==(a=(t.charCodeAt(r)<<24)+(t.charCodeAt(r+1)<<16)+(t.charCodeAt(r+2)<<8)+t.charCodeAt(r+3))?(o=(a=((a=((a=((a=(a-(h=a%85))/85)-(c=a%85))/85)-(u=a%85))/85)-(s=a%85))/85)%85,n.push(o+33,s+33,u+33,c+33,h+33)):n.push(122);return function(t,e){for(var n=e;n>0;n--)t.pop()}(n,e.length),String.fromCharCode.apply(String,n)+"~>"},n=function(t){var e,n,r,i,a,o=String,s="length",u=255,c="charCodeAt",h="slice",l="replace";for(t[h](-2),t=t[h](0,-2)[l](/\s/g,"")[l]("z","!!!!!"),r=[],i=0,a=(t+=e="uuuuu"[h](t[s]%5||5))[s];a>i;i+=5)n=52200625*(t[c](i)-33)+614125*(t[c](i+1)-33)+7225*(t[c](i+2)-33)+85*(t[c](i+3)-33)+(t[c](i+4)-33),r.push(u&n>>24,u&n>>16,u&n>>8,u&n);return function(t,e){for(var n=e;n>0;n--)t.pop()}(r,e[s]),o.fromCharCode.apply(o,r)},r=function(t){var e=new RegExp(/^([0-9A-Fa-f]{2})+$/);if(-1!==(t=t.replace(/\s/g,"")).indexOf(">")&&(t=t.substr(0,t.indexOf(">"))),t.length%2&&(t+="0"),!1===e.test(t))return"";for(var n="",r=0;r<t.length;r+=2)n+=String.fromCharCode("0x"+(t[r]+t[r+1]));return n},i=function(e){for(var n,r,i,a,o,s=[],u=e.length;u--;)s[u]=e.charCodeAt(u);return n=t.adler32cs.from(e),e=(r=new xt(6)).append(new Uint8Array(s)),i=e,a=r.flush(),(o=new Uint8Array(i.byteLength+a.byteLength)).set(new Uint8Array(i),0),o.set(new Uint8Array(a),i.byteLength),e=o,(s=new Uint8Array(e.byteLength+6)).set(new Uint8Array([120,156])),s.set(e,2),s.set(new Uint8Array([255&n,n>>8&255,n>>16&255,n>>24&255]),e.byteLength+2),e=s.reduce((function(t,e){return t+String.fromCharCode(e)}),"")};t.processDataByFilters=function(t,a){var o=0,s=t||"",u=[];for("string"==typeof(a=a||[])&&(a=[a]),o=0;o<a.length;o+=1)switch(a[o]){case"ASCII85Decode":case"/ASCII85Decode":s=n(s),u.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":s=e(s),u.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":s=r(s),u.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":s=s.split("").map((function(t){return("0"+t.charCodeAt().toString(16)).slice(-2)})).join("")+">",u.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":s=i(s),u.push("/FlateDecode");break;default:throw new Error('The filter: "'+a[o]+'" is not implemented')}return{data:s,reverseChain:u.reverse().join(" ")}}}(g.API),
/**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.loadFile=function(t,e,n){return function(t,e,n){e=!1!==e,n="function"==typeof n?n:function(){};var r=void 0;try{r=function(t,e,n){var r=new XMLHttpRequest,i=0,a=function(t){var e=t.length,n=[],r=String.fromCharCode;for(i=0;i<e;i+=1)n.push(r(255&t.charCodeAt(i)));return n.join("")};if(r.open("GET",t,!e),r.overrideMimeType("text/plain; charset=x-user-defined"),!1===e&&(r.onload=function(){200===r.status?n(a(this.responseText)):n(void 0)}),r.send(null),e&&200===r.status)return a(r.responseText)}(t,e,n)}catch(t){}return r}(t,e,n)},t.loadImageFile=t.loadFile}(g.API),
/**
 * @license
 * Copyright (c) 2018 Erik Koopmans
 * Released under the MIT License.
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(e){function n(){return(t.html2canvas?Promise.resolve(t.html2canvas):__webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 520))).catch((function(t){return Promise.reject(new Error("Could not load dompurify: "+t))})).then((function(t){return t.default?t.default:t}))}function r(){return(t.DOMPurify?Promise.resolve(t.DOMPurify):__webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 519))).catch((function(t){return Promise.reject(new Error("Could not load dompurify: "+t))})).then((function(t){return t.default?t.default:t}))}var i=function(t){var e=typeof t;return"undefined"===e?"undefined":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?"function":t&&t.constructor===Array?"array":t&&1===t.nodeType?"element":"object"===e?"object":"unknown"},a=function(t,e){var n=document.createElement(t);for(var r in e.className&&(n.className=e.className),e.innerHTML&&e.dompurify&&(n.innerHTML=e.dompurify.sanitize(e.innerHTML)),e.style)n.style[r]=e.style[r];return n},o=function(t,e){for(var n=3===t.nodeType?document.createTextNode(t.nodeValue):t.cloneNode(!1),r=t.firstChild;r;r=r.nextSibling)!0!==e&&1===r.nodeType&&"SCRIPT"===r.nodeName||n.appendChild(o(r,e));return 1===t.nodeType&&("CANVAS"===t.nodeName?(n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(t,0,0)):"TEXTAREA"!==t.nodeName&&"SELECT"!==t.nodeName||(n.value=t.value),n.addEventListener("load",(function(){n.scrollTop=t.scrollTop,n.scrollLeft=t.scrollLeft}),!0)),n},s=function t(e){var n=Object.assign(t.convert(Promise.resolve()),JSON.parse(JSON.stringify(t.template))),r=t.convert(Promise.resolve(),n);return r=(r=r.setProgress(1,t,1,[t])).set(e)};(s.prototype=Object.create(Promise.prototype)).constructor=s,s.convert=function(t,e){return t.__proto__=e||s.prototype,t},s.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},s.prototype.from=function(t,e){return this.then((function(){switch(e=e||function(t){switch(i(t)){case"string":return"string";case"element":return"canvas"===t.nodeName.toLowerCase?"canvas":"element";default:return"unknown"}}(t)){case"string":return this.then(r).then((function(e){return this.set({src:a("div",{innerHTML:t,dompurify:e})})}));case"element":return this.set({src:t});case"canvas":return this.set({canvas:t});case"img":return this.set({img:t});default:return this.error("Unknown source type.")}}))},s.prototype.to=function(t){switch(t){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},s.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then((function(){var t={position:"relative",display:"inline-block",width:Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},e=o(this.prop.src,this.opt.html2canvas.javascriptEnabled);"BODY"===e.tagName&&(t.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=a("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=a("div",{className:"html2pdf__container",style:t}),this.prop.container.appendChild(e),this.prop.container.firstChild.appendChild(a("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"}))},s.prototype.toCanvas=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(n).then((function(t){var e=Object.assign({},this.opt.html2canvas);return delete e.onrendered,t(this.prop.container,e)})).then((function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)}))},s.prototype.toContext2d=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(n).then((function(t){var e=this.opt.jsPDF,n=Object.assign({async:!0,allowTaint:!0,scale:1,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);return delete n.onrendered,e.context2d.autoPaging=!0,e.context2d.posX=this.opt.x,e.context2d.posY=this.opt.y,n.windowHeight=n.windowHeight||0,n.windowHeight=0==n.windowHeight?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):n.windowHeight,t(this.prop.container,n)})).then((function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)}))},s.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then((function(){var t=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=t}))},s.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then((function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF}))},s.prototype.output=function(t,e,n){return"img"===(n=n||"pdf").toLowerCase()||"image"===n.toLowerCase()?this.outputImg(t,e):this.outputPdf(t,e)},s.prototype.outputPdf=function(t,e){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){return this.prop.pdf.output(t,e)}))},s.prototype.outputImg=function(t){return this.thenList([function(){return this.prop.img||this.toImg()}]).then((function(){switch(t){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+t+'" is not supported.'}}))},s.prototype.save=function(t){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(t?{filename:t}:null).then((function(){this.prop.pdf.save(this.opt.filename)}))},s.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){this.prop.callback(this.prop.pdf)}))},s.prototype.set=function(t){if("object"!==i(t))return this;var e=Object.keys(t||{}).map((function(e){if(e in s.template.prop)return function(){this.prop[e]=t[e]};switch(e){case"margin":return this.setMargin.bind(this,t.margin);case"jsPDF":return function(){return this.opt.jsPDF=t.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,t.pageSize);default:return function(){this.opt[e]=t[e]}}}),this);return this.then((function(){return this.thenList(e)}))},s.prototype.get=function(t,e){return this.then((function(){var n=t in s.template.prop?this.prop[t]:this.opt[t];return e?e(n):n}))},s.prototype.setMargin=function(t){return this.then((function(){switch(i(t)){case"number":t=[t,t,t,t];case"array":if(2===t.length&&(t=[t[0],t[1],t[0],t[1]]),4===t.length)break;default:return this.error("Invalid margin array.")}this.opt.margin=t})).then(this.setPageSize)},s.prototype.setPageSize=function(t){function e(t,e){return Math.floor(t*e/72*96)}return this.then((function(){(t=t||g.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(t.inner={width:t.width-this.opt.margin[1]-this.opt.margin[3],height:t.height-this.opt.margin[0]-this.opt.margin[2]},t.inner.px={width:e(t.inner.width,t.k),height:e(t.inner.height,t.k)},t.inner.ratio=t.inner.height/t.inner.width),this.prop.pageSize=t}))},s.prototype.setProgress=function(t,e,n,r){return null!=t&&(this.progress.val=t),null!=e&&(this.progress.state=e),null!=n&&(this.progress.n=n),null!=r&&(this.progress.stack=r),this.progress.ratio=this.progress.val/this.progress.state,this},s.prototype.updateProgress=function(t,e,n,r){return this.setProgress(t?this.progress.val+t:null,e||null,n?this.progress.n+n:null,r?this.progress.stack.concat(r):null)},s.prototype.then=function(t,e){var n=this;return this.thenCore(t,e,(function(t,e){return n.updateProgress(null,null,1,[t]),Promise.prototype.then.call(this,(function(e){return n.updateProgress(null,t),e})).then(t,e).then((function(t){return n.updateProgress(1),t}))}))},s.prototype.thenCore=function(t,e,n){n=n||Promise.prototype.then;t&&(t=t.bind(this)),e&&(e=e.bind(this));var r=-1!==Promise.toString().indexOf("[native code]")&&"Promise"===Promise.name?this:s.convert(Object.assign({},this),Promise.prototype),i=n.call(r,t,e);return s.convert(i,this.__proto__)},s.prototype.thenExternal=function(t,e){return Promise.prototype.then.call(this,t,e)},s.prototype.thenList=function(t){var e=this;return t.forEach((function(t){e=e.thenCore(t)})),e},s.prototype.catch=function(t){t&&(t=t.bind(this));var e=Promise.prototype.catch.call(this,t);return s.convert(e,this)},s.prototype.catchExternal=function(t){return Promise.prototype.catch.call(this,t)},s.prototype.error=function(t){return this.then((function(){throw new Error(t)}))},s.prototype.using=s.prototype.set,s.prototype.saveAs=s.prototype.save,s.prototype.export=s.prototype.output,s.prototype.run=s.prototype.then,g.getPageSize=function(t,e,n){if("object"==typeof t){var r=t;t=r.orientation,e=r.unit||e,n=r.format||n}e=e||"mm",n=n||"a4",t=(""+(t||"P")).toLowerCase();var i,a=(""+n).toLowerCase(),o={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(e){case"pt":i=1;break;case"mm":i=72/25.4;break;case"cm":i=72/2.54;break;case"in":i=72;break;case"px":i=.75;break;case"pc":case"em":i=12;break;case"ex":i=6;break;default:throw"Invalid unit: "+e}var s,u=0,c=0;if(o.hasOwnProperty(a))u=o[a][1]/i,c=o[a][0]/i;else try{u=n[1],c=n[0]}catch(t){throw new Error("Invalid format: "+n)}if("p"===t||"portrait"===t)t="p",c>u&&(s=c,c=u,u=s);else{if("l"!==t&&"landscape"!==t)throw"Invalid orientation: "+t;t="l",u>c&&(s=c,c=u,u=s)}return{width:c,height:u,unit:e,k:i,orientation:t}},e.html=function(t,e){(e=e||{}).callback=e.callback||function(){},e.html2canvas=e.html2canvas||{},e.html2canvas.canvas=e.html2canvas.canvas||this.canvas,e.jsPDF=e.jsPDF||this;var n=new s(e);return e.worker?n:n.from(t).doCallback()}}(g.API),g.API.addJS=function(t){return vt=t,this.internal.events.subscribe("postPutResources",(function(){gt=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(gt+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),mt=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+vt+")"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){void 0!==gt&&void 0!==mt&&this.internal.out("/Names <</JavaScript "+gt+" 0 R>>")})),this},
/**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e;t.events.push(["postPutResources",function(){var t=this,n=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var r=t.outline.render().split(/\r\n/),i=0;i<r.length;i++){var a=r[i],o=n.exec(a);if(null!=o){var s=o[1];t.internal.newObjectDeferredBegin(s,!1)}t.internal.write(a)}if(this.outline.createNamedDestinations){var u=this.internal.pages.length,c=[];for(i=0;i<u;i++){var h=t.internal.newObject();c.push(h);var l=t.internal.getPageInfo(i+1);t.internal.write("<< /D["+l.objId+" 0 R /XYZ null null null]>> endobj")}var f=t.internal.newObject();t.internal.write("<< /Names [ ");for(i=0;i<c.length;i++)t.internal.write("(page_"+(i+1)+")"+c[i]+" 0 R");t.internal.write(" ] >>","endobj"),e=t.internal.newObject(),t.internal.write("<< /Dests "+f+" 0 R"),t.internal.write(">>","endobj")}}]),t.events.push(["putCatalog",function(){this.outline.root.children.length>0&&(this.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&this.internal.write("/Names "+e+" 0 R"))}]),t.events.push(["initialized",function(){var t=this;t.outline={createNamedDestinations:!1,root:{children:[]}},t.outline.add=function(t,e,n){var r={title:e,options:n,children:[]};return null==t&&(t=this.root),t.children.push(r),r},t.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=t,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},t.outline.genIds_r=function(e){e.id=t.internal.newObjectDeferred();for(var n=0;n<e.children.length;n++)this.genIds_r(e.children[n])},t.outline.renderRoot=function(t){this.objStart(t),this.line("/Type /Outlines"),t.children.length>0&&(this.line("/First "+this.makeRef(t.children[0])),this.line("/Last "+this.makeRef(t.children[t.children.length-1]))),this.line("/Count "+this.count_r({count:0},t)),this.objEnd()},t.outline.renderItems=function(e){for(var n=this.ctx.pdf.internal.getVerticalCoordinateString,r=0;r<e.children.length;r++){var i=e.children[r];this.objStart(i),this.line("/Title "+this.makeString(i.title)),this.line("/Parent "+this.makeRef(e)),r>0&&this.line("/Prev "+this.makeRef(e.children[r-1])),r<e.children.length-1&&this.line("/Next "+this.makeRef(e.children[r+1])),i.children.length>0&&(this.line("/First "+this.makeRef(i.children[0])),this.line("/Last "+this.makeRef(i.children[i.children.length-1])));var a=this.count=this.count_r({count:0},i);if(a>0&&this.line("/Count "+a),i.options&&i.options.pageNumber){var o=t.internal.getPageInfo(i.options.pageNumber);this.line("/Dest ["+o.objId+" 0 R /XYZ 0 "+n(0)+" 0]")}this.objEnd()}for(var s=0;s<e.children.length;s++)this.renderItems(e.children[s])},t.outline.line=function(t){this.ctx.val+=t+"\r\n"},t.outline.makeRef=function(t){return t.id+" 0 R"},t.outline.makeString=function(e){return"("+t.internal.pdfEscape(e)+")"},t.outline.objStart=function(t){this.ctx.val+="\r\n"+t.id+" 0 obj\r\n<<\r\n"},t.outline.objEnd=function(){this.ctx.val+=">> \r\nendobj\r\n"},t.outline.count_r=function(t,e){for(var n=0;n<e.children.length;n++)t.count++,this.count_r(t,e.children[n]);return t.count}}])}(g.API),
/**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=[192,193,194,195,196,197,198,199];t.processJPEG=function(t,n,r,i,a,o){var s,u=this.decode.DCT_DECODE,c=null;if("string"==typeof t||this.__addimage__.isArrayBuffer(t)||this.__addimage__.isArrayBufferView(t)){switch(t=a||t,t=this.__addimage__.isArrayBuffer(t)?new Uint8Array(t):t,(s=function(t){for(var n,r=256*t.charCodeAt(4)+t.charCodeAt(5),i=t.length,a={width:0,height:0,numcomponents:1},o=4;o<i;o+=2){if(o+=r,-1!==e.indexOf(t.charCodeAt(o+1))){n=256*t.charCodeAt(o+5)+t.charCodeAt(o+6),a={width:256*t.charCodeAt(o+7)+t.charCodeAt(o+8),height:n,numcomponents:t.charCodeAt(o+9)};break}r=256*t.charCodeAt(o+2)+t.charCodeAt(o+3)}return a}(t=this.__addimage__.isArrayBufferView(t)?this.__addimage__.arrayBufferToBinaryString(t):t)).numcomponents){case 1:o=this.color_spaces.DEVICE_GRAY;break;case 4:o=this.color_spaces.DEVICE_CMYK;break;case 3:o=this.color_spaces.DEVICE_RGB}c={data:t,width:s.width,height:s.height,colorSpace:o,bitsPerComponent:8,filter:u,index:n,alias:r}}return c}}(g.API);
/**
 * @license
 * Extracted from pdf.js
 * https://github.com/andreasgal/pdf.js
 *
 * Copyright (c) 2011 Mozilla Foundation
 *
 * Contributors: Andreas Gal <gal@mozilla.com>
 *               Chris G Jones <cjones@mozilla.com>
 *               Shaon Barman <shaon.barman@gmail.com>
 *               Vivien Nicolas <21@vingtetun.org>
 *               Justin D'Arcangelo <justindarc@gmail.com>
 *               Yury Delendik
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
var At,_t,St,Pt,kt,Ft=function(){function t(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return t.prototype={ensureBuffer:function(t){var e=this.buffer,n=e?e.byteLength:0;if(t<n)return e;for(var r=512;r<t;)r<<=1;for(var i=new Uint8Array(r),a=0;a<n;++a)i[a]=e[a];return this.buffer=i},getByte:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(t){var e=this.pos;if(t){this.ensureBuffer(e+t);for(var n=e+t;!this.eof&&this.bufferLength<n;)this.readBlock();var r=this.bufferLength;n>r&&(n=r)}else{for(;!this.eof;)this.readBlock();n=this.bufferLength}return this.pos=n,this.buffer.subarray(e,n)},lookChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(t,e,n){for(var r=t+e;this.bufferLength<=r&&!this.eof;)this.readBlock();return new Stream(this.buffer,t,e,n)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=0}},t}(),It=("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")()).FlateStream=function(){if("undefined"!=typeof Uint32Array){var t=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),e=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),n=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),r=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],i=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];return o.prototype=Object.create(Ft.prototype),o.prototype.getBits=function(t){for(var e,n=this.codeSize,r=this.codeBuf,i=this.bytes,o=this.bytesPos;n<t;)void 0===(e=i[o++])&&a("Bad encoding in flate stream"),r|=e<<n,n+=8;return e=r&(1<<t)-1,this.codeBuf=r>>t,this.codeSize=n-=t,this.bytesPos=o,e},o.prototype.getCode=function(t){for(var e=t[0],n=t[1],r=this.codeSize,i=this.codeBuf,o=this.bytes,s=this.bytesPos;r<n;){var u;void 0===(u=o[s++])&&a("Bad encoding in flate stream"),i|=u<<r,r+=8}var c=e[i&(1<<n)-1],h=c>>16,l=65535&c;return(0==r||r<h||0==h)&&a("Bad encoding in flate stream"),this.codeBuf=i>>h,this.codeSize=r-h,this.bytesPos=s,l},o.prototype.generateHuffmanTable=function(t){for(var e=t.length,n=0,r=0;r<e;++r)t[r]>n&&(n=t[r]);for(var i=1<<n,a=new Uint32Array(i),o=1,s=0,u=2;o<=n;++o,s<<=1,u<<=1)for(var c=0;c<e;++c)if(t[c]==o){var h=0,l=s;for(r=0;r<o;++r)h=h<<1|1&l,l>>=1;for(r=h;r<i;r+=u)a[r]=o<<16|c;++s}return[a,n]},o.prototype.readBlock=function(){function o(t,e,n,r,i){for(var a=t.getBits(n)+r;a-- >0;)e[p++]=i}var s=this.getBits(3);if(1&s&&(this.eof=!0),0!=(s>>=1)){var u,c;if(1==s)u=r,c=i;else if(2==s){for(var h=this.getBits(5)+257,l=this.getBits(5)+1,f=this.getBits(4)+4,d=Array(t.length),p=0;p<f;)d[t[p++]]=this.getBits(3);for(var g=this.generateHuffmanTable(d),m=0,v=(p=0,h+l),b=new Array(v);p<v;){var y=this.getCode(g);16==y?o(this,b,2,3,m):17==y?o(this,b,3,3,m=0):18==y?o(this,b,7,11,m=0):b[p++]=m=y}u=this.generateHuffmanTable(b.slice(0,h)),c=this.generateHuffmanTable(b.slice(h,v))}else a("Unknown block type in flate stream");for(var w=(j=this.buffer)?j.length:0,N=this.bufferLength;;){var L=this.getCode(u);if(L<256)N+1>=w&&(w=(j=this.ensureBuffer(N+1)).length),j[N++]=L;else{if(256==L)return void(this.bufferLength=N);var x=(L=e[L-=257])>>16;x>0&&(x=this.getBits(x));m=(65535&L)+x;L=this.getCode(c),(x=(L=n[L])>>16)>0&&(x=this.getBits(x));var A=(65535&L)+x;N+m>=w&&(w=(j=this.ensureBuffer(N+m)).length);for(var _=0;_<m;++_,++N)j[N]=j[N-A]}}}else{var S,P=this.bytes,k=this.bytesPos;void 0===(S=P[k++])&&a("Bad block header in flate stream");var F=S;void 0===(S=P[k++])&&a("Bad block header in flate stream"),F|=S<<8,void 0===(S=P[k++])&&a("Bad block header in flate stream");var I=S;void 0===(S=P[k++])&&a("Bad block header in flate stream"),(I|=S<<8)!=(65535&~F)&&a("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var C=this.bufferLength,j=this.ensureBuffer(C+F),B=C+F;this.bufferLength=B;for(var O=C;O<B;++O){if(void 0===(S=P[k++])){this.eof=!0;break}j[O]=S}this.bytesPos=k}},o}function a(t){throw new Error(t)}function o(t){var e=0,n=t[e++],r=t[e++];-1!=n&&-1!=r||a("Invalid header in flate stream"),8!=(15&n)&&a("Unknown compression method in flate stream"),((n<<8)+r)%31!=0&&a("Bad FCHECK in flate stream"),32&r&&a("FDICT bit set in flate stream"),this.bytes=t,this.bytesPos=2,this.codeSize=0,this.codeBuf=0,Ft.call(this)}}(),Ct=function(){var e,n,r;function i(t){var e,n,r,i,a,o,s,u,c,h,l,f,d,p;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},o=null;;){switch(e=this.readUInt32(),c=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":o&&this.animation.frames.push(o),this.pos+=4,o={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},a=this.readUInt16(),i=this.readUInt16()||100,o.delay=1e3*a/i,o.disposeOp=this.data[this.pos++],o.blendOp=this.data[this.pos++],o.data=[];break;case"IDAT":case"fdAT":for("fdAT"===c&&(this.pos+=4,e-=4),t=(null!=o?o.data:void 0)||this.imgData,f=0;0<=e?f<e:f>e;0<=e?++f:--f)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(r=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>r)throw new Error("More transparent colors than palette size");if((h=r-this.transparency.indexed.length)>0)for(d=0;0<=h?d<h:d>h;0<=h?++d:--d)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":s=(l=this.read(e)).indexOf(0),u=String.fromCharCode.apply(String,l.slice(0,s)),this.text[u]=String.fromCharCode.apply(String,l.slice(s+1));break;case"IEND":return o&&this.animation.frames.push(o),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(p=this.colorType)||6===p,n=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*n,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}i.prototype.read=function(t){var e,n;for(n=[],e=0;0<=t?e<t:e>t;0<=t?++e:--e)n.push(this.data[this.pos++]);return n},i.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.decodePixels=function(t){var e=this.pixelBitlength/8,n=new Uint8Array(this.width*this.height*e),r=0,i=this;if(null==t&&(t=this.imgData),0===t.length)return new Uint8Array(0);function a(a,o,s,u){var c,h,l,f,d,p,g,m,v,b,y,w,N,L,x,A,_,S,P,k,F,I=Math.ceil((i.width-a)/s),C=Math.ceil((i.height-o)/u),j=i.width==I&&i.height==C;for(L=e*I,w=j?n:new Uint8Array(L*C),p=t.length,N=0,h=0;N<C&&r<p;){switch(t[r++]){case 0:for(f=_=0;_<L;f=_+=1)w[h++]=t[r++];break;case 1:for(f=S=0;S<L;f=S+=1)c=t[r++],d=f<e?0:w[h-e],w[h++]=(c+d)%256;break;case 2:for(f=P=0;P<L;f=P+=1)c=t[r++],l=(f-f%e)/e,x=N&&w[(N-1)*L+l*e+f%e],w[h++]=(x+c)%256;break;case 3:for(f=k=0;k<L;f=k+=1)c=t[r++],l=(f-f%e)/e,d=f<e?0:w[h-e],x=N&&w[(N-1)*L+l*e+f%e],w[h++]=(c+Math.floor((d+x)/2))%256;break;case 4:for(f=F=0;F<L;f=F+=1)c=t[r++],l=(f-f%e)/e,d=f<e?0:w[h-e],0===N?x=A=0:(x=w[(N-1)*L+l*e+f%e],A=l&&w[(N-1)*L+(l-1)*e+f%e]),g=d+x-A,m=Math.abs(g-d),b=Math.abs(g-x),y=Math.abs(g-A),v=m<=b&&m<=y?d:b<=y?x:A,w[h++]=(c+v)%256;break;default:throw new Error("Invalid filter algorithm: "+t[r-1])}if(!j){var B=((o+N*u)*i.width+a)*e,O=N*L;for(f=0;f<I;f+=1){for(var M=0;M<e;M+=1)n[B++]=w[O++];B+=(s-1)*e}}N++}}return t=(t=new It(t)).getBytes(),1==i.interlaceMethod?(a(0,0,8,8),a(4,0,8,8),a(0,4,4,8),a(2,0,4,4),a(0,2,2,4),a(1,0,2,2),a(0,1,1,2)):a(0,0,1,1),n},i.prototype.decodePalette=function(){var t,e,n,r,i,a,o,s,u;for(n=this.palette,a=this.transparency.indexed||[],i=new Uint8Array((a.length||0)+n.length),r=0,t=0,e=o=0,s=n.length;o<s;e=o+=3)i[r++]=n[e],i[r++]=n[e+1],i[r++]=n[e+2],i[r++]=null!=(u=a[t++])?u:255;return i},i.prototype.copyToImageData=function(t,e){var n,r,i,a,o,s,u,c,h,l,f;if(r=this.colors,h=null,n=this.hasAlphaChannel,this.palette.length&&(h=null!=(f=this._decodedPalette)?f:this._decodedPalette=this.decodePalette(),r=4,n=!0),c=(i=t.data||t).length,o=h||e,a=s=0,1===r)for(;a<c;)u=h?4*e[a/4]:s,l=o[u++],i[a++]=l,i[a++]=l,i[a++]=l,i[a++]=n?o[u++]:255,s=u;else for(;a<c;)u=h?4*e[a/4]:s,i[a++]=o[u++],i[a++]=o[u++],i[a++]=o[u++],i[a++]=n?o[u++]:255,s=u},i.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};var a=function(){if("[object Window]"===Object.prototype.toString.call(t)){try{n=t.document.createElement("canvas"),r=n.getContext("2d")}catch(t){return!1}return!0}return!1};return a(),e=function(t){var e;if(!0===a())return r.width=t.width,r.height=t.height,r.clearRect(0,0,t.width,t.height),r.putImageData(t,0,0),(e=new Image).src=n.toDataURL(),e;throw new Error("This method requires a Browser with Canvas-capability.")},i.prototype.decodeFrames=function(t){var n,r,i,a,o,s,u,c;if(this.animation){for(c=[],r=o=0,s=(u=this.animation.frames).length;o<s;r=++o)n=u[r],i=t.createImageData(n.width,n.height),a=this.decodePixels(new Uint8Array(n.data)),this.copyToImageData(i,a),n.imageData=i,c.push(n.image=e(i));return c}},i.prototype.renderFrame=function(t,e){var n,r,i;return n=(r=this.animation.frames)[e],i=r[e-1],0===e&&t.clearRect(0,0,this.width,this.height),1===(null!=i?i.disposeOp:void 0)?t.clearRect(i.xOffset,i.yOffset,i.width,i.height):2===(null!=i?i.disposeOp:void 0)&&t.putImageData(i.imageData,i.xOffset,i.yOffset),0===n.blendOp&&t.clearRect(n.xOffset,n.yOffset,n.width,n.height),t.drawImage(n.image,n.xOffset,n.yOffset)},i.prototype.animate=function(t){var e,n,r,i,a,o,s=this;return n=0,o=this.animation,i=o.numFrames,r=o.frames,a=o.numPlays,(e=function(){var o,u;if(o=n++%i,u=r[o],s.renderFrame(t,o),i>1&&n/i<a)return s.animation._timeout=setTimeout(e,u.delay)})()},i.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},i.prototype.render=function(t){var e,n;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(n=e.createImageData(this.width,this.height),this.copyToImageData(n,this.decodePixels()),e.putImageData(n,0,0))},i}();
/**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */
function jt(t){var e=0;if(71!==t[e++]||73!==t[e++]||70!==t[e++]||56!==t[e++]||56!=(t[e++]+1&253)||97!==t[e++])throw new Error("Invalid GIF 87a/89a header.");var n=t[e++]|t[e++]<<8,r=t[e++]|t[e++]<<8,i=t[e++],a=i>>7,o=1<<(7&i)+1;t[e++];t[e++];var s=null,u=null;a&&(s=e,u=o,e+=3*o);var c=!0,h=[],l=0,f=null,d=0,p=null;for(this.width=n,this.height=r;c&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:if(11!==t[e]||78==t[e+1]&&69==t[e+2]&&84==t[e+3]&&83==t[e+4]&&67==t[e+5]&&65==t[e+6]&&80==t[e+7]&&69==t[e+8]&&50==t[e+9]&&46==t[e+10]&&48==t[e+11]&&3==t[e+12]&&1==t[e+13]&&0==t[e+16])e+=14,p=t[e++]|t[e++]<<8,e++;else for(e+=12;;){if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}break;case 249:if(4!==t[e++]||0!==t[e+4])throw new Error("Invalid graphics extension block.");var g=t[e++];l=t[e++]|t[e++]<<8,f=t[e++],0==(1&g)&&(f=null),d=g>>2&7,e++;break;case 254:for(;;){if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}break;default:throw new Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var m=t[e++]|t[e++]<<8,v=t[e++]|t[e++]<<8,b=t[e++]|t[e++]<<8,y=t[e++]|t[e++]<<8,w=t[e++],N=w>>6&1,L=1<<(7&w)+1,x=s,A=u,_=!1;if(w>>7){_=!0;x=e,A=L,e+=3*L}var S=e;for(e++;;){var P;if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}h.push({x:m,y:v,width:b,height:y,has_local_palette:_,palette_offset:x,palette_size:A,data_offset:S,data_length:e-S,transparent_index:f,interlaced:!!N,delay:l,disposal:d});break;case 59:c=!1;break;default:throw new Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return h.length},this.loopCount=function(){return p},this.frameInfo=function(t){if(t<0||t>=h.length)throw new Error("Frame index out of range.");return h[t]},this.decodeAndBlitFrameBGRA=function(e,r){var i=this.frameInfo(e),a=i.width*i.height,o=new Uint8Array(a);Bt(t,i.data_offset,o,a);var s=i.palette_offset,u=i.transparent_index;null===u&&(u=256);var c=i.width,h=n-c,l=c,f=4*(i.y*n+i.x),d=4*((i.y+i.height)*n+i.x),p=f,g=4*h;!0===i.interlaced&&(g+=4*n*7);for(var m=8,v=0,b=o.length;v<b;++v){var y=o[v];if(0===l&&(l=c,(p+=g)>=d&&(g=4*h+4*n*(m-1),p=f+(c+h)*(m<<1),m>>=1)),y===u)p+=4;else{var w=t[s+3*y],N=t[s+3*y+1],L=t[s+3*y+2];r[p++]=L,r[p++]=N,r[p++]=w,r[p++]=255}--l}},this.decodeAndBlitFrameRGBA=function(e,r){var i=this.frameInfo(e),a=i.width*i.height,o=new Uint8Array(a);Bt(t,i.data_offset,o,a);var s=i.palette_offset,u=i.transparent_index;null===u&&(u=256);var c=i.width,h=n-c,l=c,f=4*(i.y*n+i.x),d=4*((i.y+i.height)*n+i.x),p=f,g=4*h;!0===i.interlaced&&(g+=4*n*7);for(var m=8,v=0,b=o.length;v<b;++v){var y=o[v];if(0===l&&(l=c,(p+=g)>=d&&(g=4*h+4*n*(m-1),p=f+(c+h)*(m<<1),m>>=1)),y===u)p+=4;else{var w=t[s+3*y],N=t[s+3*y+1],L=t[s+3*y+2];r[p++]=w,r[p++]=N,r[p++]=L,r[p++]=255}--l}}}function Bt(t,e,r,i){for(var a=t[e++],o=1<<a,s=o+1,u=s+1,c=a+1,h=(1<<c)-1,l=0,f=0,d=0,p=t[e++],g=new Int32Array(4096),m=null;;){for(;l<16&&0!==p;)f|=t[e++]<<l,l+=8,1===p?p=t[e++]:--p;if(l<c)break;var v=f&h;if(f>>=c,l-=c,v!==o){if(v===s)break;for(var b=v<u?v:m,y=0,w=b;w>o;)w=g[w]>>8,++y;var N=w;if(d+y+(b!==v?1:0)>i)return void n.log("Warning, gif stream longer than expected.");r[d++]=N;var L=d+=y;for(b!==v&&(r[d++]=N),w=b;y--;)w=g[w],r[--L]=255&w,w>>=8;null!==m&&u<4096&&(g[u++]=m<<8|N,u>=h+1&&c<12&&(++c,h=h<<1|1)),m=v}else u=s+1,h=(1<<(c=a+1))-1,m=null}return d!==i&&n.log("Warning, gif stream shorter than expected."),r}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function Ot(t){var e,n,r,i,a,o=Math.floor,s=new Array(64),u=new Array(64),c=new Array(64),h=new Array(64),l=new Array(65535),f=new Array(65535),d=new Array(64),p=new Array(64),g=[],m=0,v=7,b=new Array(64),y=new Array(64),w=new Array(64),N=new Array(256),L=new Array(2048),x=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],A=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],_=[0,1,2,3,4,5,6,7,8,9,10,11],S=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],P=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],k=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],F=[0,1,2,3,4,5,6,7,8,9,10,11],I=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],C=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function j(t,e){for(var n=0,r=0,i=new Array,a=1;a<=16;a++){for(var o=1;o<=t[a];o++)i[e[r]]=[],i[e[r]][0]=n,i[e[r]][1]=a,r++,n++;n*=2}return i}function B(t){for(var e=t[0],n=t[1]-1;n>=0;)e&1<<n&&(m|=1<<v),n--,--v<0&&(255==m?(O(255),O(0)):O(m),v=7,m=0)}function O(t){g.push(t)}function M(t){O(t>>8&255),O(255&t)}function E(t,e,n,r,i){for(var a,o=i[0],s=i[240],u=function(t,e){var n,r,i,a,o,s,u,c,h,l,f=0;for(h=0;h<8;++h){n=t[f],r=t[f+1],i=t[f+2],a=t[f+3],o=t[f+4],s=t[f+5],u=t[f+6];var p=n+(c=t[f+7]),g=n-c,m=r+u,v=r-u,b=i+s,y=i-s,w=a+o,N=a-o,L=p+w,x=p-w,A=m+b,_=m-b;t[f]=L+A,t[f+4]=L-A;var S=.707106781*(_+x);t[f+2]=x+S,t[f+6]=x-S;var P=.382683433*((L=N+y)-(_=v+g)),k=.5411961*L+P,F=1.306562965*_+P,I=.707106781*(A=y+v),C=g+I,j=g-I;t[f+5]=j+k,t[f+3]=j-k,t[f+1]=C+F,t[f+7]=C-F,f+=8}for(f=0,h=0;h<8;++h){n=t[f],r=t[f+8],i=t[f+16],a=t[f+24],o=t[f+32],s=t[f+40],u=t[f+48];var B=n+(c=t[f+56]),O=n-c,M=r+u,E=r-u,q=i+s,R=i-s,T=a+o,D=a-o,U=B+T,z=B-T,H=M+q,W=M-q;t[f]=U+H,t[f+32]=U-H;var V=.707106781*(W+z);t[f+16]=z+V,t[f+48]=z-V;var G=.382683433*((U=D+R)-(W=E+O)),Y=.5411961*U+G,J=1.306562965*W+G,X=.707106781*(H=R+E),K=O+X,Z=O-X;t[f+40]=Z+Y,t[f+24]=Z-Y,t[f+8]=K+J,t[f+56]=K-J,f++}for(h=0;h<64;++h)l=t[h]*e[h],d[h]=l>0?l+.5|0:l-.5|0;return d}(t,e),c=0;c<64;++c)p[x[c]]=u[c];var h=p[0]-n;n=p[0],0==h?B(r[0]):(B(r[f[a=32767+h]]),B(l[a]));for(var g=63;g>0&&0==p[g];)g--;if(0==g)return B(o),n;for(var m,v=1;v<=g;){for(var b=v;0==p[v]&&v<=g;)++v;var y=v-b;if(y>=16){m=y>>4;for(var w=1;w<=m;++w)B(s);y&=15}a=32767+p[v],B(i[(y<<4)+f[a]]),B(l[a]),v++}return 63!=g&&B(o),n}function q(t){(t=Math.min(Math.max(t,1),100),a!=t)&&(!function(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;n<64;n++){var r=o((e[n]*t+50)/100);r=Math.min(Math.max(r,1),255),s[x[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],a=0;a<64;a++){var l=o((i[a]*t+50)/100);l=Math.min(Math.max(l,1),255),u[x[a]]=l}for(var f=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],d=0,p=0;p<8;p++)for(var g=0;g<8;g++)c[d]=1/(s[x[d]]*f[p]*f[g]*8),h[d]=1/(u[x[d]]*f[p]*f[g]*8),d++}(t<50?Math.floor(5e3/t):Math.floor(200-2*t)),a=t)}this.encode=function(t,a){a&&q(a),g=new Array,m=0,v=7,M(65496),M(65504),M(16),O(74),O(70),O(73),O(70),O(0),O(1),O(1),O(0),M(1),M(1),O(0),O(0),function(){M(65499),M(132),O(0);for(var t=0;t<64;t++)O(s[t]);O(1);for(var e=0;e<64;e++)O(u[e])}(),function(t,e){M(65472),M(17),O(8),M(e),M(t),O(3),O(1),O(17),O(0),O(2),O(17),O(1),O(3),O(17),O(1)}(t.width,t.height),function(){M(65476),M(418),O(0);for(var t=0;t<16;t++)O(A[t+1]);for(var e=0;e<=11;e++)O(_[e]);O(16);for(var n=0;n<16;n++)O(S[n+1]);for(var r=0;r<=161;r++)O(P[r]);O(1);for(var i=0;i<16;i++)O(k[i+1]);for(var a=0;a<=11;a++)O(F[a]);O(17);for(var o=0;o<16;o++)O(I[o+1]);for(var s=0;s<=161;s++)O(C[s])}(),M(65498),M(12),O(3),O(1),O(0),O(2),O(17),O(3),O(17),O(0),O(63),O(0);var o=0,l=0,f=0;m=0,v=7,this.encode.displayName="_encode_";for(var d,p,N,x,j,R,T,D,U,z=t.data,H=t.width,W=t.height,V=4*H,G=0;G<W;){for(d=0;d<V;){for(j=V*G+d,T=-1,D=0,U=0;U<64;U++)R=j+(D=U>>3)*V+(T=4*(7&U)),G+D>=W&&(R-=V*(G+1+D-W)),d+T>=V&&(R-=d+T-V+4),p=z[R++],N=z[R++],x=z[R++],b[U]=(L[p]+L[N+256>>0]+L[x+512>>0]>>16)-128,y[U]=(L[p+768>>0]+L[N+1024>>0]+L[x+1280>>0]>>16)-128,w[U]=(L[p+1280>>0]+L[N+1536>>0]+L[x+1792>>0]>>16)-128;o=E(b,c,o,e,r),l=E(y,h,l,n,i),f=E(w,h,f,n,i),d+=32}G+=8}if(v>=0){var Y=[];Y[1]=v+1,Y[0]=(1<<v+1)-1,B(Y)}return M(65497),new Uint8Array(g)},t=t||50,function(){for(var t=String.fromCharCode,e=0;e<256;e++)N[e]=t(e)}(),e=j(A,_),n=j(k,F),r=j(S,P),i=j(I,C),function(){for(var t=1,e=2,n=1;n<=15;n++){for(var r=t;r<e;r++)f[32767+r]=n,l[32767+r]=[],l[32767+r][1]=n,l[32767+r][0]=r;for(var i=-(e-1);i<=-t;i++)f[32767+i]=n,l[32767+i]=[],l[32767+i][1]=n,l[32767+i][0]=e-1+i;t<<=1,e<<=1}}(),function(){for(var t=0;t<256;t++)L[t]=19595*t,L[t+256>>0]=38470*t,L[t+512>>0]=7471*t+32768,L[t+768>>0]=-11059*t,L[t+1024>>0]=-21709*t,L[t+1280>>0]=32768*t+8421375,L[t+1536>>0]=-27439*t,L[t+1792>>0]=-5329*t}(),q(t)}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function Mt(t,e){if(this.pos=0,this.buffer=t,this.datav=new DataView(t.buffer),this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,-1===["BM","BA","CI","CP","IC","PT"].indexOf(this.flag))throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function Et(t){function e(t){if(!t)throw Error("assert :P")}function n(t,e,n){for(var r=0;4>r;r++)if(t[e+r]!=n.charCodeAt(r))return!0;return!1}function r(t,e,n,r,i){for(var a=0;a<i;a++)t[e+a]=n[r+a]}function i(t,e,n,r){for(var i=0;i<r;i++)t[e+i]=n}function a(t){return new Int32Array(t)}function o(t,e){for(var n=[],r=0;r<t;r++)n.push(new e);return n}function s(t,e){var n=[];return function t(n,r,i){for(var a=i[r],o=0;o<a&&(n.push(i.length>r+1?[]:new e),!(i.length<r+1));o++)t(n[o],r+1,i)}(n,0,t),n}function u(t,e){for(var n="",r=0;r<4;r++)n+=String.fromCharCode(t[e++]);return n}function c(t,e){return(t[e+0]<<0|t[e+1]<<8|t[e+2]<<16)>>>0}function h(t,e){return(t[e+0]<<0|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0}new(Et=function(){var t=this;function u(t,e){for(var n=1<<e-1>>>0;t&n;)n>>>=1;return n?(t&n-1)+n:t}function c(t,n,r,i,a){e(!(i%r));do{t[n+(i-=r)]=a}while(0<i)}function h(t,n,r,i,o){if(e(2328>=o),512>=o)var s=a(512);else if(null==(s=a(o)))return 0;return function(t,n,r,i,o,s){var h,f,d=n,p=1<<r,g=a(16),m=a(16);for(e(0!=o),e(null!=i),e(null!=t),e(0<r),f=0;f<o;++f){if(15<i[f])return 0;++g[i[f]]}if(g[0]==o)return 0;for(m[1]=0,h=1;15>h;++h){if(g[h]>1<<h)return 0;m[h+1]=m[h]+g[h]}for(f=0;f<o;++f)h=i[f],0<i[f]&&(s[m[h]++]=f);if(1==m[15])return(i=new l).g=0,i.value=s[0],c(t,d,1,p,i),p;var v,b=-1,y=p-1,w=0,N=1,L=1,x=1<<r;for(f=0,h=1,o=2;h<=r;++h,o<<=1){if(N+=L<<=1,0>(L-=g[h]))return 0;for(;0<g[h];--g[h])(i=new l).g=h,i.value=s[f++],c(t,d+w,o,x,i),w=u(w,h)}for(h=r+1,o=2;15>=h;++h,o<<=1){if(N+=L<<=1,0>(L-=g[h]))return 0;for(;0<g[h];--g[h]){if(i=new l,(w&y)!=b){for(d+=x,v=1<<(b=h)-r;15>b&&!(0>=(v-=g[b]));)++b,v<<=1;p+=x=1<<(v=b-r),t[n+(b=w&y)].g=v+r,t[n+b].value=d-n-b}i.g=h-r,i.value=s[f++],c(t,d+(w>>r),o,x,i),w=u(w,h)}}return N!=2*m[15]-1?0:p}(t,n,r,i,o,s)}function l(){this.value=this.g=0}function f(){this.value=this.g=0}function d(){this.G=o(5,l),this.H=a(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=o(Tn,f)}function p(t,n,r,i){e(null!=t),e(null!=n),e(2147483648>i),t.Ca=254,t.I=0,t.b=-8,t.Ka=0,t.oa=n,t.pa=r,t.Jd=n,t.Yc=r+i,t.Zc=4<=i?r+i-4+1:r,S(t)}function g(t,e){for(var n=0;0<e--;)n|=k(t,128)<<e;return n}function m(t,e){var n=g(t,e);return P(t)?-n:n}function v(t,n,r,i){var a,o=0;for(e(null!=t),e(null!=n),e(4294967288>i),t.Sb=i,t.Ra=0,t.u=0,t.h=0,4<i&&(i=4),a=0;a<i;++a)o+=n[r+a]<<8*a;t.Ra=o,t.bb=i,t.oa=n,t.pa=r}function b(t){for(;8<=t.u&&t.bb<t.Sb;)t.Ra>>>=8,t.Ra+=t.oa[t.pa+t.bb]<<zn-8>>>0,++t.bb,t.u-=8;x(t)&&(t.h=1,t.u=0)}function y(t,n){if(e(0<=n),!t.h&&n<=Un){var r=L(t)&Dn[n];return t.u+=n,b(t),r}return t.h=1,t.u=0}function w(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function N(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function L(t){return t.Ra>>>(t.u&zn-1)>>>0}function x(t){return e(t.bb<=t.Sb),t.h||t.bb==t.Sb&&t.u>zn}function A(t,e){t.u=e,t.h=x(t)}function _(t){t.u>=Hn&&(e(t.u>=Hn),b(t))}function S(t){e(null!=t&&null!=t.oa),t.pa<t.Zc?(t.I=(t.oa[t.pa++]|t.I<<8)>>>0,t.b+=8):(e(null!=t&&null!=t.oa),t.pa<t.Yc?(t.b+=8,t.I=t.oa[t.pa++]|t.I<<8):t.Ka?t.b=0:(t.I<<=8,t.b+=8,t.Ka=1))}function P(t){return g(t,1)}function k(t,e){var n=t.Ca;0>t.b&&S(t);var r=t.b,i=n*e>>>8,a=(t.I>>>r>i)+0;for(a?(n-=i,t.I-=i+1<<r>>>0):n=i+1,r=n,i=0;256<=r;)i+=8,r>>=8;return r=7^i+Wn[r],t.b-=r,t.Ca=(n<<r)-1,a}function F(t,e,n){t[e+0]=n>>24&255,t[e+1]=n>>16&255,t[e+2]=n>>8&255,t[e+3]=n>>0&255}function I(t,e){return t[e+0]<<0|t[e+1]<<8}function C(t,e){return I(t,e)|t[e+2]<<16}function j(t,e){return I(t,e)|I(t,e+2)<<16}function B(t,n){var r=1<<n;return e(null!=t),e(0<n),t.X=a(r),null==t.X?0:(t.Mb=32-n,t.Xa=n,1)}function O(t,n){e(null!=t),e(null!=n),e(t.Xa==n.Xa),r(n.X,0,t.X,0,1<<n.Xa)}function M(){this.X=[],this.Xa=this.Mb=0}function E(t,n,r,i){e(null!=r),e(null!=i);var a=r[0],o=i[0];return 0==a&&(a=(t*o+n/2)/n),0==o&&(o=(n*a+t/2)/t),0>=a||0>=o?0:(r[0]=a,i[0]=o,1)}function q(t,e){return t+(1<<e)-1>>>e}function R(t,e){return((4278255360&t)+(4278255360&e)>>>0&4278255360)+((16711935&t)+(16711935&e)>>>0&16711935)>>>0}function T(e,n){t[n]=function(n,r,i,a,o,s,u){var c;for(c=0;c<o;++c){var h=t[e](s[u+c-1],i,a+c);s[u+c]=R(n[r+c],h)}}}function D(){this.ud=this.hd=this.jd=0}function U(t,e){return((4278124286&(t^e))>>>1)+(t&e)>>>0}function z(t){return 0<=t&&256>t?t:0>t?0:255<t?255:void 0}function H(t,e){return z(t+(t-e+.5>>1))}function W(t,e,n){return Math.abs(e-n)-Math.abs(t-n)}function V(t,e,n,r,i,a,o){for(r=a[o-1],n=0;n<i;++n)a[o+n]=r=R(t[e+n],r)}function G(t,e,n,r,i){var a;for(a=0;a<n;++a){var o=t[e+a],s=o>>8&255,u=16711935&(u=(u=16711935&o)+((s<<16)+s));r[i+a]=(4278255360&o)+u>>>0}}function Y(t,e){e.jd=t>>0&255,e.hd=t>>8&255,e.ud=t>>16&255}function J(t,e,n,r,i,a){var o;for(o=0;o<r;++o){var s=e[n+o],u=s>>>8,c=s,h=255&(h=(h=s>>>16)+((t.jd<<24>>24)*(u<<24>>24)>>>5));c=255&(c=(c=c+((t.hd<<24>>24)*(u<<24>>24)>>>5))+((t.ud<<24>>24)*(h<<24>>24)>>>5));i[a+o]=(4278255360&s)+(h<<16)+c}}function X(e,n,r,i,a){t[n]=function(t,e,n,r,o,s,u,c,h){for(r=u;r<c;++r)for(u=0;u<h;++u)o[s++]=a(n[i(t[e++])])},t[e]=function(e,n,o,s,u,c,h){var l=8>>e.b,f=e.Ea,d=e.K[0],p=e.w;if(8>l)for(e=(1<<e.b)-1,p=(1<<l)-1;n<o;++n){var g,m=0;for(g=0;g<f;++g)g&e||(m=i(s[u++])),c[h++]=a(d[m&p]),m>>=l}else t["VP8LMapColor"+r](s,u,d,p,c,h,n,o,f)}}function K(t,e,n,r,i){for(n=e+n;e<n;){var a=t[e++];r[i++]=a>>16&255,r[i++]=a>>8&255,r[i++]=a>>0&255}}function Z(t,e,n,r,i){for(n=e+n;e<n;){var a=t[e++];r[i++]=a>>16&255,r[i++]=a>>8&255,r[i++]=a>>0&255,r[i++]=a>>24&255}}function $(t,e,n,r,i){for(n=e+n;e<n;){var a=(o=t[e++])>>16&240|o>>12&15,o=o>>0&240|o>>28&15;r[i++]=a,r[i++]=o}}function Q(t,e,n,r,i){for(n=e+n;e<n;){var a=(o=t[e++])>>16&248|o>>13&7,o=o>>5&224|o>>3&31;r[i++]=a,r[i++]=o}}function tt(t,e,n,r,i){for(n=e+n;e<n;){var a=t[e++];r[i++]=a>>0&255,r[i++]=a>>8&255,r[i++]=a>>16&255}}function et(t,e,n,i,a,o){if(0==o)for(n=e+n;e<n;)F(i,((o=t[e++])[0]>>24|o[1]>>8&65280|o[2]<<8&16711680|o[3]<<24)>>>0),a+=32;else r(i,a,t,e,n)}function nt(e,n){t[n][0]=t[e+"0"],t[n][1]=t[e+"1"],t[n][2]=t[e+"2"],t[n][3]=t[e+"3"],t[n][4]=t[e+"4"],t[n][5]=t[e+"5"],t[n][6]=t[e+"6"],t[n][7]=t[e+"7"],t[n][8]=t[e+"8"],t[n][9]=t[e+"9"],t[n][10]=t[e+"10"],t[n][11]=t[e+"11"],t[n][12]=t[e+"12"],t[n][13]=t[e+"13"],t[n][14]=t[e+"0"],t[n][15]=t[e+"0"]}function rt(t){return t==Hr||t==Wr||t==Vr||t==Gr}function it(){this.eb=[],this.size=this.A=this.fb=0}function at(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function ot(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new it,this.f.kb=new at,this.sd=null}function st(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function ut(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function ct(t){return alert("todo:WebPSamplerProcessPlane"),t.T}function ht(t,e){var n=t.T,i=e.ba.f.RGBA,a=i.eb,o=i.fb+t.ka*i.A,s=vi[e.ba.S],u=t.y,c=t.O,h=t.f,l=t.N,f=t.ea,d=t.W,p=e.cc,g=e.dc,m=e.Mc,v=e.Nc,b=t.ka,y=t.ka+t.T,w=t.U,N=w+1>>1;for(0==b?s(u,c,null,null,h,l,f,d,h,l,f,d,a,o,null,null,w):(s(e.ec,e.fc,u,c,p,g,m,v,h,l,f,d,a,o-i.A,a,o,w),++n);b+2<y;b+=2)p=h,g=l,m=f,v=d,l+=t.Rc,d+=t.Rc,o+=2*i.A,s(u,(c+=2*t.fa)-t.fa,u,c,p,g,m,v,h,l,f,d,a,o-i.A,a,o,w);return c+=t.fa,t.j+y<t.o?(r(e.ec,e.fc,u,c,w),r(e.cc,e.dc,h,l,N),r(e.Mc,e.Nc,f,d,N),n--):1&y||s(u,c,null,null,h,l,f,d,h,l,f,d,a,o+i.A,null,null,w),n}function lt(t,n,r){var i=t.F,a=[t.J];if(null!=i){var o=t.U,s=n.ba.S,u=s==Dr||s==Vr;n=n.ba.f.RGBA;var c=[0],h=t.ka;c[0]=t.T,t.Kb&&(0==h?--c[0]:(--h,a[0]-=t.width),t.j+t.ka+t.T==t.o&&(c[0]=t.o-t.j-h));var l=n.eb;h=n.fb+h*n.A;t=_r(i,a[0],t.width,o,c,l,h+(u?0:3),n.A),e(r==c),t&&rt(s)&&xr(l,h,u,o,c,n.A)}return 0}function ft(t){var e=t.ma,n=e.ba.S,r=11>n,i=n==qr||n==Tr||n==Dr||n==Ur||12==n||rt(n);if(e.memory=null,e.Ib=null,e.Jb=null,e.Nd=null,!En(e.Oa,t,i?11:12))return 0;if(i&&rt(n)&&yn(),t.da)alert("todo:use_scaling");else{if(r){if(e.Ib=ct,t.Kb){if(n=t.U+1>>1,e.memory=a(t.U+2*n),null==e.memory)return 0;e.ec=e.memory,e.fc=0,e.cc=e.ec,e.dc=e.fc+t.U,e.Mc=e.cc,e.Nc=e.dc+n,e.Ib=ht,yn()}}else alert("todo:EmitYUV");i&&(e.Jb=lt,r&&vn())}if(r&&!Ci){for(t=0;256>t;++t)ji[t]=89858*(t-128)+Si>>_i,Mi[t]=-22014*(t-128)+Si,Oi[t]=-45773*(t-128),Bi[t]=113618*(t-128)+Si>>_i;for(t=Pi;t<ki;++t)e=76283*(t-16)+Si>>_i,Ei[t-Pi]=Vt(e,255),qi[t-Pi]=Vt(e+8>>4,15);Ci=1}return 1}function dt(t){var n=t.ma,r=t.U,i=t.T;return e(!(1&t.ka)),0>=r||0>=i?0:(r=n.Ib(t,n),null!=n.Jb&&n.Jb(t,n,r),n.Dc+=r,1)}function pt(t){t.ma.memory=null}function gt(t,e,n,r){return 47!=y(t,8)?0:(e[0]=y(t,14)+1,n[0]=y(t,14)+1,r[0]=y(t,1),0!=y(t,3)?0:!t.h)}function mt(t,e){if(4>t)return t+1;var n=t-2>>1;return(2+(1&t)<<n)+y(e,n)+1}function vt(t,e){return 120<e?e-120:1<=(n=((n=$r[e-1])>>4)*t+(8-(15&n)))?n:1;var n}function bt(t,e,n){var r=L(n),i=t[e+=255&r].g-8;return 0<i&&(A(n,n.u+8),r=L(n),e+=t[e].value,e+=r&(1<<i)-1),A(n,n.u+t[e].g),t[e].value}function yt(t,n,r){return r.g+=t.g,r.value+=t.value<<n>>>0,e(8>=r.g),t.g}function wt(t,n,r){var i=t.xc;return e((n=0==i?0:t.vc[t.md*(r>>i)+(n>>i)])<t.Wb),t.Ya[n]}function Nt(t,n,i,a){var o=t.ab,s=t.c*n,u=t.C;n=u+n;var c=i,h=a;for(a=t.Ta,i=t.Ua;0<o--;){var l=t.gc[o],f=u,d=n,p=c,g=h,m=(h=a,c=i,l.Ea);switch(e(f<d),e(d<=l.nc),l.hc){case 2:Yn(p,g,(d-f)*m,h,c);break;case 0:var v=f,b=d,y=h,w=c,N=(S=l).Ea;0==v&&(Vn(p,g,null,null,1,y,w),V(p,g+1,0,0,N-1,y,w+1),g+=N,w+=N,++v);for(var L=1<<S.b,x=L-1,A=q(N,S.b),_=S.K,S=S.w+(v>>S.b)*A;v<b;){var P=_,k=S,F=1;for(Gn(p,g,y,w-N,1,y,w);F<N;){var I=(F&~x)+L;I>N&&(I=N),(0,$n[P[k++]>>8&15])(p,g+ +F,y,w+F-N,I-F,y,w+F),F=I}g+=N,w+=N,++v&x||(S+=A)}d!=l.nc&&r(h,c-m,h,c+(d-f-1)*m,m);break;case 1:for(m=p,b=g,N=(p=l.Ea)-(w=p&~(y=(g=1<<l.b)-1)),v=q(p,l.b),L=l.K,l=l.w+(f>>l.b)*v;f<d;){for(x=L,A=l,_=new D,S=b+w,P=b+p;b<S;)Y(x[A++],_),Qn(_,m,b,g,h,c),b+=g,c+=g;b<P&&(Y(x[A++],_),Qn(_,m,b,N,h,c),b+=N,c+=N),++f&y||(l+=v)}break;case 3:if(p==h&&g==c&&0<l.b){for(b=h,p=m=c+(d-f)*m-(w=(d-f)*q(l.Ea,l.b)),g=h,y=c,v=[],w=(N=w)-1;0<=w;--w)v[w]=g[y+w];for(w=N-1;0<=w;--w)b[p+w]=v[w];Jn(l,f,d,h,m,h,c)}else Jn(l,f,d,p,g,h,c)}c=a,h=i}h!=i&&r(a,i,c,h,s)}function Lt(t,n){var r=t.V,i=t.Ba+t.c*t.C,a=n-t.C;if(e(n<=t.l.o),e(16>=a),0<a){var o=t.l,s=t.Ta,u=t.Ua,c=o.width;if(Nt(t,a,r,i),a=u=[u],e((r=t.C)<(i=n)),e(o.v<o.va),i>o.o&&(i=o.o),r<o.j){var h=o.j-r;r=o.j;a[0]+=h*c}if(r>=i?r=0:(a[0]+=4*o.v,o.ka=r-o.j,o.U=o.va-o.v,o.T=i-r,r=1),r){if(u=u[0],11>(r=t.ca).S){var l=r.f.RGBA,f=(i=r.S,a=o.U,o=o.T,h=l.eb,l.A),d=o;for(l=l.fb+t.Ma*l.A;0<d--;){var p=s,g=u,m=a,v=h,b=l;switch(i){case Er:tr(p,g,m,v,b);break;case qr:er(p,g,m,v,b);break;case Hr:er(p,g,m,v,b),xr(v,b,0,m,1,0);break;case Rr:ir(p,g,m,v,b);break;case Tr:et(p,g,m,v,b,1);break;case Wr:et(p,g,m,v,b,1),xr(v,b,0,m,1,0);break;case Dr:et(p,g,m,v,b,0);break;case Vr:et(p,g,m,v,b,0),xr(v,b,1,m,1,0);break;case Ur:nr(p,g,m,v,b);break;case Gr:nr(p,g,m,v,b),Ar(v,b,m,1,0);break;case zr:rr(p,g,m,v,b);break;default:e(0)}u+=c,l+=f}t.Ma+=o}else alert("todo:EmitRescaledRowsYUVA");e(t.Ma<=r.height)}}t.C=n,e(t.C<=t.i)}function xt(t){var e;if(0<t.ua)return 0;for(e=0;e<t.Wb;++e){var n=t.Ya[e].G,r=t.Ya[e].H;if(0<n[1][r[1]+0].g||0<n[2][r[2]+0].g||0<n[3][r[3]+0].g)return 0}return 1}function At(t,n,r,i,a,o){if(0!=t.Z){var s=t.qd,u=t.rd;for(e(null!=mi[t.Z]);n<r;++n)mi[t.Z](s,u,i,a,i,a,o),s=i,u=a,a+=o;t.qd=s,t.rd=u}}function _t(t,n){var r=t.l.ma,i=0==r.Z||1==r.Z?t.l.j:t.C;i=t.C<i?i:t.C;if(e(n<=t.l.o),n>i){var a=t.l.width,o=r.ca,s=r.tb+a*i,u=t.V,c=t.Ba+t.c*i,h=t.gc;e(1==t.ab),e(3==h[0].hc),Kn(h[0],i,n,u,c,o,s),At(r,i,n,o,s,a)}t.C=t.Ma=n}function St(t,n,r,i,a,o,s){var u=t.$/i,c=t.$%i,h=t.m,l=t.s,f=r+t.$,d=f;a=r+i*a;var p=r+i*o,g=280+l.ua,m=t.Pb?u:16777216,v=0<l.ua?l.Wa:null,b=l.wc,y=f<p?wt(l,c,u):null;e(t.C<o),e(p<=a);var w=!1;t:for(;;){for(;w||f<p;){var N=0;if(u>=m){var S=f-r;e((m=t).Pb),m.wd=m.m,m.xd=S,0<m.s.ua&&O(m.s.Wa,m.s.vb),m=u+ti}if(c&b||(y=wt(l,c,u)),e(null!=y),y.Qb&&(n[f]=y.qb,w=!0),!w)if(_(h),y.jc){N=h,S=n;var P=f,k=y.pd[L(N)&Tn-1];e(y.jc),256>k.g?(A(N,N.u+k.g),S[P]=k.value,N=0):(A(N,N.u+k.g-256),e(256<=k.value),N=k.value),0==N&&(w=!0)}else N=bt(y.G[0],y.H[0],h);if(h.h)break;if(w||256>N){if(!w)if(y.nd)n[f]=(y.qb|N<<8)>>>0;else{if(_(h),w=bt(y.G[1],y.H[1],h),_(h),S=bt(y.G[2],y.H[2],h),P=bt(y.G[3],y.H[3],h),h.h)break;n[f]=(P<<24|w<<16|N<<8|S)>>>0}if(w=!1,++f,++c>=i&&(c=0,++u,null!=s&&u<=o&&!(u%16)&&s(t,u),null!=v))for(;d<f;)N=n[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N}else if(280>N){if(N=mt(N-256,h),S=bt(y.G[4],y.H[4],h),_(h),S=vt(i,S=mt(S,h)),h.h)break;if(f-r<S||a-f<N)break t;for(P=0;P<N;++P)n[f+P]=n[f+P-S];for(f+=N,c+=N;c>=i;)c-=i,++u,null!=s&&u<=o&&!(u%16)&&s(t,u);if(e(f<=a),c&b&&(y=wt(l,c,u)),null!=v)for(;d<f;)N=n[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N}else{if(!(N<g))break t;for(w=N-280,e(null!=v);d<f;)N=n[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N;N=f,e(!(w>>>(S=v).Xa)),n[N]=S.X[w],w=!0}w||e(h.h==x(h))}if(t.Pb&&h.h&&f<a)e(t.m.h),t.a=5,t.m=t.wd,t.$=t.xd,0<t.s.ua&&O(t.s.vb,t.s.Wa);else{if(h.h)break t;null!=s&&s(t,u>o?o:u),t.a=0,t.$=f-r}return 1}return t.a=3,0}function Pt(t){e(null!=t),t.vc=null,t.yc=null,t.Ya=null;var n=t.Wa;null!=n&&(n.X=null),t.vb=null,e(null!=t)}function kt(){var e=new sn;return null==e?null:(e.a=0,e.xb=gi,nt("Predictor","VP8LPredictors"),nt("Predictor","VP8LPredictors_C"),nt("PredictorAdd","VP8LPredictorsAdd"),nt("PredictorAdd","VP8LPredictorsAdd_C"),Yn=G,Qn=J,tr=K,er=Z,nr=$,rr=Q,ir=tt,t.VP8LMapColor32b=Xn,t.VP8LMapColor8b=Zn,e)}function Ft(t,n,r,s,u){var c=1,f=[t],p=[n],g=s.m,m=s.s,v=null,b=0;t:for(;;){if(r)for(;c&&y(g,1);){var w=f,N=p,x=s,S=1,P=x.m,k=x.gc[x.ab],F=y(P,2);if(x.Oc&1<<F)c=0;else{switch(x.Oc|=1<<F,k.hc=F,k.Ea=w[0],k.nc=N[0],k.K=[null],++x.ab,e(4>=x.ab),F){case 0:case 1:k.b=y(P,3)+2,S=Ft(q(k.Ea,k.b),q(k.nc,k.b),0,x,k.K),k.K=k.K[0];break;case 3:var I,C=y(P,8)+1,j=16<C?0:4<C?1:2<C?2:3;if(w[0]=q(k.Ea,j),k.b=j,I=S=Ft(C,1,0,x,k.K)){var O,M=C,E=k,T=1<<(8>>E.b),D=a(T);if(null==D)I=0;else{var U=E.K[0],z=E.w;for(D[0]=E.K[0][0],O=1;O<1*M;++O)D[O]=R(U[z+O],D[O-1]);for(;O<4*T;++O)D[O]=0;E.K[0]=null,E.K[0]=D,I=1}}S=I;break;case 2:break;default:e(0)}c=S}}if(f=f[0],p=p[0],c&&y(g,1)&&!(c=1<=(b=y(g,4))&&11>=b)){s.a=3;break t}var H;if(H=c)e:{var W,V,G,Y=s,J=f,X=p,K=b,Z=r,$=Y.m,Q=Y.s,tt=[null],et=1,nt=0,rt=Qr[K];n:for(;;){if(Z&&y($,1)){var it=y($,3)+2,at=q(J,it),ot=q(X,it),st=at*ot;if(!Ft(at,ot,0,Y,tt))break n;for(tt=tt[0],Q.xc=it,W=0;W<st;++W){var ut=tt[W]>>8&65535;tt[W]=ut,ut>=et&&(et=ut+1)}}if($.h)break n;for(V=0;5>V;++V){var ct=Xr[V];!V&&0<K&&(ct+=1<<K),nt<ct&&(nt=ct)}var ht=o(et*rt,l),lt=et,ft=o(lt,d);if(null==ft)var dt=null;else e(65536>=lt),dt=ft;var pt=a(nt);if(null==dt||null==pt||null==ht){Y.a=1;break n}var gt=ht;for(W=G=0;W<et;++W){var mt=dt[W],vt=mt.G,bt=mt.H,wt=0,Nt=1,Lt=0;for(V=0;5>V;++V){ct=Xr[V],vt[V]=gt,bt[V]=G,!V&&0<K&&(ct+=1<<K);r:{var xt,At=ct,_t=Y,kt=pt,It=gt,Ct=G,jt=0,Bt=_t.m,Ot=y(Bt,1);if(i(kt,0,0,At),Ot){var Mt=y(Bt,1)+1,Et=y(Bt,1),qt=y(Bt,0==Et?1:8);kt[qt]=1,2==Mt&&(kt[qt=y(Bt,8)]=1);var Rt=1}else{var Tt=a(19),Dt=y(Bt,4)+4;if(19<Dt){_t.a=3;var Ut=0;break r}for(xt=0;xt<Dt;++xt)Tt[Zr[xt]]=y(Bt,3);var zt=void 0,Ht=void 0,Wt=_t,Vt=Tt,Gt=At,Yt=kt,Jt=0,Xt=Wt.m,Kt=8,Zt=o(128,l);i:for(;h(Zt,0,7,Vt,19);){if(y(Xt,1)){var $t=2+2*y(Xt,3);if((zt=2+y(Xt,$t))>Gt)break i}else zt=Gt;for(Ht=0;Ht<Gt&&zt--;){_(Xt);var Qt=Zt[0+(127&L(Xt))];A(Xt,Xt.u+Qt.g);var te=Qt.value;if(16>te)Yt[Ht++]=te,0!=te&&(Kt=te);else{var ee=16==te,ne=te-16,re=Jr[ne],ie=y(Xt,Yr[ne])+re;if(Ht+ie>Gt)break i;for(var ae=ee?Kt:0;0<ie--;)Yt[Ht++]=ae}}Jt=1;break i}Jt||(Wt.a=3),Rt=Jt}(Rt=Rt&&!Bt.h)&&(jt=h(It,Ct,8,kt,At)),Rt&&0!=jt?Ut=jt:(_t.a=3,Ut=0)}if(0==Ut)break n;if(Nt&&1==Kr[V]&&(Nt=0==gt[G].g),wt+=gt[G].g,G+=Ut,3>=V){var oe,se=pt[0];for(oe=1;oe<ct;++oe)pt[oe]>se&&(se=pt[oe]);Lt+=se}}if(mt.nd=Nt,mt.Qb=0,Nt&&(mt.qb=(vt[3][bt[3]+0].value<<24|vt[1][bt[1]+0].value<<16|vt[2][bt[2]+0].value)>>>0,0==wt&&256>vt[0][bt[0]+0].value&&(mt.Qb=1,mt.qb+=vt[0][bt[0]+0].value<<8)),mt.jc=!mt.Qb&&6>Lt,mt.jc){var ue,ce=mt;for(ue=0;ue<Tn;++ue){var he=ue,le=ce.pd[he],fe=ce.G[0][ce.H[0]+he];256<=fe.value?(le.g=fe.g+256,le.value=fe.value):(le.g=0,le.value=0,he>>=yt(fe,8,le),he>>=yt(ce.G[1][ce.H[1]+he],16,le),he>>=yt(ce.G[2][ce.H[2]+he],0,le),yt(ce.G[3][ce.H[3]+he],24,le))}}}Q.vc=tt,Q.Wb=et,Q.Ya=dt,Q.yc=ht,H=1;break e}H=0}if(!(c=H)){s.a=3;break t}if(0<b){if(m.ua=1<<b,!B(m.Wa,b)){s.a=1,c=0;break t}}else m.ua=0;var de=s,pe=f,ge=p,me=de.s,ve=me.xc;if(de.c=pe,de.i=ge,me.md=q(pe,ve),me.wc=0==ve?-1:(1<<ve)-1,r){s.xb=pi;break t}if(null==(v=a(f*p))){s.a=1,c=0;break t}c=(c=St(s,v,0,f,p,p,null))&&!g.h;break t}return c?(null!=u?u[0]=v:(e(null==v),e(r)),s.$=0,r||Pt(m)):Pt(m),c}function It(t,n){var r=t.c*t.i,i=r+n+16*n;return e(t.c<=n),t.V=a(i),null==t.V?(t.Ta=null,t.Ua=0,t.a=1,0):(t.Ta=t.V,t.Ua=t.Ba+r+n,1)}function Ct(t,n){var r=t.C,i=n-r,a=t.V,o=t.Ba+t.c*r;for(e(n<=t.l.o);0<i;){var s=16<i?16:i,u=t.l.ma,c=t.l.width,h=c*s,l=u.ca,f=u.tb+c*r,d=t.Ta,p=t.Ua;Nt(t,s,a,o),Sr(d,p,l,f,h),At(u,r,r+s,l,f,c),i-=s,a+=s*t.c,r+=s}e(r==n),t.C=t.Ma=n}function jt(){this.ub=this.yd=this.td=this.Rb=0}function Bt(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function Ot(){this.Fb=this.Bb=this.Cb=0,this.Zb=a(4),this.Lb=a(4)}function Mt(){this.Yb=function(){var t=[];return function t(e,n,r){for(var i=r[n],a=0;a<i&&(e.push(r.length>n+1?[]:0),!(r.length<n+1));a++)t(e[a],n+1,r)}(t,0,[3,11]),t}()}function Et(){this.jb=a(3),this.Wc=s([4,8],Mt),this.Xc=s([4,17],Mt)}function qt(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new a(4),this.od=new a(4)}function Rt(){this.ld=this.La=this.dd=this.tc=0}function Tt(){this.Na=this.la=0}function Dt(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Ut(){this.ad=a(384),this.Za=0,this.Ob=a(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function zt(){this.uc=this.M=this.Nb=0,this.wa=Array(new Rt),this.Y=0,this.ya=Array(new Ut),this.aa=0,this.l=new Gt}function Ht(){this.y=a(16),this.f=a(8),this.ea=a(8)}function Wt(){this.cb=this.a=0,this.sc="",this.m=new w,this.Od=new jt,this.Kc=new Bt,this.ed=new qt,this.Qa=new Ot,this.Ic=this.$c=this.Aa=0,this.D=new zt,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=o(8,w),this.ia=0,this.pb=o(4,Dt),this.Pa=new Et,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new Ht),this.Hd=0,this.rb=Array(new Tt),this.sb=0,this.wa=Array(new Rt),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Ut),this.L=this.aa=0,this.gd=s([4,2],Rt),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Vt(t,e){return 0>t?0:t>e?e:t}function Gt(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function Yt(){var t=new Wt;return null!=t&&(t.a=0,t.sc="OK",t.cb=0,t.Xb=0,ri||(ri=Zt)),t}function Jt(t,e,n){return 0==t.a&&(t.a=e,t.sc=n,t.cb=0),0}function Xt(t,e,n){return 3<=n&&157==t[e+0]&&1==t[e+1]&&42==t[e+2]}function Kt(t,n){if(null==t)return 0;if(t.a=0,t.sc="OK",null==n)return Jt(t,2,"null VP8Io passed to VP8GetHeaders()");var r=n.data,a=n.w,o=n.ha;if(4>o)return Jt(t,7,"Truncated header.");var s=r[a+0]|r[a+1]<<8|r[a+2]<<16,u=t.Od;if(u.Rb=!(1&s),u.td=s>>1&7,u.yd=s>>4&1,u.ub=s>>5,3<u.td)return Jt(t,3,"Incorrect keyframe parameters.");if(!u.yd)return Jt(t,4,"Frame not displayable.");a+=3,o-=3;var c=t.Kc;if(u.Rb){if(7>o)return Jt(t,7,"cannot parse picture header");if(!Xt(r,a,o))return Jt(t,3,"Bad code word");c.c=16383&(r[a+4]<<8|r[a+3]),c.Td=r[a+4]>>6,c.i=16383&(r[a+6]<<8|r[a+5]),c.Ud=r[a+6]>>6,a+=7,o-=7,t.za=c.c+15>>4,t.Ub=c.i+15>>4,n.width=c.c,n.height=c.i,n.Da=0,n.j=0,n.v=0,n.va=n.width,n.o=n.height,n.da=0,n.ib=n.width,n.hb=n.height,n.U=n.width,n.T=n.height,i((s=t.Pa).jb,0,255,s.jb.length),e(null!=(s=t.Qa)),s.Cb=0,s.Bb=0,s.Fb=1,i(s.Zb,0,0,s.Zb.length),i(s.Lb,0,0,s.Lb)}if(u.ub>o)return Jt(t,7,"bad partition length");p(s=t.m,r,a,u.ub),a+=u.ub,o-=u.ub,u.Rb&&(c.Ld=P(s),c.Kd=P(s)),c=t.Qa;var h,l=t.Pa;if(e(null!=s),e(null!=c),c.Cb=P(s),c.Cb){if(c.Bb=P(s),P(s)){for(c.Fb=P(s),h=0;4>h;++h)c.Zb[h]=P(s)?m(s,7):0;for(h=0;4>h;++h)c.Lb[h]=P(s)?m(s,6):0}if(c.Bb)for(h=0;3>h;++h)l.jb[h]=P(s)?g(s,8):255}else c.Bb=0;if(s.Ka)return Jt(t,3,"cannot parse segment header");if((c=t.ed).zd=P(s),c.Tb=g(s,6),c.wb=g(s,3),c.Pc=P(s),c.Pc&&P(s)){for(l=0;4>l;++l)P(s)&&(c.vd[l]=m(s,6));for(l=0;4>l;++l)P(s)&&(c.od[l]=m(s,6))}if(t.L=0==c.Tb?0:c.zd?1:2,s.Ka)return Jt(t,3,"cannot parse filter header");var f=o;if(o=h=a,a=h+f,c=f,t.Xb=(1<<g(t.m,2))-1,f<3*(l=t.Xb))r=7;else{for(h+=3*l,c-=3*l,f=0;f<l;++f){var d=r[o+0]|r[o+1]<<8|r[o+2]<<16;d>c&&(d=c),p(t.Jc[+f],r,h,d),h+=d,c-=d,o+=3}p(t.Jc[+l],r,h,c),r=h<a?0:5}if(0!=r)return Jt(t,r,"cannot parse partitions");for(r=g(h=t.m,7),o=P(h)?m(h,4):0,a=P(h)?m(h,4):0,c=P(h)?m(h,4):0,l=P(h)?m(h,4):0,h=P(h)?m(h,4):0,f=t.Qa,d=0;4>d;++d){if(f.Cb){var v=f.Zb[d];f.Fb||(v+=r)}else{if(0<d){t.pb[d]=t.pb[0];continue}v=r}var b=t.pb[d];b.Sc[0]=ei[Vt(v+o,127)],b.Sc[1]=ni[Vt(v+0,127)],b.Eb[0]=2*ei[Vt(v+a,127)],b.Eb[1]=101581*ni[Vt(v+c,127)]>>16,8>b.Eb[1]&&(b.Eb[1]=8),b.Qc[0]=ei[Vt(v+l,117)],b.Qc[1]=ni[Vt(v+h,127)],b.lc=v+h}if(!u.Rb)return Jt(t,4,"Not a key frame.");for(P(s),u=t.Pa,r=0;4>r;++r){for(o=0;8>o;++o)for(a=0;3>a;++a)for(c=0;11>c;++c)l=k(s,ci[r][o][a][c])?g(s,8):si[r][o][a][c],u.Wc[r][o].Yb[a][c]=l;for(o=0;17>o;++o)u.Xc[r][o]=u.Wc[r][hi[o]]}return t.kc=P(s),t.kc&&(t.Bd=g(s,8)),t.cb=1}function Zt(t,e,n,r,i,a,o){var s=e[i].Yb[n];for(n=0;16>i;++i){if(!k(t,s[n+0]))return i;for(;!k(t,s[n+1]);)if(s=e[++i].Yb[0],n=0,16==i)return 16;var u=e[i+1].Yb;if(k(t,s[n+2])){var c=t,h=0;if(k(c,(f=s)[(l=n)+3]))if(k(c,f[l+6])){for(s=0,l=2*(h=k(c,f[l+8]))+(f=k(c,f[l+9+h])),h=0,f=ii[l];f[s];++s)h+=h+k(c,f[s]);h+=3+(8<<l)}else k(c,f[l+7])?(h=7+2*k(c,165),h+=k(c,145)):h=5+k(c,159);else h=k(c,f[l+4])?3+k(c,f[l+5]):2;s=u[2]}else h=1,s=u[1];u=o+ai[i],0>(c=t).b&&S(c);var l,f=c.b,d=(l=c.Ca>>1)-(c.I>>f)>>31;--c.b,c.Ca+=d,c.Ca|=1,c.I-=(l+1&d)<<f,a[u]=((h^d)-d)*r[(0<i)+0]}return 16}function $t(t){var e=t.rb[t.sb-1];e.la=0,e.Na=0,i(t.zc,0,0,t.zc.length),t.ja=0}function Qt(t,n){if(null==t)return 0;if(null==n)return Jt(t,2,"NULL VP8Io parameter in VP8Decode().");if(!t.cb&&!Kt(t,n))return 0;if(e(t.cb),null==n.ac||n.ac(n)){n.ob&&(t.L=0);var s=Ti[t.L];if(2==t.L?(t.yb=0,t.zb=0):(t.yb=n.v-s>>4,t.zb=n.j-s>>4,0>t.yb&&(t.yb=0),0>t.zb&&(t.zb=0)),t.Va=n.o+15+s>>4,t.Hb=n.va+15+s>>4,t.Hb>t.za&&(t.Hb=t.za),t.Va>t.Ub&&(t.Va=t.Ub),0<t.L){var u=t.ed;for(s=0;4>s;++s){var c;if(t.Qa.Cb){var h=t.Qa.Lb[s];t.Qa.Fb||(h+=u.Tb)}else h=u.Tb;for(c=0;1>=c;++c){var l=t.gd[s][c],f=h;if(u.Pc&&(f+=u.vd[0],c&&(f+=u.od[0])),0<(f=0>f?0:63<f?63:f)){var d=f;0<u.wb&&((d=4<u.wb?d>>2:d>>1)>9-u.wb&&(d=9-u.wb)),1>d&&(d=1),l.dd=d,l.tc=2*f+d,l.ld=40<=f?2:15<=f?1:0}else l.tc=0;l.La=c}}}s=0}else Jt(t,6,"Frame setup failed"),s=t.a;if(s=0==s){if(s){t.$c=0,0<t.Aa||(t.Ic=Ui);t:{s=t.Ic;u=4*(d=t.za);var p=32*d,g=d+1,m=0<t.L?d*(0<t.Aa?2:1):0,v=(2==t.Aa?2:1)*d;if((l=u+832+(c=3*(16*s+Ti[t.L])/2*p)+(h=null!=t.Fa&&0<t.Fa.length?t.Kc.c*t.Kc.i:0))!=l)s=0;else{if(l>t.Vb){if(t.Vb=0,t.Ec=a(l),t.Fc=0,null==t.Ec){s=Jt(t,1,"no memory during frame initialization.");break t}t.Vb=l}l=t.Ec,f=t.Fc,t.Ac=l,t.Bc=f,f+=u,t.Gd=o(p,Ht),t.Hd=0,t.rb=o(g+1,Tt),t.sb=1,t.wa=m?o(m,Rt):null,t.Y=0,t.D.Nb=0,t.D.wa=t.wa,t.D.Y=t.Y,0<t.Aa&&(t.D.Y+=d),e(!0),t.oc=l,t.pc=f,f+=832,t.ya=o(v,Ut),t.aa=0,t.D.ya=t.ya,t.D.aa=t.aa,2==t.Aa&&(t.D.aa+=d),t.R=16*d,t.B=8*d,d=(p=Ti[t.L])*t.R,p=p/2*t.B,t.sa=l,t.ta=f+d,t.qa=t.sa,t.ra=t.ta+16*s*t.R+p,t.Ha=t.qa,t.Ia=t.ra+8*s*t.B+p,t.$c=0,f+=c,t.mb=h?l:null,t.nb=h?f:null,e(f+h<=t.Fc+t.Vb),$t(t),i(t.Ac,t.Bc,0,u),s=1}}if(s){if(n.ka=0,n.y=t.sa,n.O=t.ta,n.f=t.qa,n.N=t.ra,n.ea=t.Ha,n.Vd=t.Ia,n.fa=t.R,n.Rc=t.B,n.F=null,n.J=0,!Cr){for(s=-255;255>=s;++s)Pr[255+s]=0>s?-s:s;for(s=-1020;1020>=s;++s)kr[1020+s]=-128>s?-128:127<s?127:s;for(s=-112;112>=s;++s)Fr[112+s]=-16>s?-16:15<s?15:s;for(s=-255;510>=s;++s)Ir[255+s]=0>s?0:255<s?255:s;Cr=1}ar=ce,or=ae,ur=oe,cr=se,hr=ue,sr=ie,lr=Je,fr=Xe,dr=$e,pr=Qe,gr=Ke,mr=Ze,vr=tn,br=en,yr=ze,wr=He,Nr=We,Lr=Ve,fi[0]=Ae,fi[1]=le,fi[2]=Le,fi[3]=xe,fi[4]=_e,fi[5]=Pe,fi[6]=Se,fi[7]=ke,fi[8]=Ie,fi[9]=Fe,li[0]=ve,li[1]=de,li[2]=pe,li[3]=ge,li[4]=be,li[5]=ye,li[6]=we,di[0]=Oe,di[1]=fe,di[2]=Ce,di[3]=je,di[4]=Ee,di[5]=Me,di[6]=qe,s=1}else s=0}s&&(s=function(t,n){for(t.M=0;t.M<t.Va;++t.M){var o,s=t.Jc[t.M&t.Xb],u=t.m,c=t;for(o=0;o<c.za;++o){var h=u,l=c,f=l.Ac,d=l.Bc+4*o,p=l.zc,g=l.ya[l.aa+o];if(l.Qa.Bb?g.$b=k(h,l.Pa.jb[0])?2+k(h,l.Pa.jb[2]):k(h,l.Pa.jb[1]):g.$b=0,l.kc&&(g.Ad=k(h,l.Bd)),g.Za=!k(h,145)+0,g.Za){var m=g.Ob,v=0;for(l=0;4>l;++l){var b,y=p[0+l];for(b=0;4>b;++b){y=ui[f[d+b]][y];for(var w=oi[k(h,y[0])];0<w;)w=oi[2*w+k(h,y[w])];y=-w,f[d+b]=y}r(m,v,f,d,4),v+=4,p[0+l]=y}}else y=k(h,156)?k(h,128)?1:3:k(h,163)?2:0,g.Ob[0]=y,i(f,d,y,4),i(p,0,y,4);g.Dd=k(h,142)?k(h,114)?k(h,183)?1:3:2:0}if(c.m.Ka)return Jt(t,7,"Premature end-of-partition0 encountered.");for(;t.ja<t.za;++t.ja){if(c=s,h=(u=t).rb[u.sb-1],f=u.rb[u.sb+u.ja],o=u.ya[u.aa+u.ja],d=u.kc?o.Ad:0)h.la=f.la=0,o.Za||(h.Na=f.Na=0),o.Hc=0,o.Gc=0,o.ia=0;else{var N,L;h=f,f=c,d=u.Pa.Xc,p=u.ya[u.aa+u.ja],g=u.pb[p.$b];if(l=p.ad,m=0,v=u.rb[u.sb-1],y=b=0,i(l,m,0,384),p.Za)var x=0,A=d[3];else{w=a(16);var _=h.Na+v.Na;if(_=ri(f,d[1],_,g.Eb,0,w,0),h.Na=v.Na=(0<_)+0,1<_)ar(w,0,l,m);else{var S=w[0]+3>>3;for(w=0;256>w;w+=16)l[m+w]=S}x=1,A=d[0]}var P=15&h.la,F=15&v.la;for(w=0;4>w;++w){var I=1&F;for(S=L=0;4>S;++S)P=P>>1|(I=(_=ri(f,A,_=I+(1&P),g.Sc,x,l,m))>x)<<7,L=L<<2|(3<_?3:1<_?2:0!=l[m+0]),m+=16;P>>=4,F=F>>1|I<<7,b=(b<<8|L)>>>0}for(A=P,x=F>>4,N=0;4>N;N+=2){for(L=0,P=h.la>>4+N,F=v.la>>4+N,w=0;2>w;++w){for(I=1&F,S=0;2>S;++S)_=I+(1&P),P=P>>1|(I=0<(_=ri(f,d[2],_,g.Qc,0,l,m)))<<3,L=L<<2|(3<_?3:1<_?2:0!=l[m+0]),m+=16;P>>=2,F=F>>1|I<<5}y|=L<<4*N,A|=P<<4<<N,x|=(240&F)<<N}h.la=A,v.la=x,p.Hc=b,p.Gc=y,p.ia=43690&y?0:g.ia,d=!(b|y)}if(0<u.L&&(u.wa[u.Y+u.ja]=u.gd[o.$b][o.Za],u.wa[u.Y+u.ja].La|=!d),c.Ka)return Jt(t,7,"Premature end-of-file encountered.")}if($t(t),u=n,c=1,o=(s=t).D,h=0<s.L&&s.M>=s.zb&&s.M<=s.Va,0==s.Aa)t:{if(o.M=s.M,o.uc=h,On(s,o),c=1,o=(L=s.D).Nb,h=(y=Ti[s.L])*s.R,f=y/2*s.B,w=16*o*s.R,S=8*o*s.B,d=s.sa,p=s.ta-h+w,g=s.qa,l=s.ra-f+S,m=s.Ha,v=s.Ia-f+S,F=0==(P=L.M),b=P>=s.Va-1,2==s.Aa&&On(s,L),L.uc)for(I=(_=s).D.M,e(_.D.uc),L=_.yb;L<_.Hb;++L){x=L,A=I;var C=(j=(U=_).D).Nb;N=U.R;var j=j.wa[j.Y+x],B=U.sa,O=U.ta+16*C*N+16*x,M=j.dd,E=j.tc;if(0!=E)if(e(3<=E),1==U.L)0<x&&wr(B,O,N,E+4),j.La&&Lr(B,O,N,E),0<A&&yr(B,O,N,E+4),j.La&&Nr(B,O,N,E);else{var q=U.B,R=U.qa,T=U.ra+8*C*q+8*x,D=U.Ha,U=U.Ia+8*C*q+8*x;C=j.ld;0<x&&(fr(B,O,N,E+4,M,C),pr(R,T,D,U,q,E+4,M,C)),j.La&&(mr(B,O,N,E,M,C),br(R,T,D,U,q,E,M,C)),0<A&&(lr(B,O,N,E+4,M,C),dr(R,T,D,U,q,E+4,M,C)),j.La&&(gr(B,O,N,E,M,C),vr(R,T,D,U,q,E,M,C))}}if(s.ia&&alert("todo:DitherRow"),null!=u.put){if(L=16*P,P=16*(P+1),F?(u.y=s.sa,u.O=s.ta+w,u.f=s.qa,u.N=s.ra+S,u.ea=s.Ha,u.W=s.Ia+S):(L-=y,u.y=d,u.O=p,u.f=g,u.N=l,u.ea=m,u.W=v),b||(P-=y),P>u.o&&(P=u.o),u.F=null,u.J=null,null!=s.Fa&&0<s.Fa.length&&L<P&&(u.J=fn(s,u,L,P-L),u.F=s.mb,null==u.F&&0==u.F.length)){c=Jt(s,3,"Could not decode alpha data.");break t}L<u.j&&(y=u.j-L,L=u.j,e(!(1&y)),u.O+=s.R*y,u.N+=s.B*(y>>1),u.W+=s.B*(y>>1),null!=u.F&&(u.J+=u.width*y)),L<P&&(u.O+=u.v,u.N+=u.v>>1,u.W+=u.v>>1,null!=u.F&&(u.J+=u.v),u.ka=L-u.j,u.U=u.va-u.v,u.T=P-L,c=u.put(u))}o+1!=s.Ic||b||(r(s.sa,s.ta-h,d,p+16*s.R,h),r(s.qa,s.ra-f,g,l+8*s.B,f),r(s.Ha,s.Ia-f,m,v+8*s.B,f))}if(!c)return Jt(t,6,"Output aborted.")}return 1}(t,n)),null!=n.bc&&n.bc(n),s&=1}return s?(t.cb=0,s):0}function te(t,e,n,r,i){i=t[e+n+32*r]+(i>>3),t[e+n+32*r]=-256&i?0>i?0:255:i}function ee(t,e,n,r,i,a){te(t,e,0,n,r+i),te(t,e,1,n,r+a),te(t,e,2,n,r-a),te(t,e,3,n,r-i)}function ne(t){return(20091*t>>16)+t}function re(t,e,n,r){var i,o=0,s=a(16);for(i=0;4>i;++i){var u=t[e+0]+t[e+8],c=t[e+0]-t[e+8],h=(35468*t[e+4]>>16)-ne(t[e+12]),l=ne(t[e+4])+(35468*t[e+12]>>16);s[o+0]=u+l,s[o+1]=c+h,s[o+2]=c-h,s[o+3]=u-l,o+=4,e++}for(i=o=0;4>i;++i)u=(t=s[o+0]+4)+s[o+8],c=t-s[o+8],h=(35468*s[o+4]>>16)-ne(s[o+12]),te(n,r,0,0,u+(l=ne(s[o+4])+(35468*s[o+12]>>16))),te(n,r,1,0,c+h),te(n,r,2,0,c-h),te(n,r,3,0,u-l),o++,r+=32}function ie(t,e,n,r){var i=t[e+0]+4,a=35468*t[e+4]>>16,o=ne(t[e+4]),s=35468*t[e+1]>>16;ee(n,r,0,i+o,t=ne(t[e+1]),s),ee(n,r,1,i+a,t,s),ee(n,r,2,i-a,t,s),ee(n,r,3,i-o,t,s)}function ae(t,e,n,r,i){re(t,e,n,r),i&&re(t,e+16,n,r+4)}function oe(t,e,n,r){or(t,e+0,n,r,1),or(t,e+32,n,r+128,1)}function se(t,e,n,r){var i;for(t=t[e+0]+4,i=0;4>i;++i)for(e=0;4>e;++e)te(n,r,e,i,t)}function ue(t,e,n,r){t[e+0]&&cr(t,e+0,n,r),t[e+16]&&cr(t,e+16,n,r+4),t[e+32]&&cr(t,e+32,n,r+128),t[e+48]&&cr(t,e+48,n,r+128+4)}function ce(t,e,n,r){var i,o=a(16);for(i=0;4>i;++i){var s=t[e+0+i]+t[e+12+i],u=t[e+4+i]+t[e+8+i],c=t[e+4+i]-t[e+8+i],h=t[e+0+i]-t[e+12+i];o[0+i]=s+u,o[8+i]=s-u,o[4+i]=h+c,o[12+i]=h-c}for(i=0;4>i;++i)s=(t=o[0+4*i]+3)+o[3+4*i],u=o[1+4*i]+o[2+4*i],c=o[1+4*i]-o[2+4*i],h=t-o[3+4*i],n[r+0]=s+u>>3,n[r+16]=h+c>>3,n[r+32]=s-u>>3,n[r+48]=h-c>>3,r+=64}function he(t,e,n){var r,i=e-32,a=Or,o=255-t[i-1];for(r=0;r<n;++r){var s,u=a,c=o+t[e-1];for(s=0;s<n;++s)t[e+s]=u[c+t[i+s]];e+=32}}function le(t,e){he(t,e,4)}function fe(t,e){he(t,e,8)}function de(t,e){he(t,e,16)}function pe(t,e){var n;for(n=0;16>n;++n)r(t,e+32*n,t,e-32,16)}function ge(t,e){var n;for(n=16;0<n;--n)i(t,e,t[e-1],16),e+=32}function me(t,e,n){var r;for(r=0;16>r;++r)i(e,n+32*r,t,16)}function ve(t,e){var n,r=16;for(n=0;16>n;++n)r+=t[e-1+32*n]+t[e+n-32];me(r>>5,t,e)}function be(t,e){var n,r=8;for(n=0;16>n;++n)r+=t[e-1+32*n];me(r>>4,t,e)}function ye(t,e){var n,r=8;for(n=0;16>n;++n)r+=t[e+n-32];me(r>>4,t,e)}function we(t,e){me(128,t,e)}function Ne(t,e,n){return t+2*e+n+2>>2}function Le(t,e){var n,i=e-32;i=new Uint8Array([Ne(t[i-1],t[i+0],t[i+1]),Ne(t[i+0],t[i+1],t[i+2]),Ne(t[i+1],t[i+2],t[i+3]),Ne(t[i+2],t[i+3],t[i+4])]);for(n=0;4>n;++n)r(t,e+32*n,i,0,i.length)}function xe(t,e){var n=t[e-1],r=t[e-1+32],i=t[e-1+64],a=t[e-1+96];F(t,e+0,16843009*Ne(t[e-1-32],n,r)),F(t,e+32,16843009*Ne(n,r,i)),F(t,e+64,16843009*Ne(r,i,a)),F(t,e+96,16843009*Ne(i,a,a))}function Ae(t,e){var n,r=4;for(n=0;4>n;++n)r+=t[e+n-32]+t[e-1+32*n];for(r>>=3,n=0;4>n;++n)i(t,e+32*n,r,4)}function _e(t,e){var n=t[e-1+0],r=t[e-1+32],i=t[e-1+64],a=t[e-1-32],o=t[e+0-32],s=t[e+1-32],u=t[e+2-32],c=t[e+3-32];t[e+0+96]=Ne(r,i,t[e-1+96]),t[e+1+96]=t[e+0+64]=Ne(n,r,i),t[e+2+96]=t[e+1+64]=t[e+0+32]=Ne(a,n,r),t[e+3+96]=t[e+2+64]=t[e+1+32]=t[e+0+0]=Ne(o,a,n),t[e+3+64]=t[e+2+32]=t[e+1+0]=Ne(s,o,a),t[e+3+32]=t[e+2+0]=Ne(u,s,o),t[e+3+0]=Ne(c,u,s)}function Se(t,e){var n=t[e+1-32],r=t[e+2-32],i=t[e+3-32],a=t[e+4-32],o=t[e+5-32],s=t[e+6-32],u=t[e+7-32];t[e+0+0]=Ne(t[e+0-32],n,r),t[e+1+0]=t[e+0+32]=Ne(n,r,i),t[e+2+0]=t[e+1+32]=t[e+0+64]=Ne(r,i,a),t[e+3+0]=t[e+2+32]=t[e+1+64]=t[e+0+96]=Ne(i,a,o),t[e+3+32]=t[e+2+64]=t[e+1+96]=Ne(a,o,s),t[e+3+64]=t[e+2+96]=Ne(o,s,u),t[e+3+96]=Ne(s,u,u)}function Pe(t,e){var n=t[e-1+0],r=t[e-1+32],i=t[e-1+64],a=t[e-1-32],o=t[e+0-32],s=t[e+1-32],u=t[e+2-32],c=t[e+3-32];t[e+0+0]=t[e+1+64]=a+o+1>>1,t[e+1+0]=t[e+2+64]=o+s+1>>1,t[e+2+0]=t[e+3+64]=s+u+1>>1,t[e+3+0]=u+c+1>>1,t[e+0+96]=Ne(i,r,n),t[e+0+64]=Ne(r,n,a),t[e+0+32]=t[e+1+96]=Ne(n,a,o),t[e+1+32]=t[e+2+96]=Ne(a,o,s),t[e+2+32]=t[e+3+96]=Ne(o,s,u),t[e+3+32]=Ne(s,u,c)}function ke(t,e){var n=t[e+0-32],r=t[e+1-32],i=t[e+2-32],a=t[e+3-32],o=t[e+4-32],s=t[e+5-32],u=t[e+6-32],c=t[e+7-32];t[e+0+0]=n+r+1>>1,t[e+1+0]=t[e+0+64]=r+i+1>>1,t[e+2+0]=t[e+1+64]=i+a+1>>1,t[e+3+0]=t[e+2+64]=a+o+1>>1,t[e+0+32]=Ne(n,r,i),t[e+1+32]=t[e+0+96]=Ne(r,i,a),t[e+2+32]=t[e+1+96]=Ne(i,a,o),t[e+3+32]=t[e+2+96]=Ne(a,o,s),t[e+3+64]=Ne(o,s,u),t[e+3+96]=Ne(s,u,c)}function Fe(t,e){var n=t[e-1+0],r=t[e-1+32],i=t[e-1+64],a=t[e-1+96];t[e+0+0]=n+r+1>>1,t[e+2+0]=t[e+0+32]=r+i+1>>1,t[e+2+32]=t[e+0+64]=i+a+1>>1,t[e+1+0]=Ne(n,r,i),t[e+3+0]=t[e+1+32]=Ne(r,i,a),t[e+3+32]=t[e+1+64]=Ne(i,a,a),t[e+3+64]=t[e+2+64]=t[e+0+96]=t[e+1+96]=t[e+2+96]=t[e+3+96]=a}function Ie(t,e){var n=t[e-1+0],r=t[e-1+32],i=t[e-1+64],a=t[e-1+96],o=t[e-1-32],s=t[e+0-32],u=t[e+1-32],c=t[e+2-32];t[e+0+0]=t[e+2+32]=n+o+1>>1,t[e+0+32]=t[e+2+64]=r+n+1>>1,t[e+0+64]=t[e+2+96]=i+r+1>>1,t[e+0+96]=a+i+1>>1,t[e+3+0]=Ne(s,u,c),t[e+2+0]=Ne(o,s,u),t[e+1+0]=t[e+3+32]=Ne(n,o,s),t[e+1+32]=t[e+3+64]=Ne(r,n,o),t[e+1+64]=t[e+3+96]=Ne(i,r,n),t[e+1+96]=Ne(a,i,r)}function Ce(t,e){var n;for(n=0;8>n;++n)r(t,e+32*n,t,e-32,8)}function je(t,e){var n;for(n=0;8>n;++n)i(t,e,t[e-1],8),e+=32}function Be(t,e,n){var r;for(r=0;8>r;++r)i(e,n+32*r,t,8)}function Oe(t,e){var n,r=8;for(n=0;8>n;++n)r+=t[e+n-32]+t[e-1+32*n];Be(r>>4,t,e)}function Me(t,e){var n,r=4;for(n=0;8>n;++n)r+=t[e+n-32];Be(r>>3,t,e)}function Ee(t,e){var n,r=4;for(n=0;8>n;++n)r+=t[e-1+32*n];Be(r>>3,t,e)}function qe(t,e){Be(128,t,e)}function Re(t,e,n){var r=t[e-n],i=t[e+0],a=3*(i-r)+jr[1020+t[e-2*n]-t[e+n]],o=Br[112+(a+4>>3)];t[e-n]=Or[255+r+Br[112+(a+3>>3)]],t[e+0]=Or[255+i-o]}function Te(t,e,n,r){var i=t[e+0],a=t[e+n];return Mr[255+t[e-2*n]-t[e-n]]>r||Mr[255+a-i]>r}function De(t,e,n,r){return 4*Mr[255+t[e-n]-t[e+0]]+Mr[255+t[e-2*n]-t[e+n]]<=r}function Ue(t,e,n,r,i){var a=t[e-3*n],o=t[e-2*n],s=t[e-n],u=t[e+0],c=t[e+n],h=t[e+2*n],l=t[e+3*n];return 4*Mr[255+s-u]+Mr[255+o-c]>r?0:Mr[255+t[e-4*n]-a]<=i&&Mr[255+a-o]<=i&&Mr[255+o-s]<=i&&Mr[255+l-h]<=i&&Mr[255+h-c]<=i&&Mr[255+c-u]<=i}function ze(t,e,n,r){var i=2*r+1;for(r=0;16>r;++r)De(t,e+r,n,i)&&Re(t,e+r,n)}function He(t,e,n,r){var i=2*r+1;for(r=0;16>r;++r)De(t,e+r*n,1,i)&&Re(t,e+r*n,1)}function We(t,e,n,r){var i;for(i=3;0<i;--i)ze(t,e+=4*n,n,r)}function Ve(t,e,n,r){var i;for(i=3;0<i;--i)He(t,e+=4,n,r)}function Ge(t,e,n,r,i,a,o,s){for(a=2*a+1;0<i--;){if(Ue(t,e,n,a,o))if(Te(t,e,n,s))Re(t,e,n);else{var u=t,c=e,h=n,l=u[c-2*h],f=u[c-h],d=u[c+0],p=u[c+h],g=u[c+2*h],m=27*(b=jr[1020+3*(d-f)+jr[1020+l-p]])+63>>7,v=18*b+63>>7,b=9*b+63>>7;u[c-3*h]=Or[255+u[c-3*h]+b],u[c-2*h]=Or[255+l+v],u[c-h]=Or[255+f+m],u[c+0]=Or[255+d-m],u[c+h]=Or[255+p-v],u[c+2*h]=Or[255+g-b]}e+=r}}function Ye(t,e,n,r,i,a,o,s){for(a=2*a+1;0<i--;){if(Ue(t,e,n,a,o))if(Te(t,e,n,s))Re(t,e,n);else{var u=t,c=e,h=n,l=u[c-h],f=u[c+0],d=u[c+h],p=Br[112+((g=3*(f-l))+4>>3)],g=Br[112+(g+3>>3)],m=p+1>>1;u[c-2*h]=Or[255+u[c-2*h]+m],u[c-h]=Or[255+l+g],u[c+0]=Or[255+f-p],u[c+h]=Or[255+d-m]}e+=r}}function Je(t,e,n,r,i,a){Ge(t,e,n,1,16,r,i,a)}function Xe(t,e,n,r,i,a){Ge(t,e,1,n,16,r,i,a)}function Ke(t,e,n,r,i,a){var o;for(o=3;0<o;--o)Ye(t,e+=4*n,n,1,16,r,i,a)}function Ze(t,e,n,r,i,a){var o;for(o=3;0<o;--o)Ye(t,e+=4,1,n,16,r,i,a)}function $e(t,e,n,r,i,a,o,s){Ge(t,e,i,1,8,a,o,s),Ge(n,r,i,1,8,a,o,s)}function Qe(t,e,n,r,i,a,o,s){Ge(t,e,1,i,8,a,o,s),Ge(n,r,1,i,8,a,o,s)}function tn(t,e,n,r,i,a,o,s){Ye(t,e+4*i,i,1,8,a,o,s),Ye(n,r+4*i,i,1,8,a,o,s)}function en(t,e,n,r,i,a,o,s){Ye(t,e+4,1,i,8,a,o,s),Ye(n,r+4,1,i,8,a,o,s)}function nn(){this.ba=new ot,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new ut,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function rn(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function an(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function on(){this.ua=0,this.Wa=new M,this.vb=new M,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new d,this.yc=new l}function sn(){this.xb=this.a=0,this.l=new Gt,this.ca=new ot,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new N,this.Pb=0,this.wd=new N,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new on,this.ab=0,this.gc=o(4,an),this.Oc=0}function un(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Gt,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function cn(t,e,n,r,i,a,o){for(t=null==t?0:t[e+0],e=0;e<o;++e)i[a+e]=t+n[r+e]&255,t=i[a+e]}function hn(t,e,n,r,i,a,o){var s;if(null==t)cn(null,null,n,r,i,a,o);else for(s=0;s<o;++s)i[a+s]=t[e+s]+n[r+s]&255}function ln(t,e,n,r,i,a,o){if(null==t)cn(null,null,n,r,i,a,o);else{var s,u=t[e+0],c=u,h=u;for(s=0;s<o;++s)c=h+(u=t[e+s])-c,h=n[r+s]+(-256&c?0>c?0:255:c)&255,c=u,i[a+s]=h}}function fn(t,n,i,o){var s=n.width,u=n.o;if(e(null!=t&&null!=n),0>i||0>=o||i+o>u)return null;if(!t.Cc){if(null==t.ga){var c;if(t.ga=new un,(c=null==t.ga)||(c=n.width*n.o,e(0==t.Gb.length),t.Gb=a(c),t.Uc=0,null==t.Gb?c=0:(t.mb=t.Gb,t.nb=t.Uc,t.rc=null,c=1),c=!c),!c){c=t.ga;var h=t.Fa,l=t.P,f=t.qc,d=t.mb,p=t.nb,g=l+1,m=f-1,b=c.l;if(e(null!=h&&null!=d&&null!=n),mi[0]=null,mi[1]=cn,mi[2]=hn,mi[3]=ln,c.ca=d,c.tb=p,c.c=n.width,c.i=n.height,e(0<c.c&&0<c.i),1>=f)n=0;else if(c.$a=h[l+0]>>0&3,c.Z=h[l+0]>>2&3,c.Lc=h[l+0]>>4&3,l=h[l+0]>>6&3,0>c.$a||1<c.$a||4<=c.Z||1<c.Lc||l)n=0;else if(b.put=dt,b.ac=ft,b.bc=pt,b.ma=c,b.width=n.width,b.height=n.height,b.Da=n.Da,b.v=n.v,b.va=n.va,b.j=n.j,b.o=n.o,c.$a)t:{e(1==c.$a),n=kt();e:for(;;){if(null==n){n=0;break t}if(e(null!=c),c.mc=n,n.c=c.c,n.i=c.i,n.l=c.l,n.l.ma=c,n.l.width=c.c,n.l.height=c.i,n.a=0,v(n.m,h,g,m),!Ft(c.c,c.i,1,n,null))break e;if(1==n.ab&&3==n.gc[0].hc&&xt(n.s)?(c.ic=1,h=n.c*n.i,n.Ta=null,n.Ua=0,n.V=a(h),n.Ba=0,null==n.V?(n.a=1,n=0):n=1):(c.ic=0,n=It(n,c.c)),!n)break e;n=1;break t}c.mc=null,n=0}else n=m>=c.c*c.i;c=!n}if(c)return null;1!=t.ga.Lc?t.Ga=0:o=u-i}e(null!=t.ga),e(i+o<=u);t:{if(n=(h=t.ga).c,u=h.l.o,0==h.$a){if(g=t.rc,m=t.Vc,b=t.Fa,l=t.P+1+i*n,f=t.mb,d=t.nb+i*n,e(l<=t.P+t.qc),0!=h.Z)for(e(null!=mi[h.Z]),c=0;c<o;++c)mi[h.Z](g,m,b,l,f,d,n),g=f,m=d,d+=n,l+=n;else for(c=0;c<o;++c)r(f,d,b,l,n),g=f,m=d,d+=n,l+=n;t.rc=g,t.Vc=m}else{if(e(null!=h.mc),n=i+o,e(null!=(c=h.mc)),e(n<=c.i),c.C>=n)n=1;else if(h.ic||vn(),h.ic){h=c.V,g=c.Ba,m=c.c;var y=c.i,w=(b=1,l=c.$/m,f=c.$%m,d=c.m,p=c.s,c.$),N=m*y,L=m*n,A=p.wc,S=w<L?wt(p,f,l):null;e(w<=N),e(n<=y),e(xt(p));e:for(;;){for(;!d.h&&w<L;){if(f&A||(S=wt(p,f,l)),e(null!=S),_(d),256>(y=bt(S.G[0],S.H[0],d)))h[g+w]=y,++w,++f>=m&&(f=0,++l<=n&&!(l%16)&&_t(c,l));else{if(!(280>y)){b=0;break e}y=mt(y-256,d);var P,k=bt(S.G[4],S.H[4],d);if(_(d),!(w>=(k=vt(m,k=mt(k,d)))&&N-w>=y)){b=0;break e}for(P=0;P<y;++P)h[g+w+P]=h[g+w+P-k];for(w+=y,f+=y;f>=m;)f-=m,++l<=n&&!(l%16)&&_t(c,l);w<L&&f&A&&(S=wt(p,f,l))}e(d.h==x(d))}_t(c,l>n?n:l);break e}!b||d.h&&w<N?(b=0,c.a=d.h?5:3):c.$=w,n=b}else n=St(c,c.V,c.Ba,c.c,c.i,n,Ct);if(!n){o=0;break t}}i+o>=u&&(t.Cc=1),o=1}if(!o)return null;if(t.Cc&&(null!=(o=t.ga)&&(o.mc=null),t.ga=null,0<t.Ga))return alert("todo:WebPDequantizeLevels"),null}return t.nb+i*s}function dn(t,e,n,r,i,a){for(;0<i--;){var o,s=t,u=e+(n?1:0),c=t,h=e+(n?0:3);for(o=0;o<r;++o){var l=c[h+4*o];255!=l&&(l*=32897,s[u+4*o+0]=s[u+4*o+0]*l>>23,s[u+4*o+1]=s[u+4*o+1]*l>>23,s[u+4*o+2]=s[u+4*o+2]*l>>23)}e+=a}}function pn(t,e,n,r,i){for(;0<r--;){var a;for(a=0;a<n;++a){var o=t[e+2*a+0],s=15&(c=t[e+2*a+1]),u=4369*s,c=(240&c|c>>4)*u>>16;t[e+2*a+0]=(240&o|o>>4)*u>>16&240|(15&o|o<<4)*u>>16>>4&15,t[e+2*a+1]=240&c|s}e+=i}}function gn(t,e,n,r,i,a,o,s){var u,c,h=255;for(c=0;c<i;++c){for(u=0;u<r;++u){var l=t[e+u];a[o+4*u]=l,h&=l}e+=n,o+=s}return 255!=h}function mn(t,e,n,r,i){var a;for(a=0;a<i;++a)n[r+a]=t[e+a]>>8}function vn(){xr=dn,Ar=pn,_r=gn,Sr=mn}function bn(n,r,i){t[n]=function(t,n,a,o,s,u,c,h,l,f,d,p,g,m,v,b,y){var w,N=y-1>>1,L=s[u+0]|c[h+0]<<16,x=l[f+0]|d[p+0]<<16;e(null!=t);var A=3*L+x+131074>>2;for(r(t[n+0],255&A,A>>16,g,m),null!=a&&(A=3*x+L+131074>>2,r(a[o+0],255&A,A>>16,v,b)),w=1;w<=N;++w){var _=s[u+w]|c[h+w]<<16,S=l[f+w]|d[p+w]<<16,P=L+_+x+S+524296,k=P+2*(_+x)>>3;A=k+L>>1,L=(P=P+2*(L+S)>>3)+_>>1,r(t[n+2*w-1],255&A,A>>16,g,m+(2*w-1)*i),r(t[n+2*w-0],255&L,L>>16,g,m+(2*w-0)*i),null!=a&&(A=P+x>>1,L=k+S>>1,r(a[o+2*w-1],255&A,A>>16,v,b+(2*w-1)*i),r(a[o+2*w+0],255&L,L>>16,v,b+(2*w+0)*i)),L=_,x=S}1&y||(A=3*L+x+131074>>2,r(t[n+y-1],255&A,A>>16,g,m+(y-1)*i),null!=a&&(A=3*x+L+131074>>2,r(a[o+y-1],255&A,A>>16,v,b+(y-1)*i)))}}function yn(){vi[Er]=bi,vi[qr]=wi,vi[Rr]=yi,vi[Tr]=Ni,vi[Dr]=Li,vi[Ur]=xi,vi[zr]=Ai,vi[Hr]=wi,vi[Wr]=Ni,vi[Vr]=Li,vi[Gr]=xi}function wn(t){return t&~Ii?0>t?0:255:t>>Fi}function Nn(t,e){return wn((19077*t>>8)+(26149*e>>8)-14234)}function Ln(t,e,n){return wn((19077*t>>8)-(6419*e>>8)-(13320*n>>8)+8708)}function xn(t,e){return wn((19077*t>>8)+(33050*e>>8)-17685)}function An(t,e,n,r,i){r[i+0]=Nn(t,n),r[i+1]=Ln(t,e,n),r[i+2]=xn(t,e)}function _n(t,e,n,r,i){r[i+0]=xn(t,e),r[i+1]=Ln(t,e,n),r[i+2]=Nn(t,n)}function Sn(t,e,n,r,i){var a=Ln(t,e,n);e=a<<3&224|xn(t,e)>>3,r[i+0]=248&Nn(t,n)|a>>5,r[i+1]=e}function Pn(t,e,n,r,i){var a=240&xn(t,e)|15;r[i+0]=240&Nn(t,n)|Ln(t,e,n)>>4,r[i+1]=a}function kn(t,e,n,r,i){r[i+0]=255,An(t,e,n,r,i+1)}function Fn(t,e,n,r,i){_n(t,e,n,r,i),r[i+3]=255}function In(t,e,n,r,i){An(t,e,n,r,i),r[i+3]=255}function Vt(t,e){return 0>t?0:t>e?e:t}function Cn(e,n,r){t[e]=function(t,e,i,a,o,s,u,c,h){for(var l=c+(-2&h)*r;c!=l;)n(t[e+0],i[a+0],o[s+0],u,c),n(t[e+1],i[a+0],o[s+0],u,c+r),e+=2,++a,++s,c+=2*r;1&h&&n(t[e+0],i[a+0],o[s+0],u,c)}}function jn(t,e,n){return 0==n?0==t?0==e?6:5:0==e?4:0:n}function Bn(t,e,n,r,i){switch(t>>>30){case 3:or(e,n,r,i,0);break;case 2:sr(e,n,r,i);break;case 1:cr(e,n,r,i)}}function On(t,e){var n,a,o=e.M,s=e.Nb,u=t.oc,c=t.pc+40,h=t.oc,l=t.pc+584,f=t.oc,d=t.pc+600;for(n=0;16>n;++n)u[c+32*n-1]=129;for(n=0;8>n;++n)h[l+32*n-1]=129,f[d+32*n-1]=129;for(0<o?u[c-1-32]=h[l-1-32]=f[d-1-32]=129:(i(u,c-32-1,127,21),i(h,l-32-1,127,9),i(f,d-32-1,127,9)),a=0;a<t.za;++a){var p=e.ya[e.aa+a];if(0<a){for(n=-1;16>n;++n)r(u,c+32*n-4,u,c+32*n+12,4);for(n=-1;8>n;++n)r(h,l+32*n-4,h,l+32*n+4,4),r(f,d+32*n-4,f,d+32*n+4,4)}var g=t.Gd,m=t.Hd+a,v=p.ad,b=p.Hc;if(0<o&&(r(u,c-32,g[m].y,0,16),r(h,l-32,g[m].f,0,8),r(f,d-32,g[m].ea,0,8)),p.Za){var y=u,w=c-32+16;for(0<o&&(a>=t.za-1?i(y,w,g[m].y[15],4):r(y,w,g[m+1].y,0,4)),n=0;4>n;n++)y[w+128+n]=y[w+256+n]=y[w+384+n]=y[w+0+n];for(n=0;16>n;++n,b<<=2)y=u,w=c+Ri[n],fi[p.Ob[n]](y,w),Bn(b,v,16*+n,y,w)}else if(y=jn(a,o,p.Ob[0]),li[y](u,c),0!=b)for(n=0;16>n;++n,b<<=2)Bn(b,v,16*+n,u,c+Ri[n]);for(n=p.Gc,y=jn(a,o,p.Dd),di[y](h,l),di[y](f,d),b=v,y=h,w=l,255&(p=n>>0)&&(170&p?ur(b,256,y,w):hr(b,256,y,w)),p=f,b=d,255&(n>>=8)&&(170&n?ur(v,320,p,b):hr(v,320,p,b)),o<t.Ub-1&&(r(g[m].y,0,u,c+480,16),r(g[m].f,0,h,l+224,8),r(g[m].ea,0,f,d+224,8)),n=8*s*t.B,g=t.sa,m=t.ta+16*a+16*s*t.R,v=t.qa,p=t.ra+8*a+n,b=t.Ha,y=t.Ia+8*a+n,n=0;16>n;++n)r(g,m+n*t.R,u,c+32*n,16);for(n=0;8>n;++n)r(v,p+n*t.B,h,l+32*n,8),r(b,y+n*t.B,f,d+32*n,8)}}function Mn(t,r,i,a,o,s,u,c,h){var l=[0],f=[0],d=0,p=null!=h?h.kd:0,g=null!=h?h:new rn;if(null==t||12>i)return 7;g.data=t,g.w=r,g.ha=i,r=[r],i=[i],g.gb=[g.gb];t:{var m=r,b=i,y=g.gb;if(e(null!=t),e(null!=b),e(null!=y),y[0]=0,12<=b[0]&&!n(t,m[0],"RIFF")){if(n(t,m[0]+8,"WEBP")){y=3;break t}var w=j(t,m[0]+4);if(12>w||4294967286<w){y=3;break t}if(p&&w>b[0]-8){y=7;break t}y[0]=w,m[0]+=12,b[0]-=12}y=0}if(0!=y)return y;for(w=0<g.gb[0],i=i[0];;){t:{var L=t;b=r,y=i;var x=l,A=f,_=m=[0];if((k=d=[d])[0]=0,8>y[0])y=7;else{if(!n(L,b[0],"VP8X")){if(10!=j(L,b[0]+4)){y=3;break t}if(18>y[0]){y=7;break t}var S=j(L,b[0]+8),P=1+C(L,b[0]+12);if(2147483648<=P*(L=1+C(L,b[0]+15))){y=3;break t}null!=_&&(_[0]=S),null!=x&&(x[0]=P),null!=A&&(A[0]=L),b[0]+=18,y[0]-=18,k[0]=1}y=0}}if(d=d[0],m=m[0],0!=y)return y;if(b=!!(2&m),!w&&d)return 3;if(null!=s&&(s[0]=!!(16&m)),null!=u&&(u[0]=b),null!=c&&(c[0]=0),u=l[0],m=f[0],d&&b&&null==h){y=0;break}if(4>i){y=7;break}if(w&&d||!w&&!d&&!n(t,r[0],"ALPH")){i=[i],g.na=[g.na],g.P=[g.P],g.Sa=[g.Sa];t:{S=t,y=r,w=i;var k=g.gb;x=g.na,A=g.P,_=g.Sa;P=22,e(null!=S),e(null!=w),L=y[0];var F=w[0];for(e(null!=x),e(null!=_),x[0]=null,A[0]=null,_[0]=0;;){if(y[0]=L,w[0]=F,8>F){y=7;break t}var I=j(S,L+4);if(4294967286<I){y=3;break t}var B=8+I+1&-2;if(P+=B,0<k&&P>k){y=3;break t}if(!n(S,L,"VP8 ")||!n(S,L,"VP8L")){y=0;break t}if(F[0]<B){y=7;break t}n(S,L,"ALPH")||(x[0]=S,A[0]=L+8,_[0]=I),L+=B,F-=B}}if(i=i[0],g.na=g.na[0],g.P=g.P[0],g.Sa=g.Sa[0],0!=y)break}i=[i],g.Ja=[g.Ja],g.xa=[g.xa];t:if(k=t,y=r,w=i,x=g.gb[0],A=g.Ja,_=g.xa,S=y[0],L=!n(k,S,"VP8 "),P=!n(k,S,"VP8L"),e(null!=k),e(null!=w),e(null!=A),e(null!=_),8>w[0])y=7;else{if(L||P){if(k=j(k,S+4),12<=x&&k>x-12){y=3;break t}if(p&&k>w[0]-8){y=7;break t}A[0]=k,y[0]+=8,w[0]-=8,_[0]=P}else _[0]=5<=w[0]&&47==k[S+0]&&!(k[S+4]>>5),A[0]=w[0];y=0}if(i=i[0],g.Ja=g.Ja[0],g.xa=g.xa[0],r=r[0],0!=y)break;if(4294967286<g.Ja)return 3;if(null==c||b||(c[0]=g.xa?2:1),u=[u],m=[m],g.xa){if(5>i){y=7;break}c=u,p=m,b=s,null==t||5>i?t=0:5<=i&&47==t[r+0]&&!(t[r+4]>>5)?(w=[0],k=[0],x=[0],v(A=new N,t,r,i),gt(A,w,k,x)?(null!=c&&(c[0]=w[0]),null!=p&&(p[0]=k[0]),null!=b&&(b[0]=x[0]),t=1):t=0):t=0}else{if(10>i){y=7;break}c=m,null==t||10>i||!Xt(t,r+3,i-3)?t=0:(p=t[r+0]|t[r+1]<<8|t[r+2]<<16,b=16383&(t[r+7]<<8|t[r+6]),t=16383&(t[r+9]<<8|t[r+8]),1&p||3<(p>>1&7)||!(p>>4&1)||p>>5>=g.Ja||!b||!t?t=0:(u&&(u[0]=b),c&&(c[0]=t),t=1))}if(!t)return 3;if(u=u[0],m=m[0],d&&(l[0]!=u||f[0]!=m))return 3;null!=h&&(h[0]=g,h.offset=r-h.w,e(4294967286>r-h.w),e(h.offset==h.ha-i));break}return 0==y||7==y&&d&&null==h?(null!=s&&(s[0]|=null!=g.na&&0<g.na.length),null!=a&&(a[0]=u),null!=o&&(o[0]=m),0):y}function En(t,e,n){var r=e.width,i=e.height,a=0,o=0,s=r,u=i;if(e.Da=null!=t&&0<t.Da,e.Da&&(s=t.cd,u=t.bd,a=t.v,o=t.j,11>n||(a&=-2,o&=-2),0>a||0>o||0>=s||0>=u||a+s>r||o+u>i))return 0;if(e.v=a,e.j=o,e.va=a+s,e.o=o+u,e.U=s,e.T=u,e.da=null!=t&&0<t.da,e.da){if(!E(s,u,n=[t.ib],a=[t.hb]))return 0;e.ib=n[0],e.hb=a[0]}return e.ob=null!=t&&t.ob,e.Kb=null==t||!t.Sd,e.da&&(e.ob=e.ib<3*r/4&&e.hb<3*i/4,e.Kb=0),1}function qn(t){if(null==t)return 2;if(11>t.S){var e=t.f.RGBA;e.fb+=(t.height-1)*e.A,e.A=-e.A}else e=t.f.kb,t=t.height,e.O+=(t-1)*e.fa,e.fa=-e.fa,e.N+=(t-1>>1)*e.Ab,e.Ab=-e.Ab,e.W+=(t-1>>1)*e.Db,e.Db=-e.Db,null!=e.F&&(e.J+=(t-1)*e.lb,e.lb=-e.lb);return 0}function Rn(t,e,n,r){if(null==r||0>=t||0>=e)return 2;if(null!=n){if(n.Da){var i=n.cd,o=n.bd,s=-2&n.v,u=-2&n.j;if(0>s||0>u||0>=i||0>=o||s+i>t||u+o>e)return 2;t=i,e=o}if(n.da){if(!E(t,e,i=[n.ib],o=[n.hb]))return 2;t=i[0],e=o[0]}}r.width=t,r.height=e;t:{var c=r.width,h=r.height;if(t=r.S,0>=c||0>=h||!(t>=Er&&13>t))t=2;else{if(0>=r.Rd&&null==r.sd){s=o=i=e=0;var l=(u=c*zi[t])*h;if(11>t||(o=(h+1)/2*(e=(c+1)/2),12==t&&(s=(i=c)*h)),null==(h=a(l+2*o+s))){t=1;break t}r.sd=h,11>t?((c=r.f.RGBA).eb=h,c.fb=0,c.A=u,c.size=l):((c=r.f.kb).y=h,c.O=0,c.fa=u,c.Fd=l,c.f=h,c.N=0+l,c.Ab=e,c.Cd=o,c.ea=h,c.W=0+l+o,c.Db=e,c.Ed=o,12==t&&(c.F=h,c.J=0+l+2*o),c.Tc=s,c.lb=i)}if(e=1,i=r.S,o=r.width,s=r.height,i>=Er&&13>i)if(11>i)t=r.f.RGBA,e&=(u=Math.abs(t.A))*(s-1)+o<=t.size,e&=u>=o*zi[i],e&=null!=t.eb;else{t=r.f.kb,u=(o+1)/2,l=(s+1)/2,c=Math.abs(t.fa);h=Math.abs(t.Ab);var f=Math.abs(t.Db),d=Math.abs(t.lb),p=d*(s-1)+o;e&=c*(s-1)+o<=t.Fd,e&=h*(l-1)+u<=t.Cd,e=(e&=f*(l-1)+u<=t.Ed)&c>=o&h>=u&f>=u,e&=null!=t.y,e&=null!=t.f,e&=null!=t.ea,12==i&&(e&=d>=o,e&=p<=t.Tc,e&=null!=t.F)}else e=0;t=e?0:2}}return 0!=t||null!=n&&n.fd&&(t=qn(r)),t}var Tn=64,Dn=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],Un=24,zn=32,Hn=8,Wn=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];T("Predictor0","PredictorAdd0"),t.Predictor0=function(){return 4278190080},t.Predictor1=function(t){return t},t.Predictor2=function(t,e,n){return e[n+0]},t.Predictor3=function(t,e,n){return e[n+1]},t.Predictor4=function(t,e,n){return e[n-1]},t.Predictor5=function(t,e,n){return U(U(t,e[n+1]),e[n+0])},t.Predictor6=function(t,e,n){return U(t,e[n-1])},t.Predictor7=function(t,e,n){return U(t,e[n+0])},t.Predictor8=function(t,e,n){return U(e[n-1],e[n+0])},t.Predictor9=function(t,e,n){return U(e[n+0],e[n+1])},t.Predictor10=function(t,e,n){return U(U(t,e[n-1]),U(e[n+0],e[n+1]))},t.Predictor11=function(t,e,n){var r=e[n+0];return 0>=W(r>>24&255,t>>24&255,(e=e[n-1])>>24&255)+W(r>>16&255,t>>16&255,e>>16&255)+W(r>>8&255,t>>8&255,e>>8&255)+W(255&r,255&t,255&e)?r:t},t.Predictor12=function(t,e,n){var r=e[n+0];return(z((t>>24&255)+(r>>24&255)-((e=e[n-1])>>24&255))<<24|z((t>>16&255)+(r>>16&255)-(e>>16&255))<<16|z((t>>8&255)+(r>>8&255)-(e>>8&255))<<8|z((255&t)+(255&r)-(255&e)))>>>0},t.Predictor13=function(t,e,n){var r=e[n-1];return(H((t=U(t,e[n+0]))>>24&255,r>>24&255)<<24|H(t>>16&255,r>>16&255)<<16|H(t>>8&255,r>>8&255)<<8|H(t>>0&255,r>>0&255))>>>0};var Vn=t.PredictorAdd0;t.PredictorAdd1=V,T("Predictor2","PredictorAdd2"),T("Predictor3","PredictorAdd3"),T("Predictor4","PredictorAdd4"),T("Predictor5","PredictorAdd5"),T("Predictor6","PredictorAdd6"),T("Predictor7","PredictorAdd7"),T("Predictor8","PredictorAdd8"),T("Predictor9","PredictorAdd9"),T("Predictor10","PredictorAdd10"),T("Predictor11","PredictorAdd11"),T("Predictor12","PredictorAdd12"),T("Predictor13","PredictorAdd13");var Gn=t.PredictorAdd2;X("ColorIndexInverseTransform","MapARGB","32b",(function(t){return t>>8&255}),(function(t){return t})),X("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",(function(t){return t}),(function(t){return t>>8&255}));var Yn,Jn=t.ColorIndexInverseTransform,Xn=t.MapARGB,Kn=t.VP8LColorIndexInverseTransformAlpha,Zn=t.MapAlpha,$n=t.VP8LPredictorsAdd=[];$n.length=16,(t.VP8LPredictors=[]).length=16,(t.VP8LPredictorsAdd_C=[]).length=16,(t.VP8LPredictors_C=[]).length=16;var Qn,tr,er,nr,rr,ir,ar,or,sr,ur,cr,hr,lr,fr,dr,pr,gr,mr,vr,br,yr,wr,Nr,Lr,xr,Ar,_r,Sr,Pr=a(511),kr=a(2041),Fr=a(225),Ir=a(767),Cr=0,jr=kr,Br=Fr,Or=Ir,Mr=Pr,Er=0,qr=1,Rr=2,Tr=3,Dr=4,Ur=5,zr=6,Hr=7,Wr=8,Vr=9,Gr=10,Yr=[2,3,7],Jr=[3,3,11],Xr=[280,256,256,256,40],Kr=[0,1,1,1,0],Zr=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],$r=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],Qr=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],ti=8,ei=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],ni=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],ri=null,ii=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],ai=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],oi=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],si=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],ui=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],ci=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],hi=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],li=[],fi=[],di=[],pi=1,gi=2,mi=[],vi=[];bn("UpsampleRgbLinePair",An,3),bn("UpsampleBgrLinePair",_n,3),bn("UpsampleRgbaLinePair",In,4),bn("UpsampleBgraLinePair",Fn,4),bn("UpsampleArgbLinePair",kn,4),bn("UpsampleRgba4444LinePair",Pn,2),bn("UpsampleRgb565LinePair",Sn,2);var bi=t.UpsampleRgbLinePair,yi=t.UpsampleBgrLinePair,wi=t.UpsampleRgbaLinePair,Ni=t.UpsampleBgraLinePair,Li=t.UpsampleArgbLinePair,xi=t.UpsampleRgba4444LinePair,Ai=t.UpsampleRgb565LinePair,_i=16,Si=1<<_i-1,Pi=-227,ki=482,Fi=6,Ii=(256<<Fi)-1,Ci=0,ji=a(256),Bi=a(256),Oi=a(256),Mi=a(256),Ei=a(ki-Pi),qi=a(ki-Pi);Cn("YuvToRgbRow",An,3),Cn("YuvToBgrRow",_n,3),Cn("YuvToRgbaRow",In,4),Cn("YuvToBgraRow",Fn,4),Cn("YuvToArgbRow",kn,4),Cn("YuvToRgba4444Row",Pn,2),Cn("YuvToRgb565Row",Sn,2);var Ri=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Ti=[0,2,8],Di=[8,7,6,4,4,2,2,2,1,1,1,1],Ui=1;this.WebPDecodeRGBA=function(t,n,r,i,a){var o=qr,s=new nn,u=new ot;s.ba=u,u.S=o,u.width=[u.width],u.height=[u.height];var c=u.width,h=u.height,l=new st;if(null==l||null==t)var f=2;else e(null!=l),f=Mn(t,n,r,l.width,l.height,l.Pd,l.Qd,l.format,null);if(0!=f?c=0:(null!=c&&(c[0]=l.width[0]),null!=h&&(h[0]=l.height[0]),c=1),c){u.width=u.width[0],u.height=u.height[0],null!=i&&(i[0]=u.width),null!=a&&(a[0]=u.height);t:{if(i=new Gt,(a=new rn).data=t,a.w=n,a.ha=r,a.kd=1,n=[0],e(null!=a),(0==(t=Mn(a.data,a.w,a.ha,null,null,null,n,null,a))||7==t)&&n[0]&&(t=4),0==(n=t)){if(e(null!=s),i.data=a.data,i.w=a.w+a.offset,i.ha=a.ha-a.offset,i.put=dt,i.ac=ft,i.bc=pt,i.ma=s,a.xa){if(null==(t=kt())){s=1;break t}if(function(t,n){var r=[0],i=[0],a=[0];e:for(;;){if(null==t)return 0;if(null==n)return t.a=2,0;if(t.l=n,t.a=0,v(t.m,n.data,n.w,n.ha),!gt(t.m,r,i,a)){t.a=3;break e}if(t.xb=gi,n.width=r[0],n.height=i[0],!Ft(r[0],i[0],1,t,null))break e;return 1}return e(0!=t.a),0}(t,i)){if(i=0==(n=Rn(i.width,i.height,s.Oa,s.ba))){e:{i=t;n:for(;;){if(null==i){i=0;break e}if(e(null!=i.s.yc),e(null!=i.s.Ya),e(0<i.s.Wb),e(null!=(r=i.l)),e(null!=(a=r.ma)),0!=i.xb){if(i.ca=a.ba,i.tb=a.tb,e(null!=i.ca),!En(a.Oa,r,Tr)){i.a=2;break n}if(!It(i,r.width))break n;if(r.da)break n;if((r.da||rt(i.ca.S))&&vn(),11>i.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),null!=i.ca.f.kb.F&&vn()),i.Pb&&0<i.s.ua&&null==i.s.vb.X&&!B(i.s.vb,i.s.Wa.Xa)){i.a=1;break n}i.xb=0}if(!St(i,i.V,i.Ba,i.c,i.i,r.o,Lt))break n;a.Dc=i.Ma,i=1;break e}e(0!=i.a),i=0}i=!i}i&&(n=t.a)}else n=t.a}else{if(null==(t=new Yt)){s=1;break t}if(t.Fa=a.na,t.P=a.P,t.qc=a.Sa,Kt(t,i)){if(0==(n=Rn(i.width,i.height,s.Oa,s.ba))){if(t.Aa=0,r=s.Oa,e(null!=(a=t)),null!=r){if(0<(c=0>(c=r.Md)?0:100<c?255:255*c/100)){for(h=l=0;4>h;++h)12>(f=a.pb[h]).lc&&(f.ia=c*Di[0>f.lc?0:f.lc]>>3),l|=f.ia;l&&(alert("todo:VP8InitRandom"),a.ia=1)}a.Ga=r.Id,100<a.Ga?a.Ga=100:0>a.Ga&&(a.Ga=0)}Qt(t,i)||(n=t.a)}}else n=t.a}0==n&&null!=s.Oa&&s.Oa.fd&&(n=qn(s.ba))}s=n}o=0!=s?null:11>o?u.f.RGBA.eb:u.f.kb.y}else o=null;return o};var zi=[3,4,3,4,4,2,2,4,4,4,2,1,1]});var l=[0],f=[0],d=[],p=new Et,g=t,m=function(t,e){var n={},r=0,i=!1,a=0,o=0;if(n.frames=[],!
/** @license
   * Copyright (c) 2017 Dominik Homberger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://webpjs.appspot.com
WebPRiffParser dominikhlbg@gmail.com
*/
function(t,e,n,r){for(var i=0;i<r;i++)if(t[e+i]!=n.charCodeAt(i))return!0;return!1}(t,e,"RIFF",4)){var s,l;h(t,e+=4);for(e+=8;e<t.length;){var f=u(t,e),d=h(t,e+=4);e+=4;var p=d+(1&d);switch(f){case"VP8 ":case"VP8L":void 0===n.frames[r]&&(n.frames[r]={});(v=n.frames[r]).src_off=i?o:e-8,v.src_size=a+d+8,r++,i&&(i=!1,a=0,o=0);break;case"VP8X":(v=n.header={}).feature_flags=t[e];var g=e+4;v.canvas_width=1+c(t,g);g+=3;v.canvas_height=1+c(t,g);g+=3;break;case"ALPH":i=!0,a=p+8,o=e-8;break;case"ANIM":(v=n.header).bgcolor=h(t,e);g=e+4;v.loop_count=(s=t)[(l=g)+0]<<0|s[l+1]<<8;g+=2;break;case"ANMF":var m,v;(v=n.frames[r]={}).offset_x=2*c(t,e),e+=3,v.offset_y=2*c(t,e),e+=3,v.width=1+c(t,e),e+=3,v.height=1+c(t,e),e+=3,v.duration=c(t,e),e+=3,m=t[e++],v.dispose=1&m,v.blend=m>>1&1}"ANMF"!=f&&(e+=p)}return n}}(g,0);m.response=g,m.rgbaoutput=!0,m.dataurl=!1;var v=m.header?m.header:null,b=m.frames?m.frames:null;if(v){v.loop_counter=v.loop_count,l=[v.canvas_height],f=[v.canvas_width];for(var y=0;y<b.length&&0!=b[y].blend;y++);}var w=b[0],N=p.WebPDecodeRGBA(g,w.src_off,w.src_size,f,l);w.rgba=N,w.imgwidth=f[0],w.imgheight=l[0];for(var L=0;L<f[0]*l[0]*4;L++)d[L]=N[L];return this.width=f,this.height=l,this.data=d,this}
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
!function(t){var e=function(){return!0},n=function(e,n,a,h){var l=5,f=s;switch(h){case t.image_compression.FAST:l=3,f=o;break;case t.image_compression.MEDIUM:l=6,f=u;break;case t.image_compression.SLOW:l=9,f=c}e=i(e,n,a,f);var d=new Uint8Array(r(l)),p=g.API.adler32cs.fromBuffer(e.buffer),m=new xt(l),v=m.append(e),b=m.flush(),y=d.length+v.length+b.length,w=new Uint8Array(y+4);return w.set(d),w.set(v,d.length),w.set(b,d.length+v.length),w[y++]=p>>>24&255,w[y++]=p>>>16&255,w[y++]=p>>>8&255,w[y++]=255&p,t.__addimage__.arrayBufferToBinaryString(w)},r=function(t){var e=30720;return e|=Math.min(3,(t-1&255)>>1)<<6,e|=0,[120,255&(e+=31-e%31)]},i=function(t,e,n,r){for(var i,a,o,s=t.length/e,u=new Uint8Array(t.length+s),c=l(),h=0;h<s;h+=1){if(o=h*e,i=t.subarray(o,o+e),r)u.set(r(i,n,a),o+h);else{for(var d,p=c.length,g=[];d<p;d+=1)g[d]=c[d](i,n,a);var m=f(g.concat());u.set(g[m],o+h)}a=i}return u},a=function(t){var e=Array.apply([],t);return e.unshift(0),e},o=function(t,e){var n,r=[],i=t.length;r[0]=1;for(var a=0;a<i;a+=1)n=t[a-e]||0,r[a+1]=t[a]-n+256&255;return r},s=function(t,e,n){var r,i=[],a=t.length;i[0]=2;for(var o=0;o<a;o+=1)r=n&&n[o]||0,i[o+1]=t[o]-r+256&255;return i},u=function(t,e,n){var r,i,a=[],o=t.length;a[0]=3;for(var s=0;s<o;s+=1)r=t[s-e]||0,i=n&&n[s]||0,a[s+1]=t[s]+256-(r+i>>>1)&255;return a},c=function(t,e,n){var r,i,a,o,s=[],u=t.length;s[0]=4;for(var c=0;c<u;c+=1)r=t[c-e]||0,i=n&&n[c]||0,a=n&&n[c-e]||0,o=h(r,i,a),s[c+1]=t[c]-o+256&255;return s},h=function(t,e,n){if(t===e&&e===n)return t;var r=Math.abs(e-n),i=Math.abs(t-n),a=Math.abs(t+e-n-n);return r<=i&&r<=a?t:i<=a?e:n},l=function(){return[a,o,s,u,c]},f=function(t){var e=t.map((function(t){return t.reduce((function(t,e){return t+Math.abs(e)}),0)}));return e.indexOf(Math.min.apply(null,e))};t.processPNG=function(r,i,a,o){var s,u,c,h,l,f,d,p,g,m,v,b,y,w,N,L=this.decode.FLATE_DECODE,x="";if(this.__addimage__.isArrayBuffer(r)&&(r=new Uint8Array(r)),this.__addimage__.isArrayBufferView(r)){if(r=(c=new Ct(r)).imgData,u=c.bits,s=c.colorSpace,l=c.colors,-1!==[4,6].indexOf(c.colorType)){if(8===c.bits){g=(p=32==c.pixelBitlength?new Uint32Array(c.decodePixels().buffer):16==c.pixelBitlength?new Uint16Array(c.decodePixels().buffer):new Uint8Array(c.decodePixels().buffer)).length,v=new Uint8Array(g*c.colors),m=new Uint8Array(g);var A,_=c.pixelBitlength-c.bits;for(w=0,N=0;w<g;w++){for(y=p[w],A=0;A<_;)v[N++]=y>>>A&255,A+=c.bits;m[w]=y>>>A&255}}if(16===c.bits){g=(p=new Uint32Array(c.decodePixels().buffer)).length,v=new Uint8Array(g*(32/c.pixelBitlength)*c.colors),m=new Uint8Array(g*(32/c.pixelBitlength)),b=c.colors>1,w=0,N=0;for(var S=0;w<g;)y=p[w++],v[N++]=y>>>0&255,b&&(v[N++]=y>>>16&255,y=p[w++],v[N++]=y>>>0&255),m[S++]=y>>>16&255;u=8}o!==t.image_compression.NONE&&e()?(r=n(v,c.width*c.colors,c.colors,o),d=n(m,c.width,1,o)):(r=v,d=m,L=void 0)}if(3===c.colorType&&(s=this.color_spaces.INDEXED,f=c.palette,c.transparency.indexed)){var P=c.transparency.indexed,k=0;for(w=0,g=P.length;w<g;++w)k+=P[w];if((k/=255)===g-1&&-1!==P.indexOf(0))h=[P.indexOf(0)];else if(k!==g){for(p=c.decodePixels(),m=new Uint8Array(p.length),w=0,g=p.length;w<g;w++)m[w]=P[p[w]];d=n(m,c.width,1)}}var F=function(e){var n;switch(e){case t.image_compression.FAST:n=11;break;case t.image_compression.MEDIUM:n=13;break;case t.image_compression.SLOW:n=14;break;default:n=12}return n}(o);return L===this.decode.FLATE_DECODE&&(x="/Predictor "+F+" "),x+="/Colors "+l+" /BitsPerComponent "+u+" /Columns "+c.width,(this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r))&&(r=this.__addimage__.arrayBufferToBinaryString(r)),(d&&this.__addimage__.isArrayBuffer(d)||this.__addimage__.isArrayBufferView(d))&&(d=this.__addimage__.arrayBufferToBinaryString(d)),{alias:a,data:r,index:i,filter:L,decodeParameters:x,transparency:h,palette:f,sMask:d,predictor:F,width:c.width,height:c.height,bitsPerComponent:u,colorSpace:s}}}}(g.API),function(t){t.processGIF89A=function(e,n,r,i){var a=new jt(e),o=a.width,s=a.height,u=[];a.decodeAndBlitFrameRGBA(0,u);var c={data:u,width:o,height:s},h=new Ot(100).encode(c,100);return t.processJPEG.call(this,h,n,r,i)},t.processGIF87A=t.processGIF89A}(g.API),Mt.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=0===this.colors?1<<this.bitPP:this.colors;this.palette=new Array(t);for(var e=0;e<t;e++){var n=this.datav.getUint8(this.pos++,!0),r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0);this.palette[e]={red:i,green:r,blue:n,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},Mt.prototype.parseBGR=function(){this.pos=this.offset;try{var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new Uint8Array(e),this[t]()}catch(t){n.log("bit decode error:"+t)}},Mt.prototype.bit1=function(){var t,e=Math.ceil(this.width/8),n=e%4;for(t=this.height-1;t>=0;t--){for(var r=this.bottom_up?t:this.height-1-t,i=0;i<e;i++)for(var a=this.datav.getUint8(this.pos++,!0),o=r*this.width*4+8*i*4,s=0;s<8&&8*i+s<this.width;s++){var u=this.palette[a>>7-s&1];this.data[o+4*s]=u.blue,this.data[o+4*s+1]=u.green,this.data[o+4*s+2]=u.red,this.data[o+4*s+3]=255}0!==n&&(this.pos+=4-n)}},Mt.prototype.bit4=function(){for(var t=Math.ceil(this.width/2),e=t%4,n=this.height-1;n>=0;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<t;i++){var a=this.datav.getUint8(this.pos++,!0),o=r*this.width*4+2*i*4,s=a>>4,u=15&a,c=this.palette[s];if(this.data[o]=c.blue,this.data[o+1]=c.green,this.data[o+2]=c.red,this.data[o+3]=255,2*i+1>=this.width)break;c=this.palette[u],this.data[o+4]=c.blue,this.data[o+4+1]=c.green,this.data[o+4+2]=c.red,this.data[o+4+3]=255}0!==e&&(this.pos+=4-e)}},Mt.prototype.bit8=function(){for(var t=this.width%4,e=this.height-1;e>=0;e--){for(var n=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var i=this.datav.getUint8(this.pos++,!0),a=n*this.width*4+4*r;if(i<this.palette.length){var o=this.palette[i];this.data[a]=o.red,this.data[a+1]=o.green,this.data[a+2]=o.blue,this.data[a+3]=255}else this.data[a]=255,this.data[a+1]=255,this.data[a+2]=255,this.data[a+3]=255}0!==t&&(this.pos+=4-t)}},Mt.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),n=this.height-1;n>=0;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<this.width;i++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var o=(a&e)/e*255|0,s=(a>>5&e)/e*255|0,u=(a>>10&e)/e*255|0,c=a>>15?255:0,h=r*this.width*4+4*i;this.data[h]=u,this.data[h+1]=s,this.data[h+2]=o,this.data[h+3]=c}this.pos+=t}},Mt.prototype.bit16=function(){for(var t=this.width%3,e=parseInt("11111",2),n=parseInt("111111",2),r=this.height-1;r>=0;r--){for(var i=this.bottom_up?r:this.height-1-r,a=0;a<this.width;a++){var o=this.datav.getUint16(this.pos,!0);this.pos+=2;var s=(o&e)/e*255|0,u=(o>>5&n)/n*255|0,c=(o>>11)/e*255|0,h=i*this.width*4+4*a;this.data[h]=c,this.data[h+1]=u,this.data[h+2]=s,this.data[h+3]=255}this.pos+=t}},Mt.prototype.bit24=function(){for(var t=this.height-1;t>=0;t--){for(var e=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),o=e*this.width*4+4*n;this.data[o]=a,this.data[o+1]=i,this.data[o+2]=r,this.data[o+3]=255}this.pos+=this.width%4}},Mt.prototype.bit32=function(){for(var t=this.height-1;t>=0;t--)for(var e=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),s=e*this.width*4+4*n;this.data[s]=a,this.data[s+1]=i,this.data[s+2]=r,this.data[s+3]=o}},Mt.prototype.getData=function(){return this.data},
/**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.processBMP=function(e,n,r,i){var a=new Mt(e,!1),o=a.width,s=a.height,u={data:a.getData(),width:o,height:s},c=new Ot(100).encode(u,100);return t.processJPEG.call(this,c,n,r,i)}}(g.API),Et.prototype.getData=function(){return this.data},
/**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.processWEBP=function(e,n,r,i){var a=new Et(e,!1),o=a.width,s=a.height,u={data:a.getData(),width:o,height:s},c=new Ot(100).encode(u,100);return t.processJPEG.call(this,c,n,r,i)}}(g.API),g.API.setLanguage=function(t){return void 0===this.internal.languageSettings&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),void 0!=={af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"FYRO Macedonian",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[t]&&(this.internal.languageSettings.languageCode=t,!1===this.internal.languageSettings.isSubscribed&&(this.internal.events.subscribe("putCatalog",(function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")})),this.internal.languageSettings.isSubscribed=!0)),this},
/** @license
 * MIT license.
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Diego Casorran, https://github.com/diegocr
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
At=g.API,_t=At.getCharWidthsArray=function(t,e){var n,r,i=(e=e||{}).font||this.internal.getFont(),a=e.fontSize||this.internal.getFontSize(),o=e.charSpace||this.internal.getCharSpace(),s=e.widths?e.widths:i.metadata.Unicode.widths,u=s.fof?s.fof:1,c=e.kerning?e.kerning:i.metadata.Unicode.kerning,h=c.fof?c.fof:1,l=!1!==e.doKerning,f=0,d=t.length,p=0,g=s[0]||u,m=[];for(n=0;n<d;n++)r=t.charCodeAt(n),"function"==typeof i.metadata.widthOfString?m.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(r))+o*(1e3/a)||0)/1e3):(f=l&&"object"==typeof c[r]&&!isNaN(parseInt(c[r][p],10))?c[r][p]/h:0,m.push((s[r]||g)/u+f)),p=r;return m},St=At.getStringUnitWidth=function(t,e){var n=(e=e||{}).fontSize||this.internal.getFontSize(),r=e.font||this.internal.getFont(),i=e.charSpace||this.internal.getCharSpace();return At.processArabic&&(t=At.processArabic(t)),"function"==typeof r.metadata.widthOfString?r.metadata.widthOfString(t,n,i)/n:_t.apply(this,arguments).reduce((function(t,e){return t+e}),0)},Pt=function(t,e,n,r){for(var i=[],a=0,o=t.length,s=0;a!==o&&s+e[a]<n;)s+=e[a],a++;i.push(t.slice(0,a));var u=a;for(s=0;a!==o;)s+e[a]>r&&(i.push(t.slice(u,a)),s=0,u=a),s+=e[a],a++;return u!==a&&i.push(t.slice(u,a)),i},kt=function(t,e,n){n||(n={});var r,i,a,o,s,u,c,h=[],l=[h],f=n.textIndent||0,d=0,p=0,g=t.split(" "),m=_t.apply(this,[" ",n])[0];if(u=-1===n.lineIndent?g[0].length+2:n.lineIndent||0){var v=Array(u).join(" "),b=[];g.map((function(t){(t=t.split(/\s*\n/)).length>1?b=b.concat(t.map((function(t,e){return(e&&t.length?"\n":"")+t}))):b.push(t[0])})),g=b,u=St.apply(this,[v,n])}for(a=0,o=g.length;a<o;a++){var y=0;if(r=g[a],u&&"\n"==r[0]&&(r=r.substr(1),y=1),f+d+(p=(i=_t.apply(this,[r,n])).reduce((function(t,e){return t+e}),0))>e||y){if(p>e){for(s=Pt.apply(this,[r,i,e-(f+d),e]),h.push(s.shift()),h=[s.pop()];s.length;)l.push([s.shift()]);p=i.slice(r.length-(h[0]?h[0].length:0)).reduce((function(t,e){return t+e}),0)}else h=[r];l.push(h),f=p+u,d=m}else h.push(r),f+=d+p,d=m}return c=u?function(t,e){return(e?v:"")+t.join(" ")}:function(t){return t.join(" ")},l.map(c)},At.splitTextToSize=function(t,e,n){var r,i=(n=n||{}).fontSize||this.internal.getFontSize(),a=function(t){if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var e=this.internal.getFont(t.fontName,t.fontStyle);return e.metadata.Unicode?{widths:e.metadata.Unicode.widths||{0:1},kerning:e.metadata.Unicode.kerning||{}}:{font:e.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}.call(this,n);r=Array.isArray(t)?t:String(t).split(/\r?\n/);var o=1*this.internal.scaleFactor*e/i;a.textIndent=n.textIndent?1*n.textIndent*this.internal.scaleFactor/i:0,a.lineIndent=n.lineIndent;var s,u,c=[];for(s=0,u=r.length;s<u;s++)c=c.concat(kt.apply(this,[r[s],o,a]));return c},
/** @license
 jsPDF standard_fonts_metrics plugin
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 * MIT license.
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(t){t.__fontmetrics__=t.__fontmetrics__||{};for(var e="klmnopqrstuvwxyz",n={},r={},i=0;i<e.length;i++)n[e[i]]="0123456789abcdef"[i],r["0123456789abcdef"[i]]=e[i];var a=function(t){return"0x"+parseInt(t,10).toString(16)},o=t.__fontmetrics__.compress=function(t){var e,n,i,s,u=["{"];for(var c in t){if(e=t[c],isNaN(parseInt(c,10))?n="'"+c+"'":(c=parseInt(c,10),n=(n=a(c).slice(2)).slice(0,-1)+r[n.slice(-1)]),"number"==typeof e)e<0?(i=a(e).slice(3),s="-"):(i=a(e).slice(2),s=""),i=s+i.slice(0,-1)+r[i.slice(-1)];else{if("object"!=typeof e)throw new Error("Don't know what to do with value type "+typeof e+".");i=o(e)}u.push(n+i)}return u.push("}"),u.join("")},s=t.__fontmetrics__.uncompress=function(t){if("string"!=typeof t)throw new Error("Invalid argument passed to uncompress.");for(var e,r,i,a,o={},s=1,u=o,c=[],h="",l="",f=t.length-1,d=1;d<f;d+=1)"'"==(a=t[d])?e?(i=e.join(""),e=void 0):e=[]:e?e.push(a):"{"==a?(c.push([u,i]),u={},i=void 0):"}"==a?((r=c.pop())[0][r[1]]=u,i=void 0,u=r[0]):"-"==a?s=-1:void 0===i?n.hasOwnProperty(a)?(h+=n[a],i=parseInt(h,16)*s,s=1,h=""):h+=a:n.hasOwnProperty(a)?(l+=n[a],u[i]=parseInt(l,16)*s,s=1,i=void 0,l=""):l+=a;return o},u={codePages:["WinAnsiEncoding"],WinAnsiEncoding:s("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},c={Unicode:{Courier:u,"Courier-Bold":u,"Courier-BoldOblique":u,"Courier-Oblique":u,Helvetica:u,"Helvetica-Bold":u,"Helvetica-BoldOblique":u,"Helvetica-Oblique":u,"Times-Roman":u,"Times-Bold":u,"Times-BoldItalic":u,"Times-Italic":u}},h={Unicode:{"Courier-Oblique":s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":s("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":s("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:s("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:s("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":s("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":s("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};t.events.push(["addFont",function(t){var e=t.font,n=h.Unicode[e.postScriptName];n&&(e.metadata.Unicode={},e.metadata.Unicode.widths=n.widths,e.metadata.Unicode.kerning=n.kerning);var r=c.Unicode[e.postScriptName];r&&(e.metadata.Unicode.encoding=r,e.encoding=r.codePages[0])}])}(g.API),
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(t){for(var e=t.length,n=new Uint8Array(e),r=0;r<e;r++)n[r]=t.charCodeAt(r);return n};t.API.events.push(["addFont",function(n){var r=void 0,i=n.font,a=n.instance;if(!i.isStandardFont){if(void 0===a)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");if("string"!=typeof(r=!1===a.existsFileInVFS(i.postScriptName)?a.loadFile(i.postScriptName):a.getFileFromVFS(i.postScriptName)))throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");!function(n,r){r=/^\x00\x01\x00\x00/.test(r)?e(r):e(o(r)),n.metadata=t.API.TTFFont.open(r),n.metadata.Unicode=n.metadata.Unicode||{encoding:{},kerning:{},widths:[]},n.metadata.glyIdsUsed=[0]}(i,r)}}])}(g),
/** @license
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(e){function r(){return(t.canvg?Promise.resolve(t.canvg):__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 518))).catch((function(t){return Promise.reject(new Error("Could not load dompurify: "+t))})).then((function(t){return t.default?t.default:t}))}g.API.addSvgAsImage=function(t,e,i,a,o,s,u,c){if(isNaN(e)||isNaN(i))throw n.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(a)||isNaN(o))throw n.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var h=document.createElement("canvas");h.width=a,h.height=o;var l=h.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,h.width,h.height);var f={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},d=this;return r().then((function(e){return e.Canvg.fromString(l,t,f)}),(function(){return Promise.reject(new Error("Could not load canvg."))})).then((function(t){return t.render(f)})).then((function(){d.addImage(h.toDataURL("image/jpeg",1),e,i,a,o,u,c)}))}}(),g.API.putTotalPages=function(t){var e,n=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(e=new RegExp(t,"g"),n=this.internal.getNumberOfPages()):(e=new RegExp(this.pdfEscape16(t,this.internal.getFont()),"g"),n=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var r=1;r<=this.internal.getNumberOfPages();r++)for(var i=0;i<this.internal.pages[r].length;i++)this.internal.pages[r][i]=this.internal.pages[r][i].replace(e,n);return this},g.API.viewerPreferences=function(t,e){var n;t=t||{},e=e||!1;var r,i,a,o={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},s=Object.keys(o),u=[],c=0,h=0,l=0;function f(t,e){var n,r=!1;for(n=0;n<t.length;n+=1)t[n]===e&&(r=!0);return r}if(void 0===this.internal.viewerpreferences&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(o)),this.internal.viewerpreferences.isSubscribed=!1),n=this.internal.viewerpreferences.configuration,"reset"===t||!0===e){var d=s.length;for(l=0;l<d;l+=1)n[s[l]].value=n[s[l]].defaultValue,n[s[l]].explicitSet=!1}if("object"==typeof t)for(i in t)if(a=t[i],f(s,i)&&void 0!==a){if("boolean"===n[i].type&&"boolean"==typeof a)n[i].value=a;else if("name"===n[i].type&&f(n[i].valueSet,a))n[i].value=a;else if("integer"===n[i].type&&Number.isInteger(a))n[i].value=a;else if("array"===n[i].type){for(c=0;c<a.length;c+=1)if(r=!0,1===a[c].length&&"number"==typeof a[c][0])u.push(String(a[c]-1));else if(a[c].length>1){for(h=0;h<a[c].length;h+=1)"number"!=typeof a[c][h]&&(r=!1);!0===r&&u.push([a[c][0]-1,a[c][1]-1].join(" "))}n[i].value="["+u.join(" ")+"]"}else n[i].value=n[i].defaultValue;n[i].explicitSet=!0}return!1===this.internal.viewerpreferences.isSubscribed&&(this.internal.events.subscribe("putCatalog",(function(){var t,e=[];for(t in n)!0===n[t].explicitSet&&("name"===n[t].type?e.push("/"+t+" /"+n[t].value):e.push("/"+t+" "+n[t].value));0!==e.length&&this.internal.write("/ViewerPreferences\n<<\n"+e.join("\n")+"\n>>")})),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=n,this},
/** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(t){var e=function(){var t='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',e=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),n=unescape(encodeURIComponent(t)),r=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),i=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),a=unescape(encodeURIComponent("</x:xmpmeta>")),o=n.length+r.length+i.length+e.length+a.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+o+" >>"),this.internal.write("stream"),this.internal.write(e+n+r+i+a),this.internal.write("endstream"),this.internal.write("endobj")},n=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};t.addMetadata=function(t,r){return void 0===this.internal.__metadata__&&(this.internal.__metadata__={metadata:t,namespaceuri:r||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",n),this.internal.events.subscribe("postPutResources",e)),this}}(g.API),function(t){var e=t.API,n=e.pdfEscape16=function(t,e){for(var n,r=e.metadata.Unicode.widths,i=["","0","00","000","0000"],a=[""],o=0,s=t.length;o<s;++o){if(n=e.metadata.characterToGlyph(t.charCodeAt(o)),e.metadata.glyIdsUsed.push(n),e.metadata.toUnicode[n]=t.charCodeAt(o),-1==r.indexOf(n)&&(r.push(n),r.push([parseInt(e.metadata.widthOfGlyph(n),10)])),"0"==n)return a.join("");n=n.toString(16),a.push(i[4-n.length],n)}return a.join("")},r=function(t){var e,n,r,i,a,o,s;for(a="/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",r=[],o=0,s=(n=Object.keys(t).sort((function(t,e){return t-e}))).length;o<s;o++)e=n[o],r.length>=100&&(a+="\n"+r.length+" beginbfchar\n"+r.join("\n")+"\nendbfchar",r=[]),void 0!==t[e]&&null!==t[e]&&"function"==typeof t[e].toString&&(i=("0000"+t[e].toString(16)).slice(-4),e=("0000"+(+e).toString(16)).slice(-4),r.push("<"+e+"><"+i+">"));return r.length&&(a+="\n"+r.length+" beginbfchar\n"+r.join("\n")+"\nendbfchar\n"),a+="endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"};e.events.push(["putFont",function(e){!function(e){var n=e.font,i=e.out,a=e.newObject,o=e.putStream,s=e.pdfEscapeWithNeededParanthesis;if(n.metadata instanceof t.API.TTFFont&&"Identity-H"===n.encoding){for(var u=n.metadata.Unicode.widths,c=n.metadata.subset.encode(n.metadata.glyIdsUsed,1),h="",l=0;l<c.length;l++)h+=String.fromCharCode(c[l]);var f=a();o({data:h,addLength1:!0}),i("endobj");var d=a();o({data:r(n.metadata.toUnicode),addLength1:!0}),i("endobj");var p=a();i("<<"),i("/Type /FontDescriptor"),i("/FontName /"+s(n.fontName)),i("/FontFile2 "+f+" 0 R"),i("/FontBBox "+t.API.PDFObject.convert(n.metadata.bbox)),i("/Flags "+n.metadata.flags),i("/StemV "+n.metadata.stemV),i("/ItalicAngle "+n.metadata.italicAngle),i("/Ascent "+n.metadata.ascender),i("/Descent "+n.metadata.decender),i("/CapHeight "+n.metadata.capHeight),i(">>"),i("endobj");var g=a();i("<<"),i("/Type /Font"),i("/BaseFont /"+s(n.fontName)),i("/FontDescriptor "+p+" 0 R"),i("/W "+t.API.PDFObject.convert(u)),i("/CIDToGIDMap /Identity"),i("/DW 1000"),i("/Subtype /CIDFontType2"),i("/CIDSystemInfo"),i("<<"),i("/Supplement 0"),i("/Registry (Adobe)"),i("/Ordering ("+n.encoding+")"),i(">>"),i(">>"),i("endobj"),n.objectNumber=a(),i("<<"),i("/Type /Font"),i("/Subtype /Type0"),i("/ToUnicode "+d+" 0 R"),i("/BaseFont /"+s(n.fontName)),i("/Encoding /"+n.encoding),i("/DescendantFonts ["+g+" 0 R]"),i(">>"),i("endobj"),n.isAlreadyPutted=!0}}(e)}]);e.events.push(["putFont",function(e){!function(e){var n=e.font,i=e.out,a=e.newObject,o=e.putStream,s=e.pdfEscapeWithNeededParanthesis;if(n.metadata instanceof t.API.TTFFont&&"WinAnsiEncoding"===n.encoding){for(var u=n.metadata.rawData,c="",h=0;h<u.length;h++)c+=String.fromCharCode(u[h]);var l=a();o({data:c,addLength1:!0}),i("endobj");var f=a();o({data:r(n.metadata.toUnicode),addLength1:!0}),i("endobj");var d=a();i("<<"),i("/Descent "+n.metadata.decender),i("/CapHeight "+n.metadata.capHeight),i("/StemV "+n.metadata.stemV),i("/Type /FontDescriptor"),i("/FontFile2 "+l+" 0 R"),i("/Flags 96"),i("/FontBBox "+t.API.PDFObject.convert(n.metadata.bbox)),i("/FontName /"+s(n.fontName)),i("/ItalicAngle "+n.metadata.italicAngle),i("/Ascent "+n.metadata.ascender),i(">>"),i("endobj"),n.objectNumber=a();for(var p=0;p<n.metadata.hmtx.widths.length;p++)n.metadata.hmtx.widths[p]=parseInt(n.metadata.hmtx.widths[p]*(1e3/n.metadata.head.unitsPerEm));i("<</Subtype/TrueType/Type/Font/ToUnicode "+f+" 0 R/BaseFont/"+n.fontName+"/FontDescriptor "+d+" 0 R/Encoding/"+n.encoding+" /FirstChar 29 /LastChar 255 /Widths "+t.API.PDFObject.convert(n.metadata.hmtx.widths)+">>"),i("endobj"),n.isAlreadyPutted=!0}}(e)}]);var i=function(t){var e,r=t.text||"",i=t.x,a=t.y,o=t.options||{},s=t.mutex||{},u=s.pdfEscape,c=s.activeFontKey,h=s.fonts,l=c,f="",d=0,p="",g=h[l].encoding;if("Identity-H"!==h[l].encoding)return{text:r,x:i,y:a,options:o,mutex:s};for(p=r,l=c,Array.isArray(r)&&(p=r[0]),d=0;d<p.length;d+=1)h[l].metadata.hasOwnProperty("cmap")&&(e=h[l].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]),e||p[d].charCodeAt(0)<256&&h[l].metadata.hasOwnProperty("Unicode")?f+=p[d]:f+="";var m="";return parseInt(l.slice(1))<14||"WinAnsiEncoding"===g?m=u(f,l).split("").map((function(t){return t.charCodeAt(0).toString(16)})).join(""):"Identity-H"===g&&(m=n(f,h[l])),s.isHex=!0,{text:m,x:i,y:a,options:o,mutex:s}};e.events.push(["postProcessText",function(t){var e=t.text||"",n=[],r={text:e,x:t.x,y:t.y,options:t.options,mutex:t.mutex};if(Array.isArray(e)){var a=0;for(a=0;a<e.length;a+=1)Array.isArray(e[a])&&3===e[a].length?n.push([i(Object.assign({},r,{text:e[a][0]})).text,e[a][1],e[a][2]]):n.push(i(Object.assign({},r,{text:e[a]})).text);t.text=n}else t.text=i(Object.assign({},r,{text:e})).text}])}(g),
/**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(){return void 0===this.internal.vFS&&(this.internal.vFS={}),!0};t.existsFileInVFS=function(t){return e.call(this),void 0!==this.internal.vFS[t]},t.addFileToVFS=function(t,n){return e.call(this),this.internal.vFS[t]=n,this},t.getFileFromVFS=function(t){return e.call(this),void 0!==this.internal.vFS[t]?this.internal.vFS[t]:null}}(g.API),
/**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(t){t.__bidiEngine__=t.prototype.__bidiEngine__=function(t){var n,r,i,a,o,s,u,c=e,h=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],l=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],f={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},d={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},p=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],g=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),m=!1,v=0;this.__bidiEngine__={};var b=function(t){var e=t.charCodeAt(),n=e>>8,r=d[n];return void 0!==r?c[256*r+(255&e)]:252===n||253===n?"AL":g.test(n)?"L":8===n?"R":"N"},y=function(t){for(var e,n=0;n<t.length;n++){if("L"===(e=b(t.charAt(n))))return!1;if("R"===e)return!0}return!1},w=function(t,e,o,s){var u,c,h,l,f=e[s];switch(f){case"L":case"R":m=!1;break;case"N":case"AN":break;case"EN":m&&(f="AN");break;case"AL":m=!0,f="R";break;case"WS":f="N";break;case"CS":s<1||s+1>=e.length||"EN"!==(u=o[s-1])&&"AN"!==u||"EN"!==(c=e[s+1])&&"AN"!==c?f="N":m&&(c="AN"),f=c===u?c:"N";break;case"ES":f="EN"===(u=s>0?o[s-1]:"B")&&s+1<e.length&&"EN"===e[s+1]?"EN":"N";break;case"ET":if(s>0&&"EN"===o[s-1]){f="EN";break}if(m){f="N";break}for(h=s+1,l=e.length;h<l&&"ET"===e[h];)h++;f=h<l&&"EN"===e[h]?"EN":"N";break;case"NSM":if(i&&!a){for(l=e.length,h=s+1;h<l&&"NSM"===e[h];)h++;if(h<l){var d=t[s],p=d>=1425&&d<=2303||64286===d;if(u=e[h],p&&("R"===u||"AL"===u)){f="R";break}}}f=s<1||"B"===(u=e[s-1])?"N":o[s-1];break;case"B":m=!1,n=!0,f=v;break;case"S":r=!0,f="N";break;case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":m=!1;break;case"BN":f="N"}return f},N=function(t,e,n){var r=t.split("");return n&&L(r,n,{hiLevel:v}),r.reverse(),e&&e.reverse(),r.join("")},L=function(t,e,i){var a,o,s,u,c,d=-1,p=t.length,g=0,y=[],N=v?l:h,L=[];for(m=!1,n=!1,r=!1,o=0;o<p;o++)L[o]=b(t[o]);for(s=0;s<p;s++){if(c=g,y[s]=w(t,L,y,s),a=240&(g=N[c][f[y[s]]]),g&=15,e[s]=u=N[g][5],a>0)if(16===a){for(o=d;o<s;o++)e[o]=1;d=-1}else d=-1;if(N[g][6])-1===d&&(d=s);else if(d>-1){for(o=d;o<s;o++)e[o]=u;d=-1}"B"===L[s]&&(e[s]=0),i.hiLevel|=u}r&&function(t,e,n){for(var r=0;r<n;r++)if("S"===t[r]){e[r]=v;for(var i=r-1;i>=0&&"WS"===t[i];i--)e[i]=v}}(L,e,p)},x=function(t,e,r,i,a){if(!(a.hiLevel<t)){if(1===t&&1===v&&!n)return e.reverse(),void(r&&r.reverse());for(var o,s,u,c,h=e.length,l=0;l<h;){if(i[l]>=t){for(u=l+1;u<h&&i[u]>=t;)u++;for(c=l,s=u-1;c<s;c++,s--)o=e[c],e[c]=e[s],e[s]=o,r&&(o=r[c],r[c]=r[s],r[s]=o);l=u}l++}}},A=function(t,e,n){var r=t.split(""),i={hiLevel:v};return n||(n=[]),L(r,n,i),function(t,e,n){if(0!==n.hiLevel&&u)for(var r,i=0;i<t.length;i++)1===e[i]&&(r=p.indexOf(t[i]))>=0&&(t[i]=p[r+1])}(r,n,i),x(2,r,e,n,i),x(1,r,e,n,i),r.join("")};return this.__bidiEngine__.doBidiReorder=function(t,e,n){if(function(t,e){if(e)for(var n=0;n<t.length;n++)e[n]=n;void 0===a&&(a=y(t)),void 0===s&&(s=y(t))}(t,e),i||!o||s)if(i&&o&&a^s)v=a?1:0,t=N(t,e,n);else if(!i&&o&&s)v=a?1:0,t=A(t,e,n),t=N(t,e);else if(!i||a||o||s){if(i&&!o&&a^s)t=N(t,e),a?(v=0,t=A(t,e,n)):(v=1,t=A(t,e,n),t=N(t,e));else if(i&&a&&!o&&s)v=1,t=A(t,e,n),t=N(t,e);else if(!i&&!o&&a^s){var r=u;a?(v=1,t=A(t,e,n),v=0,u=!1,t=A(t,e,n),u=r):(v=0,t=A(t,e,n),t=N(t,e),v=1,u=!1,t=A(t,e,n),u=r,t=N(t,e))}}else v=0,t=A(t,e,n);else v=a?1:0,t=A(t,e,n);return t},this.__bidiEngine__.setOptions=function(t){t&&(i=t.isInputVisual,o=t.isOutputVisual,a=t.isInputRtl,s=t.isOutputRtl,u=t.isSymmetricSwapping)},this.__bidiEngine__.setOptions(t),this.__bidiEngine__};var e=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],n=new t.__bidiEngine__({isInputVisual:!0});t.API.events.push(["postProcessText",function(t){var e=t.text,r=(t.x,t.y,t.options||{}),i=(t.mutex,r.lang,[]);if(r.isInputVisual="boolean"!=typeof r.isInputVisual||r.isInputVisual,n.setOptions(r),"[object Array]"===Object.prototype.toString.call(e)){var a=0;for(i=[],a=0;a<e.length;a+=1)"[object Array]"===Object.prototype.toString.call(e[a])?i.push([n.doBidiReorder(e[a][0]),e[a][1],e[a][2]]):i.push([n.doBidiReorder(e[a])]);t.text=i}else t.text=n.doBidiReorder(e);n.setOptions({isInputVisual:!0})}])}(g),g.API.TTFFont=function(){function t(t){var e;if(this.rawData=t,e=this.contents=new Rt(t),this.contents.pos=4,"ttcf"===e.readString(4))throw new Error("TTCF not supported.");e.pos=0,this.parse(),this.subset=new re(this),this.registerTTF()}return t.open=function(e){return new t(e)},t.prototype.parse=function(){return this.directory=new Tt(this.contents),this.head=new zt(this),this.name=new Xt(this),this.cmap=new Wt(this),this.toUnicode={},this.hhea=new Vt(this),this.maxp=new Kt(this),this.hmtx=new Zt(this),this.post=new Yt(this),this.os2=new Gt(this),this.loca=new ne(this),this.glyf=new Qt(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},t.prototype.registerTTF=function(){var t,e,n,r,i;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=function(){var e,n,r,i;for(i=[],e=0,n=(r=this.bbox).length;e<n;e++)t=r[e],i.push(Math.round(t*this.scaleFactor));return i}.call(this),this.stemV=0,this.post.exists?(n=255&(r=this.post.italic_angle),0!=(32768&(e=r>>16))&&(e=-(1+(65535^e))),this.italicAngle=+(e+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=1===(i=this.familyClass)||2===i||3===i||4===i||5===i||7===i,this.isScript=10===this.familyClass,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),0!==this.italicAngle&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},t.prototype.characterToGlyph=function(t){var e;return(null!=(e=this.cmap.unicode)?e.codeMap[t]:void 0)||0},t.prototype.widthOfGlyph=function(t){var e;return e=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*e},t.prototype.widthOfString=function(t,e,n){var r,i,a,o;for(a=0,i=0,o=(t=""+t).length;0<=o?i<o:i>o;i=0<=o?++i:--i)r=t.charCodeAt(i),a+=this.widthOfGlyph(this.characterToGlyph(r))+n*(1e3/e)||0;return a*(e/1e3)},t.prototype.lineHeight=function(t,e){var n;return null==e&&(e=!1),n=e?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},t}();var qt,Rt=function(){function t(t){this.data=null!=t?t:[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(t){return this.data[this.pos++]=t},t.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},t.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},t.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},t.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},t.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},t.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},t.prototype.readString=function(t){var e,n;for(n=[],e=0;0<=t?e<t:e>t;e=0<=t?++e:--e)n[e]=String.fromCharCode(this.readByte());return n.join("")},t.prototype.writeString=function(t){var e,n,r;for(r=[],e=0,n=t.length;0<=n?e<n:e>n;e=0<=n?++e:--e)r.push(this.writeByte(t.charCodeAt(e)));return r},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(t){return this.writeInt16(t)},t.prototype.readLongLong=function(){var t,e,n,r,i,a,o,s;return t=this.readByte(),e=this.readByte(),n=this.readByte(),r=this.readByte(),i=this.readByte(),a=this.readByte(),o=this.readByte(),s=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^n)+4294967296*(255^r)+16777216*(255^i)+65536*(255^a)+256*(255^o)+(255^s)+1):72057594037927940*t+281474976710656*e+1099511627776*n+4294967296*r+16777216*i+65536*a+256*o+s},t.prototype.writeLongLong=function(t){var e,n;return e=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(e>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(t){return this.writeInt32(t)},t.prototype.read=function(t){var e,n;for(e=[],n=0;0<=t?n<t:n>t;n=0<=t?++n:--n)e.push(this.readByte());return e},t.prototype.write=function(t){var e,n,r,i;for(i=[],n=0,r=t.length;n<r;n++)e=t[n],i.push(this.writeByte(e));return i},t}(),Tt=function(){var t;function e(t){var e,n,r;for(this.scalarType=t.readInt(),this.tableCount=t.readShort(),this.searchRange=t.readShort(),this.entrySelector=t.readShort(),this.rangeShift=t.readShort(),this.tables={},n=0,r=this.tableCount;0<=r?n<r:n>r;n=0<=r?++n:--n)e={tag:t.readString(4),checksum:t.readInt(),offset:t.readInt(),length:t.readInt()},this.tables[e.tag]=e}return e.prototype.encode=function(e){var n,r,i,a,o,s,u,c,h,l,f,d,p;for(p in f=Object.keys(e).length,s=Math.log(2),h=16*Math.floor(Math.log(f)/s),a=Math.floor(h/s),c=16*f-h,(r=new Rt).writeInt(this.scalarType),r.writeShort(f),r.writeShort(h),r.writeShort(a),r.writeShort(c),i=16*f,u=r.pos+i,o=null,d=[],e)for(l=e[p],r.writeString(p),r.writeInt(t(l)),r.writeInt(u),r.writeInt(l.length),d=d.concat(l),"head"===p&&(o=u),u+=l.length;u%4;)d.push(0),u++;return r.write(d),n=2981146554-t(r.data),r.pos=o+8,r.writeUInt32(n),r.data},t=function(t){var e,n,r,i;for(t=$t.call(t);t.length%4;)t.push(0);for(r=new Rt(t),n=0,e=0,i=t.length;e<i;e=e+=4)n+=r.readUInt32();return 4294967295&n},e}(),Dt={}.hasOwnProperty,Ut=function(t,e){for(var n in e)Dt.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t};qt=function(){function t(t){var e;this.file=t,e=this.file.directory.tables[this.tag],this.exists=!!e,e&&(this.offset=e.offset,this.length=e.length,this.parse(this.file.contents))}return t.prototype.parse=function(){},t.prototype.encode=function(){},t.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},t}();var zt=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var e;return(e=new Rt).writeInt(this.version),e.writeInt(this.revision),e.writeInt(this.checkSumAdjustment),e.writeInt(this.magicNumber),e.writeShort(this.flags),e.writeShort(this.unitsPerEm),e.writeLongLong(this.created),e.writeLongLong(this.modified),e.writeShort(this.xMin),e.writeShort(this.yMin),e.writeShort(this.xMax),e.writeShort(this.yMax),e.writeShort(this.macStyle),e.writeShort(this.lowestRecPPEM),e.writeShort(this.fontDirectionHint),e.writeShort(t),e.writeShort(this.glyphDataFormat),e.data},e}(),Ht=function(){function t(t,e){var n,r,i,a,o,s,u,c,h,l,f,d,p,g,m,v,b;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=e+t.readInt(),h=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=3===this.platformID&&1===this.encodingID&&4===this.format||0===this.platformID&&4===this.format,this.codeMap={},this.format){case 0:for(s=0;s<256;++s)this.codeMap[s]=t.readByte();break;case 4:for(f=t.readUInt16(),l=f/2,t.pos+=6,i=function(){var e,n;for(n=[],s=e=0;0<=l?e<l:e>l;s=0<=l?++e:--e)n.push(t.readUInt16());return n}(),t.pos+=2,p=function(){var e,n;for(n=[],s=e=0;0<=l?e<l:e>l;s=0<=l?++e:--e)n.push(t.readUInt16());return n}(),u=function(){var e,n;for(n=[],s=e=0;0<=l?e<l:e>l;s=0<=l?++e:--e)n.push(t.readUInt16());return n}(),c=function(){var e,n;for(n=[],s=e=0;0<=l?e<l:e>l;s=0<=l?++e:--e)n.push(t.readUInt16());return n}(),r=(this.length-t.pos+this.offset)/2,o=function(){var e,n;for(n=[],s=e=0;0<=r?e<r:e>r;s=0<=r?++e:--e)n.push(t.readUInt16());return n}(),s=m=0,b=i.length;m<b;s=++m)for(g=i[s],n=v=d=p[s];d<=g?v<=g:v>=g;n=d<=g?++v:--v)0===c[s]?a=n+u[s]:0!==(a=o[c[s]/2+(n-d)-(l-s)]||0)&&(a+=u[s]),this.codeMap[n]=65535&a}t.pos=h}return t.encode=function(t,e){var n,r,i,a,o,s,u,c,h,l,f,d,p,g,m,v,b,y,w,N,L,x,A,_,S,P,k,F,I,C,j,B,O,M,E,q,R,T,D,U,z,H,W,V,G,Y;switch(F=new Rt,a=Object.keys(t).sort((function(t,e){return t-e})),e){case"macroman":for(p=0,g=function(){var t=[];for(d=0;d<256;++d)t.push(0);return t}(),v={0:0},i={},I=0,O=a.length;I<O;I++)null==v[W=t[r=a[I]]]&&(v[W]=++p),i[r]={old:t[r],new:v[t[r]]},g[r]=v[t[r]];return F.writeUInt16(1),F.writeUInt16(0),F.writeUInt32(12),F.writeUInt16(0),F.writeUInt16(262),F.writeUInt16(0),F.write(g),{charMap:i,subtable:F.data,maxGlyphID:p+1};case"unicode":for(P=[],h=[],b=0,v={},n={},m=u=null,C=0,M=a.length;C<M;C++)null==v[w=t[r=a[C]]]&&(v[w]=++b),n[r]={old:w,new:v[w]},o=v[w]-r,null!=m&&o===u||(m&&h.push(m),P.push(r),u=o),m=r;for(m&&h.push(m),h.push(65535),P.push(65535),_=2*(A=P.length),x=2*Math.pow(Math.log(A)/Math.LN2,2),l=Math.log(x/2)/Math.LN2,L=2*A-x,s=[],N=[],f=[],d=j=0,E=P.length;j<E;d=++j){if(S=P[d],c=h[d],65535===S){s.push(0),N.push(0);break}if(S-(k=n[S].new)>=32768)for(s.push(0),N.push(2*(f.length+A-d)),r=B=S;S<=c?B<=c:B>=c;r=S<=c?++B:--B)f.push(n[r].new);else s.push(k-S),N.push(0)}for(F.writeUInt16(3),F.writeUInt16(1),F.writeUInt32(12),F.writeUInt16(4),F.writeUInt16(16+8*A+2*f.length),F.writeUInt16(0),F.writeUInt16(_),F.writeUInt16(x),F.writeUInt16(l),F.writeUInt16(L),z=0,q=h.length;z<q;z++)r=h[z],F.writeUInt16(r);for(F.writeUInt16(0),H=0,R=P.length;H<R;H++)r=P[H],F.writeUInt16(r);for(V=0,T=s.length;V<T;V++)o=s[V],F.writeUInt16(o);for(G=0,D=N.length;G<D;G++)y=N[G],F.writeUInt16(y);for(Y=0,U=f.length;Y<U;Y++)p=f[Y],F.writeUInt16(p);return{charMap:n,subtable:F.data,maxGlyphID:b+1}}},t}(),Wt=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="cmap",e.prototype.parse=function(t){var e,n,r;for(t.pos=this.offset,this.version=t.readUInt16(),r=t.readUInt16(),this.tables=[],this.unicode=null,n=0;0<=r?n<r:n>r;n=0<=r?++n:--n)e=new Ht(t,this.offset),this.tables.push(e),e.isUnicode&&null==this.unicode&&(this.unicode=e);return!0},e.encode=function(t,e){var n,r;return null==e&&(e="macroman"),n=Ht.encode(t,e),(r=new Rt).writeUInt16(0),r.writeUInt16(1),n.table=r.data.concat(n.subtable),n},e}(),Vt=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),Gt=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var e,n;for(n=[],e=0;e<10;++e)n.push(t.readByte());return n}(),this.charRange=function(){var e,n;for(n=[],e=0;e<4;++e)n.push(t.readInt());return n}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var e,n;for(n=[],e=0;e<2;e=++e)n.push(t.readInt());return n}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),Yt=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="post",e.prototype.parse=function(t){var e,n,r;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:break;case 131072:var i;for(n=t.readUInt16(),this.glyphNameIndex=[],i=0;0<=n?i<n:i>n;i=0<=n?++i:--i)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],r=[];t.pos<this.offset+this.length;)e=t.readByte(),r.push(this.names.push(t.readString(e)));return r;case 151552:return n=t.readUInt16(),this.offsets=t.read(n);case 196608:break;case 262144:return this.map=function(){var e,n,r;for(r=[],i=e=0,n=this.file.maxp.numGlyphs;0<=n?e<n:e>n;i=0<=n?++e:--e)r.push(t.readUInt32());return r}.call(this)}},e}(),Jt=function(t,e){this.raw=t,this.length=t.length,this.platformID=e.platformID,this.encodingID=e.encodingID,this.languageID=e.languageID},Xt=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="name",e.prototype.parse=function(t){var e,n,r,i,a,o,s,u,c,h,l;for(t.pos=this.offset,t.readShort(),e=t.readShort(),o=t.readShort(),n=[],i=0;0<=e?i<e:i>e;i=0<=e?++i:--i)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+o+t.readShort()});for(s={},i=c=0,h=n.length;c<h;i=++c)r=n[i],t.pos=r.offset,u=t.readString(r.length),a=new Jt(u,r),null==s[l=r.nameID]&&(s[l]=[]),s[r.nameID].push(a);this.strings=s,this.copyright=s[0],this.fontFamily=s[1],this.fontSubfamily=s[2],this.uniqueSubfamily=s[3],this.fontName=s[4],this.version=s[5];try{this.postscriptName=s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch(t){this.postscriptName=s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=s[7],this.manufacturer=s[8],this.designer=s[9],this.description=s[10],this.vendorUrl=s[11],this.designerUrl=s[12],this.license=s[13],this.licenseUrl=s[14],this.preferredFamily=s[15],this.preferredSubfamily=s[17],this.compatibleFull=s[18],this.sampleText=s[19]},e}(),Kt=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),Zt=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="hmtx",e.prototype.parse=function(t){var e,n,r,i,a,o,s;for(t.pos=this.offset,this.metrics=[],e=0,o=this.file.hhea.numberOfMetrics;0<=o?e<o:e>o;e=0<=o?++e:--e)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(r=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var n,i;for(i=[],e=n=0;0<=r?n<r:n>r;e=0<=r?++n:--n)i.push(t.readInt16());return i}(),this.widths=function(){var t,e,n,r;for(r=[],t=0,e=(n=this.metrics).length;t<e;t++)i=n[t],r.push(i.advance);return r}.call(this),n=this.widths[this.widths.length-1],s=[],e=a=0;0<=r?a<r:a>r;e=0<=r?++a:--a)s.push(this.widths.push(n));return s},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),$t=[].slice,Qt=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var e,n,r,i,a,o,s,u,c,h;return t in this.cache?this.cache[t]:(i=this.file.loca,e=this.file.contents,n=i.indexOf(t),0===(r=i.lengthOf(t))?this.cache[t]=null:(e.pos=this.offset+n,a=(o=new Rt(e.read(r))).readShort(),u=o.readShort(),h=o.readShort(),s=o.readShort(),c=o.readShort(),this.cache[t]=-1===a?new ee(o,u,h,s,c):new te(o,a,u,h,s,c),this.cache[t]))},e.prototype.encode=function(t,e,n){var r,i,a,o,s;for(a=[],i=[],o=0,s=e.length;o<s;o++)r=t[e[o]],i.push(a.length),r&&(a=a.concat(r.encode(n)));return i.push(a.length),{table:a,offsets:i}},e}(),te=function(){function t(t,e,n,r,i,a){this.raw=t,this.numberOfContours=e,this.xMin=n,this.yMin=r,this.xMax=i,this.yMax=a,this.compound=!1}return t.prototype.encode=function(){return this.raw.data},t}(),ee=function(){function t(t,e,n,r,i){var a,o;for(this.raw=t,this.xMin=e,this.yMin=n,this.xMax=r,this.yMax=i,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],a=this.raw;o=a.readShort(),this.glyphOffsets.push(a.pos),this.glyphIDs.push(a.readUInt16()),32&o;)a.pos+=1&o?4:2,128&o?a.pos+=8:64&o?a.pos+=4:8&o&&(a.pos+=2)}return 1,8,32,64,128,t.prototype.encode=function(){var t,e,n;for(e=new Rt($t.call(this.raw.data)),t=0,n=this.glyphIDs.length;t<n;++t)e.pos=this.glyphOffsets[t];return e.data},t}(),ne=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Ut(e,qt),e.prototype.tag="loca",e.prototype.parse=function(t){var e,n;return t.pos=this.offset,e=this.file.head.indexToLocFormat,this.offsets=0===e?function(){var e,r;for(r=[],n=0,e=this.length;n<e;n+=2)r.push(2*t.readUInt16());return r}.call(this):function(){var e,r;for(r=[],n=0,e=this.length;n<e;n+=4)r.push(t.readUInt32());return r}.call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,e){for(var n=new Uint32Array(this.offsets.length),r=0,i=0,a=0;a<n.length;++a)if(n[a]=r,i<e.length&&e[i]==a){++i,n[a]=r;var o=this.offsets[a],s=this.offsets[a+1]-o;s>0&&(r+=s)}for(var u=new Array(4*n.length),c=0;c<n.length;++c)u[4*c+3]=255&n[c],u[4*c+2]=(65280&n[c])>>8,u[4*c+1]=(16711680&n[c])>>16,u[4*c]=(4278190080&n[c])>>24;return u},e}(),re=function(){function t(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return t.prototype.generateCmap=function(){var t,e,n,r,i;for(e in r=this.font.cmap.tables[0].codeMap,t={},i=this.subset)n=i[e],t[e]=r[n];return t},t.prototype.glyphsFor=function(t){var e,n,r,i,a,o,s;for(r={},a=0,o=t.length;a<o;a++)r[i=t[a]]=this.font.glyf.glyphFor(i);for(i in e=[],r)(null!=(n=r[i])?n.compound:void 0)&&e.push.apply(e,n.glyphIDs);if(e.length>0)for(i in s=this.glyphsFor(e))n=s[i],r[i]=n;return r},t.prototype.encode=function(t,e){var n,r,i,a,o,s,u,c,h,l,f,d,p,g,m;for(r in n=Wt.encode(this.generateCmap(),"unicode"),a=this.glyphsFor(t),f={0:0},m=n.charMap)f[(s=m[r]).old]=s.new;for(d in l=n.maxGlyphID,a)d in f||(f[d]=l++);return c=function(t){var e,n;for(e in n={},t)n[t[e]]=e;return n}(f),h=Object.keys(c).sort((function(t,e){return t-e})),p=function(){var t,e,n;for(n=[],t=0,e=h.length;t<e;t++)o=h[t],n.push(c[o]);return n}(),i=this.font.glyf.encode(a,p,f),u=this.font.loca.encode(i.offsets,p),g={cmap:this.font.cmap.raw(),glyf:i.table,loca:u,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(e)},this.font.os2.exists&&(g["OS/2"]=this.font.os2.raw()),this.font.directory.encode(g)},t}();g.API.PDFObject=function(){var t;function e(){}return t=function(t,e){return(Array(e+1).join("0")+t).slice(-e)},e.convert=function(n){var r,i,a,o;if(Array.isArray(n))return"["+function(){var t,i,a;for(a=[],t=0,i=n.length;t<i;t++)r=n[t],a.push(e.convert(r));return a}().join(" ")+"]";if("string"==typeof n)return"/"+n;if(null!=n?n.isString:void 0)return"("+n+")";if(n instanceof Date)return"(D:"+t(n.getUTCFullYear(),4)+t(n.getUTCMonth(),2)+t(n.getUTCDate(),2)+t(n.getUTCHours(),2)+t(n.getUTCMinutes(),2)+t(n.getUTCSeconds(),2)+"Z)";if("[object Object]"==={}.toString.call(n)){for(i in a=["<<"],n)o=n[i],a.push("/"+i+" "+e.convert(o));return a.push(">>"),a.join("\n")}return""+n},e}(),
/**
 * @license
 * Copyright (c) 2012 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t,e){t.API.adler32cs=function(){var t="function"==typeof ArrayBuffer&&"function"==typeof Uint8Array,e=null,n=function(){if(!t)return function(){return!1};try{var n={};"function"==typeof n.Buffer&&(e=n.Buffer)}catch(t){}return function(t){return t instanceof ArrayBuffer||null!==e&&t instanceof e}}(),r=null!==e?function(t){return new e(t,"utf8").toString("binary")}:function(t){return unescape(encodeURIComponent(t))},i=function(t,e){for(var n=65535&t,r=t>>>16,i=0,a=e.length;i<a;i++)r=(r+(n=(n+(255&e.charCodeAt(i)))%65521))%65521;return(r<<16|n)>>>0},a=function(t,e){for(var n=65535&t,r=t>>>16,i=0,a=e.length;i<a;i++)r=(r+(n=(n+e[i])%65521))%65521;return(r<<16|n)>>>0},o={},s=o.Adler32=(l=function(t){if(!(this instanceof l))throw new TypeError("Constructor cannot called be as a function.");if(!isFinite(t=null===t?1:+t))throw new Error("First arguments needs to be a finite number.");this.checksum=t>>>0},f=l.prototype={},f.constructor=l,l.from=((u=function(t){if(!(this instanceof l))throw new TypeError("Constructor cannot called be as a function.");if(null===t)throw new Error("First argument needs to be a string.");this.checksum=i(1,t.toString())}).prototype=f,u),l.fromUtf8=((c=function(t){if(!(this instanceof l))throw new TypeError("Constructor cannot called be as a function.");if(null===t)throw new Error("First argument needs to be a string.");var e=r(t.toString());this.checksum=i(1,e)}).prototype=f,c),t&&(l.fromBuffer=((h=function(t){if(!(this instanceof l))throw new TypeError("Constructor cannot called be as a function.");if(!n(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=a(1,e)}).prototype=f,h)),f.update=function(t){if(null===t)throw new Error("First argument needs to be a string.");return t=t.toString(),this.checksum=i(this.checksum,t)},f.updateUtf8=function(t){if(null===t)throw new Error("First argument needs to be a string.");var e=r(t.toString());return this.checksum=i(this.checksum,e)},t&&(f.updateBuffer=function(t){if(!n(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=a(this.checksum,e)}),f.clone=function(){return new s(this.checksum)},l);var u,c,h,l,f;o.from=function(t){if(null===t)throw new Error("First argument needs to be a string.");return i(1,t.toString())},o.fromUtf8=function(t){if(null===t)throw new Error("First argument needs to be a string.");var e=r(t.toString());return i(1,e)},t&&(o.fromBuffer=function(t){if(!n(t))throw new Error("First argument need to be ArrayBuffer.");var e=new Uint8Array(t);return a(1,e)});return o}()}(g);/* harmony default export */ __webpack_exports__["default"] = (g);
//# sourceMappingURL=jspdf.es.min.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(44)))

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(457)
  __webpack_require__(456)
}
var Component = __webpack_require__(71)(
  /* script */
  __webpack_require__(412),
  /* template */
  __webpack_require__(472),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_choropleth__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_choropleth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_choropleth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_vue__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_multiselect__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_Tristate_1_json__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_Tristate_1_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__data_Tristate_1_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_Tristate_json__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_Tristate_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__data_Tristate_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue2_leaflet__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chartColors__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_BarChart__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_BarChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_BarChart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_PieChart__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_PieChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_PieChart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Loader__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_Loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__functions_js__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jspdf__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_jspdf_autotable__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_jspdf_autotable__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//imports 







// Install BootstrapVue
__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_bootstrap_vue__["a" /* BootstrapVue */]);
// Optionally install the BootstrapVue icon components plugin
__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_bootstrap_vue__["b" /* IconsPlugin */]);











// variables intialization
var beginDate = "";
var endDate = "";

var amountArray = [];
var Countydata = [];
var filter = "CONFIRMEDCASES";
var labelsArray = [];
var countyLabels = [];
var StateArray = [];

var multiselectValueArray = [];
var chartamountArr = [];
var chartlabelArr = [];

var tagData = [];
let tags = [];

var ConfirmedCases;
var Recovery;
var Deaths;
var Countydata;
var State;
/* this is called in the filter buttons
this will fiter the data for the map based 
on the filter(confirmedCases...)
*/
__WEBPACK_IMPORTED_MODULE_2_vue__["default"].filter("pluck", function (objects, key) {

  objects.filter(function (object, index) {
    amountArray[index] = object[key];
  });
});

/* harmony default export */ __webpack_exports__["default"] = ({

  name: "app",
  components: {
    LMap: __WEBPACK_IMPORTED_MODULE_7_vue2_leaflet__["a" /* LMap */],
    "l-choropleth-layer": __WEBPACK_IMPORTED_MODULE_1_vue_choropleth__["ChoroplethLayer"],
    "l-info-control": __WEBPACK_IMPORTED_MODULE_1_vue_choropleth__["InfoControl"],
    "l-reference-chart": __WEBPACK_IMPORTED_MODULE_1_vue_choropleth__["ReferenceChart"],
    BarChart: __WEBPACK_IMPORTED_MODULE_9__components_BarChart___default.a,
    PieChart: __WEBPACK_IMPORTED_MODULE_10__components_PieChart___default.a,
    Multiselect: __WEBPACK_IMPORTED_MODULE_4_vue_multiselect___default.a,
    'loading-screen': __WEBPACK_IMPORTED_MODULE_11__components_Loader___default.a
  },
  data() {

    return {
      Tristate1: __WEBPACK_IMPORTED_MODULE_5__data_Tristate_1_json___default.a,
      State: '',
      activeBtn: 'btn1',
      isLoading: true,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      ConfirmedCases: 0,
      Recovery: 0,
      Deaths: 0,
      value: {
        key: "CONFIRMEDCASES",
        metric: "CONFIRMEDCASES"
      },
      showTable: true,
      showCharts: false,
      multiselectValueArray,

      Countydata: {},
      Tristate: __WEBPACK_IMPORTED_MODULE_6__data_Tristate_json___default.a,
      multiselectValue: "",
      labelsArray,
      amountArray,
      option: countyLabels,

      fkey: "Id",
      filterList: ["CONFIRMEDCASES", "RECOVERIES", "CONFIRMEDDEATHS"],
      filter: "CONFIRMEDCASES",
      values: [],
      /*the data for the table */
      headers: [{
        text: "County",
        align: "start",
        sortable: false,
        value: "NAME"
      }, { text: "State", value: "STATE" }, { text: "Confirmed Cases", value: "CONFIRMEDCASES" }, { text: "Recoveries", value: "RECOVERIES" }, { text: "Confirmed Deaths", value: "CONFIRMEDDEATHS" }],

      /*this is the data injected in the chart*/
      chartData: {
        labels: chartlabelArr,
        datasets: [{
          label: "Bar Chart",
          borderWidth: 1,
          backgroundColor: __WEBPACK_IMPORTED_MODULE_8__chartColors__["a" /* colors */],
          borderColor: __WEBPACK_IMPORTED_MODULE_8__chartColors__["a" /* colors */],
          pointBorderColor: "#2554FF",
          data: chartamountArr
        }]
      },
      mapOptions: {
        // attributionControl: true,
      },
      currentStrokeColor: "3d3213"
    };
  },
  mounted() {
    this.requestData();
  },
  methods: {
    /**
    * gets data from the backend
    * @param values the selected date 
    * @return the data based on the date
    */
    requestData(values) {

      var today;
      var end;
      /*if values was entered as a parameter*/
      if (values) {
        today = values[0]._d;

        end = values[1]._d;
      }
      /*if no values were provided get today's date*/
      else {
          today = new Date();
          end = new Date();
        }

      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;

      var dd = String(end.getDate()).padStart(2, '0');
      var mm = String(end.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = end.getFullYear();
      end = yyyy + '-' + mm + '-' + dd;
      /*if the values that were entered as a parameter different get the range between the two*/
      if (today != end) {
        var scrap = '{"range":[ "' + today + '" , "' + end + '" ]}';
      }
      /*if the values are the same get by the date*/
      else {
          var scrap = '{"date":"' + today + '"}';
        }
      /*set the backend URL and post data */
      const url = 'https://d4y3kom4hxs3x.cloudfront.net/rest/controller/APIroutes/stats';
      const options = {
        'method': 'POST',
        'Content-Type': 'application/json',
        'body': scrap
      };

      fetch(url, options).then(dataWrappedByPromise => dataWrappedByPromise.json()).then(data => {

        this.beginDate = today;
        this.endDate = end;

        this.Countydata = data.Response;
        this.ConfirmedCases = 0;
        this.Recovery = 0;
        this.Deaths = 0;
        var j = 0;
        amountArray = [];
        for (var i = 0; i < this.Countydata.length; i++) {
          /*calculates the total Confirmed Cases,Recoveries and Deaths */
          this.ConfirmedCases += this.Countydata[i].CONFIRMEDCASES;
          this.Recovery += this.Countydata[i].RECOVERIES;
          this.Deaths += this.Countydata[i].CONFIRMEDDEATHS;
          /*pushes all the counties for the multiselect */
          countyLabels[i] = this.Countydata[i].NAME;
        }

        for (var i = 0; i < this.Countydata.length; i++) {
          /*pushes the counties and the data for the specific state */
          if (this.Countydata[i].STATE == "New Jersey") {
            this.State = "New Jersey";
            chartlabelArr[j] = this.Countydata[i].NAME + ', ' + "NJ";
            chartamountArr[j] = this.Countydata[i].CONFIRMEDCASES;
            j++;
          } else {
            i++;
          }
        }
        /*the loading screen is being set to 1 second timeout */
        this.changeData();
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }).catch(err => {
        console.log("no data returned from the backend");
      });
    },
    /**
       * sets show table to true to be able to show table
       * 
      */
    viewTable() {
      this.showTable = true, this.showCharts = false;
    },
    /**
       * sets show charts to true to be able to show charts
       * 
      */
    viewCharts() {
      this.showTable = false, this.showCharts = true;
    },
    /**
    * Applies style to the buttons
    * @param entry case 
    * @return the color based on the entry 
    */
    applyStyle(entry) {
      if (entry == "CONFIRMEDCASES") {
        return "warning";
      }if (entry == "RECOVERIES") {
        return "success";
      }if (entry == "CONFIRMEDDEATHS") {
        return "danger";
      }
    },
    /**
    * adds tags to the multiselect
    * @param newTag county name
    *pushes the new Tag to multiselectValueArray array
    */
    addTag(newTag) {

      multiselectValueArray = [];
      newTag.forEach(tag => {
        let filteredItems = this.Countydata.filter(obj => obj.NAME == tag);
        if (!this.multiselectValueArray.includes(filteredItems[0])) {
          this.multiselectValueArray.push(filteredItems[0]);
        }
      });
    },
    /**
       * remove tags from multiselect
       * @param newTag county name
       * deletes the  Tag from multiselectValueArray array
      */
    removeTag(newTag) {
      let currentTag = newTag[newTag.length - 1];
      this.multiselectValueArray = multiselectValueArray.filter(obj => obj.NAME != currentTag);
    },

    /**
    * fixes the grammar for the button names
    * @param entry capital case button name
    * @return the corrected button name
    */
    getCase(entry) {
      if (entry == "CONFIRMEDCASES") {
        return "Confirmed Cases";
      }if (entry == "RECOVERIES") {
        return "Recoveries";
      }if (entry == "CONFIRMEDDEATHS") {
        return "Confirmed Deaths";
      }
    },
    /**
    * changes the current state and 
    * adds the data for the state 
    * based on the filter
    * @param state  the selected State
    * @param filter the current filter (confirmedcases...)
    * 
    */
    changeState(state, filter) {
      var j = 0;
      chartlabelArr = [];
      chartamountArr = [];
      var selected = "";
      if (state === "New York") {
        selected = "NY";
        this.State = "New York";
      }
      if (state === "New Jersey") {
        selected = "NJ";
        this.State = "New Jersey";
      }
      if (state === "Pennsylvania") {
        selected = "PA";
        this.State = "Pennsylvania";
      }
      if (state === "Connecticut") {
        selected = "CT";
        this.State = "Connecticut";
      }
      for (var i = 0; i < this.Countydata.length; i++) {
        if (this.Countydata[i].STATE === state) {
          chartlabelArr[j] = this.Countydata[i].NAME + ', ' + selected;

          if (filter === "CONFIRMEDCASES") {

            chartamountArr[j] = this.Countydata[i].CONFIRMEDCASES;
          }
          if (filter === "RECOVERIES") {

            chartamountArr[j] = this.Countydata[i].RECOVERIES;
          }
          if (filter === "CONFIRMEDDEATHS") {
            chartamountArr[j] = this.Countydata[i].CONFIRMEDDEATHS;
          }
          j++;
        } else {
          i++;
        }
        this.changeData();
      }
    },
    /**
    * updates the data for the charts
    * 
    */
    changeData() {
      this.chartData = {
        labels: chartlabelArr,
        datasets: [{
          label: "Bar Chart",
          borderWidth: 1,
          backgroundColor: __WEBPACK_IMPORTED_MODULE_8__chartColors__["a" /* colors */],
          borderColor: __WEBPACK_IMPORTED_MODULE_8__chartColors__["a" /* colors */],
          pointBorderColor: "#2554FF",
          data: chartamountArr
        }]
      };
    },
    /**
    * export table as a PDF
    * 
    */
    createPDF() {
      var source = this.$refs["myTable"];
      let rows = [];
      let columnHeader = ["County", "State", "Confirmed Cases", "Recoveries", "Confirmed Deaths"];
      let pdfName = 'CovidData-' + this.beginDate + '-' + this.endDate;
      source.items.forEach(element => {
        var temp = [element.NAME, element.STATE, element.CONFIRMEDCASES, element.RECOVERIES, element.CONFIRMEDDEATHS];
        rows.push(temp);
      });
      var doc = new __WEBPACK_IMPORTED_MODULE_13_jspdf__["default"]();
      doc.autoTable(columnHeader, rows, { startY: 10 });
      doc.save(pdfName + '.pdf');
    },
    concatGeoJSON(g1, g2) {
      return {
        "type": "FeatureCollection",
        "features": g1.features.concat(g2.features)
      };
    }

  },
  watch: {
    propertyComputed() {
      return this.Countydata;
    }
  },
  computed: {
    propertyComputed() {
      return this.Countydata;
    }

  }
});

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(406);


const { reactiveProp } = __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["a" /* mixins */];
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [reactiveProp],
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["c" /* Bar */],
  props: ['chartData'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  watch: {
    data: function () {
      this.$data._chart.destroy();

      this.renderChart(this.chartData, this.options);
    }
  }

});

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_please_wait__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_please_wait___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_please_wait__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_please_wait_build_please_wait_css__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_please_wait_build_please_wait_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_please_wait_build_please_wait_css__);
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["isLoading"],
  watch: {
    isLoading: {
      handler(isLoading) {
        if (isLoading) {
          this.open();
        } else {
          this.close();
        }
      },
      immediate: true
    }
  },
  methods: {
    open() {
      if (!this.pleaseWaitInstance) {
        this.pleaseWaitInstance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_please_wait__["pleaseWait"])({
          logo: "https://i2.wp.com/boingboing.net/wp-content/uploads/2015/10/P1Chi6u1.gif?w=970",
          backgroundColor: "#ffffff",
          loadingHtml: '<p class="loading-message">A good day to you fine user!</p>'
        });
      }
    },
    close() {
      if (this.pleaseWaitInstance != null) {
        this.pleaseWaitInstance.finish();
        this.pleaseWaitInstance = null;
      }
    }
  }
});

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(406);


const { reactiveProp } = __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["a" /* mixins */];
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [reactiveProp],
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["b" /* Pie */],
  props: ['chartData'],
  data() {
    return {

      options: {
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    data: function () {
      this.$data._chart.destroy();

      this.renderChart(this.chartData, this.options);
    }
  }

});

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
/**
   *Colors for the charts
   * 
   * 
  */
var colors = ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)", "#E7717D", "#C2CAD0", "#C2B9B0", "#7E685A", "#AFD275", "#66FCF1", "#45A29E", "#EE4C7C", "#D79922", "#EFE2BA", "#4056A1", "#C5CBE3", "#EDC7B7", "#116466", "#D9B08C", "#D1E8E2", "#FFE400", "#FF652F", "#2F4454", "#DA7B93", "#376E6F", "#44318D", "#5680E9", "#5AB9EA", "#C1C8E4", "#3AAFA9", "#DEF2F1", "#F8E9A1", "#A8D0E6", "#10E7DC", "#AFD275", "#66FCF1", "#45A29E", "#EE4C7C", "#D79922", "#EFE2BA", "#4056A1", "#C5CBE3", "#EDC7B7", "#116466", "#D9B08C", "#D1E8E2", "#FFE400", "#FF652F", "#2F4454", "#DA7B93", "#376E6F", "#44318D", "#5680E9"];

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export requestData */
/* unused harmony export viewTable */
/* unused harmony export viewCharts */
/* unused harmony export applyStyle */
/* unused harmony export addTag */
/* unused harmony export removeTag */
/* unused harmony export getCase */
/* unused harmony export changeState */
/* unused harmony export changeData */
/**
  * gets data from the backend
  * @param values the selected date 
  * @return the data based on the date
  */
function requestData(values) {

  var today;
  var end;
  /*if values was entered as a parameter*/
  if (values) {
    today = values[0]._d;

    end = values[1]._d;
  }
  /*if no values were provided get today's date*/
  else {
      today = new Date();
      end = new Date();
    }

  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  var dd = String(end.getDate()).padStart(2, '0');
  var mm = String(end.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = end.getFullYear();
  end = yyyy + '-' + mm + '-' + dd;
  /*if the values that were entered as a parameter different get the range between the two*/
  if (today != end) {
    var scrap = '{"range":[ "' + today + '" , "' + end + '" ]}';
  }
  /*if the values are the same get by the date*/
  else {
      var scrap = '{"date":"' + today + '"}';
    }
  /*set the backend URL and post data */
  const url = 'https://d4y3kom4hxs3x.cloudfront.net/rest/controller/APIroutes/stats';
  const options = {
    'method': 'POST',
    'Content-Type': 'application/json',
    'body': scrap
  };

  fetch(url, options).then(dataWrappedByPromise => dataWrappedByPromise.json()).then(data => {

    this.beginDate = today;
    this.endDate = end;

    this.Countydata = data.Response;
    this.ConfirmedCases = 0;
    this.Recovery = 0;
    this.Deaths = 0;
    var j = 0;
    amountArray = [];
    for (var i = 0; i < this.Countydata.length; i++) {
      /*calculates the total Confirmed Cases,Recoveries and Deaths */
      this.ConfirmedCases += this.Countydata[i].CONFIRMEDCASES;
      this.Recovery += this.Countydata[i].RECOVERIES;
      this.Deaths += this.Countydata[i].CONFIRMEDDEATHS;
      /*pushes all the counties for the multiselect */
      countyLabels[i] = this.Countydata[i].NAME;
    }

    for (var i = 0; i < this.Countydata.length; i++) {
      /*pushes the counties and the data for the specific state */
      if (this.Countydata[i].STATE == "New Jersey") {
        this.State = "New Jersey";
        chartlabelArr[j] = this.Countydata[i].NAME + ', ' + "NJ";
        chartamountArr[j] = this.Countydata[i].CONFIRMEDCASES;
        j++;
      } else {
        i++;
      }
    }
    /*the loading screen is being set to 1 second timeout */
    this.changeData();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }).catch(err => {
    console.log("no data returned from the backend");
  });
}

/**
   * sets show table to true to be able to show table
   * 
  */

function viewTable() {
  this.showTable = true, this.showCharts = false;
}
/**
   * sets show charts to true to be able to show charts
   * 
  */
function viewCharts() {
  this.showTable = false, this.showCharts = true;
}
/**
   * Applies style to the buttons
   * @param entry case 
   * @return the color based on the entry 
  */
function applyStyle(entry) {
  if (entry == "CONFIRMEDCASES") {
    return "warning";
  }if (entry == "RECOVERIES") {
    return "success";
  }if (entry == "CONFIRMEDDEATHS") {
    return "danger";
  }
}
/**
   * adds tags to the multiselect
   * @param newTag county name
   *pushes the new Tag to test array
  */
function addTag(newTag) {

  test = [];
  newTag.forEach(tag => {
    let filteredItems = this.Countydata.filter(obj => obj.NAME == tag);
    if (!this.test.includes(filteredItems[0])) {
      this.test.push(filteredItems[0]);
    }
  });
}
/**
   * remove tags from multiselect
   * @param newTag county name
   * deletes the  Tag from test array
  */
function removeTag(newTag) {
  let currentTag = newTag[newTag.length - 1];
  this.test = test.filter(obj => obj.NAME != currentTag);
}
/**
   * fixes the grammar for the button names
   * @param entry capital case button name
   * @return the corrected button name
  */
function getCase(entry) {
  if (entry == "CONFIRMEDCASES") {
    return "Confirmed Cases";
  }if (entry == "RECOVERIES") {
    return "Recoveries";
  }if (entry == "CONFIRMEDDEATHS") {
    return "Confirmed Deaths";
  }
}

/**
   * changes the current state and 
   * adds the data for the state 
   * based on the filter
   * @param state  the selected State
   * @param filter the current filter (confirmedcases...)
   * 
  */
function changeState(state, filter) {
  var j = 0;
  chartlabelArr = [];
  chartamountArr = [];
  var selected = "";
  if (state === "New York") {
    selected = "NY";
    this.State = "New York";
  }
  if (state === "New Jersey") {
    selected = "NJ";
    this.State = "New Jersey";
  }
  if (state === "Pennsylvania") {
    selected = "PA";
    this.State = "Pennsylvania";
  }
  if (state === "Connecticut") {
    selected = "CT";
    this.State = "Connecticut";
  }
  for (var i = 0; i < this.Countydata.length; i++) {
    if (this.Countydata[i].STATE === state) {
      chartlabelArr[j] = this.Countydata[i].NAME + ', ' + selected;

      if (filter === "CONFIRMEDCASES") {

        chartamountArr[j] = this.Countydata[i].CONFIRMEDCASES;
      }
      if (filter === "RECOVERIES") {

        chartamountArr[j] = this.Countydata[i].RECOVERIES;
      }
      if (filter === "CONFIRMEDDEATHS") {
        chartamountArr[j] = this.Countydata[i].CONFIRMEDDEATHS;
      }
      j++;
    } else {
      i++;
    }
    changeData();
  }
}

/**
   * updates the data for the charts
   * 
  */
function changeData() {
  this.chartData = {
    labels: chartlabelArr,
    datasets: [{
      label: "Bar Chart",
      borderWidth: 1,
      backgroundColor: colors,
      borderColor: colors,
      pointBorderColor: "#2554FF",
      data: chartamountArr
    }]
  };
}

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify_dist_vuetify_min_css__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_v_md_date_range_picker__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_v_md_date_range_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_v_md_date_range_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_dist_leaflet_css__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_dist_leaflet_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_dist_leaflet_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_v_md_date_range_picker___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  vuetify: new __WEBPACK_IMPORTED_MODULE_2_vuetify___default.a(),
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 269,
	"./af.js": 269,
	"./ar": 276,
	"./ar-dz": 270,
	"./ar-dz.js": 270,
	"./ar-kw": 271,
	"./ar-kw.js": 271,
	"./ar-ly": 272,
	"./ar-ly.js": 272,
	"./ar-ma": 273,
	"./ar-ma.js": 273,
	"./ar-sa": 274,
	"./ar-sa.js": 274,
	"./ar-tn": 275,
	"./ar-tn.js": 275,
	"./ar.js": 276,
	"./az": 277,
	"./az.js": 277,
	"./be": 278,
	"./be.js": 278,
	"./bg": 279,
	"./bg.js": 279,
	"./bm": 280,
	"./bm.js": 280,
	"./bn": 282,
	"./bn-bd": 281,
	"./bn-bd.js": 281,
	"./bn.js": 282,
	"./bo": 283,
	"./bo.js": 283,
	"./br": 284,
	"./br.js": 284,
	"./bs": 285,
	"./bs.js": 285,
	"./ca": 286,
	"./ca.js": 286,
	"./cs": 287,
	"./cs.js": 287,
	"./cv": 288,
	"./cv.js": 288,
	"./cy": 289,
	"./cy.js": 289,
	"./da": 290,
	"./da.js": 290,
	"./de": 293,
	"./de-at": 291,
	"./de-at.js": 291,
	"./de-ch": 292,
	"./de-ch.js": 292,
	"./de.js": 293,
	"./dv": 294,
	"./dv.js": 294,
	"./el": 295,
	"./el.js": 295,
	"./en-au": 296,
	"./en-au.js": 296,
	"./en-ca": 297,
	"./en-ca.js": 297,
	"./en-gb": 298,
	"./en-gb.js": 298,
	"./en-ie": 299,
	"./en-ie.js": 299,
	"./en-il": 300,
	"./en-il.js": 300,
	"./en-in": 301,
	"./en-in.js": 301,
	"./en-nz": 302,
	"./en-nz.js": 302,
	"./en-sg": 303,
	"./en-sg.js": 303,
	"./eo": 304,
	"./eo.js": 304,
	"./es": 308,
	"./es-do": 305,
	"./es-do.js": 305,
	"./es-mx": 306,
	"./es-mx.js": 306,
	"./es-us": 307,
	"./es-us.js": 307,
	"./es.js": 308,
	"./et": 309,
	"./et.js": 309,
	"./eu": 310,
	"./eu.js": 310,
	"./fa": 311,
	"./fa.js": 311,
	"./fi": 312,
	"./fi.js": 312,
	"./fil": 313,
	"./fil.js": 313,
	"./fo": 314,
	"./fo.js": 314,
	"./fr": 317,
	"./fr-ca": 315,
	"./fr-ca.js": 315,
	"./fr-ch": 316,
	"./fr-ch.js": 316,
	"./fr.js": 317,
	"./fy": 318,
	"./fy.js": 318,
	"./ga": 319,
	"./ga.js": 319,
	"./gd": 320,
	"./gd.js": 320,
	"./gl": 321,
	"./gl.js": 321,
	"./gom-deva": 322,
	"./gom-deva.js": 322,
	"./gom-latn": 323,
	"./gom-latn.js": 323,
	"./gu": 324,
	"./gu.js": 324,
	"./he": 325,
	"./he.js": 325,
	"./hi": 326,
	"./hi.js": 326,
	"./hr": 327,
	"./hr.js": 327,
	"./hu": 328,
	"./hu.js": 328,
	"./hy-am": 329,
	"./hy-am.js": 329,
	"./id": 330,
	"./id.js": 330,
	"./is": 331,
	"./is.js": 331,
	"./it": 333,
	"./it-ch": 332,
	"./it-ch.js": 332,
	"./it.js": 333,
	"./ja": 334,
	"./ja.js": 334,
	"./jv": 335,
	"./jv.js": 335,
	"./ka": 336,
	"./ka.js": 336,
	"./kk": 337,
	"./kk.js": 337,
	"./km": 338,
	"./km.js": 338,
	"./kn": 339,
	"./kn.js": 339,
	"./ko": 340,
	"./ko.js": 340,
	"./ku": 341,
	"./ku.js": 341,
	"./ky": 342,
	"./ky.js": 342,
	"./lb": 343,
	"./lb.js": 343,
	"./lo": 344,
	"./lo.js": 344,
	"./lt": 345,
	"./lt.js": 345,
	"./lv": 346,
	"./lv.js": 346,
	"./me": 347,
	"./me.js": 347,
	"./mi": 348,
	"./mi.js": 348,
	"./mk": 349,
	"./mk.js": 349,
	"./ml": 350,
	"./ml.js": 350,
	"./mn": 351,
	"./mn.js": 351,
	"./mr": 352,
	"./mr.js": 352,
	"./ms": 354,
	"./ms-my": 353,
	"./ms-my.js": 353,
	"./ms.js": 354,
	"./mt": 355,
	"./mt.js": 355,
	"./my": 356,
	"./my.js": 356,
	"./nb": 357,
	"./nb.js": 357,
	"./ne": 358,
	"./ne.js": 358,
	"./nl": 360,
	"./nl-be": 359,
	"./nl-be.js": 359,
	"./nl.js": 360,
	"./nn": 361,
	"./nn.js": 361,
	"./oc-lnc": 362,
	"./oc-lnc.js": 362,
	"./pa-in": 363,
	"./pa-in.js": 363,
	"./pl": 364,
	"./pl.js": 364,
	"./pt": 366,
	"./pt-br": 365,
	"./pt-br.js": 365,
	"./pt.js": 366,
	"./ro": 367,
	"./ro.js": 367,
	"./ru": 368,
	"./ru.js": 368,
	"./sd": 369,
	"./sd.js": 369,
	"./se": 370,
	"./se.js": 370,
	"./si": 371,
	"./si.js": 371,
	"./sk": 372,
	"./sk.js": 372,
	"./sl": 373,
	"./sl.js": 373,
	"./sq": 374,
	"./sq.js": 374,
	"./sr": 376,
	"./sr-cyrl": 375,
	"./sr-cyrl.js": 375,
	"./sr.js": 376,
	"./ss": 377,
	"./ss.js": 377,
	"./sv": 378,
	"./sv.js": 378,
	"./sw": 379,
	"./sw.js": 379,
	"./ta": 380,
	"./ta.js": 380,
	"./te": 381,
	"./te.js": 381,
	"./tet": 382,
	"./tet.js": 382,
	"./tg": 383,
	"./tg.js": 383,
	"./th": 384,
	"./th.js": 384,
	"./tk": 385,
	"./tk.js": 385,
	"./tl-ph": 386,
	"./tl-ph.js": 386,
	"./tlh": 387,
	"./tlh.js": 387,
	"./tr": 388,
	"./tr.js": 388,
	"./tzl": 389,
	"./tzl.js": 389,
	"./tzm": 391,
	"./tzm-latn": 390,
	"./tzm-latn.js": 390,
	"./tzm.js": 391,
	"./ug-cn": 392,
	"./ug-cn.js": 392,
	"./uk": 393,
	"./uk.js": 393,
	"./ur": 394,
	"./ur.js": 394,
	"./uz": 396,
	"./uz-latn": 395,
	"./uz-latn.js": 395,
	"./uz.js": 396,
	"./vi": 397,
	"./vi.js": 397,
	"./x-pseudo": 398,
	"./x-pseudo.js": 398,
	"./yo": 399,
	"./yo.js": 399,
	"./zh-cn": 400,
	"./zh-cn.js": 400,
	"./zh-hk": 401,
	"./zh-hk.js": 401,
	"./zh-mo": 402,
	"./zh-mo.js": 402,
	"./zh-tw": 403,
	"./zh-tw.js": 403
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 458;

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAlCAIAAABH4scTAAAAA3NCSVQICAjb4U/gAAADr0lEQVRIie2XTUgyWxjHzziajhWBmJpEhtm3SCGICzdhFIS5clGLgnYRtLBtBJXuklooQdauVUFBlBgUDCEYtAiiyEADoQTDjzZqjnPmnLs4lwjuW9d4q7u47281PGfO85//c848MwdgjDHGkUjE4XAolUrwdSiVSofDwbIskQAY47W1NbFY/IUabxGLxR6PB2MMIpHI98m8wrIsnclk7u7uvlspl8uBr12b9/gZlf87Uqm0paVFKpX+c0gikZjN5mqSVLW/6+rqpqeny+XyxsbG09PTa1yn001MTNjt9oGBgX9NQlWj1N7evr+/bzAYHh8fb25uWJbleX5kZKSnp0er1T4/P2u12mry/AKapmmaBgBQFMUwjMvlwhhDCAuFQjabzWQyuVwum80WCgUIIcZ4dHSUYRiKogAAIpGIzK3KU0NDg8vlghBKJJK+vr6pqal4PH52dnZ5ealWq1UqVW1tbalUQgjV1NTYbLbe3t5gMHh9fc1xHEVRR0dHuVyuWluzs7OCICCEEEI+n89kMtE07ff7Hx4eEEIYY57no9Ho4OCg0WhcXl4WBEEQBAih2+0m5qqlq6srlUphjAOBANl1TqeT53n8BoTQzs5OY2OjTCabn58nQYlE8gkZAIBer4/FYslkkmEYEtnb2yO58vl8MBj0er2hUEgQBIvFAgAwGAyRSARj/F5C0XsDra2ter1+ZWWF4zgSkclk5CKfz/v9/oWFhcPDQ5FIRGqVTCYvLi4QQsPDw59QMhqNS0tLpVLp/v4eIUSCr5K/BEIYj8fT6bTX6yUufxe1Wt3W1nZ1dSUIwvr6evUT362eXC5fXV0lC3NwcODz+cxmM4QwnU5vb28rFApSNI1G4/P5yNt2enpqMpk+rfQWp9NZqVTm5uZomuY4zmg0Njc3k6GxsbGZmRmEUCqVstvtgUDgt5Q2Nzd3d3fJ1+z29nZycjKRSBDfHR0dpDvU19dzHPfBClXVYd1ud7FYLJfLAACFQjE+Pt7U1AQAqFQqhUIBY/zy8tLf36/RaD7YNVV5IoRCIQihTqez2WzkvYEQsiybSCTkcnkikQiHw0NDQ5/2xPP8yclJqVQizw4A2NraqlQqnZ2d5+fn3d3dKpUqGo2Gw+FisWixWBiGicVix8fH7yX8qEG9dnSiBACgKKqmpobneYlEQlEUhBBCSO4UiUSkr39cmD/84T/gx/7LRVar9QeUrFYrYFn2Z85PAGPs8Xi+VWZxcfHv0yfGmGXZ7z7n/gVNwO4iifwWTgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(71)(
  /* script */
  __webpack_require__(413),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(455)
}
var Component = __webpack_require__(71)(
  /* script */
  __webpack_require__(414),
  /* template */
  __webpack_require__(471),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(71)(
  /* script */
  __webpack_require__(415),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
}]}

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('loading-screen', {
    attrs: {
      "is-loading": _vm.isLoading
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "sticky"
  }, [_c('b-navbar', {
    attrs: {
      "variant": "",
      "type": "light"
    }
  }, [_c('b-navbar-brand', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(462),
      "alt": "rdelogo"
    }
  })]), _vm._v(" "), _c('v-md-date-range-picker', {
    staticClass: "glyphicon glyphicon-calendar mx-auto date",
    on: {
      "change": _vm.requestData
    }
  })], 1), _vm._v(" "), _c('br')], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "background-color": "#F6F6F6"
    }
  }, [_vm._l((_vm.filterList), function(entry, index) {
    return _c('button', {
      key: index,
      class: 'btn text-white btn-' + _vm.applyStyle(entry) + ' custom',
      attrs: {
        "item": entry,
        "type": "button"
      },
      on: {
        "click": function($event) {
          _vm.filter = entry;
          _vm.active = index;
          _vm.value = {
            key: entry,
            metric: entry,
          };
          _vm.changeData();
          _vm.changeState(_vm.State, _vm.filter);
        }
      }
    }, [_vm._v("\n        " + _vm._s(_vm.getCase(entry)) + "\n       \n      ")])
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm._f("pluck")(_vm.Countydata, _vm.filter)))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('v-card', {
    attrs: {
      "height": "100%"
    }
  }, [_c('v-card-text', [_c('div', [_c('div', {
    attrs: {
      "align": "center"
    }
  }, [_c('strong', {
    class: ' p-3 text-' + _vm.applyStyle(_vm.filter),
    staticStyle: {}
  }, [_c('span', [_vm._v(_vm._s(_vm.getCase(_vm.filter)))])])])])])], 1), _vm._v(" "), _c('l-map', {
    staticStyle: {
      "height": "550px",
      "z-index": "1"
    },
    attrs: {
      "center": [41.158677, -73.925918],
      "zoom": 7,
      "options": _vm.mapOptions
    }
  }, [_c('l-choropleth-layer', {
    attrs: {
      "data": _vm.propertyComputed,
      "titleKey": "NAME",
      "idKey": "FIPS",
      "value": _vm.value,
      "geojsonIdKey": "GEO_ID",
      "geojson": _vm.Tristate,
      "colorScale": _vm.colorScale
    }
  }), _vm._v(" "), _c('l-choropleth-layer', {
    attrs: {
      "data": _vm.propertyComputed,
      "titleKey": "NAME",
      "idKey": "FIPS",
      "value": _vm.value,
      "geojsonIdKey": "GEO_ID",
      "geojson": _vm.Tristate1,
      "colorScale": _vm.colorScale
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('l-reference-chart', {
          attrs: {
            "title": "Covid-19 Dashboard",
            "colorScale": _vm.colorScale,
            "min": props.min,
            "max": props.max,
            "position": "topright"
          }
        }), _vm._v(" "), _c('l-info-control', {
          attrs: {
            "item": props.currentItem,
            "unit": props.unit,
            "title": "County",
            "placeholder": "Hover over a County"
          }
        })]
      }
    }])
  })], 1)], 2), _vm._v(" "), _c('v-container', [_c('v-layout', [_c('v-flex', {
    staticStyle: {
      "padding": "5px"
    },
    attrs: {
      "xs4": ""
    }
  }, [_c('v-card', {
    staticClass: "primary",
    attrs: {
      "height": "100%"
    }
  }, [_c('v-card-text', [_c('div', [_c('div', {
    staticClass: "font-weight-normal"
  }, [_c('strong', {
    staticStyle: {
      "color": "#ffc107"
    }
  }, [_vm._v("Total Confirmed Cases")])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.ConfirmedCases))])])])], 1)], 1), _vm._v(" "), _c('v-flex', {
    staticStyle: {
      "padding": "5px"
    },
    attrs: {
      "xs4": ""
    }
  }, [_c('v-card', {
    staticClass: "primary",
    attrs: {
      "height": "100%"
    }
  }, [_c('v-card-text', [_c('div', [_c('div', [_c('strong', {
    staticStyle: {
      "color": "#28a745"
    }
  }, [_vm._v("Total Recoveries")])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.Recovery))])])])], 1)], 1), _vm._v(" "), _c('v-flex', {
    staticStyle: {
      "padding": "5px"
    },
    attrs: {
      "xs4": ""
    }
  }, [_c('v-card', {
    attrs: {
      "height": "100%"
    }
  }, [_c('v-card-text', [_c('div', [_c('div', {
    staticClass: "font-weight-normal"
  }, [_c('strong', {
    staticStyle: {
      "color": "#dc3545"
    }
  }, [_vm._v("Total Deaths")])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.Deaths))])])])], 1)], 1)], 1)], 1), _vm._v(" "), _c('v-app', {
    attrs: {
      "id": "inspire"
    }
  }, [_c('br'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "block-buttons"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('b-button', {
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.viewTable();
      }
    }
  }, [_vm._v(" Table")]), _vm._v(" "), _c('b-button', {
    attrs: {
      "variant": "secondary"
    },
    on: {
      "click": function($event) {
        return _vm.viewCharts()
      }
    }
  }, [_vm._v(" Charts")])], 1)])]), _vm._v(" "), _c('div', [(_vm.showTable === true) ? _c('multiselect', {
    staticClass: "name-multiselect",
    attrs: {
      "tag-placeholder": "Add this as new tag",
      "placeholder": "Search or add a tag",
      "options": _vm.option,
      "multiple": true,
      "taggable": true
    },
    on: {
      "input": function($event) {
        return _vm.addTag(_vm.multiselectValue)
      },
      "remove": function($event) {
        return _vm.removeTag(_vm.multiselectValue)
      }
    },
    model: {
      value: (_vm.multiselectValue),
      callback: function($$v) {
        _vm.multiselectValue = $$v
      },
      expression: "multiselectValue"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('v-card', [(_vm.showTable === true) ? _c('v-card-title', [_vm._v("\n        Covid cases by County\n        "), _c('v-spacer')], 1) : _vm._e(), _vm._v(" "), (_vm.showTable === true) ? _c('v-btn', {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.createPDF
    }
  }, [_vm._v("Download as PDF")]) : _vm._e(), _vm._v(" "), (_vm.multiselectValueArray.length === 0 && _vm.showTable === true) ? _c('v-data-table', {
    ref: "myTable",
    attrs: {
      "data": _vm.Countydata,
      "headers": _vm.headers,
      "items": _vm.Countydata,
      "track-by": "County",
      "multiple": true
    }
  }) : _vm._e(), _vm._v(" "), (_vm.multiselectValueArray.length > 0 && _vm.showTable === true) ? _c('v-data-table', {
    ref: "myTable",
    attrs: {
      "data": _vm.multiselectValueArray,
      "headers": _vm.headers,
      "items": _vm.multiselectValueArray,
      "track-by": "County",
      "multiple": true
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), (_vm.showCharts === true) ? _c('v-card', [_c('v-card-text', [_vm._v("Select a State:")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "toolBtns"
    }
  }, [_c('div', {
    staticClass: "btn-group",
    attrs: {
      "role": "group",
      "id": "toolBtns"
    }
  }, [_c('button', {
    staticClass: "btn-state",
    class: {
      active: _vm.activeBtn === 'btn1'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.activeBtn = 'btn1';
        _vm.changeState('New Jersey', _vm.filter)
      }
    }
  }, [_vm._v("New Jersey")]), _vm._v(" "), _c('button', {
    staticClass: "btn-state",
    class: {
      active: _vm.activeBtn === 'btn2'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.activeBtn = 'btn2';
        _vm.changeState('New York', _vm.filter)
      }
    }
  }, [_vm._v("New York")]), _vm._v(" "), _c('button', {
    staticClass: "btn-state",
    class: {
      active: _vm.activeBtn === 'btn3'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.activeBtn = 'btn3';
        _vm.changeState('Connecticut', _vm.filter)
      }
    }
  }, [_vm._v("Connecticut")]), _vm._v(" "), _c('button', {
    staticClass: "btn-state",
    class: {
      active: _vm.activeBtn === 'btn4'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.activeBtn = 'btn4';
        _vm.changeState('Pennsylvania', _vm.filter)
      }
    }
  }, [_vm._v("Pennsylvania")])])])], 1) : _vm._e(), _vm._v(" "), (_vm.showCharts === true) ? _c('legend', {
    staticClass: "typo__label",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Bar Chart")]) : _vm._e(), _vm._v(" "), (_vm.showCharts === true) ? _c('bar-chart', {
    attrs: {
      "chartData": _vm.chartData
    }
  }) : _vm._e(), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), (_vm.showCharts === true) ? _c('legend', {
    staticClass: "typo__label",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Pie Chart")]) : _vm._e(), _vm._v(" "), (_vm.showCharts === true) ? _c('pie-chart', {
    attrs: {
      "chartData": _vm.chartData
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "date-container"
  }, [_c('v-container', [_c('v-row', {
    attrs: {
      "justify": "space-around"
    }
  }, [_c('v-card', {
    attrs: {
      "width": "300px"
    }
  }, [_c('strong', [_vm._v("Start:  " + _vm._s(_vm.beginDate) + " End: " + _vm._s(_vm.endDate))])])], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"GEO_ID":"34019","STATE":"34","COUNTY":"019","NAME":"Hunterdon","LSAD":"County","CENSUSAREA":427.819},"geometry":{"type":"Polygon","coordinates":[[[-75.19491,40.57877],[-75.195114,40.579689],[-75.194656,40.58194],[-75.190796,40.586838],[-75.190146,40.590359],[-75.190369,40.591642],[-75.184881,40.592703],[-75.180749,40.594556],[-75.179577,40.597981],[-75.175919,40.598421],[-75.174886,40.598926],[-75.173695,40.603205],[-75.172537,40.604894],[-75.169039,40.606293],[-75.168456,40.606646],[-75.1678,40.607164],[-75.166963,40.608012],[-75.16658,40.608563],[-75.16559,40.61039],[-75.164956,40.610783],[-75.163198,40.611058],[-75.162886,40.611384],[-75.161357,40.614675],[-75.161955,40.617467],[-75.161247,40.618053],[-75.156935,40.619591],[-75.154339,40.621666],[-75.149667,40.620501],[-75.147838,40.622396],[-75.147856,40.6264],[-75.145673,40.628745],[-75.135248,40.630419],[-75.130155,40.632409],[-75.127589,40.634337],[-75.123766,40.635544],[-75.114985,40.637134],[-75.109904,40.638937],[-75.109186,40.639528],[-75.108359,40.639754],[-75.108426,40.640262],[-75.108776,40.640832],[-75.108833,40.640992],[-75.108659,40.642546],[-75.105706,40.644891],[-75.102691,40.64548],[-75.101037,40.646742],[-75.095717,40.648369],[-75.094004,40.649586],[-75.091346,40.652606],[-75.089633,40.653734],[-75.088893,40.655401],[-75.08124,40.657974],[-75.079154,40.6599],[-75.076338,40.664013],[-75.071896,40.666334],[-75.069656,40.666855],[-75.067706,40.668748],[-75.065281,40.668795],[-75.062087,40.669743],[-75.060197,40.673032],[-75.056945,40.675241],[-75.0531,40.676234],[-75.048536,40.679626],[-75.04405,40.678715],[-75.04269,40.679211],[-75.039379,40.68268],[-75.037663,40.683627],[-75.034472,40.683584],[-75.029558,40.686422],[-75.022282,40.692099],[-75.019205,40.692055],[-75.016639,40.694491],[-75.014116,40.692776],[-75.009608,40.694849],[-75.006245,40.692912],[-75.004691,40.692991],[-75.003286,40.693498],[-74.999614,40.696928],[-74.991481,40.702822],[-74.983286,40.705381],[-74.982366,40.705478],[-74.981283,40.706198],[-74.979227,40.710883],[-74.972479,40.709936],[-74.969519,40.71016],[-74.968015,40.711652],[-74.967792,40.712144],[-74.965254,40.716383],[-74.96318,40.720969],[-74.959964,40.723098],[-74.958323,40.725427],[-74.952163,40.727541],[-74.946468,40.73475],[-74.941289,40.738624],[-74.940428,40.740914],[-74.937784,40.743327],[-74.931834,40.748566],[-74.930504,40.751563],[-74.928453,40.752216],[-74.926199,40.755187],[-74.92288,40.756447],[-74.919193,40.758959],[-74.918079,40.759596],[-74.917426,40.760722],[-74.915232,40.762432],[-74.91517,40.764144],[-74.911777,40.767229],[-74.907699,40.768777],[-74.905861,40.770307],[-74.902718,40.771836],[-74.903486,40.773413],[-74.903304,40.776386],[-74.902414,40.777421],[-74.904424,40.780711],[-74.899799,40.782914],[-74.895531,40.783992],[-74.89286,40.786241],[-74.889753,40.787832],[-74.869071,40.774373],[-74.848398,40.761331],[-74.844051,40.758545],[-74.842948,40.755963],[-74.829701,40.745791],[-74.827484,40.744072],[-74.824067,40.742445],[-74.82388,40.742358],[-74.823435,40.742266],[-74.823327,40.742287],[-74.816312,40.742694],[-74.813116,40.741982],[-74.813042,40.74114],[-74.808358,40.740979],[-74.803695,40.741733],[-74.798664,40.74165],[-74.798013,40.742189],[-74.793319,40.740187],[-74.774418,40.736714],[-74.76763,40.735396],[-74.752904,40.731026],[-74.742804,40.726085],[-74.742488,40.724104],[-74.732456,40.719928],[-74.725767,40.719255],[-74.724445,40.719482],[-74.724438,40.71948],[-74.724418,40.719455],[-74.723518,40.717207],[-74.720229,40.715132],[-74.721018,40.712762],[-74.720457,40.70923],[-74.719563,40.70768],[-74.719618,40.705983],[-74.717429,40.705358],[-74.716485,40.704063],[-74.717895,40.703312],[-74.71587,40.701356],[-74.715694,40.700365],[-74.716504,40.698709],[-74.719207,40.697635],[-74.720977,40.696072],[-74.721237,40.691422],[-74.722534,40.690027],[-74.723691,40.68751],[-74.717744,40.683988],[-74.71857,40.680345],[-74.720319,40.679648],[-74.72174,40.678012],[-74.721395,40.675699],[-74.722617,40.671354],[-74.722532,40.670077],[-74.726515,40.666949],[-74.728686,40.666622],[-74.73077,40.665297],[-74.728903,40.660711],[-74.727465,40.658576],[-74.722614,40.656544],[-74.720378,40.654303],[-74.719498,40.651807],[-74.723732,40.646911],[-74.723888,40.644118],[-74.722111,40.64186],[-74.722708,40.639125],[-74.727585,40.635894],[-74.726545,40.632508],[-74.725501,40.631736],[-74.721397,40.631485],[-74.719402,40.630912],[-74.716348,40.631587],[-74.713323,40.630629],[-74.711386,40.627483],[-74.711329,40.624869],[-74.703689,40.621296],[-74.711325,40.611411],[-74.713337,40.612261],[-74.715056,40.609974],[-74.721705,40.600579],[-74.718472,40.599616],[-74.720478,40.596246],[-74.724937,40.588755],[-74.720002,40.586961],[-74.712962,40.584231],[-74.722536,40.569484],[-74.724644,40.566108],[-74.728157,40.564295],[-74.730702,40.563584],[-74.733672,40.561139],[-74.73549,40.558934],[-74.742659,40.553898],[-74.743089,40.553257],[-74.746867,40.547625],[-74.748996,40.544449],[-74.749152,40.544217],[-74.751243,40.540953],[-74.761559,40.525019],[-74.774757,40.504177],[-74.775425,40.503488],[-74.776922,40.50348],[-74.780691,40.504489],[-74.785206,40.508393],[-74.785133,40.510098],[-74.787821,40.512307],[-74.797841,40.515557],[-74.782513,40.487775],[-74.772288,40.469005],[-74.752023,40.43138],[-74.748147,40.424156],[-74.787975,40.419213],[-74.808538,40.416655],[-74.802006,40.384921],[-74.81901,40.383236],[-74.830361,40.38208],[-74.869843,40.377845],[-74.867783,40.373178],[-74.856645,40.347588],[-74.856262,40.346695],[-74.932277,40.339427],[-74.941675,40.341425],[-74.942909,40.341683],[-74.942954,40.341643],[-74.943776,40.342564],[-74.945088,40.347332],[-74.945791,40.354966],[-74.946006,40.357306],[-74.948722,40.364768],[-74.948785,40.364911],[-74.953697,40.376081],[-74.953963,40.376576],[-74.963997,40.395246],[-74.965508,40.397337],[-74.966638,40.398009],[-74.969597,40.39977],[-74.982735,40.404432],[-74.985467,40.405935],[-74.9862,40.406541],[-74.988901,40.408773],[-74.996378,40.410528],[-74.998651,40.410093],[-75.003351,40.40785],[-75.017221,40.404638],[-75.024775,40.403455],[-75.028315,40.403883],[-75.036616,40.406796],[-75.041651,40.409894],[-75.043071,40.411603],[-75.043949,40.412168],[-75.046473,40.413792],[-75.056102,40.416066],[-75.058848,40.418065],[-75.061489,40.422848],[-75.062923,40.433407],[-75.067425,40.448323],[-75.070568,40.455165],[-75.070568,40.456348],[-75.067302,40.464954],[-75.06805,40.468578],[-75.067776,40.472827],[-75.064327,40.476795],[-75.064242,40.476981],[-75.062227,40.481391],[-75.061937,40.486362],[-75.062373,40.491689],[-75.065275,40.504682],[-75.066001,40.510716],[-75.065885,40.517577],[-75.065853,40.519495],[-75.06509,40.526148],[-75.066402,40.536532],[-75.066426,40.536619],[-75.067257,40.539584],[-75.068615,40.542223],[-75.078503,40.548296],[-75.087126,40.556371],[-75.0957,40.564401],[-75.100325,40.567811],[-75.101287,40.568071],[-75.110903,40.570671],[-75.117292,40.573211],[-75.122326,40.573863],[-75.136748,40.575731],[-75.141906,40.575273],[-75.147368,40.573152],[-75.158446,40.565286],[-75.162871,40.564096],[-75.168609,40.564111],[-75.175307,40.564996],[-75.183151,40.567354],[-75.186737,40.569406],[-75.192352,40.574257],[-75.194046,40.576256],[-75.19487,40.578591],[-75.19491,40.57877]]]}},{"type":"Feature","properties":{"GEO_ID":"42089","STATE":"42","COUNTY":"089","NAME":"Monroe","LSAD":"County","CENSUSAREA":608.286},"geometry":{"type":"Polygon","coordinates":[[[-75.600736,41.161497],[-75.505607,41.232539],[-75.359184,41.239206],[-75.129721,41.252101],[-75.156507,41.150341],[-74.980674,41.078178],[-75.026003,41.042687],[-75.036982,41.034702],[-75.051794,41.027142],[-75.069277,41.019348],[-75.091377,41.012283],[-75.109114,41.004102],[-75.130575,40.991093],[-75.135526,40.973807],[-75.131364,40.969277],[-75.120564,40.968313],[-75.300594,40.859563],[-75.474193,40.814746],[-75.57459,40.951323],[-75.49599,40.987181],[-75.649637,41.122344],[-75.634978,41.123192],[-75.615557,41.150001],[-75.603002,41.151914],[-75.600736,41.161497]]]}},{"type":"Feature","properties":{"GEO_ID":"33061","STATE":"36","COUNTY":"005","NAME":"New York City","LSAD":"County","CENSUSAREA":356.918},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.765543,40.855291],[-73.766321,40.857286],[-73.766333,40.857317],[-73.766383,40.857352],[-73.770552,40.86033],[-73.772405,40.859749],[-73.773361,40.859449],[-73.773717,40.854831],[-73.773038,40.848125],[-73.769648,40.84466],[-73.766032,40.844961],[-73.765128,40.854228],[-73.765543,40.855291]]],[[[-73.933408,40.882075],[-73.938081,40.874699],[-73.938154,40.874583],[-73.945726,40.862482],[-73.948281,40.858399],[-73.952013,40.851592],[-73.953982,40.848],[-73.955536,40.844437],[-73.957624,40.839648],[-73.958611,40.837382],[-73.959918,40.834385],[-73.961451,40.83087],[-73.96235,40.828808],[-73.963182,40.8269],[-73.963657,40.826298],[-73.965092,40.824483],[-73.965986,40.823352],[-73.967983,40.820826],[-73.968082,40.8207],[-73.971228,40.81633],[-73.975097,40.810955],[-73.977169,40.808076],[-73.978855,40.805734],[-73.980616,40.803287],[-73.982483,40.800694],[-73.984309,40.798158],[-73.986182,40.795555],[-73.988055,40.792954],[-73.989894,40.790398],[-73.991242,40.788526],[-73.994674,40.783759],[-73.995587,40.78249],[-73.997608,40.779682],[-74.000223,40.77605],[-74.004379,40.770277],[-74.008281,40.764855],[-74.009184,40.763601],[-74.009852,40.762585],[-74.013784,40.756601],[-74.016923,40.744107],[-74.017789,40.740664],[-74.018871,40.736355],[-74.019777,40.732751],[-74.020715,40.729015],[-74.021117,40.727417],[-74.021493,40.725445],[-74.022466,40.720339],[-74.023859,40.713028],[-74.024543,40.709436],[-74.019526,40.706985],[-74.019488,40.706912],[-74.019486,40.706907],[-74.01837,40.704782],[-74.018191,40.704441],[-74.018124,40.704314],[-74.018073,40.704218],[-74.017769,40.703639],[-74.0168,40.701794],[-74.016901,40.701414],[-74.017221,40.700216],[-74.01849,40.695457],[-74.021721,40.693504],[-74.024165,40.688393],[-74.024827,40.687007],[-74.024266,40.683923],[-74.023982,40.68236],[-74.022911,40.681267],[-74.020467,40.67877],[-74.018661,40.662519],[-74.018274,40.659036],[-74.018272,40.659019],[-74.024406,40.653443],[-74.026208,40.651805],[-74.032066,40.646479],[-74.033098,40.644932],[-74.033733,40.643979],[-74.035868,40.640776],[-74.038336,40.637074],[-74.038806,40.635667],[-74.039185,40.634528],[-74.039393,40.633905],[-74.041043,40.628954],[-74.041995,40.6261],[-74.042412,40.624847],[-74.04184,40.622434],[-74.041421,40.620665],[-74.040974,40.618776],[-74.040565,40.617048],[-74.040248,40.615711],[-74.039804,40.613834],[-74.039593,40.612945],[-74.03959,40.612934],[-74.036432,40.608942],[-74.032856,40.604421],[-74.020022,40.602295],[-74.015262,40.601507],[-74.012148,40.600991],[-74.01164,40.600907],[-74.010926,40.600789],[-74.009325,40.599734],[-74.007878,40.598782],[-74.005842,40.59744],[-74.004887,40.596811],[-74.004217,40.59637],[-74.003281,40.595754],[-74.002558,40.593583],[-74.001895,40.591595],[-74.001591,40.590684],[-74.00635,40.584767],[-74.007117,40.583814],[-74.007276,40.583616],[-74.011662,40.57944],[-74.012012,40.579106],[-74.012781,40.578374],[-74.012996,40.578169],[-74.012885,40.577755],[-74.012588,40.576642],[-74.012323,40.575653],[-74.012044,40.574609],[-74.012022,40.574528],[-74.011883,40.57445],[-74.010555,40.573703],[-74.00903,40.572846],[-74.002056,40.570623],[-74.002052,40.570623],[-73.999285,40.570552],[-73.999221,40.570551],[-73.997131,40.570497],[-73.996952,40.570493],[-73.995042,40.570444],[-73.994907,40.570441],[-73.99283,40.570388],[-73.992687,40.570384],[-73.991346,40.57035],[-73.990751,40.570393],[-73.990667,40.5704],[-73.977942,40.571328],[-73.977441,40.571365],[-73.975467,40.571509],[-73.975356,40.571517],[-73.95938,40.572682],[-73.95217,40.573208],[-73.95005,40.573363],[-73.947001,40.570783],[-73.946385,40.570262],[-73.944558,40.568716],[-73.938598,40.566161],[-73.935686,40.564914],[-73.934495,40.563041],[-73.932729,40.560266],[-73.933674,40.559552],[-73.934891,40.558632],[-73.937567,40.556608],[-73.940247,40.554582],[-73.940423,40.548623],[-73.940591,40.542896],[-73.921075,40.548588],[-73.899822,40.554787],[-73.878906,40.560888],[-73.878274,40.56112],[-73.863149,40.566665],[-73.862779,40.5668],[-73.859003,40.568184],[-73.858463,40.568383],[-73.856726,40.569019],[-73.843798,40.573759],[-73.835936,40.576641],[-73.834408,40.577201],[-73.821343,40.580716],[-73.806834,40.584619],[-73.80143,40.585659],[-73.796064,40.586692],[-73.795688,40.586764],[-73.788755,40.588098],[-73.787266,40.588385],[-73.783866,40.589039],[-73.777966,40.590174],[-73.775133,40.590719],[-73.774928,40.590759],[-73.774891,40.590759],[-73.770047,40.590714],[-73.767332,40.590689],[-73.765122,40.590669],[-73.763553,40.590654],[-73.753349,40.59056],[-73.754323,40.586357],[-73.752371,40.587965],[-73.747749,40.591503],[-73.74338,40.592847],[-73.743237,40.592839],[-73.737185,40.592965],[-73.73815,40.594229],[-73.73815,40.594539],[-73.738295,40.597991],[-73.738151,40.60271],[-73.740571,40.60488],[-73.741148,40.60546],[-73.744567,40.610117],[-73.745368,40.611204],[-73.745633,40.611756],[-73.745663,40.611812],[-73.745761,40.611992],[-73.746855,40.611574],[-73.746942,40.611775],[-73.747216,40.612179],[-73.747451,40.612072],[-73.747993,40.61231],[-73.74912,40.612036],[-73.750652,40.611453],[-73.753458,40.61052],[-73.755173,40.609984],[-73.755197,40.610594],[-73.759631,40.611297],[-73.760021,40.611349],[-73.763454,40.61369],[-73.763476,40.613706],[-73.765969,40.614927],[-73.766755,40.620435],[-73.766814,40.621082],[-73.766954,40.623172],[-73.766487,40.625687],[-73.746702,40.633387],[-73.74529,40.634128],[-73.744016,40.637698],[-73.741944,40.637906],[-73.741282,40.637152],[-73.74251,40.635435],[-73.742149,40.63484],[-73.739846,40.635812],[-73.740284,40.637175],[-73.741534,40.63923],[-73.741895,40.642093],[-73.740966,40.647861],[-73.735834,40.649302],[-73.734785,40.649696],[-73.734419,40.649746],[-73.7322,40.650048],[-73.728548,40.651081],[-73.725055,40.653509],[-73.726444,40.659162],[-73.727647,40.661058],[-73.727577,40.663855],[-73.727732,40.664549],[-73.72814,40.665002],[-73.728305,40.665917],[-73.728383,40.666427],[-73.728264,40.666606],[-73.728222,40.667314],[-73.728264,40.668073],[-73.728128,40.668708],[-73.727992,40.669427],[-73.727926,40.670097],[-73.727541,40.674207],[-73.727441,40.674429],[-73.726543,40.676487],[-73.726255,40.677349],[-73.726011,40.678078],[-73.725919,40.678693],[-73.72588,40.678954],[-73.725687,40.68025],[-73.725861,40.683223],[-73.725792,40.683574],[-73.725726,40.683908],[-73.725843,40.685248],[-73.725956,40.685682],[-73.725938,40.686892],[-73.726377,40.689442],[-73.726385,40.689571],[-73.726231,40.68966],[-73.726372,40.689714],[-73.726259,40.690269],[-73.726258,40.690611],[-73.726405,40.696863],[-73.725465,40.700403],[-73.725542,40.701125],[-73.72556,40.701396],[-73.725755,40.701992],[-73.72586,40.702604],[-73.725867,40.702741],[-73.725843,40.702841],[-73.725846,40.703015],[-73.725867,40.703205],[-73.725874,40.703611],[-73.725938,40.706029],[-73.726905,40.710017],[-73.726979,40.710812],[-73.728522,40.716784],[-73.729176,40.719167],[-73.729661,40.720483],[-73.730326,40.722157],[-73.728162,40.723084],[-73.725672,40.724038],[-73.724731,40.72431],[-73.724122,40.724475],[-73.722912,40.724794],[-73.721786,40.725089],[-73.721193,40.725267],[-73.720902,40.725342],[-73.71588,40.726542],[-73.714076,40.72676],[-73.712407,40.726978],[-73.711882,40.727047],[-73.7105,40.727227],[-73.709774,40.727381],[-73.707662,40.727831],[-73.70648,40.729711],[-73.705269,40.731513],[-73.704869,40.731997],[-73.704599,40.732502],[-73.703315,40.734563],[-73.70259,40.73551],[-73.702189,40.73611],[-73.702004,40.736522],[-73.701239,40.737427],[-73.700655,40.738319],[-73.700356,40.739172],[-73.700272,40.739242],[-73.700277,40.73972],[-73.700292,40.74105],[-73.700582,40.743184],[-73.700768,40.745014],[-73.700872,40.746866],[-73.700901,40.747129],[-73.701168,40.748865],[-73.701342,40.750767],[-73.701744,40.75253],[-73.702735,40.753251],[-73.70542,40.754606],[-73.707825,40.756216],[-73.713034,40.759566],[-73.713432,40.759761],[-73.714438,40.76045],[-73.720653,40.764477],[-73.720942,40.764794],[-73.727888,40.768898],[-73.728711,40.769468],[-73.72959,40.769985],[-73.733049,40.77196],[-73.73376,40.772469],[-73.737853,40.774879],[-73.738752,40.775497],[-73.738966,40.775518],[-73.739361,40.775868],[-73.739456,40.775952],[-73.74421,40.778705],[-73.74676,40.780382],[-73.746831,40.778995],[-73.749575,40.781898],[-73.750304,40.782532],[-73.750655,40.782711],[-73.750817,40.782887],[-73.756187,40.788703],[-73.764765,40.796844],[-73.768431,40.800704],[-73.775514,40.795645],[-73.776032,40.795275],[-73.781369,40.794907],[-73.782036,40.795771],[-73.785964,40.800862],[-73.7909,40.807261],[-73.79095,40.807326],[-73.797332,40.815597],[-73.7977,40.815748],[-73.799068,40.816309],[-73.802487,40.817712],[-73.803511,40.818132],[-73.803677,40.8182],[-73.804518,40.818546],[-73.807991,40.821758],[-73.810132,40.823738],[-73.811186,40.824713],[-73.811889,40.825363],[-73.812089,40.825707],[-73.813123,40.827489],[-73.814432,40.829743],[-73.815205,40.831075],[-73.815245,40.831507],[-73.815574,40.835129],[-73.815305,40.836258],[-73.813734,40.842858],[-73.81281,40.846737],[-73.809324,40.848371],[-73.806914,40.849501],[-73.800407,40.848199],[-73.800111,40.84814],[-73.799543,40.848027],[-73.797252,40.852196],[-73.794116,40.855259],[-73.793785,40.855583],[-73.792471,40.85579],[-73.792253,40.855825],[-73.789512,40.85139],[-73.78953,40.851332],[-73.789723,40.850722],[-73.789959,40.849976],[-73.790253,40.849049],[-73.790653,40.847784],[-73.79102,40.846625],[-73.791044,40.846552],[-73.788221,40.842036],[-73.787018,40.840317],[-73.786726,40.839901],[-73.785549,40.838218],[-73.785399,40.838004],[-73.783867,40.836795],[-73.783556,40.836989],[-73.782577,40.837601],[-73.781206,40.838891],[-73.781813,40.840897],[-73.782254,40.842359],[-73.782228,40.842735],[-73.782093,40.844616],[-73.782124,40.845661],[-73.782132,40.845939],[-73.78216,40.846886],[-73.782174,40.847358],[-73.783395,40.849458],[-73.7838,40.850153],[-73.784401,40.851185],[-73.784551,40.851443],[-73.784754,40.851793],[-73.78806,40.854131],[-73.788786,40.858485],[-73.78807,40.860795],[-73.785502,40.869079],[-73.785489,40.869261],[-73.785269,40.872226],[-73.784803,40.878528],[-73.783545,40.88104],[-73.783702,40.881078],[-73.792942,40.883411],[-73.804191,40.886348],[-73.819719,40.890206],[-73.822959,40.891056],[-73.823244,40.891199],[-73.82312,40.890648],[-73.823617,40.890413],[-73.823557,40.889865],[-73.824047,40.889866],[-73.824009,40.889978],[-73.825002,40.890178],[-73.827224,40.890785],[-73.830972,40.891935],[-73.831703,40.892178],[-73.832716,40.892443],[-73.833595,40.892706],[-73.835174,40.89317],[-73.836282,40.893531],[-73.837337,40.893814],[-73.838407,40.894061],[-73.838985,40.895602],[-73.839649,40.897891],[-73.840036,40.900567],[-73.840999,40.902812],[-73.841318,40.903987],[-73.842308,40.903988],[-73.843305,40.90408],[-73.844389,40.904096],[-73.844702,40.904177],[-73.844847,40.90531],[-73.84532,40.905582],[-73.846104,40.905777],[-73.847071,40.906173],[-73.848683,40.906743],[-73.851506,40.906645],[-73.852204,40.906878],[-73.852601,40.906977],[-73.85279,40.907073],[-73.851123,40.910009],[-73.852678,40.909899],[-73.854881,40.908217],[-73.854104,40.906679],[-73.856108,40.90606],[-73.856324,40.906166],[-73.858221,40.902335],[-73.860006,40.900565],[-73.862041,40.901203],[-73.862643,40.901474],[-73.86286,40.901525],[-73.864669,40.901793],[-73.865635,40.902086],[-73.866952,40.902475],[-73.867876,40.902983],[-73.872913,40.904467],[-73.874087,40.904807],[-73.877855,40.905922],[-73.878012,40.905965],[-73.878189,40.905983],[-73.87835,40.905983],[-73.879239,40.906365],[-73.880111,40.906591],[-73.880929,40.90683],[-73.881825,40.907134],[-73.882993,40.907423],[-73.884106,40.907501],[-73.884832,40.907723],[-73.885401,40.907977],[-73.88601,40.907979],[-73.886237,40.908052],[-73.887984,40.908593],[-73.891805,40.909778],[-73.891928,40.909809],[-73.892799,40.910058],[-73.896634,40.911324],[-73.897253,40.911655],[-73.899505,40.911978],[-73.900697,40.912381],[-73.902106,40.912879],[-73.902454,40.912979],[-73.905947,40.913948],[-73.910006,40.915076],[-73.910516,40.915282],[-73.917905,40.917577],[-73.918405,40.917477],[-73.919256,40.914858],[-73.919705,40.913478],[-73.929006,40.889578],[-73.929009,40.889573],[-73.933406,40.882078],[-73.933408,40.882075]]],[[[-74.04086,40.700117],[-74.04692,40.691139],[-74.047313,40.690466],[-74.046359,40.689175],[-74.044451,40.688445],[-74.043441,40.68968],[-74.037998,40.698995],[-74.039401,40.700454],[-74.040018,40.700678],[-74.04086,40.700117]]],[[[-74.138964,40.640302],[-74.140054,40.640192],[-74.140892,40.640107],[-74.142601,40.639935],[-74.143034,40.639891],[-74.152973,40.638886],[-74.154499,40.63918],[-74.154592,40.639198],[-74.156472,40.63956],[-74.157793,40.639814],[-74.160242,40.640286],[-74.161041,40.64044],[-74.164564,40.641118],[-74.167587,40.6417],[-74.168698,40.641914],[-74.169874,40.642141],[-74.170187,40.642201],[-74.171092,40.642876],[-74.171425,40.643124],[-74.172293,40.643772],[-74.173989,40.645038],[-74.174085,40.645109],[-74.180191,40.645521],[-74.182408,40.644702],[-74.183776,40.644197],[-74.18444,40.643952],[-74.18682,40.643073],[-74.1894,40.642121],[-74.191803,40.639827],[-74.194809,40.636957],[-74.196438,40.635402],[-74.198847,40.633102],[-74.200352,40.631665],[-74.20058,40.631448],[-74.200611,40.631152],[-74.201496,40.622572],[-74.201812,40.619507],[-74.200994,40.616906],[-74.200524,40.616835],[-74.196096,40.616169],[-74.195418,40.602031],[-74.195407,40.601806],[-74.19682,40.597037],[-74.204054,40.589336],[-74.204339,40.58815],[-74.206413,40.579519],[-74.208097,40.57251],[-74.210887,40.560902],[-74.211774,40.560044],[-74.213361,40.558508],[-74.216268,40.555696],[-74.216997,40.554991],[-74.217383,40.554993],[-74.229002,40.555041],[-74.236445,40.550432],[-74.236976,40.550104],[-74.247808,40.543396],[-74.247461,40.542703],[-74.245234,40.538261],[-74.243976,40.53575],[-74.241881,40.53157],[-74.241732,40.531273],[-74.242434,40.524978],[-74.242888,40.520903],[-74.242934,40.52087],[-74.252702,40.513895],[-74.256088,40.507903],[-74.256042,40.507733],[-74.255345,40.505129],[-74.255255,40.504794],[-74.254588,40.502303],[-74.251764,40.498709],[-74.250336,40.496891],[-74.250188,40.496703],[-74.250115,40.49669],[-74.246688,40.496103],[-74.242135,40.497862],[-74.236518,40.500032],[-74.23324,40.501299],[-74.228007,40.501806],[-74.221909,40.502397],[-74.219787,40.502603],[-74.210474,40.509448],[-74.210298,40.509486],[-74.209658,40.509624],[-74.199923,40.511729],[-74.199741,40.51182],[-74.196819,40.513285],[-74.193729,40.514834],[-74.182157,40.520634],[-74.179981,40.520096],[-74.17973,40.520034],[-74.177986,40.519603],[-74.177975,40.519608],[-74.176243,40.520334],[-74.170933,40.522563],[-74.168293,40.523671],[-74.164838,40.52512],[-74.160859,40.52679],[-74.15996,40.527359],[-74.159902,40.527396],[-74.156998,40.529234],[-74.14976,40.533816],[-74.148697,40.534489],[-74.148398,40.534536],[-74.148336,40.534546],[-74.145218,40.535036],[-74.145092,40.535056],[-74.144428,40.53516],[-74.142425,40.534482],[-74.14023,40.533738],[-74.140163,40.533656],[-74.137241,40.530076],[-74.129336,40.536481],[-74.121672,40.542691],[-74.112902,40.547432],[-74.112829,40.547471],[-74.112585,40.547603],[-74.112545,40.547578],[-74.111471,40.546908],[-74.107061,40.551079],[-74.105273,40.552771],[-74.103896,40.554073],[-74.099218,40.558498],[-74.098421,40.559251],[-74.096863,40.560725],[-74.094636,40.562832],[-74.094458,40.563],[-74.093293,40.564102],[-74.09087,40.566394],[-74.090797,40.566463],[-74.084395,40.571457],[-74.075791,40.578168],[-74.068184,40.584102],[-74.064078,40.58839],[-74.063387,40.589112],[-74.059184,40.593502],[-74.059179,40.59351],[-74.053125,40.603678],[-74.056888,40.608015],[-74.059614,40.611157],[-74.060279,40.611923],[-74.060345,40.611999],[-74.062561,40.615624],[-74.063145,40.616579],[-74.063518,40.61719],[-74.064782,40.619259],[-74.065301,40.620108],[-74.067598,40.623865],[-74.067736,40.625004],[-74.067753,40.625145],[-74.069322,40.638096],[-74.069354,40.638363],[-74.0697,40.641216],[-74.071506,40.643226],[-74.073511,40.645459],[-74.074821,40.646918],[-74.075308,40.64746],[-74.075884,40.648101],[-74.086485,40.648601],[-74.087305,40.648445],[-74.089931,40.647947],[-74.100072,40.646021],[-74.10147,40.645755],[-74.103535,40.645363],[-74.104734,40.645135],[-74.107422,40.644625],[-74.110691,40.644004],[-74.112294,40.6437],[-74.120186,40.642201],[-74.120568,40.642162],[-74.121039,40.642115],[-74.129277,40.641282],[-74.130923,40.641115],[-74.138964,40.640302]]]]}},{"type":"Feature","properties":{"GEO_ID":"36103","STATE":"36","COUNTY":"103","NAME":"Suffolk","LSAD":"County","CENSUSAREA":912.051},"geometry":{"type":"MultiPolygon","coordinates":[[[[-72.132225,41.104387],[-72.128352,41.108131],[-72.126704,41.115139],[-72.084207,41.101524],[-72.081167,41.09394],[-72.086975,41.058292],[-72.095711,41.05402],[-72.0972,41.054884],[-72.097136,41.075844],[-72.103152,41.086484],[-72.1064,41.088883],[-72.12056,41.093171],[-72.139233,41.092451],[-72.141921,41.094371],[-72.142929,41.097811],[-72.140737,41.100835],[-72.132225,41.104387]]],[[[-72.198601,41.164951],[-72.211479,41.17297],[-72.213036,41.178013],[-72.18898,41.189011],[-72.177689,41.187244],[-72.170074,41.188671],[-72.16217,41.192448],[-72.161034,41.188671],[-72.179596,41.182961],[-72.186729,41.17963],[-72.198601,41.164951]]],[[[-71.954316,41.284841],[-71.952864,41.285098],[-71.943563,41.286675],[-71.943561,41.286675],[-71.926802,41.290122],[-71.927194,41.28968],[-71.928558,41.288141],[-71.935062,41.280801],[-71.935259,41.280579],[-71.94627,41.276306],[-71.962598,41.270968],[-71.978926,41.265002],[-71.994717,41.256451],[-71.995425,41.256123],[-72.000204,41.253912],[-72.002461,41.252867],[-72.002679,41.252848],[-72.003072,41.252812],[-72.036846,41.249794],[-72.03683,41.249843],[-72.035259,41.254555],[-72.035017,41.25528],[-72.034958,41.255458],[-72.033738,41.257145],[-72.029438,41.26309],[-72.023422,41.270994],[-72.023396,41.271012],[-72.018926,41.274114],[-72.018862,41.274111],[-72.006872,41.27348],[-71.991117,41.281331],[-71.990246,41.281249],[-71.988377,41.281073],[-71.987917,41.28103],[-71.980291,41.280313],[-71.980061,41.280291],[-71.969839,41.282098],[-71.962799,41.283342],[-71.957867,41.284214],[-71.957361,41.284303],[-71.955492,41.284634],[-71.954316,41.284841]]],[[[-72.137409,41.023909],[-72.137409,41.023908],[-72.137407,41.023905],[-72.135091,41.021252],[-72.133223,41.019112],[-72.132516,41.018301],[-72.122963,41.007354],[-72.122727,41.007083],[-72.118083,41.001761],[-72.11664,41.000108],[-72.116368,40.999796],[-72.109043,40.994111],[-72.109008,40.994084],[-72.109007,40.994084],[-72.102516,40.991643],[-72.10216,40.991509],[-72.101681,40.991498],[-72.095717,40.991355],[-72.095456,40.991349],[-72.095049,40.991516],[-72.092195,40.992689],[-72.083053,40.996447],[-72.083039,40.996453],[-72.083025,40.996484],[-72.082823,40.996941],[-72.081959,40.998894],[-72.081895,40.999038],[-72.081304,41.000373],[-72.079951,41.003429],[-72.07995,41.003431],[-72.079208,41.006437],[-72.07621,41.009063],[-72.076175,41.009093],[-72.058568,41.020263],[-72.055424,41.022257],[-72.051478,41.02241],[-72.047468,41.022565],[-72.04615,41.022361],[-72.035792,41.020759],[-72.015013,41.028348],[-72.00842,41.033086],[-71.99926,41.039669],[-71.999227,41.039708],[-71.994565,41.045134],[-71.99281,41.047178],[-71.991409,41.048809],[-71.981098,41.048809],[-71.980033,41.044504],[-71.96704,41.047772],[-71.961763,41.053529],[-71.961078,41.054277],[-71.960355,41.059878],[-71.961417,41.06352],[-71.961533,41.063919],[-71.961563,41.064021],[-71.959984,41.069811],[-71.959595,41.071237],[-71.952876,41.073181],[-71.94437,41.075642],[-71.942078,41.076305],[-71.939946,41.076922],[-71.93825,41.077413],[-71.936858,41.077642],[-71.932146,41.078417],[-71.930017,41.078768],[-71.919385,41.080517],[-71.899256,41.080837],[-71.898439,41.080086],[-71.896121,41.077956],[-71.895496,41.077381],[-71.895253,41.077312],[-71.890293,41.075913],[-71.889543,41.075701],[-71.888701,41.075673],[-71.886972,41.075617],[-71.869558,41.075046],[-71.869376,41.075113],[-71.867048,41.07597],[-71.864473,41.076917],[-71.86447,41.076918],[-71.86033,41.074924],[-71.859018,41.074292],[-71.857494,41.073558],[-71.857416,41.073378],[-71.856215,41.0706],[-71.856214,41.070598],[-71.859342,41.06736],[-71.862525,41.064064],[-71.873895,41.052294],[-71.87391,41.052278],[-71.8826,41.048749],[-71.897753,41.042596],[-71.903736,41.040166],[-71.92928,41.035382],[-71.929844,41.035277],[-71.934979,41.034315],[-71.935689,41.034182],[-71.937302,41.033592],[-72.02654,41.00094],[-72.029357,40.999909],[-72.037221,40.997337],[-72.037771,40.997158],[-72.040314,40.996326],[-72.054078,40.991825],[-72.057816,40.990603],[-72.066126,40.987886],[-72.06855,40.987093],[-72.097922,40.977489],[-72.099464,40.976985],[-72.102824,40.975886],[-72.109868,40.973583],[-72.114448,40.972085],[-72.120472,40.969828],[-72.122672,40.969004],[-72.143347,40.961258],[-72.14734,40.959762],[-72.148743,40.959237],[-72.154786,40.956973],[-72.196562,40.941322],[-72.198098,40.940746],[-72.228378,40.929402],[-72.244995,40.923177],[-72.259255,40.917834],[-72.26094,40.917203],[-72.269433,40.914021],[-72.27403,40.912299],[-72.274346,40.91218],[-72.277029,40.911176],[-72.281278,40.909584],[-72.28281,40.909009],[-72.289753,40.906409],[-72.29,40.906316],[-72.290119,40.906271],[-72.290279,40.906211],[-72.31668,40.89632],[-72.328396,40.891931],[-72.352071,40.883062],[-72.352965,40.882727],[-72.367105,40.877429],[-72.372538,40.875394],[-72.373533,40.875021],[-72.375394,40.874324],[-72.387574,40.86976],[-72.395792,40.866682],[-72.39585,40.86666],[-72.396292,40.866518],[-72.403862,40.864075],[-72.409028,40.862409],[-72.428457,40.856141],[-72.431466,40.85517],[-72.433175,40.854619],[-72.434606,40.854157],[-72.459629,40.846085],[-72.459918,40.845991],[-72.467881,40.843422],[-72.469996,40.84274],[-72.469997,40.84274],[-72.470005,40.842737],[-72.471238,40.842386],[-72.476243,40.840959],[-72.4803,40.839803],[-72.506944,40.832207],[-72.512063,40.830748],[-72.519566,40.828609],[-72.540587,40.822617],[-72.547363,40.820685],[-72.548735,40.820294],[-72.563554,40.81607],[-72.566255,40.8153],[-72.570025,40.814225],[-72.573441,40.813251],[-72.574447,40.812981],[-72.592961,40.808005],[-72.614367,40.802253],[-72.625394,40.799289],[-72.64559,40.793862],[-72.67846,40.785028],[-72.680351,40.78452],[-72.695504,40.780448],[-72.718918,40.774156],[-72.720003,40.773865],[-72.726619,40.772087],[-72.728077,40.771695],[-72.745208,40.767091],[-72.753112,40.763571],[-72.757176,40.764371],[-72.768152,40.761587],[-72.783933,40.756832],[-72.807827,40.749634],[-72.863164,40.732962],[-72.872869,40.729782],[-72.877205,40.72836],[-72.877345,40.728314],[-72.886784,40.725221],[-72.893384,40.723058],[-72.909063,40.71792],[-72.921768,40.713756],[-72.921792,40.713748],[-72.923214,40.713282],[-72.93084,40.710411],[-72.976672,40.693156],[-72.990989,40.687766],[-72.997998,40.685128],[-72.99942,40.684592],[-73.003069,40.683219],[-73.005346,40.682361],[-73.006165,40.682053],[-73.006736,40.681838],[-73.008073,40.681335],[-73.009067,40.68096],[-73.012545,40.679651],[-73.024067,40.676044],[-73.049344,40.66813],[-73.054963,40.666371],[-73.056027,40.666125],[-73.056878,40.665928],[-73.059312,40.665365],[-73.091234,40.657984],[-73.09192,40.657826],[-73.124384,40.650319],[-73.128076,40.649466],[-73.132499,40.648443],[-73.136897,40.647426],[-73.141288,40.646411],[-73.145266,40.645491],[-73.20844,40.630884],[-73.23914,40.6251],[-73.262106,40.621476],[-73.264493,40.621437],[-73.306396,40.620756],[-73.30974,40.622532],[-73.314578,40.629274],[-73.319257,40.635795],[-73.319271,40.635793],[-73.335339,40.633151],[-73.351465,40.6305],[-73.35173,40.630415],[-73.378017,40.621978],[-73.391967,40.617501],[-73.392115,40.617465],[-73.423806,40.609869],[-73.425346,40.651818],[-73.425549,40.654611],[-73.425586,40.656291],[-73.423563,40.655943],[-73.424515,40.657824],[-73.424623,40.666182],[-73.423358,40.668743],[-73.42338,40.671493],[-73.424741,40.678888],[-73.424753,40.67904],[-73.424758,40.679052],[-73.424774,40.67909],[-73.424917,40.679983],[-73.424979,40.680203],[-73.42502,40.680506],[-73.42574,40.68441],[-73.426091,40.686345],[-73.427381,40.693213],[-73.427387,40.693268],[-73.42755,40.694676],[-73.428103,40.697513],[-73.42837,40.699215],[-73.428593,40.700329],[-73.428706,40.700861],[-73.429547,40.705215],[-73.429859,40.706347],[-73.429962,40.706699],[-73.431028,40.711367],[-73.431139,40.712731],[-73.431159,40.713875],[-73.431821,40.717969],[-73.432175,40.71974],[-73.432934,40.723539],[-73.433073,40.724293],[-73.433194,40.724884],[-73.434076,40.729476],[-73.435082,40.734791],[-73.435509,40.737134],[-73.435662,40.738096],[-73.436006,40.739458],[-73.436383,40.741275],[-73.436486,40.741779],[-73.436663,40.742281],[-73.436668,40.742305],[-73.437251,40.745694],[-73.4385,40.751311],[-73.440967,40.764399],[-73.444096,40.781606],[-73.444804,40.78548],[-73.444826,40.785811],[-73.448666,40.804419],[-73.448747,40.804901],[-73.448763,40.804999],[-73.449766,40.810398],[-73.451901,40.819685],[-73.452166,40.822398],[-73.453888,40.832317],[-73.454172,40.834097],[-73.454625,40.835001],[-73.454671,40.835908],[-73.455261,40.840872],[-73.457494,40.848712],[-73.463297,40.857965],[-73.46404,40.859499],[-73.464067,40.859554],[-73.462259,40.86671],[-73.46253,40.867295],[-73.463855,40.867312],[-73.467366,40.868098],[-73.473466,40.874498],[-73.476079,40.877111],[-73.477307,40.89925],[-73.480028,40.900974],[-73.483563,40.905569],[-73.485865,40.910215],[-73.487861,40.915768],[-73.488463,40.915173],[-73.490973,40.919471],[-73.497061,40.922801],[-73.496642,40.923476],[-73.491765,40.942097],[-73.485365,40.946397],[-73.484798,40.946065],[-73.48011,40.943319],[-73.478365,40.942297],[-73.47441,40.941056],[-73.463708,40.937697],[-73.460603,40.937375],[-73.456523,40.936953],[-73.445026,40.935763],[-73.437509,40.934985],[-73.436664,40.934897],[-73.429863,40.929797],[-73.429665,40.928203],[-73.429317,40.925388],[-73.428836,40.921506],[-73.425488,40.921319],[-73.406076,40.920235],[-73.406074,40.920235],[-73.40486,40.922132],[-73.402963,40.925097],[-73.403101,40.929818],[-73.40326,40.93527],[-73.403462,40.942194],[-73.403462,40.942197],[-73.403459,40.94221],[-73.402642,40.94592],[-73.402267,40.947619],[-73.401849,40.949519],[-73.401088,40.952971],[-73.400862,40.953997],[-73.399762,40.955197],[-73.398406,40.955217],[-73.395374,40.955261],[-73.394271,40.955277],[-73.392864,40.955297],[-73.392862,40.955297],[-73.392816,40.955253],[-73.374462,40.937597],[-73.371705,40.935683],[-73.365961,40.931697],[-73.365915,40.93168],[-73.352761,40.926697],[-73.349243,40.926013],[-73.348608,40.925889],[-73.345686,40.925321],[-73.345562,40.925297],[-73.345561,40.925297],[-73.344161,40.927297],[-73.344158,40.927297],[-73.344156,40.927298],[-73.331369,40.929595],[-73.33136,40.929597],[-73.327276,40.929023],[-73.322718,40.928383],[-73.319853,40.92798],[-73.312193,40.926904],[-73.311386,40.926791],[-73.301002,40.925332],[-73.295064,40.924498],[-73.295061,40.924497],[-73.295059,40.924497],[-73.295055,40.924496],[-73.280511,40.920211],[-73.256961,40.913274],[-73.248706,40.910842],[-73.246786,40.910277],[-73.240118,40.908312],[-73.23835,40.907791],[-73.237895,40.907657],[-73.236938,40.907375],[-73.231827,40.90587],[-73.229807,40.905275],[-73.229611,40.905217],[-73.229285,40.905121],[-73.174354,40.921388],[-73.171923,40.922108],[-73.149127,40.928859],[-73.148994,40.928898],[-73.148489,40.930031],[-73.146247,40.935064],[-73.146242,40.935074],[-73.146238,40.935129],[-73.145508,40.944792],[-73.144673,40.955842],[-73.153547,40.961123],[-73.154265,40.961551],[-73.154446,40.961658],[-73.154588,40.961846],[-73.15884,40.967473],[-73.159576,40.968448],[-73.137821,40.966825],[-73.137501,40.966801],[-73.137497,40.966801],[-73.118331,40.978071],[-73.110716,40.972206],[-73.110368,40.971938],[-73.11019,40.971945],[-73.095148,40.97253],[-73.081582,40.973058],[-73.08144,40.973017],[-73.076197,40.971512],[-73.075058,40.971185],[-73.072846,40.97055],[-73.065963,40.968575],[-73.058628,40.966469],[-73.058332,40.966385],[-73.050079,40.964016],[-73.04475,40.962486],[-73.044531,40.962423],[-73.044139,40.962311],[-73.043701,40.962185],[-73.043668,40.962209],[-73.043158,40.962571],[-73.042503,40.963036],[-73.040445,40.964498],[-73.039052,40.964561],[-73.035524,40.964719],[-73.027577,40.965076],[-73.02086,40.965378],[-73.00814,40.965949],[-73.005968,40.966047],[-72.998542,40.966381],[-72.995931,40.966498],[-72.995095,40.966491],[-72.98405,40.966395],[-72.98018,40.966362],[-72.974178,40.96631],[-72.959095,40.96618],[-72.956178,40.966155],[-72.955163,40.966146],[-72.954859,40.966119],[-72.942707,40.965037],[-72.937793,40.964599],[-72.924898,40.963451],[-72.914013,40.962482],[-72.913837,40.962466],[-72.913834,40.962466],[-72.903155,40.962673],[-72.902908,40.962678],[-72.901421,40.962707],[-72.898675,40.96276],[-72.889547,40.962937],[-72.88825,40.962962],[-72.886984,40.963101],[-72.886491,40.963155],[-72.883175,40.963519],[-72.869189,40.965056],[-72.866957,40.965301],[-72.865786,40.96543],[-72.865329,40.96548],[-72.863799,40.965648],[-72.859228,40.96615],[-72.842676,40.967968],[-72.839338,40.968335],[-72.830009,40.96936],[-72.826224,40.969776],[-72.826057,40.969794],[-72.810757,40.968475],[-72.789887,40.966675],[-72.786957,40.966422],[-72.786721,40.966402],[-72.782895,40.966072],[-72.779381,40.965769],[-72.774122,40.965316],[-72.774104,40.965314],[-72.7741,40.965317],[-72.760031,40.975334],[-72.755307,40.976397],[-72.714753,40.985522],[-72.714425,40.985596],[-72.713654,40.985724],[-72.713146,40.985809],[-72.689341,40.989776],[-72.670881,40.988046],[-72.665018,40.987496],[-72.66438,40.987561],[-72.635374,40.990536],[-72.592616,40.99656],[-72.585651,40.997541],[-72.585327,40.997587],[-72.584559,40.998047],[-72.583476,40.998695],[-72.582562,40.999242],[-72.566167,41.009053],[-72.565406,41.009508],[-72.565242,41.009728],[-72.560974,41.015444],[-72.54986,41.019841],[-72.549853,41.019844],[-72.549835,41.019855],[-72.541699,41.024974],[-72.524782,41.035617],[-72.521548,41.037652],[-72.521389,41.037704],[-72.520836,41.037886],[-72.518568,41.038633],[-72.51715,41.039099],[-72.516626,41.039272],[-72.513923,41.040161],[-72.504051,41.04341],[-72.494683,41.046493],[-72.481817,41.050727],[-72.477876,41.052024],[-72.477306,41.052212],[-72.477004,41.052483],[-72.474735,41.054514],[-72.461169,41.066662],[-72.460778,41.067012],[-72.46054,41.067304],[-72.450871,41.079194],[-72.445242,41.086116],[-72.445195,41.086119],[-72.439445,41.086507],[-72.418395,41.087925],[-72.417945,41.087955],[-72.417127,41.088281],[-72.415577,41.088899],[-72.412988,41.089932],[-72.406675,41.092449],[-72.405684,41.092844],[-72.399348,41.095371],[-72.397,41.096307],[-72.395132,41.098012],[-72.387656,41.104832],[-72.382175,41.109833],[-72.381474,41.110472],[-72.3808,41.111087],[-72.372373,41.118776],[-72.371888,41.119218],[-72.357828,41.132047],[-72.35706,41.132747],[-72.356087,41.133635],[-72.355171,41.133812],[-72.33351,41.137987],[-72.333351,41.138018],[-72.322381,41.140664],[-72.320281,41.141685],[-72.316343,41.143601],[-72.309177,41.147086],[-72.303047,41.150067],[-72.293428,41.154746],[-72.291125,41.155866],[-72.291109,41.155874],[-72.284556,41.157389],[-72.280309,41.158371],[-72.279054,41.158661],[-72.278789,41.158722],[-72.278693,41.158661],[-72.276526,41.157272],[-72.273314,41.155213],[-72.272997,41.15501],[-72.272657,41.15495],[-72.268457,41.154209],[-72.2681,41.154146],[-72.267871,41.154217],[-72.260767,41.156425],[-72.245586,41.161143],[-72.245348,41.161217],[-72.238217,41.159491],[-72.238211,41.15949],[-72.23775,41.156556],[-72.237731,41.156434],[-72.253572,41.137138],[-72.253654,41.137077],[-72.265123,41.128483],[-72.265124,41.128482],[-72.281641,41.120888],[-72.284079,41.119766],[-72.290444,41.11684],[-72.299946,41.112471],[-72.300374,41.112274],[-72.300044,41.132059],[-72.300254,41.132251],[-72.304215,41.135864],[-72.304569,41.136187],[-72.305395,41.136941],[-72.306381,41.13784],[-72.312734,41.138546],[-72.318146,41.137134],[-72.326432,41.132278],[-72.32663,41.132162],[-72.327095,41.131522],[-72.32728,41.131268],[-72.335271,41.120274],[-72.335269,41.12006],[-72.335214,41.112157],[-72.335177,41.106917],[-72.335176,41.106916],[-72.320289,41.091764],[-72.317403,41.088827],[-72.317238,41.088659],[-72.316546,41.088389],[-72.316398,41.088331],[-72.302606,41.082949],[-72.297934,41.081126],[-72.297718,41.081042],[-72.291071,41.080797],[-72.281252,41.080434],[-72.28048,41.080406],[-72.280373,41.080402],[-72.280169,41.080197],[-72.276815,41.076828],[-72.276709,41.076722],[-72.276822,41.076566],[-72.279734,41.072529],[-72.282383,41.068858],[-72.283093,41.067874],[-72.281907,41.065821],[-72.279515,41.061677],[-72.278866,41.060554],[-72.27366,41.051538],[-72.273657,41.051533],[-72.265291,41.045506],[-72.265278,41.045496],[-72.260515,41.042065],[-72.260487,41.042069],[-72.260148,41.042117],[-72.241252,41.04477],[-72.241239,41.04477],[-72.229364,41.044355],[-72.221142,41.041765],[-72.219452,41.041233],[-72.217476,41.040611],[-72.216953,41.040332],[-72.216711,41.040203],[-72.202142,41.032426],[-72.201859,41.032275],[-72.201332,41.032289],[-72.190563,41.032579],[-72.187602,41.033813],[-72.187595,41.033815],[-72.187571,41.033826],[-72.187183,41.033987],[-72.183266,41.035619],[-72.182891,41.035898],[-72.179529,41.038406],[-72.17949,41.038435],[-72.179422,41.038549],[-72.177741,41.041362],[-72.176211,41.043923],[-72.175117,41.045754],[-72.174882,41.046147],[-72.174718,41.046244],[-72.174705,41.046251],[-72.167065,41.050739],[-72.16682,41.050883],[-72.162898,41.053187],[-72.160492,41.053796],[-72.16037,41.053827],[-72.158411,41.053235],[-72.157801,41.053051],[-72.153857,41.051859],[-72.153695,41.05174],[-72.153174,41.051357],[-72.142225,41.043307],[-72.137528,41.039854],[-72.137297,41.039684],[-72.13713,41.039036],[-72.135775,41.033765],[-72.135137,41.031284],[-72.135198,41.031087],[-72.136131,41.028058],[-72.136725,41.02613],[-72.137409,41.023909]]]]}},{"type":"Feature","properties":{"GEO_ID":"42103","STATE":"42","COUNTY":"103","NAME":"Pike","LSAD":"County","CENSUSAREA":544.961},"geometry":{"type":"Polygon","coordinates":[[[-74.966759,41.093425],[-74.968389,41.087797],[-74.980674,41.078178],[-75.156507,41.150341],[-75.129721,41.252101],[-75.359184,41.239206],[-75.311143,41.331439],[-75.050074,41.606893],[-75.04049,41.569688],[-74.984226,41.506299],[-74.93976,41.483371],[-74.912517,41.475605],[-74.891948,41.448853],[-74.876721,41.440338],[-74.799165,41.430451],[-74.75595,41.426804],[-74.752562,41.426518],[-74.691129,41.367324],[-74.689767,41.361558],[-74.694914,41.357423],[-74.76173,41.336398],[-74.795847,41.318951],[-74.830057,41.2872],[-74.838366,41.277286],[-74.861678,41.241575],[-74.867267,41.228861],[-74.864356,41.224854],[-74.867287,41.208754],[-74.882139,41.180836],[-74.923169,41.138146],[-74.974338,41.103912],[-74.969434,41.096074],[-74.967389,41.094049],[-74.966759,41.093425]]]}},{"type":"Feature","properties":{"GEO_ID":"09001","STATE":"09","COUNTY":"001","NAME":"Fairfield","LSAD":"County","CENSUSAREA":624.89},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.383784,41.060921],[-73.385735,41.05925],[-73.422165,41.047562],[-73.40361,41.062687],[-73.383662,41.076878],[-73.367859,41.08812],[-73.352051,41.08812],[-73.383784,41.060921]]],[[[-73.540537,41.283038],[-73.548875,41.292944],[-73.550961,41.295422],[-73.549053,41.306853],[-73.548929,41.307598],[-73.549574,41.315931],[-73.548973,41.326297],[-73.548584,41.329966],[-73.544728,41.366375],[-73.543425,41.376622],[-73.543415,41.376754],[-73.542444,41.389401],[-73.541224,41.405278],[-73.541169,41.405994],[-73.537673,41.433905],[-73.537469,41.43589],[-73.537275,41.437911],[-73.537102,41.439707],[-73.536969,41.441094],[-73.536067,41.451331],[-73.535986,41.45306],[-73.535894,41.455035],[-73.535885,41.455236],[-73.535857,41.455709],[-73.535769,41.457159],[-73.535295,41.463496],[-73.53476,41.470664],[-73.534369,41.475894],[-73.534269,41.476394],[-73.534269,41.476911],[-73.53415,41.47806],[-73.534055,41.478968],[-73.533969,41.479693],[-73.532404,41.498742],[-73.530637,41.520252],[-73.530067,41.527194],[-73.525726,41.571718],[-73.521041,41.619773],[-73.520017,41.641197],[-73.518238,41.666734],[-73.514784,41.665886],[-73.510379,41.666498],[-73.506923,41.665802],[-73.506737,41.663773],[-73.503952,41.661773],[-73.498288,41.658861],[-73.494864,41.661214],[-73.493648,41.660862],[-73.491888,41.656014],[-73.49032,41.653278],[-73.484686,41.64743],[-73.486728,41.647053],[-73.488074,41.645648],[-73.490029,41.646414],[-73.493766,41.644694],[-73.496362,41.642328],[-73.496841,41.63847],[-73.49781,41.638145],[-73.488723,41.617886],[-73.479791,41.600798],[-73.474005,41.588341],[-73.455163,41.547195],[-73.454017,41.542687],[-73.450564,41.535093],[-73.44593,41.525254],[-73.445086,41.522574],[-73.442766,41.514094],[-73.445266,41.509494],[-73.444566,41.508894],[-73.44226,41.49561],[-73.441466,41.491294],[-73.440094,41.492179],[-73.439497,41.492529],[-73.430765,41.497994],[-73.419085,41.501438],[-73.417593,41.50204],[-73.414965,41.503394],[-73.414559,41.503496],[-73.402671,41.508998],[-73.386964,41.514794],[-73.385064,41.512494],[-73.384964,41.510994],[-73.387464,41.509094],[-73.388564,41.506494],[-73.387064,41.505194],[-73.381964,41.503594],[-73.378964,41.501894],[-73.376764,41.498994],[-73.375263,41.489194],[-73.364103,41.485282],[-73.358862,41.482094],[-73.35065,41.479791],[-73.347663,41.478095],[-73.340062,41.476695],[-73.336662,41.475695],[-73.331569,41.472677],[-73.326774,41.469515],[-73.312873,41.467415],[-73.310473,41.468815],[-73.305033,41.471151],[-73.302761,41.471439],[-73.300601,41.470847],[-73.298265,41.467631],[-73.298313,41.464767],[-73.299833,41.460783],[-73.29986,41.458434],[-73.300793,41.455903],[-73.300073,41.452479],[-73.298403,41.448916],[-73.294707,41.447369],[-73.291263,41.448108],[-73.287798,41.450315],[-73.283195,41.451612],[-73.278253,41.452635],[-73.273696,41.451645],[-73.270243,41.448005],[-73.267493,41.443581],[-73.265788,41.436803],[-73.264524,41.435072],[-73.262265,41.43396],[-73.259205,41.433329],[-73.25695,41.433852],[-73.25119,41.437772],[-73.248078,41.438964],[-73.245259,41.439895],[-73.244334,41.439558],[-73.242344,41.436072],[-73.242289,41.429841],[-73.238411,41.426253],[-73.236771,41.426187],[-73.226479,41.430309],[-73.218235,41.42907],[-73.211835,41.42277],[-73.207688,41.420544],[-73.201557,41.415796],[-73.199757,41.413196],[-73.196757,41.411396],[-73.190257,41.410296],[-73.186557,41.408596],[-73.184857,41.406296],[-73.185357,41.402196],[-73.187557,41.399596],[-73.187957,41.397296],[-73.183269,41.391711],[-73.181168,41.389611],[-73.173356,41.383596],[-73.171441,41.383948],[-73.166556,41.383196],[-73.161253,41.383853],[-73.157977,41.382959],[-73.158832,41.379684],[-73.157055,41.376696],[-73.150955,41.370196],[-73.147555,41.367696],[-73.139555,41.361196],[-73.138155,41.353896],[-73.136054,41.351196],[-73.126154,41.346596],[-73.124654,41.345296],[-73.123527,41.343699],[-73.122854,41.341396],[-73.120854,41.338496],[-73.115754,41.332196],[-73.114754,41.331596],[-73.096853,41.322596],[-73.09324,41.321007],[-73.090938,41.319256],[-73.088309,41.316438],[-73.086604,41.314469],[-73.085259,41.3137],[-73.082052,41.313096],[-73.078952,41.311596],[-73.077652,41.307696],[-73.075352,41.305596],[-73.067851,41.300996],[-73.065051,41.297596],[-73.065251,41.294896],[-73.068751,41.289196],[-73.071251,41.287296],[-73.075451,41.285749],[-73.078852,41.284496],[-73.08153,41.282856],[-73.083752,41.281496],[-73.086852,41.276596],[-73.088682,41.271737],[-73.086752,41.254596],[-73.08735,41.251792],[-73.091215,41.246411],[-73.093403,41.244615],[-73.101573,41.240088],[-73.104952,41.236595],[-73.109953,41.229396],[-73.110453,41.225296],[-73.108353,41.218296],[-73.110253,41.213996],[-73.110653,41.207797],[-73.109553,41.205297],[-73.109653,41.201997],[-73.110572,41.20027],[-73.113077,41.19672],[-73.115353,41.193497],[-73.116233,41.192586],[-73.121366,41.187444],[-73.122453,41.182897],[-73.121997,41.178927],[-73.119853,41.175697],[-73.112152,41.171397],[-73.107987,41.168738],[-73.108632,41.166271],[-73.110352,41.159697],[-73.109952,41.156997],[-73.108352,41.153718],[-73.111052,41.150797],[-73.113134,41.150363],[-73.130253,41.146797],[-73.137628,41.149341],[-73.16437,41.158565],[-73.170074,41.160532],[-73.170701,41.164945],[-73.175855,41.166221],[-73.177774,41.166697],[-73.181593,41.165377],[-73.184667,41.164314],[-73.202656,41.158096],[-73.220273,41.14745],[-73.228295,41.142602],[-73.234841,41.143951],[-73.235058,41.143996],[-73.235745,41.143058],[-73.238885,41.138775],[-73.245209,41.130147],[-73.246268,41.128702],[-73.247958,41.126396],[-73.262358,41.117496],[-73.267173,41.119548],[-73.286319,41.127709],[-73.286759,41.127896],[-73.296359,41.125696],[-73.298396,41.124461],[-73.311453,41.116543],[-73.31186,41.116296],[-73.319328,41.113794],[-73.33066,41.109996],[-73.330954,41.109954],[-73.34722,41.107619],[-73.370311,41.104305],[-73.372296,41.10402],[-73.383316,41.094965],[-73.392162,41.087696],[-73.393894,41.087393],[-73.400154,41.086299],[-73.401721,41.084787],[-73.41367,41.073258],[-73.420543,41.067938],[-73.435063,41.056696],[-73.446844,41.057004],[-73.449626,41.057077],[-73.450364,41.057096],[-73.450669,41.056998],[-73.45334,41.056139],[-73.453659,41.056036],[-73.45399,41.05593],[-73.461722,41.053443],[-73.468239,41.051347],[-73.477364,41.035997],[-73.479367,41.037524],[-73.488688,41.044635],[-73.493327,41.048173],[-73.495708,41.04722],[-73.500808,41.045179],[-73.503108,41.044259],[-73.503986,41.043907],[-73.506934,41.042727],[-73.51685,41.038759],[-73.516903,41.038738],[-73.516903,41.038679],[-73.516774,41.030035],[-73.516766,41.029497],[-73.518809,41.025965],[-73.520665,41.022756],[-73.522666,41.019297],[-73.528866,41.016397],[-73.529219,41.017242],[-73.531169,41.021919],[-73.530189,41.028776],[-73.532786,41.03167],[-73.53441,41.031829],[-73.535338,41.03192],[-73.537614,41.030852],[-73.539502,41.029965],[-73.551494,41.024336],[-73.552871,41.023345],[-73.561968,41.016797],[-73.563946,41.01475],[-73.567668,41.010897],[-73.570068,41.001597],[-73.583968,41.000897],[-73.58487,41.009419],[-73.584988,41.010537],[-73.595699,41.015995],[-73.596742,41.015876],[-73.603952,41.015054],[-73.617952,41.010491],[-73.619008,41.010146],[-73.621063,41.009476],[-73.641974,41.002661],[-73.643478,41.002171],[-73.644158,41.001558],[-73.644631,41.001131],[-73.651175,40.995229],[-73.651869,40.994096],[-73.65205,40.993801],[-73.653507,40.991423],[-73.653722,40.991071],[-73.65683,40.985997],[-73.657336,40.985171],[-73.659671,40.987909],[-73.658772,40.993497],[-73.659372,40.999497],[-73.657452,41.003639],[-73.656666,41.005334],[-73.655571,41.007697],[-73.654977,41.010338],[-73.654671,41.011697],[-73.654794,41.01189],[-73.655097,41.012366],[-73.655359,41.012779],[-73.655371,41.012797],[-73.656157,41.013626],[-73.662672,41.020497],[-73.666554,41.025275],[-73.670472,41.030097],[-73.672243,41.032278],[-73.675857,41.036728],[-73.679973,41.041797],[-73.687173,41.050697],[-73.68951,41.053527],[-73.694273,41.059296],[-73.716875,41.087596],[-73.722575,41.093596],[-73.727775,41.100696],[-73.696006,41.115408],[-73.668433,41.128176],[-73.660555,41.131824],[-73.639672,41.141495],[-73.634433,41.143882],[-73.632153,41.144921],[-73.59707,41.16071],[-73.586174,41.165614],[-73.579154,41.168773],[-73.564941,41.17517],[-73.564759,41.175254],[-73.55465,41.179927],[-73.535927,41.188583],[-73.514617,41.198434],[-73.509487,41.200814],[-73.509183,41.20095],[-73.503947,41.203286],[-73.495936,41.206859],[-73.484911,41.211778],[-73.482709,41.21276],[-73.502553,41.237211],[-73.517427,41.25554],[-73.518384,41.256719],[-73.538344,41.280432],[-73.540537,41.283038]]]]}},{"type":"Feature","properties":{"GEO_ID":"09005","STATE":"09","COUNTY":"005","NAME":"Litchfield","LSAD":"County","CENSUSAREA":920.56},"geometry":{"type":"Polygon","coordinates":[[[-73.506923,41.665802],[-73.510379,41.666498],[-73.514784,41.665886],[-73.518238,41.666734],[-73.516785,41.687581],[-73.516591,41.689712],[-73.515991,41.696286],[-73.511921,41.740941],[-73.511907,41.741209],[-73.510961,41.758749],[-73.50796,41.791527],[-73.505008,41.823773],[-73.504944,41.824285],[-73.501984,41.858717],[-73.50091,41.868578],[-73.498304,41.892508],[-73.496565,41.921747],[-73.496527,41.92238],[-73.493485,41.953339],[-73.492975,41.958524],[-73.489615,42.000092],[-73.487314,42.049638],[-73.432812,42.050587],[-73.426174,42.050414],[-73.340638,42.048187],[-73.325627,42.047796],[-73.29442,42.046984],[-73.293097,42.04694],[-73.232959,42.045006],[-73.231056,42.044945],[-73.229798,42.044877],[-73.127276,42.041964],[-73.053254,42.039861],[-73.008745,42.03886],[-73.029537,41.966606],[-73.001401,41.968372],[-72.957767,41.970548],[-72.88706,41.973121],[-72.902244,41.931995],[-72.902968,41.931361],[-72.905945,41.921696],[-72.906645,41.920196],[-72.915346,41.896797],[-72.940647,41.895196],[-72.942409,41.890014],[-72.943894,41.884815],[-72.946178,41.877234],[-72.946342,41.874027],[-72.95364,41.853919],[-72.953651,41.84668],[-72.951569,41.842758],[-72.946526,41.843628],[-72.941689,41.843327],[-72.939095,41.842506],[-72.936348,41.839798],[-72.939559,41.83169],[-72.949024,41.806431],[-72.98414,41.802082],[-73.016936,41.798183],[-73.012912,41.778803],[-73.012711,41.777117],[-73.012534,41.77541],[-73.011886,41.773848],[-73.011728,41.772666],[-73.009995,41.764694],[-73.009057,41.761428],[-72.99895,41.714398],[-72.99855,41.712498],[-72.99585,41.699597],[-72.993549,41.690197],[-72.99354,41.690123],[-72.99325,41.687798],[-72.991372,41.679889],[-72.989473,41.66958],[-72.989283,41.66873],[-72.988928,41.66646],[-72.987636,41.660433],[-72.985842,41.652076],[-72.98555,41.649399],[-72.98325,41.639598],[-73.003146,41.629083],[-73.004046,41.628577],[-73.007022,41.628325],[-73.021471,41.627104],[-73.01865,41.614097],[-73.034777,41.615134],[-73.035751,41.615197],[-73.050362,41.609748],[-73.058024,41.60674],[-73.059469,41.606179],[-73.058946,41.602721],[-73.0607,41.600811],[-73.06015,41.593484],[-73.057424,41.589324],[-73.05801,41.588647],[-73.061116,41.588404],[-73.064209,41.588491],[-73.074402,41.587749],[-73.080346,41.586732],[-73.080401,41.586711],[-73.082955,41.585616],[-73.085145,41.582108],[-73.086345,41.580395],[-73.086755,41.579592],[-73.088816,41.576101],[-73.089406,41.575211],[-73.092353,41.570496],[-73.093853,41.570196],[-73.098529,41.568976],[-73.130878,41.560917],[-73.145036,41.557822],[-73.164676,41.557088],[-73.162523,41.547083],[-73.15786,41.525047],[-73.156309,41.518716],[-73.15573,41.515279],[-73.155812,41.514208],[-73.204197,41.508527],[-73.20684,41.508803],[-73.219724,41.510225],[-73.235127,41.512114],[-73.242247,41.512952],[-73.242765,41.512985],[-73.252265,41.512134],[-73.318889,41.505189],[-73.320874,41.503615],[-73.321578,41.500415],[-73.323114,41.497903],[-73.325514,41.495311],[-73.326794,41.493039],[-73.324874,41.489695],[-73.32705,41.484879],[-73.326458,41.483839],[-73.322666,41.480767],[-73.320906,41.477007],[-73.312777,41.469935],[-73.310473,41.468815],[-73.312873,41.467415],[-73.326774,41.469515],[-73.331569,41.472677],[-73.336662,41.475695],[-73.340062,41.476695],[-73.347663,41.478095],[-73.35065,41.479791],[-73.358862,41.482094],[-73.364103,41.485282],[-73.375263,41.489194],[-73.376764,41.498994],[-73.378964,41.501894],[-73.381964,41.503594],[-73.387064,41.505194],[-73.388564,41.506494],[-73.387464,41.509094],[-73.384964,41.510994],[-73.385064,41.512494],[-73.386964,41.514794],[-73.402671,41.508998],[-73.414559,41.503496],[-73.414965,41.503394],[-73.417593,41.50204],[-73.419085,41.501438],[-73.430765,41.497994],[-73.439497,41.492529],[-73.440094,41.492179],[-73.441466,41.491294],[-73.44226,41.49561],[-73.444566,41.508894],[-73.445266,41.509494],[-73.442766,41.514094],[-73.445086,41.522574],[-73.44593,41.525254],[-73.450564,41.535093],[-73.454017,41.542687],[-73.455163,41.547195],[-73.474005,41.588341],[-73.479791,41.600798],[-73.488723,41.617886],[-73.49781,41.638145],[-73.496841,41.63847],[-73.496362,41.642328],[-73.493766,41.644694],[-73.490029,41.646414],[-73.488074,41.645648],[-73.486728,41.647053],[-73.484686,41.64743],[-73.49032,41.653278],[-73.491888,41.656014],[-73.493648,41.660862],[-73.494864,41.661214],[-73.498288,41.658861],[-73.503952,41.661773],[-73.506737,41.663773],[-73.506923,41.665802]]]}},{"type":"Feature","properties":{"GEO_ID":"09009","STATE":"09","COUNTY":"009","NAME":"New Haven","LSAD":"County","CENSUSAREA":604.506},"geometry":{"type":"Polygon","coordinates":[[[-72.881461,41.242598],[-72.895445,41.243697],[-72.900803,41.245864],[-72.904345,41.247297],[-72.905245,41.248297],[-72.903045,41.252797],[-72.902808,41.252894],[-72.896615,41.255431],[-72.894745,41.256197],[-72.89473,41.25626],[-72.893845,41.259897],[-72.89637,41.263949],[-72.903129,41.274794],[-72.907962,41.282549],[-72.9082,41.282932],[-72.911529,41.282585],[-72.915234,41.282199],[-72.916827,41.282033],[-72.917037,41.281905],[-72.920062,41.280056],[-72.92061,41.272261],[-72.920658,41.271574],[-72.920714,41.27078],[-72.920846,41.268897],[-72.930945,41.2618],[-72.931887,41.261139],[-72.933472,41.260024],[-72.935646,41.258497],[-72.956984,41.25292],[-72.959633,41.252228],[-72.960028,41.252125],[-72.961345,41.25178],[-72.962047,41.251597],[-72.965197,41.249241],[-72.969834,41.245773],[-72.975715,41.241374],[-72.979039,41.238888],[-72.980716,41.237633],[-72.983751,41.235364],[-72.985095,41.234358],[-72.986247,41.233497],[-72.992563,41.227667],[-72.996089,41.224413],[-72.997948,41.222697],[-72.999282,41.22096],[-72.999415,41.220787],[-73.003474,41.215502],[-73.003639,41.215287],[-73.007548,41.210197],[-73.013465,41.205479],[-73.013988,41.205062],[-73.014948,41.204297],[-73.020149,41.204097],[-73.020167,41.204237],[-73.020195,41.204446],[-73.02021,41.204568],[-73.020239,41.204788],[-73.020254,41.204906],[-73.020449,41.206397],[-73.022549,41.207197],[-73.023027,41.207248],[-73.024783,41.207435],[-73.03522,41.20855],[-73.045602,41.209658],[-73.05065,41.210197],[-73.054947,41.208468],[-73.05935,41.206697],[-73.074501,41.197138],[-73.075028,41.196805],[-73.07761,41.195176],[-73.07945,41.194015],[-73.09122,41.184153],[-73.092,41.1835],[-73.092147,41.183377],[-73.104328,41.17317],[-73.105483,41.172203],[-73.105493,41.172194],[-73.107987,41.168738],[-73.112152,41.171397],[-73.119853,41.175697],[-73.121997,41.178927],[-73.122453,41.182897],[-73.121366,41.187444],[-73.116233,41.192586],[-73.115353,41.193497],[-73.113077,41.19672],[-73.110572,41.20027],[-73.109653,41.201997],[-73.109553,41.205297],[-73.110653,41.207797],[-73.110253,41.213996],[-73.108353,41.218296],[-73.110453,41.225296],[-73.109953,41.229396],[-73.104952,41.236595],[-73.101573,41.240088],[-73.093403,41.244615],[-73.091215,41.246411],[-73.08735,41.251792],[-73.086752,41.254596],[-73.088682,41.271737],[-73.086852,41.276596],[-73.083752,41.281496],[-73.08153,41.282856],[-73.078852,41.284496],[-73.075451,41.285749],[-73.071251,41.287296],[-73.068751,41.289196],[-73.065251,41.294896],[-73.065051,41.297596],[-73.067851,41.300996],[-73.075352,41.305596],[-73.077652,41.307696],[-73.078952,41.311596],[-73.082052,41.313096],[-73.085259,41.3137],[-73.086604,41.314469],[-73.088309,41.316438],[-73.090938,41.319256],[-73.09324,41.321007],[-73.096853,41.322596],[-73.114754,41.331596],[-73.115754,41.332196],[-73.120854,41.338496],[-73.122854,41.341396],[-73.123527,41.343699],[-73.124654,41.345296],[-73.126154,41.346596],[-73.136054,41.351196],[-73.138155,41.353896],[-73.139555,41.361196],[-73.147555,41.367696],[-73.150955,41.370196],[-73.157055,41.376696],[-73.158832,41.379684],[-73.157977,41.382959],[-73.161253,41.383853],[-73.166556,41.383196],[-73.171441,41.383948],[-73.173356,41.383596],[-73.181168,41.389611],[-73.183269,41.391711],[-73.187957,41.397296],[-73.187557,41.399596],[-73.185357,41.402196],[-73.184857,41.406296],[-73.186557,41.408596],[-73.190257,41.410296],[-73.196757,41.411396],[-73.199757,41.413196],[-73.201557,41.415796],[-73.207688,41.420544],[-73.211835,41.42277],[-73.218235,41.42907],[-73.226479,41.430309],[-73.236771,41.426187],[-73.238411,41.426253],[-73.242289,41.429841],[-73.242344,41.436072],[-73.244334,41.439558],[-73.245259,41.439895],[-73.248078,41.438964],[-73.25119,41.437772],[-73.25695,41.433852],[-73.259205,41.433329],[-73.262265,41.43396],[-73.264524,41.435072],[-73.265788,41.436803],[-73.267493,41.443581],[-73.270243,41.448005],[-73.273696,41.451645],[-73.278253,41.452635],[-73.283195,41.451612],[-73.287798,41.450315],[-73.291263,41.448108],[-73.294707,41.447369],[-73.298403,41.448916],[-73.300073,41.452479],[-73.300793,41.455903],[-73.29986,41.458434],[-73.299833,41.460783],[-73.298313,41.464767],[-73.298265,41.467631],[-73.300601,41.470847],[-73.302761,41.471439],[-73.305033,41.471151],[-73.310473,41.468815],[-73.312777,41.469935],[-73.320906,41.477007],[-73.322666,41.480767],[-73.326458,41.483839],[-73.32705,41.484879],[-73.324874,41.489695],[-73.326794,41.493039],[-73.325514,41.495311],[-73.323114,41.497903],[-73.321578,41.500415],[-73.320874,41.503615],[-73.318889,41.505189],[-73.252265,41.512134],[-73.242765,41.512985],[-73.242247,41.512952],[-73.235127,41.512114],[-73.219724,41.510225],[-73.20684,41.508803],[-73.204197,41.508527],[-73.155812,41.514208],[-73.15573,41.515279],[-73.156309,41.518716],[-73.15786,41.525047],[-73.162523,41.547083],[-73.164676,41.557088],[-73.145036,41.557822],[-73.130878,41.560917],[-73.098529,41.568976],[-73.093853,41.570196],[-73.092353,41.570496],[-73.089406,41.575211],[-73.088816,41.576101],[-73.086755,41.579592],[-73.086345,41.580395],[-73.085145,41.582108],[-73.082955,41.585616],[-73.080401,41.586711],[-73.080346,41.586732],[-73.074402,41.587749],[-73.064209,41.588491],[-73.061116,41.588404],[-73.05801,41.588647],[-73.057424,41.589324],[-73.06015,41.593484],[-73.0607,41.600811],[-73.058946,41.602721],[-73.059469,41.606179],[-73.058024,41.60674],[-73.050362,41.609748],[-73.035751,41.615197],[-73.034777,41.615134],[-73.01865,41.614097],[-73.021471,41.627104],[-73.007022,41.628325],[-73.004046,41.628577],[-73.003146,41.629083],[-72.98325,41.639598],[-72.963931,41.641318],[-72.960209,41.641969],[-72.950518,41.642902],[-72.948448,41.643197],[-72.947752,41.643222],[-72.938501,41.644311],[-72.93499,41.617692],[-72.933644,41.607794],[-72.93376,41.607108],[-72.935847,41.598197],[-72.941099,41.577487],[-72.942615,41.571126],[-72.945512,41.55958],[-72.94635,41.556797],[-72.90347,41.561708],[-72.903213,41.561747],[-72.883885,41.563812],[-72.879256,41.563152],[-72.879748,41.562454],[-72.876233,41.560385],[-72.873956,41.559154],[-72.871916,41.554873],[-72.869514,41.554531],[-72.868202,41.548847],[-72.854669,41.546527],[-72.852707,41.546291],[-72.849831,41.54533],[-72.844147,41.544697],[-72.845149,41.547411],[-72.845731,41.553346],[-72.848541,41.567329],[-72.840244,41.569098],[-72.827644,41.570999],[-72.829644,41.562397],[-72.825743,41.564298],[-72.826141,41.555897],[-72.821243,41.554195],[-72.819145,41.554298],[-72.810242,41.562397],[-72.80996,41.562284],[-72.809243,41.561997],[-72.805243,41.566598],[-72.801243,41.573098],[-72.779721,41.575936],[-72.767821,41.577339],[-72.752181,41.578894],[-72.75024,41.559177],[-72.748991,41.546308],[-72.748942,41.546099],[-72.748931,41.545673],[-72.748878,41.544279],[-72.747242,41.528659],[-72.747246,41.528218],[-72.747142,41.527899],[-72.747056,41.527289],[-72.744742,41.497698],[-72.74333,41.483114],[-72.733886,41.485368],[-72.735437,41.473273],[-72.73912,41.438294],[-72.740259,41.436442],[-72.746141,41.423297],[-72.745017,41.423521],[-72.73801,41.424669],[-72.72064,41.427397],[-72.708343,41.429443],[-72.705525,41.43008],[-72.690555,41.432569],[-72.682539,41.433797],[-72.678739,41.433797],[-72.671092,41.435364],[-72.666833,41.435694],[-72.654193,41.438256],[-72.653672,41.438125],[-72.654563,41.43626],[-72.650908,41.435031],[-72.648419,41.435036],[-72.649693,41.431297],[-72.644458,41.43051],[-72.642599,41.429004],[-72.648789,41.421998],[-72.650482,41.419119],[-72.649067,41.417383],[-72.646875,41.415744],[-72.645073,41.415802],[-72.641634,41.413736],[-72.637801,41.41232],[-72.636983,41.412735],[-72.632033,41.412138],[-72.632269,41.408122],[-72.630587,41.406943],[-72.63083,41.403589],[-72.629017,41.401232],[-72.625027,41.399092],[-72.625909,41.397165],[-72.622458,41.393594],[-72.61801,41.391656],[-72.616032,41.388742],[-72.61246,41.385916],[-72.613837,41.384398],[-72.614006,41.38078],[-72.612616,41.377994],[-72.60884,41.373513],[-72.609241,41.370529],[-72.608132,41.367404],[-72.61014,41.367148],[-72.609346,41.365357],[-72.609746,41.363368],[-72.612233,41.362674],[-72.612563,41.357205],[-72.612655,41.353834],[-72.611605,41.352327],[-72.612834,41.350219],[-72.611836,41.349006],[-72.611119,41.344451],[-72.611213,41.343233],[-72.612705,41.342414],[-72.612689,41.340866],[-72.614405,41.337002],[-72.613604,41.336223],[-72.614963,41.333588],[-72.613919,41.329428],[-72.61223,41.329335],[-72.611518,41.327506],[-72.608399,41.328181],[-72.600567,41.325837],[-72.597005,41.328545],[-72.595708,41.328035],[-72.592866,41.324065],[-72.591804,41.322778],[-72.589445,41.322663],[-72.587341,41.324326],[-72.585841,41.323888],[-72.585318,41.318618],[-72.589415,41.315133],[-72.587062,41.313706],[-72.584903,41.313955],[-72.588574,41.3117],[-72.585657,41.309852],[-72.585181,41.307099],[-72.582502,41.306386],[-72.581287,41.305511],[-72.581498,41.303884],[-72.579875,41.304002],[-72.57634,41.302425],[-72.575953,41.300921],[-72.570702,41.298004],[-72.570146,41.294419],[-72.567559,41.294174],[-72.565628,41.292393],[-72.564528,41.289997],[-72.564628,41.289519],[-72.561132,41.2875],[-72.557434,41.283695],[-72.557236,41.281992],[-72.554894,41.280587],[-72.551128,41.280583],[-72.548894,41.281855],[-72.545986,41.280335],[-72.548046,41.277415],[-72.546253,41.275977],[-72.544339,41.273697],[-72.547035,41.2716],[-72.54636,41.267398],[-72.547655,41.264323],[-72.547235,41.262499],[-72.545837,41.260304],[-72.537776,41.255646],[-72.546833,41.250718],[-72.547235,41.250499],[-72.570655,41.267744],[-72.571076,41.268054],[-72.571136,41.268098],[-72.583336,41.271698],[-72.585173,41.271323],[-72.585181,41.271321],[-72.585934,41.271168],[-72.586674,41.271017],[-72.587926,41.270761],[-72.589818,41.270375],[-72.590967,41.270141],[-72.598036,41.268698],[-72.607863,41.270387],[-72.610236,41.270795],[-72.617237,41.271998],[-72.617521,41.27194],[-72.617983,41.271845],[-72.619215,41.271591],[-72.631363,41.269092],[-72.641001,41.267108],[-72.641538,41.266998],[-72.642811,41.266884],[-72.650697,41.266178],[-72.653838,41.265897],[-72.653931,41.265931],[-72.654715,41.266219],[-72.662203,41.268964],[-72.662838,41.269197],[-72.667176,41.268192],[-72.671673,41.267151],[-72.672339,41.266997],[-72.674319,41.26552],[-72.684939,41.257597],[-72.685139,41.255499],[-72.685414,41.252607],[-72.685539,41.251297],[-72.689446,41.247629],[-72.690237,41.246887],[-72.690439,41.246697],[-72.693441,41.245493],[-72.694744,41.24497],[-72.69547,41.244948],[-72.701806,41.244752],[-72.706236,41.244615],[-72.707212,41.244585],[-72.708658,41.24454],[-72.708963,41.24453],[-72.709193,41.244523],[-72.710595,41.24448],[-72.710821,41.244812],[-72.713674,41.249007],[-72.711208,41.251018],[-72.71222,41.253566],[-72.712229,41.253586],[-72.71246,41.254167],[-72.722439,41.259138],[-72.732813,41.254727],[-72.73898,41.258202],[-72.754444,41.266913],[-72.757477,41.266913],[-72.786142,41.264796],[-72.786155,41.264791],[-72.787651,41.264215],[-72.789608,41.263461],[-72.799009,41.259841],[-72.803669,41.258047],[-72.818737,41.252244],[-72.819372,41.254061],[-72.825887,41.256398],[-72.826883,41.256755],[-72.847767,41.25669],[-72.848585,41.256306],[-72.85021,41.255544],[-72.854055,41.24774],[-72.859772,41.245824],[-72.861344,41.245297],[-72.881115,41.242641],[-72.881384,41.242605],[-72.881445,41.242597],[-72.881461,41.242598]]]}},{"type":"Feature","properties":{"GEO_ID":"36027","STATE":"36","COUNTY":"027","NAME":"Dutchess","LSAD":"County","CENSUSAREA":795.63},"geometry":{"type":"Polygon","coordinates":[[[-73.52135,41.616604],[-73.527421,41.554335],[-73.530067,41.527194],[-73.560811,41.526637],[-73.580153,41.526382],[-73.603169,41.523993],[-73.604342,41.523874],[-73.6205,41.521994],[-73.621968,41.521831],[-73.638376,41.519546],[-73.641868,41.519046],[-73.644727,41.518716],[-73.645669,41.518579],[-73.647635,41.518293],[-73.673285,41.514701],[-73.681501,41.51362],[-73.683849,41.513306],[-73.686079,41.513001],[-73.715337,41.510049],[-73.742474,41.507547],[-73.764844,41.505179],[-73.77068,41.504413],[-73.79553,41.502271],[-73.800061,41.501762],[-73.813274,41.500574],[-73.814518,41.500457],[-73.820807,41.499814],[-73.835786,41.498431],[-73.837062,41.498263],[-73.838363,41.498126],[-73.855419,41.496349],[-73.85636,41.496224],[-73.859995,41.495741],[-73.87458,41.495073],[-73.897755,41.49277],[-73.901886,41.492386],[-73.902722,41.492315],[-73.907533,41.490975],[-73.918758,41.489783],[-73.933775,41.488279],[-73.93852,41.483434],[-73.975855,41.444885],[-73.977924,41.442757],[-73.978588,41.442119],[-73.981486,41.438905],[-73.986583,41.444893],[-73.994832,41.450268],[-73.997784,41.452193],[-74.000108,41.456549],[-73.998898,41.462984],[-73.997584,41.475093],[-73.998584,41.483393],[-73.997609,41.487212],[-73.995029,41.497332],[-73.994784,41.498293],[-73.995546,41.499437],[-73.997075,41.50172],[-73.997884,41.505685],[-73.99725,41.509769],[-73.997184,41.513393],[-73.997484,41.516493],[-73.997182,41.51938],[-73.995686,41.524649],[-73.994964,41.52638],[-73.994547,41.527138],[-73.992949,41.529821],[-73.987866,41.542789],[-73.984618,41.547216],[-73.982805,41.549195],[-73.979933,41.55235],[-73.977889,41.555234],[-73.974532,41.558652],[-73.972707,41.560356],[-73.969176,41.562925],[-73.964781,41.565311],[-73.959467,41.571443],[-73.956831,41.576656],[-73.954725,41.58179],[-73.954146,41.583271],[-73.953307,41.589977],[-73.953282,41.590193],[-73.952582,41.595293],[-73.952274,41.609154],[-73.952082,41.613993],[-73.952582,41.625193],[-73.951482,41.627693],[-73.950644,41.632639],[-73.948782,41.642193],[-73.948982,41.644793],[-73.948182,41.652493],[-73.946882,41.656393],[-73.947218,41.660088],[-73.947382,41.667493],[-73.947033,41.668826],[-73.945182,41.675893],[-73.943282,41.679393],[-73.942482,41.684093],[-73.943482,41.690293],[-73.945782,41.695593],[-73.946682,41.699396],[-73.946078,41.702826],[-73.945672,41.705663],[-73.944971,41.710582],[-73.944435,41.714634],[-73.942301,41.725789],[-73.94208,41.727036],[-73.941081,41.732693],[-73.941081,41.735993],[-73.941741,41.739021],[-73.941503,41.743004],[-73.940989,41.755741],[-73.943514,41.759979],[-73.946589,41.763677],[-73.950686,41.768829],[-73.951614,41.770621],[-73.952446,41.787965],[-73.951982,41.790477],[-73.952014,41.791581],[-73.949597,41.800125],[-73.949357,41.811341],[-73.948452,41.816642],[-73.949741,41.821212],[-73.948685,41.828332],[-73.949789,41.836972],[-73.949373,41.843916],[-73.948477,41.8507],[-73.946589,41.854236],[-73.941933,41.859244],[-73.940973,41.860668],[-73.939389,41.865852],[-73.940317,41.872748],[-73.941885,41.8763],[-73.946301,41.883004],[-73.954301,41.891436],[-73.955213,41.892908],[-73.960829,41.899052],[-73.961835,41.900508],[-73.962781,41.90582],[-73.964189,41.910156],[-73.964237,41.913916],[-73.961101,41.918316],[-73.958301,41.920332],[-73.957938,41.92198],[-73.957421,41.926572],[-73.955597,41.936188],[-73.954205,41.950812],[-73.953709,41.952748],[-73.952829,41.957067],[-73.950877,41.962428],[-73.950076,41.965756],[-73.947212,41.973372],[-73.945845,41.977646],[-73.945068,41.979708],[-73.944636,41.981276],[-73.943615,41.984884],[-73.943336,41.985534],[-73.942012,41.991291],[-73.940412,41.994347],[-73.939964,41.999403],[-73.936796,42.006651],[-73.934315,42.012779],[-73.933435,42.015659],[-73.933323,42.018491],[-73.934639,42.023304],[-73.937035,42.026827],[-73.937171,42.030268],[-73.936699,42.034699],[-73.934171,42.039547],[-73.934395,42.044747],[-73.932763,42.055034],[-73.932877,42.059943],[-73.932282,42.061578],[-73.928234,42.064874],[-73.928314,42.066778],[-73.92729,42.066858],[-73.926346,42.072506],[-73.929754,42.075306],[-73.929688,42.078422],[-73.929626,42.078778],[-73.92144,42.077299],[-73.917098,42.076474],[-73.915593,42.080906],[-73.908633,42.07841],[-73.907785,42.07961],[-73.895994,42.075438],[-73.895522,42.075263],[-73.870878,42.066245],[-73.867712,42.065206],[-73.844999,42.056687],[-73.818533,42.046739],[-73.817443,42.046345],[-73.817151,42.046252],[-73.806755,42.042559],[-73.790893,42.036808],[-73.755669,42.023483],[-73.736256,42.015707],[-73.733797,42.014725],[-73.71093,42.005488],[-73.676078,42.000435],[-73.672323,42.000091],[-73.657333,41.997577],[-73.642191,41.995016],[-73.556048,41.981756],[-73.541823,41.979886],[-73.539639,41.979696],[-73.533414,41.978834],[-73.530893,41.978487],[-73.527072,41.97798],[-73.524706,42.014],[-73.524317,42.018254],[-73.523584,42.026267],[-73.521416,42.049966],[-73.496879,42.049675],[-73.487314,42.049638],[-73.488224,42.030047],[-73.489615,42.000092],[-73.492975,41.958524],[-73.492998,41.958294],[-73.496527,41.92238],[-73.498304,41.892508],[-73.499459,41.881899],[-73.500911,41.868571],[-73.501984,41.858717],[-73.504944,41.824285],[-73.504992,41.8239],[-73.505008,41.823773],[-73.510961,41.758749],[-73.511545,41.747917],[-73.511921,41.740941],[-73.516785,41.687581],[-73.51795,41.670861],[-73.519784,41.644542],[-73.520017,41.641197],[-73.521041,41.619773],[-73.52135,41.616604]]]}},{"type":"Feature","properties":{"GEO_ID":"36059","STATE":"36","COUNTY":"059","NAME":"Nassau","LSAD":"County","CENSUSAREA":284.716},"geometry":{"type":"Polygon","coordinates":[[[-73.423806,40.609869],[-73.450369,40.603501],[-73.476396,40.5989],[-73.484915,40.597394],[-73.484917,40.597394],[-73.49364,40.595111],[-73.511517,40.590432],[-73.528252,40.586052],[-73.549195,40.58057],[-73.571912,40.574625],[-73.574425,40.573967],[-73.575357,40.573723],[-73.57528,40.574666],[-73.574418,40.585276],[-73.574412,40.585353],[-73.574409,40.58539],[-73.574411,40.585391],[-73.576,40.585613],[-73.577955,40.585888],[-73.579697,40.586132],[-73.583167,40.586618],[-73.583773,40.586703],[-73.595708,40.587143],[-73.610873,40.587703],[-73.628039,40.585354],[-73.637435,40.584068],[-73.640804,40.583607],[-73.646608,40.582813],[-73.646674,40.582804],[-73.649503,40.582846],[-73.652391,40.582889],[-73.655372,40.582933],[-73.658162,40.582974],[-73.662301,40.583035],[-73.677841,40.583265],[-73.678312,40.583272],[-73.68118,40.583315],[-73.686917,40.5834],[-73.690311,40.58345],[-73.692553,40.583483],[-73.693673,40.5835],[-73.697067,40.58355],[-73.701138,40.58361],[-73.706143,40.583684],[-73.717839,40.583857],[-73.739399,40.584176],[-73.754776,40.584404],[-73.754323,40.586357],[-73.752371,40.587965],[-73.747749,40.591503],[-73.74338,40.592847],[-73.743237,40.592839],[-73.737185,40.592965],[-73.73815,40.594229],[-73.73815,40.594539],[-73.738295,40.597991],[-73.738151,40.60271],[-73.740571,40.60488],[-73.741148,40.60546],[-73.744567,40.610117],[-73.745368,40.611204],[-73.745633,40.611756],[-73.745663,40.611812],[-73.745761,40.611992],[-73.746855,40.611574],[-73.746942,40.611775],[-73.747216,40.612179],[-73.747451,40.612072],[-73.747993,40.61231],[-73.74912,40.612036],[-73.750652,40.611453],[-73.753458,40.61052],[-73.755173,40.609984],[-73.755197,40.610594],[-73.759631,40.611297],[-73.760021,40.611349],[-73.763454,40.61369],[-73.763476,40.613706],[-73.765969,40.614927],[-73.766755,40.620435],[-73.766814,40.621082],[-73.766954,40.623172],[-73.766487,40.625687],[-73.746702,40.633387],[-73.74529,40.634128],[-73.744016,40.637698],[-73.741944,40.637906],[-73.741282,40.637152],[-73.74251,40.635435],[-73.742149,40.63484],[-73.739846,40.635812],[-73.740284,40.637175],[-73.741534,40.63923],[-73.741895,40.642093],[-73.740966,40.647861],[-73.735834,40.649302],[-73.734785,40.649696],[-73.734419,40.649746],[-73.7322,40.650048],[-73.728548,40.651081],[-73.725055,40.653509],[-73.726444,40.659162],[-73.727647,40.661058],[-73.727577,40.663855],[-73.727732,40.664549],[-73.72814,40.665002],[-73.728305,40.665917],[-73.728383,40.666427],[-73.728264,40.666606],[-73.728222,40.667314],[-73.728264,40.668073],[-73.728128,40.668708],[-73.727992,40.669427],[-73.727926,40.670097],[-73.727541,40.674207],[-73.727441,40.674429],[-73.726543,40.676487],[-73.726255,40.677349],[-73.726011,40.678078],[-73.725919,40.678693],[-73.72588,40.678954],[-73.725687,40.68025],[-73.725861,40.683223],[-73.725792,40.683574],[-73.725726,40.683908],[-73.725843,40.685248],[-73.725956,40.685682],[-73.725938,40.686892],[-73.726377,40.689442],[-73.726385,40.689571],[-73.726231,40.68966],[-73.726372,40.689714],[-73.726259,40.690269],[-73.726258,40.690611],[-73.726405,40.696863],[-73.725465,40.700403],[-73.725542,40.701125],[-73.72556,40.701396],[-73.725755,40.701992],[-73.72586,40.702604],[-73.725867,40.702741],[-73.725843,40.702841],[-73.725846,40.703015],[-73.725867,40.703205],[-73.725874,40.703611],[-73.725938,40.706029],[-73.726905,40.710017],[-73.726979,40.710812],[-73.728522,40.716784],[-73.729176,40.719167],[-73.729661,40.720483],[-73.730326,40.722157],[-73.728162,40.723084],[-73.725672,40.724038],[-73.724731,40.72431],[-73.724122,40.724475],[-73.722912,40.724794],[-73.721786,40.725089],[-73.721193,40.725267],[-73.720902,40.725342],[-73.71588,40.726542],[-73.714076,40.72676],[-73.712407,40.726978],[-73.711882,40.727047],[-73.7105,40.727227],[-73.709774,40.727381],[-73.707662,40.727831],[-73.70648,40.729711],[-73.705269,40.731513],[-73.704869,40.731997],[-73.704599,40.732502],[-73.703315,40.734563],[-73.70259,40.73551],[-73.702189,40.73611],[-73.702004,40.736522],[-73.701239,40.737427],[-73.700655,40.738319],[-73.700356,40.739172],[-73.700272,40.739242],[-73.700277,40.73972],[-73.700292,40.74105],[-73.700582,40.743184],[-73.700768,40.745014],[-73.700872,40.746866],[-73.700901,40.747129],[-73.701168,40.748865],[-73.701342,40.750767],[-73.701744,40.75253],[-73.702735,40.753251],[-73.70542,40.754606],[-73.707825,40.756216],[-73.713034,40.759566],[-73.713432,40.759761],[-73.714438,40.76045],[-73.720653,40.764477],[-73.720942,40.764794],[-73.727888,40.768898],[-73.728711,40.769468],[-73.72959,40.769985],[-73.733049,40.77196],[-73.73376,40.772469],[-73.737853,40.774879],[-73.738752,40.775497],[-73.738966,40.775518],[-73.739361,40.775868],[-73.739456,40.775952],[-73.74421,40.778705],[-73.74676,40.780382],[-73.746831,40.778995],[-73.749575,40.781898],[-73.750304,40.782532],[-73.750655,40.782711],[-73.750817,40.782887],[-73.756187,40.788703],[-73.764765,40.796844],[-73.768431,40.800704],[-73.768301,40.800797],[-73.764067,40.806775],[-73.757921,40.81545],[-73.755733,40.81854],[-73.754032,40.820941],[-73.754135,40.822593],[-73.754256,40.82452],[-73.7544,40.826837],[-73.753744,40.827492],[-73.74834,40.832883],[-73.747802,40.83342],[-73.746637,40.834582],[-73.743849,40.837363],[-73.737024,40.844172],[-73.728275,40.8529],[-73.726675,40.8568],[-73.728857,40.861491],[-73.730675,40.8654],[-73.729575,40.8665],[-73.713674,40.870099],[-73.675573,40.856999],[-73.674958,40.857214],[-73.672758,40.857985],[-73.670692,40.858708],[-73.669726,40.859047],[-73.656145,40.863803],[-73.655872,40.863899],[-73.65587,40.86392],[-73.65573,40.865255],[-73.655072,40.871523],[-73.654372,40.878199],[-73.654148,40.878442],[-73.648946,40.884074],[-73.641072,40.892599],[-73.63742,40.8954],[-73.633771,40.898198],[-73.626972,40.899397],[-73.621018,40.898448],[-73.617571,40.897898],[-73.60187,40.902798],[-73.601132,40.903294],[-73.598803,40.904858],[-73.597829,40.905512],[-73.59632,40.906526],[-73.59517,40.907298],[-73.590838,40.90869],[-73.58828,40.909513],[-73.573415,40.914291],[-73.569969,40.915398],[-73.566325,40.915782],[-73.566169,40.915798],[-73.566126,40.915781],[-73.56498,40.915332],[-73.557898,40.912554],[-73.548682,40.908939],[-73.548068,40.908698],[-73.538589,40.910541],[-73.531684,40.911884],[-73.530434,40.912127],[-73.528345,40.912533],[-73.526291,40.912932],[-73.519603,40.914233],[-73.519267,40.914298],[-73.514999,40.912821],[-73.499941,40.918166],[-73.497061,40.922801],[-73.490973,40.919471],[-73.488463,40.915173],[-73.487861,40.915768],[-73.485865,40.910215],[-73.483563,40.905569],[-73.480028,40.900974],[-73.477307,40.89925],[-73.476079,40.877111],[-73.473466,40.874498],[-73.467366,40.868098],[-73.463855,40.867312],[-73.46253,40.867295],[-73.462259,40.86671],[-73.464067,40.859554],[-73.46404,40.859499],[-73.463297,40.857965],[-73.457494,40.848712],[-73.455261,40.840872],[-73.454671,40.835908],[-73.454625,40.835001],[-73.454172,40.834097],[-73.453888,40.832317],[-73.452166,40.822398],[-73.451901,40.819685],[-73.449766,40.810398],[-73.448763,40.804999],[-73.448747,40.804901],[-73.448666,40.804419],[-73.444826,40.785811],[-73.444804,40.78548],[-73.444096,40.781606],[-73.440967,40.764399],[-73.4385,40.751311],[-73.437251,40.745694],[-73.436668,40.742305],[-73.436663,40.742281],[-73.436486,40.741779],[-73.436383,40.741275],[-73.436006,40.739458],[-73.435662,40.738096],[-73.435509,40.737134],[-73.435082,40.734791],[-73.434076,40.729476],[-73.433194,40.724884],[-73.433073,40.724293],[-73.432934,40.723539],[-73.432175,40.71974],[-73.431821,40.717969],[-73.431159,40.713875],[-73.431139,40.712731],[-73.431028,40.711367],[-73.429962,40.706699],[-73.429859,40.706347],[-73.429547,40.705215],[-73.428706,40.700861],[-73.428593,40.700329],[-73.42837,40.699215],[-73.428103,40.697513],[-73.42755,40.694676],[-73.427387,40.693268],[-73.427381,40.693213],[-73.426091,40.686345],[-73.42574,40.68441],[-73.42502,40.680506],[-73.424979,40.680203],[-73.424917,40.679983],[-73.424774,40.67909],[-73.424758,40.679052],[-73.424753,40.67904],[-73.424741,40.678888],[-73.42338,40.671493],[-73.423358,40.668743],[-73.424623,40.666182],[-73.424515,40.657824],[-73.423563,40.655943],[-73.425586,40.656291],[-73.425549,40.654611],[-73.425346,40.651818],[-73.423806,40.609869]]]}},{"type":"Feature","properties":{"GEO_ID":"36071","STATE":"36","COUNTY":"071","NAME":"Orange","LSAD":"County","CENSUSAREA":811.686},"geometry":{"type":"Polygon","coordinates":[[[-74.525487,41.279459],[-74.536763,41.284737],[-74.556181,41.293825],[-74.561106,41.29613],[-74.562306,41.296692],[-74.56416,41.29756],[-74.569298,41.299965],[-74.573726,41.302037],[-74.607348,41.317774],[-74.60746,41.317824],[-74.641544,41.332879],[-74.641599,41.332904],[-74.673927,41.347771],[-74.693802,41.356912],[-74.694708,41.357328],[-74.694914,41.357423],[-74.696398,41.357339],[-74.691076,41.36034],[-74.689767,41.361558],[-74.689516,41.363843],[-74.691129,41.367324],[-74.694968,41.370431],[-74.69719,41.371677],[-74.703282,41.375093],[-74.708458,41.378901],[-74.710391,41.382102],[-74.712552,41.387621],[-74.713411,41.389814],[-74.715979,41.392584],[-74.720891,41.39469],[-74.730384,41.39566],[-74.73364,41.396975],[-74.736103,41.398398],[-74.738554,41.401191],[-74.740963,41.40512],[-74.741717,41.40788],[-74.741086,41.411413],[-74.738684,41.413463],[-74.734731,41.422699],[-74.734893,41.425818],[-74.735519,41.427465],[-74.736688,41.429228],[-74.73689,41.42939],[-74.738455,41.430641],[-74.740932,41.43116],[-74.743821,41.430635],[-74.75068,41.427984],[-74.754359,41.425147],[-74.754709,41.424993],[-74.754994,41.425302],[-74.756421,41.428009],[-74.751868,41.432477],[-74.752575,41.433241],[-74.755087,41.433182],[-74.756107,41.433947],[-74.756578,41.436827],[-74.758897,41.440743],[-74.759483,41.442588],[-74.762309,41.444352],[-74.762623,41.445528],[-74.762466,41.449525],[-74.7613,41.450012],[-74.760017,41.452264],[-74.758575,41.454476],[-74.759897,41.460692],[-74.756627,41.461407],[-74.752003,41.462956],[-74.750412,41.46433],[-74.750853,41.465698],[-74.752956,41.468087],[-74.752344,41.472643],[-74.754343,41.476294],[-74.754495,41.478849],[-74.759648,41.481856],[-74.759741,41.485045],[-74.762042,41.488065],[-74.761715,41.489755],[-74.760911,41.49067],[-74.753587,41.491964],[-74.752399,41.493743],[-74.740238,41.494139],[-74.721097,41.494835],[-74.620472,41.498421],[-74.592761,41.499359],[-74.560793,41.500606],[-74.557366,41.50125],[-74.54932,41.501545],[-74.529751,41.502394],[-74.519529,41.502781],[-74.504485,41.503465],[-74.501171,41.503458],[-74.496341,41.503669],[-74.493801,41.504447],[-74.488518,41.503779],[-74.483963,41.504256],[-74.47699,41.503973],[-74.475591,41.504334],[-74.475458,41.504952],[-74.475811,41.505622],[-74.473948,41.506899],[-74.474055,41.508734],[-74.476092,41.510399],[-74.473336,41.511369],[-74.472685,41.512443],[-74.46889,41.514042],[-74.468195,41.515886],[-74.465616,41.516882],[-74.46484,41.519375],[-74.465748,41.522862],[-74.462356,41.523563],[-74.46024,41.524656],[-74.458792,41.526963],[-74.456989,41.527784],[-74.457462,41.529361],[-74.45545,41.530112],[-74.45604,41.531884],[-74.45454,41.533369],[-74.452347,41.532543],[-74.450465,41.532955],[-74.447939,41.534353],[-74.447921,41.535379],[-74.444602,41.537233],[-74.443813,41.53862],[-74.443787,41.540923],[-74.445942,41.540919],[-74.445176,41.544094],[-74.439199,41.543023],[-74.438229,41.547441],[-74.434787,41.546688],[-74.436184,41.551031],[-74.434393,41.552976],[-74.434171,41.553541],[-74.430288,41.553842],[-74.430158,41.556033],[-74.426531,41.555943],[-74.429172,41.557018],[-74.428974,41.55882],[-74.426083,41.559268],[-74.425823,41.559302],[-74.423028,41.560078],[-74.42344,41.562643],[-74.419733,41.562426],[-74.419321,41.565626],[-74.416934,41.569821],[-74.41414,41.567803],[-74.413026,41.568742],[-74.409894,41.568217],[-74.407625,41.568885],[-74.408092,41.570394],[-74.410222,41.570467],[-74.409801,41.573291],[-74.408278,41.575175],[-74.408163,41.573805],[-74.406773,41.572254],[-74.404464,41.573101],[-74.401874,41.575332],[-74.397614,41.575094],[-74.395788,41.577113],[-74.396067,41.579139],[-74.395429,41.580693],[-74.393546,41.581958],[-74.391305,41.582059],[-74.391458,41.583704],[-74.390613,41.586221],[-74.389007,41.585295],[-74.388452,41.583642],[-74.386149,41.583132],[-74.383515,41.583879],[-74.380756,41.586158],[-74.379951,41.587416],[-74.377974,41.586385],[-74.370089,41.58859],[-74.367055,41.590977],[-74.363472,41.591965],[-74.359801,41.592028],[-74.357757,41.591359],[-74.3534,41.591866],[-74.353941,41.592975],[-74.352048,41.592908],[-74.351955,41.594791],[-74.353189,41.59537],[-74.351342,41.598205],[-74.349354,41.598621],[-74.346663,41.597783],[-74.344713,41.597853],[-74.342539,41.596829],[-74.34068,41.594376],[-74.336624,41.595374],[-74.3344,41.597511],[-74.332033,41.596739],[-74.329751,41.598622],[-74.330384,41.600254],[-74.329746,41.601503],[-74.326502,41.602067],[-74.323752,41.602957],[-74.320161,41.603006],[-74.316324,41.60543],[-74.314792,41.607449],[-74.313835,41.610267],[-74.31144,41.611449],[-74.306335,41.608889],[-74.305443,41.610754],[-74.304501,41.611893],[-74.304711,41.615251],[-74.304121,41.615788],[-74.300286,41.616432],[-74.295744,41.619655],[-74.294927,41.61957],[-74.292303,41.618295],[-74.289704,41.619608],[-74.289058,41.621342],[-74.285966,41.621492],[-74.280844,41.625216],[-74.279112,41.625822],[-74.275786,41.625639],[-74.272346,41.628151],[-74.271038,41.629275],[-74.267322,41.629201],[-74.264676,41.63225],[-74.263359,41.632597],[-74.250186,41.629324],[-74.250222,41.625875],[-74.250513,41.622755],[-74.251601,41.605374],[-74.244911,41.603758],[-74.240179,41.602662],[-74.236555,41.601846],[-74.202248,41.59429],[-74.197147,41.592991],[-74.187505,41.590793],[-74.185361,41.594128],[-74.184531,41.593961],[-74.18438,41.593931],[-74.160738,41.589408],[-74.153992,41.587898],[-74.126393,41.582544],[-74.127274,41.587096],[-74.127756,41.588269],[-74.130471,41.599198],[-74.134511,41.615695],[-74.098653,41.607259],[-74.094419,41.605452],[-74.089896,41.598602],[-74.085189,41.600253],[-74.085116,41.600278],[-74.084578,41.600437],[-74.08076,41.601589],[-74.074432,41.603649],[-74.068083,41.606001],[-74.053804,41.586065],[-74.053869,41.582588],[-74.053942,41.580724],[-74.053685,41.58061],[-74.050724,41.580871],[-74.041328,41.581655],[-74.037125,41.582044],[-74.026844,41.582979],[-74.004434,41.585171],[-73.999584,41.585805],[-73.98635,41.586817],[-73.982658,41.587113],[-73.953307,41.589977],[-73.954146,41.583271],[-73.954725,41.58179],[-73.956831,41.576656],[-73.959467,41.571443],[-73.964781,41.565311],[-73.969176,41.562925],[-73.972707,41.560356],[-73.974532,41.558652],[-73.977889,41.555234],[-73.979933,41.55235],[-73.982805,41.549195],[-73.984618,41.547216],[-73.987866,41.542789],[-73.992949,41.529821],[-73.994547,41.527138],[-73.994964,41.52638],[-73.995686,41.524649],[-73.997182,41.51938],[-73.997484,41.516493],[-73.997184,41.513393],[-73.99725,41.509769],[-73.997884,41.505685],[-73.997075,41.50172],[-73.995546,41.499437],[-73.994784,41.498293],[-73.995029,41.497332],[-73.997609,41.487212],[-73.998584,41.483393],[-73.997584,41.475093],[-73.998898,41.462984],[-74.000108,41.456549],[-73.997784,41.452193],[-73.994832,41.450268],[-73.986583,41.444893],[-73.981486,41.438905],[-73.974501,41.427976],[-73.972792,41.424589],[-73.968398,41.420156],[-73.965156,41.41387],[-73.962828,41.409589],[-73.962355,41.403699],[-73.959136,41.400442],[-73.951415,41.398963],[-73.948637,41.39758],[-73.947355,41.395254],[-73.947523,41.393316],[-73.955031,41.376554],[-73.958251,41.367277],[-73.95938,41.361036],[-73.959731,41.353719],[-73.960143,41.351217],[-73.961257,41.348539],[-73.965087,41.343472],[-73.980018,41.32627],[-73.981384,41.324693],[-73.984951,41.322204],[-73.988372,41.319982],[-73.991484,41.317493],[-73.998733,41.312658],[-74.024113,41.294502],[-74.026885,41.292693],[-74.069505,41.261794],[-74.07489,41.257891],[-74.09884,41.2408],[-74.104399,41.236845],[-74.107986,41.234292],[-74.108544,41.233895],[-74.11417,41.230086],[-74.116588,41.228094],[-74.143328,41.208916],[-74.151001,41.203462],[-74.161789,41.195794],[-74.17729,41.184794],[-74.182566,41.181394],[-74.18572,41.178695],[-74.185873,41.178587],[-74.186359,41.178207],[-74.186544,41.178064],[-74.193985,41.172482],[-74.211349,41.159628],[-74.216376,41.156188],[-74.234473,41.142883],[-74.24319,41.146719],[-74.280237,41.163021],[-74.301994,41.172594],[-74.320995,41.182394],[-74.321785,41.182757],[-74.332964,41.187892],[-74.341756,41.191932],[-74.365895,41.203021],[-74.378898,41.208994],[-74.383255,41.211166],[-74.429088,41.234018],[-74.439805,41.239361],[-74.457584,41.248225],[-74.476971,41.257046],[-74.499603,41.267344],[-74.525487,41.279459]]]}},{"type":"Feature","properties":{"GEO_ID":"36079","STATE":"36","COUNTY":"079","NAME":"Putnam","LSAD":"County","CENSUSAREA":230.312},"geometry":{"type":"Polygon","coordinates":[[[-73.530886,41.517219],[-73.532402,41.498764],[-73.533969,41.479693],[-73.534055,41.478968],[-73.534064,41.478879],[-73.53415,41.47806],[-73.534269,41.476911],[-73.534269,41.476394],[-73.534369,41.475894],[-73.535295,41.463501],[-73.535769,41.457159],[-73.535857,41.455709],[-73.535885,41.455236],[-73.535894,41.455035],[-73.535986,41.45306],[-73.536067,41.451335],[-73.536067,41.451331],[-73.536969,41.441094],[-73.537469,41.43589],[-73.537673,41.433905],[-73.541169,41.405994],[-73.542379,41.390234],[-73.543425,41.376622],[-73.543723,41.374281],[-73.544728,41.366375],[-73.56024,41.36485],[-73.572478,41.363579],[-73.593929,41.361286],[-73.596621,41.361128],[-73.599938,41.360802],[-73.628491,41.358181],[-73.639056,41.357253],[-73.641248,41.356974],[-73.659031,41.355183],[-73.659871,41.355099],[-73.660619,41.355026],[-73.660905,41.354994],[-73.671686,41.353857],[-73.689493,41.35193],[-73.694765,41.351387],[-73.69994,41.350855],[-73.718674,41.348933],[-73.719804,41.348818],[-73.724035,41.348394],[-73.72521,41.348218],[-73.727501,41.347991],[-73.734672,41.347288],[-73.735816,41.347123],[-73.740095,41.346682],[-73.753068,41.345346],[-73.753122,41.345342],[-73.757605,41.344904],[-73.758232,41.344838],[-73.771839,41.343417],[-73.772054,41.343393],[-73.780007,41.342492],[-73.78826,41.341737],[-73.797456,41.340647],[-73.816037,41.338824],[-73.822273,41.338223],[-73.829988,41.337503],[-73.842703,41.336198],[-73.86201,41.334264],[-73.873801,41.33299],[-73.875119,41.332785],[-73.879948,41.332623],[-73.8833,41.331956],[-73.887763,41.331491],[-73.88818,41.331472],[-73.889692,41.331176],[-73.890602,41.331071],[-73.891427,41.330993],[-73.892256,41.330954],[-73.892926,41.330983],[-73.89346,41.330892],[-73.904794,41.329705],[-73.908236,41.329453],[-73.914027,41.32897],[-73.918286,41.328532],[-73.926846,41.32764],[-73.982584,41.321693],[-73.981384,41.324693],[-73.980018,41.32627],[-73.965087,41.343472],[-73.961257,41.348539],[-73.960143,41.351217],[-73.959731,41.353719],[-73.95938,41.361036],[-73.958251,41.367277],[-73.955031,41.376554],[-73.947523,41.393316],[-73.947355,41.395254],[-73.948637,41.39758],[-73.951415,41.398963],[-73.959136,41.400442],[-73.962355,41.403699],[-73.962828,41.409589],[-73.965156,41.41387],[-73.968398,41.420156],[-73.972792,41.424589],[-73.974501,41.427976],[-73.981486,41.438905],[-73.978588,41.442119],[-73.977924,41.442757],[-73.975855,41.444885],[-73.93852,41.483434],[-73.933775,41.488279],[-73.918758,41.489783],[-73.907533,41.490975],[-73.902722,41.492315],[-73.901886,41.492386],[-73.897755,41.49277],[-73.87458,41.495073],[-73.859995,41.495741],[-73.85636,41.496224],[-73.855419,41.496349],[-73.838363,41.498126],[-73.837062,41.498263],[-73.835786,41.498431],[-73.820807,41.499814],[-73.814518,41.500457],[-73.813274,41.500574],[-73.800061,41.501762],[-73.79553,41.502271],[-73.77068,41.504413],[-73.764844,41.505179],[-73.742474,41.507547],[-73.715337,41.510049],[-73.686079,41.513001],[-73.683849,41.513306],[-73.681501,41.51362],[-73.673285,41.514701],[-73.647635,41.518293],[-73.645669,41.518579],[-73.644727,41.518716],[-73.641868,41.519046],[-73.638376,41.519546],[-73.621968,41.521831],[-73.6205,41.521994],[-73.604342,41.523874],[-73.603169,41.523993],[-73.580153,41.526382],[-73.560811,41.526637],[-73.530067,41.527194],[-73.530886,41.517219]]]}},{"type":"Feature","properties":{"GEO_ID":"36087","STATE":"36","COUNTY":"087","NAME":"Rockland","LSAD":"County","CENSUSAREA":173.55},"geometry":{"type":"Polygon","coordinates":[[[-74.150057,41.107318],[-74.158305,41.11096],[-74.18239,41.121595],[-74.195348,41.126892],[-74.234473,41.142883],[-74.216376,41.156188],[-74.211349,41.159628],[-74.193985,41.172482],[-74.186544,41.178064],[-74.186359,41.178207],[-74.185873,41.178587],[-74.18572,41.178695],[-74.182566,41.181394],[-74.17729,41.184794],[-74.161789,41.195794],[-74.151001,41.203462],[-74.143328,41.208916],[-74.116588,41.228094],[-74.11417,41.230086],[-74.108544,41.233895],[-74.107986,41.234292],[-74.104399,41.236845],[-74.09884,41.2408],[-74.07489,41.257891],[-74.069505,41.261794],[-74.026885,41.292693],[-74.024113,41.294502],[-73.998733,41.312658],[-73.991484,41.317493],[-73.988372,41.319982],[-73.984951,41.322204],[-73.981384,41.324693],[-73.982584,41.321693],[-73.983284,41.317393],[-73.980984,41.314193],[-73.977484,41.312093],[-73.971784,41.307293],[-73.966983,41.301693],[-73.964483,41.299693],[-73.955183,41.294993],[-73.949083,41.292593],[-73.946583,41.290993],[-73.945783,41.287593],[-73.947483,41.284593],[-73.952045,41.280736],[-73.955445,41.277862],[-73.957183,41.276393],[-73.964184,41.269993],[-73.966884,41.267193],[-73.969684,41.263193],[-73.971484,41.259593],[-73.972284,41.256193],[-73.971984,41.251493],[-73.970784,41.247893],[-73.964142,41.243851],[-73.961283,41.241994],[-73.960783,41.239394],[-73.961383,41.234194],[-73.953283,41.228994],[-73.950947,41.226346],[-73.947965,41.223101],[-73.944683,41.219594],[-73.939983,41.214494],[-73.936782,41.210814],[-73.935982,41.209894],[-73.931482,41.204994],[-73.927229,41.198038],[-73.925682,41.195194],[-73.921697,41.186288],[-73.914381,41.174195],[-73.911681,41.167795],[-73.909281,41.164395],[-73.906581,41.161895],[-73.899681,41.157295],[-73.895381,41.153995],[-73.892481,41.150595],[-73.88948,41.145095],[-73.88748,41.138295],[-73.887397,41.136861],[-73.88718,41.133095],[-73.88758,41.128795],[-73.890866,41.110583],[-73.891417,41.107318],[-73.89378,41.093296],[-73.89488,41.082396],[-73.89468,41.079596],[-73.894777,41.070791],[-73.89478,41.070496],[-73.8947,41.069937],[-73.89448,41.064596],[-73.89388,41.057896],[-73.89038,41.045796],[-73.89028,41.045196],[-73.88938,41.037597],[-73.889915,41.025749],[-73.890079,41.022597],[-73.893579,41.005297],[-73.893979,40.997197],[-73.90268,40.997297],[-73.90501,40.997591],[-73.907054,40.998476],[-73.91188,41.001297],[-73.920337,41.005081],[-73.938963,41.013414],[-73.945221,41.016214],[-73.951953,41.019225],[-73.953065,41.019723],[-73.9591,41.022423],[-73.966647,41.025799],[-73.967074,41.02599],[-73.977371,41.030597],[-73.99986,41.040658],[-74.013538,41.046778],[-74.024575,41.051716],[-74.025847,41.052285],[-74.033518,41.055717],[-74.041049,41.059086],[-74.041054,41.059088],[-74.050861,41.063437],[-74.057238,41.066265],[-74.067892,41.070989],[-74.081725,41.077124],[-74.091242,41.081344],[-74.092486,41.081896],[-74.092642,41.081965],[-74.096786,41.083796],[-74.096884,41.083839],[-74.098226,41.084432],[-74.112398,41.090689],[-74.1208,41.0944],[-74.127244,41.097245],[-74.129426,41.098208],[-74.142522,41.103991],[-74.146581,41.105783],[-74.147159,41.106038],[-74.150057,41.107318]]]}},{"type":"Feature","properties":{"GEO_ID":"36111","STATE":"36","COUNTY":"111","NAME":"Ulster","LSAD":"County","CENSUSAREA":1124.235},"geometry":{"type":"Polygon","coordinates":[[[-74.18438,41.593931],[-74.184531,41.593961],[-74.185361,41.594128],[-74.187505,41.590793],[-74.197147,41.592991],[-74.202248,41.59429],[-74.236555,41.601846],[-74.240179,41.602662],[-74.244911,41.603758],[-74.251601,41.605374],[-74.250513,41.622755],[-74.250222,41.625875],[-74.250186,41.629324],[-74.263359,41.632597],[-74.264676,41.63225],[-74.267322,41.629201],[-74.271038,41.629275],[-74.272346,41.628151],[-74.275786,41.625639],[-74.279112,41.625822],[-74.280844,41.625216],[-74.285966,41.621492],[-74.289058,41.621342],[-74.289704,41.619608],[-74.292303,41.618295],[-74.294927,41.61957],[-74.295744,41.619655],[-74.300286,41.616432],[-74.304121,41.615788],[-74.304711,41.615251],[-74.304501,41.611893],[-74.305443,41.610754],[-74.306335,41.608889],[-74.31144,41.611449],[-74.313835,41.610267],[-74.314792,41.607449],[-74.316324,41.60543],[-74.320161,41.603006],[-74.323752,41.602957],[-74.326502,41.602067],[-74.329746,41.601503],[-74.330384,41.600254],[-74.329751,41.598622],[-74.332033,41.596739],[-74.3344,41.597511],[-74.336624,41.595374],[-74.34068,41.594376],[-74.342539,41.596829],[-74.344713,41.597853],[-74.346663,41.597783],[-74.349354,41.598621],[-74.351342,41.598205],[-74.353189,41.59537],[-74.351955,41.594791],[-74.352048,41.592908],[-74.353941,41.592975],[-74.3534,41.591866],[-74.357757,41.591359],[-74.359801,41.592028],[-74.363472,41.591965],[-74.367055,41.590977],[-74.368272,41.591701],[-74.364486,41.593783],[-74.365654,41.595092],[-74.366086,41.595622],[-74.370313,41.596507],[-74.373073,41.596263],[-74.375058,41.596886],[-74.376138,41.598189],[-74.376476,41.601772],[-74.375332,41.602929],[-74.375937,41.604574],[-74.37863,41.605545],[-74.379549,41.607322],[-74.37966,41.610744],[-74.380841,41.611751],[-74.380682,41.613836],[-74.384008,41.615197],[-74.386362,41.619372],[-74.386842,41.628239],[-74.388303,41.629285],[-74.391457,41.633455],[-74.392502,41.64124],[-74.394373,41.642562],[-74.395071,41.644876],[-74.407597,41.651353],[-74.421428,41.658506],[-74.423814,41.659739],[-74.425389,41.660615],[-74.455465,41.677327],[-74.464778,41.682519],[-74.482322,41.692301],[-74.491062,41.697185],[-74.520697,41.71394],[-74.538733,41.724349],[-74.5569,41.734798],[-74.56207,41.737772],[-74.575086,41.745258],[-74.570575,41.750091],[-74.563193,41.757491],[-74.543475,41.778933],[-74.540614,41.781747],[-74.532956,41.789369],[-74.525506,41.796817],[-74.524531,41.797958],[-74.490883,41.831316],[-74.487829,41.834361],[-74.483112,41.839817],[-74.45382,41.875092],[-74.453685,41.875595],[-74.502039,41.896668],[-74.576557,41.92971],[-74.601167,41.940684],[-74.6246,41.951112],[-74.655032,41.963676],[-74.670952,41.970382],[-74.67402,41.971675],[-74.742763,42.000089],[-74.745545,42.00137],[-74.749602,42.002937],[-74.780693,42.016375],[-74.749602,42.030755],[-74.749602,42.030977],[-74.702768,42.05259],[-74.669689,42.067819],[-74.566002,42.115764],[-74.553598,42.121484],[-74.548265,42.127406],[-74.546925,42.128566],[-74.530985,42.146475],[-74.50914,42.1452],[-74.503984,42.14492],[-74.451713,42.169225],[-74.450322,42.168698],[-74.413678,42.154844],[-74.32448,42.120753],[-74.307571,42.114346],[-74.286479,42.112814],[-74.280754,42.112356],[-74.271606,42.111625],[-74.224748,42.107975],[-74.171495,42.103939],[-74.126661,42.100628],[-74.082194,42.097153],[-74.075423,42.096637],[-74.074797,42.096589],[-74.063817,42.121582],[-74.042393,42.170386],[-74.024878,42.162134],[-74.017775,42.162273],[-74.003589,42.163365],[-74.002519,42.176162],[-74.00245,42.176992],[-73.996421,42.17339],[-73.989381,42.169363],[-73.972946,42.159971],[-73.957259,42.151082],[-73.946941,42.145162],[-73.926271,42.133343],[-73.918356,42.128916],[-73.910675,42.127293],[-73.915321,42.121337],[-73.918873,42.114137],[-73.921465,42.110025],[-73.922553,42.10665],[-73.923273,42.10217],[-73.924729,42.095418],[-73.926682,42.090298],[-73.929114,42.081658],[-73.929626,42.078778],[-73.929688,42.078422],[-73.929754,42.075306],[-73.926346,42.072506],[-73.92729,42.066858],[-73.928314,42.066778],[-73.928234,42.064874],[-73.932282,42.061578],[-73.932877,42.059943],[-73.932763,42.055034],[-73.934395,42.044747],[-73.934171,42.039547],[-73.936699,42.034699],[-73.937171,42.030268],[-73.937035,42.026827],[-73.934639,42.023304],[-73.933323,42.018491],[-73.933435,42.015659],[-73.934315,42.012779],[-73.936796,42.006651],[-73.939964,41.999403],[-73.940412,41.994347],[-73.942012,41.991291],[-73.943336,41.985534],[-73.943615,41.984884],[-73.944636,41.981276],[-73.945068,41.979708],[-73.945845,41.977646],[-73.947212,41.973372],[-73.950076,41.965756],[-73.950877,41.962428],[-73.952829,41.957067],[-73.953709,41.952748],[-73.954205,41.950812],[-73.955597,41.936188],[-73.957421,41.926572],[-73.957938,41.92198],[-73.958301,41.920332],[-73.961101,41.918316],[-73.964237,41.913916],[-73.964189,41.910156],[-73.962781,41.90582],[-73.961835,41.900508],[-73.960829,41.899052],[-73.955213,41.892908],[-73.954301,41.891436],[-73.946301,41.883004],[-73.941885,41.8763],[-73.940317,41.872748],[-73.939389,41.865852],[-73.940973,41.860668],[-73.941933,41.859244],[-73.946589,41.854236],[-73.948477,41.8507],[-73.949373,41.843916],[-73.949789,41.836972],[-73.948685,41.828332],[-73.949741,41.821212],[-73.948452,41.816642],[-73.949357,41.811341],[-73.949597,41.800125],[-73.952014,41.791581],[-73.951982,41.790477],[-73.952446,41.787965],[-73.951614,41.770621],[-73.950686,41.768829],[-73.946589,41.763677],[-73.943514,41.759979],[-73.940989,41.755741],[-73.941503,41.743004],[-73.941741,41.739021],[-73.941081,41.735993],[-73.941081,41.732693],[-73.94208,41.727036],[-73.942301,41.725789],[-73.944435,41.714634],[-73.944971,41.710582],[-73.945672,41.705663],[-73.946078,41.702826],[-73.946682,41.699396],[-73.945782,41.695593],[-73.943482,41.690293],[-73.942482,41.684093],[-73.943282,41.679393],[-73.945182,41.675893],[-73.947033,41.668826],[-73.947382,41.667493],[-73.947218,41.660088],[-73.946882,41.656393],[-73.948182,41.652493],[-73.948982,41.644793],[-73.948782,41.642193],[-73.950644,41.632639],[-73.951482,41.627693],[-73.952582,41.625193],[-73.952082,41.613993],[-73.952274,41.609154],[-73.952582,41.595293],[-73.953282,41.590193],[-73.953307,41.589977],[-73.982658,41.587113],[-73.98635,41.586817],[-73.999584,41.585805],[-74.004434,41.585171],[-74.026844,41.582979],[-74.037125,41.582044],[-74.041328,41.581655],[-74.050724,41.580871],[-74.053685,41.58061],[-74.053942,41.580724],[-74.053869,41.582588],[-74.053804,41.586065],[-74.068083,41.606001],[-74.074432,41.603649],[-74.08076,41.601589],[-74.084578,41.600437],[-74.085116,41.600278],[-74.085189,41.600253],[-74.089896,41.598602],[-74.094419,41.605452],[-74.098653,41.607259],[-74.134511,41.615695],[-74.130471,41.599198],[-74.127756,41.588269],[-74.127274,41.587096],[-74.126393,41.582544],[-74.153992,41.587898],[-74.160738,41.589408],[-74.18438,41.593931]]]}},{"type":"Feature","properties":{"GEO_ID":"34003","STATE":"34","COUNTY":"003","NAME":"Bergen","LSAD":"County","CENSUSAREA":233.009},"geometry":{"type":"Polygon","coordinates":[[[-73.926758,40.895355],[-73.929006,40.889578],[-73.933406,40.882078],[-73.938081,40.874699],[-73.948278,40.858404],[-73.948281,40.858399],[-73.952017,40.851584],[-73.953982,40.848],[-73.963182,40.8269],[-73.965706,40.823706],[-73.968082,40.8207],[-73.984822,40.797444],[-73.992214,40.800623],[-73.992387,40.800697],[-73.993509,40.801092],[-73.993505,40.803162],[-73.993083,40.8057],[-73.994183,40.8063],[-73.994412,40.806453],[-73.994783,40.8067],[-73.995723,40.80712],[-73.996483,40.8075],[-73.998,40.80847],[-74.00058,40.8099],[-74.000873,40.810045],[-74.000984,40.8101],[-74.002485,40.810757],[-74.002583,40.8108],[-74.004156,40.81164],[-74.005048,40.812126],[-74.007483,40.8133],[-74.008044,40.813674],[-74.008733,40.81396],[-74.009561,40.814576],[-74.012583,40.8159],[-74.013157,40.818078],[-74.010983,40.8205],[-74.013625,40.822909],[-74.017204,40.823541],[-74.020442,40.82063],[-74.020581,40.818701],[-74.023224,40.818385],[-74.023581,40.816484],[-74.025281,40.815902],[-74.02474,40.814869],[-74.026256,40.816174],[-74.028207,40.816514],[-74.028869,40.816036],[-74.028684,40.8128],[-74.032084,40.8129],[-74.036148,40.807963],[-74.044977,40.807702],[-74.054469,40.806984],[-74.060685,40.8057],[-74.065135,40.80302],[-74.067194,40.800935],[-74.06855,40.798658],[-74.071399,40.797241],[-74.077,40.796379],[-74.077787,40.792796],[-74.081794,40.787994],[-74.083351,40.786316],[-74.089263,40.780046],[-74.090316,40.775819],[-74.088077,40.767542],[-74.090694,40.762114],[-74.093486,40.763201],[-74.095486,40.762301],[-74.097286,40.765601],[-74.099086,40.767701],[-74.097886,40.769901],[-74.099086,40.7726],[-74.100186,40.7734],[-74.100886,40.7759],[-74.103086,40.7756],[-74.104686,40.7767],[-74.109487,40.7774],[-74.110887,40.7768],[-74.112887,40.7758],[-74.115787,40.7711],[-74.118187,40.7701],[-74.124651,40.772052],[-74.127193,40.771574],[-74.129716,40.773837],[-74.130307,40.777522],[-74.130588,40.777732],[-74.132194,40.778549],[-74.132997,40.778948],[-74.133786,40.77934],[-74.134549,40.77972],[-74.136191,40.780553],[-74.136978,40.780965],[-74.138507,40.781767],[-74.140406,40.782788],[-74.141272,40.783254],[-74.142388,40.783853],[-74.146489,40.786089],[-74.147529,40.786491],[-74.145387,40.7898],[-74.142959,40.792449],[-74.142838,40.792581],[-74.142087,40.7934],[-74.140902,40.795067],[-74.1395,40.797039],[-74.138503,40.799777],[-74.139882,40.805282],[-74.139967,40.805313],[-74.139923,40.80555],[-74.13892,40.807188],[-74.138777,40.807723],[-74.138695,40.811011],[-74.138201,40.813251],[-74.137692,40.815506],[-74.136487,40.8182],[-74.133063,40.819162],[-74.13161,40.819545],[-74.130031,40.819962],[-74.126265,40.821005],[-74.124176,40.822629],[-74.124034,40.822989],[-74.122931,40.825592],[-74.12134,40.830219],[-74.121853,40.834098],[-74.122787,40.836199],[-74.124087,40.839899],[-74.12298,40.841558],[-74.12199,40.843258],[-74.121902,40.843848],[-74.121404,40.847184],[-74.121295,40.847445],[-74.120982,40.847945],[-74.119291,40.851674],[-74.119462,40.85335],[-74.119487,40.853599],[-74.119657,40.854285],[-74.119684,40.854392],[-74.120069,40.855067],[-74.119861,40.856321],[-74.118826,40.859327],[-74.118061,40.859502],[-74.115964,40.859874],[-74.113916,40.859581],[-74.112735,40.858673],[-74.111715,40.855881],[-74.111046,40.855466],[-74.110163,40.85527],[-74.109517,40.855408],[-74.107286,40.857199],[-74.106786,40.859299],[-74.107338,40.863077],[-74.107686,40.863599],[-74.110024,40.864719],[-74.111678,40.867309],[-74.112282,40.86889],[-74.113886,40.870499],[-74.114875,40.874187],[-74.11547,40.874782],[-74.117804,40.876812],[-74.120268,40.879766],[-74.120487,40.880399],[-74.129102,40.885275],[-74.130187,40.885999],[-74.130187,40.886376],[-74.130187,40.886899],[-74.130089,40.887633],[-74.129809,40.889738],[-74.129792,40.889863],[-74.128991,40.893779],[-74.129023,40.89384],[-74.129233,40.894081],[-74.13102,40.895405],[-74.133789,40.899295],[-74.132409,40.90406],[-74.131804,40.907401],[-74.131787,40.907498],[-74.132296,40.909177],[-74.13284,40.910905],[-74.133287,40.911798],[-74.133287,40.912399],[-74.133287,40.913098],[-74.132087,40.915298],[-74.130243,40.918119],[-74.130188,40.918197],[-74.12958,40.920071],[-74.131926,40.922168],[-74.133903,40.922786],[-74.136219,40.922848],[-74.139515,40.923499],[-74.141423,40.92573],[-74.141683,40.92636],[-74.141987,40.927098],[-74.142098,40.92804],[-74.142187,40.928798],[-74.142232,40.929453],[-74.14009,40.932176],[-74.139947,40.932427],[-74.139846,40.932773],[-74.139767,40.932913],[-74.139489,40.933433],[-74.139361,40.933983],[-74.140287,40.935698],[-74.143893,40.940507],[-74.145387,40.941298],[-74.148059,40.94159],[-74.148158,40.942339],[-74.146429,40.948441],[-74.146293,40.948961],[-74.146104,40.949668],[-74.145527,40.952139],[-74.144429,40.956053],[-74.144341,40.956354],[-74.143779,40.957816],[-74.143528,40.958518],[-74.142298,40.961828],[-74.141628,40.963594],[-74.141168,40.965786],[-74.141083,40.966243],[-74.141048,40.966348],[-74.148494,40.970801],[-74.149088,40.971137],[-74.149173,40.971185],[-74.155691,40.97501],[-74.159947,40.977485],[-74.161022,40.978154],[-74.165273,40.980636],[-74.17021,40.983865],[-74.170988,40.976997],[-74.181301,40.977782],[-74.184576,40.978079],[-74.18524,40.978129],[-74.191835,40.978688],[-74.198373,40.979166],[-74.198688,40.979193],[-74.211732,40.980156],[-74.224981,40.98163],[-74.231084,40.984394],[-74.24847,40.992303],[-74.264233,41.012198],[-74.266713,41.014063],[-74.269337,41.015974],[-74.26979,41.01632],[-74.272484,41.018312],[-74.270521,41.022131],[-74.26977,41.023608],[-74.263586,41.035749],[-74.250595,41.060676],[-74.24964,41.062615],[-74.248939,41.06382],[-74.228797,41.102995],[-74.21321,41.134192],[-74.206695,41.131529],[-74.18239,41.121595],[-74.162713,41.112907],[-74.158293,41.110955],[-74.149861,41.107231],[-74.120804,41.094401],[-74.10379,41.086889],[-74.096786,41.083796],[-74.092486,41.081896],[-74.08172,41.077122],[-74.071955,41.072791],[-74.05724,41.066266],[-74.052049,41.063964],[-74.041054,41.059088],[-74.041049,41.059086],[-74.037283,41.057401],[-74.024567,41.051712],[-74.012584,41.046351],[-73.993957,41.038018],[-73.977313,41.030571],[-73.959112,41.022428],[-73.952934,41.019664],[-73.95192,41.01921],[-73.945288,41.016243],[-73.938437,41.013178],[-73.922092,41.005866],[-73.91188,41.001297],[-73.907054,40.998476],[-73.90501,40.997591],[-73.90268,40.997297],[-73.893979,40.997197],[-73.896479,40.981697],[-73.90728,40.951498],[-73.91558,40.924898],[-73.91768,40.919498],[-73.917905,40.917577],[-73.918405,40.917477],[-73.919686,40.913535],[-73.919705,40.913478],[-73.926758,40.895355]]]}},{"type":"Feature","properties":{"GEO_ID":"34013","STATE":"34","COUNTY":"013","NAME":"Essex","LSAD":"County","CENSUSAREA":126.212},"geometry":{"type":"Polygon","coordinates":[[[-74.13892,40.807188],[-74.139923,40.80555],[-74.139967,40.805313],[-74.139882,40.805282],[-74.138503,40.799777],[-74.1395,40.797039],[-74.140902,40.795067],[-74.142087,40.7934],[-74.142838,40.792581],[-74.142959,40.792449],[-74.145387,40.7898],[-74.147529,40.786491],[-74.148187,40.782409],[-74.148266,40.779876],[-74.148288,40.7797],[-74.148408,40.779406],[-74.150372,40.776893],[-74.153266,40.774189],[-74.155159,40.771732],[-74.155798,40.770815],[-74.156369,40.768896],[-74.15664,40.767986],[-74.157688,40.7661],[-74.158673,40.764942],[-74.160325,40.763293],[-74.162149,40.761373],[-74.163388,40.759401],[-74.164529,40.756298],[-74.164799,40.754718],[-74.164933,40.753567],[-74.165465,40.750996],[-74.165985,40.748036],[-74.166069,40.747495],[-74.166087,40.747402],[-74.165954,40.745107],[-74.163788,40.739201],[-74.161958,40.736007],[-74.161669,40.735781],[-74.15998,40.734485],[-74.155279,40.733538],[-74.153696,40.733679],[-74.153301,40.733713],[-74.151188,40.733901],[-74.148066,40.734292],[-74.145288,40.735701],[-74.142688,40.739301],[-74.137492,40.741398],[-74.122786,40.742101],[-74.121113,40.741658],[-74.117605,40.739638],[-74.116993,40.737125],[-74.118105,40.732442],[-74.120987,40.722901],[-74.121387,40.721001],[-74.120287,40.715901],[-74.117057,40.710381],[-74.112787,40.703102],[-74.113338,40.702477],[-74.114559,40.701072],[-74.117267,40.697808],[-74.122911,40.691172],[-74.131403,40.680902],[-74.133433,40.678434],[-74.136161,40.675084],[-74.136703,40.674444],[-74.138816,40.673903],[-74.160427,40.687128],[-74.160859,40.688896],[-74.162577,40.689663],[-74.168089,40.689896],[-74.169692,40.688599],[-74.178672,40.688323],[-74.192985,40.687262],[-74.193289,40.687202],[-74.197182,40.687019],[-74.197494,40.687],[-74.198023,40.686948],[-74.200899,40.68669],[-74.201889,40.686702],[-74.206389,40.689202],[-74.207497,40.689663],[-74.207589,40.689702],[-74.208344,40.690081],[-74.209042,40.690428],[-74.209789,40.690802],[-74.21241,40.69926],[-74.212693,40.69967],[-74.213275,40.700618],[-74.214888,40.7019],[-74.218776,40.70452],[-74.22066,40.705908],[-74.221499,40.706584],[-74.221914,40.706869],[-74.222452,40.707249],[-74.223554,40.707446],[-74.225944,40.707778],[-74.226077,40.707795],[-74.226118,40.707809],[-74.227016,40.708023],[-74.227986,40.70819],[-74.228571,40.70829],[-74.231732,40.708837],[-74.232676,40.709002],[-74.236521,40.709614],[-74.243702,40.711143],[-74.244013,40.711143],[-74.244168,40.711165],[-74.244245,40.711176],[-74.244311,40.71119],[-74.24514,40.711408],[-74.245416,40.711567],[-74.245433,40.711577],[-74.24729,40.711601],[-74.248494,40.711907],[-74.251884,40.71255],[-74.254995,40.713101],[-74.255502,40.713229],[-74.255793,40.713301],[-74.25629,40.7133],[-74.259998,40.714481],[-74.260294,40.714601],[-74.262329,40.715129],[-74.263291,40.715501],[-74.267002,40.71659],[-74.267397,40.716703],[-74.268389,40.717103],[-74.268996,40.717224],[-74.269389,40.717297],[-74.269471,40.717334],[-74.270488,40.717696],[-74.271918,40.718058],[-74.272091,40.718101],[-74.273909,40.718725],[-74.275035,40.719112],[-74.27572,40.719266],[-74.276192,40.719403],[-74.276563,40.719542],[-74.276812,40.719635],[-74.283879,40.721654],[-74.285299,40.722055],[-74.290806,40.721495],[-74.294179,40.719611],[-74.294766,40.717645],[-74.29869,40.71479],[-74.299496,40.713889],[-74.299833,40.71375],[-74.299933,40.713725],[-74.30123,40.713472],[-74.302092,40.713301],[-74.302695,40.713601],[-74.303691,40.7133],[-74.304589,40.713512],[-74.308431,40.714409],[-74.311691,40.715601],[-74.315293,40.718601],[-74.315991,40.719199],[-74.318609,40.7192],[-74.321408,40.719072],[-74.322519,40.718542],[-74.325596,40.717075],[-74.330334,40.719295],[-74.332088,40.720176],[-74.338681,40.723404],[-74.342682,40.725181],[-74.351141,40.731792],[-74.352664,40.732629],[-74.35384,40.733611],[-74.354942,40.7345],[-74.355689,40.734893],[-74.363597,40.737402],[-74.363623,40.737286],[-74.364204,40.737412],[-74.364887,40.73756],[-74.36524,40.737653],[-74.369514,40.739086],[-74.370943,40.739196],[-74.371923,40.739229],[-74.37256,40.741587],[-74.370902,40.742757],[-74.366562,40.743889],[-74.364737,40.746441],[-74.367501,40.748516],[-74.367089,40.74933],[-74.363072,40.750403],[-74.359634,40.751154],[-74.357436,40.7546],[-74.357624,40.756117],[-74.361732,40.75594],[-74.364605,40.757844],[-74.367587,40.758066],[-74.367278,40.761067],[-74.37419,40.757999],[-74.375542,40.760731],[-74.377414,40.761152],[-74.376235,40.762749],[-74.37361,40.762801],[-74.370863,40.764008],[-74.369971,40.766969],[-74.371695,40.76737],[-74.369497,40.771421],[-74.370404,40.774449],[-74.372598,40.774854],[-74.36872,40.77907],[-74.36715,40.779982],[-74.366459,40.78332],[-74.366772,40.788568],[-74.366169,40.794786],[-74.364695,40.796145],[-74.364173,40.799042],[-74.359526,40.799875],[-74.359407,40.799943],[-74.358862,40.800572],[-74.356118,40.803799],[-74.350898,40.806798],[-74.350833,40.809089],[-74.349071,40.812641],[-74.344303,40.813719],[-74.339566,40.812824],[-74.334342,40.818416],[-74.3323,40.822068],[-74.334933,40.827626],[-74.333203,40.829434],[-74.328722,40.831754],[-74.330049,40.834618],[-74.329172,40.838299],[-74.329317,40.841475],[-74.327113,40.841867],[-74.325793,40.843914],[-74.328535,40.844667],[-74.32991,40.849161],[-74.32735,40.850673],[-74.326827,40.852758],[-74.325176,40.854109],[-74.326046,40.856491],[-74.324586,40.858153],[-74.321144,40.858529],[-74.319333,40.858113],[-74.320995,40.862361],[-74.318124,40.863046],[-74.317472,40.864874],[-74.320099,40.865999],[-74.321938,40.864038],[-74.326219,40.86612],[-74.330899,40.86695],[-74.331495,40.866854],[-74.331654,40.866926],[-74.332875,40.869174],[-74.336693,40.866545],[-74.33806,40.870059],[-74.336075,40.870406],[-74.33749,40.872207],[-74.334259,40.873471],[-74.337808,40.875101],[-74.33507,40.877426],[-74.337614,40.878206],[-74.337894,40.879427],[-74.340154,40.879437],[-74.33983,40.882065],[-74.338112,40.887758],[-74.339425,40.890365],[-74.3389,40.892087],[-74.335745,40.893059],[-74.338999,40.894069],[-74.337019,40.896265],[-74.334347,40.896294],[-74.334334,40.897555],[-74.337531,40.898475],[-74.337159,40.900004],[-74.335298,40.90211],[-74.334438,40.904988],[-74.330799,40.906769],[-74.329533,40.908653],[-74.32802,40.905626],[-74.32499,40.905879],[-74.325271,40.907367],[-74.327647,40.907336],[-74.326269,40.908499],[-74.322804,40.908834],[-74.322957,40.907308],[-74.321595,40.906895],[-74.32016,40.907967],[-74.318493,40.907545],[-74.318546,40.903229],[-74.314503,40.90379],[-74.312409,40.905399],[-74.31016,40.904665],[-74.305939,40.905315],[-74.302832,40.907188],[-74.30298,40.904352],[-74.300841,40.904609],[-74.296583,40.90604],[-74.291629,40.905499],[-74.292247,40.903205],[-74.291373,40.901714],[-74.292447,40.901225],[-74.291275,40.899776],[-74.28926,40.899404],[-74.285381,40.901361],[-74.281765,40.900843],[-74.281716,40.899942],[-74.286563,40.899094],[-74.283814,40.898019],[-74.284616,40.895231],[-74.282297,40.895622],[-74.280731,40.897684],[-74.273852,40.897055],[-74.271482,40.897131],[-74.271181,40.897084],[-74.271003,40.896992],[-74.270702,40.89692],[-74.266638,40.894533],[-74.264289,40.886906],[-74.259813,40.883769],[-74.254476,40.883098],[-74.253966,40.882292],[-74.2531,40.881561],[-74.246691,40.880799],[-74.246291,40.880799],[-74.245264,40.880722],[-74.244091,40.880599],[-74.242356,40.880497],[-74.241992,40.880399],[-74.241047,40.880302],[-74.2403,40.880204],[-74.238182,40.879114],[-74.23164,40.875623],[-74.228701,40.873941],[-74.226291,40.8728],[-74.223406,40.871161],[-74.223292,40.8711],[-74.222856,40.870752],[-74.21509,40.866499],[-74.213987,40.865998],[-74.2127,40.865261],[-74.212656,40.865236],[-74.204821,40.860915],[-74.20214,40.859622],[-74.201296,40.861847],[-74.196489,40.859799],[-74.197734,40.857279],[-74.192196,40.854306],[-74.192134,40.854276],[-74.18534,40.850228],[-74.182689,40.848799],[-74.181195,40.847959],[-74.179903,40.847261],[-74.179403,40.846972],[-74.162628,40.837869],[-74.158502,40.835699],[-74.151923,40.832074],[-74.151789,40.831999],[-74.151255,40.83164],[-74.150087,40.831098],[-74.148175,40.82994],[-74.145129,40.828426],[-74.142485,40.8268],[-74.139568,40.825294],[-74.134862,40.822786],[-74.130031,40.819962],[-74.13161,40.819545],[-74.133063,40.819162],[-74.136487,40.8182],[-74.137692,40.815506],[-74.138201,40.813251],[-74.138695,40.811011],[-74.138777,40.807723],[-74.13892,40.807188]]]}},{"type":"Feature","properties":{"GEO_ID":"34017","STATE":"34","COUNTY":"017","NAME":"Hudson","LSAD":"County","CENSUSAREA":46.191},"geometry":{"type":"Polygon","coordinates":[[[-74.020388,40.730317],[-74.021104,40.727468],[-74.021117,40.727417],[-74.021537,40.725213],[-74.021851,40.723565],[-74.023337,40.715765],[-74.023696,40.713882],[-74.024543,40.709436],[-74.038538,40.710741],[-74.038945,40.71026],[-74.040335,40.708618],[-74.048065,40.699487],[-74.051184,40.695802],[-74.053398,40.691228],[-74.056888,40.68402],[-74.060183,40.677213],[-74.062382,40.67267],[-74.065272,40.666701],[-74.066175,40.664836],[-74.068341,40.660362],[-74.069626,40.659917],[-74.083289,40.655184],[-74.087452,40.653742],[-74.094086,40.649703],[-74.094141,40.649694],[-74.120667,40.645498],[-74.125618,40.644714],[-74.128171,40.64431],[-74.131797,40.643737],[-74.135779,40.643107],[-74.141878,40.642142],[-74.143387,40.641903],[-74.161397,40.644092],[-74.159912,40.646365],[-74.153041,40.6548],[-74.142516,40.667515],[-74.140108,40.670421],[-74.13822,40.672699],[-74.136703,40.674444],[-74.136161,40.675084],[-74.133433,40.678434],[-74.131403,40.680902],[-74.122911,40.691172],[-74.117267,40.697808],[-74.114559,40.701072],[-74.113338,40.702477],[-74.112787,40.703102],[-74.117057,40.710381],[-74.120287,40.715901],[-74.121387,40.721001],[-74.120987,40.722901],[-74.118105,40.732442],[-74.116993,40.737125],[-74.117605,40.739638],[-74.121113,40.741658],[-74.122786,40.742101],[-74.137492,40.741398],[-74.142688,40.739301],[-74.145288,40.735701],[-74.148066,40.734292],[-74.151188,40.733901],[-74.153301,40.733713],[-74.153696,40.733679],[-74.155279,40.733538],[-74.15998,40.734485],[-74.161669,40.735781],[-74.161958,40.736007],[-74.163788,40.739201],[-74.165954,40.745107],[-74.166087,40.747402],[-74.166069,40.747495],[-74.165985,40.748036],[-74.165465,40.750996],[-74.164933,40.753567],[-74.164799,40.754718],[-74.164529,40.756298],[-74.163388,40.759401],[-74.162149,40.761373],[-74.160325,40.763293],[-74.158673,40.764942],[-74.157688,40.7661],[-74.15664,40.767986],[-74.156369,40.768896],[-74.155798,40.770815],[-74.155159,40.771732],[-74.153266,40.774189],[-74.150372,40.776893],[-74.148408,40.779406],[-74.148288,40.7797],[-74.148266,40.779876],[-74.148187,40.782409],[-74.147529,40.786491],[-74.146489,40.786089],[-74.142388,40.783853],[-74.141272,40.783254],[-74.140406,40.782788],[-74.138507,40.781767],[-74.136978,40.780965],[-74.136191,40.780553],[-74.134549,40.77972],[-74.133786,40.77934],[-74.132997,40.778948],[-74.132194,40.778549],[-74.130588,40.777732],[-74.130307,40.777522],[-74.129716,40.773837],[-74.127193,40.771574],[-74.124651,40.772052],[-74.118187,40.7701],[-74.115787,40.7711],[-74.112887,40.7758],[-74.110887,40.7768],[-74.109487,40.7774],[-74.104686,40.7767],[-74.103086,40.7756],[-74.100886,40.7759],[-74.100186,40.7734],[-74.099086,40.7726],[-74.097886,40.769901],[-74.099086,40.767701],[-74.097286,40.765601],[-74.095486,40.762301],[-74.093486,40.763201],[-74.090694,40.762114],[-74.088077,40.767542],[-74.090316,40.775819],[-74.089263,40.780046],[-74.083351,40.786316],[-74.081794,40.787994],[-74.077787,40.792796],[-74.077,40.796379],[-74.071399,40.797241],[-74.06855,40.798658],[-74.067194,40.800935],[-74.065135,40.80302],[-74.060685,40.8057],[-74.054469,40.806984],[-74.044977,40.807702],[-74.036148,40.807963],[-74.032084,40.8129],[-74.028684,40.8128],[-74.028869,40.816036],[-74.028207,40.816514],[-74.026256,40.816174],[-74.02474,40.814869],[-74.025281,40.815902],[-74.023581,40.816484],[-74.023224,40.818385],[-74.020581,40.818701],[-74.020442,40.82063],[-74.017204,40.823541],[-74.013625,40.822909],[-74.010983,40.8205],[-74.013157,40.818078],[-74.012583,40.8159],[-74.009561,40.814576],[-74.008733,40.81396],[-74.008044,40.813674],[-74.007483,40.8133],[-74.005048,40.812126],[-74.004156,40.81164],[-74.002583,40.8108],[-74.002485,40.810757],[-74.000984,40.8101],[-74.000873,40.810045],[-74.00058,40.8099],[-73.998,40.80847],[-73.996483,40.8075],[-73.995723,40.80712],[-73.994783,40.8067],[-73.994412,40.806453],[-73.994183,40.8063],[-73.993083,40.8057],[-73.993505,40.803162],[-73.993509,40.801092],[-73.992387,40.800697],[-73.992214,40.800623],[-73.984822,40.797444],[-73.991568,40.788074],[-73.992857,40.786282],[-73.993791,40.784985],[-73.994691,40.783735],[-73.995708,40.782322],[-73.997238,40.780197],[-73.998453,40.778509],[-74.000223,40.776049],[-74.001395,40.774422],[-74.005895,40.76817],[-74.009184,40.763601],[-74.011494,40.760086],[-74.013784,40.756601],[-74.015611,40.74933],[-74.017043,40.743629],[-74.01779,40.740659],[-74.020388,40.730317]]]}},{"type":"Feature","properties":{"GEO_ID":"34021","STATE":"34","COUNTY":"021","NAME":"Mercer","LSAD":"County","CENSUSAREA":224.557},"geometry":{"type":"Polygon","coordinates":[[[-74.778305,40.219708],[-74.781206,40.221508],[-74.784262,40.22322],[-74.785679,40.224014],[-74.787195,40.224864],[-74.789163,40.225966],[-74.795306,40.229408],[-74.801256,40.231645],[-74.819507,40.238508],[-74.823907,40.241508],[-74.824077,40.241572],[-74.836307,40.246208],[-74.842308,40.250508],[-74.846608,40.258808],[-74.846765,40.259071],[-74.853108,40.269707],[-74.856508,40.277407],[-74.860492,40.284584],[-74.864692,40.290684],[-74.868209,40.295207],[-74.880609,40.305607],[-74.882828,40.307212],[-74.886412,40.309803],[-74.887109,40.310307],[-74.891609,40.313007],[-74.896409,40.315107],[-74.90331,40.315607],[-74.90831,40.316907],[-74.91741,40.322406],[-74.92681,40.329406],[-74.933111,40.333106],[-74.939711,40.338006],[-74.942954,40.341643],[-74.942909,40.341683],[-74.941675,40.341425],[-74.932277,40.339427],[-74.856262,40.346695],[-74.856645,40.347588],[-74.867783,40.373178],[-74.869843,40.377845],[-74.830361,40.38208],[-74.81901,40.383236],[-74.802006,40.384921],[-74.808538,40.416655],[-74.787975,40.419213],[-74.748147,40.424156],[-74.741058,40.411592],[-74.734992,40.399049],[-74.722161,40.375155],[-74.718704,40.376608],[-74.710697,40.378218],[-74.70788,40.379305],[-74.703387,40.379989],[-74.700698,40.380621],[-74.697861,40.380847],[-74.688037,40.382562],[-74.679298,40.383595],[-74.67919,40.383609],[-74.678729,40.383682],[-74.67475,40.384195],[-74.671581,40.385741],[-74.6542,40.390903],[-74.653814,40.391003],[-74.651469,40.390594],[-74.644043,40.389057],[-74.630348,40.386033],[-74.622744,40.384421],[-74.618495,40.380217],[-74.617525,40.377862],[-74.619591,40.374397],[-74.620478,40.370093],[-74.622001,40.367206],[-74.623879,40.366605],[-74.624901,40.365406],[-74.626736,40.356413],[-74.629914,40.345698],[-74.630001,40.34525],[-74.630001,40.343407],[-74.630101,40.340607],[-74.628986,40.338892],[-74.623304,40.334404],[-74.624395,40.329163],[-74.622514,40.328334],[-74.622785,40.325382],[-74.621929,40.324362],[-74.615493,40.325006],[-74.613741,40.324185],[-74.613157,40.323945],[-74.607943,40.321925],[-74.60361,40.321376],[-74.600564,40.315587],[-74.5967,40.314608],[-74.593825,40.315279],[-74.5896,40.314208],[-74.588728,40.313724],[-74.585665,40.313213],[-74.584145,40.308884],[-74.583119,40.306156],[-74.580831,40.304192],[-74.575563,40.30288],[-74.572559,40.301054],[-74.570657,40.299581],[-74.567575,40.299874],[-74.56492,40.296921],[-74.559199,40.295608],[-74.557279,40.292004],[-74.553398,40.290708],[-74.549872,40.290731],[-74.545964,40.291313],[-74.544891,40.292379],[-74.54204,40.291333],[-74.539749,40.288576],[-74.53654,40.289432],[-74.533585,40.292282],[-74.528591,40.294297],[-74.526863,40.29309],[-74.521998,40.290125],[-74.522255,40.286561],[-74.520802,40.286591],[-74.514752,40.2871],[-74.512066,40.285026],[-74.511273,40.283288],[-74.505246,40.280484],[-74.503852,40.28082],[-74.501897,40.279109],[-74.498681,40.280497],[-74.490919,40.277561],[-74.49074,40.277606],[-74.490604,40.277488],[-74.490187,40.277315],[-74.490052,40.27718],[-74.489829,40.277026],[-74.489498,40.276853],[-74.488797,40.276608],[-74.487095,40.275158],[-74.482379,40.273812],[-74.482476,40.267316],[-74.484287,40.253299],[-74.487344,40.253143],[-74.487472,40.252131],[-74.485923,40.249611],[-74.483999,40.248548],[-74.482198,40.246423],[-74.481397,40.243455],[-74.481589,40.243068],[-74.487496,40.24011],[-74.496269,40.236388],[-74.516897,40.22721],[-74.526561,40.223521],[-74.542912,40.216653],[-74.543198,40.21651],[-74.546773,40.212655],[-74.5486,40.207685],[-74.556988,40.199984],[-74.560038,40.194778],[-74.562591,40.189943],[-74.565044,40.188218],[-74.570429,40.185722],[-74.574292,40.187042],[-74.581433,40.185027],[-74.58624,40.183853],[-74.589444,40.181393],[-74.593429,40.179703],[-74.595489,40.179695],[-74.596881,40.18609],[-74.599635,40.186791],[-74.613529,40.182672],[-74.614246,40.182474],[-74.609642,40.174178],[-74.604028,40.16542],[-74.597888,40.154929],[-74.596593,40.153097],[-74.591781,40.144142],[-74.587847,40.138237],[-74.59477,40.137875],[-74.602185,40.136933],[-74.607461,40.139548],[-74.606741,40.140575],[-74.610102,40.139693],[-74.612867,40.140599],[-74.615116,40.140473],[-74.616407,40.141597],[-74.619221,40.140426],[-74.620526,40.141266],[-74.621945,40.141148],[-74.623474,40.142401],[-74.62232,40.14487],[-74.623519,40.14596],[-74.624,40.149065],[-74.627261,40.149457],[-74.627441,40.148705],[-74.630035,40.148767],[-74.631606,40.150431],[-74.633314,40.149029],[-74.634731,40.151456],[-74.637956,40.151934],[-74.638432,40.154203],[-74.64168,40.155196],[-74.642847,40.154183],[-74.646721,40.156267],[-74.647834,40.155533],[-74.650948,40.158644],[-74.654533,40.158516],[-74.655186,40.15999],[-74.655207,40.160095],[-74.655307,40.160151],[-74.657957,40.160948],[-74.658995,40.162148],[-74.661027,40.162139],[-74.662171,40.165235],[-74.665112,40.164737],[-74.665802,40.166156],[-74.66776,40.166679],[-74.669394,40.166699],[-74.669828,40.165375],[-74.670698,40.166625],[-74.673505,40.167102],[-74.675696,40.165748],[-74.677517,40.16623],[-74.677332,40.167285],[-74.674253,40.170162],[-74.675627,40.172338],[-74.674236,40.173525],[-74.679404,40.17368],[-74.679451,40.173665],[-74.679559,40.173758],[-74.680259,40.175895],[-74.68273,40.176677],[-74.684841,40.178118],[-74.685554,40.175444],[-74.686549,40.177267],[-74.69054,40.176915],[-74.692871,40.179469],[-74.695876,40.178905],[-74.69478,40.182544],[-74.697403,40.182458],[-74.702421,40.184223],[-74.704552,40.182173],[-74.708279,40.181904],[-74.711072,40.180709],[-74.709736,40.17875],[-74.710523,40.17736],[-74.712986,40.175704],[-74.712711,40.174438],[-74.71086,40.172847],[-74.708423,40.171846],[-74.708886,40.170311],[-74.710782,40.168045],[-74.710106,40.166724],[-74.704607,40.16903],[-74.704599,40.16722],[-74.706474,40.161619],[-74.7084,40.160064],[-74.71101,40.157142],[-74.71292,40.156095],[-74.713818,40.152655],[-74.716,40.15139],[-74.719468,40.147701],[-74.724134,40.14731],[-74.722604,40.15001],[-74.721604,40.15381],[-74.721504,40.158409],[-74.722304,40.160609],[-74.733804,40.174509],[-74.737205,40.177609],[-74.744105,40.181009],[-74.751705,40.183309],[-74.751943,40.183483],[-74.754305,40.185209],[-74.755605,40.186709],[-74.756905,40.189409],[-74.760605,40.198909],[-74.763997,40.203647],[-74.766905,40.207709],[-74.767136,40.208157],[-74.767627,40.20911],[-74.770406,40.214508],[-74.771117,40.215172],[-74.77136,40.215399],[-74.778305,40.219708]]]}},{"type":"Feature","properties":{"GEO_ID":"34023","STATE":"34","COUNTY":"023","NAME":"Middlesex","LSAD":"County","CENSUSAREA":308.914},"geometry":{"type":"Polygon","coordinates":[[[-74.208956,40.576562],[-74.208988,40.576304],[-74.212017,40.568106],[-74.214788,40.560604],[-74.218189,40.557204],[-74.229036,40.558823],[-74.231589,40.559204],[-74.232261,40.558826],[-74.248641,40.549601],[-74.250346,40.545157],[-74.251441,40.542301],[-74.250814,40.539728],[-74.246237,40.520963],[-74.253004,40.514287],[-74.25682,40.510522],[-74.259192,40.508182],[-74.260694,40.5067],[-74.263568,40.503864],[-74.265198,40.502256],[-74.266796,40.500679],[-74.26829,40.499205],[-74.269998,40.495014],[-74.27269,40.488405],[-74.271959,40.486025],[-74.271562,40.484734],[-74.269839,40.479125],[-74.26759,40.471806],[-74.267164,40.471275],[-74.261889,40.464706],[-74.257962,40.463631],[-74.256801,40.463313],[-74.236689,40.457806],[-74.225035,40.453301],[-74.225357,40.453086],[-74.225177,40.452674],[-74.225249,40.452537],[-74.222789,40.451188],[-74.227639,40.444529],[-74.232218,40.445017],[-74.23379,40.443309],[-74.235496,40.44429],[-74.240385,40.439022],[-74.245267,40.433704],[-74.247207,40.431588],[-74.247371,40.431459],[-74.247383,40.429994],[-74.247388,40.429893],[-74.247832,40.416055],[-74.247963,40.412192],[-74.249689,40.411107],[-74.248314,40.408206],[-74.248308,40.4081],[-74.248304,40.407459],[-74.248288,40.40733],[-74.248293,40.407301],[-74.251456,40.404113],[-74.260521,40.397037],[-74.262658,40.395356],[-74.273848,40.386526],[-74.282609,40.37959],[-74.291074,40.373006],[-74.299022,40.366807],[-74.304883,40.362229],[-74.305174,40.362],[-74.312916,40.355942],[-74.327404,40.344579],[-74.33784,40.336339],[-74.35249,40.324809],[-74.356077,40.322003],[-74.360699,40.318386],[-74.36265,40.316856],[-74.3758,40.306432],[-74.378294,40.30435],[-74.379247,40.303451],[-74.381135,40.301546],[-74.394112,40.288463],[-74.394434,40.287759],[-74.393624,40.286042],[-74.394248,40.283385],[-74.393167,40.28186],[-74.393517,40.279574],[-74.396586,40.278675],[-74.408085,40.273791],[-74.435996,40.261907],[-74.436538,40.261677],[-74.461017,40.251122],[-74.464301,40.252245],[-74.484287,40.253299],[-74.482476,40.267316],[-74.482379,40.273812],[-74.487095,40.275158],[-74.488797,40.276608],[-74.489498,40.276853],[-74.489829,40.277026],[-74.490052,40.27718],[-74.490187,40.277315],[-74.490604,40.277488],[-74.49074,40.277606],[-74.490919,40.277561],[-74.498681,40.280497],[-74.501897,40.279109],[-74.503852,40.28082],[-74.505246,40.280484],[-74.511273,40.283288],[-74.512066,40.285026],[-74.514752,40.2871],[-74.520802,40.286591],[-74.522255,40.286561],[-74.521998,40.290125],[-74.526863,40.29309],[-74.528591,40.294297],[-74.533585,40.292282],[-74.53654,40.289432],[-74.539749,40.288576],[-74.54204,40.291333],[-74.544891,40.292379],[-74.545964,40.291313],[-74.549872,40.290731],[-74.553398,40.290708],[-74.557279,40.292004],[-74.559199,40.295608],[-74.56492,40.296921],[-74.567575,40.299874],[-74.570657,40.299581],[-74.572559,40.301054],[-74.575563,40.30288],[-74.580831,40.304192],[-74.583119,40.306156],[-74.584145,40.308884],[-74.585665,40.313213],[-74.588728,40.313724],[-74.5896,40.314208],[-74.593825,40.315279],[-74.5967,40.314608],[-74.600564,40.315587],[-74.60361,40.321376],[-74.607943,40.321925],[-74.613157,40.323945],[-74.613741,40.324185],[-74.615493,40.325006],[-74.621929,40.324362],[-74.622785,40.325382],[-74.622514,40.328334],[-74.624395,40.329163],[-74.623304,40.334404],[-74.628986,40.338892],[-74.630101,40.340607],[-74.630001,40.343407],[-74.630001,40.34525],[-74.629914,40.345698],[-74.626736,40.356413],[-74.624901,40.365406],[-74.623879,40.366605],[-74.622001,40.367206],[-74.620478,40.370093],[-74.619591,40.374397],[-74.6134,40.37562],[-74.602564,40.38071],[-74.596584,40.385142],[-74.595262,40.386468],[-74.591843,40.392027],[-74.587804,40.394264],[-74.58742,40.399538],[-74.585831,40.403402],[-74.586209,40.406299],[-74.586016,40.407259],[-74.585277,40.410549],[-74.585998,40.416515],[-74.585616,40.417485],[-74.584173,40.41869],[-74.57843,40.421281],[-74.576164,40.422304],[-74.571633,40.423908],[-74.569873,40.424531],[-74.560467,40.42797],[-74.555686,40.429739],[-74.555038,40.429978],[-74.551968,40.431262],[-74.549305,40.432407],[-74.547315,40.433275],[-74.546766,40.433515],[-74.539735,40.436713],[-74.53619,40.438326],[-74.535058,40.4391],[-74.531476,40.441383],[-74.52965,40.442547],[-74.526567,40.444851],[-74.520644,40.451002],[-74.520338,40.451278],[-74.520117,40.451427],[-74.514384,40.455287],[-74.512389,40.456621],[-74.512,40.45697],[-74.510695,40.458139],[-74.510485,40.458346],[-74.507814,40.460985],[-74.50704,40.461466],[-74.504476,40.463059],[-74.502473,40.464313],[-74.50212,40.464538],[-74.494502,40.469606],[-74.494275,40.469807],[-74.49364,40.470364],[-74.493536,40.470465],[-74.489524,40.474415],[-74.484313,40.480174],[-74.482344,40.481751],[-74.479472,40.48337],[-74.478499,40.483918],[-74.475889,40.484648],[-74.47245,40.485612],[-74.47171,40.485819],[-74.468209,40.486845],[-74.463575,40.489049],[-74.463231,40.489291],[-74.46253,40.48968],[-74.459922,40.491015],[-74.459084,40.496063],[-74.46078,40.498628],[-74.466268,40.502241],[-74.467277,40.505005],[-74.467228,40.505222],[-74.467291,40.505634],[-74.467181,40.508425],[-74.467425,40.508722],[-74.469507,40.509221],[-74.471554,40.509761],[-74.477776,40.510826],[-74.480297,40.511203],[-74.481606,40.511922],[-74.482297,40.512303],[-74.485189,40.516024],[-74.489275,40.521381],[-74.490547,40.523048],[-74.495444,40.529433],[-74.497941,40.531038],[-74.499362,40.531951],[-74.500188,40.532407],[-74.503035,40.533971],[-74.50718,40.536632],[-74.507852,40.537328],[-74.511611,40.539779],[-74.514622,40.542711],[-74.515782,40.544955],[-74.516371,40.546601],[-74.516756,40.549229],[-74.517353,40.551972],[-74.519503,40.555324],[-74.523836,40.558757],[-74.527025,40.559601],[-74.524833,40.561908],[-74.525422,40.566549],[-74.525899,40.568507],[-74.523818,40.569519],[-74.521122,40.574052],[-74.515478,40.579394],[-74.516009,40.581216],[-74.512183,40.582029],[-74.508021,40.584962],[-74.504985,40.58616],[-74.502041,40.583846],[-74.501831,40.585291],[-74.499572,40.5868],[-74.497828,40.585912],[-74.492838,40.587452],[-74.490215,40.586673],[-74.485647,40.588963],[-74.483064,40.589515],[-74.478087,40.593371],[-74.478042,40.59343],[-74.477793,40.593757],[-74.477476,40.594065],[-74.474825,40.595644],[-74.47015,40.598403],[-74.46572,40.598126],[-74.463351,40.599245],[-74.458197,40.594502],[-74.4568,40.5955],[-74.455865,40.595502],[-74.444601,40.596494],[-74.437596,40.597162],[-74.437334,40.597188],[-74.428296,40.598002],[-74.42641,40.598112],[-74.424699,40.598513],[-74.420946,40.598767],[-74.416106,40.59891],[-74.413477,40.599399],[-74.407464,40.599803],[-74.406569,40.599922],[-74.402272,40.600288],[-74.400795,40.600503],[-74.394634,40.600901],[-74.390095,40.601303],[-74.377823,40.601909],[-74.372722,40.60231],[-74.359118,40.603539],[-74.3584,40.603602],[-74.357292,40.603803],[-74.356866,40.603803],[-74.346893,40.604703],[-74.338493,40.605503],[-74.331527,40.606213],[-74.3233,40.606827],[-74.322321,40.606949],[-74.320692,40.607203],[-74.313199,40.60801],[-74.311892,40.608103],[-74.310892,40.608103],[-74.310449,40.608155],[-74.308792,40.608403],[-74.303392,40.608903],[-74.303292,40.607803],[-74.303492,40.607203],[-74.304722,40.606629],[-74.303134,40.605711],[-74.304173,40.60323],[-74.304384,40.602725],[-74.305326,40.600586],[-74.302162,40.598864],[-74.300301,40.598285],[-74.299809,40.598027],[-74.297722,40.596625],[-74.296741,40.595966],[-74.294909,40.594854],[-74.295064,40.594488],[-74.292748,40.59286],[-74.292591,40.592703],[-74.292494,40.59263],[-74.291391,40.591903],[-74.290861,40.592007],[-74.280598,40.593918],[-74.279385,40.594134],[-74.278091,40.594403],[-74.272792,40.595329],[-74.270017,40.595828],[-74.266122,40.596335],[-74.26016,40.597374],[-74.258114,40.60225],[-74.25381,40.600989],[-74.24779,40.600103],[-74.243642,40.599744],[-74.242488,40.599771],[-74.235905,40.602512],[-74.231821,40.598908],[-74.23124,40.59899],[-74.230533,40.599142],[-74.221958,40.600199],[-74.218124,40.601413],[-74.215101,40.604074],[-74.21287,40.602035],[-74.212032,40.598372],[-74.210741,40.597032],[-74.206731,40.594569],[-74.207672,40.586951],[-74.208956,40.576562]]]}},{"type":"Feature","properties":{"GEO_ID":"34025","STATE":"34","COUNTY":"025","NAME":"Monmouth","LSAD":"County","CENSUSAREA":468.793},"geometry":{"type":"Polygon","coordinates":[[[-73.994833,40.23287],[-73.9957,40.230172],[-73.996117,40.228872],[-73.997554,40.224398],[-73.998286,40.222121],[-73.998652,40.22098],[-73.999576,40.218105],[-73.999914,40.217052],[-74.002634,40.208581],[-74.006848,40.195461],[-74.008205,40.191237],[-74.009398,40.187521],[-74.011193,40.181934],[-74.012189,40.178833],[-74.012783,40.176983],[-74.013203,40.175676],[-74.013649,40.174286],[-74.016017,40.166914],[-74.020706,40.152314],[-74.02523,40.13823],[-74.025639,40.136956],[-74.030181,40.122814],[-74.031192,40.117706],[-74.031825,40.114509],[-74.032326,40.111977],[-74.03408,40.103115],[-74.031861,40.101047],[-74.038643,40.104456],[-74.040524,40.10404],[-74.044121,40.105333],[-74.049694,40.104085],[-74.052286,40.102493],[-74.055783,40.10106],[-74.057583,40.097305],[-74.060584,40.096629],[-74.064348,40.093473],[-74.070251,40.089406],[-74.071292,40.089168],[-74.075087,40.091531],[-74.077925,40.092543],[-74.08385,40.095843],[-74.08559,40.097611],[-74.085878,40.09797],[-74.090011,40.102472],[-74.090845,40.103833],[-74.094222,40.107509],[-74.093667,40.111401],[-74.094945,40.11338],[-74.094061,40.115005],[-74.095281,40.117159],[-74.095678,40.117634],[-74.096152,40.118472],[-74.09626,40.118881],[-74.096384,40.119336],[-74.096504,40.119562],[-74.096723,40.120135],[-74.096201,40.12463],[-74.095919,40.128744],[-74.097336,40.129028],[-74.099039,40.127781],[-74.100941,40.130012],[-74.102069,40.130244],[-74.103865,40.132658],[-74.103345,40.134412],[-74.107681,40.137008],[-74.112069,40.13297],[-74.122579,40.123903],[-74.127816,40.119081],[-74.129498,40.117565],[-74.129673,40.117401],[-74.130438,40.116685],[-74.135642,40.111764],[-74.137064,40.110545],[-74.14386,40.104299],[-74.149976,40.098812],[-74.15154,40.099096],[-74.154404,40.099719],[-74.155064,40.101604],[-74.157842,40.103119],[-74.158079,40.10495],[-74.160306,40.10702],[-74.164099,40.106948],[-74.171905,40.107709],[-74.178813,40.110897],[-74.178933,40.110871],[-74.179241,40.1109],[-74.179506,40.110833],[-74.17965,40.110735],[-74.179834,40.110685],[-74.180064,40.110672],[-74.180135,40.110639],[-74.180104,40.110521],[-74.180193,40.110479],[-74.180425,40.110477],[-74.180672,40.110505],[-74.182627,40.110121],[-74.185582,40.11137],[-74.189276,40.110722],[-74.194078,40.112186],[-74.197709,40.111773],[-74.198052,40.111993],[-74.198,40.111686],[-74.198202,40.111494],[-74.198796,40.111813],[-74.199268,40.111775],[-74.203888,40.11255],[-74.210309,40.1107],[-74.210729,40.110749],[-74.211444,40.110504],[-74.211921,40.110144],[-74.21224,40.110104],[-74.219025,40.110045],[-74.224411,40.108982],[-74.232836,40.110216],[-74.234853,40.111463],[-74.239604,40.112383],[-74.242957,40.115797],[-74.244665,40.118578],[-74.243216,40.122693],[-74.242144,40.123249],[-74.241818,40.129299],[-74.247713,40.139027],[-74.247869,40.139247],[-74.247919,40.13943],[-74.248121,40.139651],[-74.248089,40.139751],[-74.250055,40.144204],[-74.253481,40.147635],[-74.253723,40.147724],[-74.25374,40.147736],[-74.257092,40.149173],[-74.259792,40.148979],[-74.258421,40.152286],[-74.260186,40.156084],[-74.259951,40.156259],[-74.260144,40.156432],[-74.260172,40.156648],[-74.260085,40.156756],[-74.259823,40.156841],[-74.259778,40.157015],[-74.259836,40.157282],[-74.258301,40.160195],[-74.260623,40.165613],[-74.263763,40.168264],[-74.292802,40.168824],[-74.305577,40.169076],[-74.325567,40.169611],[-74.346752,40.17024],[-74.349772,40.170295],[-74.406777,40.172355],[-74.416715,40.165362],[-74.421718,40.161866],[-74.458389,40.13624],[-74.469543,40.128578],[-74.507415,40.103507],[-74.508733,40.102591],[-74.527323,40.090276],[-74.533474,40.087413],[-74.553105,40.07913],[-74.587847,40.138237],[-74.591781,40.144142],[-74.596593,40.153097],[-74.597888,40.154929],[-74.604028,40.16542],[-74.609642,40.174178],[-74.614246,40.182474],[-74.613529,40.182672],[-74.599635,40.186791],[-74.596881,40.18609],[-74.595489,40.179695],[-74.593429,40.179703],[-74.589444,40.181393],[-74.58624,40.183853],[-74.581433,40.185027],[-74.574292,40.187042],[-74.570429,40.185722],[-74.565044,40.188218],[-74.562591,40.189943],[-74.560038,40.194778],[-74.556988,40.199984],[-74.5486,40.207685],[-74.546773,40.212655],[-74.543198,40.21651],[-74.542912,40.216653],[-74.526561,40.223521],[-74.516897,40.22721],[-74.496269,40.236388],[-74.487496,40.24011],[-74.481589,40.243068],[-74.481397,40.243455],[-74.482198,40.246423],[-74.483999,40.248548],[-74.485923,40.249611],[-74.487472,40.252131],[-74.487344,40.253143],[-74.484287,40.253299],[-74.464301,40.252245],[-74.461017,40.251122],[-74.436538,40.261677],[-74.435996,40.261907],[-74.408085,40.273791],[-74.396586,40.278675],[-74.393517,40.279574],[-74.393167,40.28186],[-74.394248,40.283385],[-74.393624,40.286042],[-74.394434,40.287759],[-74.394112,40.288463],[-74.381135,40.301546],[-74.379247,40.303451],[-74.378294,40.30435],[-74.3758,40.306432],[-74.36265,40.316856],[-74.360699,40.318386],[-74.356077,40.322003],[-74.35249,40.324809],[-74.33784,40.336339],[-74.327404,40.344579],[-74.312916,40.355942],[-74.305174,40.362],[-74.304883,40.362229],[-74.299022,40.366807],[-74.291074,40.373006],[-74.282609,40.37959],[-74.273848,40.386526],[-74.262658,40.395356],[-74.260521,40.397037],[-74.251456,40.404113],[-74.248293,40.407301],[-74.248288,40.40733],[-74.248304,40.407459],[-74.248308,40.4081],[-74.248314,40.408206],[-74.249689,40.411107],[-74.247963,40.412192],[-74.247832,40.416055],[-74.247388,40.429893],[-74.247383,40.429994],[-74.247371,40.431459],[-74.247207,40.431588],[-74.245267,40.433704],[-74.240385,40.439022],[-74.235496,40.44429],[-74.23379,40.443309],[-74.232218,40.445017],[-74.227639,40.444529],[-74.222789,40.451188],[-74.225249,40.452537],[-74.225177,40.452674],[-74.225357,40.453086],[-74.225035,40.453301],[-74.224047,40.452919],[-74.222959,40.452499],[-74.209788,40.447407],[-74.208948,40.445843],[-74.207339,40.44285],[-74.206212,40.440752],[-74.206188,40.440707],[-74.206212,40.440509],[-74.206243,40.440249],[-74.206419,40.438789],[-74.208063,40.437856],[-74.208655,40.43752],[-74.207337,40.435625],[-74.207205,40.435434],[-74.202388,40.43876],[-74.202128,40.43894],[-74.200091,40.439449],[-74.195609,40.44057],[-74.194975,40.440728],[-74.193908,40.440995],[-74.191309,40.44299],[-74.188349,40.446702],[-74.187787,40.447407],[-74.187748,40.447432],[-74.174788,40.455607],[-74.174787,40.455607],[-74.174787,40.455606],[-74.174893,40.454491],[-74.174898,40.454347],[-74.175069,40.449318],[-74.175074,40.449144],[-74.176842,40.44774],[-74.176777,40.44769],[-74.175346,40.446607],[-74.174309,40.447386],[-74.169977,40.45064],[-74.16875,40.449853],[-74.167009,40.448737],[-74.166278,40.447296],[-74.166193,40.447128],[-74.16403,40.448311],[-74.164029,40.448312],[-74.163907,40.448331],[-74.163314,40.448424],[-74.157787,40.446607],[-74.156371,40.44696],[-74.155617,40.447147],[-74.153611,40.447647],[-74.152686,40.447344],[-74.151952,40.448062],[-74.147664,40.449171],[-74.147566,40.449197],[-74.142886,40.450407],[-74.139886,40.453407],[-74.138415,40.454468],[-74.135823,40.455196],[-74.135691,40.455163],[-74.134699,40.454915],[-74.133727,40.454672],[-74.131135,40.453245],[-74.127595,40.451138],[-74.127466,40.451061],[-74.124692,40.44958],[-74.122327,40.448258],[-74.116901,40.446085],[-74.116863,40.446069],[-74.116705,40.446028],[-74.103048,40.442391],[-74.092278,40.439524],[-74.091518,40.439321],[-74.090135,40.438953],[-74.088085,40.438407],[-74.081345,40.435745],[-74.076869,40.433977],[-74.076185,40.433707],[-74.073862,40.432222],[-74.06721,40.427968],[-74.064343,40.426134],[-74.060638,40.423765],[-74.060405,40.423617],[-74.058984,40.422708],[-74.054799,40.421275],[-74.053551,40.420848],[-74.053223,40.420736],[-74.048036,40.41896],[-74.047884,40.418908],[-74.036761,40.416818],[-74.006383,40.411108],[-74.001538,40.410987],[-73.998505,40.410911],[-73.995486,40.419472],[-73.995486,40.419474],[-73.991682,40.442908],[-74.006077,40.464625],[-74.017783,40.472207],[-74.017917,40.474338],[-74.014031,40.476471],[-74.0071,40.475298],[-73.995683,40.468707],[-73.978282,40.440208],[-73.976982,40.408508],[-73.975605,40.399459],[-73.972989,40.382274],[-73.971381,40.371709],[-73.971381,40.371705],[-73.971381,40.361502],[-73.971381,40.34801],[-73.971813,40.344542],[-73.971888,40.343938],[-73.972495,40.33907],[-73.97339,40.331888],[-73.974569,40.322425],[-73.975639,40.31384],[-73.975668,40.31361],[-73.975908,40.31168],[-73.976447,40.307354],[-73.977115,40.301997],[-73.977442,40.299373],[-73.97852,40.294296],[-73.981681,40.279411],[-73.982578,40.276186],[-73.984428,40.269537],[-73.984983,40.267539],[-73.986977,40.260372],[-73.993292,40.237669],[-73.993386,40.237378],[-73.994833,40.23287]]]}},{"type":"Feature","properties":{"GEO_ID":"34027","STATE":"34","COUNTY":"027","NAME":"Morris","LSAD":"County","CENSUSAREA":460.177},"geometry":{"type":"Polygon","coordinates":[[[-74.861666,40.803505],[-74.859902,40.801094],[-74.855688,40.803611],[-74.850827,40.803785],[-74.84935,40.805212],[-74.847078,40.808261],[-74.846698,40.811086],[-74.844198,40.811055],[-74.841978,40.813249],[-74.840289,40.815692],[-74.835024,40.819248],[-74.834718,40.822141],[-74.832979,40.823485],[-74.830084,40.825692],[-74.831685,40.828052],[-74.831678,40.828172],[-74.831599,40.828283],[-74.827398,40.832355],[-74.822977,40.834678],[-74.818134,40.83716],[-74.82038,40.841265],[-74.823632,40.843655],[-74.821681,40.848501],[-74.820413,40.849731],[-74.817326,40.850852],[-74.813765,40.851522],[-74.810078,40.854624],[-74.809657,40.860164],[-74.802967,40.861913],[-74.80206,40.86461],[-74.807074,40.867777],[-74.808125,40.869562],[-74.805939,40.873519],[-74.805622,40.875097],[-74.806533,40.87688],[-74.806827,40.882127],[-74.803744,40.885715],[-74.799212,40.887711],[-74.794906,40.888611],[-74.791993,40.890137],[-74.790203,40.892926],[-74.79043,40.896215],[-74.78899,40.897238],[-74.783059,40.900352],[-74.779257,40.906172],[-74.776579,40.905119],[-74.767874,40.911823],[-74.766001,40.912626],[-74.764502,40.912111],[-74.762857,40.913339],[-74.761238,40.911981],[-74.760181,40.913405],[-74.75526,40.913756],[-74.751488,40.915501],[-74.751371,40.91775],[-74.747164,40.919929],[-74.73639,40.919145],[-74.731869,40.920823],[-74.728583,40.916368],[-74.722693,40.914673],[-74.720061,40.913217],[-74.713069,40.908425],[-74.712141,40.904563],[-74.71343,40.902351],[-74.71368,40.89994],[-74.711393,40.899141],[-74.706817,40.901497],[-74.704863,40.901818],[-74.704725,40.901836],[-74.704495,40.901927],[-74.704115,40.901942],[-74.696006,40.906498],[-74.692165,40.904432],[-74.688906,40.905198],[-74.688006,40.908798],[-74.683246,40.910105],[-74.679531,40.909192],[-74.677002,40.910853],[-74.675276,40.910992],[-74.675035,40.911534],[-74.670219,40.913803],[-74.664094,40.91804],[-74.659747,40.919378],[-74.65303,40.921623],[-74.651994,40.922762],[-74.651805,40.923298],[-74.651905,40.924098],[-74.653638,40.925909],[-74.653053,40.928821],[-74.651405,40.930798],[-74.645791,40.934146],[-74.640505,40.937298],[-74.6394,40.938639],[-74.636163,40.942639],[-74.63524,40.945004],[-74.634837,40.9507],[-74.636654,40.954105],[-74.640904,40.9591],[-74.641032,40.95935],[-74.641424,40.961365],[-74.640643,40.965338],[-74.638993,40.967267],[-74.632139,40.973241],[-74.63222,40.973651],[-74.625959,40.979662],[-74.614808,40.990284],[-74.614432,40.990643],[-74.606789,40.998027],[-74.594932,41.008199],[-74.584198,41.01709],[-74.571202,41.02776],[-74.548395,41.048018],[-74.536002,41.058497],[-74.52194,41.07075],[-74.505665,41.084187],[-74.502892,41.085904],[-74.500732,41.085974],[-74.499326,41.084898],[-74.498991,41.083459],[-74.495963,41.082225],[-74.495846,41.081286],[-74.493117,41.079888],[-74.49199,41.07834],[-74.489265,41.078001],[-74.487716,41.07638],[-74.48746,41.075124],[-74.488993,41.072312],[-74.48836,41.069772],[-74.487244,41.068005],[-74.486991,41.0656],[-74.488653,41.063148],[-74.492652,41.063219],[-74.495084,41.061667],[-74.501826,41.038964],[-74.500269,41.03831],[-74.499193,41.035427],[-74.497364,41.034149],[-74.496582,41.035511],[-74.491623,41.037809],[-74.488264,41.038477],[-74.488382,41.039128],[-74.484547,41.042794],[-74.48209,41.043117],[-74.481178,41.045556],[-74.474883,41.048133],[-74.470306,41.047816],[-74.464788,41.050034],[-74.461117,41.051959],[-74.457512,41.051861],[-74.44817,41.053744],[-74.444813,41.051864],[-74.441853,41.048991],[-74.441335,41.045897],[-74.440574,41.044081],[-74.437651,41.043005],[-74.432864,41.038044],[-74.429814,41.037942],[-74.42777,41.037109],[-74.427268,41.03599],[-74.428299,41.032297],[-74.431199,41.030297],[-74.4307,41.027798],[-74.4326,41.027698],[-74.433498,41.025397],[-74.434198,41.020297],[-74.429611,41.018266],[-74.425419,41.019233],[-74.423728,41.027596],[-74.421458,41.02854],[-74.417535,41.028638],[-74.411126,41.026325],[-74.409959,41.024946],[-74.406653,41.024287],[-74.403388,41.021833],[-74.402725,41.01981],[-74.399391,41.017289],[-74.391519,41.015902],[-74.389521,41.013629],[-74.389303,41.012431],[-74.386419,41.011696],[-74.382247,41.013959],[-74.376383,41.013621],[-74.371163,41.011394],[-74.365834,41.011699],[-74.363819,41.011342],[-74.363009,41.013169],[-74.359515,41.01415],[-74.35407,41.013274],[-74.351481,41.01099],[-74.351258,41.006896],[-74.35139,41.004593],[-74.349452,41.004329],[-74.348939,41.004418],[-74.348038,41.004537],[-74.346047,41.004628],[-74.341878,41.006956],[-74.341032,41.005902],[-74.338322,41.007043],[-74.334733,41.0063],[-74.334605,41.003719],[-74.33015,41.002753],[-74.328411,41.001419],[-74.327867,41.001161],[-74.327594,41.001109],[-74.326671,41.001112],[-74.321735,41.001418],[-74.315226,41.001991],[-74.309838,40.998484],[-74.305809,40.999141],[-74.301747,40.999021],[-74.300327,41.002743],[-74.298773,41.002824],[-74.297549,41.000588],[-74.298064,40.998771],[-74.297634,40.996497],[-74.29549,40.994839],[-74.295531,40.990966],[-74.292637,40.987806],[-74.296156,40.984632],[-74.296552,40.984351],[-74.297281,40.983576],[-74.297314,40.979761],[-74.294771,40.9788],[-74.2903,40.979854],[-74.284709,40.979001],[-74.281276,40.979953],[-74.281539,40.976647],[-74.277503,40.974428],[-74.27762,40.971332],[-74.280338,40.972315],[-74.281622,40.969191],[-74.280934,40.966689],[-74.279041,40.965866],[-74.280257,40.957838],[-74.276892,40.954744],[-74.277564,40.951029],[-74.27884,40.946137],[-74.279196,40.943336],[-74.280335,40.93966],[-74.281674,40.936747],[-74.281975,40.936648],[-74.282134,40.936204],[-74.28482,40.931401],[-74.289184,40.928725],[-74.288012,40.927277],[-74.288161,40.92444],[-74.284911,40.922978],[-74.285991,40.921949],[-74.28376,40.919901],[-74.284021,40.917343],[-74.278843,40.918482],[-74.278663,40.915936],[-74.271659,40.915711],[-74.270616,40.914429],[-74.266638,40.908887],[-74.267401,40.90777],[-74.269284,40.907904],[-74.271458,40.910196],[-74.271648,40.907329],[-74.273133,40.905951],[-74.27097,40.903189],[-74.271138,40.901651],[-74.272825,40.899933],[-74.272687,40.898185],[-74.272616,40.898021],[-74.272544,40.897939],[-74.27253,40.897886],[-74.271362,40.897632],[-74.270702,40.89692],[-74.271003,40.896992],[-74.271181,40.897084],[-74.271482,40.897131],[-74.273852,40.897055],[-74.280731,40.897684],[-74.282297,40.895622],[-74.284616,40.895231],[-74.283814,40.898019],[-74.286563,40.899094],[-74.281716,40.899942],[-74.281765,40.900843],[-74.285381,40.901361],[-74.28926,40.899404],[-74.291275,40.899776],[-74.292447,40.901225],[-74.291373,40.901714],[-74.292247,40.903205],[-74.291629,40.905499],[-74.296583,40.90604],[-74.300841,40.904609],[-74.30298,40.904352],[-74.302832,40.907188],[-74.305939,40.905315],[-74.31016,40.904665],[-74.312409,40.905399],[-74.314503,40.90379],[-74.318546,40.903229],[-74.318493,40.907545],[-74.32016,40.907967],[-74.321595,40.906895],[-74.322957,40.907308],[-74.322804,40.908834],[-74.326269,40.908499],[-74.327647,40.907336],[-74.325271,40.907367],[-74.32499,40.905879],[-74.32802,40.905626],[-74.329533,40.908653],[-74.330799,40.906769],[-74.334438,40.904988],[-74.335298,40.90211],[-74.337159,40.900004],[-74.337531,40.898475],[-74.334334,40.897555],[-74.334347,40.896294],[-74.337019,40.896265],[-74.338999,40.894069],[-74.335745,40.893059],[-74.3389,40.892087],[-74.339425,40.890365],[-74.338112,40.887758],[-74.33983,40.882065],[-74.340154,40.879437],[-74.337894,40.879427],[-74.337614,40.878206],[-74.33507,40.877426],[-74.337808,40.875101],[-74.334259,40.873471],[-74.33749,40.872207],[-74.336075,40.870406],[-74.33806,40.870059],[-74.336693,40.866545],[-74.332875,40.869174],[-74.331654,40.866926],[-74.331495,40.866854],[-74.330899,40.86695],[-74.326219,40.86612],[-74.321938,40.864038],[-74.320099,40.865999],[-74.317472,40.864874],[-74.318124,40.863046],[-74.320995,40.862361],[-74.319333,40.858113],[-74.321144,40.858529],[-74.324586,40.858153],[-74.326046,40.856491],[-74.325176,40.854109],[-74.326827,40.852758],[-74.32735,40.850673],[-74.32991,40.849161],[-74.328535,40.844667],[-74.325793,40.843914],[-74.327113,40.841867],[-74.329317,40.841475],[-74.329172,40.838299],[-74.330049,40.834618],[-74.328722,40.831754],[-74.333203,40.829434],[-74.334933,40.827626],[-74.3323,40.822068],[-74.334342,40.818416],[-74.339566,40.812824],[-74.344303,40.813719],[-74.349071,40.812641],[-74.350833,40.809089],[-74.350898,40.806798],[-74.356118,40.803799],[-74.358862,40.800572],[-74.359407,40.799943],[-74.359526,40.799875],[-74.364173,40.799042],[-74.364695,40.796145],[-74.366169,40.794786],[-74.366772,40.788568],[-74.366459,40.78332],[-74.36715,40.779982],[-74.36872,40.77907],[-74.372598,40.774854],[-74.370404,40.774449],[-74.369497,40.771421],[-74.371695,40.76737],[-74.369971,40.766969],[-74.370863,40.764008],[-74.37361,40.762801],[-74.376235,40.762749],[-74.377414,40.761152],[-74.375542,40.760731],[-74.37419,40.757999],[-74.367278,40.761067],[-74.367587,40.758066],[-74.364605,40.757844],[-74.361732,40.75594],[-74.357624,40.756117],[-74.357436,40.7546],[-74.359634,40.751154],[-74.363072,40.750403],[-74.367089,40.74933],[-74.367501,40.748516],[-74.364737,40.746441],[-74.366562,40.743889],[-74.370902,40.742757],[-74.37256,40.741587],[-74.371923,40.739229],[-74.370829,40.735753],[-74.372139,40.733978],[-74.374669,40.733545],[-74.377549,40.734278],[-74.380295,40.7333],[-74.377503,40.730032],[-74.379044,40.728904],[-74.384382,40.724385],[-74.386865,40.725684],[-74.39069,40.725499],[-74.390769,40.718294],[-74.392757,40.718046],[-74.39509,40.717273],[-74.399848,40.717836],[-74.402254,40.718001],[-74.40375,40.716023],[-74.40735,40.713461],[-74.408466,40.710106],[-74.411847,40.710345],[-74.413391,40.708966],[-74.413392,40.708966],[-74.413629,40.7084],[-74.4154,40.705781],[-74.418196,40.705301],[-74.424733,40.701957],[-74.426897,40.701711],[-74.428707,40.699119],[-74.429023,40.698754],[-74.430781,40.693453],[-74.434551,40.693575],[-74.437847,40.6919],[-74.439652,40.68972],[-74.444333,40.687969],[-74.448,40.685574],[-74.451853,40.685376],[-74.453029,40.682764],[-74.451617,40.679904],[-74.451542,40.679675],[-74.453275,40.677343],[-74.452584,40.676236],[-74.454573,40.67408],[-74.458721,40.674468],[-74.461231,40.673397],[-74.462074,40.671664],[-74.47002,40.667934],[-74.473046,40.669402],[-74.476412,40.666471],[-74.482306,40.666038],[-74.484835,40.665472],[-74.484118,40.663387],[-74.486083,40.662402],[-74.487346,40.663745],[-74.49119,40.663288],[-74.491615,40.661676],[-74.494019,40.66105],[-74.495399,40.662001],[-74.499395,40.661126],[-74.498786,40.659451],[-74.501722,40.658756],[-74.503862,40.659627],[-74.506131,40.658311],[-74.505137,40.657167],[-74.507595,40.652696],[-74.509871,40.65187],[-74.510463,40.650632],[-74.513011,40.649555],[-74.515323,40.651061],[-74.515856,40.650348],[-74.523627,40.649702],[-74.522078,40.650102],[-74.522675,40.651682],[-74.525729,40.651665],[-74.52619,40.652164],[-74.52377,40.653841],[-74.525835,40.653977],[-74.525959,40.656184],[-74.527275,40.659123],[-74.525617,40.660706],[-74.528867,40.662782],[-74.529705,40.664819],[-74.533691,40.66543],[-74.534387,40.667256],[-74.530064,40.667399],[-74.529118,40.669179],[-74.525733,40.670942],[-74.527826,40.677508],[-74.528512,40.681253],[-74.527853,40.684434],[-74.526386,40.685161],[-74.524327,40.689354],[-74.521475,40.688459],[-74.516849,40.689251],[-74.51675,40.690569],[-74.518924,40.69167],[-74.518501,40.693859],[-74.516251,40.693212],[-74.514409,40.694545],[-74.513699,40.697701],[-74.513838,40.700852],[-74.515381,40.702221],[-74.516717,40.702201],[-74.517796,40.705463],[-74.522111,40.70867],[-74.523701,40.70848],[-74.525828,40.709368],[-74.526846,40.710872],[-74.524799,40.712652],[-74.524208,40.715539],[-74.526084,40.715936],[-74.528722,40.717592],[-74.528949,40.719234],[-74.531299,40.719777],[-74.531512,40.721215],[-74.528827,40.728133],[-74.532678,40.730955],[-74.534907,40.730632],[-74.537981,40.732125],[-74.540226,40.73383],[-74.545079,40.733136],[-74.546033,40.734104],[-74.549086,40.73376],[-74.548534,40.738468],[-74.548999,40.740994],[-74.549383,40.745092],[-74.548751,40.74601],[-74.552851,40.749524],[-74.550924,40.751073],[-74.551869,40.753052],[-74.551914,40.754863],[-74.553197,40.756439],[-74.555253,40.757044],[-74.555771,40.758005],[-74.565901,40.756],[-74.570781,40.754875],[-74.590116,40.750565],[-74.618517,40.744137],[-74.619203,40.744001],[-74.63127,40.741111],[-74.658504,40.735],[-74.668619,40.733],[-74.682605,40.7297],[-74.689458,40.727782],[-74.721445,40.720556],[-74.724418,40.719455],[-74.724438,40.71948],[-74.724445,40.719482],[-74.725767,40.719255],[-74.732456,40.719928],[-74.742488,40.724104],[-74.742804,40.726085],[-74.752904,40.731026],[-74.76763,40.735396],[-74.774418,40.736714],[-74.793319,40.740187],[-74.798013,40.742189],[-74.798664,40.74165],[-74.803695,40.741733],[-74.808358,40.740979],[-74.813042,40.74114],[-74.813116,40.741982],[-74.816312,40.742694],[-74.823327,40.742287],[-74.823435,40.742266],[-74.82388,40.742358],[-74.824067,40.742445],[-74.827484,40.744072],[-74.829701,40.745791],[-74.842948,40.755963],[-74.844051,40.758545],[-74.848398,40.761331],[-74.869071,40.774373],[-74.889753,40.787832],[-74.889182,40.788806],[-74.885623,40.790829],[-74.883429,40.791367],[-74.880439,40.790576],[-74.876789,40.792442],[-74.875838,40.793702],[-74.873488,40.794488],[-74.870109,40.794755],[-74.867914,40.795878],[-74.864699,40.802901],[-74.861666,40.803505]]]}},{"type":"Feature","properties":{"GEO_ID":"34029","STATE":"34","COUNTY":"029","NAME":"Ocean","LSAD":"County","CENSUSAREA":628.781},"geometry":{"type":"Polygon","coordinates":[[[-74.28421,39.508614],[-74.288282,39.50537],[-74.292034,39.502381],[-74.302531,39.500171],[-74.304349,39.505303],[-74.304959,39.507024],[-74.311037,39.506715],[-74.311302,39.50543],[-74.312451,39.499869],[-74.321957,39.505144],[-74.326382,39.506332],[-74.337821,39.506882],[-74.354214,39.505572],[-74.360968,39.502027],[-74.37777,39.499121],[-74.380796,39.498537],[-74.397682,39.530397],[-74.4033,39.540325],[-74.405781,39.542391],[-74.410489,39.547852],[-74.415841,39.54945],[-74.416746,39.550831],[-74.416119,39.556023],[-74.417393,39.557255],[-74.416599,39.559211],[-74.41607,39.559568],[-74.414398,39.560977],[-74.414097,39.562396],[-74.417096,39.564112],[-74.418833,39.568583],[-74.41599,39.57046],[-74.412734,39.57022],[-74.410395,39.571021],[-74.408923,39.569599],[-74.405159,39.569593],[-74.403148,39.571784],[-74.400819,39.572242],[-74.398223,39.576683],[-74.396755,39.584591],[-74.394123,39.590527],[-74.392577,39.593954],[-74.390396,39.596201],[-74.390331,39.627049],[-74.390322,39.628455],[-74.389905,39.773372],[-74.417164,39.823184],[-74.434653,39.854803],[-74.449266,39.881242],[-74.470777,39.922591],[-74.484984,39.949827],[-74.495277,39.969638],[-74.498676,39.976236],[-74.506474,39.991205],[-74.514769,40.007677],[-74.52863,40.03668],[-74.533753,40.045245],[-74.53511,40.047558],[-74.537007,40.050532],[-74.540585,40.057028],[-74.540807,40.057392],[-74.543408,40.062249],[-74.544053,40.063419],[-74.548606,40.071506],[-74.553105,40.07913],[-74.533474,40.087413],[-74.527323,40.090276],[-74.508733,40.102591],[-74.507415,40.103507],[-74.469543,40.128578],[-74.458389,40.13624],[-74.421718,40.161866],[-74.416715,40.165362],[-74.406777,40.172355],[-74.349772,40.170295],[-74.346752,40.17024],[-74.325567,40.169611],[-74.305577,40.169076],[-74.292802,40.168824],[-74.263763,40.168264],[-74.260623,40.165613],[-74.258301,40.160195],[-74.259836,40.157282],[-74.259778,40.157015],[-74.259823,40.156841],[-74.260085,40.156756],[-74.260172,40.156648],[-74.260144,40.156432],[-74.259951,40.156259],[-74.260186,40.156084],[-74.258421,40.152286],[-74.259792,40.148979],[-74.257092,40.149173],[-74.25374,40.147736],[-74.253723,40.147724],[-74.253481,40.147635],[-74.250055,40.144204],[-74.248089,40.139751],[-74.248121,40.139651],[-74.247919,40.13943],[-74.247869,40.139247],[-74.247713,40.139027],[-74.241818,40.129299],[-74.242144,40.123249],[-74.243216,40.122693],[-74.244665,40.118578],[-74.242957,40.115797],[-74.239604,40.112383],[-74.234853,40.111463],[-74.232836,40.110216],[-74.224411,40.108982],[-74.219025,40.110045],[-74.21224,40.110104],[-74.211921,40.110144],[-74.211444,40.110504],[-74.210729,40.110749],[-74.210309,40.1107],[-74.203888,40.11255],[-74.199268,40.111775],[-74.198796,40.111813],[-74.198202,40.111494],[-74.198,40.111686],[-74.198052,40.111993],[-74.197709,40.111773],[-74.194078,40.112186],[-74.189276,40.110722],[-74.185582,40.11137],[-74.182627,40.110121],[-74.180672,40.110505],[-74.180425,40.110477],[-74.180193,40.110479],[-74.180104,40.110521],[-74.180135,40.110639],[-74.180064,40.110672],[-74.179834,40.110685],[-74.17965,40.110735],[-74.179506,40.110833],[-74.179241,40.1109],[-74.178933,40.110871],[-74.178813,40.110897],[-74.171905,40.107709],[-74.164099,40.106948],[-74.160306,40.10702],[-74.158079,40.10495],[-74.157842,40.103119],[-74.155064,40.101604],[-74.154404,40.099719],[-74.15154,40.099096],[-74.149976,40.098812],[-74.14386,40.104299],[-74.137064,40.110545],[-74.135642,40.111764],[-74.130438,40.116685],[-74.129673,40.117401],[-74.129498,40.117565],[-74.127816,40.119081],[-74.122579,40.123903],[-74.112069,40.13297],[-74.107681,40.137008],[-74.103345,40.134412],[-74.103865,40.132658],[-74.102069,40.130244],[-74.100941,40.130012],[-74.099039,40.127781],[-74.097336,40.129028],[-74.095919,40.128744],[-74.096201,40.12463],[-74.096723,40.120135],[-74.096504,40.119562],[-74.096384,40.119336],[-74.09626,40.118881],[-74.096152,40.118472],[-74.095678,40.117634],[-74.095281,40.117159],[-74.094061,40.115005],[-74.094945,40.11338],[-74.093667,40.111401],[-74.094222,40.107509],[-74.090845,40.103833],[-74.090011,40.102472],[-74.085878,40.09797],[-74.08559,40.097611],[-74.08385,40.095843],[-74.077925,40.092543],[-74.075087,40.091531],[-74.071292,40.089168],[-74.070251,40.089406],[-74.064348,40.093473],[-74.060584,40.096629],[-74.057583,40.097305],[-74.055783,40.10106],[-74.052286,40.102493],[-74.049694,40.104085],[-74.044121,40.105333],[-74.040524,40.10404],[-74.038643,40.104456],[-74.031861,40.101047],[-74.031318,40.100541],[-74.031956,40.100248],[-74.033546,40.099518],[-74.035741,40.092764],[-74.038148,40.085353],[-74.039421,40.081437],[-74.040844,40.075548],[-74.045069,40.058062],[-74.050245,40.036643],[-74.050384,40.036068],[-74.05263,40.02677],[-74.056574,40.010448],[-74.056622,40.010251],[-74.057663,40.00594],[-74.057815,40.005311],[-74.05819,40.003761],[-74.058798,40.001244],[-74.061859,39.988575],[-74.063932,39.979996],[-74.064135,39.979157],[-74.065118,39.974045],[-74.065133,39.97397],[-74.066029,39.969309],[-74.067967,39.959236],[-74.068758,39.955123],[-74.070049,39.948412],[-74.071728,39.939681],[-74.072259,39.936924],[-74.072919,39.93349],[-74.074571,39.924904],[-74.075242,39.921415],[-74.076881,39.912894],[-74.077247,39.910991],[-74.077358,39.910089],[-74.077775,39.906712],[-74.07804,39.904567],[-74.078312,39.902363],[-74.083375,39.861331],[-74.083817,39.857744],[-74.08862,39.818819],[-74.088869,39.816804],[-74.089276,39.813505],[-74.089798,39.809277],[-74.090945,39.799982],[-74.090945,39.799978],[-74.091752,39.795748],[-74.092157,39.793621],[-74.092558,39.791517],[-74.092894,39.789755],[-74.097071,39.767847],[-74.09707,39.767832],[-74.096912,39.763211],[-74.096906,39.76303],[-74.09892,39.759538],[-74.101443,39.756173],[-74.109073,39.746517],[-74.113655,39.740719],[-74.114482,39.739209],[-74.114552,39.739081],[-74.117059,39.734501],[-74.117309,39.734045],[-74.126241,39.71773],[-74.130043,39.710786],[-74.140212,39.692212],[-74.141724,39.689451],[-74.141733,39.689435],[-74.141737,39.68943],[-74.142816,39.688021],[-74.143027,39.687745],[-74.145086,39.685055],[-74.153884,39.673563],[-74.155266,39.671759],[-74.157104,39.669358],[-74.170596,39.651735],[-74.173445,39.648013],[-74.180659,39.638591],[-74.181119,39.63799],[-74.182986,39.635551],[-74.183421,39.634984],[-74.18357,39.634789],[-74.184556,39.633501],[-74.184925,39.633019],[-74.185612,39.632122],[-74.190974,39.625118],[-74.194571,39.620019],[-74.194908,39.619541],[-74.205793,39.604114],[-74.212717,39.5943],[-74.213002,39.593896],[-74.21569,39.590085],[-74.215996,39.589651],[-74.216114,39.589484],[-74.216392,39.58909],[-74.230062,39.569714],[-74.239453,39.556403],[-74.239471,39.556379],[-74.240506,39.554911],[-74.243654,39.552361],[-74.249043,39.547994],[-74.249858,39.547018],[-74.253314,39.542878],[-74.257431,39.537947],[-74.263388,39.530812],[-74.275944,39.515772],[-74.27737,39.514064],[-74.28421,39.508614]]]}},{"type":"Feature","properties":{"GEO_ID":"34031","STATE":"34","COUNTY":"031","NAME":"Passaic","LSAD":"County","CENSUSAREA":184.593},"geometry":{"type":"Polygon","coordinates":[[[-74.389457,41.182833],[-74.365849,41.202999],[-74.355383,41.198191],[-74.348287,41.194932],[-74.344134,41.193024],[-74.329446,41.186276],[-74.321694,41.182715],[-74.320995,41.182394],[-74.301994,41.172594],[-74.280039,41.162933],[-74.24286,41.146573],[-74.234473,41.142883],[-74.232963,41.142266],[-74.21321,41.134192],[-74.228797,41.102995],[-74.248939,41.06382],[-74.24964,41.062615],[-74.250595,41.060676],[-74.263586,41.035749],[-74.26977,41.023608],[-74.270521,41.022131],[-74.272484,41.018312],[-74.26979,41.01632],[-74.269337,41.015974],[-74.266713,41.014063],[-74.264233,41.012198],[-74.24847,40.992303],[-74.231084,40.984394],[-74.224981,40.98163],[-74.211732,40.980156],[-74.198688,40.979193],[-74.198373,40.979166],[-74.191835,40.978688],[-74.18524,40.978129],[-74.184576,40.978079],[-74.181301,40.977782],[-74.170988,40.976997],[-74.17021,40.983865],[-74.165273,40.980636],[-74.161022,40.978154],[-74.159947,40.977485],[-74.155691,40.97501],[-74.149173,40.971185],[-74.149088,40.971137],[-74.148494,40.970801],[-74.141048,40.966348],[-74.141083,40.966243],[-74.141168,40.965786],[-74.141628,40.963594],[-74.142298,40.961828],[-74.143528,40.958518],[-74.143779,40.957816],[-74.144341,40.956354],[-74.144429,40.956053],[-74.145527,40.952139],[-74.146104,40.949668],[-74.146293,40.948961],[-74.146429,40.948441],[-74.148158,40.942339],[-74.148059,40.94159],[-74.145387,40.941298],[-74.143893,40.940507],[-74.140287,40.935698],[-74.139361,40.933983],[-74.139489,40.933433],[-74.139767,40.932913],[-74.139846,40.932773],[-74.139947,40.932427],[-74.14009,40.932176],[-74.142232,40.929453],[-74.142187,40.928798],[-74.142098,40.92804],[-74.141987,40.927098],[-74.141683,40.92636],[-74.141423,40.92573],[-74.139515,40.923499],[-74.136219,40.922848],[-74.133903,40.922786],[-74.131926,40.922168],[-74.12958,40.920071],[-74.130188,40.918197],[-74.130243,40.918119],[-74.132087,40.915298],[-74.133287,40.913098],[-74.133287,40.912399],[-74.133287,40.911798],[-74.13284,40.910905],[-74.132296,40.909177],[-74.131787,40.907498],[-74.131804,40.907401],[-74.132409,40.90406],[-74.133789,40.899295],[-74.13102,40.895405],[-74.129233,40.894081],[-74.129023,40.89384],[-74.128991,40.893779],[-74.129792,40.889863],[-74.129809,40.889738],[-74.130089,40.887633],[-74.130187,40.886899],[-74.130187,40.886376],[-74.130187,40.885999],[-74.129102,40.885275],[-74.120487,40.880399],[-74.120268,40.879766],[-74.117804,40.876812],[-74.11547,40.874782],[-74.114875,40.874187],[-74.113886,40.870499],[-74.112282,40.86889],[-74.111678,40.867309],[-74.110024,40.864719],[-74.107686,40.863599],[-74.107338,40.863077],[-74.106786,40.859299],[-74.107286,40.857199],[-74.109517,40.855408],[-74.110163,40.85527],[-74.111046,40.855466],[-74.111715,40.855881],[-74.112735,40.858673],[-74.113916,40.859581],[-74.115964,40.859874],[-74.118061,40.859502],[-74.118826,40.859327],[-74.119861,40.856321],[-74.120069,40.855067],[-74.119684,40.854392],[-74.119657,40.854285],[-74.119487,40.853599],[-74.119462,40.85335],[-74.119291,40.851674],[-74.120982,40.847945],[-74.121295,40.847445],[-74.121404,40.847184],[-74.121902,40.843848],[-74.12199,40.843258],[-74.12298,40.841558],[-74.124087,40.839899],[-74.122787,40.836199],[-74.121853,40.834098],[-74.12134,40.830219],[-74.122931,40.825592],[-74.124034,40.822989],[-74.124176,40.822629],[-74.126265,40.821005],[-74.130031,40.819962],[-74.134862,40.822786],[-74.139568,40.825294],[-74.142485,40.8268],[-74.145129,40.828426],[-74.148175,40.82994],[-74.150087,40.831098],[-74.151255,40.83164],[-74.151789,40.831999],[-74.151923,40.832074],[-74.158502,40.835699],[-74.162628,40.837869],[-74.179403,40.846972],[-74.179903,40.847261],[-74.181195,40.847959],[-74.182689,40.848799],[-74.18534,40.850228],[-74.192134,40.854276],[-74.192196,40.854306],[-74.197734,40.857279],[-74.196489,40.859799],[-74.201296,40.861847],[-74.20214,40.859622],[-74.204821,40.860915],[-74.212656,40.865236],[-74.2127,40.865261],[-74.213987,40.865998],[-74.21509,40.866499],[-74.222856,40.870752],[-74.223292,40.8711],[-74.223406,40.871161],[-74.226291,40.8728],[-74.228701,40.873941],[-74.23164,40.875623],[-74.238182,40.879114],[-74.2403,40.880204],[-74.241047,40.880302],[-74.241992,40.880399],[-74.242356,40.880497],[-74.244091,40.880599],[-74.245264,40.880722],[-74.246291,40.880799],[-74.246691,40.880799],[-74.2531,40.881561],[-74.253966,40.882292],[-74.254476,40.883098],[-74.259813,40.883769],[-74.264289,40.886906],[-74.266638,40.894533],[-74.270702,40.89692],[-74.271362,40.897632],[-74.27253,40.897886],[-74.272544,40.897939],[-74.272616,40.898021],[-74.272687,40.898185],[-74.272825,40.899933],[-74.271138,40.901651],[-74.27097,40.903189],[-74.273133,40.905951],[-74.271648,40.907329],[-74.271458,40.910196],[-74.269284,40.907904],[-74.267401,40.90777],[-74.266638,40.908887],[-74.270616,40.914429],[-74.271659,40.915711],[-74.278663,40.915936],[-74.278843,40.918482],[-74.284021,40.917343],[-74.28376,40.919901],[-74.285991,40.921949],[-74.284911,40.922978],[-74.288161,40.92444],[-74.288012,40.927277],[-74.289184,40.928725],[-74.28482,40.931401],[-74.282134,40.936204],[-74.281975,40.936648],[-74.281674,40.936747],[-74.280335,40.93966],[-74.279196,40.943336],[-74.27884,40.946137],[-74.277564,40.951029],[-74.276892,40.954744],[-74.280257,40.957838],[-74.279041,40.965866],[-74.280934,40.966689],[-74.281622,40.969191],[-74.280338,40.972315],[-74.27762,40.971332],[-74.277503,40.974428],[-74.281539,40.976647],[-74.281276,40.979953],[-74.284709,40.979001],[-74.2903,40.979854],[-74.294771,40.9788],[-74.297314,40.979761],[-74.297281,40.983576],[-74.296552,40.984351],[-74.296156,40.984632],[-74.292637,40.987806],[-74.295531,40.990966],[-74.29549,40.994839],[-74.297634,40.996497],[-74.298064,40.998771],[-74.297549,41.000588],[-74.298773,41.002824],[-74.300327,41.002743],[-74.301747,40.999021],[-74.305809,40.999141],[-74.309838,40.998484],[-74.315226,41.001991],[-74.321735,41.001418],[-74.326671,41.001112],[-74.327594,41.001109],[-74.327867,41.001161],[-74.328411,41.001419],[-74.33015,41.002753],[-74.334605,41.003719],[-74.334733,41.0063],[-74.338322,41.007043],[-74.341032,41.005902],[-74.341878,41.006956],[-74.346047,41.004628],[-74.348038,41.004537],[-74.348939,41.004418],[-74.349452,41.004329],[-74.35139,41.004593],[-74.351258,41.006896],[-74.351481,41.01099],[-74.35407,41.013274],[-74.359515,41.01415],[-74.363009,41.013169],[-74.363819,41.011342],[-74.365834,41.011699],[-74.371163,41.011394],[-74.376383,41.013621],[-74.382247,41.013959],[-74.386419,41.011696],[-74.389303,41.012431],[-74.389521,41.013629],[-74.391519,41.015902],[-74.399391,41.017289],[-74.402725,41.01981],[-74.403388,41.021833],[-74.406653,41.024287],[-74.409959,41.024946],[-74.411126,41.026325],[-74.417535,41.028638],[-74.421458,41.02854],[-74.423728,41.027596],[-74.425419,41.019233],[-74.429611,41.018266],[-74.434198,41.020297],[-74.433498,41.025397],[-74.4326,41.027698],[-74.4307,41.027798],[-74.431199,41.030297],[-74.428299,41.032297],[-74.427268,41.03599],[-74.42777,41.037109],[-74.429814,41.037942],[-74.432864,41.038044],[-74.437651,41.043005],[-74.440574,41.044081],[-74.441335,41.045897],[-74.441853,41.048991],[-74.444813,41.051864],[-74.44817,41.053744],[-74.457512,41.051861],[-74.461117,41.051959],[-74.464788,41.050034],[-74.470306,41.047816],[-74.474883,41.048133],[-74.481178,41.045556],[-74.48209,41.043117],[-74.484547,41.042794],[-74.488382,41.039128],[-74.488264,41.038477],[-74.491623,41.037809],[-74.496582,41.035511],[-74.497364,41.034149],[-74.499193,41.035427],[-74.500269,41.03831],[-74.501826,41.038964],[-74.495084,41.061667],[-74.492652,41.063219],[-74.488653,41.063148],[-74.486991,41.0656],[-74.487244,41.068005],[-74.48836,41.069772],[-74.488993,41.072312],[-74.48746,41.075124],[-74.487716,41.07638],[-74.489265,41.078001],[-74.49199,41.07834],[-74.493117,41.079888],[-74.495846,41.081286],[-74.495963,41.082225],[-74.498991,41.083459],[-74.499326,41.084898],[-74.500732,41.085974],[-74.502892,41.085904],[-74.499701,41.088896],[-74.482601,41.103796],[-74.482298,41.104101],[-74.43509,41.14436],[-74.416899,41.159595],[-74.39863,41.175063],[-74.389457,41.182833]]]}},{"type":"Feature","properties":{"GEO_ID":"34035","STATE":"34","COUNTY":"035","NAME":"Somerset","LSAD":"County","CENSUSAREA":301.813},"geometry":{"type":"Polygon","coordinates":[[[-74.523627,40.649702],[-74.515856,40.650348],[-74.515323,40.651061],[-74.513011,40.649555],[-74.510463,40.650632],[-74.509871,40.65187],[-74.507595,40.652696],[-74.505137,40.657167],[-74.506131,40.658311],[-74.503862,40.659627],[-74.501722,40.658756],[-74.498786,40.659451],[-74.499395,40.661126],[-74.495399,40.662001],[-74.494019,40.66105],[-74.491615,40.661676],[-74.49119,40.663288],[-74.487346,40.663745],[-74.486083,40.662402],[-74.484118,40.663387],[-74.484835,40.665472],[-74.482306,40.666038],[-74.476412,40.666471],[-74.473046,40.669402],[-74.47002,40.667934],[-74.462074,40.671664],[-74.461231,40.673397],[-74.461195,40.673343],[-74.457331,40.66646],[-74.452568,40.656118],[-74.451697,40.654202],[-74.448544,40.655415],[-74.444272,40.657041],[-74.43691,40.662934],[-74.433537,40.66458],[-74.429612,40.665317],[-74.428379,40.663444],[-74.427724,40.663321],[-74.426951,40.663186],[-74.425609,40.662631],[-74.425351,40.662363],[-74.421392,40.658067],[-74.419293,40.658537],[-74.416927,40.66129],[-74.413335,40.662327],[-74.41006,40.665331],[-74.405281,40.667798],[-74.404492,40.667432],[-74.403606,40.666752],[-74.403353,40.666537],[-74.401847,40.663456],[-74.403031,40.660309],[-74.402662,40.65638],[-74.402716,40.656048],[-74.403495,40.655043],[-74.403829,40.654761],[-74.406879,40.650629],[-74.406749,40.649299],[-74.40691,40.646691],[-74.408264,40.644185],[-74.408894,40.642689],[-74.412975,40.641944],[-74.413235,40.641361],[-74.413737,40.640968],[-74.414887,40.637626],[-74.415004,40.633008],[-74.41641,40.63086],[-74.418011,40.627501],[-74.42089,40.626187],[-74.421277,40.625777],[-74.421673,40.625617],[-74.422437,40.62531],[-74.423104,40.624253],[-74.423378,40.620848],[-74.42341,40.620804],[-74.424152,40.620002],[-74.424333,40.619717],[-74.424542,40.619327],[-74.424743,40.619151],[-74.424862,40.619093],[-74.425659,40.618674],[-74.42657,40.617954],[-74.42674,40.617784],[-74.426956,40.617504],[-74.427137,40.617218],[-74.427699,40.616735],[-74.429231,40.616257],[-74.43141,40.615791],[-74.433032,40.613994],[-74.435417,40.612869],[-74.437612,40.61034],[-74.440577,40.609465],[-74.445635,40.60908],[-74.447998,40.607987],[-74.449809,40.6054],[-74.451269,40.603906],[-74.454713,40.603966],[-74.457314,40.602216],[-74.459878,40.600033],[-74.463351,40.599245],[-74.46572,40.598126],[-74.47015,40.598403],[-74.474825,40.595644],[-74.477476,40.594065],[-74.477793,40.593757],[-74.478042,40.59343],[-74.478087,40.593371],[-74.483064,40.589515],[-74.485647,40.588963],[-74.490215,40.586673],[-74.492838,40.587452],[-74.497828,40.585912],[-74.499572,40.5868],[-74.501831,40.585291],[-74.502041,40.583846],[-74.504985,40.58616],[-74.508021,40.584962],[-74.512183,40.582029],[-74.516009,40.581216],[-74.515478,40.579394],[-74.521122,40.574052],[-74.523818,40.569519],[-74.525899,40.568507],[-74.525422,40.566549],[-74.524833,40.561908],[-74.527025,40.559601],[-74.523836,40.558757],[-74.519503,40.555324],[-74.517353,40.551972],[-74.516756,40.549229],[-74.516371,40.546601],[-74.515782,40.544955],[-74.514622,40.542711],[-74.511611,40.539779],[-74.507852,40.537328],[-74.50718,40.536632],[-74.503035,40.533971],[-74.500188,40.532407],[-74.499362,40.531951],[-74.497941,40.531038],[-74.495444,40.529433],[-74.490547,40.523048],[-74.489275,40.521381],[-74.485189,40.516024],[-74.482297,40.512303],[-74.481606,40.511922],[-74.480297,40.511203],[-74.477776,40.510826],[-74.471554,40.509761],[-74.469507,40.509221],[-74.467425,40.508722],[-74.467181,40.508425],[-74.467291,40.505634],[-74.467228,40.505222],[-74.467277,40.505005],[-74.466268,40.502241],[-74.46078,40.498628],[-74.459084,40.496063],[-74.459922,40.491015],[-74.46253,40.48968],[-74.463231,40.489291],[-74.463575,40.489049],[-74.468209,40.486845],[-74.47171,40.485819],[-74.47245,40.485612],[-74.475889,40.484648],[-74.478499,40.483918],[-74.479472,40.48337],[-74.482344,40.481751],[-74.484313,40.480174],[-74.489524,40.474415],[-74.493536,40.470465],[-74.49364,40.470364],[-74.494275,40.469807],[-74.494502,40.469606],[-74.50212,40.464538],[-74.502473,40.464313],[-74.504476,40.463059],[-74.50704,40.461466],[-74.507814,40.460985],[-74.510485,40.458346],[-74.510695,40.458139],[-74.512,40.45697],[-74.512389,40.456621],[-74.514384,40.455287],[-74.520117,40.451427],[-74.520338,40.451278],[-74.520644,40.451002],[-74.526567,40.444851],[-74.52965,40.442547],[-74.531476,40.441383],[-74.535058,40.4391],[-74.53619,40.438326],[-74.539735,40.436713],[-74.546766,40.433515],[-74.547315,40.433275],[-74.549305,40.432407],[-74.551968,40.431262],[-74.555038,40.429978],[-74.555686,40.429739],[-74.560467,40.42797],[-74.569873,40.424531],[-74.571633,40.423908],[-74.576164,40.422304],[-74.57843,40.421281],[-74.584173,40.41869],[-74.585616,40.417485],[-74.585998,40.416515],[-74.585277,40.410549],[-74.586016,40.407259],[-74.586209,40.406299],[-74.585831,40.403402],[-74.58742,40.399538],[-74.587804,40.394264],[-74.591843,40.392027],[-74.595262,40.386468],[-74.596584,40.385142],[-74.602564,40.38071],[-74.6134,40.37562],[-74.619591,40.374397],[-74.617525,40.377862],[-74.618495,40.380217],[-74.622744,40.384421],[-74.630348,40.386033],[-74.644043,40.389057],[-74.651469,40.390594],[-74.653814,40.391003],[-74.6542,40.390903],[-74.671581,40.385741],[-74.67475,40.384195],[-74.678729,40.383682],[-74.67919,40.383609],[-74.679298,40.383595],[-74.688037,40.382562],[-74.697861,40.380847],[-74.700698,40.380621],[-74.703387,40.379989],[-74.70788,40.379305],[-74.710697,40.378218],[-74.718704,40.376608],[-74.722161,40.375155],[-74.734992,40.399049],[-74.741058,40.411592],[-74.748147,40.424156],[-74.752023,40.43138],[-74.772288,40.469005],[-74.782513,40.487775],[-74.797841,40.515557],[-74.787821,40.512307],[-74.785133,40.510098],[-74.785206,40.508393],[-74.780691,40.504489],[-74.776922,40.50348],[-74.775425,40.503488],[-74.774757,40.504177],[-74.761559,40.525019],[-74.751243,40.540953],[-74.749152,40.544217],[-74.748996,40.544449],[-74.746867,40.547625],[-74.743089,40.553257],[-74.742659,40.553898],[-74.73549,40.558934],[-74.733672,40.561139],[-74.730702,40.563584],[-74.728157,40.564295],[-74.724644,40.566108],[-74.722536,40.569484],[-74.712962,40.584231],[-74.720002,40.586961],[-74.724937,40.588755],[-74.720478,40.596246],[-74.718472,40.599616],[-74.721705,40.600579],[-74.715056,40.609974],[-74.713337,40.612261],[-74.711325,40.611411],[-74.703689,40.621296],[-74.711329,40.624869],[-74.711386,40.627483],[-74.713323,40.630629],[-74.716348,40.631587],[-74.719402,40.630912],[-74.721397,40.631485],[-74.725501,40.631736],[-74.726545,40.632508],[-74.727585,40.635894],[-74.722708,40.639125],[-74.722111,40.64186],[-74.723888,40.644118],[-74.723732,40.646911],[-74.719498,40.651807],[-74.720378,40.654303],[-74.722614,40.656544],[-74.727465,40.658576],[-74.728903,40.660711],[-74.73077,40.665297],[-74.728686,40.666622],[-74.726515,40.666949],[-74.722532,40.670077],[-74.722617,40.671354],[-74.721395,40.675699],[-74.72174,40.678012],[-74.720319,40.679648],[-74.71857,40.680345],[-74.717744,40.683988],[-74.723691,40.68751],[-74.722534,40.690027],[-74.721237,40.691422],[-74.720977,40.696072],[-74.719207,40.697635],[-74.716504,40.698709],[-74.715694,40.700365],[-74.71587,40.701356],[-74.717895,40.703312],[-74.716485,40.704063],[-74.717429,40.705358],[-74.719618,40.705983],[-74.719563,40.70768],[-74.720457,40.70923],[-74.721018,40.712762],[-74.720229,40.715132],[-74.723518,40.717207],[-74.724418,40.719455],[-74.721445,40.720556],[-74.689458,40.727782],[-74.682605,40.7297],[-74.668619,40.733],[-74.658504,40.735],[-74.63127,40.741111],[-74.619203,40.744001],[-74.618517,40.744137],[-74.590116,40.750565],[-74.570781,40.754875],[-74.565901,40.756],[-74.555771,40.758005],[-74.555253,40.757044],[-74.553197,40.756439],[-74.551914,40.754863],[-74.551869,40.753052],[-74.550924,40.751073],[-74.552851,40.749524],[-74.548751,40.74601],[-74.549383,40.745092],[-74.548999,40.740994],[-74.548534,40.738468],[-74.549086,40.73376],[-74.546033,40.734104],[-74.545079,40.733136],[-74.540226,40.73383],[-74.537981,40.732125],[-74.534907,40.730632],[-74.532678,40.730955],[-74.528827,40.728133],[-74.531512,40.721215],[-74.531299,40.719777],[-74.528949,40.719234],[-74.528722,40.717592],[-74.526084,40.715936],[-74.524208,40.715539],[-74.524799,40.712652],[-74.526846,40.710872],[-74.525828,40.709368],[-74.523701,40.70848],[-74.522111,40.70867],[-74.517796,40.705463],[-74.516717,40.702201],[-74.515381,40.702221],[-74.513838,40.700852],[-74.513699,40.697701],[-74.514409,40.694545],[-74.516251,40.693212],[-74.518501,40.693859],[-74.518924,40.69167],[-74.51675,40.690569],[-74.516849,40.689251],[-74.521475,40.688459],[-74.524327,40.689354],[-74.526386,40.685161],[-74.527853,40.684434],[-74.528512,40.681253],[-74.527826,40.677508],[-74.525733,40.670942],[-74.529118,40.669179],[-74.530064,40.667399],[-74.534387,40.667256],[-74.533691,40.66543],[-74.529705,40.664819],[-74.528867,40.662782],[-74.525617,40.660706],[-74.527275,40.659123],[-74.525959,40.656184],[-74.525835,40.653977],[-74.52377,40.653841],[-74.52619,40.652164],[-74.525729,40.651665],[-74.522675,40.651682],[-74.522078,40.650102],[-74.523627,40.649702]]]}},{"type":"Feature","properties":{"GEO_ID":"34037","STATE":"34","COUNTY":"037","NAME":"Sussex","LSAD":"County","CENSUSAREA":519.014},"geometry":{"type":"Polygon","coordinates":[[[-74.424905,41.231932],[-74.378898,41.208994],[-74.365849,41.202999],[-74.389457,41.182833],[-74.39863,41.175063],[-74.416899,41.159595],[-74.43509,41.14436],[-74.482298,41.104101],[-74.482601,41.103796],[-74.499701,41.088896],[-74.502892,41.085904],[-74.505665,41.084187],[-74.52194,41.07075],[-74.536002,41.058497],[-74.548395,41.048018],[-74.571202,41.02776],[-74.584198,41.01709],[-74.594932,41.008199],[-74.606789,40.998027],[-74.614432,40.990643],[-74.614808,40.990284],[-74.625959,40.979662],[-74.63222,40.973651],[-74.632139,40.973241],[-74.638993,40.967267],[-74.640643,40.965338],[-74.641424,40.961365],[-74.641032,40.95935],[-74.640904,40.9591],[-74.636654,40.954105],[-74.634837,40.9507],[-74.63524,40.945004],[-74.636163,40.942639],[-74.6394,40.938639],[-74.640505,40.937298],[-74.645791,40.934146],[-74.651405,40.930798],[-74.653053,40.928821],[-74.653638,40.925909],[-74.651905,40.924098],[-74.651805,40.923298],[-74.651994,40.922762],[-74.65303,40.921623],[-74.659747,40.919378],[-74.664094,40.91804],[-74.670219,40.913803],[-74.675035,40.911534],[-74.675276,40.910992],[-74.677002,40.910853],[-74.679531,40.909192],[-74.683246,40.910105],[-74.688006,40.908798],[-74.688906,40.905198],[-74.692165,40.904432],[-74.696006,40.906498],[-74.704115,40.901942],[-74.704495,40.901927],[-74.704725,40.901836],[-74.704863,40.901818],[-74.706817,40.901497],[-74.711393,40.899141],[-74.71368,40.89994],[-74.71343,40.902351],[-74.712141,40.904563],[-74.713069,40.908425],[-74.720061,40.913217],[-74.722693,40.914673],[-74.728583,40.916368],[-74.731869,40.920823],[-74.73639,40.919145],[-74.747164,40.919929],[-74.751371,40.91775],[-74.751488,40.915501],[-74.75526,40.913756],[-74.760181,40.913405],[-74.761238,40.911981],[-74.762857,40.913339],[-74.764502,40.912111],[-74.766001,40.912626],[-74.767874,40.911823],[-74.78921,40.931298],[-74.800962,40.941946],[-74.802015,40.942918],[-74.821711,40.960697],[-74.836712,40.974297],[-74.859168,40.994881],[-74.860906,40.996483],[-74.879782,41.013854],[-74.886577,41.020106],[-74.908089,41.040072],[-74.938971,41.068729],[-74.940129,41.069776],[-74.967136,41.094441],[-74.967464,41.095327],[-74.969434,41.096074],[-74.972036,41.095562],[-74.975298,41.094073],[-74.981314,41.08986],[-74.984782,41.088545],[-74.988263,41.088222],[-74.991013,41.088578],[-74.991815,41.089132],[-74.991718,41.092284],[-74.982212,41.108245],[-74.979873,41.110423],[-74.972917,41.113327],[-74.969312,41.113869],[-74.966298,41.113669],[-74.964294,41.114237],[-74.947912,41.12356],[-74.947334,41.124439],[-74.947714,41.126292],[-74.945067,41.129052],[-74.931141,41.133387],[-74.923169,41.138146],[-74.905256,41.155668],[-74.90178,41.161394],[-74.901172,41.16387],[-74.899701,41.166181],[-74.889424,41.1736],[-74.882139,41.180836],[-74.878492,41.187504],[-74.878275,41.190489],[-74.874034,41.198543],[-74.871425,41.202492],[-74.867287,41.208754],[-74.860398,41.217454],[-74.859632,41.219077],[-74.859323,41.220507],[-74.860837,41.222317],[-74.866839,41.226865],[-74.867405,41.22777],[-74.866182,41.232132],[-74.862049,41.237609],[-74.861678,41.241575],[-74.857151,41.248975],[-74.856003,41.250094],[-74.854669,41.25051],[-74.848987,41.251192],[-74.846932,41.253318],[-74.845883,41.254945],[-74.845031,41.258055],[-74.846506,41.261576],[-74.846319,41.263077],[-74.841137,41.27098],[-74.838366,41.277286],[-74.836213,41.279201],[-74.834067,41.281111],[-74.830057,41.2872],[-74.821884,41.293838],[-74.815703,41.296151],[-74.812033,41.298157],[-74.806858,41.303155],[-74.800044,41.306716],[-74.792558,41.310628],[-74.791991,41.311639],[-74.792377,41.314088],[-74.795822,41.318516],[-74.79504,41.320407],[-74.792116,41.322465],[-74.789095,41.323281],[-74.781584,41.324229],[-74.774887,41.324326],[-74.771588,41.325079],[-74.766714,41.328558],[-74.763499,41.331568],[-74.760325,41.340325],[-74.755971,41.344953],[-74.753239,41.346122],[-74.735622,41.346518],[-74.730373,41.345983],[-74.720923,41.347384],[-74.708514,41.352734],[-74.704429,41.354043],[-74.700595,41.354553],[-74.694914,41.357423],[-74.685343,41.353021],[-74.649028,41.336321],[-74.641544,41.332879],[-74.607348,41.317774],[-74.573728,41.302038],[-74.556173,41.293822],[-74.536689,41.284702],[-74.499603,41.267344],[-74.476961,41.257041],[-74.46836,41.253128],[-74.457584,41.248225],[-74.424905,41.231932]]]}},{"type":"Feature","properties":{"GEO_ID":"34039","STATE":"34","COUNTY":"039","NAME":"Union","LSAD":"County","CENSUSAREA":102.855},"geometry":{"type":"Polygon","coordinates":[[[-74.161397,40.644092],[-74.181083,40.646484],[-74.185953,40.646082],[-74.186027,40.646076],[-74.187921,40.644695],[-74.189106,40.643832],[-74.200532,40.6327],[-74.202223,40.631053],[-74.206731,40.594569],[-74.210741,40.597032],[-74.212032,40.598372],[-74.21287,40.602035],[-74.215101,40.604074],[-74.218124,40.601413],[-74.221958,40.600199],[-74.230533,40.599142],[-74.23124,40.59899],[-74.231821,40.598908],[-74.235905,40.602512],[-74.242488,40.599771],[-74.243642,40.599744],[-74.24779,40.600103],[-74.25381,40.600989],[-74.258114,40.60225],[-74.26016,40.597374],[-74.266122,40.596335],[-74.270017,40.595828],[-74.272792,40.595329],[-74.278091,40.594403],[-74.279385,40.594134],[-74.280598,40.593918],[-74.290861,40.592007],[-74.291391,40.591903],[-74.292494,40.59263],[-74.292591,40.592703],[-74.292748,40.59286],[-74.295064,40.594488],[-74.294909,40.594854],[-74.296741,40.595966],[-74.297722,40.596625],[-74.299809,40.598027],[-74.300301,40.598285],[-74.302162,40.598864],[-74.305326,40.600586],[-74.304384,40.602725],[-74.304173,40.60323],[-74.303134,40.605711],[-74.304722,40.606629],[-74.303492,40.607203],[-74.303292,40.607803],[-74.303392,40.608903],[-74.308792,40.608403],[-74.310449,40.608155],[-74.310892,40.608103],[-74.311892,40.608103],[-74.313199,40.60801],[-74.320692,40.607203],[-74.322321,40.606949],[-74.3233,40.606827],[-74.331527,40.606213],[-74.338493,40.605503],[-74.346893,40.604703],[-74.356866,40.603803],[-74.357292,40.603803],[-74.3584,40.603602],[-74.359118,40.603539],[-74.372722,40.60231],[-74.377823,40.601909],[-74.390095,40.601303],[-74.394634,40.600901],[-74.400795,40.600503],[-74.402272,40.600288],[-74.406569,40.599922],[-74.407464,40.599803],[-74.413477,40.599399],[-74.416106,40.59891],[-74.420946,40.598767],[-74.424699,40.598513],[-74.42641,40.598112],[-74.428296,40.598002],[-74.437334,40.597188],[-74.437596,40.597162],[-74.444601,40.596494],[-74.455865,40.595502],[-74.4568,40.5955],[-74.458197,40.594502],[-74.463351,40.599245],[-74.459878,40.600033],[-74.457314,40.602216],[-74.454713,40.603966],[-74.451269,40.603906],[-74.449809,40.6054],[-74.447998,40.607987],[-74.445635,40.60908],[-74.440577,40.609465],[-74.437612,40.61034],[-74.435417,40.612869],[-74.433032,40.613994],[-74.43141,40.615791],[-74.429231,40.616257],[-74.427699,40.616735],[-74.427137,40.617218],[-74.426956,40.617504],[-74.42674,40.617784],[-74.42657,40.617954],[-74.425659,40.618674],[-74.424862,40.619093],[-74.424743,40.619151],[-74.424542,40.619327],[-74.424333,40.619717],[-74.424152,40.620002],[-74.42341,40.620804],[-74.423378,40.620848],[-74.423104,40.624253],[-74.422437,40.62531],[-74.421673,40.625617],[-74.421277,40.625777],[-74.42089,40.626187],[-74.418011,40.627501],[-74.41641,40.63086],[-74.415004,40.633008],[-74.414887,40.637626],[-74.413737,40.640968],[-74.413235,40.641361],[-74.412975,40.641944],[-74.408894,40.642689],[-74.408264,40.644185],[-74.40691,40.646691],[-74.406749,40.649299],[-74.406879,40.650629],[-74.403829,40.654761],[-74.403495,40.655043],[-74.402716,40.656048],[-74.402662,40.65638],[-74.403031,40.660309],[-74.401847,40.663456],[-74.403353,40.666537],[-74.403606,40.666752],[-74.404492,40.667432],[-74.405281,40.667798],[-74.41006,40.665331],[-74.413335,40.662327],[-74.416927,40.66129],[-74.419293,40.658537],[-74.421392,40.658067],[-74.425351,40.662363],[-74.425609,40.662631],[-74.426951,40.663186],[-74.427724,40.663321],[-74.428379,40.663444],[-74.429612,40.665317],[-74.433537,40.66458],[-74.43691,40.662934],[-74.444272,40.657041],[-74.448544,40.655415],[-74.451697,40.654202],[-74.452568,40.656118],[-74.457331,40.66646],[-74.461195,40.673343],[-74.461231,40.673397],[-74.458721,40.674468],[-74.454573,40.67408],[-74.452584,40.676236],[-74.453275,40.677343],[-74.451542,40.679675],[-74.451617,40.679904],[-74.453029,40.682764],[-74.451853,40.685376],[-74.448,40.685574],[-74.444333,40.687969],[-74.439652,40.68972],[-74.437847,40.6919],[-74.434551,40.693575],[-74.430781,40.693453],[-74.429023,40.698754],[-74.428707,40.699119],[-74.426897,40.701711],[-74.424733,40.701957],[-74.418196,40.705301],[-74.4154,40.705781],[-74.413629,40.7084],[-74.413392,40.708966],[-74.413391,40.708966],[-74.411847,40.710345],[-74.408466,40.710106],[-74.40735,40.713461],[-74.40375,40.716023],[-74.402254,40.718001],[-74.399848,40.717836],[-74.39509,40.717273],[-74.392757,40.718046],[-74.390769,40.718294],[-74.39069,40.725499],[-74.386865,40.725684],[-74.384382,40.724385],[-74.379044,40.728904],[-74.377503,40.730032],[-74.380295,40.7333],[-74.377549,40.734278],[-74.374669,40.733545],[-74.372139,40.733978],[-74.370829,40.735753],[-74.371923,40.739229],[-74.370943,40.739196],[-74.369514,40.739086],[-74.36524,40.737653],[-74.364887,40.73756],[-74.364204,40.737412],[-74.363623,40.737286],[-74.363597,40.737402],[-74.355689,40.734893],[-74.354942,40.7345],[-74.35384,40.733611],[-74.352664,40.732629],[-74.351141,40.731792],[-74.342682,40.725181],[-74.338681,40.723404],[-74.332088,40.720176],[-74.330334,40.719295],[-74.325596,40.717075],[-74.322519,40.718542],[-74.321408,40.719072],[-74.318609,40.7192],[-74.315991,40.719199],[-74.315293,40.718601],[-74.311691,40.715601],[-74.308431,40.714409],[-74.304589,40.713512],[-74.303691,40.7133],[-74.302695,40.713601],[-74.302092,40.713301],[-74.30123,40.713472],[-74.299933,40.713725],[-74.299833,40.71375],[-74.299496,40.713889],[-74.29869,40.71479],[-74.294766,40.717645],[-74.294179,40.719611],[-74.290806,40.721495],[-74.285299,40.722055],[-74.283879,40.721654],[-74.276812,40.719635],[-74.276563,40.719542],[-74.276192,40.719403],[-74.27572,40.719266],[-74.275035,40.719112],[-74.273909,40.718725],[-74.272091,40.718101],[-74.271918,40.718058],[-74.270488,40.717696],[-74.269471,40.717334],[-74.269389,40.717297],[-74.268996,40.717224],[-74.268389,40.717103],[-74.267397,40.716703],[-74.267002,40.71659],[-74.263291,40.715501],[-74.262329,40.715129],[-74.260294,40.714601],[-74.259998,40.714481],[-74.25629,40.7133],[-74.255793,40.713301],[-74.255502,40.713229],[-74.254995,40.713101],[-74.251884,40.71255],[-74.248494,40.711907],[-74.24729,40.711601],[-74.245433,40.711577],[-74.245416,40.711567],[-74.24514,40.711408],[-74.244311,40.71119],[-74.244245,40.711176],[-74.244168,40.711165],[-74.244013,40.711143],[-74.243702,40.711143],[-74.236521,40.709614],[-74.232676,40.709002],[-74.231732,40.708837],[-74.228571,40.70829],[-74.227986,40.70819],[-74.227016,40.708023],[-74.226118,40.707809],[-74.226077,40.707795],[-74.225944,40.707778],[-74.223554,40.707446],[-74.222452,40.707249],[-74.221914,40.706869],[-74.221499,40.706584],[-74.22066,40.705908],[-74.218776,40.70452],[-74.214888,40.7019],[-74.213275,40.700618],[-74.212693,40.69967],[-74.21241,40.69926],[-74.209789,40.690802],[-74.209042,40.690428],[-74.208344,40.690081],[-74.207589,40.689702],[-74.207497,40.689663],[-74.206389,40.689202],[-74.201889,40.686702],[-74.200899,40.68669],[-74.198023,40.686948],[-74.197494,40.687],[-74.197182,40.687019],[-74.193289,40.687202],[-74.192985,40.687262],[-74.178672,40.688323],[-74.169692,40.688599],[-74.168089,40.689896],[-74.162577,40.689663],[-74.160859,40.688896],[-74.160427,40.687128],[-74.138816,40.673903],[-74.136703,40.674444],[-74.13822,40.672699],[-74.140108,40.670421],[-74.142516,40.667515],[-74.153041,40.6548],[-74.159912,40.646365],[-74.161397,40.644092]]]}},{"type":"Feature","properties":{"GEO_ID":"36119","STATE":"36","COUNTY":"119","NAME":"Westchester","LSAD":"County","CENSUSAREA":430.497},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.772305,40.887329],[-73.772276,40.887499],[-73.770576,40.888399],[-73.768276,40.887599],[-73.767276,40.886899],[-73.767176,40.886299],[-73.767076,40.885399],[-73.767076,40.884799],[-73.767076,40.883499],[-73.766276,40.881099],[-73.766976,40.880099],[-73.767058,40.880082],[-73.770876,40.879299],[-73.775276,40.882199],[-73.775183,40.884066],[-73.775176,40.884199],[-73.772831,40.88459],[-73.772776,40.884599],[-73.772305,40.887329]]],[[[-73.667743,41.128496],[-73.695949,41.115434],[-73.727775,41.100696],[-73.722575,41.093596],[-73.716875,41.087596],[-73.706163,41.074184],[-73.694273,41.059296],[-73.687173,41.050697],[-73.682874,41.045383],[-73.679973,41.041797],[-73.675793,41.03665],[-73.670635,41.030298],[-73.670472,41.030097],[-73.666722,41.025482],[-73.662672,41.020497],[-73.66058,41.01829],[-73.659097,41.016727],[-73.655444,41.012874],[-73.655371,41.012797],[-73.654671,41.011697],[-73.655571,41.007697],[-73.657502,41.00353],[-73.659372,40.999497],[-73.65898,40.995576],[-73.658882,40.9946],[-73.658772,40.993497],[-73.659671,40.987909],[-73.657616,40.985499],[-73.657336,40.985171],[-73.655972,40.979597],[-73.659972,40.968398],[-73.662072,40.966198],[-73.662141,40.966227],[-73.664472,40.967198],[-73.66453,40.967179],[-73.667769,40.966132],[-73.668955,40.965748],[-73.672897,40.964472],[-73.674723,40.963882],[-73.677685,40.962923],[-73.678073,40.962798],[-73.678076,40.962791],[-73.679031,40.960255],[-73.683273,40.948998],[-73.686473,40.945198],[-73.697974,40.939598],[-73.702949,40.938015],[-73.71208,40.93511],[-73.713502,40.934658],[-73.716987,40.933549],[-73.721739,40.932037],[-73.728137,40.92755],[-73.731775,40.924999],[-73.732159,40.924809],[-73.736516,40.922647],[-73.743401,40.919233],[-73.746905,40.917495],[-73.748659,40.916625],[-73.749697,40.91611],[-73.754213,40.91387],[-73.754588,40.913684],[-73.754741,40.913608],[-73.754986,40.913487],[-73.756776,40.912599],[-73.761829,40.907013],[-73.765411,40.903053],[-73.778528,40.888554],[-73.781338,40.885447],[-73.783545,40.88104],[-73.783702,40.881078],[-73.792942,40.883411],[-73.804191,40.886348],[-73.819719,40.890206],[-73.822959,40.891056],[-73.823244,40.891199],[-73.82312,40.890648],[-73.823617,40.890413],[-73.823557,40.889865],[-73.824047,40.889866],[-73.824009,40.889978],[-73.825002,40.890178],[-73.827224,40.890785],[-73.830972,40.891935],[-73.831703,40.892178],[-73.832716,40.892443],[-73.833595,40.892706],[-73.835174,40.89317],[-73.836282,40.893531],[-73.837337,40.893814],[-73.838407,40.894061],[-73.838985,40.895602],[-73.839649,40.897891],[-73.840036,40.900567],[-73.840999,40.902812],[-73.841318,40.903987],[-73.842308,40.903988],[-73.843305,40.90408],[-73.844389,40.904096],[-73.844702,40.904177],[-73.844847,40.90531],[-73.84532,40.905582],[-73.846104,40.905777],[-73.847071,40.906173],[-73.848683,40.906743],[-73.851506,40.906645],[-73.852204,40.906878],[-73.852601,40.906977],[-73.85279,40.907073],[-73.851123,40.910009],[-73.852678,40.909899],[-73.854881,40.908217],[-73.854104,40.906679],[-73.856108,40.90606],[-73.856324,40.906166],[-73.858221,40.902335],[-73.860006,40.900565],[-73.862041,40.901203],[-73.862643,40.901474],[-73.86286,40.901525],[-73.864669,40.901793],[-73.865635,40.902086],[-73.866952,40.902475],[-73.867876,40.902983],[-73.872913,40.904467],[-73.874087,40.904807],[-73.877855,40.905922],[-73.878012,40.905965],[-73.878189,40.905983],[-73.87835,40.905983],[-73.879239,40.906365],[-73.880111,40.906591],[-73.880929,40.90683],[-73.881825,40.907134],[-73.882993,40.907423],[-73.884106,40.907501],[-73.884832,40.907723],[-73.885401,40.907977],[-73.88601,40.907979],[-73.886237,40.908052],[-73.887984,40.908593],[-73.891805,40.909778],[-73.891928,40.909809],[-73.892799,40.910058],[-73.896634,40.911324],[-73.897253,40.911655],[-73.899505,40.911978],[-73.900697,40.912381],[-73.902106,40.912879],[-73.902454,40.912979],[-73.905947,40.913948],[-73.910006,40.915076],[-73.910516,40.915282],[-73.917905,40.917577],[-73.91768,40.919498],[-73.91768,40.919499],[-73.91558,40.924898],[-73.912272,40.935498],[-73.910396,40.941513],[-73.90728,40.951498],[-73.907257,40.951562],[-73.904916,40.958108],[-73.898928,40.974851],[-73.896479,40.981697],[-73.893979,40.997197],[-73.893579,41.005297],[-73.890079,41.022597],[-73.889915,41.025749],[-73.88938,41.037597],[-73.89028,41.045196],[-73.89038,41.045796],[-73.89388,41.057896],[-73.89448,41.064596],[-73.8947,41.069937],[-73.89478,41.070496],[-73.894777,41.070791],[-73.89468,41.079596],[-73.89488,41.082396],[-73.89378,41.093296],[-73.891417,41.107318],[-73.890866,41.110583],[-73.88758,41.128795],[-73.88718,41.133095],[-73.887397,41.136861],[-73.88748,41.138295],[-73.88948,41.145095],[-73.892481,41.150595],[-73.895381,41.153995],[-73.899681,41.157295],[-73.906581,41.161895],[-73.909281,41.164395],[-73.911681,41.167795],[-73.914381,41.174195],[-73.921697,41.186288],[-73.925682,41.195194],[-73.927229,41.198038],[-73.931482,41.204994],[-73.935982,41.209894],[-73.936782,41.210814],[-73.939983,41.214494],[-73.944683,41.219594],[-73.947965,41.223101],[-73.950947,41.226346],[-73.953283,41.228994],[-73.961383,41.234194],[-73.960783,41.239394],[-73.961283,41.241994],[-73.964142,41.243851],[-73.970784,41.247893],[-73.971984,41.251493],[-73.972284,41.256193],[-73.971484,41.259593],[-73.969684,41.263193],[-73.966884,41.267193],[-73.964184,41.269993],[-73.957183,41.276393],[-73.955445,41.277862],[-73.952045,41.280736],[-73.947483,41.284593],[-73.945783,41.287593],[-73.946583,41.290993],[-73.949083,41.292593],[-73.955183,41.294993],[-73.964483,41.299693],[-73.966983,41.301693],[-73.971784,41.307293],[-73.977484,41.312093],[-73.980984,41.314193],[-73.983284,41.317393],[-73.982584,41.321693],[-73.926846,41.32764],[-73.918286,41.328532],[-73.914027,41.32897],[-73.908236,41.329453],[-73.904794,41.329705],[-73.89346,41.330892],[-73.892926,41.330983],[-73.892256,41.330954],[-73.891427,41.330993],[-73.890602,41.331071],[-73.889692,41.331176],[-73.88818,41.331472],[-73.887763,41.331491],[-73.8833,41.331956],[-73.879948,41.332623],[-73.875119,41.332785],[-73.873801,41.33299],[-73.86201,41.334264],[-73.842703,41.336198],[-73.829988,41.337503],[-73.822273,41.338223],[-73.816037,41.338824],[-73.797456,41.340647],[-73.78826,41.341737],[-73.780007,41.342492],[-73.772054,41.343393],[-73.771839,41.343417],[-73.758232,41.344838],[-73.757605,41.344904],[-73.753122,41.345342],[-73.753068,41.345346],[-73.740095,41.346682],[-73.735816,41.347123],[-73.734672,41.347288],[-73.727501,41.347991],[-73.72521,41.348218],[-73.724035,41.348394],[-73.719804,41.348818],[-73.718674,41.348933],[-73.69994,41.350855],[-73.694765,41.351387],[-73.689493,41.35193],[-73.671686,41.353857],[-73.660905,41.354994],[-73.660619,41.355026],[-73.659871,41.355099],[-73.659031,41.355183],[-73.641248,41.356974],[-73.639056,41.357253],[-73.628491,41.358181],[-73.599938,41.360802],[-73.596621,41.361128],[-73.593929,41.361286],[-73.572478,41.363579],[-73.56024,41.36485],[-73.544728,41.366375],[-73.54595,41.354841],[-73.548583,41.329979],[-73.548973,41.326297],[-73.549574,41.315931],[-73.548929,41.307598],[-73.549941,41.301533],[-73.550961,41.295422],[-73.548887,41.292957],[-73.548148,41.29208],[-73.526296,41.266118],[-73.525161,41.26477],[-73.518384,41.256719],[-73.517453,41.255572],[-73.491408,41.223479],[-73.482709,41.21276],[-73.509187,41.200948],[-73.509487,41.200814],[-73.512765,41.199293],[-73.514617,41.198434],[-73.535996,41.188551],[-73.564759,41.175254],[-73.564941,41.17517],[-73.614391,41.152915],[-73.628815,41.146423],[-73.632153,41.144921],[-73.639672,41.141495],[-73.660504,41.131848],[-73.667743,41.128496]]]]}}]}

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"GEO_ID":"34003","STATE":"34","COUNTY":"003","NAME":"Bergen","LSAD":"County","CENSUSAREA":233.009},"geometry":{"type":"Polygon","coordinates":[[[-73.926758,40.895355],[-73.929006,40.889578],[-73.933406,40.882078],[-73.938081,40.874699],[-73.948278,40.858404],[-73.948281,40.858399],[-73.952017,40.851584],[-73.953982,40.848],[-73.963182,40.8269],[-73.965706,40.823706],[-73.968082,40.8207],[-73.984822,40.797444],[-73.992214,40.800623],[-73.992387,40.800697],[-73.993509,40.801092],[-73.993505,40.803162],[-73.993083,40.8057],[-73.994183,40.8063],[-73.994412,40.806453],[-73.994783,40.8067],[-73.995723,40.80712],[-73.996483,40.8075],[-73.998,40.80847],[-74.00058,40.8099],[-74.000873,40.810045],[-74.000984,40.8101],[-74.002485,40.810757],[-74.002583,40.8108],[-74.004156,40.81164],[-74.005048,40.812126],[-74.007483,40.8133],[-74.008044,40.813674],[-74.008733,40.81396],[-74.009561,40.814576],[-74.012583,40.8159],[-74.013157,40.818078],[-74.010983,40.8205],[-74.013625,40.822909],[-74.017204,40.823541],[-74.020442,40.82063],[-74.020581,40.818701],[-74.023224,40.818385],[-74.023581,40.816484],[-74.025281,40.815902],[-74.02474,40.814869],[-74.026256,40.816174],[-74.028207,40.816514],[-74.028869,40.816036],[-74.028684,40.8128],[-74.032084,40.8129],[-74.036148,40.807963],[-74.044977,40.807702],[-74.054469,40.806984],[-74.060685,40.8057],[-74.065135,40.80302],[-74.067194,40.800935],[-74.06855,40.798658],[-74.071399,40.797241],[-74.077,40.796379],[-74.077787,40.792796],[-74.081794,40.787994],[-74.083351,40.786316],[-74.089263,40.780046],[-74.090316,40.775819],[-74.088077,40.767542],[-74.090694,40.762114],[-74.093486,40.763201],[-74.095486,40.762301],[-74.097286,40.765601],[-74.099086,40.767701],[-74.097886,40.769901],[-74.099086,40.7726],[-74.100186,40.7734],[-74.100886,40.7759],[-74.103086,40.7756],[-74.104686,40.7767],[-74.109487,40.7774],[-74.110887,40.7768],[-74.112887,40.7758],[-74.115787,40.7711],[-74.118187,40.7701],[-74.124651,40.772052],[-74.127193,40.771574],[-74.129716,40.773837],[-74.130307,40.777522],[-74.130588,40.777732],[-74.132194,40.778549],[-74.132997,40.778948],[-74.133786,40.77934],[-74.134549,40.77972],[-74.136191,40.780553],[-74.136978,40.780965],[-74.138507,40.781767],[-74.140406,40.782788],[-74.141272,40.783254],[-74.142388,40.783853],[-74.146489,40.786089],[-74.147529,40.786491],[-74.145387,40.7898],[-74.142959,40.792449],[-74.142838,40.792581],[-74.142087,40.7934],[-74.140902,40.795067],[-74.1395,40.797039],[-74.138503,40.799777],[-74.139882,40.805282],[-74.139967,40.805313],[-74.139923,40.80555],[-74.13892,40.807188],[-74.138777,40.807723],[-74.138695,40.811011],[-74.138201,40.813251],[-74.137692,40.815506],[-74.136487,40.8182],[-74.133063,40.819162],[-74.13161,40.819545],[-74.130031,40.819962],[-74.126265,40.821005],[-74.124176,40.822629],[-74.124034,40.822989],[-74.122931,40.825592],[-74.12134,40.830219],[-74.121853,40.834098],[-74.122787,40.836199],[-74.124087,40.839899],[-74.12298,40.841558],[-74.12199,40.843258],[-74.121902,40.843848],[-74.121404,40.847184],[-74.121295,40.847445],[-74.120982,40.847945],[-74.119291,40.851674],[-74.119462,40.85335],[-74.119487,40.853599],[-74.119657,40.854285],[-74.119684,40.854392],[-74.120069,40.855067],[-74.119861,40.856321],[-74.118826,40.859327],[-74.118061,40.859502],[-74.115964,40.859874],[-74.113916,40.859581],[-74.112735,40.858673],[-74.111715,40.855881],[-74.111046,40.855466],[-74.110163,40.85527],[-74.109517,40.855408],[-74.107286,40.857199],[-74.106786,40.859299],[-74.107338,40.863077],[-74.107686,40.863599],[-74.110024,40.864719],[-74.111678,40.867309],[-74.112282,40.86889],[-74.113886,40.870499],[-74.114875,40.874187],[-74.11547,40.874782],[-74.117804,40.876812],[-74.120268,40.879766],[-74.120487,40.880399],[-74.129102,40.885275],[-74.130187,40.885999],[-74.130187,40.886376],[-74.130187,40.886899],[-74.130089,40.887633],[-74.129809,40.889738],[-74.129792,40.889863],[-74.128991,40.893779],[-74.129023,40.89384],[-74.129233,40.894081],[-74.13102,40.895405],[-74.133789,40.899295],[-74.132409,40.90406],[-74.131804,40.907401],[-74.131787,40.907498],[-74.132296,40.909177],[-74.13284,40.910905],[-74.133287,40.911798],[-74.133287,40.912399],[-74.133287,40.913098],[-74.132087,40.915298],[-74.130243,40.918119],[-74.130188,40.918197],[-74.12958,40.920071],[-74.131926,40.922168],[-74.133903,40.922786],[-74.136219,40.922848],[-74.139515,40.923499],[-74.141423,40.92573],[-74.141683,40.92636],[-74.141987,40.927098],[-74.142098,40.92804],[-74.142187,40.928798],[-74.142232,40.929453],[-74.14009,40.932176],[-74.139947,40.932427],[-74.139846,40.932773],[-74.139767,40.932913],[-74.139489,40.933433],[-74.139361,40.933983],[-74.140287,40.935698],[-74.143893,40.940507],[-74.145387,40.941298],[-74.148059,40.94159],[-74.148158,40.942339],[-74.146429,40.948441],[-74.146293,40.948961],[-74.146104,40.949668],[-74.145527,40.952139],[-74.144429,40.956053],[-74.144341,40.956354],[-74.143779,40.957816],[-74.143528,40.958518],[-74.142298,40.961828],[-74.141628,40.963594],[-74.141168,40.965786],[-74.141083,40.966243],[-74.141048,40.966348],[-74.148494,40.970801],[-74.149088,40.971137],[-74.149173,40.971185],[-74.155691,40.97501],[-74.159947,40.977485],[-74.161022,40.978154],[-74.165273,40.980636],[-74.17021,40.983865],[-74.170988,40.976997],[-74.181301,40.977782],[-74.184576,40.978079],[-74.18524,40.978129],[-74.191835,40.978688],[-74.198373,40.979166],[-74.198688,40.979193],[-74.211732,40.980156],[-74.224981,40.98163],[-74.231084,40.984394],[-74.24847,40.992303],[-74.264233,41.012198],[-74.266713,41.014063],[-74.269337,41.015974],[-74.26979,41.01632],[-74.272484,41.018312],[-74.270521,41.022131],[-74.26977,41.023608],[-74.263586,41.035749],[-74.250595,41.060676],[-74.24964,41.062615],[-74.248939,41.06382],[-74.228797,41.102995],[-74.21321,41.134192],[-74.206695,41.131529],[-74.18239,41.121595],[-74.162713,41.112907],[-74.158293,41.110955],[-74.149861,41.107231],[-74.120804,41.094401],[-74.10379,41.086889],[-74.096786,41.083796],[-74.092486,41.081896],[-74.08172,41.077122],[-74.071955,41.072791],[-74.05724,41.066266],[-74.052049,41.063964],[-74.041054,41.059088],[-74.041049,41.059086],[-74.037283,41.057401],[-74.024567,41.051712],[-74.012584,41.046351],[-73.993957,41.038018],[-73.977313,41.030571],[-73.959112,41.022428],[-73.952934,41.019664],[-73.95192,41.01921],[-73.945288,41.016243],[-73.938437,41.013178],[-73.922092,41.005866],[-73.91188,41.001297],[-73.907054,40.998476],[-73.90501,40.997591],[-73.90268,40.997297],[-73.893979,40.997197],[-73.896479,40.981697],[-73.90728,40.951498],[-73.91558,40.924898],[-73.91768,40.919498],[-73.917905,40.917577],[-73.918405,40.917477],[-73.919686,40.913535],[-73.919705,40.913478],[-73.926758,40.895355]]]}},{"type":"Feature","properties":{"GEO_ID":"34013","STATE":"34","COUNTY":"013","NAME":"Essex","LSAD":"County","CENSUSAREA":126.212},"geometry":{"type":"Polygon","coordinates":[[[-74.13892,40.807188],[-74.139923,40.80555],[-74.139967,40.805313],[-74.139882,40.805282],[-74.138503,40.799777],[-74.1395,40.797039],[-74.140902,40.795067],[-74.142087,40.7934],[-74.142838,40.792581],[-74.142959,40.792449],[-74.145387,40.7898],[-74.147529,40.786491],[-74.148187,40.782409],[-74.148266,40.779876],[-74.148288,40.7797],[-74.148408,40.779406],[-74.150372,40.776893],[-74.153266,40.774189],[-74.155159,40.771732],[-74.155798,40.770815],[-74.156369,40.768896],[-74.15664,40.767986],[-74.157688,40.7661],[-74.158673,40.764942],[-74.160325,40.763293],[-74.162149,40.761373],[-74.163388,40.759401],[-74.164529,40.756298],[-74.164799,40.754718],[-74.164933,40.753567],[-74.165465,40.750996],[-74.165985,40.748036],[-74.166069,40.747495],[-74.166087,40.747402],[-74.165954,40.745107],[-74.163788,40.739201],[-74.161958,40.736007],[-74.161669,40.735781],[-74.15998,40.734485],[-74.155279,40.733538],[-74.153696,40.733679],[-74.153301,40.733713],[-74.151188,40.733901],[-74.148066,40.734292],[-74.145288,40.735701],[-74.142688,40.739301],[-74.137492,40.741398],[-74.122786,40.742101],[-74.121113,40.741658],[-74.117605,40.739638],[-74.116993,40.737125],[-74.118105,40.732442],[-74.120987,40.722901],[-74.121387,40.721001],[-74.120287,40.715901],[-74.117057,40.710381],[-74.112787,40.703102],[-74.113338,40.702477],[-74.114559,40.701072],[-74.117267,40.697808],[-74.122911,40.691172],[-74.131403,40.680902],[-74.133433,40.678434],[-74.136161,40.675084],[-74.136703,40.674444],[-74.138816,40.673903],[-74.160427,40.687128],[-74.160859,40.688896],[-74.162577,40.689663],[-74.168089,40.689896],[-74.169692,40.688599],[-74.178672,40.688323],[-74.192985,40.687262],[-74.193289,40.687202],[-74.197182,40.687019],[-74.197494,40.687],[-74.198023,40.686948],[-74.200899,40.68669],[-74.201889,40.686702],[-74.206389,40.689202],[-74.207497,40.689663],[-74.207589,40.689702],[-74.208344,40.690081],[-74.209042,40.690428],[-74.209789,40.690802],[-74.21241,40.69926],[-74.212693,40.69967],[-74.213275,40.700618],[-74.214888,40.7019],[-74.218776,40.70452],[-74.22066,40.705908],[-74.221499,40.706584],[-74.221914,40.706869],[-74.222452,40.707249],[-74.223554,40.707446],[-74.225944,40.707778],[-74.226077,40.707795],[-74.226118,40.707809],[-74.227016,40.708023],[-74.227986,40.70819],[-74.228571,40.70829],[-74.231732,40.708837],[-74.232676,40.709002],[-74.236521,40.709614],[-74.243702,40.711143],[-74.244013,40.711143],[-74.244168,40.711165],[-74.244245,40.711176],[-74.244311,40.71119],[-74.24514,40.711408],[-74.245416,40.711567],[-74.245433,40.711577],[-74.24729,40.711601],[-74.248494,40.711907],[-74.251884,40.71255],[-74.254995,40.713101],[-74.255502,40.713229],[-74.255793,40.713301],[-74.25629,40.7133],[-74.259998,40.714481],[-74.260294,40.714601],[-74.262329,40.715129],[-74.263291,40.715501],[-74.267002,40.71659],[-74.267397,40.716703],[-74.268389,40.717103],[-74.268996,40.717224],[-74.269389,40.717297],[-74.269471,40.717334],[-74.270488,40.717696],[-74.271918,40.718058],[-74.272091,40.718101],[-74.273909,40.718725],[-74.275035,40.719112],[-74.27572,40.719266],[-74.276192,40.719403],[-74.276563,40.719542],[-74.276812,40.719635],[-74.283879,40.721654],[-74.285299,40.722055],[-74.290806,40.721495],[-74.294179,40.719611],[-74.294766,40.717645],[-74.29869,40.71479],[-74.299496,40.713889],[-74.299833,40.71375],[-74.299933,40.713725],[-74.30123,40.713472],[-74.302092,40.713301],[-74.302695,40.713601],[-74.303691,40.7133],[-74.304589,40.713512],[-74.308431,40.714409],[-74.311691,40.715601],[-74.315293,40.718601],[-74.315991,40.719199],[-74.318609,40.7192],[-74.321408,40.719072],[-74.322519,40.718542],[-74.325596,40.717075],[-74.330334,40.719295],[-74.332088,40.720176],[-74.338681,40.723404],[-74.342682,40.725181],[-74.351141,40.731792],[-74.352664,40.732629],[-74.35384,40.733611],[-74.354942,40.7345],[-74.355689,40.734893],[-74.363597,40.737402],[-74.363623,40.737286],[-74.364204,40.737412],[-74.364887,40.73756],[-74.36524,40.737653],[-74.369514,40.739086],[-74.370943,40.739196],[-74.371923,40.739229],[-74.37256,40.741587],[-74.370902,40.742757],[-74.366562,40.743889],[-74.364737,40.746441],[-74.367501,40.748516],[-74.367089,40.74933],[-74.363072,40.750403],[-74.359634,40.751154],[-74.357436,40.7546],[-74.357624,40.756117],[-74.361732,40.75594],[-74.364605,40.757844],[-74.367587,40.758066],[-74.367278,40.761067],[-74.37419,40.757999],[-74.375542,40.760731],[-74.377414,40.761152],[-74.376235,40.762749],[-74.37361,40.762801],[-74.370863,40.764008],[-74.369971,40.766969],[-74.371695,40.76737],[-74.369497,40.771421],[-74.370404,40.774449],[-74.372598,40.774854],[-74.36872,40.77907],[-74.36715,40.779982],[-74.366459,40.78332],[-74.366772,40.788568],[-74.366169,40.794786],[-74.364695,40.796145],[-74.364173,40.799042],[-74.359526,40.799875],[-74.359407,40.799943],[-74.358862,40.800572],[-74.356118,40.803799],[-74.350898,40.806798],[-74.350833,40.809089],[-74.349071,40.812641],[-74.344303,40.813719],[-74.339566,40.812824],[-74.334342,40.818416],[-74.3323,40.822068],[-74.334933,40.827626],[-74.333203,40.829434],[-74.328722,40.831754],[-74.330049,40.834618],[-74.329172,40.838299],[-74.329317,40.841475],[-74.327113,40.841867],[-74.325793,40.843914],[-74.328535,40.844667],[-74.32991,40.849161],[-74.32735,40.850673],[-74.326827,40.852758],[-74.325176,40.854109],[-74.326046,40.856491],[-74.324586,40.858153],[-74.321144,40.858529],[-74.319333,40.858113],[-74.320995,40.862361],[-74.318124,40.863046],[-74.317472,40.864874],[-74.320099,40.865999],[-74.321938,40.864038],[-74.326219,40.86612],[-74.330899,40.86695],[-74.331495,40.866854],[-74.331654,40.866926],[-74.332875,40.869174],[-74.336693,40.866545],[-74.33806,40.870059],[-74.336075,40.870406],[-74.33749,40.872207],[-74.334259,40.873471],[-74.337808,40.875101],[-74.33507,40.877426],[-74.337614,40.878206],[-74.337894,40.879427],[-74.340154,40.879437],[-74.33983,40.882065],[-74.338112,40.887758],[-74.339425,40.890365],[-74.3389,40.892087],[-74.335745,40.893059],[-74.338999,40.894069],[-74.337019,40.896265],[-74.334347,40.896294],[-74.334334,40.897555],[-74.337531,40.898475],[-74.337159,40.900004],[-74.335298,40.90211],[-74.334438,40.904988],[-74.330799,40.906769],[-74.329533,40.908653],[-74.32802,40.905626],[-74.32499,40.905879],[-74.325271,40.907367],[-74.327647,40.907336],[-74.326269,40.908499],[-74.322804,40.908834],[-74.322957,40.907308],[-74.321595,40.906895],[-74.32016,40.907967],[-74.318493,40.907545],[-74.318546,40.903229],[-74.314503,40.90379],[-74.312409,40.905399],[-74.31016,40.904665],[-74.305939,40.905315],[-74.302832,40.907188],[-74.30298,40.904352],[-74.300841,40.904609],[-74.296583,40.90604],[-74.291629,40.905499],[-74.292247,40.903205],[-74.291373,40.901714],[-74.292447,40.901225],[-74.291275,40.899776],[-74.28926,40.899404],[-74.285381,40.901361],[-74.281765,40.900843],[-74.281716,40.899942],[-74.286563,40.899094],[-74.283814,40.898019],[-74.284616,40.895231],[-74.282297,40.895622],[-74.280731,40.897684],[-74.273852,40.897055],[-74.271482,40.897131],[-74.271181,40.897084],[-74.271003,40.896992],[-74.270702,40.89692],[-74.266638,40.894533],[-74.264289,40.886906],[-74.259813,40.883769],[-74.254476,40.883098],[-74.253966,40.882292],[-74.2531,40.881561],[-74.246691,40.880799],[-74.246291,40.880799],[-74.245264,40.880722],[-74.244091,40.880599],[-74.242356,40.880497],[-74.241992,40.880399],[-74.241047,40.880302],[-74.2403,40.880204],[-74.238182,40.879114],[-74.23164,40.875623],[-74.228701,40.873941],[-74.226291,40.8728],[-74.223406,40.871161],[-74.223292,40.8711],[-74.222856,40.870752],[-74.21509,40.866499],[-74.213987,40.865998],[-74.2127,40.865261],[-74.212656,40.865236],[-74.204821,40.860915],[-74.20214,40.859622],[-74.201296,40.861847],[-74.196489,40.859799],[-74.197734,40.857279],[-74.192196,40.854306],[-74.192134,40.854276],[-74.18534,40.850228],[-74.182689,40.848799],[-74.181195,40.847959],[-74.179903,40.847261],[-74.179403,40.846972],[-74.162628,40.837869],[-74.158502,40.835699],[-74.151923,40.832074],[-74.151789,40.831999],[-74.151255,40.83164],[-74.150087,40.831098],[-74.148175,40.82994],[-74.145129,40.828426],[-74.142485,40.8268],[-74.139568,40.825294],[-74.134862,40.822786],[-74.130031,40.819962],[-74.13161,40.819545],[-74.133063,40.819162],[-74.136487,40.8182],[-74.137692,40.815506],[-74.138201,40.813251],[-74.138695,40.811011],[-74.138777,40.807723],[-74.13892,40.807188]]]}},{"type":"Feature","properties":{"GEO_ID":"34017","STATE":"34","COUNTY":"017","NAME":"Hudson","LSAD":"County","CENSUSAREA":46.191},"geometry":{"type":"Polygon","coordinates":[[[-74.020388,40.730317],[-74.021104,40.727468],[-74.021117,40.727417],[-74.021537,40.725213],[-74.021851,40.723565],[-74.023337,40.715765],[-74.023696,40.713882],[-74.024543,40.709436],[-74.038538,40.710741],[-74.038945,40.71026],[-74.040335,40.708618],[-74.048065,40.699487],[-74.051184,40.695802],[-74.053398,40.691228],[-74.056888,40.68402],[-74.060183,40.677213],[-74.062382,40.67267],[-74.065272,40.666701],[-74.066175,40.664836],[-74.068341,40.660362],[-74.069626,40.659917],[-74.083289,40.655184],[-74.087452,40.653742],[-74.094086,40.649703],[-74.094141,40.649694],[-74.120667,40.645498],[-74.125618,40.644714],[-74.128171,40.64431],[-74.131797,40.643737],[-74.135779,40.643107],[-74.141878,40.642142],[-74.143387,40.641903],[-74.161397,40.644092],[-74.159912,40.646365],[-74.153041,40.6548],[-74.142516,40.667515],[-74.140108,40.670421],[-74.13822,40.672699],[-74.136703,40.674444],[-74.136161,40.675084],[-74.133433,40.678434],[-74.131403,40.680902],[-74.122911,40.691172],[-74.117267,40.697808],[-74.114559,40.701072],[-74.113338,40.702477],[-74.112787,40.703102],[-74.117057,40.710381],[-74.120287,40.715901],[-74.121387,40.721001],[-74.120987,40.722901],[-74.118105,40.732442],[-74.116993,40.737125],[-74.117605,40.739638],[-74.121113,40.741658],[-74.122786,40.742101],[-74.137492,40.741398],[-74.142688,40.739301],[-74.145288,40.735701],[-74.148066,40.734292],[-74.151188,40.733901],[-74.153301,40.733713],[-74.153696,40.733679],[-74.155279,40.733538],[-74.15998,40.734485],[-74.161669,40.735781],[-74.161958,40.736007],[-74.163788,40.739201],[-74.165954,40.745107],[-74.166087,40.747402],[-74.166069,40.747495],[-74.165985,40.748036],[-74.165465,40.750996],[-74.164933,40.753567],[-74.164799,40.754718],[-74.164529,40.756298],[-74.163388,40.759401],[-74.162149,40.761373],[-74.160325,40.763293],[-74.158673,40.764942],[-74.157688,40.7661],[-74.15664,40.767986],[-74.156369,40.768896],[-74.155798,40.770815],[-74.155159,40.771732],[-74.153266,40.774189],[-74.150372,40.776893],[-74.148408,40.779406],[-74.148288,40.7797],[-74.148266,40.779876],[-74.148187,40.782409],[-74.147529,40.786491],[-74.146489,40.786089],[-74.142388,40.783853],[-74.141272,40.783254],[-74.140406,40.782788],[-74.138507,40.781767],[-74.136978,40.780965],[-74.136191,40.780553],[-74.134549,40.77972],[-74.133786,40.77934],[-74.132997,40.778948],[-74.132194,40.778549],[-74.130588,40.777732],[-74.130307,40.777522],[-74.129716,40.773837],[-74.127193,40.771574],[-74.124651,40.772052],[-74.118187,40.7701],[-74.115787,40.7711],[-74.112887,40.7758],[-74.110887,40.7768],[-74.109487,40.7774],[-74.104686,40.7767],[-74.103086,40.7756],[-74.100886,40.7759],[-74.100186,40.7734],[-74.099086,40.7726],[-74.097886,40.769901],[-74.099086,40.767701],[-74.097286,40.765601],[-74.095486,40.762301],[-74.093486,40.763201],[-74.090694,40.762114],[-74.088077,40.767542],[-74.090316,40.775819],[-74.089263,40.780046],[-74.083351,40.786316],[-74.081794,40.787994],[-74.077787,40.792796],[-74.077,40.796379],[-74.071399,40.797241],[-74.06855,40.798658],[-74.067194,40.800935],[-74.065135,40.80302],[-74.060685,40.8057],[-74.054469,40.806984],[-74.044977,40.807702],[-74.036148,40.807963],[-74.032084,40.8129],[-74.028684,40.8128],[-74.028869,40.816036],[-74.028207,40.816514],[-74.026256,40.816174],[-74.02474,40.814869],[-74.025281,40.815902],[-74.023581,40.816484],[-74.023224,40.818385],[-74.020581,40.818701],[-74.020442,40.82063],[-74.017204,40.823541],[-74.013625,40.822909],[-74.010983,40.8205],[-74.013157,40.818078],[-74.012583,40.8159],[-74.009561,40.814576],[-74.008733,40.81396],[-74.008044,40.813674],[-74.007483,40.8133],[-74.005048,40.812126],[-74.004156,40.81164],[-74.002583,40.8108],[-74.002485,40.810757],[-74.000984,40.8101],[-74.000873,40.810045],[-74.00058,40.8099],[-73.998,40.80847],[-73.996483,40.8075],[-73.995723,40.80712],[-73.994783,40.8067],[-73.994412,40.806453],[-73.994183,40.8063],[-73.993083,40.8057],[-73.993505,40.803162],[-73.993509,40.801092],[-73.992387,40.800697],[-73.992214,40.800623],[-73.984822,40.797444],[-73.991568,40.788074],[-73.992857,40.786282],[-73.993791,40.784985],[-73.994691,40.783735],[-73.995708,40.782322],[-73.997238,40.780197],[-73.998453,40.778509],[-74.000223,40.776049],[-74.001395,40.774422],[-74.005895,40.76817],[-74.009184,40.763601],[-74.011494,40.760086],[-74.013784,40.756601],[-74.015611,40.74933],[-74.017043,40.743629],[-74.01779,40.740659],[-74.020388,40.730317]]]}},{"type":"Feature","properties":{"GEO_ID":"34021","STATE":"34","COUNTY":"021","NAME":"Mercer","LSAD":"County","CENSUSAREA":224.557},"geometry":{"type":"Polygon","coordinates":[[[-74.778305,40.219708],[-74.781206,40.221508],[-74.784262,40.22322],[-74.785679,40.224014],[-74.787195,40.224864],[-74.789163,40.225966],[-74.795306,40.229408],[-74.801256,40.231645],[-74.819507,40.238508],[-74.823907,40.241508],[-74.824077,40.241572],[-74.836307,40.246208],[-74.842308,40.250508],[-74.846608,40.258808],[-74.846765,40.259071],[-74.853108,40.269707],[-74.856508,40.277407],[-74.860492,40.284584],[-74.864692,40.290684],[-74.868209,40.295207],[-74.880609,40.305607],[-74.882828,40.307212],[-74.886412,40.309803],[-74.887109,40.310307],[-74.891609,40.313007],[-74.896409,40.315107],[-74.90331,40.315607],[-74.90831,40.316907],[-74.91741,40.322406],[-74.92681,40.329406],[-74.933111,40.333106],[-74.939711,40.338006],[-74.942954,40.341643],[-74.942909,40.341683],[-74.941675,40.341425],[-74.932277,40.339427],[-74.856262,40.346695],[-74.856645,40.347588],[-74.867783,40.373178],[-74.869843,40.377845],[-74.830361,40.38208],[-74.81901,40.383236],[-74.802006,40.384921],[-74.808538,40.416655],[-74.787975,40.419213],[-74.748147,40.424156],[-74.741058,40.411592],[-74.734992,40.399049],[-74.722161,40.375155],[-74.718704,40.376608],[-74.710697,40.378218],[-74.70788,40.379305],[-74.703387,40.379989],[-74.700698,40.380621],[-74.697861,40.380847],[-74.688037,40.382562],[-74.679298,40.383595],[-74.67919,40.383609],[-74.678729,40.383682],[-74.67475,40.384195],[-74.671581,40.385741],[-74.6542,40.390903],[-74.653814,40.391003],[-74.651469,40.390594],[-74.644043,40.389057],[-74.630348,40.386033],[-74.622744,40.384421],[-74.618495,40.380217],[-74.617525,40.377862],[-74.619591,40.374397],[-74.620478,40.370093],[-74.622001,40.367206],[-74.623879,40.366605],[-74.624901,40.365406],[-74.626736,40.356413],[-74.629914,40.345698],[-74.630001,40.34525],[-74.630001,40.343407],[-74.630101,40.340607],[-74.628986,40.338892],[-74.623304,40.334404],[-74.624395,40.329163],[-74.622514,40.328334],[-74.622785,40.325382],[-74.621929,40.324362],[-74.615493,40.325006],[-74.613741,40.324185],[-74.613157,40.323945],[-74.607943,40.321925],[-74.60361,40.321376],[-74.600564,40.315587],[-74.5967,40.314608],[-74.593825,40.315279],[-74.5896,40.314208],[-74.588728,40.313724],[-74.585665,40.313213],[-74.584145,40.308884],[-74.583119,40.306156],[-74.580831,40.304192],[-74.575563,40.30288],[-74.572559,40.301054],[-74.570657,40.299581],[-74.567575,40.299874],[-74.56492,40.296921],[-74.559199,40.295608],[-74.557279,40.292004],[-74.553398,40.290708],[-74.549872,40.290731],[-74.545964,40.291313],[-74.544891,40.292379],[-74.54204,40.291333],[-74.539749,40.288576],[-74.53654,40.289432],[-74.533585,40.292282],[-74.528591,40.294297],[-74.526863,40.29309],[-74.521998,40.290125],[-74.522255,40.286561],[-74.520802,40.286591],[-74.514752,40.2871],[-74.512066,40.285026],[-74.511273,40.283288],[-74.505246,40.280484],[-74.503852,40.28082],[-74.501897,40.279109],[-74.498681,40.280497],[-74.490919,40.277561],[-74.49074,40.277606],[-74.490604,40.277488],[-74.490187,40.277315],[-74.490052,40.27718],[-74.489829,40.277026],[-74.489498,40.276853],[-74.488797,40.276608],[-74.487095,40.275158],[-74.482379,40.273812],[-74.482476,40.267316],[-74.484287,40.253299],[-74.487344,40.253143],[-74.487472,40.252131],[-74.485923,40.249611],[-74.483999,40.248548],[-74.482198,40.246423],[-74.481397,40.243455],[-74.481589,40.243068],[-74.487496,40.24011],[-74.496269,40.236388],[-74.516897,40.22721],[-74.526561,40.223521],[-74.542912,40.216653],[-74.543198,40.21651],[-74.546773,40.212655],[-74.5486,40.207685],[-74.556988,40.199984],[-74.560038,40.194778],[-74.562591,40.189943],[-74.565044,40.188218],[-74.570429,40.185722],[-74.574292,40.187042],[-74.581433,40.185027],[-74.58624,40.183853],[-74.589444,40.181393],[-74.593429,40.179703],[-74.595489,40.179695],[-74.596881,40.18609],[-74.599635,40.186791],[-74.613529,40.182672],[-74.614246,40.182474],[-74.609642,40.174178],[-74.604028,40.16542],[-74.597888,40.154929],[-74.596593,40.153097],[-74.591781,40.144142],[-74.587847,40.138237],[-74.59477,40.137875],[-74.602185,40.136933],[-74.607461,40.139548],[-74.606741,40.140575],[-74.610102,40.139693],[-74.612867,40.140599],[-74.615116,40.140473],[-74.616407,40.141597],[-74.619221,40.140426],[-74.620526,40.141266],[-74.621945,40.141148],[-74.623474,40.142401],[-74.62232,40.14487],[-74.623519,40.14596],[-74.624,40.149065],[-74.627261,40.149457],[-74.627441,40.148705],[-74.630035,40.148767],[-74.631606,40.150431],[-74.633314,40.149029],[-74.634731,40.151456],[-74.637956,40.151934],[-74.638432,40.154203],[-74.64168,40.155196],[-74.642847,40.154183],[-74.646721,40.156267],[-74.647834,40.155533],[-74.650948,40.158644],[-74.654533,40.158516],[-74.655186,40.15999],[-74.655207,40.160095],[-74.655307,40.160151],[-74.657957,40.160948],[-74.658995,40.162148],[-74.661027,40.162139],[-74.662171,40.165235],[-74.665112,40.164737],[-74.665802,40.166156],[-74.66776,40.166679],[-74.669394,40.166699],[-74.669828,40.165375],[-74.670698,40.166625],[-74.673505,40.167102],[-74.675696,40.165748],[-74.677517,40.16623],[-74.677332,40.167285],[-74.674253,40.170162],[-74.675627,40.172338],[-74.674236,40.173525],[-74.679404,40.17368],[-74.679451,40.173665],[-74.679559,40.173758],[-74.680259,40.175895],[-74.68273,40.176677],[-74.684841,40.178118],[-74.685554,40.175444],[-74.686549,40.177267],[-74.69054,40.176915],[-74.692871,40.179469],[-74.695876,40.178905],[-74.69478,40.182544],[-74.697403,40.182458],[-74.702421,40.184223],[-74.704552,40.182173],[-74.708279,40.181904],[-74.711072,40.180709],[-74.709736,40.17875],[-74.710523,40.17736],[-74.712986,40.175704],[-74.712711,40.174438],[-74.71086,40.172847],[-74.708423,40.171846],[-74.708886,40.170311],[-74.710782,40.168045],[-74.710106,40.166724],[-74.704607,40.16903],[-74.704599,40.16722],[-74.706474,40.161619],[-74.7084,40.160064],[-74.71101,40.157142],[-74.71292,40.156095],[-74.713818,40.152655],[-74.716,40.15139],[-74.719468,40.147701],[-74.724134,40.14731],[-74.722604,40.15001],[-74.721604,40.15381],[-74.721504,40.158409],[-74.722304,40.160609],[-74.733804,40.174509],[-74.737205,40.177609],[-74.744105,40.181009],[-74.751705,40.183309],[-74.751943,40.183483],[-74.754305,40.185209],[-74.755605,40.186709],[-74.756905,40.189409],[-74.760605,40.198909],[-74.763997,40.203647],[-74.766905,40.207709],[-74.767136,40.208157],[-74.767627,40.20911],[-74.770406,40.214508],[-74.771117,40.215172],[-74.77136,40.215399],[-74.778305,40.219708]]]}},{"type":"Feature","properties":{"GEO_ID":"34023","STATE":"34","COUNTY":"023","NAME":"Middlesex","LSAD":"County","CENSUSAREA":308.914},"geometry":{"type":"Polygon","coordinates":[[[-74.208956,40.576562],[-74.208988,40.576304],[-74.212017,40.568106],[-74.214788,40.560604],[-74.218189,40.557204],[-74.229036,40.558823],[-74.231589,40.559204],[-74.232261,40.558826],[-74.248641,40.549601],[-74.250346,40.545157],[-74.251441,40.542301],[-74.250814,40.539728],[-74.246237,40.520963],[-74.253004,40.514287],[-74.25682,40.510522],[-74.259192,40.508182],[-74.260694,40.5067],[-74.263568,40.503864],[-74.265198,40.502256],[-74.266796,40.500679],[-74.26829,40.499205],[-74.269998,40.495014],[-74.27269,40.488405],[-74.271959,40.486025],[-74.271562,40.484734],[-74.269839,40.479125],[-74.26759,40.471806],[-74.267164,40.471275],[-74.261889,40.464706],[-74.257962,40.463631],[-74.256801,40.463313],[-74.236689,40.457806],[-74.225035,40.453301],[-74.225357,40.453086],[-74.225177,40.452674],[-74.225249,40.452537],[-74.222789,40.451188],[-74.227639,40.444529],[-74.232218,40.445017],[-74.23379,40.443309],[-74.235496,40.44429],[-74.240385,40.439022],[-74.245267,40.433704],[-74.247207,40.431588],[-74.247371,40.431459],[-74.247383,40.429994],[-74.247388,40.429893],[-74.247832,40.416055],[-74.247963,40.412192],[-74.249689,40.411107],[-74.248314,40.408206],[-74.248308,40.4081],[-74.248304,40.407459],[-74.248288,40.40733],[-74.248293,40.407301],[-74.251456,40.404113],[-74.260521,40.397037],[-74.262658,40.395356],[-74.273848,40.386526],[-74.282609,40.37959],[-74.291074,40.373006],[-74.299022,40.366807],[-74.304883,40.362229],[-74.305174,40.362],[-74.312916,40.355942],[-74.327404,40.344579],[-74.33784,40.336339],[-74.35249,40.324809],[-74.356077,40.322003],[-74.360699,40.318386],[-74.36265,40.316856],[-74.3758,40.306432],[-74.378294,40.30435],[-74.379247,40.303451],[-74.381135,40.301546],[-74.394112,40.288463],[-74.394434,40.287759],[-74.393624,40.286042],[-74.394248,40.283385],[-74.393167,40.28186],[-74.393517,40.279574],[-74.396586,40.278675],[-74.408085,40.273791],[-74.435996,40.261907],[-74.436538,40.261677],[-74.461017,40.251122],[-74.464301,40.252245],[-74.484287,40.253299],[-74.482476,40.267316],[-74.482379,40.273812],[-74.487095,40.275158],[-74.488797,40.276608],[-74.489498,40.276853],[-74.489829,40.277026],[-74.490052,40.27718],[-74.490187,40.277315],[-74.490604,40.277488],[-74.49074,40.277606],[-74.490919,40.277561],[-74.498681,40.280497],[-74.501897,40.279109],[-74.503852,40.28082],[-74.505246,40.280484],[-74.511273,40.283288],[-74.512066,40.285026],[-74.514752,40.2871],[-74.520802,40.286591],[-74.522255,40.286561],[-74.521998,40.290125],[-74.526863,40.29309],[-74.528591,40.294297],[-74.533585,40.292282],[-74.53654,40.289432],[-74.539749,40.288576],[-74.54204,40.291333],[-74.544891,40.292379],[-74.545964,40.291313],[-74.549872,40.290731],[-74.553398,40.290708],[-74.557279,40.292004],[-74.559199,40.295608],[-74.56492,40.296921],[-74.567575,40.299874],[-74.570657,40.299581],[-74.572559,40.301054],[-74.575563,40.30288],[-74.580831,40.304192],[-74.583119,40.306156],[-74.584145,40.308884],[-74.585665,40.313213],[-74.588728,40.313724],[-74.5896,40.314208],[-74.593825,40.315279],[-74.5967,40.314608],[-74.600564,40.315587],[-74.60361,40.321376],[-74.607943,40.321925],[-74.613157,40.323945],[-74.613741,40.324185],[-74.615493,40.325006],[-74.621929,40.324362],[-74.622785,40.325382],[-74.622514,40.328334],[-74.624395,40.329163],[-74.623304,40.334404],[-74.628986,40.338892],[-74.630101,40.340607],[-74.630001,40.343407],[-74.630001,40.34525],[-74.629914,40.345698],[-74.626736,40.356413],[-74.624901,40.365406],[-74.623879,40.366605],[-74.622001,40.367206],[-74.620478,40.370093],[-74.619591,40.374397],[-74.6134,40.37562],[-74.602564,40.38071],[-74.596584,40.385142],[-74.595262,40.386468],[-74.591843,40.392027],[-74.587804,40.394264],[-74.58742,40.399538],[-74.585831,40.403402],[-74.586209,40.406299],[-74.586016,40.407259],[-74.585277,40.410549],[-74.585998,40.416515],[-74.585616,40.417485],[-74.584173,40.41869],[-74.57843,40.421281],[-74.576164,40.422304],[-74.571633,40.423908],[-74.569873,40.424531],[-74.560467,40.42797],[-74.555686,40.429739],[-74.555038,40.429978],[-74.551968,40.431262],[-74.549305,40.432407],[-74.547315,40.433275],[-74.546766,40.433515],[-74.539735,40.436713],[-74.53619,40.438326],[-74.535058,40.4391],[-74.531476,40.441383],[-74.52965,40.442547],[-74.526567,40.444851],[-74.520644,40.451002],[-74.520338,40.451278],[-74.520117,40.451427],[-74.514384,40.455287],[-74.512389,40.456621],[-74.512,40.45697],[-74.510695,40.458139],[-74.510485,40.458346],[-74.507814,40.460985],[-74.50704,40.461466],[-74.504476,40.463059],[-74.502473,40.464313],[-74.50212,40.464538],[-74.494502,40.469606],[-74.494275,40.469807],[-74.49364,40.470364],[-74.493536,40.470465],[-74.489524,40.474415],[-74.484313,40.480174],[-74.482344,40.481751],[-74.479472,40.48337],[-74.478499,40.483918],[-74.475889,40.484648],[-74.47245,40.485612],[-74.47171,40.485819],[-74.468209,40.486845],[-74.463575,40.489049],[-74.463231,40.489291],[-74.46253,40.48968],[-74.459922,40.491015],[-74.459084,40.496063],[-74.46078,40.498628],[-74.466268,40.502241],[-74.467277,40.505005],[-74.467228,40.505222],[-74.467291,40.505634],[-74.467181,40.508425],[-74.467425,40.508722],[-74.469507,40.509221],[-74.471554,40.509761],[-74.477776,40.510826],[-74.480297,40.511203],[-74.481606,40.511922],[-74.482297,40.512303],[-74.485189,40.516024],[-74.489275,40.521381],[-74.490547,40.523048],[-74.495444,40.529433],[-74.497941,40.531038],[-74.499362,40.531951],[-74.500188,40.532407],[-74.503035,40.533971],[-74.50718,40.536632],[-74.507852,40.537328],[-74.511611,40.539779],[-74.514622,40.542711],[-74.515782,40.544955],[-74.516371,40.546601],[-74.516756,40.549229],[-74.517353,40.551972],[-74.519503,40.555324],[-74.523836,40.558757],[-74.527025,40.559601],[-74.524833,40.561908],[-74.525422,40.566549],[-74.525899,40.568507],[-74.523818,40.569519],[-74.521122,40.574052],[-74.515478,40.579394],[-74.516009,40.581216],[-74.512183,40.582029],[-74.508021,40.584962],[-74.504985,40.58616],[-74.502041,40.583846],[-74.501831,40.585291],[-74.499572,40.5868],[-74.497828,40.585912],[-74.492838,40.587452],[-74.490215,40.586673],[-74.485647,40.588963],[-74.483064,40.589515],[-74.478087,40.593371],[-74.478042,40.59343],[-74.477793,40.593757],[-74.477476,40.594065],[-74.474825,40.595644],[-74.47015,40.598403],[-74.46572,40.598126],[-74.463351,40.599245],[-74.458197,40.594502],[-74.4568,40.5955],[-74.455865,40.595502],[-74.444601,40.596494],[-74.437596,40.597162],[-74.437334,40.597188],[-74.428296,40.598002],[-74.42641,40.598112],[-74.424699,40.598513],[-74.420946,40.598767],[-74.416106,40.59891],[-74.413477,40.599399],[-74.407464,40.599803],[-74.406569,40.599922],[-74.402272,40.600288],[-74.400795,40.600503],[-74.394634,40.600901],[-74.390095,40.601303],[-74.377823,40.601909],[-74.372722,40.60231],[-74.359118,40.603539],[-74.3584,40.603602],[-74.357292,40.603803],[-74.356866,40.603803],[-74.346893,40.604703],[-74.338493,40.605503],[-74.331527,40.606213],[-74.3233,40.606827],[-74.322321,40.606949],[-74.320692,40.607203],[-74.313199,40.60801],[-74.311892,40.608103],[-74.310892,40.608103],[-74.310449,40.608155],[-74.308792,40.608403],[-74.303392,40.608903],[-74.303292,40.607803],[-74.303492,40.607203],[-74.304722,40.606629],[-74.303134,40.605711],[-74.304173,40.60323],[-74.304384,40.602725],[-74.305326,40.600586],[-74.302162,40.598864],[-74.300301,40.598285],[-74.299809,40.598027],[-74.297722,40.596625],[-74.296741,40.595966],[-74.294909,40.594854],[-74.295064,40.594488],[-74.292748,40.59286],[-74.292591,40.592703],[-74.292494,40.59263],[-74.291391,40.591903],[-74.290861,40.592007],[-74.280598,40.593918],[-74.279385,40.594134],[-74.278091,40.594403],[-74.272792,40.595329],[-74.270017,40.595828],[-74.266122,40.596335],[-74.26016,40.597374],[-74.258114,40.60225],[-74.25381,40.600989],[-74.24779,40.600103],[-74.243642,40.599744],[-74.242488,40.599771],[-74.235905,40.602512],[-74.231821,40.598908],[-74.23124,40.59899],[-74.230533,40.599142],[-74.221958,40.600199],[-74.218124,40.601413],[-74.215101,40.604074],[-74.21287,40.602035],[-74.212032,40.598372],[-74.210741,40.597032],[-74.206731,40.594569],[-74.207672,40.586951],[-74.208956,40.576562]]]}},{"type":"Feature","properties":{"GEO_ID":"34025","STATE":"34","COUNTY":"025","NAME":"Monmouth","LSAD":"County","CENSUSAREA":468.793},"geometry":{"type":"Polygon","coordinates":[[[-73.994833,40.23287],[-73.9957,40.230172],[-73.996117,40.228872],[-73.997554,40.224398],[-73.998286,40.222121],[-73.998652,40.22098],[-73.999576,40.218105],[-73.999914,40.217052],[-74.002634,40.208581],[-74.006848,40.195461],[-74.008205,40.191237],[-74.009398,40.187521],[-74.011193,40.181934],[-74.012189,40.178833],[-74.012783,40.176983],[-74.013203,40.175676],[-74.013649,40.174286],[-74.016017,40.166914],[-74.020706,40.152314],[-74.02523,40.13823],[-74.025639,40.136956],[-74.030181,40.122814],[-74.031192,40.117706],[-74.031825,40.114509],[-74.032326,40.111977],[-74.03408,40.103115],[-74.031861,40.101047],[-74.038643,40.104456],[-74.040524,40.10404],[-74.044121,40.105333],[-74.049694,40.104085],[-74.052286,40.102493],[-74.055783,40.10106],[-74.057583,40.097305],[-74.060584,40.096629],[-74.064348,40.093473],[-74.070251,40.089406],[-74.071292,40.089168],[-74.075087,40.091531],[-74.077925,40.092543],[-74.08385,40.095843],[-74.08559,40.097611],[-74.085878,40.09797],[-74.090011,40.102472],[-74.090845,40.103833],[-74.094222,40.107509],[-74.093667,40.111401],[-74.094945,40.11338],[-74.094061,40.115005],[-74.095281,40.117159],[-74.095678,40.117634],[-74.096152,40.118472],[-74.09626,40.118881],[-74.096384,40.119336],[-74.096504,40.119562],[-74.096723,40.120135],[-74.096201,40.12463],[-74.095919,40.128744],[-74.097336,40.129028],[-74.099039,40.127781],[-74.100941,40.130012],[-74.102069,40.130244],[-74.103865,40.132658],[-74.103345,40.134412],[-74.107681,40.137008],[-74.112069,40.13297],[-74.122579,40.123903],[-74.127816,40.119081],[-74.129498,40.117565],[-74.129673,40.117401],[-74.130438,40.116685],[-74.135642,40.111764],[-74.137064,40.110545],[-74.14386,40.104299],[-74.149976,40.098812],[-74.15154,40.099096],[-74.154404,40.099719],[-74.155064,40.101604],[-74.157842,40.103119],[-74.158079,40.10495],[-74.160306,40.10702],[-74.164099,40.106948],[-74.171905,40.107709],[-74.178813,40.110897],[-74.178933,40.110871],[-74.179241,40.1109],[-74.179506,40.110833],[-74.17965,40.110735],[-74.179834,40.110685],[-74.180064,40.110672],[-74.180135,40.110639],[-74.180104,40.110521],[-74.180193,40.110479],[-74.180425,40.110477],[-74.180672,40.110505],[-74.182627,40.110121],[-74.185582,40.11137],[-74.189276,40.110722],[-74.194078,40.112186],[-74.197709,40.111773],[-74.198052,40.111993],[-74.198,40.111686],[-74.198202,40.111494],[-74.198796,40.111813],[-74.199268,40.111775],[-74.203888,40.11255],[-74.210309,40.1107],[-74.210729,40.110749],[-74.211444,40.110504],[-74.211921,40.110144],[-74.21224,40.110104],[-74.219025,40.110045],[-74.224411,40.108982],[-74.232836,40.110216],[-74.234853,40.111463],[-74.239604,40.112383],[-74.242957,40.115797],[-74.244665,40.118578],[-74.243216,40.122693],[-74.242144,40.123249],[-74.241818,40.129299],[-74.247713,40.139027],[-74.247869,40.139247],[-74.247919,40.13943],[-74.248121,40.139651],[-74.248089,40.139751],[-74.250055,40.144204],[-74.253481,40.147635],[-74.253723,40.147724],[-74.25374,40.147736],[-74.257092,40.149173],[-74.259792,40.148979],[-74.258421,40.152286],[-74.260186,40.156084],[-74.259951,40.156259],[-74.260144,40.156432],[-74.260172,40.156648],[-74.260085,40.156756],[-74.259823,40.156841],[-74.259778,40.157015],[-74.259836,40.157282],[-74.258301,40.160195],[-74.260623,40.165613],[-74.263763,40.168264],[-74.292802,40.168824],[-74.305577,40.169076],[-74.325567,40.169611],[-74.346752,40.17024],[-74.349772,40.170295],[-74.406777,40.172355],[-74.416715,40.165362],[-74.421718,40.161866],[-74.458389,40.13624],[-74.469543,40.128578],[-74.507415,40.103507],[-74.508733,40.102591],[-74.527323,40.090276],[-74.533474,40.087413],[-74.553105,40.07913],[-74.587847,40.138237],[-74.591781,40.144142],[-74.596593,40.153097],[-74.597888,40.154929],[-74.604028,40.16542],[-74.609642,40.174178],[-74.614246,40.182474],[-74.613529,40.182672],[-74.599635,40.186791],[-74.596881,40.18609],[-74.595489,40.179695],[-74.593429,40.179703],[-74.589444,40.181393],[-74.58624,40.183853],[-74.581433,40.185027],[-74.574292,40.187042],[-74.570429,40.185722],[-74.565044,40.188218],[-74.562591,40.189943],[-74.560038,40.194778],[-74.556988,40.199984],[-74.5486,40.207685],[-74.546773,40.212655],[-74.543198,40.21651],[-74.542912,40.216653],[-74.526561,40.223521],[-74.516897,40.22721],[-74.496269,40.236388],[-74.487496,40.24011],[-74.481589,40.243068],[-74.481397,40.243455],[-74.482198,40.246423],[-74.483999,40.248548],[-74.485923,40.249611],[-74.487472,40.252131],[-74.487344,40.253143],[-74.484287,40.253299],[-74.464301,40.252245],[-74.461017,40.251122],[-74.436538,40.261677],[-74.435996,40.261907],[-74.408085,40.273791],[-74.396586,40.278675],[-74.393517,40.279574],[-74.393167,40.28186],[-74.394248,40.283385],[-74.393624,40.286042],[-74.394434,40.287759],[-74.394112,40.288463],[-74.381135,40.301546],[-74.379247,40.303451],[-74.378294,40.30435],[-74.3758,40.306432],[-74.36265,40.316856],[-74.360699,40.318386],[-74.356077,40.322003],[-74.35249,40.324809],[-74.33784,40.336339],[-74.327404,40.344579],[-74.312916,40.355942],[-74.305174,40.362],[-74.304883,40.362229],[-74.299022,40.366807],[-74.291074,40.373006],[-74.282609,40.37959],[-74.273848,40.386526],[-74.262658,40.395356],[-74.260521,40.397037],[-74.251456,40.404113],[-74.248293,40.407301],[-74.248288,40.40733],[-74.248304,40.407459],[-74.248308,40.4081],[-74.248314,40.408206],[-74.249689,40.411107],[-74.247963,40.412192],[-74.247832,40.416055],[-74.247388,40.429893],[-74.247383,40.429994],[-74.247371,40.431459],[-74.247207,40.431588],[-74.245267,40.433704],[-74.240385,40.439022],[-74.235496,40.44429],[-74.23379,40.443309],[-74.232218,40.445017],[-74.227639,40.444529],[-74.222789,40.451188],[-74.225249,40.452537],[-74.225177,40.452674],[-74.225357,40.453086],[-74.225035,40.453301],[-74.224047,40.452919],[-74.222959,40.452499],[-74.209788,40.447407],[-74.208948,40.445843],[-74.207339,40.44285],[-74.206212,40.440752],[-74.206188,40.440707],[-74.206212,40.440509],[-74.206243,40.440249],[-74.206419,40.438789],[-74.208063,40.437856],[-74.208655,40.43752],[-74.207337,40.435625],[-74.207205,40.435434],[-74.202388,40.43876],[-74.202128,40.43894],[-74.200091,40.439449],[-74.195609,40.44057],[-74.194975,40.440728],[-74.193908,40.440995],[-74.191309,40.44299],[-74.188349,40.446702],[-74.187787,40.447407],[-74.187748,40.447432],[-74.174788,40.455607],[-74.174787,40.455607],[-74.174787,40.455606],[-74.174893,40.454491],[-74.174898,40.454347],[-74.175069,40.449318],[-74.175074,40.449144],[-74.176842,40.44774],[-74.176777,40.44769],[-74.175346,40.446607],[-74.174309,40.447386],[-74.169977,40.45064],[-74.16875,40.449853],[-74.167009,40.448737],[-74.166278,40.447296],[-74.166193,40.447128],[-74.16403,40.448311],[-74.164029,40.448312],[-74.163907,40.448331],[-74.163314,40.448424],[-74.157787,40.446607],[-74.156371,40.44696],[-74.155617,40.447147],[-74.153611,40.447647],[-74.152686,40.447344],[-74.151952,40.448062],[-74.147664,40.449171],[-74.147566,40.449197],[-74.142886,40.450407],[-74.139886,40.453407],[-74.138415,40.454468],[-74.135823,40.455196],[-74.135691,40.455163],[-74.134699,40.454915],[-74.133727,40.454672],[-74.131135,40.453245],[-74.127595,40.451138],[-74.127466,40.451061],[-74.124692,40.44958],[-74.122327,40.448258],[-74.116901,40.446085],[-74.116863,40.446069],[-74.116705,40.446028],[-74.103048,40.442391],[-74.092278,40.439524],[-74.091518,40.439321],[-74.090135,40.438953],[-74.088085,40.438407],[-74.081345,40.435745],[-74.076869,40.433977],[-74.076185,40.433707],[-74.073862,40.432222],[-74.06721,40.427968],[-74.064343,40.426134],[-74.060638,40.423765],[-74.060405,40.423617],[-74.058984,40.422708],[-74.054799,40.421275],[-74.053551,40.420848],[-74.053223,40.420736],[-74.048036,40.41896],[-74.047884,40.418908],[-74.036761,40.416818],[-74.006383,40.411108],[-74.001538,40.410987],[-73.998505,40.410911],[-73.995486,40.419472],[-73.995486,40.419474],[-73.991682,40.442908],[-74.006077,40.464625],[-74.017783,40.472207],[-74.017917,40.474338],[-74.014031,40.476471],[-74.0071,40.475298],[-73.995683,40.468707],[-73.978282,40.440208],[-73.976982,40.408508],[-73.975605,40.399459],[-73.972989,40.382274],[-73.971381,40.371709],[-73.971381,40.371705],[-73.971381,40.361502],[-73.971381,40.34801],[-73.971813,40.344542],[-73.971888,40.343938],[-73.972495,40.33907],[-73.97339,40.331888],[-73.974569,40.322425],[-73.975639,40.31384],[-73.975668,40.31361],[-73.975908,40.31168],[-73.976447,40.307354],[-73.977115,40.301997],[-73.977442,40.299373],[-73.97852,40.294296],[-73.981681,40.279411],[-73.982578,40.276186],[-73.984428,40.269537],[-73.984983,40.267539],[-73.986977,40.260372],[-73.993292,40.237669],[-73.993386,40.237378],[-73.994833,40.23287]]]}},{"type":"Feature","properties":{"GEO_ID":"34027","STATE":"34","COUNTY":"027","NAME":"Morris","LSAD":"County","CENSUSAREA":460.177},"geometry":{"type":"Polygon","coordinates":[[[-74.861666,40.803505],[-74.859902,40.801094],[-74.855688,40.803611],[-74.850827,40.803785],[-74.84935,40.805212],[-74.847078,40.808261],[-74.846698,40.811086],[-74.844198,40.811055],[-74.841978,40.813249],[-74.840289,40.815692],[-74.835024,40.819248],[-74.834718,40.822141],[-74.832979,40.823485],[-74.830084,40.825692],[-74.831685,40.828052],[-74.831678,40.828172],[-74.831599,40.828283],[-74.827398,40.832355],[-74.822977,40.834678],[-74.818134,40.83716],[-74.82038,40.841265],[-74.823632,40.843655],[-74.821681,40.848501],[-74.820413,40.849731],[-74.817326,40.850852],[-74.813765,40.851522],[-74.810078,40.854624],[-74.809657,40.860164],[-74.802967,40.861913],[-74.80206,40.86461],[-74.807074,40.867777],[-74.808125,40.869562],[-74.805939,40.873519],[-74.805622,40.875097],[-74.806533,40.87688],[-74.806827,40.882127],[-74.803744,40.885715],[-74.799212,40.887711],[-74.794906,40.888611],[-74.791993,40.890137],[-74.790203,40.892926],[-74.79043,40.896215],[-74.78899,40.897238],[-74.783059,40.900352],[-74.779257,40.906172],[-74.776579,40.905119],[-74.767874,40.911823],[-74.766001,40.912626],[-74.764502,40.912111],[-74.762857,40.913339],[-74.761238,40.911981],[-74.760181,40.913405],[-74.75526,40.913756],[-74.751488,40.915501],[-74.751371,40.91775],[-74.747164,40.919929],[-74.73639,40.919145],[-74.731869,40.920823],[-74.728583,40.916368],[-74.722693,40.914673],[-74.720061,40.913217],[-74.713069,40.908425],[-74.712141,40.904563],[-74.71343,40.902351],[-74.71368,40.89994],[-74.711393,40.899141],[-74.706817,40.901497],[-74.704863,40.901818],[-74.704725,40.901836],[-74.704495,40.901927],[-74.704115,40.901942],[-74.696006,40.906498],[-74.692165,40.904432],[-74.688906,40.905198],[-74.688006,40.908798],[-74.683246,40.910105],[-74.679531,40.909192],[-74.677002,40.910853],[-74.675276,40.910992],[-74.675035,40.911534],[-74.670219,40.913803],[-74.664094,40.91804],[-74.659747,40.919378],[-74.65303,40.921623],[-74.651994,40.922762],[-74.651805,40.923298],[-74.651905,40.924098],[-74.653638,40.925909],[-74.653053,40.928821],[-74.651405,40.930798],[-74.645791,40.934146],[-74.640505,40.937298],[-74.6394,40.938639],[-74.636163,40.942639],[-74.63524,40.945004],[-74.634837,40.9507],[-74.636654,40.954105],[-74.640904,40.9591],[-74.641032,40.95935],[-74.641424,40.961365],[-74.640643,40.965338],[-74.638993,40.967267],[-74.632139,40.973241],[-74.63222,40.973651],[-74.625959,40.979662],[-74.614808,40.990284],[-74.614432,40.990643],[-74.606789,40.998027],[-74.594932,41.008199],[-74.584198,41.01709],[-74.571202,41.02776],[-74.548395,41.048018],[-74.536002,41.058497],[-74.52194,41.07075],[-74.505665,41.084187],[-74.502892,41.085904],[-74.500732,41.085974],[-74.499326,41.084898],[-74.498991,41.083459],[-74.495963,41.082225],[-74.495846,41.081286],[-74.493117,41.079888],[-74.49199,41.07834],[-74.489265,41.078001],[-74.487716,41.07638],[-74.48746,41.075124],[-74.488993,41.072312],[-74.48836,41.069772],[-74.487244,41.068005],[-74.486991,41.0656],[-74.488653,41.063148],[-74.492652,41.063219],[-74.495084,41.061667],[-74.501826,41.038964],[-74.500269,41.03831],[-74.499193,41.035427],[-74.497364,41.034149],[-74.496582,41.035511],[-74.491623,41.037809],[-74.488264,41.038477],[-74.488382,41.039128],[-74.484547,41.042794],[-74.48209,41.043117],[-74.481178,41.045556],[-74.474883,41.048133],[-74.470306,41.047816],[-74.464788,41.050034],[-74.461117,41.051959],[-74.457512,41.051861],[-74.44817,41.053744],[-74.444813,41.051864],[-74.441853,41.048991],[-74.441335,41.045897],[-74.440574,41.044081],[-74.437651,41.043005],[-74.432864,41.038044],[-74.429814,41.037942],[-74.42777,41.037109],[-74.427268,41.03599],[-74.428299,41.032297],[-74.431199,41.030297],[-74.4307,41.027798],[-74.4326,41.027698],[-74.433498,41.025397],[-74.434198,41.020297],[-74.429611,41.018266],[-74.425419,41.019233],[-74.423728,41.027596],[-74.421458,41.02854],[-74.417535,41.028638],[-74.411126,41.026325],[-74.409959,41.024946],[-74.406653,41.024287],[-74.403388,41.021833],[-74.402725,41.01981],[-74.399391,41.017289],[-74.391519,41.015902],[-74.389521,41.013629],[-74.389303,41.012431],[-74.386419,41.011696],[-74.382247,41.013959],[-74.376383,41.013621],[-74.371163,41.011394],[-74.365834,41.011699],[-74.363819,41.011342],[-74.363009,41.013169],[-74.359515,41.01415],[-74.35407,41.013274],[-74.351481,41.01099],[-74.351258,41.006896],[-74.35139,41.004593],[-74.349452,41.004329],[-74.348939,41.004418],[-74.348038,41.004537],[-74.346047,41.004628],[-74.341878,41.006956],[-74.341032,41.005902],[-74.338322,41.007043],[-74.334733,41.0063],[-74.334605,41.003719],[-74.33015,41.002753],[-74.328411,41.001419],[-74.327867,41.001161],[-74.327594,41.001109],[-74.326671,41.001112],[-74.321735,41.001418],[-74.315226,41.001991],[-74.309838,40.998484],[-74.305809,40.999141],[-74.301747,40.999021],[-74.300327,41.002743],[-74.298773,41.002824],[-74.297549,41.000588],[-74.298064,40.998771],[-74.297634,40.996497],[-74.29549,40.994839],[-74.295531,40.990966],[-74.292637,40.987806],[-74.296156,40.984632],[-74.296552,40.984351],[-74.297281,40.983576],[-74.297314,40.979761],[-74.294771,40.9788],[-74.2903,40.979854],[-74.284709,40.979001],[-74.281276,40.979953],[-74.281539,40.976647],[-74.277503,40.974428],[-74.27762,40.971332],[-74.280338,40.972315],[-74.281622,40.969191],[-74.280934,40.966689],[-74.279041,40.965866],[-74.280257,40.957838],[-74.276892,40.954744],[-74.277564,40.951029],[-74.27884,40.946137],[-74.279196,40.943336],[-74.280335,40.93966],[-74.281674,40.936747],[-74.281975,40.936648],[-74.282134,40.936204],[-74.28482,40.931401],[-74.289184,40.928725],[-74.288012,40.927277],[-74.288161,40.92444],[-74.284911,40.922978],[-74.285991,40.921949],[-74.28376,40.919901],[-74.284021,40.917343],[-74.278843,40.918482],[-74.278663,40.915936],[-74.271659,40.915711],[-74.270616,40.914429],[-74.266638,40.908887],[-74.267401,40.90777],[-74.269284,40.907904],[-74.271458,40.910196],[-74.271648,40.907329],[-74.273133,40.905951],[-74.27097,40.903189],[-74.271138,40.901651],[-74.272825,40.899933],[-74.272687,40.898185],[-74.272616,40.898021],[-74.272544,40.897939],[-74.27253,40.897886],[-74.271362,40.897632],[-74.270702,40.89692],[-74.271003,40.896992],[-74.271181,40.897084],[-74.271482,40.897131],[-74.273852,40.897055],[-74.280731,40.897684],[-74.282297,40.895622],[-74.284616,40.895231],[-74.283814,40.898019],[-74.286563,40.899094],[-74.281716,40.899942],[-74.281765,40.900843],[-74.285381,40.901361],[-74.28926,40.899404],[-74.291275,40.899776],[-74.292447,40.901225],[-74.291373,40.901714],[-74.292247,40.903205],[-74.291629,40.905499],[-74.296583,40.90604],[-74.300841,40.904609],[-74.30298,40.904352],[-74.302832,40.907188],[-74.305939,40.905315],[-74.31016,40.904665],[-74.312409,40.905399],[-74.314503,40.90379],[-74.318546,40.903229],[-74.318493,40.907545],[-74.32016,40.907967],[-74.321595,40.906895],[-74.322957,40.907308],[-74.322804,40.908834],[-74.326269,40.908499],[-74.327647,40.907336],[-74.325271,40.907367],[-74.32499,40.905879],[-74.32802,40.905626],[-74.329533,40.908653],[-74.330799,40.906769],[-74.334438,40.904988],[-74.335298,40.90211],[-74.337159,40.900004],[-74.337531,40.898475],[-74.334334,40.897555],[-74.334347,40.896294],[-74.337019,40.896265],[-74.338999,40.894069],[-74.335745,40.893059],[-74.3389,40.892087],[-74.339425,40.890365],[-74.338112,40.887758],[-74.33983,40.882065],[-74.340154,40.879437],[-74.337894,40.879427],[-74.337614,40.878206],[-74.33507,40.877426],[-74.337808,40.875101],[-74.334259,40.873471],[-74.33749,40.872207],[-74.336075,40.870406],[-74.33806,40.870059],[-74.336693,40.866545],[-74.332875,40.869174],[-74.331654,40.866926],[-74.331495,40.866854],[-74.330899,40.86695],[-74.326219,40.86612],[-74.321938,40.864038],[-74.320099,40.865999],[-74.317472,40.864874],[-74.318124,40.863046],[-74.320995,40.862361],[-74.319333,40.858113],[-74.321144,40.858529],[-74.324586,40.858153],[-74.326046,40.856491],[-74.325176,40.854109],[-74.326827,40.852758],[-74.32735,40.850673],[-74.32991,40.849161],[-74.328535,40.844667],[-74.325793,40.843914],[-74.327113,40.841867],[-74.329317,40.841475],[-74.329172,40.838299],[-74.330049,40.834618],[-74.328722,40.831754],[-74.333203,40.829434],[-74.334933,40.827626],[-74.3323,40.822068],[-74.334342,40.818416],[-74.339566,40.812824],[-74.344303,40.813719],[-74.349071,40.812641],[-74.350833,40.809089],[-74.350898,40.806798],[-74.356118,40.803799],[-74.358862,40.800572],[-74.359407,40.799943],[-74.359526,40.799875],[-74.364173,40.799042],[-74.364695,40.796145],[-74.366169,40.794786],[-74.366772,40.788568],[-74.366459,40.78332],[-74.36715,40.779982],[-74.36872,40.77907],[-74.372598,40.774854],[-74.370404,40.774449],[-74.369497,40.771421],[-74.371695,40.76737],[-74.369971,40.766969],[-74.370863,40.764008],[-74.37361,40.762801],[-74.376235,40.762749],[-74.377414,40.761152],[-74.375542,40.760731],[-74.37419,40.757999],[-74.367278,40.761067],[-74.367587,40.758066],[-74.364605,40.757844],[-74.361732,40.75594],[-74.357624,40.756117],[-74.357436,40.7546],[-74.359634,40.751154],[-74.363072,40.750403],[-74.367089,40.74933],[-74.367501,40.748516],[-74.364737,40.746441],[-74.366562,40.743889],[-74.370902,40.742757],[-74.37256,40.741587],[-74.371923,40.739229],[-74.370829,40.735753],[-74.372139,40.733978],[-74.374669,40.733545],[-74.377549,40.734278],[-74.380295,40.7333],[-74.377503,40.730032],[-74.379044,40.728904],[-74.384382,40.724385],[-74.386865,40.725684],[-74.39069,40.725499],[-74.390769,40.718294],[-74.392757,40.718046],[-74.39509,40.717273],[-74.399848,40.717836],[-74.402254,40.718001],[-74.40375,40.716023],[-74.40735,40.713461],[-74.408466,40.710106],[-74.411847,40.710345],[-74.413391,40.708966],[-74.413392,40.708966],[-74.413629,40.7084],[-74.4154,40.705781],[-74.418196,40.705301],[-74.424733,40.701957],[-74.426897,40.701711],[-74.428707,40.699119],[-74.429023,40.698754],[-74.430781,40.693453],[-74.434551,40.693575],[-74.437847,40.6919],[-74.439652,40.68972],[-74.444333,40.687969],[-74.448,40.685574],[-74.451853,40.685376],[-74.453029,40.682764],[-74.451617,40.679904],[-74.451542,40.679675],[-74.453275,40.677343],[-74.452584,40.676236],[-74.454573,40.67408],[-74.458721,40.674468],[-74.461231,40.673397],[-74.462074,40.671664],[-74.47002,40.667934],[-74.473046,40.669402],[-74.476412,40.666471],[-74.482306,40.666038],[-74.484835,40.665472],[-74.484118,40.663387],[-74.486083,40.662402],[-74.487346,40.663745],[-74.49119,40.663288],[-74.491615,40.661676],[-74.494019,40.66105],[-74.495399,40.662001],[-74.499395,40.661126],[-74.498786,40.659451],[-74.501722,40.658756],[-74.503862,40.659627],[-74.506131,40.658311],[-74.505137,40.657167],[-74.507595,40.652696],[-74.509871,40.65187],[-74.510463,40.650632],[-74.513011,40.649555],[-74.515323,40.651061],[-74.515856,40.650348],[-74.523627,40.649702],[-74.522078,40.650102],[-74.522675,40.651682],[-74.525729,40.651665],[-74.52619,40.652164],[-74.52377,40.653841],[-74.525835,40.653977],[-74.525959,40.656184],[-74.527275,40.659123],[-74.525617,40.660706],[-74.528867,40.662782],[-74.529705,40.664819],[-74.533691,40.66543],[-74.534387,40.667256],[-74.530064,40.667399],[-74.529118,40.669179],[-74.525733,40.670942],[-74.527826,40.677508],[-74.528512,40.681253],[-74.527853,40.684434],[-74.526386,40.685161],[-74.524327,40.689354],[-74.521475,40.688459],[-74.516849,40.689251],[-74.51675,40.690569],[-74.518924,40.69167],[-74.518501,40.693859],[-74.516251,40.693212],[-74.514409,40.694545],[-74.513699,40.697701],[-74.513838,40.700852],[-74.515381,40.702221],[-74.516717,40.702201],[-74.517796,40.705463],[-74.522111,40.70867],[-74.523701,40.70848],[-74.525828,40.709368],[-74.526846,40.710872],[-74.524799,40.712652],[-74.524208,40.715539],[-74.526084,40.715936],[-74.528722,40.717592],[-74.528949,40.719234],[-74.531299,40.719777],[-74.531512,40.721215],[-74.528827,40.728133],[-74.532678,40.730955],[-74.534907,40.730632],[-74.537981,40.732125],[-74.540226,40.73383],[-74.545079,40.733136],[-74.546033,40.734104],[-74.549086,40.73376],[-74.548534,40.738468],[-74.548999,40.740994],[-74.549383,40.745092],[-74.548751,40.74601],[-74.552851,40.749524],[-74.550924,40.751073],[-74.551869,40.753052],[-74.551914,40.754863],[-74.553197,40.756439],[-74.555253,40.757044],[-74.555771,40.758005],[-74.565901,40.756],[-74.570781,40.754875],[-74.590116,40.750565],[-74.618517,40.744137],[-74.619203,40.744001],[-74.63127,40.741111],[-74.658504,40.735],[-74.668619,40.733],[-74.682605,40.7297],[-74.689458,40.727782],[-74.721445,40.720556],[-74.724418,40.719455],[-74.724438,40.71948],[-74.724445,40.719482],[-74.725767,40.719255],[-74.732456,40.719928],[-74.742488,40.724104],[-74.742804,40.726085],[-74.752904,40.731026],[-74.76763,40.735396],[-74.774418,40.736714],[-74.793319,40.740187],[-74.798013,40.742189],[-74.798664,40.74165],[-74.803695,40.741733],[-74.808358,40.740979],[-74.813042,40.74114],[-74.813116,40.741982],[-74.816312,40.742694],[-74.823327,40.742287],[-74.823435,40.742266],[-74.82388,40.742358],[-74.824067,40.742445],[-74.827484,40.744072],[-74.829701,40.745791],[-74.842948,40.755963],[-74.844051,40.758545],[-74.848398,40.761331],[-74.869071,40.774373],[-74.889753,40.787832],[-74.889182,40.788806],[-74.885623,40.790829],[-74.883429,40.791367],[-74.880439,40.790576],[-74.876789,40.792442],[-74.875838,40.793702],[-74.873488,40.794488],[-74.870109,40.794755],[-74.867914,40.795878],[-74.864699,40.802901],[-74.861666,40.803505]]]}},{"type":"Feature","properties":{"GEO_ID":"34029","STATE":"34","COUNTY":"029","NAME":"Ocean","LSAD":"County","CENSUSAREA":628.781},"geometry":{"type":"Polygon","coordinates":[[[-74.28421,39.508614],[-74.288282,39.50537],[-74.292034,39.502381],[-74.302531,39.500171],[-74.304349,39.505303],[-74.304959,39.507024],[-74.311037,39.506715],[-74.311302,39.50543],[-74.312451,39.499869],[-74.321957,39.505144],[-74.326382,39.506332],[-74.337821,39.506882],[-74.354214,39.505572],[-74.360968,39.502027],[-74.37777,39.499121],[-74.380796,39.498537],[-74.397682,39.530397],[-74.4033,39.540325],[-74.405781,39.542391],[-74.410489,39.547852],[-74.415841,39.54945],[-74.416746,39.550831],[-74.416119,39.556023],[-74.417393,39.557255],[-74.416599,39.559211],[-74.41607,39.559568],[-74.414398,39.560977],[-74.414097,39.562396],[-74.417096,39.564112],[-74.418833,39.568583],[-74.41599,39.57046],[-74.412734,39.57022],[-74.410395,39.571021],[-74.408923,39.569599],[-74.405159,39.569593],[-74.403148,39.571784],[-74.400819,39.572242],[-74.398223,39.576683],[-74.396755,39.584591],[-74.394123,39.590527],[-74.392577,39.593954],[-74.390396,39.596201],[-74.390331,39.627049],[-74.390322,39.628455],[-74.389905,39.773372],[-74.417164,39.823184],[-74.434653,39.854803],[-74.449266,39.881242],[-74.470777,39.922591],[-74.484984,39.949827],[-74.495277,39.969638],[-74.498676,39.976236],[-74.506474,39.991205],[-74.514769,40.007677],[-74.52863,40.03668],[-74.533753,40.045245],[-74.53511,40.047558],[-74.537007,40.050532],[-74.540585,40.057028],[-74.540807,40.057392],[-74.543408,40.062249],[-74.544053,40.063419],[-74.548606,40.071506],[-74.553105,40.07913],[-74.533474,40.087413],[-74.527323,40.090276],[-74.508733,40.102591],[-74.507415,40.103507],[-74.469543,40.128578],[-74.458389,40.13624],[-74.421718,40.161866],[-74.416715,40.165362],[-74.406777,40.172355],[-74.349772,40.170295],[-74.346752,40.17024],[-74.325567,40.169611],[-74.305577,40.169076],[-74.292802,40.168824],[-74.263763,40.168264],[-74.260623,40.165613],[-74.258301,40.160195],[-74.259836,40.157282],[-74.259778,40.157015],[-74.259823,40.156841],[-74.260085,40.156756],[-74.260172,40.156648],[-74.260144,40.156432],[-74.259951,40.156259],[-74.260186,40.156084],[-74.258421,40.152286],[-74.259792,40.148979],[-74.257092,40.149173],[-74.25374,40.147736],[-74.253723,40.147724],[-74.253481,40.147635],[-74.250055,40.144204],[-74.248089,40.139751],[-74.248121,40.139651],[-74.247919,40.13943],[-74.247869,40.139247],[-74.247713,40.139027],[-74.241818,40.129299],[-74.242144,40.123249],[-74.243216,40.122693],[-74.244665,40.118578],[-74.242957,40.115797],[-74.239604,40.112383],[-74.234853,40.111463],[-74.232836,40.110216],[-74.224411,40.108982],[-74.219025,40.110045],[-74.21224,40.110104],[-74.211921,40.110144],[-74.211444,40.110504],[-74.210729,40.110749],[-74.210309,40.1107],[-74.203888,40.11255],[-74.199268,40.111775],[-74.198796,40.111813],[-74.198202,40.111494],[-74.198,40.111686],[-74.198052,40.111993],[-74.197709,40.111773],[-74.194078,40.112186],[-74.189276,40.110722],[-74.185582,40.11137],[-74.182627,40.110121],[-74.180672,40.110505],[-74.180425,40.110477],[-74.180193,40.110479],[-74.180104,40.110521],[-74.180135,40.110639],[-74.180064,40.110672],[-74.179834,40.110685],[-74.17965,40.110735],[-74.179506,40.110833],[-74.179241,40.1109],[-74.178933,40.110871],[-74.178813,40.110897],[-74.171905,40.107709],[-74.164099,40.106948],[-74.160306,40.10702],[-74.158079,40.10495],[-74.157842,40.103119],[-74.155064,40.101604],[-74.154404,40.099719],[-74.15154,40.099096],[-74.149976,40.098812],[-74.14386,40.104299],[-74.137064,40.110545],[-74.135642,40.111764],[-74.130438,40.116685],[-74.129673,40.117401],[-74.129498,40.117565],[-74.127816,40.119081],[-74.122579,40.123903],[-74.112069,40.13297],[-74.107681,40.137008],[-74.103345,40.134412],[-74.103865,40.132658],[-74.102069,40.130244],[-74.100941,40.130012],[-74.099039,40.127781],[-74.097336,40.129028],[-74.095919,40.128744],[-74.096201,40.12463],[-74.096723,40.120135],[-74.096504,40.119562],[-74.096384,40.119336],[-74.09626,40.118881],[-74.096152,40.118472],[-74.095678,40.117634],[-74.095281,40.117159],[-74.094061,40.115005],[-74.094945,40.11338],[-74.093667,40.111401],[-74.094222,40.107509],[-74.090845,40.103833],[-74.090011,40.102472],[-74.085878,40.09797],[-74.08559,40.097611],[-74.08385,40.095843],[-74.077925,40.092543],[-74.075087,40.091531],[-74.071292,40.089168],[-74.070251,40.089406],[-74.064348,40.093473],[-74.060584,40.096629],[-74.057583,40.097305],[-74.055783,40.10106],[-74.052286,40.102493],[-74.049694,40.104085],[-74.044121,40.105333],[-74.040524,40.10404],[-74.038643,40.104456],[-74.031861,40.101047],[-74.031318,40.100541],[-74.031956,40.100248],[-74.033546,40.099518],[-74.035741,40.092764],[-74.038148,40.085353],[-74.039421,40.081437],[-74.040844,40.075548],[-74.045069,40.058062],[-74.050245,40.036643],[-74.050384,40.036068],[-74.05263,40.02677],[-74.056574,40.010448],[-74.056622,40.010251],[-74.057663,40.00594],[-74.057815,40.005311],[-74.05819,40.003761],[-74.058798,40.001244],[-74.061859,39.988575],[-74.063932,39.979996],[-74.064135,39.979157],[-74.065118,39.974045],[-74.065133,39.97397],[-74.066029,39.969309],[-74.067967,39.959236],[-74.068758,39.955123],[-74.070049,39.948412],[-74.071728,39.939681],[-74.072259,39.936924],[-74.072919,39.93349],[-74.074571,39.924904],[-74.075242,39.921415],[-74.076881,39.912894],[-74.077247,39.910991],[-74.077358,39.910089],[-74.077775,39.906712],[-74.07804,39.904567],[-74.078312,39.902363],[-74.083375,39.861331],[-74.083817,39.857744],[-74.08862,39.818819],[-74.088869,39.816804],[-74.089276,39.813505],[-74.089798,39.809277],[-74.090945,39.799982],[-74.090945,39.799978],[-74.091752,39.795748],[-74.092157,39.793621],[-74.092558,39.791517],[-74.092894,39.789755],[-74.097071,39.767847],[-74.09707,39.767832],[-74.096912,39.763211],[-74.096906,39.76303],[-74.09892,39.759538],[-74.101443,39.756173],[-74.109073,39.746517],[-74.113655,39.740719],[-74.114482,39.739209],[-74.114552,39.739081],[-74.117059,39.734501],[-74.117309,39.734045],[-74.126241,39.71773],[-74.130043,39.710786],[-74.140212,39.692212],[-74.141724,39.689451],[-74.141733,39.689435],[-74.141737,39.68943],[-74.142816,39.688021],[-74.143027,39.687745],[-74.145086,39.685055],[-74.153884,39.673563],[-74.155266,39.671759],[-74.157104,39.669358],[-74.170596,39.651735],[-74.173445,39.648013],[-74.180659,39.638591],[-74.181119,39.63799],[-74.182986,39.635551],[-74.183421,39.634984],[-74.18357,39.634789],[-74.184556,39.633501],[-74.184925,39.633019],[-74.185612,39.632122],[-74.190974,39.625118],[-74.194571,39.620019],[-74.194908,39.619541],[-74.205793,39.604114],[-74.212717,39.5943],[-74.213002,39.593896],[-74.21569,39.590085],[-74.215996,39.589651],[-74.216114,39.589484],[-74.216392,39.58909],[-74.230062,39.569714],[-74.239453,39.556403],[-74.239471,39.556379],[-74.240506,39.554911],[-74.243654,39.552361],[-74.249043,39.547994],[-74.249858,39.547018],[-74.253314,39.542878],[-74.257431,39.537947],[-74.263388,39.530812],[-74.275944,39.515772],[-74.27737,39.514064],[-74.28421,39.508614]]]}},{"type":"Feature","properties":{"GEO_ID":"34031","STATE":"34","COUNTY":"031","NAME":"Passaic","LSAD":"County","CENSUSAREA":184.593},"geometry":{"type":"Polygon","coordinates":[[[-74.389457,41.182833],[-74.365849,41.202999],[-74.355383,41.198191],[-74.348287,41.194932],[-74.344134,41.193024],[-74.329446,41.186276],[-74.321694,41.182715],[-74.320995,41.182394],[-74.301994,41.172594],[-74.280039,41.162933],[-74.24286,41.146573],[-74.234473,41.142883],[-74.232963,41.142266],[-74.21321,41.134192],[-74.228797,41.102995],[-74.248939,41.06382],[-74.24964,41.062615],[-74.250595,41.060676],[-74.263586,41.035749],[-74.26977,41.023608],[-74.270521,41.022131],[-74.272484,41.018312],[-74.26979,41.01632],[-74.269337,41.015974],[-74.266713,41.014063],[-74.264233,41.012198],[-74.24847,40.992303],[-74.231084,40.984394],[-74.224981,40.98163],[-74.211732,40.980156],[-74.198688,40.979193],[-74.198373,40.979166],[-74.191835,40.978688],[-74.18524,40.978129],[-74.184576,40.978079],[-74.181301,40.977782],[-74.170988,40.976997],[-74.17021,40.983865],[-74.165273,40.980636],[-74.161022,40.978154],[-74.159947,40.977485],[-74.155691,40.97501],[-74.149173,40.971185],[-74.149088,40.971137],[-74.148494,40.970801],[-74.141048,40.966348],[-74.141083,40.966243],[-74.141168,40.965786],[-74.141628,40.963594],[-74.142298,40.961828],[-74.143528,40.958518],[-74.143779,40.957816],[-74.144341,40.956354],[-74.144429,40.956053],[-74.145527,40.952139],[-74.146104,40.949668],[-74.146293,40.948961],[-74.146429,40.948441],[-74.148158,40.942339],[-74.148059,40.94159],[-74.145387,40.941298],[-74.143893,40.940507],[-74.140287,40.935698],[-74.139361,40.933983],[-74.139489,40.933433],[-74.139767,40.932913],[-74.139846,40.932773],[-74.139947,40.932427],[-74.14009,40.932176],[-74.142232,40.929453],[-74.142187,40.928798],[-74.142098,40.92804],[-74.141987,40.927098],[-74.141683,40.92636],[-74.141423,40.92573],[-74.139515,40.923499],[-74.136219,40.922848],[-74.133903,40.922786],[-74.131926,40.922168],[-74.12958,40.920071],[-74.130188,40.918197],[-74.130243,40.918119],[-74.132087,40.915298],[-74.133287,40.913098],[-74.133287,40.912399],[-74.133287,40.911798],[-74.13284,40.910905],[-74.132296,40.909177],[-74.131787,40.907498],[-74.131804,40.907401],[-74.132409,40.90406],[-74.133789,40.899295],[-74.13102,40.895405],[-74.129233,40.894081],[-74.129023,40.89384],[-74.128991,40.893779],[-74.129792,40.889863],[-74.129809,40.889738],[-74.130089,40.887633],[-74.130187,40.886899],[-74.130187,40.886376],[-74.130187,40.885999],[-74.129102,40.885275],[-74.120487,40.880399],[-74.120268,40.879766],[-74.117804,40.876812],[-74.11547,40.874782],[-74.114875,40.874187],[-74.113886,40.870499],[-74.112282,40.86889],[-74.111678,40.867309],[-74.110024,40.864719],[-74.107686,40.863599],[-74.107338,40.863077],[-74.106786,40.859299],[-74.107286,40.857199],[-74.109517,40.855408],[-74.110163,40.85527],[-74.111046,40.855466],[-74.111715,40.855881],[-74.112735,40.858673],[-74.113916,40.859581],[-74.115964,40.859874],[-74.118061,40.859502],[-74.118826,40.859327],[-74.119861,40.856321],[-74.120069,40.855067],[-74.119684,40.854392],[-74.119657,40.854285],[-74.119487,40.853599],[-74.119462,40.85335],[-74.119291,40.851674],[-74.120982,40.847945],[-74.121295,40.847445],[-74.121404,40.847184],[-74.121902,40.843848],[-74.12199,40.843258],[-74.12298,40.841558],[-74.124087,40.839899],[-74.122787,40.836199],[-74.121853,40.834098],[-74.12134,40.830219],[-74.122931,40.825592],[-74.124034,40.822989],[-74.124176,40.822629],[-74.126265,40.821005],[-74.130031,40.819962],[-74.134862,40.822786],[-74.139568,40.825294],[-74.142485,40.8268],[-74.145129,40.828426],[-74.148175,40.82994],[-74.150087,40.831098],[-74.151255,40.83164],[-74.151789,40.831999],[-74.151923,40.832074],[-74.158502,40.835699],[-74.162628,40.837869],[-74.179403,40.846972],[-74.179903,40.847261],[-74.181195,40.847959],[-74.182689,40.848799],[-74.18534,40.850228],[-74.192134,40.854276],[-74.192196,40.854306],[-74.197734,40.857279],[-74.196489,40.859799],[-74.201296,40.861847],[-74.20214,40.859622],[-74.204821,40.860915],[-74.212656,40.865236],[-74.2127,40.865261],[-74.213987,40.865998],[-74.21509,40.866499],[-74.222856,40.870752],[-74.223292,40.8711],[-74.223406,40.871161],[-74.226291,40.8728],[-74.228701,40.873941],[-74.23164,40.875623],[-74.238182,40.879114],[-74.2403,40.880204],[-74.241047,40.880302],[-74.241992,40.880399],[-74.242356,40.880497],[-74.244091,40.880599],[-74.245264,40.880722],[-74.246291,40.880799],[-74.246691,40.880799],[-74.2531,40.881561],[-74.253966,40.882292],[-74.254476,40.883098],[-74.259813,40.883769],[-74.264289,40.886906],[-74.266638,40.894533],[-74.270702,40.89692],[-74.271362,40.897632],[-74.27253,40.897886],[-74.272544,40.897939],[-74.272616,40.898021],[-74.272687,40.898185],[-74.272825,40.899933],[-74.271138,40.901651],[-74.27097,40.903189],[-74.273133,40.905951],[-74.271648,40.907329],[-74.271458,40.910196],[-74.269284,40.907904],[-74.267401,40.90777],[-74.266638,40.908887],[-74.270616,40.914429],[-74.271659,40.915711],[-74.278663,40.915936],[-74.278843,40.918482],[-74.284021,40.917343],[-74.28376,40.919901],[-74.285991,40.921949],[-74.284911,40.922978],[-74.288161,40.92444],[-74.288012,40.927277],[-74.289184,40.928725],[-74.28482,40.931401],[-74.282134,40.936204],[-74.281975,40.936648],[-74.281674,40.936747],[-74.280335,40.93966],[-74.279196,40.943336],[-74.27884,40.946137],[-74.277564,40.951029],[-74.276892,40.954744],[-74.280257,40.957838],[-74.279041,40.965866],[-74.280934,40.966689],[-74.281622,40.969191],[-74.280338,40.972315],[-74.27762,40.971332],[-74.277503,40.974428],[-74.281539,40.976647],[-74.281276,40.979953],[-74.284709,40.979001],[-74.2903,40.979854],[-74.294771,40.9788],[-74.297314,40.979761],[-74.297281,40.983576],[-74.296552,40.984351],[-74.296156,40.984632],[-74.292637,40.987806],[-74.295531,40.990966],[-74.29549,40.994839],[-74.297634,40.996497],[-74.298064,40.998771],[-74.297549,41.000588],[-74.298773,41.002824],[-74.300327,41.002743],[-74.301747,40.999021],[-74.305809,40.999141],[-74.309838,40.998484],[-74.315226,41.001991],[-74.321735,41.001418],[-74.326671,41.001112],[-74.327594,41.001109],[-74.327867,41.001161],[-74.328411,41.001419],[-74.33015,41.002753],[-74.334605,41.003719],[-74.334733,41.0063],[-74.338322,41.007043],[-74.341032,41.005902],[-74.341878,41.006956],[-74.346047,41.004628],[-74.348038,41.004537],[-74.348939,41.004418],[-74.349452,41.004329],[-74.35139,41.004593],[-74.351258,41.006896],[-74.351481,41.01099],[-74.35407,41.013274],[-74.359515,41.01415],[-74.363009,41.013169],[-74.363819,41.011342],[-74.365834,41.011699],[-74.371163,41.011394],[-74.376383,41.013621],[-74.382247,41.013959],[-74.386419,41.011696],[-74.389303,41.012431],[-74.389521,41.013629],[-74.391519,41.015902],[-74.399391,41.017289],[-74.402725,41.01981],[-74.403388,41.021833],[-74.406653,41.024287],[-74.409959,41.024946],[-74.411126,41.026325],[-74.417535,41.028638],[-74.421458,41.02854],[-74.423728,41.027596],[-74.425419,41.019233],[-74.429611,41.018266],[-74.434198,41.020297],[-74.433498,41.025397],[-74.4326,41.027698],[-74.4307,41.027798],[-74.431199,41.030297],[-74.428299,41.032297],[-74.427268,41.03599],[-74.42777,41.037109],[-74.429814,41.037942],[-74.432864,41.038044],[-74.437651,41.043005],[-74.440574,41.044081],[-74.441335,41.045897],[-74.441853,41.048991],[-74.444813,41.051864],[-74.44817,41.053744],[-74.457512,41.051861],[-74.461117,41.051959],[-74.464788,41.050034],[-74.470306,41.047816],[-74.474883,41.048133],[-74.481178,41.045556],[-74.48209,41.043117],[-74.484547,41.042794],[-74.488382,41.039128],[-74.488264,41.038477],[-74.491623,41.037809],[-74.496582,41.035511],[-74.497364,41.034149],[-74.499193,41.035427],[-74.500269,41.03831],[-74.501826,41.038964],[-74.495084,41.061667],[-74.492652,41.063219],[-74.488653,41.063148],[-74.486991,41.0656],[-74.487244,41.068005],[-74.48836,41.069772],[-74.488993,41.072312],[-74.48746,41.075124],[-74.487716,41.07638],[-74.489265,41.078001],[-74.49199,41.07834],[-74.493117,41.079888],[-74.495846,41.081286],[-74.495963,41.082225],[-74.498991,41.083459],[-74.499326,41.084898],[-74.500732,41.085974],[-74.502892,41.085904],[-74.499701,41.088896],[-74.482601,41.103796],[-74.482298,41.104101],[-74.43509,41.14436],[-74.416899,41.159595],[-74.39863,41.175063],[-74.389457,41.182833]]]}},{"type":"Feature","properties":{"GEO_ID":"34035","STATE":"34","COUNTY":"035","NAME":"Somerset","LSAD":"County","CENSUSAREA":301.813},"geometry":{"type":"Polygon","coordinates":[[[-74.523627,40.649702],[-74.515856,40.650348],[-74.515323,40.651061],[-74.513011,40.649555],[-74.510463,40.650632],[-74.509871,40.65187],[-74.507595,40.652696],[-74.505137,40.657167],[-74.506131,40.658311],[-74.503862,40.659627],[-74.501722,40.658756],[-74.498786,40.659451],[-74.499395,40.661126],[-74.495399,40.662001],[-74.494019,40.66105],[-74.491615,40.661676],[-74.49119,40.663288],[-74.487346,40.663745],[-74.486083,40.662402],[-74.484118,40.663387],[-74.484835,40.665472],[-74.482306,40.666038],[-74.476412,40.666471],[-74.473046,40.669402],[-74.47002,40.667934],[-74.462074,40.671664],[-74.461231,40.673397],[-74.461195,40.673343],[-74.457331,40.66646],[-74.452568,40.656118],[-74.451697,40.654202],[-74.448544,40.655415],[-74.444272,40.657041],[-74.43691,40.662934],[-74.433537,40.66458],[-74.429612,40.665317],[-74.428379,40.663444],[-74.427724,40.663321],[-74.426951,40.663186],[-74.425609,40.662631],[-74.425351,40.662363],[-74.421392,40.658067],[-74.419293,40.658537],[-74.416927,40.66129],[-74.413335,40.662327],[-74.41006,40.665331],[-74.405281,40.667798],[-74.404492,40.667432],[-74.403606,40.666752],[-74.403353,40.666537],[-74.401847,40.663456],[-74.403031,40.660309],[-74.402662,40.65638],[-74.402716,40.656048],[-74.403495,40.655043],[-74.403829,40.654761],[-74.406879,40.650629],[-74.406749,40.649299],[-74.40691,40.646691],[-74.408264,40.644185],[-74.408894,40.642689],[-74.412975,40.641944],[-74.413235,40.641361],[-74.413737,40.640968],[-74.414887,40.637626],[-74.415004,40.633008],[-74.41641,40.63086],[-74.418011,40.627501],[-74.42089,40.626187],[-74.421277,40.625777],[-74.421673,40.625617],[-74.422437,40.62531],[-74.423104,40.624253],[-74.423378,40.620848],[-74.42341,40.620804],[-74.424152,40.620002],[-74.424333,40.619717],[-74.424542,40.619327],[-74.424743,40.619151],[-74.424862,40.619093],[-74.425659,40.618674],[-74.42657,40.617954],[-74.42674,40.617784],[-74.426956,40.617504],[-74.427137,40.617218],[-74.427699,40.616735],[-74.429231,40.616257],[-74.43141,40.615791],[-74.433032,40.613994],[-74.435417,40.612869],[-74.437612,40.61034],[-74.440577,40.609465],[-74.445635,40.60908],[-74.447998,40.607987],[-74.449809,40.6054],[-74.451269,40.603906],[-74.454713,40.603966],[-74.457314,40.602216],[-74.459878,40.600033],[-74.463351,40.599245],[-74.46572,40.598126],[-74.47015,40.598403],[-74.474825,40.595644],[-74.477476,40.594065],[-74.477793,40.593757],[-74.478042,40.59343],[-74.478087,40.593371],[-74.483064,40.589515],[-74.485647,40.588963],[-74.490215,40.586673],[-74.492838,40.587452],[-74.497828,40.585912],[-74.499572,40.5868],[-74.501831,40.585291],[-74.502041,40.583846],[-74.504985,40.58616],[-74.508021,40.584962],[-74.512183,40.582029],[-74.516009,40.581216],[-74.515478,40.579394],[-74.521122,40.574052],[-74.523818,40.569519],[-74.525899,40.568507],[-74.525422,40.566549],[-74.524833,40.561908],[-74.527025,40.559601],[-74.523836,40.558757],[-74.519503,40.555324],[-74.517353,40.551972],[-74.516756,40.549229],[-74.516371,40.546601],[-74.515782,40.544955],[-74.514622,40.542711],[-74.511611,40.539779],[-74.507852,40.537328],[-74.50718,40.536632],[-74.503035,40.533971],[-74.500188,40.532407],[-74.499362,40.531951],[-74.497941,40.531038],[-74.495444,40.529433],[-74.490547,40.523048],[-74.489275,40.521381],[-74.485189,40.516024],[-74.482297,40.512303],[-74.481606,40.511922],[-74.480297,40.511203],[-74.477776,40.510826],[-74.471554,40.509761],[-74.469507,40.509221],[-74.467425,40.508722],[-74.467181,40.508425],[-74.467291,40.505634],[-74.467228,40.505222],[-74.467277,40.505005],[-74.466268,40.502241],[-74.46078,40.498628],[-74.459084,40.496063],[-74.459922,40.491015],[-74.46253,40.48968],[-74.463231,40.489291],[-74.463575,40.489049],[-74.468209,40.486845],[-74.47171,40.485819],[-74.47245,40.485612],[-74.475889,40.484648],[-74.478499,40.483918],[-74.479472,40.48337],[-74.482344,40.481751],[-74.484313,40.480174],[-74.489524,40.474415],[-74.493536,40.470465],[-74.49364,40.470364],[-74.494275,40.469807],[-74.494502,40.469606],[-74.50212,40.464538],[-74.502473,40.464313],[-74.504476,40.463059],[-74.50704,40.461466],[-74.507814,40.460985],[-74.510485,40.458346],[-74.510695,40.458139],[-74.512,40.45697],[-74.512389,40.456621],[-74.514384,40.455287],[-74.520117,40.451427],[-74.520338,40.451278],[-74.520644,40.451002],[-74.526567,40.444851],[-74.52965,40.442547],[-74.531476,40.441383],[-74.535058,40.4391],[-74.53619,40.438326],[-74.539735,40.436713],[-74.546766,40.433515],[-74.547315,40.433275],[-74.549305,40.432407],[-74.551968,40.431262],[-74.555038,40.429978],[-74.555686,40.429739],[-74.560467,40.42797],[-74.569873,40.424531],[-74.571633,40.423908],[-74.576164,40.422304],[-74.57843,40.421281],[-74.584173,40.41869],[-74.585616,40.417485],[-74.585998,40.416515],[-74.585277,40.410549],[-74.586016,40.407259],[-74.586209,40.406299],[-74.585831,40.403402],[-74.58742,40.399538],[-74.587804,40.394264],[-74.591843,40.392027],[-74.595262,40.386468],[-74.596584,40.385142],[-74.602564,40.38071],[-74.6134,40.37562],[-74.619591,40.374397],[-74.617525,40.377862],[-74.618495,40.380217],[-74.622744,40.384421],[-74.630348,40.386033],[-74.644043,40.389057],[-74.651469,40.390594],[-74.653814,40.391003],[-74.6542,40.390903],[-74.671581,40.385741],[-74.67475,40.384195],[-74.678729,40.383682],[-74.67919,40.383609],[-74.679298,40.383595],[-74.688037,40.382562],[-74.697861,40.380847],[-74.700698,40.380621],[-74.703387,40.379989],[-74.70788,40.379305],[-74.710697,40.378218],[-74.718704,40.376608],[-74.722161,40.375155],[-74.734992,40.399049],[-74.741058,40.411592],[-74.748147,40.424156],[-74.752023,40.43138],[-74.772288,40.469005],[-74.782513,40.487775],[-74.797841,40.515557],[-74.787821,40.512307],[-74.785133,40.510098],[-74.785206,40.508393],[-74.780691,40.504489],[-74.776922,40.50348],[-74.775425,40.503488],[-74.774757,40.504177],[-74.761559,40.525019],[-74.751243,40.540953],[-74.749152,40.544217],[-74.748996,40.544449],[-74.746867,40.547625],[-74.743089,40.553257],[-74.742659,40.553898],[-74.73549,40.558934],[-74.733672,40.561139],[-74.730702,40.563584],[-74.728157,40.564295],[-74.724644,40.566108],[-74.722536,40.569484],[-74.712962,40.584231],[-74.720002,40.586961],[-74.724937,40.588755],[-74.720478,40.596246],[-74.718472,40.599616],[-74.721705,40.600579],[-74.715056,40.609974],[-74.713337,40.612261],[-74.711325,40.611411],[-74.703689,40.621296],[-74.711329,40.624869],[-74.711386,40.627483],[-74.713323,40.630629],[-74.716348,40.631587],[-74.719402,40.630912],[-74.721397,40.631485],[-74.725501,40.631736],[-74.726545,40.632508],[-74.727585,40.635894],[-74.722708,40.639125],[-74.722111,40.64186],[-74.723888,40.644118],[-74.723732,40.646911],[-74.719498,40.651807],[-74.720378,40.654303],[-74.722614,40.656544],[-74.727465,40.658576],[-74.728903,40.660711],[-74.73077,40.665297],[-74.728686,40.666622],[-74.726515,40.666949],[-74.722532,40.670077],[-74.722617,40.671354],[-74.721395,40.675699],[-74.72174,40.678012],[-74.720319,40.679648],[-74.71857,40.680345],[-74.717744,40.683988],[-74.723691,40.68751],[-74.722534,40.690027],[-74.721237,40.691422],[-74.720977,40.696072],[-74.719207,40.697635],[-74.716504,40.698709],[-74.715694,40.700365],[-74.71587,40.701356],[-74.717895,40.703312],[-74.716485,40.704063],[-74.717429,40.705358],[-74.719618,40.705983],[-74.719563,40.70768],[-74.720457,40.70923],[-74.721018,40.712762],[-74.720229,40.715132],[-74.723518,40.717207],[-74.724418,40.719455],[-74.721445,40.720556],[-74.689458,40.727782],[-74.682605,40.7297],[-74.668619,40.733],[-74.658504,40.735],[-74.63127,40.741111],[-74.619203,40.744001],[-74.618517,40.744137],[-74.590116,40.750565],[-74.570781,40.754875],[-74.565901,40.756],[-74.555771,40.758005],[-74.555253,40.757044],[-74.553197,40.756439],[-74.551914,40.754863],[-74.551869,40.753052],[-74.550924,40.751073],[-74.552851,40.749524],[-74.548751,40.74601],[-74.549383,40.745092],[-74.548999,40.740994],[-74.548534,40.738468],[-74.549086,40.73376],[-74.546033,40.734104],[-74.545079,40.733136],[-74.540226,40.73383],[-74.537981,40.732125],[-74.534907,40.730632],[-74.532678,40.730955],[-74.528827,40.728133],[-74.531512,40.721215],[-74.531299,40.719777],[-74.528949,40.719234],[-74.528722,40.717592],[-74.526084,40.715936],[-74.524208,40.715539],[-74.524799,40.712652],[-74.526846,40.710872],[-74.525828,40.709368],[-74.523701,40.70848],[-74.522111,40.70867],[-74.517796,40.705463],[-74.516717,40.702201],[-74.515381,40.702221],[-74.513838,40.700852],[-74.513699,40.697701],[-74.514409,40.694545],[-74.516251,40.693212],[-74.518501,40.693859],[-74.518924,40.69167],[-74.51675,40.690569],[-74.516849,40.689251],[-74.521475,40.688459],[-74.524327,40.689354],[-74.526386,40.685161],[-74.527853,40.684434],[-74.528512,40.681253],[-74.527826,40.677508],[-74.525733,40.670942],[-74.529118,40.669179],[-74.530064,40.667399],[-74.534387,40.667256],[-74.533691,40.66543],[-74.529705,40.664819],[-74.528867,40.662782],[-74.525617,40.660706],[-74.527275,40.659123],[-74.525959,40.656184],[-74.525835,40.653977],[-74.52377,40.653841],[-74.52619,40.652164],[-74.525729,40.651665],[-74.522675,40.651682],[-74.522078,40.650102],[-74.523627,40.649702]]]}},{"type":"Feature","properties":{"GEO_ID":"34037","STATE":"34","COUNTY":"037","NAME":"Sussex","LSAD":"County","CENSUSAREA":519.014},"geometry":{"type":"Polygon","coordinates":[[[-74.424905,41.231932],[-74.378898,41.208994],[-74.365849,41.202999],[-74.389457,41.182833],[-74.39863,41.175063],[-74.416899,41.159595],[-74.43509,41.14436],[-74.482298,41.104101],[-74.482601,41.103796],[-74.499701,41.088896],[-74.502892,41.085904],[-74.505665,41.084187],[-74.52194,41.07075],[-74.536002,41.058497],[-74.548395,41.048018],[-74.571202,41.02776],[-74.584198,41.01709],[-74.594932,41.008199],[-74.606789,40.998027],[-74.614432,40.990643],[-74.614808,40.990284],[-74.625959,40.979662],[-74.63222,40.973651],[-74.632139,40.973241],[-74.638993,40.967267],[-74.640643,40.965338],[-74.641424,40.961365],[-74.641032,40.95935],[-74.640904,40.9591],[-74.636654,40.954105],[-74.634837,40.9507],[-74.63524,40.945004],[-74.636163,40.942639],[-74.6394,40.938639],[-74.640505,40.937298],[-74.645791,40.934146],[-74.651405,40.930798],[-74.653053,40.928821],[-74.653638,40.925909],[-74.651905,40.924098],[-74.651805,40.923298],[-74.651994,40.922762],[-74.65303,40.921623],[-74.659747,40.919378],[-74.664094,40.91804],[-74.670219,40.913803],[-74.675035,40.911534],[-74.675276,40.910992],[-74.677002,40.910853],[-74.679531,40.909192],[-74.683246,40.910105],[-74.688006,40.908798],[-74.688906,40.905198],[-74.692165,40.904432],[-74.696006,40.906498],[-74.704115,40.901942],[-74.704495,40.901927],[-74.704725,40.901836],[-74.704863,40.901818],[-74.706817,40.901497],[-74.711393,40.899141],[-74.71368,40.89994],[-74.71343,40.902351],[-74.712141,40.904563],[-74.713069,40.908425],[-74.720061,40.913217],[-74.722693,40.914673],[-74.728583,40.916368],[-74.731869,40.920823],[-74.73639,40.919145],[-74.747164,40.919929],[-74.751371,40.91775],[-74.751488,40.915501],[-74.75526,40.913756],[-74.760181,40.913405],[-74.761238,40.911981],[-74.762857,40.913339],[-74.764502,40.912111],[-74.766001,40.912626],[-74.767874,40.911823],[-74.78921,40.931298],[-74.800962,40.941946],[-74.802015,40.942918],[-74.821711,40.960697],[-74.836712,40.974297],[-74.859168,40.994881],[-74.860906,40.996483],[-74.879782,41.013854],[-74.886577,41.020106],[-74.908089,41.040072],[-74.938971,41.068729],[-74.940129,41.069776],[-74.967136,41.094441],[-74.967464,41.095327],[-74.969434,41.096074],[-74.972036,41.095562],[-74.975298,41.094073],[-74.981314,41.08986],[-74.984782,41.088545],[-74.988263,41.088222],[-74.991013,41.088578],[-74.991815,41.089132],[-74.991718,41.092284],[-74.982212,41.108245],[-74.979873,41.110423],[-74.972917,41.113327],[-74.969312,41.113869],[-74.966298,41.113669],[-74.964294,41.114237],[-74.947912,41.12356],[-74.947334,41.124439],[-74.947714,41.126292],[-74.945067,41.129052],[-74.931141,41.133387],[-74.923169,41.138146],[-74.905256,41.155668],[-74.90178,41.161394],[-74.901172,41.16387],[-74.899701,41.166181],[-74.889424,41.1736],[-74.882139,41.180836],[-74.878492,41.187504],[-74.878275,41.190489],[-74.874034,41.198543],[-74.871425,41.202492],[-74.867287,41.208754],[-74.860398,41.217454],[-74.859632,41.219077],[-74.859323,41.220507],[-74.860837,41.222317],[-74.866839,41.226865],[-74.867405,41.22777],[-74.866182,41.232132],[-74.862049,41.237609],[-74.861678,41.241575],[-74.857151,41.248975],[-74.856003,41.250094],[-74.854669,41.25051],[-74.848987,41.251192],[-74.846932,41.253318],[-74.845883,41.254945],[-74.845031,41.258055],[-74.846506,41.261576],[-74.846319,41.263077],[-74.841137,41.27098],[-74.838366,41.277286],[-74.836213,41.279201],[-74.834067,41.281111],[-74.830057,41.2872],[-74.821884,41.293838],[-74.815703,41.296151],[-74.812033,41.298157],[-74.806858,41.303155],[-74.800044,41.306716],[-74.792558,41.310628],[-74.791991,41.311639],[-74.792377,41.314088],[-74.795822,41.318516],[-74.79504,41.320407],[-74.792116,41.322465],[-74.789095,41.323281],[-74.781584,41.324229],[-74.774887,41.324326],[-74.771588,41.325079],[-74.766714,41.328558],[-74.763499,41.331568],[-74.760325,41.340325],[-74.755971,41.344953],[-74.753239,41.346122],[-74.735622,41.346518],[-74.730373,41.345983],[-74.720923,41.347384],[-74.708514,41.352734],[-74.704429,41.354043],[-74.700595,41.354553],[-74.694914,41.357423],[-74.685343,41.353021],[-74.649028,41.336321],[-74.641544,41.332879],[-74.607348,41.317774],[-74.573728,41.302038],[-74.556173,41.293822],[-74.536689,41.284702],[-74.499603,41.267344],[-74.476961,41.257041],[-74.46836,41.253128],[-74.457584,41.248225],[-74.424905,41.231932]]]}},{"type":"Feature","properties":{"GEO_ID":"34039","STATE":"34","COUNTY":"039","NAME":"Union","LSAD":"County","CENSUSAREA":102.855},"geometry":{"type":"Polygon","coordinates":[[[-74.161397,40.644092],[-74.181083,40.646484],[-74.185953,40.646082],[-74.186027,40.646076],[-74.187921,40.644695],[-74.189106,40.643832],[-74.200532,40.6327],[-74.202223,40.631053],[-74.206731,40.594569],[-74.210741,40.597032],[-74.212032,40.598372],[-74.21287,40.602035],[-74.215101,40.604074],[-74.218124,40.601413],[-74.221958,40.600199],[-74.230533,40.599142],[-74.23124,40.59899],[-74.231821,40.598908],[-74.235905,40.602512],[-74.242488,40.599771],[-74.243642,40.599744],[-74.24779,40.600103],[-74.25381,40.600989],[-74.258114,40.60225],[-74.26016,40.597374],[-74.266122,40.596335],[-74.270017,40.595828],[-74.272792,40.595329],[-74.278091,40.594403],[-74.279385,40.594134],[-74.280598,40.593918],[-74.290861,40.592007],[-74.291391,40.591903],[-74.292494,40.59263],[-74.292591,40.592703],[-74.292748,40.59286],[-74.295064,40.594488],[-74.294909,40.594854],[-74.296741,40.595966],[-74.297722,40.596625],[-74.299809,40.598027],[-74.300301,40.598285],[-74.302162,40.598864],[-74.305326,40.600586],[-74.304384,40.602725],[-74.304173,40.60323],[-74.303134,40.605711],[-74.304722,40.606629],[-74.303492,40.607203],[-74.303292,40.607803],[-74.303392,40.608903],[-74.308792,40.608403],[-74.310449,40.608155],[-74.310892,40.608103],[-74.311892,40.608103],[-74.313199,40.60801],[-74.320692,40.607203],[-74.322321,40.606949],[-74.3233,40.606827],[-74.331527,40.606213],[-74.338493,40.605503],[-74.346893,40.604703],[-74.356866,40.603803],[-74.357292,40.603803],[-74.3584,40.603602],[-74.359118,40.603539],[-74.372722,40.60231],[-74.377823,40.601909],[-74.390095,40.601303],[-74.394634,40.600901],[-74.400795,40.600503],[-74.402272,40.600288],[-74.406569,40.599922],[-74.407464,40.599803],[-74.413477,40.599399],[-74.416106,40.59891],[-74.420946,40.598767],[-74.424699,40.598513],[-74.42641,40.598112],[-74.428296,40.598002],[-74.437334,40.597188],[-74.437596,40.597162],[-74.444601,40.596494],[-74.455865,40.595502],[-74.4568,40.5955],[-74.458197,40.594502],[-74.463351,40.599245],[-74.459878,40.600033],[-74.457314,40.602216],[-74.454713,40.603966],[-74.451269,40.603906],[-74.449809,40.6054],[-74.447998,40.607987],[-74.445635,40.60908],[-74.440577,40.609465],[-74.437612,40.61034],[-74.435417,40.612869],[-74.433032,40.613994],[-74.43141,40.615791],[-74.429231,40.616257],[-74.427699,40.616735],[-74.427137,40.617218],[-74.426956,40.617504],[-74.42674,40.617784],[-74.42657,40.617954],[-74.425659,40.618674],[-74.424862,40.619093],[-74.424743,40.619151],[-74.424542,40.619327],[-74.424333,40.619717],[-74.424152,40.620002],[-74.42341,40.620804],[-74.423378,40.620848],[-74.423104,40.624253],[-74.422437,40.62531],[-74.421673,40.625617],[-74.421277,40.625777],[-74.42089,40.626187],[-74.418011,40.627501],[-74.41641,40.63086],[-74.415004,40.633008],[-74.414887,40.637626],[-74.413737,40.640968],[-74.413235,40.641361],[-74.412975,40.641944],[-74.408894,40.642689],[-74.408264,40.644185],[-74.40691,40.646691],[-74.406749,40.649299],[-74.406879,40.650629],[-74.403829,40.654761],[-74.403495,40.655043],[-74.402716,40.656048],[-74.402662,40.65638],[-74.403031,40.660309],[-74.401847,40.663456],[-74.403353,40.666537],[-74.403606,40.666752],[-74.404492,40.667432],[-74.405281,40.667798],[-74.41006,40.665331],[-74.413335,40.662327],[-74.416927,40.66129],[-74.419293,40.658537],[-74.421392,40.658067],[-74.425351,40.662363],[-74.425609,40.662631],[-74.426951,40.663186],[-74.427724,40.663321],[-74.428379,40.663444],[-74.429612,40.665317],[-74.433537,40.66458],[-74.43691,40.662934],[-74.444272,40.657041],[-74.448544,40.655415],[-74.451697,40.654202],[-74.452568,40.656118],[-74.457331,40.66646],[-74.461195,40.673343],[-74.461231,40.673397],[-74.458721,40.674468],[-74.454573,40.67408],[-74.452584,40.676236],[-74.453275,40.677343],[-74.451542,40.679675],[-74.451617,40.679904],[-74.453029,40.682764],[-74.451853,40.685376],[-74.448,40.685574],[-74.444333,40.687969],[-74.439652,40.68972],[-74.437847,40.6919],[-74.434551,40.693575],[-74.430781,40.693453],[-74.429023,40.698754],[-74.428707,40.699119],[-74.426897,40.701711],[-74.424733,40.701957],[-74.418196,40.705301],[-74.4154,40.705781],[-74.413629,40.7084],[-74.413392,40.708966],[-74.413391,40.708966],[-74.411847,40.710345],[-74.408466,40.710106],[-74.40735,40.713461],[-74.40375,40.716023],[-74.402254,40.718001],[-74.399848,40.717836],[-74.39509,40.717273],[-74.392757,40.718046],[-74.390769,40.718294],[-74.39069,40.725499],[-74.386865,40.725684],[-74.384382,40.724385],[-74.379044,40.728904],[-74.377503,40.730032],[-74.380295,40.7333],[-74.377549,40.734278],[-74.374669,40.733545],[-74.372139,40.733978],[-74.370829,40.735753],[-74.371923,40.739229],[-74.370943,40.739196],[-74.369514,40.739086],[-74.36524,40.737653],[-74.364887,40.73756],[-74.364204,40.737412],[-74.363623,40.737286],[-74.363597,40.737402],[-74.355689,40.734893],[-74.354942,40.7345],[-74.35384,40.733611],[-74.352664,40.732629],[-74.351141,40.731792],[-74.342682,40.725181],[-74.338681,40.723404],[-74.332088,40.720176],[-74.330334,40.719295],[-74.325596,40.717075],[-74.322519,40.718542],[-74.321408,40.719072],[-74.318609,40.7192],[-74.315991,40.719199],[-74.315293,40.718601],[-74.311691,40.715601],[-74.308431,40.714409],[-74.304589,40.713512],[-74.303691,40.7133],[-74.302695,40.713601],[-74.302092,40.713301],[-74.30123,40.713472],[-74.299933,40.713725],[-74.299833,40.71375],[-74.299496,40.713889],[-74.29869,40.71479],[-74.294766,40.717645],[-74.294179,40.719611],[-74.290806,40.721495],[-74.285299,40.722055],[-74.283879,40.721654],[-74.276812,40.719635],[-74.276563,40.719542],[-74.276192,40.719403],[-74.27572,40.719266],[-74.275035,40.719112],[-74.273909,40.718725],[-74.272091,40.718101],[-74.271918,40.718058],[-74.270488,40.717696],[-74.269471,40.717334],[-74.269389,40.717297],[-74.268996,40.717224],[-74.268389,40.717103],[-74.267397,40.716703],[-74.267002,40.71659],[-74.263291,40.715501],[-74.262329,40.715129],[-74.260294,40.714601],[-74.259998,40.714481],[-74.25629,40.7133],[-74.255793,40.713301],[-74.255502,40.713229],[-74.254995,40.713101],[-74.251884,40.71255],[-74.248494,40.711907],[-74.24729,40.711601],[-74.245433,40.711577],[-74.245416,40.711567],[-74.24514,40.711408],[-74.244311,40.71119],[-74.244245,40.711176],[-74.244168,40.711165],[-74.244013,40.711143],[-74.243702,40.711143],[-74.236521,40.709614],[-74.232676,40.709002],[-74.231732,40.708837],[-74.228571,40.70829],[-74.227986,40.70819],[-74.227016,40.708023],[-74.226118,40.707809],[-74.226077,40.707795],[-74.225944,40.707778],[-74.223554,40.707446],[-74.222452,40.707249],[-74.221914,40.706869],[-74.221499,40.706584],[-74.22066,40.705908],[-74.218776,40.70452],[-74.214888,40.7019],[-74.213275,40.700618],[-74.212693,40.69967],[-74.21241,40.69926],[-74.209789,40.690802],[-74.209042,40.690428],[-74.208344,40.690081],[-74.207589,40.689702],[-74.207497,40.689663],[-74.206389,40.689202],[-74.201889,40.686702],[-74.200899,40.68669],[-74.198023,40.686948],[-74.197494,40.687],[-74.197182,40.687019],[-74.193289,40.687202],[-74.192985,40.687262],[-74.178672,40.688323],[-74.169692,40.688599],[-74.168089,40.689896],[-74.162577,40.689663],[-74.160859,40.688896],[-74.160427,40.687128],[-74.138816,40.673903],[-74.136703,40.674444],[-74.13822,40.672699],[-74.140108,40.670421],[-74.142516,40.667515],[-74.153041,40.6548],[-74.159912,40.646365],[-74.161397,40.644092]]]}},{"type":"Feature","properties":{"GEO_ID":"36119","STATE":"36","COUNTY":"119","NAME":"Westchester","LSAD":"County","CENSUSAREA":430.497},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.772305,40.887329],[-73.772276,40.887499],[-73.770576,40.888399],[-73.768276,40.887599],[-73.767276,40.886899],[-73.767176,40.886299],[-73.767076,40.885399],[-73.767076,40.884799],[-73.767076,40.883499],[-73.766276,40.881099],[-73.766976,40.880099],[-73.767058,40.880082],[-73.770876,40.879299],[-73.775276,40.882199],[-73.775183,40.884066],[-73.775176,40.884199],[-73.772831,40.88459],[-73.772776,40.884599],[-73.772305,40.887329]]],[[[-73.667743,41.128496],[-73.695949,41.115434],[-73.727775,41.100696],[-73.722575,41.093596],[-73.716875,41.087596],[-73.706163,41.074184],[-73.694273,41.059296],[-73.687173,41.050697],[-73.682874,41.045383],[-73.679973,41.041797],[-73.675793,41.03665],[-73.670635,41.030298],[-73.670472,41.030097],[-73.666722,41.025482],[-73.662672,41.020497],[-73.66058,41.01829],[-73.659097,41.016727],[-73.655444,41.012874],[-73.655371,41.012797],[-73.654671,41.011697],[-73.655571,41.007697],[-73.657502,41.00353],[-73.659372,40.999497],[-73.65898,40.995576],[-73.658882,40.9946],[-73.658772,40.993497],[-73.659671,40.987909],[-73.657616,40.985499],[-73.657336,40.985171],[-73.655972,40.979597],[-73.659972,40.968398],[-73.662072,40.966198],[-73.662141,40.966227],[-73.664472,40.967198],[-73.66453,40.967179],[-73.667769,40.966132],[-73.668955,40.965748],[-73.672897,40.964472],[-73.674723,40.963882],[-73.677685,40.962923],[-73.678073,40.962798],[-73.678076,40.962791],[-73.679031,40.960255],[-73.683273,40.948998],[-73.686473,40.945198],[-73.697974,40.939598],[-73.702949,40.938015],[-73.71208,40.93511],[-73.713502,40.934658],[-73.716987,40.933549],[-73.721739,40.932037],[-73.728137,40.92755],[-73.731775,40.924999],[-73.732159,40.924809],[-73.736516,40.922647],[-73.743401,40.919233],[-73.746905,40.917495],[-73.748659,40.916625],[-73.749697,40.91611],[-73.754213,40.91387],[-73.754588,40.913684],[-73.754741,40.913608],[-73.754986,40.913487],[-73.756776,40.912599],[-73.761829,40.907013],[-73.765411,40.903053],[-73.778528,40.888554],[-73.781338,40.885447],[-73.783545,40.88104],[-73.783702,40.881078],[-73.792942,40.883411],[-73.804191,40.886348],[-73.819719,40.890206],[-73.822959,40.891056],[-73.823244,40.891199],[-73.82312,40.890648],[-73.823617,40.890413],[-73.823557,40.889865],[-73.824047,40.889866],[-73.824009,40.889978],[-73.825002,40.890178],[-73.827224,40.890785],[-73.830972,40.891935],[-73.831703,40.892178],[-73.832716,40.892443],[-73.833595,40.892706],[-73.835174,40.89317],[-73.836282,40.893531],[-73.837337,40.893814],[-73.838407,40.894061],[-73.838985,40.895602],[-73.839649,40.897891],[-73.840036,40.900567],[-73.840999,40.902812],[-73.841318,40.903987],[-73.842308,40.903988],[-73.843305,40.90408],[-73.844389,40.904096],[-73.844702,40.904177],[-73.844847,40.90531],[-73.84532,40.905582],[-73.846104,40.905777],[-73.847071,40.906173],[-73.848683,40.906743],[-73.851506,40.906645],[-73.852204,40.906878],[-73.852601,40.906977],[-73.85279,40.907073],[-73.851123,40.910009],[-73.852678,40.909899],[-73.854881,40.908217],[-73.854104,40.906679],[-73.856108,40.90606],[-73.856324,40.906166],[-73.858221,40.902335],[-73.860006,40.900565],[-73.862041,40.901203],[-73.862643,40.901474],[-73.86286,40.901525],[-73.864669,40.901793],[-73.865635,40.902086],[-73.866952,40.902475],[-73.867876,40.902983],[-73.872913,40.904467],[-73.874087,40.904807],[-73.877855,40.905922],[-73.878012,40.905965],[-73.878189,40.905983],[-73.87835,40.905983],[-73.879239,40.906365],[-73.880111,40.906591],[-73.880929,40.90683],[-73.881825,40.907134],[-73.882993,40.907423],[-73.884106,40.907501],[-73.884832,40.907723],[-73.885401,40.907977],[-73.88601,40.907979],[-73.886237,40.908052],[-73.887984,40.908593],[-73.891805,40.909778],[-73.891928,40.909809],[-73.892799,40.910058],[-73.896634,40.911324],[-73.897253,40.911655],[-73.899505,40.911978],[-73.900697,40.912381],[-73.902106,40.912879],[-73.902454,40.912979],[-73.905947,40.913948],[-73.910006,40.915076],[-73.910516,40.915282],[-73.917905,40.917577],[-73.91768,40.919498],[-73.91768,40.919499],[-73.91558,40.924898],[-73.912272,40.935498],[-73.910396,40.941513],[-73.90728,40.951498],[-73.907257,40.951562],[-73.904916,40.958108],[-73.898928,40.974851],[-73.896479,40.981697],[-73.893979,40.997197],[-73.893579,41.005297],[-73.890079,41.022597],[-73.889915,41.025749],[-73.88938,41.037597],[-73.89028,41.045196],[-73.89038,41.045796],[-73.89388,41.057896],[-73.89448,41.064596],[-73.8947,41.069937],[-73.89478,41.070496],[-73.894777,41.070791],[-73.89468,41.079596],[-73.89488,41.082396],[-73.89378,41.093296],[-73.891417,41.107318],[-73.890866,41.110583],[-73.88758,41.128795],[-73.88718,41.133095],[-73.887397,41.136861],[-73.88748,41.138295],[-73.88948,41.145095],[-73.892481,41.150595],[-73.895381,41.153995],[-73.899681,41.157295],[-73.906581,41.161895],[-73.909281,41.164395],[-73.911681,41.167795],[-73.914381,41.174195],[-73.921697,41.186288],[-73.925682,41.195194],[-73.927229,41.198038],[-73.931482,41.204994],[-73.935982,41.209894],[-73.936782,41.210814],[-73.939983,41.214494],[-73.944683,41.219594],[-73.947965,41.223101],[-73.950947,41.226346],[-73.953283,41.228994],[-73.961383,41.234194],[-73.960783,41.239394],[-73.961283,41.241994],[-73.964142,41.243851],[-73.970784,41.247893],[-73.971984,41.251493],[-73.972284,41.256193],[-73.971484,41.259593],[-73.969684,41.263193],[-73.966884,41.267193],[-73.964184,41.269993],[-73.957183,41.276393],[-73.955445,41.277862],[-73.952045,41.280736],[-73.947483,41.284593],[-73.945783,41.287593],[-73.946583,41.290993],[-73.949083,41.292593],[-73.955183,41.294993],[-73.964483,41.299693],[-73.966983,41.301693],[-73.971784,41.307293],[-73.977484,41.312093],[-73.980984,41.314193],[-73.983284,41.317393],[-73.982584,41.321693],[-73.926846,41.32764],[-73.918286,41.328532],[-73.914027,41.32897],[-73.908236,41.329453],[-73.904794,41.329705],[-73.89346,41.330892],[-73.892926,41.330983],[-73.892256,41.330954],[-73.891427,41.330993],[-73.890602,41.331071],[-73.889692,41.331176],[-73.88818,41.331472],[-73.887763,41.331491],[-73.8833,41.331956],[-73.879948,41.332623],[-73.875119,41.332785],[-73.873801,41.33299],[-73.86201,41.334264],[-73.842703,41.336198],[-73.829988,41.337503],[-73.822273,41.338223],[-73.816037,41.338824],[-73.797456,41.340647],[-73.78826,41.341737],[-73.780007,41.342492],[-73.772054,41.343393],[-73.771839,41.343417],[-73.758232,41.344838],[-73.757605,41.344904],[-73.753122,41.345342],[-73.753068,41.345346],[-73.740095,41.346682],[-73.735816,41.347123],[-73.734672,41.347288],[-73.727501,41.347991],[-73.72521,41.348218],[-73.724035,41.348394],[-73.719804,41.348818],[-73.718674,41.348933],[-73.69994,41.350855],[-73.694765,41.351387],[-73.689493,41.35193],[-73.671686,41.353857],[-73.660905,41.354994],[-73.660619,41.355026],[-73.659871,41.355099],[-73.659031,41.355183],[-73.641248,41.356974],[-73.639056,41.357253],[-73.628491,41.358181],[-73.599938,41.360802],[-73.596621,41.361128],[-73.593929,41.361286],[-73.572478,41.363579],[-73.56024,41.36485],[-73.544728,41.366375],[-73.54595,41.354841],[-73.548583,41.329979],[-73.548973,41.326297],[-73.549574,41.315931],[-73.548929,41.307598],[-73.549941,41.301533],[-73.550961,41.295422],[-73.548887,41.292957],[-73.548148,41.29208],[-73.526296,41.266118],[-73.525161,41.26477],[-73.518384,41.256719],[-73.517453,41.255572],[-73.491408,41.223479],[-73.482709,41.21276],[-73.509187,41.200948],[-73.509487,41.200814],[-73.512765,41.199293],[-73.514617,41.198434],[-73.535996,41.188551],[-73.564759,41.175254],[-73.564941,41.17517],[-73.614391,41.152915],[-73.628815,41.146423],[-73.632153,41.144921],[-73.639672,41.141495],[-73.660504,41.131848],[-73.667743,41.128496]]]]}}]}

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *             jsPDF AutoTable plugin v3.5.13
 *             
 *             Copyright (c) 2020 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *             Licensed under the MIT License.
 *             http://opensource.org/licenses/mit-license
 *         
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return __webpack_require__(407); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["jspdf"], factory);
	else {
		var a = typeof exports === 'object' ? factory((function webpackLoadOptionalExternalModule() { try { return require("jspdf"); } catch(e) {} }())) : factory(root["jspdf"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof this !== 'undefined' ? this : window, function(__WEBPACK_EXTERNAL_MODULE__16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSpacing = exports.getFillStyle = exports.addTableBorder = exports.getStringWidth = void 0;
function getStringWidth(text, styles, doc) {
    doc.applyStyles(styles, true);
    var textArr = Array.isArray(text) ? text : [text];
    var widestLineWidth = textArr
        .map(function (text) { return doc.getTextWidth(text); })
        .reduce(function (a, b) { return Math.max(a, b); }, 0);
    return widestLineWidth;
}
exports.getStringWidth = getStringWidth;
function addTableBorder(doc, table, startPos, cursor) {
    var lineWidth = table.settings.tableLineWidth;
    var lineColor = table.settings.tableLineColor;
    doc.applyStyles({ lineWidth: lineWidth, lineColor: lineColor });
    var fillStyle = getFillStyle(lineWidth, false);
    if (fillStyle) {
        doc.rect(startPos.x, startPos.y, table.getWidth(doc.pageSize().width), cursor.y - startPos.y, fillStyle);
    }
}
exports.addTableBorder = addTableBorder;
function getFillStyle(lineWidth, fillColor) {
    var drawLine = lineWidth > 0;
    var drawBackground = fillColor || fillColor === 0;
    if (drawLine && drawBackground) {
        return 'DF'; // Fill then stroke
    }
    else if (drawLine) {
        return 'S'; // Only stroke (transparent background)
    }
    else if (drawBackground) {
        return 'F'; // Only fill, no stroke
    }
    else {
        return null;
    }
}
exports.getFillStyle = getFillStyle;
function parseSpacing(value, defaultValue) {
    var _a, _b, _c, _d;
    value = value || defaultValue;
    if (Array.isArray(value)) {
        if (value.length >= 4) {
            return {
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[3],
            };
        }
        else if (value.length === 3) {
            return {
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[1],
            };
        }
        else if (value.length === 2) {
            return {
                top: value[0],
                right: value[1],
                bottom: value[0],
                left: value[1],
            };
        }
        else if (value.length === 1) {
            value = value[0];
        }
        else {
            value = defaultValue;
        }
    }
    if (typeof value === 'object') {
        if (typeof value.vertical === 'number') {
            value.top = value.vertical;
            value.bottom = value.vertical;
        }
        if (typeof value.horizontal === 'number') {
            value.right = value.horizontal;
            value.left = value.horizontal;
        }
        return {
            left: (_a = value.left) !== null && _a !== void 0 ? _a : defaultValue,
            top: (_b = value.top) !== null && _b !== void 0 ? _b : defaultValue,
            right: (_c = value.right) !== null && _c !== void 0 ? _c : defaultValue,
            bottom: (_d = value.bottom) !== null && _d !== void 0 ? _d : defaultValue,
        };
    }
    if (typeof value !== 'number') {
        value = defaultValue;
    }
    return { top: value, right: value, bottom: value, left: value };
}
exports.parseSpacing = parseSpacing;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheme = exports.defaultStyles = exports.HtmlRowInput = exports.FONT_ROW_RATIO = void 0;
/**
 * Ratio between font size and font height. The number comes from jspdf's source code
 */
exports.FONT_ROW_RATIO = 1.15;
var HtmlRowInput = /** @class */ (function (_super) {
    __extends(HtmlRowInput, _super);
    function HtmlRowInput(element) {
        var _this = _super.call(this) || this;
        _this._element = element;
        return _this;
    }
    return HtmlRowInput;
}(Array));
exports.HtmlRowInput = HtmlRowInput;
// Base style for all themes
function defaultStyles(scaleFactor) {
    return {
        font: 'helvetica',
        fontStyle: 'normal',
        overflow: 'linebreak',
        fillColor: false,
        textColor: 20,
        halign: 'left',
        valign: 'top',
        fontSize: 10,
        cellPadding: 5 / scaleFactor,
        lineColor: 200,
        lineWidth: 0,
        cellWidth: 'auto',
        minCellHeight: 0,
        minCellWidth: 0,
    };
}
exports.defaultStyles = defaultStyles;
function getTheme(name) {
    var themes = {
        striped: {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal' },
            head: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            body: {},
            foot: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            alternateRow: { fillColor: 245 },
        },
        grid: {
            table: {
                fillColor: 255,
                textColor: 80,
                fontStyle: 'normal',
                lineWidth: 0.1,
            },
            head: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: 'bold',
                lineWidth: 0,
            },
            body: {},
            foot: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: 'bold',
                lineWidth: 0,
            },
            alternateRow: {},
        },
        plain: {
            head: { fontStyle: 'bold' },
            foot: { fontStyle: 'bold' },
        },
    };
    return themes[name];
}
exports.getTheme = getTheme;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DocHandler = void 0;
var globalDefaults = {};
var DocHandler = /** @class */ (function () {
    function DocHandler(jsPDFDocument) {
        this.jsPDFDocument = jsPDFDocument;
        this.userStyles = {
            // Black for versions of jspdf without getTextColor
            textColor: jsPDFDocument.getTextColor
                ? this.jsPDFDocument.getTextColor()
                : 0,
            fontSize: jsPDFDocument.internal.getFontSize(),
            fontStyle: jsPDFDocument.internal.getFont().fontStyle,
            font: jsPDFDocument.internal.getFont().fontName,
        };
    }
    DocHandler.setDefaults = function (defaults, doc) {
        if (doc === void 0) { doc = null; }
        if (doc) {
            doc.__autoTableDocumentDefaults = defaults;
        }
        else {
            globalDefaults = defaults;
        }
    };
    DocHandler.unifyColor = function (c) {
        if (Array.isArray(c)) {
            return c;
        }
        else if (typeof c === 'number') {
            return [c, c, c];
        }
        else if (typeof c === 'string') {
            return [c];
        }
        else {
            return null;
        }
    };
    DocHandler.prototype.applyStyles = function (styles, fontOnly) {
        // Font style needs to be applied before font
        // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/632
        var _a, _b, _c;
        if (fontOnly === void 0) { fontOnly = false; }
        if (styles.fontStyle)
            this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(styles.fontStyle);
        var _d = this.jsPDFDocument.internal.getFont(), fontStyle = _d.fontStyle, fontName = _d.fontName;
        if (styles.font)
            fontName = styles.font;
        if (styles.fontStyle) {
            fontStyle = styles.fontStyle;
            var availableFontStyles = this.getFontList()[fontName];
            if (availableFontStyles && availableFontStyles.indexOf(fontStyle) === -1) {
                // Common issue was that the default bold in headers
                // made custom fonts not work. For example:
                // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/653
                this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(availableFontStyles[0]);
                fontStyle = availableFontStyles[0];
            }
        }
        this.jsPDFDocument.setFont(fontName, fontStyle);
        if (styles.fontSize)
            this.jsPDFDocument.setFontSize(styles.fontSize);
        if (fontOnly) {
            return; // Performance improvement
        }
        var color = DocHandler.unifyColor(styles.fillColor);
        if (color)
            (_a = this.jsPDFDocument).setFillColor.apply(_a, color);
        color = DocHandler.unifyColor(styles.textColor);
        if (color)
            (_b = this.jsPDFDocument).setTextColor.apply(_b, color);
        color = DocHandler.unifyColor(styles.lineColor);
        if (color)
            (_c = this.jsPDFDocument).setDrawColor.apply(_c, color);
        if (typeof styles.lineWidth === 'number') {
            this.jsPDFDocument.setLineWidth(styles.lineWidth);
        }
    };
    DocHandler.prototype.splitTextToSize = function (text, size, opts) {
        return this.jsPDFDocument.splitTextToSize(text, size, opts);
    };
    DocHandler.prototype.rect = function (x, y, width, height, fillStyle) {
        return this.jsPDFDocument.rect(x, y, width, height, fillStyle);
    };
    DocHandler.prototype.getLastAutoTable = function () {
        return this.jsPDFDocument.lastAutoTable || null;
    };
    DocHandler.prototype.getTextWidth = function (text) {
        return this.jsPDFDocument.getTextWidth(text);
    };
    DocHandler.prototype.getDocument = function () {
        return this.jsPDFDocument;
    };
    DocHandler.prototype.setPage = function (page) {
        this.jsPDFDocument.setPage(page);
    };
    DocHandler.prototype.addPage = function () {
        return this.jsPDFDocument.addPage();
    };
    DocHandler.prototype.getFontList = function () {
        return this.jsPDFDocument.getFontList();
    };
    DocHandler.prototype.getGlobalOptions = function () {
        return globalDefaults || {};
    };
    DocHandler.prototype.getDocumentOptions = function () {
        return this.jsPDFDocument.__autoTableDocumentDefaults || {};
    };
    DocHandler.prototype.pageSize = function () {
        var pageSize = this.jsPDFDocument.internal.pageSize;
        // JSPDF 1.4 uses get functions instead of properties on pageSize
        if (pageSize.width == null) {
            pageSize = {
                width: pageSize.getWidth(),
                height: pageSize.getHeight(),
            };
        }
        return pageSize;
    };
    DocHandler.prototype.scaleFactor = function () {
        return this.jsPDFDocument.internal.scaleFactor;
    };
    DocHandler.prototype.pageNumber = function () {
        var pageInfo = this.jsPDFDocument.internal.getCurrentPageInfo();
        if (!pageInfo) {
            // Only recent versions of jspdf has pageInfo
            return this.jsPDFDocument.internal.getNumberOfPages();
        }
        return pageInfo.pageNumber;
    };
    return DocHandler;
}());
exports.DocHandler = DocHandler;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign = void 0;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target, s, s1, s2, s3) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        // eslint-disable-next-line prefer-rest-params
        var nextSource = arguments[index];
        if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
exports.assign = assign;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtml = void 0;
var cssParser_1 = __webpack_require__(12);
var config_1 = __webpack_require__(1);
function parseHtml(doc, input, window, includeHiddenHtml, useCss) {
    var _a, _b;
    if (includeHiddenHtml === void 0) { includeHiddenHtml = false; }
    if (useCss === void 0) { useCss = false; }
    var tableElement;
    if (typeof input === 'string') {
        tableElement = window.document.querySelector(input);
    }
    else {
        tableElement = input;
    }
    var supportedFonts = Object.keys(doc.getFontList());
    var scaleFactor = doc.scaleFactor();
    var head = [], body = [], foot = [];
    if (!tableElement) {
        console.error('Html table could not be found with input: ', input);
        return { head: head, body: body, foot: foot };
    }
    for (var i = 0; i < tableElement.rows.length; i++) {
        var element = tableElement.rows[i];
        var tagName = (_b = (_a = element === null || element === void 0 ? void 0 : element.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase();
        var row = parseRowContent(supportedFonts, scaleFactor, window, element, includeHiddenHtml, useCss);
        if (!row)
            continue;
        if (tagName === 'thead') {
            head.push(row);
        }
        else if (tagName === 'tfoot') {
            foot.push(row);
        }
        else {
            // Add to body both if parent is tbody or table
            body.push(row);
        }
    }
    return { head: head, body: body, foot: foot };
}
exports.parseHtml = parseHtml;
function parseRowContent(supportedFonts, scaleFactor, window, row, includeHidden, useCss) {
    var resultRow = new config_1.HtmlRowInput(row);
    for (var i = 0; i < row.cells.length; i++) {
        var cell = row.cells[i];
        var style_1 = window.getComputedStyle(cell);
        if (includeHidden || style_1.display !== 'none') {
            var cellStyles = void 0;
            if (useCss) {
                cellStyles = cssParser_1.parseCss(supportedFonts, cell, scaleFactor, style_1, window);
            }
            resultRow.push({
                rowSpan: cell.rowSpan,
                colSpan: cell.colSpan,
                styles: cellStyles,
                _element: cell,
                content: parseCellContent(cell),
            });
        }
    }
    var style = window.getComputedStyle(row);
    if (resultRow.length > 0 && (includeHidden || style.display !== 'none')) {
        return resultRow;
    }
}
function parseCellContent(orgCell) {
    // Work on cloned node to make sure no changes are applied to html table
    var cell = orgCell.cloneNode(true);
    // Remove extra space and line breaks in markup to make it more similar to
    // what would be shown in html
    cell.innerHTML = cell.innerHTML.replace(/\n/g, '').replace(/ +/g, ' ');
    // Preserve <br> tags as line breaks in the pdf
    cell.innerHTML = cell.innerHTML
        .split('<br>')
        .map(function (part) { return part.trim(); })
        .join('\n');
    // innerText for ie
    return cell.innerText || cell.textContent || '';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Improved text function with halign and valign support
 * Inspiration from: http://stackoverflow.com/questions/28327510/align-text-right-using-jspdf/28433113#28433113
 */
function default_1(text, x, y, styles, doc) {
    styles = styles || {};
    var FONT_ROW_RATIO = 1.15;
    var k = doc.internal.scaleFactor;
    var fontSize = doc.internal.getFontSize() / k;
    var splitRegex = /\r\n|\r|\n/g;
    var splitText = '';
    var lineCount = 1;
    if (styles.valign === 'middle' ||
        styles.valign === 'bottom' ||
        styles.halign === 'center' ||
        styles.halign === 'right') {
        splitText = typeof text === 'string' ? text.split(splitRegex) : text;
        lineCount = splitText.length || 1;
    }
    // Align the top
    y += fontSize * (2 - FONT_ROW_RATIO);
    if (styles.valign === 'middle')
        y -= (lineCount / 2) * fontSize * FONT_ROW_RATIO;
    else if (styles.valign === 'bottom')
        y -= lineCount * fontSize * FONT_ROW_RATIO;
    if (styles.halign === 'center' || styles.halign === 'right') {
        var alignSize = fontSize;
        if (styles.halign === 'center')
            alignSize *= 0.5;
        if (splitText && lineCount >= 1) {
            for (var iLine = 0; iLine < splitText.length; iLine++) {
                doc.text(splitText[iLine], x - doc.getStringUnitWidth(splitText[iLine]) * alignSize, y);
                y += fontSize * FONT_ROW_RATIO;
            }
            return doc;
        }
        x -= doc.getStringUnitWidth(text) * alignSize;
    }
    if (styles.halign === 'justify') {
        doc.text(text, x, y, {
            maxWidth: styles.maxWidth || 100,
            align: 'justify',
        });
    }
    else {
        doc.text(text, x, y);
    }
    return doc;
}
exports.default = default_1;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInput = void 0;
var htmlParser_1 = __webpack_require__(4);
var polyfills_1 = __webpack_require__(3);
var common_1 = __webpack_require__(0);
var documentHandler_1 = __webpack_require__(2);
var inputValidator_1 = __webpack_require__(13);
function parseInput(d, current) {
    var doc = new documentHandler_1.DocHandler(d);
    var document = doc.getDocumentOptions();
    var global = doc.getGlobalOptions();
    inputValidator_1.default(doc, global, document, current);
    var options = polyfills_1.assign({}, global, document, current);
    var win;
    if (typeof window !== 'undefined') {
        win = window;
    }
    var styles = parseStyles(global, document, current);
    var hooks = parseHooks(global, document, current);
    var settings = parseSettings(doc, options);
    var content = parseContent(doc, options, win);
    return {
        id: current.tableId,
        content: content,
        hooks: hooks,
        styles: styles,
        settings: settings,
    };
}
exports.parseInput = parseInput;
function parseStyles(gInput, dInput, cInput) {
    var styleOptions = {
        styles: {},
        headStyles: {},
        bodyStyles: {},
        footStyles: {},
        alternateRowStyles: {},
        columnStyles: {},
    };
    var _loop_1 = function (prop) {
        if (prop === 'columnStyles') {
            var global_1 = gInput[prop];
            var document_1 = dInput[prop];
            var current = cInput[prop];
            styleOptions.columnStyles = polyfills_1.assign({}, global_1, document_1, current);
        }
        else {
            var allOptions = [gInput, dInput, cInput];
            var styles = allOptions.map(function (opts) { return opts[prop] || {}; });
            styleOptions[prop] = polyfills_1.assign({}, styles[0], styles[1], styles[2]);
        }
    };
    for (var _i = 0, _a = Object.keys(styleOptions); _i < _a.length; _i++) {
        var prop = _a[_i];
        _loop_1(prop);
    }
    return styleOptions;
}
function parseHooks(global, document, current) {
    var allOptions = [global, document, current];
    var result = {
        didParseCell: [],
        willDrawCell: [],
        didDrawCell: [],
        didDrawPage: [],
    };
    for (var _i = 0, allOptions_1 = allOptions; _i < allOptions_1.length; _i++) {
        var options = allOptions_1[_i];
        if (options.didParseCell)
            result.didParseCell.push(options.didParseCell);
        if (options.willDrawCell)
            result.willDrawCell.push(options.willDrawCell);
        if (options.didDrawCell)
            result.didDrawCell.push(options.didDrawCell);
        if (options.didDrawPage)
            result.didDrawPage.push(options.didDrawPage);
    }
    return result;
}
function parseSettings(doc, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var margin = common_1.parseSpacing(options.margin, 40 / doc.scaleFactor());
    var startY = (_a = getStartY(doc, options.startY)) !== null && _a !== void 0 ? _a : margin.top;
    var showFoot;
    if (options.showFoot === true) {
        showFoot = 'everyPage';
    }
    else if (options.showFoot === false) {
        showFoot = 'never';
    }
    else {
        showFoot = (_b = options.showFoot) !== null && _b !== void 0 ? _b : 'everyPage';
    }
    var showHead;
    if (options.showHead === true) {
        showHead = 'everyPage';
    }
    else if (options.showHead === false) {
        showHead = 'never';
    }
    else {
        showHead = (_c = options.showHead) !== null && _c !== void 0 ? _c : 'everyPage';
    }
    var useCss = (_d = options.useCss) !== null && _d !== void 0 ? _d : false;
    var theme = options.theme || (useCss ? 'plain' : 'striped');
    return {
        includeHiddenHtml: (_e = options.includeHiddenHtml) !== null && _e !== void 0 ? _e : false,
        useCss: useCss,
        theme: theme,
        startY: startY,
        margin: margin,
        pageBreak: (_f = options.pageBreak) !== null && _f !== void 0 ? _f : 'auto',
        rowPageBreak: (_g = options.rowPageBreak) !== null && _g !== void 0 ? _g : 'auto',
        tableWidth: (_h = options.tableWidth) !== null && _h !== void 0 ? _h : 'auto',
        showHead: showHead,
        showFoot: showFoot,
        tableLineWidth: (_j = options.tableLineWidth) !== null && _j !== void 0 ? _j : 0,
        tableLineColor: (_k = options.tableLineColor) !== null && _k !== void 0 ? _k : 200,
    };
}
function getStartY(doc, userStartY) {
    var previous = doc.getLastAutoTable();
    var sf = doc.scaleFactor();
    var currentPage = doc.pageNumber();
    var isSamePageAsPreviousTable = false;
    if (previous && previous.startPageNumber) {
        var endingPage = previous.startPageNumber + previous.pageNumber - 1;
        isSamePageAsPreviousTable = endingPage === currentPage;
    }
    if (typeof userStartY === 'number') {
        return userStartY;
    }
    else if (userStartY == null || userStartY === false) {
        if (isSamePageAsPreviousTable && (previous === null || previous === void 0 ? void 0 : previous.finalY) != null) {
            // Some users had issues with overlapping tables when they used multiple
            // tables without setting startY so setting it here to a sensible default.
            return previous.finalY + 20 / sf;
        }
    }
    return null;
}
function parseContent(doc, options, window) {
    var head = options.head || [];
    var body = options.body || [];
    var foot = options.foot || [];
    if (options.html) {
        var hidden = options.includeHiddenHtml;
        if (window) {
            var htmlContent = htmlParser_1.parseHtml(doc, options.html, window, hidden, options.useCss) || {};
            head = htmlContent.head || head;
            body = htmlContent.body || head;
            foot = htmlContent.foot || head;
        }
        else {
            console.error('Cannot parse html in non browser environment');
        }
    }
    var columns = options.columns || parseColumns(head, body, foot);
    return {
        columns: columns,
        head: head,
        body: body,
        foot: foot,
    };
}
function parseColumns(head, body, foot) {
    var firstRow = head[0] || body[0] || foot[0] || [];
    var result = [];
    Object.keys(firstRow)
        .filter(function (key) { return key !== '_element'; })
        .forEach(function (key) {
        var colSpan = 1;
        var input;
        if (Array.isArray(firstRow)) {
            input = firstRow[parseInt(key)];
        }
        else {
            input = firstRow[key];
        }
        if (typeof input === 'object' && !Array.isArray(input)) {
            colSpan = (input === null || input === void 0 ? void 0 : input.colSpan) || 1;
        }
        for (var i = 0; i < colSpan; i++) {
            var id = void 0;
            if (Array.isArray(firstRow)) {
                id = result.length;
            }
            else {
                id = key + (i > 0 ? "_" + i : '');
            }
            var rowResult = { dataKey: id };
            result.push(rowResult);
        }
    });
    return result;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addPage = exports.drawTable = void 0;
var config_1 = __webpack_require__(1);
var common_1 = __webpack_require__(0);
var models_1 = __webpack_require__(8);
var documentHandler_1 = __webpack_require__(2);
var polyfills_1 = __webpack_require__(3);
var autoTableText_1 = __webpack_require__(5);
function drawTable(jsPDFDoc, table) {
    var settings = table.settings;
    var startY = settings.startY;
    var margin = settings.margin;
    var cursor = {
        x: margin.left,
        y: startY,
    };
    var sectionsHeight = table.getHeadHeight(table.columns) + table.getFootHeight(table.columns);
    var minTableBottomPos = startY + margin.bottom + sectionsHeight;
    if (settings.pageBreak === 'avoid') {
        var rows = table.allRows();
        var tableHeight = rows.reduce(function (acc, row) { return acc + row.height; }, 0);
        minTableBottomPos += tableHeight;
    }
    var doc = new documentHandler_1.DocHandler(jsPDFDoc);
    if (settings.pageBreak === 'always' ||
        (settings.startY != null && minTableBottomPos > doc.pageSize().height)) {
        nextPage(doc);
        cursor.y = margin.top;
    }
    var startPos = polyfills_1.assign({}, cursor);
    table.startPageNumber = doc.pageNumber();
    doc.applyStyles(doc.userStyles);
    if (settings.showHead === 'firstPage' || settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
    doc.applyStyles(doc.userStyles);
    table.body.forEach(function (row, index) {
        var isLastRow = index === table.body.length - 1;
        printFullRow(doc, table, row, isLastRow, startPos, cursor);
    });
    doc.applyStyles(doc.userStyles);
    if (settings.showFoot === 'lastPage' || settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
    common_1.addTableBorder(doc, table, startPos, cursor);
    table.callEndPageHooks(doc, cursor);
    table.finalY = cursor.y;
    jsPDFDoc.lastAutoTable = table;
    jsPDFDoc.previousAutoTable = table; // Deprecated
    if (jsPDFDoc.autoTable)
        jsPDFDoc.autoTable.previous = table; // Deprecated
    doc.applyStyles(doc.userStyles);
}
exports.drawTable = drawTable;
function getRemainingLineCount(cell, remainingPageSpace, doc) {
    var fontHeight = (cell.styles.fontSize / doc.scaleFactor()) * config_1.FONT_ROW_RATIO;
    var vPadding = cell.padding('vertical');
    var remainingLines = Math.floor((remainingPageSpace - vPadding) / fontHeight);
    return Math.max(0, remainingLines);
}
function modifyRowToFit(row, remainingPageSpace, table, doc) {
    var cells = {};
    row.spansMultiplePages = true;
    var rowHeight = 0;
    for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
        var column = _a[_i];
        var cell = row.cells[column.index];
        if (!cell)
            continue;
        if (!Array.isArray(cell.text)) {
            cell.text = [cell.text];
        }
        var remainderCell = new models_1.Cell(cell.raw, cell.styles, cell.section);
        remainderCell = polyfills_1.assign(remainderCell, cell);
        remainderCell.text = [];
        var remainingLineCount = getRemainingLineCount(cell, remainingPageSpace, doc);
        if (cell.text.length > remainingLineCount) {
            remainderCell.text = cell.text.splice(remainingLineCount, cell.text.length);
        }
        var scaleFactor = doc.scaleFactor();
        cell.contentHeight = cell.getContentHeight(scaleFactor);
        if (cell.contentHeight >= remainingPageSpace) {
            cell.contentHeight = remainingPageSpace;
            remainderCell.styles.minCellHeight -= remainingPageSpace;
        }
        if (cell.contentHeight > row.height) {
            row.height = cell.contentHeight;
        }
        remainderCell.contentHeight = remainderCell.getContentHeight(scaleFactor);
        if (remainderCell.contentHeight > rowHeight) {
            rowHeight = remainderCell.contentHeight;
        }
        cells[column.index] = remainderCell;
    }
    var remainderRow = new models_1.Row(row.raw, -1, row.section, cells, true);
    remainderRow.height = rowHeight;
    for (var _b = 0, _c = table.columns; _b < _c.length; _b++) {
        var column = _c[_b];
        var remainderCell = remainderRow.cells[column.index];
        if (remainderCell) {
            remainderCell.height = remainderRow.height;
        }
        var cell = row.cells[column.index];
        if (cell) {
            cell.height = row.height;
        }
    }
    return remainderRow;
}
function shouldPrintOnCurrentPage(doc, row, remainingPageSpace, table) {
    var pageHeight = doc.pageSize().height;
    var margin = table.settings.margin;
    var marginHeight = margin.top + margin.bottom;
    var maxRowHeight = pageHeight - marginHeight;
    if (row.section === 'body') {
        // Should also take into account that head and foot is not
        // on every page with some settings
        maxRowHeight -=
            table.getHeadHeight(table.columns) + table.getFootHeight(table.columns);
    }
    var minRowHeight = row.getMinimumRowHeight(table.columns, doc);
    var minRowFits = minRowHeight < remainingPageSpace;
    if (minRowHeight > maxRowHeight) {
        console.error("Will not be able to print row " + row.index + " correctly since it's minimum height is larger than page height");
        return true;
    }
    if (!minRowFits) {
        return false;
    }
    var rowHasRowSpanCell = row.hasRowSpan(table.columns);
    var rowHigherThanPage = row.getMaxCellHeight(table.columns) > maxRowHeight;
    if (rowHigherThanPage) {
        if (rowHasRowSpanCell) {
            console.error("The content of row " + row.index + " will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.");
        }
        return true;
    }
    if (rowHasRowSpanCell) {
        // Currently a new page is required whenever a rowspan row don't fit a page.
        return false;
    }
    if (table.settings.rowPageBreak === 'avoid') {
        return false;
    }
    // In all other cases print the row on current page
    return true;
}
function printFullRow(doc, table, row, isLastRow, startPos, cursor) {
    var remainingSpace = getRemainingPageSpace(doc, table, isLastRow, cursor);
    if (row.canEntireRowFit(remainingSpace, table.columns)) {
        printRow(doc, table, row, cursor);
    }
    else {
        if (shouldPrintOnCurrentPage(doc, row, remainingSpace, table)) {
            var remainderRow = modifyRowToFit(row, remainingSpace, table, doc);
            printRow(doc, table, row, cursor);
            addPage(doc, table, startPos, cursor);
            printFullRow(doc, table, remainderRow, isLastRow, startPos, cursor);
        }
        else {
            addPage(doc, table, startPos, cursor);
            printFullRow(doc, table, row, isLastRow, startPos, cursor);
        }
    }
}
function printRow(doc, table, row, cursor) {
    cursor.x = table.settings.margin.left;
    for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
        var column = _a[_i];
        var cell = row.cells[column.index];
        if (!cell) {
            cursor.x += column.width;
            continue;
        }
        doc.applyStyles(cell.styles);
        cell.x = cursor.x;
        cell.y = cursor.y;
        var result = table.callCellHooks(doc, table.hooks.willDrawCell, cell, row, column, cursor);
        if (result === false) {
            cursor.x += column.width;
            continue;
        }
        var cellStyles = cell.styles;
        var fillStyle = common_1.getFillStyle(cellStyles.lineWidth, cellStyles.fillColor);
        if (fillStyle) {
            doc.rect(cell.x, cursor.y, cell.width, cell.height, fillStyle);
        }
        var textPos = cell.getTextPos();
        autoTableText_1.default(cell.text, textPos.x, textPos.y, {
            halign: cell.styles.halign,
            valign: cell.styles.valign,
            maxWidth: Math.ceil(cell.width - cell.padding('left') - cell.padding('right')),
        }, doc.getDocument());
        table.callCellHooks(doc, table.hooks.didDrawCell, cell, row, column, cursor);
        cursor.x += column.width;
    }
    cursor.y += row.height;
}
function getRemainingPageSpace(doc, table, isLastRow, cursor) {
    var bottomContentHeight = table.settings.margin.bottom;
    var showFoot = table.settings.showFoot;
    if (showFoot === 'everyPage' || (showFoot === 'lastPage' && isLastRow)) {
        bottomContentHeight += table.getFootHeight(table.columns);
    }
    return doc.pageSize().height - cursor.y - bottomContentHeight;
}
function addPage(doc, table, startPos, cursor) {
    doc.applyStyles(doc.userStyles);
    if (table.settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
    // Add user content just before adding new page ensure it will
    // be drawn above other things on the page
    table.callEndPageHooks(doc, cursor);
    var margin = table.settings.margin;
    common_1.addTableBorder(doc, table, startPos, cursor);
    nextPage(doc);
    table.pageNumber++;
    table.pageCount++;
    cursor.x = margin.left;
    cursor.y = margin.top;
    if (table.settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
}
exports.addPage = addPage;
function nextPage(doc) {
    var current = doc.pageNumber();
    doc.setPage(current + 1);
    var newCurrent = doc.pageNumber();
    if (newCurrent === current) {
        doc.addPage();
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = exports.Cell = exports.Row = exports.Table = void 0;
var config_1 = __webpack_require__(1);
var HookData_1 = __webpack_require__(14);
var common_1 = __webpack_require__(0);
var Table = /** @class */ (function () {
    function Table(input, content) {
        this.pageNumber = 1;
        // Deprecated, use pageNumber instead
        // Not using getter since:
        // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/596
        this.pageCount = 1;
        this.id = input.id;
        this.settings = input.settings;
        this.styles = input.styles;
        this.hooks = input.hooks;
        this.columns = content.columns;
        this.head = content.head;
        this.body = content.body;
        this.foot = content.foot;
    }
    Table.prototype.getHeadHeight = function (columns) {
        return this.head.reduce(function (acc, row) { return acc + row.getMaxCellHeight(columns); }, 0);
    };
    Table.prototype.getFootHeight = function (columns) {
        return this.foot.reduce(function (acc, row) { return acc + row.getMaxCellHeight(columns); }, 0);
    };
    Table.prototype.allRows = function () {
        return this.head.concat(this.body).concat(this.foot);
    };
    Table.prototype.callCellHooks = function (doc, handlers, cell, row, column, cursor) {
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            var data = new HookData_1.CellHookData(doc, this, cell, row, column, cursor);
            var result = handler(data) === false;
            // Make sure text is always string[] since user can assign string
            cell.text = Array.isArray(cell.text) ? cell.text : [cell.text];
            if (result) {
                return false;
            }
        }
        return true;
    };
    Table.prototype.callEndPageHooks = function (doc, cursor) {
        doc.applyStyles(doc.userStyles);
        for (var _i = 0, _a = this.hooks.didDrawPage; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(new HookData_1.HookData(doc, this, cursor));
        }
    };
    Table.prototype.getWidth = function (pageWidth) {
        if (typeof this.settings.tableWidth === 'number') {
            return this.settings.tableWidth;
        }
        else if (this.settings.tableWidth === 'wrap') {
            var wrappedWidth = this.columns.reduce(function (total, col) { return total + col.wrappedWidth; }, 0);
            return wrappedWidth;
        }
        else {
            var margin = this.settings.margin;
            return pageWidth - margin.left - margin.right;
        }
    };
    return Table;
}());
exports.Table = Table;
var Row = /** @class */ (function () {
    function Row(raw, index, section, cells, spansMultiplePages) {
        if (spansMultiplePages === void 0) { spansMultiplePages = false; }
        this.height = 0;
        this.raw = raw;
        if (raw instanceof config_1.HtmlRowInput) {
            this.raw = raw._element;
            this.element = raw._element;
        }
        this.index = index;
        this.section = section;
        this.cells = cells;
        this.spansMultiplePages = spansMultiplePages;
    }
    Row.prototype.getMaxCellHeight = function (columns) {
        var _this = this;
        return columns.reduce(function (acc, column) { var _a; return Math.max(acc, ((_a = _this.cells[column.index]) === null || _a === void 0 ? void 0 : _a.height) || 0); }, 0);
    };
    Row.prototype.hasRowSpan = function (columns) {
        var _this = this;
        return (columns.filter(function (column) {
            var cell = _this.cells[column.index];
            if (!cell)
                return false;
            return cell.rowSpan > 1;
        }).length > 0);
    };
    Row.prototype.canEntireRowFit = function (height, columns) {
        return this.getMaxCellHeight(columns) <= height;
    };
    Row.prototype.getMinimumRowHeight = function (columns, doc) {
        var _this = this;
        return columns.reduce(function (acc, column) {
            var cell = _this.cells[column.index];
            if (!cell)
                return 0;
            var fontHeight = (cell.styles.fontSize / doc.scaleFactor()) * config_1.FONT_ROW_RATIO;
            var vPadding = cell.padding('vertical');
            var oneRowHeight = vPadding + fontHeight;
            return oneRowHeight > acc ? oneRowHeight : acc;
        }, 0);
    };
    return Row;
}());
exports.Row = Row;
var Cell = /** @class */ (function () {
    function Cell(raw, styles, section) {
        var _a, _b;
        this.contentHeight = 0;
        this.contentWidth = 0;
        this.wrappedWidth = 0;
        this.minReadableWidth = 0;
        this.minWidth = 0;
        this.width = 0;
        this.height = 0;
        this.x = 0;
        this.y = 0;
        this.styles = styles;
        this.section = section;
        this.raw = raw;
        var content = raw;
        if (raw != null && typeof raw === 'object' && !Array.isArray(raw)) {
            this.rowSpan = raw.rowSpan || 1;
            this.colSpan = raw.colSpan || 1;
            content = (_b = (_a = raw.content) !== null && _a !== void 0 ? _a : raw.title) !== null && _b !== void 0 ? _b : raw;
            if (raw._element) {
                this.raw = raw._element;
            }
        }
        else {
            this.rowSpan = 1;
            this.colSpan = 1;
        }
        // Stringify 0 and false, but not undefined or null
        var text = content != null ? '' + content : '';
        var splitRegex = /\r\n|\r|\n/g;
        this.text = text.split(splitRegex);
    }
    Cell.prototype.getTextPos = function () {
        var y;
        if (this.styles.valign === 'top') {
            y = this.y + this.padding('top');
        }
        else if (this.styles.valign === 'bottom') {
            y = this.y + this.height - this.padding('bottom');
        }
        else {
            var netHeight = this.height - this.padding('vertical');
            y = this.y + netHeight / 2 + this.padding('top');
        }
        var x;
        if (this.styles.halign === 'right') {
            x = this.x + this.width - this.padding('right');
        }
        else if (this.styles.halign === 'center') {
            var netWidth = this.width - this.padding('horizontal');
            x = this.x + netWidth / 2 + this.padding('left');
        }
        else {
            x = this.x + this.padding('left');
        }
        return { x: x, y: y };
    };
    Cell.prototype.getContentHeight = function (scaleFactor) {
        var lineCount = Array.isArray(this.text) ? this.text.length : 1;
        var fontHeight = (this.styles.fontSize / scaleFactor) * config_1.FONT_ROW_RATIO;
        var height = lineCount * fontHeight + this.padding('vertical');
        return Math.max(height, this.styles.minCellHeight);
    };
    Cell.prototype.padding = function (name) {
        var padding = common_1.parseSpacing(this.styles.cellPadding, 0);
        if (name === 'vertical') {
            return padding.top + padding.bottom;
        }
        else if (name === 'horizontal') {
            return padding.left + padding.right;
        }
        else {
            return padding[name];
        }
    };
    return Cell;
}());
exports.Cell = Cell;
var Column = /** @class */ (function () {
    function Column(dataKey, raw, index) {
        this.wrappedWidth = 0;
        this.minReadableWidth = 0;
        this.minWidth = 0;
        this.width = 0;
        this.dataKey = dataKey;
        this.raw = raw;
        this.index = index;
    }
    Column.prototype.getMaxCustomCellWidth = function (table) {
        var max = 0;
        for (var _i = 0, _a = table.allRows(); _i < _a.length; _i++) {
            var row = _a[_i];
            var cell = row.cells[this.index];
            if (cell && typeof cell.styles.cellWidth === 'number') {
                max = Math.max(max, cell.styles.cellWidth);
            }
        }
        return max;
    };
    return Column;
}());
exports.Column = Column;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
var documentHandler_1 = __webpack_require__(2);
var models_1 = __webpack_require__(8);
var widthCalculator_1 = __webpack_require__(15);
var config_1 = __webpack_require__(1);
var polyfills_1 = __webpack_require__(3);
function createTable(jsPDFDoc, input) {
    var doc = new documentHandler_1.DocHandler(jsPDFDoc);
    var content = parseContent(input, doc.scaleFactor());
    var table = new models_1.Table(input, content);
    widthCalculator_1.calculateWidths(doc, table);
    doc.applyStyles(doc.userStyles);
    return table;
}
exports.createTable = createTable;
function parseContent(input, sf) {
    var content = input.content;
    var columns = createColumns(content.columns);
    // If no head or foot is set, try generating it with content from columns
    if (content.head.length === 0) {
        var sectionRow = generateSectionRow(columns, 'head');
        if (sectionRow)
            content.head.push(sectionRow);
    }
    if (content.foot.length === 0) {
        var sectionRow = generateSectionRow(columns, 'foot');
        if (sectionRow)
            content.foot.push(sectionRow);
    }
    var theme = input.settings.theme;
    var styles = input.styles;
    return {
        columns: columns,
        head: parseSection('head', content.head, columns, styles, theme, sf),
        body: parseSection('body', content.body, columns, styles, theme, sf),
        foot: parseSection('foot', content.foot, columns, styles, theme, sf),
    };
}
function parseSection(sectionName, sectionRows, columns, styleProps, theme, scaleFactor) {
    var rowSpansLeftForColumn = {};
    var result = sectionRows.map(function (rawRow, rowIndex) {
        var skippedRowForRowSpans = 0;
        var cells = {};
        var colSpansAdded = 0;
        var columnSpansLeft = 0;
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            if (rowSpansLeftForColumn[column.index] == null ||
                rowSpansLeftForColumn[column.index].left === 0) {
                if (columnSpansLeft === 0) {
                    var rawCell = void 0;
                    if (Array.isArray(rawRow)) {
                        rawCell =
                            rawRow[column.index - colSpansAdded - skippedRowForRowSpans];
                    }
                    else {
                        rawCell = rawRow[column.dataKey];
                    }
                    var cellInputStyles = {};
                    if (typeof rawCell === 'object' && !Array.isArray(rawCell)) {
                        cellInputStyles = (rawCell === null || rawCell === void 0 ? void 0 : rawCell.styles) || {};
                    }
                    var styles = cellStyles(sectionName, column, rowIndex, theme, styleProps, scaleFactor, cellInputStyles);
                    var cell = new models_1.Cell(rawCell, styles, sectionName);
                    // dataKey is not used internally no more but keep for
                    // backwards compat in hooks
                    cells[column.dataKey] = cell;
                    cells[column.index] = cell;
                    columnSpansLeft = cell.colSpan - 1;
                    rowSpansLeftForColumn[column.index] = {
                        left: cell.rowSpan - 1,
                        times: columnSpansLeft,
                    };
                }
                else {
                    columnSpansLeft--;
                    colSpansAdded++;
                }
            }
            else {
                rowSpansLeftForColumn[column.index].left--;
                columnSpansLeft = rowSpansLeftForColumn[column.index].times;
                skippedRowForRowSpans++;
            }
        }
        return new models_1.Row(rawRow, rowIndex, sectionName, cells);
    });
    return result;
}
function generateSectionRow(columns, section) {
    var sectionRow = {};
    columns.forEach(function (col) {
        if (col.raw != null) {
            var title = getSectionTitle(section, col.raw);
            if (title != null)
                sectionRow[col.dataKey] = title;
        }
    });
    return Object.keys(sectionRow).length > 0 ? sectionRow : null;
}
function getSectionTitle(section, column) {
    if (section === 'head') {
        if (typeof column === 'object') {
            return column.header || column.title || null;
        }
        else if (typeof column === 'string' || typeof column === 'number') {
            return column;
        }
    }
    else if (section === 'foot' && typeof column === 'object') {
        return column.footer;
    }
    return null;
}
function createColumns(columns) {
    return columns.map(function (input, index) {
        var _a, _b;
        var key;
        if (typeof input === 'object') {
            key = (_b = (_a = input.dataKey) !== null && _a !== void 0 ? _a : input.key) !== null && _b !== void 0 ? _b : index;
        }
        else {
            key = index;
        }
        return new models_1.Column(key, input, index);
    });
}
function cellStyles(sectionName, column, rowIndex, themeName, styles, scaleFactor, cellInputStyles) {
    var theme = config_1.getTheme(themeName);
    var sectionStyles;
    if (sectionName === 'head') {
        sectionStyles = styles.headStyles;
    }
    else if (sectionName === 'body') {
        sectionStyles = styles.bodyStyles;
    }
    else if (sectionName === 'foot') {
        sectionStyles = styles.footStyles;
    }
    var otherStyles = polyfills_1.assign({}, theme.table, theme[sectionName], styles.styles, sectionStyles);
    var columnStyles = styles.columnStyles[column.dataKey] ||
        styles.columnStyles[column.index] ||
        {};
    var colStyles = sectionName === 'body' ? columnStyles : {};
    var rowStyles = sectionName === 'body' && rowIndex % 2 === 0
        ? polyfills_1.assign({}, theme.alternateRow, styles.alternateRowStyles)
        : {};
    var defaultStyle = config_1.defaultStyles(scaleFactor);
    var themeStyles = polyfills_1.assign({}, defaultStyle, otherStyles, rowStyles, colStyles);
    return polyfills_1.assign(themeStyles, cellInputStyles);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.__drawTable = exports.__createTable = exports.applyPlugin = void 0;
var applyPlugin_1 = __webpack_require__(11);
var inputParser_1 = __webpack_require__(6);
var tableDrawer_1 = __webpack_require__(7);
var tableCalculator_1 = __webpack_require__(9);
// export { applyPlugin } didn't export applyPlugin
// to index.d.ts for some reason
function applyPlugin(jsPDF) {
    applyPlugin_1.default(jsPDF);
}
exports.applyPlugin = applyPlugin;
function autoTable(d, options) {
    var input = inputParser_1.parseInput(d, options);
    var table = tableCalculator_1.createTable(d, input);
    tableDrawer_1.drawTable(d, table);
}
exports.default = autoTable;
// Experimental export
function __createTable(d, options) {
    var input = inputParser_1.parseInput(d, options);
    return tableCalculator_1.createTable(d, input);
}
exports.__createTable = __createTable;
function __drawTable(d, table) {
    tableDrawer_1.drawTable(d, table);
}
exports.__drawTable = __drawTable;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var jsPDF = __webpack_require__(16);
    // Webpack imported jspdf instead of jsPDF for some reason 
    // while it seemed to work everywhere else.
    if (jsPDF.jsPDF)
        jsPDF = jsPDF.jsPDF;
    applyPlugin(jsPDF);
}
catch (error) {
    // Importing jspdf in nodejs environments does not work as of jspdf
    // 1.5.3 so we need to silence potential errors to support using for example
    // the nodejs jspdf dist files with the exported applyPlugin
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var htmlParser_1 = __webpack_require__(4);
var autoTableText_1 = __webpack_require__(5);
var documentHandler_1 = __webpack_require__(2);
var inputParser_1 = __webpack_require__(6);
var tableDrawer_1 = __webpack_require__(7);
var tableCalculator_1 = __webpack_require__(9);
function default_1(jsPDF) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jsPDF.API.autoTable = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var options;
        if (args.length === 1) {
            options = args[0];
        }
        else {
            console.error('Use of deprecated autoTable initiation');
            options = args[2] || {};
            options.columns = args[0];
            options.body = args[1];
        }
        var input = inputParser_1.parseInput(this, options);
        var table = tableCalculator_1.createTable(this, input);
        tableDrawer_1.drawTable(this, table);
        return this;
    };
    // Assign false to enable `doc.lastAutoTable.finalY || 40` sugar
    jsPDF.API.lastAutoTable = false;
    jsPDF.API.previousAutoTable = false; // deprecated in v3
    jsPDF.API.autoTable.previous = false; // deprecated in v3
    jsPDF.API.autoTableText = function (text, x, y, styles) {
        autoTableText_1.default(text, x, y, styles, this);
    };
    jsPDF.API.autoTableSetDefaults = function (defaults) {
        documentHandler_1.DocHandler.setDefaults(defaults, this);
        return this;
    };
    jsPDF.autoTableSetDefaults = function (defaults, doc) {
        documentHandler_1.DocHandler.setDefaults(defaults, doc);
    };
    jsPDF.API.autoTableHtmlToJson = function (tableElem, includeHiddenElements) {
        if (includeHiddenElements === void 0) { includeHiddenElements = false; }
        if (typeof window === 'undefined') {
            console.error('Cannot run autoTableHtmlToJson in non browser environment');
            return null;
        }
        var doc = new documentHandler_1.DocHandler(this);
        var _a = htmlParser_1.parseHtml(doc, tableElem, window, includeHiddenElements, false), head = _a.head, body = _a.body;
        var columns = head[0].map(function (c) { return c.content; });
        return { columns: columns, rows: body, data: body };
    };
    /**
     * @deprecated
     */
    jsPDF.API.autoTableEndPosY = function () {
        console.error('Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.');
        var prev = this.lastAutoTable;
        if (prev && prev.finalY) {
            return prev.finalY;
        }
        else {
            return 0;
        }
    };
    /**
     * @deprecated
     */
    jsPDF.API.autoTableAddPageContent = function (hook) {
        console.error('Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead.');
        if (!jsPDF.API.autoTable.globalDefaults) {
            jsPDF.API.autoTable.globalDefaults = {};
        }
        jsPDF.API.autoTable.globalDefaults.addPageContent = hook;
        return this;
    };
    /**
     * @deprecated
     */
    jsPDF.API.autoTableAddPage = function () {
        console.error('Use of deprecated function: autoTableAddPage. Use doc.addPage()');
        this.addPage();
        return this;
    };
}
exports.default = default_1;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCss = void 0;
// Limitations
// - No support for border spacing
// - No support for transparency
var common_1 = __webpack_require__(0);
function parseCss(supportedFonts, element, scaleFactor, style, window) {
    var result = {};
    var pxScaleFactor = 96 / 72;
    var color = parseColor(element, function (elem) {
        return window.getComputedStyle(elem)['backgroundColor'];
    });
    if (color != null)
        result.fillColor = color;
    color = parseColor(element, function (elem) {
        return window.getComputedStyle(elem)['color'];
    });
    if (color != null)
        result.textColor = color;
    color = parseColor(element, function (elem) {
        return window.getComputedStyle(elem)['borderTopColor'];
    });
    if (color != null)
        result.lineColor = color;
    var padding = parsePadding(style, scaleFactor);
    if (padding)
        result.cellPadding = padding;
    // style.borderWidth only works in chrome (borderTopWidth etc works in firefox and ie as well)
    var bw = parseInt(style.borderTopWidth || '');
    bw = bw / pxScaleFactor / scaleFactor;
    if (bw)
        result.lineWidth = bw;
    var accepted = ['left', 'right', 'center', 'justify'];
    if (accepted.indexOf(style.textAlign) !== -1) {
        result.halign = style.textAlign;
    }
    accepted = ['middle', 'bottom', 'top'];
    if (accepted.indexOf(style.verticalAlign) !== -1) {
        result.valign = style.verticalAlign;
    }
    var res = parseInt(style.fontSize || '');
    if (!isNaN(res))
        result.fontSize = res / pxScaleFactor;
    var fontStyle = parseFontStyle(style);
    if (fontStyle)
        result.fontStyle = fontStyle;
    var font = (style.fontFamily || '').toLowerCase();
    if (supportedFonts.indexOf(font) !== -1) {
        result.font = font;
    }
    return result;
}
exports.parseCss = parseCss;
function parseFontStyle(style) {
    var res = '';
    if (style.fontWeight === 'bold' ||
        style.fontWeight === 'bolder' ||
        parseInt(style.fontWeight) >= 700) {
        res = 'bold';
    }
    if (style.fontStyle === 'italic' || style.fontStyle === 'oblique') {
        res += 'italic';
    }
    return res;
}
function parseColor(element, styleGetter) {
    var cssColor = realColor(element, styleGetter);
    if (!cssColor)
        return null;
    var rgba = cssColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
    if (!rgba || !Array.isArray(rgba)) {
        return null;
    }
    var color = [
        parseInt(rgba[1]),
        parseInt(rgba[2]),
        parseInt(rgba[3]),
    ];
    var alpha = parseInt(rgba[4]);
    if (alpha === 0 || isNaN(color[0]) || isNaN(color[1]) || isNaN(color[2])) {
        return null;
    }
    return color;
}
function realColor(elem, styleGetter) {
    var bg = styleGetter(elem);
    if (bg === 'rgba(0, 0, 0, 0)' ||
        bg === 'transparent' ||
        bg === 'initial' ||
        bg === 'inherit') {
        if (elem.parentElement == null) {
            return null;
        }
        return realColor(elem.parentElement, styleGetter);
    }
    else {
        return bg;
    }
}
function parsePadding(style, scaleFactor) {
    var val = [
        style.paddingTop,
        style.paddingRight,
        style.paddingBottom,
        style.paddingLeft,
    ];
    var pxScaleFactor = 96 / (72 / scaleFactor);
    var linePadding = (parseInt(style.lineHeight) - parseInt(style.fontSize)) / scaleFactor / 2;
    var inputPadding = val.map(function (n) {
        return parseInt(n) / pxScaleFactor;
    });
    var padding = common_1.parseSpacing(inputPadding, 0);
    if (linePadding > padding.top) {
        padding.top = linePadding;
    }
    if (linePadding > padding.bottom) {
        padding.bottom = linePadding;
    }
    return padding;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(doc, global, document, current) {
    var _loop_1 = function (options) {
        if (options && typeof options !== 'object') {
            console.error('The options parameter should be of type object, is: ' + typeof options);
        }
        if (typeof options.extendWidth !== 'undefined') {
            options.tableWidth = options.extendWidth ? 'auto' : 'wrap';
            console.error('Use of deprecated option: extendWidth, use tableWidth instead.');
        }
        if (typeof options.margins !== 'undefined') {
            if (typeof options.margin === 'undefined')
                options.margin = options.margins;
            console.error('Use of deprecated option: margins, use margin instead.');
        }
        if (options.startY && typeof options.startY !== 'number') {
            console.error('Invalid value for startY option', options.startY);
            delete options.startY;
        }
        if (!options.didDrawPage &&
            (options.afterPageContent ||
                options.beforePageContent ||
                options.afterPageAdd)) {
            console.error('The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead');
            options.didDrawPage = function (data) {
                doc.applyStyles(doc.userStyles);
                if (options.beforePageContent)
                    options.beforePageContent(data);
                doc.applyStyles(doc.userStyles);
                if (options.afterPageContent)
                    options.afterPageContent(data);
                doc.applyStyles(doc.userStyles);
                if (options.afterPageAdd && data.pageNumber > 1) {
                    ;
                    data.afterPageAdd(data);
                }
                doc.applyStyles(doc.userStyles);
            };
        }
        ;
        [
            'createdHeaderCell',
            'drawHeaderRow',
            'drawRow',
            'drawHeaderCell',
        ].forEach(function (name) {
            if (options[name]) {
                console.error("The \"" + name + "\" hook has changed in version 3.0, check the changelog for how to migrate.");
            }
        });
        [
            ['showFoot', 'showFooter'],
            ['showHead', 'showHeader'],
            ['didDrawPage', 'addPageContent'],
            ['didParseCell', 'createdCell'],
            ['headStyles', 'headerStyles'],
        ].forEach(function (_a) {
            var current = _a[0], deprecated = _a[1];
            if (options[deprecated]) {
                console.error("Use of deprecated option " + deprecated + ". Use " + current + " instead");
                options[current] = options[deprecated];
            }
        });
        [
            ['padding', 'cellPadding'],
            ['lineHeight', 'rowHeight'],
            'fontSize',
            'overflow',
        ].forEach(function (o) {
            var deprecatedOption = typeof o === 'string' ? o : o[0];
            var style = typeof o === 'string' ? o : o[1];
            if (typeof options[deprecatedOption] !== 'undefined') {
                if (typeof options.styles[style] === 'undefined') {
                    options.styles[style] = options[deprecatedOption];
                }
                console.error('Use of deprecated option: ' +
                    deprecatedOption +
                    ', use the style ' +
                    style +
                    ' instead.');
            }
        });
        for (var _i = 0, _a = [
            'styles',
            'bodyStyles',
            'headStyles',
            'footStyles',
        ]; _i < _a.length; _i++) {
            var styleProp = _a[_i];
            checkStyles(options[styleProp] || {});
        }
        var columnStyles = options['columnStyles'] || {};
        for (var _b = 0, _c = Object.keys(columnStyles); _b < _c.length; _b++) {
            var key = _c[_b];
            checkStyles(columnStyles[key] || {});
        }
    };
    for (var _i = 0, _a = [global, document, current]; _i < _a.length; _i++) {
        var options = _a[_i];
        _loop_1(options);
    }
}
exports.default = default_1;
function checkStyles(styles) {
    if (styles.rowHeight) {
        console.error('Use of deprecated style rowHeight. It is renamed to minCellHeight.');
        if (!styles.minCellHeight) {
            styles.minCellHeight = styles.rowHeight;
        }
    }
    else if (styles.columnWidth) {
        console.error('Use of deprecated style columnWidth. It is renamed to cellWidth.');
        if (!styles.cellWidth) {
            styles.cellWidth = styles.columnWidth;
        }
    }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellHookData = exports.HookData = void 0;
var HookData = /** @class */ (function () {
    function HookData(doc, table, cursor) {
        this.table = table;
        this.pageNumber = table.pageNumber;
        this.pageCount = this.pageNumber;
        this.settings = table.settings;
        this.cursor = cursor;
        this.doc = doc.getDocument();
    }
    return HookData;
}());
exports.HookData = HookData;
var CellHookData = /** @class */ (function (_super) {
    __extends(CellHookData, _super);
    function CellHookData(doc, table, cell, row, column, cursor) {
        var _this = _super.call(this, doc, table, cursor) || this;
        _this.cell = cell;
        _this.row = row;
        _this.column = column;
        _this.section = row.section;
        return _this;
    }
    return CellHookData;
}(HookData));
exports.CellHookData = CellHookData;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ellipsize = exports.resizeColumns = exports.calculateWidths = void 0;
var common_1 = __webpack_require__(0);
/**
 * Calculate the column widths
 */
function calculateWidths(doc, table) {
    calculate(doc, table);
    var resizableColumns = [];
    var initialTableWidth = 0;
    table.columns.forEach(function (column) {
        var customWidth = column.getMaxCustomCellWidth(table);
        if (customWidth) {
            // final column width
            column.width = customWidth;
        }
        else {
            // initial column width (will be resized)
            column.width = column.wrappedWidth;
            resizableColumns.push(column);
        }
        initialTableWidth += column.width;
    });
    // width difference that needs to be distributed
    var resizeWidth = table.getWidth(doc.pageSize().width) - initialTableWidth;
    // first resize attempt: with respect to minReadableWidth and minWidth
    if (resizeWidth) {
        resizeWidth = resizeColumns(resizableColumns, resizeWidth, function (column) {
            return Math.max(column.minReadableWidth, column.minWidth);
        });
    }
    // second resize attempt: ignore minReadableWidth but respect minWidth
    if (resizeWidth) {
        resizeWidth = resizeColumns(resizableColumns, resizeWidth, function (column) { return column.minWidth; });
    }
    resizeWidth = Math.abs(resizeWidth);
    if (resizeWidth > 0.1 / doc.scaleFactor()) {
        // Table can't get smaller due to custom-width or minWidth restrictions
        // We can't really do much here. Up to user to for example
        // reduce font size, increase page size or remove custom cell widths
        // to allow more columns to be reduced in size
        resizeWidth = resizeWidth < 1 ? resizeWidth : Math.round(resizeWidth);
        console.error("Of the table content, " + resizeWidth + " units width could not fit page");
    }
    applyColSpans(table);
    fitContent(table, doc);
    applyRowSpans(table);
}
exports.calculateWidths = calculateWidths;
function calculate(doc, table) {
    var sf = doc.scaleFactor();
    table.allRows().forEach(function (row) {
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = row.cells[column.index];
            if (!cell)
                continue;
            var hooks = table.hooks.didParseCell;
            table.callCellHooks(doc, hooks, cell, row, column, null);
            var padding = cell.padding('horizontal');
            cell.contentWidth = common_1.getStringWidth(cell.text, cell.styles, doc) + padding;
            var longestWordWidth = common_1.getStringWidth(cell.text.join(' ').split(/\s+/), cell.styles, doc);
            cell.minReadableWidth = longestWordWidth + cell.padding('horizontal');
            if (typeof cell.styles.cellWidth === 'number') {
                cell.minWidth = cell.styles.cellWidth;
                cell.wrappedWidth = cell.styles.cellWidth;
            }
            else if (cell.styles.cellWidth === 'wrap') {
                cell.minWidth = cell.contentWidth;
                cell.wrappedWidth = cell.contentWidth;
            }
            else {
                // auto
                var defaultMinWidth = 10 / sf;
                cell.minWidth = cell.styles.minCellWidth || defaultMinWidth;
                cell.wrappedWidth = cell.contentWidth;
                if (cell.minWidth > cell.wrappedWidth) {
                    cell.wrappedWidth = cell.minWidth;
                }
            }
        }
    });
    table.allRows().forEach(function (row) {
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = row.cells[column.index];
            // For now we ignore the minWidth and wrappedWidth of colspan cells when calculating colspan widths.
            // Could probably be improved upon however.
            if (cell && cell.colSpan === 1) {
                column.wrappedWidth = Math.max(column.wrappedWidth, cell.wrappedWidth);
                column.minWidth = Math.max(column.minWidth, cell.minWidth);
                column.minReadableWidth = Math.max(column.minReadableWidth, cell.minReadableWidth);
            }
            else {
                // Respect cellWidth set in columnStyles even if there is no cells for this column
                // or if the column only have colspan cells. Since the width of colspan cells
                // does not affect the width of columns, setting columnStyles cellWidth enables the
                // user to at least do it manually.
                // Note that this is not perfect for now since for example row and table styles are
                // not accounted for
                var columnStyles = table.styles.columnStyles[column.dataKey] ||
                    table.styles.columnStyles[column.index] ||
                    {};
                var cellWidth = columnStyles.cellWidth || columnStyles.minCellWidth;
                if (cellWidth && typeof cellWidth === 'number') {
                    column.minWidth = cellWidth;
                    column.wrappedWidth = cellWidth;
                }
            }
            if (cell) {
                // Make sure all columns get at least min width even though width calculations are not based on them
                if (cell.colSpan > 1 && !column.minWidth) {
                    column.minWidth = cell.minWidth;
                }
                if (cell.colSpan > 1 && !column.wrappedWidth) {
                    column.wrappedWidth = cell.minWidth;
                }
            }
        }
    });
}
/**
 * Distribute resizeWidth on passed resizable columns
 */
function resizeColumns(columns, resizeWidth, getMinWidth) {
    var initialResizeWidth = resizeWidth;
    var sumWrappedWidth = columns.reduce(function (acc, column) { return acc + column.wrappedWidth; }, 0);
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var ratio = column.wrappedWidth / sumWrappedWidth;
        var suggestedChange = initialResizeWidth * ratio;
        var suggestedWidth = column.width + suggestedChange;
        var minWidth = getMinWidth(column);
        var newWidth = suggestedWidth < minWidth ? minWidth : suggestedWidth;
        resizeWidth -= newWidth - column.width;
        column.width = newWidth;
    }
    resizeWidth = Math.round(resizeWidth * 1e10) / 1e10;
    // Run the resizer again if there's remaining width needs
    // to be distributed and there're columns that can be resized
    if (resizeWidth) {
        var resizableColumns = columns.filter(function (column) {
            return resizeWidth < 0
                ? column.width > getMinWidth(column) // check if column can shrink
                : true; // check if column can grow
        });
        if (resizableColumns.length) {
            resizeWidth = resizeColumns(resizableColumns, resizeWidth, getMinWidth);
        }
    }
    return resizeWidth;
}
exports.resizeColumns = resizeColumns;
function applyRowSpans(table) {
    var rowSpanCells = {};
    var colRowSpansLeft = 1;
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var data = rowSpanCells[column.index];
            if (colRowSpansLeft > 1) {
                colRowSpansLeft--;
                delete row.cells[column.index];
            }
            else if (data) {
                data.cell.height += row.height;
                colRowSpansLeft = data.cell.colSpan;
                delete row.cells[column.index];
                data.left--;
                if (data.left <= 1) {
                    delete rowSpanCells[column.index];
                }
            }
            else {
                var cell = row.cells[column.index];
                if (!cell) {
                    continue;
                }
                cell.height = row.height;
                if (cell.rowSpan > 1) {
                    var remaining = all.length - rowIndex;
                    var left = cell.rowSpan > remaining ? remaining : cell.rowSpan;
                    rowSpanCells[column.index] = { cell: cell, left: left, row: row };
                }
            }
        }
    }
}
function applyColSpans(table) {
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        var colSpanCell = null;
        var combinedColSpanWidth = 0;
        var colSpansLeft = 0;
        for (var columnIndex = 0; columnIndex < table.columns.length; columnIndex++) {
            var column = table.columns[columnIndex];
            // Width and colspan
            colSpansLeft -= 1;
            if (colSpansLeft > 1 && table.columns[columnIndex + 1]) {
                combinedColSpanWidth += column.width;
                delete row.cells[column.index];
            }
            else if (colSpanCell) {
                var cell = colSpanCell;
                delete row.cells[column.index];
                colSpanCell = null;
                cell.width = column.width + combinedColSpanWidth;
            }
            else {
                var cell = row.cells[column.index];
                if (!cell)
                    continue;
                colSpansLeft = cell.colSpan;
                combinedColSpanWidth = 0;
                if (cell.colSpan > 1) {
                    colSpanCell = cell;
                    combinedColSpanWidth += column.width;
                    continue;
                }
                cell.width = column.width + combinedColSpanWidth;
            }
        }
    }
}
function fitContent(table, doc) {
    var rowSpanHeight = { count: 0, height: 0 };
    for (var _i = 0, _a = table.allRows(); _i < _a.length; _i++) {
        var row = _a[_i];
        for (var _b = 0, _c = table.columns; _b < _c.length; _b++) {
            var column = _c[_b];
            var cell = row.cells[column.index];
            if (!cell)
                continue;
            doc.applyStyles(cell.styles, true);
            var textSpace = cell.width - cell.padding('horizontal');
            if (cell.styles.overflow === 'linebreak') {
                // Add one pt to textSpace to fix rounding error
                cell.text = doc.splitTextToSize(cell.text, textSpace + 1 / doc.scaleFactor(), { fontSize: cell.styles.fontSize });
            }
            else if (cell.styles.overflow === 'ellipsize') {
                cell.text = ellipsize(cell.text, textSpace, cell.styles, doc, '...');
            }
            else if (cell.styles.overflow === 'hidden') {
                cell.text = ellipsize(cell.text, textSpace, cell.styles, doc, '');
            }
            else if (typeof cell.styles.overflow === 'function') {
                cell.text = cell.styles.overflow(cell.text, textSpace);
            }
            cell.contentHeight = cell.getContentHeight(doc.scaleFactor());
            var realContentHeight = cell.contentHeight / cell.rowSpan;
            if (cell.rowSpan > 1 &&
                rowSpanHeight.count * rowSpanHeight.height <
                    realContentHeight * cell.rowSpan) {
                rowSpanHeight = { height: realContentHeight, count: cell.rowSpan };
            }
            else if (rowSpanHeight && rowSpanHeight.count > 0) {
                if (rowSpanHeight.height > realContentHeight) {
                    realContentHeight = rowSpanHeight.height;
                }
            }
            if (realContentHeight > row.height) {
                row.height = realContentHeight;
            }
        }
        rowSpanHeight.count--;
    }
}
function ellipsize(text, width, styles, doc, overflow) {
    return text.map(function (str) { return ellipsizeStr(str, width, styles, doc, overflow); });
}
exports.ellipsize = ellipsize;
function ellipsizeStr(text, width, styles, doc, overflow) {
    var precision = 10000 * doc.scaleFactor();
    width = Math.ceil(width * precision) / precision;
    if (width >= common_1.getStringWidth(text, styles, doc)) {
        return text;
    }
    while (width < common_1.getStringWidth(text + overflow, styles, doc)) {
        if (text.length <= 1) {
            break;
        }
        text = text.substring(0, text.length - 1);
    }
    return text.trim() + overflow;
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE__16__ === 'undefined') {var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ })
/******/ ]);
});

/***/ })

},[418]);
//# sourceMappingURL=app.e64dae81f9d4d68f05d5.js.map