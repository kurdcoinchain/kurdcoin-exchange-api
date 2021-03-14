const { historyGenerator } = require('./functions/history');
const fs = require('fs');
const _ = require('lodash');
const mkdirp = require('mkdirp');

historyGenerator()
    .then(files => {
        _.each(files, (contents, filename) => {
            mkdirp.sync('./output/v1/history');
            fs.writeFileSync('./output/' + filename, contents, 'utf8');
        })
    });
