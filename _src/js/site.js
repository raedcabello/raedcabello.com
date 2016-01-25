var React = require('react');
var ReactDOM = require('react-dom');

if(document.getElementById('year')) {
  var ThisYear = require('./components/this-year');
  ReactDOM.render(<ThisYear />, document.getElementById('year'));
}

if(document.getElementById('contact-form')) {
  var ContactForm = require('./components/contact-form');
  ReactDOM.render(<ContactForm />, document.getElementById('contact-form'));
}

if(document.querySelector('.work-medias')) {
  var WorkItemList = require('./components/work-item-list');
  var workData = JSON.parse(document.querySelector('#work-data').textContent);

  ReactDOM.render(<WorkItemList data={workData} />, document.querySelector('.work-medias'));
}


if(document.body.clientHeight > window.innerHeight) {
  document.body.classList.remove('fixed-footer');
}
