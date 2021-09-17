"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2412],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),k=n,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||i;return r?a.createElement(u,o(o({ref:t},s),{},{components:r})):a.createElement(u,o({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69679:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={},p="KV",c={unversionedId:"tremor-script/extractors/kv",id:"version-0.11/tremor-script/extractors/kv",isDocsHomePage:!1,title:"KV",description:"Parses a string into a map. It is possible to split based on different characters that represent  either field or key value boundaries.",source:"@site/versioned_docs/version-0.11/tremor-script/extractors/kv.md",sourceDirName:"tremor-script/extractors",slug:"/tremor-script/extractors/kv",permalink:"/docs/tremor-script/extractors/kv",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/tremor-script/extractors/kv.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"JSON",permalink:"/docs/tremor-script/extractors/json"},next:{title:"Regex (re)",permalink:"/docs/tremor-script/extractors/regex"}},s=[{value:"Predicate",id:"predicate",children:[]},{value:"Extractor",id:"extractor",children:[]},{value:"Example",id:"example",children:[]},{value:"Example 2",id:"example-2",children:[]}],d={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kv"},"KV"),(0,i.kt)("p",null," Parses a string into a map. It is possible to split based on different characters that represent  either field or key value boundaries."),(0,i.kt)("p",null," A good part of the logstash functionality will be handled ouYeside of this function and in a  generic way in tremor script."),(0,i.kt)("h2",{id:"predicate"},"Predicate"),(0,i.kt)("p",null,"When used with ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),", the predicate passes if a string is valid that can be converted into a map."),(0,i.kt)("h2",{id:"extractor"},"Extractor"),(0,i.kt)("p",null,"If the predicate passes, it converts the target into its equivalent map."),(0,i.kt)("p",null," Features (in relation to Logstash):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Supported"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"allow_duplicate_values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"default_keys"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"exclude_keys"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"field_split"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes (default ",(0,i.kt)("inlineCode",{parentName:"td"},'" "')," (space))")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"field_split_pattern"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"include_bracke"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"include_keys"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"prefix"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"recursive"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"remove_char_key"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"remove_char_value"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"source"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"target"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tag_on_failure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tag_on_timeout"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"timeout_millis"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"transform_key"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"transform_value"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"trim_key"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"trim_value"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"value_split"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes (default ",(0,i.kt)("inlineCode",{parentName:"td"},'":"')," (colon))")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"value_split_pattern"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"whitespace"),(0,i.kt)("td",{parentName:"tr",align:"center"},"(via tremor script)")))),(0,i.kt)("p",null,"To specify a value separator (the separator used between key and value) use the pattern form ",(0,i.kt)("inlineCode",{parentName:"p"},"kv|%{key}=%{val}|"),". Both ",(0,i.kt)("inlineCode",{parentName:"p"},"%{key}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"%{val}")," are fixed keywords and can not be substituted for other names. The pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"kv|%{key}=%{val}|")," would lead to ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," being the separator. Multiple of those pairs can be given to use multiple separators."),(0,i.kt)("p",null,"To specify field separators they need to be either before or after a value separator or on their own. ",(0,i.kt)("inlineCode",{parentName:"p"},"kv|&|")," would separate the fields by ",(0,i.kt)("inlineCode",{parentName:"p"},"&"),"."),(0,i.kt)("p",null,"Both field and value separators can be related without harm."),(0,i.kt)("p",null,"Field and value separators can not overlap, even partially."),(0,i.kt)("p",null,"Complex patterns can be given by using multiple key value pairs with different separators, their order does not matter and they will not be required to be present."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"All of the following are equivalent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "test" : "foo:bar snot:badger" } of\n   case cake = %{ test ~= kv|| } => cake\n   case cake = %{ test ~= kv| | } => cake\n   case cake = %{ test ~= kv|| } => cake\n   case cake = %{ test ~= kv|%{key}:%{val}|} => cake\n   case cake = %{ test ~= kv|%{key}:%{val} |} => cake\n   case cake = %{ test ~= kv| %{key}:%{val}|} => cake\n   case cake = %{ test ~= kv|%{key}:%{val} %{key}:%{val} %{key}:%{val}|} => cake\n   default => "ko"\nend;\n')),(0,i.kt)("p",null,"This will output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"test": {\n  "foo": "bar",\n  "snot": "badger"\n}\n')),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"Match query parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match event of\n  case cake = %{test ~= kv|%{key}=%{val}&|} => cake\n  default => "ko"\nend;\n')))}m.isMDXComponent=!0}}]);