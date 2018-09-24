const express = require('express');
const conformance = require('./resources/conformance')
const app = express();
const port = 3000;


// Conformance Statement
const conformanceStatement = conformance.getConformanceStatement();

app.get('/metadata', (req, res) => res.send(conformanceStatement));


app.listen(port, () => console.log(`Test Server is listening on port ${port}!`));
