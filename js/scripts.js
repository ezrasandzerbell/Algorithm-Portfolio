$(document).ready(function(){
  var btn1clicked = false;
  var btn2clicked = false;

// getValues function accelerates the value retrieval proccess

  function getValues(algid){
    var i = 1;
    var inputValues = [];
    while ($("#alg" + algid + "in" + i).val()) {
      inputValues.push($("#alg" + algid + "in" + i).val());
      i++
    }
    return inputValues
  }

// algorithm #1

  $("form#alg1").submit(function(event){
    event.preventDefault();
    if (btn1clicked == false) {
      var allValues = getValues(1)
      var sum = parseInt(allValues[0]) + parseInt(allValues[1]) + parseInt(allValues[2])
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

// algorithm #2

  // Generate nine numbers at random
  $("#btn2a").click(function(){
     for(i=1; i<=9; i++ ){
       $("#alg2in" + i).val(Math.floor(Math.random() * 10));
     }
  });

  var btn2clicked = false;

  $("form#alg2").submit(function(event){
    event.preventDefault();
    var allValues = getValues(2)
    if (btn2clicked == false) {
      var sum1 = parseInt(allValues[0]) + parseInt(allValues[4]) + parseInt(allValues[8]) ;
      var sum2 = parseInt(allValues[2]) +parseInt(allValues[4]) +parseInt(allValues[6]);
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
