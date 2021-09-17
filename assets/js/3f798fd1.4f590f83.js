"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9489],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79192:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Releasing Tremor v0.9!",author:"The Tremor Team",author_image_url:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4",tags:["releases"],draft:!1,hide_table_of_contents:!1,description:"Releasing Tremor v0.9",image:"/img/blog/2020-10-16/v0.9.png"},l=void 0,c={permalink:"/blog/2020/10/16/v09-release",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/blog/2020-10-16-v09-release.md",source:"@site/blog/2020-10-16-v09-release.md",title:"Releasing Tremor v0.9!",description:"Releasing Tremor v0.9",date:"2020-10-16T00:00:00.000Z",formattedDate:"October 16, 2020",tags:[{label:"releases",permalink:"/blog/tags/releases"}],readingTime:7.34,truncated:!0,authors:[{name:"The Tremor Team",imageURL:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4"}],prevItem:{title:"Google Cloud Storage and Pub/Sub Connectors",permalink:"/blog/2021/06/29/T17-LFX-Blog-Jigyasa-gcloud"},nextItem:{title:"To async or Not to async",permalink:"/blog/2020/08/06/to-async-or-not-to-async"}},d={authorsImageUrls:[void 0]},u=[{value:"Summary",id:"summary",children:[]},{value:"TL;DR",id:"tldr",children:[]},{value:"Refactored Concurrency Model",id:"refactored-concurrency-model",children:[]},{value:"Unified Command Line Interface",id:"unified-command-line-interface",children:[]},{value:"Linked Transports",id:"linked-transports",children:[]},{value:"Circuit breakers &amp; \u201cGuaranteed\u201d delivery",id:"circuit-breakers--guaranteed-delivery",children:[]},{value:"Open Source Community Changes",id:"open-source-community-changes",children:[]},{value:"Behavioral Changes",id:"behavioral-changes",children:[]},{value:"Questions/Comments",id:"questionscomments",children:[]}],p={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"v0.9",src:n(58376).Z})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.tremor.rs/"},"Tremor")," is an open source event processing and data distribution engine designed to interpose or intercept data in complex systems primarily to inject quality of service, correct data flows and to enrich or support complex traffic shaping, routing and load-balancing based on contextual, situational or content derived dynamic conditions."),(0,o.kt)("p",null,"Tremor has a powerful ETL language designed for flexibly pattern matching structured data such as JSON efficiently (SIMD-accelerated), and a declarative flow-based SQL language designed for rich JSON-like data to describe data processing and data flow graphs with declarative QoS constraints."),(0,o.kt)("p",null,"Tremor has been in large scale global production at Wayfair for 2 years now, and is gaining adoption in other organizations."),(0,o.kt)("p",null,"In this release, we return to Tremor\u2019s roots and focus on quality of service by adding linked-transports to interpose RPC-like and synchronous-blocking protocols. We add circuit breakers to manage upstream and downstream byzantine events, and we provide mechanisms that offer shades of delivery guarantees or intrinsic transactions that, when combined with suitable upstream or downstream systems, can produce lossless data transfers for certain routes whilst remaining best-effort for routes that do not support lossless delivery or recovery in and of themselves with minimal loss."),(0,o.kt)("p",null,"Lastly, but most importantly, this is the first release of Tremor as a Linux Foundation/CNCF early-stage sandbox project. We would like to thank everyone at Wayfair in Boston and Berlin, the Linux Foundation and the CNCF who facilitated, helped, nurtured, transitioned DNS entries and worked with the legals to make this transition to fully open governance happen. A huge thanks to Chris and Amye at the Linux Foundation."),(0,o.kt)("h2",{id:"tldr"},"TL;DR"),(0,o.kt)("p",null,"Read on for details after these headings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refactored Concurrency Model"),(0,o.kt)("li",{parentName:"ul"},"Unified Command Line Interface"),(0,o.kt)("li",{parentName:"ul"},"Linked Transports"),(0,o.kt)("li",{parentName:"ul"},"Circuit Breakers & \u2018Guaranteed\u2019 Delivery"),(0,o.kt)("li",{parentName:"ul"},"Behavioural Changes")),(0,o.kt)("p",null,"Stop here, unless you like details."),(0,o.kt)("h2",{id:"refactored-concurrency-model"},"Refactored Concurrency Model"),(0,o.kt)("p",null,"The maturity of concurrency and synchronization primitives within the rust programming language has transformed massively over the past 18 months. As these primitives have now stabilised and libraries based on these primitives are now stabilising, we have migrated the tremor runtime model to be fully internally asynchronous, non-blocking and task-driven, where possible."),(0,o.kt)("p",null,"There are still code paths within tremor, such as in kafka adapters that integrate with native libraries where a configurable number of threads can be configured and spun up- but we no longer have a thread per pipeline model."),(0,o.kt)("p",null,"This means that tremor application designers can now configure, deploy and run 1000s of pipelines in the same instance of tremor. In concert with the modularity theme in tremor v0.8, the quality of life/service theme of v0.9 further expands the flexibility available to tremor application designers and operators to design very high performance and highly efficient data processing and distribution solutions based on tremor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"08_09_comparison",src:n(23320).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Feel the awesome power of asynchronous runtimes")),(0,o.kt)("h2",{id:"unified-command-line-interface"},"Unified Command Line Interface"),(0,o.kt)("p",null,"Tremor has matured to the point that we have outgrown the legacy developer and operator tooling. In this release, we have unified, enhanced and extended developer and operator tooling to boldly go into a much improved quality of life for tremor users."),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"/docs/operations/cli/"},"unified command line tool")," ",(0,o.kt)("inlineCode",{parentName:"p"},"tremor")," can generate auto-completion for your shell (anything from zsh to powershell), generate documentation for your modules, run Tremor, debug the language intermediate forms, and has benchmark, integration, command-driven and unit testing frameworks built in."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cli1",src:n(16535).Z}),"\n",(0,o.kt)("img",{alt:"cli2",src:n(11253).Z})),(0,o.kt)("p",null,"Everything is syntax-highlighted and should conform to whichever theme you have running in your terminal. It\u2019s like a universal tool - but more reliable because it's German but cool, because it's a Berliner(in the JFK, not cake sense...)"),(0,o.kt)("h2",{id:"linked-transports"},"Linked Transports"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/operations/linked-transports/"},"Linked Transports")," allow bidirectional event flows in a request/response style to be built and routed through a tremor pipeline. This enables Tremor users to introspect, route, or even directly reply to incoming messages and intercept and manipulate outgoing responses. Tremor can thus be used as proxy, load-balancer or API-Gateway before or in between existing REST APIs or websocket servers."),(0,o.kt)("p",null,"Users can now support and implement their own domain specific REST APIs that can interact with the wider ecosystem of systems interconnected with Tremor- roll your own control plane and consolidate to a single plane of control- without deploying a separate solution or service."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"linked-transports",src:n(88624).Z})),(0,o.kt)("p",null,"(note: replies can only be delivered to feet in 0.9, we\u2019re trying to extend that to other limbs in later releases)."),(0,o.kt)("h2",{id:"circuit-breakers--guaranteed-delivery"},"Circuit breakers & \u201cGuaranteed\u201d delivery"),(0,o.kt)("p",null,"The signal and contraflow control events within Tremor have been built upon in v0.9 to provide an event acknowledgement mechanism- this, in turn, provides the foundation for ",(0,o.kt)("a",{parentName:"p",href:"/docs/operations/gdcb/"},"guaranteed delivery and circuit breakers"),", which enables finer-grained declarative quality of service mechanisms within tremor."),(0,o.kt)("p",null,"We can now configure Tremor applications or algorithms to ",(0,o.kt)("inlineCode",{parentName:"p"},"pick up where they left off")," even if the tremor processes are stopped and restarted. Under certain conditions (based on configuration), we can recover entire end-to-end flows- such as the lossless distribution of messages across kafka sources and sinks regardless of which participant stops and restarts."),(0,o.kt)("p",null,"If you choose UDP, we cannot guarantee lossless delivery; but Tremor, even on a horrible quality network, should still minimise loss and recover gracefully- it won\u2019t do so without message loss unless there\u2019s some application-level handling of recovery."),(0,o.kt)("p",null,"Fully lossless transactional delivery is 10% the throughput of regular data distribution. It's as slow as Apache Kafka for now- but we will put effort into tuning performance here if the use case arises."),(0,o.kt)("p",null,"Circuit breakers enable us to detect downstream system failures beyond backpressure, and make informed decisions: to either discard, reroute or stop dataflow. This allows a more ingrained control over behaviour in non-optimal conditions compared to \u201calways drop\u201d earlier tremor versions implemented."),(0,o.kt)("p",null,"Delivery Guarantees describes a set of functionality that improves the delivery guarantees of a tremor system. What guarantees can be given depends heavily on the upstream and downstream systems, and the protocols used to communicate with them."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cb-gd",src:n(11060).Z})),(0,o.kt)("h2",{id:"open-source-community-changes"},"Open Source Community Changes"),(0,o.kt)("p",null,"Tremor\u2019s proposal to to adjoin the CNCF as an early stage standbox project was accepted by the CNCF TOC, and formal onboarding into the CNCF began and completed on time in September. This means that the tremor project\u2019s copyright is now held by the Linux Foundation on behalf of the maintainers."),(0,o.kt)("p",null,"In practice, what does this mean? Day to day, there is no impact- currently all maintainers of the tremor project are sponsored by Wayfair. But the project now also has the support of the Linux Foundation and the CNCF and this, in turn, makes it easier for external organizations to adopt and contribute to it in support of their own business needs and open source governance strategies."),(0,o.kt)("p",null,"Tremor is visible on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.cncf.io/sandbox-projects/"},"CNCF Sandbox Project page")," and via the ",(0,o.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/"},"CNCF Landscape"),". The tremor project can now access development services from the CNCF and LF, ranging from artwork and website design through to visibility, marketing and promotion of the project at LF, CNCF and other conferences and events."),(0,o.kt)("h2",{id:"behavioral-changes"},"Behavioral Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"REST offramp/sink:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In an effort to streamline, the REST sink no longer adds newlines for batched events; this can now be done using the \u201clines\u201d postprocessor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"put"),", as an option, is no longer supported; instead, ",(0,o.kt)("inlineCode",{parentName:"li"},"method")," is now used."),(0,o.kt)("li",{parentName:"ul"},"Only supports one ",(0,o.kt)("inlineCode",{parentName:"li"},"endpoint")," instead of multiple. The Round-robin operator with multiple offramps can be used as a much more capable replacement."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Heredocs:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Leading indentation is no longer stripped."),(0,o.kt)("li",{parentName:"ul"},"Heredocs now perform string interpolation, allowing it to be used for templating of textual content. In result, {and} needs to be escaped.")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"tremor-server"),", ",(0,o.kt)("strong",{parentName:"li"},"tremor-query"),", ",(0,o.kt)("strong",{parentName:"li"},"tremor-script"),", and ",(0,o.kt)("strong",{parentName:"li"},"tremor-tool")," binaries are now all unified in the self-name ",(0,o.kt)("strong",{parentName:"li"},"tremor")," binary. The binary also replaces the legacy benchmark and integration testing frameworks: the 3rd party coyote command, test harness, and introduces a new unit testing facility for tremor-script. It\u2019s one command to rule them all.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Circuit breakers")," are enabled and active by default- this is a significant behavioral change in sinks/offramps that completely disconnect; this will now stop the message flow on sources/onramps. Care should be taken in a production environment with non-resilient, non-robust and non-redundant downstream connectivity as this is now an operational concern that can benefit from a much finer-grained configuration surface.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"generic::backpressure")," operator has been renamed ",(0,o.kt)("strong",{parentName:"p"},"qos::backpressure"),". Using the old name will emit a warning in this release, but this backwards compatibility consideration will be addressed and the old name removed in the next release.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The operators ",(0,o.kt)("strong",{parentName:"p"},"runtime::tremor"),", ",(0,o.kt)("strong",{parentName:"p"},"grouper::bucket")," and ",(0,o.kt)("strong",{parentName:"p"},"script")," inside of ",(0,o.kt)("strong",{parentName:"p"},"trickle")," have their ",(0,o.kt)("strong",{parentName:"p"},"error")," output renamed ",(0,o.kt)("strong",{parentName:"p"},"err"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Linked transports")," introduce a source nature to sinks and a sink nature to sources. This feature is in preview mode and how to configure it is very likely to change as usability issues or misconceptions are ironed out. (v0.10)"))),(0,o.kt)("h2",{id:"questionscomments"},"Questions/Comments"),(0,o.kt)("p",null,"On the our ",(0,o.kt)("a",{parentName:"p",href:"https://chat.tremor.rs"},"discord server"),"."))}m.isMDXComponent=!0},23320:function(e,t,n){t.Z=n.p+"assets/images/08_09_comparison-85fbc837cf4d80875fc4ec74b9fa9c25.png"},11060:function(e,t,n){t.Z=n.p+"assets/images/cb-gd-0ebef8ee34d7f344851730d4d7acb0de.gif"},16535:function(e,t,n){t.Z=n.p+"assets/images/cli1-76cc67c05002dff55b07bf515438e2a4.gif"},11253:function(e,t,n){t.Z=n.p+"assets/images/cli2-ab613b9f427c1e9fdbd6b8089c736057.gif"},88624:function(e,t,n){t.Z=n.p+"assets/images/linked-transports-21946463c946ee3affd9be5e40a50d54.png"},58376:function(e,t,n){t.Z=n.p+"assets/images/v0.9-dd17baf55d40136f0602538d35280d68.png"}}]);