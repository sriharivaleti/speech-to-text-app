(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Z1A6:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("IP2g"),c=n("wHSu"),o=n("qNNu"),s=n.n(o);function u(){localStorage.clear(),document.getElementById("storage").innerHTML=""}function m(){window.location.reload(!0)}var g=function(){var e=document.getElementById("final").textContent,t=document.querySelector("ul.notes"),n="".concat((new Date).toLocaleString().split(",").join(" "));t.innerHTML=" ".concat(n,":<br> ").concat(e," <br>");var o=document.getElementById("storagequota-msg");try{setInterval(function(){localStorage.setItem("note-"+n," "+e)},1e3)}catch(e){"QUOTA_EXCEEDED_ERR"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||(o.innerHTML="Local Storage Quota Exceeded!")}localStorage.setItem("note-"+n," "+e)},p=function(){for(var e=[],t=document.getElementById("note"),n=0;n<localStorage.length;n++){t.innerHTML="".concat(localStorage.key(n),"<li>").concat(localStorage.getItem(localStorage.key(n)),"</li><br>"),e.push("".concat(t.innerHTML)),document.getElementById("storage").innerHTML="".concat(e.join(""))}},d=function(){var e=document.getElementById("storage").textContent,t=JSON.stringify(e),n=new Blob([t],{type:"text/plain"}),o=document.getElementById("save");o.download="local-storage.txt",null!==window.URL?(o.href=window.URL.createObjectURL(n),o.target="_blank"):(o.href=window.URL.createObjectURL(n),o.target="_blank",o.style.display="none",document.body.appendChild(o.download))};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return(f="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=w||window.webkitSpeechRecognition,S=new w;S.continuous=!0,S.interimResults=!0,S.lang="en-US";var v=function(e){function i(){var e,t,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=this,o=(e=y(i)).call.apply(e,[this].concat(r)),E(h(h(t=!o||"object"!==f(o)&&"function"!=typeof o?h(n):o)),"state",{listening:!1}),E(h(h(t)),"toggleListen",function(){t.setState({listening:!t.state.listening},t.handleListen)}),E(h(h(t)),"handleListen",function(){console.log("listening?",t.state.listening),t.state.listening?(S.start(),S.onend=function(){console.log("...continue listening..."),S.start()}):(S.stop(),S.onend=function(){console.log("Stopped listening per click")}),S.onstart=function(){console.log("Listening!")};var l="";S.onresult=function(e){for(var t="",n=e.resultIndex;n<e.results.length;n++){var o=e.results[n][0].transcript;e.results[n].isFinal?l+=o+" ":t+=o}document.getElementById("interim").innerHTML=t;var a=(document.getElementById("final").innerHTML=l).split(" "),r=a.slice(-3,-1);console.log("stopCmd",r),"stop"===r[0]&&"listening"===r[1]&&(S.stop(),S.onend=function(){console.log("Stopped listening per command");var e=a.slice(0,-3).join(" ");document.getElementById("final").innerHTML=e})},S.onerror=function(e){console.log("Error occurred in recognition: "+e.error)}}),t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(i,a["Component"]),t=i,(n=[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:s.a.appTitle},"Voice Controlled Notes App"),r.a.createElement("p",{className:s.a.pageDescription},"A tiny app that allows you to take notes by recording your voice"),r.a.createElement("h3",{className:s.a.noBrowserSupport},"Sorry, Your Browser Does not Support the Web Speech API. Try Opening This Demo In Google Chrome."),r.a.createElement("div",{className:s.a.Speech},r.a.createElement("h3",null,"Add New Note"),r.a.createElement("div",{className:"input-single"},r.a.createElement("p",null,"Create a new note by using voice recognition."),r.a.createElement("p",null,"This app is best used on desktop, because there is a",r.a.createElement("strong",{className:s.a.strong}," repeat bug "),"on ",r.a.createElement("strong",{className:s.a.strong},"Google Chrome mobile"),"."),r.a.createElement("p",null,"Access detailed instructions ",r.a.createElement("a",{className:s.a.documentation,href:"https://github.com/interglobalmedia/speech-to-text-app",target:"blank",rel:"noopener noreferrer"},"here"),"."),r.a.createElement("p",{id:"recording-instructions"},"Press the blue",r.a.createElement("strong",{className:s.a.strong}," Start Recognition")," button and allow access."),r.a.createElement("div",{className:s.a.supportMsg,id:"support-msg"},"webkitSpeechRecognition"in window?"Your browser supports speech recognition.":"Sorry but your browser does not support speech recognition."),r.a.createElement("div",{className:s.a.storagequotaMsg,id:"storagequota-msg"}),r.a.createElement("button",{onClick:g,className:s.a.saveNote,title:"Save Note"},"Save Note"),r.a.createElement("button",{onClick:d,className:s.a.fileSaveButton},r.a.createElement("a",{className:s.a.download,id:"save",title:"Download Notes"},"Download")),r.a.createElement("button",{onClick:m,className:s.a.reset,title:"Clear All Notes"},"Refresh")),r.a.createElement("div",{id:"interim",className:s.a.interim,rows:"3"},"Interim draft goes here"),r.a.createElement("div",{id:"final",className:s.a.final,rows:"3"},"Final draft goes here"),r.a.createElement("button",{id:"microphone-btn",className:s.a.button,onClick:this.toggleListen},r.a.createElement(l.FontAwesomeIcon,{icon:c.faPlayCircle})),r.a.createElement("h3",null,"My Saved Notes"),r.a.createElement("button",{className:s.a.getStorage,onClick:p,title:"Get Storage"},"Get Storage"),r.a.createElement("button",{onClick:u,className:s.a.deleteAll,title:"Clear All Notes"},"Clear Storage"),r.a.createElement("ul",{id:"storage"},r.a.createElement("li",{id:"note"})),r.a.createElement("ul",{className:"notes"})))}}])&&b(t.prototype,n),o&&b(t,o),i}();t.default=v},qNNu:function(e,t,n){e.exports={button:"button___11gZl",container:"container___saxCb",pageDescription:"pageDescription___37Ar6",noBrowserSupport:"noBrowserSupport___3XAWR",strong:"strong___3ytUx",documentation:"documentation___3hoRn",Speech:"Speech___30tAq",saveNote:"saveNote___1d_mJ",deleteAll:"deleteAll___1NXIh",reset:"reset___1FIGi",getStorage:"getStorage___3kUh0",fileSaveButton:"fileSaveButton___NvW4t",download:"download___2GRhE",storagequotaMsg:"storagequotaMsg___344nw",interim:"interim___2U4mr",final:"final___1Pum7","recording-instructions":"recording-instructions___1Evml"}}}]);