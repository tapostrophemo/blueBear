$(function () {
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
    var sky = $("#sky").length > 0 ? new Sky($("#sky")) : null;
    var finishLine = new FinishLine($("#finishLine"));
    var rewards = new Rewards($("#rewards"));
    var obstacles = new Obstacles($("#obstacles"));

    $.playground().registerCallback(function () {
      if (playing && !paused) {
        player.update();

        background.update(player, finishLine);
        if (sky) sky.update(player, finishLine);
        rewards.update(player, finishLine);
        obstacles.update(player, finishLine);
        finishLine.update(player);

        if (player.offScreen()) {
          teardownMovementHandling();
          $("#lose").fadeIn(REFRESH_RATE * 8);
          return true;
        }

        if (finishLine.crossedBy(player)) {
          teardownMovementHandling();
          $("#win").fadeIn(REFRESH_RATE * 4);
          var nextLevelUrl = $("#nextLevelLink").attr("href");
          $("#nextLevelLink").attr("href", nextLevelUrl + score);
          return true;
        }
      }
    }, REFRESH_RATE);
  });
});

