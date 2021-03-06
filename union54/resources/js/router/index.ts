import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export default Promise.all(routes).then(routes => {
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  router.beforeEach((to, from, next) => {
    if (!to.meta.middlewares) {
      return next()
    }
    const middlewares: any = to.meta.middlewares
    Object.keys(middlewares).forEach(middleware => {
      middlewares[middleware]({ to, from, next })
    })
    return next()
  })

  return router
})