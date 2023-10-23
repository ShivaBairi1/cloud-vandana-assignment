function sortArrayDescending(arr) {
    return arr.sort(function(a, b) {
        return b - a;
    });
}

var numbers = [5, 2, 9, 1, 5, 6];
var sortedDescending = sortArrayDescending(numbers);
console.log(sortedDescending);
