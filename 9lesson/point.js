var point = {
	x: 0,
	y: 0
};
//var reg = /^[0-9]{1,}$/;
Object.defineProperty(point, "x", {
	
})

Object.defineProperty(point, "x", {
	get: function(){
		return this.x;
	},
	
		 
           
	set: function(value){
		if((/^[0-9]{1,}$/).test(value))
			this.x = Number(value);
	}
})
point.__defineGetter__("y", function(){
	return this.y;
})
point.__defineSetter__("y", function(value){
	if((/^[0-9]{1,}$/).test(value))
		this.y = Number(value);
})

Object.defineProperty(point, "distance", {
	value: function(x, y){
		if((/^[0-9]{1,}$/).test(x) && (/^[0-9]{1,}$/).test(y))
			return Math.sqrt(Math.pow(x-this.x,2)+Math.pow(y-this.y,2));
	}
})