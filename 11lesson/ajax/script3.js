var div = document.getElementById('div');
var settings =  {
	"#one":{
		path: 'one.html'
	},
	"#two":{
		path: 'two.html',

		handler: function(){
			div.innerHTML = this.responseText;
			var input = document.getElementsByTagName('input')[0];
		    var bt = document.getElementsByTagName('button')[0];
		    bt.addEventListener('click',function(){
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

var change = function(){
	if(settings[location.hash].handler == null){
		var path = settings[location.hash].path;
		 var xhr = new XMLHttpRequest();
		 xhr.open("GET",path,true);
		 xhr.onload = function(){
			 div.innerHTML = this.responseText;
     }
    }
     else{
      var path = settings[location.hash].path;
	   var xhr = new XMLHttpRequest();
	   xhr.open("GET",path,true);
	   xhr.onload = settings[location.hash].handler;

     }
	 xhr.send(null);
 }
window.onhashchange = function(){
	change();
}