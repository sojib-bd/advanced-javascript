//*********** Falsy values ***********

// if those are given to any variable it become falsy.

// 1. 0
// 2. ""
// 3. null
// 4. undefined
// 5. NaN

// Everything else is truthy. That includes:

// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)


let name = " " // If we give empty string it will become false 

// on the other hand if we give a white inside the quotes it become true;


let number = 0 // it become false
let number2 = "0"// if we add 0 inside a quote it become truthy.
let number3 = []

if (number3) {
    //console.log('condition is true');
}

else {
    //console.log('condition is false')
}


// **** some Example *****//

console.log(false == 0);
console.log(0 == '');
console.log([] == false);

// all false
false == null;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;