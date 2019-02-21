var mithril = require("mithril")
var Container = require("./components/Container/Container")
var moment = require("moment");
var appstate = require("./appstate");



var [year,month,day] = [moment().format("YYYY"),moment().format("MM"),moment().format("DD")]
mithril.route(document.body,'/calender/'+year+"/"+month+"/"+day, {
    '/calender/:year/:month/:day': {
      onmatch : function(args, requestedPath) {
        requestedPath = moment(requestedPath.toLowerCase().replace("/calender/",""),"YYYY/MM/DD")
        !requestedPath._isValid && mithril.route.set("/calender/"+moment().format("YYYY/MM/DD"))
        let validMoment = requestedPath._isValid ? requestedPath : moment();
        appstate({
          userMoment : validMoment
        });
        return Container
      }
    }
});
