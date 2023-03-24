





//if (Answer == ''){
function getotheruserName (){
let otherUserName= prompt ("Please enter with caution");
    document.write("Lions Are KINGS"+otherUserName)   
}

//if (anyAnswer == ''){
    function getOtherOtherUserName (){
        let userName= prompt ("Im Warning you..enter LIONS");
        document.write("Ohhhh man..YOU ARE AWESOME!!"+userName)   
    }

//if (anyAnswer == 'Who CARES'){
    function getuserName (){
        let userName= prompt ("Whats 55+3+2000+34323?");
        document.write("Welcome"+userName)   
    }

   
   
   
    function getLionsName(){
       
        let lionPics = prompt("How many times do you ")
        let parse =parseInt(lionPics)
        for (let i =0;i<parse; i++){
            document.write("<p>Dallas</p>");
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



     
