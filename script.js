const flavorString = prompt(
  "Please enter a comma-separated list of froyo flavors.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee",
);
const flavors = flavorString.split(",");
const counts = count(flavors);
// console.table is a fancy way to print objects as a table
console.table(counts);

// Note: `count` can be called before it's declared because it's hoisted!

/**
 * @param {T[]} arr
 * @returns {{[element: T]: number}} the count of each unique element in `arr`
 */
function count(arr) {
  const counts = {};
  for (const element of arr) {
    if (element in counts) {
      counts[element] += 1;
    } else {
      counts[element] = 1;
    }
  }
  return counts;
}

// Same exact function - but using froyo-themed variable names.
function countFlavors(flavors) {
  const counts = {};
  for (const flavor of flavors) {
    if (flavor in counts) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
}
});
