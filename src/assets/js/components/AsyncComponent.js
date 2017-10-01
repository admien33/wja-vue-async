export default {
  template: `
  <div class="async-component">
    <h4>Async Component</h4>
    <input v-model="myMessage">
    <p> {{myMessage}}</p>
    <input v-model="asyncMessage">
    <p> {{asyncMessage}}</p>
    <p>size : {{size}} : {{normalizedSize}}</p>

    <span v-bind:title="myMessage">
      Hover your mouse over me
    </span>
    <div>
      <p>simple counter, global Component</p>
      <simple-counter></simple-counter>
      <simple-counter :initial-counter="1"></simple-counter>
      <simple-counter :initial-counter="2"></simple-counter>
    </div>
    
    <div>
      <p>todo-item, global Component</p>
      <ul>   
        <li is="todo-item"
        v-for="item in listItems"
        v-bind:todo="item"
        v-bind:key="item.id">
        </li>
      </ul>
  </div>`,
  props: [ 'myprop', 'myMessage', 'asyncMessage', 'listItems', 'size'],
  computed: {
    //intro immutable.js
    normalizedSize: function () {
      return this.size.trim().toLowerCase()
    }
  }
}
