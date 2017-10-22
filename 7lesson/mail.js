function Init () {
    var myEmail = document.getElementById('email');
    myEmail.addEventListener( 'keypress', checkEmail, true );
}
function checkEmail(e) {
   // var  e=document.getElementById("email").value;
    if ((e.charCode==46)||((e.charCode>49)&(e.charCode<58))||((e.charCode>65)&(e.charCode<91))||((e.charCode>98)&(e.charCode<123))){
	 //	document.getElementById("email_error").innerHTML="  Enter the E-mail!"; 
}
	else{
		e.preventDefault();
	//	document.getElementById("email_error").innerHTML="не верно ввели email"; 
		alert("Enter the characters that may be contained in E-mail: large and small letters of the English alphabet ");
	}
}
Init();