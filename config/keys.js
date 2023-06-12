if (process.env.NODE_EVN === "producation") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
