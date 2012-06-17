$(function () {
  score = 0;
  level = 1;
  started = false;
  playing = true;
  paused = false;

  $("#playground").playground({width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT, keyTracker: true});

  setupAnimations();
  setupLayers();

  var $player = $("#player");
  var player = new Player($player);
  setupMovementHandling($player);

  $.playground().startGame(function () {
    var i;

    window.focus();
    updateScoreboard();

    var background = new Background($("#background"));
    var finishLine = new FinishLine($("#finishLine"));
    var rewards = new Rewards($("#rewards"));
    var obstacles = new Obstacles($("#obstacles"));
    setupRewards();
    setupObstacles();

    $.playground().registerCallback(function () {
      if (playing && !paused) {
        player.update();

        background.update(player, finishLine);
        rewards.update(player, finishLine);
        obstacles.update(player, finishLine);
        finishLine.update(player);

        if (player.offScreen()) {
          $("#lose").fadeIn(REFRESH_RATE * 8);
          teardownMovementHandling();
          return true;
        }

        if (finishLine.crossedBy(player)) {
          $("#win").fadeIn(REFRESH_RATE * 4);
          teardownMovementHandling();
          return true;
        }
      }
    }, REFRESH_RATE);
  });
});

