"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6401],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_label:"Shop Config",title:"Shop Configuration",sidebar_position:3.5},i=void 0,s={unversionedId:"BedWars1058/configuration/shop",id:"BedWars1058/configuration/shop",title:"Shop Configuration",description:"If you want different prices per arena group you should use a server as a single arena (BUNGEE serverType).",source:"@site/docs/BedWars1058/configuration/shop.md",sourceDirName:"BedWars1058/configuration",slug:"/BedWars1058/configuration/shop",permalink:"/docs/BedWars1058/configuration/shop",draft:!1,editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/configuration/shop.md",tags:[],version:"current",sidebarPosition:3.5,frontMatter:{sidebar_label:"Shop Config",title:"Shop Configuration",sidebar_position:3.5},sidebar:"bw1058",previous:{title:"Generators Config",permalink:"/docs/BedWars1058/configuration/generators-configuration"},next:{title:"Levels Config",permalink:"/docs/BedWars1058/configuration/levels"}},c={},l=[{value:"How to create items like the armor category",id:"how-to-create-items-like-the-armor-category",level:3}],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you want different prices per arena group you should use a server as a single arena (BUNGEE serverType).")),(0,o.kt)("p",null,"Make sure you're using the right material name when changing item materials in this config. If you want to make ",(0,o.kt)("a",{parentName:"p",href:"shop#how-to-create-items-like-the-armor-category"},"custom categories"),". scroll to the bottom of the page."),(0,o.kt)("p",null,"For a list of materials, sounds, and potions, check the ",(0,o.kt)("a",{parentName:"p",href:"../resources"},"resources page"),"."),(0,o.kt)("p",null,"The following types of armor are supported: Leather, Chainmail, Iron, Diamond, Golden and Netherite. Please refer to the item list of the version you are using for the correct item names."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# This category contains various settings\nshop-settings:\n  # Quick-buy button\n  quick-buy-category:\n    material: NETHER_STAR\n    amount: 1\n    data: 0\n    enchanted: false\n\n  # This item is used to fill empty\n  # spaces in the quick buy category\n  quick-buy-empty-item:\n    material: RED_STAINED_GLASS_PANE\n    amount: 1\n    data: 4\n    enchanted: false\n\n  # Separator item between categories and items\n  regular-separator-item:\n    material: GRAY_STAINED_GLASS_PANE\n    amount: 1\n    data: 7\n    enchanted: false\n\n  # Separator item under selected category\n  selected-separator-item:\n    material: GREEN_STAINED_GLASS_PANE\n    amount: 1\n    data: 13\n    enchanted: false\n\n# This is not a shop category\n# They are just shop special entities\nshop-specials:\n  # Here you configure which item should spawn the "BedBug" entity\n  silverfish:\n    enable: true\n    material: SNOWBALL\n    data: 0\n    health: 8.0\n    damage: 4.0\n    speed: 0.25\n    despawn: 15\n  # Here you configure which item should spawn the "Dream Defender" entity\n  iron-golem:\n    enable: true\n    material: HORSE_SPAWN_EGG\n    data: 0\n    health: 100.0\n    despawn: 240\n    speed: 0.25\n  # Here you configure which item should spawn the "Pop-Up Tower"\n  tower:\n    enable: true\n    material: CHEST\n\n# This is not a shop category\n# This section contains the items you receive at the quick-buy shop category by default \nquick-buy-defaults:\n  element1:\n    # Path to the category content\n    path: blocks-category.category-content.wool\n    # Where to place it in the inventory\n    # Allowed slots interval [19; 26)U[28;35)U[37;44)\n    slot: 19\n\n# This is a category\n# You can add and remove categories\n# To create a new category just copy, and paste under this section\n# don\'t forget to rename it\nblocks-category:\n  # The slot where to place the category\n  # in the shop index. Value interval [1;8]\n  category-slot: 1\n  \n  # Category display item\n  category-item:\n    material: ORANGE_TERRACOTTA\n    data: 1\n    amount: 1\n    enchanted: false\n\n  # Contents to show when you open\n  # the category\n  category-content:\n    # Content 1\n    wool:\n      #Content settings\n      content-settings:\n      # Where to put the category content\n      # in the shop category\n      # Allowed slots interval [19; 26)U[28;35)U[37;44)\n        content-slot: 19\n        # Set this to true to give on respawn\n        is-permanent: true\n        # Set this to true to downgrade on death\n        # Requires permanent true\n        is-downgradable: false\n      \n      # Content tiers\n      # Use one single tier for unupgradable items\n      # You can add as many tiers you want\n      content-tiers:\n        # Tier 1 options\n        tier1:\n          # Display item in shop category\n          tier-item:\n            material: WHITE_WOOL\n            data: 0\n            amount: 16\n            enchanted: false\n          # Tier settings\n          tier-settings:\n            cost: 4\n            # Available currencies: iron, gold, emerald, diamond and vault (for economy)\n            currency: iron\n          # Here you add the items you receive\n          # When you buy this tier\n          buy-items:\n            wool:\n              material: WHITE_WOOL\n              data: 0\n              amount: 16\n              # Optional\n              # Enchantments. Use comma to add more enchantments.\n              enchants: DIG_SPEED 1,ARROW_DAMAGE 1\n              # Optional\n              # Potions. This only applies to potions.\n              # Syntax: POTION_NAME SECONDS AMPLIFIER-1\n              potion: JUMP 45 5\n              # From 1.16+ you can give potions custom RGB color\n              # Read more here: https://minecraft.gamepedia.com/Potion#Item_data\n              potion-color: \'\'\n          # Here you add the commands to be executed when players\n          # buy this tier. Placeholders:\n          # {player} for player name, {player_uuid} for player uuid\n          # {team} for team identifier, {team_display} for team display name\n          # {team_color} for team color, {arena} for arena identifier\n          # {arena_display} for arena display name, {arena_world} for worldName\n          # {arena_group} for arena group name.\n          buy-cmds:\n            # Commands executed as player (buyer)\n            as-player:\n            - some command\n            # Commands dispatched by console\n            as-console:\n            - say hello {player}\n              \n')),(0,o.kt)("h3",{id:"how-to-create-items-like-the-armor-category"},"How to create items like the armor category"),(0,o.kt)("p",null,"BedWars1058 provides a configuration called ",(0,o.kt)("inlineCode",{parentName:"p"},"weight")," that cand be added under:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"namehere-category:\n    category-content:\n      element1:\n        content-settings:\n          weight: 1\n")),(0,o.kt)("p",null,"If you buy a content from that shop category with weight 2 you won't be able to buy content with lower weight in this category. Like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"armor-category:\n    category-content:\n      iron:\n        content-settings:\n          weight: 1\n      diamond:\n        content-settings:\n          weight: 2\n")),(0,o.kt)("p",null,"In this example you'll no longer be able to buy the iron armor after buying the diamond armor."))}m.isMDXComponent=!0}}]);