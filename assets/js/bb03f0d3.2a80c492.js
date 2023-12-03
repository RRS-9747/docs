"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,h=c["".concat(i,".").concat(f)]||c[f]||d[f]||n;return r?o.createElement(h,l(l({ref:t},u),{},{components:r})):o.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_label:"Vault Support",title:"Vault Support",sidebar_position:3.3},l=void 0,s={unversionedId:"BedWars1058/hooks/vault-hook",id:"BedWars1058/hooks/vault-hook",title:"Vault Support",description:"Chat",source:"@site/docs/BedWars1058/hooks/vault-hook.md",sourceDirName:"BedWars1058/hooks",slug:"/BedWars1058/hooks/vault-hook",permalink:"/docs/BedWars1058/hooks/vault-hook",draft:!1,editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/hooks/vault-hook.md",tags:[],version:"current",sidebarPosition:3.3,frontMatter:{sidebar_label:"Vault Support",title:"Vault Support",sidebar_position:3.3},sidebar:"bw1058",previous:{title:"PlaceholderAPI Support",permalink:"/docs/BedWars1058/hooks/papi-hook"},next:{title:"Citizens Support",permalink:"/docs/BedWars1058/hooks/citizens-hook"}},i={},p=[{value:"Chat",id:"chat",level:2},{value:"Placeholders",id:"placeholders",level:3},{value:"Economy",id:"economy",level:2},{value:"Placeholders",id:"placeholders-1",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"chat"},"Chat"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BedWars1058")," is providing ",(0,a.kt)("a",{parentName:"p",href:"https://dev.bukkit.org/projects/vault"},"Vault")," support since the first version ever released. "),(0,a.kt)("p",null,"You can have rank prefixies and suffixies in chat by adding ",(0,a.kt)("a",{parentName:"p",href:"https://dev.bukkit.org/projects/vault"},"Vault")," near your permissions plugin  like ",(0,a.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/powerfulperms.8143/"},"PowerfulPerms"),", ",(0,a.kt)("a",{parentName:"p",href:"https://dev.bukkit.org/projects/permissionsex"},"PermissionsEx")," and any other permissions plugin based on ",(0,a.kt)("a",{parentName:"p",href:"https://dev.bukkit.org/projects/vault"},"Vault"),"."),(0,a.kt)("h3",{id:"placeholders"},"Placeholders"),(0,a.kt)("p",null,"Prefix placeholder: ",(0,a.kt)("inlineCode",{parentName:"p"},"{vPrefix}")),(0,a.kt)("p",null,"Suffix placeholder: ",(0,a.kt)("inlineCode",{parentName:"p"},"{vSuffix}")),(0,a.kt)("p",null,"You can use these placeholders at the ",(0,a.kt)("strong",{parentName:"p"},"chat")," section in ",(0,a.kt)("inlineCode",{parentName:"p"},"messages_<country>.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"chat:\n  lobby: '{vPrefix}&7{player}{vSuffix}: {message}'\n  waiting: '{vPrefix}&7{player}{vSuffix}: {message}'\n  global: '{vPrefix}&6[SHOUT] {team} &7{player}&f{vSuffix}: {message}'\n  team: '{vPrefix}&f{level}{team}&7 {player}{vSuffix} {message}'\n  spectator: '{vPrefix}&7[SPECTATOR] {player}{vSuffix}: {message}'\n")),(0,a.kt)("h2",{id:"economy"},"Economy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BedWars1058")," is also providing Vault Economy plugins support since the first version ever released."),(0,a.kt)("p",null,"You can use all the Economy plugins with ",(0,a.kt)("a",{parentName:"p",href:"https://dev.bukkit.org/projects/vault"},"Vault")," support like ",(0,a.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/coins-1-8-x-1-12-x-mysql-sqlite-api.48536/"},"Coins")," and any other economy plugins based on ",(0,a.kt)("a",{parentName:"p",href:"https://dev.bukkit.org/projects/vault"},"Vault"),"."),(0,a.kt)("h3",{id:"placeholders-1"},"Placeholders"),(0,a.kt)("p",null,"BedWars total money placeholder: {money}"),(0,a.kt)("p",null,"You can also use %vault_eco_balance% placeholder or the placeholder of you eco plugin."))}d.isMDXComponent=!0}}]);