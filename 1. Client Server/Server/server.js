const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // Get ALL headers as an array
  const headers = req.headers;
  console.log('Headers:', headers);
  
  // Or get headers as an array of key-value pairs
  const headerArray = Object.entries(headers);
  console.log('Headers as array:', headerArray);
  
  res.send('Hello from express server!');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});