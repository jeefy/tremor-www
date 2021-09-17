"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6373],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,o(o({ref:e},d),{},{components:r})):n.createElement(f,o({ref:e},d))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},95451:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={},l="std",c={unversionedId:"tremor-script/stdlib/std",id:"tremor-script/stdlib/std",isDocsHomePage:!1,title:"std",description:"The tremor language standard library it provides the following modules:",source:"@site/docs/tremor-script/stdlib/std.md",sourceDirName:"tremor-script/stdlib",slug:"/tremor-script/stdlib/std",permalink:"/docs/next/tremor-script/stdlib/std",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/tremor-script/stdlib/std.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trace_id",permalink:"/docs/next/tremor-script/stdlib/cncf/otel/trace_id"},next:{title:"array",permalink:"/docs/next/tremor-script/stdlib/std/array"}},d=[],p={toc:d};function u(t){var e=t.components,r=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"std"},"std"),(0,a.kt)("p",null,"The tremor language standard library it provides the following modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/array"},"array")," - functions to deal with arrays (",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/base64"},"base64")," - functions for base64 en and decoding"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/base64"},"binary")," - functions to deal with binary data (",(0,a.kt)("inlineCode",{parentName:"li"},"<< 1, 2, 3 >>"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/float"},"float")," - functions to deal with floating point numbers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/integer"},"integer")," - functions to deal with integer numbers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/json"},"json")," - functions to deal with JSON"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/math"},"math")," - mathematical functions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/path"},"path")," - path utility functions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/random"},"random")," - random related functions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/range"},"range")," - range related functions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/re"},"re")," - functions handeling regular expressions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/record"},"record")," - functions dealing with records (",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/string"},"string")," - functions dealing with strings"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/test"},"test")," - test related functions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/type"},"type")," - functions dealing with strings"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/tremor-script/stdlib/std/url"},"url")," - url decoding/encoding functions")))}u.isMDXComponent=!0}}]);