const test1 = [3, 5, -4, 8, 11, 1, -1, 6];

function TwoNumberSum(list, target) {
    for (number in list) {
        const sum = target - number;

        if (sum === number) {
            continue;
        }

        if (list.includes(sum)) {
            return [number, sum];
        } 
    }

      return [];
}

console.log(TwoNumberSum(test1, 10));
