let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
    let current_sum = 0;
    let max_sum = 0;

    for (let i = 0;i < array.length;i++){
        let currentNum =  array[i];

        current_sum = Math.max((current_sum + currentNum), 0)

        max_sum = Math.max(current_sum, max_sum)
    }
    return max_sum
}

largestSubarraySum(array)