// alert("worked");


// $( ".container .card" ).mouseover(function() {
//     $(".details").fadeIn('slow');
//   });

//   $( ".container .card" ).mouseout(function() {
//     $(".details").fadeOut('slow');
//   });

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

$(".clicker .down").click(function(){
$(".clicker .down").append('<i class="fas fa-cog fa-spin"></i>');
  $('.clicker .down .fa-download').fadeOut('fast').delay(3000).fadeIn('fast');
  setTimeout(function () {
    $('.clicker .down .fa-spin').remove();

}, 3000)
});







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
