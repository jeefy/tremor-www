"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1924],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Usage Guide",description:"Quick start guide to installing, running and testing Tremor.",draft:!1,hide_table_of_contents:!1},s="Quick Start Guide",p={type:"mdx",permalink:"/quick-start",source:"@site/src/pages/quick-start.md"},u=[{value:"Without Docker",id:"without-docker",children:[{value:"Install Rust",id:"install-rust",children:[]},{value:"Additional Libraries",id:"additional-libraries",children:[]},{value:"Running Tremor",id:"running-tremor",children:[]},{value:"Integration Tests",id:"integration-tests",children:[]}]},{value:"With Docker",id:"with-docker",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quick-start-guide"},"Quick Start Guide"),(0,l.kt)("p",null,"This page explains how to get Tremor running on a local system for development or testing. There are 2 ways of installing Tremor:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Installing Tremor on the system without Docker."),(0,l.kt)("li",{parentName:"ol"},"Using Docker.")),(0,l.kt)("h2",{id:"without-docker"},"Without Docker"),(0,l.kt)("h3",{id:"install-rust"},"Install Rust"),(0,l.kt)("p",null,"Tremor can be run on any platform without using Docker by installing the Rust ecosystem. To install the Rust ecosystem, you can use ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"rustup"),", which is a toolchain installer."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rustup")," will install all the necessary tools required for Rust, which includes ",(0,l.kt)("inlineCode",{parentName:"p"},"rustc")," (the compiler) and ",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo")," (package manager)."),(0,l.kt)("p",null,"Tremor is built using the latest stable toolchain, so when asked to select the toolchain during installation, select ",(0,l.kt)("inlineCode",{parentName:"p"},"stable"),"."),(0,l.kt)("h4",{id:"macoslinux"},"macOS/Linux"),(0,l.kt)("p",null,"Run the following command and follow the on-screen instructions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,l.kt)("p",null,"Now, activate it by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"source $HOME/.cargo/env")," to your ",(0,l.kt)("inlineCode",{parentName:"p"},".rc file"),", and open a new console."),(0,l.kt)("p",null,"For building Tremor on macOS, you also need to install xcode and the commandline tools."),(0,l.kt)("h4",{id:"windows"},"Windows"),(0,l.kt)("p",null,"Pre-requisite: Rust requires the Microsoft C++ build tools for Visual Studio 2013 or later. You can get those from: ",(0,l.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2019"},"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2019"),". During installation, make sure Windows 10 SDK is selected (should be on by default)."),(0,l.kt)("p",null,"Now, download the ",(0,l.kt)("inlineCode",{parentName:"p"},"rustup")," installer by clicking ",(0,l.kt)("a",{parentName:"p",href:"https://win.rustup.rs/x86_64"},"here"),". Run it, and follow the on-screen instructions."),(0,l.kt)("h3",{id:"additional-libraries"},"Additional Libraries"),(0,l.kt)("h4",{id:"macos"},"macOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install cmake\n")),(0,l.kt)("h4",{id:"ubuntu"},"Ubuntu"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install libssl-dev libclang-dev cmake\n")),(0,l.kt)("h4",{id:"windows-1"},"Windows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cmake.org/download/"},"cmake"),": choose the latest stable release (3.16 at the time of writing)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://releases.llvm.org/download.html"},"clang"),": choose Windows pre-built binaries for the latest release that has it (9.0.0 at the time of writing).")),(0,l.kt)("p",null,"Make sure the ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"llvm")," binaries are added to the system path for at least the current user (if not all), as part of the installation process."),(0,l.kt)("p",null,"Since ",(0,l.kt)("inlineCode",{parentName:"p"},"openssl")," does not provided official builds, you can get it via ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vcpkg"},"vcpkg"),"."),(0,l.kt)("p",null,"First, set up ",(0,l.kt)("inlineCode",{parentName:"p"},"vcpkg"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/Microsoft/vcpkg.git\ncd vcpkg\n.\\bootstrap-vcpkg.bat\n.\\vcpkg integrate install # hook up user-wide integration\n")),(0,l.kt)("p",null,"Now install ",(0,l.kt)("inlineCode",{parentName:"p"},"openssl")," with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\\vcpkg install openssl:x64-windows-static\n")),(0,l.kt)("p",null,"To pick up the openssl libs during the Tremor build, you also have to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"OPENSSL_DIR")," environment variable right now. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set OPENSSL_DIR=C:\\Users\\juju\\TREMOR\\vcpkg\\installed\\x64-windows-static\n")),(0,l.kt)("p",null,"Technically, the Rust ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/openssl"},"openssl")," crate will try to discover the",(0,l.kt)("inlineCode",{parentName:"p"}," openssl")," libs via vcpkg (as long as env var ",(0,l.kt)("inlineCode",{parentName:"p"},"VCPKGRS_DYNAMIC")," is set), but that is not working for the recent ",(0,l.kt)("inlineCode",{parentName:"p"},"openssl")," libs supplied by ",(0,l.kt)("inlineCode",{parentName:"p"},"vcpkg"),". There's a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sfackler/rust-openssl/pull/1238"},"fix")," for it and once that lands in a release for ",(0,l.kt)("inlineCode",{parentName:"p"},"rust-openssl")," (and also starts getting used by Tremor dependencies), we won't have to rely on the ",(0,l.kt)("inlineCode",{parentName:"p"},"OPENSSL_DIR")," var."),(0,l.kt)("h3",{id:"running-tremor"},"Running Tremor"),(0,l.kt)("p",null,"After installing Rust and cloning the repository, you can start the Tremor server by running the following from the root (",(0,l.kt)("inlineCode",{parentName:"p"},"tremor-runtime"),") directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run -p tremor-cli -- server run\n")),(0,l.kt)("p",null,"And to run the test suite, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test\n")),(0,l.kt)("p",null,"This will run all the tests in the suite, except those which are feature-gated and not needed to quickly test Tremor."),(0,l.kt)("h4",{id:"rustfmt"},"Rustfmt"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rustfmt")," is a tool for formatting Rust code according to style guidelines. It maintains consistency in the style in the entire project."),(0,l.kt)("p",null,"To install ",(0,l.kt)("inlineCode",{parentName:"p"},"rustfmt")," run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rustup component add rustfmt\n")),(0,l.kt)("p",null,"To run ",(0,l.kt)("inlineCode",{parentName:"p"},"rustfmt")," on the project, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo fmt\n")),(0,l.kt)("h4",{id:"clippy"},"Clippy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Clippy")," is a linting tool that catches common mistakes and improves the rust code. It is available as a toolchain component and can be installed by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rustup component add clippy\n")),(0,l.kt)("p",null,"To run ",(0,l.kt)("inlineCode",{parentName:"p"},"clippy"),", run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo clippy\n")),(0,l.kt)("h4",{id:"rustfix"},"Rustfix"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rustfix")," automatically applies suggestions made by ",(0,l.kt)("inlineCode",{parentName:"p"},"rustc"),". There are two ways of using ",(0,l.kt)("inlineCode",{parentName:"p"},"rustfix"),"- either by adding it as a library to ",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," or by installing it as a cargo subcommand by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-fix\n")),(0,l.kt)("p",null,"To run it, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo fix\n")),(0,l.kt)("h4",{id:"tree"},"Tree"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Cargo tree")," is a subcommand that visualizes a crate's dependency-graph and display a tree structure of them. To install it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-tree\n")),(0,l.kt)("p",null,"To run it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo tree\n")),(0,l.kt)("h4",{id:"flamegraph"},"Flamegraph"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Flamegraph")," is a profiling tool that visualises where time is spent in a program. It generates a SVG image based on the current location of the code and the function that were called to get there."),(0,l.kt)("p",null,"To install it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-flamegraph\n")),(0,l.kt)("p",null,"To run it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo flamegraph\n")),(0,l.kt)("h3",{id:"integration-tests"},"Integration Tests"),(0,l.kt)("p",null,"Tremor contains integration tests that test it from a user's perspective. To run the integration tests you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make it\n")),(0,l.kt)("h2",{id:"with-docker"},"With Docker"),(0,l.kt)("p",null,"Tremor contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," which makes it easier to run and build using docker. It also contains a Makefile so that common Docker commands."),(0,l.kt)("p",null,"Make sure Docker has at least 4GB of memory."),(0,l.kt)("p",null,"To build Tremor, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make image\n")),(0,l.kt)("p",null,"To run the images:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make demo\n")))}d.isMDXComponent=!0}}]);