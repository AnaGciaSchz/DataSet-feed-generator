var fr = require ("../inout/FolderReader")
var fw = require ("../inout/FileWriter")

exports.createFeed = function () {
    var directories = fr.getDirectories("resources/groceryStore")
    for(directory in directories){//[ 'Fruit', 'Packages', 'Vegetables' ]
        var folders = fr.getDirectories("resources/groceryStore/"+directories[directory]);
        for(folder in folders){//[ 'Apple', 'Avocado', 'Banana', ... ]
            var productNames = fr.getDirectories("resources/groceryStore/"+directories[directory]+"/"+folders[folder]);
            
            if(productNames.length >0){
            for(productName in productNames){//[ 'Golden-Delicious', 'Granny-Smith', 'Pink-Lady', ... ]
            writeInDocument(directories[directory],folders[folder],productNames[productName]);
        }
        }//if
        else{
            writeInDocument(directories[directory],folders[folder],folders[folder]);
        }
    }
    }
return "done";
}

function writeInDocument(directory,folder,productName){
    var name = productName;
    var category = "Grocery";
    var image = "https://raw.githubusercontent.com/marcusklasson/GroceryStoreDataset/master/dataset/iconic-images-and-descriptions/"+directory+"/"+folder+"/"+name+"/"+name+".jpg";
    fw.write(name+"\t"+category+"\t"+image+"\n");
}