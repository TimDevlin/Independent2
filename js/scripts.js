$(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();

    var budget = parseInt($("input#budget").val());
    var howLong = $("select#weeks").val();
    var drink = $("select#drink").val();
    var beachMtn = $("input:radio[name=operator]:checked").val();
    var mostImpt = $("input:radio[name=value]:checked").val();


    if (budget) {
      if (budget < 500) {
        $("#stayCation").show();
      } else if (budget > 500 && (drink === "Champagne" || beachMtn === "beach")) {
        $("#treatYoself").show();
      } else if (howLong === "1-3days" || mostImpt === "Solitude") {
        $("#playCation").show();
      } else {
        $("#stayCation").show();
      }

    } else {
      $("#playCation").show();
    }
  });
});
