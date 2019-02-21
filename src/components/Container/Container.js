var mithril = require("mithril").m
var tachyons = require("tachyons")
// require("./Container.css")
var LeftContainer = require("../LeftContainer/LeftContainer")
var RightContainer = require("../RightContainer/RightContainer")

var Container = {
  view : function(){
    return mithril(
      "div.ma6.sans-serif",[
          mithril("div.relative.center.w-75.bg-custbg-green.tc.pt4.pb4",[
            mithril("div.shadow-cust.inline-flex",[
              mithril("div.bg-cust-blue.cust-min-350",[mithril(LeftContainer)]),
              mithril("div.bg-white.cust-min-450",[mithril(RightContainer)])
            ])
          ])
      ]
    )
  }
}

module.exports = Container;
