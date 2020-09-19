let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
    let max_so_far = 0;
    let max_end_here = 0;

    for (let i = 0;i < array.length;i++){
        max_end_here = max_end_here + array[i];
        console.log(max_end_here);
        if(max_end_here < 0){
            max_end_here = 0;
        } 
        else if(max_so_far < max_end_here) {
            max_so_far = max_end_here;    
        } 
    }
    return max_so_far;
}

largestSubarraySum(array)
// 16