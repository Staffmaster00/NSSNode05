let [,, ...myArgs] = process.argv;
let summed = 0;
console.log(`myArgs`, myArgs);
myArgs.forEach((number)=>{
    summed += parseInt(number);
});
console.log(summed);