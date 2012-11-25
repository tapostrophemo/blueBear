function setupAnimations() {
  setupPlayerAnimations("res/player_basic.png");
  setupObjectAnimations();
  setupBackgroundAnimations();
}

function setupLayers() {
// Generated with gQ's Tiles map editor
var map = [[1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
           [2, 1, 2, 1, 2, 1, 0, 0, 0, 1, 2, 1, 0, 0, 0, 1, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
           [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
           [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
           [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]];

  var bushes = [
    [TILE_WIDTH *  1, TILE_HEIGHT * 4],
    [TILE_WIDTH *  4, TILE_HEIGHT * 6],
    [TILE_WIDTH *  8, TILE_HEIGHT * 6],
    [TILE_WIDTH * 13, TILE_HEIGHT * 3],
    [TILE_WIDTH * 13, TILE_HEIGHT * 6.5],
    [TILE_WIDTH * 14, TILE_HEIGHT * 6.5],
    [TILE_WIDTH * 18, TILE_HEIGHT * 3],
    [TILE_WIDTH * 19, TILE_HEIGHT * 6]];
  var borders = [
    [ 3, 0],
    [ 4, 0],
    [ 5, 0],
    [ 6, 0],
    [ 6, 1],
    [ 7, 1],
    [ 8, 1],
    [ 8, 0],
    [ 9, 0],
    [10, 0],
    [11, 0],
    [12, 0],
    [12, 1],
    [13, 1],
    [14, 1],
    [14, 0],
    [15, 0],
    [16, 0],
    [17, 0]];
  var honeypots = [
    [TILE_WIDTH *  2, TILE_HEIGHT * 5],
    [TILE_WIDTH *  3, TILE_HEIGHT * 3],
    [TILE_WIDTH *  6, TILE_HEIGHT * 6],
    [TILE_WIDTH *  9, TILE_HEIGHT * 5],
    [TILE_WIDTH * 10, TILE_HEIGHT * 7],
    [TILE_WIDTH * 12, TILE_HEIGHT * 3],
    [TILE_WIDTH * 14, TILE_HEIGHT * 2],
    [TILE_WIDTH * 15, TILE_HEIGHT * 1],
    [TILE_WIDTH * 17, TILE_HEIGHT * 5],
    [TILE_WIDTH * 18, TILE_HEIGHT * 2]];

  var i;

  var mainGroup = $.playground().addGroup("main", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT});
  mainGroup.addSprite("sky", {posx: 0, posy: 0, width: map[0].length * TILE_WIDTH, height: PLAYGROUND_HEIGHT});
  mainGroup.addGroup("background", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
      .addTilemap('tilemap', map,  animations, {width: 44, height: 33, sizex: 20, sizey: 8}).end().end();
  mainGroup.addSprite("finishLine", {
    animation: animations["finishLine"],
    posx: $("#tilemap").width()-TILE_WIDTH,
    posy: 0,
    width: TILE_WIDTH,
    height: PLAYGROUND_HEIGHT});
  mainGroup.addSprite("player", {
    animation: animations["playerStoppedRight"],
    posx: SPRITE_WIDTH,
    posy: TILE_HEIGHT + SPRITE_HEIGHT,
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

