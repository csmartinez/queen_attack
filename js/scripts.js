var queenAttack = function(queen_position, attack_square) {
    if ((queen_position[0] === attack_square[0] || queen_position[1] === attack_square[1])) {
      return true;
    } else if (Math.abs(attack_square[0] - queen_position[0]) === Math.abs(attack_square[1] - queen_position[1])) {
      return true;
    } else {
      return false;
    }
  }

$(document).ready(function() {
  $("form#queen-attack").submit(function(event) {
      queen_position = [];
      attack_square = [];
      var queen_x = parseInt($("input#queen_x").val());
      var queen_y = parseInt($("input#queen_y").val());
      var attack_x = parseInt($("input#attack_x").val());
      var attack_y = parseInt($("input#attack_y").val());
      queen_position.push(queen_x);
      queen_position.push(queen_y);
      attack_square.push(attack_x);
      attack_square.push(attack_y);
      var result = queenAttack(queen_position, attack_square);

      $(".queen_attack").text();
      if(!result) {
        $('.not').text("not").show();
      } else {
        $(".not").hide();
      }

      $("#result").show();
      event.preventDefault();
  });
});
