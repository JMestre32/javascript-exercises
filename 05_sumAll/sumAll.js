const sumAll = function(a, b) {
    if((typeof a === "number" && typeof b === "number") && (!((a < 0 || b < 0))) && (!( (a % 1 != 0 || b % 1 != 0)))){
        if(a > b){
            let temp = a
            a = b
            b = temp
        }
        for(let count = a + 1; count <= b; count++){
            a = a + count
        }
        return a  
    }
    else{
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
