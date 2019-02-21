var mithril = require("mithril").m
require("tachyons")
require("./DateList.css");
var moment = require("moment")()
var calendarObj = require("../getCalender/getCalender");

var checkPrevDate = (count,prevMonDate,index,date,obj) =>{
  if(count === 0 && date !== 1){
    [prevMonDate,count] = [true,count+1]
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
    let nowMoment = moment.date();

    return calendarObj().map(function(row){
      return mithril("ul.list.pa0.flex",[
        row.map(function(dateObj,index,obj){
          let date = dateObj.date;
          [prevMonDate,count] = checkPrevDate(count,prevMonDate,index,date,obj);
          return mithril(
              "li.cust-li.pointer.h2.w2"+ (
              prevMonDate ?
              ".o-30" :
              nowMoment === date ? ".currDate.userSelDate" : ""),
            {onclick : selectDate},
            dateObj.date
          )
        })
      ])
    })
  }
}

module.exports = DateList;
