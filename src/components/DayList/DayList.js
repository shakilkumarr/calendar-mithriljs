var mithril = require("mithril").m
var moment = require("moment")()

var DayList = {
  view : function() {
    let days = moment._locale._weekdaysShort;
    return mithril("ul.list.pa0.flex",[
        days.map(function(day){
          return mithril("li.cust-li-head.h2.w2",day.toUpperCase())
        })
    ])
  }
}

module.exports = DayList
