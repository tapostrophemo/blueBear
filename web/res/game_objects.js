function Player(node) {
  this.node = node;
  node[0].player = this;
  this.moved = false;

  this.update = function () {
    var x = this.node.x();
    var y = this.node.y();

    if ($.gameQuery.keyTracker[KEY_LEFT] && (x-4) > 0) {
      this.node.x(-4, true);
      this.moved = true;
    }
    if ($.gameQuery.keyTracker[KEY_UP] && (y-3) > 0) {
      this.node.y(-3, true);
      this.moved = true;
    }
    if ($.gameQuery.keyTracker[KEY_RIGHT] && ((x+4) < (PLAYGROUND_WIDTH-SPRITE_WIDTH))) {
      this.node.x(4, true);
      this.moved = true;
    }
    if ($.gameQuery.keyTracker[KEY_DOWN] && ((y+3) < (PLAYGROUND_HEIGHT-SPRITE_HEIGHT))) {
      this.node.y(3, true);
      this.moved = true;
    }
  };

  this.bumpBack = function () {
    var x = this.node.x();
    var y = this.node.y();

    if ($.gameQuery.keyTracker[KEY_LEFT]) {
      this.node.x(4, true);
    }
    if ($.gameQuery.keyTracker[KEY_UP]) {
      this.node.y(3, true);
    }
    if ($.gameQuery.keyTracker[KEY_RIGHT]) {
      this.node.x(-4, true);
    }
    if ($.gameQuery.keyTracker[KEY_DOWN]) {
      this.node.y(-3, true);
    }
  };

  this.offScreen = function () {
    return this.node.x() <= (-1*SPRITE_WIDTH*0.6);
  };
}

function Rewards(node) {
  this.node = node;
  node[0].rewards = this;

  this.update = function (player, finishLine) {
    if (player.moved && !finishLine.completelyShowing()) {
      this.node.x(-1, true);
    }
    checkCollisions(player);
  };

  function checkCollisions(player) {
    player.node.collision(".group,.reward").each(function () {
      $(this).remove();
      score++;
      updateScoreboard();
    });
  }
}

function Obstacles(node) {
  this.node = node;
  node[0].obstacles = this;

  this.update = function (player, finishLine) {
    if (player.moved && !finishLine.completelyShowing()) {
      this.node.x(-1, true);
    }
    checkCollisions(player);
  }

  function checkCollisions(player) {
    player.node.collision(".group,.obstacle").each(function () {
      player.bumpBack();
    });
  }
}

function FinishLine(node) {
  this.node = node;
  node[0].finishLine = this;

  this.update = function (player) {
    if (player.moved && !this.completelyShowing()) {
      this.node.x(-1, true);
    }
  };

  this.crossedBy = function (player) {
    return player.node.x() > this.node.x();
  };

  this.completelyShowing = function () {
    return this.node.x() <= (PLAYGROUND_WIDTH - this.node.width());
  };
}

function Background(node) {
  this.node = node;
  node[0].background = this;

  this.update = function (player, finishLine) {
    if (player.moved && !finishLine.completelyShowing()) {
      this.node.x(-1, true);
      player.node.x(-1, true);
    }
  };
}

