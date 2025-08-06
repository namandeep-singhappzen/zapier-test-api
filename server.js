// server.js
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json()); // For parsing application/json

// Test endpoint
app.post('/api/test-zapier', (req, res) => {
  const data = req.body;

  console.log('🔔 Received data from Zapier:', data);

  // Optional: Save to local file
  fs.appendFile('zapier_test_log.json', JSON.stringify(data, null, 2) + ',\n', err => {
    if (err) {
      console.error('❌ Failed to write to file:', err);
      return res.status(500).json({ error: 'Failed to log data' });
    }
    res.status(200).json({ message: '✅ Data received and logged' });
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Test server running at http://localhost:${PORT}`);
});
