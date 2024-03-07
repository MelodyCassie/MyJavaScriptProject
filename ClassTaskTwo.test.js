const{turnAllIndexToZero}=require("./ClassTaskTwo");
test("Turn TO Zero",()=>{
    let arrayOne = [[0, 5],[2, 3]];
    // let arrayTwo = [[2, 3], [1, 0], [5, 3]];

    let expected = turnAllIndexToZero(arrayOne);
    expect(expected).toEqual([[0, 0],[2, 3]])
})
