
var stream = require('mithril/stream').default
var mithril = require('mithril')
var moment = require("moment");

const appState = stream({
  userMoment : moment()
})

appState.map(() => {mithril.redraw()})

module.exports = appState;
