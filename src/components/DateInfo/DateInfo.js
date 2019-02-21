var mithril = require("mithril").m
var appstate = require("../../appstate");
require("tachyons")
var MonthAndYear = require("../MonthAndYear/MonthAndYear")

var DateInfo = {
  view : function(){
    return mithril("div.flex.justify-between",[
      mithril("div.f-headline.fw3.mr4",appstate().userMoment.date()),
      mithril(MonthAndYear)
    ])
  }
}

module.exports = DateInfo;
