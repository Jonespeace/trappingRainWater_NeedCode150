function trap(height) {
    // Check if the input array is empty or has less than 3 elements
    if (!height || height.length < 3) {
        return 0; // Cannot trap water with less than 3 bars
    }

    const n = height.length;
    let leftMax = Array(n).fill(0); // Array to store the maximum height to the left of each bar
    let rightMax = Array(n).fill(0); // Array to store the maximum height to the right of each bar
    let trappedWater = 0;

    // Initialize the leftMax array
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Initialize the rightMax array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate trapped water for each bar
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return trappedWater;
}

// Example usage:
const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(heights);
console.log(result); // Output: 6
