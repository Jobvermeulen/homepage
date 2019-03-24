function getdate(){
	var dag = new Date();
	var days = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
	document.getElementById("dag").innerHTML = days[dag.getDay()];

	var jaar = new Date();
	document.getElementById("jaar").innerHTML = jaar.getFullYear();

	var datum = new Date();
	document.getElementById("datum").innerHTML = datum.getDate();

	var maand = new Date();
	var maanden = ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];
	document.getElementById("maand").innerHTML = maanden[maand.getMonth()];
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) 
	{i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function google() {
	var key = event.keyCode;
	if(key === 13){
		var str=document.getElementById('googleinfo').value;
		str="http://www.google.com/search?hl=nl&source=hp&q=" + str + "&aq=f&oq=&aqi=";
		var google=str.replace(" ","+");
		window.open(google);
	}	
}
function googlekey(){
	var str=document.getElementById('googleinfo').value;
	str="http://www.google.com/search?hl=nl&source=hp&q=" + str + "&aq=f&oq=&aqi=";
	var google=str.replace(" ","+");
	window.open(google);
}