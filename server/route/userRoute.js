const route = require('express').Router();
const userCtrl = require('../controller/userCtrl')

route.post(`/login`, userCtrl.login)
route.post(`/register`,userCtrl.register)
route.get(`/logout`, userCtrl.logout)

module.exports = route;