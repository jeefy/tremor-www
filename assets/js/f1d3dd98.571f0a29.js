"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2911],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=u;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68179:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],a={},l=void 0,s={unversionedId:"tremor-script/pp",id:"tremor-script/pp",isDocsHomePage:!1,title:"pp",description:"Lexical Preprocessor",source:"@site/docs/tremor-script/pp.md",sourceDirName:"tremor-script",slug:"/tremor-script/pp",permalink:"/docs/next/tremor-script/pp",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/tremor-script/pp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/docs/next/tremor-script/modules"},next:{title:"Recipes",permalink:"/docs/next/tremor-script/recipes"}},p=[{value:"Lexical Preprocessor",id:"lexical-preprocessor",children:[]},{value:"Line directive",id:"line-directive",children:[]},{value:"Config directive",id:"config-directive",children:[]},{value:"Example preprocessed tremor-script",id:"example-preprocessed-tremor-script",children:[]}],d={toc:p};function u(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lexical-preprocessor"},"Lexical Preprocessor"),(0,i.kt)("p",null,"In order to support the module mechanism with minimal changes to the API and runtime,\na preprocessor loads all externally referenced modules used in tremor logic defined\nin tremor-script or tremor-query and loads them inline into a preprocessed file."),(0,i.kt)("p",null,"It is an error to attempt to deploy a tremor-script or tremor-query file that uses the\nmodule mechanism as source. The API only accepts non-modular files for backward compatibility\nor preprocessed files. The latter constraint is to ensure that logic deployed into the\nruntime is always traceable to source loaded by a user. Tremor explicitly avoids possibilities\nof modular logic changing at runtime."),(0,i.kt)("p",null,"The preprocessor defends this guarantee on behalf of our users."),(0,i.kt)("h1",{id:"directives"},"Directives"),(0,i.kt)("p",null,"The preprocessor has two directives"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"#!line")," directive"),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"#!config")," directive")),(0,i.kt)("h2",{id:"line-directive"},"Line directive"),(0,i.kt)("p",null,"This directive tells the preprocessor that it is now in a logically different position of the file."),(0,i.kt)("p",null,"For each folder/directory that an included source traverses a module statement is injected into the consolidated source."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"#!line")," directive is a implementation detail mentioned here for the same of completeness and not meant to be used or relied on by end users. It may, without prior warning, be removed in the future."),(0,i.kt)("h2",{id:"config-directive"},"Config directive"),(0,i.kt)("p",null,"This directive allows compile-time configuration parameters to be passed into tremor"),(0,i.kt)("h2",{id:"example-preprocessed-tremor-script"},"Example preprocessed tremor-script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'#!line 0 0 0 1 ./foo/bar/snot.tremor\nmod snot with\n#!line 0 0 0 1 ./foo/bar/snot.tremor\nconst snot = "beep";\nend;\n#!line 19 1 0 0 script.tremor\n#!line 0 0 0 2 ./foo/baz/badger.tremor\nmod badger with\n#!line 0 0 0 2 ./foo/baz/badger.tremor\nconst badger = "boop";\nend;\n#!line 41 1 0 0 script.tremor\n\nlet c = "#{snot::snot}#{badger::badger}";\n\nemit c\n')))}u.isMDXComponent=!0}}]);