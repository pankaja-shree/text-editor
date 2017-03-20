$(document).ready(function(){

$(".toggle-div").click(function(){
    $(this).toggleClass("active");
});

$("textarea").height($(window).height() - $("#header").height() - 50);
});