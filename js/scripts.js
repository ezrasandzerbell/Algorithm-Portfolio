$(document).ready(function(){
  var btn1clicked = false;
  $("form#alg1").submit(function(event){
    event.preventDefault();
    if (btn1clicked == false) {
      var in1 = $("#alg1in1").val();
      var in2 = $("#alg1in2").val();
      var in3 = $("#alg1in3").val();
      var sum = parseInt(in1) + parseInt(in2) + parseInt(in3)
      if (sum){
        $("#alg1output").html("Sum Total: " + sum);
        $("#alg1output").slideToggle();
        $("#btn1").html("Hide Solution");
        $("#btn1").attr('class', 'btn-danger');
        btn1clicked = true;
      }
   } else if (btn1clicked == true) {
     $("#alg1output").slideToggle();
     $("#btn1").html("New Calculation");
     $("#btn1").attr('class', 'btn-primary');
     btn1clicked = false;
   }

 });

});
