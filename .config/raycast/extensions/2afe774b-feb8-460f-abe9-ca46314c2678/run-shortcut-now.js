var q=Object.create;var A=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var tt=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty;var b=a=>A(a,"__esModule",{value:!0});var nt=(a,c)=>()=>(c||a((c={exports:{}}).exports,c),c.exports),rt=(a,c)=>{for(var r in c)A(a,r,{get:c[r],enumerable:!0})},D=(a,c,r,t)=>{if(c&&typeof c=="object"||typeof c=="function")for(let e of Q(c))!et.call(a,e)&&(r||e!=="default")&&A(a,e,{get:()=>c[e],enumerable:!(t=z(c,e))||t.enumerable});return a},I=(a,c)=>D(b(A(a!=null?q(tt(a)):{},"default",!c&&a&&a.__esModule?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a),ot=(a=>(c,r)=>a&&a.get(c)||(r=D(b({}),c,1),a&&a.set(c,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var v=nt(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var F=function(){function a(){this._dataLength=0,this._bufferLength=0,this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}return a.hashStr=function(c,r){return r===void 0&&(r=!1),this.onePassHasher.start().appendStr(c).end(r)},a.hashAsciiStr=function(c,r){return r===void 0&&(r=!1),this.onePassHasher.start().appendAsciiStr(c).end(r)},a._hex=function(c){var r=a.hexChars,t=a.hexOut,e,n,o,u;for(u=0;u<4;u+=1)for(n=u*8,e=c[u],o=0;o<8;o+=2)t[n+1+o]=r.charAt(e&15),e>>>=4,t[n+0+o]=r.charAt(e&15),e>>>=4;return t.join("")},a._md5cycle=function(c,r){var t=c[0],e=c[1],n=c[2],o=c[3];t+=(e&n|~e&o)+r[0]-680876936|0,t=(t<<7|t>>>25)+e|0,o+=(t&e|~t&n)+r[1]-389564586|0,o=(o<<12|o>>>20)+t|0,n+=(o&t|~o&e)+r[2]+606105819|0,n=(n<<17|n>>>15)+o|0,e+=(n&o|~n&t)+r[3]-1044525330|0,e=(e<<22|e>>>10)+n|0,t+=(e&n|~e&o)+r[4]-176418897|0,t=(t<<7|t>>>25)+e|0,o+=(t&e|~t&n)+r[5]+1200080426|0,o=(o<<12|o>>>20)+t|0,n+=(o&t|~o&e)+r[6]-1473231341|0,n=(n<<17|n>>>15)+o|0,e+=(n&o|~n&t)+r[7]-45705983|0,e=(e<<22|e>>>10)+n|0,t+=(e&n|~e&o)+r[8]+1770035416|0,t=(t<<7|t>>>25)+e|0,o+=(t&e|~t&n)+r[9]-1958414417|0,o=(o<<12|o>>>20)+t|0,n+=(o&t|~o&e)+r[10]-42063|0,n=(n<<17|n>>>15)+o|0,e+=(n&o|~n&t)+r[11]-1990404162|0,e=(e<<22|e>>>10)+n|0,t+=(e&n|~e&o)+r[12]+1804603682|0,t=(t<<7|t>>>25)+e|0,o+=(t&e|~t&n)+r[13]-40341101|0,o=(o<<12|o>>>20)+t|0,n+=(o&t|~o&e)+r[14]-1502002290|0,n=(n<<17|n>>>15)+o|0,e+=(n&o|~n&t)+r[15]+1236535329|0,e=(e<<22|e>>>10)+n|0,t+=(e&o|n&~o)+r[1]-165796510|0,t=(t<<5|t>>>27)+e|0,o+=(t&n|e&~n)+r[6]-1069501632|0,o=(o<<9|o>>>23)+t|0,n+=(o&e|t&~e)+r[11]+643717713|0,n=(n<<14|n>>>18)+o|0,e+=(n&t|o&~t)+r[0]-373897302|0,e=(e<<20|e>>>12)+n|0,t+=(e&o|n&~o)+r[5]-701558691|0,t=(t<<5|t>>>27)+e|0,o+=(t&n|e&~n)+r[10]+38016083|0,o=(o<<9|o>>>23)+t|0,n+=(o&e|t&~e)+r[15]-660478335|0,n=(n<<14|n>>>18)+o|0,e+=(n&t|o&~t)+r[4]-405537848|0,e=(e<<20|e>>>12)+n|0,t+=(e&o|n&~o)+r[9]+568446438|0,t=(t<<5|t>>>27)+e|0,o+=(t&n|e&~n)+r[14]-1019803690|0,o=(o<<9|o>>>23)+t|0,n+=(o&e|t&~e)+r[3]-187363961|0,n=(n<<14|n>>>18)+o|0,e+=(n&t|o&~t)+r[8]+1163531501|0,e=(e<<20|e>>>12)+n|0,t+=(e&o|n&~o)+r[13]-1444681467|0,t=(t<<5|t>>>27)+e|0,o+=(t&n|e&~n)+r[2]-51403784|0,o=(o<<9|o>>>23)+t|0,n+=(o&e|t&~e)+r[7]+1735328473|0,n=(n<<14|n>>>18)+o|0,e+=(n&t|o&~t)+r[12]-1926607734|0,e=(e<<20|e>>>12)+n|0,t+=(e^n^o)+r[5]-378558|0,t=(t<<4|t>>>28)+e|0,o+=(t^e^n)+r[8]-2022574463|0,o=(o<<11|o>>>21)+t|0,n+=(o^t^e)+r[11]+1839030562|0,n=(n<<16|n>>>16)+o|0,e+=(n^o^t)+r[14]-35309556|0,e=(e<<23|e>>>9)+n|0,t+=(e^n^o)+r[1]-1530992060|0,t=(t<<4|t>>>28)+e|0,o+=(t^e^n)+r[4]+1272893353|0,o=(o<<11|o>>>21)+t|0,n+=(o^t^e)+r[7]-155497632|0,n=(n<<16|n>>>16)+o|0,e+=(n^o^t)+r[10]-1094730640|0,e=(e<<23|e>>>9)+n|0,t+=(e^n^o)+r[13]+681279174|0,t=(t<<4|t>>>28)+e|0,o+=(t^e^n)+r[0]-358537222|0,o=(o<<11|o>>>21)+t|0,n+=(o^t^e)+r[3]-722521979|0,n=(n<<16|n>>>16)+o|0,e+=(n^o^t)+r[6]+76029189|0,e=(e<<23|e>>>9)+n|0,t+=(e^n^o)+r[9]-640364487|0,t=(t<<4|t>>>28)+e|0,o+=(t^e^n)+r[12]-421815835|0,o=(o<<11|o>>>21)+t|0,n+=(o^t^e)+r[15]+530742520|0,n=(n<<16|n>>>16)+o|0,e+=(n^o^t)+r[2]-995338651|0,e=(e<<23|e>>>9)+n|0,t+=(n^(e|~o))+r[0]-198630844|0,t=(t<<6|t>>>26)+e|0,o+=(e^(t|~n))+r[7]+1126891415|0,o=(o<<10|o>>>22)+t|0,n+=(t^(o|~e))+r[14]-1416354905|0,n=(n<<15|n>>>17)+o|0,e+=(o^(n|~t))+r[5]-57434055|0,e=(e<<21|e>>>11)+n|0,t+=(n^(e|~o))+r[12]+1700485571|0,t=(t<<6|t>>>26)+e|0,o+=(e^(t|~n))+r[3]-1894986606|0,o=(o<<10|o>>>22)+t|0,n+=(t^(o|~e))+r[10]-1051523|0,n=(n<<15|n>>>17)+o|0,e+=(o^(n|~t))+r[1]-2054922799|0,e=(e<<21|e>>>11)+n|0,t+=(n^(e|~o))+r[8]+1873313359|0,t=(t<<6|t>>>26)+e|0,o+=(e^(t|~n))+r[15]-30611744|0,o=(o<<10|o>>>22)+t|0,n+=(t^(o|~e))+r[6]-1560198380|0,n=(n<<15|n>>>17)+o|0,e+=(o^(n|~t))+r[13]+1309151649|0,e=(e<<21|e>>>11)+n|0,t+=(n^(e|~o))+r[4]-145523070|0,t=(t<<6|t>>>26)+e|0,o+=(e^(t|~n))+r[11]-1120210379|0,o=(o<<10|o>>>22)+t|0,n+=(t^(o|~e))+r[2]+718787259|0,n=(n<<15|n>>>17)+o|0,e+=(o^(n|~t))+r[9]-343485551|0,e=(e<<21|e>>>11)+n|0,c[0]=t+c[0]|0,c[1]=e+c[1]|0,c[2]=n+c[2]|0,c[3]=o+c[3]|0},a.prototype.start=function(){return this._dataLength=0,this._bufferLength=0,this._state.set(a.stateIdentity),this},a.prototype.appendStr=function(c){var r=this._buffer8,t=this._buffer32,e=this._bufferLength,n,o;for(o=0;o<c.length;o+=1){if(n=c.charCodeAt(o),n<128)r[e++]=n;else if(n<2048)r[e++]=(n>>>6)+192,r[e++]=n&63|128;else if(n<55296||n>56319)r[e++]=(n>>>12)+224,r[e++]=n>>>6&63|128,r[e++]=n&63|128;else{if(n=(n-55296)*1024+(c.charCodeAt(++o)-56320)+65536,n>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");r[e++]=(n>>>18)+240,r[e++]=n>>>12&63|128,r[e++]=n>>>6&63|128,r[e++]=n&63|128}e>=64&&(this._dataLength+=64,a._md5cycle(this._state,t),e-=64,t[0]=t[16])}return this._bufferLength=e,this},a.prototype.appendAsciiStr=function(c){for(var r=this._buffer8,t=this._buffer32,e=this._bufferLength,n,o=0;;){for(n=Math.min(c.length-o,64-e);n--;)r[e++]=c.charCodeAt(o++);if(e<64)break;this._dataLength+=64,a._md5cycle(this._state,t),e=0}return this._bufferLength=e,this},a.prototype.appendByteArray=function(c){for(var r=this._buffer8,t=this._buffer32,e=this._bufferLength,n,o=0;;){for(n=Math.min(c.length-o,64-e);n--;)r[e++]=c[o++];if(e<64)break;this._dataLength+=64,a._md5cycle(this._state,t),e=0}return this._bufferLength=e,this},a.prototype.getState=function(){var c=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[c[0],c[1],c[2],c[3]]}},a.prototype.setState=function(c){var r=c.buffer,t=c.state,e=this._state,n;for(this._dataLength=c.length,this._bufferLength=c.buflen,e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],n=0;n<r.length;n+=1)this._buffer8[n]=r.charCodeAt(n)},a.prototype.end=function(c){c===void 0&&(c=!1);var r=this._bufferLength,t=this._buffer8,e=this._buffer32,n=(r>>2)+1;this._dataLength+=r;var o=this._dataLength*8;if(t[r]=128,t[r+1]=t[r+2]=t[r+3]=0,e.set(a.buffer32Identity.subarray(n),n),r>55&&(a._md5cycle(this._state,e),e.set(a.buffer32Identity)),o<=4294967295)e[14]=o;else{var u=o.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;var p=parseInt(u[2],16),s=parseInt(u[1],16)||0;e[14]=p,e[15]=s}return a._md5cycle(this._state,e),c?this._state:a._hex(this._state)},a.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),a.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),a.hexChars="0123456789abcdef",a.hexOut=[],a.onePassHasher=new a,a}();R.Md5=F;if(F.hashStr("hello")!=="5d41402abc4b2a76b9719d911017c592")throw new Error("Md5 self test failed.")});var pt={};rt(pt,{default:()=>G});var k=require("react"),l=require("@raycast/api");var h=require("@raycast/api");var w=require("@raycast/api"),mt=w.Form.Values,d=/\p{Z}|\p{P}|\p{S}/gu,f=a=>!(a!=null&&String(a).length>0);function O(a){let c=0,r=0,t=0,e=0;for(let n=0;n<a.length;n++){let o=a.charAt(n);(o.match(/[\u4e00-\u9fa5]/)||o.match(/[\u9FA6-\u9fcb]/))&&c++}for(let n=0;n<a.length;n++){let o=a.charAt(n);o.match(/[^x00-\xff]/)?r++:t++,o.match(/[0-9]/)&&e++}return{textLength:a.length,englishCharacter:t-e,chineseCharacter:c,numberCharacter:e,punctuationCharacter:r-c,characterWithoutSpace:a.replaceAll(/\s|(\n)/g,"").length,characterWithoutPunctuation:a.replaceAll(/\p{Z}|\p{P}|\p{S}/gu,"").length,line:Array.from(a.matchAll(/\n/g)).length+1}}function L(content){try{if(eval(content)instanceof RegExp){let a=content.substring(content.indexOf("/")+1,content.lastIndexOf("/")),c=content.substring(content.lastIndexOf("/")+1);return new RegExp(a,c)}}catch(a){console.error("[buildRegexp] "+String(a))}return content}function _(a,c){let r=a.replaceAll(" ","");try{let t="";r.split("").forEach((e,n)=>{n===0?t=t+e.toLowerCase():at(e)?t=t+c+e.toLowerCase():t=t+e}),r=t}catch(t){console.error(String(t))}return r}function at(a){return!/\d/.test(a)&&a!==a.toLowerCase()}var x=I(v()),$=(u=>(u.ANNOTATION="Annotation",u.CASE="Case",u.CODER="Coder",u.FORMAT="Format",u.MARKDOWN="Markdown",u.TIME="Time",u.UNKNOWN="Unknown",u))($||{}),ct=Object.values($),it=[h.Icon.TextDocument,h.Icon.Calendar,h.Icon.Clock,h.Icon.Envelope,h.Icon.Globe,h.Icon.Link,h.Icon.List,h.Icon.Pencil,h.Icon.Star,h.Icon.Terminal,h.Icon.Trash],N=(s=>(s.UPPER="UPPER CASE",s.LOWER="lower case",s.TITLE="Title case",s.CAMEL="camelCase",s.PASCAL="PascalCase",s.SNAKE="snake_case",s.KEBAB="kebab-case",s.CAMEL_TO_SNAKE="camelCase to snake_case",s.CAMEL_TO_KEBAB="camelCase to kebab-case",s))(N||{}),P=Object.values(N),M=(s=>(s.ENCODER_BASE64="Encoder Base64",s.DECODER_BASE64="Decoder Base64",s.ENCODER_MD5="Encoder MD5",s.ENCODER_URL="Encoder URL",s.DECODER_URL="Decoder URL",s.ENCODER_URL_COMPONENT="Encoder URL Component",s.DECODER_URL_COMPONENT="Decoder URL Component",s.ENCODER_ESCAPE="Encoder Escape",s.DECODER_ESCAPE="Decoder Escape",s))(M||{}),U=Object.values(M),V=(n=>(n.STAMP_TO_TIME_LOCAL="Stamp to time",n.FORMAT_JSON="Format JSON",n.TRIM_LINE="Trim line",n.Sort_LINE1="Sort line by A-Z",n.Sort_LINE2="Sort line by Z-A",n))(V||{}),B=Object.values(V);function W(a){for(let c=0;c<a.length;c++)if(a[c].type==="Live Template"){let r=Array.from(a[c].content[0].matchAll(/(\$TEXT\$)|(\$LINE\$)|(\$WORD\$)/g));r.length>0&&(a[c].content[1]=r[0][0])}return a}function j(a,c){try{let r=a;return c.map(t=>{switch(t.type){case"Delete":{let e=L(t.content[0]);typeof e=="string"?r=r.replaceAll(e,""):r=r.replace(e,""),r=r.length===0?" ":r;break}case"Replace":{let e=L(t.content[0]);typeof e=="string"?r=r.replaceAll(e,f(t.content[1])?"":t.content[1]):r=r.replace(e,f(t.content[1])?"":t.content[1]),r=r.length===0?" ":r;break}case"Live Template":{r=st(r,t);break}case"Name Case":{r=lt(r,t);break}case"Encode & Decode":{r=ut(r,t);break}case"Transform":{r=ht(r,t);break}}}),r}catch(r){return console.error("runShortcut "+String(r)),a}}function st(a,c){let r=new Date,t=c.content[0];t=t.replaceAll(/(\$YEAR\$)/g,r.getFullYear()+""),t=t.replaceAll(/(\$MONTH\$)/g,r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1+""),t=t.replaceAll(/(\$DAY\$)/g,r.getDate()<10?"0"+r.getDate():r.getDate()+""),t=t.replaceAll(/(\$HOUR\$)/g,r.getHours()<10?"0"+r.getHours():r.getHours()+""),t=t.replaceAll(/(\$MINUTE\$)/g,r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes()+""),t=t.replaceAll(/(\$SECOND\$)/g,r.getSeconds()<10?"0"+r.getSeconds():r.getSeconds()+""),t=t.replaceAll(/(\$TIMESTAMP\$)/g,r.getTime()+"");let e=O(a),n=`
Statistics
Text length: ${e.textLength}
English character: ${e.englishCharacter}
Chinese character: ${e.chineseCharacter}
Line count: ${e.line}
Number count: ${e.numberCharacter}
Punctuation count: ${e.punctuationCharacter}
Character without space: ${e.characterWithoutSpace}
Character without punctuation: ${e.characterWithoutPunctuation}
`;if(t=t.replaceAll(/(\$STATISTICS\$)/g,n),c.content.length>1)switch(c.content[1]){case"$TEXT$":{t=t.replaceAll(/(\$TEXT\$)/g,a);break}case"$LINE$":{let o=a.split(/\n/g),u=[],p="";for(let s=0;s<o.length;s++)u.push(t.replaceAll(/(\$LINE\$)/g,o[s])),p=p+u[s]+(s==o.length-1?"":`
`);t=p;break}case"$WORD$":{let o=a.split(/\n/g),u=[],p="";for(let s=0;s<o.length;s++){let E=o[s].split(/\s/gu),T=[],y="";for(let m=0;m<E.length;m++)E[m].length>0?(T.push(t.replaceAll(/(\$WORD\$)/g,E[m])),y=y+T[m]+(m==E.length-1?"":" ")):T.push("");u.push(y),p=p+u[s]+(s==o.length-1?"":`
`)}t=p;break}}return t=t.replaceAll("$LINEBREAK$",`
`),t}function lt(a,c){switch(c.content[0]){case"UPPER CASE":return a.toUpperCase();case"lower case":return a.toLowerCase();case"Title case":return a.replace(a[0],a[0].toUpperCase());case"camelCase":{let r=a.toLowerCase().split(d),t=[];if(r.length<=1)return r[0].toString();{t.push(r[0]);for(let n=1;n<r.length;n++)f(r[n])||t.push(r[n].replace(r[n][0],r[n][0].toUpperCase()));let e=t.join("");return e.replace(e[0],e[0].toLowerCase())}}case"PascalCase":{let r=a.toLowerCase().split(d),t=[];for(let e=0;e<r.length;e++)f(r[e])||t.push(r[e].replace(r[e][0],r[e][0].toUpperCase()));return t.join("")}case"snake_case":{let r=a.toLowerCase().split(d),t=[];for(let e=0;e<r.length;e++)f(r[e])||t.push(r[e].replace(r[e][0],r[e][0].toLowerCase()));return t.join("_")}case"kebab-case":{let r=a.toLowerCase().split(d),t=[];for(let e=0;e<r.length;e++)f(r[e])||t.push(r[e].replace(r[e][0],r[e][0].toLowerCase()));return t.join("-")}case"camelCase to snake_case":return _(a,"_");case"camelCase to kebab-case":return _(a,"-");default:return a}}function ut(a,c){switch(c.content[0]){case"Encoder Base64":return Buffer.from(a,"utf-8").toString("base64");case"Decoder Base64":return Buffer.from(a,"base64").toString("utf-8");case"Encoder MD5":return x.Md5.hashStr(a);case"Encoder URL":return encodeURI(a);case"Decoder URL":return decodeURI(a);case"Encoder URL Component":return encodeURIComponent(a);case"Decoder URL Component":return decodeURIComponent(a);case"Encoder Escape":return escape(a);case"Decoder Escape":return unescape(a);default:return a}}function ht(a,c){switch(c.content[0]){case"Stamp to time":return/^[0-9]*$/.test(a)?new Date(Number(a)).toLocaleString():a;case"Format JSON":try{return JSON.stringify(JSON.parse(a),null,2)}catch{return a}case"Trim line":{let r=a.split(/\n/g),t="";for(let e=0;e<r.length;e++)t=t+r[e].trim()+(e==r.length-1?"":`
`);return t}case"Sort line by A-Z":{let r=a.split(/\n/g),t="";r.sort();for(let e=0;e<r.length;e++)t=t+r[e]+(e==r.length-1?"":`
`);return t}case"Sort line by Z-A":{let r=a.split(/\n/g),t="";r.sort().reverse();for(let e=0;e<r.length;e++)t=t+r[e]+(e==r.length-1?"":`
`);return t}default:return a}}var C=require("@raycast/api");var H=class{constructor(c="",r="",t=""){this.content=c,this.source=r,this.type=t}setContent(c=""){return this.content=c,this}setSource(c=""){return this.source=c,this}setType(c=""){return this.type=c,this}},X=async()=>{let a=await C.Clipboard.readText();return typeof a>"u"?"":a},K=()=>{let a=new H;return(0,C.getSelectedText)().then(async c=>f(c)?a.setContent(String(await X())).setSource("Clipboard").setType():a.setContent(c.substring(0,9999)).setSource("Selected").setType()).catch(async()=>a.setContent(String(await X())).setSource("Clipboard").setType()).then(c=>f(c.content)?a.setContent("").setSource("").setType():a).catch(()=>a.setContent("").setSource("").setType())};var g=I(require("react")),i=require("@raycast/api");var J=[{title:"Variable",value:""},{title:"input.text",value:"$TEXT$"},{title:"input.line",value:"$LINE$"},{title:"input.word",value:"$WORD$"},{title:"form.lineBreak",value:"$LINEBREAK$"},{title:"date.year",value:"$YEAR$"},{title:"date.month",value:"$MONTH$"},{title:"date.day",value:"$DAY$"},{title:"date.hour",value:"$HOUR$"},{title:"date.minute",value:"$MINUTE$"},{title:"date.second",value:"$SECOND$"},{title:"date.timestamp",value:"$TIMESTAMP$"},{title:"text.statistics",value:"$STATISTICS$"}];function Y(a,c){return a.map((r,t,e)=>{switch(r.type){case"Delete":return _jsx(g.default.Fragment,{key:"delete_fragment"+t},_jsx(i.Form.Separator,null),_jsx(i.Form.TextField,{id:"delete"+t,key:"delete"+t,title:"Delete"+" "+(t+1),placeholder:"Strings or Regular Expressions",info:`Support regular expressions with // and modifiers.
Delete all numbers: /\\d/g
Delete all Blank characters: /\\s/g
Delete all letter, number and underline: /\\w/g`,value:e[t].content[0],onChange:n=>{let o=[...a];o[t].content[0]=n,c(o)}}));case"Replace":return _jsx(g.default.Fragment,{key:"replace_fragment"+t},_jsx(i.Form.Separator,null),_jsx(i.Form.TextField,{id:"replace"+t,key:"replace"+t,title:"Replace"+" "+(t+1),placeholder:"Strings or Regular Expressions",info:`Support regular expressions with // and modifiers.
Replace all numbers: /\\d/g
Replace all Blank characters: /\\s/g
Replace all letter, number and underline: /\\w/g`,value:e[t].content[0],onChange:n=>{let o=[...a];o[t].content[0]=n,c(o)}}),_jsx(i.Form.TextField,{id:"replace_with"+t,key:"replace_with"+t,title:"",placeholder:"with string",value:e[t].content[1],onChange:n=>{let o=[...a];o[t].content[1]=n,c(o)}}));case"Live Template":return _jsx(g.default.Fragment,{key:"affix_fragment"+t},_jsx(i.Form.Separator,null),_jsx(i.Form.TextArea,{id:"affix"+t,key:"affix"+t,title:"Live Template"+" "+(t+1),value:e[t].content[0],placeholder:`Such as Prefix$VARIABLE$Suffix

Template can only have a maximum of one "Input" variable`,onChange:n=>{S(n,t,[...e],c)}}),_jsx(i.Form.Dropdown,{id:"affix_variable"+t,key:"affix_variable"+t,defaultValue:"",onChange:async n=>{S(`${a[t].content[0]}${n}`,t,[...e],c)}},J.map(n=>_jsx(i.Form.Dropdown.Item,{key:"variable"+n.title,title:n.title,value:n.value}))));case"Name Case":return _jsx(g.default.Fragment,{key:"case_fragment"+t},_jsx(i.Form.Separator,null),_jsx(i.Form.Dropdown,{id:"case"+t,key:"case"+t,title:"Name Case"+" "+(t+1),defaultValue:e[t].content[0],onChange:async n=>{S(n,t,[...e],c)}},P.map((n,o)=>_jsx(i.Form.Dropdown.Item,{key:"case"+o,title:n,value:n}))));case"Encode & Decode":return _jsx(g.default.Fragment,{key:"coder_fragment"+t},_jsx(i.Form.Separator,null),_jsx(i.Form.Dropdown,{id:"coder"+t,key:"coder"+t,title:"Encode & Decode"+" "+(t+1),defaultValue:e[t].content[0],onChange:async n=>{S(n,t,[...e],c)}},U.map(n=>_jsx(i.Form.Dropdown.Item,{key:"coder"+n,title:n,value:n}))));case"Transform":return _jsx(g.default.Fragment,{key:"transform_fragment"+t},_jsx(i.Form.Separator,null),_jsx(i.Form.Dropdown,{id:"transform"+t,key:"transform"+t,title:"Transform"+" "+(t+1),defaultValue:e[t].content[0],onChange:async n=>{S(n,t,[...e],c)}},B.map(n=>_jsx(i.Form.Dropdown.Item,{key:"convert"+n,title:n,value:n}))))}})}function Z(a){let c=a.tactions,r=a.setTactions;return _jsx(_jsxFragment,null,_jsx(i.ActionPanel.Section,{title:"Add Action"},_jsx(i.Action,{title:"Delete",icon:i.Icon.Plus,shortcut:{modifiers:["cmd"],key:"d"},onAction:async()=>{r([...c,{type:"Delete",content:[""]}])}}),_jsx(i.Action,{title:"Encode & Decode",icon:i.Icon.Plus,shortcut:{modifiers:["cmd"],key:"e"},onAction:async()=>{r([...c,{type:"Encode & Decode",content:[""]}])}}),_jsx(i.Action,{title:"Name Case",icon:i.Icon.Plus,shortcut:{modifiers:["cmd"],key:"n"},onAction:async()=>{r([...c,{type:"Name Case",content:[""]}])}}),_jsx(i.Action,{title:"Replace",icon:i.Icon.Plus,shortcut:{modifiers:["cmd"],key:"r"},onAction:async()=>{r([...c,{type:"Replace",content:[""]}])}}),_jsx(i.Action,{title:"Transform",icon:i.Icon.Plus,shortcut:{modifiers:["cmd"],key:"t"},onAction:async()=>{r([...c,{type:"Transform",content:[""]}])}}),_jsx(i.Action,{title:"Live Template",icon:i.Icon.Plus,shortcut:{modifiers:["cmd"],key:"l"},onAction:async()=>{r([...c,{type:"Live Template",content:[""]}])}})),_jsx(i.ActionPanel.Section,{title:"Remove Action"},_jsx(i.Action,{title:"Remove Last Action",icon:i.Icon.Trash,shortcut:{modifiers:["ctrl"],key:"x"},onAction:async()=>{let t=[...c];t.pop(),r(t)}}),_jsx(i.Action,{title:"Remove All Actions",icon:i.Icon.ExclamationMark,shortcut:{modifiers:["shift","ctrl"],key:"x"},onAction:async()=>{r([])}})))}function S(a,c,r,t,e=0){r[c].content[e]=a,t(r)}function G(){let[a,c]=(0,k.useState)([]),{closeMainWindow:r}=(0,l.getPreferenceValues)();return _jsx(l.Form,{actions:_jsx(ft,{tactions:a,setTactions:c,closeMainWindow:r})},Y(a,c),_jsx(l.Form.Description,{text:"  \u2318D       \u2318E       \u2318N        \u2318R            \u2318T              \u2318L"}),_jsx(l.Form.Description,{text:"Delete | Coder | Case | Replace | Transform | Template"}))}function ft(a){let{tactions:c,setTactions:r,closeMainWindow:t}=a;return _jsx(l.ActionPanel,null,_jsx(l.Action,{title:"Run Shortcut Now",icon:l.Icon.TwoArrowsClockwise,onAction:async()=>{let e=await K(),n=j(e.content,W(c));await l.Clipboard.paste(n),t?await(0,l.showHUD)("Pasted result to active app"):await(0,l.showToast)(l.Toast.Style.Success,"Pasted result to active app!")}}),_jsx(Z,{tactions:c,setTactions:r}),_jsx(l.ActionPanel.Section,null,_jsx(l.Action,{icon:l.Icon.Gear,title:"Open Extension Preferences",shortcut:{modifiers:["cmd"],key:","},onAction:l.openExtensionPreferences})))}module.exports=ot(pt);0&&(module.exports={});