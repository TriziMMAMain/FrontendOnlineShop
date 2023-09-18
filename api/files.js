const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filesPath = path.join(process.cwd(), '/');
    fs.readdir(filesPath, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json(files);
    });
};