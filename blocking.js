var fs = require('fs');

console.log('Start');

var files = fs.readdirSync('/tmp/tmp')

for (var i = 0; i < files.length; i++) {
    var file = files[i];
    fs.unlinkSync('/tmp/tmp/' + file);
    console.log('Deleted ' + file);
}

console.log('End');
