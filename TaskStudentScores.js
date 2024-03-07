const  studentScores = [95,78,85,60,45,92];
let newArray =[];

studentScores.map((studentActualScore)=> {
if(studentActualScore >=  90 && studentActualScore <= 100 ){
    newArray.push("A");
}
if(studentActualScore >= 80 && studentActualScore <= 89){
    newArray.push("B")
}
if(studentActualScore >= 70 && studentActualScore <= 79){
    newArray.push("c")
}
if(studentActualScore >= 60 && studentActualScore <= 69){
    newArray.push("D")
}
if(studentActualScore <  60){
    newArray.push("F")
}
});

console.log(newArray)

