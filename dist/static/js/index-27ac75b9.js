import{p as u}from"./index-1d030a9b.js";const n=Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"},"\u901A\u8FC7iframe\u5F15\u5165\u6309\u94AE\u9875\u9762")],-1),r=["src"],a=Vue.defineComponent({name:"Button"}),d=Vue.defineComponent({...a,setup(c){const{VITE_PUBLIC_PATH:e}=u(),t=Vue.ref(`${e}html/button.html`);return(l,s)=>{const o=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(o,null,{header:Vue.withCtx(()=>[n]),default:Vue.withCtx(()=>[Vue.createElementVNode("iframe",{src:t.value,frameborder:"0",class:"iframe w-full h-[60vh]"},null,8,r)]),_:1})}}});export{d as default};
