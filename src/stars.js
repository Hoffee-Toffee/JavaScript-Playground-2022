window.onload = function() {
  // Create a set of moving points that move from the bottom of the screen to the top
  var starEl = document.getElementById('stars');
  
  for (var i = 0; i < 200; i++) {
    var star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    // Color should be a random light color (generate 3 random numbers between 170 and 255)
    star.style.backgroundColor = '#' + Math.floor(Math.random() * 85 + 170).toString(16) + Math.floor(Math.random() * 85 + 170).toString(16) + Math.floor(Math.random() * 85 + 170).toString(16);
    var width = Math.random() * 10 + 5;
    star.style.width = width + 'px';
    star.style.height = star.style.width;
    star.style.zIndex = Math.floor(width * 10);
    star.style.opacity = Math.random() * 0.9 + 0.1;

    // Generate a number between -1 and -0.1 or 0.1 and 1
    star.top = Math.random() * 0.9 + 0.1 * (Math.floor(Math.random() * 2) == 0 ? -1 : 1);
    star.left = Math.random() * 0.9 + 0.1 * (Math.floor(Math.random() * 2) == 0 ? -1 : 1);
    
    starEl.appendChild(star);
  }

  setInterval(moveStars, 10, starEl, "down");
  setInterval(turbulence, 10);
}

function moveStars(starEl, dir) {
  starEl.childNodes.forEach(star => {
    if (dir == "down") {
      if (star.offsetTop < window.innerHeight) {
        // Use the opacity and width to generate a unique number
        var px = star.style.opacity * star.style.width.replace('px', '');

        star.style.top = (star.offsetTop + px) + 'px';
      }
      else {
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.backgroundColor = '#' + Math.floor(Math.random() * 85 + 170).toString(16) + Math.floor(Math.random() * 85 + 170).toString(16) + Math.floor(Math.random() * 85 + 170).toString(16);
        var width = Math.random() * 10 + 5;
        star.style.width = width + 'px';
        star.style.height = star.style.width;
        star.style.zIndex = Math.floor(width * 10);
        star.style.opacity = Math.random() * 0.9 + 0.1;
        star.style.top = -star.offsetHeight + 'px';
      }
    }
    else if (dir == "random") {
      // Check if the star is not out of bounds (vertically or horizontally)
      if (0 < star.offsetTop && star.offsetTop < window.innerHeight && 0 < star.offsetLeft && star.offsetLeft < window.innerWidth) {
        // Use the opacity and width to generate a unique number
        var px = star.style.opacity * star.style.width.replace('px', '');

        star.style.top = star.offsetTop + px * star.top + 'px';
        star.style.left = star.offsetLeft + px * star.left + 'px';
      }
      else {
        star.style.backgroundColor = '#' + Math.floor(Math.random() * 85 + 170).toString(16) + Math.floor(Math.random() * 85 + 170).toString(16) + Math.floor(Math.random() * 85 + 170).toString(16);
        var width = Math.random() * 10 + 5;
        star.style.width = width + 'px';
        star.style.height = star.style.width;
        star.style.zIndex = Math.floor(width * 10);
        star.style.opacity = Math.random() * 0.9 + 0.1;
        star.top = Math.random() * 0.9 + (0.1 * (Math.floor(Math.random() * 2) == 0 ? -1 : 1) )
        star.left = Math.random() * 0.9 + (0.1 * (Math.floor(Math.random() * 2) == 0 ? -1 : 1) )
        

        // Using star
      }
    }
  })
}