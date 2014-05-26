$(document).ready(function() {  /*--after_html_gets_ready--*/

$("#nav").hide();
$("#fadebox").hide();

$("span").click(function(){ /*---start--->*/

if($("a.menu").text()=="MENU")
$("a.menu").text("CLOSE MENU")
else
$("a.menu").text("MENU");

$("#fadebox").fadeToggle("fast");
$("#nav").animate({width: "toggle"},300);

$("#nav ul").click(function(){ /*--start-->*/
$("#fadebox").fadeOut(200);
$("#nav").fadeOut(200);
$("a.menu").text("MENU");
});/*--end-->*/

$("#fadebox").click(function(){ /*--start-->*/
$("#fadebox").fadeOut(200);
$("#nav").fadeOut(200);
$("a.menu").text("MENU");
});/*--end-->*/

/*--home--*/
$("#nav ul li.home").click(function(){
$("#container").html("WELCOME ! <br><br>This is a simple self-learned jquery creation by a 14 years old school boy,arpan searching of making something innovative and creative not like you but as per a boy like me and now a days children knows lots more than elder about todays technologies.The idea of making such a website is not just to create it but to learn many things and it's really a big deal for me.");
});
/*--about--*/
$("#nav ul li.about").click(function(){
$("#container").text("I think myself something like legend, programmer, designer, artist, web developer and hacker but hopefully i don't know what I am, do really I am one of them.. besides I am a school student,a thinker and a non-professinal.");
});
/*--contact--*/
$("#nav ul li.contact").click(function(){
$("#container").html("You want my contacts.. Ofcourse");
});

});/*---end--->*/

});