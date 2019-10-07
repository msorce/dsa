/* 
Here we are going to traverse a 2d array and just print out each value
*/

let grid = [
    [1,  2,  3,  4,  5],
    [6,  7,  8,  9,  10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 'o', 20]
];

// let grid = [[1,2, 3],
//             [4,5,'o'],
//             [7,8, 9]];

function bfs(root, grid, goal) {
    /* 
        we need to implement a queue,
        we are going to use the array data structure to do this
        note: queue is first in first out
        the front of the array is the left
        the back of the array is the right
        *add to the queue with: push()
        *remove from the front with: shift()
    */
    let queue = [];
    let seen = new Set();
    root.parent = null;
    seen.add("" + root);
    queue.push(root);
    

    
    while (queue.length != 0) {
        let r = queue.shift(); // remove from the front of the "queue"
        if (grid[r[0]][r[1]] === goal) {
            let path = []
            while (r.parent) {
                path.push([r[0], r[1]]);
                r = r.parent
            }
            path.push([r[0], r[1]]);
            console.log(path.reverse());
            return path;
        }
        
        let adjacent = [
            [r[0] - 1, r[1]],     //up
            [r[0]    , r[1] + 1], //right
            [r[0] + 1, r[1]],     //down
            [r[0]    , r[1] - 1], //left
        ]
        for (let n of adjacent) {
            if (n[0] >= 0 &&
                n[0] <= grid.length - 1 &&
                n[1] <= grid[0].length - 1 &&
                n[1] >= 0) {
                if (!seen.has("" + n)) {
                    seen.add("" + n);
                    n.parent = r;
                    queue.push(n);
                }
            }
        }
    }

}

bfs([0, 0], grid, 'o');
