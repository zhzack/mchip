const u=Vue.defineComponent({__name:"tree",setup(r){const n=(o,i,e)=>{setTimeout(()=>{e([{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}])},1e3)},t=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",children:[{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}]},{id:4,date:"2016-05-03",name:"wangxiaohu"}],d=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0},{id:4,date:"2016-05-03",name:"wangxiaohu"}],a=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"}];return(o,i)=>{const e=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(e,{data:t,columns:a,"row-key":"id",border:"","default-expand-all":"",class:"mb-6"}),Vue.createVNode(e,{data:d,columns:a,"row-key":"id",border:"",lazy:"",load:n,"tree-props":{children:"children",hasChildren:"hasChildren"}})])}}});export{u as _};
