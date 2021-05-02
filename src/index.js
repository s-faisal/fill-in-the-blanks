
/**
 * @author Fasil Shaikh <fasilshaikh@gmail.com>
 * @param {(string|Array)} numbers
 * @returns {(number|String)} Number that is closest to closestTo or the string that specifies the error.
*/

function generateCombinations(numbers){
    //Check whether the numbers is in array or not, if not converts into array
    if(!Array.isArray(numbers) && numbers && numbers.length>0 ){
        numbers = [numbers]
    }
    //Validates the numbers param
    if(numbers && numbers.length>0 && numbers[0].split(",").length>1){
        //Generate array of the numbers params splitting them by ","
        numbers = numbers[0].split(",")
        if(numbers.length<=100){
            var operator = ["+","-"]
            var answers = []
            var counter = 0
            var closestTo = 0 

            //Loops as per the numbers of operators present in a single equation
            for(var i=0; i<numbers.length-1; i++){

                //Loops on the operators present
                for(var j=0; j<operator.length; j++){
                    var evalString = ""

                    //Loops on the numbers array to make the equation
                    for(var k=0; k<numbers.length-1; k++){

                        //Gets the gets that needs to be present
                        var operand = ((k<counter) ? operator[j] : operator.filter(n => ![operator[j]].includes(n))[0])
                        evalString+= numbers[k] + operand
                    }
                    evalString += numbers[numbers.length-1]
                    
                    //Calculate the equation and store it in an array
                    answers.push(eval(evalString))
                }
                counter++
            }

            //Fetches the answer from the array which is closest to the given "closestTo" variable
            var ans = answers.reduce(function(prev, curr) {
                return (Math.abs(curr - closestTo) < Math.abs(prev - closestTo) ? curr : prev);
            });
            return ans;
        }else{
            return "String cannot have more than 100 nummbers";    
        }
    }else{
        return "Please enter minimum 2 number to proceed";
    }
}
console.log(generateCombinations(process.argv.slice(2)))
// console.log(generateCombinations("7,10,2"))
// console.log(generateCombinations("1,2,3,4"))                //Few of the examples
// console.log(generateCombinations(""))                       //Few of the examples
// console.log(generateCombinations())                         //Few of the examples