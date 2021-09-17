"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6368],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={},c="otel",s={unversionedId:"tremor-script/stdlib/cncf/otel",id:"version-0.11/tremor-script/stdlib/cncf/otel",isDocsHomePage:!1,title:"otel",description:"* spanid - OpenTelemetry Span Id utilities",source:"@site/versioned_docs/version-0.11/tremor-script/stdlib/cncf/otel.md",sourceDirName:"tremor-script/stdlib/cncf",slug:"/tremor-script/stdlib/cncf/otel",permalink:"/docs/tremor-script/stdlib/cncf/otel",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/tremor-script/stdlib/cncf/otel.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"cncf",permalink:"/docs/tremor-script/stdlib/cncf"},next:{title:"logs",permalink:"/docs/tremor-script/stdlib/cncf/otel/logs"}},p=[{value:"Functions",id:"functions",children:[{value:"gen_span_id_string()",id:"gen_span_id_string",children:[]},{value:"gen_span_id_bytes()",id:"gen_span_id_bytes",children:[]},{value:"gen_span_id_array()",id:"gen_span_id_array",children:[]},{value:"gen_trace_id_string()",id:"gen_trace_id_string",children:[]},{value:"gen_trace_id_bytes()",id:"gen_trace_id_bytes",children:[]},{value:"gen_trace_id_array()",id:"gen_trace_id_array",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"otel"},"otel"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/cncf/artwork/master/projects/opentelemetry/horizontal/color/opentelemetry-horizontal-color.png",width:"35%"})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"cncf-opentelemetry-utility-functions"},(0,a.kt)("inlineCode",{parentName:"h1"},"CNCF OpenTelemetry")," utility functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tremor-script/stdlib/cncf/otel/span_id"},"span_id")," - OpenTelemetry Span Id utilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tremor-script/stdlib/cncf/otel/trace_id"},"trace_id")," - OpenTelemetry Trace Id utilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tremor-script/stdlib/cncf/otel/logs"},"logs")," - OpenTelemetry log event utilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tremor-script/stdlib/cncf/otel/metrics"},"metrics")," - OpenTelemetry metrics event utilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tremor-script/stdlib/cncf/otel/trace"},"trace")," - OpenTelemetry trace event utilities")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"gen_span_id_string"},"gen_span_id_string()"),(0,a.kt)("p",null,"Generate a random span id using the hex string representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"gen_span_id_bytes"},"gen_span_id_bytes()"),(0,a.kt)("p",null,"Generate a random span id using the binary representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"binary")),(0,a.kt)("h3",{id:"gen_span_id_array"},"gen_span_id_array()"),(0,a.kt)("p",null,"Generate a random span id using the int array representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"int")),(0,a.kt)("h3",{id:"gen_trace_id_string"},"gen_trace_id_string()"),(0,a.kt)("p",null,"Generate a random trace id using the hex string representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"gen_trace_id_bytes"},"gen_trace_id_bytes()"),(0,a.kt)("p",null,"Generate a random trace id using the binary representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"binary")),(0,a.kt)("h3",{id:"gen_trace_id_array"},"gen_trace_id_array()"),(0,a.kt)("p",null,"Generate a random trace id using the binary representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"int")))}u.isMDXComponent=!0}}]);