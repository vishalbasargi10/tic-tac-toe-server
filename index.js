const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let scores = { X: 0, O: 0 };

app.get('/', (req, res) => {
  res.send("Hello");
});
app.get('/api/scores', (req, res) => {
  res.json(scores);
});

app.post('/api/update-score', (req, res) => {
  const { winner } = req.body;
  if (winner && scores[winner] !== undefined) {
    scores[winner] += 1;
  }
  res.json(scores);
});

app.listen(5000, '0.0.0.0', () => console.log("Server running on port 5000"));

