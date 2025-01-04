const regristrationform=document.getElementById("registrationform");
const registration=document.getElementById("Registration");
const profilepage=document.getElementById("profile-page");
const profilename=document.getElementById("profilename");
const profileemail=document.getElementById("profileemail");
registration.addEventListener("submit",function (e){
e.preventDefault();
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
profilename.textContent=name;
profileemail.textContent=email;
regristrationform.style.display='none';
profilepage.style.display='block';

});