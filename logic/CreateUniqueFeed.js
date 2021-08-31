var createGroceryFeed = require("../logic/CreateGroceryFeed");
var createApparelFeed = require("../logic/CreateApparelFeed");
var fw = require ("../inout/FileWriter")

exports.createFeed = async ()=> {
fw.write("Name\tCategory\tImages\n");
createGroceryFeed.createFeed();
createApparelFeed.createFeed();
return "done";
}