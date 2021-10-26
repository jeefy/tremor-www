"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4134],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=h(n),d=i,p=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(p,o(o({ref:t},c),{},{components:n})):a.createElement(p,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41949:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return c},default:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"RFCs",sidebar_position:0},l="Tremor RFCs",h={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"RFCs",description:"[Tremor RFCs]: #tremor-rfcs",source:"@site/rfc/index.md",sourceDirName:".",slug:"/index",permalink:"/rfc/index",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"RFCs",sidebar_position:0},sidebar:"defaultSidebar",next:{title:"script-operator-enhacements",permalink:"/rfc/accepted/script-operator-enhacements"}},c=[{value:"When You Need to Follow this Process:",id:"when-you-need-to-follow-this-process",children:[{value:"Sub-team-specific Guidelines",id:"sub-team-specific-guidelines",children:[]},{value:"- Language Changes",id:"--language-changes",children:[]},{value:"- Library Changes",id:"--library-changes",children:[]},{value:"- API Changes",id:"--api-changes",children:[]},{value:"- Architecture Changes",id:"--architecture-changes",children:[]},{value:"- Documentation Changes",id:"--documentation-changes",children:[]}]},{value:"Before Creating an RFC:",id:"before-creating-an-rfc",children:[]},{value:"What the Process Is",id:"what-the-process-is",children:[]},{value:"The RFC Life-cycle",id:"the-rfc-life-cycle",children:[]},{value:"Reviewing RFCs",id:"reviewing-rfcs",children:[]},{value:"Implementing an RFC",id:"implementing-an-rfc",children:[]},{value:"RFC Postponement",id:"rfc-postponement",children:[{value:"Help, This is All Too Informal!",id:"help-this-is-all-too-informal",children:[]}]},{value:"License",id:"license",children:[{value:"Contributions",id:"contributions",children:[]},{value:"Origins",id:"origins",children:[]}]},{value:"RFC Template",id:"rfc-template",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tremor-rfcs"},"Tremor RFCs"),(0,r.kt)("p",null,"Many changes, including bug fixes and documentation improvements can be\nimplemented and reviewed via the normal GitHub pull request workflow."),(0,r.kt)("p",null,'Some changes, though, are "substantial", and we ask that these be put through a\nbit of a design process and produce a consensus among the Tremor community and\nthe sub-teams.'),(0,r.kt)("p",null,'The "RFC" (request for comments) process is intended to provide a consistent\nand controlled path for new features to enter the project and associated sub\nprojects and libraries, so that all stakeholders can be confident about the\ndirection the project is evolving in.'),(0,r.kt)("h2",{id:"when-you-need-to-follow-this-process"},"When You Need to Follow this Process:"),(0,r.kt)("p",null,'You need to follow this process if you intend to make "substantial" changes to\nTremor, Tremor Script, Tremor Query, Tremor pipelines, concurrency model,\nor the RFC process itself. What constitutes a "substantial" change is evolving\nbased on community norms and varies depending on what part of the ecosystem you\nare proposing to change, but may include the following:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any semantic or syntactic change to the project that is not a bugfix."),(0,r.kt)("li",{parentName:"ul"},"Removing features, including those that are feature-gated."),(0,r.kt)("li",{parentName:"ul"},"Changes to the interface between the components, sub-systems and\nlibraries, including tremor-script function library and tremor-query\naggregate function library.")),(0,r.kt)("p",null,"Some changes do not require an RFC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Rephrasing, reorganizing, refactoring, or otherwise "changing shape does\nnot change meaning".'),(0,r.kt)("li",{parentName:"ul"},"Additions that strictly improve objective, numerical quality criteria\n(warning removal, speedup, better platform coverage, more parallelism, catch\nmore errors, etc.)."),(0,r.kt)("li",{parentName:"ul"},"Additions only likely to be ",(0,r.kt)("em",{parentName:"li"},"noticed by")," other developers-of-Tremor,\ninvisible to users-of-Tremor.")),(0,r.kt)("p",null,"If you submit a pull request to implement a new feature without going through\nthe RFC process, it may be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modified to add a ",(0,r.kt)("inlineCode",{parentName:"li"},"needs-rfc")," label by a maintainer. The maintainers will assist with following the RFC process and getting the candidate contribution merged following the RFC process."),(0,r.kt)("li",{parentName:"ul"},"Closed with a polite request to submit an RFC first. For significant contributions we will likely request that one of the contributors becomes a maintainer of tremor - the the very least for the contribution."),(0,r.kt)("li",{parentName:"ul"},"For large contributions - we recommend engaging with the community and maintainers as early as possible so that we can align the goals of the project and the needs of a specific contribution.")),(0,r.kt)("h3",{id:"sub-team-specific-guidelines"},"Sub-team-specific Guidelines"),(0,r.kt)("p",null,"For more details on when an RFC is required for the following areas, please see\nthe Tremor community's ","[sub-team]"," specific guidelines for:"),(0,r.kt)("h3",{id:"--language-changes"},"- ",(0,r.kt)("a",{parentName:"h3",href:"process/lang_changes"},"Language Changes")),(0,r.kt)("h3",{id:"--library-changes"},"- ",(0,r.kt)("a",{parentName:"h3",href:"process/libs_changes"},"Library Changes")),(0,r.kt)("h3",{id:"--api-changes"},"- ",(0,r.kt)("a",{parentName:"h3",href:"process/api_changes"},"API Changes")),(0,r.kt)("h3",{id:"--architecture-changes"},"- ",(0,r.kt)("a",{parentName:"h3",href:"process/arch_changes"},"Architecture Changes")),(0,r.kt)("h3",{id:"--documentation-changes"},"- ",(0,r.kt)("a",{parentName:"h3",href:"process/docs_changes"},"Documentation Changes")),(0,r.kt)("h2",{id:"before-creating-an-rfc"},"Before Creating an RFC:"),(0,r.kt)("p",null,"A hastily-proposed RFC can hurt its chances of acceptance. Low quality\nproposals, proposals for previously-rejected features, or those that don't fit\ninto the near-term roadmap, may be quickly rejected, which can be demotivating\nfor the unprepared contributor. Laying some groundwork ahead of the RFC can\nmake the process smoother."),(0,r.kt)("p",null,"Although there is no single way to prepare for submitting an RFC, it is\ngenerally a good idea to pursue feedback from other project developers\nbeforehand, to ascertain that the RFC may be desirable; having a consistent\nimpact on the project requires concerted effort toward consensus-building."),(0,r.kt)("p",null,"The most common preparations for writing and submitting an RFC include talking\nthe idea over on our ",(0,r.kt)("a",{parentName:"p",href:"https://chat.tremor.rs"},"Tremor chat"),', and occasionally posting "pre-RFCs" on the\nchat environment. You may file issues on this repo for discussion, but these are\nnot actively looked at by the teams.'),(0,r.kt)("p",null,"As a rule of thumb, receiving encouraging feedback from long-standing project\ndevelopers, and particularly members of the relevant ","[sub-team]"," is a good\nindication that the RFC is worth pursuing."),(0,r.kt)("h2",{id:"what-the-process-is"},"What the Process Is"),(0,r.kt)("p",null,'In short, to get a major feature added to Tremor, one must first get the RFC\nmerged into the RFC repository as a markdown file. At that point the RFC is\n"active" and may be implemented with the goal of eventual inclusion into Tremor.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fork the RFC repo ","[RFC repository]","."),(0,r.kt)("li",{parentName:"ul"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"process/0000-template.md")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"accepted/0000-my-feature.md"),' (where "my-feature" is\ndescriptive. Don\'t assign an RFC number yet.).'),(0,r.kt)("li",{parentName:"ul"},"Fill in the RFC. Put care into the details: RFCs that do not present\nconvincing motivation, demonstrate lack of understanding of the design's\nimpact, or are disingenuous about the drawbacks or alternatives tend to\nbe poorly-received."),(0,r.kt)("li",{parentName:"ul"},"Submit a pull request. As a pull request, the RFC will receive design\nfeedback from the larger community, and the author should be prepared to\nrevise it in response."),(0,r.kt)("li",{parentName:"ul"},"Each pull request will be labeled with the most relevant ","[sub-team]",", which\nwill lead to its being triaged by that team in a future meeting and assigned\nto a member of the sub-team."),(0,r.kt)("li",{parentName:"ul"},"Build consensus and integrate feedback. RFCs that have broad support are\nmuch more likely to make progress than those that don't receive any\ncomments. Feel free to reach out to the RFC assignee in particular to get\nhelp identifying stakeholders and obstacles."),(0,r.kt)("li",{parentName:"ul"},"The sub-team will discuss the RFC pull request, as much as possible in the\ncomment thread of the pull request itself. Offline discussion will be\nsummarized on the pull request comment thread."),(0,r.kt)("li",{parentName:"ul"},"RFCs rarely go through this process unchanged, especially as alternatives\nand drawbacks are shown. You can make edits, big and small, to the RFC to\nclarify or change the design, but make changes as new commits to the pull\nrequest, and leave a comment on the pull request explaining your changes.\nSpecifically, do not squash or rebase commits after they are visible on the\npull request."),(0,r.kt)("li",{parentName:"ul"},'At some point, a member of the sub-team will propose a "motion for final\ncomment period" (FCP), along with a ',(0,r.kt)("em",{parentName:"li"},"disposition")," for the RFC (merge, close,\nor postpone)."),(0,r.kt)("li",{parentName:"ul"},"This step is taken when enough of the tradeoffs have been discussed that\nthe sub-team is in a position to make a decision. That does not require\nconsensus amongst all participants in the RFC thread (which is usually\nimpossible). However, the argument supporting the disposition on the RFC\nneeds to have already been clearly articulated, and there should not be a\nstrong consensus ",(0,r.kt)("em",{parentName:"li"},"against")," that position outside of the sub-team. Sub-team\nmembers use their best judgment in taking this step, and the FCP itself\nensures there is ample time and notification for stakeholders to push back\nif it is made prematurely.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For RFCs with lengthy discussion, the motion to FCP is usually preceded by\na ",(0,r.kt)("em",{parentName:"li"},"summary comment")," trying to lay out the current state of the discussion\nand major tradeoffs/points of disagreement."),(0,r.kt)("li",{parentName:"ul"},"Before actually entering FCP, ",(0,r.kt)("em",{parentName:"li"},"all")," members of the sub-team must sign off;\nthis is often the point at which many sub-team members first review the RFC\nin full depth."))),(0,r.kt)("li",{parentName:"ul"},"The FCP lasts ten calendar days, so that it is open for at least 5 business\ndays."),(0,r.kt)("li",{parentName:"ul"},"In most cases, the FCP period is quiet, and the RFC is either merged or\nclosed. However, sometimes substantial new arguments or ideas are raised,\nthe FCP is cancelled, and the RFC goes back into development mode.")),(0,r.kt)("h2",{id:"the-rfc-life-cycle"},"The RFC Life-cycle"),(0,r.kt)("p",null,'Once an RFC becomes "active", then authors may implement it and submit the\nfeature as a pull request to the Tremor repo. Being "active" is not a rubber\nstamp, and in particular still does not mean the feature will ultimately be\nmerged; it does mean that in principle all the major stakeholders have agreed\nto the feature and are amenable to merging it.'),(0,r.kt)("p",null,'Furthermore, the fact that a given RFC has been accepted and is "active"\nimplies nothing about what priority is assigned to its implementation, nor does\nit imply anything about whether a Tremor contributor has been assigned the task of implementing the task. While it is not ',(0,r.kt)("em",{parentName:"p"},"necessary")," that the author of the\nRFC also pursue the implementation, it is by far the most effective way to see\nan RFC through to completion: authors should not expect that other project\nstakeholders will take on responsibility for implementing their accepted feature."),(0,r.kt)("p",null,'Modifications to "active" RFCs can be done in follow-up pull requests. We\nstrive to write each RFC in a manner that it will reflect the final design of\nthe feature; but the nature of the process means that we cannot expect every\nmerged RFC to actually reflect what the end result will be at the time of the\nnext major release.'),(0,r.kt)("p",null,'In general, once accepted, RFCs should not be substantially changed. Only very\nminor changes should be submitted as amendments. More substantial changes\nshould be new RFCs, with a note added to the original RFC. Exactly what counts\nas a "very minor change" is up to the sub-team to decide; check\n',(0,r.kt)("a",{parentName:"p",href:"#sub-team-specific-guidelines"},"Sub-team specific guidelines")," for more details."),(0,r.kt)("h2",{id:"reviewing-rfcs"},"Reviewing RFCs"),(0,r.kt)("p",null,"While the RFC pull request is up, the sub-team may schedule meetings with the\nauthor and/or relevant stakeholders to discuss the issues in greater detail,\nand in some cases the topic may be discussed at a sub-team meeting. In either\ncase, a summary from the meeting will be posted back to the RFC pull request."),(0,r.kt)("p",null,"A sub-team makes final decisions about RFCs after the benefits and drawbacks\nare well understood. These decisions can be made at any time, but the sub-team\nwill regularly issue decisions. When a decision is made, the RFC pull request\nwill either be merged or closed. In either case, if the reasoning is not clear\nfrom the discussion in thread, the sub-team will add a comment describing the\nrationale for the decision."),(0,r.kt)("h2",{id:"implementing-an-rfc"},"Implementing an RFC"),(0,r.kt)("p",null,"Some accepted RFCs represent vital features that need to be implemented right\naway. Other accepted RFCs can represent features that can wait until some\narbitrary developer feels like doing the work. Every accepted RFC has an\nassociated issue tracking its implementation in the Rust repository; thus that\nassociated issue can be assigned a priority via the triage process that the\nteam uses for all issues in the Rust repository."),(0,r.kt)("p",null,"The author of an RFC is not obligated to implement it. That said, the RFC\nauthor (like any other developer) is welcome to post an implementation for\nreview after the RFC has been accepted."),(0,r.kt)("p",null,'If you are interested in working on the implementation for an "active" RFC, but\ncannot determine if someone else is already working on it, feel free to ask\n(e.g. by leaving a comment on the associated issue).'),(0,r.kt)("h2",{id:"rfc-postponement"},"RFC Postponement"),(0,r.kt)("p",null,'Some RFC pull requests are tagged with the "postponed" label when they are\nclosed (as part of the rejection process). An RFC closed with "postponed" is\nmarked as such because we want neither to think about evaluating the proposal\nnor about implementing the described feature until some time in the future, and\nwe believe that we can afford to wait until then to do so.  Postponed pull\nrequests may be re-opened when the time is right. We don\'t have any formal\nprocess for that, you should ask members of the relevant sub-team.'),(0,r.kt)("p",null,'Usually, an RFC pull request marked as "postponed" has already passed an\ninformal first round of evaluation, namely the round of "do we think we would\never possibly consider making this change, as outlined in the RFC pull request,\nor some semi-obvious variation of it." (When the answer to the latter question\nis "no", then the appropriate response is to close the RFC, not postpone it.)'),(0,r.kt)("h3",{id:"help-this-is-all-too-informal"},"Help, This is All Too Informal!"),(0,r.kt)("p",null,"The process is intended to be as lightweight as reasonable for the present\ncircumstances. As usual, we are trying to let the process be driven by\nconsensus and community norms, not impose more structure than necessary."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tremor chat: ",(0,r.kt)("a",{parentName:"li",href:"https://chat.tremor.rs"},"Discord")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://github.com/tremor-rs/tremor-www/rfc"},"RFC repository"))),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"This repository is currently licensed under:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apache License, Version 2.0, (",(0,r.kt)("a",{parentName:"li",href:"http://www.apache.org/licenses/LICENSE-2.0"},"LICENSE"),")")),(0,r.kt)("h3",{id:"contributions"},"Contributions"),(0,r.kt)("p",null,"Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be licensed as above, without any additional terms or conditions."),(0,r.kt)("h3",{id:"origins"},"Origins"),(0,r.kt)("p",null,"This process derives from, and is based on, the Rust language community RFC process ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rfcs"},"from here"),"."),(0,r.kt)("h2",{id:"rfc-template"},"RFC Template"),(0,r.kt)("p",null,"This is the ",(0,r.kt)("a",{parentName:"p",href:"process/0000-template/"},"template")," you should use when making an RFC."))}m.isMDXComponent=!0}}]);