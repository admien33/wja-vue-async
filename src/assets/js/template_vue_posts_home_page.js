import Vue from 'vue';

import ApiUsers from './components/api/users';
import ApiPosts from './components/api/posts';
import DataTable from './components/DataTable';

Vue.config.devtools = true;

// https://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/
Vue.component('async-component', (resolve) => {
  import('./components/AsyncComponent.js')
  .then((AsyncComponent) => {
    resolve(AsyncComponent.default);
  });
});

//global component
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  props: ['initialCounter'],
  data: function () {
    return { counter: (this.initialCounter>0)? this.initialCounter:0 }
  } 
})
//local component
var Child = {
  props: ['myMessage'],
  template: `<div>${new Date().toLocaleTimeString()} - A local component on parent template only! {{myMessage}}! </div>`
}






new Vue({ 
  el: '#container_posts',
  data: {
    message: 'Hey from parent! (common) ',
    asyncmessage: 'Hey from parent! (async) ',
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  },
  components: {
    // <my-component> will only be available in parent's template hmtl
    'my-component': Child
  }
});





var app_users = new Vue({
  el: '#app_users',
  name: 'Data Driven',
  components: {
    DataTable
  },
  data: function() {
    return {
      data: [],
      loading: true,
      columns: ['id','name','username', 'email', 'phone', 'website']
    };
  },
  created: function() {
    ApiUsers.getUsers().then(response => {
      this.loading = false;
      this.data = response.data;
    }, error => {
      this.loading = false;
      console.error(error);
    });
  },
  methods: {
    clickRow(el) {
      console.log(`You clicked row ${el.target.parentElement.id}!`);
    }
  }
})





var app_posts = new Vue({
  el: '#app_posts',
  data: function() {
    return {
      message: 'Hello Vue! ',
      parentMsg: 'Hello from parent',
      date_msg: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ],
      posts: [],
      loading: true
    }    
  },
  created: function() {
    ApiPosts.getPosts().then(response => {
      this.loading = false;
      this.posts = response.data;
    }, error => {
      this.loading = false;
      console.error(error);
    });
  },
  components: {
    // <my-component> will only be available in parent's template hmtl
    'my-componentbis': Child
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
      console.log(this.$el.textContent) // => 'pas mis à jour'
      this.$nextTick(function () {
        console.log('next tick:'+this.$el.textContent) // => 'mis à jour'
      })
    }
  }
})