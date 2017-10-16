var div = document.getElementsByClassName("clock")[0];
var p = document.getElementsByClassName("p")[0];
setInterval(function(){
    
	var elem= new Date();
	var End = new Date();
	End.setHours(23,59,59,59);
	var hours = End.getHours() - elem.getHours();
	var minutes = End.getMinutes() - elem.getMinutes();
	var seconds = End.getSeconds() - elem.getSeconds();
	if(seconds<=9) seconds = "0"+seconds;
		if(hours<=9) hours = "0"+hours;
		if(minutes<=9)  minutes="0"+minutes;
	
p.innerText = hours + ":" + minutes  +":"+ seconds;
		
		
},1000);			
		
		