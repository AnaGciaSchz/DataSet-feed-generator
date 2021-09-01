var createGroceryFeed = require("../logic/CreateGroceryFeed");
var createApparelFeed = require("../logic/CreateApparelFeed");
var fw = require ("../inout/FileWriter")

exports.createFeed = async ()=> {
fw.write("[\n");
createGroceryFeed.createFeed();
createApparelFeed.createFeed();
setTimeout(() => {fw.write("\n]");; }, 2000);
return "done";
}