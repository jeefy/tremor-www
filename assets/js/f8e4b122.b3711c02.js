"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4748],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=o,m=l["".concat(s,".").concat(b)]||l[b]||p[b]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},94356:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},s="base64",u={unversionedId:"tremor-script/stdlib/std/base64",id:"version-0.11/tremor-script/stdlib/std/base64",isDocsHomePage:!1,title:"base64",description:"The base64 module contains functions to work with base64 encoding and decoding",source:"@site/versioned_docs/version-0.11/tremor-script/stdlib/std/base64.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/base64",permalink:"/docs/tremor-script/stdlib/std/base64",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/tremor-script/stdlib/std/base64.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"array",permalink:"/docs/tremor-script/stdlib/std/array"},next:{title:"binary",permalink:"/docs/tremor-script/stdlib/std/binary"}},d=[{value:"Functions",id:"functions",children:[{value:"encode(input)",id:"encodeinput",children:[]},{value:"decode(input)",id:"decodeinput",children:[]}]}],p={toc:d};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"base64"},"base64"),(0,i.kt)("p",null,"The base64 module contains functions to work with base64 encoding and decoding"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"encodeinput"},"encode(input)"),(0,i.kt)("p",null,"Encodes a ",(0,i.kt)("inlineCode",{parentName:"p"},"binary")," as a base64 encoded string"),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"decodeinput"},"decode(input)"),(0,i.kt)("p",null,"Decodes a base64 ebcided ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," into it's bytes"),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"binary")))}l.isMDXComponent=!0}}]);