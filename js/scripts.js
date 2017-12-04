$(document).ready(function(){
  var btn1clicked = false;
  var btn2clicked = false;

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

  $("#btn2a").click(function(){
     for(i=1; i<=9; i++ ){
       $("#alg2in" + i).val(Math.floor(Math.random() * 10));
     }
  });

  var btn2clicked = false;

  $("form#alg2").submit(function(event){
    event.preventDefault();

    if (btn2clicked == false) {
      var sum1 = parseInt($("#alg2in1").val()) + parseInt($("#alg2in5").val()) + parseInt($("#alg2in9").val());
      var sum2 = parseInt($("#alg2in3").val()) + parseInt($("#alg2in5").val()) + parseInt($("#alg2in7").val());
      if (sum1 && sum2){
        var result = sum1 - sum2;
        if (result < 0) {
          result = result * -1
        }
        $("#alg2output").html("Diagonal Difference: " + result);
        $("#alg2output").slideToggle();
        $("#btn2b").html("Hide Solution");
        $("#btn2b").attr('class', 'btn-danger');
        btn2clicked = true;
      }
    } else if (btn2clicked == true) {
       $("#alg2output").slideToggle();
       $("#btn2b").html("New Calculation");
       $("#btn2b").attr('class', 'btn-primary');
       btn2clicked = false;
    }
  });
 });
