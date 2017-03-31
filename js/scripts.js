 // *********************BUSINESS LOGIC*************************
    //make an an array out of the numbers

    var resultArray = [];

    var makeArray = function(input){
      for(var i = 0; i <= input; i++){
        resultArray.push(i);
      }
      pingIt(resultArray);
    }

    var pingIt = function(resultArray){
      for(var i = 0; i < resultArray.length; i++){
        if(i  % 3 === 0){
          resultArray[i] = "ping";
        }
      }
      pongIt(resultArray);
    }

    var pongIt = function(resultArray){
      for(var i = 0; i < resultArray.length; i++){
        if(i  % 5 === 0){
          resultArray[i] = "pong";
        }
      }
      pingPongIt(resultArray);
    }

    var pingPongIt = function(resultArray){
      for(var i = 0; i < resultArray.length; i++){
        if(i  % 15 === 0){
          resultArray[i] = "ping-pong";
        }
      }
      resultArray = resultArray.shift();
      return resultArray;
    }





  // *********************FRONT END LOGIC*************************
  $(function() {

    //submit form function
    $("form").submit(function(e) {
      e.preventDefault();
      var userInput = $("#userInput").val();

      if(userInput.match(/\D/)){
        $(".alert").append("Please try again and enter in only a numerical value.")
        $("#ping-pong-container").hide();
      }else{
        makeArray(parseInt(userInput));
      }

      for(var i = 0; i < resultArray.length; i++){
        resultArray[i] = "<li>" + resultArray[i] + "</li>"
      }

      $("#ping-pong-result").append(resultArray);

      $("form").hide();
      $("#resultsContainer").show();
    });


    //reload button function
    $("#reload").click(function(){
      location.reload();
    });


  });
