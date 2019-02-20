var mithril = require("mithril").m
require("./DateInfo.css")
var moment = require("moment")
require("tachyons")

var DateInfo = {
  view : function(){
    return mithril("div.flex",[
      mithril("div.f-headline",moment().date()),
      mithril("div.f1",moment().date())
    ])
  }
}

module.exports = DateInfo;
