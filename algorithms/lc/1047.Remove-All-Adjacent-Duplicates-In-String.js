function removeDuplicates(S) {
    const stack = [];
    for (char of S) {
        console.log(stack);
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}

console.log(removeDuplicates('abbaca'))
/* 
[]
[ 'a' ]
[ 'a', 'b' ]
[ 'a' ]
[]
[ 'c' ]
ca
*/
