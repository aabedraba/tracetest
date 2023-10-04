"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[6412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18679:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},73992:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(87462),a=r(67294),l=r(86010),o=r(72957),s=r(16550),u=r(75238),i=r(33609),c=r(92560);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,i]=h({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),b=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var b=r(51048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==s&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},18091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(73992),o=r(18679);const s={},u="Kubernetes Deployment",i={unversionedId:"core/deployment/kubernetes",id:"core/deployment/kubernetes",title:"Kubernetes Deployment",description:"This guide walks you through deploying Tracetest with Kubernetes.",source:"@site/docs/core/deployment/kubernetes.mdx",sourceDirName:"core/deployment",slug:"/core/deployment/kubernetes",permalink:"/core/deployment/kubernetes",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/core/deployment/kubernetes.mdx",tags:[],version:"current",frontMatter:{},sidebar:"coreSidebar",previous:{title:"Docker Deployment",permalink:"/core/deployment/docker"}},c={},p=[],m={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes-deployment"},"Kubernetes Deployment"),(0,a.kt)("p",null,"This guide walks you through deploying Tracetest with Kubernetes."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is an example of a production-ready deployment, but real-world deployments can vary significantly depending on desired performance and scale.\nThis setup is ideal for CI/CD environments and QA teams working in shared environments. You can use a remote or local (",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),", ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),", ",(0,a.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d"),", etc) cluster.")),(0,a.kt)("p",null,"You have two options to install Tracetest on Kubernetes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the ",(0,a.kt)("a",{parentName:"li",href:"../getting-started/installation"},"Tracetest CLI")," to guide your installation"),(0,a.kt)("li",{parentName:"ul"},"Using the official ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/helm-charts/tree/main/charts/tracetest"},"Helm chart"))),(0,a.kt)(l.Z,{groupId:"kubernetes-installation",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"cli",label:"Tracetest CLI",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"First, install Tracetest CLI following the instructions on ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/installation#install-the-tracetest-cli"},"Getting Started"),"."),(0,a.kt)("p",null,"After installing the CLI, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tracetest server install\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Expected output"',title:'"Expected','output"':!0},"How do you want to run TraceTest? [type to search]:\n  Using Docker Compose\n> Using Kubernetes\n")),(0,a.kt)("p",null,"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Using Kubernetes")," and follow the instructions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tools required (installed if missing)"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubectl"),(0,a.kt)("li",{parentName:"ul"},"Helm")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optionals"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/pokeshop/"},"PokeShop demo app"),". A sample microservice app to test your Tracetest installation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opentelemetry.io/docs/collector/"},"OpenTelemetry Collector"),". A trace collector, that receives telemetry of other applications and sent it to Tracetest.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tracetest")," Helm chart deployed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"tracetest")," (configurable) namespace."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opentelemetry.io/docs/collector/"},"OpenTelemetry Collector")," deployed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"tracetest")," (configurable) namespace, if selected."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/pokeshop/"},"PokeShop demo app")," deployed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"demo")," namespace, if selected.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How to start"),":"),(0,a.kt)("p",null,"Once installed, you can get started by launching Tracetest:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl port-forward svc/tracetest 11633\n")),(0,a.kt)("p",null,"Then launch a browser to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:11633/"},"http://localhost:11633/"),".")),(0,a.kt)(o.Z,{value:"helm",label:"Helm Chart",mdxType:"TabItem"},(0,a.kt)("p",null,"First, be sure that you have ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," installed in your machine."),(0,a.kt)("p",null,"The Tracetest Helm charts are located ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/tree/main/charts/tracetest"},"here"),"."),(0,a.kt)("p",null,"You can install them locally on your machine with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add kubeshop https://kubeshop.github.io/helm-charts\nhelm repo update\n")),(0,a.kt)("p",null,"After that, you can install Tracetest with ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm install tracetest kubeshop/tracetest --namespace=tracetest --create-namespace\n")),(0,a.kt)("p",null,"Or, generate a manifest file and apply it manually in your Kubernetes cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm template tracetest kubeshop/tracetest > tracetest-kubernetes-manifests.yaml\nkubectl apply -f ./tracetest-kubernetes-manifests.yaml\n")))),(0,a.kt)("p",null,"For more configuration options, visit the ",(0,a.kt)("a",{parentName:"p",href:"/configuration/overview"},"configuration docs"),"."))}h.isMDXComponent=!0}}]);