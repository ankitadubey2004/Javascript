const accountId = 144553
let accountEmail = "Ankita@gmail.com"
var accountPassword = "12345"
accountCity = 'jaipur' // We can also use variable like this without declaring it  BUT THIS IS NOT A NICE WAY TO DO IT
let accountState;
// accountId = 2  // Idhar pe hume accountid change kerdi but ye kabhi change nahi ho sakti because ye const ke nader hai aur const hamesha fixed rehta hai

accountEmail = "dubey@gmail.com"
accountPassword="21212121"  //But (let) aur (var) ye  variables hein to hum  ye change ker sakte hein

// Prefer not to use var because of issue in block scope and functional scope

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// idhar pe hum console.log ka baar baar use kerne ki jagah hum console.table ka use karenge, AUR YE TABLE BHI KHUD HI FORM KER DETA HAI