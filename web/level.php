<?php

$level = $_GET['level'];
if (!preg_match('/^\d+$/', $level)) $level = 1;

$score = $_GET['score'];
if (!preg_match('/^\d+$/', $score)) $score = 0;

?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Blue Bear, Level <?=$level?></title>
<link href='http://fonts.googleapis.com/css?family=Permanent+Marker' rel='stylesheet' type='text/css'/>
<link rel="stylesheet" type="text/css" href="res/style.css"/>
</head>
<body>

<div id="playground">
 <div id="start" class="statusOverlay">START<span>(press any arrow key to begin)</span></div>
 <div id="paused" class="statusOverlay hidden">PAUSED<span>(press ESC to continue)</span></div>
 <div id="win" class="statusOverlay hidden">WINNER!<span>(<a id="nextLevelLink" href="level.php?level=<?=($level+1)?>&score=">click for next level</a>)</span></div>
 <div id="lose" class="statusOverlay hidden">YOU LOST...<br/>SORRY&nbsp;&nbsp;&nbsp;:(<span>(<a href="#" onclick="window.location.reload()">click to try again</a>)</span></div>
 <div id="underConstruction" class="statusOverlay hidden">level <?=$level?> under construction</div>
</div>
<div id="scoreboard">
 <label id="score">Score: <span><?=$score?></span></label><br/>
 <label id="level">Level: <?=$level?></label>
</div>
<div id="controls">
 <div id="pause">Pause</div>
 <div id="arrows">
  <button id="arrowUp">&uarr;</button><br/>
  <button id="arrowLeft">&larr;</button>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <button id="arrowRight">&rarr;</button><br/>
  <button id="arrowDown">&darr;</button>
 </div>
</div>

<script type="text/javascript" src="res/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="res/jquery.gamequery-0.6.2.js"></script>


<?php if (!file_exists("levels/${level}.js")): ?>

<script type="text/javascript">
PLAYGROUND_WIDTH = 352;
PLAYGROUND_HEIGHT = 264;
$(function () {
  $("#playground").playground({width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT});
  $("#start").addClass("hidden");
  $("#underConstruction").toggleClass("hidden");
});
</script>

<?php else: ?>

<script type="text/javascript" src="res/hammer.js"></script>
<script type="text/javascript" src="res/jquery.hammer.js"></script>
<script type="text/javascript" src="res/game_globals.js"></script>
<script type="text/javascript" src="res/game_objects.js"></script>
<script type="text/javascript">
<?php require("levels/${level}.js"); ?>
score = <?=$score?>;
</script>
<script type="text/javascript" src="res/game_main.js"></script>

<?php endif; ?>


</body>
</html>
