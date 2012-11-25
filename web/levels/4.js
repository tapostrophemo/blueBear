function setupAnimations() {
  setupPlayerAnimations("res/player_basic.png");
  setupObjectAnimations();
  setupBackgroundAnimations();
}

function setupLayers() {
// Generated with gQ's Tiles map editor
var map = [[5, 5, 5, 5, 3, 3, 3, 3, 3, 5, 5, 2, 1, 2, 1, 5, 5, 5, 5, 5, 1, 2, 1, 5, 5, 5, 3, 3, 3, 3, 3, 5, 5, 5],
           [5, 5, 3, 3, 9, 9, 9, 9, 9, 3, 3, 5, 2, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 3, 9, 9, 9, 9, 9, 3, 3, 5],
           [5, 5, 3, 9, 9, 9, 9, 9, 9, 9, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 9, 9, 9, 9, 9, 9, 9, 3, 5],
           [5, 5, 3, 3, 9, 9, 9, 9, 9, 3, 3, 5, 5, 5, 5, 3, 3, 3, 3, 3, 5, 5, 5, 5, 3, 3, 9, 9, 9, 9, 9, 3, 3, 5],
           [5, 5, 5, 5, 3, 3, 3, 3, 3, 5, 5, 5, 5, 3, 3, 9, 9, 9, 9, 9, 3, 3, 5, 5, 5, 5, 3, 3, 3, 3, 3, 5, 5, 5],
           [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 9, 9, 9, 9, 9, 9, 9, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3],
           [1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 2, 5, 3, 3, 9, 9, 9, 9, 9, 3, 3, 5, 5, 5, 2, 1, 5, 5, 5, 5, 5, 3, 9],
           [2, 1, 5, 5, 5, 5, 5, 5, 5, 1, 2, 1, 2, 5, 5, 3, 3, 3, 3, 3, 5, 5, 5, 5, 2, 1, 2, 1, 5, 5, 5, 3, 9, 9]];

  var bushes = [
    [TILE_WIDTH * 1.5,   TILE_HEIGHT * 3.25],
    [TILE_WIDTH *   2,   TILE_HEIGHT * 7],
    [TILE_WIDTH *   3,   TILE_HEIGHT * 5],
    [TILE_WIDTH *   4,   TILE_HEIGHT * 7],
    [TILE_WIDTH *   6,   TILE_HEIGHT * 7],
    [TILE_WIDTH *   8,   TILE_HEIGHT * 5],
    [TILE_WIDTH *  10,   TILE_HEIGHT * 2],
    [TILE_WIDTH *  10,   TILE_HEIGHT * 5],
    [TILE_WIDTH *  12,   TILE_HEIGHT * 5],
    [TILE_WIDTH *  14,   TILE_HEIGHT * 1],
    [TILE_WIDTH *  16,   TILE_HEIGHT * 1],
    [TILE_WIDTH *  18,   TILE_HEIGHT * 1],
    [TILE_WIDTH *  21,   TILE_HEIGHT * 3],
    [TILE_WIDTH *  23,   TILE_HEIGHT * 0],
    [TILE_WIDTH *  24,   TILE_HEIGHT * 0],
    [TILE_WIDTH *  23.5, TILE_HEIGHT * 6],
    [TILE_WIDTH *  25,   TILE_HEIGHT * 7],
    [TILE_WIDTH *  26,   TILE_HEIGHT * 5],
    [TILE_WIDTH *  27,   TILE_HEIGHT * 6.5],
    [TILE_WIDTH *  28.5, TILE_HEIGHT * 4],
    [TILE_WIDTH *  32,   TILE_HEIGHT * 4]];
  var borders = [
    // lake 1
    [ 3, 2],
    [ 4, 1],
    [ 5, 1],
    [ 6, 1],
    [ 7, 1],
    [ 8, 1],
    [ 9, 2],
    [ 8, 3],
    [ 7, 3],
    [ 6, 3],
    [ 5, 3],
    [ 4, 3],
    // lake 2
    [14, 5],
    [15, 4],
    [16, 4],
    [17, 4],
    [18, 4],
    [19, 4],
    [20, 5],
    [19, 6],
    [18, 6],
    [17, 6],
    [16, 6],
    [15, 6],
    // lake 3
    [25, 2],
    [26, 1],
    [27, 1],
    [28, 1],
    [29, 1],
    [30, 1],
    [31, 2],
    [30, 3],
    [29, 3],
    [28, 3],
    [27, 3],
    [26, 3],
    // lake 4
    [32, 7],
    [33, 6],
    [33, 7]];
  var honeypots = [
    [TILE_WIDTH *  2.5, TILE_HEIGHT * 0],
    [TILE_WIDTH *  4,   TILE_HEIGHT * 6],
    [TILE_WIDTH *  7,   TILE_HEIGHT * 7],
    [TILE_WIDTH *  9,   TILE_HEIGHT * 1],
    [TILE_WIDTH *  9,   TILE_HEIGHT * 3],
    [TILE_WIDTH * 13,   TILE_HEIGHT * 4],
    [TILE_WIDTH * 13,   TILE_HEIGHT * 5],
    [TILE_WIDTH * 13,   TILE_HEIGHT * 6],
    [TILE_WIDTH * 17,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 21.5, TILE_HEIGHT * 2],
    [TILE_WIDTH * 22,   TILE_HEIGHT * 2.5],
    [TILE_WIDTH * 22.5, TILE_HEIGHT * 3],
    [TILE_WIDTH * 29,   TILE_HEIGHT * 5],
    [TILE_WIDTH * 30,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 31,   TILE_HEIGHT * 0]];

  var i;

  var mainGroup = $.playground().addGroup("main", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT});
  mainGroup.addGroup("background", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
      .addTilemap('tilemap', map,  animations, {width: 44, height: 33, sizex: 34, sizey: 8}).end().end();
  mainGroup.addSprite("finishLine", {
    animation: animations["finishLine"],
    posx: $("#tilemap").width()-TILE_WIDTH,
    posy: 0,
    width: TILE_WIDTH,
    height: PLAYGROUND_HEIGHT});
  mainGroup.addSprite("player", {
    animation: animations["playerStoppedRight"],
    posx: 0 + TILE_WIDTH / 2,
    posy: TILE_HEIGHT + SPRITE_HEIGHT/2,
    width: SPRITE_WIDTH,
    height: SPRITE_HEIGHT});

  var obstacleGroup = mainGroup.addGroup("obstacles", {width: $("#tilemap").width(), height: PLAYGROUND_HEIGHT});
  for (i = 0; i < bushes.length; i++) {
    obstacleGroup.addSprite("bush_"+(i+1), {
      animation: animations["bush"],
      posx: bushes[i][0],
      posy: bushes[i][1],
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
}

