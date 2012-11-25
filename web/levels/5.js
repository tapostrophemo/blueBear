function setupAnimations() {
  setupPlayerAnimations("res/player_basic.png");
  setupObjectAnimations();
  setupBackgroundAnimations();
}

function setupLayers() {
// Generated with gQ's Tiles map editor
var map = [[1, 3, 3, 3, 1, 2, 3, 3, 3, 2, 1, 3, 3, 3, 9, 9, 3, 3, 5, 5, 5, 3, 9, 9],
           [3, 3, 3, 1, 2, 3, 3, 3, 2, 1, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 3, 3, 9, 3],
           [3, 3, 1, 2, 3, 3, 3, 2, 1, 3, 3, 3, 9, 9, 3, 3, 5, 5, 5, 3, 9, 3, 3, 3],
           [3, 1, 2, 3, 3, 3, 2, 1, 3, 3, 3, 9, 9, 3, 3, 5, 5, 5, 3, 9, 9, 3, 3, 3],
           [1, 2, 3, 3, 3, 2, 1, 3, 3, 3, 9, 9, 3, 3, 5, 5, 5, 3, 9, 9, 3, 3, 3, 2],
           [2, 3, 3, 3, 2, 1, 3, 3, 3, 9, 9, 3, 3, 5, 5, 5, 3, 9, 9, 3, 3, 3, 2, 1],
           [3, 3, 3, 2, 1, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 3, 9, 9, 3, 3, 3, 2, 1, 2],
           [3, 3, 2, 1, 3, 3, 3, 9, 9, 3, 3, 5, 5, 5, 3, 9, 9, 3, 3, 3, 2, 1, 2, 1]];

  var bushes = [
    [TILE_WIDTH *  2,   TILE_HEIGHT * 5],
    [TILE_WIDTH *  4,   TILE_HEIGHT * 3],
    [TILE_WIDTH *  6,   TILE_HEIGHT * 1],
    [TILE_WIDTH * 14,   TILE_HEIGHT * 4],
    [TILE_WIDTH * 14,   TILE_HEIGHT * 5],
    [TILE_WIDTH * 16,   TILE_HEIGHT * 2],
    [TILE_WIDTH * 16,   TILE_HEIGHT * 3],
    [TILE_WIDTH * 17,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 18,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 19,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 19,   TILE_HEIGHT * 7],
    [TILE_WIDTH * 21.5, TILE_HEIGHT * 5.5],
    [TILE_WIDTH * 23,   TILE_HEIGHT * 3]];
  var borders = [
    // middle lakes
    [ 7, 7],
    [ 8, 7],
    [ 9, 5],
    [10, 5],
    [10, 4],
    [11, 4],
    [11, 3],
    [12, 3],
    [12, 2],
    [13, 2],
    [14, 0],
    [15, 0],
    // end lakes
    [15, 7],
    [16, 7],
    [16, 6],
    [17, 6],
    [17, 5],
    [18, 5],
    [18, 4],
    [19, 4],
    [19, 3],
    [20, 3],
    [20, 2],
    [22, 1],
    [22, 0],
    [23, 0]];
  var honeypots = [
    [TILE_WIDTH *  1.5, TILE_HEIGHT * 6.5],
    [TILE_WIDTH *  4.5, TILE_HEIGHT * 5.5],
    [TILE_WIDTH *  9,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 10,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 12,   TILE_HEIGHT * 4],
    [TILE_WIDTH * 13,   TILE_HEIGHT * 4],
    [TILE_WIDTH * 20,   TILE_HEIGHT * 0.5],
    [TILE_WIDTH * 20.5, TILE_HEIGHT * 1],
    [TILE_WIDTH * 21,   TILE_HEIGHT * 1.5],
    [TILE_WIDTH * 22,   TILE_HEIGHT * 2],
    [TILE_WIDTH * 17,   TILE_HEIGHT * 7],
    [TILE_WIDTH * 18,   TILE_HEIGHT * 7],
    [TILE_WIDTH * 18,   TILE_HEIGHT * 6]];

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
    posx: 0 + TILE_WIDTH / 2,
    posy: TILE_HEIGHT*2 + SPRITE_HEIGHT/2,
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

