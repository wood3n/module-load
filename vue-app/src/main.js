import Vue from 'vue'
import HUI from 'hui';
import 'hui/lib/hui.css';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(HUI);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app',
    render: h => h(App),
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;