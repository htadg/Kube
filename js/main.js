var boxes = [ 2, 2,
			  3, 3,
			  4, 4,
			  5, 5, 5,
			  6, 6, 6, 6, 6,
			  7, 7, 7, 7, 7, 7, 7,
			  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
			  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
		      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11,
		      11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      ];


var colrs = ["#b71c1c", "#006064", "#C51162", "#F50057", "#6A1B9A",
  "#880E4F", "#673AB7", "#303F9F", "#0D47A1", "#607D8B", "#2E7D32",
  "#00695C", "#01579B", "#FF6F00", "#424242", "#FF5722", "#BF360C",
  "#795548", "#E65100", "#6200EA", "#9C27B0", "#9E9D24", "#263238",
  "#d50000", "#0D47A1", "#4A148C", "#3E2723", "#00695C", "#827717",

  			 "#b71c1c", "#006064", "#C51162", "#F50057", "#6A1B9A",
  "#880E4F", "#673AB7", "#303F9F", "#0D47A1", "#607D8B", "#2E7D32",
  "#00695C", "#01579B", "#FF6F00", "#424242", "#FF5722", "#BF360C",
  "#795548", "#E65100", "#6200EA", "#9C27B0", "#9E9D24", "#263238",
  "#d50000", "#0D47A1", "#4A148C", "#3E2723", "#00695C", "#827717"];

// Device Detection
var isMobile = false; //initiate as false
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

// Device Detected


var score = 0;
var seconds;
var temp;
var randomBox;
var col;
var box_no;
var name;
var opacy = 0.77;

var index = 0;
var help = false;

var bigbox = document.getElementById("bigbox");
var boxH = getComputedStyle(bigbox).getPropertyValue("height");

var bigBox;
var gameOver = false;
var submitting = false;
var thanking = false;
var populated = false;

console.log('isMobile: ' + isMobile);

var bigBoxSize = boxH.slice(0,boxH.length - 2);

function createSmallBox(total_extra_space, no_of_box){

	var boxH = getComputedStyle(bigbox).getPropertyValue("height");

	var bigBoxSize = boxH.slice(0,boxH.length - 2);

	var h = bigBoxSize - total_extra_space;

	console.log(h);

	h = h/no_of_box + "px";

	var SmallBox = document.createElement("div");

	SmallBox.className = "SmallBox";
	SmallBox.style.backgroundColor = col;
	SmallBox.style.height = h;
	SmallBox.style.width = h;
	SmallBox.style.float = 'left';
	bigbox.appendChild(SmallBox);
}


function scoreUpdater () {
	 ScoreDiv = document.getElementById("score");
	 ScoreDiv.innerHTML = "Score: " + score;
}

function randomBoxSelector(known_no) {
	 var allChilds = bigbox.childNodes;
	 box_no = known_no || Math.floor((Math.random() * (boxes[index]*boxes[index])));
	 randomBox = allChilds[box_no];
	 randomBox.style.opacity = opacy;

	 if(index % 2 == 0)
		{
			opacy = opacy + 0.004;
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
		var extra_spaces = 5 * boxes[index];
		createSmallBox(extra_spaces, boxes[index]);
	}
	randomBoxSelector();
}

function checkName () {
	if (name != undefined && name != '' && name != 'undefined')
		$('.name-input').val(name);
}

var submitScore = function () {
	submitting = true;
	$('#bigbox').html('');
	var form = '<div class="form">';
	form += '<img class="avatar" src="https://api.adorable.io/avatars/129/Kube.png">';
	form += '<div class="your-name"><input class="name-input" type="text" placeholder="Your Name"/></div>';
	form += '<div class="name-score">Score: ' + score +'</div>';
	form += '<div class="name-submit btn">Submit</div>';
	form += '<div class="name-back btn">Back</div>';

	$('#bigbox').html(form);

	checkName();

	if ($('name-input').val() != "" && $('.name-input').val() != " "){
		var url = "https://api.adorable.io/avatars/129/" + $('.name-input').val() + ".png";
		$('.avatar').attr({'src': url});
	}

	var boxH = getComputedStyle(bigbox).getPropertyValue("height");

	var bigBoxSize = boxH.slice(0,boxH.length - 2);

	$('.avatar').css('width', '20%');
	$('.avatar').css('height', 'auto');

	$('.name-input').bind('keyup', function () {
		var url = "https://api.adorable.io/avatars/129/" + $('.name-input').val() + ".png";
		$('.avatar').attr({'src': url});
	});

	$('.name-submit').click(function () {
		name = $('.name-input').val();
		submit();
		submitting = false;
		thanking = true;
		postSubmit();
	});

	$('.name-back').click(function () {
		countdown(1);
	});

};

function scoreplay () {
	 var bigBoxSize = getComputedStyle(bigbox).getPropertyValue("height").slice(0,boxH.length - 2);
	 bigbox.style.backgroundColor = "black";
	 bigbox.style.fontSize = bigBoxSize * 0.13 + "px";
	 bigbox.style.color = "white";
	 bigbox.style.textAlign = "center";
	 bigbox.style.fontFamily = "'Passion One', cursive, sans-serif";

	 bigbox.innerHTML = "</br></br>Your Score: " + score;

	 bigbox.innerHTML = bigbox.innerHTML + "</br><div id='submit-score'> Submit Score </div></br> <div id='replay'>Tap to Replay</div>";

	 $('#submit-score').click( function () {
	 	submitScore();
	 });

	 $('#replay').click( function () {
	 	 location.reload();
	 });

}

