"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1609],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82177:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={},c=void 0,s={unversionedId:"tremor-query/pp",id:"version-0.11/tremor-query/pp",isDocsHomePage:!1,title:"pp",description:"Lexical Preprocessor",source:"@site/versioned_docs/version-0.11/tremor-query/pp.md",sourceDirName:"tremor-query",slug:"/tremor-query/pp",permalink:"/docs/tremor-query/pp",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/tremor-query/pp.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"Operators",permalink:"/docs/tremor-query/operators"},next:{title:"Periodic Synthetic Metrics Events",permalink:"/docs/tremor-query/recipes"}},p=[{value:"Lexical Preprocessor",id:"lexical-preprocessor",children:[]},{value:"Line directive",id:"line-directive",children:[]},{value:"Config directive",id:"config-directive",children:[]},{value:"Example preprocessed tremor-script",id:"example-preprocessed-tremor-script",children:[]}],d={toc:p};function u(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"lexical-preprocessor"},"Lexical Preprocessor"),(0,o.kt)("p",null,"In order to support the module mechanism with minimal changes to the API and runtime,\na preprocessor loads all externally referenced modules used in tremor logic defined\nin tremor-script or tremor-query and loads them inline into a preprocessed file."),(0,o.kt)("p",null,"It is an error to attempt to deploy a tremor-script or tremor-query file that uses the\nmodule mechanism as source. The API only accepts non-modular files for backward compatibility\nor preprocessed files. The latter constraint is to ensure that logic deployed into the\nruntime is always traceable to source loaded by a user. Tremor explicitly avoids possibilities\nof modular logic changing at runtime."),(0,o.kt)("p",null,"The preprocessor defends this guarantee on behalf of our users."),(0,o.kt)("h1",{id:"directives"},"Directives"),(0,o.kt)("p",null,"The preprocessor has two directives"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"#!line")," directive"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"#!config")," directive")),(0,o.kt)("h2",{id:"line-directive"},"Line directive"),(0,o.kt)("p",null,"This directive tells the preprocessor that it is now in a logically different position of the file."),(0,o.kt)("p",null,"For each folder/directory that an included source traverses a module statement is injected into the consolidated source."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"#!line")," directive is a implementation detail mentioned here for the same of completeness and not meant to be used or relied on by end users. It may, without prior warning, be removed in the future."),(0,o.kt)("h2",{id:"config-directive"},"Config directive"),(0,o.kt)("p",null,"This directive allows compile-time configuration parameters to be passed into tremor"),(0,o.kt)("h2",{id:"example-preprocessed-tremor-script"},"Example preprocessed tremor-script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-trickle"},"#!line 0 0 0 1 ./foo/bar/snot.trickle\nmod snot with\n#!line 0 0 0 1 ./foo/bar/snot.trickle\ndefine tumbling window second with\n  interval = 1000\nend;\nend;\n#!line 19 1 0 0 main.trickle\n#!line 0 0 0 2 ./foo/baz/badger.trickle\nmod badger with\n#!line 0 0 0 2 ./foo/baz/badger.trickle\ndefine tumbling window minute with\n  interval = 60000\nend;\nend;\n#!line 41 1 0 0 main.trickle\n\nselect event\nfrom in[snot::second, badger::minute]\ninto out;\n")))}u.isMDXComponent=!0}}]);