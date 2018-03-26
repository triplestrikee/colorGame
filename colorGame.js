var numberOfSquares = 9;
var colors = generateRandomColors(numberOfSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
	setupModeButtons();
	setupSquares();
	reset();
};

function setupModeButtons()
{
	for (var i = 0; i < modeButtons.length; i++) 
	{
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");

		this.classList.add("selected");
		if(this.textContent === "Easy")
		{
			numberOfSquares = 3;
		}
		else
		{
			numberOfSquares = 9;	
		}


		reset();

		});
	};
}

function setupSquares()
{
	for (var i = 0; i < squares.length; i++) 
	{
		//add colors to squares
		squares[i].style.backgroundColor = colors[i];
		//add envent
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "CORRECT ! !";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	};
}



function reset()
{
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}

	};
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

};


resetButton.addEventListener("click", function(){

	reset();
});



function changeColors(color)
{
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	};
};

function pickColor()
{
	//var random = Math.floor(Math.random()*6);
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

};

function generateRandomColors(num)
{
	//return random color array
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr[i]= (randomColor());
	};

	return arr;


};

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g +", " + b + ")";

};