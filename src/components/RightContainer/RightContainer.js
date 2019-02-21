var mithril = require("mithril").m
require("tachyons")
require("./RightContainer.css")
var DateList = require("../DateList/DateList")
var DayList = require("../DayList/DayList")

var RightContainer ={
  view : function(){
    return mithril("div.pt5.pl4.pr4.pb5.f7.fw5.o-70.dt",[
      mithril(DayList),
      mithril(DateList)
    ])
  }
}

module.exports = RightContainer
