
var div = document.getElementById('div');

var settings = {
	"#one" : {
		path : "a.html",
		handler : function(e){
			div.innerHTML = e;
		}
	},
	"#two" : {
		path : "b.html",
		handler : function(e){
			div.innerHTML = e;
			var bt1= document.getElementById('button');
			var input= document.getElementById('input');
       bt1.addEventListener('click', function(){
			alert(input.value);
			
		})
		}
	},
	
	"#three" : {
		path : "c.html",
		handler : function(e){
			  div.innerHTML = e;
		    }
	},
	"#four" : {
		path : "d.html",
		handler : function(e){
		div.innerHTML = e;
		    }
		
	},
	"#five" : {
		path : "i.html",
		handler : function(e){
			div.innerHTML = e;
		}
	}


}

var changeHashRonte = function(){
		if(location.hash in settings){
			var path = settings[location.hash].path;
			var xhr =  new XMLHttpRequest();
			xhr.open('GET',path ,true);
			xhr.onload =function (){
			settings[location.hash].handler(this.responseText);
				
			}
			  xhr.send(null);
		
		}
	}
		 
			window.onhashchange = changeHashRonte;
			changeHashRonte();