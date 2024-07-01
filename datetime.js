let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new  Date(2024,0,23);   //month is started from 0
// let myCreatedDate = new  Date(2024,0,23,5,3);   
// let myCreatedDate =  new Date("2024-01-22");   // jab hum YY-MM-DD kerte hein to month 01 se start hota hai

let myCreatedDate =  new Date("01-14-2024");   // in India We write in a format MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);  //These values give output in miliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);               // Outputs the full date and time
console.log(newDate.getMonth());    // Outputs the month (0-11)
 console.log(newDate.getFullYear());
 console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday:"long"
})