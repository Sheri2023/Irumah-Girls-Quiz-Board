// Front-end logic
var score = 0;
var answer = ["A", "B", "C", "D"];
var point = 5;
function merit() {
  var percentage = score / 25 * 100;
  $("#percentage").text("Your percentage is " + percentage + "%");
  if (percentage >= 80) {
    $("#remark").text("You have Excellently passed!");
  } else if (percentage >= 50) {
    $("#remark").text("You have fairly passed!");
  } else {
    $("#remark").text("You have scored poorly. You need to retake the test!");
  }
  // back end logic
  $("button#submit").click(function(event) {
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q3]:checked").val();
    var q4 = $("input:radio[name=q4]:checked").val();
    var q5 = $("input:radio[name=q5]:checked").val();
    if (q1 === undefined || q2 === undefined || q3 === undefined || q4 === undefined || q5 === undefined) {
      alert("answer all the questions");
    } else {
      if (q1 === answer[1]) {
        score += point;
      }
      if (q2 === answer[0]) {
        score += point;
      }
      if (q3 === answer[1]) {
        score += point;
      }
      if (q4 === answer[1]) {
        score += point;
      }
      if (q5 === answer[2]) {
        score += point;
      }
      $("#results").text("Your score is " + score + " ");
    }
    merit(score);
    event.preventDefault();
    $(".ques").hide();
    $(".total").show();
  });
  $("#retake").click(function() {
    $(".ques").show();
    $(".total").hide()
  });
};
