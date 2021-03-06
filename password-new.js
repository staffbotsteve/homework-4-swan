// this function is used throughout to get a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

// create arrays for each of the four passowrd types 
var spCharStr = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var spCharList = spCharStr.split("");
var numCharStr = "0123456789";
var numCharList = numCharStr.split("");
var lwrCharStr = "abcdefghijklmnopqrstuvwxyz";
var lwrCharList = lwrCharStr.split("");
var uprCharStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uprCharList = uprCharStr.split("");

// grab the document objects that are needed
var spCharCheckEl = document.querySelector("input[id=spCharCheck]");
var numCharCheckEl = document.querySelector("input[id=numCharCheck]");
var lwrCharCheckEl = document.querySelector("input[id=lwrCharCheck]");
var uprCharCheckEl = document.querySelector("input[id=uprCharCheck]");
var slideEl = document.querySelector("#pwdRangeSlider");
var copyPwdEl = document.querySelector("#copyPwd");
var genPwdEl = document.querySelector("#genPwd");
var pwdRangeDisplayEl = document.querySelector("#pwdRangeDisplay");
var inputTags = document.querySelectorAll("input");
var passwordValueEl = document.querySelector("#passwordValue");
var passwordString = "";

// get which of the chackboxes are 'checked'
spCharCheckEl.addEventListener('change', function() {
    if (this.checked) {
        spCharCheckEl.setAttribute("data-check", "yes")
    } else {
        spCharCheckEl.setAttribute("data-check", "no")
    };
});

numCharCheckEl.addEventListener('change', function() {
    if (this.checked) {
        numCharCheckEl.setAttribute("data-check", "yes")
    } else {
        numCharCheckEl.setAttribute("data-check", "no")
    };
});

lwrCharCheckEl.addEventListener('change', function() {
    if (this.checked) {
        lwrCharCheckEl.setAttribute("data-check", "yes")
    } else {
        lwrCharCheckEl.setAttribute("data-check", "no")
    };
});
uprCharCheckEl.addEventListener('change', function() {
    if (this.checked) {
        uprCharCheckEl.setAttribute("data-check", "yes")
    } else {
        uprCharCheckEl.setAttribute("data-check", "no")
    };
});

// Copy Password value
copyPwdEl.addEventListener('click', function(event) {
    event.preventDefault();
    var copyTextarea = document.querySelector('.form-control');
    copyTextarea.focus();
    copyTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
});

// Generate Password
genPwdEl.addEventListener('click', function(event) {
    event.preventDefault();
    var spCheck = spCharCheckEl.getAttribute("data-check");
    var numCheck = numCharCheckEl.getAttribute("data-check");
    var lwrCheck = lwrCharCheckEl.getAttribute("data-check");
    var uprCheck = uprCharCheckEl.getAttribute("data-check");
    var initialLength = 0;

    if (spCheck = "yes") {
        initialLength = initialLength + 1;
        console.log('initialLength', initialLength);
    };
    if (numCheck = "yes") {
        initialLength = initialLength + 1;
        console.log('initialLength', initialLength);
    };

    var spChar = spCharList[getRandomInt(spCharStr.length)];
    var numChar = numCharList[getRandomInt(numCharStr.length)];
    var lwrChar = lwrCharList[getRandomInt(numCharStr.length)];
    var uprChar = uprCharList[getRandomInt(numCharStr.length)];
    // I know these are redundant but i cannot figure out why it is not erasing the value that is set there
    passwordString = "";
    passwordValueEl.setAttribute("value", passwordString);

    var pwdLength = 0;
    var initialPwdLength = 0;

    pwdLength = prompt("Enter how long you would like your password to be (must be between 8-128 characters", "");
    while (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
        pwdLength = prompt("ERROR: Enter how long you would like your password to be (MUST be between 8-128 characters", "");
    }
    console.log('pwdLength - prompt', pwdLength);
    initialPwdLength = pwdLength;
    console.log('initialPwdLength', initialPwdLength)
    pwdLength = initialPwdLength - 4;
    console.log('pwdLength - 4', pwdLength);

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
    passwordString = spChar + numChar + lwrChar + uprChar;
    passwordString = passwordString.shuffle();
    inputTags[0].setAttribute("value", passwordString);
    document.getElementById('pwdRangeDisplay').innerHTML = initialPwdLength;
});