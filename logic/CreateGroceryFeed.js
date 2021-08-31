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
            writeInDocumentProductName(directories[directory],folders[folder],productNames[productName]);
        }
        }//if
        else{
            writeInDocumentNoProductName(directories[directory],folders[folder]);
        }
    }
    }
}

function writeInDocumentProductName(directory,folder,productName){
    var name = productName;
    var category = "Grocery";
    var image = "https://raw.githubusercontent.com/marcusklasson/GroceryStoreDataset/master/dataset/iconic-images-and-descriptions/"+directory+"/"+folder+"/"+name+"/"+name+"_Iconic.jpg";
    fw.write(name+"\t"+category+"\t"+image+"\n");
}

function writeInDocumentNoProductName(directory,folder){
    var name = folder;
    var category = "Grocery";
    var image = "https://github.com/marcusklasson/GroceryStoreDataset/blob/master/dataset/iconic-images-and-descriptions/"+directory+"/"+folder+"/"+folder+"_Iconic.jpg";
    fw.write(name+"\t"+category+"\t"+image+"\n");
}