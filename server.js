const express = require('express');
const app = express();

app.get('/holi', (req, res) => {
  res.send('Hola mundo!');
});

app.post('/create-user', (req, res) => {
    if (!req.body) {
        console.log(req);
      return res.status(400).send('No user data provided in the request');
    }
  
    const user = req.body;
  
    if (!user.name || !user.email) {
      return res.status(400).send('Missing required fields: name or email');
    }
  
    res.status(201).send('Usuario creado');
  });
  
  

app.post('/users', (req, res) => {
    const newUser = req.body;

    users.push(newUser);
  
    res.status(201).send(newUser);
  });
  

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});