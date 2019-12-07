const ranges = [
	[ 5, 15 ],
	[ 12, 20 ],
	[ 25, 45 ]
];

function merge( intervals ) {
	/*
	 If the ranges (intervals) are empty then return the intervals
	*/
	if ( !intervals.length ) {
		return intervals;
	}

	/*
		Sort the intervals based on the item in the 0th index of each interval.
	*/
	intervals.sort( ( a, b ) => a[ 0 ] - b[ 0 ] );

	/*
		the previous is init at the first range
	*/
	let prev = intervals[ 0 ];

	/*
		the res is init to prev (init at first range)
		this stands for result
	*/
	let res = [ prev ];

	/*
		loop through intervals
		for each one,
		- if the current[0] (min) is less that
		the previous max, just update the previous max with the max of the 2 values
		- otherwise push current to res
		and set previous to current
	*/

	for ( let curr of intervals ) {
		// console.log("is curr[0] less or equal to prev[1]")
		// console.log("curr 0: ",curr[0]);
		// console.log("prev 1: ", prev[1]);
		/*
		is current[0] (current interval, 0th index)
		less or equal to prev[1] ?
		*/
		if ( curr[ 0 ] <= prev[ 1 ] ) {
			// console.log("yes prev[1] = the max of prev[1] or current[1]")
			prev[ 1 ] = Math.max( prev[ 1 ], curr[ 1 ] );
		} else {
			/*
			- otherwise push current to res
			  and set previous to current */

			// console.log("no")
			// console.log("push curr to res")
			res.push( curr );
			prev = curr;
		}

	}

	res.forEach( e => console.log( e ) );
	return res;
}
console.log( merge( ranges ) );
