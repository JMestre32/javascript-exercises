const reverseString = function(str) {

    new_str = str.split("")
    let ret_str = ""
    
    for(let i = str.length -1; i >= 0; i--){
        ret_str = ret_str.concat("", new_str[i])
    }
    return ret_str
};

// Do not edit below this line
module.exports = reverseString;
