var mithril = require("mithril").m
require("tachyons")
require("./Arrow.css")

var Arrow = {
  view : function(vnode){
    return mithril("span.dib.br4.pointer.arrow-cust."+vnode.attrs.name)
  }
}

module.exports = Arrow;
