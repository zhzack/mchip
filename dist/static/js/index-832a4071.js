import{V as s}from"./styles-daff0ed8.js";import"./index-1d030a9b.js";import"./_vue_commonjs-external-02441c5a.js";const i={class:"card-header"},l={class:"font-medium"},d={class:"font-medium"},c=Vue.defineComponent({name:"JsonEditor"}),w=Vue.defineComponent({...c,setup(h){const o={status:200,text:"",error:null,config:void 0,data:[{news_id:51184,title:"iPhone X Review: Innovative future with real black technology",source:"Netease phone"},{news_id:51183,title:"Traffic paradise: How to design streets for people and unmanned vehicles in the future?",source:"Netease smart",link:"http://netease.smart/traffic-paradise/1235"},{news_id:51182,title:"Teslamask's American Business Relations: The government does not pay billions to build factories",source:"AI Finance",members:["Daniel","Mike","John"]}]},e=Vue.reactive({val:JSON.stringify(o),data:o,showLine:!0,showLineNumber:!0,showDoubleQuotes:!0,showLength:!0,editable:!0,showIcon:!0,editableTrigger:"click",deep:3});return Vue.watch(()=>e.val,t=>{try{e.data=JSON.parse(t)}catch{}}),Vue.watch(()=>e.data,t=>{try{e.val=JSON.stringify(t)}catch{}}),(t,u)=>{const n=Vue.resolveComponent("el-link"),a=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(a,null,{header:Vue.withCtx(()=>[Vue.createElementVNode("div",i,[Vue.createElementVNode("span",l,[Vue.createTextVNode(" JSON\u7F16\u8F91\u5668\u7EC4\u4EF6\uFF0C\u91C7\u7528\u5F00\u6E90\u7684 "),Vue.createVNode(n,{href:"https://github.com/leezng/vue-json-pretty",target:"_blank",style:{"font-size":"16px",margin:"0 4px 5px"}},{default:Vue.withCtx(()=>[Vue.createTextVNode(" vue-json-pretty ")]),_:1}),Vue.createTextVNode(" \uFF08\u652F\u6301\u5927\u6570\u636E\u91CF\uFF09\u3002 ")]),Vue.createElementVNode("span",d,[Vue.createTextVNode(" \u5F53\u7136\u6211\u4EEC\u8FD8\u6709\u4E00\u6B3E\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u63A8\u8350\uFF08\u8FD9\u91CC\u5C31\u4E0D\u505A\u6F14\u793A\u4E86\uFF09\uFF0C\u91C7\u7528\u5F00\u6E90\u7684 "),Vue.createVNode(n,{href:"https://github.com/surmon-china/vue-codemirror",target:"_blank",style:{"font-size":"16px",margin:"0 4px 5px"}},{default:Vue.withCtx(()=>[Vue.createTextVNode(" codemirror6 ")]),_:1})])])]),default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(s),{data:e.data,"onUpdate:data":u[0]||(u[0]=r=>e.data=r),deep:e.deep,"show-double-quotes":e.showDoubleQuotes,"show-line":e.showLine,"show-length":e.showLength,"show-icon":e.showIcon,"show-line-number":e.showLineNumber,editable:e.editable,"editable-trigger":e.editableTrigger},null,8,["data","deep","show-double-quotes","show-line","show-length","show-icon","show-line-number","editable","editable-trigger"])]),_:1})}}});export{w as default};
