import{_ as l,E as n,r as d,H as c}from"./VMain-41dd979e.js";import{M as r,N as _,O as e,V as u,b as a,az as o,P as s}from"./index-b8a59749.js";import{V as m}from"./VSheet-f5c9ee86.js";const h=o("h1",null,"道案内",-1),p=o("div",null,[o("video",{id:"video"})],-1),i=document.getElementById("video");navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{i.srcObject=t,i.play()}).catch(t=>{console.log(t)});const b={__name:"Navi",setup(t){return(f,v)=>(r(),_(u,{id:"inspire"},{default:e(()=>[a(l),a(c,{class:"bg-blue-lighten-5"},{default:e(()=>[a(n,null,{default:e(()=>[a(m,{"min-height":"70vh",rounded:"lg",class:"pa-4"},{default:e(()=>[h,o("h2",null,[a(d,null,{default:e(()=>[s("mdi-camera")]),_:1}),s(" カメラ起動")]),p]),_:1})]),_:1})]),_:1})]),_:1}))}};export{b as default};