/* 
Given integer ranges in a positive integer space (e.g. 5-15, 12-20, 25-45), 
how do you add the distance up without overlapping the numbers?
*/
/* 
if the end value of previous range is larger than current range
use the previous range end for the current range start
*/

const ranges = [
    [5, 15],
    [12, 20],
    [25, 45]
];

function merge(intervals) {

    if (!intervals.length) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let res = [prev];
    for (let curr of intervals) {
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            res.push(curr);
            prev = curr;
        }
    }
    return res;
}

console.log(merge(ranges))
