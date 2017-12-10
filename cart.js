$(function(){
    //SCOPE !!! !!! !!!
    //GLOBAL vs. LOCAL VARIABLES
    //PROPER WAY
    
    $(".add").click(function(){
        //INPUT
        number1 = parseInt($("#num1").val());
        number2 = parseInt($("#num2").val());
        number3 = parseInt($("#num3").val());
        number4 = parseInt($("#num4").val());
        
        //CALCULATE
        var total = 1 * 375 + 1 * 375 + 1 * 375 + 1 * 375 * 1.07;
        var tax = 1.07;
        var subtotal = 1 * 375 + 1 * 375 + 1 * 375 + 1 * 375;
        //OUTPUT
       $(".total").css("font-size","32px");
        $(".total").html(total);
        $(".tax").css("font-size","32px");
        $(".tax").html(tax);
        $(".subtotal").css("font-size","32px");
        $(".subtotal").html(subtotal);
    });
     $(".multiply").click(function(){
        //INPUT
        number1 = parseInt($("#nmd1").val());
        number2 = parseInt($("#nmd2").val());
        number3 = parseInt($("#nmd3").val());
        number4 = parseInt($("#nmd4").val());
        
        //CALCULATE
        
        //OUTPUT
        $(".answer").css("font-size","32px");
        $(".answer").html(total);
        $(".tax").css("font-size","32px");
        $(".tax").html(tax);
        $(".subtotal").css("font-size","32px");
        $(".subtotal").html(subtotal);
    });
    

    
})
