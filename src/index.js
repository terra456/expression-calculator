function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here

    var arr = Array.from(expr);
    var resArr = [];
    var steck = [];
    var a = 0;
    var b = 0;

    for (var i=0; i<arr.length; i++) {
        var el = arr[i];
        if (el === " ") {
            var del = arr.splice(i, 1);
            i = i-1;
        } else if (isNaN(el) === false) {
            var n = resArr.push(el);

        } else if ((el == '*' || el == '/') && steck.length == 0) {
            var k = steck.push(el);
        } else if ((el == '+' || el == '-') && steck.length != 0) {
             if (steck[steck.length-1] == "*" || steck[steck.length-1] == "/") {
                    var d = steck.pop();
                    var n = resArr.push(d);
                    var k = steck.push(el);
                }
        } else if (el == '(') {
            var k = steck.push(el);
        } else if (el == ')') {
            for (let j = steck.length-1; j>=0; j--) {
                if (steck[j] == '(') {
                    var d = steck.pop(j);
                } else {
                    var d = steck.pop();
                    var n = resArr.push(d);

                }
            }
        }


        // {
        //     var n = resArr.push(el);
        // }

    }

    for (let j=resArr.length-1; j>=0; j--) {
        if
    }

    console.log(resArr);
}

module.exports = {
    expressionCalculator
}