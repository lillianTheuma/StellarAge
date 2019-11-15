import Person from './person.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $("#ageForm").submit(function(event) {
    event.preventDefault();
    const age = $("#ageSection").val();
    let user = new Person(age, []);
    console.log(user);
    $("#enterAge").toggle();
    $("#resultPage").toggle();

    $("$mercuryAge").text(parseInt(user.age.mercuryAge));
    $("$mercuryLife").text(parseInt(user.lifeExpectancy.mercuryAge));
    $("$mercuryRemaining").text(parseInt(user.toLive.mercuryAge));
  })

  // console.log(new Age(22));
  // var potato = new Person(100,[true,true,true]);
  // potato.setExpectancy();
  // console.log(potato);
}); // $(document).ready(function() {})
