document.write("<table>");
var n = prompt('Введите n');
var m = prompt('Введите m');

for (var i = 1; i <= n; i++ ) 
{
	document.write("<tr>");
	document.write("<td width=15px>" + i + "</td>");

	for ( var j = 2; j <=m ; j++ ) 
	{
		document.write("<td>" + i * j + "</td>");

	}

    document.write("</tr>");
}
var leng=document.getElementsByTagName('td').length;
for (var i = 0; i <= leng; i+=10 ) 
{
	document.getElementsByTagName('td')[i].style.backgroundColor = 'red';

}
