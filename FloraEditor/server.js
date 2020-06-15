var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path = require('path');
var fs = require('fs');
var upload_file = require('./F/file_upload.js');
var upload_image = require('./F/image_upload.js');

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname+"/"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/",(req,res)=>{
  console.log(req.body.content);
});


// File POST handler.
app.post('/file_upload', function (req, res) {

  upload_file(req, function(err, data) {

    if (err) {
      return res.status(404).end(JSON.stringify(err));
    }
    res.send(data);
  });
});

// Image POST handler.
app.post('/image_upload', function (req, res) {

  upload_image(req, function(err, data) {

    if (err) {
      return res.status(404).end(JSON.stringify(err));
    }
    res.send(data);
  });
});


// Create folder for uploading files.
var filesDir = path.join(path.dirname(require.main.filename),'public', 'uploads');
if (!fs.existsSync(filesDir)){
    fs.mkdirSync(filesDir);
}

// Init server.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
