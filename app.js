// var data = {
//   name: 'Yoshi'
// }

Vue.component('greeting', {
  template: '<p>Hello there. This is {{ name }}. <button v-on:click="changeName">Change name</button></p>',
  data: function () {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function () {
      this.name = 'Mario';
    }
  }
})

var one = new Vue({
  el: '#vue-app-one',
  data: {
  },
  methods: {
  },
  computed: {
  }
})

var two = new Vue({
  el: '#vue-app-two',
  data: {

  },
  methods: {

  },
  computed: {

  }
})

two.title = 'Change from outside!';