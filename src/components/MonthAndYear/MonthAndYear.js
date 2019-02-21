var mithril = require("mithril").m
require("./MonthAndYear.css")
var appstate = require("../../appstate");
var Arrow = require("../Arrow/Arrow")
require("tachyons")

var MonthAndYear = {
  view : function(){
    let moment = appstate().userMoment;
    return mithril("div.flex.flex-column.justify-cust-evenly.f7.w4",[
      mithril("div.o-70.flex.items-center.justify-cust-evenly",[
        mithril(Arrow,{name: "left", action : "monthRed"}),
        mithril("div.fw1",moment.format("MMM").toUpperCase()),
        mithril(Arrow,{name: "right", action : "monthInc"})
      ]),
      mithril("div.o-70.flex.items-center.justify-cust-evenly",[
        mithril(Arrow,{name: "left", action : "yrRed"}),
        mithril("div.fw1",moment.format("YYYY")),
        mithril(Arrow,{name: "right", action : "yrInc"})
      ])
    ])
  }
}

module.exports = MonthAndYear;
