import{u as s,w as p}from"./xlsx-acc0a47d.js";const h={class:"font-medium"},f={class:"h-[25rem] mt-3"},x=Vue.defineComponent({name:"Excel"}),w=Vue.defineComponent({...x,setup(C){const V=(o=10,t="column-",n)=>Array.from({length:o}).map((a,e)=>({...n,key:`${t}${e}`,dataKey:`${t}${e}`,title:`Column ${e}`,width:150})),d=(o,t=200,n="row-")=>Array.from({length:t}).map((a,e)=>o.reduce((u,r,c)=>(u[r.dataKey]=`Row ${e} - Col ${c}`,u),{id:`${n}${e}`,parentId:null})),l=V(10),_=d(l,1e3),i=()=>{const o=_.map(e=>{const u=[];return l.forEach(r=>{u.push(e[r.dataKey])}),u}),t=[];l.forEach(e=>{t.push(e.title)}),o.unshift(t);const n=s.aoa_to_sheet(o),a=s.book_new();s.book_append_sheet(a,n,"\u6570\u636E\u62A5\u8868"),p(a,"tableV2.xlsx")};return(o,t)=>{const n=Vue.resolveComponent("el-link"),a=Vue.resolveComponent("el-button"),e=Vue.resolveComponent("el-table-v2"),u=Vue.resolveComponent("el-auto-resizer"),r=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(r,null,{header:Vue.withCtx(()=>[Vue.createElementVNode("div",h,[Vue.createTextVNode(" \u5BFC\u51FAExecl\uFF08 "),Vue.createVNode(n,{href:"https://github.com/SheetJS/sheetjs",target:"_blank",style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:Vue.withCtx(()=>[Vue.createTextVNode(" github\u5730\u5740 ")]),_:1}),Vue.createTextVNode(" \uFF09 ")])]),default:Vue.withCtx(()=>[Vue.createVNode(a,{type:"primary",onClick:i},{default:Vue.withCtx(()=>[Vue.createTextVNode("\u5BFC\u51FAExcel")]),_:1}),Vue.createElementVNode("div",f,[Vue.createVNode(u,null,{default:Vue.withCtx(({height:c,width:m})=>[Vue.createVNode(e,{columns:Vue.unref(l),data:Vue.unref(_),width:m,height:c,fixed:""},null,8,["columns","data","width","height"])]),_:1})])]),_:1})}}});export{w as default};
