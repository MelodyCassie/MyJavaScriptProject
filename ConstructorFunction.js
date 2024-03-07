function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;


    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }
    this.setAge = function (age) {
        this.age = age;
    }
    this.getAge = function () {
        return this.age;
    }
    this.setSex = function (sex) {
        this.sex = sex
    }
    this.getSex = function () {
        return this.sex;
    }
    // const Human = ({props}) => {
    //     const {name, age, sex} = props;
    // }

}
let person1 = new Person("John", 30, "male");
console.log(person1.getName())

module.exports={Person}