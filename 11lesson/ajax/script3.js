var div = document.getElementById('div');
var settings =  {
	"#one":{
		path: 'one.html'
	},
	"#two":{
		path: 'two.html',
        local: function(){
			      div.innerHTML = this.responseText;
			     bt.addEventListener('click', function(){
		         var bt= document.getElementById('button');
	             var bt1= document.getElementById('button1');
		         bt1.addEventListener('click', function(){
			     alert(input1.value);
	})
		  
		})
	}
		
	},
	"#three":{
		path: 'three.html'
	},
	"#four":{
		path: 'four.html',
		local: function(){

			
			
			
			
		
		}
	},
	"#five":{
		path: 'five.html',
		local: function(){
		}
	}

 
	var change = function(){
	var path = settings[location.hash].path;
	var locals = settings[location.hash].local;
	var xhr = new XMLHttpRequest; xhr.open("GET", path, true);
	xhr.onload = function(){
		div.innerHTML = this.responseText;
		locals();
	}
	xhr.send(null);
}
window.onhashchange = function(){
	change();
}