import{q as A,h as D,r as I,t as L,v as w,w as z,x as E,y as F,z as R,A as O,i as j,B as q,C as G,D as H,E as M,F as N,b as J,G as K,H as c,V as Q,o as U}from"./VMain-a5f2e716.js";import{d as W,I as X,m as Y,u as Z,c as o,k as p,t as ee,g as te,f as a}from"./index-d1719634.js";const ae=A("v-alert-title"),le=["success","info","warning","error"],ne=W({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:X,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>le.includes(e)},...D(),...I(),...L(),...w(),...z(),...E(),...F(),...Y(),...R({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const n=Z(e,"modelValue"),l=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),d=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:v}=p(e),{colorClasses:m,colorStyles:y,variantClasses:f}=O(d),{densityClasses:b}=j(e),{dimensionStyles:V}=q(e),{elevationClasses:C}=G(e),{locationStyles:k}=H(e),{positionClasses:P}=M(e),{roundedClasses:x}=N(e),{textColorClasses:g,textColorStyles:S}=J(ee(e,"borderColor")),{t:_}=te(),r=o(()=>({"aria-label":_(e.closeLabel),onClick(s){n.value=!1}}));return()=>{var s,i;const h=!!(t.prepend||l.value),B=!!(t.title||e.title),T=!!(e.text||t.text),$=!!(t.close||e.closable);return n.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},v.value,m.value,b.value,C.value,P.value,x.value,f.value],style:[y.value,V.value,k.value],role:"alert"},{default:()=>[K(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",g.value],style:S.value},null),h&&a(c,{key:"prepend",defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},{default:()=>[a("div",{class:"v-alert__prepend"},[t.prepend?t.prepend():l.value&&a(Q,null,null)])]}),a("div",{class:"v-alert__content"},[B&&a(ae,{key:"title"},{default:()=>[t.title?t.title():e.title]}),T&&(t.text?t.text():e.text),(s=t.default)==null?void 0:s.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),$&&a(c,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[a("div",{class:"v-alert__close"},[((i=t.close)==null?void 0:i.call(t,{props:r.value}))??a(U,r.value,null)])]})]})}}});export{ne as V};