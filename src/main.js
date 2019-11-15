import Person from './person.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $("#ageForm").submit(function(event) {
    const planets = [mercury, venus, mars, jupiter];

    event.preventDefault();
    const age = $("#ageSection").val();
    let user = new Person(age, []);
    user.setExpectancy();

    $("#enterAge").toggle();
    $("#resultPage").toggle();

    $("#mercuryAge").html(parseInt(user.age.mercuryAge));
    $("#mercuryLife").html(parseInt(user.lifeExpectancy.mercuryAge));
    $("#mercuryRemaining").html(parseInt(user.toLive.mercuryAge));


  });

  // console.log(new Age(22));
  // var potato = new Person(100,[true,true,true]);
  // potato.setExpectancy();
  // console.log(potato);
}); // $(document).ready(function() {})
