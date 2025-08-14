import{$ as Ao,$a as Xi,$b as Wo,A as ct,Aa as Oo,B as kn,Ba as Gi,C as Be,Ca as G,D as $i,Da as J,E as So,Ea as x,F as Do,Fa as Mo,G as Co,Ga as U,H as ue,Ha as Je,Hb as q,I as ji,Ia as Fo,J as B,Ja as Se,Jb as tr,K as E,Ka as et,La as Lo,M as b,Ma as qi,N as X,Na as Ki,O as wo,Oa as No,P as N,Pa as xo,Pb as jo,Q as C,Qa as Ue,R as f,Rb as Ho,S as Bn,Sb as zo,T as Eo,Tb as qn,U as kt,Ub as nr,V as ce,Vb as Vt,Wa as $,Xa as Yi,Xb as le,Y as Un,Ya as Zi,Yb as ir,Z as Bt,Za as tt,Zb as Wt,_ as O,_a as Qi,_b as Vo,a as g,aa as Hi,ab as Ji,ac as Go,b as Z,ba as $n,bb as jn,bc as F,cb as Hn,cc as qo,d as fo,da as de,db as Po,e as go,f as mo,fa as Ro,fb as ko,g as Pi,ga as Ze,gb as zn,h as ki,ha as A,hb as pt,i as ie,ia as Qe,ib as Bo,j as re,ja as _o,jb as he,k as Re,ka as zi,kb as _e,l as oe,la as To,lb as Te,m as y,ma as pe,mb as jt,n as xt,o as bo,oa as Vi,ob as Ht,p as yo,pa as Wi,pb as zt,q as _,qb as er,r as Bi,ra as W,rb as Uo,s as se,sa as Xe,t as vo,ta as Ut,tb as $o,u as Pn,ua as Io,ub as Vn,va as $t,w as Ye,wa as z,wb as ae,x as ut,xb as Wn,y as Pt,ya as dt,yb as Gn,z as Ui}from"./chunk-SOAL4WYF.js";var Zo=null;function Ie(){return Zo}function rr(t){Zo??=t}var Gt=class{},qt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>f(Qo),providedIn:"platform"})}return t})();var Qo=(()=>{class t extends qt{_location;_history;_doc=f(O);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ie().getBaseHref(this._doc)}onPopState(e){let n=Ie().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Ie().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Kn(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Ko(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function fe(t){return t&&t[0]!=="?"?`?${t}`:t}var $e=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>f(or),providedIn:"root"})}return t})(),Yn=new N(""),or=(()=>{class t extends $e{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??f(O).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Kn(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+fe(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let s=this.prepareExternalUrl(r+fe(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){let s=this.prepareExternalUrl(r+fe(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(C(qt),C(Yn,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nt=(()=>{class t{_subject=new ie;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=El(Ko(Yo(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+fe(n))}normalize(e){return t.stripTrailingSlash(wl(this._basePath,Yo(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+fe(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+fe(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=fe;static joinWithSlash=Kn;static stripTrailingSlash=Ko;static \u0275fac=function(n){return new(n||t)(C($e))};static \u0275prov=b({token:t,factory:()=>Cl(),providedIn:"root"})}return t})();function Cl(){return new nt(C($e))}function wl(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Yo(t){return t.replace(/\/index.html$/,"")}function El(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var ur=(()=>{class t extends $e{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Kn(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let s=this.prepareExternalUrl(r+fe(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){let s=this.prepareExternalUrl(r+fe(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(C(qt),C(Yn,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),is={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},cr=function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t}(cr||{});var De={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ht(t,i){let e=zn(t),n=e[pt.NumberSymbols][i];if(typeof n>"u"){if(i===De.CurrencyDecimal)return e[pt.NumberSymbols][De.Decimal];if(i===De.CurrencyGroup)return e[pt.NumberSymbols][De.Group]}return n}function rs(t,i){return zn(t)[pt.NumberFormats][i]}function Al(t){return zn(t)[pt.Currencies]}function os(t,i,e="en"){let n=Al(e)[t]||is[t]||[],r=n[1];return i==="narrow"&&typeof r=="string"?r:n[0]||t}var Rl=2;function ss(t){let i,e=is[t];return e&&(i=e[2]),typeof i=="number"?i:Rl}var _l=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Xo=22,Zn=".",Kt="0",Tl=";",Il=",",sr="#",Jo="\xA4";function Ol(t,i,e,n,r,o,s=!1){let a="",l=!1;if(!isFinite(t))a=ht(e,De.Infinity);else{let u=Ll(t);s&&(u=Fl(u));let c=i.minInt,d=i.minFrac,h=i.maxFrac;if(o){let I=o.match(_l);if(I===null)throw new E(2306,!1);let L=I[1],ke=I[3],Ke=I[5];L!=null&&(c=ar(L)),ke!=null&&(d=ar(ke)),Ke!=null?h=ar(Ke):ke!=null&&d>h&&(h=d)}Nl(u,d,h);let p=u.digits,m=u.integerLen,S=u.exponent,D=[];for(l=p.every(I=>!I);m<c;m++)p.unshift(0);for(;m<0;m++)p.unshift(0);m>0?D=p.splice(m,p.length):(D=p,p=[0]);let T=[];for(p.length>=i.lgSize&&T.unshift(p.splice(-i.lgSize,p.length).join(""));p.length>i.gSize;)T.unshift(p.splice(-i.gSize,p.length).join(""));p.length&&T.unshift(p.join("")),a=T.join(ht(e,n)),D.length&&(a+=ht(e,r)+D.join("")),S&&(a+=ht(e,De.Exponential)+"+"+S)}return t<0&&!l?a=i.negPre+a+i.negSuf:a=i.posPre+a+i.posSuf,a}function as(t,i,e,n,r){let o=rs(i,cr.Currency),s=Ml(o,ht(i,De.MinusSign));return s.minFrac=ss(n),s.maxFrac=s.minFrac,Ol(t,s,i,De.CurrencyGroup,De.CurrencyDecimal,r).replace(Jo,e).replace(Jo,"").trim()}function Ml(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(Tl),r=n[0],o=n[1],s=r.indexOf(Zn)!==-1?r.split(Zn):[r.substring(0,r.lastIndexOf(Kt)+1),r.substring(r.lastIndexOf(Kt)+1)],a=s[0],l=s[1]||"";e.posPre=a.substring(0,a.indexOf(sr));for(let c=0;c<l.length;c++){let d=l.charAt(c);d===Kt?e.minFrac=e.maxFrac=c+1:d===sr?e.maxFrac=c+1:e.posSuf+=d}let u=a.split(Il);if(e.gSize=u[1]?u[1].length:0,e.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,o){let c=r.length-e.posPre.length-e.posSuf.length,d=o.indexOf(sr);e.negPre=o.substring(0,d).replace(/'/g,""),e.negSuf=o.slice(d+c).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Fl(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function Ll(t){let i=Math.abs(t)+"",e=0,n,r,o,s,a;for((r=i.indexOf(Zn))>-1&&(i=i.replace(Zn,"")),(o=i.search(/e/i))>0?(r<0&&(r=o),r+=+i.slice(o+1),i=i.substring(0,o)):r<0&&(r=i.length),o=0;i.charAt(o)===Kt;o++);if(o===(a=i.length))n=[0],r=1;else{for(a--;i.charAt(a)===Kt;)a--;for(r-=o,n=[],s=0;o<=a;o++,s++)n[s]=Number(i.charAt(o))}return r>Xo&&(n=n.splice(0,Xo-1),e=r-1,r=1),{digits:n,exponent:e,integerLen:r}}function Nl(t,i,e){if(i>e)throw new E(2307,!1);let n=t.digits,r=n.length-t.integerLen,o=Math.min(Math.max(i,r),e),s=o+t.integerLen,a=n[s];if(s>0){n.splice(Math.max(t.integerLen,s));for(let d=s;d<n.length;d++)n[d]=0}else{r=Math.max(0,r),t.integerLen=1,n.length=Math.max(1,s=o+1),n[0]=0;for(let d=1;d<s;d++)n[d]=0}if(a>=5)if(s-1<0){for(let d=0;d>s;d--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[s-1]++;for(;r<Math.max(0,o);r++)n.push(0);let l=o!==0,u=i+t.integerLen,c=n.reduceRight(function(d,h,p,m){return h=h+d,m[p]=h<10?h:h-10,l&&(m[p]===0&&p>=u?m.pop():l=!1),h>=10?1:0},0);c&&(n.unshift(c),t.integerLen++)}function ar(t){let i=parseInt(t);if(isNaN(i))throw new E(2305,!1);return i}var lr=/\s+/,es=[],xl=(()=>{class t{_ngEl;_renderer;initialClasses=es;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(lr):es}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(lr):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(lr).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||t)(z(Qe),z($t))};static \u0275dir=x({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Qn=class{$implicit;ngForOf;index;count;constructor(i,e,n,r){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},ls=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,o,s)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new Qn(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(o===null?void 0:o);else if(o!==null){let a=n.get(o);n.move(a,s),ts(a,r)}});for(let r=0,o=n.length;r<o;r++){let a=n.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);ts(o,r)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(z(dt),z(Ut),z(Vo))};static \u0275dir=x({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function ts(t,i){t.context.$implicit=i.item}var dr=(()=>{class t{_viewContainer;_context=new Xn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ns(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ns(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(z(dt),z(Ut))};static \u0275dir=x({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Xn=class{$implicit=null;ngIf=null};function ns(t,i){if(t&&!t.createEmbeddedView)throw new E(2020,!1)}var pr=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:Xe.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${n}${o}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(z(Qe),z(Wo),z($t))};static \u0275dir=x({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),hr=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(z(dt))};static \u0275dir=x({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ze]})}return t})();function Pl(t,i){return new E(2100,!1)}var kl=(()=>{class t{_locale;_defaultCurrencyCode;constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,r="symbol",o,s){if(!Bl(e))return null;s||=this._locale,typeof r=="boolean"&&(r=r?"symbol":"code");let a=n||this._defaultCurrencyCode;r!=="code"&&(r==="symbol"||r==="symbol-narrow"?a=os(a,r==="symbol"?"wide":"narrow",s):a=r);try{let l=Ul(e);return as(l,s,a,n,o)}catch(l){throw Pl(t,l.message)}}static \u0275fac=function(n){return new(n||t)(z(Ho,16),z(zo,16))};static \u0275pipe=Mo({name:"currency",type:t,pure:!0})}return t})();function Bl(t){return!(t==null||t===""||t!==t)}function Ul(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new E(2309,!1);return t}var ge=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=J({type:t});static \u0275inj=X({})}return t})();function fr(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var Yt=class{};var gr="browser",Hl="server";function Jn(t){return t===gr}function us(t){return t===Hl}var ti=new N(""),Sr=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new E(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(C(ti),C(et))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Zt=class{_doc;constructor(i){this._doc=i}manager},mr="ng-app-id";function cs(t){for(let i of t)i.remove()}function ds(t,i){let e=i.createElement("style");return e.textContent=t,e}function Vl(t,i,e,n){let r=t.head?.querySelectorAll(`style[${mr}="${i}"],link[${mr}="${i}"]`);if(r)for(let o of r)o.removeAttribute(mr),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function yr(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Dr=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,Vl(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,ds);n?.forEach(r=>this.addUsage(r,this.external,yr))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(cs(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])cs(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,ds(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,yr(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(C(O),C(zi),C(Vi,8),C(pe))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),br={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Cr=/%COMP%/g;var hs="%COMP%",Wl=`_nghost-${hs}`,Gl=`_ngcontent-${hs}`,ql=!0,Kl=new N("",{providedIn:"root",factory:()=>ql});function Yl(t){return Gl.replace(Cr,t)}function Zl(t){return Wl.replace(Cr,t)}function fs(t,i){return i.map(e=>e.replace(Cr,t))}var wr=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,o,s,a,l,u=null,c=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=u,this.tracingService=c,this.platformIsServer=!1,this.defaultRenderer=new Qt(e,s,l,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof ei?r.applyToHost(e):r instanceof Xt&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,c=this.removeStylesOnCompDestroy,d=this.platformIsServer,h=this.tracingService;switch(n.encapsulation){case Wi.Emulated:o=new ei(l,u,n,this.appId,c,s,a,d,h);break;case Wi.ShadowDom:return new vr(l,u,e,n,s,a,this.nonce,d,h);default:o=new Xt(l,u,n,c,s,a,d,h);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(C(Sr),C(Dr),C(zi),C(Kl),C(O),C(pe),C(et),C(Vi),C(Fo,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Qt=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r,o){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(br[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ps(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(ps(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new E(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=br[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=br[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(Xe.DashCase|Xe.Important)?i.style.setProperty(e,n,r&Xe.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Xe.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Ie().getGlobalEventTarget(this.doc,i),!i))throw new E(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ps(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var vr=class extends Qt{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,r,o,s,a,l,u){super(i,o,s,l,u),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=r.styles;c=fs(r.id,c);for(let h of c){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=h,this.shadowRoot.appendChild(p)}let d=r.getExternalStyles?.();if(d)for(let h of d){let p=yr(h,o);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Xt=class extends Qt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,s,a,l,u){super(i,o,s,a,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=n.styles;this.styles=u?fs(u,c):c,this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ei=class extends Xt{contentAttr;hostAttr;constructor(i,e,n,r,o,s,a,l,u){let c=r+"-"+n.id;super(i,e,n,o,s,a,l,u,c),this.contentAttr=Yl(c),this.hostAttr=Zl(c)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var ni=class t extends Gt{supportsDOMEvents=!0;static makeCurrent(){rr(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Ql();return e==null?null:Xl(e)}resetBaseElement(){Jt=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return fr(document.cookie,i)}},Jt=null;function Ql(){return Jt=Jt||document.head.querySelector("base"),Jt?Jt.getAttribute("href"):null}function Xl(t){return new URL(t,document.baseURI).pathname}var Jl=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),ms=(()=>{class t extends Zt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(C(O))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),gs=["alt","control","meta","shift"],eu={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},tu={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},bs=(()=>{class t extends Zt{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let s=t.parseEventName(n),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ie().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),gs.forEach(u=>{let c=n.indexOf(u);c>-1&&(n.splice(c,1),s+=u+".")}),s+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,n){let r=eu[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),gs.forEach(s=>{if(s!==r){let a=tu[s];a(e)&&(o+=s+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(C(O))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function nu(t,i){let e=g({rootComponent:t},iu(i));return Go(e)}function iu(t){return{appProviders:[...lu,...t?.providers??[]],platformProviders:au}}function ru(){ni.makeCurrent()}function ou(){return new Hi}function su(){return _o(document),document}var au=[{provide:pe,useValue:gr},{provide:To,useValue:ru,multi:!0},{provide:O,useFactory:su}];var lu=[{provide:Eo,useValue:"root"},{provide:Hi,useFactory:ou},{provide:ti,useClass:ms,multi:!0,deps:[O]},{provide:ti,useClass:bs,multi:!0,deps:[O]},wr,Dr,Sr,{provide:Io,useExisting:wr},{provide:Yt,useClass:Jl},[]];var ys=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(C(O))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var v="primary",gn=Symbol("RouteTitle"),Tr=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ot(t){return new Tr(t)}function Rs(t,i,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let r={};for(let o=0;o<n.length;o++){let s=n[o],a=t[o];if(s[0]===":")r[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:t.slice(0,n.length),posParams:r}}function cu(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!Ce(t[e],i[e]))return!1;return!0}function Ce(t,i){let e=t?Ir(t):void 0,n=i?Ir(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!_s(t[r],i[r]))return!1;return!0}function Ir(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function _s(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function Ts(t){return t.length>0?t[t.length-1]:null}function Fe(t){return bo(t)?t:qi(t)?oe(Promise.resolve(t)):y(t)}var du={exact:Os,subset:Ms},Is={exact:pu,subset:hu,ignored:()=>!0};function vs(t,i,e){return du[e.paths](t.root,i.root,e.matrixParams)&&Is[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function pu(t,i){return Ce(t,i)}function Os(t,i,e){if(!it(t.segments,i.segments)||!oi(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Os(t.children[n],i.children[n],e))return!1;return!0}function hu(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>_s(t[e],i[e]))}function Ms(t,i,e){return Fs(t,i,i.segments,e)}function Fs(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!it(r,e)||i.hasChildren()||!oi(r,e,n))}else if(t.segments.length===e.length){if(!it(t.segments,e)||!oi(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!Ms(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!it(t.segments,r)||!oi(t.segments,r,n)||!t.children[v]?!1:Fs(t.children[v],i,o,n)}}function oi(t,i,e){return i.every((n,r)=>Is[e](t[r].parameters,n.parameters))}var Ee=class{root;queryParams;fragment;_queryParamMap;constructor(i=new w([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ot(this.queryParams),this._queryParamMap}toString(){return mu.serialize(this)}},w=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return si(this)}},je=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=ot(this.parameters),this._parameterMap}toString(){return Ns(this)}};function fu(t,i){return it(t,i)&&t.every((e,n)=>Ce(e.parameters,i[n].parameters))}function it(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function gu(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===v&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==v&&(e=e.concat(i(r,n)))}),e}var mn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new st,providedIn:"root"})}return t})(),st=class{parse(i){let e=new Mr(i);return new Ee(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${en(i.root,!0)}`,n=vu(i.queryParams),r=typeof i.fragment=="string"?`#${bu(i.fragment)}`:"";return`${e}${n}${r}`}},mu=new st;function si(t){return t.segments.map(i=>Ns(i)).join("/")}function en(t,i){if(!t.hasChildren())return si(t);if(i){let e=t.children[v]?en(t.children[v],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==v&&n.push(`${r}:${en(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=gu(t,(n,r)=>r===v?[en(t.children[v],!1)]:[`${r}:${en(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[v]!=null?`${si(t)}/${e[0]}`:`${si(t)}/(${e.join("//")})`}}function Ls(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ii(t){return Ls(t).replace(/%3B/gi,";")}function bu(t){return encodeURI(t)}function Or(t){return Ls(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ai(t){return decodeURIComponent(t)}function Ss(t){return ai(t.replace(/\+/g,"%20"))}function Ns(t){return`${Or(t.path)}${yu(t.parameters)}`}function yu(t){return Object.entries(t).map(([i,e])=>`;${Or(i)}=${Or(e)}`).join("")}function vu(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${ii(e)}=${ii(r)}`).join("&"):`${ii(e)}=${ii(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Su=/^[^\/()?;#]+/;function Er(t){let i=t.match(Su);return i?i[0]:""}var Du=/^[^\/()?;=#]+/;function Cu(t){let i=t.match(Du);return i?i[0]:""}var wu=/^[^=?&#]+/;function Eu(t){let i=t.match(wu);return i?i[0]:""}var Au=/^[^&#]+/;function Ru(t){let i=t.match(Au);return i?i[0]:""}var Mr=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new w([],{}):new w([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let i=[];for(this.peekStartsWith("(")||i.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),i.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(i.length>0||Object.keys(e).length>0)&&(n[v]=new w(i,e)),n}parseSegment(){let i=Er(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(i),new je(ai(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Cu(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Er(this.remaining);r&&(n=r,this.capture(n))}i[ai(e)]=ai(n)}parseQueryParam(i){let e=Eu(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let s=Ru(this.remaining);s&&(n=s,this.capture(n))}let r=Ss(e),o=Ss(n);if(i.hasOwnProperty(r)){let s=i[r];Array.isArray(s)||(s=[s],i[r]=s),s.push(o)}else i[r]=o}parseParens(i){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Er(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new E(4010,!1);let o;n.indexOf(":")>-1?(o=n.slice(0,n.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=v);let s=this.parseChildren();e[o]=Object.keys(s).length===1?s[v]:new w([],s),this.consumeOptional("//")}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new E(4011,!1)}};function xs(t){return t.segments.length>0?new w([],{[v]:t}):t}function Ps(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=Ps(r);if(n===v&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))i[s]=a;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new w(t.segments,i);return _u(e)}function _u(t){if(t.numberOfChildren===1&&t.children[v]){let i=t.children[v];return new w(t.segments.concat(i.segments),i.children)}return t}function yt(t){return t instanceof Ee}function ks(t,i,e=null,n=null){let r=Bs(t);return Us(r,i,e,n)}function Bs(t){let i;function e(o){let s={};for(let l of o.children){let u=e(l);s[l.outlet]=u}let a=new w(o.url,s);return o===t&&(i=a),a}let n=e(t.root),r=xs(n);return i??r}function Us(t,i,e,n){let r=t;for(;r.parent;)r=r.parent;if(i.length===0)return Ar(r,r,r,e,n);let o=Tu(i);if(o.toRoot())return Ar(r,r,new w([],{}),e,n);let s=Iu(o,r,t),a=s.processChildren?nn(s.segmentGroup,s.index,o.commands):js(s.segmentGroup,s.index,o.commands);return Ar(r,s.segmentGroup,a,e,n)}function li(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function sn(t){return typeof t=="object"&&t!=null&&t.outlets}function Ar(t,i,e,n,r){let o={};n&&Object.entries(n).forEach(([l,u])=>{o[l]=Array.isArray(u)?u.map(c=>`${c}`):`${u}`});let s;t===i?s=e:s=$s(t,i,e);let a=xs(Ps(s));return new Ee(a,o,r)}function $s(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=$s(o,i,e)}),new w(t.segments,n)}var ui=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&li(n[0]))throw new E(4003,!1);let r=n.find(sn);if(r&&r!==Ts(n))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Tu(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new ui(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,u])=>{a[l]=typeof u=="string"?u.split("/"):u}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?i++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new ui(e,i,n)}var mt=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function Iu(t,i,e){if(t.isAbsolute)return new mt(i,!0,0);if(!e)return new mt(i,!1,NaN);if(e.parent===null)return new mt(e,!0,0);let n=li(t.commands[0])?0:1,r=e.segments.length-1+n;return Ou(e,r,t.numberOfDoubleDots)}function Ou(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new E(4005,!1);r=n.segments.length}return new mt(n,!1,r-o)}function Mu(t){return sn(t[0])?t[0].outlets:{[v]:t}}function js(t,i,e){if(t??=new w([],{}),t.segments.length===0&&t.hasChildren())return nn(t,i,e);let n=Fu(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new w(t.segments.slice(0,n.pathIndex),{});return o.children[v]=new w(t.segments.slice(n.pathIndex),t.children),nn(o,0,r)}else return n.match&&r.length===0?new w(t.segments,{}):n.match&&!t.hasChildren()?Fr(t,i,e):n.match?nn(t,0,r):Fr(t,i,e)}function nn(t,i,e){if(e.length===0)return new w(t.segments,{});{let n=Mu(e),r={};if(Object.keys(n).some(o=>o!==v)&&t.children[v]&&t.numberOfChildren===1&&t.children[v].segments.length===0){let o=nn(t.children[v],i,e);return new w(t.segments,o.children)}return Object.entries(n).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=js(t.children[o],i,s))}),Object.entries(t.children).forEach(([o,s])=>{n[o]===void 0&&(r[o]=s)}),new w(t.segments,r)}}function Fu(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let s=t.segments[r],a=e[n];if(sn(a))break;let l=`${a}`,u=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!Cs(l,u,s))return o;n+=2}else{if(!Cs(l,{},s))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Fr(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(sn(o)){let l=Lu(o.outlets);return new w(n,l)}if(r===0&&li(e[0])){let l=t.segments[i];n.push(new je(l.path,Ds(e[0]))),r++;continue}let s=sn(o)?o.outlets[v]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&li(a)?(n.push(new je(s,Ds(a))),r+=2):(n.push(new je(s,{})),r++)}return new w(n,{})}function Lu(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=Fr(new w([],{}),0,n))}),i}function Ds(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Cs(t,i,e){return t==e.path&&Ce(i,e.parameters)}var rn="imperative",k=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(k||{}),te=class{id;url;constructor(i,e){this.id=i,this.url=e}},at=class extends te{type=k.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Oe=class extends te{urlAfterRedirects;type=k.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},K=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t}(K||{}),an=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(an||{}),we=class extends te{reason;code;type=k.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Me=class extends te{reason;code;type=k.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},vt=class extends te{error;target;type=k.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ln=class extends te{urlAfterRedirects;state;type=k.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ci=class extends te{urlAfterRedirects;state;type=k.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},di=class extends te{urlAfterRedirects;state;shouldActivate;type=k.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},pi=class extends te{urlAfterRedirects;state;type=k.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hi=class extends te{urlAfterRedirects;state;type=k.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fi=class{route;type=k.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},gi=class{route;type=k.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},mi=class{snapshot;type=k.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bi=class{snapshot;type=k.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},yi=class{snapshot;type=k.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vi=class{snapshot;type=k.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var un=class{},St=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Nu(t){return!(t instanceof un)&&!(t instanceof St)}function xu(t,i){return t.providers&&!t._injector&&(t._injector=Gi(t.providers,i,`Route: ${t.path}`)),t._injector??i}function me(t){return t.outlet||v}function Pu(t,i){let e=t.filter(n=>me(n)===i);return e.push(...t.filter(n=>me(n)!==i)),e}function wt(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let i=t.parent;i;i=i.parent){let e=i.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Si=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return wt(this.route?.snapshot)??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Et(this.rootInjector)}},Et=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Si(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(C(kt))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Di=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Lr(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=Lr(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Nr(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Nr(i,this._root).map(e=>e.value)}};function Lr(t,i){if(t===i.value)return i;for(let e of i.children){let n=Lr(t,e);if(n)return n}return null}function Nr(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Nr(t,e);if(n.length)return n.unshift(i),n}return[]}var ee=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function gt(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var cn=class extends Di{snapshot;constructor(i,e){super(i),this.snapshot=e,Hr(this,i)}toString(){return this.snapshot.toString()}};function Hs(t){let i=ku(t),e=new re([new je("",{})]),n=new re({}),r=new re({}),o=new re({}),s=new re(""),a=new He(e,n,o,s,r,v,t,i.root);return a.snapshot=i.root,new cn(new ee(a,[]),i)}function ku(t){let i={},e={},n={},r="",o=new rt([],i,n,r,e,v,t,null,{});return new dn("",new ee(o,[]))}var He=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,o,s,a,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(_(u=>u[gn]))??y(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(_(i=>ot(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(_(i=>ot(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ci(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:g(g({},i.params),t.params),data:g(g({},i.data),t.data),resolve:g(g(g(g({},t.data),i.data),r?.data),t._resolvedData)}:n={params:g({},t.params),data:g({},t.data),resolve:g(g({},t.data),t._resolvedData??{})},r&&Vs(r)&&(n.resolve[gn]=r.title),n}var rt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[gn]}constructor(i,e,n,r,o,s,a,l,u){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ot(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ot(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},dn=class extends Di{url;constructor(i,e){super(e),this.url=i,Hr(this,e)}toString(){return zs(this._root)}};function Hr(t,i){i.value._routerState=t,i.children.forEach(e=>Hr(t,e))}function zs(t){let i=t.children.length>0?` { ${t.children.map(zs).join(", ")} } `:"";return`${t.value}${i}`}function Rr(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Ce(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Ce(i.params,e.params)||t.paramsSubject.next(e.params),cu(i.url,e.url)||t.urlSubject.next(e.url),Ce(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function xr(t,i){let e=Ce(t.params,i.params)&&fu(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||xr(t.parent,i.parent))}function Vs(t){return typeof t.title=="string"||t.title===null}var Ws=new N(""),zr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=v;activateEvents=new Se;deactivateEvents=new Se;attachEvents=new Se;detachEvents=new Se;routerOutletData=le(void 0);parentContexts=f(Et);location=f(dt);changeDetector=f(Wt);inputBinder=f(Ri,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Pr(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ze]})}return t})(),Pr=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===He?this.route:i===Et?this.childContexts:i===Ws?this.outletData:this.parent.get(i,e)}},Ri=new N("");var Vr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=G({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&tt(0,"router-outlet")},dependencies:[zr],encapsulation:2})}return t})();function Wr(t){let i=t.children&&t.children.map(Wr),e=i?Z(g({},t),{children:i}):g({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==v&&(e.component=Vr),e}function Bu(t,i,e){let n=pn(t,i._root,e?e._root:void 0);return new cn(n,i)}function pn(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=Uu(t,i,e);return new ee(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=i.value,s.children=i.children.map(a=>pn(t,a)),s}}let n=$u(i.value),r=i.children.map(o=>pn(t,o));return new ee(n,r)}}function Uu(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return pn(t,n,r);return pn(t,n)})}function $u(t){return new He(new re(t.url),new re(t.params),new re(t.queryParams),new re(t.fragment),new re(t.data),t.outlet,t.component,t)}var Dt=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Gs="ngNavigationCancelingError";function wi(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=yt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=qs(!1,K.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function qs(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Gs]=!0,e.cancellationCode=i,e}function ju(t){return Ks(t)&&yt(t.url)}function Ks(t){return!!t&&t[Gs]}var Hu=(t,i,e,n)=>_(r=>(new kr(i,r.targetRouterState,r.currentRouterState,e,n).activate(t),r)),kr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Rr(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=gt(e);i.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],n),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(i,e,s.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=gt(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(n&&n.outlet){let s=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:s,route:i,contexts:a})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=gt(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=gt(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new vi(o.value.snapshot))}),i.children.length&&this.forwardEvent(new bi(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(Rr(r),r===o)if(r.component){let s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,s.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let s=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Rr(a.route.value),this.activateChildRoutes(i,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(i,null,s.children)}else this.activateChildRoutes(i,null,n)}},Ei=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},bt=class{component;route;constructor(i,e){this.component=i,this.route=e}};function zu(t,i,e){let n=t._root,r=i?i._root:null;return tn(n,r,e,[n.value])}function Vu(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function At(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!wo(t)?t:i.get(t):n}function tn(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=gt(i);return t.children.forEach(s=>{Wu(s,o[s.value.outlet],e,n.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>on(a,e.getContext(s),r)),r}function Wu(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=i?i.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=Gu(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Ei(n)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?tn(t,i,a?a.children:null,n,r):tn(t,i,e,n,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new bt(a.outlet.component,s))}else s&&on(i,a,r),r.canActivateChecks.push(new Ei(n)),o.component?tn(t,null,a?a.children:null,n,r):tn(t,null,e,n,r);return r}function Gu(t,i,e){if(typeof e=="function")return e(t,i);switch(e){case"pathParamsChange":return!it(t.url,i.url);case"pathParamsOrQueryParamsChange":return!it(t.url,i.url)||!Ce(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!xr(t,i)||!Ce(t.queryParams,i.queryParams);case"paramsChange":default:return!xr(t,i)}}function on(t,i,e){let n=gt(t),r=t.value;Object.entries(n).forEach(([o,s])=>{r.component?i?on(s,i.children.getContext(o),e):on(s,null,e):on(s,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new bt(i.outlet.component,r)):e.canDeactivateChecks.push(new bt(null,r)):e.canDeactivateChecks.push(new bt(null,r))}function bn(t){return typeof t=="function"}function qu(t){return typeof t=="boolean"}function Ku(t){return t&&bn(t.canLoad)}function Yu(t){return t&&bn(t.canActivate)}function Zu(t){return t&&bn(t.canActivateChild)}function Qu(t){return t&&bn(t.canDeactivate)}function Xu(t){return t&&bn(t.canMatch)}function Ys(t){return t instanceof yo||t?.name==="EmptyError"}var ri=Symbol("INITIAL_VALUE");function Ct(){return ue(t=>Bi(t.map(i=>i.pipe(ct(1),Co(ri)))).pipe(_(i=>{for(let e of i)if(e!==!0){if(e===ri)return ri;if(e===!1||Ju(e))return e}return!0}),Ye(i=>i!==ri),ct(1)))}function Ju(t){return yt(t)||t instanceof Dt}function ec(t,i){return se(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=e;return s.length===0&&o.length===0?y(Z(g({},e),{guardsResult:!0})):tc(s,n,r,t).pipe(se(a=>a&&qu(a)?nc(n,o,t,i):y(a)),_(a=>Z(g({},e),{guardsResult:a})))})}function tc(t,i,e,n){return oe(t).pipe(se(r=>ac(r.component,r.route,e,i,n)),Be(r=>r!==!0,!0))}function nc(t,i,e,n){return oe(i).pipe(Pt(r=>vo(rc(r.route.parent,n),ic(r.route,n),sc(t,r.path,e),oc(t,r.route,e))),Be(r=>r!==!0,!0))}function ic(t,i){return t!==null&&i&&i(new yi(t)),y(!0)}function rc(t,i){return t!==null&&i&&i(new mi(t)),y(!0)}function oc(t,i,e){let n=i.routeConfig?i.routeConfig.canActivate:null;if(!n||n.length===0)return y(!0);let r=n.map(o=>Pn(()=>{let s=wt(i)??e,a=At(o,s),l=Yu(a)?a.canActivate(i,t):ce(s,()=>a(i,t));return Fe(l).pipe(Be())}));return y(r).pipe(Ct())}function sc(t,i,e){let n=i[i.length-1],o=i.slice(0,i.length-1).reverse().map(s=>Vu(s)).filter(s=>s!==null).map(s=>Pn(()=>{let a=s.guards.map(l=>{let u=wt(s.node)??e,c=At(l,u),d=Zu(c)?c.canActivateChild(n,t):ce(u,()=>c(n,t));return Fe(d).pipe(Be())});return y(a).pipe(Ct())}));return y(o).pipe(Ct())}function ac(t,i,e,n,r){let o=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!o||o.length===0)return y(!0);let s=o.map(a=>{let l=wt(i)??r,u=At(a,l),c=Qu(u)?u.canDeactivate(t,i,e,n):ce(l,()=>u(t,i,e,n));return Fe(c).pipe(Be())});return y(s).pipe(Ct())}function lc(t,i,e,n){let r=i.canLoad;if(r===void 0||r.length===0)return y(!0);let o=r.map(s=>{let a=At(s,t),l=Ku(a)?a.canLoad(i,e):ce(t,()=>a(i,e));return Fe(l)});return y(o).pipe(Ct(),Zs(n))}function Zs(t){return go(B(i=>{if(typeof i!="boolean")throw wi(t,i)}),_(i=>i===!0))}function uc(t,i,e,n){let r=i.canMatch;if(!r||r.length===0)return y(!0);let o=r.map(s=>{let a=At(s,t),l=Xu(a)?a.canMatch(i,e):ce(t,()=>a(i,e));return Fe(l)});return y(o).pipe(Ct(),Zs(n))}var hn=class{segmentGroup;constructor(i){this.segmentGroup=i||null}},fn=class extends Error{urlTree;constructor(i){super(),this.urlTree=i}};function ft(t){return xt(new hn(t))}function cc(t){return xt(new E(4e3,!1))}function dc(t){return xt(qs(!1,K.GuardRejected))}var Br=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return y(n);if(r.numberOfChildren>1||!r.children[v])return cc(`${i.redirectTo}`);r=r.children[v]}}applyRedirectCommands(i,e,n,r,o){return pc(e,r,o).pipe(_(s=>{if(s instanceof Ee)throw new fn(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),i,n);if(s[0]==="/")throw new fn(a);return a}))}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new Ee(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);n[r]=e[a]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(i,l,n,r)}),new w(o,s)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new E(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function pc(t,i,e){if(typeof t=="string")return y(t);let n=t,{queryParams:r,fragment:o,routeConfig:s,url:a,outlet:l,params:u,data:c,title:d}=i;return Fe(ce(e,()=>n({params:u,data:c,queryParams:r,fragment:o,routeConfig:s,url:a,outlet:l,title:d})))}var Ur={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function hc(t,i,e,n,r){let o=Qs(t,i,e);return o.matched?(n=xu(i,n),uc(n,i,e,r).pipe(_(s=>s===!0?o:g({},Ur)))):y(o)}function Qs(t,i,e){if(i.path==="**")return fc(e);if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?g({},Ur):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Rs)(e,t,i);if(!r)return g({},Ur);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function fc(t){return{matched:!0,parameters:t.length>0?Ts(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function ws(t,i,e,n){return e.length>0&&bc(t,e,n)?{segmentGroup:new w(i,mc(n,new w(e,t.children))),slicedSegments:[]}:e.length===0&&yc(t,e,n)?{segmentGroup:new w(t.segments,gc(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new w(t.segments,t.children),slicedSegments:e}}function gc(t,i,e,n){let r={};for(let o of e)if(_i(t,i,o)&&!n[me(o)]){let s=new w([],{});r[me(o)]=s}return g(g({},n),r)}function mc(t,i){let e={};e[v]=i;for(let n of t)if(n.path===""&&me(n)!==v){let r=new w([],{});e[me(n)]=r}return e}function bc(t,i,e){return e.some(n=>_i(t,i,n)&&me(n)!==v)}function yc(t,i,e){return e.some(n=>_i(t,i,n))}function _i(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function vc(t,i,e){return i.length===0&&!t.children[e]}var $r=class{};function Sc(t,i,e,n,r,o,s="emptyOnly"){return new jr(t,i,e,n,r,s,o).recognize()}var Dc=31,jr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,s,a){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Br(this.urlSerializer,this.urlTree)}noMatchError(i){return new E(4002,`'${i.segmentGroup}'`)}recognize(){let i=ws(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(i).pipe(_(({children:e,rootSnapshot:n})=>{let r=new ee(n,e),o=new dn("",r),s=ks(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(i){let e=new rt([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),v,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,i,v,e).pipe(_(n=>({children:n,rootSnapshot:e})),ut(n=>{if(n instanceof fn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof hn?this.noMatchError(n):n}))}processSegmentGroup(i,e,n,r,o){return n.segments.length===0&&n.hasChildren()?this.processChildren(i,e,n,o):this.processSegment(i,e,n,n.segments,r,!0,o).pipe(_(s=>s instanceof ee?[s]:[]))}processChildren(i,e,n,r){let o=[];for(let s of Object.keys(n.children))s==="primary"?o.unshift(s):o.push(s);return oe(o).pipe(Pt(s=>{let a=n.children[s],l=Pu(e,s);return this.processSegmentGroup(i,l,a,s,r)}),Do((s,a)=>(s.push(...a),s)),Ui(null),So(),se(s=>{if(s===null)return ft(n);let a=Xs(s);return Cc(a),y(a)}))}processSegment(i,e,n,r,o,s,a){return oe(e).pipe(Pt(l=>this.processSegmentAgainstRoute(l._injector??i,e,l,n,r,o,s,a).pipe(ut(u=>{if(u instanceof hn)return y(null);throw u}))),Be(l=>!!l),ut(l=>{if(Ys(l))return vc(n,r,o)?y(new $r):ft(n);throw l}))}processSegmentAgainstRoute(i,e,n,r,o,s,a,l){return me(n)!==s&&(s===v||!_i(r,o,n))?ft(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(i,r,n,o,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,s,l):ft(r)}expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,s,a){let{matched:l,parameters:u,consumedSegments:c,positionalParamSegments:d,remainingSegments:h}=Qs(e,r,o);if(!l)return ft(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Dc&&(this.allowRedirects=!1));let p=new rt(o,u,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Es(r),me(r),r.component??r._loadedComponent??null,r,As(r)),m=Ci(p,a,this.paramsInheritanceStrategy);return p.params=Object.freeze(m.params),p.data=Object.freeze(m.data),this.applyRedirects.applyRedirectCommands(c,r.redirectTo,d,p,i).pipe(ue(D=>this.applyRedirects.lineralizeSegments(r,D)),se(D=>this.processSegment(i,n,e,D.concat(h),s,!1,a)))}matchSegmentAgainstRoute(i,e,n,r,o,s){let a=hc(e,n,r,i,this.urlSerializer);return n.path==="**"&&(e.children={}),a.pipe(ue(l=>l.matched?(i=n._injector??i,this.getChildConfig(i,n,r).pipe(ue(({routes:u})=>{let c=n._loadedInjector??i,{parameters:d,consumedSegments:h,remainingSegments:p}=l,m=new rt(h,d,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Es(n),me(n),n.component??n._loadedComponent??null,n,As(n)),S=Ci(m,s,this.paramsInheritanceStrategy);m.params=Object.freeze(S.params),m.data=Object.freeze(S.data);let{segmentGroup:D,slicedSegments:T}=ws(e,h,p,u);if(T.length===0&&D.hasChildren())return this.processChildren(c,u,D,m).pipe(_(L=>new ee(m,L)));if(u.length===0&&T.length===0)return y(new ee(m,[]));let I=me(n)===o;return this.processSegment(c,u,D,T,I?v:o,!0,m).pipe(_(L=>new ee(m,L instanceof ee?[L]:[])))}))):ft(e)))}getChildConfig(i,e,n){return e.children?y({routes:e.children,injector:i}):e.loadChildren?e._loadedRoutes!==void 0?y({routes:e._loadedRoutes,injector:e._loadedInjector}):lc(i,e,n,this.urlSerializer).pipe(se(r=>r?this.configLoader.loadChildren(i,e).pipe(B(o=>{e._loadedRoutes=o.routes,e._loadedInjector=o.injector})):dc(e))):y({routes:[],injector:i})}};function Cc(t){t.sort((i,e)=>i.value.outlet===v?-1:e.value.outlet===v?1:i.value.outlet.localeCompare(e.value.outlet))}function wc(t){let i=t.value.routeConfig;return i&&i.path===""}function Xs(t){let i=[],e=new Set;for(let n of t){if(!wc(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=Xs(n.children);i.push(new ee(n.value,r))}return i.filter(n=>!e.has(n))}function Es(t){return t.data||{}}function As(t){return t.resolve||{}}function Ec(t,i,e,n,r,o){return se(s=>Sc(t,i,e,n,s.extractedUrl,r,o).pipe(_(({state:a,tree:l})=>Z(g({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function Ac(t,i){return se(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return y(e);let o=new Set(r.map(l=>l.route)),s=new Set;for(let l of o)if(!s.has(l))for(let u of Js(l))s.add(u);let a=0;return oe(s).pipe(Pt(l=>o.has(l)?Rc(l,n,t,i):(l.data=Ci(l,l.parent,t).resolve,y(void 0))),B(()=>a++),$i(1),se(l=>a===s.size?y(e):Re))})}function Js(t){let i=t.children.map(e=>Js(e)).flat();return[t,...i]}function Rc(t,i,e,n){let r=t.routeConfig,o=t._resolve;return r?.title!==void 0&&!Vs(r)&&(o[gn]=r.title),Pn(()=>(t.data=Ci(t,t.parent,e).resolve,_c(o,t,i,n).pipe(_(s=>(t._resolvedData=s,t.data=g(g({},t.data),s),null)))))}function _c(t,i,e,n){let r=Ir(t);if(r.length===0)return y({});let o={};return oe(r).pipe(se(s=>Tc(t[s],i,e,n).pipe(Be(),B(a=>{if(a instanceof Dt)throw wi(new st,a);o[s]=a}))),$i(1),_(()=>o),ut(s=>Ys(s)?Re:xt(s)))}function Tc(t,i,e,n){let r=wt(i)??n,o=At(t,r),s=o.resolve?o.resolve(i,e):ce(r,()=>o(i,e));return Fe(s)}function _r(t){return ue(i=>{let e=t(i);return e?oe(e).pipe(_(()=>i)):y(i)})}var Gr=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===v);return n}getResolvedTitleForRoute(e){return e.data[gn]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>f(ea),providedIn:"root"})}return t})(),ea=(()=>{class t extends Gr{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(C(ys))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yn=new N("",{providedIn:"root",factory:()=>({})}),vn=new N(""),ta=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=f(jo);loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return y(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=Fe(ce(e,()=>n.loadComponent())).pipe(_(ia),B(s=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=s}),kn(()=>{this.componentLoaders.delete(n)})),o=new ki(r,()=>new ie).pipe(Pi());return this.componentLoaders.set(n,o),o}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return y({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let o=na(n,this.compiler,e,this.onLoadEndListener).pipe(kn(()=>{this.childrenLoaders.delete(n)})),s=new ki(o,()=>new ie).pipe(Pi());return this.childrenLoaders.set(n,s),s}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function na(t,i,e,n){return Fe(ce(e,()=>t.loadChildren())).pipe(_(ia),se(r=>r instanceof Oo||Array.isArray(r)?y(r):oe(i.compileModuleAsync(r))),_(r=>{n&&n(t);let o,s,a=!1;return Array.isArray(r)?(s=r,a=!0):(o=r.create(e).injector,s=o.get(vn,[],{optional:!0,self:!0}).flat()),{routes:s.map(Wr),injector:o}}))}function Ic(t){return t&&typeof t=="object"&&"default"in t}function ia(t){return Ic(t)?t.default:t}var Ti=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>f(Oc),providedIn:"root"})}return t})(),Oc=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ra=new N("");var oa=new N(""),sa=(()=>{class t{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new ie;transitionAbortWithErrorSubject=new ie;configLoader=f(ta);environmentInjector=f(kt);destroyRef=f(Ao);urlSerializer=f(mn);rootContexts=f(Et);location=f(nt);inputBindingEnabled=f(Ri,{optional:!0})!==null;titleStrategy=f(Gr);options=f(yn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=f(Ti);createViewTransition=f(ra,{optional:!0});navigationErrorHandler=f(oa,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new fi(r)),n=r=>this.events.next(new gi(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(Z(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:n}))}setupNavigations(e){return this.transitions=new re(null),this.transitions.pipe(Ye(n=>n!==null),ue(n=>{let r=!1;return y(n).pipe(ue(o=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",K.SupersededByNewNavigation),Re;this.currentTransition=n,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?Z(g({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>o.abortController.abort()};let s=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=o.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!s&&a!=="reload"){let l="";return this.events.next(new Me(o.id,this.urlSerializer.serialize(o.rawUrl),l,an.IgnoredSameUrlNavigation)),o.resolve(!1),Re}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return y(o).pipe(ue(l=>(this.events.next(new at(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?Re:Promise.resolve(l))),Ec(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),B(l=>{n.targetSnapshot=l.targetSnapshot,n.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=Z(g({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new ln(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:c,restoredState:d,extras:h}=o,p=new at(l,this.urlSerializer.serialize(u),c,d);this.events.next(p);let m=Hs(this.rootComponentType).snapshot;return this.currentTransition=n=Z(g({},o),{targetSnapshot:m,urlAfterRedirects:u,extras:Z(g({},h),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,y(n)}else{let l="";return this.events.next(new Me(o.id,this.urlSerializer.serialize(o.extractedUrl),l,an.IgnoredByUrlHandlingStrategy)),o.resolve(!1),Re}}),B(o=>{let s=new ci(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(s)}),_(o=>(this.currentTransition=n=Z(g({},o),{guards:zu(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),n)),ec(this.environmentInjector,o=>this.events.next(o)),B(o=>{if(n.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw wi(this.urlSerializer,o.guardsResult);let s=new di(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(s)}),Ye(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",K.GuardRejected),!1)),_r(o=>{if(o.guards.canActivateChecks.length!==0)return y(o).pipe(B(s=>{let a=new pi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),ue(s=>{let a=!1;return y(s).pipe(Ac(this.paramsInheritanceStrategy,this.environmentInjector),B({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(s,"",K.NoDataFromResolver)}}))}),B(s=>{let a=new hi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}))}),_r(o=>{let s=a=>{let l=[];if(a.routeConfig?.loadComponent&&!a.routeConfig._loadedComponent){let u=wt(a)??this.environmentInjector;l.push(this.configLoader.loadComponent(u,a.routeConfig).pipe(B(c=>{a.component=c}),_(()=>{})))}for(let u of a.children)l.push(...s(u));return l};return Bi(s(o.targetSnapshot.root)).pipe(Ui(null),ct(1))}),_r(()=>this.afterPreactivation()),ue(()=>{let{currentSnapshot:o,targetSnapshot:s}=n,a=this.createViewTransition?.(this.environmentInjector,o.root,s.root);return a?oe(a).pipe(_(()=>n)):y(n)}),_(o=>{let s=Bu(e.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=n=Z(g({},o),{targetRouterState:s}),this.currentNavigation.targetRouterState=s,n}),B(()=>{this.events.next(new un)}),Hu(this.rootContexts,e.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),ct(1),ji(new mo(o=>{let s=n.abortController.signal,a=()=>o.next();return s.addEventListener("abort",a),()=>s.removeEventListener("abort",a)}).pipe(Ye(()=>!r&&!n.targetRouterState),B(()=>{this.cancelNavigationTransition(n,n.abortController.signal.reason+"",K.Aborted)}))),B({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Oe(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),ji(this.transitionAbortWithErrorSubject.pipe(B(o=>{throw o}))),kn(()=>{r||this.cancelNavigationTransition(n,"",K.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),ut(o=>{if(this.destroyed)return n.resolve(!1),Re;if(r=!0,Ks(o))this.events.next(new we(n.id,this.urlSerializer.serialize(n.extractedUrl),o.message,o.cancellationCode)),ju(o)?this.events.next(new St(o.url,o.navigationBehaviorOptions)):n.resolve(!1);else{let s=new vt(n.id,this.urlSerializer.serialize(n.extractedUrl),o,n.targetSnapshot??void 0);try{let a=ce(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(a instanceof Dt){let{message:l,cancellationCode:u}=wi(this.urlSerializer,a);this.events.next(new we(n.id,this.urlSerializer.serialize(n.extractedUrl),l,u)),this.events.next(new St(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(s),o}catch(a){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(a)}}return Re}))}))}cancelNavigationTransition(e,n,r){let o=new we(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Mc(t){return t!==rn}var aa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>f(Fc),providedIn:"root"})}return t})(),Ai=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}},Fc=(()=>{class t extends Ai{static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),la=(()=>{class t{urlSerializer=f(mn);options=f(yn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=f(nt);urlHandlingStrategy=f(Ti);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ee;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,s=r??o;return s instanceof Ee?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Hs(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>f(Lc),providedIn:"root"})}return t})(),Lc=(()=>{class t extends la{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate")})})}handleRouterEvent(e,n){e instanceof at?this.updateStateMemento():e instanceof Me?this.commitTransition(n):e instanceof ln?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof un?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof we&&e.code!==K.SupersededByNewNavigation&&e.code!==K.Redirect?this.restoreHistory(n):e instanceof vt?this.restoreHistory(n,!0):e instanceof Oe&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:o,state:s}=n;if(this.location.isCurrentPathEqualTo(e)||o){let a=this.browserPageId,l=g(g({},s),this.generateNgRouterState(r,a));this.location.replaceState(e,"",l)}else{let a=g(g({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qr(t,i){t.events.pipe(Ye(e=>e instanceof Oe||e instanceof we||e instanceof vt||e instanceof Me),_(e=>e instanceof Oe||e instanceof Me?0:(e instanceof we?e.code===K.Redirect||e.code===K.SupersededByNewNavigation:!1)?2:1),Ye(e=>e!==2),ct(1)).subscribe(()=>{i()})}var Nc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},xc={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ii=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=f(Lo);stateManager=f(la);options=f(yn,{optional:!0})||{};pendingTasks=f(Ro);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=f(sa);urlSerializer=f(mn);location=f(nt);urlHandlingStrategy=f(Ti);injector=f(kt);_events=new ie;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=f(aa);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=f(vn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!f(Ri,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new fo;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof we&&n.code!==K.Redirect&&n.code!==K.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Oe)this.navigated=!0;else if(n instanceof St){let s=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=g({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Mc(r.source)},s);this.scheduleNavigation(a,rn,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Nu(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),rn,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r)=>{this.navigateToSyncWithBrowser(e,r,n)})}navigateToSyncWithBrowser(e,n,r){let o={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let l=g({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(e);this.scheduleNavigation(a,n,s,o).catch(l=>{this.disposed||this.injector.get($n)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Wr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=n,u=l?this.currentUrlTree.fragment:s,c=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":c=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":c=this.currentUrlTree.queryParams;break;default:c=o||null}c!==null&&(c=this.removeEmptyProps(c));let d;try{let h=r?r.snapshot:this.routerState.snapshot.root;d=Bs(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),d=this.currentUrlTree.root}return Us(d,e,c,u??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=yt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,rn,null,n)}navigate(e,n={skipLocationChange:!1}){return Pc(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=g({},Nc):n===!1?r=g({},xc):r=n,yt(e))return vs(this.currentUrlTree,e,r);let o=this.parseUrl(e);return vs(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,u;s?(a=s.resolve,l=s.reject,u=s.promise):u=new Promise((d,h)=>{a=d,l=h});let c=this.pendingTasks.add();return qr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(c))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(d=>Promise.reject(d))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Pc(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new E(4008,!1)}var Bc=new N("");function Uc(t,...i){return Bn([{provide:vn,multi:!0,useValue:t},[],{provide:He,useFactory:$c,deps:[Ii]},{provide:No,multi:!0,useFactory:Hc},i.map(e=>e.\u0275providers)])}function $c(t){return t.routerState.root}function jc(t,i){return{\u0275kind:t,\u0275providers:i}}function Hc(){let t=f(Bt);return i=>{let e=t.get(xo);if(i!==e.components[0])return;let n=t.get(Ii),r=t.get(zc);t.get(Vc)===1&&n.initialNavigation(),t.get(Wc,null,{optional:!0})?.setUpPreloading(),t.get(Bc,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var zc=new N("",{factory:()=>new ie}),Vc=new N("",{providedIn:"root",factory:()=>1});var Wc=new N("");function Gc(){return jc(6,[{provide:$e,useClass:ur}])}function Rt(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let r=typeof n;if(r==="string"||r==="number")i.push(n);else if(r==="object"){let o=Array.isArray(n)?[Rt(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=o.length?i.concat(o.filter(s=>!!s)):i}}return i.join(" ").trim()}}function ua(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Le(t,i){if(t&&i){let e=n=>{ua(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Kc(){return window.innerWidth-document.documentElement.offsetWidth}function ca(t){typeof t=="string"?Le(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,Kc()+"px"),Le(document.body,t?.className||"p-overflow-hidden"))}function ze(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function da(t){typeof t=="string"?ze(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),ze(document.body,t?.className||"p-overflow-hidden"))}function pa(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function rg(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,o=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:o}}function Kr(t){return t?Math.abs(t.scrollLeft):0}function og(){let t=document.documentElement;return(window.pageXOffset||Kr(t))-(t.clientLeft||0)}function sg(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function ha(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Yc(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Zc(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Yc(t))}function _t(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function fa(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),_t(i)?i:void 0}function Qc(t,i){var e,n,r;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((r=i?.children)==null?void 0:r[parseInt(a[1],10)])||null:document.querySelector(t)||null}let o=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=fa(o);return Zc(s)?s:o?.nodeType===9?o:void 0}}}function ag(t,i){let e=Qc(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function Oi(t,i={}){if(_t(t)){let e=(n,r)=>{var o,s;let a=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?e(n,u):Object.entries(u).map(([h,p])=>n==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?Oi(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function lg(t,i={},...e){if(t){let n=document.createElement(t);return Oi(n,i),n.append(...e),n}}function ug(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(r):setTimeout(r,16))};r()}}function Xc(t,i){return _t(t)?Array.from(t.querySelectorAll(i)):[]}function Tt(t,i){return _t(t)?t.matches(i)?t:t.querySelector(i):null}function cg(t,i){t&&document.activeElement!==t&&t.focus(i)}function dg(t,i){if(_t(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function ga(t,i=""){let e=Xc(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}function pg(t,i){let e=ga(t,i);return e.length>0?e[0]:null}function Yr(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function hg(t,i){let e=ga(t,i);return e.length>0?e[e.length-1]:null}function ma(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||Kr(document.documentElement)||Kr(document.body)||0)}}return{top:"auto",left:"auto"}}function ba(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Zr(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function ya(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function fg(t,i){let e=fa(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function gg(t,i="",e){_t(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function va(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(r=>{r(e)})},clear(){t.clear()}}}function Ae(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Qr(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),o,s,a;if(n&&r){if(s=t.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!Qr(t[o],i[o],e))return!1;return!0}if(n!=r)return!1;let l=t instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==i.getTime();let c=t instanceof RegExp,d=i instanceof RegExp;if(c!=d)return!1;if(c&&d)return t.toString()==i.toString();let h=Object.keys(t);if(s=h.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,h[o]))return!1;for(o=s;o--!==0;)if(a=h[o],!Qr(t[a],i[a],e))return!1;return!0}function Jc(t,i){return Qr(t,i)}function Ca(t){return typeof t=="function"&&"call"in t&&"apply"in t}function M(t){return!Ae(t)}function Sa(t,i){if(!t||!i)return null;try{let e=t[i];if(M(e))return e}catch{}if(Object.keys(t).length){if(Ca(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,o=e.length;r<o;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function yg(t,i,e){return e?Sa(t,e)===Sa(i,e):Jc(t,i)}function Ne(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Q(t,...i){return Ca(t)?t(...i):t}function Ve(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Da(t){return Ve(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Mi(t,i="",e={}){let n=Da(i).split("."),r=n.shift();if(r){if(Ne(t)){let o=Object.keys(t).find(s=>Da(s)===r)||"";return Mi(Q(t[o],e),n.join("."),e)}return}return Q(t,e)}function wa(t){return M(t)&&!isNaN(t)}function be(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function lt(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Fi(t){return Ve(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}var Li={};function Sn(t="pui_id_"){return Object.hasOwn(Li,t)||(Li[t]=0),Li[t]++,`${t}${Li[t]}`}var Ea=["*"];var j=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Cg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=G({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Ea,decls:1,vars:0,template:function(n,r){n&1&&(_e(),Te(0))},encapsulation:2})}return t})(),wg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=G({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Ea,decls:1,vars:0,template:function(n,r){n&1&&(_e(),Te(0))},encapsulation:2})}return t})(),Aa=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(z(Ut))};static \u0275dir=x({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),We=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[ge]})}return t})(),Eg=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var H=[];for(let t=0;t<256;++t)H.push((t+256).toString(16).slice(1));function Ra(t,i=0){return(H[t[i+0]]+H[t[i+1]]+H[t[i+2]]+H[t[i+3]]+"-"+H[t[i+4]]+H[t[i+5]]+"-"+H[t[i+6]]+H[t[i+7]]+"-"+H[t[i+8]]+H[t[i+9]]+"-"+H[t[i+10]]+H[t[i+11]]+H[t[i+12]]+H[t[i+13]]+H[t[i+14]]+H[t[i+15]]).toLowerCase()}var Xr,ed=new Uint8Array(16);function Jr(){if(!Xr){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Xr=crypto.getRandomValues.bind(crypto)}return Xr(ed)}var td=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),eo={randomUUID:td};function nd(t,i,e){if(eo.randomUUID&&!i&&!t)return eo.randomUUID();t=t||{};let n=t.random??t.rng?.()??Jr();if(n.length<16)throw new Error("Random bytes length must be >= 16");if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,i){if(e=e||0,e<0||e+16>i.length)throw new RangeError(`UUID byte range ${e}:${e+15} is out of buffer bounds`);for(let r=0;r<16;++r)i[e+r]=n[r];return i}return Ra(n)}var Ni=nd;var _a=(o=>(o.CarLoan="carLoan",o.Mortgage="mortgage",o.CreditCard="creditCard",o.Checking="checking",o.Payroll="payroll",o))(_a||{}),xg={Auto:{min:1e4,max:1e5},Mortgage:{min:1e5,max:1e7},Card:{min:1e3,max:1e4}};var Ta=class t{userState=de({username:"",password:"",products:[{id:Ni(),name:"Payroll",description:"Payroll account description",type:"account",balance:parseFloat((Math.random()*1e5).toFixed(2)),clabe:"1234567789098765432",accountNumber:"1234567890",card:{placeholder:"",number:"1234 5678 9012 3456",expiry:"12/25",cvv:"123",isLocked:!1},productType:"payroll",url:""},{id:Ni(),name:"Checking",description:"Checking account description",type:"account",balance:parseFloat((Math.random()*1e4).toFixed(2)),clabe:"098765432112345678",accountNumber:"1234567890",card:{placeholder:"",number:"2345 6789 0123 4567",expiry:"11/24",cvv:"456",isLocked:!1},productType:"checking",url:""}]});static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var id=Object.defineProperty,rd=Object.defineProperties,od=Object.getOwnPropertyDescriptors,xi=Object.getOwnPropertySymbols,Ma=Object.prototype.hasOwnProperty,Fa=Object.prototype.propertyIsEnumerable,Ia=(t,i,e)=>i in t?id(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,ve=(t,i)=>{for(var e in i||(i={}))Ma.call(i,e)&&Ia(t,e,i[e]);if(xi)for(var e of xi(i))Fa.call(i,e)&&Ia(t,e,i[e]);return t},to=(t,i)=>rd(t,od(i)),xe=(t,i)=>{var e={};for(var n in t)Ma.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&xi)for(var n of xi(t))i.indexOf(n)<0&&Fa.call(t,n)&&(e[n]=t[n]);return e};var sd=va(),ne=sd,Dn=/{([^}]*)}/g,La=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Na=/var\([^)]+\)/g;function Oa(t){return Ve(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function ad(t){return Ne(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function ld(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function no(t="",i=""){return ld(`${Ve(t,!1)&&Ve(i,!1)?`${t}-`:t}${i}`)}function xa(t="",i=""){return`--${no(t,i)}`}function ud(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Pa(t,i="",e="",n=[],r){if(Ve(t)){let o=t.trim();if(ud(o))return;if(be(o,Dn)){let s=o.replaceAll(Dn,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>be(u,c)));return`var(${xa(e,Fi(l.join("-")))}${M(r)?`, ${r}`:""})`});return be(s.replace(Na,"0"),La)?`calc(${s})`:s}return o}else if(wa(t))return t}function cd(t,i,e){Ve(i,!1)&&t.push(`${i}:${e};`)}function It(t,i){return t?`${t}{${i}}`:""}function ka(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,c="",d=null,h=0;for(;u<=s.length;){let p=s[u];if((p==='"'||p==="'"||p==="`")&&s[u-1]!=="\\"&&(d=d===p?null:p),!d&&(p==="("&&h++,p===")"&&h--,(p===","||u===s.length)&&h===0)){let m=c.trim();m.startsWith("dt(")?l.push(ka(m,a)):l.push(n(m)),c="",u++;continue}p!==void 0&&(c+=p),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let r=[],o=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")o.push(s),s+=2;else if(t[s]===")"&&o.length>0){let a=o.pop();o.length===0&&r.push([a,s])}if(!r.length)return t;for(let s=r.length-1;s>=0;s--){let[a,l]=r[s],u=t.slice(a+3,l),c=e(u,i),d=i(...c);t=t.slice(0,a)+d+t.slice(l+1)}return t}var ro=t=>{var i;let e=R.getTheme(),n=io(e,t,void 0,"variable"),r=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],o=io(e,t,void 0,"value");return{name:r,variable:n,value:o}},Pe=(...t)=>io(R.getTheme(),...t),io=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=R.defaults||{},{prefix:s,transform:a}=t?.options||o||{},l=be(i,Dn)?i:`{${i}}`;return n==="value"||Ae(n)&&a==="strict"?R.getTokenValue(i):Pa(l,void 0,s,[r.excludedKeyRegex],e)}return""};function Ot(t,...i){if(t instanceof Array){let e=t.reduce((n,r,o)=>{var s;return n+r+((s=Q(i[o],{dt:Pe}))!=null?s:"")},"");return ka(e,Pe)}return Q(t,{dt:Pe})}function dd(t,i={}){let e=R.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:c,path:d}=l.pop();for(let h in c){let p=c[h],m=ad(p),S=be(h,o)?no(d):no(d,Fi(h));if(Ne(m))l.push({node:m,path:S});else{let D=xa(S),T=Pa(m,S,n,[o]);cd(a,D,T);let I=S;n&&I.startsWith(n+"-")&&(I=I.slice(n.length+1)),s.push(I.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:It(r,u)}}var ye={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return dd(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,a,l,u,c,d;let{preset:h,options:p}=i,m,S,D,T,I,L,ke;if(M(h)&&p.transform!=="strict"){let{primitive:Ke,semantic:Cn,extend:wn}=h,Ft=Cn||{},{colorScheme:En}=Ft,An=xe(Ft,["colorScheme"]),Rn=wn||{},{colorScheme:_n}=Rn,Lt=xe(Rn,["colorScheme"]),Nt=En||{},{dark:Tn}=Nt,In=xe(Nt,["dark"]),On=_n||{},{dark:Mn}=On,Fn=xe(On,["dark"]),Ln=M(Ke)?this._toVariables({primitive:Ke},p):{},Nn=M(An)?this._toVariables({semantic:An},p):{},xn=M(In)?this._toVariables({light:In},p):{},uo=M(Tn)?this._toVariables({dark:Tn},p):{},co=M(Lt)?this._toVariables({semantic:Lt},p):{},po=M(Fn)?this._toVariables({light:Fn},p):{},ho=M(Mn)?this._toVariables({dark:Mn},p):{},[rl,ol]=[(o=Ln.declarations)!=null?o:"",Ln.tokens],[sl,al]=[(s=Nn.declarations)!=null?s:"",Nn.tokens||[]],[ll,ul]=[(a=xn.declarations)!=null?a:"",xn.tokens||[]],[cl,dl]=[(l=uo.declarations)!=null?l:"",uo.tokens||[]],[pl,hl]=[(u=co.declarations)!=null?u:"",co.tokens||[]],[fl,gl]=[(c=po.declarations)!=null?c:"",po.tokens||[]],[ml,bl]=[(d=ho.declarations)!=null?d:"",ho.tokens||[]];m=this.transformCSS(t,rl,"light","variable",p,n,r),S=ol;let yl=this.transformCSS(t,`${sl}${ll}`,"light","variable",p,n,r),vl=this.transformCSS(t,`${cl}`,"dark","variable",p,n,r);D=`${yl}${vl}`,T=[...new Set([...al,...ul,...dl])];let Sl=this.transformCSS(t,`${pl}${fl}color-scheme:light`,"light","variable",p,n,r),Dl=this.transformCSS(t,`${ml}color-scheme:dark`,"dark","variable",p,n,r);I=`${Sl}${Dl}`,L=[...new Set([...hl,...gl,...bl])],ke=Q(h.css,{dt:Pe})}return{primitive:{css:m,tokens:S},semantic:{css:D,tokens:T},global:{css:I,tokens:L},style:ke}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var a,l,u;let c,d,h;if(M(i)&&e.transform!=="strict"){let p=t.replace("-directive",""),m=i,{colorScheme:S,extend:D,css:T}=m,I=xe(m,["colorScheme","extend","css"]),L=D||{},{colorScheme:ke}=L,Ke=xe(L,["colorScheme"]),Cn=S||{},{dark:wn}=Cn,Ft=xe(Cn,["dark"]),En=ke||{},{dark:An}=En,Rn=xe(En,["dark"]),_n=M(I)?this._toVariables({[p]:ve(ve({},I),Ke)},e):{},Lt=M(Ft)?this._toVariables({[p]:ve(ve({},Ft),Rn)},e):{},Nt=M(wn)?this._toVariables({[p]:ve(ve({},wn),An)},e):{},[Tn,In]=[(a=_n.declarations)!=null?a:"",_n.tokens||[]],[On,Mn]=[(l=Lt.declarations)!=null?l:"",Lt.tokens||[]],[Fn,Ln]=[(u=Nt.declarations)!=null?u:"",Nt.tokens||[]],Nn=this.transformCSS(p,`${Tn}${On}`,"light","variable",e,r,o,s),xn=this.transformCSS(p,Fn,"dark","variable",e,r,o,s);c=`${Nn}${xn}`,d=[...new Set([...In,...Mn,...Ln])],h=Q(T,{dt:Pe})}return{css:c,tokens:d,style:h}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:a}=i,l=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s;let a=t.replace("-directive",""),{preset:l,options:u}=i,c=((o=l?.components)==null?void 0:o[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${Q(r.order||r.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(Ne(c)&&Object.hasOwn(c,"css")){let d=lt(c.css),h=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let a={name:t,theme:i,params:e,set:r,defaults:o},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,h])=>c.push(`${d}="${h}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${lt(l)}</style>`:""},createTokens(t={},i,e="",n="",r={}){let o=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&Dn.test(this.value)){let d=this.value.trim().replace(Dn,h=>{var p;let m=h.slice(1,-1),S=this.tokens[m];if(!S)return console.warn(`Token not found for path: ${m}`),"__UNRESOLVED__";let D=S.computed(a,l,u);return Array.isArray(D)&&D.length===2?`light-dark(${D[0].value},${D[1].value})`:(p=D?.value)!=null?p:"__UNRESOLVED__"});c=La.test(d.replace(Na,"0"))?`calc(${d})`:d}return Ae(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,d])=>{let h=be(c,i.variable.excludedKeyRegex)?l:l?`${l}.${Oa(c)}`:Oa(c),p=u?`${u}.${c}`:c;Ne(d)?s(d,h,p):(r[h]||(r[h]={paths:[],computed:(m,S={},D=[])=>{if(r[h].paths.length===1)return r[h].paths[0].computed(r[h].paths[0].scheme,S.binding,D);if(m&&m!=="none")for(let T=0;T<r[h].paths.length;T++){let I=r[h].paths[T];if(I.scheme===m)return I.computed(m,S.binding,D)}return r[h].paths.map(T=>T.computed(T.scheme,S[T.scheme],D))}}),r[h].paths.push({path:p,value:d,scheme:p.includes("colorScheme.light")?"light":p.includes("colorScheme.dark")?"dark":"none",computed:o,tokens:r}))})};return s(t,e,n),r},getTokenValue(t,i,e){var n;let r=(a=>a.split(".").filter(l=>!be(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),o=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[r])==null?void 0:n.computed(o)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,d=xe(u,["colorScheme"]);return a[c]=d,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?It(M(i)?`${t}${i},${t} ${i}`:t,n):It(t,It(i??":root",n))},transformCSS(t,i,e,n,r={},o,s,a){if(M(i)){let{cssLayer:l}=r;if(n!=="style"){let u=this.getColorSchemeOption(r,s);i=e==="dark"?u.reduce((c,{type:d,selector:h})=>(M(h)&&(c+=h.includes("[CSS]")?h.replace("[CSS]",i):this.getSelectorRule(h,a,d,i)),c),""):It(a??":root",i)}if(l){let u={name:"primeui",order:"primeui"};Ne(l)&&(u.name=Q(l.name,{name:t,type:n})),M(u.name)&&(i=It(`@layer ${u.name}`,i),o?.layerNames(u.name))}return i}return""}},R={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=to(ve({},i),{options:ve(ve({},this.defaults.options),i.options)}),this._tokens=ye.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),ne.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=to(ve({},this.theme),{preset:t}),this._tokens=ye.createTokens(t,this.defaults),this.clearLoadedStyleNames(),ne.emit("preset:change",t),ne.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=to(ve({},this.theme),{options:t}),this.clearLoadedStyleNames(),ne.emit("options:change",t),ne.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return ye.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return ye.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ye.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ye.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ye.getPreset(r)},getLayerOrderCSS(t=""){return ye.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return ye.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return ye.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return ye.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),ne.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&ne.emit("theme:load"))}};var Ba=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var pd=0,Ua=(()=>{class t{document=f(O);use(e,n={}){let r=!1,o=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++pd}`,id:c=void 0,media:d=void 0,nonce:h=void 0,first:p=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){o=e;let S=this.document.head;p&&S.firstChild?S.insertBefore(s,S.firstChild):S.appendChild(s),Oi(s,{type:"text/css",media:d,nonce:h,"data-primeng-style-id":u})}return s.textContent!==o&&(s.textContent=o),{id:c,name:u,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},hd=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,V=(()=>{class t{name="base";useStyle=f(Ua);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(Ot`${Q(e,{dt:Pe})}`);return o?this.useStyle.use(lt(o),g({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>R.transformCSS(e.name||this.name,`${r}${Ot`${n}`}`));loadGlobalCSS=(e={})=>this.load(hd,e);loadGlobalTheme=(e={},n="")=>this.load(Ba,e,(r="")=>R.transformCSS(e.name||this.name,`${r}${Ot`${n}`}`));getCommonTheme=e=>R.getCommon(this.name,e);getComponentTheme=e=>R.getComponent(this.name,e);getDirectiveTheme=e=>R.getDirective(this.name,e);getPresetTheme=(e,n,r)=>R.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>R.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=Q(this.css,{dt:Pe}),o=lt(Ot`${r}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>R.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[R.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=Ot`${Q(this.theme,{dt:Pe})}`,a=lt(R.transformCSS(o,s)),l=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${a}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fd=(()=>{class t{theme=de(void 0);csp=de({nonce:void 0});isThemeChanged=!1;document=f(O);baseStyle=f(V);constructor(){Vt(()=>{ne.on("theme:change",e=>{qn(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Vt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){R.clearLoadedStyleNames(),ne.clear()}onThemeChange(e){R.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!R.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,g({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,g({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,g({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(g({name:"global-style"},s),o),R.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oo=(()=>{class t extends fd{ripple=de(!1);platformId=f(pe);inputStyle=de(null);inputVariant=de(null);overlayAppendTo=de("self");overlayOptions={};csp=de({nonce:void 0});filterMatchModeOptions={text:[j.STARTS_WITH,j.CONTAINS,j.NOT_CONTAINS,j.ENDS_WITH,j.EQUALS,j.NOT_EQUALS],numeric:[j.EQUALS,j.NOT_EQUALS,j.LESS_THAN,j.LESS_THAN_OR_EQUAL_TO,j.GREATER_THAN,j.GREATER_THAN_OR_EQUAL_TO],date:[j.DATE_IS,j.DATE_IS_NOT,j.DATE_BEFORE,j.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ie;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=g(g({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c,overlayAppendTo:d}=e||{};n&&this.csp.set(n),d&&this.overlayAppendTo.set(d),r&&this.ripple.set(r),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gd=new N("PRIME_NG_CONFIG");function bm(...t){let i=t?.map(n=>({provide:gd,useValue:n,multi:!1})),e=Ki(()=>{let n=f(oo);t?.forEach(r=>n.setConfig(r))});return Bn([...i,e])}var $a=(()=>{class t extends V{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Y=(()=>{class t{document=f(O);platformId=f(pe);el=f(Qe);injector=f(Bt);cd=f(Wt);renderer=f($t);config=f(oo);baseComponentStyle=f($a);baseStyle=f(V);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Sn("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return Mi(e,n,r)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!us(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>ne.off("theme:change",e))}_loadStyles(){let e=()=>{Mt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Mt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Mt.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Mt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!R.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,g({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,g({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,g({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(g({name:"global-style"},this.styleOptions),o),R.setLoadedStyleName("common")}if(!R.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,g({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(g({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),R.setLoadedStyleName(this.componentStyle?.name)}if(!R.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,g({name:"layer-order",first:!0},this.styleOptions)),R.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,g({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Mt.clearLoadedStyleNames(),ne.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return Rt(this._getOptionValue(this.$style?.classes,e,g({instance:this},n)))}sx(e="",n=!0,r={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,g({instance:this},r))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=Rt;static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,inputs:{dt:"dt"},features:[q([$a,V]),Ze]})}return t})();var so=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let o=0;o<r.length;o++)e.classList.add(r[o])}else{let r=n.split(" ");for(let o=0;o<r.length;o++)e.className+=" "+r[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var o=0;o<n.length;o++){if(n[o]==e)return r;n[o].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<r.length;s++){if(r[s]==e)return o;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let o=L=>{if(L)return getComputedStyle(L).getPropertyValue("position")==="relative"?L:o(L.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),p=o(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},m,S,D="top";l.top+a+s.height>d.height?(m=l.top-p.top-s.height,D="bottom",l.top+m<0&&(m=-1*l.top)):(m=a+l.top-p.top,D="top");let T=l.left+s.width-d.width,I=l.left-p.left;if(s.width>d.width?S=(l.left-p.left)*-1:T>0?S=I-T:S=l.left-p.left,e.style.top=m+"px",e.style.left=S+"px",e.style.transformOrigin=D,r){let L=pa(/-anchor-gutter$/)?.value;e.style.marginTop=D==="bottom"?`calc(${L??"2px"} * -1)`:L??""}}static absolutePosition(e,n,r=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,a=o.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),p=this.getViewport(),m,S;c.top+l+s>p.height?(m=c.top+d-s,e.style.transformOrigin="bottom",m<0&&(m=d)):(m=l+c.top+d,e.style.transformOrigin="top"),c.left+a>p.width?S=Math.max(0,c.left+h+u-a):S=c.left+h,e.style.top=m+"px",e.style.left=S+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),o=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return o.test(l.getPropertyValue("overflow"))||o.test(l.getPropertyValue("overflowX"))||o.test(l.getPropertyValue("overflowY"))};for(let a of r){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-o-a,d=e.scrollTop,h=e.clientHeight,p=this.getOuterHeight(n);c<0?e.scrollTop=d+c:c+p>h&&(e.scrollTop=d+c-h+p)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var r=1,o=50,s=n,a=o/s;let l=setInterval(()=>{r=r-a,r<=0&&(r=0,clearInterval(l)),e.style.opacity=r},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||o.clientWidth,a=e.innerHeight||r.clientHeight||o.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of r){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let o=getComputedStyle(r);if(this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),o=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?o=r.length-1:o=s-1:s!=-1&&s!==r.length-1&&(o=s+1)}return r[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...r),o}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(o,s)=>{let a=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?r(o,u):Object.entries(u).map(([h,p])=>o==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let a=o.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(r("class",s))].join(" ").trim():o==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Nm(){ca({variableName:ro("scrollbar.width").name})}function xm(){da({variableName:ro("scrollbar.width").name})}var ja=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=so.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ha=(()=>{class t extends Y{autofocus=!1;focused=!1;platformId=f(pe);document=f(O);host=f(Qe);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Jn(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=so.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[U]})}return t})();var za=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var md=`
    ${za}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,bd={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":M(t.value())&&String(t.value()).length===1,"p-badge-dot":Ae(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},Va=(()=>{class t extends V{name="badge";theme=md;classes=bd;static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ao=(()=>{class t extends Y{styleClass=le();badgeSize=le();size=le();severity=le();value=le();badgeDisabled=le(!1,{transform:F});_componentStyle=f(Va);static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275cmp=G({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,r){n&2&&(ae(r.cn(r.cx("root"),r.styleClass())),$o("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[q([Va]),U],decls:1,vars:1,template:function(n,r){n&1&&Wn(0),n&2&&Gn(r.value())},dependencies:[ge,We],encapsulation:2,changeDetection:0})}return t})(),Wa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[ao,We,We]})}return t})();var Ga=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var vd=["*"],Sd={root:"p-fluid"},qa=(()=>{class t extends V{name="fluid";classes=Sd;theme=Ga;static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var lo=(()=>{class t extends Y{_componentStyle=f(qa);static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275cmp=G({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,r){n&2&&ae(r.cx("root"))},features:[q([qa]),U],ngContentSelectors:vd,decls:1,vars:0,template:function(n,r){n&1&&(_e(),Te(0))},dependencies:[ge],encapsulation:2,changeDetection:0})}return t})();var Dd=["*"],Cd=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ka=(()=>{class t extends V{name="baseicon";css=Cd;static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ya=(()=>{class t extends Y{spin=!1;_componentStyle=f(Ka);getClassNames(){return Rt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275cmp=G({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,r){n&2&&ae(r.getClassNames())},inputs:{spin:[2,"spin","spin",F]},features:[q([Ka]),U],ngContentSelectors:Dd,decls:1,vars:0,template:function(n,r){n&1&&(_e(),Te(0))},encapsulation:2,changeDetection:0})}return t})();var wd=["data-p-icon","spinner"],Za=(()=>{class t extends Ya{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Sn()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275cmp=G({type:t,selectors:[["","data-p-icon","spinner"]],features:[U],attrs:wd,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Un(),Qi(0,"g"),Ji(1,"path",0),Xi(),Qi(2,"defs")(3,"clipPath",1),Ji(4,"rect",2),Xi()()),n&2&&(Ue("clip-path",r.pathId),W(3),ko("id",r.pathId))},encapsulation:2})}return t})();var Qa=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Ed=`
    ${Qa}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ad={root:"p-ink"},Xa=(()=>{class t extends V{name="ripple";theme=Ed;classes=Ad;static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Ja=(()=>{class t extends Y{zone=f(et);_componentStyle=f(Xa);animationListener;mouseDownListener;timeout;constructor(){super(),Vt(()=>{Jn(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(ze(n,"p-ink-active"),!Yr(n)&&!Zr(n)){let a=Math.max(ha(this.el.nativeElement),ba(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let r=ma(this.el.nativeElement),o=e.pageX-r.left+this.document.body.scrollTop-Zr(n)/2,s=e.pageY-r.top+this.document.body.scrollLeft-Yr(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),Le(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&ze(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&ze(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),ze(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ya(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[q([Xa]),U]})}return t})();var el=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Rd=["content"],_d=["loadingicon"],Td=["icon"],Id=["*"],il=t=>({class:t});function Od(t,i){t&1&&Po(0)}function Md(t,i){if(t&1&&tt(0,"span"),t&2){let e=he(3);ae(e.cx("loadingIcon")),Ue("aria-hidden",!0)("data-pc-section","loadingicon")}}function Fd(t,i){if(t&1&&(Un(),tt(0,"svg",7)),t&2){let e=he(3);ae(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),$("spin",!0),Ue("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ld(t,i){if(t&1&&(jn(0),Je(1,Md,1,4,"span",3)(2,Fd,1,5,"svg",6),Hn()),t&2){let e=he(2);W(),$("ngIf",e.loadingIcon),W(),$("ngIf",!e.loadingIcon)}}function Nd(t,i){}function xd(t,i){if(t&1&&Je(0,Nd,0,0,"ng-template",8),t&2){let e=he(2);$("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Pd(t,i){if(t&1&&(jn(0),Je(1,Ld,3,2,"ng-container",2)(2,xd,1,1,null,5),Hn()),t&2){let e=he();W(),$("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),W(),$("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",tr(3,il,e.cx("loadingIcon")))}}function kd(t,i){if(t&1&&tt(0,"span"),t&2){let e=he(2);ae(e.cx("icon")),Ue("data-pc-section","icon")}}function Bd(t,i){}function Ud(t,i){if(t&1&&Je(0,Bd,0,0,"ng-template",8),t&2){let e=he(2);$("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function $d(t,i){if(t&1&&(jn(0),Je(1,kd,1,3,"span",3)(2,Ud,1,1,null,5),Hn()),t&2){let e=he();W(),$("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),W(),$("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",tr(3,il,e.cx("icon")))}}function jd(t,i){if(t&1&&(Yi(0,"span"),Wn(1),Zi()),t&2){let e=he();ae(e.cx("label")),Ue("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),W(),Gn(e.label)}}function Hd(t,i){if(t&1&&tt(0,"p-badge",9),t&2){let e=he();$("value",e.badge)("severity",e.badgeSeverity)}}var zd={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},qe=(()=>{class t extends V{name="button";theme=el;classes=zd;static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Ge={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},tl=(()=>{class t extends Y{_componentStyle=f(qe);static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,r){n&2&&Vn("p-button-label",!0)},features:[q([qe]),U]})}return t})(),nl=(()=>{class t extends Y{_componentStyle=f(qe);static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,r){n&2&&Vn("p-button-icon",!0)},features:[q([qe]),U]})}return t})(),dy=(()=>{class t extends Y{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=ir(nl);labelSignal=ir(tl);isIconOnly=nr(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=le(void 0,{transform:F});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Ge);pcFluid=f(lo,{optional:!0,host:!0,skipSelf:!0});isTextButton=nr(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=f(qe);ngAfterViewInit(){super.ngAfterViewInit(),Le(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let e=[Ge.button,Ge.component];return this.icon&&!this.label&&Ae(this.htmlElement.textContent)&&e.push(Ge.iconOnly),this.loading&&(e.push(Ge.disabled,Ge.loading),!this.icon&&this.label&&e.push(Ge.labelOnly),this.icon&&!this.label&&!Ae(this.htmlElement.textContent)&&e.push(Ge.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(r=>e.some(o=>r===`p-button-${o}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Tt(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Tt(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let r=this.label?"p-button-icon-"+this.iconPos:null;r&&Le(n,r);let o=this.getIconClass();o&&Le(n,o),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Tt(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Tt(this.htmlElement,".p-button-icon"),n=Tt(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","pButton",""]],contentQueries:function(n,r,o){n&1&&(er(o,r.iconSignal,nl,5),er(o,r.labelSignal,tl,5)),n&2&&Uo(2)},hostVars:4,hostBindings:function(n,r){n&2&&Vn("p-button-icon-only",r.isIconOnly())("p-button-text",r.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",F],rounded:[2,"rounded","rounded",F],text:[2,"text","text",F],outlined:[2,"outlined","outlined",F],size:"size",plain:[2,"plain","plain",F],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[q([qe]),U]})}return t})(),Vd=(()=>{class t extends Y{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=le(void 0,{transform:F});onClick=new Se;onFocus=new Se;onBlur=new Se;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=f(lo,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=f(qe);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275cmp=G({type:t,selectors:[["p-button"]],contentQueries:function(n,r,o){if(n&1&&(jt(o,Rd,5),jt(o,_d,5),jt(o,Td,5),jt(o,Aa,4)),n&2){let s;Ht(s=zt())&&(r.contentTemplate=s.first),Ht(s=zt())&&(r.loadingIconTemplate=s.first),Ht(s=zt())&&(r.iconTemplate=s.first),Ht(s=zt())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",F],loading:[2,"loading","loading",F],loadingIcon:"loadingIcon",raised:[2,"raised","raised",F],rounded:[2,"rounded","rounded",F],text:[2,"text","text",F],plain:[2,"plain","plain",F],severity:"severity",outlined:[2,"outlined","outlined",F],link:[2,"link","link",F],tabindex:[2,"tabindex","tabindex",qo],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",F],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[q([qe]),U],ngContentSelectors:Id,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,r){n&1&&(_e(),Yi(0,"button",0),Bo("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),Te(1),Je(2,Od,1,0,"ng-container",1)(3,Pd,3,5,"ng-container",2)(4,$d,3,5,"ng-container",2)(5,jd,2,5,"span",3)(6,Hd,1,2,"p-badge",4),Zi()),n&2&&(ae(r.cn(r.cx("root"),r.styleClass,r.buttonProps==null?null:r.buttonProps.styleClass)),$("ngStyle",r.style||(r.buttonProps==null?null:r.buttonProps.style))("disabled",r.disabled||r.loading||(r.buttonProps==null?null:r.buttonProps.disabled))("pAutoFocus",r.autofocus||(r.buttonProps==null?null:r.buttonProps.autofocus)),Ue("type",r.type||(r.buttonProps==null?null:r.buttonProps.type))("aria-label",r.ariaLabel||(r.buttonProps==null?null:r.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex||(r.buttonProps==null?null:r.buttonProps.tabindex)),W(2),$("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),W(),$("ngIf",r.loading),W(),$("ngIf",!r.loading),W(),$("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),W(),$("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[ge,dr,hr,pr,Ja,Ha,Za,Wa,ao,We],encapsulation:2,changeDetection:0})}return t})(),py=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[ge,Vd,We,We]})}return t})();export{Ie as a,xl as b,ls as c,dr as d,pr as e,hr as f,kl as g,ge as h,Jn as i,wr as j,nu as k,zr as l,Ii as m,Uc as n,Gc as o,ua as p,Le as q,ze as r,rg as s,og as t,sg as u,ha as v,ag as w,lg as x,ug as y,Xc as z,Tt as A,cg as B,dg as C,pg as D,hg as E,ba as F,fg as G,gg as H,M as I,yg as J,Sn as K,Cg as L,wg as M,Aa as N,We as O,Eg as P,V as Q,bm as R,Ni as S,_a as T,xg as U,Ta as V,Y as W,lo as X,so as Y,Nm as Z,xm as _,ja as $,Ya as aa,dy as ba,Vd as ca,py as da};
