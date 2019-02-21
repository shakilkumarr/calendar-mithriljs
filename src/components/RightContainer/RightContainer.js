var mithril = require("mithril").m
require("tachyons")
require("./RightContainer.css")
var moment = require("moment")()

function getCalender(){
  const startDay = moment.clone().startOf('month').startOf('week');
  const endDay = moment.clone().endOf('month').endOf('week');

  var calendar = [];
  var index = startDay.clone();
  while (index.isBefore(endDay, 'day')) {
      calendar.push(
          new Array(7).fill(0).map(
              function(n, i) {
                  return {date: index.add(1, 'day').date()};
              }
          )
      );
  }
  return calendar;
}

var RightContainer ={
  view : function(){
    let calendarObj = getCalender();
    let days = moment._locale._weekdaysShort;
    let count = 0;
    let prevMonDate = false;

    return mithril("div.pt5.pl4.pr4.pb5.f7.fw5.o-70.dt",[
      mithril("ul.list.pa0.flex",[
          days.map(function(day){
            return mithril("li.cust-li.h2.w2",day.toUpperCase())
          })
      ]),
      calendarObj.map(function(row){
        return mithril("ul.list.pa0.flex",[
            row.map(function(dateObj,index,obj){
              let date = dateObj.date;
              if(count === 0){
                if(date !== 1){
                  prevMonDate = true
                }
                count += 1;
              }
              else if(index > 0){
                if(prevMonDate){
                  date > obj[index - 1].date ? prevMonDate = true : prevMonDate = false
                }
                else{
                  date < obj[index - 1].date ? prevMonDate = true : prevMonDate = false
                }
              }

              return mithril("li.cust-li.pointer.h2.w2"+ ( prevMonDate ? ".o-30" : moment.date() === date ? ".currDate.userSelDate" : ""),dateObj.date)
            })
        ])
      })
    ])
  }
}

module.exports = RightContainer
