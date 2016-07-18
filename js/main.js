var boxes = [ 2, 2,
			  3, 3,
			  4, 4,
			  5, 5, 5,
<<<<<<< HEAD
			  6, 6, 6, 6, 6,
			  7, 7, 7, 7, 7, 7, 7,
			  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
			  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
		      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 
=======
			  6, 6, 6,
			  7, 7, 7, 7,
			  8, 8, 8, 8, 8, 8, 8, 8,
			  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
		      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		      11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
		      11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      ];
<<<<<<< HEAD

=======
			  //No of levels
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5

var colrs = ["#b71c1c", "#006064", "#C51162", "#F50057", "#6A1B9A",
  "#880E4F", "#673AB7", "#303F9F", "#0D47A1", "#607D8B", "#2E7D32",
  "#00695C", "#01579B", "#FF6F00", "#424242", "#FF5722", "#BF360C",
  "#795548", "#E65100", "#6200EA", "#9C27B0", "#9E9D24", "#263238",
  "#d50000", "#0D47A1", "#4A148C", "#3E2723", "#00695C", "#827717",

  			 "#b71c1c", "#006064", "#C51162", "#F50057", "#6A1B9A",
  "#880E4F", "#673AB7", "#303F9F", "#0D47A1", "#607D8B", "#2E7D32",
  "#00695C", "#01579B", "#FF6F00", "#424242", "#FF5722", "#BF360C",
  "#795548", "#E65100", "#6200EA", "#9C27B0", "#9E9D24", "#263238",
<<<<<<< HEAD
  "#d50000", "#0D47A1", "#4A148C", "#3E2723", "#00695C", "#827717"]; 
=======
  "#d50000", "#0D47A1", "#4A148C", "#3E2723", "#00695C", "#827717"]; //doublets to increase randomocity
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5


var score = 0;
var seconds;
var temp;
<<<<<<< HEAD
var randomBox;
var col;
var opacy = 0.77;
=======
var randomBox //it has to be global for reasons
var col;
var opacy = 0.70;
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5

var factorial = function (number){
	if (number ===0 || number === 1)
		return 1;
	return factorial(number-1)*number;
};

<<<<<<< HEAD

=======
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
var index = 0;
var help = false;

var bigbox = document.getElementById("bigbox");
var boxH = getComputedStyle(bigbox).getPropertyValue("height");

var max_size = factorial(Math.max(...boxes));
var bigBoxSize = boxH.slice(0,boxH.length - 2);

function createSmallBox(total_extra_space, no_of_box){
	
	var h = bigBoxSize - total_extra_space;

	console.log(h);

	h = h/no_of_box + "px";

	var SmallBox = document.createElement("div");

	SmallBox.id = "SmallBox";
	SmallBox.style.backgroundColor = col;
	SmallBox.style.height = h;
	SmallBox.style.width = h;	
	bigbox.appendChild(SmallBox);
}

<<<<<<< HEAD

=======
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
function scoreUpdater () {
	 ScoreDiv = document.getElementById("score");
	 ScoreDiv.innerHTML = "Score: " + score;
}

function randomBoxSelector() {
	 var allChilds = bigbox.childNodes;
	 randomBox = allChilds[Math.floor((Math.random() * (boxes[index]*boxes[index])))];
	 randomBox.style.opacity = opacy;
	 
	 if(index % 2 == 0)
		{	 
<<<<<<< HEAD
			opacy = opacy + 0.004;	
=======
			opacy = opacy + 0.005;	
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
		}

		 randomBox.onclick = function (){
	 	 if(index == 1){
	 	 	document.getElementById('countdown').innerHTML = 60 + 1;
	 	 	 //Set the time here.
	 	 	countdown();
	 	 }
	 	 score++;
	 	 scoreUpdater();
	 	 start(); 
	 }
}

function create(){
	col = colrs[Math.floor((Math.random() * (colrs.length)))];
	for(var i=0; i<boxes[index]*boxes[index]; i++){
		var extra_spaces = 6 * boxes[index];
		createSmallBox(extra_spaces, boxes[index]);
	}
	randomBoxSelector();
}
<<<<<<< HEAD


function scoreplay () {
	 bigbox.style.backgroundColor = "black";
	 bigbox.style.fontSize = bigBoxSize * 0.13 + "px";
	 bigbox.style.color = "white";
	 bigbox.style.textAlign = "center";
	 bigbox.style.fontFamily = "'Passion One', cursive, sans-serif";

	 bigbox.innerHTML = "</br></br>Your Score: " + score;

	 bigbox.innerHTML = bigbox.innerHTML + "</br></br> Tap to Replay";

	 bigbox.onclick = function () {
	 	 location.reload();
	 }
	 
}
=======
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
 
function countdown() {
	seconds = document.getElementById('countdown').innerHTML;
	seconds = parseInt(seconds, 10);

	if (seconds == 1) {
		temp = document.getElementById('countdown');
		temp.innerHTML = "Game Over";
		randomBox.style.backgroundColor = "black";
		randomBox.onclick = null;
<<<<<<< HEAD
		scoreplay();
		// window.alert("Your Score = " + score);
		}

	seconds--;
        if (seconds == 0){
            var game_over = document.getElementById('game_over');
            game_over.play();
        }
        else{
	    var tick = document.getElementById('tick');
	    tick.volume = Math.max((60 - seconds) / 60, 0.7);
	    tick.play();
        }
=======
		window.alert("Your Score = " + score);
		return;
	}

	seconds--;
	var tick = document.getElementById('tick');
	tick.volume = (60 - seconds) / 60;
	tick.play();
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
	temp = document.getElementById('countdown');
	temp.innerHTML = seconds;
	timeoutMyOswego = setTimeout(countdown, 1000);
} 

function start(){
	if(index >= boxes.length)
		window.alert("Either you found a hack or you are GOD. Your Score = " + score);
		//This won't happen. let the player have no limits
	else{
		var bigBox = document.getElementById('bigbox');
		while(bigBox.firstChild){
			bigBox.removeChild(bigBox.firstChild);
		}
		create();
		index++;
	}
}

window.onload = function () {
	start();
};

<<<<<<< HEAD

window.onresize = function () {
	location.reload();
};


=======
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
var populate_help = function () {
	var help_obj = document.getElementById("help");
	var help_obj_div = document.createElement('div');
	help_obj_div.id = "help-text";

	help_obj_text = "<p>Society is always hard on the odd ones and so is this game. Seperate as many odd boxes from the matrix as you can while the Timer is still ticking.</p>"+
<<<<<<< HEAD
					"<p>Try to differentiate as fast as you can to check your reflexes and sense of judgement.</p>" +
					"<p>By: vigzmv </p>";
=======
					"<p>Try to differentiate as fast as you can to check your reflexes and sense of judgement.</p>";
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5

	help_obj_div.innerHTML += help_obj_text;

	help_obj.appendChild(help_obj_div);
};

<<<<<<< HEAD

=======
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
var help_height = $("#help").height();
var help_width = $("#help").width();

$("#help").click(function () {
	if (!help){
		$("#help").animate({
<<<<<<< HEAD
			height: "240px",
=======
			height: "200px",
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
			width: "300px"
		}, 500);
		populate_help();
		help = true;
	}
	else{
		$("#help-text").remove();
		$('#help').animate({
			height: ""+help_height+"px",
			width: ""+help_width+"px"
		}, 500);
		help = false;
	}
<<<<<<< HEAD
});
=======
});
>>>>>>> 5b8a8fca067e95c111ffcfc54a2d4f768a98a7a5
