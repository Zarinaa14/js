var id = 0;

function tovar(name, type, price, DateRelease){
	this.id = id++;
	this.name = name;
	this.type = type;
	this.price = price;
	this.DateRelease = DateRelease;
	
}


function TovarProduct(name,type,price,DateRelease,fit_to){
	tovar.apply(this,arguments);
    this.fit_to = fit_to;
    Object.defineProperty(this,'ShelfLife', {
    	get: function(){
    		var result1 = new Date(this.fit_to);
	        var result2 = new Date(this.DateRelease);
	        var result = (result1.getTime() - result2.getTime())/86500000;
            return result
    	}
    })
}
TovarProduct.prototype = Object.create(tovar.prototype);
TovarProduct.prototype = {
	constructor: TovarProduct,
}
var MasPr = new Array();
for (var k = 0; k < 5; k++){
     MasPr[k] = new Array()
for (var j = 0; j < 5; j++){
	name = 'Product ' + (j + 1);
	type = 'Type ' + (j + 1);
	price = Math.floor(Math.random()*70);
	DateRelease = '2016-12-01 00:00:00' 
	fit_to = '2017-05-'+ id + '6 00:00:00';
	MasPr[k][j] = new TovarProduct(name,type,price,DateRelease,fit_to);
}
}

console.log(MasPr);
function shop(name,adress ,masProd,price_markup,income){
	this.name = name;
	this.adress = adress;
	this.masProd = masProd;
	this.price_markup = price_markup;
	this.income = income;
	Object.defineProperty(this,'sumprice',{
		get: function(){
		var masPrices = new Array();
		for (var j = 0; j < masProd.length; j++){
			masPrices[j] = Number(masProd[j].price)
		}
		var sum = masPrices.reduce(function(prev,curr){
	        return prev + curr;
        },0)
        return sum;
	}
  })  
}
var shopMas = new Array()
for (var j = 0; j < 5; j++){
	name = 'Store ' + (j + 1);
	adress = 'Adress ' + (j + 1);
    masProd = MasPr[j]
	price_markup = Math.round(Math.random()*50) + '%';
	 income = Math.round(Math.random()*400);
	shopMas[j] = new shop(name,adress,masProd,price_markup, income);
}
console.log(shop);

shop.prototype.addprice = function(t,n){
	for (var j = 0; j < n; j++){
		this.tovar.push(t)
	}
}
shop.prototype.delprice = function(t,n){
	var k = 0;
	var n1 = 0;
	for (var j = 0; j < this.masProd.length;j++){
		if(t == this.masProd[j]) k++
	}
    var j = 0;
    if (k < n) console.log('Недостаточно товара для удаления');
    else{
       while (n1!=n&&j!=this.masProd.length){
       	if(t == this.masProd[j]){
       		this.masProd.splice(j,1)
       		n1++
       	}
       	j++
       }
    }
  }
 shop.prototype.stlprs = function(t,n){
	var k = 0;
	var n1 = 0;
	for (var j = 0; j < this.masProd.length;j++){
		if(t == this.masProd[j]) k++
	}
    var j = 0;
    if (k < n) console.log('Недостаточно товара для продажи');
    else{
       while (n1 !=n && j!=this.masProd.length){
       	if(t == this.masProd[j]){
       		this.income = Number(this.income) + Number(this.masProd[j].price) + ''
       		this.masProd.splice(j,1)
       		n1++
       	}
       	j++
       }
    }
  }



