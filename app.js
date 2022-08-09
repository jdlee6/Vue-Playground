var one = new Vue({
  el: '#vue-app-one',
  data: {
    output: 'Your fav food'
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs.testRef.innerText);
      this.output = this.$refs.input.value;
    }
  },
  computed: {
  }
})

// var two = new Vue({
//   el: '#vue-app-two',
//   data: {

//   },
//   methods: {

//   },
//   computed: {

//   }
// })

// two.title = 'Change from outside!';