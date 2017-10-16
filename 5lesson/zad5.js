setInterval(function(){
	
var n = Number(prompt("Enter number"));

//var n = 100; // задаем диапазон
var arr = []; // для удобства значения совпадают с индексом
for (var i = 0; i < n + 1; i++) { // наполняем массив от i до n
    arr.push(i);
}
delete arr[0]; // удаляем первые два занчения в массиве
delete arr[1];
var p = 1;
while (true) { // главный цикл p 
    var j = p;
    while (j < arr.length) { // поиск существующего числа в массиве
        j++;
        if (arr[j] != undefined) break; // если не число - стоп
    }
    p = j; // новое значение p найденное число в массиве взятое из j

    while (j < n) { // удаление зачеркнутых значений в решетке
        delete arr[j * p];
        j++;;
    }
	if (p * p > n) break;
}
//document.write(arr);

var arr2=[];

for(var i=0; i<arr.length; i++)
{
	if(arr[i]!=null) arr2.push(arr[i]);
}


document.write("<table>");

document.write("<tr>");

//var table = document.getElementsByTagName("table")[0];
for(var i = 0; i < arr2.length; i++) 
{
if(i%5==0) document.write("</tr><tr>");
//if(arr[i]==null) continue;

//
	document.write("<td width=15px>" + arr2[i] + "</td>");
	
	
}
},5000);

		
	