const isCheck = function (password){
    password = /^[A-Z]+|[a-z]+|[0-9]+\w{6,}$/;
    return password.test(password)
}
console.log(isCheck("MelodyCassie123"));
