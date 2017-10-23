function Init () {
    var myEmail = document.getElementById('email');
    myEmail.addEventListener( 'keypress', checkEmail, true );
}
function checkEmail(e) {
   // var  e=document.getElementById("email").value;
    if ((e.keyCode == 189) ||(e.keyCode == 64) || ((e.keyCode >= 45) && (e.keyCode < 47)) || ((e.keyCode > 47) && (e.keyCode < 58)) || ((e.keyCode >= 95) && (e.keyCode < 123)) || ((e.keyCode > 64) && (e.keyCode < 91))){ 
// document.getElementById("email_error").innerHTML=" Enter the E-mail!"; 
}
	else{
		e.preventDefault();
	//	document.getElementById("email_error").innerHTML="не верно ввели email"; 
		alert("Enter the characters that may be contained in E-mail: large and small letters of the English alphabet ");
	}
}
Init();

