const myArray = [1,9,3,4];
const newArray = []

myArray.forEach((val)=> {
    let ans = val * 2;
    newArray.push(ans)
});
console.log(newArray);