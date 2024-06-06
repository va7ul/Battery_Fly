"use strict";(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[187],{8380:(n,e,t)=>{t.d(e,{r:()=>r});var o=t(7803);const i=o.PhoneNumberUtil.getInstance(),r=n=>{try{return"+380"===n||i.isValidNumber(i.parseAndKeepRawInput(n))}catch(e){return!1}}},1779:(n,e,t)=>{t.r(e),t.d(e,{default:()=>_e});var o,i,r,a,s,d,l,p,c,x,h=t(5043),m=t(3003),u=t(3216),g=t(8903),f=t(3892),b=t(3768),y=t(2459),w=t(5237),A=t(7380),v=(t(6088),t(7538)),j=t(5960),z=t(7528),k=t(221);const C=k.Ay.div(o||(o=(0,z.A)(["\n  max-width: 350px;\n  margin-bottom: 16px;\n\n  @media (min-width: 1280px) {\n    max-width: 476px;\n    margin-bottom: 20px;\n  }\n"]))),S=k.Ay.p(i||(i=(0,z.A)(["\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 6px;\n\n  @media (min-width: 1280px) {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 16px;\n  }\n"]))),N=k.Ay.form(r||(r=(0,z.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  @media (min-width: 1280px) {\n    gap: 6px;\n  }\n"]))),V=k.Ay.label(a||(a=(0,z.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 10px;\n\n  @media (min-width: 1280px) {\n    gap: 4px;\n    font-size: 20px;\n  }\n"]))),P=k.Ay.span(s||(s=(0,z.A)(["\n  &::after {\n    content: '*';\n    color: ",";\n    padding: 1px;\n\n    @media (min-width: 1280px) {\n      padding: 2px;\n    }\n  }\n"])),(n=>n.theme.colors.error)),M=(0,k.Ay)(f.D0)(d||(d=(0,z.A)(["\n  max-width: 350px;\n  height: 39px;\n  padding: 4px 8px;\n  border: 1px solid rgba(157, 157, 157, 1);\n  border-radius: 8px;\n  background: transparent;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n\n  @media (min-width: 1280px) {\n    max-width: 476px;\n    height: 51px;\n  }\n"])),(n=>n.theme.colors.hoverColor)),D=(0,k.DU)(l||(l=(0,z.A)(["\n  .react-international-phone-input-container .react-international-phone-input{\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n}  \n  \n  .react-international-phone-input {\n    width: 283px;\n    \n    @media (min-width: 1280px) {\n    width: 430px;\n  }\n  }\n   .react-international-phone-input-container .react-international-phone-country-selector-button{\n    width:37px;\n\n    @media (min-width: 1280px) {\n    width: 46px;\n  }\n} \n"])),(n=>n.theme.colors.hoverColor)),I=(0,k.Ay)(f.D0)(p||(p=(0,z.A)(["\n  max-width: 350px;\n  height: 72px;\n  padding: 8px;\n  border: 1px solid rgba(157, 157, 157, 1);\n  border-radius: 8px;\n  background: transparent;\n  overflow-x: auto;\n\n  &::placeholder {\n    font-size: 10px;\n    color: rgba(99, 99, 99, 0.5);\n  }\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n\n  @media (min-width: 1280px) {\n    max-width: 476px;\n    height: 101px;\n\n    &::placeholder {\n      font-size: 20px;\n    }\n  }\n"])),(n=>n.theme.colors.hoverColor)),R=(0,k.Ay)(f.Kw)(c||(c=(0,z.A)(["\n  color: ",";\n  font-size: 8px;\n\n  @media (min-width: 1280px) {\n    font-size: 12px;\n  }\n"])),(n=>n.theme.colors.error)),q=k.Ay.div(x||(x=(0,z.A)(["\n  color: ",";\n  font-size: 8px;\n\n  @media (min-width: 1280px) {\n    font-size: 12px;\n  }\n"])),(n=>n.theme.colors.error));var F=t(579);const T=n=>{let{formik:e,isValidPhone:t}=n;const o=(0,w.useMediaQuery)({query:"(min-width: 1280px)"}),{isLoggedIn:i,userData:{firstName:r,lastName:a,email:s,tel:d}}=(0,y.As)(),{tel:l}=(0,y.SC)(),p=(0,m.wA)();return(0,h.useEffect)((()=>{i&&(p((0,v.ZP)(d)),e.initialValues.firstName=r,e.initialValues.lastName=a,e.initialValues.email=s),i||(p((0,v.ZP)("+380")),e.initialValues.firstName="",e.initialValues.lastName="",e.initialValues.email="")}),[p,i,d,e.initialValues,r,a,s]),(0,F.jsxs)(f.QI,{value:e,children:[(0,F.jsxs)(C,{children:[(0,F.jsx)(S,{children:"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043d\u0456"}),(0,F.jsxs)(N,{onSubmit:e.handleSubmit,id:"form-order",children:[(0,F.jsxs)(V,{children:[(0,F.jsx)(P,{children:"\u0406\u043c'\u044f"}),(0,F.jsx)(M,{name:"firstName",type:"text"}),(0,F.jsx)(R,{name:"firstName",component:"div"})]}),(0,F.jsxs)(V,{children:[(0,F.jsx)(P,{children:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),(0,F.jsx)(M,{name:"lastName",type:"text"}),(0,F.jsx)(R,{name:"lastName",component:"div"})]}),(0,F.jsxs)(V,{children:[(0,F.jsx)(P,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,F.jsx)(A.LR,{style:{"--react-international-phone-height":o?"51px":"39px","--react-international-phone-background-color":"transparent","--react-international-phone-border-color":"".concat(j.w4.colors.textDisabled),"--react-international-phone-text-color":"".concat(j.w4.colors.textPrimary),"--react-international-phone-font-size":o?"20px":"10px","--react-international-phone-border-radius":"8px","--react-international-phone-flag-width":o?"24px":"16px","--react-international-phone-flag-height":o?"24px":"16px"},defaultCountry:"ua",hideDropdown:!0,value:i?d:l,onChange:n=>{"+380"!==n&&p((0,v.ZP)(n))}}),!t&&(0,F.jsx)(q,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"})]}),(0,F.jsxs)(V,{children:[(0,F.jsx)(P,{children:"E-\u043f\u043e\u0448\u0442\u0430"}),(0,F.jsx)(M,{name:"email",type:"text"}),(0,F.jsx)(R,{name:"email",component:"div"})]}),(0,F.jsxs)(V,{children:["\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",(0,F.jsx)(I,{component:"textarea",name:"text",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442"}),(0,F.jsx)(R,{name:"text",component:"div"})]})]})]}),(0,F.jsx)(D,{})]})};var U,Z,_,B,E,H,L,O,Q,$,G,Y,K=t(3536),W=t(5220),X=t(6971),J=t(3193),nn=t(7776),en=t(1698),tn=t(836),on=t(6990),rn=t(478);const an=k.Ay.p(U||(U=(0,z.A)(["\n  color: ",";\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 15px;\n  }\n"])),(n=>n.theme.colors.textPrimary)),sn=k.Ay.div(Z||(Z=(0,z.A)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 15px;\n\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 20px;\n  }\n"]))),dn=k.Ay.button(_||(_=(0,z.A)(["\n  width: 155px;\n  height: 40px;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 6px;\n  cursor: pointer;\n  text-align: center;\n  padding: 14px;\n  background: ",";\n\n  &:hover,\n  &:focus {\n    background: ",";\n  }\n\n  &:focus {\n    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 233px;\n    height: 61px;\n    font-size: 20px;\n    padding: 18px;\n    border-radius: 12px;\n  }\n"])),(n=>n.$show?n.theme.colors.yellow:n.theme.colors.greyBackgroundPaper),(n=>n.theme.colors.yellow)),ln=k.Ay.div(B||(B=(0,z.A)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 1280px) {\n    gap: 7px;\n  }\n"]))),pn=k.Ay.p(E||(E=(0,z.A)(["\n  text-transform: uppercase;\n  font-weight: 800;\n  color: #ec2028;\n\n  @media screen and (min-width: 1280px) {\n    gap: 7px;\n  }\n"]))),cn=k.Ay.svg(H||(H=(0,z.A)(["\n  width: 12px;\n  height: 12px;\n  fill: #ec2028;\n\n  @media screen and (min-width: 1280px) {\n    width: 24px;\n    height: 24px;\n  }\n"]))),xn=k.Ay.div(L||(L=(0,z.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 15px;\n\n  @media screen and (min-width: 1280px) {\n    gap: 15px;\n    margin-bottom: 20px;\n  }\n"]))),hn=k.Ay.div(O||(O=(0,z.A)(["\n  color: ",";\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n"])),(n=>n.theme.colors.backgroundPaper)),mn=k.Ay.p(Q||(Q=(0,z.A)(["\n  color: ",";\n  font-size: 15px;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n  }\n"])),(n=>n.theme.colors.textPrimary)),un=k.Ay.p($||($=(0,z.A)(["\n  color: ",";\n  font-size: 15px;\n\n  &::after {\n    content: '*';\n    color: ",";\n    padding: 1px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n  }\n"])),(n=>n.theme.colors.textPrimary),(n=>n.theme.colors.error)),gn=k.Ay.a(G||(G=(0,z.A)(["\n  color: ",";\n  font-size: 15px;\n  font-weight: 600;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n  }\n"])),(n=>n.theme.colors.textPrimary)),fn=k.Ay.div(Y||(Y=(0,z.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 15px;\n\n  @media screen and (min-width: 1280px) {\n    gap: 15px;\n    margin-bottom: 20px;\n  }\n"]))),bn={control:n=>({...n,backgroundColor:"rgba(247, 247, 247, 1)",borderRadius:"8px",borderStyle:"none",width:"320px",height:"40px",border:"1px solid rgb(157, 157, 157)","@media only screen and (min-width: 1280px)":{width:"476px",height:"51px"}}),menu:n=>({...n,backgroundColor:"rgba(247, 247, 247, 1)",fontSize:"10px",width:"320px",borderRadius:"8px",border:"1px solid rgb(157, 157, 157)","@media only screen and (min-width: 1280px)":{fontSize:"20px",width:"476px"}}),input:n=>({...n,fontSize:"10px",padding:"0px 8px",margin:0,"@media only screen and (min-width: 1280px)":{fontSize:"20px"}}),option:(n,e)=>{let{isDisabled:t,isFocused:o,isSelected:i}=e;return{...n,backgroundColor:o?"rgb(255, 208, 100)":void 0,color:t?void 0:"rgb(31, 31, 31);",cursor:t?"not-allowed":"default",padding:"2px 8px",":active":{...n[":active"],backgroundColor:t?void 0:"rgb(255, 208, 100)"},"@media only screen and (min-width: 1280px)":{borderRadius:"6px"}}},placeholder:n=>({...n,fontSize:"10px",padding:"0px 8px",margin:0,"@media only screen and (min-width: 1280px)":{fontSize:"20px"}}),valueContainer:n=>({...n,padding:0}),singleValue:n=>({...n,fontSize:"10px",margin:0,padding:"8px","@media only screen and (min-width: 1280px)":{fontSize:"20px"}})};var yn=t(4535),wn=t(8587),An=t(8168),vn=t(8387),jn=t(8606),zn=t(3650),kn=t(3064),Cn=t(2876),Sn=t(9662);const Nn=(0,Sn.A)((0,F.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Vn=(0,Sn.A)((0,F.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Pn=(0,yn.Ay)("span",{shouldForwardProp:yn.ep})({position:"relative",display:"flex"}),Mn=(0,yn.Ay)(Nn)({transform:"scale(1)"}),Dn=(0,yn.Ay)(Vn)((n=>{let{theme:e,ownerState:t}=n;return(0,An.A)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})})}));const In=function(n){const{checked:e=!1,classes:t={},fontSize:o}=n,i=(0,An.A)({},n,{checked:e});return(0,F.jsxs)(Pn,{className:t.root,ownerState:i,children:[(0,F.jsx)(Mn,{fontSize:o,className:t.background,ownerState:i}),(0,F.jsx)(Dn,{fontSize:o,className:t.dot,ownerState:i})]})};var Rn=t(6803),qn=t(6593);const Fn=h.createContext(void 0);var Tn=t(7056),Un=t(2400);function Zn(n){return(0,Un.Ay)("MuiRadio",n)}const _n=(0,Tn.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),Bn=["checked","checkedIcon","color","icon","name","onChange","size","className"],En=(0,yn.Ay)(kn.A,{shouldForwardProp:n=>(0,yn.ep)(n)||"classes"===n,name:"MuiRadio",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,"medium"!==t.size&&e["size".concat((0,Rn.A)(t.size))],e["color".concat((0,Rn.A)(t.color))]]}})((n=>{let{theme:e,ownerState:t}=n;return(0,An.A)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?"rgba(".concat("default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel," / ").concat(e.vars.palette.action.hoverOpacity,")"):(0,zn.X4)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{["&.".concat(_n.checked)]:{color:(e.vars||e).palette[t.color].main}},{["&.".concat(_n.disabled)]:{color:(e.vars||e).palette.action.disabled}})}));const Hn=(0,F.jsx)(In,{checked:!0}),Ln=(0,F.jsx)(In,{}),On=h.forwardRef((function(n,e){var t,o;const i=(0,Cn.A)({props:n,name:"MuiRadio"}),{checked:r,checkedIcon:a=Hn,color:s="primary",icon:d=Ln,name:l,onChange:p,size:c="medium",className:x}=i,m=(0,wn.A)(i,Bn),u=(0,An.A)({},i,{color:s,size:c}),g=(n=>{const{classes:e,color:t,size:o}=n,i={root:["root","color".concat((0,Rn.A)(t)),"medium"!==o&&"size".concat((0,Rn.A)(o))]};return(0,An.A)({},e,(0,jn.A)(i,Zn,e))})(u),f=h.useContext(Fn);let b=r;const y=(0,qn.A)(p,f&&f.onChange);let w=l;var A,v;return f&&("undefined"===typeof b&&(A=f.value,b="object"===typeof(v=i.value)&&null!==v?A===v:String(A)===String(v)),"undefined"===typeof w&&(w=f.name)),(0,F.jsx)(En,(0,An.A)({type:"radio",icon:h.cloneElement(d,{fontSize:null!=(t=Ln.props.fontSize)?t:c}),checkedIcon:h.cloneElement(a,{fontSize:null!=(o=Hn.props.fontSize)?o:c}),ownerState:u,classes:g,name:w,checked:b,onChange:y,ref:e,className:(0,vn.A)(g.root,x)},m))}));var Qn=t(9413),$n=t(5849),Gn=t(5242),Yn=t(5879);const Kn=["actions","children","defaultValue","name","onChange","value"],Wn=h.forwardRef((function(n,e){const{actions:t,children:o,defaultValue:i,name:r,onChange:a,value:s}=n,d=(0,wn.A)(n,Kn),l=h.useRef(null),[p,c]=(0,Gn.A)({controlled:s,default:i,name:"RadioGroup"});h.useImperativeHandle(t,(()=>({focus:()=>{let n=l.current.querySelector("input:not(:disabled):checked");n||(n=l.current.querySelector("input:not(:disabled)")),n&&n.focus()}})),[]);const x=(0,$n.A)(e,l),m=(0,Yn.A)(r),u=h.useMemo((()=>({name:m,onChange(n){c(n.target.value),a&&a(n,n.target.value)},value:p})),[m,a,c,p]);return(0,F.jsx)(Fn.Provider,{value:u,children:(0,F.jsx)(Qn.A,(0,An.A)({role:"radiogroup",ref:x},d,{children:o}))})})),Xn=(0,yn.Ay)(Wn)({gap:"5px","& .MuiButtonBase-root":{padding:"0px 5px 0px 0px",[j.P4.breakpoints.only("desktop")]:{padding:"0px 10px 0px 0px"}},"& .MuiFormControlLabel-root":{margin:0,alignItems:"flex-start",[j.P4.breakpoints.only("desktop")]:{alignItems:"baseline"}},"& .MuiTypography-root":{fontSize:"10px",[j.P4.breakpoints.only("desktop")]:{fontSize:"20px"}}}),Jn=(0,yn.Ay)(On)({"& .MuiSvgIcon-root":{width:"16px",height:"16px",[j.P4.breakpoints.only("desktop")]:{width:"18px",height:"18px"}}});var ne=t(7353);const ee=()=>{const n=(0,m.wA)(),e=(0,w.useMediaQuery)({query:"(max-width:1279px)"}),[t,o]=(0,h.useState)("none"),[i,r]=(0,h.useState)("none"),[a,s]=(0,h.useState)(!1),[d,l]=(0,h.useState)(!1);let p=(0,m.d4)(on._p),c=(0,m.d4)(on.tg);const x=(0,m.d4)(on.kg),u=(0,m.d4)(on.OA),g=(0,m.d4)(on.Zu),f=(0,m.d4)(on.jj),b=(0,m.d4)(rn.bP),y=p.map((n=>({value:n,label:n}))),A=(0,h.useMemo)((()=>(0,K.debounce)((e=>n((0,tn.Wg)(e))),1e3)),[n]),j=c.map((n=>({value:n,label:n}))),z=(0,h.useCallback)((n=>{""!==n&&A(n)}),[A]);return(0,F.jsxs)("div",{children:[(0,F.jsx)(an,{children:"\u0421\u043f\u043e\u0441\u0456\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,F.jsxs)(sn,{children:[(0,F.jsx)(dn,{onClick:()=>{"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"!==f&&(n((0,v.ml)(b.city)),n((0,v.mm)(b.warehouse)),r("none"),o("flex"),n((0,v.vp)("\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430")),s(!0),l(!1))},$show:a,children:(0,F.jsxs)(ln,{children:[(0,F.jsx)(cn,{children:(0,F.jsx)("use",{href:"".concat(ne.A,"#nova_poshta")})}),(0,F.jsx)(pn,{children:"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"})]})}),(0,F.jsx)(dn,{onClick:()=>{"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"!==f&&(o("none"),r("flex"),n((0,v.vp)("\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437")),n((0,v.ml)("null")),n((0,v.mm)("null")),l(!0),s(!1))},$show:d,children:"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"})]}),(0,F.jsxs)(fn,{style:{display:t},children:[(0,F.jsx)(un,{children:"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,F.jsx)(W.Ay,{options:y,value:x?y.find((n=>n.value===x)):"",defaultInputValue:b.city,onChange:e=>{n((0,v.ml)(e.value)),n((0,tn.DI)(e.value))},onInputChange:z,onFocus:()=>{n((0,v.ml)("")),n((0,v.mm)(""))},placeholder:"\u041c\u0456\u0441\u0442\u043e",styles:bn}),(0,F.jsx)(W.Ay,{options:j,value:u?j.find((n=>n.value===u)):"",defaultInputValue:b.warehouse,onChange:e=>{n((0,v.mm)(e.value))},onFocus:()=>{n((0,v.mm)(""))},placeholder:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f/\u043f\u043e\u0448\u0442\u043e\u043c\u0430\u0442",styles:bn})]}),(0,F.jsxs)(xn,{style:{display:i},children:[(0,F.jsx)(mn,{children:"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u0432\u0438\u0432\u043e\u0437\u0443:"}),(0,F.jsxs)(hn,{children:[e?(0,F.jsx)(nn.A,{sx:{fontSize:22,fill:"rgba(244, 170, 0, 1)"}}):(0,F.jsx)(nn.A,{sx:{fontSize:30,fill:"rgba(244, 170, 0, 1)"}}),(0,F.jsx)(gn,{href:"https://maps.app.goo.gl/HVQb7UZCPnmQ73356",target:"_blank",rel:"noopener noreferrer nofollow",children:"\u043c. \u041b\u044c\u0432\u0456\u0432, \u0432\u0443\u043b. \u0417\u0435\u043b\u0435\u043d\u0430, 109"})]})]}),(0,F.jsx)(an,{children:"\u0421\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438"}),(0,F.jsx)("div",{children:(0,F.jsx)(J.A,{children:(0,F.jsxs)(Xn,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",value:g,onChange:e=>{n((0,v.X$)(e.target.value))},children:[(0,F.jsx)(X.A,{value:"\u041a\u0430\u0440\u0442\u043e\u044e \u043f\u043e \u0440\u0435\u043a\u0432\u0456\u0437\u0438\u0442\u0430\u0445 \u0444\u0456\u0437\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431",control:(0,F.jsx)(Jn,{sx:{color:en.A[700],"&.Mui-checked":{color:en.A[800]}}}),label:"\u041a\u0430\u0440\u0442\u043e\u044e \u043f\u043e \u0440\u0435\u043a\u0432\u0456\u0437\u0438\u0442\u0430\u0445 \u0444\u0456\u0437\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431"}),(0,F.jsx)(X.A,{value:"\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431 \u0430\u0431\u043e \u0424\u041e\u041f",control:(0,F.jsx)(Jn,{sx:{color:en.A[700],"&.Mui-checked":{color:en.A[800]}}}),label:"\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431 \u0430\u0431\u043e \u0424\u041e\u041f"}),(0,F.jsx)(X.A,{value:"\u041d\u0430\u043a\u043b\u0430\u0434\u0435\u043d\u0438\u0439 \u043f\u043b\u0430\u0442\u0456\u0436",control:(0,F.jsx)(Jn,{sx:{color:en.A[700],"&.Mui-checked":{color:en.A[800]}}}),label:"\u041d\u0430\u043a\u043b\u0430\u0434\u0435\u043d\u0438\u0439 \u043f\u043b\u0430\u0442\u0456\u0436 (\u043f\u0440\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0456\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0457 \u0437\u0431\u0456\u0440\u043a\u0438, \u043f\u0435\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430 20%)"})]})})})]})};var te,oe,ie,re=t(2216);const ae=k.Ay.div(te||(te=(0,z.A)(["\n  width: 318px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 1280px) {\n    width: 526px;\n    border: none;\n  }\n"]))),se=k.Ay.p(oe||(oe=(0,z.A)(["\n  width: 100%;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 10px;\n\n  @media screen and (min-width: 1280px) {\n    border: none;\n    font-size: 32px;\n    text-align: start;\n    padding: 0;\n    margin-top: 24px;\n  }\n"]))),de=k.Ay.div(ie||(ie=(0,z.A)(["\n  width: 100%;\n  margin: 0 auto;\n  max-height: 226px;\n  overflow: auto;\n  padding-right: 2px;\n\n  @media screen and (min-width: 1280px) {\n    width: 100%;\n    max-height: 440px;\n    padding-right: 4px;\n  }\n\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 10px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background: ",";\n  }\n  &::-webkit-scrollbar-thumb:active {\n    background: ",";\n  }\n"])),(n=>n.theme.colors.textDisabled),(n=>n.theme.colors.textDisabled)),le=()=>(0,F.jsxs)(ae,{children:[(0,F.jsx)(se,{children:"\u041a\u043e\u0448\u0438\u043a"}),(0,F.jsx)(de,{children:(0,F.jsx)(re.R,{})})]});var pe,ce,xe,he,me,ue,ge;const fe=k.Ay.div(pe||(pe=(0,z.A)(["\n  width: 100%;\n  display: grid;\n  gap: 4px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  background: rgba(217, 217, 217, 0.38);\n\n  @media screen and (min-width: 1280px) {\n    gap: 8px;\n    padding: 10px;\n  }\n"]))),be=k.Ay.p(ce||(ce=(0,z.A)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n  }\n"]))),ye=k.Ay.p(xe||(xe=(0,z.A)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n\n  span {\n    color: ",";\n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n  }\n"])),(n=>n.discount?n.theme.colors.success:"inherit")),we=k.Ay.p(he||(he=(0,z.A)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 600;\n\n  @media screen and (min-width: 1280px) {\n    text-align: end;\n    border: none;\n    font-size: 24px;\n  }\n"]))),Ae=k.Ay.div(me||(me=(0,z.A)(["\n  font-size: 12px;\n  text-align: right;\n  margin-top: 4px;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 18px;\n    margin-top: 8px;\n  }\n\n  button {\n    background: transparent;\n    color: ",";\n  }\n"])),(n=>n.theme.colors.hoverColor)),ve=k.Ay.form(ue||(ue=(0,z.A)(["\n  font-size: 12px;\n  text-align: right;\n  margin-top: 15px;\n  height: 40px;\n  border-radius: 12px;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 18px;\n    margin-top: 20px;\n    height: 60px;\n  }\n\n  input {\n    width: 185px;\n    height: 100%;\n    padding-left: 10px;\n    border-radius: 12px 0px 0px 12px;\n    border: transparent;\n    background: ",";\n\n    ::placeholder {\n      color: ",";\n    }\n\n    &:focus {\n      outline: none;\n      border: 1px solid ",";\n    }\n\n    @media screen and (min-width: 1280px) {\n      width: 288px;\n    }\n  }\n\n  button {\n    width: 135px;\n    height: 100%;\n    border-radius: 0px 12px 12px 0px;\n    background: ",";\n    border: transparent;\n\n    &:hover,\n    :focus {\n      background: ",";\n    }\n\n    @media screen and (min-width: 1280px) {\n      width: 240px;\n    }\n  }\n"])),(n=>n.theme.colors.greyBackgroundPaper),(n=>n.theme.colors.textDisabled),(n=>n.theme.colors.secondary),(n=>n.theme.colors.secondary),(n=>n.theme.colors.hoverColor)),je=k.Ay.div(ge||(ge=(0,z.A)(["\n  font-size: 10px;\n  margin-top: 4px;\n  margin-left: 4px;\n  color: ",";\n\n  @media screen and (min-width: 1280px) {\n    font-size: 14px;\n  }\n"])),(n=>n.theme.colors.error)),ze=()=>{const{promoCodeDiscount:n}=(0,y.SC)(),{prettyTotal:e,prettyDiscount:t,prettyTogether:o}=(0,y.rN)(),[i,r]=(0,h.useState)(!1),a=(0,m.wA)();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(fe,{children:[(0,F.jsxs)(be,{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430:",(0,F.jsxs)("span",{children:[" ",e," \u0433\u0440\u043d"]})]}),(0,F.jsxs)(ye,{discount:n,children:["\u0417\u043d\u0438\u0436\u043a\u0430 \u0437\u0430 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434\u043e\u043c:",(0,F.jsxs)("span",{children:[" - ",t," \u0433\u0440\u043d"]})]}),(0,F.jsxs)(we,{children:["\u0420\u0430\u0437\u043e\u043c:",(0,F.jsxs)("span",{children:[o," \u0433\u0440\u043d"]})]})]}),n?(0,F.jsx)(je,{children:"*\u0417\u043d\u0438\u0436\u043a\u0430 \u0437\u0430 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434\u043e\u043c \u043d\u0435 \u043f\u043e\u0448\u0438\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u0430\u043a\u0446\u0456\u0439\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438!"}):i?(0,F.jsxs)(ve,{onSubmit:n=>{n.preventDefault(),a((0,tn.MG)(n.currentTarget.promo.value.toString()))},children:[(0,F.jsx)("input",{type:"text",name:"promo",placeholder:"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434"}),(0,F.jsx)("button",{type:"submit",children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438"})]}):(0,F.jsx)(Ae,{children:(0,F.jsx)("button",{type:"button",onClick:()=>{r(!i)},children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434"})})]})};var ke=t(899),Ce=t(9831);const Se=ke.Ik().shape({firstName:ke.Yj().min(2,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").max(20,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim().matches(Ce.V,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u0435\u044e, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0456\u043c'\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"),lastName:ke.Yj().min(2,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").max(30,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").trim().matches(Ce.V,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u0435\u044e, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430"),email:ke.Yj().email("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430")});var Ne,Ve,Pe,Me=t(8380),De=t(876),Ie=t(2966),Re=t(1727);const qe=k.Ay.h2(Ne||(Ne=(0,z.A)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: ",";\n  margin-bottom: 16px;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 32px;\n    margin-bottom: 20px;\n  }\n"])),(n=>n.theme.colors.hoverColor)),Fe=k.Ay.div(Ve||(Ve=(0,z.A)(["\n  display: grid;\n  padding: 20px;\n  max-width: 360px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 1280px) {\n    padding: 50px 110px;\n    max-width: 1280px;\n  }\n"]))),Te=k.Ay.button(Pe||(Pe=(0,z.A)(["\n  margin: 15px auto 0px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 400;\n  width: 149px;\n\n  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);\n  background: ",";\n\n  &:hover {\n    background: ",";\n  }\n  @media screen and (min-width: 1280px) {\n    width: 266px;\n    height: 61px;\n    padding: 15px 8px;\n    margin-top: 20px;\n    font-size: 20px;\n    margin: 15px 0px 0px;\n  }\n"])),(n=>n.theme.colors.secondary),(n=>n.theme.colors.hoverColor));var Ue=t(7572);const Ze=()=>{const n=(0,m.wA)(),e=(0,u.Zp)(),[t,o]=(0,h.useState)(!1),{isLoggedIn:i,userData:{firstName:r,lastName:a,email:s}}=(0,y.As)(),{text:d,tel:l,orderNum:p,total:c,promoCode:x,promoCodeDiscount:w,discountValue:A,together:z,cartItems:k,city:C,warehouse:S,payment:N,deliveryType:V}=(0,y.SC)(),P=(0,m.d4)(on.Di),M=(0,Me.r)(l);(0,h.useEffect)((()=>{p&&D()}),[p]);const D=()=>{o(!0),document.body.style.overflow="hidden"},I=(0,f.Wx)({initialValues:{firstName:i?r:"",lastName:i?a:"",email:i?s:"",text:d},validationSchema:Se,onSubmit:(e,t)=>{const o={userData:{firstName:e.firstName.trim(),lastName:e.lastName.trim(),tel:l,email:e.email,text:e.text},total:c,promoCode:x,promoCodeDiscount:w,discountValue:A,together:z,cartItems:k,deliveryType:V,city:C,warehouse:S,payment:N};n((0,v.f)(o.userData.text)),M&&"+380"!==l&&C&&N?n((0,tn.Oc)(o)).then((e=>{"fulfilled"===e.meta.requestStatus&&n((0,De.Up)())})):(0,b.Ay)("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043d\u0456, \u0441\u043f\u043e\u0441\u0456\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0456 \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438.",{id:"warning",icon:"\ud83d\udc40",duration:5e3,style:{borderRadius:"10px",background:"".concat(j.w4.colors.textPrimary),color:"".concat(j.w4.colors.secondary)}})}});return(0,F.jsxs)(F.Fragment,{children:[P&&(0,F.jsx)(Ue.A,{isLoading:P}),(0,F.jsxs)(Fe,{children:[(0,F.jsx)(qe,{children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,F.jsxs)(g.Ay,{container:!0,rowGap:"15px",children:[(0,F.jsxs)(g.Ay,{item:!0,desktop:6,children:[(0,F.jsx)(T,{formik:I,isValidPhone:M}),(0,F.jsx)(ee,{})]}),(0,F.jsxs)(g.Ay,{item:!0,desktop:6,children:[(0,F.jsx)(le,{}),(0,F.jsx)(ze,{})]})]}),(0,F.jsx)(Te,{type:"submit",form:"form-order",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]}),(0,F.jsxs)(Ie.E,{isModalAgreeOpen:t,handleCloseAgreeModal:()=>{o(!1),n((0,v.hq)("")),document.body.style.overflow="unset",e("/main")},buttonText:"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443",children:[(0,F.jsxs)(Re.U,{children:["\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f ",p,"."]}),(0,F.jsx)(Re.U,{children:"\u041e\u0447\u0456\u043a\u0443\u0439\u0442\u0435 \u043d\u0430 \u0434\u0437\u0432\u0456\u043d\u043e\u043a \u0432\u0456\u0434 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430."})]})]})},_e=()=>(0,F.jsx)(Ze,{})},7776:(n,e,t)=>{var o=t(4994);e.A=void 0;var i=o(t(39)),r=t(579);e.A=(0,i.default)((0,r.jsx)("path",{d:"M15 11V5l-3-3-3 3v2H3v14h18V11zm-8 8H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm6 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm6 12h-2v-2h2zm0-4h-2v-2h2z"}),"LocationCity")}}]);
//# sourceMappingURL=187.75ba5c20.chunk.js.map