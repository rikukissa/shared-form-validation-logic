var http = require('superagent');
var validator = require('./modules/validator.js');

function sendData(data) {
  return http
    .post('/person')
    .send(data).end(function() {
      console.log('end');
    });
}

function updateInput(input, isValid) {
  input.classList.toggle('invalid', !isValid);
  input.classList.toggle('valid', isValid);
}

var ageInput = document.getElementById('age-input');

document
.getElementById('form')
.addEventListener('submit', function(event) {
  event.preventDefault();

  var formData = {
    age: window.parseInt(ageInput.value)
  };

  var isValid = validator(formData);

  updateInput(ageInput, isValid);

  if(isValid) {
    sendData(formData);
  }
});
