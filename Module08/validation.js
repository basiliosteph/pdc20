function validate()
{
    if (document.myForm.fullname.value=="")
    {
        document.getElementById("nameError").innerHTML = "Please enter yourr full name.";
        return false;
    }

if(document.myForm.email.value==""){
    document.getElementById("emailError").innerHTML = "Please enter your email address.";
    return false;
} else {
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(document.myForm.email.value)==false)
    {
        alert("Please enter a valid email address.");
        return false;
    }
}

}