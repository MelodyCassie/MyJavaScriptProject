// let arrayOne = [[0,5],[2,3]];
// let arrayTwo = [[2,3],[1,0],[5,3]];



const turnAllIndexToZero = function(arrayOne){

    for (let subArray of arrayOne) {
        if (subArray.includes(0)) {
            arrayOne[arrayOne.indexOf(subArray)] = subArray.map(element => 0);
        }
    }
    return arrayOne;

}

module.exports = {turnAllIndexToZero}



// console.log(arrayOne)


// for(let subArrayTwo of arrayTwo){
//     if(subArrayTwo.includes(0)){
//         arrayTwo[arrayTwo.indexOf(subArrayTwo)] = subArrayTwo.map(element =>0);
//     }
// }
// console.log(arrayTwo)

// module.exports={arrayOne}




