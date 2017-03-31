 // *********************BUSINESS LOGIC*************************




  // *********************FRONT END LOGIC*************************
  $(function() {

    $("form").submit(function(e) {
      e.preventDefault();
      var userInput = parseInt($("#userInput").val());
      $("form").hide();
      $("#result").show();
    });

    //reload button function
    $("#reload").click(function(){
      location.reload();
    });


  });
