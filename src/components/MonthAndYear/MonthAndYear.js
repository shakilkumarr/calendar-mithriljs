var mithril = require("mithril").m
require("./MonthAndYear.css")
var appState = require("../appState/appState")
var Arrow = require("../Arrow/Arrow")
require("tachyons")

var MonthAndYear = {
  view : function(){
    let moment = appState().userMoment;
    return mithril("div.flex.flex-column.justify-cust-evenly.f7.w4",[
      mithril("div.o-70.flex.items-center.justify-cust-evenly",[
        mithril(Arrow,{name: "left", actionName : "month",action : "subtract"}),
        mithril("div.fw1",moment.format("MMM").toUpperCase()),
        mithril(Arrow,{name: "right", actionName : "month",action : "add"})
      ]),
      mithril("div.o-70.flex.items-center.justify-cust-evenly",[
        mithril(Arrow,{name: "left", actionName : "year",action : "subtract"}),
        mithril("div.fw1",moment.format("YYYY")),
        mithril(Arrow,{name: "right", actionName : "year",action : "add"})
      ])
    ])
  }
}

module.exports = MonthAndYear;
