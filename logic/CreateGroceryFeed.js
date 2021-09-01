var fr = require ("../inout/FolderReader")
var fw = require ("../inout/FileWriter")

exports.createFeed = function () {
    var firstLine = true;
    var directories = fr.getDirectories("resources/groceryStore")
    for(directory in directories){//[ 'Fruit', 'Packages', 'Vegetables' ]
        var folders = fr.getDirectories("resources/groceryStore/"+directories[directory]);
        for(folder in folders){//[ 'Apple', 'Avocado', 'Banana', ... ]
            var productNames = fr.getDirectories("resources/groceryStore/"+directories[directory]+"/"+folders[folder]);
            
            if(productNames.length >0){
            for(productName in productNames){//[ 'Golden-Delicious', 'Granny-Smith', 'Pink-Lady', ... ]
            writeInDocumentProductName(directories[directory],folders[folder],productNames[productName],firstLine);
            if(firstLine){
                firstLine=false;
            }
        }
        }//if
        else{
            writeInDocumentNoProductName(directories[directory],folders[folder],firstLine);
            if(firstLine){
                firstLine=false;
            }
        }
    }
    }
}

function writeInDocumentProductName(directory,folder,productName,firstLine){
    var name = productName;
    var category = "Grocery";
    var image = "https://raw.githubusercontent.com/marcusklasson/GroceryStoreDataset/master/dataset/iconic-images-and-descriptions/"+directory+"/"+folder+"/"+name+"/"+name+"_Iconic.jpg";
    if(firstLine){
        fw.write("{\nname:"+name+",\ncategory:"+category+",\nimage:"+image+"\n}");
    }else{
        fw.write(",\n{\nname:"+name+",\ncategory:"+category+",\nimage:"+image+"\n}");
    }
}

function writeInDocumentNoProductName(directory,folder,firstLine){
    var name = folder;
    var category = "Grocery";
    var image = "https://raw.githubusercontent.com/marcusklasson/GroceryStoreDataset/master/dataset/iconic-images-and-descriptions/"+directory+"/"+folder+"/"+folder+"_Iconic.jpg";
    if(firstLine){
        fw.write("{\nname:"+name+",\ncategory:"+category+",\nimage:"+image+"\n}");
    }else{
        fw.write(",\n{\nname:"+name+",\ncategory:"+category+",\nimage:"+image+"\n}");
    }
}