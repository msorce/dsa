/*  Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]


Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9
*/

/*
[1,0,1]

- iterate over each:
    - if it is a 0:
        - insert before
        - remove the last
    - else:
*/

/*
USEFUL NOTES, THIS IS WHAT I HAD TO JOG MY MEMORY ON
- how do you remove the last element? (pop shift?)
    to remove the last you pop
- how do you get the index when using the for of loop?
    its a combination of destructuring and the entries method!
    ie: for ([index, el] of arr.entries()) {

*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
};

const arr = [1,0,2,3,0,4,5,0];
// const arr = [1, 0, 2, 3];
duplicateZeros(arr);
console.log("arr", arr);
