import{t as m}from"./data-f88f341d.js";import{r as a,al as r,aK as v,o as b,bm as u,M as C}from"./index-edb1fae1.js";function S(){const o=a([]),t=a(!0),n=a("nohide"),f=a("default"),h=a(!1),s=a("right"),c=[{label:"\u65E5\u671F",prop:"date",hide:()=>n.value==="hideDate"},{label:"\u59D3\u540D",prop:"name",hide:()=>n.value==="hideName"},{label:"\u5730\u5740",prop:"address",hide:()=>n.value==="hideAddress"}],l=r({pageSize:10,currentPage:1,pageSizes:[10,15,20],total:0,align:"right",background:!0,small:!1}),i=r({text:"\u6B63\u5728\u52A0\u8F7D\u7B2C\u4E00\u9875...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `});function d(e){l.small=e}function g(e){}function p(e){i.text=`\u6B63\u5728\u52A0\u8F7D\u7B2C${e}\u9875...`,t.value=!0,u(600).then(()=>{t.value=!1})}return v(()=>{l.align=s.value}),b(()=>{u(600).then(()=>{const e=[];Array.from({length:6}).forEach(()=>{e.push(C(m,!0))}),o.value=e.flat(1/0),l.total=o.value.length,t.value=!1})}),{loading:t,columns:c,dataList:o,hideVal:n,tableSize:f,pagination:l,loadingConfig:i,paginationAlign:s,paginationSmall:h,onChange:d,onSizeChange:g,onCurrentChange:p}}export{S as useColumns};
