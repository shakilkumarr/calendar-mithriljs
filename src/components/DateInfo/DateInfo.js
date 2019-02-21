var mithril = require("mithril").m
var appState = require("../appState/appState")
var MonthAndYear = require("../MonthAndYear/MonthAndYear")

var DateInfo = {
  view : function(){
    return mithril("div.flex.justify-between",[
      mithril("div.f-headline.fw3.mr4",appState().userMoment.date()),
      mithril(MonthAndYear)
    ])
  }
}

module.exports = DateInfo;
