System.register("chunks:///_virtual/CameraTracker.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,a,i,o,n,c,s,u,l,p;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,a=e.initializerDefineProperty,i=e.assertThisInitialized,o=e.defineProperty},function(e){n=e.cclegacy,c=e._decorator,s=e.Node,u=e.Vec3,l=e.Quat,p=e.Component}],execute:function(){var h,d,f,m,y,v,k;n._RF.push({},"45154oInhtCDrBFTlUNhsn4","CameraTracker",void 0);var N=c.ccclass,b=c.property;e("CameraTracker",(h=N("CameraTracker"),d=b(s),f=b(s),h((v=r((y=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return r=e.call.apply(e,[this].concat(n))||this,a(i(r),"cameraNode",v,i(r)),a(i(r),"trackAxis",k,i(r)),o(i(r),"vel",.68),r}t(r,e);var n=r.prototype;return n.start=function(){},n.update=function(e){var r=this.vel*e/Math.PI;this.cameraNode.position=u.rotateY(new u,this.cameraNode.position,this.trackAxis.position,r),this.cameraNode.rotation=l.rotateAround(new l,this.cameraNode.rotation,u.UP,r)},r}(p)).prototype,"cameraNode",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=r(y.prototype,"trackAxis",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=y))||m));n._RF.pop()}}}));

System.register("chunks:///_virtual/LinkToURL.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,n,e,r,i;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,r=t.sys,i=t.Component}],execute:function(){var s;n._RF.push({},"a92efbFOVtL+IyW/p0WDe9g","LinkToURL",void 0);var c=e.ccclass;e.property,t("LinkToURL",c("LinkToURL")(s=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.start=function(){},e.onClick=function(){r.openURL("../../../res/tow_pigs_homework.jpg")},n}(i))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./CameraTracker.ts","./LinkToURL.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});