import Vue from 'vue';

Vue.config.devtools = true;

// https://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/
Vue.component('root-component', (resolve) => {
  import('./components/RootComponent.js')
    .then((RootComponent) => {
      resolve(RootComponent.default);
    });
});

new Vue({ 
  el: '#root' 
});

