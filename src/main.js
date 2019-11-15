import Age from './age.js';
import Person from './person.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  console.log(new Age(22));
  var potato = new Person(100,[true,true,true]);
  potato.setExpectancy();
  console.log(potato);
}); // $(document).ready(function() {})
