new Vue({
  el: '#validator',
  data: {
    input: null,
    result: null,
  },
  methods: {
    validate: function() {
      this.result = recursiveValidate(this.input);
    }
  }
})

function recursiveValidate(input) {
  let result = input;

  result = removeScript(result);
  result = truncate(result);
  result = removeQuotes(result);

  return result == input ? urldecode(result) : recursiveValidate(urldecode(result));
}

function removeScript(input) {
  return input.replace(/<script>/g,'');
}

function truncate(input) {
  return input.substring(0,50);
}

function removeQuotes(input) {
  return input.replace(/\"/g, '');
}

function urldecode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}
