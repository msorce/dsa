/* 
Given integer ranges in a positive integer space (e.g. 5-15, 12-20, 25-45), 
how do you add the distance up without overlapping the numbers?
*/
/* 
if the end value of previous range is larger than current range
use the previous range end for the current range start
*/

const ranges = [ [5,15], [12,20], [25,45] ];

function sumOverlappingRanges( ranges ) {
    
}

console.log(sumOverlappingRanges(ranges));
