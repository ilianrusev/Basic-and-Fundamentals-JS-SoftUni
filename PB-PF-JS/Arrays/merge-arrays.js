function solve(arr, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr3.push(Number(arr[i]) + Number(arr2[i]));

        } else {
            arr3.push(arr[i] + arr2[i]);
        }
    }
    console.log(arr3.join(' - '));

}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)