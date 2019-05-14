const express = require('express');
const path = require('path');
const app = express();

const pathToBuildFolder = path.join(__dirname, 'build');
const pathToIndexHtml = path.join(pathToBuildFolder, 'index.html');

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') res.redirect(`https://${req.header('host')}${req.url}`);
    else next();
  });
}
app.use(express.static(pathToBuildFolder));

app.get('/', (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.listen(process.env.PORT || 3000);
