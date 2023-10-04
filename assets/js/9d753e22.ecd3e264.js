"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[6297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="Demo Settings",s={unversionedId:"configuration/demo",id:"configuration/demo",title:"Demo Settings",description:"Tracetest has the option to enable Test examples for our Pokeshop Demo App or the OpenTelemetry Astronomy Shop Demo. You will need an instance of those applications running alongside your Tracetest server to be able to use them. The demo settings can be adjusted both from the Tracetest UI and from the CLI.",source:"@site/docs/configuration/demo.md",sourceDirName:"configuration",slug:"/configuration/demo",permalink:"/configuration/demo",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/demo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Runner Settings",permalink:"/configuration/test-runner"},next:{title:"Analytics Settings",permalink:"/configuration/analytics"}},c={},l=[{value:"Changing Demo Settings from the UI",id:"changing-demo-settings-from-the-ui",level:2},{value:"Changing Demo Settings with the CLI",id:"changing-demo-settings-with-the-cli",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"demo-settings"},"Demo Settings"),(0,r.kt)("p",null,"Tracetest has the option to enable Test examples for our Pokeshop Demo App or the OpenTelemetry Astronomy Shop Demo. You will need an instance of those applications running alongside your Tracetest server to be able to use them. The demo settings can be adjusted both from the Tracetest UI and from the CLI. "),(0,r.kt)("h2",{id:"changing-demo-settings-from-the-ui"},"Changing Demo Settings from the UI"),(0,r.kt)("p",null,"In the Web UI, open (1) Settings and select the (2) Demo tab:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Demo Settings",src:n(58748).Z,width:"2846",height:"1592"})),(0,r.kt)("p",null,"From this demo settings page, you can enable the Pokeshop and/or OpenTelemetry Astronomy Shop demos. For each demo, you will need to tell Tracetest the location of the relevant demo's endpoints, adjusting the domain name/ip address and, possibly, the port to match your configuration."),(0,r.kt)("h2",{id:"changing-demo-settings-with-the-cli"},"Changing Demo Settings with the CLI"),(0,r.kt)("p",null,"Or, if you prefer using the CLI, you can use this resource definition file to enable the Pokemon app demo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: Demo\nspec:\n  type: pokeshop\n  enabled: true\n  name: pokeshop\n  opentelemetryStore: {}\n  pokeshop:\n    httpEndpoint: http://demo-pokemon-api.demo.svc.cluster.local\n    grpcEndpoint: demo-pokemon-api.demo:8082\n")),(0,r.kt)("p",null,"Proceed to run this command in the terminal and specify the file above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tracetest apply demo -f my/resource/demo-resource.yaml\n")),(0,r.kt)("p",null,"You can configure the OpenTelemetry Community Demo using the same commands with this yaml file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: Demo\nspec:\n  type: opentelemetryStore\n  enabled: true\n  name: opentelemetryStore\n  opentelemetryStore:\n    cartEndpoint: http://otel-cartservice.otel-demo:7070\n    checkoutEndpoint: http://otel-checkoutservice.otel-demo:5050\n    frontendEndpoint: http://otel-frontend.otel-demo:8084\n    productCatalogEndpoint: http://otel-productcatalogservice.otel-demo:3550\n  pokeshop: {}\n\n")))}u.isMDXComponent=!0},58748:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/demo-settings-0.11.3-0d9cc9836f349c43fefe42d145662c10.png"}}]);