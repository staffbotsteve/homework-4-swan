function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var spCharStr = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var spCharList = spCharStr.split("");
var numCharStr = "0123456789";
var numCharList = numCharStr.split("");
var lwrCharStr = "abcdefghijklmnopqrstuvwxyz";
var lwrCharList = lwrCharStr.split("");
var uprCharStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uprCharList = uprCharStr.split("");


var spChar = spCharList[getRandomInt(spCharStr.length)];
var numChar = numCharList[getRandomInt(numCharStr.length)];
var lwrChar = lwrCharList[getRandomInt(numCharStr.length)];
var uprChar = uprCharList[getRandomInt(numCharStr.length)];

var pwdLength = prompt("Enter how long you would like your password to be (must be between 8-128 characters", "");
while (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
    pwdLength = prompt("ERROR: Enter how long you would like your password to be (MUST be between 8-128 characters", "");
}

pwdLength = pwdLength - 4;

var numSpChar = Math.floor(Math.random() * pwdLength);
console.log('numSpChar', numSpChar);

var numNumChar = Math.floor(Math.random() * (pwdLength - numSpChar));
console.log('numNumChar', numNumChar);

var numLwrChar = Math.floor(Math.random() * (pwdLength - numSpChar - numNumChar));
console.log('numLwrChar', numLwrChar);

var numUprChar = (pwdLength - numSpChar - numNumChar - numLwrChar);
console.log('numUprChar', numUprChar);

for (let index = 0; index < numSpChar; index++) {
    spChar = spChar + spCharStr[Math.floor(Math.random() * spCharStr.length)];
}
console.log('spChar', spChar);

for (let index = 0; index < numNumChar; index++) {
    numChar = numChar + numCharStr[Math.floor(Math.random() * numCharStr.length)];
}
console.log('numChar', numChar);

for (let index = 0; index < numLwrChar; index++) {
    lwrChar = lwrChar + lwrCharStr[Math.floor(Math.random() * lwrCharStr.length)];
}
console.log('lwrChar', lwrChar);

for (let index = 0; index < numUprChar; index++) {
    uprChar = uprChar + uprCharStr[Math.floor(Math.random() * uprCharStr.length)];
}
console.log('uprChar', uprChar);

passwordString = spChar + numChar + lwrChar + uprChar;
console.log('passwordString', passwordString)

String.prototype.shuffle = function() {
    var a = passwordString.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
var inputTags = document.querySelectorAll("input");
inputTags[0].setAttribute("value", passwordString);


console.log('inputTags', inputTags[0]);
console.log('inputTagsValue', inputTags[0].value);

var btns = document.querySelectorAll('button');
target: function() {
return document.querySelector('input');
}
});

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});