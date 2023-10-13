//your code here
function findMajorityElement(arr) {
    var count = 0;
    var candidate = null;

    // Finding the candidate for majority element
    for (var i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
            count = 1;
        } else if (arr[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Verifying if the candidate is the majority element
    count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }

    // Checking if the candidate appears more than floor(n/2) times
    if (count > Math.floor(arr.length / 2)) {
        return candidate;
    } else {
        // Majority element always exists, so this line won't be reached
        return -1;
    }
}

// Example usage
var inputArray = [2, 1, 2];
var majorityElement = findMajorityElement(inputArray);
console.log(majorityElement); // Output: 2
	