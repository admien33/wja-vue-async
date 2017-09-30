import Vue from 'vue';

Vue.config.devtools = true;

// https://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/
Vue.component('async-component', (resolve) => {
  import('./components/AsyncComponent.js')
    .then((AsyncComponent) => {
      resolve(AsyncComponent.default);
    });
});

new Vue({ 
  el: '#container_posts' 
});




// import React, { Component } from 'react';
// import {render} from 'react-dom';

// import FilterableListPosts from './components/FilterableListPosts';


// function tick() {  
//   render(
//   	<div>
//     	<h2> Home page  , local time: {new Date().toLocaleTimeString()}.</h2>
//     </div>,
//     document.getElementById('root')
//   );
// }

// tick();
// setInterval(tick, 1000);

// render(
//   <FilterableListPosts />,
//   document.getElementById('container_posts')
// );




