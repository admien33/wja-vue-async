import Vue from 'vue';

import ApiUsers from './components/api/users';
import ApiPosts from './components/api/posts';
import DataTable from './components/DataTable';

var _debounce = require('lodash.debounce');
var _shuffle = require('lodash.shuffle');

import axios from 'axios';

Vue.config.devtools = true;


Vue.directive('focus', {
  // Quand l'élément lié est inséré dans le DOM...
  inserted: function (el) {
    // L'élément prend le focus
    el.focus()
  }
})

// Vue.component('render-elt', {
//   render: function(createElement) {
//     return createElement(
//       'anchored-heading', {
//       props: {
//         level: 1
//       }
//     }, [
//     createElement('span', 'Hello'),
//       ' world!'
//       ]
//       )

//   }
// })

Vue.component('anchering-heading', {
  functional: true,
  render: function(createElement, context){
    return createElement(
      'h'+context.props.level,
      context.children
    )
  },
  // render: function(createElement){
  //   return createElement(
  //     'h'+this.level,
  //     this.$slots.default
  //   )
  // },
  props: {
    level: {
      type: Number,
      require: true
    }
  }
})


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
      columns: ['id','name','username', 'email', 'phone', 'website'],
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10
      
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
  watch: {
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    clickRow(el) {
      console.log(`You clicked row ${el.target.parentElement.id}!`);
    },
    getAnswer : _debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = response.data.answer
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    ),
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = _shuffle(this.items)
    }
  },

})


// // https://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/
// Vue.component('async-component', (resolve) => {
//   import('./components/AsyncComponent.js')
//   .then((AsyncComponent) => {
//     resolve(AsyncComponent.default);
//   });
// });

// //global component
// Vue.component('todo-item', {
//   props: ['todo'],
//   template: '<li>{{ todo.text }}</li>'
// })
// Vue.component('simple-counter', {
//   template: '<button v-on:click="counter += 1">{{ counter }}</button>',
//   props: ['initialCounter'],
//   data: function () {
//     return { counter: (this.initialCounter>0)? this.initialCounter:0 }
//   } 
// })
// //local component
// var Child = {
//   props: ['myMessage'],
//   template: `<div>${new Date().toLocaleTimeString()} - A local component on parent template only! {{myMessage}}! </div>`
// }






// new Vue({ 
//   el: '#container_posts',
//   data: {
//     message: 'Hey from parent! (common) ',
//     asyncmessage: 'Hey from parent! (async) ',
//     groceryList: [
//       { id: 0, text: 'Vegetables' },
//       { id: 1, text: 'Cheese' },
//       { id: 2, text: 'Whatever else humans are supposed to eat' }
//     ]
//   },
//   components: {
//     // <my-component> will only be available in parent's template hmtl
//     'my-component': Child
//   }
// });










// var app_posts = new Vue({
//   el: '#app_posts',
//   data: function() {
//     return {
//       message: 'Hello Vue! ',
//       parentMsg: 'Hello from parent',
//       date_msg: 'You loaded this page on ' + new Date().toLocaleString(),
//       seen: true,
//       groceryList: [
//         { id: 0, text: 'Vegetables' },
//         { id: 1, text: 'Cheese' },
//         { id: 2, text: 'Whatever else humans are supposed to eat' }
//       ],
//       posts: [],
//       loading: true,
//       show: true
//     }    
//   },
//   created: function() {
//     ApiPosts.getPosts().then(response => {
//       this.loading = false;
//       this.posts = response.data;
//     }, error => {
//       this.loading = false;
//       console.error(error);
//     });
//   },
//   components: {
//     // <my-component> will only be available in parent's template hmtl
//     'my-componentbis': Child
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//       console.log(this.$el.textContent) // => 'pas mis à jour'
//       this.$nextTick(function () {
//         console.log('next tick:'+this.$el.textContent) // => 'mis à jour'
//       })
//     }
//   }
// })