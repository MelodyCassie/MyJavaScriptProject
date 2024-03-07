let length = 0;
let width = 0;

let obj  = [[{row:0,col:0,value:'x'},
    {row:0, col:1, val: 'x'},
    {row:0, col:2, val: 'o'},
    {row:1, col:0, val: 'o'},
    {row:1, col:1, val: ''},
    {row:1, col:2, val: 'x'},
    {row:2, col:0, val: 'x'},
    {row:2, col:1, val: 'o'},
    {row:2, col:2, val: 'o'}]]

let newArray = [[],[],[]];

const arrayObject = (obj,func)=>{
    for(let i = 0; i <= obj.length; i++){
        for(let j = 0; j <= obj[i].length; j++ ){
            if(i === 0 && j ===0)
                newArray[i][j] = obj[i][j]['val'];
            if(i === 0 && j === 1)
                newArray[i][j] = obj[i][j]['val'];
            if(i === 0 && j === 2)
                newArray[i][j] = obj[i][j]['val'];
            if(i === 1 && j === 0)
                newArray[i][j] = obj[i][j]['val'];
            if(i === 1 && j === 1)
                newArray[i][j] = obj[i][j]['val'];
            if(i === 1 && j === 2)
                newArray[i][j] = obj[i][j]['val'];
            if(i === 2 && j === 0)
                newArray[i][j] = obj[i][j]['val']
            if(i === 2 && j === 1)
                newArray[i][j] = obj[i][j]['val']
            if(i === 2 && j === 2)
                newArray[i][j] = obj[i][j]['val']
            console.log(newArray);
        }

    }
    console.log(arrayObject(obj));

}