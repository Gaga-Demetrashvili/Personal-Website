$(".sec").click(function(){
    $(".sec").toggleClass("sec2");
    $("table").toggleClass("table2");
    $("hr").toggleClass("hr2");
    $("th").toggleClass("th2");
    // $("p,h2,h3,h4").toggleClass("night-mode");
    $("body").toggleClass("night-mode");
    if ($("section").hasClass("sec2")) {
        $("button").html("<i class='far fa-2x fa-lightbulb'></i>");
    }else {
        $("button").html("<i class='fas fa-2x fa-lightbulb'></i>")
    }
})