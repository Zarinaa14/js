
var Account = {
};
var Mas = [
	{
		name: "Victor", age: 27, depart: "max", exp: 7, salary: 900
	},
	{
		name: "Masa", age: 19, depart: "min", exp: 3, salary: 400
	},
	{
		name: "Nikita", age: 22, depart: "middle", exp: 4, salary: 750
	},
	{
		name: "Sveta", age: 19, depart: "min", exp: 1, salary: 350
	}
]
 Mas.forEach(function(elem){
	elem.print = function(){
		console.log("name: " + this.name + ";  Age: " + this.age + ";  depart: " + this.depart + ";  exp: " + this.exp + ";  salary: " + this.salary );
		console.log(" ");
		
	}
})
Account.mas = Mas;
Account.Add=function(people){
	if (typeof(people)=="object") {
		arr.push(people);
		Accoun.mas=arr;
		people.print = function(){
			console.log("name: " + this.name + ";  Age: " + this.age + ";  depart: " + this.depart + ";  exp: " + this.exp + ";  salary: " + this.salary);
		}
		console.log("Add worker");
		Account.mas.forEach(function(elem){
			elem.print();
		})
		
}}		

Account.del = function (el){
if(typeof(el)=='string' ){
Account.mas[Account.mas.length]!= el;
console.log(Account);
}
}



Account.sortSalary = function(){
	Account.mas.sort(function(a, b){
		return a.salary > b.salary? 1: -1;
	});
	Account.mas.forEach(function(elem){
		elem.print();
	})
}
Account.sortSalary();

//Account.sumSal();	
Account.Average = function(){
var ArraySalary = [];
	Account.mas.forEach(function(elem){
		ArraySalary.push(elem.salary);	
})	
var MaxSalary =  Math.max.apply(Math, ArraySalary);
var NameMaxSalary =	Account.mas.filter(function(elem){
 return elem.salary==MaxSalary;
	})
	console.log("Max salary: ");
NameMaxSalary.forEach(function(elem){
elem.print();    
})	
console.log("Min salary: ");
var MinSalary =  Math.min.apply(Math, ArraySalary);
var NameMinSalary = Account.mas.filter(function(elem){
 return elem.salary==MinSalary;
	})
NameMinSalary.forEach(function(elem){
elem.print();    
})


}
Account.Average();	



	//Account.Average();
	Account.inform_departments=function(){
var men =[]	;
var Depart = [];
	Account.mas.forEach(function(elem){
		Depart.push(elem.department);
	})
	
	var NovDepart=Depart.filter(function(elem,index){
		return Depart.indexOf(elem)==index;
		});
	for (var i = 0; i < NovDepart.length; i++) 	{
	var worker = Account.mas.filter(function(element){
			return element.department==NovDepart[i];
		})
	}
	
	DepartSummaAge = worker.reduce(function(prev, curr){ 
			return prev + curr.age; 
		}, 0); 
		Suma = worker.reduce(function(prev, curr){ 
			return prev + curr.salary; 
		}, 0); 
		var Averegesalary=Math.floor((Suma/worker.length)*50)/50;
		var AverageAge=Math.floor((DepartSummaAge/worker.length)*50)/50;
		var max_exp=worker[0].exp;
		var index_max_exp=0;
		for (var e = 0; e < worker.length; e++) {
			if (worker[e].exp > max_exp) {
    			Max_exp = worker[e].exp;
    			index_max_exp = e;
  			}
		}
		console.log("The full salary  is "+Suma);
		console.log(" ");
		
		console.log("The total amount of salaries: "+Averegesalary);
		console.log(" ");
		console.log("Number of worker: "+worker.length);
		console.log(" Average age: "+AverageAge);
		console.log("More experienced "+worker[index_max_exp].name);
		
}	
	
Account.Add("Nikita");
Account.inform_departments();
Account.Average();
Account.del();
    
	
