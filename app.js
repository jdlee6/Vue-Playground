new Vue({
  // which elements this instance will control
  el: '#vue-app',
  // passes it to the html and the html consumes it with {{ name }}
  data: {
    name: "Joe",
    job: "SWE",
    website: "https://www.imjoelee.com",
    websiteTag: `<a href="https://www.imjoelee.com">Website</a>`
  },

  methods: {
    greet: function (time) {
      // this // refers to this Vue instance
      return 'Good ' + time + ' ' + this.name;
    }
  }
})