(window.webpackJsonp=window.webpackJsonp||[]).push([[23,36],{334:function(e,t,s){},341:function(e,t,s){},350:function(e,t,s){"use strict";s(334)},353:function(e,t,s){"use strict";s.r(t);var n=s(0),o=s(373),i=s(355),l=s(18),r=s(319);var a=Object(n.c)({name:"SidebarLinks",components:{SidebarGroup:o.default,SidebarLink:i.default},props:["items","depth","sidebarDepth"],setup(e,t){const s=Object(r.a)(),{items:o}=Object(n.i)(e),i=Object(n.h)(0),a=()=>{const e=function(e,t){for(let s=0;s<t.length;s++){const n=t[s];if("group"===n.type&&n.children.some(t=>"page"===t.type&&Object(l.e)(e,t.path)))return s}return-1}(s.$route,o.value);e>-1&&(i.value=e)},c=()=>{const e=[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>-1!=decodeURIComponent(s.$route.fullPath).indexOf(decodeURIComponent(e.hash)));null==e||e.length<1||null==e[0].offsetTop||setTimeout((function(){window.scrollTo(0,e[0].offsetTop+160)}),100)},u=()=>{const e=document.getElementsByClassName("sidebar")[0];let t=document.getElementsByClassName("active sidebar-link")[1];if(null!=t&&null!=t&&null!=t.offsetTop||(t=document.getElementsByClassName("active sidebar-link")[0]),null==t||null==t||null==t.offsetTop)return;const s=e.clientHeight||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=t.offsetTop,o=t.offsetTop+t.offsetHeight,i=e.scrollTop;o<=s+i||(e.scrollTop=o+5-s);n>=i||(e.scrollTop=n-5)},p=e=>p(s.$route,e.regularPath);return a(),Object(n.e)(()=>{(()=>{const e=decodeURIComponent(s.$route.fullPath);if(!e||""==e)return;const t=[].slice.call(document.querySelectorAll(".sidebar-link"));for(let s=0;s<t.length;s++)if(-1!=decodeURIComponent(t[s].getAttribute("href")).indexOf(e))return void c()})(),u()}),Object(n.f)(()=>u()),{openGroupIndex:i,refreshIndex:a,toggleGroup:e=>{s.openGroupIndex=e===s.openGroupIndex?-1:e},isActive:p}},watch:{$route(){this.refreshIndex()}}}),c=s(2),u=Object(c.a)(a,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(s,n){return t("li",{key:n},["group"===s.type?t("SidebarGroup",{attrs:{item:s,open:n===e.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(n)}}}):t("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:s}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=u.exports},355:function(e,t,s){"use strict";s.r(t);var n=s(0),o=s(18);var i=Object(n.c)({functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:s,$route:n,$themeConfig:i,$themeLocaleConfig:l},props:{item:r,sidebarDepth:a}}){const c=Object(o.e)(n,r.path),u="auto"===r.type?c||r.children.some(e=>Object(o.e)(n,r.basePath+"#"+e.slug)):c;return function(e,t,s,n){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}},s)}(e,r.path,r.title||r.path,u)}}),l=(s(350),s(2)),r=Object(l.a)(i,void 0,void 0,!1,null,null,null);t.default=r.exports},361:function(e,t,s){"use strict";s(341)},362:function(e,t,s){},373:function(e,t,s){"use strict";s.r(t);var n=s(0),o=s(18),i=s(347),l=s(319),r=Object(n.c)({name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:i.default},setup:(e,t)=>(Object(l.a)().$options.components.SidebarLinks=s(353).default,{isActive:o.e})}),a=(s(361),s(2)),c=Object(a.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,sidebarDepth:e.item.sidebarDepth,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=c.exports},383:function(e,t,s){"use strict";s(362)},409:function(e,t,s){"use strict";s.r(t);var n=s(0),o=s(353),i=s(392),l=Object(n.c)({name:"Sidebar",components:{SidebarLinks:o.default,NavLinks:i.default},props:["items"]}),r=(s(383),s(2)),a=Object(r.a)(l,(function(){var e=this._self._c;this._self._setupProxy;return e("aside",{staticClass:"sidebar"},[this._t("top"),this._v(" "),e("NavLinks"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.default=a.exports}}]);