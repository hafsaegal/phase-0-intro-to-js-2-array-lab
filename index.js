// Write your solution here!
const cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo")
}
// function appendCat(name) {
//     const appendCat=[...appendCat,"Broom"]
// }
function appendCat(name) {
    return [...cats, "Broom"]
}
function prependCat(name){
    return["Arnold",...cats]
}
function removeLastCat(name){
    return cats.slice(0,-1)
}
function removeFirstCat(name) {
    return cats.slice(1);
}


// //// Initial array
// const cats = ["Milo", "Otis", "Garfield"];

// // Destructive functions (modify the original array)
// function destructivelyAppendCat(name) {
//   cats.push(name);
// }

// function destructivelyPrependCat(name) {
//   cats.unshift(name);
// }

// function destructivelyRemoveLastCat() {
//   cats.pop();
// }

// function destructivelyRemoveFirstCat() {
//   cats.shift();
// }

// // Non-destructive functions (return new arrays without modifying `cats`)
// function appendCat(name) {
//   return [...cats, name]; // Creates a new array with the new cat at the end
// }

// function prependCat(name) {
//   return [name, ...cats]; // Creates a new array with the new cat at the beginning
// }

// function removeLastCat() {
//   return cats.slice(0, -1); // Returns a new array without the last cat
// }

// function removeFirstCat() {
//   return cats.slice(1); // Returns a new array without the first cat
// }

