"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1767],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||c;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var o=2;o<c;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const c={},l="CLI Reference",i={unversionedId:"cli/reference/tracetest",id:"cli/reference/tracetest",title:"CLI Reference",description:"tracetest",source:"@site/docs/cli/reference/tracetest.md",sourceDirName:"cli/reference",slug:"/cli/reference/tracetest",permalink:"/cli/reference/tracetest",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/cli/reference/tracetest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Defining Variable Sets as Text Files",permalink:"/cli/creating-variable-sets"},next:{title:"CLI Reference",permalink:"/cli/reference/tracetest_apply"}},s={},o=[{value:"tracetest",id:"tracetest",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Oct-2023",id:"auto-generated-by-spf13cobra-on-4-oct-2023",level:6}],p={toc:o},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,a.kt)("h2",{id:"tracetest"},"tracetest"),(0,a.kt)("p",null,"CLI to configure, install and execute tests on a Tracetest server"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"CLI to configure, install and execute tests on a Tracetest server"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -c, --config string       config file will be used by the CLI (default "config.yml")\n  -h, --help                help for tracetest\n  -o, --output string       output format [pretty|json|yaml]\n  -s, --server-url string   server url\n  -v, --verbose             display debug information\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_apply"},"tracetest apply"),"\t - Apply resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_completion"},"tracetest completion"),"\t - Generate the autocompletion script for the specified shell"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_configure"},"tracetest configure"),"\t - Configure your tracetest CLI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_dashboard"},"tracetest dashboard"),"\t - Opens the Tracetest Dashboard URL"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_delete"},"tracetest delete"),"\t - Delete resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_export"},"tracetest export"),"\t - Export resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_get"},"tracetest get"),"\t - Get resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_list"},"tracetest list"),"\t - List resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_run"},"tracetest run"),"\t - run resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_server"},"tracetest server"),"\t - Manage your tracetest server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_start"},"tracetest start"),"\t - Start Tracetest"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_version"},"tracetest version"),"\t - Display this CLI tool version")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-oct-2023"},"Auto generated by spf13/cobra on 4-Oct-2023"))}f.isMDXComponent=!0}}]);