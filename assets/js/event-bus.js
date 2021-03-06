import Vue from 'vue'

export default new (class {
  constructor() {
    this.vue = new Vue()
  }

  dispatch(event, data = null) {
    this.vue.$emit(event, data)
  }

  listen(event, callback) {
    this.vue.$on(event, callback)
  }
})()
