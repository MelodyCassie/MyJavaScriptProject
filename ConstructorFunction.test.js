const{Person}=require("./ConstructorFunction");
test("Constructor",()=> {
let personOne = new Person("Queen",30,"Female");
let name = personOne.getName();
      expect("Queen").toBe(name)
})