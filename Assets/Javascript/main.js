
var showMenu = false;

$(".menu-button").on("click",function(){
  if (!showMenu) {
    $(".menu-button").addClass("close");
    $(".menu").addClass("show");
    $(".menu-options").addClass("show");
    $(".menu-picture").addClass("show");
    $(".menu-item").addClass("show");
    showMenu = true;
  } else {
    $(".menu-button").removeClass("close");
    $(".menu").removeClass("show");
    $(".menu-options").removeClass("show");
    $(".menu-picture").removeClass("show");
    $(".menu-item").removeClass("show");
    showMenu = false;
  }
});


var filter = new RegExp(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);


$(".input-default").on("click",function(event){
  event.preventDefault();
  var name = $(".name").val().trim();
  var email = $(".email").val().trim();
  $(".email").removeClass("WrongEmail");
  var comments = $(".comments").val().trim();
  var string = "";

  if (name !== "" && filter.test(email) ){
    string = "mailto:felix.evl@gmail.com?&subject=Big%20News&body="+comments+" /n From:"+email;
    string = "mailto:felix.evl@gmail.com?cc="+email+"&subject=Contact from your site - "+name+"&body="+comments;
    $(".email").val("");
    $(".name").val("");
    $(".comments").val("");
    location.href=string;
  }
  if(!filter.test(email)){
    $(".email").val("Not an e-mail").addClass("WrongEmail");
  }



});

