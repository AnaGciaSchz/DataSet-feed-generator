var fr = require ("../inout/FolderReader")
var fw = require ("../inout/FileWriter")

exports.createFeed = function () {
    var directories = fr.getDirectories("resources/apparelDress")
    for(directory in directories){//[ 'black_dress', 'black_pants', 'black_shirt' ]
        var files = fr.getFileNames("resources/apparelDress/"+directories[directory]);
        for( file in files){
            writeInDocument(directories[directory],files[file]);
        }
    }
}
function writeInDocument(directory, fileName){
    var name = directory.replace("_"," ");
    var category = "Fashion";
    var image = "resources/apparelDress/"+directory+"/"+fileName;
    fw.write(",\n{\nname:"+name+",\ncategory:"+category+",\nimage:"+image+"\n}");
}