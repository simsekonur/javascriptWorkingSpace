lst = [1,2,3,4,5];

console.log('===============');

lst.forEach((number) => {
    console.log(number);
})

console.log('===============');

for (const item of lst) {
    console.log(item);
}

console.log('===============');

const printArray = (lst) => {
    lst.forEach((number, index) => {
        console.log(number, index);
    })
}

printArray(lst);
console.log('===============');

// TODO : Look for the object traversing
// later 