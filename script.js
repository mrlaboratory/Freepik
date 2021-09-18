// Post View Counter 
$.each($("a[name]"), function(i, e) { 
var elem = $(e).parent().find("#postviews"); 
var blogStats = new Firebase("https://bloggerpv-2575a-default-rtdb.firebaseio.com/pages/id/" + $(e).attr("name")); 
blogStats.once("value", function(snapshot) { 
var data = snapshot.val(); 
var isnew = false; 
if(data == null) { 
data= {}; 
data.value = 0; 
data.url = window.location.href; 
data.id = $(e).attr("name"); 
isnew = true; 
} 
elem.text(data.value); 
data.value++; 
if(window.location.pathname!="/") { 
if(isnew) 
blogStats.set(data); 
else 
blogStats.child("value").set(data.value); 
} 
}); 
}); 

// Download click counter firebase
$.each($("a[name]"), function(i, e) { 
var elem = $(e).parent().find("#downloadview"); 
var blogStats = new Firebase("https://bloggerpv-2575a-default-rtdb.firebaseio.com/pages/id/" + $(e).attr("name")); 
blogStats.once("value", function(snapshot) { 
var data = snapshot.val(); 
var isnew = false; 
if(data == null) { 
data= {}; 
data.value = 0; 
data.url = window.location.href; 
data.id = $(e).attr("name"); 
isnew = true; 
} 
elem.text(data.value); 
}); 
}); 
function downloadcount(){
    $.each($("a[name]"), function(i, e) { 
var elem = $(e).parent().find("#downloadview"); 
var blogStats = new Firebase("https://bloggerpv-2575a-default-rtdb.firebaseio.com/pages/id/" + $(e).attr("name")); 

blogStats.once("value", function(snapshot) { 
var data = snapshot.val(); 
var isnew = false; 
if(data == null) { 
data= {}; 
data.value = 0; 
data.url = window.location.href; 
data.id = $(e).attr("name"); 
isnew = true; 
} 
elem.text(data.value); 
data.value++; 
if(window.location.pathname!="/") { 
if(isnew) 
blogStats.set(data); 
else 
blogStats.child("value").set(data.value); 

}}); }); }

function copyaurl(){
  $(".sharediv .url button").text("Copyed");
navigator.clipboard.writeText($(".sharediv .url input").val());
}


$(".container .fav").click(function() {
  var index = $(".container .fav").index( this );
  $('.container .fav:eq('+index+')').toggleClass("red");
});
$("#accordion h3").click(function() {
  var index = $("#accordion h3").index( this );
$('#accordion p:eq('+index+')').slideToggle("slow");
});
$(".clicker .fa-share-alt").click(function() {
$(".sharediv").fadeToggle();
});
$(".clicker .fa-comment").click(function(){
      $(".comdiv").animate({
        right: "-4px"
      });
  });
$(".btn .fa-window-close").click(function(){
  $(".comdiv").animate({
    right: "-350px"
  });
});

$(".down").click(function(){
$(".down").append('<i class="fas fa-cog fa-spin"></i>');
  $('.down .fa-download').fadeOut('fast').delay(3000).fadeIn('fast');
  setTimeout(function () {
    $('.down .fa-spin').remove();

}, 3000)
});



if($("span").hasClass("tcomment")) {
    if($(".tcomment").text().indexOf("comments") != -1){
        $(".tcomment").text($(".tcomment").text().replace("comments",""))
    }  else if($(".tcomment").text().indexOf("comment") != -1){
        $(".tcomment").text($(".tcomment").text().replace("comment",""))
    }else if($(".tcomment").text().indexOf("No") != -1){
        $(".tcomment").text($(".tcomment").text().replace("No","0"))
    }
 
}





// Ripple button effect by mrlaboratory
var buttons = document.querySelectorAll('.ripple');
Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});
function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);
    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';
    console.log(this);
    circle.classList.add('rippleff');
}

!function(){Array.prototype.remove=function(){for(var e,t,i=arguments,o=i.length;o&&this.length;)for(e=i[--o];-1!==(t=this.indexOf(e));)this.splice(t,1);return this};var e=document.createElement("script");e.src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js",e.onload=function(){firebase.initializeApp({apiKey:"AIzaSyD_MvMvRLs8CqwZ2k4c-Seic5ZBr2D1Zw8",databaseURL:"https://bloggerku-com.firebaseio.com",projectId:"bloggerku-com"}),function(e){for(var t=document.getElementsByClassName("lovebutton-bloggerku"),i=0,o=t[i];i<t.length;i++){var a=o.getAttribute("data-id"),r=JSON.parse(localStorage.getItem("liked"))||[],c=0;e.ref("like/"+a+"/total").on("value",function(e){-1!==r.indexOf(a)&&o.querySelector(".icon").classList.add("active"),c=e.val()||0,o.querySelector(".total").innerText=c}),o.querySelector("a").addEventListener("click",function(){o.querySelector(".icon").classList.toggle("active"),o.querySelector(".icon").classList.contains("active")?(r.push(a),localStorage.setItem("liked",JSON.stringify(r)),c++):(r.remove(a),localStorage.setItem("liked",JSON.stringify(r)),c--),e.ref("like/"+a+"/total").set(c)})}}(firebase.database())},document.body.append(e)}();
