/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2){
        return n;
    }

    let prev = 0;
    let curr = 1;
    let next;

    for (let i=2;i<=n;i++){
        next = curr + prev;
        prev = curr;
        curr = next;
    }

    return next;
};