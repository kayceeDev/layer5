(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1809],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},23646:function(e,t,n){var r=n(67228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},69100:function(e,t,n){var r=n(99489),a=n(4043);function o(t,n,i){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},4043:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(23646),a=n(46860),o=n(60379),i=n(98206);e.exports=function(e){return r(e)||a(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},60379:function(e,t,n){var r=n(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},46725:function(e,t,n){var r=n(93395);e.exports={MDXRenderer:r}},93395:function(e,t,n){var r=n(69100),a=n(319),o=n(59713),i=n(37316);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(67294),p=n(64983).mdx,u=n(89480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,o=i(e,["scope","children"]),c=u(t),m=s.useMemo((function(){if(!n)return null;var e=l({React:s,mdx:p},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,t]);return s.createElement(m,l({},o))}},46791:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(67294),a=n(70456),o=n(20092),i=n(36179),c=n(45027),l=n(25444),s=n(46725),p=n(51500),u=n(57067),m=n(11521),f=function(e){return e.fields.slug.split("/")[4]},d=function(e){if(void 0!==e&&void 0!==e.href){var t=e.href.split("/");return""!=t[t.length-1]?t[t.length-1]:t[t.length-2]}},h=a.ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-1vys66-0"})(['\n\n    .chapter-back {\n        a {\n            display: inline-flex;\n            svg {\n                align-self: center;\n                font-size: 1.5rem;\n                color: rgb(177, 182, 184);\n                width: 100%;\n                max-width: 1.5rem;\n            }\n            h4 {\n                font-weight: 500;\n                text-transform: capitalize;\n                font-size: 1.25rem;\n            }\n            &:hover {\n                svg, h4 {\n                    color: #3C494F;\n                }\n            }\n        }\n    }\n\n    .toc-list {\n        ul {\n            position: relative;\n            padding-inline-start: 3.031rem;\n            -moz-padding-start: 2.78rem;\n            &::after {\n                position: absolute;\n                inset: 1rem auto 1rem 31px;\n                width: auto;\n                height: auto;\n                border-left: 1px solid rgba(177, 182, 184, 0.25);\n                content: "";\n                z-index: 0;\n            }\n            li {\n                width: fit-content;\n                margin: 1rem 0;\n                &::marker {\n                    color: rgba(177, 182, 184, 0.75);\n                }\n                p {\n                    margin: 0;\n                    font-size: 1rem;\n\n                    a {\n                        color: rgba(0, 0, 0, 0.65);\n                    }\n                }\n                &:hover {\n                    &::marker, p, a {\n                        color: ',";\n                    }\n                }\n\n            }\n            .active-link {\n                &::marker, p, a {\n                    color: ",";\n                }\n            }\n        }\n    }\n    @media(max-width: 992px){\n        .toc-list{\n            ul{\n                &::after {\n                    inset: 1rem auto 1rem 32.4px;\n                }\n            }\n            \n        }\n    }\n    @media(max-width: 767px){\n        position: initial;\n         .toc-list{\n            ul{\n                display: flex;\n                flex-flow: wrap;\n                margin: 1.5rem 0;\n                padding-inline-start: 0rem;\n                &::after{\n                    display: none;\n                }\n                li {\n                    list-style-type: none;\n                    margin:0.5rem;\n                }\n            }\n    }\n    .chapter-back {\n        h4 {\n            margin: 0 1rem;\n        }\n    }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor})),g=function(e){var t=e.TOCData,n=e.courseData,a=e.chapterData,o=e.location,i=(0,r.useState)(""),c=i[0],s=i[1],p=t.filter((function(e){return e.fields.section===f(a)})).map((function(e){return e.fields.chapter}));return(0,r.useEffect)((function(){"learning-paths"===o.pathname.split("/")[2]&&s(d(o))}),[o.pathname]),r.createElement(h,null,r.createElement("div",{className:"chapter-back"},r.createElement(l.Link,{to:"/"+n.fields.slug},r.createElement(m.PSe,null),r.createElement("h4",null,n.frontmatter.courseTitle))),r.createElement("div",{className:"toc-list"},r.createElement("ul",null,p.map((function(e){return r.createElement("li",{key:e,className:e===c?"active-link":""},r.createElement("p",{className:"toc-item",key:e},r.createElement(l.Link,{to:"/learn/learning-paths/"+a.fields.learnpath+"/"+a.fields.course+"/"+f(a)+"/"+e+"/"},(t=e.split("-").join(" "),""+t.charAt(0).toUpperCase()+t.slice(1)))));var t})))))},x=n(96371),v=a.ZP.div.withConfig({displayName:"chaptersstyle__ChapterWrapper",componentId:"mw2rek-0"})(["\n\n    margin: 5rem auto;\n    h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n    }\n    .service-mesh-switcher {\n      display: flex;\n      padding: 0.75rem 1.5rem 1.5rem;;\n      align-items: center;\n    }\n\n    .service-mesh-image {\n        width: 2.75rem;\n        margin-right: 1rem;\n        border-radius: 5px;\n        a {\n            display: block;\n            padding: 0.1rem 0.35rem;\n            text-align: center;\n        }\n        .old-gatsby-image-wrapper {\n            img {\n                max-height: 2.15rem;\n                vertical-align: top;\n            }\n        }\n    }\n\n    .service-mesh-image-active {\n        border: 2px solid rgb(0, 179, 159);\n    }\n\n    .chapter-container {\n        @media (min-width: 576px) {\n            max-width: 100%;\n        }\n        @media (min-width: 1200px) {\n            max-width: 1270px; \n        }\n    }\n    .chapter-data {\n        border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);\n        padding-bottom: 3rem;\n        .chapter-heading {\n            margin-bottom: 1.5rem;\n        }\n    }\n    .toc-switcher-parent-div{\n        position: sticky;\n        top: 10rem;\n        left: 0;\n    }\n"]),y=n(42109),b=n(22626),E=a.ZP.div.withConfig({displayName:"paginatestyle__PaginationWrapper",componentId:"sc-1gpumwi-0"})(["\n    margin: 3rem auto;\n    padding: 1rem;\n    box-shadow: 0 5px 16px 1px rgba(0, 0, 0, 0.1);\n\n    .next-chapter {\n        filter: invert(0.5);\n        font-weight: 600;\n    }\n    .paginate-section {\n        margin-top: 0.5rem;\n        display: flex;\n\n        .next-chapter-heading {\n            flex: 0 0 70%;\n            align-self: center;\n            font-size: 1.6rem;\n        }\n        .chapter-link {\n            flex: 0 0 30%;\n            text-align: center;\n        }\n    }\n"]),w=function(e){var t=e.TOCData,n=e.chapterData,a=e.location,o=(0,r.useState)(""),i=o[0],c=o[1],l=t.filter((function(e){return e.fields.section===f(n)})).map((function(e){return e.fields.chapter}));(0,r.useEffect)((function(){"learning-paths"===a.pathname.split("/")[2]&&c(d(a))}),[a.pathname]);var s=l.indexOf(i),p="",u="";if(s+1<=l.length-1){p=l[s+1];for(var m=0;m<t.length;m++)if(t[m].fields.chapter===p&&t[m].fields.section===f(n)){u=t[m].frontmatter.chapterTitle;break}}return""!==p?r.createElement(E,null,r.createElement("h4",{className:"next-chapter"},"NEXT CHAPTER"),r.createElement("div",{className:"paginate-section"},r.createElement("h3",{className:"next-chapter-heading"},u),r.createElement("div",{className:"chapter-link"},r.createElement(b.Z,{secondary:!0,title:"Next Chapter",url:"/learn/learning-paths/"+n.fields.learnpath+"/"+n.fields.course+"/"+f(n)+"/"+p+"/",external:!1})))):null},O=function(e){var t,n=e.chapterData,a=e.courseData,o=e.location,i=e.serviceMeshesList,c=e.TOCData,m=n.frontmatter,f=n.body,d=a.frontmatter.meshesYouLearn,h=c.filter((function(e){return!!e.fields.section})).map((function(e){return{section:e.fields.section,chapter:e.fields.chapter}})),b=function(e){return function(t){return function(n){var r=t.split("/");return r[e]=n,r.join("/")}}},E=b(4)(n.fields.slug),O=function(e){return n.fields.slug.split("/")[4]===e},k=function(e){return e.serviceMeshes.map((function(e,t){return r.createElement(r.Fragment,null,r.createElement("div",{className:"service-mesh-image "+(O(e.section)?"service-mesh-image-active":""),key:t},r.createElement(l.Link,{to:"/"+e.slug,"data-for":"mesh-name","data-tip":(o=e.section,o.charAt(0).toUpperCase()+o.slice(1)),className:"course",key:t},r.createElement(x.Z,Object.assign({},(n=d,a=e.section,n.find((function(e){return e.name.toLowerCase()==a}))).imagepath,{className:"docker",alt:e.section})))),r.createElement(y.Z,{id:"mesh-name",place:"bottom",effect:"solid",backgroundColor:"rgb(60,73,79)",className:"mesh-tooltip"}));var n,a,o}))};return r.createElement(v,null,r.createElement(u.W2,{className:"chapter-container"},r.createElement(u.X2,null,r.createElement(u.JX,{sm:12,md:3},r.createElement("div",{className:"toc-switcher-parent-div"},r.createElement(g,{courseData:a,TOCData:c,chapterData:n,location:o}),r.createElement("div",null,r.createElement("h4",null,"Service Meshes Available"),r.createElement("div",{className:"service-mesh-switcher"},r.createElement(k,{serviceMeshes:(t=[],i.forEach((function(e){!function(e,t){var r,a=!1;h.forEach((function(t){t.section===e.fields.section&&t.chapter===n.fields.slug.split("/")[5]&&(a=!0)})),t.map((function(e){return e.section})).includes(e.fields.section)||t.push({section:e.fields.section,slug:a?E(e.fields.section):(r=E(e.fields.section),b(5)(r))(h[0].chapter)})}(e,t)})),t)}))))),r.createElement(u.JX,{sm:12,md:9},r.createElement("div",{className:"chapter-data"},r.createElement("h1",{className:"chapter-heading"},m.chapterTitle),r.createElement(p.Iv,null,r.createElement(s.MDXRenderer,null,f))),r.createElement(w,{TOCData:c,chapterData:n,location:o})))))},k=n(34967),_=n(97956),C=n(38155),D=function(e){var t=e.data,n=e.location,l=t.TOC.nodes.sort((function(e,t){var n,r;return(null!==(n=e.frontmatter)&&void 0!==n&&n.order?e.frontmatter.order:100)-(null!==(r=t.frontmatter)&&void 0!==r&&r.order?t.frontmatter.order:100)}));return r.createElement(a.f6,{theme:C.Z},r.createElement(o.Z,null,r.createElement(_.Z,null),r.createElement(i.Z,{title:t.chapter.frontmatter.chapterTitle}),r.createElement(c.Z,null),r.createElement(O,{chapterData:t.chapter,TOCData:l,courseData:t.course.nodes[0],location:n,serviceMeshesList:t.serviceMeshesList.nodes}),r.createElement(k.Z,null)))}}}]);
//# sourceMappingURL=component---src-templates-learn-chapter-js-8a82199b021cf18ddf86.js.map