import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import theme from 'muse-ui/lib/theme';
import * as colors from 'muse-ui/lib/theme/colors';

theme.add('the-blues', {
  primary: '#607d8b',
  secondary: '#37474f',
  success: '#00695c',
  warning: '#fff59d',
  error: '8b0000',
}, 'dark');

theme.use('the-blues');

Vue.use(MuseUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
