var mithril = require("mithril").m
var appState = require("../appState/appState")
var DateInfo = require("../DateInfo/DateInfo")

var LeftContainer = {
  view : function(){
    return mithril("div.flex.flex-column.white",[
      mithril("div.f7.pl2.pt4.pb4.pr4.tl.o-70.ma4","Howdy!!!"),
      mithril("div.pl4.pt4.pb2.pr4",[
        mithril("h1.f2.fw3.tl",appState().userMoment.format("dddd"))
      ]),
      mithril("div.pl4.pt2.pb4.pr4",[mithril(DateInfo)])
    ])
  }
}

module.exports = LeftContainer;
