const removeFromArray = function(arr, ...targets) {
    //loop through the array
    //if the current element is in targets, continue
    //if not, add it to a new array
    //return new array

    let ret_Arr = []
    for(let i = 0; i < arr.length; i++){
        if(targets.includes(arr[i])){continue}
        else{
            ret_Arr.push(arr[i])
        }
    }
    return ret_Arr
};

// Do not edit below this line
module.exports = removeFromArray;
