
$(".bulb").mouseover(function(){
    $(".fa-lightbulb").addClass("fa-4x");
})
$(".bulb").mouseout(function(){
    $(".fa-lightbulb").removeClass("fa-4x");
})

$(".bulb").click(function(){
    $(".sec").toggleClass("sec2");
    $("table").toggleClass("table2");
    $("hr").toggleClass("hr2");
    $("th").toggleClass("th2");
    $("body").toggleClass("night-mode");  
    $(".bulb").toggleClass("light");
    $(".anch").toggleClass("anch-night");
})









