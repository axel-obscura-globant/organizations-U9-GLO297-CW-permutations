function permute(nums){
  const result = [];

  function tracker(current, remaining){
    if(remaining.length === 0){
      result.push(current.slice());
    }

    for(let i = 0; i < remaining.length; i++){
      current.push(remaining[i]);
      const newRemaining = remaining.filter((_, index) => index !== i);
      tracker(current, newRemaining);
      current.pop();
    }
  }

  tracker([], nums);
  return result;
}

const nums = [1,2,3];
const permutations = permute(nums);
console.log(permutations);
