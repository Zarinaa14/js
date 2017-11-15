var div = document.getElementById('div');
var settings =  {
	"#one":{
		path: 'one.html'
	},
	"#two":{
		path: 'two.html',

		handler: function(){
			div.innerHTML = this.responseText;
			
		    bt.addEventListener('click' , function(){
			var input = document.getElementById('input');
		    var bt = document.getElementById('button');	
			alert(input.value);
			})
		}
	},
	"#three":{
		path: 'three.html'
	},
	"#four":{
		path: 'four.html'
	},
	"#five":{
		path: 'five.html',
		
	}
}

var changeHashRonte = function(){
		if(location.hash in settings){
			var path = settings[location.hash].path;
			var xhr =  new XMLHttpRequest();
			xhr.open('GET',path ,true);
			xhr.onload =function (){
				div.innerHTML = this.responseText;
				settings[location.hash].handler;
				
			}
			  xhr.send(null);
		
		}
	}
		 
			window.onhashchange = changeHashRonte;
			changeHashRonte();
	