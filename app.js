new Vue({
  // which elements this instance will control
  el: '#vue-app',
  // passes it to the html and the html consumes it with {{ name }}
  data: {
    name: "Joe",
    job: "SWE",
    age: 25,
    website: "https://www.imjoelee.com",
    websiteTag: `<a href="https://www.imjoelee.com">Website</a>`,
    x: 0,
    y: 0,
    a: 2,
    b: 3
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
    }
  }
})