import{u as R,a as q,r as s,w as C,d as l,o as B,c as N,b as t,e as V,v as A,f as a,t as v,n as d,g as D,h as I,i as L,R as T}from"./index-12dca107.js";const $={class:"reset"},z=["placeholder"],E=["placeholder"],M={class:"or"},j=t("hr",null,null,-1),G=t("hr",null,null,-1),H={class:"singnUp"},O={__name:"forgot",setup(J){const i=R(),F=q();let e=s(i.query.lang||"en");C(()=>i.query.lang,u=>{e=u,g=l[e].account,f=l[e].resetPassword,m=l[e].reset,k=l[e].or,w=l[e].have,x=l[e].signUp,y=l[e].resetSucessAlert,U=l[e].resetFalse,b=l[e].resetFalse2});let g=l[e.value].account,f=l[e.value].resetPassword,m=l[e.value].reset,k=l[e.value].or,w=l[e.value].have,x=l[e.value].signUp,y=l[e.value].resetSucessAlert,U=l[e.value].resetFalse,b=l[e.value].resetFalse2,S=s(!1);const _=s(null),p=s(null),n=s(null);C(()=>i.query.modeChecked,u=>{S=u,S=="false"?(_.value="",p.value="",n.value=""):(_.value="blackmode_button",p.value="blackmode_a",n.value="blackmode_p")});const o=s(null),r=s(null);function P(){let u=localStorage.getItem(`account_${o.value}`);o.value!==null&&o.value===u?r.value!==null?(alert(y),localStorage.setItem(`password_${o.value}`,r.value),F.push("/")):alert(U):alert(b)}return(u,c)=>(B(),N("main",null,[t("section",$,[V(t("input",{"onUpdate:modelValue":c[0]||(c[0]=h=>o.value=h),type:"text",placeholder:a(g)},null,8,z),[[A,o.value]]),V(t("input",{"onUpdate:modelValue":c[1]||(c[1]=h=>r.value=h),type:"text",placeholder:a(f)},null,8,E),[[A,r.value]])]),t("button",{onClick:P,class:d(_.value)},v(a(m)),3),t("div",M,[j,t("p",{class:d(n.value)},v(a(k)),3),G]),t("div",H,[t("p",{class:d(n.value)},v(a(w)),3),D(a(T),{to:"/signUp",class:d(p.value)},{default:I(()=>[L(v(a(x)),1)]),_:1},8,["class"])])]))}};export{O as default};