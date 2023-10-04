"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[4173],{13899:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),s=a(86010),i=a(97325),l=a(20107),o=a(83699);const c={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:a,...d}=e;const{navbar:{hideOnScroll:u}}=(0,l.L)();if("h1"===t||!a)return r.createElement(t,(0,n.Z)({},d,{id:void 0}));const m=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:a});return r.createElement(t,(0,n.Z)({},d,{className:(0,s.Z)("anchor",u?c.anchorWithHideOnScrollNavbar:c.anchorWithStickyNavbar,d.className),id:a}),d.children,r.createElement(o.Z,{className:"hash-link",to:`#${a}`,"aria-label":m,title:m},"\u200b"))}},90162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>T,frontMatter:()=>g,metadata:()=>h,toc:()=>b});var n=a(87462),r=a(67294),s=a(3905),i=a(92053),l=a(86010),o=a(97325),c=a(83699),d=a(13899);const u=[{name:"\ud83d\udc47 Getting Started",url:"./getting-started/overview",description:r.createElement(o.Z,null,"Set up Tracetest and start trace-based testing your distributed system."),button:"Set up Tracetest"},{name:"\ud83e\udd29 Open Source",url:"https://github.com/kubeshop/tracetest",description:r.createElement(o.Z,null,"Check out the Tracetest GitHub repo! Please consider giving us a star! \u2b50\ufe0f"),button:"Go to GitHub"},{name:"\u2699\ufe0f Configure trace data stores",url:"../configuration/overview#supported-trace-data-stores",description:r.createElement(o.Z,null,"Connect your existing trace data store or send traces to Tracetest directly!"),button:"Configure Tracetest"},{name:"\ud83d\ude44 New to Trace-based Testing?",url:"../concepts/what-is-trace-based-testing",description:r.createElement(o.Z,null,"Read about the concepts of trace-based testing to learn more!"),button:"View Concepts"}];function m(e){let{name:t,url:a,description:n,button:s}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement("div",{className:(0,l.Z)("card")},r.createElement("div",{className:"card__body"},r.createElement(d.Z,{as:"h3"},t),r.createElement("p",null,n)),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},r.createElement(c.Z,{className:"button button--secondary",to:a},s)))))}function p(){return r.createElement("div",{className:"row"},u.map((e=>r.createElement(m,(0,n.Z)({key:e.name},e)))))}const g={id:"index",title:"Welcome to Tracetest Docs! \ud83d\udc4b",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png",breadcrumb_label:"Nothing"},k=void 0,h={unversionedId:"index",id:"index",title:"Welcome to Tracetest Docs! \ud83d\udc4b",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"Welcome to Tracetest Docs! \ud83d\udc4b",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png",breadcrumb_label:"Nothing"},sidebar:"tutorialSidebar",next:{title:"Getting Started with Tracetest",permalink:"/getting-started/overview"}},y={},b=[{value:"Why Tracetest?",id:"why-tracetest",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Who uses Tracetest?",id:"who-uses-tracetest",level:2},{value:"What makes Tracetest special?",id:"what-makes-tracetest-special",level:2}],N={toc:b},v="wrapper";function T(e){let{components:t,...a}=e;return(0,s.kt)(v,(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Tracetest is a trace-based testing tool for building integration and end-to-end tests in minutes using your ",(0,s.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/getting-started/"},"OpenTelemetry")," traces. Assert against your trace data at every point of a request transaction."),(0,s.kt)(p,{mdxType:"WelcomeGuideCardsRow"}),(0,s.kt)("h2",{id:"why-tracetest"},"Why Tracetest?"),(0,s.kt)("p",null,"You can:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Assert")," against both the ",(0,s.kt)("strong",{parentName:"li"},"response and trace data")," at every point of a request transaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Assert")," on the ",(0,s.kt)("strong",{parentName:"li"},"timing of trace spans"),".",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Eg. A database span executes within ",(0,s.kt)("inlineCode",{parentName:"li"},"100ms"),"."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Wildcard assertions")," across common types of activities.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Eg. All gRPC return codes should be ",(0,s.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,s.kt)("li",{parentName:"ul"},"Eg. All database calls should happen in less than ",(0,s.kt)("inlineCode",{parentName:"li"},"100ms"),"."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Assert")," against ",(0,s.kt)("strong",{parentName:"li"},"side-effects")," in your distributed system.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Eg. Message queues, async API calls, external APIs, etc."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Integrate")," with your ",(0,s.kt)("strong",{parentName:"li"},"existing distributed tracing solution"),"."),(0,s.kt)("li",{parentName:"ul"},"Define multiple test triggers:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"HTTP requests"),(0,s.kt)("li",{parentName:"ul"},"gRPC requests"),(0,s.kt)("li",{parentName:"ul"},"Trace IDs"),(0,s.kt)("li",{parentName:"ul"},"and many more..."))),(0,s.kt)("li",{parentName:"ul"},"Save and run tests manually and via CI build jobs."),(0,s.kt)("li",{parentName:"ul"},"Verify and analyze the quality of your OpenTelemetry instrumentation to enforce rules and standards."),(0,s.kt)("li",{parentName:"ul"},"Test long-running processes."),(0,s.kt)("li",{parentName:"ul"},"Write detailed trace-based tests as:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"End-to-end tests"),(0,s.kt)("li",{parentName:"ul"},"Integration tests"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Build tests in minutes"),".")),(0,s.kt)("div",{className:"row"},(0,s.kt)("div",{className:"col col--12 margin-bottom--lg"},(0,s.kt)("div",null,(0,s.kt)("div",{className:"card__body"},(0,s.kt)("p",{align:"center"},(0,s.kt)("b",null,"Visually - Build tests in the Web UI"))),(0,s.kt)("div",{className:"card__footer"},(0,s.kt)("img",{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1688476657/docs/screely-1688476653521_omxe4r.png"})))),(0,s.kt)("div",{className:"col col--12 margin-bottom--lg"},(0,s.kt)("div",null,(0,s.kt)("div",{className:"card__body"},(0,s.kt)("p",{align:"center"},(0,s.kt)("b",null,"Programmatically - Build tests in YAML"))),(0,s.kt)("div",{className:"card__footer"},(0,s.kt)(i.Z,{language:"yaml",mdxType:"CodeBlock"},"\n    type: Test\n    spec:\n      id: Yg9sN-94g\n      name: Pokeshop - Import\n      description: Import a Pokemon\n      trigger:\n        type: http\n        httpRequest:\n          url: http://demo-api:8081/pokemon/import\n          method: POST\n          headers:\n          - key: Content-Type\n            value: application/json\n          body: '{\"id\":52}'\n      specs:\n      - name: 'All Database Spans: Processing time is less than 100ms'\n        selector: span[tracetest.span.type=\"database\"]\n        assertions:\n        - attr:tracetest.span.duration < 100ms\n        "))))),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("p",null,"Understand how Tracetest works."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Trigger a test and generate a trace response."),(0,s.kt)("li",{parentName:"ol"},"Fetch traces to render and analyze them."),(0,s.kt)("li",{parentName:"ol"},"Add assertions to traces."),(0,s.kt)("li",{parentName:"ol"},"See test results."),(0,s.kt)("li",{parentName:"ol"},"Run tests as part of CI/CD pipelines.")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1686654113/docs/tracetest-marketechture-jun12-v3_ffj2e2.png",alt:"Marketechture"})),(0,s.kt)("h2",{id:"who-uses-tracetest"},"Who uses Tracetest?"),(0,s.kt)("p",null,"Our users are typically developers or QA engineers building distributed systems with microservices using back-end languages like Go, Rust, Node.js and Python."),(0,s.kt)("h2",{id:"what-makes-tracetest-special"},"What makes Tracetest special?"),(0,s.kt)("p",null,"Tracetest can be compared with Cypress or Selenium; however Tracetest is fundamentally different."),(0,s.kt)("p",null,"Cypress and Selenium are constrained by using the browser for testing. Tracetest bypasses this entirely by using your existing OpenTelemetry instrumentation and trace data to run tests and assertions against traces in every step of a request transaction."))}T.isMDXComponent=!0}}]);