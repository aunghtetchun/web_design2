
$(".hover-btn").hover(function () {
    $(this).parent().children("i,button").css({"background-color":"#000000","color":"white"})
},function () {
    $(".hover-btn").parent().children("i,button").css({"background-color":"white","color":"rgba(49,49,49,0.86)"})
});