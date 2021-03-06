var mithril = require("mithril").m
var LeftContainer = require("../LeftContainer/LeftContainer")
var RightContainer = require("../RightContainer/RightContainer")

var Container = {
  view : function(){
    return mithril(
      "div.sans-serif.bg-custbg-green.min-cust-h100.pa6",[
          mithril("div.relative.center.w-75.tc.pt4.pb4",[
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
