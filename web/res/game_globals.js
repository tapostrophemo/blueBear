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

function setupPlayerAnimations(imageUrl) {
  var playerOpts = {
    imageURL: imageUrl,
    numberOfFrame: 3,
    delta: SPRITE_WIDTH,
    rate: 133,
    type: $.gameQuery.ANIMATION_HORIZONTAL,
  };
  var playerStoppedOpts = {
    imageURL: imageUrl,
    numberOfFrame: 1,
    delta: 0,
    rate: 0,
    type: $.gameQuery.ANIMATION_ONCE,
    offsetx: SPRITE_WIDTH,
  };

  playerOpts.offsety = SPRITE_HEIGHT * 3;
  animations["playerLeft"] = new $.gameQuery.Animation(playerOpts);
  playerStoppedOpts.offsety = SPRITE_HEIGHT * 3;
  animations["playerStoppedLeft"] = new $.gameQuery.Animation(playerStoppedOpts);

  playerOpts.offsety = 0;
  animations["playerUp"] = new $.gameQuery.Animation(playerOpts);
  playerStoppedOpts.offsety = 0;
  animations["playerStoppedUp"] = new $.gameQuery.Animation(playerStoppedOpts);

  playerOpts.offsety = SPRITE_HEIGHT;
  animations["playerRight"] = new $.gameQuery.Animation(playerOpts);
  playerStoppedOpts.offsety = SPRITE_HEIGHT;
  animations["playerStoppedRight"] = new $.gameQuery.Animation(playerStoppedOpts);

  playerOpts.offsety = SPRITE_HEIGHT * 2;
  animations["playerDown"] = new $.gameQuery.Animation(playerOpts);
  playerStoppedOpts.offsety = SPRITE_HEIGHT * 2;
  animations["playerStoppedDown"] = new $.gameQuery.Animation(playerStoppedOpts);
}

function setupObjectAnimations() {
  animations["honeypot"] = new $.gameQuery.Animation({
    imageURL: "res/honeypot.png",
    numberOfFrame: 1,
    delta: 0,
    rate: 0,
    offsetx: 0,
    offsety: 0,
    type: $.gameQuery.ANIMATION_ONCE});

  animations["bush"] = new $.gameQuery.Animation({
    imageURL: "res/bush.png",
    numberOfFrame: 1,
    delta: 0,
    rate: 0,
    offsetx: 0,
    offsety: 0,
    type: $.gameQuery.ANIMATION_ONCE});

  animations["finishLine"] = new $.gameQuery.Animation({
    imageURL: "res/finish_line.png",
    numberOfFrame: 2,
    delta: 11,
    rate: 175,
    offsetx: 0,
    offsety: 0,
    type: $.gameQuery.ANIMATION_HORIZONTAL});
}

function setupBackgroundAnimations() {
// Generated with gQ's Tiles map editor
animations[0] =  new $.gameQuery.Animation({
    imageURL:      'res/ground_basic.png',
    type:          $.gameQuery.ANIMATION_HORIZONTAL,
    numberOfFrame: 1,
    delta:         0,
    rate:          0,
    offsetx:       0,
    offsety:       0
});
animations[1] =  new $.gameQuery.Animation({
    imageURL:      'res/ground_basic.png',
    type:          $.gameQuery.ANIMATION_HORIZONTAL,
    numberOfFrame: 1,
    delta:         0,
    rate:          0,
    offsetx:       44,
    offsety:       0
});
animations[2] =  new $.gameQuery.Animation({
    imageURL:      'res/ground_basic.png',
    type:          $.gameQuery.ANIMATION_HORIZONTAL,
    numberOfFrame: 1,
    delta:         0,
    rate:          0,
    offsetx:       88,
    offsety:       0
});
animations[3] =  new $.gameQuery.Animation({
    imageURL:      'res/ground_basic.png',
    type:          $.gameQuery.ANIMATION_HORIZONTAL,
    numberOfFrame: 1,
    delta:         0,
    rate:          0,
    offsetx:       132,
    offsety:       0
});
animations[4] =  new $.gameQuery.Animation({
    imageURL:      'res/ground_basic.png',
    type:          $.gameQuery.ANIMATION_HORIZONTAL,
    numberOfFrame: 1,
    delta:         0,
    rate:          0,
    offsetx:       176,
    offsety:       0
});
animations[5] =  new $.gameQuery.Animation({
    imageURL:      'res/ground_basic.png',
    type:          $.gameQuery.ANIMATION_HORIZONTAL,
    numberOfFrame: 1,
    delta:         0,
    rate:          0,
    offsetx:       220,
    offsety:       0
});
animations[6] =  new $.gameQuery.Animation({
    imageURL:      'res/ground_basic.png',
    type:          $.gameQuery.ANIMATION_HORIZONTAL,
    numberOfFrame: 1,
    delta:         0,
    rate:          0,
    offsetx:       264,
    offsety:       0
});
animations[7] =  new $.gameQuery.Animation({
    imageURL:      'res/ground_basic.png',
    type:          $.gameQuery.ANIMATION_HORIZONTAL,
    numberOfFrame: 1,
    delta:         0,
    rate:          0,
    offsetx:       308,
    offsety:       0
});
animations[8] =  new $.gameQuery.Animation({
    imageURL:      'res/ground_basic.png',
    type:          $.gameQuery.ANIMATION_HORIZONTAL,
    numberOfFrame: 1,
    delta:         0,
    rate:          0,
    offsetx:       352,
    offsety:       0
});
}


