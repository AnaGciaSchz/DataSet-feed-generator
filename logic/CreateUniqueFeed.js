var createGroceryFeed = require("../logic/CreateGroceryFeed");
var fw = require ("../inout/FileWriter")

exports.createFeed = async ()=> {
fw.write("Name\tCategory\tImages\n");
await createGroceryFeed.createFeed();

/** 
var id = 62300701;
var i;
for (i = 0; i<10000;i++){
    var data = await getData.getBasicInformation(id+i);
    if(data.res != "error"){
        console.log(data);
        fw.write(data.name+"\t"+data.supplier+"\t"+data.category+"\t"+data.image+"\n");
    }
}
*/
return "done";
}