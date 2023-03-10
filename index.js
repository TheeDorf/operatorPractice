let id = 0
let firstName= "Jonny"
let lastName= "BeGood" 
let firstName2= "Bob"
let lastName2 = "saggett"
// create a function that creates a new ID and places first name and last name together
// pa at the declaration - arguments t the invocation
function createID ( firstName, lastName){
console.log(firstName + " " + lastName);
console.log(++id);

}

createID(firstName, lastName);
createID(firstName2, lastName2)
