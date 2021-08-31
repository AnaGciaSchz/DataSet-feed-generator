fs = require('fs');

exports.write = function(product){
    fs.appendFile('Feed.txt', product, function (err) {
        if (err) return console.log(err);
      });
}