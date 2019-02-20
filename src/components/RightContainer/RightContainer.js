var mithril = require("mithril").m
require("tachyons")
require("./RightContainer.css")
var moment = require("moment")()

var RightContainer ={
  view : function(){
    let weeksArr = [...Array(moment._locale._week.doy + 1).keys()];
    let days = moment._locale._weekdaysShort;

    return mithril("table.pt5.pl3.pr3.pb5.f7.fw5.o-70",[
      weeksArr.map(function(row){
        return mithril("tr",[
            days.map(function(day){
              return mithril("td.pa3",row === 0 ? day.toUpperCase() : "")
            })
        ])
      })
    ])
  }
}

module.exports = RightContainer
