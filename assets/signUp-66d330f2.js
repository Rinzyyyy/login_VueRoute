import{u as z,a as D,r as s,w as P,d as l,o as E,c as F,b as t,e as $,v as q,f as u,n as c,t as i,g as H,h as L,i as T,R as M}from"./index-5986b797.js";const Z={class:"back"},j={class:"signUp"},G=["placeholder"],J=["placeholder"],K={class:"or"},O=t("hr",null,null,-1),Q=t("hr",null,null,-1),W={class:"singnUp"},ee={__name:"signUp",setup(X){const g=z(),B=D();let e=s(g.query.lang||"en");P(()=>g.query.lang,o=>{e=o,_=l[e].account,f=l[e].password,U=l[e].signUp,S=l[e].or,m=l[e].logInP,w=l[e].login,b=l[e].SignUpAlert,k=l[e].SignFale,x=l[e].hasbeenSignUp,C=l[e].SignUpfalelength,y=l[e].SignUpfaleChar});let _=l[e.value].account,f=l[e.value].password,U=l[e.value].signUp,S=l[e.value].or,m=l[e.value].logInP,w=l[e.value].login,b=l[e.value].SignUpAlert,k=l[e.value].SignFale,x=l[e.value].hasbeenSignUp,C=l[e.value].SignUpfalelength,y=l[e.value].SignUpfaleChar,I=s(!1);const p=s(null),d=s(null),r=s(null);P(()=>g.query.modeChecked,o=>{I=o,I=="false"?(p.value="",d.value="",r.value=""):(p.value="blackmode_button",d.value="blackmode_a",r.value="blackmode_p")});const a=s(null),n=s(null),A=new RegExp("^[A-Za-z0-9]+$"),R=s("hide"),V=s("hide");function N(){let o=localStorage.getItem(`account_${a.value}`);a.value!==null&&n.value!==null&&a.value!==o&&a.value.length>=5&&n.value>=5&&A.test(n.value)?(alert(b),localStorage.setItem(`account_${a.value}`,a.value),localStorage.setItem(`password_${a.value}`,n.value),B.push("/")):a.value===o&&a.value!==null?alert(x):a.value===null||a.value===null?alert(k):A.test(n.value)?(a.value.length<5&&a.value!==null||n.value.length<5&&n.value!==null)&&(R.value="show"):V.value="show"}return(o,v)=>(E(),F("div",Z,[t("form",null,[t("section",j,[$(t("input",{"onUpdate:modelValue":v[0]||(v[0]=h=>a.value=h),type:"text",placeholder:u(_)},null,8,G),[[q,a.value]]),$(t("input",{"onUpdate:modelValue":v[1]||(v[1]=h=>n.value=h),type:"text",placeholder:u(f)},null,8,J),[[q,n.value]]),t("p",{class:c(R.value)},i(u(C)),3),t("p",{class:c(V.value)},i(u(y)),3)]),t("button",{onClick:N,class:c(p.value)},i(u(U)),3),t("div",K,[O,t("p",{class:c(r.value)},i(u(S)),3),Q]),t("div",W,[t("p",{class:c(r.value)},i(u(m)),3),H(u(M),{to:"/",class:c(d.value)},{default:L(()=>[T(i(u(w)),1)]),_:1},8,["class"])])])]))}};export{ee as default};