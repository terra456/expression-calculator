function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here

    var arrN = expr.split(' ');
    var arr = [];
    var resArr = [];
    var steck = [];
    var a = 0;
    var b = 0;


    for (var i=0; i<arrN.length; i++) {
        var el = arrN[i];
        if (el === "") {
            var del = arrN.splice(i, 1);
            i = i-1;
        } else if (isNaN(el) === false) {
            var n = arr.push(el);
        } else if (el.length != 0) {
            for (var j=0; j<el.length; j++) {
                var n = arr.push(el[j]);
            }
        } else {
            var n = arr.push(el);
        }

    }


    for (var i=0; i<arr.length; i++) {
        var el = arr[i];
        if (el === "") {
            var del = arr.splice(i, 1);
            i = i - 1;
        } else if (isNaN(el) === false) {
            var n = resArr.push(el);

        } else if (el === '(') {
            var k = steck.push(el);
        } else if (el == '-' || el == '+') {
            if (steck[steck.length - 1] == '-' || steck[steck.length - 1] == '+') {
                let n = resArr.push(steck[steck.length - 1]);
                var d = steck.pop();
                let m = steck.push(el);
            } else {
                let m = steck.push(el);
            }
        } else if (el == '*' || el == '/') {
            if (steck[steck.length - 1] == '*' || steck[steck.length - 1] == '/') {
                let n = resArr.push(steck[steck.length - 1]);
                var d = steck.pop();
                let m = steck.push(el);
            } else if (steck[steck.length - 1] == '+' || steck[steck.length - 1] == '-') {
                let n = resArr.push(el);
            } else {
                let m = steck.push(el);
            }
        } else if (el === ')') {

            if (steck.includes('(') === false) {
                // return error('ERRR');
                throw TypeError ('ExpressionError: Brackets must be paired:');
            } else {
                for (let j = steck.length - 1; j >= 0; j--) {
                    if (steck[j] != '(') {

                        var n = resArr.push(steck[j]);
                        var d = steck.pop();

                    } else if (steck[j] == '(') {
                        var d = steck.pop();

                    }
                }
            }
        }
    }

    if (steck.length != 0) {
        if (steck.includes('(') === true) {
            // return error('ERRR');
            throw TypeError ('ExpressionError: Brackets must be paired:');
        } else {
            for (let j = steck.length - 1; j >= 0; j--) {
                var n = resArr.push(steck[j]);
                var d = steck.pop();
            }
        }

    }

    var res = [];

    for (let j=0; j<resArr.length; j++) {

        var el = resArr[j];

        if (isNaN(el) === false) {
            var n = res.push(el);
        } else if (el == '*') {
            var s = res[0]*res[1];
            var d = res.splice(0, 2);
            var n = res.push(s);
        } else if (el == '/') {
            var s = res[0]/res[1];
            var d = res.splice(0, 2);
            var n = res.push(s);
        } else if (el == '-') {
            var s = res[0]-res[1];
            var d = res.splice(0, 2);
            var n = res.push(s);
        } else if (el == '+') {
            var sum = res[0]+res[1];
            var s = parseInt(sum);
            var d = res.splice(0, 2);
            var n = res.push(s);
        }
        

    }

    var result = res[0];

    if (result == Infinity) {
        throw TypeError ('TypeError: Division by zero.');
    } else {
        return result;
        console.log(result);
    }

}

module.exports = {
    expressionCalculator
}