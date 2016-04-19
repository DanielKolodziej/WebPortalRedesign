function myFunction() {
    var emailVal = document.getElementById("username").value;
	var passVal = document.getElementById("password").value;
    // If the username is "testuser" and pass is "testpass"
    if (emailVal === "testuser" && passVal === "testpass") {
        document.getElementById("username").style.background="#b2ffb2";
		document.getElementById("password").style.background="#b2ffb2";
    // If the username is "testuser" and pass is wrong
    } 
	else if(emailVal === "testuser" && passVal !== "testpass")
	{
		document.getElementById("username").style.background="#b2ffb2";
		document.getElementById("password").style.background="#ff4c4c";
	}
	else {
        document.getElementById("username").style.background="#ff4c4c";
		document.getElementById("password").style.background="#ff4c4c";
    }
}
