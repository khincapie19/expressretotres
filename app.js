const express = require('express');
const app = express();

app.get('/', (req,res) => {
//  let name = req.query.name || "desconocido"; // opcion 1
  let name = Object.keys(req.query).length ? req.query.nombre : 'desconocido'; // opciòn II
  res.send(`<h1>Hola ${name}!</h1>`);
});
app.listen(3000, () => console.log('Listening on port 3000!'));
