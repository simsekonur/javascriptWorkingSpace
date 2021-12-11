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

let object =  {};
// when you want to transform the
// data into another format
lst.map((number, index) => {
    object[index]= number
})
console.log(object);
console.log('===============');

const result = lst.map((item) => item*item);
console.log(result);

const lst2 = [];

lst.forEach((item) => {
    lst2.push(item*item);
})
console.log('===============');

console.log(lst2);
// TODO : Look for the object traversing
// later 

