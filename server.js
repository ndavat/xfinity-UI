const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample realistic data (could be replaced with real DB or external API later)
const sampleData = [
  { id: 1, name: 'Broadband Plan', speed: '100Mbps', price: 49.99 },
  { id: 2, name: 'Cable TV Package', channels: 150, price: 39.99 },
  { id: 3, name: 'Phone Service', minutes: 500, price: 19.99 }
];

// REST endpoint to fetch data
app.get('/api/data', (req, res) => {
  res.json({
    status: 'success',
    timestamp: new Date().toISOString(),
    data: sampleData
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});