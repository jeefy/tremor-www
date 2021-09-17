"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9370],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),o=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=o(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=o(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,s(s({ref:e},u),{},{components:n})):r.createElement(f,s({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,s=new Array(a);s[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:i,s[1]=p;for(var o=2;o<a;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67192:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],p={},l="string",o={unversionedId:"tremor-script/stdlib/std/string",id:"tremor-script/stdlib/std/string",isDocsHomePage:!1,title:"string",description:"The string module contains functions that primarily work with strings.",source:"@site/docs/tremor-script/stdlib/std/string.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/string",permalink:"/docs/next/tremor-script/stdlib/std/string",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/tremor-script/stdlib/std/string.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"record",permalink:"/docs/next/tremor-script/stdlib/std/record"},next:{title:"test",permalink:"/docs/next/tremor-script/stdlib/std/test"}},u=[{value:"Functions",id:"functions",children:[{value:"format(format)",id:"formatformat",children:[]},{value:"is_empty(input)",id:"is_emptyinput",children:[]},{value:"len(input)",id:"leninput",children:[]},{value:"bytes(input)",id:"bytesinput",children:[]},{value:"replace(input, from, to)",id:"replaceinput-from-to",children:[]},{value:"trim(input)",id:"triminput",children:[]},{value:"trim_start(input)",id:"trim_startinput",children:[]},{value:"trim_end(input)",id:"trim_endinput",children:[]},{value:"lowercase(input)",id:"lowercaseinput",children:[]},{value:"uppercase(input)",id:"uppercaseinput",children:[]},{value:"capitalize(input)",id:"capitalizeinput",children:[]},{value:"substr(input, start, end)",id:"substrinput-start-end",children:[]},{value:"split(input, separator)",id:"splitinput-separator",children:[]},{value:"contains(input, string)",id:"containsinput-string",children:[]},{value:"from_utf8_lossy(bytes)",id:"from_utf8_lossybytes",children:[]},{value:"into_binary(bytes)",id:"into_binarybytes",children:[]}]}],c={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string"},"string"),(0,a.kt)("p",null,"The string module contains functions that primarily work with strings."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"formatformat"},"format(format)"),(0,a.kt)("p",null,"The placeholder {} is replaced by the arguments in the list in order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},'string::format("the {} is {}.", "meaning of life", 42)\n')),(0,a.kt)("p",null,"would result in the string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},'"the meaning of life is 42"\n')),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"{")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"}")," as string literals in your format string, it needs to be\nescapedby adding another parenthesis of the same type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},'string::format("{{ this is a string format in parenthesis }}")\n')),(0,a.kt)("p",null,"this will output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},'"{ this is a string format in parenthesis }"\n')),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"is_emptyinput"},"is_empty(input)"),(0,a.kt)("p",null,"Returns if the input string is empty or not."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"bool")),(0,a.kt)("h3",{id:"leninput"},"len(input)"),(0,a.kt)("p",null,"Returns the length of the input string (counted as utf8 characters not\nbytes!)."),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")),(0,a.kt)("h3",{id:"bytesinput"},"bytes(input)"),(0,a.kt)("p",null,"Returns the number of bytes composing the input string (may not be equivalent\nto the number of characters!)."),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")),(0,a.kt)("h3",{id:"replaceinput-from-to"},"replace(input, from, to)"),(0,a.kt)("p",null,"Replaces all occurrences of from in Input to to."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"triminput"},"trim(input)"),(0,a.kt)("p",null,"Trims whitespaces both at the start and end of the input string."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"trim_startinput"},"trim_start(input)"),(0,a.kt)("p",null,"Trims whitespaces at the start of the input string."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"trim_endinput"},"trim_end(input)"),(0,a.kt)("p",null,"Trims whitespaces at the end of the input string."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"lowercaseinput"},"lowercase(input)"),(0,a.kt)("p",null,"Turns all characters in the input string to lower case."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"uppercaseinput"},"uppercase(input)"),(0,a.kt)("p",null,"Turns all characters in the input string to upper case."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"capitalizeinput"},"capitalize(input)"),(0,a.kt)("p",null,"Turns the first character in the input string to upper case. This does not\nignore leading non letters!"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"substrinput-start-end"},"substr(input, start, end)"),(0,a.kt)("p",null,"Get all characters from index start to end-1."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"splitinput-separator"},"split(input, separator)"),(0,a.kt)("p",null,"Splits the input string at every occurrence of the separator string and turns\nthe result in an array."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"containsinput-string"},"contains(input, string)"),(0,a.kt)("p",null,"Returns if the input string contains another string or not."),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"bool")),(0,a.kt)("h3",{id:"from_utf8_lossybytes"},"from_utf8_lossy(bytes)"),(0,a.kt)("p",null,"Turns a ",(0,a.kt)("inlineCode",{parentName:"p"},"binary")," into a utf8 string, potentally discarding invalid codepoints"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"into_binarybytes"},"into_binary(bytes)"),(0,a.kt)("p",null,"Turns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," into it's binary representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"binary")))}d.isMDXComponent=!0}}]);