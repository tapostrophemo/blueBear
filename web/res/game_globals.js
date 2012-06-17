KEY_SPACE =  0;
KEY_ENTER = 13;
KEY_ESC   = 27;
KEY_LEFT  = 37;
KEY_UP    = 38;
KEY_RIGHT = 39;
KEY_DOWN  = 40;

SPRITE_WIDTH  = 24;
SPRITE_HEIGHT = 24;

TILE_WIDTH  = 44;
TILE_HEIGHT = 33;

PLAYGROUND_WIDTH = 352;
PLAYGROUND_HEIGHT = 264;

REFRESH_RATE = 30;

var playing, started, paused, score, animations = [];

function updateScoreboard() {
  $("#score span").text(score);
}

function isArrowKey(event) {
  return event.which == KEY_LEFT  ||
         event.which == KEY_UP    ||
         event.which == KEY_RIGHT ||
         event.which == KEY_DOWN;
}

function setupMovementHandling($player) {
  $(document).keydown(function (e) {
    if (!started && e.which == KEY_ESC) {
      return;
    }

    if (!started && isArrowKey(e)) {
      $("#start").fadeOut(REFRESH_RATE * 2);
      started = true;
    }

    switch (e.which) {
      case KEY_LEFT:  $player.setAnimation(animations["playerLeft"]);  break;
      case KEY_UP:    $player.setAnimation(animations["playerUp"]);    break;
      case KEY_RIGHT: $player.setAnimation(animations["playerRight"]); break;
      case KEY_DOWN:  $player.setAnimation(animations["playerDown"]);  break;
      case KEY_ESC:
        paused = !paused;
        if (paused) {
          $("#paused").fadeIn(REFRESH_RATE * 3);
        } else {
          $("#paused").fadeOut(REFRESH_RATE);
        }
        break;
    }
  });
  $("#arrows button").click(function (e) {
    var kde = $.Event("keydown");
    switch (this.id) {
      // NB: ---------------------------------> gameTracker not checking 'which' on keydown events
      case 'arrowLeft':  kde.which = KEY_LEFT;  kde.keyCode = KEY_LEFT;  break;
      case 'arrowUp':    kde.which = KEY_UP;    kde.keyCode = KEY_UP;    break;
      case 'arrowRight': kde.which = KEY_RIGHT; kde.keyCode = KEY_RIGHT; break;
      case 'arrowDown':  kde.which = KEY_DOWN;  kde.keyCode = KEY_DOWN;  break;
    }
    $(document).trigger(kde);
    return false;
  });
  $(document).keyup(function (e) {
    switch (e.which) {
      case KEY_LEFT:  $player.setAnimation(animations["playerStoppedLeft"]);  break;
      case KEY_UP:    $player.setAnimation(animations["playerStoppedUp"]);    break;
      case KEY_RIGHT: $player.setAnimation(animations["playerStoppedRight"]); break;
      case KEY_DOWN:  $player.setAnimation(animations["playerStoppedDown"]);  break;
    }
  });
}

function teardownMovementHandling() {
  $(document).unbind("keydown");
  $(document).unbind("keyup");
}

