/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 1. first lets find the break point
    // 2. then we need to find the next greater element from breaking index
    // 3. swap the breaking index element with the next greater element.
    // 4. and we need to sort or reverse the remaining (which will include the breaking index element as well)

    // eg : 2,1,5,4,3,0,0 breaking = 1

    let breakingIndex = -1, n = nums.length;

    for(let i=n-2;i>=0;i--){
        if(nums[i] < nums[i+1]){
            breakingIndex = i;
            break;
        }
    }

    if(breakingIndex === -1){
        nums.reverse();
        return;
    }

    let nextGreaterElement;

    for(let i=n-1;i>breakingIndex;i--){
        if(nums[i]>nums[breakingIndex]){
            nextGreaterElement = i;
            break;
        }
    }

    // swap it
    let temp = nums[breakingIndex];
    nums[breakingIndex] = nums[nextGreaterElement];
    nums[nextGreaterElement] = temp;

    // sort the array after the breakingIndex
    
    let tempArr = nums.slice(breakingIndex+1);
    
    // tempArr.sort((a, b) => a - b);
    tempArr.reverse();

    for(let i=0; i<tempArr.length; i++){
        nums[i + breakingIndex + 1 ] = tempArr[i];
    }

};