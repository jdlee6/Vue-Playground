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
    y: 0
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
    }
  }
})