const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
const port = process.env.PORT || 3000;
let fileSize;
let fileName;

app.use('/', express.static('./public'));

app.post('/', upload.single('somefile'), function(req, res, next) {
    fileName = req.file.originalname;
    fileSize = req.file.size;
    res.end()
    next();
})

app.get(/\/.*/, function(req, res, next) {
    
    //res.send('<p>The size of the file "' + fileName + '" is ' + fileSize + ' bytes</p>');
    res.send({
        "File name": fileName,
        "File size": fileSize + " bytes"
    })
})


app.listen(port);