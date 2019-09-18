var pname=document.querySelector('#name');
var age=document.querySelector('#age');
var roll=document.querySelector('#roll');
var contact=document.querySelector('#contact');
var mail=document.querySelector('#mail');
var city=document.querySelector('#city');
var sub=document.querySelector('#submit');
var res=document.querySelector('#reset');
var error=document.querySelector('.error');
var cap=document.querySelectorAll('.text');
var yes=document.querySelector('#yes');
var no=document.querySelector('#no');
var opta=document.querySelector('.opt');
var x;
for(x=0;x<cap.length;x++)
{
 cap[x].addEventListener('input',(e)=>{
    e.path[0].value=e.path[0].value.toUpperCase();
});
}
res.addEventListener('click',(e)=>{
    if(!(confirm('Do')))
    {
        e.preventDefault();
    }
});
function opt(msg,callback)
{
    opta.style.visibility="visible";
    let t="";
    gopt.innerHTML=msg;
    yes.addEventListener('click',(e)=>{
        console.log("hh");
        opta.style.visibility="collapse";
        t=true;
    });
    no.addEventListener('click',(e)=>{
        opta.style.visibility="collapse";
        t=false;
    });
    t=true;
    console.log(t);
    if(t!="")
    {
        return t;
    }
    return false;
}
sub.addEventListener('click',(e)=>{
    e.preventDefault();
    if(pname.value=="")
    {
        DOError("Please Enter name");
        pname.focus();
    }
    else if(age.value=="")
    {
        DOError("Please Enter age");
        age.focus();
    }
    else if(isNaN(Number(age.value)))
    {
        DOError("Please enter valid age");
        age.focus();
    }
    else if(Number(age.value)>=50||Number(age.value)<=10)
    {
        DOError("Please enter valid age");
        age.focus();
    }
    else if(roll.value=="")
    {
        console.log(age.value)
        DOError("Please enter roll number");
        roll.focus();
    }
    else if(isNaN(Number(roll.value))||roll.value.length!=10)
    {
        DOError("Please enter valid roll number");
        roll.focus();
    }
    else if(contact.value=="")
    {
        DOError("Please enter mobile number");
        contact.focus();
    }
    else if(contact.value.length!=10 ||isNaN(Number(contact.value)))
    {
        DOError("Please enter a valid mobile number");
        contact.focus();
    }
    else if(mail.value=="")
    {
         DOError("Please enter e-mail id");
         mail.focus();
    }
    else if(mail.value.indexOf('.',0)<0 || mail.value.indexOf('@',0)<0 ||mail.value.indexOf(" ",0)>=0)
    {
        DOError("Please enter valid e-mail id");
        mail.focus();
    }
    else if(city.value=="")
    {
        DOError("Please enter city");
        city.focus();
    }
    else    
        DOError("");
});
function DOError(s)
{
    if(s!="")
        error.innerHTML='!'+s+'!';
    else    
        error.innerHTML='';
}