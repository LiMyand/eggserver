module.exports = (app) => {
    const { router, controller } = app
    // 注册
    router.post('/user/reg', controller.user.reg)
  }
  