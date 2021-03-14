import Vue from "vue"

Vue.filter("pretty", function(value) {
  console.log(value)
  if(value == {}) {
    return value;
  }
  return JSON.stringify(JSON.parse(value), null, 2);
});