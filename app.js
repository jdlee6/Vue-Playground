// Multiple Vue Instances
var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue app one'
  },
  methods: {

  },
  computed: {
    greet: function () {
      return 'Hello from app one';
    }
  }
})

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue app two'
  },
  methods: {
    changeTitle: function () {
      one.title = 'New title change!'
    }
  },
  computed: {
    greet: function () {
      return 'Hello from app two';
    }
  }
})

two.title = 'Change from outside!';