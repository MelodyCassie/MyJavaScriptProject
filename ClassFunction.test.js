const{Person} = require("./ClassFunction");
test("ClassFunctionTest", ()=>{
    let personOne = new Person("Amaka",22);
    let name = personOne.getName();
    expect(name).toBe("Amaka");
})

