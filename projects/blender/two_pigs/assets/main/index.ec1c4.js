System.register("chunks:///_virtual/LinkToURL.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,n,e,r,i;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,r=t.sys,i=t.Component}],execute:function(){var s;n._RF.push({},"a92efbFOVtL+IyW/p0WDe9g","LinkToURL",void 0);var c=e.ccclass;e.property,t("LinkToURL",c("LinkToURL")(s=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.start=function(){},e.onClick=function(){r.openURL("../../../res/tow_pigs_homework.jpg")},n}(i))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./LinkToURL.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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