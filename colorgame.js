var colors=[];
var choice=6;
var picked;
var square=document.querySelectorAll(".square");
var display= document.getElementById("display");
var message= document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");

init();

function init(){
	setupbuttons();
	setupsquare();
	resete();
}

function setupsquare(){
for (var i = 0; i < square.length; i++) {
	square[i].addEventListener("click",function(){
		var clicked= this.style.backgroundColor;
		if (picked===clicked) {
			message.textContent="Correct";
			changeColors(clicked);
			h1.style.backgroundColor=clicked;
			reset.textContent="Play Again";
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	});	
}
}

function setupbuttons(){
	for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent==="easy" ? choice=3 : choice=6;
	/*	if (this.textContent==="easy") {
			choice=3;
		}
		else choice=6;*/
		resete();
		});
	}
}


function resete(){
	colors=generate(choice);
	picked=pickColor();
	display.textContent=picked;
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Colors";
	message.textContent="";

	for (var i = 0; i < square.length; i++) {
		square[i].style.display="block";
		if (colors[i]) {
			square[i].style.backgroundColor=colors[i];
		}
		else
		square[i].style.display="none";

	}
}
/*easyBtn.addEventListener("click",function(){
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
colors=generate(3);
picked=pickColor();
display.textContent=picked;
h1.style.backgroundColor="steelblue";
reset.textContent="New Colors";
for (var i = 0; i < square.length; i++) {
	if (colors[i]) {
	square[i].style.backgroundColor=colors[i];
	}
	else
	square[i].style.display="none";
}
choice=3;

});

hardBtn.addEventListener("click",function(){
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
choice=6;
colors=generate(choice);
picked=pickColor();
display.textContent=picked;
h1.style.backgroundColor="steelblue";
reset.textContent="New Colors";
for (var i = 0; i < square.length; i++) {
	square[i].style.backgroundColor=colors[i];
	square[i].style.display="block";
}

});*/

display.textContent=picked;

reset.addEventListener("click",resete);
/*reset.addEventListener("click",function(){
colors=generate(choice);
picked=pickColor();
display.textContent=picked;
h1.style.backgroundColor="steelblue";
reset.textContent="New Colors";
message.textContent="";

for (var i = 0; i < square.length; i++) {
	square[i].style.backgroundColor=colors[i];
}
});*/


function changeColors(color){

	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor= color;
	}

}


function pickColor(){
// math.floor(math.random()*6+1);
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generate(num){
var arr=[];
for (var i = 0; i < num; i++) {
	arr.push(randomColor());
}

return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}