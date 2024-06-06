"use strict";(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[714],{4355:(n,e,i)=>{i.d(e,{Z:()=>Z});var t,r,o,s,d,a,p,x,c,l,h,m,g=i(3003),u=i(5475),f=i(616),v=i(788),j=i(876),A=i(3954),y=i(7528),b=i(3156),w=i(221);const z=(0,w.AH)(t||(t=(0,y.A)(["\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  width: 20px;\n  height: 20px;\n  color: ",";\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    transform: scale(1.3);\n    cursor: pointer;\n  }\n\n  @media screen and (min-width: 1280px) {\n    top: 10px;\n    right: 10px;\n    width: 30px;\n    height: 30px;\n  }\n"])),(n=>n.theme.colors.hoverColor),(n=>n.theme.transition.main),(n=>n.theme.colors.hoverColor)),C=(0,w.AH)(r||(r=(0,y.A)(["\n  font-size: 10px;\n  height: 25px;\n  padding: 6px 18px;\n  margin-top: 5px;\n  border-radius: 20px;\n  background: ",";\n\n  &:hover,\n  &:focus {\n    background: ",";\n    transform: scale(1.05);\n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n    height: 40px;\n    margin-top: 10px;\n  }\n"])),(n=>n.theme.colors.secondary),(n=>n.theme.colors.hoverColor)),k=(0,w.Ay)(b.sOK)(o||(o=(0,y.A)(["\n  ",";\n"])),z),H=(0,w.Ay)(b.yeC)(s||(s=(0,y.A)(["\n  ",";\n"])),z),M=w.Ay.div(d||(d=(0,y.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),O=w.Ay.img(a||(a=(0,y.A)(["\n  width: 100%;\n  height: 144px;\n  border-radius: 10px;\n  object-fit: cover;\n\n  @media screen and (min-width: 1280px) {\n    height: ",";\n    border-radius: 16px;\n  }\n"])),(n=>"\u0410\u043a\u0446\u0456\u0457"===n.category?"270px":"230px")),L=w.Ay.p(p||(p=(0,y.A)(["\n  height: 40px;\n  font-size: 10px;\n  margin-top: 5px;\n  overflow: hidden;\n\n  @media screen and (min-width: 1280px) {\n    height: 66px;\n    font-size: 18px;\n    margin-top: 15px;\n  }\n"]))),_=w.Ay.div(x||(x=(0,y.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n\n  @media screen and (min-width: 1280px) {\n    height: 70px;\n  }\n"]))),q=w.Ay.span(c||(c=(0,y.A)(["\n  font-size: 14px;\n  font-weight: 600;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 24px;\n  }\n"]))),B=w.Ay.span(l||(l=(0,y.A)(["\n  text-decoration-line: line-through;\n  font-size: 10px;\n  color: ",";\n\n  @media screen and (min-width: 1280px) {\n    font-size: 18px;\n  }\n"])),(n=>n.theme.colors.textDisabled)),F=w.Ay.button(h||(h=(0,y.A)(["\n  ","\n"])),C),N=w.Ay.button(m||(m=(0,y.A)(["\n  font-size: 10px;\n  height: 25px;\n  padding: 6px 18px;\n  margin-top: 5px;\n  border-radius: 20px;\n  background: rgba(157, 157, 157, 0.3);\n\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n    height: 40px;\n    margin-top: 10px;\n  }\n"])));var P=i(2),G=i(478),E=i(2884),K=i(919),V=i(2459),Y=i(579);const Z=n=>{let{product:e,category:i}=n;const t=(0,g.wA)(),{codeOfGood:r,image:o,name:s,price:d,discount:a,sale:p,capacity:x,quantity:c}=e,{isLoggedIn:l}=(0,V.As)(),h=(0,g.d4)(E.rM).some((n=>n.codeOfGood===r)),m=(0,g.d4)(G.Cp).some((n=>n===r)),y=p?(0,K.g)(a,d):d,b=()=>{t(m?(0,v.C$)(r):(0,v.Pj)(r))};return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(M,{children:[m?(0,Y.jsx)(H,{onClick:b}):(0,Y.jsx)(Y.Fragment,{children:l?(0,Y.jsx)(k,{onClick:b}):(0,Y.jsx)(k,{onClick:()=>{l||(t((0,P.MY)(!0)),document.body.style.overflow="hidden")}})}),(0,Y.jsxs)(u.N_,{to:"../assortment/".concat(r),children:[(0,Y.jsx)(O,{category:i,loading:"lazy",src:o[0]||f,alt:s,onError:n=>{n.currentTarget.src="".concat(f)}}),(0,Y.jsx)(L,{children:s})]}),(0,Y.jsxs)(_,{children:[(0,Y.jsxs)(q,{children:[y," \u0433\u0440\u043d"]}),p&&(0,Y.jsxs)(B,{children:[d," \u0433\u0440\u043d"]})]}),x?(0,Y.jsx)(u.N_,{to:"../assortment/".concat(r),children:(0,Y.jsx)(F,{children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"})}):h?(0,Y.jsx)(F,{onClick:()=>{t((0,A.BW)(!0))},children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0443 \u043a\u043e\u0448\u0438\u043a"}):c>0?(0,Y.jsx)(F,{onClick:()=>{t((0,j.B5)({...e,price:p?y:d,capacityKey:"",selectedSealing:!1,selectedHolder:!1,quantityOrdered:1,totalPrice:p?y:d}))},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0443 \u043a\u043e\u0448\u0438\u043a"}):(0,Y.jsx)(N,{disabled:!0,children:"\u041d\u0435\u043c\u0430\u0454 \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"})]})})}},8863:(n,e,i)=>{i.d(e,{a:()=>f});var t,r,o=i(3003),s=i(3235),d=i(9896),a=i(3792),p=i(3832),x=i(788),c=i(7528),l=i(221),h=i(5475);const m=l.Ay.ul(t||(t=(0,c.A)(["\n  display: grid;\n  width: fit-content;\n  gap: 8px;\n\n  @media screen and (min-width: 1280px) {\n    gap: 16px;\n  }\n\n  li:last-child {\n    a > span {\n      &::after {\n        display: none;\n      }\n    }\n  }\n"]))),g=(0,l.Ay)(h.k2)(r||(r=(0,c.A)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  transition: ",";\n\n  svg {\n    width: 20px;\n    height: 20px;\n\n    @media screen and (min-width: 1280px) {\n      width: 24px;\n      height: 24px;\n    }\n  }\n\n  span {\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n      background: ",";\n      width: 68px;\n      height: 1px;\n      left: 0px;\n      bottom: -6px;\n      transition: ",";\n\n      @media screen and (min-width: 1280px) {\n        width: 96px;\n        bottom: -9px;\n      }\n    }\n  }\n\n  &:hover,\n  &:focus {\n    color: ",";\n\n    span {\n      &::after {\n        background: ",";\n      }\n    }\n  }\n\n  &.active {\n    color: ",";\n\n    span {\n      &::after {\n        background: ",";\n      }\n    }\n  }\n"])),(n=>n.theme.transition.main),(n=>n.theme.colors.textPrimary),(n=>n.theme.transition.main),(n=>n.theme.colors.hoverColor),(n=>n.theme.colors.hoverColor),(n=>n.theme.colors.hoverColor),(n=>n.theme.colors.hoverColor));var u=i(579);const f=()=>{const n=(0,o.wA)();return(0,u.jsx)("aside",{children:(0,u.jsxs)(m,{children:[(0,u.jsx)("li",{children:(0,u.jsxs)(g,{to:"../profile",children:[(0,u.jsx)(s.A,{}),(0,u.jsx)("span",{children:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(g,{to:"../orders",children:[(0,u.jsx)(d.A,{}),(0,u.jsx)("span",{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(g,{to:"../favorites",children:[(0,u.jsx)(a.A,{}),(0,u.jsx)("span",{children:"\u041e\u0431\u0440\u0430\u043d\u0435"})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(g,{to:"../",onClick:()=>{n((0,x.je)())},children:[(0,u.jsx)(p.A,{}),(0,u.jsx)("span",{children:"\u0412\u0438\u0439\u0442\u0438"})]})})]})})}},4714:(n,e,i)=>{i.r(e),i.d(e,{default:()=>N});var t,r,o=i(3003),s=i(5043),d=i(8414),a=i(2459),p=i(7997),x=i(5237),c=i(7668),l=i(8863),h=i(7528),m=i(221),g=i(5960);const u=m.Ay.ul(t||(t=(0,h.A)(["\n  display: grid;\n  gap: 16px 12px;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media screen and (min-width: 1280px) {\n    gap: 30px 20px;\n    grid-template-columns: repeat(3, 1fr);\n  }\n"]))),f=m.Ay.li(r||(r=(0,h.A)(["\n  max-width: 250px;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  background: linear-gradient(rgba(213, 213, 213, 1), rgba(241, 241, 241, 0));\n  padding: 5px 5px 10px;\n  border-radius: 12px;\n  position: relative;\n  z-index: 0;\n  transition: ",";\n  cursor: pointer;\n\n  ","\n  &::after {\n    border-radius: 12px;\n  }\n\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding: 10px 10px 20px;\n    border-radius: 20px;\n\n    &::after {\n      border-radius: 20px;\n    }\n  }\n"])),(n=>n.theme.transition.main),g.yq);var v=i(4355),j=i(579);const A=n=>{let{favorites:e}=n;return(0,j.jsx)(u,{children:null===e||void 0===e?void 0:e.map((n=>(0,j.jsx)(f,{children:(0,j.jsx)(v.Z,{product:n})},n.codeOfGood)))})};var y,b;const w=m.Ay.div(y||(y=(0,h.A)(["\n  padding: 20px;\n  display: grid;\n  row-gap: 20px;\n  font-size: 10px;\n\n  @media screen and (min-width: 1280px) {\n    padding: 50px 110px;\n    grid-template-columns: 1fr 790px;\n    font-size: 15px;\n  }\n"]))),z=m.Ay.h2(b||(b=(0,h.A)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 10px;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 40px;\n    margin-bottom: 30px;\n  }\n"])));var C,k,H,M=i(3792),O=i(5475);const L=m.Ay.div(C||(C=(0,h.A)(["\n  height: 70vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  svg {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    fill: ",";\n    opacity: 0.5;\n  }\n\n  p {\n    position: relative;\n    z-index: 1;\n    text-align: center;\n  }\n"])),(n=>n.theme.colors.greyBackgroundPaper)),_=m.Ay.p(k||(k=(0,h.A)(["\n  padding-top: 30vh;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 10px;\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 28vh;\n    font-size: 36px;\n    margin-bottom: 15px;\n  }\n"]))),q=(0,m.Ay)(O.N_)(H||(H=(0,h.A)(["\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 8px;\n  padding: 8px 6px;\n  margin-top: 15px;\n  background: ",";\n\n  @media screen and (min-width: 1280px) {\n    font-size: 18px;\n    padding: 14px 10px;\n    border-radius: 12px;\n    margin-top: 25px;\n  }\n\n  :hover,\n  :focus {\n    background: ",";\n  }\n"])),(n=>n.theme.colors.secondary),(n=>n.theme.colors.hoverColor)),B=()=>(0,j.jsxs)(L,{children:[(0,j.jsx)(_,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u0440\u0430\u043d\u0438\u0445 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439"}),(0,j.jsxs)("p",{children:["\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0442\u043e\u0432\u0430\u0440\u0438, \u044f\u043a\u0456 \u0441\u043f\u043e\u0434\u043e\u0431\u0430\u043b\u0438\u0441\u044f \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443 \u043e\u0431\u0440\u0430\u043d\u0438\u0445, ",(0,j.jsx)("br",{})," \u0449\u043e\u0431 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0457\u0445 \u043f\u0456\u0437\u043d\u0456\u0448\u0435."]}),(0,j.jsx)(q,{to:"/assortment",children:"\u0414\u043e \u0430\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0443"}),(0,j.jsx)(M.A,{})]}),F=()=>{const n=(0,x.useMediaQuery)({query:"(min-width:1280px)"}),e=(0,o.d4)(c.lY);return(0,j.jsxs)(w,{children:[n&&(0,j.jsx)(l.a,{}),null!==e&&void 0!==e&&e.length?(0,j.jsxs)("div",{children:[(0,j.jsx)(z,{children:"\u041e\u0431\u0440\u0430\u043d\u0435"}),(0,j.jsx)(A,{favorites:e})]}):(0,j.jsx)(B,{})]})},N=()=>{const n=(0,o.wA)(),{isLoading:e,error:i}=(0,a.pn)();return(0,s.useEffect)((()=>{n((0,d.bA)())}),[n]),(0,j.jsxs)(j.Fragment,{children:[e&&(0,j.jsx)(p.X,{}),!e&&!i&&(0,j.jsx)(F,{})]})}},919:(n,e,i)=>{i.d(e,{g:()=>t});const t=(n,e)=>{if("string"===typeof e){const[i,t]=e.split("-").map(Number),r=Math.round(i-i*n/100),o=Math.round(t-t*n/100);return"".concat(r," - ").concat(o)}return Math.round(e-e*n/100)}},3792:(n,e,i)=>{var t=i(4994);e.A=void 0;var r=t(i(39)),o=i(579);e.A=(0,r.default)((0,o.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorderOutlined")},9896:(n,e,i)=>{var t=i(4994);e.A=void 0;var r=t(i(39)),o=i(579);e.A=(0,r.default)((0,o.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"}),"HistoryOutlined")},3832:(n,e,i)=>{var t=i(4994);e.A=void 0;var r=t(i(39)),o=i(579);e.A=(0,r.default)((0,o.jsx)("path",{d:"m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5z"}),"LogoutOutlined")},616:(n,e,i)=>{n.exports=i.p+"static/media/no-image-available.3ab3b1116add9155d3ef.webp"}}]);
//# sourceMappingURL=714.1ae34028.chunk.js.map