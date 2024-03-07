const myArray = [3,4,5,4,1,5,3,7,9,8,4,2,8,8,12,16,18,12,];

const newArray = [];

myArray.forEach((arr)=> {
    let newValue = arr * 2;

    if (newValue % 2 === 0) {
        if (newValue > 2) {
            newArray.push(newValue)
        }
    }
})
console.log(newArray)