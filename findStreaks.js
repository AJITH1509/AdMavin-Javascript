//  Implement a Javascript method “findMaxStreaks“. The method takes an integer array of any
// length greater than 1 and returns an object having values for keys maxPositiveStreak and
// maxNegativeStreak for the largest positive integer streak and largest negative integers streak
// respectively.

let intArray = [-1, -3, 2, 4, 9, -10, 24, -30, -33, -29, 1, 8, 19, 23];

// Expected Output
// {
// ‘maxPositiveStreak’ : 4,
// ‘maxNegativeStreak’ : 3
// }

const findStreaks = (arr) => {
  let maxPositiveStreak = 0;
  let maxNegativeStreak = 0;
  let currentPositiveStreak = 0;
  let currentNegativeStreak = 0;

  for (let i = 0; i < arr.length; i++) {
    //check for positive
    if (arr[i] > 0) {
      currentNegativeStreak = 0;

      currentPositiveStreak++;

      if (currentPositiveStreak > maxPositiveStreak) {
        maxPositiveStreak = currentPositiveStreak;
      }
      //check for negative
    } else if (arr[i] < 0) {
      currentPositiveStreak = 0;

      currentNegativeStreak++;

      if (currentNegativeStreak > maxNegativeStreak) {
        maxNegativeStreak = currentNegativeStreak;
      }
    }
  }
  return {
    maxPositiveStreak,
    maxNegativeStreak,
  };
};
console.log(findStreaks(intArray));
