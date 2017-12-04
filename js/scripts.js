$(document).ready(function(){
  var btn1clicked = false;
  var btn2clicked = false;
  var btn3clicked = false;

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

// algorithm 3


// algorithm #2

  // Generate nine numbers at random
  $("#btn3a").click(function(){
     for(i=1; i<=9; i++ ){
       $("#alg3in" + i).val(
         (Math.floor(Math.random() * 10)) - Math.floor(Math.random() * 10)
       );
     }
  });

  $("form#alg3").submit(function(event){
    event.preventDefault();
    var allValues = getValues(3)
    var numberOfInputs = allValues.length
    var pos = 0;
    var neg = 0;
    var zero = 0;
    var posnegzeroOutput = [];
    if (btn3clicked == false && allValues.length != 0) {

      $.each(allValues, function(i,l){
        if (l > 0){
          pos++
        } else if (l < 0){
          neg++
        } else if (l == 0) {
          zero++
        }
      });
      posnegzeroOutput.push(

        (pos * 100 / (numberOfInputs )).toFixed(2),
        (neg * 100 / (numberOfInputs )).toFixed(2),
        (zero * 100 / (numberOfInputs )).toFixed(2)
      );
      console.log(posnegzeroOutput);

      if (posnegzeroOutput){


        $("#alg3output").html("Positive: " + posnegzeroOutput[0] + "%, " + "Negative: " + posnegzeroOutput[1] + "%, " + "Zero: " + posnegzeroOutput[2] + "%, " + '<div id="chartContainer" style="height: 200px; width: 200px;"></div>');
        var chart = new CanvasJS.Chart("chartContainer", {
        	animationEnabled: true,
        	title: {
        		text: ""
        	},
        	data: [{
        		type: "pie",
        		startAngle: 240,
        		yValueFormatString: "##0.00\"%\"",
        		indexLabel: "{label} {y}",
        		dataPoints: [
        			{y: posnegzeroOutput[0], label: "Positive"},
        			{y: posnegzeroOutput[1], label: "Negative"},
        			{y: posnegzeroOutput[2], label: "Zero"}
        		]
        	}]
        });
        chart.render();

        $("#alg3output").slideToggle();
        $("#btn3b").html("Hide Solution");
        $("#btn3b").attr('class', 'btn-danger');
        btn3clicked = true;
      }
    } else if (btn3clicked == true) {
       $("#alg3output").slideToggle();
       $("#btn3b").html("New Calculation");
       $("#btn3b").attr('class', 'btn-primary');
       btn3clicked = false;
    }
   });
 });
