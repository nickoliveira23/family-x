const express = require('express');

const UserController = require('./controllers/UserController')
const MemberController = require('./controllers/MemberController')
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const AddressController = require('./controllers/AddressController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/profile', ProfileController.index);

routes.get('/members', MemberController.index);
/* routes.get('/members/:id', MemberController.indexById); */
routes.post('/members', MemberController.create);
routes.delete('/members/:id', MemberController.delete);
routes.put('/members/:id', MemberController.update);

routes.get('/address', AddressController.index);
routes.post('/address', AddressController.create);
routes.delete('/address/:id_member', AddressController.delete);





module.exports = routes;