function countdown(second) {
	seconds = document.getElementById('countdown').innerHTML;
	seconds = second || parseInt(seconds, 10);

	if (seconds == 1) {
		temp = document.getElementById('countdown');
		temp.innerHTML = "Game Over";
		randomBox.style.backgroundColor = "black";
		randomBox.onclick = null;
		scoreplay();
		// window.alert("Your Score = " + score);
	}

	seconds--;
    if (seconds === 0){
        var game_over = document.getElementById("game_over");
        gameOver = true;
        game_over.play();
    }
    else{
		var tick = document.getElementById('tick');
		volume = Math.max((60 - seconds) / 60, 0.5);
		tick.volume = (volume <= 1)? volume : 1;
		tick.play();
		temp = document.getElementById('countdown');
		temp.innerHTML = seconds;
		timeoutMyOswego = setTimeout(countdown, 1000);
	}
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


window.onresize = function () {
	if (gameOver){
		if (!submitting){
			if(thanking){
				postSubmit();
			}
			else{
				countdown(1);
			}
		}
		else{
			if (!isMobile)
				submitScore();
		}
	}
	else{
		bigBox = document.getElementById('bigbox');
		while(bigBox.firstChild){
			bigBox.removeChild(bigBox.firstChild);
		}
		for(var i=0; i<boxes[index]*boxes[index]; i++){
			var extra_spaces = 5 * boxes[index];
			createSmallBox(extra_spaces, boxes[index]);
		}
		randomBoxSelector(box_no);
	}
};


var populate_help = function () {
	var help_obj = document.getElementById("help");
	var help_obj_div = document.createElement('div');
	help_obj_div.id = "help-text";

	help_obj_text = "<p>Society is always hard on the odd ones and so is this game. Seperate as many odd boxes from the matrix as you can while the Timer is still ticking.</p>"+
					"<p>Try to differentiate as fast as you can to check your reflexes and sense of judgement.</p>" +
					"<p>By: htadg </p>";

	help_obj_div.innerHTML += help_obj_text;

	help_obj.appendChild(help_obj_div);
};


var help_height = $("#help").height();
var help_width = $("#help").width();

$("#help").click(function () {
	if (!help){
		$("#help").animate({
			height: "240px",
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
});

var leaderboard;
var displaying = false;
var point_height = $("#leaderboard").height();
var point_width = $("#leaderboard").width();

function populatePoints () {
	var frame = document.getElementById('leaderboard');
	var table = document.createElement('table');
	table.id = "points-table";
	var tableHeaders = document.createElement('thead');
	tableHeaders.id = "table-header";
	var headers = '<tr><th></th><th>Player</th><th>Score</th></tr>';

	var minify = function(name){
		var suffix = "";
		if(name.length > 8)	suffix = "..";
		return name.slice(0, Math.min(8, name.length)) + suffix;
	};

	tableHeaders.innerHTML += headers;
	var tableBody = document.createElement('tbody');
	tableBody.id = "table-body";
	var bodyContent = '';
	for (var i=1; i <= leaderboard.length; i++){
		bodyContent += '<tr id="player' + i + '">';
		bodyContent += '<td>' + i +'</td>';
		bodyContent += '<td>' + minify(leaderboard[i - 1]['name']) + '</td>';
		bodyContent += '<td>' + leaderboard[i - 1]['score'] + '</td>';
		bodyContent += '</tr>';
	}
	tableBody.innerHTML += bodyContent;
	table.appendChild(tableHeaders);
	table.appendChild(tableBody);

	frame.appendChild(table);

	$('.loader').css({'display': 'none'});

	populated = true;
}

function maintainConsistency () {
	leaderboard = undefined;
	populated = false;
}

$("#leaderboard").click(function () {
	if (leaderboard == undefined){
        setInterval(function () { maintainConsistency(); }, 10*60*1000);
		$.ajax({
            url: "https://kube-server.herokuapp.com/api/v1/score/",
            type: "GET",
            async: true,
            crossDomain: true,
            dataType: "json",
            success: function (response) {
            	console.log('calling api...');
                leaderboard = response;
				console.log(leaderboard);
				populatePoints();
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
	}

	if (!displaying){
		var suffix = (window.innerHeight > window.innerWidth)? "vh": "vw";
		$("#leaderboard").animate({
			height: "40"+suffix,
			width: "25"+suffix
		}, 500);
		document.getElementById('leaderboard').innerHTML += '<div class="loader"><span></span><span></span><span></span></div>';
		if (populated)
			populatePoints();
		displaying = true;
	}
	else{
		$("#points-table").remove();
		$('#leaderboard').animate({
			height: ""+point_height+"px",
			width: ""+point_width+"px"
		}, 500);
		displaying = false;
		// populated = false;
	}
});

var submit  = function () {
	if (name == '')
		name = "Anonymous";
	$.ajax({
            url: "https://kube-server.herokuapp.com/api/v1/score/",
            type: "POST",
            async: true,
            crossDomain: true,
            withCredentials: true,
            dataType: "json",
            data: {"name":name , "score": score},
            success: function (response) {
            	console.log('Score Submitted....');
            	console.log(response);
            },
            error: function (xhr, status) {
                alert("Check your Internet Connection.");
            }
        });
};

var postSubmit = function () {
	$('#bigbox').html('');
	var thanks = '<div class="thanks">Thank You <br /> <br/>Tap to Replay</div>';
	$('#bigbox').html(thanks);
	$('.thanks').click(function () {
		location.reload();
	});
};
