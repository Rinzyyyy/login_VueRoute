import{u as R,a as q,r as s,w as I,d as l,o as B,c as N,b as t,e as C,v as A,f as o,t as i,n as p,g as $,h as D,i as F,R as L}from"./index-12dca107.js";const T={class:"signUp"},z=["placeholder"],E=["placeholder"],M={class:"or"},j=t("hr",null,null,-1),G=t("hr",null,null,-1),H={class:"singnUp"},O={__name:"signUp",setup(J){const v=R(),V=q();let e=s(v.query.lang||"en");I(()=>v.query.lang,n=>{e=n,h=l[e].account,m=l[e].password,U=l[e].signUp,S=l[e].or,f=l[e].logInP,w=l[e].login,b=l[e].SignUpAlert,k=l[e].SignFale,x=l[e].hasbeenSignUp});let h=l[e.value].account,m=l[e.value].password,U=l[e.value].signUp,S=l[e.value].or,f=l[e.value].logInP,w=l[e.value].login,b=l[e.value].SignUpAlert,k=l[e.value].SignFale,x=l[e.value].hasbeenSignUp,y=s(!1);const d=s(null),g=s(null),u=s(null);I(()=>v.query.modeChecked,n=>{y=n,y=="false"?(d.value="",g.value="",u.value=""):(d.value="blackmode_button",g.value="blackmode_a",u.value="blackmode_p")});const a=s(null),c=s(null);function P(){let n=localStorage.getItem(`account_${a.value}`);a.value!==null&&c.value!==null&&a.value!==n?(alert(b),localStorage.setItem(`account_${a.value}`,a.value),localStorage.setItem(`password_${a.value}`,c.value),V.push("/")):a.value===n&&a.value!==null?alert(x):alert(k)}return(n,r)=>(B(),N("main",null,[t("section",T,[C(t("input",{"onUpdate:modelValue":r[0]||(r[0]=_=>a.value=_),type:"text",placeholder:o(h)},null,8,z),[[A,a.value]]),C(t("input",{"onUpdate:modelValue":r[1]||(r[1]=_=>c.value=_),type:"text",placeholder:o(m)},null,8,E),[[A,c.value]])]),t("button",{onClick:P,class:p(d.value)},i(o(U)),3),t("div",M,[j,t("p",{class:p(u.value)},i(o(S)),3),G]),t("div",H,[t("p",{class:p(u.value)},i(o(f)),3),$(o(L),{to:"/",class:p(g.value)},{default:D(()=>[F(i(o(w)),1)]),_:1},8,["class"])])]))}};export{O as default};
