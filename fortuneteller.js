// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE


// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

let fortune;

function fortuneTeller(fortune) {

           if(fortune >= 0 && fortune <= 3 ) {
               response = "You have a low fortune"
          } else if
           (fortune >= 5 && fortune <= 7 ){
           response = "You have an average fortune"
            }
             
          else  if (fortune >=7 && fortune <=10 ){
        response = "You have a good fortune"
          } else response = "cant read the fortune"
    return response;
   }

    console.log('results: ', fortuneTeller(0));
  
  
    if (typeof module !== 'undefined') {
      module.exports = fortuneTeller;
    }