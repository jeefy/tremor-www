"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[3272],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82695:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},l="Ingesting documents from kafka into elastic",c={unversionedId:"recipes/kafka_elastic_correlation/README",id:"recipes/kafka_elastic_correlation/README",isDocsHomePage:!1,title:"Ingesting documents from kafka into elastic",description:"All the application code here is available from the docs git repository.",source:"@site/docs/recipes/39_kafka_elastic_correlation/README.md",sourceDirName:"recipes/39_kafka_elastic_correlation",slug:"/recipes/kafka_elastic_correlation/README",permalink:"/docs/next/recipes/kafka_elastic_correlation/README",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/recipes/39_kafka_elastic_correlation/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Polling",permalink:"/docs/next/recipes/polling_alerts/README"},next:{title:"CNCF OpenTelemetry Passthrough",permalink:"/docs/next/recipes/otel_passthrough/README"}},d=[{value:"Environment",id:"environment",children:[{value:"Data source",id:"data-source",children:[]},{value:"Ingestion from Kafka to Elasticsearch",id:"ingestion-from-kafka-to-elasticsearch",children:[]}]},{value:"Trying this at home",id:"trying-this-at-home",children:[]}],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ingesting-documents-from-kafka-into-elastic"},"Ingesting documents from kafka into elastic"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All the application code here is available from the docs ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/39_kafka_elastic_correlation"},"git repository"),"."))),(0,o.kt)("p",null,"This example tries to show how to use tremor as the orchestrator for ingesting documents coming from kafka into elasticsearch and notify the upstream system of success or failure of the ingest operation for every single document."),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("p",null,"In this walkthrough we explore how to make use of ",(0,o.kt)("em",{parentName:"p"},"Linked Transports"),", ",(0,o.kt)("em",{parentName:"p"},"Guaranteed Delivery")," and ",(0,o.kt)("em",{parentName:"p"},"Correlation")," features of tremor."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"tremor_in")," directory we have set up a tremor instance that acts as our data source for this workshop. It is not our main focus, but lets look at it, so we understand our source data."),(0,o.kt)("h3",{id:"data-source"},"Data source"),(0,o.kt)("p",null,"The tremor instance used for feeding data into our main system contains of a ",(0,o.kt)("inlineCode",{parentName:"p"},"metronome")," onramp which will emit an event every second. The connected pipeline will enrich those events with some metadata destined for the kafka offramp it is connected to.\nBased on random choice it will change the event format to some incompatible format. This is done so we can trigger errors at elasticsearch later on."),(0,o.kt)("p",null,"The script responsible for creating the events is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'define script add_meta\nscript\n\n  use tremor::system;\n  use std::random;\n  # we add a message id as kafka header,\n  # that we use later on for correlation and notifying purposes\n  let message_id = "#{system::ingest_ns()}";\n  let $kafka = {\n    "headers": {\n      "message_id": message_id\n    },\n    "key": message_id\n  };\n\n  # trigger some errors due to invalid formats\n  # ES auto creates an index schema for the first event it rerceives,\n  # some next event will have a differently typed payload for the field `might_be_invalid`\n  match random::bool() of\n    case true => {\n      "event": event,\n      "might_be_invalid": [true, false]\n    }\n    default => {\n      "event": event,\n      "might_be_invalid": 2\n    }\n  end\nend;\n')),(0,o.kt)("p",null,"Here we switch the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"might_be_invalid")," field, based on ramdomness.\nWe also create a ",(0,o.kt)("inlineCode",{parentName:"p"},"message_id")," from the event ingest timestamp and put it into the kafka headers. We are going to need this ",(0,o.kt)("inlineCode",{parentName:"p"},"message_id")," later on for reporting the ingestion success or failure."),(0,o.kt)("p",null,"The resulting event is then put to kafka into the ",(0,o.kt)("inlineCode",{parentName:"p"},"tremor")," topic."),(0,o.kt)("h3",{id:"ingestion-from-kafka-to-elasticsearch"},"Ingestion from Kafka to Elasticsearch"),(0,o.kt)("p",null,"In our ingestion pipeline in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tremor_out")," directory, we have setup a kafka consumer consuming from the ",(0,o.kt)("inlineCode",{parentName:"p"},"tremor")," topic. It is forwarding the messages to elasticsearch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'define script add_correlation\nscript\n  use tremor::origin;\n  use tremor::system;\n  use std::string;\n\n  # add correlation\n  let $correlation = match $kafka.headers of\n    case headers = %{ present message_id } =>\n      headers["message_id"]\n    default =>\n      # stupid fallback, actually should never happen\n      "#{ system::ingest_ns() }"\n  end;\n\n  # add elastic metadata\n  let $elastic = {\n    "_index": "foo",\n    "_id": string::from_utf8_lossy($kafka["key"])\n  };\n\n  # form the event\n  {\n    "event": event,\n    "some_data": [ origin::as_uri_string() ]\n  }\nend;\n')),(0,o.kt)("p",null,"Here we add metadata for elasticsearch, so it ends up in the right index, we use the kafka key as elastic document id.\nWe also extract a ",(0,o.kt)("inlineCode",{parentName:"p"},"message_id")," from the kafka headers and put it in ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation"),". This metadata value will\nbe forwarded across linked transports, like elasticsearch."),(0,o.kt)("p",null,"Further down in the ingestion pipeline we batch events up into counts of 10 to be more efficient when sending stuff over to elastic."),(0,o.kt)("p",null,"The elasticsearch offramp will issue success and error events from its ",(0,o.kt)("inlineCode",{parentName:"p"},"out")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," ports respectively. One event per batched document or one error event if something went wrong with the overall request (e.g. elasticsearch is not reachable)."),(0,o.kt)("p",null,"We handle those events in two different pipelines. Success events are handled in this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'define script correlate\nscript\n\n  # add kafka metadata\n  let $kafka = {\n    "headers": {\n      "message_id": $correlation\n    },\n    "key": $correlation\n  };\n\n  # build up the notify event for success\n  {\n    "success": event.success,\n    "message_id": $correlation,\n    "payload": event.payload,\n    "elastic_metadata": $elastic\n  }\n\nend;\n\ncreate script correlate;\n\nselect event from in into correlate;\nselect event from correlate into out;\nselect event from correlate/err into err;\n')),(0,o.kt)("p",null,"Here we extract the ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation")," metadata and put it into the event payload. The actual event is sent back to kafka into the topic: ",(0,o.kt)("inlineCode",{parentName:"p"},"ingest_notify"),". The machinery outside of this tremor application can re-inject the message based on the reported status, if need be. For you to enjoy events flying by we also directed the events to stdout/stderr."),(0,o.kt)("p",null,"For handling errors we also get ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation")," metadata and can forward it back to kafka:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'# handle elastic response from failing document or failing bulk insert\n# so this might be scoped to a document or to a failing elastic bulk request\ndefine script error_notify\nscript\n\n  # add kafka metadata\n  let $kafka = {\n    "headers": {\n      "message_id": $correlation\n    },\n    "key": $correlation\n  };\n\n  match $ of\n    case %{ present elastic } =>\n      # this is an error for an invalid event\n      emit {\n        "success": false,\n        "message_id": $correlation,\n        "payload": event.payload,\n        "error": event.error,\n        "elastic_metadata": $elastic\n      } => "out"\n    default =>\n      # this is an error report regarding the bulk request to ES\n      # we know it is batched, so $correlation is an array\n      # we need to explode this event into 1 event per $correlation value,\n      # so the reporting back to kafka has 1 kafka record per ingested document\n      emit event => "explode"\n  end;\nend;\n\ncreate script error_notify;\n\nselect event from in into error_notify;\nselect event from error_notify/out into out;\n# explode the event for each `$correlation` value\nselect {\n  "success": false,\n  "message_id": group[0],\n  "payload": event.payload,\n  "error": event.error\n} from error_notify/explode group by each($correlation) into out;\n\nselect event from error_notify/err into err;\n')),(0,o.kt)("p",null,"Here we distinguish between errors per document (e.g. malformed data for the given index) and errors scoped to the whole request (no ",(0,o.kt)("inlineCode",{parentName:"p"},"$elastic")," metadata).\nIn the case of a request error, we have an array of all the batched ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation"),' values and need to "explode" the event into 1 per ',(0,o.kt)("inlineCode",{parentName:"p"},"$correlation")," id, so we can correctly\nreport back to kafka 1 document at a time."),(0,o.kt)("h2",{id:"trying-this-at-home"},"Trying this at home"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose up\n")),(0,o.kt)("p",null,"Once everything is set up you will see logs like this in your console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'tremor_out_1     | [ERR] {"success":false,"message_id":"MTYyMDEzNjg1NDY2NzI5OTQwMA==","payload":{"event":{"event":{"onramp":"metronome","ingest_ns":1620136854667292300,"id":601},"might_be_invalid":2},"some_data":["tremor-kafka://kafka:9092/tremor/0/601"]},"error":{"caused_by":{"reason":"Current token (VALUE_NUMBER_INT) not of boolean type\\n at [Source: (byte[])\\"POST /_bulk HTTP/1.1\\r\\ncontent-type: application/json\\r\\ncontent-length: 2216\\r\\nuser-agent: reqwest/0.9.24\\r\\naccept: */*\\r\\naccept-encoding: gzip\\r\\nhost: elasticsearch:9200\\r\\n\\r\\n{\\"index\\":{\\"_index\\":\\"foo\\",\\"_id\\":\\"1620136845697865700\\"}}\\n{\\"event\\":{\\"event\\":{\\"onramp\\":\\"metronome\\",\\"ingest_ns\\":1620136845697859400,\\"id\\":592},\\"might_be_invalid\\":[true,false]},\\"some_data\\":[\\"tremor-kafka://kafka:9092/tremor/0/592\\"]}\\n{\\"index\\":{\\"_index\\":\\"foo\\",\\"_id\\":\\"1620136846698130900\\"}}\\n{\\"event\\":{\\"event\\":{\\"onramp\\":\\"metronome\\",\\"ingest_ns\\"\\"[truncated 1884 bytes]; line: 1, column: 103]","type":"json_parse_exception"},"reason":"failed to parse field [event.might_be_invalid] of type [boolean] in document with id \'1620136854667299400\'. Preview of field\'s value: \'2\'","type":"mapper_parsing_exception"},"elastic_metadata":{"_id":"1620136854667299400","_index":"foo","_type":"_doc","id":"1620136854667299400","index":"foo","doc_type":"_doc"}}\ntremor_out_1     | [OK] {"success":true,"message_id":"MTYyMDEzNjg1MjY2NjgxMzAwMA==","payload":{"event":{"event":{"onramp":"metronome","ingest_ns":1620136852666806400,"id":599},"might_be_invalid":[true,false]},"some_data":["tremor-kafka://kafka:9092/tremor/0/599"]},"elastic_metadata":{"_id":"1620136852666813000","_index":"foo","_type":"_doc","id":"1620136852666813000","index":"foo","doc_type":"_doc","version":1}}\ntremor_out_1     | [OK] {"success":true,"message_id":"MTYyMDEzNjg1MzY2NzA5NjAwMA==","payload":{"event":{"event":{"onramp":"metronome","ingest_ns":1620136853667088800,"id":600},"might_be_invalid":[true,false]},"some_data":["tremor-kafka://kafka:9092/tremor/0/600"]},"elastic_metadata":{"_id":"1620136853667096000","_index":"foo","_type":"_doc","id":"1620136853667096000","index":"foo","doc_type":"_doc","version":1}}\n')),(0,o.kt)("p",null,"Here we see one error message and two successful messages. For the error message you can recognize the cause: ",(0,o.kt)("inlineCode",{parentName:"p"},"Current token (VALUE_NUMBER_INT) not of boolean type"),"."))}p.isMDXComponent=!0}}]);