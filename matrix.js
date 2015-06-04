$.fn.matrix = function(){
  var id = this[0].id;
  var c = document.getElementById(id);
  c.style.display = "block";
  c.style.height = '100%';
  var ctx = c.getContext("2d");

  c.height = window.innerHeight;
  c.width = window.innerWidth;

  var characters = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
  characters = characters.split("");
  var font_size = 10;
  var columns = c.width/font_size; 
  var runs = [];
  for(var x = 0; x < columns; x++)
    runs[x] = 1; 
  function draw()
  {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0"; 
    ctx.font = font_size + "px arial";
    for(var i = 0; i < runs.length; i++)
    {
      var text = characters[Math.floor(Math.random()*characters.length)];
      ctx.fillText(text, i*font_size, runs[i]*font_size);
      if(runs[i]*font_size > c.height && Math.random() > 0.975)
        runs[i] = 0;
      runs[i]++;
    }
  }
  setInterval(draw, 33);
}


