var moment = require("moment");
var getCalender = (specDate)=>{
  const startDay = moment().clone().startOf('month').startOf('week');
  const endDay = moment().clone().endOf('month').endOf('week');

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

module.exports = getCalender;
