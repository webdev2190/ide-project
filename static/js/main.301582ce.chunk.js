(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(30)},30:function(e,n,t){"use strict";t.r(n);var a=t(1),l=t.n(a),r=t(11),i=t.n(r),c=t(12),o=t(5),m=Object(a.createContext)(null);function u(e){var n=e.children,t=Object(a.useState)(Object(c.a)({},{value:!1,type:"",identifer:{folderId:"",cardId:""}})),r=Object(o.a)(t,2),i={isOpen:r[0],setIsOpen:r[1]};return l.a.createElement(m.Provider,{value:i},n)}var d=t(4),s=Object(a.createContext)(null);function b(e){var n,t,r,i=e.children,c=Object(a.useState)((r={},Object(d.a)(r,"1",{title:"Folder Title 1",items:(n={},Object(d.a)(n,"item1",{title:"Stack Implementation",language:"C++"}),Object(d.a)(n,"item2",{title:"Queue Implementation",language:"C++"}),Object(d.a)(n,"item3",{title:"XYZ Implementation",language:"C++"}),n)}),Object(d.a)(r,"2",{title:"Folder Title 2",items:(t={},Object(d.a)(t,"item4",{title:"1 Implementation",language:"C++"}),Object(d.a)(t,"item5",{title:"2 Implementation",language:"C++"}),Object(d.a)(t,"item6",{title:"3 Implementation",language:"C++"}),t)}),r)),m=Object(o.a)(c,2),u={folders:m[0],setFolders:m[1]};return l.a.createElement(s.Provider,{value:u},i)}var g,p,f,O,j,E,h,v,w,x,y,I,C,k,z,F,P,T,S,N,D,J,M,Q=t(2),X=t(3),Y=X.b.div(g||(g=Object(Q.a)(["\n  position: fixed;\n  width: 40%;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  background: #221f20;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Z=X.b.div(p||(p=Object(Q.a)(["\n  text-align: center;\n"]))),B=X.b.img(f||(f=Object(Q.a)(["\n  width: 165px;\n  margin-bottom: 1rem;\n"]))),H=X.b.h1(O||(O=Object(Q.a)(["\n  font-size: 2.4rem;\n  font-weight: 400;\n  color: white;\n  margin-bottom: 0.75rem;\n  span {\n    font-weight: 700;\n  }\n"]))),L=X.b.h2(j||(j=Object(Q.a)(["\n  font-size: 1.5rem;\n  color: white;\n  opacity: 75%;\n  margin-bottom: 1.5rem;\n  font-weight: 400;\n"]))),R=X.b.a(E||(E=Object(Q.a)(["\n  padding: 0.25rem 1rem;\n  border-radius: 2rem;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  cursor: pointer;\n  text-decoration: none;\n  span {\n    font-weight: 700;\n    font-size: 2rem;\n  }\n  &:hover {\n    opacity: 0.9;\n  }\n"]))),U=function(){return l.a.createElement(Y,null,l.a.createElement(Z,null,l.a.createElement(B,{src:"/logo.png",alt:""}),l.a.createElement(H,null,l.a.createElement("span",null,"Code")," Deck"),l.a.createElement(L,null,"Code. Compile. Debug."),l.a.createElement(R,null,l.a.createElement("span",null,"+")," Create New Playground")))},q=t(16),A=t(17),G=X.b.div(h||(h=Object(Q.a)(["\n  padding: 2rem;\n  background: #fafafa;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 60%;\n"]))),K=X.b.div(v||(v=Object(Q.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  margin-bottom: ",';\n  &::after {\n    position: absolute;\n    content: "";\n    bottom: -1.25rem;\n    width: 100%;\n    height: 2px;\n    background: rgba(0, 0, 0, 0.25);\n    display: ',";\n  }\n"])),function(e){return"main"===e.variant?"2.75rem":"1.4rem"},function(e){return"main"===e.variant?"block":"none"}),V=X.b.h3(w||(w=Object(Q.a)(["\n  font-weight: 400;\n  font-size: ",";\n  span {\n    font-weight: 700;\n  }\n"])),function(e){return"large"===e.size?"1.8rem":"1.5rem"}),W=X.b.button(x||(x=Object(Q.a)(["\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  background: transparent;\n  outline: 0;\n  border: 0;\n  font-size: 1.1rem;\n  cursor: pointer;\n  span {\n    font-size: 1.75rem;\n    font-weight: 700;\n  }\n  transition: all 0.25s ease;\n  &:hover {\n    opacity: 0.75;\n    scale: 1.1;\n  }\n"]))),$=X.b.div(y||(y=Object(Q.a)(["\n  margin-top: 0.5rem;\n"]))),_=X.b.div(I||(I=Object(Q.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 2rem;\n  row-gap: 2rem;\n"]))),ee=X.b.div(C||(C=Object(Q.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0.6rem;\n  gap: 1rem;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n"]))),ne=X.b.img(k||(k=Object(Q.a)(["\n  width: 75px;\n"]))),te=X.b.div(z||(z=Object(Q.a)(["\n  flex-grow: 1;\n  h5 {\n    font-weight: 400;\n    font-size: 1.2rem;\n    margin-bottom: 0.25rem;\n  }\n"]))),ae=X.b.div(F||(F=Object(Q.a)(["\n  display: flex;\n  gap: 0.5rem;\n  font-size: 1.25rem;\n  padding-right: 1rem;\n"]))),le=function(){var e,n,t,r=Object(a.useContext)(m).setIsOpen,i=(t={},Object(d.a)(t,"1",{title:"Folder Title 1",items:(e={},Object(d.a)(e,"item1",{title:"Stack Implementation",language:"C++"}),Object(d.a)(e,"item2",{title:"Queue Implementation",language:"C++"}),Object(d.a)(e,"item3",{title:"XYZ Implementation",language:"C++"}),e)}),Object(d.a)(t,"2",{title:"Folder Title 2",items:(n={},Object(d.a)(n,"item4",{title:"1 Implementation",language:"C++"}),Object(d.a)(n,"item5",{title:"2 Implementation",language:"C++"}),Object(d.a)(n,"item6",{title:"3 Implementation",language:"C++"}),n)}),t);return l.a.createElement(G,null,l.a.createElement(K,{variant:"main"},l.a.createElement(V,{size:"large"},"My ",l.a.createElement("span",null,"Playground")),l.a.createElement(W,null,l.a.createElement("span",null,"+")," New Folder")),Object.entries(i).map(function(e){var n=Object(o.a)(e,2),t=n[0],a=n[1];return l.a.createElement($,null,l.a.createElement(K,{variant:"folder"},l.a.createElement(V,{size:"small"},a.title),l.a.createElement(W,null,l.a.createElement("span",null,"+")," New Playground")),l.a.createElement(_,null,Object.entries(a.items).map(function(e){var n=Object(o.a)(e,2),a=n[0],i=n[1];return l.a.createElement(ee,null,l.a.createElement(ne,{src:"/logo-small.png",alt:""}),l.a.createElement(te,null,l.a.createElement("h5",null,i.title),l.a.createElement("p",null,"Language: ",i.language)),l.a.createElement(ae,null,l.a.createElement(q.a,null),l.a.createElement(A.a,{onClick:function(){r({value:!0,type:"1",identifer:{folderId:t,cardId:a}})}})))})))}))},re=t(18),ie=X.b.div(P||(P=Object(Q.a)(["\n  background: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),ce=X.b.div(T||(T=Object(Q.a)(["\n  background: white;\n  width: 35%;\n  padding: 2rem;\n  border-radius: 10px;\n"]))),oe=X.b.div(S||(S=Object(Q.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),me=X.b.button(N||(N=Object(Q.a)(["\n  background: transparent;\n  outline: 0;\n  border: 0;\n  font-size: 2rem;\n  cursor: pointer;\n"]))),ue=X.b.div(D||(D=Object(Q.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem 0;\n  gap: 2rem;\n  padding-bottom: 0;\n  input {\n    flex-grow: 1;\n    height: 2rem;\n  }\n  button {\n    background: #241f21;\n    height: 2rem;\n    color: white;\n    padding: 0 2rem;\n  }\n"]))),de=function(e){var n=e.setIsOpen,t=e.isOpen,r=Object(a.useContext)(s).folders;console.log(t);var i=r[t.identifer.folderId];console.log(i.items);var c=i.items[t.identifer.cardId];return l.a.createElement(l.a.Fragment,null,l.a.createElement(oe,null,l.a.createElement("h2",{className:"Heading"},"Edit Cards Title"),l.a.createElement(me,{onClick:function(){n({value:!1,type:"",identifer:{folderId:"",cardId:""}})}},l.a.createElement(re.a,null))),l.a.createElement(ue,null,l.a.createElement("input",{type:"text",value:c.title}),l.a.createElement("button",null,"Update Title")))},se=function(){var e=Object(a.useContext)(m),n=e.setIsOpen,t=e.isOpen;return l.a.createElement(ie,null,l.a.createElement(ce,null,"1"===t.type&&l.a.createElement(de,{setIsOpen:n,isOpen:t})))},be=X.b.div(J||(J=Object(Q.a)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n"]))),ge=function(){var e=Object(a.useContext)(m).isOpen;return l.a.createElement(be,null,l.a.createElement(U,null),l.a.createElement(le,null),!0===e.value?l.a.createElement(se,null):l.a.createElement(l.a.Fragment,null))},pe=Object(X.a)(M||(M=Object(Q.a)(["\n    *{\n        margin:0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n        font-family: 'Play', sans-serif;\n    }\n\n"])));var fe=function(){return l.a.createElement(b,null,l.a.createElement(u,null,l.a.createElement(pe,null),l.a.createElement(ge,null)))};i.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(fe,null)))}},[[19,2,1]]]);
//# sourceMappingURL=main.301582ce.chunk.js.map