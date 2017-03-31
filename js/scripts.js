 // *********************BUSINESS LOGIC*************************
    //make an an array out of the numbers

    var resultArray = [];

    var makeArray = function(input){
      for(var i = 0; i <= input; i++){
        resultArray.push(i);
      }
      return resultArray;
    }

    var replaceThird



  // *********************FRONT END LOGIC*************************
  $(function() {

    //submit form function
    $("form").submit(function(e) {
      e.preventDefault();
      var userInput = parseInt($("#userInput").val());

      makeArray(userInput);
      console.log(resultArray);

      $("form").hide();
      $("#result").show();
    });


    //reload button function
    $("#reload").click(function(){
      location.reload();
    });


  });
