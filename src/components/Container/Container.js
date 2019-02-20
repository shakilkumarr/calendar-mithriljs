var mithril = require("mithril").m
require("tachyons")
require("./Container.css")
var LeftContainer = require("../LeftContainer/LeftContainer")

var Container = {
  view : function(){
    return mithril(
      "div.ma6.sans-serif",[
          mithril("div.relative.center.w-75.bg-custbg-green.tc.pt4.pb4",[
            mithril("div.shadow-cust.inline-flex",[
              mithril("div.bg-cust-blue",[mithril(LeftContainer)]),
              mithril("div.bg-white")
            ])
          ])
      ]
    )
  }
}

module.exports = Container;
