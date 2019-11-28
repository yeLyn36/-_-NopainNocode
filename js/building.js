//여자애 움직임
var $girl = $('.girl');

function moveGirl(e) {
	TweenLite.to($girl, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveGirl)

function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0px";
}