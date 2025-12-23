// Two Sum

var twoSum = function(nums, target) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        arr.push({key: i, value: nums[i]});
    }

    arr.sort((a,b)=> a.value - b.value);

    let i=0, j = arr.length-1;

    while(i<j){
        if(arr[i].value + arr[j].value === target){
            return [arr[i].key,arr[j].key];
        }
        if(arr[i].value + arr[j].value > target){
            j--;
        }
        else{
            i++;
        }
    }
};

var optimisedTwoSum = function(nums, target) {
    let mp = new Map();
    mp.set(nums[0],0);
    for(let i=1;i<nums.length;i++){
        if(mp.has(target-nums[i])){
            return [mp.get(target-nums[i]), i];
        }
        else{
            mp.set(nums[i], i);
        }
    }
    return [];
};