import{b as l}from"./data-cc5c031c.js";import"./index-1d030a9b.js";function d(r,o){const n=Vue.ref([]),c=[{type:"selection",align:"left"},{label:"ID",prop:"id",width:80},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}],s=Vue.reactive({pageSize:10,currentPage:1,layout:"prev, pager, next",total:l.length,background:!0,small:!0});return{columns:c,pagination:s,selectValue:n,tableDataEdit:l,onSure:()=>{r.value.blur()},onClear:()=>{const{clearSelection:e}=o.value.getTableRef();e()},removeTag:e=>{const{toggleRowSelection:a}=o.value.getTableRef();a(l.filter(t=>t.name===e)[0],!1)},handleSelectionChange:e=>{const a=[];e.forEach(t=>{a.push(t.name)}),n.value=a}}}export{d as useColumns};
