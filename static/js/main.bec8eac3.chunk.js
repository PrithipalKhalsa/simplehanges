(this.webpackJsonpsimplehangs=this.webpackJsonpsimplehangs||[]).push([[0],{24:function(e,t,a){e.exports=a(49)},29:function(e,t,a){},30:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),l=(a(29),a(4)),o=a(11),i=(a(30),function(){var e=Object(n.useState)(3),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(7),i=Object(l.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(3),E=Object(l.a)(d,2),p=E[0],b=E[1],v=Object(n.useState)(120),f=Object(l.a)(v,2),N=f[0],g=f[1],h=Object(n.useState)(120),j=Object(l.a)(h,2),O=j[0],w=j[1];return Object(n.useEffect)((function(){w(function(e){e=Number(e);var t=Math.floor(e%3600/60),a=Math.floor(e%3600%60);return(t>0?t+":":"")+(a>0?a:"00")}(N))}),[N]),c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("h1",null,"Simple Hangs"),c.a.createElement("div",null,c.a.createElement("h4",null,"Reps"),c.a.createElement("div",{className:"number-wrapper"},c.a.createElement("div",{onClick:function(){r(a-1)},className:"btn incr"},"\u2212"),c.a.createElement("div",{className:"number-status"},a),c.a.createElement("div",{onClick:function(){r(a+1)},className:"btn incr"},"+")),c.a.createElement("h4",null,"Hang Time (seconds)"),c.a.createElement("div",{className:"number-wrapper"},c.a.createElement("div",{onClick:function(){u(m-1)},className:"btn incr"},"\u2212"),c.a.createElement("div",{className:"number-status"},m),c.a.createElement("div",{onClick:function(){u(m+1)},className:"btn incr"},"+")),c.a.createElement("h4",null,"Off Time (seconds)"),c.a.createElement("div",{className:"number-wrapper"},c.a.createElement("div",{onClick:function(){b(p-1)},className:"btn incr"},"\u2212"),c.a.createElement("div",{className:"number-status"},p),c.a.createElement("div",{onClick:function(){b(p+1)},className:"btn incr"},"+")),c.a.createElement("h4",null,"Rest Time"),c.a.createElement("div",{className:"number-wrapper"},c.a.createElement("div",{onClick:function(){g(N-30)},className:"btn incr"},"\u2212"),c.a.createElement("div",{className:"number-status"},O),c.a.createElement("div",{onClick:function(){g(N+30)},className:"btn incr"},"+"))),c.a.createElement(o.b,{to:"/timer?reps=".concat(a,"&h=").concat(m,"&r=").concat(p,"&rr=").concat(N)},c.a.createElement("div",{className:"sqr-btn",type:"submit"},"Start Hangs")))}),m=a(23),u=a(22),d=a.n(u),E=a(16),p=(a(48),function(e){var t=e.toggle,a=e.setToggle,n=e.myRef;return c.a.createElement("div",{className:"controles"},t?c.a.createElement("div",{className:"sqr-btn",onClick:function(){return console.log(n),n.current.api.start(),void a(!t)}},"Play"):c.a.createElement("div",{className:"sqr-btn",onClick:function(){return console.log(n),n.current.api.pause(),void a(!t)}},"Pause"))}),b=function(e){var t=e.sets,a=e.total,r=e.minutes,s=e.seconds,o=e.j,i=e.rounds,m=e.myRef,u=e.i,d=Object(n.useState)(!1),E=Object(l.a)(d,2),b=E[0],v=E[1],f={animation:"grow "+a+"s infinite"};return c.a.createElement("div",{className:"display-wrapper"},c.a.createElement("div",{className:"score"},o,"/",i," Reps"),c.a.createElement("div",{className:["numbers-wrapper","stage-"+u].join(" ")},void 0==r?c.a.createElement("div",{className:"numbers"},s," "):c.a.createElement("div",{className:"numbers"}," ",r,":",s),c.a.createElement("div",{className:b?"circle paused":"circle",style:f})),c.a.createElement("div",{className:"sets"},t," Sets"),-1!=u&&c.a.createElement(p,{toggle:b,setToggle:v,myRef:m,i:u}))},v=function(e){e.time;var t=e.map,a=e.rounds,r=Object(n.useState)(!1),s=Object(l.a)(r,2),o=s[0],i=(s[1],-1),m=1,u=0,d=function(){return 1==i&&m<a?(console.log(m,a),m++,i=-1):2==i&&(u++,m=1,i=-1),i++,c.a.createElement(E.a,{date:Date.now()+1e3*t[i],zeroPadTime:1,renderer:v,ref:p})},p=c.a.createRef(),v=function(e){e.hours;var n=e.minutes,r=e.seconds;return e.completed?c.a.createElement(d,null):n>0?c.a.createElement(b,{sets:u,total:t[i],toggle:o,minutes:n,seconds:r,j:m,rounds:a,myRef:p,i:i}):c.a.createElement(b,{sets:u,total:t[i],toggle:o,seconds:r,j:m,rounds:a,myRef:p,i:i})};return c.a.createElement("div",{className:"inner-app-wrapper"},c.a.createElement(E.a,{date:Date.now()+5e3,renderer:v}))},f=function(e){var t=e.location,a=Object(n.useState)([]),r=Object(l.a)(a,2),s=r[0],o=r[1],i=Object(n.useState)(0),u=Object(l.a)(i,2),E=u[0],p=u[1];return Object(n.useEffect)((function(){var e=d.a.parse(t.search),a=e.reps,n=e.h,c=e.r,r=e.rr;o([].concat(Object(m.a)(s),[n,c,r])),p(a)}),[t.search]),console.log(s),c.a.createElement("div",{className:"app-wrapper"},c.a.createElement("h1",null,"Simple Hangs"),c.a.createElement(v,{map:s,rounds:E}))},N=a(2);var g=function(){return c.a.createElement(o.a,null,c.a.createElement(N.a,{path:"/",exact:!0,component:i}),c.a.createElement(N.a,{path:"/Timer",component:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.bec8eac3.chunk.js.map