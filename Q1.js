/*Create a program that defines a function named greetUser whichtakes a user's name as a parameter and returns a personalized greeting.
 Prompt the user for their name and use the greetUser function to display the greeting.  */

 var name = prompt("Please Enter Your Name", "Areeb");
 
 function greetUser(name){
    greet = "Welcome, Glad to see you here, hope you get your desire knowledge here & Best of luck";
    greeting ="\n Dear " + name + "\n " + greet;       //don't put , her like console
    return alert(greeting);
 }
      greetUser(name);