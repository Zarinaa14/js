document.write("<table>");

for (var i = 1; i <= 9; i++ ) 
{
	document.write("<tr>");
	document.write("<td width=15px>" + i + "</td>");

	for ( var j = 2; j <= 9; j++ ) 
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