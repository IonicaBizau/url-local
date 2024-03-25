const isLocal = require("../lib");

console.log(isLocal("path/to/some/file"));
// true

console.log(isLocal("file://path/to/some/file"));
// true

console.log(isLocal("http://ionicabizau.net"));
// false

console.log(isLocal("C:\\Users\\IonicaBizau\\Desktop"));
// true
