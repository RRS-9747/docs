"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[253],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return l}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},A={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),l=a,f=d["".concat(u,".").concat(l)]||d[l]||A[l]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function l(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2328:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_label:"Joining arenas",title:"How to join arenas",sidebar_position:2.3},u=void 0,s={unversionedId:"BedWars1058/setup/how-to-join-arenas",id:"BedWars1058/setup/how-to-join-arenas",title:"How to join arenas",description:"About",source:"@site/docs/BedWars1058/setup/how-to-join-arenas.md",sourceDirName:"BedWars1058/setup",slug:"/BedWars1058/setup/how-to-join-arenas",permalink:"/docs/BedWars1058/setup/how-to-join-arenas",editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/setup/how-to-join-arenas.md",tags:[],version:"current",sidebarPosition:2.3,frontMatter:{sidebar_label:"Joining arenas",title:"How to join arenas",sidebar_position:2.3},sidebar:"tutorialSidebar",previous:{title:"Creating Arenas",permalink:"/docs/BedWars1058/setup/creating-arenas"},next:{title:"Grouping arenas",permalink:"/docs/BedWars1058/setup/arena-groups"}},p=[{value:"About",id:"about",children:[],level:2},{value:"Join command",id:"join-command",children:[],level:2},{value:"Join GUI",id:"join-gui",children:[],level:2},{value:"Join NPCs",id:"join-npcs",children:[],level:2},{value:"Join Signs",id:"join-signs",children:[],level:2}],A={toc:p};function d(e){var n=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},A,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about"},"About"),(0,o.kt)("p",null,"There are different ways to join an arena:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"via ",(0,o.kt)("a",{parentName:"li",href:"how-to-join-arenas#join-command"},"command")),(0,o.kt)("li",{parentName:"ul"},"via ",(0,o.kt)("a",{parentName:"li",href:"how-to-join-arenas#join-gui"},"gui")),(0,o.kt)("li",{parentName:"ul"},"via ",(0,o.kt)("a",{parentName:"li",href:"how-to-join-arenas#join-gui"},"npc")),(0,o.kt)("li",{parentName:"ul"},"via ",(0,o.kt)("a",{parentName:"li",href:"how-to-join-arenas#join-signs"},"sign"))),(0,o.kt)("h2",{id:"join-command"},"Join command"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"join",src:t(4321).Z})),(0,o.kt)("p",null,"You can join an arena using ",(0,o.kt)("inlineCode",{parentName:"p"},"bw join <arenaName>")," if it is waiting/ starting. When you join an arena while is in-game status, you will be added as spectator. You can also join a random arena via command using ",(0,o.kt)("inlineCode",{parentName:"p"},"bw join <groupName>"),". Read ",(0,o.kt)("a",{parentName:"p",href:"arena-groups"},"arena groups"),". Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"bw join Solo"),". Use ",(0,o.kt)("inlineCode",{parentName:"p"},"bw join default")," for arenas without a group."),(0,o.kt)("h2",{id:"join-gui"},"Join GUI"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arena-selector",src:t(8076).Z})),(0,o.kt)("p",null,"You can join arenas via this item received when you join the server if it is ",(0,o.kt)("inlineCode",{parentName:"p"},"server-type: MULTIARENA"),". You can open the arenas GUI also via command ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw gui")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw gui <groupName>")," to open the gui for a specific ",(0,o.kt)("a",{parentName:"p",href:"arena-groups"},"group"),". You can't open the arenas GUI at all if your server is ",(0,o.kt)("inlineCode",{parentName:"p"},"server-type: BUNGEE")," and via command only if ",(0,o.kt)("inlineCode",{parentName:"p"},"server-type: SHARED"),". Read about server type here."),(0,o.kt)("h2",{id:"join-npcs"},"Join NPCs"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot_1",src:t(7227).Z})),(0,o.kt)("p",null,"BedWars1058 provides ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/citizens.13811/"},"Citizens")," support. You can join arenas by clicking on an NPC. More details about Citizens hook ",(0,o.kt)("a",{parentName:"p",href:"citizens-hook"},"here"),"."),(0,o.kt)("h2",{id:"join-signs"},"Join Signs"),(0,o.kt)("p",null,"If you want to place a join sign, first of all you need to type ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw build")," in order to place blocks. Now you can place it and write on the first line ",(0,o.kt)("inlineCode",{parentName:"p"},"[bw]")," and on the second line the name of the warena you want to join."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[bw]\nAmazon\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"c45a65a289796296cb91ea5186ed16392ff6e027",src:t(4638).Z})))}d.isMDXComponent=!0},7227:function(e,n,t){n.Z=t.p+"assets/images/Screenshot_1-5139dadaa717cdca7d81fc1518d11a91.png"},8076:function(e,n,t){n.Z=t.p+"assets/images/arena-selector-8dc42a057e6e9928b1afd91af7859aaa.png"},4638:function(e,n){n.Z="data:image/png;base64,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"},4321:function(e,n){n.Z="data:image/png;base64,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"}}]);