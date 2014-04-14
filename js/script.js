/**
 * Logical Operators Created by puhrome on 4/14/14.
 */
//used for comparing two TRUE or Falso values
//compare pairs of relational expressions
//comparison in TRUE or FALSE OR BOOLEAN operators
//Logical Operators
    //&& and require both boolean to be true, if comparison is true and false it's false

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the price is less than our budget AND if our paycheck is over 300
if (iPhonePrice < budget && paycheck > 300){
    console.log("We can buy the phone");
}else{
    console.log("No phone for you!");
}
//&& only works in between relational expression
//|| or operator require one or more to make expression true
//if true and false statement, it is true

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;
//if one of the statement is true, then whole pair is true
//when dealing with booleans don't have to include whether it's true or false
if (iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone");
}else {
    console.log("No phone for you!");
}
//! not operator, not used for comparing but to flip value, i.e true to false and vice versa
//a !=b same as ! (a===b), a<b the same as ! (a<b)

//COMMON Misconceptions
//WRONG a === b === c, if c is not boolean it will not work
// a === b && b === c is correct way
// && in between pairs
//|| in between relational and boolean
//always work in pairs, NEVER three items as once
