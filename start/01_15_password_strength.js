// Write your code here
function testStrength(pass) {
    const reqLower = /(?=.+[a-z])/;
    const reqUpper = /(?=.+[A-Z])/;
    const reqNum = /(?=.+[0-9])/;
    const reqSpecial = /(?=.+[`~!@#$%^&*()_+":?><])/;
    const minimumChar = /(?=.{8,})/;
    const isvalid = 
        reqLower.test(pass) &&
        reqUpper.test(pass) &&
        reqNum.test(pass) &&
        reqSpecial.test(pass) &&
        minimumChar.test(pass);

    return isvalid ? "Your password is valid!" : "Your password isn't valid";
}

console.log(testStrength('majaMarijana#112'));
