function ask(question) {
    setTimeout(function waitASex() {
        console.log(question);
    }, 1000)
}

ask('What is closure?');

function ask1(question) {
    return function holdYourQuestion() {
        console.log(question);
    }
}

var myQuestion = ask1('What is closure in ask1?');

myQuestion();

var teacher = 'Kyle';

var myTeacher = function () {
    console.log(teacher);
};

teacher = 'Suzy';

myTeacher();

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(`i : ${i}`);
    }, i * 1000);
}
