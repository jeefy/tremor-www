"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[5323],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54865:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={},p="HTTP -> Websocket Bridge",l={unversionedId:"recipes/bridges_lt_http_ws/README",id:"version-0.11/recipes/bridges_lt_http_ws/README",isDocsHomePage:!1,title:"HTTP -> Websocket Bridge",description:"Example HTTP -> Websocket bridge application built on top of Tremor and meant to be a demonstration of linked transports.",source:"@site/versioned_docs/version-0.11/recipes/34_bridges_lt_http_ws/README.md",sourceDirName:"recipes/34_bridges_lt_http_ws",slug:"/recipes/bridges_lt_http_ws/README",permalink:"/docs/recipes/bridges_lt_http_ws/README",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/recipes/34_bridges_lt_http_ws/README.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"Websocket Proxy",permalink:"/docs/recipes/proxies_lt_ws/README"},next:{title:"Reverse proxy with Load Balancing",permalink:"/docs/recipes/reverse_proxy_load_balancing/README"}},c=[{value:"Setup",id:"setup",children:[{value:"Sources and sinks",id:"sources-and-sinks",children:[]},{value:"Request flow",id:"request-flow",children:[]},{value:"Processing logic",id:"processing-logic",children:[]}]},{value:"Testing",id:"testing",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"http---websocket-bridge"},"HTTP -> Websocket Bridge"),(0,s.kt)("p",null,"Example HTTP -> Websocket bridge application built on top of Tremor and meant to be a demonstration of ",(0,s.kt)("a",{parentName:"p",href:"/docs/operations/linked-transports"},"linked transports"),"."),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"All the code here is available in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/34_bridges_lt_http_ws"},"git repository")," as well."))),(0,s.kt)("h3",{id:"sources-and-sinks"},"Sources and sinks"),(0,s.kt)("p",null,"We configure a rest onramp listening on port 9139, that is meant to be a bridge for our ",(0,s.kt)("a",{parentName:"p",href:"/docs/recipes/servers_lt_ws/README"},"example websocket server")," (configured as en endpoint in the websocket offramp here)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: http\n    type: rest\n    linked: true\n    codec: string\n    config:\n      host: 0.0.0.0\n      port: 9139\n\nofframp:\n  - id: ws\n    type: ws\n    linked: true\n    codec: string\n    postprocessors:\n      - lines\n    config:\n      url: "ws://tremor-server:8139"\n')),(0,s.kt)("h3",{id:"request-flow"},"Request flow"),(0,s.kt)("p",null,"Incoming HTTP requests from clients are forwarded to the ",(0,s.kt)("inlineCode",{parentName:"p"},"request_processing")," pipeline, from where it goes to the websocket server. The resulting websocket message reply is then sent back as HTTP response to the client which initiated the request (after some needed processing from the ",(0,s.kt)("inlineCode",{parentName:"p"},"response_processing")," pipeline)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'binding:\n  - id: main\n    links:\n      # send incoming requests for processing\n      "/onramp/http/{instance}/out":\n        ["/pipeline/request_processing/{instance}/in"]\n\n      # process incoming requests and relay it to ws offramp\n      "/pipeline/request_processing/{instance}/out":\n        ["/offramp/ws/{instance}/in"]\n\n      # send the response from ws offramp to the passthrough pipeline\n      # this works well as long as the passthrough pipeline is not used\n      # by anything else (which is the case for this example)\n      "/offramp/ws/{instance}/out":\n        ["/pipeline/response_processing/{instance}/in"]\n\n      # send the ws repsonse back as a response to incoming\n      "/pipeline/response_processing/{instance}/out":\n        ["/onramp/http/{instance}/in"]\n')),(0,s.kt)("h3",{id:"processing-logic"},"Processing logic"),(0,s.kt)("p",null,"Implementation for the ",(0,s.kt)("inlineCode",{parentName:"p"},"request_processing")," pipeline:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-trickle"},'define script process\nscript\n  match $request.url.path of\n    # only pass requests to /bridge\n    case "/bridge" =>\n      null\n    default =>\n      # can send this to a different port than the default err port too\n      emit {\n        "error": "Unsupported url path: {$request.url.path}",\n        "event": event\n      } => "err"\n  end;\n  event;\nend;\n\ncreate script process;\n\n# main request processing\nselect event from in into process;\nselect event from process into out;\n\n# tremor runtime errors from the processing script\nselect event from process/err into err;\n')),(0,s.kt)("p",null,"Implementation for the ",(0,s.kt)("inlineCode",{parentName:"p"},"response_processing")," pipeline:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-trickle"},'define script process\nscript\n  # defaults for the server response\n  let $response = {\n    "status": 200,\n    "headers": {\n      "x-powered-by": "Tremor",\n    }\n  };\n  event;\nend;\n\ncreate script process;\n\n# main request processing\nselect event from in into process;\nselect event from process into out;\n\n# tremor runtime errors from the processing script\nselect event from process/err into err;\n')),(0,s.kt)("h2",{id:"testing"},"Testing"),(0,s.kt)("p",null,"Assuming you have all the code from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/34_bridges_lt_http_ws"},"git repository"),", run the following to start our application (along with the ",(0,s.kt)("a",{parentName:"p",href:"/docs/recipes/servers_lt_ws/README"},"tremor websocket server example")," that our application is bridging to):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose up\n")),(0,s.kt)("p",null,"Now let's try to test the echo capabilities of the websocket server example, via the HTTP bridge:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# via the HTTP bridge\n$ curl -i http://localhost:9139/bridge -d "hello"\nHTTP/1.1 200 OK\ncontent-length: 5\ndate: Thu, 15 Oct 2020 05:24:23 GMT\ncontent-type: text/plain\nx-powered-by: Tremor\n\nhello\n\n\n# the websocket server\n$ echo "hello" | websocat -n1 ws://localhost:8139\nhello\n')),(0,s.kt)("p",null,"Our snot-handling works as well:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -i http://localhost:9139/bridge -d "snot"\nbadger\n')),(0,s.kt)("p",null,"Only the ",(0,s.kt)("inlineCode",{parentName:"p"},"/bridge")," path (as setup from the pipeline) works for the bridging:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://localhost:9139/some_path -d "snot"\n{"error":"Oh no, we ran into something unexpected :(\\n Unsupported url path: /some_path","event":"snot"}\n')),(0,s.kt)("p",null,"And if there's an internal tremor error while processing both the incoming HTTP request and the websocket reply to it (eg: codec or pre/post-processor failure), or if the websocket server is down, an error will be bubbled up to the client. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# stop the websocket server\n$ docker stop 34_bridges_lt_http_ws_tremor-server_1\n\n# websocket server connection now gets closed from the bridge\n$ curl -i http://localhost:9139/bridge -d "hello"\nHTTP/1.1 500 Internal Server Error\ncontent-length: 198\ndate: Fri, 16 Oct 2020 04:12:11 GMT\ncontent-type: application/json\n\n{"error":"Oh no, we ran into something unexpected :(\\n Error receiving reply from server ws://localhost:8139: WebSocket protocol error: Connection reset without closing handshake","event_id":"1:0:3"}\n\nInternally the websocket offramp is trying to re-establish the connection continuously.\n\nRestarting the docker websocket server will heal the offramp:\n\n```sh\n# restart the websocket server\n$ docker start 34_bridges_lt_http_ws_tremor-server_1\n\n$ curl http://localhost:9139/bridge -d "hello"\nhello\n')))}u.isMDXComponent=!0}}]);