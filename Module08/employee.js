function verify()
{
    if (document.employeeForm.id.value=="")
    {
        document.getElementById("idError").innerHTML = "Please enter your Employee ID.";
        return false;
    }

    if (document.employeeForm.username.value=="")
    {
        document.getElementById("usernameError").innerHTML = "Please enter your username.";
        return false;
    }

    if (document.employeeForm.firstName.value=="")
    {
        document.getElementById("fNameError").innerHTML = "Please enter your first name.";
        return false;
    }

    if (document.employeeForm.lastName.value=="")
    {
        document.getElementById("lNameError").innerHTML = "Please enter your last name.";
        return false;
    }

    if (document.employeeForm.address.value=="")
    {
        document.getElementById("addressError").innerHTML = "Please enter your address.";
        return false;
    }

    if (document.employeeForm.department.value=="")
    {
        document.getElementById("departmentError").innerHTML = "Please enter your department.";
        return false;
    }

    if (document.employeeForm.position.value=="")
    {
        document.getElementById("positionError").innerHTML = "Please enter your position.";
        return false;
    }

    if (document.employeeForm.contact.value=="")
    {
        document.getElementById("contactError").innerHTML = "Please enter your contact number.";
        return false;
    }

    if (document.employeeForm.salary.value=="")
    {
        document.getElementById("salaryError").innerHTML = "Please enter your salary.";
        return false;
    }

if(document.employeeForm.email.value==""){
    document.getElementById("emailError").innerHTML = "Please enter your email address.";
    return false;
} else {
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(document.employeeForm.email.value)==false)
    {
        alert("Please enter a valid email address.");
        return false;
    }
}

}