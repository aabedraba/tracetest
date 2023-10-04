"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,b=c["".concat(u,".").concat(m)]||c[m]||y[m]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},o="no-empty-attributes",l={unversionedId:"analyzer/rules/no-empty-attributes",id:"analyzer/rules/no-empty-attributes",title:"no-empty-attributes",description:"Disallow empty attribute values.",source:"@site/docs/analyzer/rules/no-empty-attributes.md",sourceDirName:"analyzer/rules",slug:"/analyzer/rules/no-empty-attributes",permalink:"/analyzer/rules/no-empty-attributes",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/analyzer/rules/no-empty-attributes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"required-attributes",permalink:"/analyzer/rules/required-attributes"},next:{title:"Security",permalink:"/analyzer/plugins/security"}},u={},s=[{value:"Rule Details",id:"rule-details",level:2},{value:"Options",id:"options",level:2},{value:"When Not To Use It",id:"when-not-to-use-it",level:2}],p={toc:s},c="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"no-empty-attributes"},"no-empty-attributes"),(0,a.kt)("p",null,"Disallow empty attribute values."),(0,a.kt)("h2",{id:"rule-details"},"Rule Details"),(0,a.kt)("p",null,"An\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Attribute"),"\xa0is a key-value pair, which is encapsulated as part of a span. The attribute value should not be empty to be considered valid."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"This rule has the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"error"')," requires attribute values to not be empty"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"disabled"')," disables the attribute values verification"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"warning"')," verifies attribute values to not be empty but does not impact the analyzer score")),(0,a.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,a.kt)("p",null,"If you intentionally use empty attribute values then you can disable this rule."))}y.isMDXComponent=!0}}]);