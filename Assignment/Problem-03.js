function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }

  if (tokensUsed <= 500) {
    return 0;
  }
  let ExToken = tokensUsed - 500;

  let cost = Math.floor(ExToken / 100) * 5;

  return cost;
}
