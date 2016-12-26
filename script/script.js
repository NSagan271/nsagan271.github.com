function makeDot(c, i){
  var element = "<div class='anim' id='anim"+i+"'></div>";
  $('.content').append(element);
  $('#anim'+i).css("background-color",c);
  return{
    vel: Math.random()+2,
    direct: Math.random()*Math.PI/2+Math.PI*3/2,
    x:0,
    y:60,
    id:"#anim"+i
  }
}
function moveDot(dot, mult){
  function changeXY(){
    dot.x+=dot.vel*mult*Math.cos(dot.direct);
    dot.y+=dot.vel*mult*Math.sin(dot.direct);
  }
  function move(){
    var x = requestAnimationFrame(move);
    changeXY();
    if (dot.x<=0||dot.x>=$(window).width()-10){
       dot.direct = Math.PI/2+ (Math.PI/2-dot.direct);
       changeXY();
       if (dot.x<=0)dot.x = 1;
       else if (dot.x>=$(window).width()-10)dot.x = $(window).width()-11;
    }
    if (dot.y<=60||dot.y>=$(window).height()-90){
      dot.direct = Math.PI+ (Math.PI-dot.direct);
      changeXY();
      if (dot.y<=0)dot.y = 1;
      else if (dot.y>=$(window).height()-90)dot.y = $(window).height()-91;
    }
    $(dot.id).css({"left":dot.x,"top":dot.y});
  }
  move();

}
function smallScreen(){
  if ($(window).width()<600){
    $(".content").css({"width":"96%","margin-left":"2%"});
    $(".nav:not(.foot) ul li").css("width","99%");
    $(".nav:not(.foot)").css("height","210px");

    if ($(window).width()>450){
      $("p").css("font-size",$(window).width()/25);
      $(".title").css("font-size",$(window).width()/11);
    }
    else{
      $(".title").css("font-size",(450.0/11));
      $("p").css("font-size",(450.0/25));
    }
  }
  else{
    $(".nav ul li").css("width","max-content");
    $(".nav:not(.foot)").css("height","60px");
    $(".title").css("font-size","60px");
    $(".content").css({"width":"90%","margin-left":"5%"});
    $("p").css("font-size","24px");
  }
  //$(".foot").css("height","80px");
  //$(".foot ul li").css("width","max-content");

}
//orange, red, magenta, purple, navy
var col = ["#f2671f","#c91b26","#9c0f5f","#60047a","#160a47"];
$(window).on("load",function(){
  smallScreen();
  for (var i = 0; i <10;i++)moveDot(makeDot(col[i%5],i),1);
});
$(window).on("resize",function(){
  smallScreen();
});
function visible(id){
  if ($(id).css("display")==="none")$(id).slideDown(600);
  else $(id).slideUp(600);
}
