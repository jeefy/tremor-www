"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4823],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,p=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(p,A(A({ref:t},c),{},{components:n})):r.createElement(p,A({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,A=new Array(a);A[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,A[1]=l;for(var u=2;u<a;u++)A[u]=n[u];return r.createElement.apply(null,A)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),A=["components"],l={},i="Modules",u={unversionedId:"tremor-query/modules",id:"tremor-query/modules",isDocsHomePage:!1,title:"Modules",description:"Tremor-query supports nested namespaces or modules.",source:"@site/docs/tremor-query/modules.md",sourceDirName:"tremor-query",slug:"/tremor-query/modules",permalink:"/docs/next/tremor-query/modules",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/tremor-query/modules.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tremor-Query",permalink:"/docs/next/tremor-query/index"},next:{title:"Operators",permalink:"/docs/next/tremor-query/operators"}},c=[{value:"Defaults",id:"defaults",children:[]},{value:"Referencing Modules with <code>use</code>",id:"referencing-modules-with-use",children:[]}],s={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,A);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modules"},"Modules"),(0,a.kt)("p",null,"Tremor-query supports nested namespaces or modules."),(0,a.kt)("p",null,"Modules in tremor are the lowest unit of compilation available to developers\nto modularise tremor logic across multiple logical namespaces. On the filesystem,\nmodules are rooted at a base path and are nested with folders."),(0,a.kt)("p",null,"Within a file, nesting is via the ",(0,a.kt)("inlineCode",{parentName:"p"},"mod")," clause."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"module grammar",src:n(59252).Z}))),(0,a.kt)("p",null,"Modules can use trickle definitions via the ",(0,a.kt)("inlineCode",{parentName:"p"},"define")," clause variants to define\nwindows, operators or scripts for reuse, or nested ",(0,a.kt)("inlineCode",{parentName:"p"},"mod")," sub-modules."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"module inner statement grammar",src:n(57687).Z}))),(0,a.kt)("h1",{id:"module-path"},"Module Path"),(0,a.kt)("p",null,"Modules can be defined physically on the file system. For example given the following modular hierarchy\non the file system, relative to a root module path: Nested modules can be defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"  +-- foo\n    +-- bar\n      +-- snot.trickle\n    +-- baz\n      +-- badger.trickle\n")),(0,a.kt)("p",null,"The same modular hierarchy can be defined as nested module declarations as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"mod foo with\n  mod bar with\n    define tumbling window second with\n      interval = 1000\n    end;\n  end;\n  mod baz with\n    define tumbling window minute with\n      interval = 60000\n    end;\n  end;\nend;\n\nselect event\nfrom in[snot::second, badger::minute] # use our imported window definitions\ninto out;\n")),(0,a.kt)("p",null,"Assuming this module hierarchy is rooted at ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/my-project/lib")," they can be registered with tremor\nby prepending this folder to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," environment variable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export TREMOR_PATH="/opt/my-project/lib:$TREMOR_PATH"\n')),(0,a.kt)("h2",{id:"defaults"},"Defaults"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," uses ':' on linux/unix to separate multiple module paths."),(0,a.kt)("p",null,"The default places to look for your modules is ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/share/tremor")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," is not provided."),(0,a.kt)("p",null,"The default place for the ",(0,a.kt)("em",{parentName:"p"},"tremor standard library")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/tremor/lib"),", so the full ",(0,a.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," default is"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/share/tremor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/share/tremor/lib"))),(0,a.kt)("h2",{id:"referencing-modules-with-use"},"Referencing Modules with ",(0,a.kt)("inlineCode",{parentName:"h2"},"use")),(0,a.kt)("p",null,"Modules can be loaded via the ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," clause which in turn loads a module from the physical file system via the module path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"use foo::bar::snot; # snot is a ref to 'foo/bar/snot.trickle'\nuse foo::baz::badger; # badger is a ref to 'foo/bar/badger.trickle'\n\nselect event\nfrom in[snot::second, badger::minute] # use our imported window definitions\ninto out;\n")),(0,a.kt)("p",null,"Inline and externalized modules can be used separately or together as appropriate."),(0,a.kt)("p",null,"Where there are existing references a module can be aliased to avoid clashes in the local scope:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"use foo::bar as fleek;\n\nselect event\nfrom in[fleek::second] # use our imported window definitions\ninto out;\n")),(0,a.kt)("p",null,"It is to be noted that inclusion via use will prevent circular inclusion as in file ",(0,a.kt)("inlineCode",{parentName:"p"},"a.trickle")," can use ",(0,a.kt)("inlineCode",{parentName:"p"},"b.trickle")," but beyond\nthat point ",(0,a.kt)("inlineCode",{parentName:"p"},"b.trickle")," can no longer use ",(0,a.kt)("inlineCode",{parentName:"p"},"a.trickle")," as this would create a dependency cycle. This is a restriction of the\ncurrent implementation and may or may not be relaxed in the future."))}d.isMDXComponent=!0},59252:function(e,t){t.Z="data:image/png;base64,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"},57687:function(e,t){t.Z="data:image/png;base64,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"}}]);