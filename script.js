





//if (Answer == ''){
function getotheruserName (){
let otherUserName= prompt ("Please enter with caution");
    document.write("Lions Are KINGS"+otherUserName)   
}

//if (anyAnswer == ''){
    function getOtherOtherUserName (){
        let userName= prompt ("Guess what?");
        document.write("..YOU ARE AWESOME!!"+userName)   
    }

//if (anyAnswer == 'Who CARES'){
    function getuserName (){
        let userName= prompt ("Whats 55+3+2000+34323?");
        document.write("Welcome"+userName)   
    }

   
   
   
    function getLionsName(){
       
        let lionPics = prompt("How many times do you want lions? ")
        let parse =parseInt(lionPics)
        for (let i =0;i<parse; i++){
            document.write('<img src="lion12.jp"alt="lions" />') 

            
        }
    }

    function guessAge(){
        let userInput = parseInt(prompt("guess my age"))
        while(userInput <23){
            userInput = prompt ("guess too low, guess again.")
       }
       if (userInput=== 23){
        alert ("Congratulations")
       } else{
        alert ("im not that old.")
       }
    }
    guessAge()


//  let displayBeach = prompt("How many flights outta here this year do you want? (Sending up to 5 planes to your location, beep boop)");
//     displayBeach = parseInt(displayBeach);
//     console.log(displayBeach);
// while (displayBeach < 1 || displayBeach > 5){
//     displayBeach = prompt ("Oop, slow down and follow directions! This is for science. Scale of 1-5, how much do you need a vacation? AND GO!");
// }

// for (let i = 0; i < displayBeach; i++){
//      document.write('<img class="tinyplane" src="tiny.plane.jpg" />');
//      }


    
// return displayBeach;








