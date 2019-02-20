var mithril = require("mithril").m
require("./MonthAndYear.css")
var moment = require("moment")()
var Arrow = require("../Arrow/Arrow")
require("tachyons")

var MonthAndYear = {
  view : function(){
    return mithril("div.flex.flex-column.justify-cust-evenly.f7.w4",[
      mithril("div.o-70.flex.items-center.justify-cust-evenly",[
        mithril(Arrow,{name: "left"}),
        mithril("div.fw1",moment.format("MMM").toUpperCase()),
        mithril(Arrow,{name: "right"})
      ]),
      mithril("div.o-70.flex.items-center.justify-cust-evenly",[
        mithril(Arrow,{name: "left"}),
        mithril("div.fw1",moment.format("YYYY")),
        mithril(Arrow,{name: "right"})
      ])
    ])
  }
}

module.exports = MonthAndYear;
