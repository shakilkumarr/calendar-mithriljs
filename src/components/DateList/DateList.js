var mithril = require("mithril")
var currMoment = require("moment");
var appState = require("../appState/appState")
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
var selectDate = function(date){
  let path = mithril.route.get();
  path = path.substr(0,path.lastIndexOf("/"));
  mithril.route.set(path+"/"+date);
}
var DateList = {
  view : function(vnode) {
    let count = 0;
    let prevMonDate = false;
    let moment = appState().userMoment;
    let isFinished = false;
    let nowDate = currMoment().format("YYYY/MM") === moment.format("YYYY/MM") ? currMoment().date() : 50;

    return calendarObj(moment).map(function(row, rowIndex){
      return mithril.m("ul.list.pa0.flex",[
        row.map(function(dateObj,index,obj){
          let date = dateObj.date;
          if(isFinished || (rowIndex > 0 && index === 0 && date === 1)){
              isFinished = true;
              return
          }
          [prevMonDate,count] = checkPrevDate(count,prevMonDate,index,date,obj);
          return mithril.m(
              "li.cust-li.h2.w2"+ (
              prevMonDate ?
              (".o-30.curr-default") :
              (".pointer" + (nowDate === moment.date() && nowDate === date ? ".currDate.userSelDate" : nowDate === date ? ".currDate": moment.date() === date ? ".userSelDate" : ""))
            ),
            !prevMonDate && {onclick : ()=>selectDate(date)},
            date
          )
        })
      ])
    })
  }
}

module.exports = DateList;
