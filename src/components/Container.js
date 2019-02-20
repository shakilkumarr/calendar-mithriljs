var mithril = require("mithril").m
require("tachyons")


var Container = {
  view : function(){
    return mithril(
      "div.relative.flex.items-center",[mithril("div"), mithril("div")]
    )
  }
}

module.exports = Container;
