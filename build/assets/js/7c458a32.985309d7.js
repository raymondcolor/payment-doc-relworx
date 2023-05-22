"use strict";(self.webpackChunkpayment_doc=self.webpackChunkpayment_doc||[]).push([[864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i=void 0,l={unversionedId:"Products/Choice List",id:"Products/Choice List",title:"Choice List",description:"This API endpoint provides a choice list for a product.",source:"@site/docs/Products/Choice List.md",sourceDirName:"Products",slug:"/Products/Choice List",permalink:"/Products/Choice List",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Price List",permalink:"/Products/Price List"},next:{title:"Validate Product",permalink:"/Products/Validate Product"}},c={},s=[{value:"HTTP Request (GET)",id:"http-request-get",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Sample request to get choice-list of a products.",id:"sample-request-to-get-choice-list-of-a-products",level:4},{value:"Sample response.",id:"sample-response",level:4}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This API endpoint provides a choice list for a product."),(0,a.kt)("h4",{id:"http-request-get"},"HTTP Request (GET)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"https://payments.relworx.com/api/products/choice-list\n")),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"code"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Product code.")))),(0,a.kt)("h4",{id:"sample-request-to-get-choice-list-of-a-products"},"Sample request to get choice-list of a products."),(0,a.kt)("p",null,"Make sure to replace <--Your API Key--\x3e with your generated API Key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'     curl -i -H "Accept: application/vnd.relworx.v2" -H "Content-Type: application/json" -H "Authorization: Bearer <--Your API Key--\x3e" https://payments.relworx.com/api/products/choice-list\\?code\\=NATIONAL_WATER\n')),(0,a.kt)("h4",{id:"sample-response"},"Sample response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "success": true,\n    "choice_list": [\n        {\n            "id": "249378",\n            "name": "NWSC Mukono"\n        },\n        {\n            "id": "249375",\n            "name": "NWSC Entebbe"\n        },\n        {\n            "id": "249376",\n            "name": "NWSC Kawuku"\n        },\n        {\n            "id": "249372",\n            "name": "NWSC Iganga"\n        },\n        {\n            "id": "249545",\n            "name": "NWSC Lugazi"\n        },\n        {\n            "id": "249373",\n            "name": "NWSC Jinja"\n        },\n        {\n            "id": "249374",\n            "name": "NWSC Kajjansi"\n        },\n        {\n            "id": "249371",\n            "name": "NWSC Kampala"\n        },\n        {\n            "id": "249379",\n            "name": "Other NWSC Areas"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);