const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const parseJson = bodyParser.json({ limit: '50mb', extended: true });

// routes
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => parseJson(req, res, next));

app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
  res.sendFile('/index.js');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
