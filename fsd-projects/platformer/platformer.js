$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(800, 234, 350, 121, "pink");
  createPlatform(200, 500, 300, 100, "lightyellow");
  createPlatform(521, 117, 217, 121, "black");
  createPlatform(800, 400, 200, 50, "white");
  createPlatform(300, 350, 200, 40, "lightgrey");


    // TODO 3 - Create Collectables

createCollectable("ice cream", 300, 400);
  createCollectable("pizza", 600, 300, 0.7, 1);
  createCollectable("donut", 900, 200);

    
    // TODO 4 - Create Cannons

createCannon("top", 300, 800);
createCannon("left", 500, 1000);
createCannon("right", 700, 1300);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
  


  registerSetup(setup);
});
