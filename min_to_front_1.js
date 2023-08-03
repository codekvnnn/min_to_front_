function moveLowestToFront(array) {
  // Step 1: Find the index of the minimum element
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }

  // Step 2: Create a new array with the minimum element at the front
  const newArray = [array[minIndex]];

  // Step 3: Iterate over the original array and copy its elements to the new array, skipping the minimum element
  for (let i = 0; i < array.length; i++) {
    if (i !== minIndex) {
      newArray.push(array[i]);
    }
  }

  // Step 4: Assign the new array back to the original array
  for (let i = 0; i < newArray.length; i++) {
    array[i] = newArray[i];
  }

  array.length = newArray.length; // Ensure the array length is correct after the move
}

// Example usage:
const myArray = [4, 2, 1, 3, 5];
moveLowestToFront(myArray);
console.log(myArray); // Output: [1, 4, 2, 3, 5]
