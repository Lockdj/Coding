function highAndLow(numbers) {

    let arrStr = (numbers);
    let arrNum = arrStr.split(" ").map(Number);

    let maxArr = Math.max.apply(null, arrNum);
    let minArr = Math.min.apply(null, arrNum);

    return maxArr + " " + minArr;
}
