const isCheck = function (password){
    let regexPasswordCheck = /^[A-Z]+|[a-z]+|[0-9]+\w{6,}$/;
    return regexPasswordCheck.test(password);
}
console.log(isCheck("MelodyCassie1! "))