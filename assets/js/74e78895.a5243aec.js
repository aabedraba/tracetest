"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[5353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=s.createContext({}),c=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,d=p["".concat(o,".").concat(h)]||p[h]||f[h]||a;return n?s.createElement(d,i(i({ref:t},u),{},{components:n})):s.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const a={},i="Test Results",l={unversionedId:"web-ui/test-results",id:"web-ui/test-results",title:"Test Results",description:"From the All Tests screen, you can access all your existing tests, create new tests and see the results of any test that has been run.",source:"@site/docs/web-ui/test-results.md",sourceDirName:"web-ui",slug:"/web-ui/test-results",permalink:"/web-ui/test-results",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/web-ui/test-results.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating Test Outputs",permalink:"/web-ui/creating-test-outputs"},next:{title:"Exporting Tests",permalink:"/web-ui/exporting-tests"}},o={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-results"},"Test Results"),(0,r.kt)("p",null,"From the ",(0,r.kt)("strong",{parentName:"p"},"All Tests")," screen, you can access all your existing tests, create new tests and see the results of any test that has been run.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"All Tests List",src:n(263).Z,width:"2874",height:"1554"})),(0,r.kt)("p",null,"CLick on the settings icon to the right of each test. You can delete the test from here:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tests Actions",src:n(98534).Z,width:"2874",height:"1558"})),(0,r.kt)("p",null,"Click on the arrow next to the test name and the list of test runs will appear:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select Test",src:n(80010).Z,width:"2874",height:"1582"})),(0,r.kt)("p",null,"Click on a test run and the Trigger Details screen will open. From here, you can change and save the details of the test. On the top right, there is a button to run the test and a settings icon with the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JUnit Results - The test results in JUnit format."),(0,r.kt)("li",{parentName:"ul"},"Test Definition - The test defintion YAML file."),(0,r.kt)("li",{parentName:"ul"},"Edit - Edit the test."),(0,r.kt)("li",{parentName:"ul"},"Delete - Delete the test.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Run Tests &amp; Options",src:n(32710).Z,width:"2874",height:"1586"})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Trace")," tab to open the Trace Details screen:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Trace Tab View",src:n(91445).Z,width:"2874",height:"1586"})),(0,r.kt)("p",null," Use the icons at the bottom left to manipulate the test image. The options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Graph View"),(0,r.kt)("li",{parentName:"ul"},"Timeline View"),(0,r.kt)("li",{parentName:"ul"},"Zoom In"),(0,r.kt)("li",{parentName:"ul"},"Zoom Out"),(0,r.kt)("li",{parentName:"ul"},"Fit View"),(0,r.kt)("li",{parentName:"ul"},"Mini Map")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Trace Tab Icons",src:n(50653).Z,width:"2874",height:"1586"})),(0,r.kt)("p",null,"The following shows the test in the ",(0,r.kt)("strong",{parentName:"p"},"Timeline View"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Timeline View",src:n(47822).Z,width:"2874",height:"1586"})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Test")," tab to see the details of Test Specs and Assertions for the test:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Test Tab",src:n(4374).Z,width:"2874",height:"1584"})))}f.isMDXComponent=!0},263:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/all-tests-list-0.11-231fc1c1fef9683f263210d9f57f291e.png"},32710:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/run-test-and-option-0.11-282b7fc9ff92732e7d508ffcd1344846.png"},80010:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/select-test-0.11-c720e0d79fbd0bc99f2793396ff58d48.png"},4374:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/test-tab-0.11-8e609bdade721107f2a92ac8dfe95246.png"},98534:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/tests-actions-0.11-880a879a4790fad3cffd3d903e7da62e.png"},47822:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/timeline-view-0.11-97113f448ab8e13df55c08c6b9b839ee.png"},91445:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/trace-tab-0.11-8e44b48a80772acb2f47388e354d52e8.png"},50653:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/trace-tab-icons-0.11-98f2d60ee0e1195adb9cdbb22f27eebb.png"}}]);