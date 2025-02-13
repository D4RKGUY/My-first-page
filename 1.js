function Odd_Even_Retr (num1) {
        if (num1===0) {
        return 'zero';
        }
        else if (num1 % 2===0) {
        return 'even';
        }
        else {
        return 'odd';
        }
    }
    let Nu = prompt ("enter a number to check if odd or even!");
    let Nu1 = Number(Nu);
    let An = Odd_Even_Retr (Nu1);
    document.write ("The number " + Nu1 + " is " + An);
