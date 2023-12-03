"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),y=o,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Frequently asked questions",sidebar_label:"FAQ",sidebar_position:2,descriptions:"Common issues and fixes for BedWarsProxy"},i=void 0,s={unversionedId:"BedWarsProxy/faq",id:"BedWarsProxy/faq",title:"Frequently asked questions",description:"Common issues and fixes for BedWarsProxy",source:"@site/docs/BedWarsProxy/faq.md",sourceDirName:"BedWarsProxy",slug:"/BedWarsProxy/faq",permalink:"/docs/BedWarsProxy/faq",draft:!1,editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWarsProxy/faq.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Frequently asked questions",sidebar_label:"FAQ",sidebar_position:2,descriptions:"Common issues and fixes for BedWarsProxy"},sidebar:"bwp",previous:{title:"Getting Started",permalink:"/docs/BedWarsProxy/getting-started"},next:{title:"Arena Selector",permalink:"/docs/BedWarsProxy/features/arena-selector"}},l={},u=[{value:"My arenas dont show up in <code>/bw gui</code>!",id:"my-arenas-dont-show-up-in-bw-gui",level:2},{value:"My arenas show up, but when I try to join one, nothing happens!",id:"my-arenas-show-up-but-when-i-try-to-join-one-nothing-happens",level:2},{value:"When I try to join an arena, it says I need to use BedWarsProxy to join, but I am!",id:"when-i-try-to-join-an-arena-it-says-i-need-to-use-bedwarsproxy-to-join-but-i-am",level:2},{value:"Sometimes when I join an arena, it kicks me saying <code>Restarting</code>",id:"sometimes-when-i-join-an-arena-it-kicks-me-saying-restarting",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Common issues and fixes for BedWarsProxy"),(0,o.kt)("h2",{id:"my-arenas-dont-show-up-in-bw-gui"},"My arenas dont show up in ",(0,o.kt)("inlineCode",{parentName:"h2"},"/bw gui"),"!"),(0,o.kt)("p",null,"Firstly, make sure you've followed the ",(0,o.kt)("a",{parentName:"p",href:"/docs/BedWarsProxy/getting-started"},"setup instructions"),"."),(0,o.kt)("p",null,"If you have, theres a few things to check"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure the BedWarsProxy port you chose is not taken by anything else",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"There should not be any server or other service running on that port"))),(0,o.kt)("li",{parentName:"ol"},"Make sure you set the ip and port in ",(0,o.kt)("inlineCode",{parentName:"li"},"lobby-sockets")," correctly",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The ip should probably be the same one used in the bungee config"),(0,o.kt)("li",{parentName:"ol"},"The port must be the ",(0,o.kt)("inlineCode",{parentName:"li"},"port")," from the BedWarsProxy config"))),(0,o.kt)("li",{parentName:"ol"},"Make sure the BedWarsProxy port is accessable to the bedwars servers",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Make sure it is allowed through any firewalls"),(0,o.kt)("li",{parentName:"ol"},"If you are on a host, you might have to ask your host to add the port to your server"),(0,o.kt)("li",{parentName:"ol"},'If you are running on pterodactyl, you\'ll need to add an "allocation" for the bedwarsproxy port.\nIf you host the pterodactyl node yourself, you can do this from the admin panel.\nOtherwise, you will need to contact the node admin about it (e.g. if youre on a host that uses pterodactyl)')))),(0,o.kt)("h2",{id:"my-arenas-show-up-but-when-i-try-to-join-one-nothing-happens"},"My arenas show up, but when I try to join one, nothing happens!"),(0,o.kt)("p",null,"Usually this happens if you didnt put the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"server-id")," in the BedWars1058 config."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"server-id")," should be the name of the arena server as if you were using ",(0,o.kt)("inlineCode",{parentName:"p"},"/server")),(0,o.kt)("p",null,"So if you do ",(0,o.kt)("inlineCode",{parentName:"p"},"/server <server-id>")," (where you replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<server-id>")," with what you put in the ",(0,o.kt)("inlineCode",{parentName:"p"},"server-id")," option in the config)\nit would take you to the arena server."),(0,o.kt)("h2",{id:"when-i-try-to-join-an-arena-it-says-i-need-to-use-bedwarsproxy-to-join-but-i-am"},"When I try to join an arena, it says I need to use BedWarsProxy to join, but I am!"),(0,o.kt)("p",null,"First, make sure you were using BedWarsProxy's ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw gui")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw join")," and not sending a player to the server manually"),(0,o.kt)("p",null,"If you are using the correct commands, then make sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"bungeecord")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"spigot.yml")," on all servers (lobby and arenas)"),(0,o.kt)("h2",{id:"sometimes-when-i-join-an-arena-it-kicks-me-saying-restarting"},"Sometimes when I join an arena, it kicks me saying ",(0,o.kt)("inlineCode",{parentName:"h2"},"Restarting")),(0,o.kt)("p",null,"This could be because you took to long to log in, so timed out for joining the arena."),(0,o.kt)("p",null,"To fix this, increase the ",(0,o.kt)("inlineCode",{parentName:"p"},"bwp-timeout")," option in the bedwars1058 config. It's in miliseconds, so 1000 = 1 second.\nThe default is 5000, so 5 seconds."))}c.isMDXComponent=!0}}]);