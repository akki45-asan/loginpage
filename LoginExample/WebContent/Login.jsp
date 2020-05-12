

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login Page</title>
<style type="text/css">
form{
border: 2px dotted gray;
padding: 10px;
width: 30%;
}
form input[type="text"], form input[type="password"]{
width: 100%;
}
</style>

<!-- <script>
	function loginValidate(){
		var x = document.getElementsByClassName("validlogin");
		var count = 0;
		var passmatch = x[1].value;
		var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
		
		for(var i=0; i<x.length; i++){
			if(x[i].value == ""){
				x[i].nextElementSibling.innerHTML = "fields can't be empty";
				x[i].nextElementSibling.style.color = "red";
				count++;
			}
			if(passmatch.length <= 5){
				x[1].nextElementSibling.innerHTML = "Password must have minimum 8 character";
				x[1].nextElementSibling.style.color = "red";
				count++;
			}
			else if(!passmatch.match(passw)){
				x[1].nextElementSibling.innerHTML = "Password must hav 1 lowercase letters, 1 uppercase letters, 1 digit & 1 special character";
				x[1].nextElementSibling.style.color = "red";
				count++;
			} 
		}
		if(count > 0){
			return false;
		}
		return true;
	}
	
	function claerUp(x){
		if(x.value != ""){
			x.nextElementSibling.innerHTML = "";
		}
	}
</script> -->

</head>
<body>
<div id="templatemo_container">
<center>
<form action="LoginServlet" method="post" onsubmit="return loginValidate()">
	<input type="hidden" name="action" value="Login">
	<!-- <select name="type">
		<option>Select</option>
		<option value="customer">Customer</option>
		<option value="admin">Admin</option>
	</select><br></br> -->
	<input type="text" name="uname" placeholder="Enter Username" class="validlogin" onblur="claerUp(this)">
	<span></span>
	<br></br>
	<input type="password" name="upassword" placeholder="Enter Password" class="validlogin" onblur="claerUp(this)">
	<span></span>
	<br></br>
	<input type="submit" value="login">
	<input type="reset" value="cancel">
<br></br>

</form>

</center>
 </div> 
</body>
</html>