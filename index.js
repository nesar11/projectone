const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users', (req, res) => {
  const users = ['User1', 'User2', 'User3'];
  res.json(users);
});
app.get('/books', (req, res) => {
  const users = ['Book1', 'Book2', 'Book3'];
  res.json(users);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
