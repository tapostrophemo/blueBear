function setupAnimations() {
  setupPlayerAnimations("res/player_basic.png");
  setupObjectAnimations();
  setupBackgroundAnimations();
}

function setupLayers() {
// Generated with gQ's Tiles map editor
var map = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0],
           [0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 5, 5, 3, 3, 0],
           [3, 3, 3, 3, 3, 8, 8, 8, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 3],
           [8, 8, 8, 8, 8, 2, 1, 2, 8, 8, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5],
           [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 8, 9, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5],
           [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 9, 9, 9, 9, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5],
           [2, 1, 2, 1, 2, 1, 2, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 5, 5, 5, 5, 5, 5],
           [1, 2, 1, 2, 1, 2, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 5, 5, 5]];

  var bushes = [
    [TILE_WIDTH *   2,   TILE_HEIGHT * 4],
    [TILE_WIDTH *   2,   TILE_HEIGHT * 6],
    [TILE_WIDTH *   7,   TILE_HEIGHT * 3],
    [TILE_WIDTH *  12.8, TILE_HEIGHT * 2.5],
    [TILE_WIDTH *  17.5, TILE_HEIGHT * 2.5],
    [TILE_WIDTH *  18.5, TILE_HEIGHT * 1.5],
    [TILE_WIDTH *  20,   TILE_HEIGHT * 0.5],
    [TILE_WIDTH *  22,   TILE_HEIGHT * 5.5]];
  var borders = [
    // sky
    [ 0, 1],
    [ 1, 1],
    [ 2, 1],
    [ 3, 1],
    [ 3, 0],
    [ 4, 0],
    [ 5, 0],
    [ 6, 0],
    [ 7, 0],
    [ 8, 0],
    [ 9, 0],
    [ 9, 1],
    [10, 1],
    [11, 1],
    [11, 2],
    [12, 2],
    [12, 1],
    [13, 1],
    [14, 1],
    [14, 0],
    [15, 0],
    [16, 0],
    [17, 0],
    [22, 0],
    [23, 0],
    [23, 1],
    // water
    [ 7, 7],
    [ 8, 7],
    [ 8, 6],
    [ 9, 6],
    [10, 6],
    [10, 5],
    [11, 5],
    [11, 4],
    [12, 5],
    [13, 5],
    [13, 6],
    [14, 6],
    [15, 6],
    [16, 6],
    [17, 6],
    [17, 7],
    [18, 7],
    [19, 7],
    [20, 7]];
  var honeypots = [
    [TILE_WIDTH *  1,   TILE_HEIGHT * 7],
    [TILE_WIDTH *  3.5, TILE_HEIGHT * 5],
    [TILE_WIDTH *  6,   TILE_HEIGHT * 1],
    [TILE_WIDTH *  9,   TILE_HEIGHT * 2],
    [TILE_WIDTH * 13,   TILE_HEIGHT * 2],
    [TILE_WIDTH * 14,   TILE_HEIGHT * 5],
    [TILE_WIDTH * 15,   TILE_HEIGHT * 5],
    [TILE_WIDTH * 21.5, TILE_HEIGHT * 1.5],
    [TILE_WIDTH * 22.5, TILE_HEIGHT * 7]];

  var i;

  var mainGroup = $.playground().addGroup("main", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT});
  mainGroup.addGroup("background", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
      .addTilemap('tilemap', map,  animations, {width: 44, height: 33, sizex: 24, sizey: 8}).end().end();
  mainGroup.addSprite("finishLine", {
    animation: animations["finishLine"],
    posx: $("#tilemap").width()-TILE_WIDTH,
    posy: 0,
    width: TILE_WIDTH,
    height: PLAYGROUND_HEIGHT});
  mainGroup.addSprite("player", {
    animation: animations["playerStoppedRight"],
    posx: SPRITE_WIDTH,
    posy: TILE_HEIGHT*5 + SPRITE_HEIGHT,
    width: SPRITE_WIDTH,
    height: SPRITE_HEIGHT});

  var obstacleGroup = mainGroup.addGroup("obstacles", {width: $("#tilemap").width(), height: PLAYGROUND_HEIGHT});
  for (i = 0; i < bushes.length; i++) {
    obstacleGroup.addSprite("bush_"+(i+1), {
      animation: animations["bush"],
      posx: bushes[i][0] + 30/2,
      posy: bushes[i][1] + 30/2,
      width: 30,
      height: 30});
  }
  for (i = 0; i < borders.length; i++) {
    obstacleGroup.addSprite("border_"+(i+1), {
      posx: borders[i][0]*TILE_WIDTH,
      posy: borders[i][1]*TILE_HEIGHT,
      width: TILE_WIDTH,
      height: TILE_HEIGHT});
  }
  obstacleGroup.end();
  $("#obstacles .sprite").addClass("obstacle");

  var rewardGroup = mainGroup.addGroup("rewards", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT});
  for (i = 0; i < honeypots.length; i++) {
    rewardGroup.addSprite("honeypot_"+(i+1), {
      animation: animations["honeypot"],
      posx: honeypots[i][0] + 18/2,
      posy: honeypots[i][1] + 14/2,
      width: 22,
      height: 15});
  }
  rewardGroup.end();
  $("#rewards .sprite").addClass("reward");
}

