// console.log(2>1);
// console.log(2<=1);
// console.log(1==1);
// console.log(2!=2);

// console.log("2">1);//In both cases, the string is converted to a number before the comparison is made.
// console.log("02">1);

// console.log(null>0);
// console.log(null>=0);
// console.log(null ==0);
// the reason behind different output is that an equality check == and comparision < > <= >= work differently
 //-> comparision convert null to number , treating it as 0
 //null > 0 evaluates to false because 0 is not greater than 0.
 //null >= 0 evaluates to true because 0 is equal to 0.
 //null == 0 evaluates to false because null is only equal to undefined, not to 0 or any other value.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0 );// undefined, not to 0 or any other value.

console.log("2"==2);



