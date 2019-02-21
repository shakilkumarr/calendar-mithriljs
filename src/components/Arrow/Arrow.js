var mithril = require("mithril")
require("tachyons")
require("./Arrow.css")
var appState = require("../appState/appState")

var changeRoute = function(action){
  let targetDate = appState().userMoment[action.action](1,action.actionName).format("YYYY/MM/DD");
  mithril.route.set("/calender/"+targetDate);
}
var Arrow = {
  view : function(vnode){
    let attrs = vnode.attrs;
    return mithril.m("span.dib.br4.pointer.arrow-cust."+attrs.name, {onclick : ()=> changeRoute(attrs)})
  }
}

module.exports = Arrow;
