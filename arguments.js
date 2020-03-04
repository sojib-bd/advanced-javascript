function add(num1, num2) {
    console.log(arguments)// array like object but not an array
    console.log(...arguments) //
    console.log([...arguments])// make it an array
    let arg = [...arguments]
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        let el = arg[i];
        sum += el;

    }
    return sum;
}

let result = add(3, 5, 2);
console.log(result)