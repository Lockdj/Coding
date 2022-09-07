function reverse(str) {

    let strSplit = str.split(" ");
    let strRevers = strSplit.reverse();
    let strJoin = strRevers.join(" ");

    return strJoin;
}
