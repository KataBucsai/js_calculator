function main () {
    var sign = "";
    $(".btn").on('click', function() {
        totalInput = document.getElementById("result").innerText;
        input = $(this).text();
        switch (input) {
            case 'C':
                document.getElementById("result").innerText = " ";
                sign = "";
                break;
            case '=':
                sliceIndex = totalInput.indexOf(sign);
                var number1 = totalInput.slice(0, sliceIndex), number2 = totalInput.slice(sliceIndex+1);
                var result = 0;
                switch (sign) {
                    case '+':
                        number1 = Number(number1);
                        number2 = Number(number2);
                        result = number1 + number2;
                        document.getElementById("result").innerText = result.toFixed(2);
                        break;
                    case '-':
                        result = number1 - number2;
                        document.getElementById("result").innerText = result.toFixed(2);
                        break;
                    case '*':
                        result = number1 * number2;
                        document.getElementById("result").innerText = result.toFixed(2);
                        break;
                    case '/':
                        result = number1 / number2;
                        document.getElementById("result").innerText = result.toFixed(2);
                        break;
                }
                break;
            default:
                totalInput = totalInput.concat(input);
                document.getElementById("result").innerText = totalInput;
                if (! Number(input)) {
                    sign = input;
                }
                break;
        }
    });
}


$(document).ready(main);