$(document).ready(function(){
  
  $("button:nth(0)").on("click", function(){
   $("button:nth(1)").fadeIn(1234);
   $("button:nth(2)").fadeIn(2345);
   $("button:nth(3)").fadeIn(3456);
   $("button:nth(4)").fadeIn(4567);
  });

  $("button:nth(1)").on("click", function(){
   $("button:nth(1)").fadeOut(7654);
  });
  
  $("button:nth(2)").on("click", function(){
   $("button:nth(2)").fadeOut(6543);
  });

  $("button:nth(3)").on("click", function(){
    $("button:nth(3)").fadeOut(5432);
    });
    
    $("button:nth(4)").on("click", function(){
   $("button:nth(4)").fadeOut(4321);
  });

});
