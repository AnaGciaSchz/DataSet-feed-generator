var fr = require ("../inout/FolderReader")
var fw = require ("../inout/FileWriter")

exports.createFeed = async ()=> {
    var directories = fr.getDirectories("resources/groceryStore")
    console.log(directories);

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