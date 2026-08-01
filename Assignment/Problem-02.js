arr = [60, 75, 500];

function isElevatorSafe(weights) {
 if (!Array.isArray(weights)) {
    return "Invalid";
  }
  let totalWeight = 0;
  for (let i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
  }
  if (totalWeight > 400) {
    return false;
  }
  return true;
}

console.log(isElevatorSafe(arr));
