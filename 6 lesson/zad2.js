var elem = document.body;
  var w1 =document.getElementById("w1");
  var w2 =document.getElementById("w2");
  var w3 =document.getElementById("w3");
  var w4 =document.getElementById("w4");
  var w5 =document.getElementById("w5");


	 

 var num;
num=[Math.floor(Math.random() * 2000 )+1950];

setInterval(function(){

 
 	var names = ["Roma", "Dasha", "Vika","Katya","Olya","Igor","Stepa","Misha","Lyba","Lyda","Nikita"];
    var cities = ["Baranovichi", "Polotsk", "Novopolotsk", "Vitebsk", "Mogilev"];
    var tovar = ["apple","cherry","strawberry","lemon","blueberry","melon","busderry","watermelon",];
    var kol =[1,2,3,4,5,6,7,8,9,10 ];
    var summa = [500,300,400,200,100,600,900,800,700];
	var h = {}; 
	 h.kol = [Math.floor(Math.random() * (kol.length))];
		h.name = names[Math.floor(Math.random() * (names.length))];
		h.city = cities[Math.floor(Math.random() * (cities.length))];
		h.tov = tovar[Math.floor(Math.random() * (tovar.length))];
		h.sum = summa[Math.floor(Math.random() * (summa.length))];
	

	    var div = document.getElementsByClassName("main")[0];	
	    var t = document.getElementsByClassName("p")[0];
		var kol = document.getElementsByClassName("kol")[0];
		var p = document.getElementsByClassName("tovar")[0];
		var sum = document.getElementsByClassName("summa")[0];
		
    p.innerText = h.name;
    div.innerText = h.city;
	t.innerText =  'товар: '+ h.tov;
	sum.innerText =  'summa :' + h.sum;
	kol.innerText =  'количество :' + h.kol;
},num);
w1.addEventListener('click', function(){
	 this.parentNode.remove();   })
w2.addEventListener('click', function(){
	 this.parentNode.remove();   })
w3.addEventListener('click', function(){
	 this.parentNode.remove();   })
w4.addEventListener('click', function(){
	 this.parentNode.remove();   })
w5.addEventListener('click', function(){
	 this.parentNode.remove();   })	 