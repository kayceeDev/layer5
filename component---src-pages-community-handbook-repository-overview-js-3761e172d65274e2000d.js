(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8945],{26775:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(67294),i=t(69730),o=t(22626),a=t(70456).ZP.div.withConfig({displayName:"TocPaginationstyle__TocPaginationWrapper",componentId:"zco2fp-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]),c=function(){var e,n,t=(0,r.useState)(0),c=t[0],l=t[1];return(0,r.useEffect)((function(){var e=window.location.pathname,n=i.k.findIndex((function(n){return n.link===e}));l(n)}),[]),r.createElement(a,null,c>0?r.createElement(o.Z,{secondary:!0,url:null===(e=i.k[c-1])||void 0===e?void 0:e.link},"← Previous"):null,c<i.k.length-1?r.createElement(o.Z,{primary:!0,url:null===(n=i.k[c+1])||void 0===n?void 0:n.link},"Next →"):null)}},69730:function(e,n,t){"use strict";t.d(n,{k:function(){return r}});var r=[{id:0,link:"/community/handbook/about",text:"About"},{id:1,link:"/community/handbook/community",text:"Community"},{id:2,link:"/community/handbook/contributor-ladder",text:"Contributor Ladder"},{id:3,link:"/community/handbook/contribution",text:"Contribution"},{id:4,link:"/community/handbook/repository-overview",text:"Repository Overview"},{id:5,link:"/community/handbook/projects",text:"Projects"},{id:6,link:"/community/handbook/mentorship-programs",text:"Mentorship Programs"},{id:7,link:"/community/handbook/learn-layer5",text:"Learn Layer5"},{id:8,link:"/community/handbook/connect-with-us",text:"Connect with us"},{id:9,link:"/community/handbook/code-of-conduct",text:"Code of Conduct"},{id:10,link:"/community/handbook/faq",text:"FAQs"}]},52455:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(67294),i=t(11521),o=t(25444),a=t(61424),c=t(70456).ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color:#000000;\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.secondaryColor})),l=t(69730),s=function(){var e=(0,r.useState)(!1),n=e[0],t=e[1];return r.createElement(c,null,r.createElement("div",{className:"go-back"},r.createElement(o.Link,{to:"/community/handbook"},r.createElement(i.PSe,null),r.createElement("h4",null,"Table of Content")),r.createElement("div",{className:"toc-toggle-btn"},n?r.createElement(a.QAE,{className:"toc-menu-icon",onClick:function(){t(!n)}}):r.createElement(a.Ejh,{className:"toc-menu-icon",onClick:function(){t(!n)}}))),r.createElement("div",{className:"toc-list"},r.createElement("ul",{className:"toc-ul "+(n?"toc-ul-open":"")},l.k.map((function(e){return r.createElement("li",{key:e.id},r.createElement(o.Link,{to:e.link,key:e.id,className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},e.text))})))))}},70640:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(67294),i=t(70456),o=t(20092),a=t(36179),c=t(57067),l=t(21101),s=t(52455),m=t(76208),g=t(14847),u=t(46856),h=t(93082),p=[{category:"Frontend",subdata:[{project:"Layer5",image:g.Z,site:"https://layer5.io/",language:"Gatsby and Strapi",repository:"https://github.com/layer5io/layer5"},{project:"Meshery.io",image:m.Z,site:"https://meshery.io",language:"Jekyll",repository:"https://github.com/meshery/meshery"},{project:"Meshery Documentation",image:m.Z,site:"http://docs.meshery.io",language:"Jekyll",repository:"https://github.com/meshery/meshery/tree/master/docs"},{project:"Meshery UI",image:m.Z,site:"https://github.com/layer5io/meshery/tree/master/ui",language:"NextJs, MaterialUI and Billboard.js",repository:"https://github.com/layer5io/meshery/tree/master/ui"},{project:"Service Mesh Performance",image:h.Z,site:"https://smp-spec.io",language:"Jekyll",repository:"https://github.com/service-mesh-performance/service-mesh-performance"},{project:"Nighthawk",image:u.Z,site:"https://getnighthawk.dev",language:"Jekyll",repository:"https://github.com/layer5io/nighthawk"},{project:"MeshSync UI (MeshMap)",image:m.Z,site:"https://drive.google.com/a/layer5.io/open?id=1AMi5UTUwLRFeQRQj7YuRQgMG-4IXWie24z4R88Eoazs",language:"Cytoscape.js",repository:"https://github.com/meshery/meshery"},{project:"Layer5 discussion forum",image:g.Z,site:"https://discuss.layer5.io/",language:"Gatsby and Strapi",repository:" https://staging-discuss.layer5.io/"}]},{category:"Service Mesh Management Repos",subdata:[{project:"Meshery",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery"},{project:"SMI Conformance",language:"Golang",repository:"https://github.com/layer5io/meshery-smi-conformance-action"},{project:"Meshery Operator",language:"Golang",repository:"https://github.com/layer5io/meshery-operator"},{project:"Meshsync",language:"Golang and NATS",repository:"https://github.com/layer5io/meshsync"},{project:"Learn-Layer5",language:"Golang",repository:"https://github.com/layer5io/smi-conformance"},{project:"MeshMonkey",language:"Chaos Mesh / LitmusChaos",repository:"https://github.com/layer5io/meshmonkey"}]},{category:"Adapter Dedicated Repos",subdata:[{project:"Meshery Istio",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-istio"},{project:"Meshery Linkerd",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-linkerd"},{project:"Layer5-istio-adapter",language:"Golang",repository:"https://github.com/layer5io/layer5-istio-adapter"},{project:"Meshery NSM",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-nsm"},{project:"Meshery Octarine",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-octarine"},{project:"Meshery Traefik-mesh",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-traefik-mesh"},{project:"Meshery Kuma",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-kuma"},{project:"Meshery Consul",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-consul"},{project:"Meshery CPX",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-cpx"},{project:"Meshery Adapter Template",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-adapter-template"},{project:"Meshery-tanzu-sm",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-tanzu-sm"},{project:"Meshery-Nginx-sm",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-nginx-sm"},{project:"Meshkit",language:"Toolkit for Layer5's microservices",repository:"https://github.com/layer5io/meshkit"},{project:"Meshery Adapter Library",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-adapter-library"},{project:"Meshery-app-mesh ",language:"Golang gRPC",repository:"https://github.com/layer5io/meshery-app-mesh"}]},{category:"Installation Dedicated Repos",subdata:[{project:"Scoop-bucket",language:"Windows-compatible package management for `mesheryctl`",repository:"https://github.com/layer5io/scoop-bucket"},{project:"Homebrew-tap",language:"MacOS-compatible package management for `mesheryctl`",repository:"https://github.com/layer5io/homebrew-tap"}]},{category:"WebAssembly Repos",subdata:[{project:"Image-hub",language:"Vuejs",repository:"https://github.com/layer5io/image-hub"},{project:"Wasm-filters",language:"Rust",repository:"https://github.com/layer5io/wasm-filters"}]},{category:"Service Mesh Performance Repos ",subdata:[{project:"Service Mesh Performance",language:"a common format for capturing and describing service meshes’ performance and workloads.",repository:"https://github.com/layer5io/service-mesh-performance-specification"},{project:"Wrk2",language:"a C-based load generator. A fork of wrk2, which includes the concept of coordinated omission.",repository:"https://github.com/giltene/wrk2"},{project:"Gowrk2",language:"Augmentation of wrk2 to produce output compatible with Meshery’s visualization of performance test results.",repository:"https://github.com/layer5io/gowrk2"},{project:"Nighthawk",language:"Augmentation of Envoy Nighthawk to produce output compatible with Meshery’s visualization of performance test results",repository:"https://github.com/layer5io/nighthawk-go"}]}],y=t(64482),d=t(26775),M=function(){var e,n,t,i=r.useMemo((function(){return p})),o=i.filter((function(e){return"Frontend"===e.category})),a=i.filter((function(e){return"Frontend"!==e.category}));return r.createElement(l.U,null,r.createElement("div",{className:"page-header-section"},r.createElement("h1",null,"Repository Overview")),r.createElement(s.Z,null),r.createElement("div",{className:"page-section"},r.createElement(c.W2,null,r.createElement("div",{className:"content"},r.createElement("h2",null,"GitHub Organizations and Repositories"),r.createElement("p",null,"This overview serves as a resource to newcomers seeking a perspective of the collective community efforts (from the limited vantage point of a code-centric perspective).",r.createElement("br",null)," Note that the Layer5 community spans four GitHub organizations:"),r.createElement("ul",null,r.createElement("li",null," ",r.createElement("a",{href:"https://github.com/layer5io"},r.createElement("img",{"margin-left":"10%",width:"2.5%",align:"left",src:g.Z}),"  Layer5")),r.createElement("li",null,r.createElement("a",{href:"http://github.com/meshery"}," ",r.createElement("img",((e={margin:"10%",width:"2%",align:"left"}).align="bottom",e.src=m.Z,e.alt="Meshery",e)),"   ","  Meshery")),r.createElement("li",null," ",r.createElement("a",{href:"http://github.com/service-mesh-performance"},r.createElement("img",((n={margin:"10%",width:"2.5%",align:"left"}).align="bottom",n.src=h.Z,n)),"  Service Mesh Performance")),r.createElement("li",null,r.createElement("a",{href:"http://github.com/service-mesh-patterns"},r.createElement("img",((t={margin:"10%",width:"2%",align:"left"}).align="bottom",t.src="https://user-images.githubusercontent.com/85789734/134711787-5bf0aeaa-008c-4e2c-a81e-e05f3dcfb54c.png",t))," ","  Service Mesh Patterns"))),r.createElement("h2",null,"Frontend Projects"),o.map((function(e){var n=e.category;return r.createElement("table",{className:"frontendTable",key:n},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Project"),r.createElement("th",null,"Framework"),r.createElement("th",{className:"linkscol"},"Site"),r.createElement("th",{className:"linkscol"},"GitHub"))),e.subdata.map((function(e){var n=e.project,t=e.language,i=e.repository,o=e.site,a=e.image;return r.createElement("tbody",{key:n},r.createElement("tr",null,r.createElement("td",null,n),r.createElement("td",null,t),r.createElement("td",null,r.createElement("a",{href:o,target:"_blank",rel:"noreferrer"},r.createElement("img",{className:"site-icon",src:a}))),r.createElement("td",null,r.createElement("a",{href:i,target:"_blank",rel:"noreferrer"},r.createElement("img",{className:"github-icon",src:y.Z})))))})))})),r.createElement("h2",null,"Backend Projects"),a.map((function(e){var n=e.category;return r.createElement("table",{key:n},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,n),r.createElement("th",null,"Language"),r.createElement("th",{className:"linkscol"},"GitHub"))),e.subdata.map((function(e){var n=e.project,t=e.language,i=e.repository;return r.createElement("tbody",{key:n},r.createElement("tr",null,r.createElement("td",null,n),r.createElement("td",null,t),r.createElement("td",null,r.createElement("a",{href:i,target:"_blank",rel:"noreferrer"},r.createElement("img",{className:"github-icon",src:y.Z})))))})))})))),r.createElement(d.Z,null)))},L=t(45027),b=t(34967),w=t(97956),j=t(38155),f=function(){return r.createElement(i.f6,{theme:j.Z},r.createElement(o.Z,null,r.createElement(w.Z,null),r.createElement(a.Z,{title:"Repository Overview",description:"The purpose of the handbook is to provide an overview of the Layer5 community"}),r.createElement(L.Z,null),r.createElement(M,null),r.createElement(b.Z,null)))}},21101:function(e,n,t){"use strict";t.d(n,{U:function(){return i}});var r=t(70456),i=(t(25444),r.ZP.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"l1w5w5-0"})(["\n    \n    .highlight{\n      font-weight: 600;\n    }\n\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n      ul > li {\n        color: ",";\n      }\n      ol > li {\n        color: ",";\n      }\n      ul > li > span {\n        color: ",";\n      }\n      ol > li > span {\n        color: ",";\n      }\n    }\n\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n\n    .page-section{\n      margin-top: -36rem;\n      margin-left: 20rem;\n    }\n\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n    \n    .page-header-section {\n        height: 10rem;\n        text-align: center;\n        background: rgb(71,126,150);\n        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n        h1 {\n            line-height: 10rem;\n            color: white;\n        }\n    }\n\n    .community-home-subtitle {\n        text-align: center;\n        padding-top: 3rem;\n        padding-bottom: 1.5rem;\n    }\n\n    #sign-off{\n      padding-bottom: 4rem;\n    }\n    \n    table {\n      border-collapse: collapse;\n      width: 98%;\n      margin: 1rem 0 2rem 0;\n      .github-icon{\n        height: 1.7rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .site-icon{\n        height: 1.6rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n    }\n\n    td, th {\n      border: 0.05rem solid ",";\n      text-align: left;\n      padding: 0.5rem;\n    }\n\n    .linkscol{\n      text-align: center;\n      width:8%;\n    }\n\n    tbody:nth-child(even) {\n      background-color: ",';\n    }\n\n    .codes{\n      width:75%\n      margin-top:-2rem;\n    }\n\n    .community-home-container{\n        padding: 1rem 0;\n        padding-bottom: 4rem;\n        display: flex;\n        flex-wrap : wrap;\n        align-items : center;\n        justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.5em;\n      margin-bottom: 0.15em;\n      vertical-align: bottom;\n      color: transparent;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n\n    input[type=checkbox]:checked + label:before {\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",';\n    }\n    \n    .project-description-icon{\n      width: 3%;\n      transform : translate(0,25%);\n      margin: 0 0.3%;\n    }\n\n    .project-title-icon{\n      margin-left:"10%";\n      width: 4%;\n      align: left;\n      transform : translate(0,28%);\n    }\n\n    \n\n    @media only screen and (max-width: 750px){\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      }\n      .codes{\n      width:100%\n      margin-top:-2rem;\n      }  \n    }\n\n    @media only screen and (max-width: 475px){\n      .page-header-section h1{\n        padding: 0 1rem;\n        line-height: 3rem;\n        padding-top: 4rem;\n      }\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0rem;\n      }\n      table{\n        margin-left: -1.5rem;\n      }\n      .frontendTable{\n        margin-left: -2.8rem;\n      }\n      \n    }\n   \n    @media only screen and (max-width: 1024px){\n      .project-title-icon{\n        width:5.5%;\n        transform : translate(0,23%);\n      }\n      .project-description-icon{\n        width:4%;\n      }\n      \n    }\n    @media only screen and (max-width: 768px){\n      .project-title-icon{\n        width:8.5%;\n      }\n      .project-description-icon{\n        width:7%;\n      }\n      \n    }\n    @media only screen and (max-width: 425px){\n      .project-title-icon{\n        width:11%;\n        transform: translate(0,25%)\n      }\n      .project-description-icon{\n        width:8%;\n      }\n    }\n    @media only screen and (max-width: 375px){\n      .project-title-icon{\n        width:13%;\n        transform : translate(0,20%)\n      }\n      .project-description-icon{\n        width:10%;\n      }\n    }\n\n    .channels-list {\n      padding-left: 40px;\n    }\n\n    .channels-img {\n      width: 40px;\n      height: 30px;\n    }\n\n    .channels-para {\n      display: flex;\n      align-items: flex-end;\n    }\n\n    .newcomers-journey{\n      text-align: center;\n      display: flex;\n      align-items: center;\n      margin: 2.5rem 5rem 3rem 0rem;\n\n      @media only screen and (max-width: 992px){\n        width: 100%;\n      }\n      \n      h2{\n        margin-bottom: 2rem;\n      }\n    }\n\n    .heading{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .heading-start{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      align-self: flex-end;\n      margin-right: 2rem;\n      margin-top: -2rem;\n      h5{\n      font-size: 1.125rem;\n      font-weight: 400;\n      margin-right: 1rem;\n      }\n      img{\n      height: 3rem;\n      width: 4rem;\n      transition: .5s;\n      }\n      img:hover{\n      padding-left: 1rem;\n      transition: .5s;\n      }\n    }\n'],(function(e){return e.theme.menuColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.black}),(function(e){return e.theme.black}),(function(e){return e.theme.tertiaryColor}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColor}),(function(e){return e.theme.secondaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.secondaryLightColor})))},14847:function(e,n){"use strict";n.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDEuNzMgMTQxLjczIj48dGl0bGU+NS1saWdodC1iZzwvdGl0bGU+PHJlY3QgaWQ9Il9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIHg9Ijc5LjYzIiB5PSIyMy45NyIgd2lkdGg9IjM2LjkzIiBoZWlnaHQ9IjE3Ljc5IiBzdHlsZT0iZmlsbDojMDBiMzlmIi8+PHBhdGggaWQ9Il9QYXRoXzIiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNMTE5LjkyLDgzLjlWNzYuNTNjMC04LjQ5LTcuMTQtMTUuMzctMTUuOTQtMTUuMzdINDQuMzhWNTYuMzFIMjIuNTZ2MjFIOTguMVY4My45WiIgc3R5bGU9ImZpbGw6IzAwYjM5ZiIvPjxwb2x5Z29uIGlkPSJfUGF0aF8zIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgcG9pbnRzPSI0NC4zOCA1MC41IDQ0LjM4IDQxLjc2IDczLjYgNDEuNzYgNzMuNiAyMy45NyAyMi41NiAyMy45NyAyMi41NiA1MC41IDQ0LjM4IDUwLjUiIHN0eWxlPSJmaWxsOiMwMGQzYTkiLz48cGF0aCBpZD0iX1BhdGhfNCIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik05OC4xLDg5LjYyVjEwMEg2OC44OHYxNy43OWgzNmExNC43NywxNC43NywwLDAsMCwxNS0xNC40OVY4OS42MloiIHN0eWxlPSJmaWxsOiMwMGQzYTkiLz48cGF0aCBpZD0iX1BhdGhfNSIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik00Mi42Myw5MC41OFYxMDBINjIuODV2MTcuNzloLTI2YTE0Ljc3LDE0Ljc3LDAsMCwxLTE1LTE0LjQ5VjkwLjU4WiIgc3R5bGU9ImZpbGw6IzAwYjM5ZiIvPjwvc3ZnPg=="},93082:function(e,n){"use strict";n.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA1NTAgMjI1Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzY0Nzg4MX0uY2xzLTJ7ZmlsbDojMDBiMzlmfS5jbHMtM3tmaWxsOiMwMGQzYTl9LmNscy00e2ZpbGw6IzNjNDk0ZX0uY2xzLTV7ZmlsbDojNDc3ZTk2fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zbXAtZGFyazwvdGl0bGU+PGcgaWQ9IkdhdWdlIj48cGF0aCBkPSJNMTM3LjYsNzMuMzFhMjg0LDI4NCwwLDAsMSwzMS44LTE0LjRsLTIuNy0xMy4zYTMyNC40LDMyNC40LDAsMCwwLTMzLjUsMTlaIiBjbGFzcz0iY2xzLTEiLz48cGF0aCBkPSJNMzQyLjMsNTEuNjFsMjcuNS0zMWEzMTQuMTYsMzE0LjE2LDAsMCwwLTUzLjctNi45bC0xNiwyOS4yQTI5Ny45MSwyOTcuOTEsMCwwLDEsMzQyLjMsNTEuNjFaIiBjbGFzcz0iY2xzLTIiLz48cGF0aCBkPSJNMTMxLjMsNzYuNjFsLTQtOC4xYy04LjMsNS43LTE2LjQsMTEuOC0yNC4xLDE4LjJsNC4yLDVDMTE1LjIsODYuMzEsMTIzLjIsODEuMzEsMTMxLjMsNzYuNjFaIiBjbGFzcz0iY2xzLTEiLz48cGF0aCBkPSJNMzk1LjUsNzMuMTEsNDM2LjcsNDRhMjk1LjU2LDI5NS41NiwwLDAsMC01OS4xLTIxLjZsLTI3LjksMzEuNEEyODguMjMsMjg4LjIzLDAsMCwxLDM5NS41LDczLjExWiIgY2xhc3M9ImNscy0zIi8+PHBhdGggZD0iTTEwMS43LDk1LjgxbC0zLjgtNC42YTI3Mi41MSwyNzIuNTEsMCwwLDAtMjAuNiwxOS42bDMsMi40Qzg3LjIsMTA3LjExLDk0LjMsMTAxLjMxLDEwMS43LDk1LjgxWiIgY2xhc3M9ImNscy00Ii8+PHBhdGggZD0iTTQ0My43LDQ3LjYxbC00MS4zLDI5LjJhMzAyLjIxLDMwMi4yMSwwLDAsMSw1MC4xLDM1LjdsNTMuNy0yMC45QTI5OS40MywyOTkuNDMsMCwwLDAsNDQzLjcsNDcuNjFaIiBjbGFzcz0iY2xzLTMiLz48cGF0aCBkPSJNNzIuMywxMTUuOTFhMzM5LDMzOSwwLDAsMC0yOSwzNi41QTI5NS43OCwyOTUuNzgsMCwwLDEsNzUsMTE4WiIgY2xhc3M9ImNscy00Ii8+PHBhdGggZD0iTTIxNy42LDI1LjgxbC0xLjEsMTkuOGEyNzYuMjQsMjc2LjI0LDAsMCwxLDMxLjgtNGw2LjktMjQuMkEzMzUuNjQsMzM1LjY0LDAsMCwwLDIxNy42LDI1LjgxWiIgY2xhc3M9ImNscy01Ii8+PHBhdGggZD0iTTI1NS43LDQxLjIxYzMuNi0uMSw3LjMtLjIsMTEtLjIsOC43LDAsMTcuNC40LDI1LjksMS4ybDE1LjYtMjguNmEzMTEuNTQsMzExLjU0LDAsMCwwLTQ1LjUsMi43WiIgY2xhc3M9ImNscy0yIi8+PHBhdGggZD0iTTE3NS45LDU2LjQxQTI3Mi4zOCwyNzIuMzgsMCwwLDEsMjA5LjQsNDdsMS4xLTE5YTMwMC4wNSwzMDAuMDUsMCwwLDAtMzcuMywxNC41WiIgY2xhc3M9ImNscy01Ii8+PC9nPjxnIGlkPSJOZWVkbGUiPjxwYXRoIGQ9Ik0yNDkuODMsMTcyLjcxYTIxLjE3LDIxLjE3LDAsMSwwLDE5LjQsMjIuOEEyMS4xOCwyMS4xOCwwLDAsMCwyNDkuODMsMTcyLjcxWm0tMi4zLDI5LjhhOC43Myw4LjczLDAsMSwxLDkuNC04QTguOCw4LjgsMCwwLDEsMjQ3LjUzLDIwMi41MVoiIGNsYXNzPSJjbHMtNCIvPjxwYXRoIGQ9Ik0zMTUsODEuMTFjLTIuNiwxLjgtNSwzLjctNy41LDUuNmwtOS4zLDE0LjhMMjc5LjUzLDEzMWwtMTguNywyOS41LTQuNyw3LjQtMi4zLDMuN2ExMS4yNywxMS4yNywwLDAsMS0xLjIsMS44LDUuMTcsNS4xNywwLDAsMC0xLjIsMS44Yy0uNywzLTEuMyw2LTEuOSw5LjFhMi43NywyLjc3LDAsMCwwLS4xLjksOC41OSw4LjU5LDAsMCwxLDYuMSwzLjksNS41OCw1LjU4LDAsMCwxLC44LS41YzIuNi0xLjgsNS0zLjcsNy41LTUuNmE0LjUzLDQuNTMsMCwwLDAsMS4xLTEuOSwxOC41OCwxOC41OCwwLDAsMSwxLjEtMS45bDIuMy0zLjcsNC43LTcuNCwxOC43LTI5LjUsMTguNy0yOS41LDkuMy0xNC44Yy43LTMsMS4zLTYuMSwxLjktOS4yczEtNi4yLDEuNC05LjRDMzIwLjIzLDc3LjUxLDMxNy41Myw3OS4yMSwzMTUsODEuMTFaIiBjbGFzcz0iY2xzLTQiLz48L2c+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-community-handbook-repository-overview-js-3761e172d65274e2000d.js.map