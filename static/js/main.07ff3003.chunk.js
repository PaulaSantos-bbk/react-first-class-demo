(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),l=a.n(r),c=(a(12),a(1)),i=a(2),s=a(5),u=(a(13),a(14),function(e){var t=e.children,a=e.disabled,n=e.onClick,r=void 0===n?function(){return null}:n,l=e.text,c=void 0===l?"click me badly!":l;return o.a.createElement("button",{className:"btn",onClick:r,disabled:a},t||c)}),m=(a(15),function(e){var t=e.children,a=e.onSubmit;return o.a.createElement("form",{className:"form",onSubmit:a},t,o.a.createElement(u,{disabled:!a},"Submit"))}),d=a(6),b=function(e){var t=e.label,a=e.type,n=void 0===a?"text":a,r=Object(d.a)(e,["label","type"]);return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("label",{htmlFor:r.id},t),o.a.createElement("input",Object.assign({type:n},r)))};var p=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1],l=function(e){return r(Object(i.a)(Object(i.a)({},a),{},Object(c.a)({},e.target.id,e.target.value)))};return o.a.createElement("div",{className:"app"},o.a.createElement(m,{onSubmit:a.password&&a.password===a.confirmPassword?function(e){e.preventDefault(),console.log(a)}:null},o.a.createElement(b,{id:"name",label:"Your name:",onChange:l,type:"text",value:a.name}),o.a.createElement(b,{id:"email",label:"Your email:",onChange:l,type:"email",value:a.email}),o.a.createElement(b,{id:"password",label:"Your password:",onChange:l,type:"password",value:a.password})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.07ff3003.chunk.js.map