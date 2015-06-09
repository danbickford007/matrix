$.fn.matrix = function(options){
  if(!options)
    options = {}
  for(var i=0; i<this.length; i++){
    generate(this[i])
  }

  function generate(canvas){
    var characters = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑",
        font_size = options['font_size'] || 10,
        runs = [];
  
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.style.display = "block";
    canvas.style.height = options['height'] || '100%';
    canvas.style.height = options['width'] || '100%';
    var columns = canvas.width/font_size; 
    var ctx = canvas.getContext("2d");

    characters = characters.split("");
    function draw()
    {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0"; 
      ctx.font = font_size + "px arial";
      for(var text = '', i = 0; i < runs.length; i++)
      {
        text = characters[Math.floor(Math.random()*characters.length)];
        ctx.fillText(text, i*font_size, runs[i]*font_size);
        if(runs[i]*font_size > canvas.height && Math.random() > 0.975)
          runs[i] = 0;
        runs[i]++;
      }
    }
    for(var x = 0; x < columns; x++)
      runs[x] = 1; 
    setInterval(draw, 50);
  
  }

}


