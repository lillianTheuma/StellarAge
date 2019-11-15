import Age from './age.js';
import Person from './person.js';
import './styles.css';
import $ from 'jquery';


$(document).ready(function() {
  console.log(new Age(22));
  var potato = new Person(20,[true,true,false]);
  potato.setExpectancy();
  console.log(potato);
});
