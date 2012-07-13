function setupAnimations() {
  setupPlayerAnimations("res/player_basic.png");
  setupObjectAnimations();
  setupBackgroundAnimations();
}

function setupLayers() {
// Generated with gQ's Tiles map editor
var map = [[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
           [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
           [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 2, 1, 2, 1, 2, 1, 2, 1, 5, 5, 2, 1, 2, 1, 2],
           [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 1, 2, 1, 5, 5, 5, 5, 5, 5, 2, 1, 2, 1],
           [5, 5, 5, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 1, 2],
           [5, 5, 3, 3, 9, 9, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 5, 5, 5, 5, 1],
           [5, 3, 3, 9, 9, 9, 9, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 9, 3, 3, 5, 5, 5, 5],
           [5, 3, 9, 9, 9, 9, 9, 9, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 9, 9, 9, 9, 3, 5, 5, 5, 5]];

  var bushes = [
    [TILE_WIDTH *  0.8, TILE_HEIGHT * 2],
    [TILE_WIDTH *  1.5, TILE_HEIGHT * 3],
    [TILE_WIDTH *  5.5, TILE_HEIGHT * 3.5],
    [TILE_WIDTH *  6.5, TILE_HEIGHT * 2.5],
    [TILE_WIDTH * 10.5, TILE_HEIGHT * 4],
    [TILE_WIDTH * 11.5, TILE_HEIGHT * 1.5],
    [TILE_WIDTH * 13.5, TILE_HEIGHT * 7],
    [TILE_WIDTH * 13.5, TILE_HEIGHT * 6.7],
    [TILE_WIDTH * 13.5, TILE_HEIGHT * 5.9],
    [TILE_WIDTH * 14,   TILE_HEIGHT * 5],
    [TILE_WIDTH * 14.5, TILE_HEIGHT * 0],
    [TILE_WIDTH * 17,   TILE_HEIGHT * 1],
    [TILE_WIDTH * 17.5, TILE_HEIGHT * 1.5],
    [TILE_WIDTH * 17,   TILE_HEIGHT * 4.5],
    [TILE_WIDTH * 17.5, TILE_HEIGHT * 4.5],
    [TILE_WIDTH * 18,   TILE_HEIGHT * 4.5],
    [TILE_WIDTH * 20.5, TILE_HEIGHT * 0],
    [TILE_WIDTH * 23.5, TILE_HEIGHT * 1.5],
    [TILE_WIDTH * 25.5, TILE_HEIGHT * 2.5],
    [TILE_WIDTH * 26.5, TILE_HEIGHT * 4.5],
    [TILE_WIDTH * 26.5, TILE_HEIGHT * 5.5]];
  var borders = [
    // left lake
    [ 2, 7],
    [ 3, 7],
    [ 3, 6],
    [ 4, 6],
    [ 4, 5],
    [ 5, 5],
    [ 5, 6],
    [ 6, 6],
    [ 6, 7],
    [ 7, 7],
    // right lake
    [19, 7],
    [20, 7],
    [21, 7],
    [21, 6],
    [22, 7]];
  var honeypots = [
    [TILE_WIDTH *  1.5, TILE_HEIGHT * 5.5],
    [TILE_WIDTH *  4.5, TILE_HEIGHT * 0.5],
    [TILE_WIDTH *  4.5, TILE_HEIGHT * 1],
    [TILE_WIDTH *  9,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 10,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 11.5, TILE_HEIGHT * 6],
    [TILE_WIDTH * 14.5, TILE_HEIGHT * 5.5],
    [TILE_WIDTH * 14.5, TILE_HEIGHT * 6],
    [TILE_WIDTH * 17,   TILE_HEIGHT * 2.5],
    [TILE_WIDTH * 17.5, TILE_HEIGHT * 5.5],
    [TILE_WIDTH * 18,   TILE_HEIGHT * 0],
    [TILE_WIDTH * 18.5, TILE_HEIGHT * 0],
    [TILE_WIDTH * 23.5, TILE_HEIGHT * 3],
    [TILE_WIDTH * 25.5, TILE_HEIGHT * 4.5],
    [TILE_WIDTH * 26.5, TILE_HEIGHT * 0.5]];

  var i;

  var mainGroup = $.playground().addGroup("main", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT});
  mainGroup.addGroup("background", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
      .addTilemap('tilemap', map,  animations, {width: 44, height: 33, sizex: 28, sizey: 8}).end().end();
  mainGroup.addSprite("finishLine", {
    animation: animations["finishLine"],
    posx: $("#tilemap").width()-TILE_WIDTH,
    posy: 0,
    width: TILE_WIDTH,
    height: PLAYGROUND_HEIGHT});
  mainGroup.addSprite("player", {
    animation: animations["playerStoppedRight"],
    posx: 0 + TILE_WIDTH / 2,
    posy: TILE_HEIGHT*0 + SPRITE_HEIGHT/2,
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

