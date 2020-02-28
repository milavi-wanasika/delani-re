$(document).ready(function() {
    $(".show1").click(function() {
       $("#hide1").toggle();
       $(".img-hidden1").toggle()
    });
    $(".show2").click(function() {
       $("#hide2").toggle();
       $(".img-hidden2").toggle();
    });
    $(".show3").click(function() {
       $("#hide3").toggle();
       $(".img-hidden3").toggle();
    });
    $(".img4").hover(function() {
       $(".overlay4").show();
       $(".image4").mouseleave(function() {
         $(".overlay4").hide();
       });
    });
    $(".image1").hover(function() {
       $(".overlay1").show();
       $(".image1").mouseleave(function() {
         $(".overlay1").hide();
       });
    });
    $(".image2").hover(function() {
       $(".overlay2").show();
       $(".image2").mouseleave(function() {
         $(".overlay2").hide();
       });
    });
    $(".image3").hover(function() {
       $(".overlay3").show();
       $(".image3").mouseleave(function() {
         $(".overlay3").hide();
       });
    });
    $("image4").hover(function() {
        $(".overlay4").show();
        $(".image4").mouseleave(function() {
            $(".overlay4").hide();
        });
    });
    
    $(".image5").hover(function() {    
       $(".overlay5").show();
       $(".image5").mouseleave(function() {
         $(".overlay5").hide()
       });
    });
    $(".image6").hover(function() {
       $(".overlay6").show();
       $(".image6").mouseleave(function() {
         $(".overlay6").hide();
       });
    });
    $(".image7").hover(function() {
       $(".overlay7").show();
       $(".image7").mouseleave(function() {
         $(".overlay7").hide();
       });
    });
    $(".image8").hover(function() {
       $(".overlay8").show();
       $(".image8").mouseleave(function() {
         $(".overlay8").hide();
       });
    });
    $("form").submit (function(event) {
         var name=$("#name").val();
         alert("Thank you " + name + " for getting back to us!");
    });
});