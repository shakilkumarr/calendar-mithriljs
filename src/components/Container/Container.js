var mithril = require("mithril").m
require("tachyons")
require("./Container.css")

var Container = {
  view : function(){
    return mithril(
      "div.ma6",[
          mithril("div.relative.center.w-75.bg-custbg-green.tc.pt4.pb4",[
            mithril("div.shadow-cust.inline-flex",[
              mithril("div.bg-cust-blue h200"),
              mithril("div.bg-white h200")
            ])
          ])
      ]
    )
  }
}

module.exports = Container;
