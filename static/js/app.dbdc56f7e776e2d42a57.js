webpackJsonp([1],{"4TKe":function(t,e){},"6eq/":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{background:t.background},attrs:{id:"app"}},[n("div",{class:{shake:t.shake}},[n("p",{staticClass:"shakes"},[t._v("SHAKES")]),t._v(" "),n("p",{staticClass:"count"},[t._v(t._s(t.count))])])])},a=[],c={render:s,staticRenderFns:a};e.a=c},"9FTa":function(t,e){},M93x:function(t,e,n){"use strict";function s(t){n("4TKe")}var a=n("xJD8"),c=n("6eq/"),i=n("VU/8"),o=s,r=i(a.a,c.a,!1,o,null,null);e.a=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a=n("9FTa"),c=(n.n(a),n("M93x"));s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:c.a}})},xJD8:function(t,e,n){"use strict";var s=n("kqA7"),a=n.n(s),c=n("WybQ"),i=n.n(c),o=new a.a({threshold:15,timeout:1e3});e.a={name:"app",created:function(){o.start(),window.addEventListener("shake",this.shakeEventDidOccur,!1)},beforeDestroy:function(){window.removeEventListener("shake",this.shakeEventDidOccur,!1),o.stop()},data:function(){return{count:0,shake:!1,background:i()()}},methods:{shakeEventDidOccur:function(){var t=this;this.count+=1,this.background=i()(),this.shake=!0,setTimeout(function(){t.shake=!1},1e3)}}}}},["NHnr"]);
//# sourceMappingURL=app.dbdc56f7e776e2d42a57.js.map