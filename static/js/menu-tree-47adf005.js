import{d as m,r as u,M as g,O as E,s as H,P as b,b as n,c as z,e as M,w as o,h as l,g as r,f as d,u as e,H as w,Q as p,R as B}from"./index-56b66478.js";import{u as D}from"./hooks-9f8f808c.js";const N={width:24,height:24,body:'<path fill="currentColor" d="M10 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8v2h5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H8v6h5v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H7a1 1 0 0 1-1-1V8H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6zm9 16h-4v2h4v-2zm0-8h-4v2h4v-2zM9 4H5v2h4V4z"/>'},T=N,I={class:"card-header"},P={class:"font-medium"},R=m({name:"MenuTree"}),S=m({...R,setup(q){const c=u(""),_=u({value:"uniqueId",children:"children"}),h=u(),f=g(E().wholeMenus,!0),i=H(()=>B(f)),v=b(i.value),x=t=>{h.value.filter(t)},V=(t,a)=>p(a.meta.title).indexOf(t)!==-1;return(t,a)=>{const k=n("el-link"),C=n("el-input"),y=n("el-tree-v2"),F=n("el-card");return z(),M(F,null,{header:o(()=>[l("div",I,[l("span",P,[r(" \u83DC\u5355\u6811\u7ED3\u6784\uFF08\u91C7\u7528element-plus\u7684 "),d(k,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:e(D)(e(T)),style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:o(()=>[r(" Tree V2 ")]),_:1},8,["icon"]),r(" \u7EC4\u4EF6\u5E76\u652F\u6301\u56FD\u9645\u5316\uFF09 ")])])]),default:o(()=>[d(C,{class:"mb-4",modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=s=>c.value=s),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u627E",clearable:"",onInput:x},null,8,["modelValue"]),d(y,{ref_key:"treeRef",ref:h,data:e(i),props:_.value,"show-checkbox":"",height:500,"filter-method":V,"default-expanded-keys":e(v)},{default:o(({data:s})=>[l("span",null,w(e(p)(s.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}});export{S as default};
