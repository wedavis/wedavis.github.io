(this["webpackJsonpwedavis.github.io"]=this["webpackJsonpwedavis.github.io"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(25),s=c.n(i),r=(c(38),c(10)),l=c(8),o=c(11),j=(c(39),c(0)),d=c(2);var b=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],i=function(){return a(!1)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(j.b.Provider,{value:{color:"#fff"},children:Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsx)(l.b,{to:"/",className:"navbar-logo",onClick:i,children:"William Davis"}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return a(!c)},children:c?Object(d.jsx)(o.d,{}):Object(d.jsx)(o.a,{})}),Object(d.jsxs)("nav",{className:c?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/",className:"nav-links",onClick:i,children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/contact",className:"nav-links",onClick:i,children:"Contact"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/projects",className:"nav-links",onClick:i,children:"Projects"})})]})]})})})})},h=c(3);c(49);var u=function(){return Object(d.jsx)("div",{className:"Contact",children:Object(d.jsxs)("header",{children:[Object(d.jsx)("p",{className:"Title",children:"Contact Me"}),Object(d.jsx)("div",{className:"box",children:Object(d.jsxs)("ul",{className:"icons",children:[Object(d.jsx)("li",{className:"social-icon-link",children:Object(d.jsx)("a",{className:"social-icon-link",href:"https://www.linkedin.com/in/william-davis-2b70851b5","aria-label":"LinkedIn",children:Object(d.jsx)(o.c,{})})}),Object(d.jsx)("li",{className:"social-icon-link",children:Object(d.jsx)("a",{className:"social-icon-link",href:"https://github.com/wedavis","aria-label":"Github",children:Object(d.jsx)(o.b,{})})})]})})]})})};c(50);var m,x,p=function(){return Object(d.jsxs)("div",{className:"Home",children:[Object(d.jsx)("h1",{className:"initial-header",children:"William Davis"}),Object(d.jsx)("header",{className:"Home-header"})]})},O=(c(51),c(21)),v=c(15),f=(c(52),c(33)),N=Object(v.a)(f.a)(m||(m=Object(O.a)(["\nwidth: 24px;\nheight: 24px;\npadding: 5px 5px;"]))),g=v.a.button(x||(x=Object(O.a)(["\ndisplay: flex;\nfont-size: 0.6em;\nmargin: 0 5px;\nborder-radius: 7px;\nalign-items: center;\nbackground: lightgrey;\n"])));var k=function(){return Object(d.jsxs)("div",{className:"Projects",children:[Object(d.jsx)("h1",{className:"initial-header",children:"William Davis"}),Object(d.jsx)("header",{className:"Home-header",children:Object(d.jsx)(l.b,{to:"/weather",style:{textDecoration:"none"},target:"_blank",children:Object(d.jsxs)(g,{children:[Object(d.jsx)(N,{viewBox:"0 0 25 25"}),Object(d.jsx)("h1",{className:"button-header",children:"Daily Weather"})]})})})]})},w=c(12),y=c.n(w),C=c(16),_=c.p+"static/media/coldbackground.496909f0.jpg",D=c.p+"static/media/sunnybackground.79f2c25f.jpg",F=(c(59),"cac7fd88d53bf0552c3823db6e2df7a8"),S=function(e){return"https://openweathermap.org/img/wn/".concat(e,"@2x.png")},T=function(){var e=Object(C.a)(y.a.mark((function e(t){var c,n,a,i,s,r,l,o,j,d,b,h,u,m,x,p,O,v=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=v.length>1&&void 0!==v[1]?v[1]:"imperial",n="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(F,"&units=").concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){return e}));case 4:return a=e.sent,i=a.weather,s=a.main,r=s.temp,l=s.feels_like,o=s.temp_min,j=s.temp_max,d=s.pressure,b=s.humidity,h=a.wind.speed,u=a.sys.country,m=a.name,x=i[0],p=x.description,O=x.icon,e.abrupt("return",{description:p,iconURL:S(O),temp:r,feels_like:l,temp_min:o,temp_max:j,pressure:d,humidity:b,speed:h,country:u,name:m});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var W=function(){var e=Object(n.useState)("Raleigh"),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(null),s=Object(r.a)(i,2),l=s[0],o=s[1],j=Object(n.useState)("imperial"),b=Object(r.a)(j,2),h=b[0],u=b[1],m=Object(n.useState)(D),x=Object(r.a)(m,2),p=x[0],O=x[1];return Object(n.useEffect)((function(){(function(){var e=Object(C.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(c,h);case 2:t=e.sent,o(t),n="metric"===h?20:60,t.temp<=n?O(_):O(D);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h,c]),Object(d.jsx)("div",{className:"Weather",style:{backgroundImage:"url(".concat(p,")"),height:"100%"},children:Object(d.jsx)("div",{className:"overlay",children:l&&Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section section_inputs",children:[Object(d.jsx)("input",{onKeyDown:function(e){13===e.keyCode&&(a(e.currentTarget.value),e.currentTarget.blur())},type:"text",name:"city",placeholder:"Enter City..."}),Object(d.jsx)("button",{onClick:function(e){return function(e){var t=e.currentTarget,c="F"===t.innerText.slice(1);t.innerText=c?"\xb0C":"\xb0F",u(c?"imperial":"metric")}(e)},children:"\xb0F"})]}),Object(d.jsxs)("div",{className:"section section_temperature",children:[Object(d.jsxs)("div",{className:"icon",children:[Object(d.jsx)("h3",{children:"".concat(l.name,", ").concat(l.country)}),Object(d.jsx)("img",{src:l.iconURL,alt:"weatherIcon"}),Object(d.jsx)("h3",{children:l.description})]}),Object(d.jsx)("div",{className:"temperature",children:Object(d.jsx)("h1",{children:"".concat(l.temp.toFixed()," \xb0 ").concat("metric"===h?"C":"F")})})]})]})})})};var H=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/",exact:!0,component:p}),Object(d.jsx)(h.a,{path:"/contact",component:u}),Object(d.jsx)(h.a,{path:"/projects",component:k})]}),Object(d.jsx)(h.c,{children:Object(d.jsx)(h.a,{path:"/weather",exact:!0,component:W})})]})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a0f7cbd0.chunk.js.map