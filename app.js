new Vue({
  el: '#vue-app',
  data: {
    job: "SWE",
    age: 25,
    website: "https://www.imjoelee.com",
    websiteTag: `<a href="https://www.imjoelee.com">Website</a>`,
    x: 0,
    y: 0,
    a: 2,
    b: 3,

    // dynamic css   
    available: false,
    nearby: false,

    // conditionals
    error: false,
    success: false,

    // looping
    name: "Joe",
    characters: ['Mario', 'Luigi', 'Yoshi', 'Browser'],
    ninjas: [
      { name: 'Ryu', age: 25 },
      { name: 'Yoshi', age: 35 },
      { name: 'Ken', age: 65 },
    ]
  },
  methods: {
    greet: function (time) {
      // this // refers to this Vue instance
      return 'Good ' + time + ' ' + this.name;
    },
    add: function (age) {
      this.age += age
    },
    subtract: function (age) {
      this.age -= age
    },
    updateXY: function (event) {
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert('You clicked a bogus link!');
    },
    logName: function () {
      console.log('you entered your name');
    },
    logAge: function () {
      console.log('you entered your age');
    },
  },
  computed: {
    addToA: function () {
      console.log('addToA called');
      return this.a + this.age;
    },
    addToB: function () {
      console.log('addToB called');
      return this.b + this.age;
    },
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})