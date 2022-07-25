const fs = require("fs");

module.exports = function foo(dirName, extension, callback) {
  /* ... */
  const filesList = fs.readdir(dirName, function (err, data) {
    if (err) return callback(err);
    return callback(
      null,
      data.filter((file) => file.split(".")[1] === extension)
    );
  });
};
