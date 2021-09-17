"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[773],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=o.createContext({}),l=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,u=p["".concat(m,".").concat(h)]||p[h]||d[h]||a;return t?o.createElement(u,s(s({ref:n},c),{},{components:t})):o.createElement(u,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},54434:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=["components"],i={},m="Persistent Write-Ahead Log",l={unversionedId:"recipes/persistent_gd/README",id:"version-0.11/recipes/persistent_gd/README",isDocsHomePage:!1,title:"Persistent Write-Ahead Log",description:"The write-ahead log ( WAL ) builds on circuit breaker and acknowledgement mechanisms to",source:"@site/versioned_docs/version-0.11/recipes/21_persistent_gd/README.md",sourceDirName:"recipes/21_persistent_gd",slug:"/recipes/persistent_gd/README",permalink:"/docs/recipes/persistent_gd/README",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/recipes/21_persistent_gd/README.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"Transient Write-Ahead Log",permalink:"/docs/recipes/transient_gd/README"},next:{title:"Round Robin",permalink:"/docs/recipes/roundrobin/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Insights",id:"insights",children:[]}],d={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"persistent-write-ahead-log"},"Persistent Write-Ahead Log"),(0,a.kt)("p",null,"The write-ahead log ( WAL ) builds on circuit breaker and acknowledgement mechanisms to\nprovide guaranteed delivery. The write-ahead log is useful in situations\nwhere sources/onramps do not offer guaranteed delivery themselves, but the data being distributed downstream can benefit from protection against loss and duplication."),(0,a.kt)("p",null,"In the configuration in this tutorial we configure a persistent WAL."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"We configure a metronome as a source of data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# File: etc/tremor/config/metronome.yaml\nonramp:\n  - id: metronome\n    type: metronome\n    config:\n      interval: 1000 # Every second\n")),(0,a.kt)("p",null,"We configure a straight forward passthrough query to distribute\nthe data to connected downstream sinks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"# File: etc/tremor/config/persistent.trickle\nuse tremor::system;\n\ndefine qos::wal operator on_disk_wal\nwith\n  read_count = 20,\n  max_elements = 1000, # Capacity limit of 1000 stored events\n  max_bytes = 10485760 # Capacity limit of 1MB of events\nend;\n\ncreate operator on_disk_wal;\n\nselect patch event of\n  insert hostname = system::hostname()\nend\nfrom in into on_disk_wal;\n\nselect event from on_disk_wal into out;\n")),(0,a.kt)("p",null,"We then distribute the metronome events downstream to another websocket\nlistener. We use websocat for this purpose in this example. We can invoke\nthe server as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ websocat -s 8080\nListening on ws://127.0.0.1:8080/\n")),(0,a.kt)("p",null,"We configure the sink/offramp as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"offramp:\n  - id: ws\n    type: ws\n    config:\n      url: ws://localhost:8080/\n")),(0,a.kt)("p",null,"Finally, we interconnect the source, sink and pipeline logic into\nan active flow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'binding:\n  - id: default\n    links:\n      "/onramp/metronome/{instance}/out": ["/pipeline/main/{instance}/in"]\n      "/pipeline/main/{instance}/out": ["/offramp/ws/{instance}/in"]\n\nmapping:\n  /binding/default/01:\n    instance: "01"\n')),(0,a.kt)("p",null,"Running the example via the tremor cli as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tremor server run -f etc/tremor/config/*\n")),(0,a.kt)("h2",{id:"insights"},"Insights"),(0,a.kt)("p",null,"If the tremor process restarts we pick up and re-send events that have not been acknowledged by the ws offramp and then carry on with new events coming from the metronome:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ websocat -s 8080 ; websocat -s 8080\nListening on ws://127.0.0.1:8080/\n{"onramp":"metronome","id":0,"hostname":"localhost","ingest_ns":1600860720749137000}\n{"onramp":"metronome","id":1,"hostname":"localhost","ingest_ns":1600860721751965000}\n{"onramp":"metronome","id":2,"hostname":"localhost","ingest_ns":1600860722756684000}\n{"onramp":"metronome","id":3,"hostname":"localhost","ingest_ns":1600860723761037000}\n{"onramp":"metronome","id":4,"hostname":"localhost","ingest_ns":1600860724764683000}\n{"onramp":"metronome","id":3,"hostname":"localhost","ingest_ns":1600860723761037000}\n{"onramp":"metronome","id":4,"hostname":"localhost","ingest_ns":1600860724764683000}\n{"onramp":"metronome","id":0,"hostname":"localhost","ingest_ns":1600860730353260000}\n{"onramp":"metronome","id":1,"hostname":"localhost","ingest_ns":1600860731355463000}\n{"onramp":"metronome","id":2,"hostname":"localhost","ingest_ns":1600860732357883000}\n{"onramp":"metronome","id":3,"hostname":"localhost","ingest_ns":1600860733362429000}\n{"onramp":"metronome","id":4,"hostname":"localhost","ingest_ns":1600860734364277000}\n{"onramp":"metronome","id":5,"hostname":"localhost","ingest_ns":1600860735367967000}\n{"onramp":"metronome","id":6,"hostname":"localhost","ingest_ns":1600860736373137000}\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We restarted tremor after sending event with id ",(0,a.kt)("inlineCode",{parentName:"p"},"4"),". It did resend events ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," as they have not been acked from the perspective of the WAL yet."))),(0,a.kt)("p",null,"If the downstream websocket service restarts we can recover up to 1000 events or any number of events worth 1MB. We may lose in flight events that were already acknowledged at the time the server went down and thus not fully delivered by the downstream system."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ websocat -s 8080 ; websocat -s 8080\n{"onramp":"metronome","id":0,"hostname":"ALT01828","ingest_ns":1600861519788231000}\n{"onramp":"metronome","id":1,"hostname":"ALT01828","ingest_ns":1600861520790241000}\n{"onramp":"metronome","id":2,"hostname":"ALT01828","ingest_ns":1600861521792297000}\n{"onramp":"metronome","id":3,"hostname":"ALT01828","ingest_ns":1600861522797476000}\n{"onramp":"metronome","id":4,"hostname":"ALT01828","ingest_ns":1600861523802114000}\n^C\n$  websocat -s 8080 ; websocat -s 8080\nListening on ws://127.0.0.1:8080/\n{"onramp":"metronome","id":6,"hostname":"ALT01828","ingest_ns":1600861525809835000}\n{"onramp":"metronome","id":7,"hostname":"ALT01828","ingest_ns":1600861526813574000}\n{"onramp":"metronome","id":8,"hostname":"ALT01828","ingest_ns":1600861527817722000}\n{"onramp":"metronome","id":9,"hostname":"ALT01828","ingest_ns":1600861528822667000}\n{"onramp":"metronome","id":10,"hostname":"ALT01828","ingest_ns":1600861529826521000}\n{"onramp":"metronome","id":11,"hostname":"ALT01828","ingest_ns":1600861530830497000}\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We stopped the websocket server and restarted right afterwards. We in fact lost 1 event (id ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),") which was acked inside tremor but not yet fully delivered to the console by websocat. Other events that the offramp was unable to send will be resent once the ws offramp can connect again."))),(0,a.kt)("p",null,"In short, the persistent in memory wal can assist with partial recovery of downstream system or tremor itself and will actively reduce data loss within the configured retention but it is not guarenteed to be lossless."))}p.isMDXComponent=!0}}]);