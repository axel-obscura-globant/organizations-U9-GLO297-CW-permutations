function isSameTree(p, q) {
  // Base case:
  // If both trees are null, they are considered the same
  if (p === null && q === null) {
    return true;
  }

  // If one of the trees is null and the other is not, they are not the same
  if (p === null || q === null) {
    return false;
  }

  // If the values are not equal, they are not the same
  if (p.val !== q.val) {
    return false;
  }

  // Recursively check if the left and right subtrees are the same
  const isLeftSame = isSameTree(p.left, q.left);
  const isRightSame = isSameTree(p.right, q.right);

  // Return true only if both the left and right subtrees are the same
  return isLeftSame && isRightSame;
}
