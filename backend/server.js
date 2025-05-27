const express = require('express');
const app = express();
const PORT = 5000;
app.get('/', (req, res) => res.send('Abandoned Properties API'));
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
