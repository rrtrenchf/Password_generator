// Assignment Code
//hoook into button
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// When button is clicked call the right password function
generateBtn.addEventListener("click", writePassword);
  



var  createPassword = {
  length: " ",
  alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  alphaLower: "abcdefghijklmnopqrstuvwxyz",
  num: 1234567890,
  special: "!@#$%^&*()_+",
  }


    
//   // } else {
//   //   prompt ("Must be between 8 and 128 characters")
    
// }
  // obtain password length value. Store in console
  while (createPassword[length] !== ''){
    
  // Prompt user to input a value
  
    createPassword[length] = prompt("Type password character length must be a number between 8 and 128 characters");
    
  if( createPassword[length] > 7 && createPassword[length] < 129){
    function getLength() {
      createPassword.push(createPassword[length]);
      console.log(getLength)
    }
    
  // Allowed value accepted and logged in console. with break if appropriate
    
    alert("you have chosen " +createPassword[length]+ " characters");
    console.log(createPassword[length])
  // push password length to array
  
  break;
  

    
  
  // password.push(password[length])
    
    
  
  // inappropriate value. alerted to try again
   
    }else if 
    
      (isNaN) alert ("must be a number between 8 and 128 characters");{
    }
    
  }
  
  // asks if upper case letters are included. Logs response
    
    if (confirm([alphaUpper] = "Add Upper Case Letters?") == true) {
    console.log(true);
    
    }else {
    console.log(false);
     // Asks if lower case letters are included. Logs response
    }
    if(confirm([alphaLower] = "Add Lower Case Letters?") == true) {
    console.log(true);
    }else {
    console.log(false);
    //Asks if numbers are included. Logs response.
    }
    if (confirm([num] = "Add Numbers?") == true) {
   console.log(true);
    }else {
   console.log(false);
    }
    //ask if special characters are included. Logs response

    if (confirm([special] = "Add Special Characters?") == true) {
    console.log(true);

    }else {
    console.log(false);{
    
    

    }
   if (confirm([alphaUpper && alphaLower && num && special]) !==true){
    alert("Must choose at least one character type!")
    
    }else{ 
      
      }
      
      
}

  
  
    
      
    


  
        
    
        
      
    
    // break;
     
      
   
   
    
  

      


  

  
  
  




    
// } if {
//   password[alphaUpper] = confirm("Do You Want uppercase letters?");
// }   if {
//   password[alphaLower] = confirm("Do You Want lowercase letters?");
// }   if {
//   password[num] = confirm("Do You Want numbers?");
// }   if {
//   password[special] = confirm("Do You Want special characters?");
// }   if {
      
// }
    