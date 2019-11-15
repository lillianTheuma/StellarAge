import Person from './person.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $("#ageForm").submit(function(event) {
    const planets = ["mercury", "venus", "mars", "jupiter"];

    event.preventDefault();
    const age = $("#ageSection").val();
    let user = new Person(age, []);
    user.setExpectancy();

    $("#enterAge").toggle();
    $("#resultPage").toggle();
    planets.forEach(function(planet, i) {
      const ages = [user.age.mercuryAge, user.age.venusAge, user.age.marsAge, user.age.jupiterAge];
      const expect = [user.lifeExpectancy.mercuryAge, user.lifeExpectancy.venusAge, user.lifeExpectancy.marsAge, user.lifeExpectancy.jupiterAge];
      const remaining = [user.toLive.mercuryAge, user.toLive.venusAge, user.toLive.marsAge, user.toLive.jupiterAge];

      $("#"+planet+"Age").html(parseInt(ages[i]));
      $("#"+planet+"Life").html(parseInt(expect[i]));
      $("#"+planet+"Remaining").html(parseInt(remaining[i]));
    });
  });
}); // $(document).ready(function() {})
