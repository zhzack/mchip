import{b6 as A,s as h,bc as Y,b5 as Z,ac as V,aQ as ee,bd as te,O as ne,as as H,Q as I,be as D,bf as oe,a$ as P,bg as ae,aO as ue,C as le,c as _,j as S,h as C,r as R}from"./index-edb1fae1.js";import{u as re}from"./app-f01875ad.js";import{u as k}from"./epTheme-c7b55fb8.js";function se(){const{$storage:t,$config:e}=A(),o=()=>{var s,f,g,d,v,i,r,l,m,p,$,M,B;Y().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=Z),t.locale||(t.locale={locale:(s=e==null?void 0:e.Locale)!=null?s:"zh"},V().locale.value=(f=e==null?void 0:e.Locale)!=null?f:"zh"),t.layout||(t.layout={layout:(g=e==null?void 0:e.Layout)!=null?g:"vertical",theme:(d=e==null?void 0:e.Theme)!=null?d:"default",darkMode:(v=e==null?void 0:e.DarkMode)!=null?v:!1,sidebarStatus:(i=e==null?void 0:e.SidebarStatus)!=null?i:!0,epThemeColor:(r=e==null?void 0:e.EpThemeColor)!=null?r:"#409EFF"}),t.configure||(t.configure={grey:(l=e==null?void 0:e.Grey)!=null?l:!1,weak:(m=e==null?void 0:e.Weak)!=null?m:!1,hideTabs:(p=e==null?void 0:e.HideTabs)!=null?p:!1,showLogo:($=e==null?void 0:e.ShowLogo)!=null?$:!0,showModel:(M=e==null?void 0:e.ShowModel)!=null?M:"smart",multiTagsCache:(B=e==null?void 0:e.MultiTagsCache)!=null?B:!1})},n=h(()=>t==null?void 0:t.layout.layout),u=h(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:o}}const F="\u5F53\u524D\u8DEF\u7531\u914D\u7F6E\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E";function fe(){var E,z;const t=re(),e=ee().options.routes,{wholeMenus:o}=te(ne()),n=(z=(E=H())==null?void 0:E.TooltipEffect)!=null?z:"light",u=h(()=>{var a;return(a=D())==null?void 0:a.username}),s=h(()=>(a,c)=>({background:a===c?k().epThemeColor:"",color:a===c?"#f4f4f5":"#000"})),f=h(()=>(a,c)=>a===c?"":"dark:hover:!text-primary"),g=h(()=>u.value?{marginRight:"10px"}:""),d=h(()=>!t.getSidebarStatus),v=h(()=>t.getDevice),{$storage:i,$config:r}=A(),l=h(()=>{var a;return(a=i==null?void 0:i.layout)==null?void 0:a.layout}),m=h(()=>r.Title);function p(a){const c=H().Title;c?document.title=`${I(a.title)} | ${c}`:document.title=I(a.title)}function $(){D().logOut()}function M(){oe.push("/welcome")}function B(){P.emit("openPanel")}function U(){t.toggleSideBar()}function q(a){a==null||a.handleResize()}function J(a){var y;if(!a.children)return console.error(F);const c=/^http(s?):\/\//,b=(y=a.children[0])==null?void 0:y.path;return c.test(b)?a.path+"/"+b:b}function K(a,c){if(o.value.length===0||X(a))return;let b="";const y=a.lastIndexOf("/");y>0&&(b=a.slice(0,y));function x(w,N){return N?N.map(T=>{T.path===w?T.redirect?x(T.redirect,T.children):P.emit("changLayoutRoute",{indexPath:w,parentPath:b}):T.children&&x(w,T.children)}):console.error(F)}x(a,c)}function X(a){return ae.includes(a)}return{title:m,device:v,layout:l,logout:$,routers:e,$storage:i,backHome:M,onPanel:B,changeTitle:p,toggleSideBar:U,menuSelect:K,handleResize:q,resolvePath:J,isCollapse:d,pureApp:t,username:u,avatarsStyle:g,tooltipEffect:n,getDropdownItemStyle:s,getDropdownItemClass:f}}function Se(t){const{$storage:e,changeTitle:o,handleResize:n}=fe(),{locale:u,t:s}=V(),f=ue();function g(){e.locale={locale:"zh"},u.value="zh",t&&n(t.value)}function d(){e.locale={locale:"en"},u.value="en",t&&n(t.value)}return le(()=>u.value,()=>{o(f.meta)}),{t:s,route:f,locale:u,translationCh:g,translationEn:d}}const ce={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},de=C("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),ie=[de];function me(t,e){return _(),S("svg",ce,ie)}const Ee={render:me},L={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/home/runner/work/mchip/mchip/node_modules/.pnpm/@pureadmin+theme@3.0.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},he="/vue-pure-admin/",ge="assets";function G(t){let e=t.replace("#","").match(/../g);for(let o=0;o<3;o++)e[o]=parseInt(e[o],16);return e}function W(t,e,o){let n=[t.toString(16),e.toString(16),o.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function ve(t,e){let o=G(t);for(let n=0;n<3;n++)o[n]=Math.floor(o[n]*(1-e));return W(o[0],o[1],o[2])}function pe(t,e){let o=G(t);for(let n=0;n<3;n++)o[n]=Math.floor((255-o[n])*e+o[n]);return W(o[0],o[1],o[2])}function j(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function O({scopeName:t,multipleScopeVars:e}){const o=Array.isArray(e)&&e.length?e:L.multipleScopeVars;let n=document.documentElement.className;new RegExp(j(t)).test(n)||(o.forEach(u=>{n=n.replace(new RegExp(j(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function Q({id:t,href:e}){const o=document.createElement("link");return o.rel="stylesheet",o.href=e,o.id=t,o}function $e(t){const e={scopeName:"theme-default",customLinkHref:s=>s,...t},o=e.themeLinkTagId||L.themeLinkTagId;let n=document.getElementById(o);const u=e.customLinkHref(`${he.replace(/\/$/,"")}${`/${ge}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${o}_old`;const s=Q({id:o,href:u});n.nextSibling?n.parentNode.insertBefore(s,n.nextSibling):n.parentNode.appendChild(s),s.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),O(e)};return}n=Q({id:o,href:u}),O(e),document[(e.themeLinkTagInjectTo||L.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function ze(){var i;const{layoutTheme:t,layout:e}=se(),o=R([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=A(),u=R((i=n==null?void 0:n.layout)==null?void 0:i.darkMode),s=document.documentElement;function f(r="default"){var l,m;if(t.value.theme=r,$e({scopeName:`layout-theme-${r}`}),n.layout={layout:e.value,theme:r,darkMode:u.value,sidebarStatus:(l=n.layout)==null?void 0:l.sidebarStatus,epThemeColor:(m=n.layout)==null?void 0:m.epThemeColor},r==="default"||r==="light")d(H().EpThemeColor);else{const p=o.value.find($=>$.themeColor===r);d(p.color)}}function g(r,l,m){document.documentElement.style.setProperty(`--el-color-primary-${r}-${l}`,u.value?ve(m,l/10):pe(m,l/10))}const d=r=>{k().setEpThemeColor(r),document.documentElement.style.setProperty("--el-color-primary",r);for(let l=1;l<=2;l++)g("dark",l,r);for(let l=1;l<=9;l++)g("light",l,r)};function v(){k().epTheme==="light"&&u.value?f("default"):f(k().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:s,dataTheme:u,layoutTheme:t,themeColors:o,dataThemeChange:v,setEpThemeColor:d,setLayoutThemeColor:f}}const be={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Te=C("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),ye=C("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),Ce=[Te,ye];function Me(t,e){return _(),S("svg",be,Ce)}const Ne={render:Me},Be={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},ke=C("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),xe=C("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),we=[ke,xe];function He(t,e){return _(),S("svg",Be,we)}const Ie={render:He};export{Se as a,ze as b,Ie as c,Ne as d,se as e,Ee as g,$e as t,fe as u};
