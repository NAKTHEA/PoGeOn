require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const {
  mewUserController,
  getUserContoller,
  loginController,
} = require('./controllers/users');

const {
  getanonimosyregistrados,
  newanonimosyregistradoscontroller,
  getanonimosyregistrados,
  deleteanonimosyregistradoscontroller,
} = require ('./controladores/anonimos y registrados');


const app = express()

app.use(morgan('dev'))

//Rutas de usuarios 

app.post('/user', mewUserController);
app.get('/user/:id', getUserContoller);
app.post('login',loginController);

//Rutas de anonimos y registrados
app.get('/'getanonimosyregistrados);
app.post('/'newanonimosyregistrados);
app.get('/anonimosyregitrados/id, getanonimosyregistrados');
app.delete('anonimosyregistrados/id',deleteanonimosyregistradoscontroller);



// Middleware de 404
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found'
  })
})

//Midleware de gestión de errores

app.use((error, req, res, next) =>{
    console.error(error);

    res.status(error.httpStatus 500).send({
        status:'error',
        message:'error.message',
    });
});

//Lanzamos el servidor 
app.listen(3000, () => {
    console.log('Servidor funcionando! 👻');
  });
  