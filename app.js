
const express = require('express');
const app = express();

app.use(express.static(__dirname));
var port = process.env.PORT || 3000;
app.listen(port);
