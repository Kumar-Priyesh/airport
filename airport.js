/**
 * Calculates the minimum number of planes required to cover the given array.
 * Each value in the array represents the maximum distance that can be covered from that position.
 * @param {number[]} airport - Array of integers representing airport having planes with some fuel at each position.
 * @returns {number} Minimum number of planes required to reach the last airport, or -1 if not possible.
 */
function minPlanesRequirement(airport) {
    // Initialize variables
    let maxCoverage = 0; // //To keep track of the maximum index reached from a given window
    let totalPlanes = 0; //to track the no of planes needed to reach the current index
    let lastIndex = 0;   // Last index of a window covered by the plane from current index
    const destinationIndex = airport.length - 1; // Destination index
    
    // If there is only one position, no planes are needed
    if (airport.length === 1) {
        return 0;
    }
    
    // Iterate through the array
    for (let index = 0; index < airport.length; index++) {
        // Update the maximum coverage
        maxCoverage = Math.max(maxCoverage, index + airport[index]);
        
        // If the current index is the last index reached by a plane
        if (index === lastIndex) {
            // Update the last index reached by a plane
            lastIndex = maxCoverage;
            // Increment the total number of planes used
            totalPlanes++;
            
            // If the maximum coverage is beyond or equal to the destination index,
            // it means we can reach the destination, return the total number of planes used
            if (maxCoverage >= destinationIndex) {
                return totalPlanes;
            }
        }
    }
    
    // If it's not possible to reach the end of the array
    return -1;
}

// Example usage:
console.log(minPlanesRequirement([1,6,3,4,5,0,0,0,6])); // Output: 3
console.log(minPlanesRequirement([2,1,2,3,1])); //Output :2
