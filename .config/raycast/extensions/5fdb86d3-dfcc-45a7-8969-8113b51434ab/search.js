var Ln=Object.create;var U=Object.defineProperty;var Bn=Object.getOwnPropertyDescriptor;var qn=Object.getOwnPropertyNames;var _n=Object.getPrototypeOf,Fn=Object.prototype.hasOwnProperty;var Ne=e=>U(e,"__esModule",{value:!0});var f=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),$n=(e,t)=>{Ne(e);for(var n in t)U(e,n,{get:t[n],enumerable:!0})},jn=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of qn(t))!Fn.call(e,r)&&r!=="default"&&U(e,r,{get:()=>t[r],enumerable:!(n=Bn(t,r))||n.enumerable});return e},I=e=>jn(Ne(U(e!=null?Ln(_n(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Be=f((ie,Le)=>{(function(e,t){typeof ie=="object"?Le.exports=t():typeof define=="function"&&define.amd?define(t):e.treeify=t()})(ie,function(){function e(s,i){var o=i?"\u2514":"\u251C";return s?o+="\u2500 ":o+="\u2500\u2500\u2510",o}function t(s,i){var o=[];for(var a in s)!s.hasOwnProperty(a)||i&&typeof s[a]=="function"||o.push(a);return o}function n(s,i,o,a,u,d,p){var c="",h=0,y,S,b=a.slice(0);if(b.push([i,o])&&a.length>0&&(a.forEach(function(w,T){T>0&&(c+=(w[1]?" ":"\u2502")+"  "),!S&&w[0]===i&&(S=!0)}),c+=e(s,o)+s,u&&(typeof i!="object"||i instanceof Date)&&(c+=": "+i),S&&(c+=" (circular ref.)"),p(c)),!S&&typeof i=="object"){var v=t(i,d);v.forEach(function(w){y=++h===v.length,n(w,i[w],y,b,u,d,p)})}}var r={};return r.asLines=function(s,i,o,a){var u=typeof o!="function"?o:!1;n(".",s,!1,[],i,u,a||o)},r.asTree=function(s,i,o){var a="";return n(".",s,!1,[],i,o,function(u){a+=u+`
`}),a},r})});var Ve=f((Hs,Ke)=>{Ke.exports=Xe;Xe.sync=Dn;var De=require("fs");function Un(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function He(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Un(t,n)}function Xe(e,t,n){De.stat(e,function(r,s){n(r,r?!1:He(s,e,t))})}function Dn(e,t){return He(De.statSync(e),e,t)}});var Qe=f((Xs,Je)=>{Je.exports=ze;ze.sync=Hn;var We=require("fs");function ze(e,t,n){We.stat(e,function(r,s){n(r,r?!1:Ye(s,t))})}function Hn(e,t){return Ye(We.statSync(e),t)}function Ye(e,t){return e.isFile()&&Xn(e,t)}function Xn(e,t){var n=e.mode,r=e.uid,s=e.gid,i=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),o=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),d=parseInt("001",8),p=a|u,c=n&d||n&u&&s===o||n&a&&r===i||n&p&&i===0;return c}});var et=f((Vs,Ze)=>{var Ks=require("fs"),X;process.platform==="win32"||global.TESTING_WINDOWS?X=Ve():X=Qe();Ze.exports=ae;ae.sync=Kn;function ae(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){ae(e,t||{},function(i,o){i?s(i):r(o)})})}X(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function Kn(e,t){try{return X.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var ce=f((Ws,ot)=>{var k=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",tt=require("path"),Vn=k?";":":",nt=et(),rt=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),st=(e,t)=>{let n=t.colon||Vn,r=e.match(/\//)||k&&e.match(/\\/)?[""]:[...k?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=k?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",i=k?s.split(n):[""];return k&&e.indexOf(".")!==-1&&i[0]!==""&&i.unshift(""),{pathEnv:r,pathExt:i,pathExtExe:s}},it=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:i}=st(e,t),o=[],a=d=>new Promise((p,c)=>{if(d===r.length)return t.all&&o.length?p(o):c(rt(e));let h=r[d],y=/^".*"$/.test(h)?h.slice(1,-1):h,S=tt.join(y,e),b=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+S:S;p(u(b,d,0))}),u=(d,p,c)=>new Promise((h,y)=>{if(c===s.length)return h(a(p+1));let S=s[c];nt(d+S,{pathExt:i},(b,v)=>{if(!b&&v)if(t.all)o.push(d+S);else return h(d+S);return h(u(d,p,c+1))})});return n?a(0).then(d=>n(null,d),n):a(0)},Wn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=st(e,t),i=[];for(let o=0;o<n.length;o++){let a=n[o],u=/^".*"$/.test(a)?a.slice(1,-1):a,d=tt.join(u,e),p=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+d:d;for(let c=0;c<r.length;c++){let h=p+r[c];try{if(nt.sync(h,{pathExt:s}))if(t.all)i.push(h);else return h}catch{}}}if(t.all&&i.length)return i;if(t.nothrow)return null;throw rt(e)};ot.exports=it;it.sync=Wn});var le=f((zs,ue)=>{"use strict";var at=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ue.exports=at;ue.exports.default=at});var dt=f((Ys,lt)=>{"use strict";var ct=require("path"),zn=ce(),Yn=le();function ut(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,i=s&&process.chdir!==void 0&&!process.chdir.disabled;if(i)try{process.chdir(e.options.cwd)}catch{}let o;try{o=zn.sync(e.command,{path:n[Yn({env:n})],pathExt:t?ct.delimiter:void 0})}catch{}finally{i&&process.chdir(r)}return o&&(o=ct.resolve(s?e.options.cwd:"",o)),o}function Jn(e){return ut(e)||ut(e,!0)}lt.exports=Jn});var ft=f((Js,fe)=>{"use strict";var de=/([()\][%!^"`<>&|;, *?])/g;function Qn(e){return e=e.replace(de,"^$1"),e}function Zn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(de,"^$1"),t&&(e=e.replace(de,"^$1")),e}fe.exports.command=Qn;fe.exports.argument=Zn});var pt=f((Qs,mt)=>{"use strict";mt.exports=/^#!(.*)/});var gt=f((Zs,ht)=>{"use strict";var er=pt();ht.exports=(e="")=>{let t=e.match(er);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var St=f((ei,yt)=>{"use strict";var me=require("fs"),tr=gt();function nr(e){let t=150,n=Buffer.alloc(t),r;try{r=me.openSync(e,"r"),me.readSync(r,n,0,t,0),me.closeSync(r)}catch{}return tr(n.toString())}yt.exports=nr});var vt=f((ti,bt)=>{"use strict";var rr=require("path"),wt=dt(),xt=ft(),sr=St(),ir=process.platform==="win32",or=/\.(?:com|exe)$/i,ar=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function cr(e){e.file=wt(e);let t=e.file&&sr(e.file);return t?(e.args.unshift(e.file),e.command=t,wt(e)):e.file}function ur(e){if(!ir)return e;let t=cr(e),n=!or.test(t);if(e.options.forceShell||n){let r=ar.test(t);e.command=rr.normalize(e.command),e.command=xt.command(e.command),e.args=e.args.map(i=>xt.argument(i,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function lr(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:ur(r)}bt.exports=lr});var Tt=f((ni,Et)=>{"use strict";var pe=process.platform==="win32";function he(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function dr(e,t){if(!pe)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let i=It(s,t,"spawn");if(i)return n.call(e,"error",i)}return n.apply(e,arguments)}}function It(e,t){return pe&&e===1&&!t.file?he(t.original,"spawn"):null}function fr(e,t){return pe&&e===1&&!t.file?he(t.original,"spawnSync"):null}Et.exports={hookChildProcess:dr,verifyENOENT:It,verifyENOENTSync:fr,notFoundError:he}});var kt=f((ri,A)=>{"use strict";var Pt=require("child_process"),ge=vt(),ye=Tt();function Ct(e,t,n){let r=ge(e,t,n),s=Pt.spawn(r.command,r.args,r.options);return ye.hookChildProcess(s,r),s}function mr(e,t,n){let r=ge(e,t,n),s=Pt.spawnSync(r.command,r.args,r.options);return s.error=s.error||ye.verifyENOENTSync(s.status,r),s}A.exports=Ct;A.exports.spawn=Ct;A.exports.sync=mr;A.exports._parse=ge;A.exports._enoent=ye});var Gt=f((si,At)=>{"use strict";At.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Nt=f((ii,F)=>{"use strict";var _=require("path"),Ot=le(),Rt=e=>{e={cwd:process.cwd(),path:process.env[Ot()],execPath:process.execPath,...e};let t,n=_.resolve(e.cwd),r=[];for(;t!==n;)r.push(_.join(n,"node_modules/.bin")),t=n,n=_.resolve(n,"..");let s=_.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(_.delimiter)};F.exports=Rt;F.exports.default=Rt;F.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=Ot({env:t});return e.path=t[n],t[n]=F.exports(e),t}});var Bt=f((oi,Se)=>{"use strict";var Lt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};Se.exports=Lt;Se.exports.default=Lt});var _t=f((ai,V)=>{"use strict";var pr=Bt(),K=new WeakMap,qt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",i=function(...o){if(K.set(i,++r),r===1)n=e.apply(this,o),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return pr(i,e),K.set(i,r),i};V.exports=qt;V.exports.default=qt;V.exports.callCount=e=>{if(!K.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return K.get(e)}});var Ft=f(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.SIGNALS=void 0;var hr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];W.SIGNALS=hr});var we=f(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.SIGRTMAX=G.getRealtimeSignals=void 0;var gr=function(){let e=jt-$t+1;return Array.from({length:e},yr)};G.getRealtimeSignals=gr;var yr=function(e,t){return{name:`SIGRT${t+1}`,number:$t+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},$t=34,jt=64;G.SIGRTMAX=jt});var Mt=f(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.getSignals=void 0;var Sr=require("os"),wr=Ft(),xr=we(),br=function(){let e=(0,xr.getRealtimeSignals)();return[...wr.SIGNALS,...e].map(vr)};z.getSignals=br;var vr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:i}){let{signals:{[e]:o}}=Sr.constants,a=o!==void 0;return{name:e,number:a?o:t,description:n,supported:a,action:r,forced:s,standard:i}}});var Dt=f(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.signalsByNumber=O.signalsByName=void 0;var Ir=require("os"),Ut=Mt(),Er=we(),Tr=function(){return(0,Ut.getSignals)().reduce(Pr,{})},Pr=function(e,{name:t,number:n,description:r,supported:s,action:i,forced:o,standard:a}){return{...e,[t]:{name:t,number:n,description:r,supported:s,action:i,forced:o,standard:a}}},Cr=Tr();O.signalsByName=Cr;var kr=function(){let e=(0,Ut.getSignals)(),t=Er.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>Ar(s,e));return Object.assign({},...n)},Ar=function(e,t){let n=Gr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:i,action:o,forced:a,standard:u}=n;return{[e]:{name:r,number:e,description:s,supported:i,action:o,forced:a,standard:u}}},Gr=function(e,t){let n=t.find(({name:r})=>Ir.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Or=kr();O.signalsByNumber=Or});var Xt=f((fi,Ht)=>{"use strict";var{signalsByName:Rr}=Dt(),Nr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:i,isCanceled:o})=>e?`timed out after ${t} milliseconds`:o?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:i!==void 0?`failed with exit code ${i}`:"failed",Lr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:i,command:o,escapedCommand:a,timedOut:u,isCanceled:d,killed:p,parsed:{options:{timeout:c}}})=>{i=i===null?void 0:i,s=s===null?void 0:s;let h=s===void 0?void 0:Rr[s].description,y=r&&r.code,b=`Command ${Nr({timedOut:u,timeout:c,errorCode:y,signal:s,signalDescription:h,exitCode:i,isCanceled:d})}: ${o}`,v=Object.prototype.toString.call(r)==="[object Error]",w=v?`${b}
${r.message}`:b,T=[w,t,e].filter(Boolean).join(`
`);return v?(r.originalMessage=r.message,r.message=T):r=new Error(T),r.shortMessage=w,r.command=o,r.escapedCommand=a,r.exitCode=i,r.signal=s,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=d,r.killed=p&&!u,r};Ht.exports=Lr});var Vt=f((mi,xe)=>{"use strict";var Y=["stdin","stdout","stderr"],Br=e=>Y.some(t=>e[t]!==void 0),Kt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return Y.map(r=>e[r]);if(Br(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Y.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,Y.length);return Array.from({length:n},(r,s)=>t[s])};xe.exports=Kt;xe.exports.node=e=>{let t=Kt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Wt=f((pi,J)=>{J.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&J.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&J.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Zt=f((hi,L)=>{var m=global.process;typeof m!="object"||!m?L.exports=function(){}:(zt=require("assert"),R=Wt(),Yt=/^win/i.test(m.platform),$=require("events"),typeof $!="function"&&($=$.EventEmitter),m.__signal_exit_emitter__?x=m.__signal_exit_emitter__:(x=m.__signal_exit_emitter__=new $,x.count=0,x.emitted={}),x.infinite||(x.setMaxListeners(1/0),x.infinite=!0),L.exports=function(e,t){if(global.process===m){zt.equal(typeof e,"function","a callback must be provided for exit handler"),N===!1&&be();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){x.removeListener(n,e),x.listeners("exit").length===0&&x.listeners("afterexit").length===0&&Q()};return x.on(n,e),r}},Q=function(){!N||global.process!==m||(N=!1,R.forEach(function(t){try{m.removeListener(t,Z[t])}catch{}}),m.emit=ee,m.reallyExit=ve,x.count-=1)},L.exports.unload=Q,C=function(t,n,r){x.emitted[t]||(x.emitted[t]=!0,x.emit(t,n,r))},Z={},R.forEach(function(e){Z[e]=function(){if(m===global.process){var n=m.listeners(e);n.length===x.count&&(Q(),C("exit",null,e),C("afterexit",null,e),Yt&&e==="SIGHUP"&&(e="SIGINT"),m.kill(m.pid,e))}}}),L.exports.signals=function(){return R},N=!1,be=function(){N||m!==global.process||(N=!0,x.count+=1,R=R.filter(function(t){try{return m.on(t,Z[t]),!0}catch{return!1}}),m.emit=Qt,m.reallyExit=Jt)},L.exports.load=be,ve=m.reallyExit,Jt=function(t){m===global.process&&(m.exitCode=t||0,C("exit",m.exitCode,null),C("afterexit",m.exitCode,null),ve.call(m,m.exitCode))},ee=m.emit,Qt=function(t,n){if(t==="exit"&&m===global.process){n!==void 0&&(m.exitCode=n);var r=ee.apply(this,arguments);return C("exit",m.exitCode,null),C("afterexit",m.exitCode,null),r}else return ee.apply(this,arguments)});var zt,R,Yt,$,x,Q,C,Z,N,be,ve,Jt,ee,Qt});var tn=f((gi,en)=>{"use strict";var qr=require("os"),_r=Zt(),Fr=1e3*5,$r=(e,t="SIGTERM",n={})=>{let r=e(t);return jr(e,t,n,r),r},jr=(e,t,n,r)=>{if(!Mr(t,n,r))return;let s=Dr(n),i=setTimeout(()=>{e("SIGKILL")},s);i.unref&&i.unref()},Mr=(e,{forceKillAfterTimeout:t},n)=>Ur(e)&&t!==!1&&n,Ur=e=>e===qr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Dr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Fr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Hr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Xr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Kr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,i=new Promise((a,u)=>{s=setTimeout(()=>{Xr(e,n,u)},t)}),o=r.finally(()=>{clearTimeout(s)});return Promise.race([i,o])},Vr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Wr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=_r(()=>{e.kill()});return r.finally(()=>{s()})};en.exports={spawnedKill:$r,spawnedCancel:Hr,setupTimeout:Kr,validateTimeout:Vr,setExitHandler:Wr}});var rn=f((yi,nn)=>{"use strict";var P=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";P.writable=e=>P(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";P.readable=e=>P(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";P.duplex=e=>P.writable(e)&&P.readable(e);P.transform=e=>P.duplex(e)&&typeof e._transform=="function";nn.exports=P});var on=f((Si,sn)=>{"use strict";var{PassThrough:zr}=require("stream");sn.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let i=new zr({objectMode:s});n&&i.setEncoding(n);let o=0,a=[];return i.on("data",u=>{a.push(u),s?o=a.length:o+=u.length}),i.getBufferedValue=()=>t?a:r?Buffer.concat(a,o):a.join(""),i.getBufferedLength=()=>o,i}});var an=f((wi,j)=>{"use strict";var{constants:Yr}=require("buffer"),Jr=require("stream"),{promisify:Qr}=require("util"),Zr=on(),es=Qr(Jr.pipeline),Ie=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function Ee(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=Zr(t);return await new Promise((s,i)=>{let o=a=>{a&&r.getBufferedLength()<=Yr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),i(a)};(async()=>{try{await es(e,r),s()}catch(a){o(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&o(new Ie)})}),r.getBufferedValue()}j.exports=Ee;j.exports.buffer=(e,t)=>Ee(e,{...t,encoding:"buffer"});j.exports.array=(e,t)=>Ee(e,{...t,array:!0});j.exports.MaxBufferError=Ie});var un=f((xi,cn)=>{"use strict";var{PassThrough:ts}=require("stream");cn.exports=function(){var e=[],t=new ts({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(i){return Array.isArray(i)?(i.forEach(n),this):(e.push(i),i.once("end",s.bind(null,i)),i.once("error",t.emit.bind(t,"error")),i.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(i){e=e.filter(function(o){return o!==i}),!e.length&&t.readable&&t.end()}}});var mn=f((bi,fn)=>{"use strict";var ln=rn(),dn=an(),ns=un(),rs=(e,t)=>{t===void 0||e.stdin===void 0||(ln(t)?t.pipe(e.stdin):e.stdin.end(t))},ss=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=ns();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Te=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Pe=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?dn(e,{encoding:t,maxBuffer:r}):dn.buffer(e,{maxBuffer:r})},is=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:i},o)=>{let a=Pe(e,{encoding:r,buffer:s,maxBuffer:i}),u=Pe(t,{encoding:r,buffer:s,maxBuffer:i}),d=Pe(n,{encoding:r,buffer:s,maxBuffer:i*2});try{return await Promise.all([o,a,u,d])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},Te(e,a),Te(t,u),Te(n,d)])}},os=({input:e})=>{if(ln(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};fn.exports={handleInput:rs,makeAllStream:ss,getSpawnedResult:is,validateInputSync:os}});var hn=f((vi,pn)=>{"use strict";var as=(async()=>{})().constructor.prototype,cs=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(as,e)]),us=(e,t)=>{for(let[n,r]of cs){let s=typeof t=="function"?(...i)=>Reflect.apply(r.value,t(),i):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:s})}return e},ls=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});pn.exports={mergePromise:us,getSpawnedPromise:ls}});var Sn=f((Ii,yn)=>{"use strict";var gn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],ds=/^[\w.-]+$/,fs=/"/g,ms=e=>typeof e!="string"||ds.test(e)?e:`"${e.replace(fs,'\\"')}"`,ps=(e,t)=>gn(e,t).join(" "),hs=(e,t)=>gn(e,t).map(n=>ms(n)).join(" "),gs=/ +/g,ys=e=>{let t=[];for(let n of e.trim().split(gs)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};yn.exports={joinCommand:ps,getEscapedCommand:hs,parseCommand:ys}});var Tn=f((Ei,B)=>{"use strict";var Ss=require("path"),Ce=require("child_process"),ws=kt(),xs=Gt(),bs=Nt(),vs=_t(),te=Xt(),wn=Vt(),{spawnedKill:Is,spawnedCancel:Es,setupTimeout:Ts,validateTimeout:Ps,setExitHandler:Cs}=tn(),{handleInput:ks,getSpawnedResult:As,makeAllStream:Gs,validateInputSync:Os}=mn(),{mergePromise:xn,getSpawnedPromise:Rs}=hn(),{joinCommand:bn,parseCommand:vn,getEscapedCommand:In}=Sn(),Ns=1e3*1e3*100,Ls=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let i=t?{...process.env,...e}:e;return n?bs.env({env:i,cwd:r,execPath:s}):i},En=(e,t,n={})=>{let r=ws._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:Ns,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Ls(n),n.stdio=wn(n),process.platform==="win32"&&Ss.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},M=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?xs(t):t,ne=(e,t,n)=>{let r=En(e,t,n),s=bn(e,t),i=In(e,t);Ps(r.options);let o;try{o=Ce.spawn(r.file,r.args,r.options)}catch(y){let S=new Ce.ChildProcess,b=Promise.reject(te({error:y,stdout:"",stderr:"",all:"",command:s,escapedCommand:i,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return xn(S,b)}let a=Rs(o),u=Ts(o,r.options,a),d=Cs(o,r.options,u),p={isCanceled:!1};o.kill=Is.bind(null,o.kill.bind(o)),o.cancel=Es.bind(null,o,p);let h=vs(async()=>{let[{error:y,exitCode:S,signal:b,timedOut:v},w,T,se]=await As(o,r.options,d),Ae=M(r.options,w),Ge=M(r.options,T),Oe=M(r.options,se);if(y||S!==0||b!==null){let Re=te({error:y,exitCode:S,signal:b,stdout:Ae,stderr:Ge,all:Oe,command:s,escapedCommand:i,parsed:r,timedOut:v,isCanceled:p.isCanceled,killed:o.killed});if(!r.options.reject)return Re;throw Re}return{command:s,escapedCommand:i,exitCode:0,stdout:Ae,stderr:Ge,all:Oe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ks(o,r.options.input),o.all=Gs(o,r.options),xn(o,h)};B.exports=ne;B.exports.sync=(e,t,n)=>{let r=En(e,t,n),s=bn(e,t),i=In(e,t);Os(r.options);let o;try{o=Ce.spawnSync(r.file,r.args,r.options)}catch(d){throw te({error:d,stdout:"",stderr:"",all:"",command:s,escapedCommand:i,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=M(r.options,o.stdout,o.error),u=M(r.options,o.stderr,o.error);if(o.error||o.status!==0||o.signal!==null){let d=te({stdout:a,stderr:u,error:o.error,signal:o.signal,exitCode:o.status,command:s,escapedCommand:i,parsed:r,timedOut:o.error&&o.error.code==="ETIMEDOUT",isCanceled:!1,killed:o.signal!==null});if(!r.options.reject)return d;throw d}return{command:s,escapedCommand:i,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};B.exports.command=(e,t)=>{let[n,...r]=vn(e);return ne(n,r,t)};B.exports.commandSync=(e,t)=>{let[n,...r]=vn(e);return ne.sync(n,r,t)};B.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=wn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:i=process.execPath,nodeOptions:o=s}=n;return ne(i,[...o,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});$n(exports,{default:()=>Rn});var l=I(require("@raycast/api")),re=I(require("react")),On=I(Be());var qe=I(require("@raycast/api")),_e=I(require("url"));function oe(e){return"```\n"+e+"\n```"}function q(e){if(!e)return e;let t={};for(let n in e)Object.hasOwnProperty.call(e,n)&&(e[n]??!1)&&(t[n]=e[n]);return t}function Fe(e,t){try{let n=new _e.URL(t).hostname;return`https://www.google.com/s2/favicons?sz=${e}&domain=${n}`}catch{return qe.Icon.Globe}}function $e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var E=I(require("@raycast/api")),H=I(require("react"));var D="sessionToken";async function Mn(e){try{let t=await(0,E.showToast)(E.ToastStyle.Animated,"Logging in...","It may takes some time");await e.login(),t.hide()}catch{(0,E.showToast)(E.ToastStyle.Failure,"An error occurred during login!","Please check your credentials")}}function je(e){let[t,n]=(0,H.useState)({});return(0,H.useEffect)(()=>{async function r(){let s=await(0,E.getLocalStorageItem)(D);switch(await e.status(s)){case"unlocked":n({sessionToken:s,vaultStatus:"unlocked"});break;case"locked":n({vaultStatus:"locked"});break;case"unauthenticated":await Mn(e),n({vaultStatus:"locked"})}}r()},[]),[t,async r=>{r?((0,E.setLocalStorageItem)(D,r),n({sessionToken:r,vaultStatus:"unlocked"})):((0,E.removeLocalStorageItem)(D),n({vaultStatus:"locked"}))}]}var g=I(require("@raycast/api"));function Me(){return(0,g.showToast)(g.ToastStyle.Failure,"Bitwarden CLI not found"),_jsx(g.Detail,{markdown:`# The Bitwarden CLI was not found
## Please check that:

1. The Bitwarden CLI is [correctly installed](https://bitwarden.com/help/article/cli/#download-and-install)
1. If you did not install bitwarden using brew, please check that path of the installation matches the \`Bitwarden CLI Installation Path\` extension setting
`,actions:_jsx(g.ActionPanel,null,_jsx(g.CopyToClipboardAction,{title:"Copy Homebrew Installation Command",content:"brew install bitwarden-cli"}))})}function Ue(e){async function t(n){try{let r=await(0,g.showToast)(g.ToastStyle.Animated,"Unlocking Vault...","Please wait"),s=await e.bitwardenApi.unlock(n.password);r.hide(),e.setSessionToken(s)}catch{(0,g.showToast)(g.ToastStyle.Failure,"Failed to unlock vault","Invalid credentials")}}return _jsx(g.Form,{actions:_jsx(g.ActionPanel,null,_jsx(g.SubmitFormAction,{title:"Unlock",onSubmit:t}))},_jsx(g.Form.TextField,{id:"password",title:"Master Password"}))}var Pn=I(require("@raycast/api")),Cn=I(Tn()),kn=I(require("fs")),An=I(ce()),Gn="/usr/local/bin:/opt/homebrew/bin",ke=class{constructor(){let{cliPath:t,clientId:n,clientSecret:r}=(0,Pn.getPreferenceValues)();if(this.cliPath=t||An.default.sync("bw",{path:Gn}),!(0,kn.existsSync)(this.cliPath))throw Error(`Invalid Cli Path: ${this.cliPath}`);this.env={BW_CLIENTSECRET:r.trim(),BW_CLIENTID:n.trim(),PATH:Gn}}async sync(t){await this.exec(["sync","--session",t])}async login(){await this.exec(["login","--apikey"])}async listItems(t,n){let{stdout:r}=await this.exec(["list",t,"--session",n]);return JSON.parse(r)}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return n}async lock(){await this.exec(["lock"])}async status(t){let{stdout:n}=await this.exec(t?["status","--session",t]:["status"]);return JSON.parse(n).status}async exec(t){return(0,Cn.default)(this.cliPath,t,{env:this.env})}};var{fetchFavicons:Bs}=(0,l.getPreferenceValues)();function Rn(){try{let e=new ke,[t,n]=je(e);return t.vaultStatus==="locked"?_jsx(Ue,{setSessionToken:n,bitwardenApi:e}):_jsx(qs,{bitwardenApi:e,sessionToken:t.sessionToken,vaultStatus:t.vaultStatus})}catch{return _jsx(Me,null)}}function qs(e){let{bitwardenApi:t,sessionToken:n,vaultStatus:r}=e,[s,i]=(0,re.useState)(),o={};for(let c of s?.folders||[])c.id&&(o[c.id]=c);async function a(c){try{let[h,y]=await Promise.all([t.listItems("items",c),t.listItems("folders",c)]);i({items:h,folders:y})}catch{(0,l.showToast)(l.ToastStyle.Failure,"Failed to search vault")}}(0,re.useEffect)(()=>{r==="unlocked"&&n&&a(n)},[n]);async function u(){if(n){let c=await(0,l.showToast)(l.ToastStyle.Animated,"Syncing Items...");await t.sync(n),await a(n),await c.hide()}}let d=[],p=[];for(let c of s?.items||[])c.favorite?d.push(c):p.push(c);return _jsx(l.List,{isLoading:typeof s=="undefined"},_jsx(l.List.Section,{title:"Favorites"},d.map(c=>_jsx(Nn,{key:c.id,item:c,folder:c.folderId?o[c.folderId]:void 0,refreshItems:u}))),_jsx(l.List.Section,{title:"Others"},p.map(c=>_jsx(Nn,{key:c.id,item:c,folder:c.folderId?o[c.folderId]:void 0,refreshItems:u}))))}function _s(e){let t=e.login?.uris?.[0]?.uri;return Bs&&t?Fe(64,t):{1:l.Icon.Globe,2:l.Icon.TextDocument,3:l.Icon.List,4:l.Icon.Person}[e.type]}function Nn(e){let{item:t,folder:n,refreshItems:r}=e,{name:s,notes:i,identity:o,login:a,secureNote:u,fields:d,passwordHistory:p,card:c}=t,h=[];n&&h.push(`\u{1F4C2} ${n.name}`),t.favorite&&h.push("\u2B50\uFE0F");let y=Object.fromEntries(d?.map(w=>[w.name,w.value])||[]),S=Object.fromEntries(a?.uris?.filter(w=>w.uri).map((w,T)=>[`uri${T+1}`,w.uri])||[]),b=q({name:s,notes:i,identity:q(o),login:q(a),card:q(c),secureNote:u,fields:d,folder:n?.name,passwordHistory:p}),v=On.default.asTree(b,!0,!1);return _jsx(l.List.Item,{id:t.id,title:t.name,keywords:t.name.split(/\W/),accessoryTitle:h?h.join("  "):void 0,icon:_s(t),subtitle:t.login?.username||void 0,actions:_jsx(l.ActionPanel,null,t.login?.password?_jsx(l.CopyToClipboardAction,{title:"Copy Password",content:t.login.password}):null,t.notes?_jsx(l.PushAction,{title:"Show Secure Note",icon:l.Icon.TextDocument,target:_jsx(l.Detail,{markdown:oe(t.notes),actions:_jsx(l.ActionPanel,null,_jsx(l.CopyToClipboardAction,{title:"Copy Secure Notes",content:t.notes}))})}):null,_jsx(l.ActionPanel.Submenu,{shortcut:{modifiers:["cmd","shift"],key:"c"},icon:l.Icon.Clipboard,title:"Copy Property"},Object.entries({username:a?.username,folder:n?.name,notes:i,...c,...o,...y,...S}).map(([w,T],se)=>T?_jsx(l.CopyToClipboardAction,{key:se,title:$e(w),content:T}):null)),_jsx(l.PushAction,{title:"Show Details",icon:l.Icon.Text,shortcut:{modifiers:["cmd"],key:"i"},target:_jsx(l.Detail,{markdown:oe(v),actions:_jsx(l.ActionPanel,null,_jsx(l.CopyToClipboardAction,{content:v}))})}),_jsx(l.ActionPanel.Item,{title:"Refresh Items",shortcut:{modifiers:["cmd"],key:"r"},icon:l.Icon.ArrowClockwise,onAction:r}))})}0&&(module.exports={});
