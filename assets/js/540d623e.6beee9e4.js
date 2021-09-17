"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2896],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64618:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"index",title:"Tremor",sidebar_position:0},l="Tremor",c={unversionedId:"index",id:"version-0.11/index",isDocsHomePage:!1,title:"Tremor",description:"Tremor is an event processing system originally designed for the needs of platform engineering and infrastructure.",source:"@site/versioned_docs/version-0.11/index.md",sourceDirName:".",slug:"/index",permalink:"/docs/index",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/index.md",tags:[],version:"0.11",sidebarPosition:0,frontMatter:{id:"index",title:"Tremor",sidebar_position:0},sidebar:"version-0.11/tutorialSidebar",next:{title:"Architecture Overview",permalink:"/docs/overview"}},p=[],u={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tremor"},"Tremor"),(0,a.kt)("p",null,"Tremor is an event processing system originally designed for the needs of platform engineering and infrastructure."),(0,a.kt)("p",null,"Tremor has been running in production since October 2018, processes 10 terabytes of data per day, or 10 billion messages per minute and 10 million metrics per second. Tremor achieves this with 10x footprint reduction in bare metal infrastructure and cloud based deployments in 6 ( and counting ) systems at Wayfair, whilst reducing memory usage by 10x and delivering better quality of service under conditions when our network is saturated at peak eCommerce trading lifecycles."),(0,a.kt)("p",null,"Tremor reduces cost, reduces complexity and consolidates and simplifies our operational environment to\nspark SRE joy, to reduce workload on our NOC and to drop our operating costs."),(0,a.kt)("p",null,"As a secondary benefit, tremor is relatively low latency and relatively high throughput however this is\nan explicit non-goal of the project."),(0,a.kt)("p",null,"Tremor runs 24x7 365 days per year and is implemented in the Rust programming language."),(0,a.kt)("p",null,"Click for an ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview"},"Architectural overview")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/history"},"Canned History")," of the project."),(0,a.kt)("p",null,"Other interesting topics are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tremor-script/index"},"The tremor-script language")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tremor-query/index"},"The tremor-query language")),(0,a.kt)("li",{parentName:"ul"},"Artefacts namely:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/artefacts/onramps"},"Onramps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/artefacts/offramps"},"Offramps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/artefacts/codecs"},"Codecs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/artefacts/preprocessors"},"Pre-")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/artefacts/postprocessors"},"Postprocessors")))),(0,a.kt)("li",{parentName:"ul"},"Operational information about",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/operations/monitoring"},"Monitoring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/operations/configuration"},"Configuration")," and the ",(0,a.kt)("a",{parentName:"li",href:"/docs/operations/configuration-walkthrough"},"Configuration Walkthrough")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/operations/cli"},"The tremor CLI")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api"},"The tremor API"),"/0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/"},"Workshop")," and various use case ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples"},"examples"))),(0,a.kt)("p",null,"This is not an exhaustive list and for the curious it might be worth to explore the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs"},"docs")," folder on their own."))}m.isMDXComponent=!0}}]);