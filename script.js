document.onkeydown = function(e)
      {
        var box = document.getElementById("box");
        //alert(e.keyCode);
        switch(e.keyCode)
        {
          case 37: //left arrow
                   var positionValue = parseInt(box.style.left || 0, 10) - 10 ;
                   box.style.left = positionValue+"px";
          break;
          case 38: //arrow up
                   var positionValue = parseInt(box.style.top || 0, 10) - 10 ;
                   box.style.top = positionValue+"px";
          break;
          case 39: //right arrow
                   var positionValue = parseInt(box.style.left || 0, 10) + 10 ;
                   box.style.left = positionValue+"px";
          break;
          case 40: //arrow down
                   var positionValue = parseInt(box.style.top || 0, 10) + 10 ;
                   box.style.top = positionValue+"px";
          break;
        }
      }