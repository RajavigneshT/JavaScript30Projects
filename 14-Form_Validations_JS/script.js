var namerror=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName()
{
    var name=document.getElementById('contact-name').value ;
    if(name.length==0)
    {
        namerror.innerHTML='Name is required';
    }
    if(!name.match(/^[A-Za-z]*\s{1}[a-Za-z]*&/))
    {

    }
    
}
