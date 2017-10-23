showMessage();
function showMessage  (){
var reg=/^[\+]?375[\-]?[(]?(17|25|29|33|44)[)]?[\- ]?[1-9]\d{2}[\-]?\d{2}[\-]?\d{2}/g
var phone=prompt("Enter the phone number: ");
if(  (phone !=null && phone!='' ) && phone.match(reg))
{
	alert("It is a phone number");
	alert( phone.match(reg) ) ; 
	
}
else {
     alert("Try again");
	 showMessage();
    
 
}
}
