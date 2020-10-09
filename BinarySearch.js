//leetcode october challenge problem of binary search
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start=0, end=nums.length-1;
    var flag=false;
    while(start<=end)
        {
            let mid=Math.floor((start+end)/2);
            if(target==nums[mid])
                {
                    flag=true;
                    return mid;
                }
            else if(target> nums[mid])
              {  
                start=mid+1;
               // end=end;
            }
            else if(target< nums[mid]){
                end=mid-1;
            }
        }
    if(flag==false)
        {
            return -1;
        }
    //return -1;
};