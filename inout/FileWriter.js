fs = require('fs');

exports.write = function(product){
    fs.appendFile('GroceryStore.json', product, function (err) {
        if (err) return console.log(err);
      });
}