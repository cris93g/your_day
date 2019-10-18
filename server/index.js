const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
