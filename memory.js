//Stack(primitive)memory , Heap(non-primitive)memory

let myYoutubename = "ankitadubeydotcom";
let anothername =  myYoutubename;
anothername = "chaiaurcode";
//Stack memory mein  original value nahi di jaata uski copy di jaati hai JAISE anothername mein joi value hai vo myYoutubename se nahi jaayegi vahan uski copy di jaayegi
console.log(myYoutubename);
console.log(anothername);
 
let userOne={   //Object
    email: "user@microsoft.com",
    upi: "user@ybl",
}
let userTwo =  userOne;  //yahan pe [usertwo] variable to declare ho raha hai lekin jo value milegi vo isi ka reference milegi[userone] ki
//HEAP ke ander jo bhi jaayega vahan uska reference hi milega

userTwo.email = 'ankita@goggle.com';

console.log(userOne.email);
console.log(userTwo.email);