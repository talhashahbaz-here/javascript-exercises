const removeFromArray = function(arr) {
    if(arguments.length === 0){
        return "Atleast one argument is required";
    }

    else if(arguments.length === 1){
        return arr;
    }
    
    else{
        for(let i = 1; i < arguments.length; i++){
            if(arr.indexOf(arguments[i]) === -1){
                console.log(`${arguments[i]} is not in list`)
                continue
            }

            else{
                let j = arr.indexOf(arguments[i])
                arr = arr.splice(j, 1)
            }
        }

        return arr
    }
};

console.log(removeFromArray([1, 2, 3, 4], 1, 5, 3))

// Do not edit below this line
module.exports = removeFromArray;
