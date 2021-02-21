
function basicOp (op, first, second) {
    let ans;
    switch (op) {
        case '+':
            ans= first+second;
            break;
        case '-':
            ans= first-second;
            break;    
        case '*':
            ans= first*second;
            break;
        case '/':
            ans= first/second;
            break;
        default:
            ans= 'sorry,bad input. try again';
            break;
    }
    return ans;
}

console.log(basicOp ('-',7,1));