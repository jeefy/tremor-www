"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2953],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,d=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64744:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"To async or Not to async",author:"The Tremor Team",author_image_url:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4",tags:["dev","rust"],draft:!1,image:"/img/async.png",description:"Moving from threads to async tasks."},c=void 0,l={permalink:"/blog/2020/08/06/to-async-or-not-to-async",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/blog/2020-08-06-to-async-or-not-to-async.md",source:"@site/blog/2020-08-06-to-async-or-not-to-async.md",title:"To async or Not to async",description:"Moving from threads to async tasks.",date:"2020-08-06T00:00:00.000Z",formattedDate:"August 6, 2020",tags:[{label:"dev",permalink:"/blog/tags/dev"},{label:"rust",permalink:"/blog/tags/rust"}],readingTime:5.525,truncated:!0,authors:[{name:"The Tremor Team",imageURL:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4"}],prevItem:{title:"Releasing Tremor v0.9!",permalink:"/blog/2020/10/16/v09-release"},nextItem:{title:"Rust & Tell Berlin- March 2020",permalink:"/blog/2020/03/31/rust-and-tell"}},u={authorsImageUrls:[void 0]},p=[{value:"The Tremor That Was (threads)",id:"the-tremor-that-was-threads",children:[]}],h={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With the upcoming Tremor release, 0.9.0, we're moving from threads as a basis for ramps and pipelines to async tasks."),(0,o.kt)("p",null,"Let's talk about why this is significant, what is changing, and how the architecture is changing."),(0,o.kt)("p",null,"Note that this is not a comprehensive treatise on threads or async tasks."),(0,o.kt)("h2",{id:"the-tremor-that-was-threads"},"The Tremor That Was (threads)"),(0,o.kt)("p",null,"Threads are a basic building block of programs that run multiple pieces of code concurrently.\nThe operating system is responsible for coordinating across competing resource demands."),(0,o.kt)("p",null,"The OS can preempt, pause, and resume threads. We can leverage infinite or tight loops without the risk of completely blocking the system. These guarantees make concurrent code more accessible, with tools like",(0,o.kt)("inlineCode",{parentName:"p"},"crossbeam-channels")," to build upon."),(0,o.kt)("p",null,"Threads work especially well in use cases where the system and logical concurrency models are well aligned; or, we can map application threads to logical cores on the system being used. Each thread can happily work away on its part of the logic and pass the result on to the next. The one thread per core model is what tremor 0.8 and earlier used. We had a thread for the onramp, a thread for the pipeline, and a thread for the offramp. As the computational cost of decoding, processing, and encoding was often in the same ballpark, this worked exceptionally well. We managed to push up to 400MB/s of JSON through the system this way (including parsing, tremor-script logic, and serialization)."),(0,o.kt)("p",null,"This design can degenerate badly if there are more ramps and pipelines than cores on the system in use. Throughput degrades rapidly (as in up to 2 orders of magnitude worse at 30:1 ratio). At the time of writing this, the deployment model was one pipeline/ramp group on a four-core system, so it worked well in practice."),(0,o.kt)("p",null,"However, this places a burden on operators having to think about concurrency and parallelism to tune tremor for optimal performance and capacity."),(0,o.kt)("p",null,"In SMP systems, we observe other undesireable effects: The moment two communicating threads don't share the same underlying cache, performance plummets. This scenario exists when threads reside on two different CPUs or CCXs (",(0,o.kt)("a",{parentName:"p",href:"https://blog.licenser.net/2020/01/multithreaded-rust-on-threadripper/"},"thank you AMD for making me learn so much about CPU caches"),"). As long as two communicating threads share the same cache, data shared between them can avoid trips to main memory and cache coherency protocol overheads. When two threads communicate across different caches, reads/writes may catastrophically collide and introduce overheads that drastically reduce overall performance."))}m.isMDXComponent=!0}}]);