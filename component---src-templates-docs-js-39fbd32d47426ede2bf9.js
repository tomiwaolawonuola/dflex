(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+Sw5":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"/d1K":function(t,e,n){"use strict";var r=n("huG8");n.d(e,"a",(function(){return r.a}))},"0qAl":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"5WRv":function(t,e,n){var r=n("iNmH"),o=n("Qatm"),c=n("Zhxd"),i=n("kluZ");t.exports=function(t){return r(t)||o(t)||c(t)||i()}},"6FTn":function(t,e,n){"use strict";var r=n("obyI");e.a=function(t){return null==t?null:r.siteUrl+"/"+t.replace(/^\//,"")}},"7ihd":function(t,e,n){"use strict";(function(t){var r=n("mK0O"),o=(n("mXGw"),n("6HPj")),c=n("zDcZ");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(e){var n=e.title;return t.createElement(o.a,{Component:"header",justifyContent:"space-between",alignItems:"baseline"},t.createElement("h1",{css:a({color:c.a.dark,marginBottom:0},c.b.header)},n))}}).call(this,n("OyLA"))},"8lrx":function(t,e,n){var r=n("uUj8"),o=n("5WRv"),c=n("OvAC"),i=n("PE9J");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("mXGw"),s=n("/FXl"),f=s.useMDXComponents,p=s.mdx,m=n("U+ow").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,c=t.children,a=i(t,["scope","components","children"]),s=f(n),d=m(e),y=l.useMemo((function(){if(!c)return null;var t=u({React:l,mdx:p},d),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+c])).apply(void 0,[{}].concat(o(n)))}),[c,e]);return l.createElement(y,u({components:s},a))}},OvAC:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},Qatm:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},RJKl:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"pageQuery",(function(){return c}));n("mXGw");var r=n("Zttt"),o=n("icko"),c="354485068";e.default=function(e){var n=e.data,c=e.location,i=n.mdx;return t.createElement(r.a,{location:c},t.createElement(o.a,{mdx:i,location:c,createLink:function(){},sectionList:[]}))}}.call(this,n("OyLA"))},SjXs:function(t,e,n){"use strict";(function(t){n("mXGw");var r=n("8lrx"),o=n.n(r),c=n("6FTn"),i=n("6HPj"),a=n("aAma"),u=n("vfq0"),l=n("XGt2"),s=n("zDcZ"),f=n("/d1K");e.a=function(e){var n=e.ogDescription,r=e.location,p=e.sectionList,m=e.createLink,d=e.mdx,y=d.frontmatter,b=d.fields,v=d.body,O=e.titlePostfix,g=void 0===O?"":O,h=y.title||"";return t.createElement(i.a,{direction:"column",grow:"1",shrink:"0",alignItems:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0}},t.createElement(u.a,{ogDescription:n,ogType:"article",canonicalUrl:Object(c.a)(b.slug),title:""+h+g}),t.createElement("div",{css:{flex:"1 0 auto"}},t.createElement(a.a,null,t.createElement("div",{css:s.d.articleLayout.container},t.createElement(i.a,{Component:"article",direction:"column",grow:"1"},t.createElement(l.a,{title:h}),t.createElement("div",{css:s.d.articleLayout.content},t.createElement("div",{css:[s.d.markdown]},t.createElement(o.a,null,v)))),t.createElement("div",{css:s.d.articleLayout.sidebar},t.createElement(f.a,{location:r,sectionList:p,createLink:m}))))))}}).call(this,n("OyLA"))},WI9V:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},XGt2:function(t,e,n){"use strict";var r=n("7ihd");n.d(e,"a",(function(){return r.a}))},Zhxd:function(t,e,n){var r=n("+Sw5");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},huG8:function(t,e,n){"use strict";(function(t){n("mXGw");var r=n("6HPj"),o=n("zDcZ");function c(){return t.createElement("div",null)}e.a=function(e){var n,i=e.sectionList,a=e.location,u=e.createLink;return t.createElement(r.a,{Component:"nav",direction:"column",alignItems:"stretch",css:(n={background:"red !important",width:"100%",paddingLeft:20,position:"relative"},n[o.c.greaterThan("largerSidebar")]={paddingLeft:40},n[o.c.lessThan("small")]={paddingBottom:100},n)},i.map((function(e,n){return t.createElement(c,{createLink:u,isActive:!1,key:n,location:a,onLinkClick:function(){console.log("link clicked")},onSectionTitleClick:function(){console.log("onSectionTitleClick clicked")},section:e})})))}}).call(this,n("OyLA"))},iNmH:function(t,e,n){var r=n("+Sw5");t.exports=function(t){if(Array.isArray(t))return r(t)}},icko:function(t,e,n){"use strict";var r=n("SjXs");n.d(e,"a",(function(){return r.a}))},kluZ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},uUj8:function(t,e,n){var r=n("WI9V"),o=n("0qAl");function c(e,n,i){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}t.exports=c},vfq0:function(t,e,n){"use strict";var r=n("Yla7");n.d(e,"a",(function(){return r.a}))}}]);
//# sourceMappingURL=component---src-templates-docs-js-39fbd32d47426ede2bf9.js.map