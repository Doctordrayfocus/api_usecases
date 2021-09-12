import AppLayout from './layouts/AppLayout.vue'
import { createApp } from 'vue'
import App from './app.vue'
import { ApiMixin } from './plugins/mixins';

const init = async() => {
  const module = await import('./router');
  const router = await module.default;
  createApp({
    components: {
        App,
    },
})
  .component('AppLayout', AppLayout)
  .mixin(ApiMixin)
  .use(router)
  .mount('#app')
}

init()