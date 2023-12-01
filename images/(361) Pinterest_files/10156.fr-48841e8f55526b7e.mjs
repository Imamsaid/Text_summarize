"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[10156],{5342:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e,t,n=28){let r;if(!(e||{}).resurrection_info&&!(t||{}).resurrectionInfo)return!1;r=t?((t||{}).resurrectionInfo||{}).resurrectionDate:((e||{}).resurrection_info||{}).resurrection_dt;let o=new Date,i=r?new Date(r):o;return i.setDate(i.getDate()+n),new Date().getTime()<i.getTime()}},31368:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(970588),o=n(98736),i=n(890415);async function a(e){let t=(0,i.i$)(),n=(0,i.nR)(),a=(0,i.di)(),l=t?t.map(({pageType:e,...t})=>t):null,s={is_register:null!=e&&e};if(l&&(s.unauth_visited_pages=JSON.stringify(l)),n&&(s.invite_redemption=JSON.stringify(n)),a&&(s.paid_landing=JSON.stringify(a)),l||n||a){let e=await (0,r.Z)({url:"/v3/orientation/user_landing_signals/",method:"POST",data:s});(0,o.My)(`landing_signals.flush.${e.status}`),(0,i.z$)()}}},324159:(e,t,n)=>{n.d(t,{M:()=>d,Z:()=>h});var r=n(667294),o=n(969327),i=n(583592),a=n(684113),l=n(467045),s=n(245410),u=n(282802),_=n(549201),c=n(785893);let{Provider:g,useMaybeHook:d}=(0,i.Z)("GoogleSignInApi"),p=()=>{let e=(0,_.HG)(),{checkExperiment:t}=(0,s.F)();return t(e?"web_google_disabled":"mweb_google_disabled").anyEnabled},f=()=>{let{userAgent:e}=(0,u.B)(),{browserName:t,platform:n}=e,r=null!=t?t:"";return(0,o.G6)(r)||"ios"===n};function h({children:e}){let t=p(),n=f(),o=(0,r.useRef)(null),i=(0,r.useRef)(new Set),_=(0,r.useRef)(new Set),d=(0,r.useRef)(null),{language:h}=(0,u.B)(),{checkExperiment:m}=(0,s.F)(),b=(0,r.useRef)(!1),v=(0,r.useCallback)(()=>{if(b.current)return;b.current=!0;let e=!1,t=()=>{let t=(0,a.Fm)();t&&!e&&(e=!0,(0,l.Z)({type:"loadScript",status:"success"}),(0,l.Z)({type:"apiClient",valid:!!t}),d.current=t,(0,a.OY)({autoSelect:!0,itpSupport:n},e=>{if((0,l.Z)({type:"response",valid:!!e}),!e)return;let t=(0,a.PL)(e.select_by);if("SIGN_IN_WITH_GOOGLE_BUTTON"===t){let t=Array.from(i.current),n=t[t.length-1],r=o.current;n?n(e):r&&r(e)}else{var n;null===(n=o.current)||void 0===n||n.call(o,e)}}),_.current.forEach(e=>{e()}),_.current.clear())};window.onGoogleLibraryLoad=()=>t(),(0,l.Z)({type:"loadScript",status:"start"}),(0,a.Px)(void 0,m("mweb_google_button_locale_fix").anyEnabled||m("dweb_google_button_locale_fix").anyEnabled?h:void 0).then(()=>{t()}).catch(()=>{})},[m,n,h]);(0,r.useEffect)(()=>{t?(i.current.clear(),_.current.clear()):v()},[t,v]);let w=(0,r.useRef)({ensureInit:(e,t)=>(v(),"button"===e?i.current.add(t):o.current=t,new Promise(e=>{let t=!!d.current;t?e():_.current.add(e)})),removeButtonCallback:e=>{i.current.delete(e)}});return(0,c.jsx)(g,{value:w.current,children:e})}},684113:(e,t,n)=>{n.d(t,{Fm:()=>a,OY:()=>s,PL:()=>_,Px:()=>l,mK:()=>c,ru:()=>u});var r=n(307052),o=n(837792),i=n(98736);let a=()=>{var e,t,n;return null===(e=window)||void 0===e?void 0:null===(t=e.google)||void 0===t?void 0:null===(n=t.accounts)||void 0===n?void 0:n.id},l=(e,t)=>(0,r.Z)("https://accounts.google.com/gsi/client"+(t?`?hl=${t}`:""),null!=e&&e.unsafe?null:"GSI"),s=({autoSelect:e,itpSupport:t},n)=>{var r;null===(r=a())||void 0===r||r.initialize({auto_select:null!=e&&e,client_id:o.v3o,callback:n,cancel_on_tap_outside:!1,context:"use",itp_support:t})},u=({buttonRef:e,isDesktop:t,locale:n,logo_alignment:r})=>{let o=a();if(o&&e.current){let t=e.current.offsetWidth;o.renderButton(e.current,{locale:n,size:"large",shape:"pill",text:"continue_with",theme:"outline",width:t+"px",logo_alignment:r,click_listener:()=>(0,i.EX)({event:"start",provider:"google"})})}else(0,i.My)((t?"unauth_web":"unauth_mweb")+".gsi_button.not_initialized")},_=e=>"auto"===e?"AUTO_LOGIN":e.startsWith("btn")?"SIGN_IN_WITH_GOOGLE_BUTTON":"ONE_TAP_PROMPT",c=e=>{switch(e){case"SIGN_IN_WITH_GOOGLE_BUTTON":return"gsi_btn";case"ONE_TAP_PROMPT":return"onetap_btn";default:return"other"}}},804484:(e,t,n)=>{n.d(t,{E_:()=>u,Eh:()=>i,du:()=>s,yV:()=>a});var r=n(813586),o=n(509342);let i=(e,t)=>"DEPRECATED_CHECK_EXISTS"===t?"facebook_id"in e&&"facebook"||"google_open_id_token"in e&&"google"||"line_id_token"in e&&"line"||"email":"DEPRECATED_CHECK_TRUTHY"===t?e.facebook_id?"facebook":e.google_open_id_token?"google":e.line_id_token?"line":"email":e.type,a=e=>{let t=i(e,"DEPRECATED_CHECK_TRUTHY");return"google"===t?"google_one_tap":t},l=(e="")=>e in r.i5,s=e=>o.rT.includes(e)||o.ZR.has(e)||l(e),u={GOOGLE:"g",FACEBOOK:"fb",PINTEREST:"p",APPLE:"apl",LINE:"ln",UNKNOWN:"unk"}},467045:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(688807),o=n(98736);let i=e=>(0,o.dy)({event:e,provider:"google"}),a=e=>(0,r.RP)("google_autologin",e),l=e=>(0,r.M3)("google_autologin",e),s=e=>{switch(e.type){case"loadScript":"start"===e.status?(i("start"),i("load_script_start"),l("autoLoginGoogleStart")):"success"===e.status?i("load_script_success"):i("load_script_failure");break;case"apiClient":e.valid?(i("initialize_library"),l("autoLoginGoogleInitEnd")):(a("noAccountFound"),i("global_object_not_found"));break;case"response":e.valid?(i("receive_credential_response_from_provider"),(0,o.EX)({event:"receive_credential_response_from_provider",provider:"google"})):(a("noResponse"),(0,o.EX)({event:"receive_no_credential_response_from_provider",provider:"google"}));break;case"autologin":"start"===e.status?(i("pinterest_login_start"),(0,o.NC)("press_google_one_tap_other"),(0,r.M3)("google_autologin","autoLoginGoogleEnd"),(0,r.PA)("google_autologin")):("success"===e.status?i("pinterest_login_success"):i("pinterest_login_failure"),i("end"));break;case"manualLoginAttempt":(0,o.NC)(e.fromConnectButton?"press_google_one_tap_button":"press_google_one_tap"),(0,r.PA)("google_autologin")}}},245410:(e,t,n)=>{n.d(t,{F:()=>i,a:()=>o});var r=n(583592);let{Provider:o,useHook:i}=(0,r.Z)("ExperimentContext")},688807:(e,t,n)=>{n.d(t,{M3:()=>h,PA:()=>m,RP:()=>f,gq:()=>d});var r=n(938790),o=n(763795),i=n(39983),a=n(372453),l=n(591614),s=n(879751),u=n(769916),_=n(622200);let c=({name:e,pwtStaticContext:t})=>{if(!_.Z||!(0,r.Z)())return null;let n={type:"stopwatch",name:e},o=[],i=!0;return{abort:e=>{i&&(i=!1,(0,l.Z)({metricId:n,pwtStaticContext:t,result:{type:"ABORT",reason:e}}))},annotate:e=>{i&&o.push({label:e,timestamp:_.Z.now()})},stop:()=>{if(!i)return;i=!1;let e={type:"COMPLETE",traceId:(0,u.Z)(),startTime:0,endTime:_.Z.now(),spans:[],annotationMap:(0,s.Z)(o),binaryAnnotationMap:(0,a.ng)({metricId:n,pwtStaticContext:t})};(0,l.Z)({metricId:n,pwtStaticContext:t,result:e})}}},g={},d=(e,t)=>{t.forEach(t=>{g[t]=c({name:t,pwtStaticContext:e})})},p=e=>g[e],f=(e,t)=>{let n=p(e);if(n)try{n.abort(t)}catch(t){(0,o.H)("app_load_stopwatch_error",{name:e,result:"abort"})}},h=(e,t)=>{let n=p(e);n&&(n.annotate(t),(0,i.ZP)(`stopwatch_${e}_${t}`))},m=e=>{let t=p(e);if(t)try{t.stop()}catch(t){(0,o.H)("app_load_stopwatch_error",{name:e,result:"complete"})}}},879751:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>{let t={};e.forEach(({label:e,timestamp:n})=>{t={...t,[e]:(t[e]||[]).concat([n])}});let n=Object.freeze({});return Object.keys(t).forEach(e=>{(t[e]||[]).forEach((t,r)=>{let o=r?`${e}_${r+1}`:e;n={...n,[o]:t}})}),n}},469093:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(739425);function o(){let e=(0,r.mB)(window.location.search);if("31"===e.utm_source)return"email";if(e.utm_pai)return"paid";let t=document.referrer;return t?t.includes("/t.co/")?"twitter":t.includes("cdn.ampproject.org")?"amp":t.includes("google.")?"google":t.includes("bing.")?"bing":t.includes("facebook.")?"facebook":"other":"direct"}},284814:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(667294),o=n(469093),i=n(98736);function a(){return(0,r.useCallback)(e=>{e.action&&e.event?(0,i.My)("pinner_conversion",{...e,type:e.type||"none",trigger:e.trigger||"other",referrer:(0,o.Z)()}):(0,i.My)("pinner_conversion.missing_tags")},[])}},272109:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(667294);let o=e=>{(0,r.useEffect)(e,[])}},890415:(e,t,n)=>{n.d(t,{Cb:()=>L,Ff:()=>B,Lp:()=>v,O0:()=>C,OJ:()=>E,PW:()=>R,S2:()=>P,Yi:()=>k,Yy:()=>Z,Z4:()=>h,ZN:()=>g,dc:()=>T,di:()=>w,i$:()=>p,nR:()=>m,oQ:()=>$,t_:()=>d,z$:()=>N});var r=n(690108),o=n(457628),i=n(791045),a=n(611756),l=n(173085),s=n(98736),u=n(739425),_=n(509342),c=n(772356);let g=["utm_pai","utm_source","invite_code"],d=()=>(0,a.qn)(_.tz,""),p=()=>{let e;let t=d();try{e=JSON.parse(t)}catch(t){e=[]}return e},f=()=>(0,a.L_)(_.tz),h=(e,t)=>{let n=p(),r=n.length,o=r?n[0].path:"";if(r<_.eA&&(!r||e!==o)){let r={path:e,pageType:t,ts:Date.now()};(0,a.Nh)(_.tz,JSON.stringify([r].concat(n)))}},m=()=>{let e;let t=(0,a.qn)(_.Lg,"");try{e=JSON.parse(t)}catch(t){e=null}return e},b=()=>(0,a.L_)(_.Lg),v=e=>{if(!e)return;let t={inviteCode:e,ts:Date.now()};(0,a.Nh)(_.Lg,JSON.stringify(t))},w=()=>{let e;let t=(0,a.qn)(_.eV,"");try{e=JSON.parse(t)}catch(t){e=null}return e},y=()=>(0,a.L_)(_.Lg),P=(e,t)=>{if(!e)return;let n={...!!t&&{adImageUrl:t},campaignId:e,ts:Date.now()};(0,a.Nh)(_.eV,JSON.stringify(n))},E=()=>(0,a.qn)(_.fo,""),O=()=>(0,a.L_)(_.fo),L=e=>{(0,a.Nh)(_.fo,e)},N=()=>{d()&&f(),m()&&b(),w()&&y(),E()&&O()};function T(){let e=p();return e.filter(e=>"closeup"===e.pageType).length}function k(){let e=r.Z.create("UnauthUserDataResource");return new Promise((t,n)=>{e.callGet().then(e=>{let r=e.resource_response.data,a=!!o.U2(i.x3);return r?((0,c.Wn)(r.medium_image_url)&&(r.medium_image_url=""),(0,s.My)(`mweb.unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_${a?"true":"false"}`),t(r)):((0,s.My)(`mweb.unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_${a?"true":"false"}`),n({}))}).catch(e=>{if(e&&e.message){let t=e.message.replace(/\s/g,"_").toLowerCase();(0,s.My)(`mweb.unauth.personalized_login.fetch_user_info.error.${t}`)}else(0,s.My)("mweb.unauth.personalized_login.fetch_user_info.error.unknown");return n(e)})})}function S({i18n:e,location:t}){let n;let r=t.pathname.startsWith("/signup"),o=t.pathname.startsWith("/login");if(!r&&!o)return{showPLPBanner:!1,pinForBanner:null};try{n=JSON.parse((0,l.qn)(_.KH))}catch(e){n=[]}if(n&&n.length>0){let t=n[0];if(t)return t.bannerCopy=e.bt("D’autres idées similaires vous attendent", "More ideas like this await", "page banner with pin image that was signed up from", undefined, true),{showPLPBanner:!!t.image,pinForBanner:t}}return{showPLPBanner:!1,pinForBanner:null}}let Z=e=>e.search&&e.search.startsWith("?next=")?e.search.split("?next=")[1]:null;function A({i18n:e,location:t}){var n;let r=(null===(n=t.state)||void 0===n?void 0:n.next)||Z(t);if(r){let t=r.indexOf("?"),n=(0,u.mB)(r.substring(t));if(n.url&&n.media)return{showPLPBanner:!0,pinForBanner:{image:{url:(0,u.Jx)(n.media),height:1,width:1},pinDescription:n.description,bannerCopy:e.bt("Enregistrez cette idée et découvrez d’autres sources d’inspiration similaires.", "Save this idea and discover more inspiration like it.", "page banner with pin image that was signed up from", undefined, true)}}}return{showPLPBanner:!1,pinForBanner:null}}function B({i18n:e,location:t}){return A({i18n:e,location:t}).showPLPBanner?A({i18n:e,location:t}):S({i18n:e,location:t}).showPLPBanner?S({i18n:e,location:t}):{showPLPBanner:!1,pinForBanner:null}}let $=(e,t)=>e?`https://i.pinimg.com/${t||"474x"}/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:"",C=e=>e?`https://i.pinimg.com/75x75/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:"",R=e=>e?`https://i.pinimg.com/236x/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:""},772356:(e,t,n)=>{function r(e){return!!(null==e?void 0:e.is_matured_new_user)}n.d(t,{IR:()=>a,V0:()=>r,Wn:()=>i,xT:()=>o});let o=e=>!!e&&2===e.login_state,i=e=>!!(e&&e.match(/\/static\/images\/user\/default_\d+\.png$/));function a(e){return!e||void 0===e.third_party_marketing_tracking_enabled||null===e.third_party_marketing_tracking_enabled||e.third_party_marketing_tracking_enabled}},522285:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(11555);function o(){let e=new r.H("/resource/ApiSResource/create/","ApiSResource",e=>({source:"browser",stats:e}),5e3);return{log:(t,n,r,o={})=>{let{sampleRate:i=.1,tags:a={}}=o,l=[t,n,r,i,a];e.enqueue(l)}}}},935340:(e,t,n)=>{n.d(t,{LY:()=>l,QX:()=>a,S0:()=>s,nP:()=>i});let r=n(522285).Z,o=r();function i(e,t){o.log(e,1,"c",t)}function a(e,t,n){o.log(e,t,"c",n)}function l(e,t,n){o.log(e,t,"ms",n)}function s(e,t,n){o.log(e,t,"g",n)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/10156.fr-48841e8f55526b7e.mjs.map