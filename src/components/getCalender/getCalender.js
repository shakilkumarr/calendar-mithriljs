
var getCalender = (moment)=>{
  const startDay = moment.clone().startOf('month').startOf('week');
  const endDay = moment.clone().endOf('month').endOf('week');

  var calendar = [];
  var index = startDay.clone();
  var dayInc = index.date() === 1 ? 0 : 1;
  while (index.isBefore(endDay, 'day')) {
      calendar.push(
          new Array(7).fill(0).map(
              function(n, i) {
                  dayInc === 0 && i > 0 && (dayInc = 1)
                  return {date: index.add(dayInc, 'day').date()};
              }
          )
      );
  }
  return calendar;
}

module.exports = getCalender;
