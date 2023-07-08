var workshop = (function Module(teacher) {
    var publicAPI = { ask, };
    return publicAPI;

    function ask(question) {
        console.log(teacher, question);
    }
})('Kyle');

workshop.ask('It\'s a module, right?');

function WorkshopModule(teacher){
    var publicAPI = {ask,sayHello};
    return publicAPI;

    function ask(question){
        console.log(teacher,question);
    }
    function sayHello(){
        console.log('Hello',teacher);
    }
};

var workshop1 = WorkshopModule('Suzy');

workshop1.ask("It's a module, right?");
workshop1.sayHello();

