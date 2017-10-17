function ff(length, average, variat){
	var min = average - variat * average / 100;
	var max = average + variat * average / 100;
	var arr = new Array();
	for(var i = 0; i < length; i++){
		arr[i] = (min + Math.random() * (max + 1 - min)).toFixed(1);
 	}
 	return arr;
}

function Sort(a, b){
	return a - b;
}
var arr = ff(20, 25, 30);
console.log(arr);
arr.sort(Sort);
console.log(arr);

var sum = 0;
for(var i = 0; i < arr.length; i++){
	sum += Number(arr[i]);
} 

console.log((sum/arr.length).toFixed(3));