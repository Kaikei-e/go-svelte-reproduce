import{S as T,i as j,s as D,e as i,t as P,k as _,c as u,a as k,g as N,d as b,n as y,b as c,f as U,J as s,L as $,K as w,M as A,N as B}from"../../chunks/vendor-cdf618b7.js";import{t as M,g as q,u as C}from"../../chunks/login-5054b7b8.js";import"../../chunks/singletons-12a22614.js";function F(h){let t,n,l,p,o,a,r,g,v,m,L,d,S,x;return{c(){t=i("form"),n=i("label"),l=P("ID"),p=_(),o=i("input"),a=_(),r=i("label"),g=P("Password"),v=_(),m=i("input"),L=_(),d=i("input"),this.h()},l(f){t=u(f,"FORM",{class:!0});var e=k(t);n=u(e,"LABEL",{});var E=k(n);l=N(E,"ID"),E.forEach(b),p=y(e),o=u(e,"INPUT",{type:!0,name:!0}),a=y(e),r=u(e,"LABEL",{});var I=k(r);g=N(I,"Password"),I.forEach(b),v=y(e),m=u(e,"INPUT",{type:!0,name:!0}),L=y(e),d=u(e,"INPUT",{type:!0}),e.forEach(b),this.h()},h(){c(o,"type","text"),c(o,"name","id"),c(m,"type","password"),c(m,"name","password"),c(d,"type","submit"),d.value="Sign in",c(t,"class","content")},m(f,e){U(f,t,e),s(t,n),s(n,l),s(t,p),s(t,o),s(t,a),s(t,r),s(r,g),s(t,v),s(t,m),s(t,L),s(t,d),S||(x=$(h[0].call(null,t)),S=!0)},p:w,i:w,o:w,d(f){f&&b(t),S=!1,x()}}}function H(h,t,n){let l;A(h,C,a=>n(1,l=a));const{form:p}=B({onSubmit:a=>{o(a)}});async function o(a){try{await M(a),l.user.sessionToken&&q("/")}catch(r){console.error(r)}}return[p]}class R extends T{constructor(t){super();j(this,t,H,F,D,{})}}export{R as default};
