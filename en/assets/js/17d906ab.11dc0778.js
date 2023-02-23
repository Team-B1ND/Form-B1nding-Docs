"use strict";(self.webpackChunkdesigndocs=self.webpackChunkdesigndocs||[]).push([[4162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),f=o,m=l["".concat(c,".").concat(f)]||l[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="B1ndToastContainer",s={unversionedId:"b1nd-toastify/B1ndToastContainer",id:"b1nd-toastify/B1ndToastContainer",title:"B1ndToastContainer",description:"B1ndToastContainer \ucef4\ud3ec\ub10c\ud2b8\ub294 react-toastify\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uc0c1\ub2e8\uc5d0 \uac10\uc2f8\uc8fc\ub294 ProviderComponent \uc785\ub2c8\ub2e4.",source:"@site/docs/b1nd-toastify/B1ndToastContainer.md",sourceDirName:"b1nd-toastify",slug:"/b1nd-toastify/B1ndToastContainer",permalink:"/Form-B1nding-Docs/en/docs/b1nd-toastify/B1ndToastContainer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b1nd-toastify/B1ndToastContainer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"B1ndToast",permalink:"/Form-B1nding-Docs/en/docs/b1nd-toastify/B1ndToast"}},c={},d=[],p={toc:d},l="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"b1ndtoastcontainer"},"B1ndToastContainer"),(0,o.kt)("p",null,"B1ndToastContainer \ucef4\ud3ec\ub10c\ud2b8\ub294 react-toastify\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uc0c1\ub2e8\uc5d0 \uac10\uc2f8\uc8fc\ub294 ProviderComponent \uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { B1ndToastContainer } from "@b1nd/b1nd-toastify";\n\nconst App = () => {\n  return (\n    <div>\n      <B1ndToastContainer autoClose={5000} limit={6} />\n      {children}\n    </div>\n  );\n};\n')))}u.isMDXComponent=!0}}]);