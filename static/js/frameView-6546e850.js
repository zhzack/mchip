import{d as m,ac as p,r as o,aO as h,u as e,o as g,i as x,m as k,c as w,j as R,h as V,n as y,_ as B}from"./index-56b66478.js";const E=["element-loading-text"],L=["src"],S=m({name:"FrameView"}),b=m({...S,setup(D){var f,_,l;const{t:u}=p(),c=o(!0),t=h(),r=o(""),i=o(null);(f=e(t.meta))!=null&&f.frameSrc&&(r.value=(_=e(t.meta))==null?void 0:_.frameSrc),((l=e(t.meta))==null?void 0:l.frameLoading)===!1&&s();function s(){c.value=!1}function d(){y(()=>{const a=e(i);if(!a)return;const n=a;n.attachEvent?n.attachEvent("onload",()=>{s()}):a.onload=()=>{s()}})}return g(()=>{d()}),(a,n)=>{const v=x("loading");return k((w(),R("div",{class:"frame","element-loading-text":e(u)("status.hsLoad")},[V("iframe",{src:r.value,class:"frame-iframe",ref_key:"frameRef",ref:i},null,8,L)],8,E)),[[v,c.value]])}}});const j=B(b,[["__scopeId","data-v-8f8c8b9e"]]);export{j as default};
