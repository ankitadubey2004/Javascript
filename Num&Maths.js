const score = 400;
console.log("score");

const balance = new Number(100)  //This will specify the Number
console.log(balance);

console.log(balance.toString()); //This will convert the number into string
console.log(balance.toString().length); 

console.log(balance.toFixed(2));  //2decimal . ke baad fixed

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); //mtlb ye . ke pehele precised values dega

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'))  //ye indian standard ke hisaab se comma laga dega

//+++++++++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4,3,6,8,));
console.log(Math.max(4,3,6,8));

console.log(Math.random());