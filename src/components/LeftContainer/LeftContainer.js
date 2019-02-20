var mithril = require("mithril").m
var moment = require("moment")()
var DateInfo = require("../DateInfo/DateInfo")
require("tachyons")
require("./LeftContainer.css")

var LeftContainer = {
  view : function(){
    return mithril("div.flex.flex-column.white",[
      mithril("div.f7.pa4.tl.o-70","Howdy!!!"),
      mithril("div.pa4",[
        mithril("h1.f2.fw3.tl",moment.format("dddd"))
      ]),
      mithril("div.pa4",[mithril(DateInfo)])
    ])
  }
}

module.exports = LeftContainer;
