const formidable = require('formidable');

const database = require('../util/database');

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields) => {
        console.log('created item');

        database.addItem(fields);

        res.writeHead(301, {
            'Location': '/catalog'
        });
        res.end();
    });
};