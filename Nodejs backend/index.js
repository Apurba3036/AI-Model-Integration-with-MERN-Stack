const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json()); 


app.post('/predict', async (req, res) => {
    try {
        const inputData = req.body.data; 
        const response = await axios.post('http://127.0.0.1:5000/predict', { data: inputData });
        res.json(response.data); 
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error predicting data' });
    }
});

// Start the Node.js server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Node.js server is running on http://localhost:${PORT}`);
});
