exports.getDirectories = function(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }

  exports.getFileNames = function(path){
    return fs.readdirSync(path);
  }