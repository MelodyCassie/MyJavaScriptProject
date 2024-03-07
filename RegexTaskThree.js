const isCheck = function(password){
    password = /^[A-Z]|[a-z]|[\w\W]{6,}$/;
    return password.test(password)
}
console.log(isCheck("Melody3@ "))