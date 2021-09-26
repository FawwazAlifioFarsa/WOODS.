$("nav .logo1").hide();
$("nav .buttons2").hide();
$(document).ready(function () {
    var scroll = 0;
    $(document).scroll(function(){
        scroll = $(this).scrollTop();
        if(scroll > 602 && scroll < 1227){
            $("nav").addClass("putih");
            $("nav .logo1").show();
            $("nav .logo2").hide();
            $("nav .buttons1").hide();
            $("nav .buttons2").show();
        }else{
            $("nav").removeClass("putih");
            $("nav .logo1").hide();
            $("nav .logo2").show();
            $("nav .buttons1").show();
            $("nav .buttons2").hide();
        }
    })
});