"use strict";(self.webpackChunkpayment_doc=self.webpackChunkpayment_doc||[]).push([[773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),_=r,m=u["".concat(o,".").concat(_)]||u[_]||d[_]||l;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=_;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},9776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},s=void 0,i={unversionedId:"Products/Available Products",id:"Products/Available Products",title:"Available Products",description:"This API endpoint provides a list of products available for purchase.",source:"@site/docs/Products/Available Products.md",sourceDirName:"Products",slug:"/Products/Available Products",permalink:"/Products/Available Products",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:" Products",permalink:"/category/-products"},next:{title:"Price List",permalink:"/Products/Price List"}},o={},c=[{value:"HTTP Request (GET)",id:"http-request-get",level:4},{value:"Response Parameters",id:"response-parameters",level:4},{value:"Sample request to get list of available products.",id:"sample-request-to-get-list-of-available-products",level:4},{value:"Sample response.",id:"sample-response",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This API endpoint provides a list of products available for purchase."),(0,r.kt)("h4",{id:"http-request-get"},"HTTP Request (GET)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"https://payments.relworx.com/api/products\n")),(0,r.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the product.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"Category for a product.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"has_price_list"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether a product has price packages for subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"has_choice_list"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether a product has a support list of choice options for purchase.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"billable"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether Relworx charges you to purchase a product.")))),(0,r.kt)("h4",{id:"sample-request-to-get-list-of-available-products"},"Sample request to get list of available products."),(0,r.kt)("p",null,"Make sure to replace <--Your API Key--\x3e with your generated API Key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},' curl -i -H "Accept: application/vnd.relworx.v2" -H "Content-Type: application/json" -H "Authorization: Bearer <--Your API Key--\x3e" https://payments.relworx.com/api/products\n')),(0,r.kt)("h4",{id:"sample-response"},"Sample response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n   "success": true,\n   "products": [\n       {\n           "name": "Africell Uganda Airtime",\n           "code": "AFRICELL_UG_AIRTIME",\n           "category": "AIRTIME",\n           "has_price_list": false,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "Airtel Uganda Airtime",\n           "code": "AIRTEL_UG_AIRTIME",\n           "category": "AIRTIME",\n           "has_price_list": false,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "MTN Uganda Airtime",\n           "code": "MTN_UG_AIRTIME",\n           "category": "AIRTIME",\n           "has_price_list": false,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "Uganda Telecom Airtime",\n           "code": "UTL_AIRTIME",\n           "category": "AIRTIME",\n           "has_price_list": false,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "Africell Uganda Internet",\n           "code": "AFRICELL_UG_INTERNET",\n           "category": "INTERNET",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "MTN Uganda Internet",\n           "code": "MTN_UG_INTERNET",\n           "category": "INTERNET",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "Smile Uganda Internet",\n           "code": "SMILE_UG_INTERNET",\n           "category": "INTERNET",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "Roke Telecom Internet",\n           "code": "ROKE_TELECOM_UG_INTERNET",\n           "category": "INTERNET",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "Tangerine Internet",\n           "code": "TANGERINE_UG_INTERNET",\n           "category": "INTERNET",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "UTL Internet",\n           "code": "UTL_INTERNET",\n           "category": "INTERNET",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "Airtel Uganda Internet",\n           "code": "AIRTEL_UG_INTERNET",\n           "category": "INTERNET",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "AZAM TV",\n           "code": "AZAM_TV",\n           "category": "TV",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "DSTV",\n           "code": "DSTV",\n           "category": "TV",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "GOtv",\n           "code": "GO_TV",\n           "category": "TV",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "Zuku TV",\n           "code": "ZUKU_TV",\n           "category": "TV",\n           "has_price_list": false,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "StarTimes",\n           "code": "STARTIMES_TV",\n           "category": "TV",\n           "has_price_list": false,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "National Water",\n           "code": "NATIONAL_WATER",\n           "category": "UTILITIES",\n           "has_price_list": false,\n           "has_choice_list": true,\n           "billable": false\n       },\n       {\n           "name": "UMEME PostPaid",\n           "code": "UMEME_POST_PAID",\n           "category": "UTILITIES",\n           "has_price_list": false,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "UMEME PrePaid (Yaka)",\n           "code": "UMEME_PRE_PAID",\n           "category": "UTILITIES",\n           "has_price_list": false,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "MTN Voice Bundles",\n           "code": "MTN_UG_VOICE_BUNDLES",\n           "category": "OTHERS",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       },\n       {\n           "name": "MTN Combo Bundles",\n           "code": "MTN_UG_COMBO_BUNDLES",\n           "category": "OTHERS",\n           "has_price_list": true,\n           "has_choice_list": false,\n           "billable": false\n       }\n   ]\n}\n')))}d.isMDXComponent=!0}}]);