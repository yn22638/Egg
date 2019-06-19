'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.log.zhuce)
  router.post('/login',controller.log.login)
  router.post('/registereds',controller.log.create)
    
};
