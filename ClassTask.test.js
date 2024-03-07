const{sort}=require("./ClassTaskOne");
test("ClassTaskOneTest",()=>{
let input = [0,4,2,0,5]
    let expected  = sort(input)
    expect(expected).toEqual([4, 2, 5, 0, 0 ])
})

test("ClassTaskOneTest",()=>{
    let input = [4,0,0,5,7]
    let expected  = sort(input)
    expect(expected).toEqual([4, 5, 7, 0, 0 ])
})

