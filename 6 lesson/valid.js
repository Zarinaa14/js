document.getElementById("name").addEventListener("input", validateName);
        document.getElementById("age").addEventListener("input", validateAge);
        document.getElementById("phone").addEventListener("input", validatePhone); 
        document.getElementById("email").addEventListener("input", validateEmail);
        document.getElementById("site").addEventListener("input", validateSite);		
        document.getElementById("submit").addEventListener("click", trySubmit);            
       
        function validateName()
        {
          var   v=document.getElementById("name").value;
		 var reg = /^[A-Za-z\- ]{3,20}$/;
		 
            if (!(v.match(reg))) {document.getElementById("name_error").innerHTML="Имя должно быть от 3 до 20 символов"; return false;  }
            else  {document.getElementById("name_error").innerHTML='cood'; return true; }
           
           
        }
       
        function validateAge ()
        {
            v=parseInt(document.getElementById("age").value);
 
            if(isNaN(v) || v<14 || v>90)  {document.getElementById("age_error").innerHTML="Возраст должен быть от 14 до 90";  return false; }
            else  {document.getElementById("age_error").innerHTML='cood';
            return true;
            }
        }
		function validatePhone()
        {
          var  phone=document.getElementById("phone").value;
	  var regPhone = /^[\+]?(375)?(80)?[\-]?[(]?(17|25|29|33|44)[)]?[\- ]?[1-9]\d{2}[\-]?\d{2}[\-]?\d{2}/g 
		  
            if (!phone.match(regPhone)) {document.getElementById("phone_error").innerHTML="не верно ввели телефон"; return false;  }
            else  {document.getElementById("phone_error").innerHTML='cood'; return true; }
           
           
        }
       function validateEmail()
        {
          var  email=document.getElementById("email").value;
		 var regEmail = /[a-zA-z\_0-9\-]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,10}/
            if (!email.match(regEmail)) {document.getElementById("email_error").innerHTML="не верно ввели email"; return false;  }
            else  {document.getElementById("email_error").innerHTML='cood'; return true; }
           
           
        }
		 function validateSite()
        {
          var  site=document.getElementById("site").value;
		  var regSite =/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=])*/
            if (!site.match(regSite)) {document.getElementById("site_error").innerHTML="не верно ввели site"; return false;  }
            else  {document.getElementById("site_error").innerHTML='cood'; return true; }
           
           
        }
	//cайт	/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/
       
        function trySubmit()
        {
            if(validateName() && validateAge()&&validatePhone()&&validateEmail()&&validateSite()) alert('Заполнено без ошибок. Форму можно отправлять');
            else alert('Нужно заполнить форму без ошибок');
        }