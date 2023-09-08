
function apply(){

    var firstName= document.getElementById('firstName').value
  
    var lastName= document.getElementById('lastName').value
    
    var eMail= document.getElementById('eMail').value
    
    var phoneNumber= document.getElementById('phoneNumber').value
   
    var radios = document.getElementsByName('gender');
    var gender = null;
     for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
         gender = radios[i].value;
          break;
    }
 }
    localStorage.setItem('gender', gender);
    
    var currentCity= document.getElementById('currentCity').value
    localStorage['currentCity']=currentCity;
    
    var appliedPosition= document.getElementById('appliedPosition').value
    localStorage['appliedPosition']=appliedPosition;

        var firstNameRegex =/^[a-zA-Z\s]+$/;

        var lastNameRegex =/^[a-zA-Z\s]+$/;
        
        var eMailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        var phoneNumberRegex = /^\d{10}$/;

        var appliedPositionRegex =/^[a-zA-Z\s]+$/;

        if (firstName === "" || lastName === "" || eMail === "" || phoneNumber === "") {
          alert("Please fill in all the required fields.");
            return false;
        }

        if (!firstName.match(firstNameRegex)) {
            alert("Please enter a valid firstname.");
            return false;
          }
          else{
            localStorage['firstName']=firstName;
        }
          if (!lastName.match(lastNameRegex)) {
         alert("Please enter a valid lastname.");
            return false;
         }
         else{
            localStorage['lastName']=lastName;
        }

        if (!eMail.match(eMailRegex)) {
        alert("Please enter a valid email address.");
         return false;
      }
      else{
        localStorage['eMail']=eMail;
      }
    
        if (!phoneNumber.match(phoneNumberRegex)) {
         alert("Please enter a valid 10-digit phone number.");
        return false;
      }
      else{
            localStorage['phoneNumber']=phoneNumber;
        }

        if (!appliedPosition.match(appliedPositionRegex)) {
            alert("Please enter a valid Position.");
           return false;
         }
         else{
               localStorage['appliedPosition']=appliedPosition;
           }

        alert("You are sucessfully applied");
        
        return true;
        
    }


