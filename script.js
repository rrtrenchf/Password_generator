
var input = ''
var passArray = {
  alphaUpperisT :"ABCDEFGHIJKLMNOPRSTUVWXYZ",
  alphaLowerisT : "abcdefghijklmnopqrstuvwxyz",
  numisT :"1234567890",
  specisT : "!@#$%^&*()"
  
}
 
console.log(passArray.alphaUpperisT[3])
                //get password length
//   input = prompt("What is your Password length? Must be between 8 and 128 characters");
// while (input< 8 || input> 128 || isNaN(input))
// (input =prompt("What is your Password length? Must be between 8 and 128 characters"));



// if (input > 8 || input < 128); alert( "You have chosen " +input+ " characters");
// console.log(input);






// {

//                //get complexity values

// if (confirm("Do you want upper case letters?")) {
// console.log(true)
// userChoices= passArray.alphaUpperisT +userChoices
// }


// if (confirm( "Add lower Case Letters?") ===true) {
//     console.log(true);
//    userChoices= passArray.alphaLowerisT + userChoices
// } 
    
// if (confirm("Add numbers?") === true) {
//     console.log(true);
//     userChoices= passArray.numisT + userChoices
// }
    
// if (confirm("Add Special Characters?") === true) {
//     console.log(true);

//     userChoices = passArray.specisT + userChoices
    

// }
// if (userChoices=== '') {
//   alert("Much choose at least one")
// }
// console.log(userChoices)


// }


// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)



// Write password to the #password input
function writePassword() {
    var passArray = {
        alphaUpperisT :"ABCDEFGHIJKLMNOPRSTUVWXYZ",
        alphaLowerisT : "abcdefghijklmnopqrstuvwxyz",
        numisT :"1234567890",
        specisT : "!@#$%^&*()"
        
    }
    var userChoices= ''
                    //get password length
  input = prompt("What is your Password length? Must be between 8 and 128 characters");
  while (input< 8 || input> 128 || isNaN(input))
  (input =prompt("What is your Password length? Must be between 8 and 128 characters"));
  
  
  
  if (input > 8 || input < 128); alert( "You have chosen " +input+ " characters");
  console.log(input);
  
  
  
  
  
  
  {
  
                 //get complexity values
  
  if (confirm("Do you want upper case letters?")) {
  console.log(true)
  userChoices= passArray.alphaUpperisT +userChoices
  }
  
  
  if (confirm( "Add lower Case Letters?") ===true) {
      console.log(true);
     userChoices= passArray.alphaLowerisT + userChoices
  } 
      
  if (confirm("Add numbers?") === true) {
      console.log(true);
      userChoices= passArray.numisT + userChoices
  }
      
  if (confirm("Add Special Characters?") === true) {
      console.log(true);
  
      userChoices = passArray.specisT + userChoices
      
  
  }
  if (userChoices=== '') {
    alert("Much choose at least one")
    return;
  }
  console.log(userChoices)
  
  
  }
  

    console.log(passArray.alphaUpperisT[3])

    var password = ""

  for (var i = 0; i<input;i++) {
      password =userChoices.charAt(Math.floor(Math.random()*userChoices.length))+password;
      
  
 
  }
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  



  }

