function argumentTest() {
    console.log(arguments);

    for(arg of arguments) {
        console.log(arg);
    }
}

argumentTest('hi', 'hello', 'bye'); 