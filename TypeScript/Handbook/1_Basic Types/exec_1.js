var demo_01_01;
(function (demo_01_01) {
    let isDone = false;
    console.log(isDone);
    let decimal = 6;
    let hex = 0xf00d;
    let binary = 0b1010;
    let octal = 0o744;
    // let big: bigint = 100n;
    // console.log(big);
    // -t es2020
    let color = 'blue';
    color = 'red';
    let fullName = `Bob Bobbington`;
    let age = 37;
    let sentence = `Hellow, my name is ${fullName}.

	I'll be ${age + 1} years old next month.`;
    console.log(sentence);
})(demo_01_01 || (demo_01_01 = {}));
