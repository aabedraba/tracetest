"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[7591],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=a,g=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38765:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="Configuring Data Stores",s={unversionedId:"web-ui/creating-data-stores",id:"web-ui/creating-data-stores",title:"Configuring Data Stores",description:"This page shows how to configure data stores in the Tracetest Web UI.",source:"@site/docs/web-ui/creating-data-stores.md",sourceDirName:"web-ui",slug:"/web-ui/creating-data-stores",permalink:"/web-ui/creating-data-stores",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/web-ui/creating-data-stores.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"prefer-dns",permalink:"/analyzer/rules/prefer-dns"},next:{title:"Creating Tests",permalink:"/web-ui/creating-tests"}},c={},u=[{value:"Supported Trace Data Stores",id:"supported-trace-data-stores",level:2}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-data-stores"},"Configuring Data Stores"),(0,a.kt)("p",null,"This page shows how to configure data stores in the Tracetest Web UI."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("strong",{parentName:"p"},"settings")," and select the ",(0,a.kt)("strong",{parentName:"p"},"Configure Data Store")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1685971832/docs/Jaeger-settings-1477bdfe17b0675850681e0cfb85859a_ziy7un.png",alt:null})),(0,a.kt)("p",null,"To help you configure the connection, you can use the ",(0,a.kt)("strong",{parentName:"p"},"Test Connection")," button to validate if the connection is successful and Tracetest can fetch traces from the data store."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1685972024/docs/demo.tracetest.io_transaction_QZ3ejgl4R_run_2_3_wrwikl.png",alt:null})),(0,a.kt)("h2",{id:"supported-trace-data-stores"},"Supported Trace Data Stores"),(0,a.kt)("p",null,"Select from the ",(0,a.kt)("a",{parentName:"p",href:"/configuration/overview"},"list of available data stores")," and configure the connection."))}d.isMDXComponent=!0}}]);