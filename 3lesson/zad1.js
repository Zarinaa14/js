
var N = new Array();
var M = new Array();
N = ["Victor", "Sergey", "Lesha","Dasha","Milana","Nastay","Misha", "Nikita","Nikita","Victoriy", "Marina" ,"Artem"];
M = ["Slutsk", "Soligorsk", "Minsk", "Brest", "Mogilev" , "Pinsk" , "Bobruysk", "Baranovichi", "Borisov","Beloozersk","Bereza","Berezino"];
var result = new Array();
for (var i = 0; i<=12; i++){
//result[i]=set
result[i] = new Object();
<<<<<<< HEAD
result[i].Name = N[Math.floor(Math.random()*12)];
result[i].City = M[Math.floor(Math.random()*12)];
=======
result[i].Name = N[Math.floor(Math.random()*N.length)];
result[i].City = M[Math.floor(Math.random()*M.length)];
>>>>>>> b4b02f760c56e5aa60e7d6b4a9a6dba5b99dc07b
result[i].Age  =  Math.floor(Math.random()*60);
result[i].Print =  function(){
            console.log("Name: " + this.Name + " City: " + this.City + " Age: " + this.Age);
		console.log(" ");
			
		}
}
var Ages
function Sort(a,b){
	return a.Age<b.Age?1:-1;
}
result.sort(Sort);
for (var i = 0; i<=12; i++){
result[i].Print();
}
