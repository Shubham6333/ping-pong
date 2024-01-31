document.addEventListener("DOMContentLoaded", () =>{
      
      let table = document.getElementById("ping_pong_table");
      let ball = document.getElementById("ball");
      let paddle = document.getElementById("paddle");

      let ballx = 50;
      let bally = 50;

      let dx = 2;
      let dy = 2;
      
      ball.style.left = `${ballx}px`;
      ball.style.top = `${bally}px`;

      if(ballx < paddle.offsetLeft + paddle.offsetWidth && bally > paddle.offsetTop && bally + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight)
      {
          dx *= -1;
      }

      setInterval(function exec(){
         
        ballx += dx;
        bally += dy;

        ball.style.left = `${ballx}px`;
        ball.style.top = `${bally}px`;

        if(ballx > table.offsetWidth - ball.offsetWidth|| ballx <= 0) dx *= -1;
        if(bally > table.offsetHeight - ball.offsetHeight || bally <= 0) dy *= -1;

      }, 0.1);


      let paddley = 0;
      let dpy = 5;

      document.addEventListener("keydown", (event) =>{
        
        event.preventDefault();
        if(event.keyCode == 38 && paddley > 0)
        {
              paddley += (-1)*dpy;
        }
        else if(event.keyCode == 40 && paddley < table.offsetHeight - paddle.offsetHeight)
        {
              paddley += dpy;
        }

        paddle.style.top = `${paddley}px`;
      });

      document.addEventListener("mousemove", (event) =>{
         let mousedistancefromtop = event.clientY;
         let distanceoftablefromtop = table.offsetTop;
         let mousepointcontrol = mousedistancefromtop - distanceoftablefromtop - paddle.offsetHeight/2;
         paddley = mousepointcontrol;

         if(paddley <= 0 || paddley > table.offsetHeight - paddle.offsetHeight) return;

         paddle.style.top = `${paddley}px`;
      })


})
