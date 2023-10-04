"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(a,".").concat(f)]||u[f]||m[f]||c;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,l=new Array(c);l[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<c;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const c={},l="CLI Reference",i={unversionedId:"cli/reference/tracetest_completion_zsh",id:"cli/reference/tracetest_completion_zsh",title:"CLI Reference",description:"tracetest completion zsh",source:"@site/docs/cli/reference/tracetest_completion_zsh.md",sourceDirName:"cli/reference",slug:"/cli/reference/tracetest_completion_zsh",permalink:"/cli/reference/tracetest_completion_zsh",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/cli/reference/tracetest_completion_zsh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI Reference",permalink:"/cli/reference/tracetest_completion_powershell"},next:{title:"CLI Reference",permalink:"/cli/reference/tracetest_configure"}},a={},s=[{value:"tracetest completion zsh",id:"tracetest-completion-zsh",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Oct-2023",id:"auto-generated-by-spf13cobra-on-4-oct-2023",level:6}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,o.kt)("h2",{id:"tracetest-completion-zsh"},"tracetest completion zsh"),(0,o.kt)("p",null,"Generate the autocompletion script for zsh"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Generate the autocompletion script for the zsh shell."),(0,o.kt)("p",null,"If shell completion is not already enabled in your environment you will need\nto enable it.  You can execute the following once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo "autoload -U compinit; compinit" >> ~/.zshrc\n')),(0,o.kt)("p",null,"To load completions in your current shell session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source <(tracetest completion zsh)\n")),(0,o.kt)("p",null,"To load completions for every new session, execute once:"),(0,o.kt)("h4",{id:"linux"},"Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'tracetest completion zsh > "${fpath[1]}/_tracetest"\n')),(0,o.kt)("h4",{id:"macos"},"macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tracetest completion zsh > $(brew --prefix)/share/zsh/site-functions/_tracetest\n")),(0,o.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tracetest completion zsh [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help              help for zsh\n      --no-descriptions   disable completion descriptions\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --config string       config file will be used by the CLI (default "config.yml")\n  -o, --output string       output format [pretty|json|yaml]\n  -s, --server-url string   server url\n  -v, --verbose             display debug information\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/reference/tracetest_completion"},"tracetest completion"),"\t - Generate the autocompletion script for the specified shell")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-oct-2023"},"Auto generated by spf13/cobra on 4-Oct-2023"))}m.isMDXComponent=!0}}]);