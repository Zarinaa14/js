function ff()
{
 
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
	
	setTimeout(ff,2000);
}

 
 setTimeout(ff,2000);
	