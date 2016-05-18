function fizzbuzz(num) {
    for (var i = 1; i <= num; i++) {

        var result = i;
        console.log(result);
        if (i % 3 == 0) {
            result = "Fizz";
        }
        if (i % 5 == 0) {
            result = "Buzz";
        }
        if ((i % 5 == 0) && (i % 3 == 0)) {
            result = "FizzBuzz";
        }
        $('.list').append("<li>" + result + "</li>");
    }
}

$(document).ready(function () {

    $('.submit').click(function () {
        var input = parseInt($('.input-num').val());
        if (!input) {
            alert("Please enter a valid whole number");
        }
        $('.list').empty();
        fizzbuzz(input);
    });
});
