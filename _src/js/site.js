var React = require('react');
var ReactDOM = require('react-dom');

if(document.getElementById('year')) {
  var ThisYear = require('./components/this-year');
  ReactDOM.render(<ThisYear />, document.getElementById('year'));
}

if(document.getElementById('colophon-link')) {
  var ColophonLink = require('./components/colophon-link');
  ReactDOM.render(<ColophonLink />, document.getElementById('colophon-link'));
}

if(document.getElementById('contact-form')) {
  var ContactForm = require('./components/contact-form');
  ReactDOM.render(<ContactForm />, document.getElementById('contact-form'));
}

if(document.getElementById('contact-trigger')) {
  var ContactFormTrigger = require('./components/contact-form-trigger');
  ReactDOM.render(<ContactFormTrigger />, document.getElementById('contact-trigger'));
}

if(document.querySelector('.work-medias')) {
  var WorkItemList = require('./components/work-item-list');
  var workData = JSON.parse(document.querySelector('#work-data').textContent);

  ReactDOM.render(<WorkItemList data={workData} />, document.querySelector('.work-medias'));
}

var Modal = require('./components/modal');

var modalContainer = document.createElement('div');
document.body.appendChild(modalContainer);
ReactDOM.render(<Modal />, modalContainer);

if(window.innerHeight < 600 || document.body.clientHeight + 120 > window.innerHeight) {
  document.body.classList.remove('fixed-footer');
}
