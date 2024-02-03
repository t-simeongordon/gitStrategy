type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
    let result: Combinable;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);  // Output: 56

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);  // Output: MaxAnna
