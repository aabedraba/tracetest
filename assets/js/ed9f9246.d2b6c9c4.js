"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[5524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},s="Running Tracetest with Azure App Insights (OpenTelemetry Collector & Pokeshop API)",i={unversionedId:"examples-tutorials/recipes/running-tracetest-with-azure-app-insights-pokeshop",id:"examples-tutorials/recipes/running-tracetest-with-azure-app-insights-pokeshop",title:"Running Tracetest with Azure App Insights (OpenTelemetry Collector & Pokeshop API)",description:"Check out the source code on GitHub here.",source:"@site/docs/examples-tutorials/recipes/running-tracetest-with-azure-app-insights-pokeshop.md",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/running-tracetest-with-azure-app-insights-pokeshop",permalink:"/examples-tutorials/recipes/running-tracetest-with-azure-app-insights-pokeshop",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/running-tracetest-with-azure-app-insights-pokeshop.md",tags:[],version:"current",frontMatter:{},sidebar:"examplesTutorialsSidebar",previous:{title:"Running Tracetest with Azure App Insights (Node.js + OpenTelemetry Collector)",permalink:"/examples-tutorials/recipes/running-tracetest-with-azure-app-insights-collector"},next:{title:"CI/CD Automation",permalink:"/ci-cd-automation/overview"}},p={},l=[{value:"Pokeshop API with Azure App Insights and Tracetest",id:"pokeshop-api-with-azure-app-insights-and-tracetest",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"1. Pokeshop API",id:"1-pokeshop-api",level:3},{value:"2. Tracetest",id:"2-tracetest",level:3},{value:"Docker Compose Network",id:"docker-compose-network",level:3},{value:"Pokeshop API",id:"pokeshop-api",level:2},{value:"Tracetest",id:"tracetest",level:2},{value:"Run Both the Pokeshop API and Tracetest",id:"run-both-the-pokeshop-api-and-tracetest",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-tracetest-with-azure-app-insights-opentelemetry-collector--pokeshop-api"},"Running Tracetest with Azure App Insights (OpenTelemetry Collector & Pokeshop API)"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/tracetest-azure-app-insights-pokeshop"},"Check out the source code on GitHub here."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tracetest.io/"},"Tracetest")," is a testing tool based on ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"},"Azure Application Insights")," is an extension of Azure Monitor and provides application performance monitoring (APM) features. APM tools are useful to monitor applications from development, through test, and into production in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Proactively understand how an application is performing."),(0,o.kt)("li",{parentName:"ul"},"Reactively review application execution data to determine the cause of an incident.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib"},"OpenTelemetry Collector Contrib")," - The official OpenTelemetry Distribution for packages outside of the core collector."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.tracetest.io/live-examples/pokeshop/overview"},"Pokeshop API")," As a testing ground, the team at Tracetest has implemented a sample instrumented API around the ",(0,o.kt)("a",{parentName:"p",href:"https://pokeapi.co/"},"PokeAPI"),"."),(0,o.kt)("h2",{id:"pokeshop-api-with-azure-app-insights-and-tracetest"},"Pokeshop API with Azure App Insights and Tracetest"),(0,o.kt)("p",null,"This is a simple quick start guide on how to configure a fully instrumented API to be used with Tracetest for enhancing your E2E and integration tests with trace-based testing. The infrastructure will use Azure App Insights as the trace data store, the OpenTelemetry Collector as a middleware and the Pokeshop API to generate the telemetry data."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You will need ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed on your machine to run this quick start app!"),(0,o.kt)("p",null,"You will also need an ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-azure-ad-api"},"App Insights API Access Key")," and the resource ARM ID for your App Insights instance."),(0,o.kt)("h2",{id:"project-structure"},"Project Structure"),(0,o.kt)("p",null,"The project is built with Docker Compose."),(0,o.kt)("h3",{id:"1-pokeshop-api"},"1. Pokeshop API"),(0,o.kt)("p",null,"The Pokeshop API is a fully instrumented REST API that makes use of different services to mimic a real life scenario. Learn more about it, ",(0,o.kt)("a",{parentName:"p",href:"/live-examples/pokeshop/overview"},"here"),"."),(0,o.kt)("h3",{id:"2-tracetest"},"2. Tracetest"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file, ",(0,o.kt)("inlineCode",{parentName:"p"},"tracetest.provision.yaml"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"tracetest.config.yaml")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tracetest")," directory are for the setting up the Pokeshop API, Tracetest and OpenTelemetry Collector."),(0,o.kt)("h3",{id:"docker-compose-network"},"Docker Compose Network"),(0,o.kt)("p",null,"All ",(0,o.kt)("inlineCode",{parentName:"p"},"services")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," are on the same network and will be reachable by hostname from within other services. E.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"otel-collector:4317")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.js")," will map to the ",(0,o.kt)("inlineCode",{parentName:"p"},"otel-collector")," service."),(0,o.kt)("h2",{id:"pokeshop-api"},"Pokeshop API"),(0,o.kt)("p",null,"The Pokeshop API is instrumented using the ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/"},"OpenTelemetry standards for Node.js"),", sending the data to the OpenTelemetry collector that will be pushing the telemetry information to the Azure cloud."),(0,o.kt)("p",null,"This is a fragment from the main tracing file from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/pokeshop"},"Pokeshop API repo.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';\nimport * as opentelemetry from '@opentelemetry/api';\nimport { api, NodeSDK } from '@opentelemetry/sdk-node';\nimport { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';\nimport { Resource } from '@opentelemetry/resources';\nimport * as dotenv from 'dotenv';\nimport { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';\nimport { IORedisInstrumentation } from '@opentelemetry/instrumentation-ioredis';\nimport { PgInstrumentation } from '@opentelemetry/instrumentation-pg';\nimport { AmqplibInstrumentation } from '@opentelemetry/instrumentation-amqplib';\nimport { SpanStatusCode } from '@opentelemetry/api';\nimport { B3Propagator } from '@opentelemetry/propagator-b3';\n\ndotenv.config();\napi.propagation.setGlobalPropagator(new B3Propagator());\n\nconst { COLLECTOR_ENDPOINT = '', SERVICE_NAME = 'pokeshop' } = process.env;\n\nlet globalTracer: opentelemetry.Tracer | null = null;\n\nasync function createTracer(): Promise<opentelemetry.Tracer> {\n  const collectorExporter = new OTLPTraceExporter({\n    url: COLLECTOR_ENDPOINT,\n  });\n\n  const spanProcessor = new BatchSpanProcessor(collectorExporter);\n  const sdk = new NodeSDK({\n    traceExporter: collectorExporter,\n    // @ts-ignore\n    instrumentations: [new IORedisInstrumentation(), new PgInstrumentation(), new AmqplibInstrumentation()],\n  });\n\n  sdk.configureTracerProvider({}, spanProcessor);\n  sdk.addResource(\n    new Resource({\n      [SemanticResourceAttributes.SERVICE_NAME]: SERVICE_NAME,\n    })\n  );\n\n  await sdk.start();\n  process.on('SIGTERM', () => {\n    sdk\n      .shutdown()\n      .then(\n        () => console.log('SDK shut down successfully'),\n        err => console.log('Error shutting down SDK', err)\n      )\n      .finally(() => process.exit(0));\n  });\n\n  const tracer = opentelemetry.trace.getTracer(SERVICE_NAME);\n\n  globalTracer = tracer;\n\n  return globalTracer;\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file includes the definitions for all of the required services by the Pokeshop API, which includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Postgres")," - To save Pokemon information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redis")," - For in memory storage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RabbitMQ")," - For async processing use cases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API")," - The Pokeshop API main container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Worker")," - The Pokeshop worker instance.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n  cache:\n    image: redis:6\n    restart: unless-stopped\n    healthcheck:\n      test: ["CMD", "redis-cli", "ping"]\n      interval: 1s\n      timeout: 3s\n      retries: 60\n\n  queue:\n    image: rabbitmq:3.8-management\n    restart: unless-stopped\n    healthcheck:\n      test: rabbitmq-diagnostics -q check_running\n      interval: 1s\n      timeout: 5s\n      retries: 60\n\n  demo-api:\n    image: kubeshop/demo-pokemon-api:latest\n    restart: unless-stopped\n    pull_policy: always\n    environment:\n      REDIS_URL: cache\n      DATABASE_URL: postgresql://postgres:postgres@postgres:5432/postgres?schema=public\n      RABBITMQ_HOST: queue\n      POKE_API_BASE_URL: https://pokeapi.co/api/v2\n      COLLECTOR_ENDPOINT: http://adot-collector:4317\n      NPM_RUN_COMMAND: api\n    ports:\n      - "8081:8081"\n    healthcheck:\n      test: ["CMD", "wget", "--spider", "localhost:8081"]\n      interval: 1s\n      timeout: 3s\n      retries: 60\n    depends_on:\n      postgres:\n        condition: service_healthy\n      cache:\n        condition: service_healthy\n      queue:\n        condition: service_healthy\n\n  demo-worker:\n    image: kubeshop/demo-pokemon-api:latest\n    restart: unless-stopped\n    pull_policy: always\n    environment:\n      REDIS_URL: cache\n      DATABASE_URL: postgresql://postgres:postgres@postgres:5432/postgres?schema=public\n      RABBITMQ_HOST: queue\n      POKE_API_BASE_URL: https://pokeapi.co/api/v2\n      COLLECTOR_ENDPOINT: http://adot-collector:4317\n      NPM_RUN_COMMAND: worker\n    depends_on:\n      postgres:\n        condition: service_healthy\n      cache:\n        condition: service_healthy\n      queue:\n        condition: service_healthy\n\n  demo-rpc:\n    image: kubeshop/demo-pokemon-api:latest\n    restart: unless-stopped\n    pull_policy: always\n    environment:\n      REDIS_URL: cache\n      DATABASE_URL: postgresql://postgres:postgres@postgres:5432/postgres?schema=public\n      RABBITMQ_HOST: queue\n      POKE_API_BASE_URL: https://pokeapi.co/api/v2\n      COLLECTOR_ENDPOINT: http://adot-collector:4317\n      NPM_RUN_COMMAND: rpc\n    ports:\n      - 8082:8082\n    healthcheck:\n      test: ["CMD", "lsof", "-i", "8082"]\n      interval: 1s\n      timeout: 3s\n      retries: 60\n    depends_on:\n      postgres:\n        condition: service_healthy\n      cache:\n        condition: service_healthy\n      queue:\n        condition: service_healthy\n')),(0,o.kt)("h2",{id:"tracetest"},"Tracetest"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," includes three other services."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Postgres")," - Postgres is a prerequisite for Tracetest to work. It stores trace data when running the trace-based tests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib"},(0,o.kt)("strong",{parentName:"a"},"OpenTelemetry Collector Contrib"))," - The official Open Telemetry Distribution for packages outside of the core collector."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracetest.io/"},(0,o.kt)("strong",{parentName:"a"},"Tracetest"))," - Trace-based testing that generates end-to-end tests automatically from traces.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  tracetest:\n    image: kubeshop/tracetest:${TAG:-latest}\n    platform: linux/amd64\n    volumes:\n      - type: bind\n        source: ./tracetest.config.yaml\n        target: /app/tracetest.yaml\n      - type: bind\n        source: ./tracetest.provision.yaml\n        target: /app/provisioning.yaml\n    ports:\n      - 11633:11633\n    command: --provisioning-file /app/provisioning.yaml\n    extra_hosts:\n      - "host.docker.internal:host-gateway"\n    depends_on:\n      postgres:\n        condition: service_healthy\n      adot-collector:\n        condition: service_started\n    healthcheck:\n      test: ["CMD", "wget", "--spider", "localhost:11633"]\n      interval: 1s\n      timeout: 3s\n      retries: 60\n\n  postgres:\n    image: postgres:14\n    environment:\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_USER: postgres\n    healthcheck:\n      test: pg_isready -U "$$POSTGRES_USER" -d "$$POSTGRES_DB"\n      interval: 1s\n      timeout: 5s\n      retries: 60\n    ports:\n      - 5432:5432\n\n  otel-collector:\n    image: otel/opentelemetry-collector-contrib:latest\n    command:\n      - "--config"\n      - "/otel-local-config.yaml"\n    volumes:\n      - ./collector.config.yaml:/otel-local-config.yaml\n    environment:\n      INSTRUMENTATION_KEY: ${INSTRUMENTATION_KEY}\n    ports:\n      - 4317:4317\n')),(0,o.kt)("p",null,"Tracetest depends on Postgres and the OpenTelemetry collector. Tracetest requires config files to be loaded via a volume. The volumes are mapped from the root directory into the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," directory and the respective config files."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tracetest.config.yaml")," file contains the basic setup of connecting Tracetest to the Postgres instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"postgres:\n  host: postgres\n  user: postgres\n  password: postgres\n  port: 5432\n  dbname: postgres\n  params: sslmode=disable\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tracetest.provision.yaml")," file defines the trace data store, set to Azure App Insights using the collector connection, meaning the traces will be sent to the OpenTelemetry collector to be processed and routed to the Azure cloud. Then, Tracetest will fetch them from the App Insights instance to execute tests."),(0,o.kt)("p",null,"But how does Tracetest fetch traces?"),(0,o.kt)("p",null,"Tracetest uses the Golang ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/developer/go/"},"Azure SDK")," library to pull to fetch trace data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"type: DataStore\nspec:\n  name: AzureAppInsights\n  type: azureappinsights\n  default: true\n  azureappinsights:\n    connectionType: direct\n    resourceArmId: <your-arm-id>\n    accessToken: <your-access-token>\n    useAzureActiveDirectoryAuth: false\n")),(0,o.kt)("p",null,"How do traces reach Azure App Insights?"),(0,o.kt)("p",null,"The Pokeshop API code uses the native Node.js OpenTelemetry modules which sends information to the OpenTelemetry Collector to be processed and then sent to the configured Azure App Insights instance."),(0,o.kt)("h2",{id:"run-both-the-pokeshop-api-and-tracetest"},"Run Both the Pokeshop API and Tracetest"),(0,o.kt)("p",null,"To start both the Pokeshop API and Tracetest, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f ./docker-compose.yaml -f ./tracetest/docker-compose.yaml up -d\n")),(0,o.kt)("p",null,"This will start your Tracetest instance on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:11633/"),". Open it and start creating tests!\nMake sure to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"http://demo-api:8081/")," url in your test creation, because your Pokeshop API and Tracetest are in the same network."),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("p",null,"Please visit our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},"examples in GitHub")," and join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/8MtcMrQNbX"},"Discord Community")," for more info!"))}m.isMDXComponent=!0}}]);