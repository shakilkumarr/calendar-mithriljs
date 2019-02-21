var mithril = require("mithril").m
require("tachyons")
require("./DateList.css");
var currMoment = require("moment");
var appstate = require("../../appstate");
var calendarObj = require("../getCalender/getCalender");

var checkPrevDate = (count,prevMonDate,index,date,obj) =>{
  if(count === 0){
    [prevMonDate,count] = [date !== 1 ? true : false,count+1]
  }
  else if(index > 0){
    let checkDate = obj[index - 1].date;
    prevMonDate = prevMonDate ? date > checkDate ? true : false : date < checkDate ? true : false
  }
  return [prevMonDate,count];
}
var selectDate = function(){

}
var DateList = {
  view : function(vnode) {
    let count = 0;
    let prevMonDate = false;
    let moment = appstate().userMoment;
    let nowDate = currMoment().format("YYYY/MM") === moment.format("YYYY/MM") ? currMoment().date() : 50;

    return calendarObj(moment).map(function(row){
      return mithril("ul.list.pa0.flex",[
        row.map(function(dateObj,index,obj){
          let date = dateObj.date;
          [prevMonDate,count] = checkPrevDate(count,prevMonDate,index,date,obj);
          return mithril(
              "li.cust-li.h2.w2"+ (
              prevMonDate ?
              (".o-30.curr-default") :
              (".pointer" + (nowDate === moment.date() && nowDate === date ? ".currDate.userSelDate" : nowDate === date ? ".currDate": moment.date() === date ? ".userSelDate" : ""))
            ),
            {onclick : selectDate},
            dateObj.date
          )
        })
      ])
    })
  }
}

module.exports = DateList;
