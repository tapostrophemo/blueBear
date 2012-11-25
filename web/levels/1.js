function setupAnimations() {
  setupPlayerAnimations("res/player_basic.png");
  setupObjectAnimations();
  setupBackgroundAnimations();
}

function setupLayers() {
// Generated with gQ's Tiles map editor
var map = [[2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
           [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
           [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
           [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]];

  var bushes = [
    [TILE_WIDTH *  2, TILE_HEIGHT * 3],
    [TILE_WIDTH *  7, TILE_HEIGHT * 6],
    [TILE_WIDTH * 11, TILE_HEIGHT * 5],
    [TILE_WIDTH * 13, TILE_HEIGHT * 2]];
  var honeypots = [
    [TILE_WIDTH *  3, TILE_HEIGHT * 3],
    [TILE_WIDTH *  6, TILE_HEIGHT * 5],
    [TILE_WIDTH *  9, TILE_HEIGHT * 7],
    [TILE_WIDTH * 11, TILE_HEIGHT * 4],
    [TILE_WIDTH * 15, TILE_HEIGHT * 0],
    [TILE_WIDTH * 16, TILE_HEIGHT * 2]];

  var i;

  var mainGroup = $.playground().addGroup("main", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT});
  mainGroup.addGroup("background", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
      .addTilemap('tilemap', map,  animations, {width: 44, height: 33, sizex: 18, sizey: 8}).end().end();
  mainGroup.addSprite("finishLine", {
    animation: animations["finishLine"],
    posx: $("#tilemap").width()-TILE_WIDTH,
    posy: 0,
    width: TILE_WIDTH,
    height: PLAYGROUND_HEIGHT});
  mainGroup.addSprite("player", {
    animation: animations["playerStoppedRight"],
    posx: SPRITE_WIDTH * 3,
    posy: (PLAYGROUND_HEIGHT - SPRITE_HEIGHT) / 2,
    width: SPRITE_WIDTH,
    height: SPRITE_HEIGHT});

  var obstacleGroup = mainGroup.addGroup("obstacles", {width: $("#tilemap").width(), height: PLAYGROUND_HEIGHT})
  for (i = 0; i < bushes.length; i++) {
    obstacleGroup.addSprite("bush_"+(i+1), {
      animation: animations["bush"],
      posx: bushes[i][0] + 30/2,
      posy: bushes[i][1] + 30/2,
      width: 30,
      height: 30});
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

