var fs = require('fs');

console.log('Start');

fs.readdir('/tmp/tmp', function(err, files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        fs.unlink('/tmp/tmp/' + file, function(err) {
            if (err) throw err;
            console.log('Deleted ' + file);
        });
    }
});

console.log('End');
