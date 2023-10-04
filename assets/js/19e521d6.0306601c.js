"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[2340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="OpenTelemetry Collector Configuration File Reference",l={unversionedId:"configuration/opentelemetry-collector-configuration-file-reference",id:"configuration/opentelemetry-collector-configuration-file-reference",title:"OpenTelemetry Collector Configuration File Reference",description:"This page contains a reference for using the OpenTelemetry Collector to send trace data from your application to any of Tracetest's supported trace data stores.",source:"@site/docs/configuration/opentelemetry-collector-configuration-file-reference.md",sourceDirName:"configuration",slug:"/configuration/opentelemetry-collector-configuration-file-reference",permalink:"/configuration/opentelemetry-collector-configuration-file-reference",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/opentelemetry-collector-configuration-file-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upgrade Tracetest Version",permalink:"/configuration/upgrade"},next:{title:"What is Trace-Based Testing",permalink:"/concepts/what-is-trace-based-testing"}},s={},c=[{value:"Supported Trace Data Stores",id:"supported-trace-data-stores",level:2},{value:"Configure OpenTelemetry Collector to Send Traces to Jaeger",id:"configure-opentelemetry-collector-to-send-traces-to-jaeger",level:2},{value:"Configure OpenTelemetry Collector to Send Traces to OpenSearch",id:"configure-opentelemetry-collector-to-send-traces-to-opensearch",level:2},{value:"Configure OpenTelemetry Collector to Send Traces to Elastic APM",id:"configure-opentelemetry-collector-to-send-traces-to-elastic-apm",level:2},{value:"Configure OpenTelemetry Collector to Send Traces to SignalFx",id:"configure-opentelemetry-collector-to-send-traces-to-signalfx",level:2},{value:"Configure OpenTelemetry Collector to Send Traces to Tempo",id:"configure-opentelemetry-collector-to-send-traces-to-tempo",level:2},{value:"Configure OpenTelemetry Collector to Send Traces to Azure App Insights",id:"configure-opentelemetry-collector-to-send-traces-to-azure-app-insights",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"opentelemetry-collector-configuration-file-reference"},"OpenTelemetry Collector Configuration File Reference"),(0,r.kt)("p",null,"This page contains a reference for using the OpenTelemetry Collector to send trace data from your application to any of Tracetest's supported trace data stores."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Examples of configuring Tracetest can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},(0,r.kt)("inlineCode",{parentName:"a"},"examples")," folder of the Tracetest GitHub repo"),".")),(0,r.kt)("h2",{id:"supported-trace-data-stores"},"Supported Trace Data Stores"),(0,r.kt)("p",null,"Tracetest is designed to work with different trace data stores. To enable Tracetest to run end-to-end tests against trace data, you need to configure Tracetest to access trace data."),(0,r.kt)("p",null,"Currently, Tracetest supports the following data stores. Click on the respective data store to view configuration examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connecting-to-data-stores/jaeger"},"Jaeger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connecting-to-data-stores/opensearch"},"OpenSearch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connecting-to-data-stores/elasticapm"},"Elastic APM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connecting-to-data-stores/signalfx"},"SignalFX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connecting-to-data-stores/tempo"},"Grafana Tempo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connecting-to-data-stores/lightstep"},"Lightstep")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connecting-to-data-stores/new-relic"},"New Relic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/configuration/connecting-to-data-stores/awsxray"},"AWS X-Ray"),"3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connecting-to-data-stores/datadog"},"Datadog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/configuration/connecting-to-data-stores/honeycomb"},"Honeycomb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/configuration/connecting-to-data-stores/azure-app-insights"},"Azure App Insights")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connecting-to-data-stores/dynatrace"},"Dynatrace"))),(0,r.kt)("p",null,"Continue reading below to learn how to configure the OpenTelemetry Collector to send trace data from your application to any of the trace data stores above."),(0,r.kt)("h2",{id:"configure-opentelemetry-collector-to-send-traces-to-jaeger"},"Configure OpenTelemetry Collector to Send Traces to Jaeger"),(0,r.kt)("p",null,"In your OpenTelemetry Collector config file, make sure to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"exporter")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"jaeger"),", with the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," pointing to your Jaeger instance on port ",(0,r.kt)("inlineCode",{parentName:"p"},"14250"),". If you are running Tracetest with Docker, the endpoint might look like this ",(0,r.kt)("inlineCode",{parentName:"p"},"http://jaeger:14250"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# collector.config.yaml\n\n# If you already have receivers declared, you can just ignore\n# this one and still use yours instead.\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  jaeger:\n    endpoint: jaeger:14250\n    tls:\n      insecure: true\n\nservice:\n  pipelines:\n    # You probably already have a traces pipeline, you don't have to change it.\n    # Just add this one to your configuration. Just make sure to not have two\n    # pipelines with the same name.\n    traces/1:\n      receivers: [otlp] # your receiver\n      processors: [batch] # make sure to add the batch processor\n      exporters: [jaeger] # your exporter pointing to your Jaeger instance\n")),(0,r.kt)("h2",{id:"configure-opentelemetry-collector-to-send-traces-to-opensearch"},"Configure OpenTelemetry Collector to Send Traces to OpenSearch"),(0,r.kt)("p",null,"You'll configure the OpenTelemetry Collector to receive traces from your system and then send them to OpenSearch via Data Prepper. And, you don't have to change your existing pipelines to do so."),(0,r.kt)("p",null,"In your OpenTelemetry Collector config file, make sure to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"exporter")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"otlp"),", with the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," pointing to the Data Prepper on port ",(0,r.kt)("inlineCode",{parentName:"p"},"21890"),". If you are running Tracetest with Docker, the endpoint might look like this ",(0,r.kt)("inlineCode",{parentName:"p"},"data-prepper:21890"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# collector.config.yaml\n\n# If you already have receivers declared, you can just ignore\n# this one and use yours instead.\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  logging:\n    loglevel: debug\n  otlp/2:\n    endpoint: data-prepper:21890\n    tls:\n      insecure: true\n      insecure_skip_verify: true\n\nservice:\n  pipelines:\n    # You probably already have a traces pipeline, you don't have to change it.\n    # Just add this one to your configuration. Just make sure to not have two\n    # pipelines with the same name.\n    traces/1:\n      receivers: [otlp] # your receiver\n      processors: [batch] # make sure to add the batch processor\n      exporters: [otlp/2] # your exporter pointing to your Data Prepper instance\n")),(0,r.kt)("h2",{id:"configure-opentelemetry-collector-to-send-traces-to-elastic-apm"},"Configure OpenTelemetry Collector to Send Traces to Elastic APM"),(0,r.kt)("p",null,"You'll configure the OpenTelemetry Collector to receive traces from your system and then send them to Elasticsearch via Elastic APM. And, you don't have to change your existing pipelines to do so."),(0,r.kt)("p",null,"In your OpenTelemetry Collector config file, make sure to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"exporter")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"otlp"),", with the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," pointing to the Elastic APM server on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8200"),". If you are running Tracetest with Docker, the endpoint might look like this ",(0,r.kt)("inlineCode",{parentName:"p"},"apm-server:8200"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# collector.config.yaml\n\n# If you already have receivers declared, you can just ignore\n# this one and use yours instead.\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  otlp/elastic:\n    endpoint: apm-server:8200\n    tls:\n      insecure: true\n      insecure_skip_verify: true\n\nservice:\n  pipelines:\n    # You probably already have a traces pipeline, you don't have to change it.\n    # Just add this one to your configuration. Just make sure to not have two\n    # pipelines with the same name.\n    traces/1:\n      receivers: [otlp] # your receiver\n      processors: [batch] # make sure to add the batch processor\n      exporters: [otlp/elastic] # your exporter pointing to your Elastic APM server instance\n")),(0,r.kt)("h2",{id:"configure-opentelemetry-collector-to-send-traces-to-signalfx"},"Configure OpenTelemetry Collector to Send Traces to SignalFx"),(0,r.kt)("p",null,"You'll configure the OpenTelemetry Collector to receive traces from your system and then send them to SignalFx. And, you don't have to change your existing pipelines to do so."),(0,r.kt)("p",null,"In your OpenTelemetry Collector config file, make sure to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"exporter")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"sapm"),", with the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," pointing to the SignalFx trace ingestion endpoint. The endpoint might look like this ",(0,r.kt)("inlineCode",{parentName:"p"},"https://ingest.us1.signalfx.com/v2/trace"),". Also make sure to add your SignalFx ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# collector.config.yaml\n\n# If you already have receivers declared, you can just ignore\n# this one and use yours instead.\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  sapm:\n    access_token: <YOUR_TOKEN> # UPDATE THIS\n    access_token_passthrough: true\n    endpoint: https://ingest.us1.signalfx.com/v2/trace # UPDATE THIS IF NEEDED\n    max_connections: 100\n    num_workers: 8\n\nservice:\n  pipelines:\n    # your probably already have a traces pipeline, you don't have to change it.\n    # just add this one to your configuration. Just make sure to not have two\n    # pipelines with the same name\n    traces/1:\n      receivers: [otlp] # your receiver\n      processors: [batch] # make sure to add the batch processor\n      exporters: [sapm] # your exporter pointing to your SignalFx instance\n")),(0,r.kt)("h2",{id:"configure-opentelemetry-collector-to-send-traces-to-tempo"},"Configure OpenTelemetry Collector to Send Traces to Tempo"),(0,r.kt)("p",null,"You'll configure the OpenTelemetry Collector to receive traces from your system and then send them to Tempo. And, you don't have to change your existing pipelines to do so."),(0,r.kt)("p",null,"In your OpenTelemetry Collector config file, make sure to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"exporter")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"tempo"),", with the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," pointing to your Tempo's instance on port ",(0,r.kt)("inlineCode",{parentName:"p"},"4317"),". If you are running Tracetest with Docker, the endpoint might look like this ",(0,r.kt)("inlineCode",{parentName:"p"},"http://tempo:4317"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# collector.config.yaml\n\n# If you already have receivers declared, you can just ignore\n# this one and still use yours instead.\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  otlp/2:\n    endpoint: tempo:4317\n    tls:\n      insecure: true\n\nservice:\n  pipelines:\n    # your probably already have a traces pipeline, you don't have to change it.\n    # just add this one to your configuration. Just make sure to not have two\n    # pipelines with the same name\n    traces/1:\n      receivers: [otlp] # your receiver\n      processors: [batch] # make sure to have the probabilistic_sampler before your batch processor\n      exporters: [otlp/2] # your exporter pointing to your Tempo instance\n")),(0,r.kt)("h2",{id:"configure-opentelemetry-collector-to-send-traces-to-azure-app-insights"},"Configure OpenTelemetry Collector to Send Traces to Azure App Insights"),(0,r.kt)("p",null,"You'll configure the OpenTelemetry Collector to receive traces from your system and then send them to Azure App Insights. And, you don't have to change your existing pipelines to do so."),(0,r.kt)("p",null,"In your OpenTelemetry Collector config file, make sure to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"exporter")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"azuremonitor"),", with the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," instrumentation key of your Azure App Insights instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# collector.config.yaml\n\n# If you already have receivers declared, you can just ignore\n# this one and still use yours instead.\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nexporters:\n  azuremonitor:\n    instrumentation_key: <your-instrumentation-key>\n\nservice:\n  pipelines:\n    traces/appinsights:\n      receivers: [otlp] # your receiver\n      exporters: [azuremonitor] # your exporter pointing to your Azure App Insights instance\n")))}d.isMDXComponent=!0}}]);