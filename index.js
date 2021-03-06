var dir = 1
var logoanim = bodymovin.loadAnimation({
  container: document.getElementById('anim'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data.json',
  rendererSettings: {id: 'wobble'}
})
logoanim.onComplete = function () {
  console.log("complete");
  if (dir == 1) {
    logoanim.setDirection(-1)
    logoanim.goToAndPlay(48, true)
    dir = -1
    console.log('b');
  } else{
    logoanim.setDirection(1)
    logoanim.goToAndPlay(0, true)
    dir = 1
    console.log('f');
  }
}
var wipanim = bodymovin.loadAnimation({
  container: document.getElementById('wipanim2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'datawip.json',
  rendererSettings: {id: 'wip', viewBoxOnly: "true"}
})
var wipanim = bodymovin.loadAnimation({
  container: document.getElementById('wipanim3'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'datawip.json',
  rendererSettings: {id: 'wip', viewBoxOnly: "true"}
})
document.getElementById("emailbutton").addEventListener("click", function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#emailtext").text()).select();
    document.execCommand("copy");
    $temp.remove();
    $("#copytext").text("email copied");
    setTimeout(() => {$("#copytext").text("copy email");}, 2000)
})
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

function colorWheel(){
  color = setInterval(function(){
    $("#wobble path").css("fill", getRandomColor())
  }, 100);
}
$("#anim").mouseenter(
  function(){
    console.log("hover");
    colorWheel()
  }
)
$("#anim").mouseleave(
  function(){
    console.log("out");
    clearInterval(color)
    $("#wobble path").css("fill", "black")
  }
)

window.onload = function () {
  lax.init()

  lax.addDriver('scrollY', function () {
    return window.scrollY
  }, { inertiaEnabled: true })

  lax.addElements(".thumb", {
    scrollY: {
      perspective: [
        [0],
        [1000],
      ],
      rotateX: [
        [0],
        [0],
        {
          inertia: -1
        }
      ],

      translateY: [
        [0],
        [0],
        {
          inertia: -1
        }
      ],
      brightness: [
        [0],
        [1],
        {
          inertia: -0.01
        }
      ]
    },
  })
}