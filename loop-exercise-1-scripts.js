"use strict";
/*
Counting Loops:  Use a for loop to log numbers from 1 to 10, then another for loop to count down, logging  numbers from 10 to 1.
Repeat the exercise with a while loop.  Repeat with a do while.  Create this array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
Use a for … of to loop through  this array and log all the numbers. (Note: we’re not asking you to also count down on this one.)
*/

const numbers = [1,2,3,4,5,6,7,8,9,10]
for (let n=1; n<11; n++){
    console.log(`arrayless countup:${n}`)
} // count 1->10
for (let n=10; n>0; n--){
    console.log(`arrayless countdown:${n}`)
} // count 10->1
for (let n=0; n<numbers.length; n++){
    console.log(`counting up an array: ${numbers[n]}`);
} // count up, for loop with array
for (let n=9; n>=0; n--){
    console.log(`counting down an array: ${numbers[n]}`);
} // count down, for loop with array
let n = 0;
while (n<numbers.length){
    console.log(`While loop count up ${numbers[n]}`)
    n++;
} // count up, while loop
while (n>=0){
    console.log(`While loop count down ${numbers[n]}`)
    n--; 
} // count down, while loop // initial output is undefined because n = 11 from previous loop?
let ridiculousArray = ["badger", "badger", "badger", "badger", "badger", "badger",
"badger", "badger", "badger", "badger", "badger", "badger", "MUSHROOM", "MUSHROOM",
"badger", "badger", "badger", "badger", "badger", "badger","badger", "badger", "badger",
 "badger", "badger", "badger", "SNEEK a SNEEEEK oooo its a SNEK"] //Sauce: https://www.youtube.com/watch?v=NL6CDFn2i3I
for (let m of ridiculousArray) {
    console.log(m);
    m ++;
  } // for/let loopdee doop

/* Extended Challenges second exercise:  Given any string, use a loop to add padding (extra spaces) to the front to make the string ten 
characters long. For example, given the string “planet”, log “    planet” (add four spaces), and for  the string “headlamp”, log “  headlamp”
(add two spaces).  */
