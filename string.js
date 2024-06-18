const name = "Ankita";
const repoCount = 50;

// console.log(name+ repoCount+ " Value"); out= Ankita50 Value BUT THIS IS OUTDATED METHOD

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Ankita-db-dubey');
console.log(gameName[0]);
console.log(gameName.__proto__);// Output: The output of console.log(gameName.__proto__) will be the String.prototype object, which contains methods available to all string instances.


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,2);  //-8 index se chalu ker denge string dena but - mein elements nahi hein phir bhi vo print karega aur phir positive ko bhi print karega 
console.log(anotherString );

const newStringOne = "  Ankita   "
console.log(newStringOne);
console.log(newStringOne.trim()); //The trim function removes the extra space and only print variables

const url = "http://ankita.cpm/anki@20Dubey";
 console.log( url.replace("@20","~"));
 console.log( url.includes('sundar')); //String mein sundar hai yaa nahi ye boolean value return karega

 console.log(gameName.split('-')); //Split basis on '-'