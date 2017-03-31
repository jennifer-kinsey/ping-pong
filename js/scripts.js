 // *********************BUSINESS LOGIC*************************
    //make an an array out of the numbers

    var resultArray = [];
    var pingNum = 3;
    var pongNum = 5;
    var pingPongNum = 15;
    var pingWord = "ping";
    var pongWord = "pong";
    var pingPongWord = pingWord + "-" + pongWord;

    var makeArray = function(input){
      for(var i = 0; i <= input; i++){
        resultArray.push(i);
      }
      pingIt(resultArray);
    }

    var pingIt = function(resultArray){
      for(var i = 0; i < resultArray.length; i++){
        if(i  % pingNum === 0){
          resultArray[i] = pingWord;
        }
      }
      pongIt(resultArray);
    }

    var pongIt = function(resultArray){
      for(var i = 0; i < resultArray.length; i++){
        if(i  % pongNum === 0){
          resultArray[i] = pongWord;
        }
      }
      pingPongIt(resultArray);
    }

    var pingPongIt = function(resultArray){
      for(var i = 0; i < resultArray.length; i++){
        if(i  % pingPongNum === 0){
          resultArray[i] = pingPongWord;
        }
      }
      resultArray = resultArray.shift();
      return resultArray;
    }





  // *********************FRONT END LOGIC*************************
  $(function() {

    //submit form function
    $("form#submit-button").submit(function(event) {
      event.preventDefault();
      alert("here");
      var userInput = $("#userInput").val();


      if(userInput.match(/\D/) || userInput===""){
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

    //change words button function
    $("#change").click(function(){
      $("#main").hide();
      $("#secondary").show();
    });

    //change of rules handler
    $("#ping").change(function(){
      pingNum = parseInt($("#ping").val());
      pingPongNum = pingNum*pongNum;
      $("#ping-pong-number").text(pingPongNum);
    });

    //change of rules handler
    $("#pong").change(function(){
      pongNum = parseInt($("#pong").val());
      pingPongNum = pingNum*pongNum;
      $("#ping-pong-number").text(pingPongNum);
    });

    //change ping word

    //change pong word


  });
