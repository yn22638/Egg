'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.user.zhuce)
  router.post('/login',controller.user.login)
  router.post('/registereds',controller.user.create)
    
};
