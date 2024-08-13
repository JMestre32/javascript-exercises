const repeatString = function(str, num) {
    try{
        if(num < 0) throw "ERROR"
        let new_str = "";
        for(let j = 0; j < num; j++){
            new_str = new_str + str;
        }
        return new_str;}
    catch(err){
        return err
    }
};


// Do not edit below this line
module.exports = repeatString;
